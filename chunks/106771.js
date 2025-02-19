n.d(t, { Z: () => f }), n(266796);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    o = n(239091),
    a = n(973616),
    s = n(783097),
    c = n(176412),
    u = n(570949),
    d = n(753972),
    m = n(532309),
    p = n(834380),
    h = n(413097);
function f(e) {
    var t;
    let { command: n, application: f, onClick: v, query: N, searchResultsPosition: x } = e,
        y = l.useCallback(
            (e) => {
                if ((0, s.BQ)(f)) {
                    let t = f instanceof a.ZP ? f : a.ZP.createFromServer(f);
                    (0, o.vq)(e, (e) =>
                        (0, i.jsx)(
                            u.Z,
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
            [f]
        ),
        { iconURL: b, name: E, description: C } = l.useMemo(() => (0, s.sl)(f, { fakeAppIconURL: h }), [f]),
        j = l.useMemo(() => {
            var e;
            let t = null !== (e = null == n ? void 0 : n.displayDescription) && void 0 !== e ? e : C;
            return null == t ? null : (0, c.ae)(t, void 0);
        }, [C, null == n ? void 0 : n.displayDescription]),
        { trackSearchResultsItemImpressionRef: g } = (0, m.Z)({
            applicationId: f.id,
            commandId: null == n ? void 0 : n.id,
            query: N,
            searchResultsPosition: x
        });
    return (0, i.jsx)(r.P3F, {
        className: p.clickable,
        innerRef: (e) => (g.current = e),
        onClick: v,
        onContextMenu: y,
        children: (0, i.jsxs)(r.Rny, {
            className: p.focusBlock,
            children: [
                (0, i.jsx)(d.Z, {
                    src: b,
                    className: p.icon,
                    'aria-hidden': !0,
                    rendersPlaceholder: !0
                }),
                (0, i.jsxs)('div', {
                    className: p.cmdDetails,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            variant: 'heading-md/semibold',
                            color: 'header-primary',
                            lineClamp: 1,
                            children: null !== (t = null == n ? void 0 : n.displayName) && void 0 !== t ? t : E
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            lineClamp: 1,
                            children: j
                        })
                    ]
                }),
                null != n
                    ? (0, i.jsx)(r.Text, {
                          className: p.cmdAppName,
                          variant: 'text-sm/normal',
                          color: 'text-secondary',
                          children: E
                      })
                    : null,
                (0, i.jsx)('div', { className: p.underline })
            ]
        })
    });
}
