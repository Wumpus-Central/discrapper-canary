n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(63063),
    s = n(732380),
    u = n(981631),
    d = n(388032),
    f = n(367155);
let g = c.Z.getArticleURL(u.BhN.CUSTOM_PROFILES_WISHLIST);
function p(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: c } = e,
        u = i.useRef(null),
        { analyticsLocations: p } = (0, o.ZP)(a.Z.USER_PROFILE_WISHLIST),
        m = i.useMemo(
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
                                              color: "text-strong",
                                              children: d.intl.string(d.t.b2nFyA),
                                          }),
                                          (0, r.jsx)(l.Text, {
                                              className: f.menuItemDescription,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: d.intl.string(d.t.dw58pE),
                                          }),
                                      ],
                                  }),
                                  checked: n,
                                  action: c,
                              }),
                              (0, r.jsx)(l.Clw, {}),
                              (0, r.jsx)(l.sNh, {
                                  id: "wishlist-privacy-setting2",
                                  label: (0, r.jsx)(l.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: d.intl.string(d.t.hvVgAZ),
                                  }),
                                  icon: l.Gr1,
                                  action: () => window.open(g),
                              }),
                          ],
                      })
                    : null,
            [t, n, c],
        );
    return null == m
        ? null
        : (0, r.jsx)(o.Gt, {
              value: p,
              children: (0, r.jsx)(l.yRy, {
                  targetElementRef: u,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(l.v2r, {
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": d.intl.string(d.t.GdNkvG),
                          children: m,
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
                                  buttonRef: u,
                                  icon: l.xhG,
                                  tooltipText: d.intl.string(d.t["UKOtz+"]),
                                  action: "PRESS_OPTIONS",
                              },
                              e,
                          ),
                      ),
              }),
          });
}
