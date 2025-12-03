n.d(t, { default: () => P }), n(388685);
var r = n(54381),
    o = n(473749),
    i = n(442837),
    l = n(704215),
    a = n(481060),
    c = n(493773),
    s = n(243778),
    u = n(886880),
    d = n(82084),
    f = n(131051),
    b = n(663389),
    y = n(594174),
    p = n(88658),
    g = n(996733),
    O = n(313789),
    j = n(914578),
    v = n(920952),
    m = n(518596),
    h = n(388032),
    x = n(942408);
function S(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, p.QB)({
        destinationPane: t,
        originPane: n,
        subsection: b.Z.getSubsection(),
        source: b.Z.getAnalyticsLocation(),
        locationStack: b.Z.getAnalyticsLocations(),
    });
}
function P(e) {
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
    let l = g.Z.useField("query"),
        { node: a, directory: s } = (0, f.ZP)(v.Z, l),
        u = null != t && null != s.entry(t) ? t : void 0,
        p = o.useRef(null);
    return ((0, c.ZP)(() => {
        let e = b.Z.getSection();
        null != e &&
            (S({
                destinationPanel: e,
                originPanel: null,
            }),
            (p.current = e));
    }),
    (0, i.e7)([y.default], () => null != y.default.getCurrentUser()))
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
                      sidebarFooter: j.Z,
                      onPanelChange: (e) => {
                          let t = (0, m.getUserSettingsSectionsByWebUserSettings)().get(e);
                          null != t &&
                              (S({
                                  destinationPanel: t,
                                  originPanel: p.current,
                              }),
                              (p.current = t));
                      },
                      target: u,
                      defaultTarget: O.n.ACCOUNT_PANEL,
                  },
                  n,
              ),
          )
        : null;
}
function C() {
    let e = g.Z.useField("query"),
        t = o.useRef(null),
        [n, i] = (0, s.US)([l.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
        c = o.useMemo(
            () => ({
                title: h.intl.string(h.t.Kv519a),
                body: h.intl.string(h.t.cTGJBZ),
                badge: "new",
                position: "right",
                align: "center",
                scrollBehavior: "sticky",
            }),
            [],
        ),
        d = o.useCallback((e) => {
            g.Z.setState({ query: e });
        }, []),
        f = o.useCallback(() => {
            g.Z.setState({ query: "" });
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
function _() {
    return (0, r.jsxs)("div", {
        className: x.emptySearchResultsContainer,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: h.intl.string(h.t.zihbmv),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: h.intl.string(h.t.XclvsB),
            }),
        ],
    });
}
