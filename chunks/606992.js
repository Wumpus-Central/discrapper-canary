(n.d(t, { Z: () => o }), n(388685));
var r = n(73800),
    i = n(40851),
    a = n(590921);
function o(e) {
    let { editorHeight: t, type: n, state: o } = e,
        [s, l] = r.useState(void 0),
        c = null == o ? void 0 : o.query,
        u = null == o ? void 0 : o.isVisible,
        { renderWindow: d } = r.useContext(i.ZP),
        _ = r.useCallback(() => {
            var e, t, r, i;
            if (null != o && (null == c || !u)) return void l(void 0);
            if ((null == c ? void 0 : c.type) === a.eq.GIFS || (null != n && !(null == (e = n.autocomplete) ? void 0 : e.alwaysUseLayer))) return void l(null);
            let s = d.document.getSelection(),
                _ = null != s && s.rangeCount > 0 ? s.getRangeAt(0) : null;
            if (null == _) return;
            let f = _.startContainer,
                p = _.startOffset;
            for (; null != f; ) {
                if (f.nodeType !== Node.TEXT_NODE || null == f.nodeValue) return void l(null);
                if ((null == (t = f.nodeValue) ? void 0 : t.length) === 0) {
                    p = null != (i = null == (f = f.previousSibling) || null == (r = f.nodeValue) ? void 0 : r.length) ? i : 0;
                    continue;
                }
                null != c && (p >= c.queryText.length ? (p -= c.queryText.length) : (p = 0));
                break;
            }
            if (null == f) return;
            let h = d.document.createRange();
            (h.setStart(f, p), h.setEnd(f, p));
            let m = h.getBoundingClientRect();
            (null == m ? void 0 : m.height) !== 0 && l(null != m ? m : null);
        }, [d.document, o, u, c, n]);
    return (
        r.useEffect(() => (d.document.addEventListener('selectionchange', _), () => d.document.removeEventListener('selectionchange', _)), [d.document, _]),
        r.useEffect(() => {
            _();
        }, [_, t]),
        s
    );
}
