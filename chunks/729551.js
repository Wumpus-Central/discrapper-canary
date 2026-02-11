"use strict";
n.d(t, { A: () => L }), n(321073);
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
    h = n(242919),
    p = n(890330),
    g = n(430363),
    E = n(4149),
    A = n(43284),
    I = n(961350),
    T = n(994500),
    y = n(109989),
    S = n(143239),
    v = n(684448),
    C = n(835072),
    b = n(194187);
n(851883);
var N = n(652215),
    R = n(123511);
function O(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        o = a - 1;
    return (0, r.jsxs)(l.EYj, {
        variant: t,
        className: s()(n, R.qi),
        color: i ? "status-positive" : "none",
        children: ["+", o],
    });
}
function D(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.EYj, { variant: t, className: s()(R.Om, n), children: "•" });
}
function L(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: l,
        textClassName: L,
        iconClassName: w,
        textSize: x = "xs",
        animateEmoji: P = !0,
        hasQuest: M = !1,
        hideEmoji: k = !1,
        hideTooltip: U = !1,
    } = e;
    (0, _.A)(t?.id);
    let G = a?.discoverable !== !1 ? a : null,
        F = (0, f.AO)(G),
        V = (0, p.v)("ActivityStatus", l),
        B = i.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === N.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        j = (0, g.Uk)("ActivityStatus"),
        H = i.useMemo(() => (null != B && j ? (0, E.a)(B) : null), [B, j]),
        Y = (0, u.bG)([I.default], () => I.default.getId() === t?.id),
        W = (0, u.bG)([h.A], () =>
            V
                ? Y
                    ? h.A.getHangStatusActivity()
                    : null != n
                      ? n.find((e) => e.type === N.$pd.HANG_STATUS)
                      : null
                : null,
        ),
        K = i.useMemo(
            () =>
                (0, o.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== N.$pd.CUSTOM_STATUS && t !== N.$pd.HANG_STATUS && n !== F?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, F?.name],
        ),
        $ = n?.find((e) => e.name === F?.name),
        z = t?.bot === !0,
        q = (0, u.bG)([T.A], () => T.A.isBlockedOrIgnored(t?.id)),
        X = B?.state != null,
        Z = null != G,
        Q = !Z && null != l,
        J = K.length + (Z || Q ? 1 : 0),
        ee = J > 1,
        et = (B?.state != null || null != W) && "xs" === x;
    if (q) return null;
    let en = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || U;
            if (null != G)
                return (0, r.jsx)(S.A, {
                    stream: G,
                    game: $,
                    textVariant: `text-${x}/medium`,
                    textClassName: L,
                    iconClassName: w,
                    hideText: et,
                    hideIcon: z,
                    hideTooltip: t,
                });
            let n = K?.[0];
            return null != n
                ? (0, r.jsx)(C.A, {
                      activity: n,
                      textVariant: `text-${x}/medium`,
                      textClassName: L,
                      iconClassName: w,
                      hideText: et,
                      hideIcon: z,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, r.jsx)(b.A, {
                        channel: l,
                        textVariant: `text-${x}/medium`,
                        textClassName: L,
                        iconClassName: w,
                        hideText: et,
                        hideTooltip: t,
                    })
                  : null;
        },
        er = () => {
            let e = [],
                t = { textVariant: "text-sm/medium", hideTooltip: !0, hideIcon: !1, hideText: !1, canTruncate: !1 };
            return (
                null != G &&
                    e.push((0, r.jsx)(S.A, { stream: G, game: n?.find(d.A), ...t, showChannelName: !0 }, "stream")),
                K.forEach((n, i) => {
                    e.push((0, r.jsx)(C.A, { activity: n, ...t }, `activity-${i}`));
                }),
                Q && e.push((0, r.jsx)(b.A, { channel: l, ...t, showChannelName: !0 }, "voice")),
                e
            );
        },
        ei = () =>
            (0, r.jsx)(O, {
                textVariant: `text-${x}/medium`,
                className: L,
                hasCustomStatusText: X,
                totalActivityCount: J,
            }),
        ea = () =>
            0 === J
                ? null
                : ee && !z
                  ? U
                      ? (0, r.jsxs)("div", { className: s()(R.ht, et && R.e7), children: [en(), ei()] })
                      : (0, r.jsx)(c.m, {
                            delay: 150,
                            __unsupportedReactNodeAsText: er(),
                            children: (0, r.jsxs)("div", {
                                className: s()(R.ht, et && R.e7),
                                children: [en(!0), ei()],
                            }),
                        })
                  : en(),
        es = s()(R.kL, { [R.Dk]: "xs" === x, [R.WV]: "sm" === x }),
        eo = () =>
            null == B && null == W
                ? null
                : (0, r.jsx)(v.A, {
                      customStatusActivity: B,
                      textSize: x,
                      animateEmoji: P,
                      hideEmoji: k,
                      hideTooltip: U,
                      textClassName: L,
                      iconClassName: w,
                      tooltipClassName: es,
                      voiceChannel: l,
                      hangStatus: W,
                      userId: t?.id,
                  }),
        el = () =>
            null == H
                ? null
                : (0, r.jsx)(A.A, {
                      customStatusActivity: B,
                      textSize: x,
                      animateEmoji: P,
                      hideEmoji: k,
                      hideTooltip: U,
                      textClassName: L,
                      iconClassName: w,
                      tooltipClassName: es,
                      voiceChannel: l,
                      hangStatus: W,
                      userId: t?.id,
                  });
    return null != H
        ? (0, r.jsxs)("div", {
              className: es,
              children: [
                  el(),
                  J > 0 && (0, r.jsx)(D, { textVariant: `text-${x}/normal`, className: L }),
                  ea(),
                  M && (0, r.jsx)(y.A, {}),
              ],
          })
        : (0, r.jsxs)("div", {
              className: es,
              children: [
                  ea(),
                  (null != B || null != W) && J > 0 && (0, r.jsx)(D, { textVariant: `text-${x}/normal`, className: L }),
                  eo(),
                  M && (0, r.jsx)(y.A, {}),
              ],
          });
}
