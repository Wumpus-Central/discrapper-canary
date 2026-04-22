i.d(t, { A: () => A });
var n = i(627968),
    l = i(64700),
    s = i(477782),
    a = i(509434),
    r = i(265872),
    d = i(861672),
    o = i(365199),
    c = i(793574),
    u = i(688810),
    g = i(975571),
    m = i(993401),
    h = i(652215),
    x = i(985018);
let p = g.A.getArticleURL(h.MVz.CUSTOM_PROFILES_WISHLIST);
function A(e) {
    let { isOwner: t, isWishlistPublic: i, onToggleVisibility: g } = e,
        h = l.useRef(null),
        { analyticsLocations: A } = (0, u.Ay)(c.A.USER_PROFILE_WISHLIST),
        j = l.useMemo(
            () =>
                t
                    ? (0, n.jsxs)(s.rX, {
                          children: [
                              (0, n.jsx)(s.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: x.intl.string(x.t.b2nFyA),
                                  subtext: x.intl.string(x.t.dw58pE),
                                  checked: i,
                                  action: g,
                              }),
                              (0, n.jsx)(s.bX, {}),
                              (0, n.jsx)(s.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: x.intl.string(x.t.hvVgAZ),
                                  icon: a.I,
                                  trailingIndicator: { type: "icon", icon: a.I },
                                  action: () => window.open(p),
                              }),
                          ],
                      })
                    : null,
            [t, i, g],
        );
    return null == j
        ? null
        : (0, n.jsx)(u.f5, {
              value: A,
              children: (0, n.jsx)(r.Y, {
                  targetElementRef: h,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, n.jsx)(d.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": x.intl.string(x.t.GdNkvG),
                          children: j,
                      });
                  },
                  children: (e) =>
                      (0, n.jsx)(m.q3, {
                          buttonRef: h,
                          icon: o.j,
                          tooltipText: x.intl.string(x.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
