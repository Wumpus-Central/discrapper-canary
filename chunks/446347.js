"use strict";
n.d(t, { A: () => O }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(939249),
    c = n(173936),
    d = n(834730),
    _ = n(821609),
    f = n(349288),
    p = n(885574),
    h = n(579872),
    E = n(383501),
    m = n(710067),
    g = n(957565),
    A = n(975571),
    I = n(723702),
    T = n(938463),
    S = n(652215),
    y = n(985018),
    N = n(722836);
function v(e) {
    let { url: t } = e,
        [n, s] = i.useState(!1),
        o = i.useRef(void 0),
        l = i.useCallback(() => {
            n ||
                (0, g.C)(t, () => {
                    s(!0), (o.current = setTimeout(() => s(!1), 2e3));
                });
        }, [t, n]);
    return (
        i.useEffect(() => () => clearTimeout(o.current), []),
        g.p5
            ? (0, r.jsxs)(u.D, {
                  className: a()(N.S, n ? N.pG : null),
                  onClick: l,
                  children: [
                      (0, r.jsx)(c.q, { size: "md", color: "currentColor", className: N.n7 }),
                      n ? y.intl.string(y.t.GmrIJY) : y.intl.string(y.t.iVzBOh),
                  ],
              })
            : null
    );
}
function C(e) {
    let {
        subHead: t,
        buildDetails: n,
        variant: s,
        buttonClick: a,
        buttonText: o,
        disabled: l = !1,
        submitting: u = !1,
    } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: N.NT,
                children: [
                    (0, r.jsx)(d.E, { variant: "text-sm/medium", className: N.V$, children: t }),
                    (0, r.jsx)("div", { className: N.Jb, children: n }),
                ],
            }),
            (0, r.jsx)(_.$, { text: o, loading: u, variant: s, onClick: a, fullWidth: !0, disabled: l }),
        ],
    });
}
let O = (e) => {
    let { loading: t = !1, currentOverrides: n, linkMeta: s, url: o, applyBuildOverride: u, clearBuildOverride: c } = e,
        [_, g] = i.useState(!1),
        O = i.useCallback(() => {
            _ || (g(!0), u().catch(() => g(!1)));
        }, [u, _]),
        R = i.useCallback(() => {
            _ || (g(!0), c().catch(() => g(!1)));
        }, [c, _]);
    return (0, r.jsxs)("div", {
        className: N.iE,
        children: [
            (0, r.jsxs)(d.E, {
                variant: "text-xs/normal",
                className: N.lS,
                children: [
                    (0, r.jsx)("strong", {
                        className: N.DD,
                        children:
                            null != s && null != s.releaseChannel
                                ? y.intl.formatToPlainString(y.t.bFj63b, { releaseChannel: s.releaseChannel })
                                : y.intl.string(y.t.Wj3LW4),
                    }),
                    (0, r.jsx)(f.Anchor, {
                        className: N.Pl,
                        href: A.A.getArticleURL(S.MVz.BUILD_OVERRIDE_EMBED),
                        target: "_blank",
                        children: (0, r.jsx)(p.m, { size: "xs", color: "currentColor", className: N.G }),
                    }),
                    t ? null : (0, r.jsx)(v, { url: o }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: N.Qs,
                children: [
                    (0, r.jsx)(m.A, { className: N.Kk }),
                    t
                        ? (0, r.jsxs)(i.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: N.NT,
                                      children: [
                                          (0, r.jsx)("div", { className: a()(N.Pz, N.w9) }),
                                          (0, r.jsx)("div", { className: N.Pz }),
                                      ],
                                  }),
                                  (0, r.jsx)("div", { className: N.MM }),
                              ],
                          })
                        : (function (e) {
                              let t,
                                  n,
                                  r,
                                  {
                                      currentOverrides: i,
                                      linkMeta: s,
                                      applyBuildOverride: a,
                                      clearBuildOverride: o,
                                      submitting: u,
                                  } = e,
                                  c = ["discord_web"];
                              I.isPlatformEmbedded || c.push("discord_marketing", "discord_developers");
                              let d = (0, T.A)(s, c);
                              if (!d.valid) {
                                  var _;
                                  return (
                                      (_ = d.reason),
                                      C({
                                          subHead: y.intl.string(y.t.ODXApH),
                                          variant: "secondary",
                                          buttonText: "Invalid",
                                          buildDetails: _,
                                          disabled: !0,
                                      })
                                  );
                              }
                              l()(
                                  null != s,
                                  "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved",
                              );
                              let { discord_web: f, discord_developers: p } = s.targetBuildOverride,
                                  m = f ?? p;
                              return (
                                  (l()(
                                      null != m,
                                      "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved",
                                  ),
                                  null == i || null == i.discord_web
                                      ? 1
                                      : m.id !== i.discord_web.id || m.type !== i.discord_web.type)
                                      ? ((n = y.intl.string(y.t.nOunHC)), (t = a), (r = "primary"))
                                      : ((n = y.intl.string(y.t.tX4xrt)), (t = o), (r = "critical-primary")),
                                  C({
                                      subHead: y.intl.string(y.t.RCYGot),
                                      buildDetails: m.id,
                                      buttonClick: () => {
                                          E.A.isConnected()
                                              ? h.A.show({
                                                    title: y.intl.string(y.t.tiu1ly),
                                                    body: y.intl.string(y.t["zK+lqW"]),
                                                    onConfirm: t,
                                                    cancelText: y.intl.string(y.t["ETE/oC"]),
                                                    confirmText: y.intl.string(y.t["QDX/qu"]),
                                                    confirmVariant: "critical-primary",
                                                })
                                              : t();
                                      },
                                      buttonText: n,
                                      variant: r,
                                      submitting: u,
                                  })
                              );
                          })({
                              currentOverrides: n,
                              linkMeta: s,
                              applyBuildOverride: O,
                              clearBuildOverride: R,
                              submitting: _,
                          }),
                ],
            }),
        ],
    });
};
