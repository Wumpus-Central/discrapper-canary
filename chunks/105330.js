"use strict";
n.d(t, { l: () => a });
var l = n(64700),
    i = n(267102),
    s = n(374803);
function a(e) {
    let { editorHeight: t, type: n, state: a } = e,
        [r, o] = l.useState(void 0),
        c = a?.query,
        u = a?.isVisible,
        { renderWindow: d } = l.useContext(i.Ay),
        h = l.useCallback(() => {
            if (null != a && (null == c || !u)) return void o(void 0);
            if (c?.type === s.DB.GIFS || (null != n && !n.autocomplete?.alwaysUseLayer)) return void o(null);
            let e = d.document.getSelection(),
                t = null != e && e.rangeCount > 0 ? e.getRangeAt(0) : null;
            if (null == t) return;
            let l = t.startContainer,
                i = t.startOffset;
            for (; null != l; ) {
                if (l.nodeType !== Node.TEXT_NODE || null == l.nodeValue) return void o(null);
                if (l.nodeValue?.length === 0) {
                    (l = l.previousSibling), (i = l?.nodeValue?.length ?? 0);
                    continue;
                }
                null != c && (i >= c.queryText.length ? (i -= c.queryText.length) : (i = 0));
                break;
            }
            if (null == l) return;
            let r = d.document.createRange();
            r.setStart(l, i), r.setEnd(l, i);
            let h = r.getBoundingClientRect();
            h?.height !== 0 && o(h ?? null);
        }, [d.document, a, u, c, n]);
    return (
        l.useEffect(
            () => (
                d.document.addEventListener("selectionchange", h),
                () => d.document.removeEventListener("selectionchange", h)
            ),
            [d.document, h],
        ),
        l.useEffect(() => {
            h();
        }, [h, t]),
        r
    );
}
