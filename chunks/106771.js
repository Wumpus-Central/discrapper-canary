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
    _ = n(258849),
    p = n(413097);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e) {
    var t;
    let { command: n, application: h, onClick: g, query: E, searchResultsPosition: b } = e,
        y = i.useCallback(
            (e) => {
                if ((0, l.BQ)(h)) {
                    let t = h instanceof s.ZP ? h : s.ZP.createFromServer(h);
                    (0, o.vq)(e, (e) => (0, r.jsx)(u.Z, m({ application: t }, e)));
                }
            },
            [h],
        ),
        { iconURL: O, name: v, description: I } = i.useMemo(() => (0, l.sl)(h, { fakeAppIconURL: p }), [h]),
        T = i.useMemo(() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.displayDescription) ? e : I;
            return null == t ? null : (0, c.ae)(t, void 0);
        }, [I, null == n ? void 0 : n.displayDescription]),
        { trackSearchResultsItemImpressionRef: S } = (0, f.Z)({
            applicationId: h.id,
            commandId: null == n ? void 0 : n.id,
            query: E,
            searchResultsPosition: b,
        });
    return (0, r.jsx)(a.P3F, {
        className: _.clickable,
        innerRef: (e) => {
            S.current = e;
        },
        onClick: g,
        onContextMenu: y,
        children: (0, r.jsxs)(a.Rny, {
            className: _.focusBlock,
            children: [
                (0, r.jsx)(d.Z, {
                    src: O,
                    className: _.icon,
                    "aria-hidden": !0,
                    rendersPlaceholder: !0,
                }),
                (0, r.jsxs)("div", {
                    className: _.cmdDetails,
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: null != (t = null == n ? void 0 : n.displayName) ? t : v,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            lineClamp: 1,
                            children: T,
                        }),
                    ],
                }),
                null != n
                    ? (0, r.jsx)(a.Text, {
                          className: _.cmdAppName,
                          variant: "text-sm/normal",
                          color: "text-secondary",
                          children: v,
                      })
                    : null,
                (0, r.jsx)("div", { className: _.underline }),
            ],
        }),
    });
}
