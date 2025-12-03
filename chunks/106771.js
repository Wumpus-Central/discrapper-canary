n.d(t, { Z: () => g }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(239091),
    s = n(973616),
    l = n(783097),
    c = n(176412),
    u = n(570949),
    d = n(753972),
    f = n(532309),
    p = n(934347),
    _ = n(413097);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e) {
    var t;
    let { command: n, application: m, onClick: g, query: E, searchResultsPosition: b } = e,
        y = i.useCallback(
            (e) => {
                if ((0, l.BQ)(m)) {
                    let t = m instanceof s.ZP ? m : s.ZP.createFromServer(m);
                    (0, o.vq)(e, (e) => (0, r.jsx)(u.Z, h({ application: t }, e)));
                }
            },
            [m],
        ),
        { iconURL: O, name: v, description: S } = i.useMemo(() => (0, l.sl)(m, { fakeAppIconURL: _ }), [m]),
        I = i.useMemo(() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.displayDescription) ? e : S;
            return null == t ? null : (0, c.ae)(t, void 0);
        }, [S, null == n ? void 0 : n.displayDescription]),
        { trackSearchResultsItemImpressionRef: T } = (0, f.Z)({
            applicationId: m.id,
            commandId: null == n ? void 0 : n.id,
            query: E,
            searchResultsPosition: b,
        });
    return (0, r.jsx)(a.P3F, {
        className: p.clickable,
        innerRef: (e) => {
            T.current = e;
        },
        onClick: g,
        onContextMenu: y,
        children: (0, r.jsxs)(a.Rny, {
            className: p.focusBlock,
            children: [
                (0, r.jsx)(d.Z, {
                    src: O,
                    className: p.icon,
                    "aria-hidden": !0,
                    rendersPlaceholder: !0,
                }),
                (0, r.jsxs)("div", {
                    className: p.cmdDetails,
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: null != (t = null == n ? void 0 : n.displayName) ? t : v,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: I,
                        }),
                    ],
                }),
                null != n
                    ? (0, r.jsx)(a.Text, {
                          className: p.cmdAppName,
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: v,
                      })
                    : null,
                (0, r.jsx)("div", { className: p.underline }),
            ],
        }),
    });
}
