"use strict";
r.d(t, { K: () => i });
var n = r(201887);
class i {
    getItemRect(e) {
        let t = this.ref.current;
        if (!t) return null;
        let r = null != e ? (0, n.au)(this.ref, e) : null;
        if (!r) return null;
        let i = t.getBoundingClientRect(),
            o = r.getBoundingClientRect();
        return {
            x: o.left - i.left - t.clientLeft + t.scrollLeft,
            y: o.top - i.top - t.clientTop + t.scrollTop,
            width: o.width,
            height: o.height,
        };
    }
    getContentSize() {
        var e, t;
        let r = this.ref.current;
        return {
            width: null != (e = null == r ? void 0 : r.scrollWidth) ? e : 0,
            height: null != (t = null == r ? void 0 : r.scrollHeight) ? t : 0,
        };
    }
    getVisibleRect() {
        var e, t, r, n;
        let i = this.ref.current;
        return {
            x: null != (e = null == i ? void 0 : i.scrollLeft) ? e : 0,
            y: null != (t = null == i ? void 0 : i.scrollTop) ? t : 0,
            width: null != (r = null == i ? void 0 : i.clientWidth) ? r : 0,
            height: null != (n = null == i ? void 0 : i.clientHeight) ? n : 0,
        };
    }
    constructor(e) {
        this.ref = e;
    }
}
