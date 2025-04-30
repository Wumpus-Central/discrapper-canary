function r(e) {
    let { getFocusableElements: t, getActiveElement: n, scrollToStart: r, scrollToEnd: i } = e;
    function o(e) {
        var n;
        return null != (n = t().find((t) => !!(e.compareDocumentPosition(t) & (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)))) ? n : null;
    }
    function a(e) {
        let n = t();
        for (let t = n.length - 1; t >= 0; t--) {
            let r = n[t];
            if (e.compareDocumentPosition(r) & (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY)) return r;
        }
        return null;
    }
    function s() {
        var e;
        return null != (e = t()[0]) ? e : null;
    }
    function l() {
        var e;
        let n = t();
        return null != (e = n[n.length - 1]) ? e : null;
    }
    return {
        getNextFocusableElement: async function (e) {
            let t = (null == e ? void 0 : e.from) || n();
            if (null == t) return null;
            let i = o(t);
            return null == i && (null == e ? void 0 : e.wrap) ? (await (null == r ? void 0 : r()), s()) : i;
        },
        getPreviousFocusableElement: async function (e) {
            let t = (null == e ? void 0 : e.from) || n();
            if (null == t) return null;
            let r = a(t);
            return null == r && (null == e ? void 0 : e.wrap) ? (await (null == i ? void 0 : i()), l()) : r;
        },
        getFirstFocusableElement: s,
        getLastFocusableElement: l
    };
}
n.d(t, { E: () => r });
