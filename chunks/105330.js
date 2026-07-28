"use strict";
n.d(t, { l: () => s });
var i = n(582128),
    r = n(267102),
    a = n(597184);
function s(e) {
    let { editorHeight: t, type: n, state: s } = e,
        [l, o] = i.useState(void 0),
        d = s?.query,
        c = s?.isVisible,
        { renderWindow: u } = i.useContext(r.Ay),
        _ = i.useCallback(() => {
            if (null != s && (null == d || !c)) return void o(void 0);
            if (d?.type === a.DB.GIFS || (null != n && !n.autocomplete?.alwaysUseLayer)) return void o(null);
            let e = u.document.getSelection(),
                t = null != e && e.rangeCount > 0 ? e.getRangeAt(0) : null;
            if (null == t) return;
            let i = t.startContainer,
                r = t.startOffset;
            for (; null != i; ) {
                if (i.nodeType !== Node.TEXT_NODE || null == i.nodeValue) return void o(null);
                if (i.nodeValue?.length === 0) {
                    (i = i.previousSibling), (r = i?.nodeValue?.length ?? 0);
                    continue;
                }
                null != d && (r >= d.queryText.length ? (r -= d.queryText.length) : (r = 0));
                break;
            }
            if (null == i) return;
            let l = u.document.createRange();
            l.setStart(i, r), l.setEnd(i, r);
            let _ = l.getBoundingClientRect();
            _?.height !== 0 && o(_ ?? null);
        }, [u.document, s, c, d, n]);
    return (
        i.useEffect(
            () => (
                u.document.addEventListener("selectionchange", _),
                () => u.document.removeEventListener("selectionchange", _)
            ),
            [u.document, _],
        ),
        i.useEffect(() => {
            _();
        }, [_, t]),
        l
    );
}
