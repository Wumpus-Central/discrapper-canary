"use strict";
n.d(t, { l: () => a });
var i = n(64700),
    r = n(267102),
    s = n(597184);
function a(e) {
    let { editorHeight: t, type: n, state: a } = e,
        [o, l] = i.useState(void 0),
        u = a?.query,
        c = a?.isVisible,
        { renderWindow: d } = i.useContext(r.Ay),
        _ = i.useCallback(() => {
            if (null != a && (null == u || !c)) return void l(void 0);
            if (u?.type === s.DB.GIFS || (null != n && !n.autocomplete?.alwaysUseLayer)) return void l(null);
            let e = d.document.getSelection(),
                t = null != e && e.rangeCount > 0 ? e.getRangeAt(0) : null;
            if (null == t) return;
            let i = t.startContainer,
                r = t.startOffset;
            for (; null != i; ) {
                if (i.nodeType !== Node.TEXT_NODE || null == i.nodeValue) return void l(null);
                if (i.nodeValue?.length === 0) {
                    (i = i.previousSibling), (r = i?.nodeValue?.length ?? 0);
                    continue;
                }
                null != u && (r >= u.queryText.length ? (r -= u.queryText.length) : (r = 0));
                break;
            }
            if (null == i) return;
            let o = d.document.createRange();
            o.setStart(i, r), o.setEnd(i, r);
            let _ = o.getBoundingClientRect();
            _?.height !== 0 && l(_ ?? null);
        }, [d.document, a, c, u, n]);
    return (
        i.useEffect(
            () => (
                d.document.addEventListener("selectionchange", _),
                () => d.document.removeEventListener("selectionchange", _)
            ),
            [d.document, _],
        ),
        i.useEffect(() => {
            _();
        }, [_, t]),
        o
    );
}
