n.d(t, { Z: () => s }), n(388685);
var r = n(473749),
    i = n(728285),
    a = n(590921),
    o = n(53457);
function s(e) {
    let { editorHeight: t, type: n, state: s } = e,
        [l, c] = r.useState(void 0),
        u = null == s ? void 0 : s.query,
        d = null == s ? void 0 : s.isVisible,
        { renderWindow: f } = r.useContext(i.ZP),
        _ = r.useCallback(() => {
            var e, t, r, i;
            if (null != s && (null == u || !d)) return void c(void 0);
            if ((null == u ? void 0 : u.type) === a.eq.MENTION_SUGGESTIONS) {
                let e = f.document.getElementsByClassName(o.mentionSuggestion)[0];
                if (null == e) return void c(void 0);
                {
                    let t = e.getBoundingClientRect();
                    c(new DOMRect(t.x - 10, t.y, t.width, t.height));
                    return;
                }
            }
            if (
                (null == u ? void 0 : u.type) === a.eq.GIFS ||
                (null != n && !(null == (e = n.autocomplete) ? void 0 : e.alwaysUseLayer))
            )
                return void c(null);
            let l = f.document.getSelection(),
                _ = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null;
            if (null == _) return;
            let p = _.startContainer,
                h = _.startOffset;
            for (; null != p; ) {
                if (p.nodeType !== Node.TEXT_NODE || null == p.nodeValue) return void c(null);
                if ((null == (t = p.nodeValue) ? void 0 : t.length) === 0) {
                    h =
                        null != (i = null == (p = p.previousSibling) || null == (r = p.nodeValue) ? void 0 : r.length)
                            ? i
                            : 0;
                    continue;
                }
                null != u && (h >= u.queryText.length ? (h -= u.queryText.length) : (h = 0));
                break;
            }
            if (null == p) return;
            let m = f.document.createRange();
            m.setStart(p, h), m.setEnd(p, h);
            let g = m.getBoundingClientRect();
            (null == g ? void 0 : g.height) !== 0 && c(null != g ? g : null);
        }, [f.document, s, d, u, n]);
    return (
        r.useEffect(
            () => (
                f.document.addEventListener("selectionchange", _),
                () => f.document.removeEventListener("selectionchange", _)
            ),
            [f.document, _],
        ),
        r.useEffect(() => {
            _();
        }, [_, t]),
        l
    );
}
