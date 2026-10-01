n.d(t, { l: () => s });
var l = n(582128),
    i = n(267102),
    r = n(597184);
function s(e) {
    let { editorHeight: t, type: n, state: s } = e,
        [a, o] = l.useState(void 0),
        u = s?.query,
        c = s?.isVisible,
        { renderWindow: d } = l.useContext(i.Ay),
        h = l.useCallback(() => {
            if (null != s && (null == u || !c)) return void o(void 0);
            if (u?.type === r.DB.GIFS || (null != n && !n.autocomplete?.alwaysUseLayer)) return void o(null);
            let e = d.document.getSelection(),
                t = null != e && e.rangeCount > 0 ? e.getRangeAt(0) : null;
            if (null == t) return;
            let l = t.startContainer,
                i = t.startOffset;
            for (; null != l;) {
                if (l.nodeType !== Node.TEXT_NODE || null == l.nodeValue) return void o(null);
                if (l.nodeValue?.length === 0) {
                    ((l = l.previousSibling), (i = l?.nodeValue?.length ?? 0));
                    continue;
                }
                null != u && (i >= u.queryText.length ? (i -= u.queryText.length) : (i = 0));
                break;
            }
            if (null == l) return;
            let a = d.document.createRange();
            (a.setStart(l, i), a.setEnd(l, i));
            let h = a.getBoundingClientRect();
            h?.height !== 0 && o(h ?? null);
        }, [d.document, s, c, u, n]);
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
        a
    );
}
