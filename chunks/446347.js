t.d(l, { A: () => y }), t(321073);
var r = t(627968),
    n = t(64700),
    i = t(503698),
    a = t.n(i),
    s = t(284009),
    d = t.n(s),
    o = t(939249),
    u = t(173936),
    c = t(834730),
    v = t(821609),
    C = t(349288),
    h = t(885574),
    m = t(579872),
    g = t(383501),
    f = t(710067),
    p = t(957565),
    x = t(975571),
    b = t(723702),
    j = t(938463),
    k = t(652215),
    w = t(985018),
    A = t(722836);
function N(e) {
    let { url: l } = e,
        [t, i] = n.useState(!1),
        s = n.useRef(void 0),
        d = n.useCallback(() => {
            t ||
                (0, p.C)(l, () => {
                    i(!0), (s.current = setTimeout(() => i(!1), 2e3));
                });
        }, [l, t]);
    return (
        n.useEffect(() => () => clearTimeout(s.current), []),
        p.p5
            ? (0, r.jsxs)(o.D, {
                  className: a()(A.S, t ? A.pG : null),
                  onClick: d,
                  children: [
                      (0, r.jsx)(u.q, { size: "md", color: "currentColor", className: A.n7 }),
                      t ? w.intl.string(w.t.GmrIJY) : w.intl.string(w.t.iVzBOh),
                  ],
              })
            : null
    );
}
function E(e) {
    let {
        subHead: l,
        buildDetails: t,
        variant: i,
        buttonClick: a,
        buttonText: s,
        disabled: d = !1,
        submitting: o = !1,
    } = e;
    return (0, r.jsxs)(n.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: A.NT,
                children: [
                    (0, r.jsx)(c.E, { variant: "text-sm/medium", className: A.V$, children: l }),
                    (0, r.jsx)("div", { className: A.Jb, children: t }),
                ],
            }),
            (0, r.jsx)(v.$, { text: s, loading: o, variant: i, onClick: a, fullWidth: !0, disabled: d }),
        ],
    });
}
let y = (e) => {
    let { loading: l = !1, currentOverrides: t, linkMeta: i, url: s, applyBuildOverride: o, clearBuildOverride: u } = e,
        [v, p] = n.useState(!1),
        y = n.useCallback(() => {
            v || (p(!0), o().catch(() => p(!1)));
        }, [o, v]),
        L = n.useCallback(() => {
            v || (p(!0), u().catch(() => p(!1)));
        }, [u, v]);
    return (0, r.jsxs)("div", {
        className: A.iE,
        children: [
            (0, r.jsxs)(c.E, {
                variant: "text-xs/normal",
                className: A.lS,
                children: [
                    (0, r.jsx)("strong", {
                        className: A.DD,
                        children:
                            null != i && null != i.releaseChannel
                                ? w.intl.formatToPlainString(w.t.bFj63b, { releaseChannel: i.releaseChannel })
                                : w.intl.string(w.t.Wj3LW4),
                    }),
                    (0, r.jsx)(C.Anchor, {
                        className: A.Pl,
                        href: x.A.getArticleURL(k.MVz.BUILD_OVERRIDE_EMBED),
                        target: "_blank",
                        children: (0, r.jsx)(h.m, { size: "xs", color: "currentColor", className: A.G }),
                    }),
                    l ? null : (0, r.jsx)(N, { url: s }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: A.Qs,
                children: [
                    (0, r.jsx)(f.A, { className: A.Kk }),
                    l
                        ? (0, r.jsxs)(n.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: A.NT,
                                      children: [
                                          (0, r.jsx)("div", { className: a()(A.Pz, A.w9) }),
                                          (0, r.jsx)("div", { className: A.Pz }),
                                      ],
                                  }),
                                  (0, r.jsx)("div", { className: A.MM }),
                              ],
                          })
                        : (function (e) {
                              let l,
                                  t,
                                  r,
                                  {
                                      currentOverrides: n,
                                      linkMeta: i,
                                      applyBuildOverride: a,
                                      clearBuildOverride: s,
                                      submitting: o,
                                  } = e,
                                  u = ["discord_web"];
                              b.isPlatformEmbedded || u.push("discord_marketing", "discord_developers");
                              let c = (0, j.A)(i, u);
                              if (!c.valid) {
                                  var v;
                                  return (
                                      (v = c.reason),
                                      E({
                                          subHead: w.intl.string(w.t.ODXApH),
                                          variant: "secondary",
                                          buttonText: "Invalid",
                                          buildDetails: v,
                                          disabled: !0,
                                      })
                                  );
                              }
                              d()(
                                  null != i,
                                  "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved",
                              );
                              let { discord_web: C, discord_developers: h } = i.targetBuildOverride,
                                  f = C ?? h;
                              return (
                                  (d()(
                                      null != f,
                                      "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved",
                                  ),
                                  null == n || null == n.discord_web
                                      ? 1
                                      : f.id !== n.discord_web.id || f.type !== n.discord_web.type)
                                      ? ((t = w.intl.string(w.t.nOunHC)), (l = a), (r = "primary"))
                                      : ((t = w.intl.string(w.t.tX4xrt)), (l = s), (r = "critical-primary")),
                                  E({
                                      subHead: w.intl.string(w.t.RCYGot),
                                      buildDetails: f.id,
                                      buttonClick: () => {
                                          g.A.isConnected()
                                              ? m.A.show({
                                                    title: w.intl.string(w.t.tiu1ly),
                                                    body: w.intl.string(w.t["zK+lqW"]),
                                                    onConfirm: l,
                                                    cancelText: w.intl.string(w.t["ETE/oC"]),
                                                    confirmText: w.intl.string(w.t["QDX/qu"]),
                                                    confirmVariant: "critical-primary",
                                                })
                                              : l();
                                      },
                                      buttonText: t,
                                      variant: r,
                                      submitting: o,
                                  })
                              );
                          })({
                              currentOverrides: t,
                              linkMeta: i,
                              applyBuildOverride: y,
                              clearBuildOverride: L,
                              submitting: v,
                          }),
                ],
            }),
        ],
    });
};
