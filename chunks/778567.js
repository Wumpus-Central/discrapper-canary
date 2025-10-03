n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    s = n(732380),
    c = n(388032),
    u = n(367155);
function d(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: d } = e,
        p = i.useRef(null),
        { analyticsLocations: f } = (0, o.ZP)(a.Z.USER_PROFILE_WISHLIST),
        h = i.useMemo(
            () =>
                t
                    ? (0, r.jsx)(l.kSQ, {
                          children: (0, r.jsx)(l.m76, {
                              id: "wishlist-privacy-setting",
                              label: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: "text-sm/medium",
                                          color: "text-primary",
                                          children: c.intl.string(c.t.b2nFyM),
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          className: u.menuItemDescription,
                                          variant: "text-xs/medium",
                                          color: "text-tertiary",
                                          children: c.intl.string(c.t.dw58pK),
                                      }),
                                  ],
                              }),
                              checked: n,
                              action: d,
                          }),
                      })
                    : null,
            [t, n, d],
        );
    return null == h
        ? null
        : (0, r.jsx)(o.Gt, {
              value: f,
              children: (0, r.jsx)(l.yRy, {
                  targetElementRef: p,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(l.v2r, {
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": c.intl.string(c.t.GdNkvL),
                          children: h,
                      });
                  },
                  children: (e) =>
                      (0, r.jsx)(
                          s.pt,
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
                                  buttonRef: p,
                                  icon: l.xhG,
                                  tooltipText: c.intl.string(c.t.UKOtz8),
                                  action: "PRESS_OPTIONS",
                              },
                              e,
                          ),
                      ),
              }),
          });
}
