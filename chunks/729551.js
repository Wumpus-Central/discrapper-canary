"use strict";
n.d(t, { A: () => y }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n(834730),
    d = n(17928),
    _ = n(990078),
    u = n(672979),
    c = n(87664),
    E = n(834757),
    h = n(430363),
    m = n(4149),
    f = n(426121),
    g = n(994500),
    p = n(109989),
    A = n(143239),
    I = n(684448),
    T = n(835072),
    S = n(194187);
n(851883);
var N = n(652215),
    C = n(124704);
function R(e) {
    let { textVariant: t, className: n, hasCustomStatusText: r, totalActivityCount: s } = e;
    return (0, i.jsxs)(l.E, {
        variant: t,
        className: a()(n, C.qi),
        color: r ? "status-positive" : "none",
        children: ["+", s - 1],
    });
}
function O(e) {
    let { textVariant: t, className: n } = e;
    return (0, i.jsx)(l.E, { variant: t, className: a()(C.Om, n), "aria-hidden": !0, children: "•" });
}
function y(e) {
    let {
        user: t,
        activities: n,
        applicationStream: s,
        voiceChannel: l,
        textClassName: y,
        iconClassName: v,
        textSize: D = "xs",
        animateEmoji: L = !0,
        hasQuest: b = !1,
        hideEmoji: w = !1,
        hideTooltip: P = !1,
    } = e;
    (0, c.A)(t?.id);
    let k = s?.discoverable !== !1 ? s : null,
        M = (0, E.AO)(k),
        U = r.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === N.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        x = (0, h.Uk)("ActivityStatus"),
        G = r.useMemo(() => (null != U && x ? (0, m.a)(U) : null), [U, x]),
        V = r.useMemo(
            () =>
                (0, o.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== N.$pd.CUSTOM_STATUS && t !== N.$pd.HANG_STATUS && n !== M?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, M?.name],
        ),
        F = n?.find((e) => e.name === M?.name),
        B = t?.bot === !0,
        H = (0, d.bG)([g.A], () => g.A.isBlockedOrIgnored(t?.id)),
        j = U?.state != null,
        W = null != k,
        Y = !W && null != l,
        K = V.length + (W || Y ? 1 : 0),
        z = K > 1,
        $ = U?.state != null && "xs" === D;
    if (H) return null;
    let q = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || P;
            if (null != k)
                return (0, i.jsx)(A.A, {
                    stream: k,
                    game: F,
                    textVariant: `text-${D}/medium`,
                    textClassName: y,
                    iconClassName: v,
                    hideText: $,
                    hideIcon: B,
                    hideTooltip: t,
                });
            let n = V?.[0];
            return null != n
                ? (0, i.jsx)(T.A, {
                      activity: n,
                      textVariant: `text-${D}/medium`,
                      textClassName: y,
                      iconClassName: v,
                      hideText: $,
                      hideIcon: B,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, i.jsx)(S.A, {
                        channel: l,
                        textVariant: `text-${D}/medium`,
                        textClassName: y,
                        iconClassName: v,
                        hideText: $,
                        hideTooltip: t,
                    })
                  : null;
        },
        X = () =>
            (0, i.jsx)(R, {
                textVariant: `text-${D}/medium`,
                className: y,
                hasCustomStatusText: j,
                totalActivityCount: K,
            }),
        Z = () => {
            if (0 === K) return null;
            if (z && !B) {
                let e, t;
                return P
                    ? (0, i.jsxs)("div", { className: a()(C.ht, $ && C.e7), children: [q(), X()] })
                    : (0, i.jsx)(_.m, {
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
                                          { stream: k, game: n?.find(u.A), ...t, showChannelName: !0 },
                                          "stream",
                                      ),
                                  ),
                              V.forEach((n, r) => {
                                  e.push((0, i.jsx)(T.A, { activity: n, ...t }, `activity-${r}`));
                              }),
                              Y && e.push((0, i.jsx)(S.A, { channel: l, ...t, showChannelName: !0 }, "voice")),
                              e),
                          children: (0, i.jsxs)("div", { className: a()(C.ht, $ && C.e7), children: [q(!0), X()] }),
                      });
            }
            return q();
        },
        Q = a()(C.kL, { [C.Dk]: "xs" === D, [C.WV]: "sm" === D });
    return null != G
        ? (0, i.jsxs)("div", {
              className: Q,
              children: [
                  null == G
                      ? null
                      : (0, i.jsx)(f.A, {
                            customStatusActivity: U,
                            textSize: D,
                            animateEmoji: L,
                            hideEmoji: w,
                            hideTooltip: P,
                            textClassName: y,
                            iconClassName: v,
                            tooltipClassName: Q,
                            userId: t?.id,
                        }),
                  K > 0 && (0, i.jsx)(O, { textVariant: `text-${D}/normal`, className: y }),
                  Z(),
                  b && (0, i.jsx)(p.A, {}),
              ],
          })
        : (0, i.jsxs)("div", {
              className: Q,
              children: [
                  Z(),
                  null != U && K > 0 && (0, i.jsx)(O, { textVariant: `text-${D}/normal`, className: y }),
                  null == U
                      ? null
                      : (0, i.jsx)(I.A, {
                            customStatusActivity: U,
                            textSize: D,
                            animateEmoji: L,
                            hideEmoji: w,
                            hideTooltip: P,
                            textClassName: y,
                            iconClassName: v,
                            tooltipClassName: Q,
                        }),
                  b && (0, i.jsx)(p.A, {}),
              ],
          });
}
