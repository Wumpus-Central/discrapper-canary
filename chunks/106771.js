n.d(t, { Z: () => h }), n(953529);
var i = n(951288),
    l = n(647438),
    r = n(481060),
    a = n(239091),
    o = n(973616),
    s = n(783097),
    c = n(176412),
    u = n(570949),
    d = n(753972),
    p = n(532309),
    m = n(934347),
    f = n(413097);
function h(e) {
    var t;
    let { command: n, application: h, onClick: v, query: y, searchResultsPosition: g } = e,
        x = l.useCallback(
            (e) => {
                if ((0, s.BQ)(h)) {
                    let t = h instanceof o.ZP ? h : o.ZP.createFromServer(h);
                    (0, a.vq)(e, (e) =>
                        (0, i.jsx)(
                            u.Z,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({ application: t }, e),
                        ),
                    );
                }
            },
            [h],
        ),
        { iconURL: b, name: N, description: j } = l.useMemo(() => (0, s.sl)(h, { fakeAppIconURL: f }), [h]),
        C = l.useMemo(() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.displayDescription) ? e : j;
            return null == t ? null : (0, c.ae)(t, void 0);
        }, [j, null == n ? void 0 : n.displayDescription]),
        { trackSearchResultsItemImpressionRef: E } = (0, p.Z)({
            applicationId: h.id,
            commandId: null == n ? void 0 : n.id,
            query: y,
            searchResultsPosition: g,
        });
    return (0, i.jsx)(r.P3F, {
        className: m.clickable,
        innerRef: (e) => {
            E.current = e;
        },
        onClick: v,
        onContextMenu: x,
        children: (0, i.jsxs)(r.Rny, {
            className: m.focusBlock,
            children: [
                (0, i.jsx)(d.Z, {
                    src: b,
                    className: m.icon,
                    "aria-hidden": !0,
                    rendersPlaceholder: !0,
                }),
                (0, i.jsxs)("div", {
                    className: m.cmdDetails,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: null != (t = null == n ? void 0 : n.displayName) ? t : N,
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            lineClamp: 1,
                            children: C,
                        }),
                    ],
                }),
                null != n
                    ? (0, i.jsx)(r.Text, {
                          className: m.cmdAppName,
                          variant: "text-sm/normal",
                          color: "text-secondary",
                          children: N,
                      })
                    : null,
                (0, i.jsx)("div", { className: m.underline }),
            ],
        }),
    });
}
