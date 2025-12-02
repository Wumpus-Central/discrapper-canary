n.d(t, { default: () => v });
var r = n(54381),
    o = n(473749),
    i = n(442837),
    l = n(481060),
    a = n(493773),
    c = n(82084),
    s = n(663389),
    u = n(594174),
    d = n(88658),
    f = n(996733),
    b = n(313789),
    y = n(914578),
    p = n(920952),
    g = n(518596),
    O = n(388032),
    j = n(942408);
function m(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, d.QB)({
        destinationPane: t,
        originPane: n,
        subsection: s.Z.getSubsection(),
        source: s.Z.getAnalyticsLocation(),
        locationStack: s.Z.getAnalyticsLocations(),
    });
}
function v(e) {
    var { target: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["target"]);
    let l = f.Z.useField("query"),
        d = o.useRef(null);
    (0, a.ZP)(() => {
        let e = s.Z.getSection();
        null != e &&
            (m({
                destinationPanel: e,
                originPanel: null,
            }),
            (d.current = e));
    });
    let O = o.useCallback((e) => {
        f.Z.setState({ query: e });
    }, []);
    return (0, i.e7)([u.default], () => null != u.default.getCurrentUser())
        ? (0, r.jsx)(
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
                      partialRoot: p.Z,
                      emptyState: h,
                      sidebarFooter: y.Z,
                      onPanelChange: (e) => {
                          let t = (0, g.getUserSettingsSectionsByWebUserSettings)().get(e);
                          null != t &&
                              (m({
                                  destinationPanel: t,
                                  originPanel: d.current,
                              }),
                              (d.current = t));
                      },
                      target: t,
                      defaultTarget: b.n.ACCOUNT_PANEL,
                      searchQuery: l,
                      onSearchChange: O,
                  },
                  n,
              ),
          )
        : null;
}
function h() {
    return (0, r.jsxs)("div", {
        className: j.emptySearchResultsContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-primary",
                children: O.intl.string(O.t.zihbmv),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: O.intl.string(O.t.XclvsB),
            }),
        ],
    });
}
