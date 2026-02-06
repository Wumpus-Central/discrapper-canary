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
    S = n(143239),
    y = n(684448),
    v = n(835072),
    C = n(194187);
n(851883);
var N = n(652215),
    b = n(123511);
function R(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        o = a - 1;
    return (0, r.jsxs)(l.EYj, {
        variant: t,
        className: s()(n, b.qi),
        color: i ? "status-positive" : "none",
        children: ["+", o],
    });
}
function O(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.EYj, { variant: t, className: s()(b.Om, n), children: "•" });
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
        hasQuest: M = !1,
        hideEmoji: P = !1,
        hideTooltip: k = !1,
    } = e;
    (0, _.A)(t?.id);
    let U = a?.discoverable !== !1 ? a : null,
        G = (0, f.AO)(U),
        F = (0, h.v)("ActivityStatus", l),
        V = i.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === N.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        B = (0, m.Uk)("ActivityStatus"),
        j = i.useMemo(() => (null != V && B ? (0, g.a)(V) : null), [V, B]),
        H = (0, u.bG)([A.default], () => A.default.getId() === t?.id),
        Y = (0, u.bG)([p.A], () =>
            F
                ? H
                    ? p.A.getHangStatusActivity()
                    : null != n
                      ? n.find((e) => e.type === N.$pd.HANG_STATUS)
                      : null
                : null,
        ),
        W = i.useMemo(
            () =>
                (0, o.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== N.$pd.CUSTOM_STATUS && t !== N.$pd.HANG_STATUS && n !== G?.name;
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
        q = V?.state != null,
        X = null != U,
        Z = !X && null != l,
        Q = W.length + (X || Z ? 1 : 0),
        J = Q > 1,
        ee = (V?.state != null || null != Y) && "xs" === w;
    if ($) return null;
    let et = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || k;
            if (null != U)
                return (0, r.jsx)(S.A, {
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
                    e.push((0, r.jsx)(S.A, { stream: U, game: n?.find(d.A), ...t, showChannelName: !0 }, "stream")),
                W.forEach((n, i) => {
                    e.push((0, r.jsx)(v.A, { activity: n, ...t }, `activity-${i}`));
                }),
                Z && e.push((0, r.jsx)(C.A, { channel: l, ...t, showChannelName: !0 }, "voice")),
                e
            );
        },
        er = () =>
            (0, r.jsx)(R, {
                textVariant: `text-${w}/medium`,
                className: D,
                hasCustomStatusText: q,
                totalActivityCount: Q,
            }),
        ei = () =>
            0 === Q
                ? null
                : J && !z
                  ? k
                      ? (0, r.jsxs)("div", { className: s()(b.ht, ee && b.e7), children: [et(), er()] })
                      : (0, r.jsx)(c.m, {
                            delay: 150,
                            __unsupportedReactNodeAsText: en(),
                            children: (0, r.jsxs)("div", {
                                className: s()(b.ht, ee && b.e7),
                                children: [et(!0), er()],
                            }),
                        })
                  : et(),
        ea = s()(b.kL, { [b.Dk]: "xs" === w, [b.WV]: "sm" === w }),
        es = () =>
            null == V && null == Y
                ? null
                : (0, r.jsx)(y.A, {
                      customStatusActivity: V,
                      textSize: w,
                      animateEmoji: x,
                      hideEmoji: P,
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
                      customStatusActivity: V,
                      textSize: w,
                      animateEmoji: x,
                      hideEmoji: P,
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
                  Q > 0 && (0, r.jsx)(O, { textVariant: `text-${w}/normal`, className: D }),
                  ei(),
                  M && (0, r.jsx)(T.A, {}),
              ],
          })
        : (0, r.jsxs)("div", {
              className: ea,
              children: [
                  ei(),
                  (null != V || null != Y) && Q > 0 && (0, r.jsx)(O, { textVariant: `text-${w}/normal`, className: D }),
                  es(),
                  M && (0, r.jsx)(T.A, {}),
              ],
          });
}
