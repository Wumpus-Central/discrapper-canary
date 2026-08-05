"use strict";
n.d(t, { K: () => d, Tu: () => g, g0: () => E, wv: () => p, yL: () => _ }), n(321073);
var i = n(812729),
    r = n.n(i),
    a = n(869484),
    s = n(540185),
    l = n(403362),
    o = n(375708);
function d() {
    return { type: a.K.COVER, title: "", subtitle: "" };
}
let c = 0;
function u() {
    return `field-${c++}`;
}
function _() {
    return { key: u(), title: "", description: "" };
}
function E() {
    return new g({ header: o.intl.string(o.t.QxKl9A), sections: [d(), { type: a.K.FIELDS, fields: [_()] }] });
}
function A(e) {
    return "" === e.title.trim() && "" === e.description.trim() && null == e.image;
}
function h(e) {
    switch (e.type) {
        case a.K.COVER:
            return "" === e.title.trim() && "" === e.subtitle.trim() && null == e.image;
        case a.K.FIELDS:
            return e.fields.every(A);
    }
}
function I(e) {
    if (null != e && "file_id" in e) return { fileId: e.file_id, width: e.width, height: e.height };
}
function f(e) {
    let t = I(e.image);
    return {
        key: u(),
        title: e.title ?? "",
        description: e.description ?? "",
        image: t,
        hideImage: null == t || void 0,
    };
}
function p(e) {
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
                                  image: I(e.image),
                              };
                          case a.K.FIELDS:
                              return { type: e.type, fields: e.fields.map(f) };
                          default:
                              return;
                      }
                  })
                  .filter(l.Vq);
    return n.some((e) => e.type === a.K.FIELDS) || n.push({ type: a.K.FIELDS, fields: [] }), n;
}
function T(e) {
    if (null != e)
        return "localDataUri" in e ? { filename: e.filename } : { file_id: e.fileId, width: e.width, height: e.height };
}
function m(e) {
    switch (e.type) {
        case a.K.COVER:
            return { type: e.type, title: e.title, subtitle: e.subtitle, image: T(e.image) };
        case a.K.FIELDS: {
            let t = e.fields
                .filter((e) => !A(e))
                .map((e) => ({ title: e.title, description: e.description, image: T(e.image) }));
            return { type: e.type, fields: t };
        }
        default:
            return e;
    }
}
class g {
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
                    .filter((e) => !h(e))
                    .map(m)
                    .filter(l.Vq),
            },
        };
    }
    isDiscardable() {
        return this.sections.every(h);
    }
    isValid() {
        return this.sections.some((e) => !h(e));
    }
    isEqual(e) {
        return (
            e instanceof g &&
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
