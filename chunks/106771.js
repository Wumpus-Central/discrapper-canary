n.d(t, { Z: () => C }), n(953529);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(239091),
    o = n(723163),
    s = n(973616),
    c = n(573188),
    d = n(783097),
    u = n(176412),
    p = n(570949),
    m = n(753972),
    f = n(635753),
    h = n(532309),
    b = n(654715),
    x = n(413097);
function C(e) {
    var t;
    let { command: n, application: C, onClick: _, query: v, searchResultsPosition: y, onClickAppCardFriends: N } = e,
        g = r.useCallback(
            (e) => {
                if ((0, d.BQ)(C)) {
                    let t = C instanceof s.ZP ? C : s.ZP.createFromServer(C);
                    (0, a.vq)(e, (e) =>
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
            [C]
        ),
        { iconURL: j, name: P, description: E } = r.useMemo(() => (0, d.sl)(C, { fakeAppIconURL: x }), [C]),
        A = r.useMemo(() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.displayDescription) ? e : E;
            return null == t ? null : (0, u.ae)(t, void 0);
        }, [E, null == n ? void 0 : n.displayDescription]),
        { trackSearchResultsItemImpressionRef: I } = (0, h.Z)({
            applicationId: C.id,
            commandId: null == n ? void 0 : n.id,
            query: v,
            searchResultsPosition: y
        }),
        { enabled: O } = c.X.useExperiment({ location: 'AppLauncherSearchCard' }, { autoTrackExposure: !0 }),
        { friends: S } = (0, o.Z)(C),
        T = O && (0, d.ye)(C) && S.length > 0;
    return (0, i.jsx)(l.P3F, {
        className: b.clickable,
        innerRef: (e) => (I.current = e),
        onClick: _,
        onContextMenu: g,
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
                                  onClick: N,
                                  className: b.friendsWhoPlayHover,
                                  shortText: !0
                              })
                            : (0, i.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-secondary',
                                  lineClamp: 1,
                                  children: A
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
