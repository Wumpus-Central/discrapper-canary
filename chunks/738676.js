n.d(t, { kc: () => A, vy: () => g, iX: () => R });
var l = n(477900),
    r = n(582128),
    i = n(265872),
    o = n(165862),
    s = n(503002),
    a = n(939496),
    u = n(993401);
let c = (0, n(945810).mj)({
    name: "2026-11-shop-this-look-full-profile-button",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var d = n(674954),
    f = n(996988),
    p = n(792996);
let E = r.createContext(!1);
function R() {
    let e = r.useContext(E),
        { themeType: t } = (0, a.E)();
    return e && t === f.d.MODAL_V2;
}
function _(e) {
    let { children: t } = e,
        { enabled: n } = c.useConfig({ location: "FullProfileShopThisLook" });
    return (0, l.jsx)(E.Provider, { value: n, children: t });
}
function g(e) {
    let { user: t, guildId: n, children: r } = e,
        { visible: i } = (0, d.aC)(t, n, null);
    return i ? (0, l.jsx)(_, { children: r }) : r;
}
function A(e) {
    let { user: t, guildId: n } = e,
        a = R(),
        { visible: c, contents: f, hasRenderableContent: E } = (0, d.aC)(t, n, "full_profile_button"),
        _ = r.useRef(null);
    return a && c && E
        ? (0, l.jsx)(i.Y, {
              targetElementRef: _,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, l.jsx)(o.W, {
                      navId: "full-profile-shop-this-look",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": p.intl.string(p.t.xNdRDO),
                      children: f,
                  });
              },
              children: (e) =>
                  (0, l.jsx)(u.q3, {
                      ...e,
                      buttonRef: _,
                      action: "PRESS_SHOP_THIS_LOOK",
                      icon: s.ShopSparkleIcon,
                      tooltipText: p.intl.string(p.t.xNdRDO),
                  }),
          })
        : null;
}
