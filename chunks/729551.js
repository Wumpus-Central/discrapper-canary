"use strict";
n.d(t, { A: () => R }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n(158954),
    u = n(311907),
    c = n(990078),
    d = n(672979),
    _ = n(87664),
    f = n(834757),
    p = n(430363),
    h = n(4149),
    m = n(43284),
    E = n(994500),
    g = n(109989),
    A = n(143239),
    I = n(684448),
    T = n(835072),
    S = n(194187);
n(851883);
var y = n(652215),
    v = n(496496);
function N(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: s } = e,
        o = s - 1;
    return (0, r.jsxs)(l.EYj, {
        variant: t,
        className: a()(n, v.qi),
        color: i ? "status-positive" : "none",
        children: ["+", o],
    });
}
function C(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.EYj, { variant: t, className: a()(v.Om, n), "aria-hidden": !0, children: "•" });
}
function R(e) {
    let {
        user: t,
        activities: n,
        applicationStream: s,
        voiceChannel: l,
        textClassName: R,
        iconClassName: O,
        textSize: b = "xs",
        animateEmoji: D = !0,
        hasQuest: L = !1,
        hideEmoji: w = !1,
        hideTooltip: M = !1,
    } = e;
    (0, _.A)(t?.id);
    let x = s?.discoverable !== !1 ? s : null,
        P = (0, f.AO)(x),
        k = i.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === y.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        U = (0, p.Uk)("ActivityStatus"),
        G = i.useMemo(() => (null != k && U ? (0, h.a)(k) : null), [k, U]),
        F = i.useMemo(
            () =>
                (0, o.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== y.$pd.CUSTOM_STATUS && t !== y.$pd.HANG_STATUS && n !== P?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, P?.name],
        ),
        V = n?.find((e) => e.name === P?.name),
        B = t?.bot === !0,
        H = (0, u.bG)([E.A], () => E.A.isBlockedOrIgnored(t?.id)),
        j = k?.state != null,
        Y = null != x,
        W = !Y && null != l,
        K = F.length + (Y || W ? 1 : 0),
        $ = K > 1,
        z = k?.state != null && "xs" === b;
    if (H) return null;
    let q = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || M;
            if (null != x)
                return (0, r.jsx)(A.A, {
                    stream: x,
                    game: V,
                    textVariant: `text-${b}/medium`,
                    textClassName: R,
                    iconClassName: O,
                    hideText: z,
                    hideIcon: B,
                    hideTooltip: t,
                });
            let n = F?.[0];
            return null != n
                ? (0, r.jsx)(T.A, {
                      activity: n,
                      textVariant: `text-${b}/medium`,
                      textClassName: R,
                      iconClassName: O,
                      hideText: z,
                      hideIcon: B,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, r.jsx)(S.A, {
                        channel: l,
                        textVariant: `text-${b}/medium`,
                        textClassName: R,
                        iconClassName: O,
                        hideText: z,
                        hideTooltip: t,
                    })
                  : null;
        },
        Z = () => {
            let e = [],
                t = { textVariant: "text-sm/medium", hideTooltip: !0, hideIcon: !1, hideText: !1, canTruncate: !1 };
            return (
                null != x &&
                    e.push((0, r.jsx)(A.A, { stream: x, game: n?.find(d.A), ...t, showChannelName: !0 }, "stream")),
                F.forEach((n, i) => {
                    e.push((0, r.jsx)(T.A, { activity: n, ...t }, `activity-${i}`));
                }),
                W && e.push((0, r.jsx)(S.A, { channel: l, ...t, showChannelName: !0 }, "voice")),
                e
            );
        },
        X = () =>
            (0, r.jsx)(N, {
                textVariant: `text-${b}/medium`,
                className: R,
                hasCustomStatusText: j,
                totalActivityCount: K,
            }),
        Q = () =>
            0 === K
                ? null
                : $ && !B
                  ? M
                      ? (0, r.jsxs)("div", { className: a()(v.ht, z && v.e7), children: [q(), X()] })
                      : (0, r.jsx)(c.m, {
                            delay: 150,
                            __unsupportedReactNodeAsText: Z(),
                            children: (0, r.jsxs)("div", { className: a()(v.ht, z && v.e7), children: [q(!0), X()] }),
                        })
                  : q(),
        J = a()(v.kL, { [v.Dk]: "xs" === b, [v.WV]: "sm" === b }),
        ee = () =>
            null == k
                ? null
                : (0, r.jsx)(I.A, {
                      customStatusActivity: k,
                      textSize: b,
                      animateEmoji: D,
                      hideEmoji: w,
                      hideTooltip: M,
                      textClassName: R,
                      iconClassName: O,
                      tooltipClassName: J,
                  }),
        et = () =>
            null == G
                ? null
                : (0, r.jsx)(m.A, {
                      customStatusActivity: k,
                      textSize: b,
                      animateEmoji: D,
                      hideEmoji: w,
                      hideTooltip: M,
                      textClassName: R,
                      iconClassName: O,
                      tooltipClassName: J,
                      userId: t?.id,
                  });
    return null != G
        ? (0, r.jsxs)("div", {
              className: J,
              children: [
                  et(),
                  K > 0 && (0, r.jsx)(C, { textVariant: `text-${b}/normal`, className: R }),
                  Q(),
                  L && (0, r.jsx)(g.A, {}),
              ],
          })
        : (0, r.jsxs)("div", {
              className: J,
              children: [
                  Q(),
                  null != k && K > 0 && (0, r.jsx)(C, { textVariant: `text-${b}/normal`, className: R }),
                  ee(),
                  L && (0, r.jsx)(g.A, {}),
              ],
          });
}
