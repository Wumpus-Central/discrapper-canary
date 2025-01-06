t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651),
    l = t(192379),
    a = t(481060),
    o = t(239091),
    r = t(973616),
    s = t(783097),
    c = t(176412),
    d = t(570949),
    u = t(753972),
    m = t(532309),
    p = t(51688),
    h = t(413097);
function f(e) {
    var n;
    let { command: t, application: f, onClick: C, query: v, searchResultsPosition: x } = e,
        _ = l.useCallback(
            (e) => {
                if ((0, s.BQ)(f)) {
                    let n = f instanceof r.ZP ? f : r.ZP.createFromServer(f);
                    (0, o.vq)(e, (e) =>
                        (0, i.jsx)(d.Z, {
                            application: n,
                            ...e
                        })
                    );
                }
            },
            [f]
        ),
        { iconURL: N, name: g, description: A } = l.useMemo(() => (0, s.sl)(f, { fakeAppIconURL: h }), [f]),
        E = l.useMemo(() => {
            var e;
            let n = null !== (e = null == t ? void 0 : t.displayDescription) && void 0 !== e ? e : A;
            return null == n ? null : (0, c.ae)(n, void 0);
        }, [A, null == t ? void 0 : t.displayDescription]),
        { trackSearchResultsItemImpressionRef: b } = (0, m.Z)({
            applicationId: f.id,
            commandId: null == t ? void 0 : t.id,
            query: v,
            searchResultsPosition: x
        });
    return (0, i.jsx)(a.Clickable, {
        className: p.clickable,
        innerRef: (e) => (b.current = e),
        onClick: C,
        onContextMenu: _,
        children: (0, i.jsxs)(a.FocusBlock, {
            className: p.focusBlock,
            children: [
                (0, i.jsx)(u.Z, {
                    src: N,
                    className: p.icon,
                    'aria-hidden': !0,
                    rendersPlaceholder: !0
                }),
                (0, i.jsxs)('div', {
                    className: p.cmdDetails,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: 'heading-md/semibold',
                            color: 'header-primary',
                            lineClamp: 1,
                            children: null !== (n = null == t ? void 0 : t.displayName) && void 0 !== n ? n : g
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            lineClamp: 1,
                            children: E
                        })
                    ]
                }),
                null != t
                    ? (0, i.jsx)(a.Text, {
                          className: p.cmdAppName,
                          variant: 'text-sm/normal',
                          color: 'text-secondary',
                          children: g
                      })
                    : null,
                (0, i.jsx)('div', { className: p.underline })
            ]
        })
    });
}
