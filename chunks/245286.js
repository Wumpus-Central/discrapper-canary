n.d(t, { default: () => S }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(442837),
    i = n(704215),
    a = n(481060),
    c = n(493773),
    s = n(243778),
    u = n(886880),
    d = n(82084),
    f = n(131051),
    b = n(663389),
    p = n(594174),
    y = n(88658),
    j = n(996733),
    m = n(313789),
    v = n(914578),
    g = n(920952),
    h = n(518596),
    O = n(388032),
    x = n(942408);
function P(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, y.QB)({
        destinationPane: t,
        originPane: n,
        subsection: b.Z.getSubsection(),
        source: b.Z.getAnalyticsLocation(),
        locationStack: b.Z.getAnalyticsLocations(),
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
    let i = j.Z.useField("query"),
        { node: a, directory: s } = (0, f.Z)(g.Z, i),
        u = null != t && null != s.entry(t) ? t : void 0,
        y = o.useRef(null);
    return ((0, c.ZP)(() => {
        let e = b.Z.getSection();
        null != e &&
            (P({
                destinationPanel: e,
                originPanel: null,
            }),
            (y.current = e));
    }),
    (0, l.e7)([p.default], () => null != p.default.getCurrentUser()))
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
                      directory: s,
                      sidebarHeader: C,
                      emptyState: _,
                      sidebarFooter: v.Z,
                      onPanelChange: (e) => {
                          let t = (0, h.getUserSettingsSectionsByWebUserSettings)().get(e);
                          null != t &&
                              (P({
                                  destinationPanel: t,
                                  originPanel: y.current,
                              }),
                              (y.current = t));
                      },
                      target: u,
                      defaultTarget: m.n.ACCOUNT_PANEL,
                  },
                  n,
              ),
          )
        : null;
}
function C() {
    let e = j.Z.useField("query"),
        t = o.useRef(null),
        [n, l] = (0, s.US)([i.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
        c = o.useMemo(
            () => ({
                title: O.intl.string(O.t.Kv519a),
                body: O.intl.string(O.t.cTGJBZ),
                badge: "new",
                position: "right",
                align: "center",
                scrollBehavior: "sticky",
            }),
            [],
        ),
        d = o.useCallback((e) => {
            j.Z.setState({ query: e });
        }, []),
        f = o.useCallback(() => {
            j.Z.setState({ query: "" });
        }, []);
    return (0, r.jsx)("div", {
        children: (0, r.jsxs)("div", {
            className: x.searchBarContainer,
            children: [
                (0, r.jsx)(a.E1j, {
                    size: "md",
                    query: e,
                    onChange: d,
                    onClear: f,
                }),
                (0, r.jsx)("div", {
                    className: x.popoverAnchor,
                    ref: t,
                }),
                (0, r.jsx)(u.Z, {
                    dismissibleContentType: i.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
                    targetElementRef: t,
                    visibleContent: n,
                    markAsDismissed: l,
                    props: c,
                }),
            ],
        }),
    });
}
function _() {
    return (0, r.jsxs)("div", {
        className: x.emptySearchResultsContainer,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "text-primary",
                children: O.intl.string(O.t.zihbmv),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: O.intl.string(O.t.XclvsB),
            }),
        ],
    });
}
