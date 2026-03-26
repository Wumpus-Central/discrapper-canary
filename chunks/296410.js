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
        { legacyEnabled: n, oopEnabled: E } = (0, l.cf)([_.default], () => _.default.getGlobalEnabledStatus()),
        b = (0, l.yK)([c.Ay], () => c.Ay.getGamesSeen(!0)).filter((e) => !(0, x.n1)(e)),
        C = (0, d.A)(b.map((e) => e.id)),
        v = !(0, A.supportsLegacy)(),
        N = (e) => {
            o.A.setEnabled(e, E);
            let t = c.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, u.Q3)(e, u.OverlayToggledClientSettingType.LEGACY, t),
                !e && n && (0, g.L)(u.OverlayToggledClientSettingType.LEGACY, t);
        },
        I = (e, t, n) => {
            let { enabledOOP: i } = n;
            r.A.toggleOverlay(t, e, i);
        },
        j = s.useMemo(
            () =>
                (0, A.supportsLegacy)()
                    ? v
                        ? T.intl.string(T.t.r9jEVw)
                        : T.intl.string(T.t.OzInYk)
                    : T.intl.string(T.t["8Ox6/E"]),
            [v],
        );
    return 0 === b.length
        ? (0, i.jsx)(f.A, {
              title: T.intl.string(T.t.BfFpW1),
              description: j,
              "aria-label": T.intl.string(T.t.BfFpW1),
              className: S.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(a.dOG, { checked: n, disabled: v, onChange: (e) => N(e) }),
                      m.O && (0, i.jsx)("div", { className: S.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(h.A, {
              onExpand: t,
              className: e ? S.tx : void 0,
              title: T.intl.string(T.t.BfFpW1),
              description: j,
              "aria-label": T.intl.string(T.t.BfFpW1),
              action: (0, i.jsx)(a.DUT, {
                  onClick: (e) => (0, f.$)(e),
                  children: (0, i.jsx)(a.dOG, { checked: n, disabled: v, onChange: (e) => N(e) }),
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
                      children: b.map((e, t) =>
                          (0, i.jsx)(
                              p.A,
                              {
                                  rawGame: e,
                                  clientSettingType: u.OverlayToggledClientSettingType.LEGACY_GAME,
                                  supportDisabled: v,
                                  gameApplication: C[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: I,
                                  ariaLabel: T.intl.format(T.t.hvPYsF, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
