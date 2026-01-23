n.d(t, {
    A: () => g,
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(793574),
    o = n(688810),
    s = n(975571),
    c = n(993401),
    u = n(652215),
    d = n(985018),
    f = n(998855);
let p = s.A.getArticleURL(u.MVz.CUSTOM_PROFILES_WISHLIST);

function g(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: s } = e,
        u = l.useRef(null),
        { analyticsLocations: g } = (0, o.Ay)(a.A.USER_PROFILE_WISHLIST),
        m = l.useMemo(
            () =>
                t
                    ? (0, r.jsxs)(i.rXV, {
                          children: [
                              (0, r.jsx)(i.fPC, {
                                  id: "wishlist-privacy-setting",
                                  label: (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(i.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              children: d.intl.string(d.t.b2nFyA),
                                          }),
                                          (0, r.jsx)(i.Text, {
                                              className: f.z,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: d.intl.string(d.t.dw58pE),
                                          }),
                                      ],
                                  }),
                                  checked: n,
                                  action: s,
                              }),
                              (0, r.jsx)(i.bXX, {}),
                              (0, r.jsx)(i.Drp, {
                                  id: "wishlist-privacy-setting2",
                                  label: (0, r.jsx)(i.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: d.intl.string(d.t.hvVgAZ),
                                  }),
                                  icon: i.I9m,
                                  action: () => window.open(p),
                              }),
                          ],
                      })
                    : null,
            [t, n, s],
        );
    return null == m
        ? null
        : (0, r.jsx)(o.f5, {
              value: g,
              children: (0, r.jsx)(i.YNO, {
                  targetElementRef: u,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(i.W1t, {
                          "data-menu-migration-ready": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": d.intl.string(d.t.GdNkvG),
                          children: m,
                      });
                  },
                  children: (e) =>
                      (0, r.jsx)(
                          c.q3,
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
                                  icon: i.jNK,
                                  tooltipText: d.intl.string(d.t["UKOtz+"]),
                                  action: "PRESS_OPTIONS",
                              },
                              e,
                          ),
                      ),
              }),
          });
}
