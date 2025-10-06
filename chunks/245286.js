n.d(t, { default: () => O }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(704215),
    i = n(481060),
    a = n(493773),
    s = n(243778),
    c = n(82084),
    u = n(218353),
    d = n(131051),
    f = n(663389),
    m = n(88658),
    b = n(996733),
    j = n(313789),
    p = n(914578),
    x = n(920952),
    v = n(518596),
    y = n(388032),
    h = n(942408);
function g(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, m.QB)({
        destinationPane: t,
        originPane: n,
        subsection: f.Z.getSubsection(),
        source: f.Z.getAnalyticsLocation(),
        locationStack: f.Z.getAnalyticsLocations(),
    });
}
function O(e) {
    var t,
        { target: n } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["target"]);
    let i = b.Z.useField("query"),
        { node: s, directory: u } = (0, d.Z)(x.Z, i),
        m = ((t = j.n.ACCOUNT_PANEL), null == u.entry(n) ? t : n),
        y = l.useRef(null);
    return (
        (0, a.ZP)(() => {
            let e = f.Z.getSection();
            null != e &&
                (g({
                    destinationPanel: e,
                    originPanel: null,
                }),
                (y.current = e));
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
                    sidebarHeader: C,
                    emptyState: _,
                    sidebarFooter: p.Z,
                    onPanelChange: (e) => {
                        let t = (0, v.getUserSettingsSectionsByWebUserSettings)().get(e);
                        null != t &&
                            (g({
                                destinationPanel: t,
                                originPanel: y.current,
                            }),
                            (y.current = t));
                    },
                    target: m,
                },
                o,
            ),
        )
    );
}
function C() {
    let e = b.Z.useField("query"),
        t = l.useRef(null),
        [n, a] = (0, s.US)([o.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
        c = l.useMemo(
            () => ({
                title: y.intl.string(y.t.Kv519f),
                body: y.intl.string(y.t.cTGJBQ),
                badge: "new",
                position: "right",
                align: "center",
                scrollBehavior: "sticky",
            }),
            [],
        ),
        d = l.useCallback((e) => {
            b.Z.setState({ query: e });
        }, []),
        f = l.useCallback(() => {
            b.Z.setState({ query: "" });
        }, []);
    return (0, r.jsx)("div", {
        children: (0, r.jsxs)("div", {
            className: h.searchBarContainer,
            children: [
                (0, r.jsx)(i.E1j, {
                    size: "md",
                    query: e,
                    onChange: d,
                    onClear: f,
                }),
                (0, r.jsx)("div", {
                    className: h.popoverAnchor,
                    ref: t,
                }),
                (0, r.jsx)(u.Z, {
                    dismissibleContentType: o.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
                    targetElementRef: t,
                    visibleContent: n,
                    markAsDismissed: a,
                    props: c,
                }),
            ],
        }),
    });
}
function _() {
    return (0, r.jsxs)("div", {
        className: h.emptySearchResultsContainer,
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-sm/semibold",
                color: "text-primary",
                children: y.intl.string(y.t.zihbmp),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: y.intl.string(y.t.XclvsL),
            }),
        ],
    });
}
