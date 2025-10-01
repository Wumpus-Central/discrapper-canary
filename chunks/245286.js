n.d(t, { default: () => C }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(704215),
    i = n(481060),
    a = n(493773),
    s = n(243778),
    c = n(82084),
    u = n(218353),
    d = n(131051),
    f = n(663389),
    b = n(88658),
    m = n(996733),
    p = n(313789),
    j = n(914578),
    x = n(920952),
    v = n(839469),
    y = n(518596),
    g = n(388032),
    h = n(942408);
function O(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, b.QB)({
        destinationPane: t,
        originPane: n,
        subsection: f.Z.getSubsection(),
        source: f.Z.getAnalyticsLocation(),
        locationStack: f.Z.getAnalyticsLocations(),
    });
}
function C(e) {
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
    let i = m.Z.useField("query"),
        { node: s, directory: u } = (0, d.Z)(x.Z, i),
        b = ((t = p.n.ACCOUNT_PANEL), null == u.entry(n) ? t : n),
        v = o.useRef(null);
    return (
        (0, a.ZP)(() => {
            let e = f.Z.getSection();
            null != e &&
                (O({
                    destinationPanel: e,
                    originPanel: null,
                }),
                (v.current = e));
        }),
        (0, r.jsx)(
            c.Z,
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
                    root: s,
                    directory: u,
                    sidebarHeader: _,
                    sidebarFooter: j.Z,
                    onPanelChange: (e) => {
                        let t = (0, y.getUserSettingsSectionsByWebUserSettings)().get(e);
                        null != t &&
                            (O({
                                destinationPanel: t,
                                originPanel: v.current,
                            }),
                            (v.current = t));
                    },
                    target: b,
                },
                l,
            ),
        )
    );
}
function _() {
    let e = m.Z.useField("query"),
        t = v.R.useField("hasSearchResults"),
        n = v.R.useField("searchResults"),
        a = o.useRef(null),
        [c, d] = (0, s.US)([l.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
        f = o.useMemo(
            () => ({
                title: g.intl.string(g.t.Kv519f),
                body: g.intl.string(g.t.cTGJBQ),
                badge: "new",
                position: "right",
                align: "center",
                scrollBehavior: "sticky",
            }),
            [],
        ),
        b = o.useCallback((e) => {
            m.Z.setState({ query: e });
        }, []),
        p = o.useCallback(() => {
            m.Z.setState({ query: "" });
        }, []);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)("div", {
                className: h.searchBarContainer,
                children: [
                    (0, r.jsx)(i.E1j, {
                        size: "md",
                        query: e,
                        onChange: b,
                        onClear: p,
                    }),
                    (0, r.jsx)("div", {
                        className: h.popoverAnchor,
                        ref: a,
                    }),
                    (0, r.jsx)(u.Z, {
                        dismissibleContentType: l.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
                        targetElementRef: a,
                        visibleContent: c,
                        markAsDismissed: d,
                        props: f,
                    }),
                ],
            }),
            t &&
                0 === n.length &&
                (0, r.jsxs)("div", {
                    className: h.emptySearchResultsContainer,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/semibold",
                            color: "text-primary",
                            children: g.intl.string(g.t.zihbmp),
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: g.intl.string(g.t.XclvsL),
                        }),
                    ],
                }),
        ],
    });
}
