n.d(t, { A: () => v });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(243721),
    r = n(939249),
    o = n(834730),
    d = n(573613),
    u = n(544420),
    c = n(684013),
    g = n(429913),
    m = n(15285),
    _ = n(810412),
    A = n(206885),
    h = n(833551),
    p = n(663677),
    x = n(847521),
    E = n(9302),
    T = n(505136),
    S = n(370365),
    f = n(686533),
    b = n(985018),
    C = n(481384);
function v() {
    let [e, t] = s.useState(!1),
        { oopEnabled: n, legacyEnabled: v } = (0, l.cf)([h.default], () => h.default.getGlobalEnabledStatus()),
        N = !(0, E.supportsOutOfProcess)(),
        I = (0, l.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, x.n1)(e)),
        y = (0, g.A)(I.map((e) => e.id)),
        j = (e) => {
            let t = !e && n;
            c.A.setEnabled(v, e);
            let i = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, _.Q3)(e, _.OverlayToggledClientSettingType.OOP, i),
                t && (0, p.L)(_.OverlayToggledClientSettingType.OOP, i);
        },
        O = (e, t, n) => {
            let { enabledLegacy: i } = n;
            u.Ay.toggleOverlay(t, e, i);
        },
        R = s.useMemo(
            () => (A.O ? (N ? b.intl.string(b.t.C7bLTQ) : b.intl.string(b.t.ndgADE)) : b.intl.string(b.t.m7X4az)),
            [N],
        );
    return 0 === I.length
        ? (0, i.jsx)(f.A, {
              title: b.intl.string(b.t["7BlVIs"]),
              description: R,
              "aria-label": b.intl.string(b.t["7BlVIs"]),
              className: C.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(a.d, { checked: n, disabled: N, onChange: (e) => j(e) }),
                      A.O && (0, i.jsx)("div", { className: C.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(T.A, {
              onExpand: t,
              className: e ? C.tx : void 0,
              title: b.intl.string(b.t["7BlVIs"]),
              description: R,
              "aria-label": b.intl.string(b.t["7BlVIs"]),
              action: (0, i.jsx)(r.D, {
                  onClick: (e) => (0, f.$)(e),
                  children: (0, i.jsx)(a.d, { checked: n, disabled: N, onChange: (e) => j(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: C.SC,
                      children: (0, i.jsx)(o.E, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: b.intl.string(b.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(d.Ip, {
                      className: C.XG,
                      children: I.map((e, t) =>
                          (0, i.jsx)(
                              S.A,
                              {
                                  rawGame: e,
                                  clientSettingType: _.OverlayToggledClientSettingType.OOP_GAME,
                                  gameApplication: y[t],
                                  supportDisabled: N,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: O,
                                  ariaLabel: b.intl.format(b.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
