n.d(t, { K: () => i });
var r = n(869795);
class i {
    getItemRect(e) {
        let t = this.ref.current;
        if (!t) return null;
        let n = null != e ? (0, r.au)(this.ref, e) : null;
        if (!n) return null;
        let i = t.getBoundingClientRect(),
            a = n.getBoundingClientRect();
        return {
            x: a.left - i.left - t.clientLeft + t.scrollLeft,
            y: a.top - i.top - t.clientTop + t.scrollTop,
            width: a.width,
            height: a.height,
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
        var e, t, n, r;
        let i = this.ref.current;
        return {
            x: null != (e = null == i ? void 0 : i.scrollLeft) ? e : 0,
            y: null != (t = null == i ? void 0 : i.scrollTop) ? t : 0,
            width: null != (n = null == i ? void 0 : i.clientWidth) ? n : 0,
            height: null != (r = null == i ? void 0 : i.clientHeight) ? r : 0,
        };
    }
    constructor(e) {
        this.ref = e;
    }
}
