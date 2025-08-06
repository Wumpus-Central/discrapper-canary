n.d(t, {
    Z: () => v,
    p: () => S,
}),
    n(539854),
    n(388685),
    n(361932),
    n(187205);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(434650),
    c = n(377171),
    u = n(804932),
    d = n(725739),
    h = n(370774),
    p = n(334426),
    f = n(982183),
    g = n(388032),
    m = n(381231);
function b(e) {
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
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
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
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let y = () => {
        let e = (0, h.ux)();
        return (0, i.useMemo)(() => {
            let t = [f.V5.ALL, f.V5.MENTIONS];
            return e && t.push(f.V5.BOOKMARKS), t.push(f.V5.ANNOUNCEMENTS), t;
        }, [e]);
    },
    C = {
        [f.V5.ALL]: !1,
        [f.V5.BOOKMARKS]: !1,
        [f.V5.MENTIONS]: !1,
        [f.V5.ANNOUNCEMENTS]: !1,
    };
function v() {
    let e = (0, f.NV)(),
        t = y(),
        [n, l] = (0, i.useState)(C),
        a = t.filter((e) => !n[e]),
        { selectedFilter: c, setSelectedFilter: u } = (0, d.Z)();
    return (0, r.jsxs)("div", {
        className: m.filters,
        children: [
            (0, r.jsx)(s.njP, {
                look: "grey",
                orientation: "horizontal",
                onItemSelect: u,
                selectedItem: c,
                className: m.tabBar,
                children: t.flatMap((t) =>
                    (0, r.jsx)(
                        s.njP.Item,
                        {
                            id: t,
                            "aria-label": t,
                            className: o()(m.filterButton, { [m.selected]: c === t }),
                            disableItemStyles: !0,
                            children: (0, r.jsx)(j, {
                                setIsVisible: (e) => {
                                    l((n) => O(b({}, n), { [t]: e }));
                                },
                                children: e[t],
                            }),
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)(E, { hiddenFilters: a }),
        ],
    });
}
function j(e) {
    let { children: t, setIsVisible: n } = e,
        i = (0, a.O)(n);
    return (0, r.jsx)("span", {
        ref: i,
        children: t,
    });
}
function E(e) {
    let { hiddenFilters: t } = e,
        n = (0, u.fJ)(),
        l = (0, i.useRef)(null),
        [o, a] = (0, i.useState)(!1),
        [h, p] = (0, i.useState)(!1),
        g = (0, f.NV)(),
        { selectedFilter: y, setSelectedFilter: C } = (0, d.Z)();
    return 0 === t.length
        ? null
        : (0, r.jsx)(s.yRy, {
              position: "bottom",
              align: "left",
              shouldShow: o,
              targetElementRef: l,
              onRequestClose: () => a(!1),
              onRequestOpen: () => a(!0),
              renderPopout: (e) => {
                  var { closePopout: i } = e,
                      l = _(e, ["closePopout"]);
                  return (0, r.jsx)(
                      s.v2r,
                      O(
                          b(
                              {
                                  onSelect: () => {},
                                  navId: "notifications-sidebar-filters",
                                  "aria-label": "Notifications Sidebar Filters",
                              },
                              l,
                          ),
                          {
                              onClose: () => i(),
                              children: t.map((e) =>
                                  (0, r.jsx)(
                                      s.sNh,
                                      {
                                          id: e,
                                          action: () => {
                                              C(y === e ? f.V5.ALL : e),
                                                  (0, u.RZ)({
                                                      section: e,
                                                      enabled: !0,
                                                      viewId: n,
                                                  });
                                          },
                                          label: g[e],
                                          dontCloseOnAction: !0,
                                          className: m.filterMenuItem,
                                          icon: e === y ? (0, r.jsx)(x, {}) : void 0,
                                      },
                                      e,
                                  ),
                              ),
                          },
                      ),
                  );
              },
              children: (e) =>
                  (0, r.jsx)(
                      s.P3F,
                      O(b({}, e), {
                          className: m.filterButton,
                          innerRef: l,
                          onMouseEnter: () => p(!0),
                          onMouseLeave: () => p(!1),
                          children: (0, r.jsx)(s.xhG, {
                              className: m.moreButtonIcon,
                              size: "xxs",
                              color: h || o ? c.Z.INTERACTIVE_HOVER : c.Z.INTERACTIVE_NORMAL,
                          }),
                      }),
                  ),
          });
}
function S(e) {
    let { className: t } = e,
        n = (0, u.fJ)(),
        l = y(),
        a = (0, i.useRef)(null),
        [h, C] = (0, i.useState)(!1),
        [v, j] = (0, i.useState)(!1),
        E = (0, f.NV)(),
        { selectedFilter: S, setSelectedFilter: I } = (0, d.Z)(),
        P = (0, p.d)((e) => e.setInboxReadState);
    return 0 === l.length
        ? null
        : (0, r.jsx)(s.yRy, {
              position: "bottom",
              align: "left",
              shouldShow: h,
              targetElementRef: a,
              onRequestClose: () => C(!1),
              onRequestOpen: () => C(!0),
              autoInvert: !1,
              renderPopout: (e) => {
                  var { closePopout: t } = e,
                      i = _(e, ["closePopout"]);
                  return (0, r.jsx)(
                      s.v2r,
                      O(
                          b(
                              {
                                  onSelect: () => {},
                                  navId: "notifications-sidebar-filters",
                                  "aria-label": g.intl.string(g.t.UdhTtr),
                              },
                              i,
                          ),
                          {
                              onClose: () => t(),
                              children: l.map((e) =>
                                  (0, r.jsx)(
                                      s.sNh,
                                      {
                                          id: e,
                                          action: () => {
                                              (e === S || e === f.V5.ALL) && S !== f.V5.ALL
                                                  ? (I(f.V5.ALL), P(!1))
                                                  : I(e),
                                                  (0, u.RZ)({
                                                      section: e,
                                                      enabled: S !== e,
                                                      viewId: n,
                                                  });
                                          },
                                          label: E[e],
                                          dontCloseOnAction: !0,
                                          className: m.filterMenuItem,
                                          icon: e === S ? (0, r.jsx)(x, {}) : void 0,
                                      },
                                      e,
                                  ),
                              ),
                          },
                      ),
                  );
              },
              children: (e) =>
                  (0, r.jsx)(s.ua7, {
                      position: "bottom",
                      forceOpen: v,
                      shouldShow: v && !h,
                      text: g.intl.string(g.t.UdhTtr),
                      children: () =>
                          (0, r.jsx)(
                              s.P3F,
                              O(b({}, e), {
                                  className: o()(t, m.headerButton),
                                  innerRef: a,
                                  "aria-label": g.intl.string(g.t.UdhTtr),
                                  onClick: (t) => {
                                      e.onClick(t);
                                  },
                                  onMouseEnter: () => {
                                      var t;
                                      j(!0), null == (t = e.onMouseEnter) || t.call(e);
                                  },
                                  onMouseLeave: () => {
                                      j(!1);
                                  },
                                  children: (0, r.jsx)(s.gXV, {
                                      size: "xs",
                                      color: v || h ? c.Z.INTERACTIVE_HOVER : c.Z.INTERACTIVE_NORMAL,
                                  }),
                              }),
                          ),
                  }),
          });
}
let x = () =>
    (0, r.jsx)(s.owK, {
        size: "refresh_sm",
        color: "".concat(c.Z.BG_BRAND, " !important"),
        secondaryColor: c.Z.WHITE,
    });
