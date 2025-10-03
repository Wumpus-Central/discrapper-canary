n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(370523),
    a = n(442837),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(277511),
    d = n(621853),
    p = n(732380),
    f = n(388032),
    h = n(367155);
function g(e) {
    let { isOwner: t, userId: n, wishlistId: g } = e,
        m = i.useRef(null),
        { analyticsLocations: b } = (0, c.ZP)(s.Z.USER_PROFILE_WISHLIST),
        { wishlistSettings: _ } = (0, a.cj)([d.Z], () => ({ wishlistSettings: d.Z.getWishlistSettings(n, g) })),
        [O, E] = i.useState(!0);
    i.useEffect(() => {
        (null == _ ? void 0 : _.visibility) != null && E(_.visibility === l.f.PUBLIC);
    }, [null == _ ? void 0 : _.visibility]);
    let y = i.useCallback(() => {
            let e = O ? l.f.PRIVATE : l.f.PUBLIC;
            E(e === l.f.PUBLIC), u.Z.updateWishlistVisibility(g, e);
        }, [O, g, E]),
        v = i.useMemo(
            () =>
                t
                    ? (0, r.jsx)(o.kSQ, {
                          children: (0, r.jsx)(o.m76, {
                              id: "wishlist-privacy-setting",
                              label: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-sm/medium",
                                          color: "text-primary",
                                          children: f.intl.string(f.t.b2nFyM),
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          className: h.menuItemDescription,
                                          variant: "text-xs/medium",
                                          color: "text-tertiary",
                                          children: f.intl.string(f.t.dw58pK),
                                      }),
                                  ],
                              }),
                              checked: O,
                              action: y,
                          }),
                      })
                    : null,
            [t, O, y],
        );
    return null == v
        ? null
        : (0, r.jsx)(c.Gt, {
              value: b,
              children: (0, r.jsx)(o.yRy, {
                  targetElementRef: m,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(o.v2r, {
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": f.intl.string(f.t.GdNkvL),
                          children: v,
                      });
                  },
                  children: (e) =>
                      (0, r.jsx)(
                          p.pt,
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
                                  buttonRef: m,
                                  icon: o.xhG,
                                  tooltipText: f.intl.string(f.t.UKOtz8),
                                  action: "PRESS_OPTIONS",
                              },
                              e,
                          ),
                      ),
              }),
          });
}
