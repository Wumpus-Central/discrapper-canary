"use strict";
n.d(t, { A: () => N }), n(321073);
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
    _ = n(994500),
    x = n(109989),
    C = n(143239),
    A = n(684448),
    E = n(835072),
    I = n(194187);
n(851883);
var v = n(652215),
    y = n(124704);
function b(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: s } = e;
    return (0, l.jsxs)(o.E, {
        variant: t,
        className: a()(n, y.qi),
        color: i ? "status-positive" : "none",
        children: ["+", s - 1],
    });
}
function S(e) {
    let { textVariant: t, className: n } = e;
    return (0, l.jsx)(o.E, { variant: t, className: a()(y.Om, n), "aria-hidden": !0, children: "•" });
}
function N(e) {
    let {
        user: t,
        activities: n,
        applicationStream: s,
        voiceChannel: o,
        textClassName: N,
        iconClassName: j,
        textSize: T = "xs",
        animateEmoji: w = !0,
        hasQuest: R = !1,
        hideEmoji: L = !1,
        hideTooltip: k = !1,
    } = e;
    (0, h.A)(t?.id);
    let M = s?.discoverable !== !1 ? s : null,
        O = (0, m.AO)(M),
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
        W = null != M,
        K = !W && null != o,
        z = V.length + (W || K ? 1 : 0),
        Z = z > 1,
        q = P?.state != null && "xs" === T;
    if (B) return null;
    let J = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || k;
            if (null != M)
                return (0, l.jsx)(C.A, {
                    stream: M,
                    game: G,
                    textVariant: `text-${T}/medium`,
                    textClassName: N,
                    iconClassName: j,
                    hideText: q,
                    hideIcon: F,
                    hideTooltip: t,
                });
            let n = V?.[0];
            return null != n
                ? (0, l.jsx)(E.A, {
                      activity: n,
                      textVariant: `text-${T}/medium`,
                      textClassName: N,
                      iconClassName: j,
                      hideText: q,
                      hideIcon: F,
                      hideTooltip: t,
                  })
                : null != o
                  ? (0, l.jsx)(I.A, {
                        channel: o,
                        textVariant: `text-${T}/medium`,
                        textClassName: N,
                        iconClassName: j,
                        hideText: q,
                        hideTooltip: t,
                    })
                  : null;
        },
        Y = () =>
            (0, l.jsx)(b, {
                textVariant: `text-${T}/medium`,
                className: N,
                hasCustomStatusText: H,
                totalActivityCount: z,
            }),
        X = () => {
            if (0 === z) return null;
            if (Z && !F) {
                let e, t;
                return k
                    ? (0, l.jsxs)("div", { className: a()(y.ht, q && y.e7), children: [J(), Y()] })
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
                                          C.A,
                                          { stream: M, game: n?.find(d.A), ...t, showChannelName: !0 },
                                          "stream",
                                      ),
                                  ),
                              V.forEach((n, i) => {
                                  e.push((0, l.jsx)(E.A, { activity: n, ...t }, `activity-${i}`));
                              }),
                              K && e.push((0, l.jsx)(I.A, { channel: o, ...t, showChannelName: !0 }, "voice")),
                              e),
                          children: (0, l.jsxs)("div", { className: a()(y.ht, q && y.e7), children: [J(!0), Y()] }),
                      });
            }
            return J();
        },
        $ = a()(y.kL, { [y.Dk]: "xs" === T, [y.WV]: "sm" === T });
    return null != U
        ? (0, l.jsxs)("div", {
              className: $,
              children: [
                  null == U
                      ? null
                      : (0, l.jsx)(g.A, {
                            customStatusActivity: P,
                            textSize: T,
                            animateEmoji: w,
                            hideEmoji: L,
                            hideTooltip: k,
                            textClassName: N,
                            iconClassName: j,
                            tooltipClassName: $,
                            userId: t?.id,
                        }),
                  z > 0 && (0, l.jsx)(S, { textVariant: `text-${T}/normal`, className: N }),
                  X(),
                  R && (0, l.jsx)(x.A, {}),
              ],
          })
        : (0, l.jsxs)("div", {
              className: $,
              children: [
                  X(),
                  null != P && z > 0 && (0, l.jsx)(S, { textVariant: `text-${T}/normal`, className: N }),
                  null == P
                      ? null
                      : (0, l.jsx)(A.A, {
                            customStatusActivity: P,
                            textSize: T,
                            animateEmoji: w,
                            hideEmoji: L,
                            hideTooltip: k,
                            textClassName: N,
                            iconClassName: j,
                            tooltipClassName: $,
                        }),
                  R && (0, l.jsx)(x.A, {}),
              ],
          });
}
