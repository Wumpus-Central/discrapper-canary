"use strict";
n.d(t, { K: () => r });
var i = n(869795);
class r {
    getItemRect(e) {
        let t = this.ref.current;
        if (!t) return null;
        let n = null != e ? (0, i.au)(this.ref, e) : null;
        if (!n) return null;
        let r = t.getBoundingClientRect(),
            s = n.getBoundingClientRect();
        return {
            x: s.left - r.left - t.clientLeft + t.scrollLeft,
            y: s.top - r.top - t.clientTop + t.scrollTop,
            width: s.width,
            height: s.height,
        };
    }
    getContentSize() {
        var e, t;
        let n = this.ref.current;
        return {
            width: null != (e = null == n ? void 0 : n.scrollWidth) ? e : 0,
            height: null != (t = null == n ? void 0 : n.scrollHeight) ? t : 0,
        };
    }
    getVisibleRect() {
        var e, t, n, i;
        let r = this.ref.current;
        return {
            x: null != (e = null == r ? void 0 : r.scrollLeft) ? e : 0,
            y: null != (t = null == r ? void 0 : r.scrollTop) ? t : 0,
            width: null != (n = null == r ? void 0 : r.clientWidth) ? n : 0,
            height: null != (i = null == r ? void 0 : r.clientHeight) ? i : 0,
        };
    }
    constructor(e) {
        this.ref = e;
    }
}
