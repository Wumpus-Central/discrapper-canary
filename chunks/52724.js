"use strict";
function r(e) {
    let { getFocusableElements: t, getActiveElement: n, scrollToStart: r, scrollToEnd: i } = e;
    function s() {
        return t()[0] ?? null;
    }
    function a() {
        let e = t();
        return e[e.length - 1] ?? null;
    }
    return {
        getNextFocusableElement: async function e(e) {
            let i = e?.from || n();
            if (null == i) return null;
            let a =
                t().find(
                    (e) =>
                        !!(
                            i.compareDocumentPosition(e) &
                            (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)
                        ),
                ) ?? null;
            return null == a && e?.wrap ? (await r?.(), s()) : a;
        },
        getPreviousFocusableElement: async function (e) {
            let r = e?.from || n();
            if (null == r) return null;
            let s = (function (e) {
                let n = t();
                for (let t = n.length - 1; t >= 0; t--) {
                    let r = n[t];
                    if (
                        e.compareDocumentPosition(r) &
                        (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY)
                    )
                        return r;
                }
                return null;
            })(r);
            return null == s && e?.wrap ? (await i?.(), a()) : s;
        },
        getFirstFocusableElement: s,
        getLastFocusableElement: a,
    };
}
n.d(t, { C: () => r });
