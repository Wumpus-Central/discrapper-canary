n.d(t, { default: () => S }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(442837),
    i = n(704215),
    a = n(481060),
    s = n(493773),
    c = n(243778),
    u = n(886880),
    d = n(82084),
    f = n(131051),
    m = n(663389),
    b = n(594174),
    p = n(88658),
    j = n(996733),
    x = n(313789),
    v = n(914578),
    y = n(920952),
    h = n(518596),
    g = n(388032),
    O = n(942408);
function C(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, p.QB)({
        destinationPane: t,
        originPane: n,
        subsection: m.Z.getSubsection(),
        source: m.Z.getAnalyticsLocation(),
        locationStack: m.Z.getAnalyticsLocations(),
    });
}
function S(e) {
    var t,
        { target: n } = e,
        i = (function (e, t) {
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
    let a = j.Z.useField("query"),
        { node: c, directory: u } = (0, f.Z)(y.Z, a),
        p = ((t = x.n.ACCOUNT_PANEL), null == u.entry(n) ? t : n),
        g = l.useRef(null);
    return ((0, s.ZP)(() => {
        let e = m.Z.getSection();
        null != e &&
            (C({
                destinationPanel: e,
                originPanel: null,
            }),
            (g.current = e));
    }),
    (0, o.e7)([b.default], () => null != b.default.getCurrentUser()))
        ? (0, r.jsx)(
              d.Z,
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
                      root: c,
                      directory: u,
                      sidebarHeader: _,
                      emptyState: P,
                      sidebarFooter: v.Z,
                      onPanelChange: (e) => {
                          let t = (0, h.getUserSettingsSectionsByWebUserSettings)().get(e);
                          null != t &&
                              (C({
                                  destinationPanel: t,
                                  originPanel: g.current,
                              }),
                              (g.current = t));
                      },
                      target: p,
                  },
                  i,
              ),
          )
        : null;
}
function _() {
    let e = j.Z.useField("query"),
        t = l.useRef(null),
        [n, o] = (0, c.US)([i.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
        s = l.useMemo(
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
        d = l.useCallback((e) => {
            j.Z.setState({ query: e });
        }, []),
        f = l.useCallback(() => {
            j.Z.setState({ query: "" });
        }, []);
    return (0, r.jsx)("div", {
        children: (0, r.jsxs)("div", {
            className: O.searchBarContainer,
            children: [
                (0, r.jsx)(a.E1j, {
                    size: "md",
                    query: e,
                    onChange: d,
                    onClear: f,
                }),
                (0, r.jsx)("div", {
                    className: O.popoverAnchor,
                    ref: t,
                }),
                (0, r.jsx)(u.Z, {
                    dismissibleContentType: i.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
                    targetElementRef: t,
                    visibleContent: n,
                    markAsDismissed: o,
                    props: s,
                }),
            ],
        }),
    });
}
function P() {
    return (0, r.jsxs)("div", {
        className: O.emptySearchResultsContainer,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "text-primary",
                children: g.intl.string(g.t.zihbmp),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: g.intl.string(g.t.XclvsL),
            }),
        ],
    });
}
