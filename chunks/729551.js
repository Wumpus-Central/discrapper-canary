"use strict";
n.d(t, { A: () => D }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(158954),
    u = n(311907),
    c = n(990078),
    d = n(672979),
    _ = n(87664),
    f = n(834757),
    p = n(242919),
    h = n(890330),
    m = n(430363),
    g = n(4149),
    E = n(43284),
    A = n(961350),
    I = n(994500),
    T = n(109989),
    y = n(143239),
    S = n(684448),
    v = n(835072),
    C = n(194187);
n(851883);
var b = n(652215),
    N = n(123511);
function R(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        o = a - 1;
    return (0, r.jsxs)(l.EYj, {
        variant: t,
        className: s()(n, N.qi),
        color: i ? "status-positive" : "none",
        children: ["+", o],
    });
}
function O(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.EYj, { variant: t, className: s()(N.Om, n), children: "•" });
}
function D(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: l,
        textClassName: D,
        iconClassName: L,
        textSize: w = "xs",
        animateEmoji: x = !0,
        hasQuest: P = !1,
        hideEmoji: M = !1,
        hideTooltip: k = !1,
    } = e;
    (0, _.A)(t?.id);
    let U = a?.discoverable !== !1 ? a : null,
        G = (0, f.AO)(U),
        V = (0, h.v)("ActivityStatus", l),
        F = i.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === b.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        B = (0, m.Uk)("ActivityStatus"),
        j = i.useMemo(() => (null != F && B ? (0, g.a)(F) : null), [F, B]),
        H = (0, u.bG)([A.default], () => A.default.getId() === t?.id),
        Y = (0, u.bG)([p.A], () =>
            V
                ? H
                    ? p.A.getHangStatusActivity()
                    : null != n
                      ? n.find((e) => e.type === b.$pd.HANG_STATUS)
                      : null
                : null,
        ),
        W = i.useMemo(
            () =>
                (0, o.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== b.$pd.CUSTOM_STATUS && t !== b.$pd.HANG_STATUS && n !== G?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, G?.name],
        ),
        K = n?.find((e) => e.name === G?.name),
        z = t?.bot === !0,
        $ = (0, u.bG)([I.A], () => I.A.isBlockedOrIgnored(t?.id)),
        q = F?.state != null,
        Z = null != U,
        Q = !Z && null != l,
        X = W.length + (Z || Q ? 1 : 0),
        J = X > 1,
        ee = (F?.state != null || null != Y) && "xs" === w;
    if ($) return null;
    let et = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || k;
            if (null != U)
                return (0, r.jsx)(y.A, {
                    stream: U,
                    game: K,
                    textVariant: `text-${w}/medium`,
                    textClassName: D,
                    iconClassName: L,
                    hideText: ee,
                    hideIcon: z,
                    hideTooltip: t,
                });
            let n = W?.[0];
            return null != n
                ? (0, r.jsx)(v.A, {
                      activity: n,
                      textVariant: `text-${w}/medium`,
                      textClassName: D,
                      iconClassName: L,
                      hideText: ee,
                      hideIcon: z,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, r.jsx)(C.A, {
                        channel: l,
                        textVariant: `text-${w}/medium`,
                        textClassName: D,
                        iconClassName: L,
                        hideText: ee,
                        hideTooltip: t,
                    })
                  : null;
        },
        en = () => {
            let e = [],
                t = { textVariant: "text-sm/medium", hideTooltip: !0, hideIcon: !1, hideText: !1, canTruncate: !1 };
            return (
                null != U &&
                    e.push((0, r.jsx)(y.A, { stream: U, game: n?.find(d.A), ...t, showChannelName: !0 }, "stream")),
                W.forEach((n, i) => {
                    e.push((0, r.jsx)(v.A, { activity: n, ...t }, `activity-${i}`));
                }),
                Q && e.push((0, r.jsx)(C.A, { channel: l, ...t, showChannelName: !0 }, "voice")),
                e
            );
        },
        er = () =>
            (0, r.jsx)(R, {
                textVariant: `text-${w}/medium`,
                className: D,
                hasCustomStatusText: q,
                totalActivityCount: X,
            }),
        ei = () =>
            0 === X
                ? null
                : J && !z
                  ? k
                      ? (0, r.jsxs)("div", { className: s()(N.ht, ee && N.e7), children: [et(), er()] })
                      : (0, r.jsx)(c.m, {
                            delay: 150,
                            __unsupportedReactNodeAsText: en(),
                            children: (0, r.jsxs)("div", {
                                className: s()(N.ht, ee && N.e7),
                                children: [et(!0), er()],
                            }),
                        })
                  : et(),
        ea = s()(N.kL, { [N.Dk]: "xs" === w, [N.WV]: "sm" === w }),
        es = () =>
            null == F && null == Y
                ? null
                : (0, r.jsx)(S.A, {
                      customStatusActivity: F,
                      textSize: w,
                      animateEmoji: x,
                      hideEmoji: M,
                      hideTooltip: k,
                      textClassName: D,
                      iconClassName: L,
                      tooltipClassName: ea,
                      voiceChannel: l,
                      hangStatus: Y,
                      userId: t?.id,
                  }),
        eo = () =>
            null == j
                ? null
                : (0, r.jsx)(E.A, {
                      customStatusActivity: F,
                      textSize: w,
                      animateEmoji: x,
                      hideEmoji: M,
                      hideTooltip: k,
                      textClassName: D,
                      iconClassName: L,
                      tooltipClassName: ea,
                      voiceChannel: l,
                      hangStatus: Y,
                      userId: t?.id,
                  });
    return null != j
        ? (0, r.jsxs)("div", {
              className: ea,
              children: [
                  eo(),
                  X > 0 && (0, r.jsx)(O, { textVariant: `text-${w}/normal`, className: D }),
                  ei(),
                  P && (0, r.jsx)(T.A, {}),
              ],
          })
        : (0, r.jsxs)("div", {
              className: ea,
              children: [
                  ei(),
                  (null != F || null != Y) && X > 0 && (0, r.jsx)(O, { textVariant: `text-${w}/normal`, className: D }),
                  es(),
                  P && (0, r.jsx)(T.A, {}),
              ],
          });
}
