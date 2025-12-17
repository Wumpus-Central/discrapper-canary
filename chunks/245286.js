n.d(t, { default: () => S }), n(388685), n(358797);
var r = n(54381),
    o = n(473749),
    a = n(24156),
    i = n(481060),
    l = n(893776),
    c = n(493773),
    s = n(82084),
    u = n(663389),
    f = n(585483),
    d = n(88658),
    b = n(996733),
    y = n(313789),
    p = n(914578),
    g = n(342386),
    O = n(920952),
    m = n(518596),
    j = n(981631),
    v = n(388032),
    h = n(767254);
function x(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, d.QB)({
        destinationPane: t,
        originPane: n,
        subsection: u.Z.getSubsection(),
        source: u.Z.getAnalyticsLocation(),
        locationStack: u.Z.getAnalyticsLocations(),
    });
}
function S(e) {
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
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["target"]);
    let i = b.Z.useField("query"),
        d = o.useRef(null);
    (0, c.ZP)(() => {
        let e = u.Z.getSection();
        null != e &&
            (x({
                destinationPanel: e,
                originPanel: null,
            }),
            (d.current = e));
    });
    let v = o.useCallback((e) => {
            b.Z.setState({ query: e });
        }, []),
        [h, S] = o.useState(!1);
    return (o.useEffect(() => {
        let e = () => {
            (0, a.flushSync)(() => {
                S(!0), (0, g.default)();
            }),
                setImmediate(() => {
                    l.Z.logout("settings");
                });
        };
        return (
            f.S.subscribe(j.CkL.SETTINGS_TRIGGER_LOGOUT, e),
            () => {
                f.S.unsubscribe(j.CkL.SETTINGS_TRIGGER_LOGOUT, e);
            }
        );
    }, []),
    h)
        ? null
        : (0, r.jsx)(
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
                      partialRoot: O.E,
                      emptyState: P,
                      sidebarFooter: p.Z,
                      onPanelChange: (e) => {
                          let t = (0, m.getUserSettingsSectionsByWebUserSettings)().get(e);
                          null != t &&
                              (x({
                                  destinationPanel: t,
                                  originPanel: d.current,
                              }),
                              (d.current = t));
                      },
                      target: t,
                      defaultTarget: y.n.ACCOUNT_PANEL,
                      searchQuery: i,
                      onSearchChange: v,
                  },
                  n,
              ),
          );
}
function P() {
    return (0, r.jsxs)("div", {
        className: h.emptySearchResultsContainer,
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: v.intl.string(v.t.zihbmv),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: v.intl.string(v.t.XclvsB),
            }),
        ],
    });
}
