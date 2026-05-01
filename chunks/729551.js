"use strict";
n.d(t, { A: () => _ }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(834730),
    c = n(17928),
    u = n(990078),
    d = n(672979),
    h = n(87664),
    m = n(834757),
    p = n(430363),
    f = n(4149),
    g = n(426121),
    x = n(994500),
    C = n(109989),
    A = n(143239),
    E = n(684448),
    I = n(835072),
    y = n(194187);
n(851883);
var v = n(652215),
    S = n(124704);
function N(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: s } = e;
    return (0, l.jsxs)(o.E, {
        variant: t,
        className: a()(n, S.qi),
        color: i ? "status-positive" : "none",
        children: ["+", s - 1],
    });
}
function j(e) {
    let { textVariant: t, className: n } = e;
    return (0, l.jsx)(o.E, { variant: t, className: a()(S.Om, n), "aria-hidden": !0, children: "•" });
}
function _(e) {
    let {
        user: t,
        activities: n,
        applicationStream: s,
        voiceChannel: o,
        textClassName: _,
        iconClassName: T,
        textSize: b = "xs",
        animateEmoji: R = !0,
        hasQuest: O = !1,
        hideEmoji: L = !1,
        hideTooltip: w = !1,
    } = e;
    (0, h.A)(t?.id);
    let M = s?.discoverable !== !1 ? s : null,
        k = (0, m.AO)(M),
        P = i.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === v.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        D = (0, p.Uk)("ActivityStatus"),
        U = i.useMemo(() => (null != P && D ? (0, f.a)(P) : null), [P, D]),
        V = i.useMemo(
            () =>
                (0, r.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== v.$pd.CUSTOM_STATUS && t !== v.$pd.HANG_STATUS && n !== k?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, k?.name],
        ),
        G = n?.find((e) => e.name === k?.name),
        F = t?.bot === !0,
        H = (0, c.bG)([x.A], () => x.A.isBlockedOrIgnored(t?.id)),
        W = P?.state != null,
        B = null != M,
        K = !B && null != o,
        z = V.length + (B || K ? 1 : 0),
        Z = z > 1,
        q = P?.state != null && "xs" === b;
    if (H) return null;
    let J = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || w;
            if (null != M)
                return (0, l.jsx)(A.A, {
                    stream: M,
                    game: G,
                    textVariant: `text-${b}/medium`,
                    textClassName: _,
                    iconClassName: T,
                    hideText: q,
                    hideIcon: F,
                    hideTooltip: t,
                });
            let n = V?.[0];
            return null != n
                ? (0, l.jsx)(I.A, {
                      activity: n,
                      textVariant: `text-${b}/medium`,
                      textClassName: _,
                      iconClassName: T,
                      hideText: q,
                      hideIcon: F,
                      hideTooltip: t,
                  })
                : null != o
                  ? (0, l.jsx)(y.A, {
                        channel: o,
                        textVariant: `text-${b}/medium`,
                        textClassName: _,
                        iconClassName: T,
                        hideText: q,
                        hideTooltip: t,
                    })
                  : null;
        },
        Y = () =>
            (0, l.jsx)(N, {
                textVariant: `text-${b}/medium`,
                className: _,
                hasCustomStatusText: W,
                totalActivityCount: z,
            }),
        X = () => {
            if (0 === z) return null;
            if (Z && !F) {
                let e, t;
                return w
                    ? (0, l.jsxs)("div", { className: a()(S.ht, q && S.e7), children: [J(), Y()] })
                    : (0, l.jsx)(u.m, {
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
                              null != M &&
                                  e.push(
                                      (0, l.jsx)(
                                          A.A,
                                          { stream: M, game: n?.find(d.A), ...t, showChannelName: !0 },
                                          "stream",
                                      ),
                                  ),
                              V.forEach((n, i) => {
                                  e.push((0, l.jsx)(I.A, { activity: n, ...t }, `activity-${i}`));
                              }),
                              K && e.push((0, l.jsx)(y.A, { channel: o, ...t, showChannelName: !0 }, "voice")),
                              e),
                          children: (0, l.jsxs)("div", { className: a()(S.ht, q && S.e7), children: [J(!0), Y()] }),
                      });
            }
            return J();
        },
        $ = a()(S.kL, { [S.Dk]: "xs" === b, [S.WV]: "sm" === b });
    return null != U
        ? (0, l.jsxs)("div", {
              className: $,
              children: [
                  null == U
                      ? null
                      : (0, l.jsx)(g.A, {
                            customStatusActivity: P,
                            textSize: b,
                            animateEmoji: R,
                            hideEmoji: L,
                            hideTooltip: w,
                            textClassName: _,
                            iconClassName: T,
                            tooltipClassName: $,
                            userId: t?.id,
                        }),
                  z > 0 && (0, l.jsx)(j, { textVariant: `text-${b}/normal`, className: _ }),
                  X(),
                  O && (0, l.jsx)(C.A, {}),
              ],
          })
        : (0, l.jsxs)("div", {
              className: $,
              children: [
                  X(),
                  null != P && z > 0 && (0, l.jsx)(j, { textVariant: `text-${b}/normal`, className: _ }),
                  null == P
                      ? null
                      : (0, l.jsx)(E.A, {
                            customStatusActivity: P,
                            textSize: b,
                            animateEmoji: R,
                            hideEmoji: L,
                            hideTooltip: w,
                            textClassName: _,
                            iconClassName: T,
                            tooltipClassName: $,
                        }),
                  O && (0, l.jsx)(C.A, {}),
              ],
          });
}
