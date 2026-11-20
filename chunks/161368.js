n.d(t, { A: () => P });
var l = n(477900);
n(582128);
var r = n(855986),
    i = n(785007),
    s = n(858899),
    a = n(331322),
    o = n(534514),
    c = n(793574),
    u = n(688810),
    d = n(350972),
    h = n(535229),
    m = n(526162),
    g = n(603880),
    x = n(793943),
    f = n(915089),
    v = n(506988),
    y = n(830543),
    A = n(332560),
    j = n(145359),
    p = n(189916),
    S = n(336044),
    N = n(262560),
    E = n(455207),
    b = n(471865),
    C = n(211824),
    I = n(236814),
    k = n(701256),
    _ = n(792996);
function P(e) {
    let { type: t, iconSize: n = I.N8.SIZE_48, className: P } = e,
        { analyticsLocations: T } = (0, u.Ay)(c.A.APP_ICON_SELECTOR),
        R = (0, j.Lz)(C.vB.APP_ICON, "HexagonCampaignAppIconSection"),
        w = (0, r.bG)([m.A], () => (0, p.z9)(m.A.getCurrentDesktopIcon())),
        M = (0, S.i)(),
        D = R === C.S9.HIDDEN,
        B = R === C.S9.LOCKED,
        O = "settings" === t,
        L = (0, f.GV)(),
        { ref: F, ...K } = (0, i._u)({ orientation: "horizontal", labelledBy: L });
    return ((0, A.UF)(v.uF.APP_ICON_SETTINGS, A.rl.APP_ICON_PICKER, !D), D)
        ? null
        : (0, l.jsxs)(a.B, {
              as: "section",
              gap: 32,
              fullWidth: !1,
              className: P,
              children: [
                  (0, l.jsxs)(a.B, {
                      gap: O ? 4 : 8,
                      children: [
                          (0, l.jsxs)(a.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              children: [
                                  (0, l.jsx)(o.D, {
                                      id: L,
                                      variant: "body-md/medium",
                                      color: O ? "text-default" : "text-strong",
                                      children: _.intl.string(k.default.EWenaG),
                                  }),
                                  O && !B && (0, l.jsx)(N.A, { perk: C.vB.APP_ICON }),
                              ],
                          }),
                          (0, l.jsx)(E.A, {}),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      ...K,
                      ref: F,
                      children: (0, l.jsx)(g.A, {
                          icon: (0, I.gG)(d.aS.HEXAGON),
                          size: n,
                          isSelected: w,
                          onSelect: function () {
                              B
                                  ? ((0, h.C)(d.aS.HEXAGON), O && ((0, x.nf)(x.HP.APP_ICON), (0, y.default)()))
                                  : (async function () {
                                        !1 ===
                                            (await (async function () {
                                                if ((0, S.rs)()) return null;
                                                let e = m.A.getCommittedDesktopIcon(),
                                                    t = (0, p.z9)(e);
                                                (0, S.Rj)(!0);
                                                try {
                                                    if (!(await (0, b.Br)(C.vB.APP_ICON))) return !1;
                                                    return (
                                                        (0, b.Lo)(e),
                                                        (0, h.C)(d.aS.HEXAGON),
                                                        (0, b.VN)(C.vB.APP_ICON),
                                                        t ||
                                                            (0, A.Cy)({
                                                                perks: [C.vB.APP_ICON],
                                                                content: v.uF.APP_ICON_SETTINGS,
                                                                contentSurface: A.rl.APP_ICON_PICKER,
                                                            }),
                                                        !0
                                                    );
                                                } finally {
                                                    (0, S.Rj)(!1);
                                                }
                                            })()) &&
                                            (0, s.P0)({ text: _.intl.string(_.t.F8FvUy), variant: "critical" });
                                    })();
                          },
                          disabled: M,
                          tabIndex: 0,
                      }),
                  }),
              ],
          });
}
