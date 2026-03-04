"use strict";
n.d(t, { l: () => a });
var r = n(64700),
    i = n(267102),
    s = n(374803);
function a(e) {
    let { editorHeight: t, type: n, state: a } = e,
        [o, l] = r.useState(void 0),
        u = a?.query,
        c = a?.isVisible,
        { renderWindow: d } = r.useContext(i.Ay),
        _ = r.useCallback(() => {
            if (null != a && (null == u || !c)) return void l(void 0);
            if (u?.type === s.DB.GIFS || (null != n && !n.autocomplete?.alwaysUseLayer)) return void l(null);
            let e = d.document.getSelection(),
                t = null != e && e.rangeCount > 0 ? e.getRangeAt(0) : null;
            if (null == t) return;
            let r = t.startContainer,
                i = t.startOffset;
            for (; null != r; ) {
                if (r.nodeType !== Node.TEXT_NODE || null == r.nodeValue) return void l(null);
                if (r.nodeValue?.length === 0) {
                    (r = r.previousSibling), (i = r?.nodeValue?.length ?? 0);
                    continue;
                }
                null != u && (i >= u.queryText.length ? (i -= u.queryText.length) : (i = 0));
                break;
            }
            if (null == r) return;
            let o = d.document.createRange();
            o.setStart(r, i), o.setEnd(r, i);
            let _ = o.getBoundingClientRect();
            _?.height !== 0 && l(_ ?? null);
        }, [d.document, a, c, u, n]);
    return (
        r.useEffect(
            () => (
                d.document.addEventListener("selectionchange", _),
                () => d.document.removeEventListener("selectionchange", _)
            ),
            [d.document, _],
        ),
        r.useEffect(() => {
            _();
        }, [_, t]),
        o
    );
}
