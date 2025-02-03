n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    o = n(239091),
    s = n(973616),
    r = n(783097),
    c = n(176412),
    d = n(570949),
    u = n(753972),
    m = n(532309),
    p = n(51688),
    h = n(413097);
function v(e) {
    var t;
    let { command: n, application: v, onClick: x, query: f, searchResultsPosition: N } = e,
        C = l.useCallback(
            (e) => {
                if ((0, r.BQ)(v)) {
                    let t = v instanceof s.ZP ? v : s.ZP.createFromServer(v);
                    (0, o.vq)(e, (e) =>
                        (0, i.jsx)(d.Z, {
                            application: t,
                            ...e
                        })
                    );
                }
            },
            [v]
        ),
        { iconURL: E, name: A, description: I } = l.useMemo(() => (0, r.sl)(v, { fakeAppIconURL: h }), [v]),
        _ = l.useMemo(() => {
            var e;
            let t = null !== (e = null == n ? void 0 : n.displayDescription) && void 0 !== e ? e : I;
            return null == t ? null : (0, c.ae)(t, void 0);
        }, [I, null == n ? void 0 : n.displayDescription]),
        { trackSearchResultsItemImpressionRef: g } = (0, m.Z)({
            applicationId: v.id,
            commandId: null == n ? void 0 : n.id,
            query: f,
            searchResultsPosition: N
        });
    return (0, i.jsx)(a.P3F, {
        className: p.clickable,
        innerRef: (e) => (g.current = e),
        onClick: x,
        onContextMenu: C,
        children: (0, i.jsxs)(a.Rny, {
            className: p.focusBlock,
            children: [
                (0, i.jsx)(u.Z, {
                    src: E,
                    className: p.icon,
                    'aria-hidden': !0,
                    rendersPlaceholder: !0
                }),
                (0, i.jsxs)('div', {
                    className: p.cmdDetails,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            variant: 'heading-md/semibold',
                            color: 'header-primary',
                            lineClamp: 1,
                            children: null !== (t = null == n ? void 0 : n.displayName) && void 0 !== t ? t : A
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            lineClamp: 1,
                            children: _
                        })
                    ]
                }),
                null != n
                    ? (0, i.jsx)(a.Text, {
                          className: p.cmdAppName,
                          variant: 'text-sm/normal',
                          color: 'text-secondary',
                          children: A
                      })
                    : null,
                (0, i.jsx)('div', { className: p.underline })
            ]
        })
    });
}
