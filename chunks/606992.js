n.d(t, { Z: () => a }), n(47120);
var r = n(192379),
    i = n(40851),
    o = n(590921);
function a(e) {
    let { editorHeight: t, type: n, state: a, isInPopoutExperiment: s = !1 } = e,
        [l, c] = r.useState(void 0),
        u = null == a ? void 0 : a.query,
        d = null == a ? void 0 : a.isVisible,
        { renderWindow: f } = r.useContext(i.ZP),
        p = r.useCallback(() => {
            var e, t, r, i;
            if (null != a && (null == u || !d)) {
                c(void 0);
                return;
            }
            if ((null == u ? void 0 : u.type) === o.eq.GIFS || (null != n && !s && !(null === (e = n.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer))) {
                c(null);
                return;
            }
            let l = f.document.getSelection(),
                p = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null;
            if (null == p) return;
            let _ = p.startContainer,
                h = p.startOffset;
            for (; null != _; ) {
                if (_.nodeType !== Node.TEXT_NODE || null == _.nodeValue) {
                    c(null);
                    return;
                }
                if ((null === (t = _.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
                    h = null !== (i = null == (_ = _.previousSibling) ? void 0 : null === (r = _.nodeValue) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0;
                    continue;
                }
                null != u && (h >= u.queryText.length ? (h -= u.queryText.length) : (h = 0));
                break;
            }
            if (null == _) return;
            let m = f.document.createRange();
            m.setStart(_, h), m.setEnd(_, h);
            let g = m.getBoundingClientRect();
            (null == g ? void 0 : g.height) !== 0 && c(null != g ? g : null);
        }, [s, f.document, a, d, u, n]);
    return (
        r.useEffect(() => (f.document.addEventListener('selectionchange', p), () => f.document.removeEventListener('selectionchange', p)), [f.document, p]),
        r.useEffect(() => {
            p();
        }, [p, t]),
        l
    );
}
