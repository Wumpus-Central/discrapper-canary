n.d(t, { kc: () => I, vy: () => _, iX: () => E });
var l = n(477900),
    r = n(582128),
    i = n(265872),
    o = n(165862),
    a = n(503002),
    s = n(939496),
    u = n(993401);
let c = (0, n(945810).mj)({
    name: "2026-11-shop-this-look-full-profile-button",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var d = n(674954),
    f = n(996988),
    A = n(792996);
let p = r.createContext(!1);
function E() {
    let e = r.useContext(p),
        { themeType: t } = (0, s.E)();
    return e && t === f.d.MODAL_V2;
}
function g(e) {
    let { children: t } = e,
        { enabled: n } = c.useConfig({ location: "FullProfileShopThisLook" });
    return (0, l.jsx)(p.Provider, { value: n, children: t });
}
function _(e) {
    let { user: t, guildId: n, children: r } = e,
        { visible: i } = (0, d.aC)(t, n, null);
    return i ? (0, l.jsx)(g, { children: r }) : r;
}
function I(e) {
    let { user: t, guildId: n } = e,
        s = E(),
        { visible: c, contents: f, hasRenderableContent: p } = (0, d.aC)(t, n, "full_profile_button"),
        g = r.useRef(null);
    return s && c && p
        ? (0, l.jsx)(i.Y, {
              targetElementRef: g,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, l.jsx)(o.W, {
                      navId: "full-profile-shop-this-look",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": A.intl.string(A.t.xNdRDO),
                      children: f,
                  });
              },
              children: (e) =>
                  (0, l.jsx)(u.q3, {
                      ...e,
                      buttonRef: g,
                      action: "PRESS_SHOP_THIS_LOOK",
                      icon: a.ShopSparkleIcon,
                      tooltipText: A.intl.string(A.t.xNdRDO),
                  }),
          })
        : null;
}
