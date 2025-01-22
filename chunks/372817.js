function i(e) {
    let { getFocusableElements: n, getActiveElement: r, scrollToStart: i, scrollToEnd: a } = e;
    function o(e) {
        var r;
        return null !== (r = n().find((n) => !!(e.compareDocumentPosition(n) & (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)))) && void 0 !== r ? r : null;
    }
    function s(e) {
        let r = n();
        for (let n = r.length - 1; n >= 0; n--) {
            let i = r[n];
            if (e.compareDocumentPosition(i) & (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY)) return i;
        }
        return null;
    }
    function l() {
        var e;
        return null !== (e = n()[0]) && void 0 !== e ? e : null;
    }
    function u() {
        var e;
        let r = n();
        return null !== (e = r[r.length - 1]) && void 0 !== e ? e : null;
    }
    return {
        getNextFocusableElement: async function e(e) {
            let n = (null == e ? void 0 : e.from) || r();
            if (null == n) return null;
            let a = o(n);
            return null == a && (null == e ? void 0 : e.wrap) ? (await (null == i ? void 0 : i()), l()) : a;
        },
        getPreviousFocusableElement: async function e(e) {
            let n = (null == e ? void 0 : e.from) || r();
            if (null == n) return null;
            let i = s(n);
            return null == i && (null == e ? void 0 : e.wrap) ? (await (null == a ? void 0 : a()), u()) : i;
        },
        getFirstFocusableElement: l,
        getLastFocusableElement: u
    };
}
r.d(n, {
    E: function () {
        return i;
    }
});
