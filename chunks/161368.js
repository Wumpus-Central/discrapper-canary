n.d(t, { A: () => T });
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
    g = n(526162),
    m = n(603880),
    x = n(793943),
    f = n(915089),
    v = n(506988),
    y = n(830543),
    A = n(332560),
    j = n(145359),
    p = n(773527),
    N = n(336044),
    S = n(262560),
    b = n(455207),
    C = n(471865),
    E = n(211824),
    I = n(236814),
    k = n(701256),
    P = n(792996);
function T(e) {
    let { type: t, iconSize: n = I.N8.SIZE_48, className: T } = e,
        { analyticsLocations: w } = (0, u.Ay)(c.A.APP_ICON_SELECTOR),
        M = (0, j.Lz)(E.vB.APP_ICON, "HexagonCampaignAppIconSection"),
        _ = (0, r.bG)([g.A], () => (0, p.z9)(g.A.getCurrentDesktopIcon())),
        R = (0, N.i)(),
        B = M === E.S9.HIDDEN,
        D = M === E.S9.LOCKED,
        L = "settings" === t,
        O = (0, f.GV)(),
        { ref: F, ...K } = (0, i._u)({ orientation: "horizontal", labelledBy: O });
    return ((0, A.UF)(v.uF.APP_ICON_SETTINGS, A.rl.APP_ICON_PICKER, !B), B)
        ? null
        : (0, l.jsxs)(a.B, {
              as: "section",
              gap: 8,
              fullWidth: !1,
              className: T,
              children: [
                  (0, l.jsxs)(a.B, {
                      gap: L ? 4 : 8,
                      children: [
                          (0, l.jsxs)(a.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              children: [
                                  (0, l.jsx)(o.D, {
                                      id: O,
                                      variant: "body-md/medium",
                                      color: L ? "text-default" : "text-strong",
                                      children: P.intl.string(k.default.EWenaG),
                                  }),
                                  L && !D && (0, l.jsx)(S.A, { perk: E.vB.APP_ICON }),
                              ],
                          }),
                          (0, l.jsx)(b.A, {}),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      ...K,
                      ref: F,
                      children: (0, l.jsx)(m.A, {
                          icon: (0, I.gG)(d.aS.HEXAGON),
                          size: n,
                          isSelected: _,
                          onSelect: function () {
                              D
                                  ? ((0, h.C)(d.aS.HEXAGON), L && ((0, x.nf)(x.HP.APP_ICON), (0, y.default)()))
                                  : (async function () {
                                        !1 ===
                                            (await (async function () {
                                                if ((0, N.rs)()) return null;
                                                let e = g.A.getCommittedDesktopIcon(),
                                                    t = (0, p.z9)(e);
                                                (0, N.Rj)(!0);
                                                try {
                                                    if (!(await (0, C.Br)(E.vB.APP_ICON))) return !1;
                                                    return (
                                                        (0, C.Lo)(e),
                                                        (0, h.C)(d.aS.HEXAGON),
                                                        (0, C.VN)(E.vB.APP_ICON),
                                                        t ||
                                                            (0, A.Cy)({
                                                                perks: [E.vB.APP_ICON],
                                                                content: v.uF.APP_ICON_SETTINGS,
                                                                contentSurface: A.rl.APP_ICON_PICKER,
                                                            }),
                                                        !0
                                                    );
                                                } finally {
                                                    (0, N.Rj)(!1);
                                                }
                                            })()) &&
                                            (0, s.P0)({ text: P.intl.string(P.t.F8FvUy), variant: "critical" });
                                    })();
                          },
                          disabled: R,
                          tabIndex: 0,
                      }),
                  }),
              ],
          });
}
