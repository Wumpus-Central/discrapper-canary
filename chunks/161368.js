n.d(t, { A: () => T });
var i = n(477900);
n(582128);
var s = n(855986),
    r = n(785007),
    l = n(858899),
    a = n(331322),
    c = n(534514),
    o = n(793574),
    u = n(688810),
    d = n(350972),
    m = n(535229),
    h = n(526162),
    g = n(603880),
    f = n(793943),
    p = n(915089),
    A = n(506988),
    x = n(830543),
    v = n(332560),
    y = n(145359),
    S = n(773527),
    b = n(336044),
    j = n(262560),
    N = n(455207),
    E = n(471865),
    I = n(211824),
    C = n(236814),
    P = n(701256),
    k = n(792996);
function T(e) {
    let { type: t, iconSize: n = C.N8.SIZE_48, className: T } = e,
        { analyticsLocations: _ } = (0, u.Ay)(o.A.APP_ICON_SELECTOR),
        w = (0, y.Lz)(I.vB.APP_ICON, "HexagonCampaignAppIconSection"),
        D = (0, s.bG)([h.A], () => (0, S.z9)(h.A.getCurrentDesktopIcon())),
        R = (0, b.i)(),
        L = w === I.S9.HIDDEN,
        O = w === I.S9.LOCKED,
        M = "settings" === t,
        B = (0, p.GV)(),
        { ref: G, ...F } = (0, r._u)({ orientation: "horizontal", labelledBy: B });
    return ((0, v.UF)(A.uF.APP_ICON_SETTINGS, v.rl.APP_ICON_PICKER, !L), L)
        ? null
        : (0, i.jsxs)(a.B, {
              as: "section",
              gap: 8,
              fullWidth: !1,
              className: T,
              children: [
                  (0, i.jsxs)(a.B, {
                      gap: M ? 4 : 8,
                      children: [
                          (0, i.jsxs)(a.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              children: [
                                  (0, i.jsx)(c.D, {
                                      id: B,
                                      variant: "body-md/medium",
                                      color: M ? "text-default" : "text-strong",
                                      children: k.intl.string(P.default.EWenaG),
                                  }),
                                  M && !O && (0, i.jsx)(j.A, { perk: I.vB.APP_ICON }),
                              ],
                          }),
                          (0, i.jsx)(N.A, {}),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      ...F,
                      ref: G,
                      children: (0, i.jsx)(g.A, {
                          icon: (0, C.gG)(d.aS.HEXAGON),
                          size: n,
                          isSelected: D,
                          onSelect: function () {
                              O
                                  ? ((0, m.C)(d.aS.HEXAGON), M && ((0, f.nf)(f.HP.APP_ICON), (0, x.default)()))
                                  : (async function () {
                                        !1 ===
                                            (await (async function () {
                                                if ((0, b.rs)()) return null;
                                                let e = h.A.getCommittedDesktopIcon(),
                                                    t = (0, S.z9)(e);
                                                (0, b.Rj)(!0);
                                                try {
                                                    if (!(await (0, E.Br)(I.vB.APP_ICON))) return !1;
                                                    return (
                                                        (0, E.Lo)(e),
                                                        (0, m.C)(d.aS.HEXAGON),
                                                        (0, E.VN)(I.vB.APP_ICON),
                                                        t ||
                                                            (0, v.Cy)({
                                                                perks: [I.vB.APP_ICON],
                                                                content: A.uF.APP_ICON_SETTINGS,
                                                                contentSurface: v.rl.APP_ICON_PICKER,
                                                            }),
                                                        !0
                                                    );
                                                } finally {
                                                    (0, b.Rj)(!1);
                                                }
                                            })()) &&
                                            (0, l.P0)({ text: k.intl.string(k.t.F8FvUy), variant: "critical" });
                                    })();
                          },
                          disabled: R,
                          tabIndex: 0,
                      }),
                  }),
              ],
          });
}
