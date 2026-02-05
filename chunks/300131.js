n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(793574),
    s = n(688810),
    o = n(975571),
    d = n(993401),
    c = n(652215),
    u = n(985018);
let g = o.A.getArticleURL(c.MVz.CUSTOM_PROFILES_WISHLIST);
function m(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: o } = e,
        c = l.useRef(null),
        { analyticsLocations: m } = (0, s.Ay)(r.A.USER_PROFILE_WISHLIST),
        x = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(a.rXV, {
                          children: [
                              (0, i.jsx)(a.fPC, {
                                  id: "wishlist-privacy-setting",
                                  label: u.intl.string(u.t.b2nFyA),
                                  subtext: u.intl.string(u.t.dw58pE),
                                  checked: n,
                                  action: o,
                              }),
                              (0, i.jsx)(a.bXX, {}),
                              (0, i.jsx)(a.Drp, {
                                  id: "wishlist-privacy-setting2",
                                  label: u.intl.string(u.t.hvVgAZ),
                                  icon: a.I9m,
                                  trailingIndicator: { type: "icon", icon: a.I9m },
                                  action: () => window.open(g),
                              }),
                          ],
                      })
                    : null,
            [t, n, o],
        );
    return null == x
        ? null
        : (0, i.jsx)(s.f5, {
              value: m,
              children: (0, i.jsx)(a.YNO, {
                  targetElementRef: c,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(a.W1t, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": u.intl.string(u.t.GdNkvG),
                          children: x,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(d.q3, {
                          buttonRef: c,
                          icon: a.jNK,
                          tooltipText: u.intl.string(u.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
