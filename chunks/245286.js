n.d(t, { default: () => S }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(442837),
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
    x = n(388032),
    O = n(942408);
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
    let i = j.Z.useField("query"),
        { node: a, directory: s } = (0, f.Z)(g.Z, i),
        u = null != t && null != s.entry(t) ? t : void 0,
        y = l.useRef(null);
    return ((0, c.ZP)(() => {
        let e = b.Z.getSection();
        null != e &&
            (P({
                destinationPanel: e,
                originPanel: null,
            }),
            (y.current = e));
    }),
    (0, o.e7)([p.default], () => null != p.default.getCurrentUser()))
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
        t = l.useRef(null),
        [n, o] = (0, s.US)([i.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
        c = l.useMemo(
            () => ({
                title: x.intl.string(x.t.Kv519a),
                body: x.intl.string(x.t.cTGJBZ),
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
                    props: c,
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
                children: x.intl.string(x.t.zihbmv),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: x.intl.string(x.t.XclvsB),
            }),
        ],
    });
}
