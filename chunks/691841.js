n.d(t, { Z: () => l });
var i = n(192379),
    r = n(924826),
    a = n(536895),
    s = n(40851),
    o = n(590921);
function l(e) {
    var t, n, l;
    let { navId: u, scrollerRef: c, state: d, onFocus: f } = e,
        { renderWindow: _ } = i.useContext(s.ZP),
        p = (e, t) => {
            let n = _.document.querySelector(e);
            if (null != n) {
                var i;
                null === (i = c.current) || void 0 === i || i.scrollIntoViewNode({ node: n });
            }
            null == f || f(+t);
        },
        h = (e, t) => {
            var n;
            if ((null === (n = c.current) || void 0 === n || n.scrollToTop(), e && null != d.query)) {
                let e = d.query.typeInfo.focusMode,
                    n = !(e === o.QZ.MANUAL || (e === o.QZ.AUTO_WHEN_FILTERED && 0 === d.query.queryText.length));
                d.isVisible && (!0 !== t || !1 !== n) ? (g.setFocus('0'), null == f || f(0)) : (g.setFocus(null), null == f || f(null));
            }
        },
        m = (e) => {
            var t;
            if ((null === (t = c.current) || void 0 === t || t.scrollToBottom(), e && null != d.query && d.query.resultCount > 0)) {
                let e = d.query.resultCount - 1;
                g.setFocus(e.toString()), null == f || f(e);
            }
        },
        g = (0, r.ZP)({
            id: u,
            isEnabled: d.isVisible,
            orientation: a.hy.VERTICAL,
            useVirtualFocus: !0,
            setFocus: p,
            onNavigateNextAtEnd: () => h(!0),
            onNavigatePreviousAtStart: () => m(!0),
            scrollToStart: () => (h(!1, !1), Promise.resolve()),
            scrollToEnd: () => (m(!1), Promise.resolve())
        }),
        E = i.useRef(h);
    return (
        i.useEffect(() => {
            E.current = h;
        }),
        i.useEffect(() => {
            E.current(!0, !0);
        }, [null === (t = d.query) || void 0 === t ? void 0 : t.type, null === (n = d.query) || void 0 === n ? void 0 : n.queryText, null === (l = d.query) || void 0 === l ? void 0 : l.isLoading, d.isVisible]),
        g
    );
}
