n.d(t, { Z: () => y }), n(953529);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    o = n(239091),
    a = n(723163),
    s = n(973616),
    c = n(573188),
    u = n(783097),
    d = n(176412),
    p = n(570949),
    m = n(753972),
    f = n(635753),
    h = n(532309),
    b = n(267934),
    _ = n(413097);
function y(e) {
    var t;
    let { command: n, application: y, onClick: x, query: C, searchResultsPosition: v, onClickAppCardFriends: g } = e,
        N = r.useCallback(
            (e) => {
                if ((0, u.BQ)(y)) {
                    let t = y instanceof s.ZP ? y : s.ZP.createFromServer(y);
                    (0, o.vq)(e, (e) =>
                        (0, i.jsx)(
                            p.Z,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({ application: t }, e)
                        )
                    );
                }
            },
            [y]
        ),
        { iconURL: j, name: P, description: O } = r.useMemo(() => (0, u.sl)(y, { fakeAppIconURL: _ }), [y]),
        E = r.useMemo(() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.displayDescription) ? e : O;
            return null == t ? null : (0, d.ae)(t, void 0);
        }, [O, null == n ? void 0 : n.displayDescription]),
        { trackSearchResultsItemImpressionRef: A } = (0, h.Z)({
            applicationId: y.id,
            commandId: null == n ? void 0 : n.id,
            query: C,
            searchResultsPosition: v
        }),
        { enabled: I } = c.X.useExperiment({ location: 'AppLauncherSearchCard' }, { autoTrackExposure: !0 }),
        { friends: S } = (0, a.Z)(y),
        T = I && (0, u.ye)(y) && S.length > 0;
    return (0, i.jsx)(l.P3F, {
        className: b.clickable,
        innerRef: (e) => (A.current = e),
        onClick: x,
        onContextMenu: N,
        children: (0, i.jsxs)(l.Rny, {
            className: b.focusBlock,
            children: [
                (0, i.jsx)(m.Z, {
                    src: j,
                    className: b.icon,
                    'aria-hidden': !0,
                    rendersPlaceholder: !0
                }),
                (0, i.jsxs)('div', {
                    className: b.cmdDetails,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            variant: 'heading-md/semibold',
                            color: 'header-primary',
                            lineClamp: 1,
                            children: null != (t = null == n ? void 0 : n.displayName) ? t : P
                        }),
                        T
                            ? (0, i.jsx)(f.Z, {
                                  friends: S,
                                  onClick: g,
                                  className: b.friendsWhoPlayHover,
                                  shortText: !0
                              })
                            : (0, i.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-secondary',
                                  lineClamp: 1,
                                  children: E
                              })
                    ]
                }),
                null != n
                    ? (0, i.jsx)(l.Text, {
                          className: b.cmdAppName,
                          variant: 'text-sm/normal',
                          color: 'text-secondary',
                          children: P
                      })
                    : null,
                (0, i.jsx)('div', { className: b.underline })
            ]
        })
    });
}
