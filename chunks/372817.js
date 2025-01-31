function i(e) {
    let { getFocusableElements: t, getActiveElement: n, scrollToStart: i, scrollToEnd: r } = e;
    function a(e) {
        var n;
        return null !== (n = t().find((t) => !!(e.compareDocumentPosition(t) & (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)))) && void 0 !== n ? n : null;
    }
    function s(e) {
        let n = t();
        for (let t = n.length - 1; t >= 0; t--) {
            let i = n[t];
            if (e.compareDocumentPosition(i) & (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY)) return i;
        }
        return null;
    }
    function o() {
        var e;
        return null !== (e = t()[0]) && void 0 !== e ? e : null;
    }
    function l() {
        var e;
        let n = t();
        return null !== (e = n[n.length - 1]) && void 0 !== e ? e : null;
    }
    return {
        getNextFocusableElement: async function (e) {
            let t = (null == e ? void 0 : e.from) || n();
            if (null == t) return null;
            let r = a(t);
            return null == r && (null == e ? void 0 : e.wrap) ? (await (null == i ? void 0 : i()), o()) : r;
        },
        getPreviousFocusableElement: async function (e) {
            let t = (null == e ? void 0 : e.from) || n();
            if (null == t) return null;
            let i = s(t);
            return null == i && (null == e ? void 0 : e.wrap) ? (await (null == r ? void 0 : r()), l()) : i;
        },
        getFirstFocusableElement: o,
        getLastFocusableElement: l
    };
}
n.d(t, { E: () => i });
