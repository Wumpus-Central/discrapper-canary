(l.r(t), l.d(t, { default: () => K }));
var n = l(477900),
    r = l(582128),
    i = l(17928),
    s = l(94977),
    a = l(148810),
    d = l(521502),
    o = l(380610),
    c = l(536637),
    u = l.n(c),
    m = l(331322),
    h = l(834730),
    x = l(404778),
    v = l(821609),
    g = l(975807),
    C = l(105292),
    p = l(205624);
let f = r.memo(function (e) {
    let { url: t } = e,
        l = r.useMemo(() => (0, s.t)(t), [t]),
        [i] = r.useState(Date.now),
        a = l?.targetBuildOverride.discord_campaign_builder,
        d = r.useCallback(() => (0, g.A)(t), [t]);
    return (0, n.jsxs)(m.B, {
        className: p.i,
        gap: 12,
        padding: 16,
        fullWidth: !1,
        children: [
            (0, n.jsx)(h.E, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: C.intl.string(C.t["7i6b0c"]),
            }),
            (0, n.jsx)(x.c, {}),
            null != a && null != l
                ? (0, n.jsxs)(m.B, {
                      gap: 12,
                      children: [
                          (0, n.jsxs)(m.B, {
                              gap: 4,
                              children: [
                                  (0, n.jsx)(h.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: C.intl.string("branch" === a.type ? C.t.p9TwTG : C.t.RCYGot),
                                  }),
                                  (0, n.jsx)(h.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      lineClamp: 2,
                                      title: a.id,
                                      children: "id" === a.type ? a.id.slice(0, 7) : a.id,
                                  }),
                              ],
                          }),
                          "" !== l.expiresAt &&
                              (0, n.jsx)(h.E, {
                                  variant: "text-xs/normal",
                                  color: "text-subtle",
                                  title: l.expiresAt,
                                  children: C.intl.formatToPlainString(
                                      Date.parse(l.expiresAt) <= i ? C.t["4OJ/F8"] : C.t.BKITAL,
                                      { time: u()(l.expiresAt).from(i) },
                                  ),
                              }),
                      ],
                  })
                : (0, n.jsx)(h.E, {
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: C.intl.string(C.t.l9qBG8),
                  }),
            (0, n.jsx)(x.c, {}),
            (0, n.jsx)(v.$, { text: C.intl.string(C.t.q5jLJB), onClick: d, fullWidth: !0 }),
        ],
    });
});
l(321073);
var j = l(503698),
    b = l.n(j),
    w = l(284009),
    k = l.n(w),
    N = l(939249),
    E = l(173936),
    B = l(28863),
    A = l(885574),
    y = l(579872),
    L = l(763827),
    O = l(280977);
