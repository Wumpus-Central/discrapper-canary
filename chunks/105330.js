n.d(t, { l: () => o }), n(896048);
var r = n(64700),
    i = n(267102),
    a = n(374803),
    s = n(562650);
function o(e) {
    let { editorHeight: t, type: n, state: o } = e,
        [l, c] = r.useState(void 0),
        u = null == o ? void 0 : o.query,
        d = null == o ? void 0 : o.isVisible,
        { renderWindow: f } = r.useContext(i.Ay),
        p = r.useCallback(() => {
            var e, t, r, i;
            if (null != o && (null == u || !d)) return void c(void 0);
            if ((null == u ? void 0 : u.type) === a.DB.MENTION_SUGGESTIONS) {
                let e = f.document.getElementsByClassName(s.Z2)[0];
                if (null == e) return void c(void 0);
                {
                    let t = e.getBoundingClientRect();
                    c(new DOMRect(t.x - 10, t.y, t.width, t.height));
                    return;
                }
            }
            if (
                (null == u ? void 0 : u.type) === a.DB.GIFS ||
                (null != n && !(null == (e = n.autocomplete) ? void 0 : e.alwaysUseLayer))
            )
                return void c(null);
            let l = f.document.getSelection(),
                p = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null;
            if (null == p) return;
            let _ = p.startContainer,
                h = p.startOffset;
            for (; null != _; ) {
                if (_.nodeType !== Node.TEXT_NODE || null == _.nodeValue) return void c(null);
                if ((null == (t = _.nodeValue) ? void 0 : t.length) === 0) {
                    h =
                        null != (r = null == (_ = _.previousSibling) || null == (i = _.nodeValue) ? void 0 : i.length)
                            ? r
                            : 0;
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
        }, [f.document, o, d, u, n]);
    return (
        r.useEffect(
            () => (
                f.document.addEventListener("selectionchange", p),
                () => f.document.removeEventListener("selectionchange", p)
            ),
            [f.document, p],
        ),
        r.useEffect(() => {
            p();
        }, [p, t]),
        l
    );
}
