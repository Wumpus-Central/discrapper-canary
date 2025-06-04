n.d(t, { Z: () => a }), n(388685);
var r = n(73800),
    i = n(40851),
    o = n(590921);
function a(e) {
    let { editorHeight: t, type: n, state: a } = e,
        [s, l] = r.useState(void 0),
        c = null == a ? void 0 : a.query,
        u = null == a ? void 0 : a.isVisible,
        { renderWindow: d } = r.useContext(i.ZP),
        f = r.useCallback(() => {
            var e, t, r, i;
            if (null != a && (null == c || !u)) return void l(void 0);
            if ((null == c ? void 0 : c.type) === o.eq.GIFS || (null != n && !(null == (e = n.autocomplete) ? void 0 : e.alwaysUseLayer))) return void l(null);
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
            h.setStart(_, p), h.setEnd(_, p);
            let m = h.getBoundingClientRect();
            (null == m ? void 0 : m.height) !== 0 && l(null != m ? m : null);
        }, [d.document, a, u, c, n]);
    return (
        r.useEffect(() => (d.document.addEventListener('selectionchange', f), () => d.document.removeEventListener('selectionchange', f)), [d.document, f]),
        r.useEffect(() => {
            f();
        }, [f, t]),
        s
    );
}
