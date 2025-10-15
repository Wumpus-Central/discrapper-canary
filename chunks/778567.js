n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    s = n(63063),
    c = n(732380),
    u = n(981631),
    d = n(388032),
    p = n(367155);
let f = s.Z.getArticleURL(u.BhN.CUSTOM_PROFILES_WISHLIST);
function h(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: s } = e,
        u = i.useRef(null),
        { analyticsLocations: h } = (0, o.ZP)(a.Z.USER_PROFILE_WISHLIST),
        g = i.useMemo(
            () =>
                t
                    ? (0, r.jsxs)(l.kSQ, {
                          children: [
                              (0, r.jsx)(l.m76, {
                                  id: "wishlist-privacy-setting",
                                  label: (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(l.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-primary",
                                              children: d.intl.string(d.t.b2nFyM),
                                          }),
                                          (0, r.jsx)(l.Text, {
                                              className: p.menuItemDescription,
                                              variant: "text-xs/medium",
                                              color: "text-tertiary",
                                              children: d.intl.string(d.t.dw58pK),
                                          }),
                                      ],
                                  }),
                                  checked: n,
                                  action: s,
                              }),
                              (0, r.jsx)(l.Clw, {}),
                              (0, r.jsx)(l.sNh, {
                                  id: "wishlist-privacy-setting2",
                                  label: (0, r.jsx)(l.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-primary",
                                      children: d.intl.string(d.t.hvVgAQ),
                                  }),
                                  icon: l.Gr1,
                                  action: () => window.open(f),
                              }),
                          ],
                      })
                    : null,
            [t, n, s],
        );
    return null == g
        ? null
        : (0, r.jsx)(o.Gt, {
              value: h,
              children: (0, r.jsx)(l.yRy, {
                  targetElementRef: u,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(l.v2r, {
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": d.intl.string(d.t.GdNkvL),
                          children: g,
                      });
                  },
                  children: (e) =>
                      (0, r.jsx)(
                          c.pt,
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
                                  buttonRef: u,
                                  icon: l.xhG,
                                  tooltipText: d.intl.string(d.t.UKOtz8),
                                  action: "PRESS_OPTIONS",
                              },
                              e,
                          ),
                      ),
              }),
          });
}
