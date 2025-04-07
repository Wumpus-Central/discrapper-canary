n.d(t, { Z: () => x }), n(953529);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(239091),
    o = n(723163),
    c = n(973616),
    s = n(573188),
    u = n(783097),
    d = n(176412),
    p = n(570949),
    m = n(753972),
    f = n(635753),
    h = n(532309),
    b = n(654715),
    C = n(413097);
function x(e) {
    var t;
    let { command: n, application: x, onClick: _, query: y, searchResultsPosition: v, onClickAppCardFriends: N } = e,
        g = r.useCallback(
            (e) => {
                if ((0, u.BQ)(x)) {
                    let t = x instanceof c.ZP ? x : c.ZP.createFromServer(x);
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
            [x]
        ),
        { iconURL: j, name: P, description: E } = r.useMemo(() => (0, u.sl)(x, { fakeAppIconURL: C }), [x]),
        A = r.useMemo(() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.displayDescription) ? e : E;
            return null == t ? null : (0, d.ae)(t, void 0);
        }, [E, null == n ? void 0 : n.displayDescription]),
        { trackSearchResultsItemImpressionRef: I } = (0, h.Z)({
            applicationId: x.id,
            commandId: null == n ? void 0 : n.id,
            query: y,
            searchResultsPosition: v
        }),
        { enabled: O } = s.X.useExperiment({ location: 'AppLauncherSearchCard' }, { autoTrackExposure: !0 }),
        { friends: S } = (0, o.Z)(x),
        T = O && (0, u.ye)(x) && S.length > 0;
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
