"use strict";
n.d(t, { K: () => _, Tu: () => O, g0: () => I, t0: () => f, wv: () => S, yL: () => h }), n(321073);
var i = n(812729),
    r = n.n(i),
    a = n(869484),
    s = n(540185),
    l = n(287809),
    o = n(403362),
    d = n(474090),
    c = n(202541),
    u = n(375708);
function _() {
    return { type: a.K.COVER, title: "", subtitle: "" };
}
let E = 0;
function A() {
    return `field-${E++}`;
}
function h() {
    return { key: A(), title: "", description: "" };
}
function I() {
    return new O({
        header: u.intl.string(u.t.QxKl9A),
        sections: [_(), { type: a.K.FIELDS, fields: [h(), h(), h(), h()] }],
    });
}
function f() {
    return 17907264e5 > Date.now();
}
function p(e) {
    return "" === e.title.trim() && "" === e.description.trim() && null == e.image;
}
function T(e) {
    switch (e.type) {
        case a.K.COVER:
            return "" === e.title.trim() && "" === e.subtitle.trim() && null == e.image;
        case a.K.FIELDS:
            return e.fields.every(p);
    }
}
function m(e) {
    if (null != e && "file_id" in e)
        return { fileId: e.file_id, width: e.width, height: e.height, isAnimated: e.is_animated ?? !1 };
}
function g(e) {
    let t = m(e.image);
    return {
        key: A(),
        title: e.title ?? "",
        description: e.description ?? "",
        image: t,
        hideImage: null == t || void 0,
    };
}
function S(e) {
    var t;
    let n =
        null == (t = e)
            ? []
            : t
                  .map((e) => {
                      switch (e.type) {
                          case a.K.COVER:
                              return {
                                  type: e.type,
                                  title: e.title ?? "",
                                  subtitle: e.subtitle ?? "",
                                  image: m(e.image),
                              };
                          case a.K.FIELDS:
                              return { type: e.type, fields: e.fields.map(g) };
                          default:
                              return;
                      }
                  })
                  .filter(o.Vq);
    return n.some((e) => e.type === a.K.FIELDS) || n.push({ type: a.K.FIELDS, fields: [] }), n;
}
function N(e) {
    if (null != e)
        return "localDataUri" in e
            ? { filename: e.filename }
            : { file_id: e.fileId, width: e.width, height: e.height, is_animated: e.isAnimated };
}
function C(e) {
    switch (e.type) {
        case a.K.COVER:
            return { type: e.type, title: e.title, subtitle: e.subtitle, image: N(e.image) };
        case a.K.FIELDS: {
            let t = e.fields
                .filter((e) => !p(e))
                .map((e) => ({ title: e.title, description: e.description, image: N(e.image) }));
            return { type: e.type, fields: t };
        }
        default:
            return e;
    }
}
class O {
    id;
    type;
    header;
    sections;
    constructor({ id: e, header: t, sections: n }) {
        (this.id = e), (this.type = s.x.PERSONAL), (this.header = t ?? ""), (this.sections = n ?? []);
    }
    toSubmission() {
        return {
            id: this.id,
            data: {
                type: this.type,
                header: this.header,
                sections: this.sections
                    .filter((e) => !T(e))
                    .map(C)
                    .filter(o.Vq),
            },
        };
    }
    isDiscardable() {
        return this.sections.every(T);
    }
    isValid() {
        return this.sections.some((e) => !T(e));
    }
    isUpdatable() {
        return (0, d.ki)(l.default.getCurrentUser(), c.PremiumTypes.TIER_2);
    }
    isEqual(e) {
        return (
            e instanceof O &&
            this.header === e.header &&
            (function (e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++) {
                    let i = e[n],
                        s = t[n];
                    if (i.type !== s.type) return !1;
                    switch (i.type) {
                        case a.K.COVER:
                            if (!(i.title === s.title && i.subtitle === s.subtitle && r()(i.image, s.image))) return !1;
                            break;
                        case a.K.FIELDS:
                            if (
                                !(function (e, t) {
                                    if (e.fields.length !== t.fields.length) return !1;
                                    for (let a = 0; a < e.fields.length; a++) {
                                        var n, i;
                                        if (
                                            ((n = e.fields[a]),
                                            (i = t.fields[a]),
                                            !(
                                                n.title === i.title &&
                                                n.description === i.description &&
                                                r()(n.image, i.image)
                                            ))
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(i, s)
                            )
                                return !1;
                            break;
                        default:
                            if (!r()(i, s)) return !1;
                    }
                }
                return !0;
            })(this.sections, e.sections)
        );
    }
    getUniqueKey() {
        return this.type;
    }
    getProfileAnalyticsOptions() {
        return { widgetType: this.type };
    }
    getProfileEditAnalyticsOptions() {
        return { widgetEdited: this.type };
    }
}
