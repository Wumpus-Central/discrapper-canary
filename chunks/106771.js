n.d(t, { Z: () => h }), n(266796);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(239091),
    o = n(973616),
    c = n(783097),
    s = n(176412),
    u = n(570949),
    d = n(753972),
    p = n(532309),
    m = n(654715),
    f = n(413097);
function h(e) {
    var t;
    let { command: n, application: h, onClick: b, query: C, searchResultsPosition: _ } = e,
        x = r.useCallback(
            (e) => {
                if ((0, c.BQ)(h)) {
                    let t = h instanceof o.ZP ? h : o.ZP.createFromServer(h);
                    (0, a.vq)(e, (e) =>
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
            [h]
        ),
        { iconURL: v, name: y, description: N } = r.useMemo(() => (0, c.sl)(h, { fakeAppIconURL: f }), [h]),
        g = r.useMemo(() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.displayDescription) ? e : N;
            return null == t ? null : (0, s.ae)(t, void 0);
        }, [N, null == n ? void 0 : n.displayDescription]),
        { trackSearchResultsItemImpressionRef: j } = (0, p.Z)({
            applicationId: h.id,
            commandId: null == n ? void 0 : n.id,
            query: C,
            searchResultsPosition: _
        });
    return (0, i.jsx)(l.P3F, {
        className: m.clickable,
        innerRef: (e) => (j.current = e),
        onClick: b,
        onContextMenu: x,
        children: (0, i.jsxs)(l.Rny, {
            className: m.focusBlock,
            children: [
                (0, i.jsx)(d.Z, {
                    src: v,
                    className: m.icon,
                    'aria-hidden': !0,
                    rendersPlaceholder: !0
                }),
                (0, i.jsxs)('div', {
                    className: m.cmdDetails,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            variant: 'heading-md/semibold',
                            color: 'header-primary',
                            lineClamp: 1,
                            children: null != (t = null == n ? void 0 : n.displayName) ? t : y
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            lineClamp: 1,
                            children: g
                        })
                    ]
                }),
                null != n
                    ? (0, i.jsx)(l.Text, {
                          className: m.cmdAppName,
                          variant: 'text-sm/normal',
                          color: 'text-secondary',
                          children: y
                      })
                    : null,
                (0, i.jsx)('div', { className: m.underline })
            ]
        })
    });
}
