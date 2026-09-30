n.d(t, { l: () => r });
var l = n(582128),
    i = n(267102),
    s = n(597184);
function r(e) {
    let { editorHeight: t, type: n, state: r } = e,
        [a, o] = l.useState(void 0),
        u = r?.query,
        c = r?.isVisible,
        { renderWindow: d } = l.useContext(i.Ay),
        m = l.useCallback(() => {
            if (null != r && (null == u || !c)) return void o(void 0);
            if (u?.type === s.DB.GIFS || (null != n && !n.autocomplete?.alwaysUseLayer)) return void o(null);
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
            let m = a.getBoundingClientRect();
            m?.height !== 0 && o(m ?? null);
        }, [d.document, r, c, u, n]);
    return (
        l.useEffect(
            () => (
                d.document.addEventListener("selectionchange", m),
                () => d.document.removeEventListener("selectionchange", m)
            ),
            [d.document, m],
        ),
        l.useEffect(() => {
            m();
        }, [m, t]),
        a
    );
}
