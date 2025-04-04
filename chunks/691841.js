n.d(t, { Z: () => l });
var r = n(192379),
    i = n(924826),
    o = n(536895),
    a = n(40851),
    s = n(590921);
function l(e) {
    var t, n, l;
    let { navId: c, scrollerRef: u, state: d, onFocus: f } = e,
        { renderWindow: _ } = r.useContext(a.ZP),
        p = (e, t) => {
            let n = _.document.querySelector(e);
            if (null != n) {
                var r;
                null == (r = u.current) || r.scrollIntoViewNode({ node: n });
            }
            null == f || f(+t);
        },
        h = (e, t) => {
            var n;
            if ((null == (n = u.current) || n.scrollToTop(), e && null != d.query)) {
                let e = d.query.typeInfo.focusMode,
                    n = e !== s.QZ.MANUAL && (e !== s.QZ.AUTO_WHEN_FILTERED || 0 !== d.query.queryText.length);
                d.isVisible && (!0 !== t || !1 !== n) ? (g.setFocus('0'), null == f || f(0)) : (g.setFocus(null), null == f || f(null));
            }
        },
        m = (e) => {
            var t;
            if ((null == (t = u.current) || t.scrollToBottom(), e && null != d.query && d.query.resultCount > 0)) {
                let e = d.query.resultCount - 1;
                g.setFocus(e.toString()), null == f || f(e);
            }
        },
        g = (0, i.ZP)({
            id: c,
            isEnabled: d.isVisible,
            orientation: o.hy.VERTICAL,
            useVirtualFocus: !0,
            setFocus: p,
            onNavigateNextAtEnd: () => h(!0),
            onNavigatePreviousAtStart: () => m(!0),
            scrollToStart: () => (h(!1, !1), Promise.resolve()),
            scrollToEnd: () => (m(!1), Promise.resolve())
        }),
        E = r.useRef(h);
    return (
        r.useEffect(() => {
            E.current = h;
        }),
        r.useEffect(() => {
            E.current(!0, !0);
        }, [null == (t = d.query) ? void 0 : t.type, null == (n = d.query) ? void 0 : n.queryText, null == (l = d.query) ? void 0 : l.isLoading, d.isVisible]),
        g
    );
}
