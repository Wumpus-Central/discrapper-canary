n.d(t, { default: () => P }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(493773),
    c = n(243778),
    u = n(886880),
    d = n(82084),
    f = n(131051),
    p = n(663389),
    b = n(594174),
    y = n(88658),
    g = n(996733),
    v = n(313789),
    m = n(914578),
    h = n(920952),
    x = n(518596),
    j = n(388032),
    O = n(942408);
function C(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, y.QB)({
        destinationPane: t,
        originPane: n,
        subsection: p.Z.getSubsection(),
        source: p.Z.getAnalyticsLocation(),
        locationStack: p.Z.getAnalyticsLocations(),
    });
}
function P(e) {
    var { target: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["target"]);
    let o = g.Z.useField("query"),
        { node: a, directory: c } = (0, f.Z)(h.Z, o),
        u = null != t && null != c.entry(t) ? t : void 0,
        y = l.useRef(null);
    return ((0, s.ZP)(() => {
        let e = p.Z.getSection();
        null != e &&
            (C({
                destinationPanel: e,
                originPanel: null,
            }),
            (y.current = e));
    }),
    (0, i.e7)([b.default], () => null != b.default.getCurrentUser()))
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
                      root: a,
                      directory: c,
                      sidebarHeader: S,
                      emptyState: _,
                      sidebarFooter: m.Z,
                      onPanelChange: (e) => {
                          let t = (0, x.getUserSettingsSectionsByWebUserSettings)().get(e);
                          null != t &&
                              (C({
                                  destinationPanel: t,
                                  originPanel: y.current,
                              }),
                              (y.current = t));
                      },
                      target: u,
                      defaultTarget: v.n.ACCOUNT_PANEL,
                  },
                  n,
              ),
          )
        : null;
}
function S() {
    let e = g.Z.useField("query"),
        t = l.useRef(null),
        [n, i] = (0, c.US)([o.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
        s = l.useMemo(
            () => ({
                title: j.intl.string(j.t.Kv519a),
                body: j.intl.string(j.t.cTGJBZ),
                badge: "new",
                position: "right",
                align: "center",
                scrollBehavior: "sticky",
            }),
            [],
        ),
        d = l.useCallback((e) => {
            g.Z.setState({ query: e });
        }, []),
        f = l.useCallback(() => {
            g.Z.setState({ query: "" });
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
                    dismissibleContentType: o.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
                    targetElementRef: t,
                    visibleContent: n,
                    markAsDismissed: i,
                    props: s,
                }),
            ],
        }),
    });
}
function _() {
    return (0, r.jsxs)("div", {
        className: O.emptySearchResultsContainer,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "text-primary",
                children: j.intl.string(j.t.zihbmv),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: j.intl.string(j.t.XclvsB),
            }),
        ],
    });
}
