"use strict";
n.d(t, { wv: () => E, Tu: () => I });
var i,
    r = n(812729),
    a = n.n(r),
    s = (((i = {}).COVER = "cover"), (i.FIELDS = "fields"), i),
    l = n(540185),
    o = n(403362);
function d(e) {
    return "" === e.title.trim() && "" === e.description.trim() && null == e.image;
}
function c(e) {
    switch (e.type) {
        case s.COVER:
            return "" === e.title.trim() && "" === e.subtitle.trim() && null == e.image;
        case s.FIELDS:
            return e.fields.every(d);
    }
}
function u(e) {
    if (null != e && "file_id" in e) return { fileId: e.file_id, width: e.width, height: e.height };
}
function _(e) {
    let t = u(e.image);
    return { title: e.title ?? "", description: e.description ?? "", image: t, hideImage: null == t || void 0 };
}
function E(e) {
    return null == e
        ? []
        : e
              .map((e) => {
                  switch (e.type) {
                      case s.COVER:
                          return { type: e.type, title: e.title ?? "", subtitle: e.subtitle ?? "", image: u(e.image) };
                      case s.FIELDS:
                          return { type: e.type, fields: e.fields.map(_) };
                      default:
                          return;
                  }
              })
              .filter(o.Vq);
}
function A(e) {
    if (null != e)
        return "localDataUri" in e ? { filename: e.filename } : { file_id: e.fileId, width: e.width, height: e.height };
}
function h(e) {
    switch (e.type) {
        case s.COVER:
            return { type: e.type, title: e.title, subtitle: e.subtitle, image: A(e.image) };
        case s.FIELDS: {
            let t = e.fields
                .filter((e) => !d(e))
                .map((e) => ({ title: e.title, description: e.description, image: A(e.image) }));
            return { type: e.type, fields: t };
        }
        default:
            return e;
    }
}
class I {
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
            data: { type: this.type, header: this.header, sections: this.sections.map(h).filter(o.Vq) },
        };
    }
    isDiscardable() {
        return "" === this.header.trim() && this.sections.every(c);
    }
    isValid() {
        return !this.isDiscardable();
    }
    isEqual(e) {
        return e instanceof I && a()(this.header, e.header) && a()(this.sections, e.sections);
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
