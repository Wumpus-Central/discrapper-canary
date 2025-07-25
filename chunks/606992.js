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
        f = r.useCallback(() => {
            var e, t, r, i;
            if (null != o && (null == c || !u)) return void l(void 0);
            if ((null == c ? void 0 : c.type) === a.eq.GIFS || (null != n && !(null == (e = n.autocomplete) ? void 0 : e.alwaysUseLayer))) return void l(null);
            let s = d.document.getSelection(),
                f = null != s && s.rangeCount > 0 ? s.getRangeAt(0) : null;
            if (null == f) return;
            let _ = f.startContainer,
                p = f.startOffset;
            for (; null != _; ) {
                if (_.nodeType !== Node.TEXT_NODE || null == _.nodeValue) return void l(null);
                if ((null == (t = _.nodeValue) ? void 0 : t.length) === 0) {
                    p = null != (i = null == (_ = _.previousSibling) || null == (r = _.nodeValue) ? void 0 : r.length) ? i : 0;
                    continue;
                }
                null != c && (p >= c.queryText.length ? (p -= c.queryText.length) : (p = 0));
                break;
            }
            if (null == _) return;
            let h = d.document.createRange();
            (h.setStart(_, p), h.setEnd(_, p));
            let m = h.getBoundingClientRect();
            (null == m ? void 0 : m.height) !== 0 && l(null != m ? m : null);
        }, [d.document, o, u, c, n]);
    return (
        r.useEffect(() => (d.document.addEventListener('selectionchange', f), () => d.document.removeEventListener('selectionchange', f)), [d.document, f]),
        r.useEffect(() => {
            f();
        }, [f, t]),
        s
    );
}
