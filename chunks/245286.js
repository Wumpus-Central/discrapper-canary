n.d(t, { default: () => g });
var r = n(951288),
    o = n(647438),
    l = n(481060),
    i = n(493773),
    a = n(82084),
    s = n(131051),
    c = n(663389),
    u = n(88658),
    d = n(996733),
    f = n(313789),
    b = n(914578),
    p = n(920952),
    m = n(839469),
    j = n(518596),
    y = n(388032),
    x = n(942408);
function v(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, u.QB)({
        destinationPane: t,
        originPane: n,
        subsection: c.Z.getSubsection(),
        source: c.Z.getAnalyticsLocation(),
        locationStack: c.Z.getAnalyticsLocations(),
    });
}
function g(e) {
    var t,
        { target: n } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["target"]);
    let u = d.Z.useField("query"),
        { node: m, directory: y } = (0, s.Z)(p.Z, u),
        x = ((t = f.n.ACCOUNT_PANEL), null == y.entry(n) ? t : n),
        g = o.useRef(null);
    return (
        (0, i.ZP)(() => {
            let e = c.Z.getSection();
            null != e &&
                (v({
                    destinationPanel: e,
                    originPanel: null,
                }),
                (g.current = e));
        }),
        (0, r.jsx)(
            a.Z,
            (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    root: m,
                    directory: y,
                    sidebarHeader: h,
                    sidebarFooter: b.Z,
                    onPanelChange: (e) => {
                        let t = (0, j.getUserSettingsSectionsByWebUserSettings)().get(e);
                        null != t &&
                            (v({
                                destinationPanel: t,
                                originPanel: g.current,
                            }),
                            (g.current = t));
                    },
                    target: x,
                },
                l,
            ),
        )
    );
}
function h() {
    let e = d.Z.useField("query"),
        t = m.R.useField("hasSearchResults"),
        n = m.R.useField("searchResults"),
        i = o.useCallback((e) => {
            d.Z.setState({ query: e });
        }, []),
        a = o.useCallback(() => {
            d.Z.setState({ query: "" });
        }, []);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(l.E1j, {
                size: "md",
                query: e,
                onChange: i,
                onClear: a,
            }),
            t &&
                0 === n.length &&
                (0, r.jsxs)("div", {
                    className: x.emptySearchResultsContainer,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "text-primary",
                            children: y.intl.string(y.t.zihbmp),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: y.intl.string(y.t.XclvsL),
                        }),
                    ],
                }),
        ],
    });
}
