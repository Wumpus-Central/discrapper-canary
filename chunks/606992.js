r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(40851),
    s = r(590921);
function l(e) {
    let { editorHeight: n, type: r, state: i, isInPopoutExperiment: l = !1 } = e,
        [u, c] = a.useState(void 0),
        d = null == i ? void 0 : i.query,
        f = null == i ? void 0 : i.isVisible,
        { renderWindow: p } = a.useContext(o.ZP),
        h = a.useCallback(() => {
            var e, n, a, o;
            if (null != i && (null == d || !f)) {
                c(void 0);
                return;
            }
            if ((null == d ? void 0 : d.type) === s.eq.GIFS || (null != r && !l && !(null === (e = r.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer))) {
                c(null);
                return;
            }
            let u = p.document.getSelection(),
                h = null != u && u.rangeCount > 0 ? u.getRangeAt(0) : null;
            if (null == h) return;
            let _ = h.startContainer,
                m = h.startOffset;
            for (; null != _; ) {
                if (_.nodeType !== Node.TEXT_NODE || null == _.nodeValue) {
                    c(null);
                    return;
                }
                if ((null === (n = _.nodeValue) || void 0 === n ? void 0 : n.length) === 0) {
                    m = null !== (o = null == (_ = _.previousSibling) ? void 0 : null === (a = _.nodeValue) || void 0 === a ? void 0 : a.length) && void 0 !== o ? o : 0;
                    continue;
                }
                null != d && (m >= d.queryText.length ? (m -= d.queryText.length) : (m = 0));
                break;
            }
            if (null == _) return;
            let g = p.document.createRange();
            g.setStart(_, m), g.setEnd(_, m);
            let E = g.getBoundingClientRect();
            if ((null == E ? void 0 : E.height) !== 0) c(null != E ? E : null);
        }, [l, p.document, i, f, d, r]);
    return (
        a.useEffect(() => (p.document.addEventListener('selectionchange', h), () => p.document.removeEventListener('selectionchange', h)), [p.document, h]),
        a.useEffect(() => {
            h();
        }, [h, n]),
        u
    );
}
