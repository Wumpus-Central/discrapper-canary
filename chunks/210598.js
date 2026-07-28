"use strict";
n.d(t, { T: () => l });
var i = n(812729),
    r = n.n(i),
    a = n(540185);
function s(e) {
    if (null == e || !("localDataUri" in e)) return e;
    let { localDataUri: t, ...n } = e;
    return n;
}
class l {
    id;
    type;
    header;
    top;
    bottom;
    constructor({ id: e, header: t, top: n, bottom: i }) {
        (this.id = e),
            (this.type = a.x.PERSONAL),
            (this.header = t ?? ""),
            (this.top = null != n ? { title: n.title ?? "", subtitle: n.subtitle ?? "", image: n.image } : void 0),
            (this.bottom = {
                entries: (i?.entries ?? []).map((e) =>
                    !0 === e.hideImage && null != e.image ? { ...e, image: void 0 } : e,
                ),
            });
    }
    toSubmission() {
        return {
            id: this.id,
            data: {
                type: this.type,
                title: JSON.stringify({
                    header: this.header,
                    top: null != this.top ? { ...this.top, image: s(this.top.image) } : void 0,
                    bottom: { ...this.bottom, entries: this.bottom.entries.map((e) => ({ ...e, image: s(e.image) })) },
                }),
            },
        };
    }
    isDiscardable() {
        return (
            "" === this.header.trim() &&
            (null == this.top ||
                ("" === this.top.title.trim() && "" === this.top.subtitle.trim() && null == this.top.image)) &&
            this.bottom.entries.every((e) => "" === e.value.trim() && "" === e.label.trim() && null == e.image)
        );
    }
    isValid() {
        return !this.isDiscardable();
    }
    isEqual(e) {
        return e instanceof l && r()(this.header, e.header) && r()(this.top, e.top) && r()(this.bottom, e.bottom);
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
