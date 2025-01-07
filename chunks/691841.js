r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(192379),
    a = r(924826),
    s = r(536895),
    o = r(40851),
    l = r(590921);
function u(e) {
    var n, r, u;
    let { navId: c, scrollerRef: d, state: f, onFocus: _ } = e,
        { renderWindow: h } = i.useContext(o.ZP),
        p = (e, n) => {
            let r = h.document.querySelector(e);
            if (null != r) {
                var i;
                null === (i = d.current) || void 0 === i || i.scrollIntoViewNode({ node: r });
            }
            null == _ || _(+n);
        },
        m = (e, n) => {
            var r;
            if ((null === (r = d.current) || void 0 === r || r.scrollToTop(), e && null != f.query)) {
                let e = f.query.typeInfo.focusMode,
                    r = !(e === l.QZ.MANUAL || (e === l.QZ.AUTO_WHEN_FILTERED && 0 === f.query.queryText.length));
                f.isVisible && (!0 !== n || !1 !== r) ? (E.setFocus('0'), null == _ || _(0)) : (E.setFocus(null), null == _ || _(null));
            }
        },
        g = (e) => {
            var n;
            if ((null === (n = d.current) || void 0 === n || n.scrollToBottom(), e && null != f.query && f.query.resultCount > 0)) {
                let e = f.query.resultCount - 1;
                E.setFocus(e.toString()), null == _ || _(e);
            }
        },
        E = (0, a.ZP)({
            id: c,
            isEnabled: f.isVisible,
            orientation: s.hy.VERTICAL,
            useVirtualFocus: !0,
            setFocus: p,
            onNavigateNextAtEnd: () => m(!0),
            onNavigatePreviousAtStart: () => g(!0),
            scrollToStart: () => (m(!1, !1), Promise.resolve()),
            scrollToEnd: () => (g(!1), Promise.resolve())
        }),
        v = i.useRef(m);
    return (
        i.useEffect(() => {
            v.current = m;
        }),
        i.useEffect(() => {
            v.current(!0, !0);
        }, [null === (n = f.query) || void 0 === n ? void 0 : n.type, null === (r = f.query) || void 0 === r ? void 0 : r.queryText, null === (u = f.query) || void 0 === u ? void 0 : u.isLoading, f.isVisible]),
        E
    );
}
