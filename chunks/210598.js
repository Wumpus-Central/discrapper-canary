"use strict";
n.d(t, { K: () => o, Tu: () => m, g0: () => _, wv: () => f, yL: () => u });
var i = n(812729),
    r = n.n(i),
    a = n(869484),
    s = n(540185),
    l = n(403362);
function o() {
    return { type: a.K.COVER, title: "", subtitle: "" };
}
let d = 0;
function c() {
    return `field-${d++}`;
}
function u() {
    return { key: c(), title: "", description: "" };
}
function _() {
    return new m({ sections: [o(), { type: a.K.FIELDS, fields: [u()] }] });
}
function E(e) {
    return "" === e.title.trim() && "" === e.description.trim() && null == e.image;
}
function A(e) {
    switch (e.type) {
        case a.K.COVER:
            return "" === e.title.trim() && "" === e.subtitle.trim() && null == e.image;
        case a.K.FIELDS:
            return e.fields.every(E);
    }
}
function h(e) {
    if (null != e && "file_id" in e) return { fileId: e.file_id, width: e.width, height: e.height };
}
function I(e) {
    let t = h(e.image);
    return {
        key: c(),
        title: e.title ?? "",
        description: e.description ?? "",
        image: t,
        hideImage: null == t || void 0,
    };
}
function f(e) {
    return null == e
        ? []
        : e
              .map((e) => {
                  switch (e.type) {
                      case a.K.COVER:
                          return { type: e.type, title: e.title ?? "", subtitle: e.subtitle ?? "", image: h(e.image) };
                      case a.K.FIELDS:
                          return { type: e.type, fields: e.fields.map(I) };
                      default:
                          return;
                  }
              })
              .filter(l.Vq);
}
function p(e) {
    if (null != e)
        return "localDataUri" in e ? { filename: e.filename } : { file_id: e.fileId, width: e.width, height: e.height };
}
function T(e) {
    switch (e.type) {
        case a.K.COVER:
            return { type: e.type, title: e.title, subtitle: e.subtitle, image: p(e.image) };
        case a.K.FIELDS: {
            let t = e.fields
                .filter((e) => !E(e))
                .map((e) => ({ title: e.title, description: e.description, image: p(e.image) }));
            return { type: e.type, fields: t };
        }
        default:
            return e;
    }
}
class m {
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
            data: { type: this.type, header: this.header, sections: this.sections.map(T).filter(l.Vq) },
        };
    }
    isDiscardable() {
        return "" === this.header.trim() && this.sections.every(A);
    }
    isValid() {
        return !this.isDiscardable();
    }
    isEqual(e) {
        return (
            e instanceof m &&
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
