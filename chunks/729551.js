"use strict";
n.d(t, { A: () => N }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n(834730),
    c = n(311907),
    u = n(990078),
    d = n(672979),
    h = n(87664),
    m = n(834757),
    p = n(430363),
    f = n(4149),
    g = n(43284),
    _ = n(994500),
    x = n(109989),
    A = n(143239),
    C = n(684448),
    E = n(835072),
    I = n(194187);
n(851883);
var v = n(652215),
    y = n(124704);
function S(e) {
    let { textVariant: t, className: n, hasCustomStatusText: l, totalActivityCount: s } = e;
    return (0, i.jsxs)(o.E, {
        variant: t,
        className: r()(n, y.qi),
        color: l ? "status-positive" : "none",
        children: ["+", s - 1],
    });
}
function b(e) {
    let { textVariant: t, className: n } = e;
    return (0, i.jsx)(o.E, { variant: t, className: r()(y.Om, n), "aria-hidden": !0, children: "•" });
}
function N(e) {
    let {
        user: t,
        activities: n,
        applicationStream: s,
        voiceChannel: o,
        textClassName: N,
        iconClassName: T,
        textSize: j = "xs",
        animateEmoji: R = !0,
        hasQuest: w = !1,
        hideEmoji: L = !1,
        hideTooltip: M = !1,
    } = e;
    (0, h.A)(t?.id);
    let k = s?.discoverable !== !1 ? s : null,
        O = (0, m.AO)(k),
        P = l.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === v.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        D = (0, p.Uk)("ActivityStatus"),
        U = l.useMemo(() => (null != P && D ? (0, f.a)(P) : null), [P, D]),
        V = l.useMemo(
            () =>
                (0, a.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== v.$pd.CUSTOM_STATUS && t !== v.$pd.HANG_STATUS && n !== O?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, O?.name],
        ),
        G = n?.find((e) => e.name === O?.name),
        F = t?.bot === !0,
        B = (0, c.bG)([_.A], () => _.A.isBlockedOrIgnored(t?.id)),
        H = P?.state != null,
        W = null != k,
        K = !W && null != o,
        z = V.length + (W || K ? 1 : 0),
        Z = z > 1,
        q = P?.state != null && "xs" === j;
    if (B) return null;
    let Y = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || M;
            if (null != k)
                return (0, i.jsx)(A.A, {
                    stream: k,
                    game: G,
                    textVariant: `text-${j}/medium`,
                    textClassName: N,
                    iconClassName: T,
                    hideText: q,
                    hideIcon: F,
                    hideTooltip: t,
                });
            let n = V?.[0];
            return null != n
                ? (0, i.jsx)(E.A, {
                      activity: n,
                      textVariant: `text-${j}/medium`,
                      textClassName: N,
                      iconClassName: T,
                      hideText: q,
                      hideIcon: F,
                      hideTooltip: t,
                  })
                : null != o
                  ? (0, i.jsx)(I.A, {
                        channel: o,
                        textVariant: `text-${j}/medium`,
                        textClassName: N,
                        iconClassName: T,
                        hideText: q,
                        hideTooltip: t,
                    })
                  : null;
        },
        J = () =>
            (0, i.jsx)(S, {
                textVariant: `text-${j}/medium`,
                className: N,
                hasCustomStatusText: H,
                totalActivityCount: z,
            }),
        $ = () => {
            if (0 === z) return null;
            if (Z && !F) {
                let e, t;
                return M
                    ? (0, i.jsxs)("div", { className: r()(y.ht, q && y.e7), children: [Y(), J()] })
                    : (0, i.jsx)(u.m, {
                          delay: 150,
                          __unsupportedReactNodeAsText:
                              ((e = []),
                              (t = {
                                  textVariant: "text-sm/medium",
                                  hideTooltip: !0,
                                  hideIcon: !1,
                                  hideText: !1,
                                  canTruncate: !1,
                              }),
                              null != k &&
                                  e.push(
                                      (0, i.jsx)(
                                          A.A,
                                          { stream: k, game: n?.find(d.A), ...t, showChannelName: !0 },
                                          "stream",
                                      ),
                                  ),
                              V.forEach((n, l) => {
                                  e.push((0, i.jsx)(E.A, { activity: n, ...t }, `activity-${l}`));
                              }),
                              K && e.push((0, i.jsx)(I.A, { channel: o, ...t, showChannelName: !0 }, "voice")),
                              e),
                          children: (0, i.jsxs)("div", { className: r()(y.ht, q && y.e7), children: [Y(!0), J()] }),
                      });
            }
            return Y();
        },
        X = r()(y.kL, { [y.Dk]: "xs" === j, [y.WV]: "sm" === j });
    return null != U
        ? (0, i.jsxs)("div", {
              className: X,
              children: [
                  null == U
                      ? null
                      : (0, i.jsx)(g.A, {
                            customStatusActivity: P,
                            textSize: j,
                            animateEmoji: R,
                            hideEmoji: L,
                            hideTooltip: M,
                            textClassName: N,
                            iconClassName: T,
                            tooltipClassName: X,
                            userId: t?.id,
                        }),
                  z > 0 && (0, i.jsx)(b, { textVariant: `text-${j}/normal`, className: N }),
                  $(),
                  w && (0, i.jsx)(x.A, {}),
              ],
          })
        : (0, i.jsxs)("div", {
              className: X,
              children: [
                  $(),
                  null != P && z > 0 && (0, i.jsx)(b, { textVariant: `text-${j}/normal`, className: N }),
                  null == P
                      ? null
                      : (0, i.jsx)(C.A, {
                            customStatusActivity: P,
                            textSize: j,
                            animateEmoji: R,
                            hideEmoji: L,
                            hideTooltip: M,
                            textClassName: N,
                            iconClassName: T,
                            tooltipClassName: X,
                        }),
                  w && (0, i.jsx)(x.A, {}),
              ],
          });
}
