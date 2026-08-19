"use strict";
r.d(t, { K: () => o });
var n = r(201887);
class o {
    getItemRect(e) {
        let t = this.ref.current;
        if (!t) return null;
        let r = null != e ? (0, n.au)(this.ref, e) : null;
        if (!r) return null;
        let o = t.getBoundingClientRect(),
            i = r.getBoundingClientRect();
        return {
            x: i.left - o.left - t.clientLeft + t.scrollLeft,
            y: i.top - o.top - t.clientTop + t.scrollTop,
            width: i.width,
            height: i.height,
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
        let o = this.ref.current;
        return {
            x: null != (e = null == o ? void 0 : o.scrollLeft) ? e : 0,
            y: null != (t = null == o ? void 0 : o.scrollTop) ? t : 0,
            width: null != (r = null == o ? void 0 : o.clientWidth) ? r : 0,
            height: null != (n = null == o ? void 0 : o.clientHeight) ? n : 0,
        };
    }
    constructor(e) {
        this.ref = e;
    }
}
