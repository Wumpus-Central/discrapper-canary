n.d(t, { A: () => b });
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
    g = n(833551),
    _ = n(663677),
    x = n(847521),
    A = n(9302),
    h = n(505136),
    p = n(370365),
    T = n(686533),
    f = n(985018),
    S = n(502040);
function b() {
    let [e, t] = s.useState(!1),
        { oopEnabled: n, legacyEnabled: b } = (0, l.cf)([g.default], () => g.default.getGlobalEnabledStatus()),
        E = !(0, A.supportsOutOfProcess)(),
        C = (0, l.yK)([c.Ay], () => c.Ay.getGamesSeen(!0)).filter((e) => !(0, x.n1)(e)),
        N = (0, d.A)(C.map((e) => e.id)),
        v = (e) => {
            let t = !e && n;
            o.A.setEnabled(b, e);
            let i = c.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, u.Q3)(e, u.OverlayToggledClientSettingType.OOP, i),
                t && (0, _.L)(u.OverlayToggledClientSettingType.OOP, i);
        },
        I = (e, t, n) => {
            let { enabledLegacy: i } = n;
            r.Ay.toggleOverlay(t, e, i);
        },
        j = s.useMemo(
            () => (m.O ? (E ? f.intl.string(f.t.C7bLTQ) : f.intl.string(f.t.ndgADE)) : f.intl.string(f.t.m7X4az)),
            [E],
        );
    return 0 === C.length
        ? (0, i.jsx)(T.A, {
              title: f.intl.string(f.t["7BlVIs"]),
              description: j,
              "aria-label": f.intl.string(f.t["7BlVIs"]),
              className: S.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(a.dOG, { checked: n, disabled: E, onChange: (e) => v(e) }),
                      m.O && (0, i.jsx)("div", { className: S.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(h.A, {
              onExpand: t,
              className: e ? S.tx : void 0,
              title: f.intl.string(f.t["7BlVIs"]),
              description: j,
              "aria-label": f.intl.string(f.t["7BlVIs"]),
              action: (0, i.jsx)(a.DUT, {
                  onClick: (e) => (0, T.$)(e),
                  children: (0, i.jsx)(a.dOG, { checked: n, disabled: E, onChange: (e) => v(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: S.SC,
                      children: (0, i.jsx)(a.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: f.intl.string(f.t.FzoWRo),
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
                                  gameApplication: N[t],
                                  supportDisabled: E,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: I,
                                  ariaLabel: f.intl.format(f.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
