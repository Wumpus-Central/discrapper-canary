n.d(t, { default: () => T });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    o = n(493773),
    s = n(82084),
    a = n(131051),
    u = n(663389),
    c = n(88658),
    d = n(996733),
    g = n(313789),
    f = n(914578),
    y = n(920952),
    O = n(839469),
    E = n(518596),
    b = n(388032),
    p = n(942408);
function v(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, c.QB)({
        destinationPane: t,
        originPane: n,
        subsection: u.Z.getSubsection(),
        source: u.Z.getAnalyticsLocation(),
        locationStack: u.Z.getAnalyticsLocations(),
    });
}
function T(e) {
    var t,
        { target: n } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["target"]);
    let c = (0, d.Z7)(),
        { node: O, directory: b } = (0, a.Z)(y.Z, c),
        p = ((t = g.n.ACCOUNT_PANEL), null == b.entry(n) ? t : n),
        T = i.useRef(null);
    return (
        (0, o.ZP)(() => {
            let e = u.Z.getSection();
            null != e &&
                (v({
                    destinationPanel: e,
                    originPanel: null,
                }),
                (T.current = e));
        }),
        (0, r.jsx)(
            s.Z,
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
                    root: O,
                    directory: b,
                    sidebarHeader: S,
                    sidebarFooter: f.Z,
                    onPanelChange: (e) => {
                        let t = (0, E.getUserSettingsSectionsByWebUserSettings)().get(e);
                        null != t &&
                            (v({
                                destinationPanel: t,
                                originPanel: T.current,
                            }),
                            (T.current = t));
                    },
                    target: p,
                },
                l,
            ),
        )
    );
}
function S() {
    let e = (0, d.Z7)(),
        t = O.R.useField("hasSearchResults"),
        n = O.R.useField("searchResults");
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(l.E1j, {
                size: "md",
                query: e,
                onChange: d.yN,
                onClear: () => (0, d.yN)(""),
            }),
            t &&
                0 === n.length &&
                (0, r.jsxs)("div", {
                    className: p.emptySearchResultsContainer,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "text-primary",
                            children: b.intl.string(b.t.zihbmp),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: b.intl.string(b.t.XclvsL),
                        }),
                    ],
                }),
        ],
    });
}
