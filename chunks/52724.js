function i(e) {
    let { getFocusableElements: t, getActiveElement: n, scrollToStart: i, scrollToEnd: r } = e;
    function a() {
        return t()[0] ?? null;
    }
    function s() {
        let e = t();
        return e[e.length - 1] ?? null;
    }
    return {
        getNextFocusableElement: async function e(e) {
            let r = e?.from || n();
            if (null == r) return null;
            let s =
                t().find(
                    (e) =>
                        !!(
                            r.compareDocumentPosition(e) &
                            (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)
                        ),
                ) ?? null;
            return null == s && e?.wrap ? (await i?.(), a()) : s;
        },
        getPreviousFocusableElement: async function (e) {
            let i = e?.from || n();
            if (null == i) return null;
            let a = (function (e) {
                let n = t();
                for (let t = n.length - 1; t >= 0; t--) {
                    let i = n[t];
                    if (
                        e.compareDocumentPosition(i) &
                        (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY)
                    )
                        return i;
                }
                return null;
            })(i);
            return null == a && e?.wrap ? (await r?.(), s()) : a;
        },
        getFirstFocusableElement: a,
        getLastFocusableElement: s,
    };
}
n.d(t, { C: () => i });
