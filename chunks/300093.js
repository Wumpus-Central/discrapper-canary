n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(544420),
    o = n(684013),
    d = n(429913),
    c = n(15285),
    u = n(810412),
    m = n(206885),
    _ = n(833551),
    g = n(663677),
    x = n(847521),
    A = n(9302),
    h = n(505136),
    p = n(370365),
    f = n(686533),
    T = n(985018),
    S = n(502040);
function E() {
    let [e, t] = s.useState(!1),
        { oopEnabled: n, legacyEnabled: E } = (0, l.cf)([_.default], () => _.default.getGlobalEnabledStatus()),
        b = !(0, A.supportsOutOfProcess)(),
        C = (0, l.yK)([c.Ay], () => c.Ay.getGamesSeen(!0)).filter((e) => !(0, x.n1)(e)),
        v = (0, d.A)(C.map((e) => e.id)),
        N = (e) => {
            let t = !e && n;
            o.A.setEnabled(E, e);
            let i = c.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, u.Q3)(e, u.OverlayToggledClientSettingType.OOP, i),
                t && (0, g.L)(u.OverlayToggledClientSettingType.OOP, i);
        },
        I = (e, t, n) => {
            let { enabledLegacy: i } = n;
            r.A.toggleOverlay(t, e, i);
        },
        j = s.useMemo(
            () => (m.O ? (b ? T.intl.string(T.t.C7bLTQ) : T.intl.string(T.t.ndgADE)) : T.intl.string(T.t.m7X4az)),
            [b],
        );
    return 0 === C.length
        ? (0, i.jsx)(f.A, {
              title: T.intl.string(T.t["7BlVIs"]),
              description: j,
              "aria-label": T.intl.string(T.t["7BlVIs"]),
              className: S.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(a.dOG, { checked: n, disabled: b, onChange: (e) => N(e) }),
                      m.O && (0, i.jsx)("div", { className: S.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(h.A, {
              onExpand: t,
              className: e ? S.tx : void 0,
              title: T.intl.string(T.t["7BlVIs"]),
              description: j,
              "aria-label": T.intl.string(T.t["7BlVIs"]),
              action: (0, i.jsx)(a.DUT, {
                  onClick: (e) => (0, f.$)(e),
                  children: (0, i.jsx)(a.dOG, { checked: n, disabled: b, onChange: (e) => N(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: S.SC,
                      children: (0, i.jsx)(a.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: T.intl.string(T.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(a.IpV, {
                      className: S.XG,
                      children: C.map((e, t) =>
                          (0, i.jsx)(
                              p.A,
                              {
                                  rawGame: e,
                                  clientSettingType: u.OverlayToggledClientSettingType.OOP_GAME,
                                  gameApplication: v[t],
                                  supportDisabled: b,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: I,
                                  ariaLabel: T.intl.format(T.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
