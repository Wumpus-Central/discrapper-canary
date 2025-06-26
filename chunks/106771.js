n.d(t, { Z: () => h }), n(953529);
var l = n(255367),
    i = n(73800),
    r = n(481060),
    a = n(239091),
    o = n(973616),
    s = n(783097),
    c = n(176412),
    u = n(570949),
    d = n(753972),
    p = n(532309),
    m = n(654715),
    f = n(413097);
function h(e) {
    var t;
    let { command: n, application: h, onClick: v, query: y, searchResultsPosition: x } = e,
        b = i.useCallback(
            (e) => {
                if ((0, s.BQ)(h)) {
                    let t = h instanceof o.ZP ? h : o.ZP.createFromServer(h);
                    (0, a.vq)(e, (e) =>
                        (0, l.jsx)(
                            u.Z,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        l = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (l = l.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        l.forEach(function (t) {
                                            var l;
                                            (l = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: l,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = l);
                                        });
                                }
                                return e;
                            })({ application: t }, e)
                        )
                    );
                }
            },
            [h]
        ),
        { iconURL: g, name: j, description: N } = i.useMemo(() => (0, s.sl)(h, { fakeAppIconURL: f }), [h]),
        C = i.useMemo(() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.displayDescription) ? e : N;
            return null == t ? null : (0, c.ae)(t, void 0);
        }, [N, null == n ? void 0 : n.displayDescription]),
        { trackSearchResultsItemImpressionRef: E } = (0, p.Z)({
            applicationId: h.id,
            commandId: null == n ? void 0 : n.id,
            query: y,
            searchResultsPosition: x
        });
    return (0, l.jsx)(r.P3F, {
        className: m.clickable,
        innerRef: (e) => {
            E.current = e;
        },
        onClick: v,
        onContextMenu: b,
        children: (0, l.jsxs)(r.Rny, {
            className: m.focusBlock,
            children: [
                (0, l.jsx)(d.Z, {
                    src: g,
                    className: m.icon,
                    'aria-hidden': !0,
                    rendersPlaceholder: !0
                }),
                (0, l.jsxs)('div', {
                    className: m.cmdDetails,
                    children: [
                        (0, l.jsx)(r.X6q, {
                            variant: 'heading-md/semibold',
                            color: 'header-primary',
                            lineClamp: 1,
                            children: null != (t = null == n ? void 0 : n.displayName) ? t : j
                        }),
                        (0, l.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            lineClamp: 1,
                            children: C
                        })
                    ]
                }),
                null != n
                    ? (0, l.jsx)(r.Text, {
                          className: m.cmdAppName,
                          variant: 'text-sm/normal',
                          color: 'text-secondary',
                          children: j
                      })
                    : null,
                (0, l.jsx)('div', { className: m.underline })
            ]
        })
    });
}
