"use strict";
n.d(t, { wv: () => A, Tu: () => f });
var i,
    r = n(812729),
    a = n.n(r),
    s = (((i = {}).COVER = "cover"), (i.FIELDS = "fields"), i),
    l = n(540185),
    o = n(403362);
let d = 0;
function c(e) {
    return "" === e.title.trim() && "" === e.description.trim() && null == e.image;
}
function u(e) {
    switch (e.type) {
        case s.COVER:
            return "" === e.title.trim() && "" === e.subtitle.trim() && null == e.image;
        case s.FIELDS:
            return e.fields.every(c);
    }
}
function _(e) {
    if (null != e && "file_id" in e) return { fileId: e.file_id, width: e.width, height: e.height };
}
function E(e) {
    let t = _(e.image);
    return {
        key: `field-${d++}`,
        title: e.title ?? "",
        description: e.description ?? "",
        image: t,
        hideImage: null == t || void 0,
    };
}
function A(e) {
    return null == e
        ? []
        : e
              .map((e) => {
                  switch (e.type) {
                      case s.COVER:
                          return { type: e.type, title: e.title ?? "", subtitle: e.subtitle ?? "", image: _(e.image) };
                      case s.FIELDS:
                          return { type: e.type, fields: e.fields.map(E) };
                      default:
                          return;
                  }
              })
              .filter(o.Vq);
}
function h(e) {
    if (null != e)
        return "localDataUri" in e ? { filename: e.filename } : { file_id: e.fileId, width: e.width, height: e.height };
}
function I(e) {
    switch (e.type) {
        case s.COVER:
            return { type: e.type, title: e.title, subtitle: e.subtitle, image: h(e.image) };
        case s.FIELDS: {
            let t = e.fields
                .filter((e) => !c(e))
                .map((e) => ({ title: e.title, description: e.description, image: h(e.image) }));
            return { type: e.type, fields: t };
        }
        default:
            return e;
    }
}
class f {
    id;
    type;
    header;
    sections;
    constructor({ id: e, header: t, sections: n }) {
        (this.id = e), (this.type = l.x.PERSONAL), (this.header = t ?? ""), (this.sections = n ?? []);
    }
    toSubmission() {
        return {
            id: this.id,
            data: { type: this.type, header: this.header, sections: this.sections.map(I).filter(o.Vq) },
        };
    }
    isDiscardable() {
        return "" === this.header.trim() && this.sections.every(u);
    }
    isValid() {
        return !this.isDiscardable();
    }
    isEqual(e) {
        return (
            e instanceof f &&
            this.header === e.header &&
            (function (e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++) {
                    let i = e[n],
                        r = t[n];
                    if (i.type !== r.type) return !1;
                    switch (i.type) {
                        case s.COVER:
                            if (!(i.title === r.title && i.subtitle === r.subtitle && a()(i.image, r.image))) return !1;
                            break;
                        case s.FIELDS:
                            if (
                                !(function (e, t) {
                                    if (e.fields.length !== t.fields.length) return !1;
                                    for (let r = 0; r < e.fields.length; r++) {
                                        var n, i;
                                        if (
                                            ((n = e.fields[r]),
                                            (i = t.fields[r]),
                                            !(
                                                n.title === i.title &&
                                                n.description === i.description &&
                                                a()(n.image, i.image)
                                            ))
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(i, r)
                            )
                                return !1;
                            break;
                        default:
                            if (!a()(i, r)) return !1;
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
