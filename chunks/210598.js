n.d(t, { K: () => E, Tu: () => R, g0: () => f, t0: () => p, wv: () => N, yL: () => I }), n(321073);
var i = n(812729),
    r = n.n(i),
    a = n(869484),
    s = n(540185),
    l = n(554146),
    o = n(826673),
    d = n(287809),
    c = n(403362),
    u = n(474090),
    _ = n(202541);
function E() {
    return { type: a.K.COVER, title: "", subtitle: "" };
}
let A = 0;
function h() {
    return `field-${A++}`;
}
function I() {
    return { key: h(), title: "", description: "" };
}
function f() {
    return new R({ header: "", sections: [E(), { type: a.K.FIELDS, fields: [I(), I(), I(), I()] }] });
}
function p() {
    return !(0, o.k8)(l.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE);
}
function T(e) {
    return "" === e.title.trim() && "" === e.description.trim() && null == e.image;
}
function m(e) {
    switch (e.type) {
        case a.K.COVER:
            return "" === e.title.trim() && "" === e.subtitle.trim() && null == e.image;
        case a.K.FIELDS:
            return e.fields.every(T);
    }
}
function g(e) {
    if (null != e && "file_id" in e)
        return { fileId: e.file_id, width: e.width, height: e.height, isAnimated: e.is_animated ?? !1 };
}
function S(e) {
    let t = g(e.image);
    return {
        key: h(),
        title: e.title ?? "",
        description: e.description ?? "",
        image: t,
        hideImage: null == t || void 0,
    };
}
function N(e) {
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
                                  image: g(e.image),
                              };
                          case a.K.FIELDS:
                              return { type: e.type, fields: e.fields.map(S) };
                          default:
                              return;
                      }
                  })
                  .filter(c.Vq);
    return n.some((e) => e.type === a.K.FIELDS) || n.push({ type: a.K.FIELDS, fields: [] }), n;
}
function C(e) {
    if (null != e)
        return "localDataUri" in e
            ? { filename: e.filename }
            : { file_id: e.fileId, width: e.width, height: e.height, is_animated: e.isAnimated };
}
function O(e) {
    switch (e.type) {
        case a.K.COVER:
            return { type: e.type, title: e.title, subtitle: e.subtitle, image: C(e.image) };
        case a.K.FIELDS: {
            let t = e.fields
                .filter((e) => !T(e))
                .map((e) => ({ title: e.title, description: e.description, image: C(e.image) }));
            return { type: e.type, fields: t };
        }
        default:
            return e;
    }
}
class R {
    id;
    type;
    header;
    sections;
    constructor({ id: e, header: t, sections: n }) {
        (this.id = e), (this.type = s.x.PERSONAL), (this.header = t), (this.sections = n ?? []);
    }
    toSubmission() {
        return {
            id: this.id,
            data: {
                type: this.type,
                header: this.header,
                sections: this.sections
                    .filter((e) => !m(e))
                    .map(O)
                    .filter(c.Vq),
            },
        };
    }
    isDiscardable() {
        return this.sections.every(m);
    }
    isValid() {
        return "" !== this.header.trim() && this.sections.some((e) => !m(e));
    }
    isUpdatable() {
        return (0, u.ki)(d.default.getCurrentUser(), _.PremiumTypes.TIER_2);
    }
    isEqual(e) {
        return (
            e instanceof R &&
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
