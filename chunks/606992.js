n.d(t, { Z: () => s }), n(47120);
var i = n(192379),
    r = n(40851),
    a = n(590921);
function s(e) {
    let { editorHeight: t, type: n, state: s, isInPopoutExperiment: o = !1 } = e,
        [l, u] = i.useState(void 0),
        c = null == s ? void 0 : s.query,
        d = null == s ? void 0 : s.isVisible,
        { renderWindow: f } = i.useContext(r.ZP),
        _ = i.useCallback(() => {
            var e, t, i, r;
            if (null != s && (null == c || !d)) {
                u(void 0);
                return;
            }
            if ((null == c ? void 0 : c.type) === a.eq.GIFS || (null != n && !o && !(null === (e = n.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer))) {
                u(null);
                return;
            }
            let l = f.document.getSelection(),
                _ = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null;
            if (null == _) return;
            let p = _.startContainer,
                h = _.startOffset;
            for (; null != p; ) {
                if (p.nodeType !== Node.TEXT_NODE || null == p.nodeValue) {
                    u(null);
                    return;
                }
                if ((null === (t = p.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
                    h = null !== (r = null == (p = p.previousSibling) ? void 0 : null === (i = p.nodeValue) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0;
                    continue;
                }
                null != c && (h >= c.queryText.length ? (h -= c.queryText.length) : (h = 0));
                break;
            }
            if (null == p) return;
            let m = f.document.createRange();
            m.setStart(p, h), m.setEnd(p, h);
            let g = m.getBoundingClientRect();
            (null == g ? void 0 : g.height) !== 0 && u(null != g ? g : null);
        }, [o, f.document, s, d, c, n]);
    return (
        i.useEffect(() => (f.document.addEventListener('selectionchange', _), () => f.document.removeEventListener('selectionchange', _)), [f.document, _]),
        i.useEffect(() => {
            _();
        }, [_, t]),
        l
    );
}
