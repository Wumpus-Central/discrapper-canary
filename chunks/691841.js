n.d(t, { Z: () => l });
var r = n(473749),
    i = n(924826),
    a = n(536895),
    o = n(728285),
    s = n(590921);
function l(e) {
    var t, n, l;
    let { navId: c, scrollerRef: u, state: d, onFocus: f } = e,
        { renderWindow: p } = r.useContext(o.ZP),
        _ = (e, t) => {
            let n = p.document.querySelector(e);
            if (null != n) {
                var r;
                null == (r = u.current) || r.scrollIntoViewNode({ node: n });
            }
            null == f || f(+t);
        },
        m = (e, t, n) => {
            var r;
            if ((null == (r = u.current) || r.scrollToTop(), e && null != d.query)) {
                let e = d.query.typeInfo.focusMode,
                    r = e !== s.QZ.MANUAL && (e !== s.QZ.AUTO_WHEN_FILTERED || 0 !== d.query.queryText.length);
                d.isVisible && (!0 !== t || !1 !== r) && !0 !== n
                    ? (g.setFocus("0"), null == f || f(0))
                    : (g.setFocus(null), null == f || f(null));
            }
        },
        h = (e) => {
            var t;
            if ((null == (t = u.current) || t.scrollToBottom(), e && null != d.query && d.query.resultCount > 0)) {
                let e = d.query.resultCount - 1;
                g.setFocus(e.toString()), null == f || f(e);
            }
        },
        g = (0, i.ZP)({
            id: c,
            isEnabled: d.isVisible,
            orientation: a.hy.VERTICAL,
            useVirtualFocus: !0,
            setFocus: _,
            onNavigateNextAtEnd: () => m(!0),
            onNavigatePreviousAtStart: () => h(!0),
            scrollToStart: () => (m(!1, !1), Promise.resolve()),
            scrollToEnd: () => (h(!1), Promise.resolve()),
        }),
        E = r.useRef(m);
    return (
        r.useEffect(() => {
            E.current = m;
        }),
        r.useEffect(() => {
            E.current(!0, !0, d.isInitialAfterError);
        }, [
            null == (t = d.query) ? void 0 : t.type,
            null == (n = d.query) ? void 0 : n.queryText,
            null == (l = d.query) ? void 0 : l.isLoading,
            d.isVisible,
            d.isInitialAfterError,
        ]),
        g
    );
}