let _ = r.memo(function (e) {
    let { className: t } = e;
    return (0, n.jsxs)("svg", {
        width: "57",
        height: "40",
        viewBox: "0 0 57 40",
        fill: "none",
        className: t,
        children: [
            (0, n.jsx)("path", {
                d: "M49.4949 36H3.9596C1.78182 36 0 34.2486 0 32.1081V3.89189C0 1.75135 1.78182 0 3.9596 0H49.4949C51.6727 0 53.4545 1.75135 53.4545 3.89189V32.1081C53.4545 34.2486 51.6727 36 49.4949 36Z",
                className: O.wT,
            }),
            (0, n.jsx)("path", {
                d: "M44.5456 10.8889H25.7375C24.6486 10.8889 23.7577 9.99798 23.7577 8.90909C23.7577 7.8202 24.6486 6.92929 25.7375 6.92929H44.5456C45.6345 6.92929 46.5254 7.8202 46.5254 8.90909C46.5254 9.99798 45.6345 10.8889 44.5456 10.8889ZM19.7981 10.8889C18.7092 10.8889 17.8183 9.99798 17.8183 8.90909C17.8183 7.8202 18.7092 6.92929 19.7981 6.92929C20.887 6.92929 21.7779 7.8202 21.7779 8.90909C21.7779 9.99798 20.887 10.8889 19.7981 10.8889ZM44.5456 19.798H25.7375C24.6486 19.798 23.7577 18.9071 23.7577 17.8182C23.7577 16.7293 24.6486 15.8384 25.7375 15.8384H44.5456C45.6345 15.8384 46.5254 16.7293 46.5254 17.8182C46.5254 18.9071 45.6345 19.798 44.5456 19.798ZM19.7981 19.798C18.7092 19.798 17.8183 18.9071 17.8183 17.8182C17.8183 16.7293 18.7092 15.8384 19.7981 15.8384C20.887 15.8384 21.7779 16.7293 21.7779 17.8182C21.7779 18.9071 20.887 19.798 19.7981 19.798ZM31.6365 28.7071H25.7375C24.6486 28.7071 23.7577 27.8162 23.7577 26.7273C23.7577 25.6384 24.6486 24.7475 25.7375 24.7475H31.6365C32.7254 24.7475 33.6163 25.6384 33.6163 26.7273C33.6163 27.8162 32.7254 28.7071 31.6365 28.7071ZM19.7981 28.7071C18.7092 28.7071 17.8183 27.8162 17.8183 26.7273C17.8183 25.6384 18.7092 24.7475 19.7981 24.7475C20.887 24.7475 21.7779 25.6384 21.7779 26.7273C21.7779 27.8162 20.887 28.7071 19.7981 28.7071Z",
                className: O.lk,
            }),
            (0, n.jsx)("path", {
                d: "M3.9596 36H13.8586V0H3.9596C1.78182 0 0 1.78182 0 3.9596V32.0404C0 34.2182 1.78182 36 3.9596 36Z",
                className: O.$U,
            }),
            (0, n.jsx)("path", {
                d: "M6.9293 10.8889C5.24647 10.8889 3.9596 9.60202 3.9596 7.91919C3.9596 6.23636 5.24647 4.94949 6.9293 4.94949C8.61212 4.94949 9.89899 6.23636 9.89899 7.91919C9.89899 9.60202 8.61212 10.8889 6.9293 10.8889ZM6.9293 20.7879C5.24647 20.7879 3.9596 19.501 3.9596 17.8182C3.9596 16.1354 5.24647 14.8485 6.9293 14.8485C8.61212 14.8485 9.89899 16.1354 9.89899 17.8182C9.89899 19.501 8.61212 20.7879 6.9293 20.7879ZM6.9293 30.6869C5.24647 30.6869 3.9596 29.4 3.9596 27.7172C3.9596 26.0343 5.24647 24.7475 6.9293 24.7475C8.61212 24.7475 9.89899 26.0343 9.89899 27.7172C9.89899 29.4 8.61212 30.6869 6.9293 30.6869Z",
                className: O.Vu,
            }),
            (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M41.4328 33L46 37.7129L43.7836 40L37 32.9999L39.2164 30.7128L39.2165 30.7129L43.7836 26L46 28.2871L41.4328 33Z",
                className: O.r_,
            }),
            (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M54.7821 35.2871L54.7841 35.2892L57 33.0021L50.2159 26L48 28.2871L52.5662 33L48 37.7129L50.2159 40L54.7821 35.2871Z",
                className: O.r_,
            }),
        ],
    });
});
var M = l(957565),
    T = l(975571),
    I = l(723702),
    D = l(435558),
    R = l.n(D),
    S = l(280450),
    H = l(986238),
    Z = l(652215),
    G = l(100281);
