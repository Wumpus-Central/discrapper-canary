n.d(t, { default: () => w }), n(388685), n(358797);
var r = n(54381),
    o = n(473749),
    i = n(24156),
    l = n(704215),
    a = n(481060),
    c = n(893776),
    s = n(493773),
    u = n(243778),
    d = n(886880),
    f = n(82084),
    b = n(131051),
    y = n(663389),
    p = n(585483),
    g = n(88658),
    O = n(996733),
    j = n(313789),
    m = n(914578),
    v = n(342386),
    h = n(920952),
    x = n(518596),
    S = n(981631),
    P = n(388032),
    C = n(942408);
function _(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, g.QB)({
        destinationPane: t,
        originPane: n,
        subsection: y.Z.getSubsection(),
        source: y.Z.getAnalyticsLocation(),
        locationStack: y.Z.getAnalyticsLocations(),
    });
}
function w(e) {
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
    let l = O.Z.useField("query"),
        { node: a, directory: u } = (0, b.ZP)(h.E, l),
        d = null != t && null != u.entry(t) ? t : void 0,
        g = o.useRef(null);
    (0, s.ZP)(() => {
        let e = y.Z.getSection();
        null != e &&
            (_({
                destinationPanel: e,
                originPanel: null,
            }),
            (g.current = e));
    });
    let [P, C] = o.useState(!1);
    return (o.useEffect(() => {
        let e = () => {
            (0, i.flushSync)(() => {
                C(!0), (0, v.default)();
            }),
                setImmediate(() => {
                    c.Z.logout("settings");
                });
        };
        return (
            p.S.subscribe(S.CkL.SETTINGS_TRIGGER_LOGOUT, e),
            () => {
                p.S.unsubscribe(S.CkL.SETTINGS_TRIGGER_LOGOUT, e);
            }
        );
    }, []),
    P)
        ? null
        : (0, r.jsx)(
              f.Z,
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
                      directory: u,
                      sidebarHeader: k,
                      emptyState: E,
                      sidebarFooter: m.Z,
                      onPanelChange: (e) => {
                          let t = (0, x.getUserSettingsSectionsByWebUserSettings)().get(e);
                          null != t &&
                              (_({
                                  destinationPanel: t,
                                  originPanel: g.current,
                              }),
                              (g.current = t));
                      },
                      target: d,
                      defaultTarget: j.n.ACCOUNT_PANEL,
                  },
                  n,
              ),
          );
}
function k() {
    let e = O.Z.useField("query"),
        t = o.useRef(null),
        [n, i] = (0, u.US)([l.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
        c = o.useMemo(
            () => ({
                title: P.intl.string(P.t.Kv519a),
                body: P.intl.string(P.t.cTGJBZ),
                badge: "new",
                position: "right",
                align: "center",
                scrollBehavior: "sticky",
            }),
            [],
        ),
        s = o.useCallback((e) => {
            O.Z.setState({ query: e });
        }, []),
        f = o.useCallback(() => {
            O.Z.setState({ query: "" });
        }, []);
    return (0, r.jsx)("div", {
        children: (0, r.jsxs)("div", {
            className: C.searchBarContainer,
            children: [
                (0, r.jsx)(a.E1j, {
                    size: "md",
                    query: e,
                    onChange: s,
                    onClear: f,
                }),
                (0, r.jsx)("div", {
                    className: C.popoverAnchor,
                    ref: t,
                }),
                (0, r.jsx)(d.Z, {
                    dismissibleContentType: l.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
                    targetElementRef: t,
                    visibleContent: n,
                    markAsDismissed: i,
                    props: c,
                }),
            ],
        }),
    });
}
function E() {
    return (0, r.jsxs)("div", {
        className: C.emptySearchResultsContainer,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: P.intl.string(P.t.zihbmv),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: P.intl.string(P.t.XclvsB),
            }),
        ],
    });
}
