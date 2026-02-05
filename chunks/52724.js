"use strict";
function r(e) {
    let { getFocusableElements: t, getActiveElement: n, scrollToStart: r, scrollToEnd: i } = e;
    function a(e) {
        return (
            t().find(
                (t) =>
                    !!(
                        e.compareDocumentPosition(t) &
                        (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)
                    ),
            ) ?? null
        );
    }
    function s(e) {
        let n = t();
        for (let t = n.length - 1; t >= 0; t--) {
            let r = n[t];
            if (e.compareDocumentPosition(r) & (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY))
                return r;
        }
        return null;
    }
    function o() {
        return t()[0] ?? null;
    }
    function l() {
        let e = t();
        return e[e.length - 1] ?? null;
    }
    return {
        getNextFocusableElement: async function (e) {
            let t = e?.from || n();
            if (null == t) return null;
            let i = a(t);
            return null == i && e?.wrap ? (await r?.(), o()) : i;
        },
        getPreviousFocusableElement: async function (e) {
            let t = e?.from || n();
            if (null == t) return null;
            let r = s(t);
            return null == r && e?.wrap ? (await i?.(), l()) : r;
        },
        getFirstFocusableElement: o,
        getLastFocusableElement: l,
    };
}
n.d(t, { C: () => r });