function P(e) {
    let { url: t } = e,
        [l, i] = r.useState(!1),
        s = r.useRef(void 0),
        a = r.useCallback(() => {
            l ||
                (0, M.C)(t, () => {
                    (i(!0), (s.current = setTimeout(() => i(!1), 2e3)));
                });
        }, [t, l]);
    return (
        r.useEffect(() => () => clearTimeout(s.current), []),
        M.p5
            ? (0, n.jsxs)(N.D, {
                  className: b()(G.S, l ? G.pG : null),
                  onClick: a,
                  children: [
                      (0, n.jsx)(E.LinkIcon, { size: "md", color: "currentColor", className: G.n7 }),
                      l ? C.intl.string(C.t.GmrIJY) : C.intl.string(C.t.iVzBOh),
                  ],
              })
            : null
    );
}
function V(e) {
    let {
        subHead: t,
        buildDetails: l,
        variant: i,
        buttonClick: s,
        buttonText: a,
        disabled: d = !1,
        submitting: o = !1,
    } = e;
    return (0, n.jsxs)(r.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: G.NT,
                children: [
                    (0, n.jsx)(h.E, { variant: "text-sm/medium", className: G.V$, children: t }),
                    (0, n.jsx)("div", { className: G.Jb, children: l }),
                ],
            }),
            (0, n.jsx)(v.$, { text: a, loading: o, variant: i, onClick: s, fullWidth: !0, disabled: d }),
        ],
    });
}
let $ = function (e) {
    let { loading: t = !1, currentOverrides: l, linkMeta: i, url: s, applyBuildOverride: a, clearBuildOverride: d } = e,
        [o, c] = r.useState(!1),
        u = r.useCallback(() => {
            o || (c(!0), a().catch(() => c(!1)));
        }, [a, o]),
        m = r.useCallback(() => {
            o || (c(!0), d().catch(() => c(!1)));
        }, [d, o]);
    return (0, n.jsxs)("div", {
        className: G.iE,
        children: [
            (0, n.jsxs)(h.E, {
                variant: "text-xs/normal",
                className: G.lS,
                children: [
                    (0, n.jsx)("strong", {
                        className: G.DD,
                        children:
                            null != i && null != i.releaseChannel
                                ? C.intl.formatToPlainString(C.t.bFj63b, { releaseChannel: i.releaseChannel })
                                : C.intl.string(C.t.Wj3LW4),
                    }),
                    (0, n.jsx)(B.Anchor, {
                        className: G.Pl,
                        href: T.A.getArticleURL(Z.MVz.BUILD_OVERRIDE_EMBED),
                        target: "_blank",
                        children: (0, n.jsx)(A.CircleInformationIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: G.G,
                        }),
                    }),
                    t ? null : (0, n.jsx)(P, { url: s }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: G.Qs,
                children: [
                    (0, n.jsx)(_, { className: G.Kk }),
                    t
                        ? (0, n.jsxs)(r.Fragment, {
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: G.NT,
                                      children: [
                                          (0, n.jsx)("div", { className: b()(G.Pz, G.w9) }),
                                          (0, n.jsx)("div", { className: G.Pz }),
                                      ],
                                  }),
                                  (0, n.jsx)("div", { className: G.MM }),
                              ],
                          })
                        : (function (e) {
                              let t,
                                  l,
                                  n,
                                  {
                                      currentOverrides: r,
                                      linkMeta: i,
                                      applyBuildOverride: s,
                                      clearBuildOverride: a,
                                      submitting: d,
                                  } = e,
                                  o = ["discord_web"];
                              I.isPlatformEmbedded || o.push("discord_marketing", "discord_developers");
                              let c = (function (e, t) {
                                  if (null == e || null == t) return { valid: !1, reason: C.intl.string(C.t.d34xi4) };
                                  let {
                                          releaseChannel: l,
                                          expiresAt: n,
                                          validForUserIds: r,
                                          allowedVersions: i,
                                          targetBuildOverride: s,
                                      } = e,
                                      a = Object.keys(s);
                                  if (0 === R().intersection(a, t).length)
                                      return {
                                          valid: !1,
                                          reason: C.intl.formatToPlainString(C.t.wySUzv, {
                                              requestedTargets: a.map((e) => H.v_[e] ?? "unknown").join(", "),
                                          }),
                                      };
                                  if (null != l && l !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
                                      let e =
                                          l === Z.BIo.PTB
                                              ? l.toUpperCase()
                                              : `${l.charAt(0).toUpperCase()}${l.slice(1)}`;
                                      return {
                                          valid: !1,
                                          reason: C.intl.formatToPlainString(C.t.GOEF0C, { releaseChannel: e }),
                                      };
                                  }
                                  if (null != i) {
                                      let e = !1;
                                      ((e = !1), !0);
                                      return {
                                          valid: !1,
                                          reason: C.intl.formatToPlainString(C.t.GOEF0C, {
                                              releaseChannel: i.join(", "),
                                          }),
                                      };
                                  }
                                  let d = null != n ? new Date(n).getTime() : null;
                                  return null != d && d < Date.now()
                                      ? { valid: !1, reason: C.intl.string(C.t["8eRE6S"]) }
                                      : r.length > 0 && !r.includes(S.default.getId())
                                        ? { valid: !1, reason: C.intl.string(C.t.qZgV0a) }
                                        : { valid: !0 };
                              })(i, o);
                              if (!c.valid) {
                                  var u;
                                  return (
                                      (u = c.reason),
                                      V({
                                          subHead: C.intl.string(C.t.ODXApH),
                                          variant: "secondary",
                                          buttonText: "Invalid",
                                          buildDetails: u,
                                          disabled: !0,
                                      })
                                  );
                              }
                              k()(
                                  null != i,
                                  "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved",
                              );
                              let { discord_web: m, discord_developers: h } = i.targetBuildOverride,
                                  x = m ?? h;
                              return (
                                  (k()(
                                      null != x,
                                      "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved",
                                  ),
                                  null == r || null == r.discord_web
                                      ? 1
                                      : x.id !== r.discord_web.id || x.type !== r.discord_web.type)
                                      ? ((l = C.intl.string(C.t.nOunHC)), (t = s), (n = "primary"))
                                      : ((l = C.intl.string(C.t.tX4xrt)), (t = a), (n = "critical-primary")),
                                  V({
                                      subHead: C.intl.string("branch" === x.type ? C.t.p9TwTG : C.t.RCYGot),
                                      buildDetails: x.id,
                                      buttonClick: function () {
                                          L.A.isConnected()
                                              ? y.A.show({
                                                    title: C.intl.string(C.t.tiu1ly),
                                                    body: C.intl.string(C.t["zK+lqW"]),
                                                    onConfirm: t,
                                                    cancelText: C.intl.string(C.t["ETE/oC"]),
                                                    confirmText: C.intl.string(C.t["QDX/qu"]),
                                                    confirmVariant: "critical-primary",
                                                })
                                              : t();
                                      },
                                      buttonText: l,
                                      variant: n,
                                      submitting: d,
                                  })
                              );
                          })({
                              currentOverrides: l,
                              linkMeta: i,
                              applyBuildOverride: u,
                              clearBuildOverride: m,
                              submitting: o,
                          }),
                ],
            }),
        ],
    });
};
var z = l(390486);
async function U(e) {
    if (200 !== (await (0, a.oA)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function F(e) {
    if (200 !== (await (0, a.Zk)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function q() {
    (await (0, a.iD)(), window.location.reload(!0));
}
let W = r.memo(function (e) {
        let { url: t } = e,
            l = (0, i.cf)([d.A], () => d.A.getCurrentBuildOverride()),
            s = (0, i.bG)([d.A], () => d.A.getBuildOverride(t)),
            { payload: a, validatedURL: c } = s,
            u = l.state === d.U.Resolving || s.state === d.U.Resolving,
            m = r.useCallback(
                () =>
                    (0, o.h4)(s.url) && null != s.override
                        ? F(s.override?.targetBuildOverride)
                        : null == a
                          ? Promise.reject(Error("Invalid override payload"))
                          : ((0, z.R)(s.override, a), U(a)),
                [a, s],
            );
        return null != c
            ? (0, n.jsx)($, {
                  loading: u,
                  linkMeta: s.override,
                  currentOverrides: l.overrides,
                  applyBuildOverride: m,
                  clearBuildOverride: q,
                  url: c,
              })
            : null;
    }),
    K = r.memo(function (e) {
        let { url: t } = e;
        return (0, s.e)(t) ? (0, n.jsx)(f, { url: t }) : (0, n.jsx)(W, { url: t });
    });
