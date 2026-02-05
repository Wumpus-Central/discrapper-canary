"use strict";
n.d(t, { A: () => U }), n(321073);
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
    f = n(47167),
    p = n(834757),
    h = n(242919),
    m = n(890330),
    g = n(430363),
    E = n(4149),
    A = n(43284),
    I = n(961350),
    T = n(994500),
    y = n(412242),
    S = n(566903),
    v = n(109989),
    C = n(143239),
    b = n(684448),
    N = n(835072),
    R = n(194187);
n(851883);
var O = n(652215),
    D = n(985018),
    L = n(123511);
function w(e) {
    let t = e?.name === "" ? null : e?.name;
    return null != t ? t : D.intl.string(D.t.eXan7B);
}
function x(e, t) {
    return (
        (e.isDM() || e.isGroupDM()
            ? D.intl.string(D.t["9FaEzi"])
            : e.isGuildStageVoice()
              ? D.intl.string(D.t.QygGCN)
              : D.intl.string(D.t.msxteM)) + (null != t ? ` (${t})` : "")
    );
}
function P(e) {
    let { streamActivity: t, otherActivities: n, voiceActivityChannel: r } = e,
        i = [],
        { descriptiveTextEnabled: a } = (0, y.n)({ location: "StackedActivityStatus" }),
        s = (0, f.Ay)(r),
        o = a;
    return (
        null != t && i.push(w(t)),
        n.forEach((e) => {
            let { tooltip: t } = (0, S.A)(e, o);
            null != t && i.push(t);
        }),
        null == t && null != r && i.push(x(r, s)),
        i.length > 0 ? i.join(", ") : ""
    );
}
function M(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        o = a - 1;
    return (0, r.jsxs)(l.EYj, {
        variant: t,
        className: s()(n, L.qi),
        color: i ? "status-positive" : "none",
        children: ["+", o],
    });
}
function k(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.EYj, { variant: t, className: s()(L.Om, n), children: "•" });
}
function U(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: l,
        textClassName: f,
        iconClassName: y,
        textSize: S = "xs",
        animateEmoji: D = !0,
        hasQuest: w = !1,
        hideEmoji: x = !1,
        hideTooltip: U = !1,
    } = e;
    (0, _.A)(t?.id);
    let G = a?.discoverable !== !1 ? a : null,
        V = (0, p.AO)(G),
        F = (0, m.v)("ActivityStatus", l),
        B = i.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === O.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        j = (0, g.Uk)("ActivityStatus"),
        H = i.useMemo(() => (null != B && j ? (0, E.a)(B) : null), [B, j]),
        Y = (0, u.bG)([I.default], () => I.default.getId() === t?.id),
        W = (0, u.bG)([h.A], () =>
            F
                ? Y
                    ? h.A.getHangStatusActivity()
                    : null != n
                      ? n.find((e) => e.type === O.$pd.HANG_STATUS)
                      : null
                : null,
        ),
        K = i.useMemo(
            () =>
                (0, o.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== O.$pd.CUSTOM_STATUS && t !== O.$pd.HANG_STATUS && n !== V?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, V?.name],
        ),
        z = n?.find((e) => e.name === V?.name),
        $ = t?.bot === !0,
        q = (0, u.bG)([T.A], () => T.A.isBlockedOrIgnored(t?.id)),
        Z = B?.state != null,
        Q = null != G,
        X = !Q && null != l,
        J = K.length + (Q || X ? 1 : 0),
        ee = J > 1,
        et = (B?.state != null || null != W) && "xs" === S,
        en = P({ streamActivity: z, otherActivities: K, voiceActivityChannel: X ? l : null });
    if (q) return null;
    let er = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || U;
            if (null != G)
                return (0, r.jsx)(C.A, {
                    stream: G,
                    game: z,
                    textVariant: `text-${S}/medium`,
                    textClassName: f,
                    iconClassName: y,
                    hideText: et,
                    hideIcon: $,
                    hideTooltip: t,
                });
            let n = K?.[0];
            return null != n
                ? (0, r.jsx)(N.A, {
                      activity: n,
                      textVariant: `text-${S}/medium`,
                      textClassName: f,
                      iconClassName: y,
                      hideText: et,
                      hideIcon: $,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, r.jsx)(R.A, {
                        channel: l,
                        textVariant: `text-${S}/medium`,
                        textClassName: f,
                        iconClassName: y,
                        hideText: et,
                        hideTooltip: t,
                    })
                  : null;
        },
        ei = () => {
            let e = [],
                t = { textVariant: "text-sm/medium", hideTooltip: !0, hideIcon: !1, hideText: !1, canTruncate: !1 };
            return (
                null != G &&
                    e.push((0, r.jsx)(C.A, { stream: G, game: n?.find(d.A), ...t, showChannelName: !0 }, "stream")),
                K.forEach((n, i) => {
                    e.push((0, r.jsx)(N.A, { activity: n, ...t }, `activity-${i}`));
                }),
                X && e.push((0, r.jsx)(R.A, { channel: l, ...t, showChannelName: !0 }, "voice")),
                e
            );
        },
        ea = () =>
            (0, r.jsx)(M, {
                textVariant: `text-${S}/medium`,
                className: f,
                hasCustomStatusText: Z,
                totalActivityCount: J,
            }),
        es = () =>
            0 === J
                ? null
                : ee && !$
                  ? U
                      ? (0, r.jsxs)("div", { className: s()(L.ht, et && L.e7), children: [er(), ea()] })
                      : (0, r.jsx)(c.m, {
                            delay: 150,
                            __unsupportedReactNodeAsText: ei(),
                            children: (0, r.jsxs)("div", {
                                className: s()(L.ht, et && L.e7),
                                "aria-label": en,
                                children: [er(!0), ea()],
                            }),
                        })
                  : er(),
        eo = s()(L.kL, { [L.Dk]: "xs" === S, [L.WV]: "sm" === S }),
        el = () =>
            null == B && null == W
                ? null
                : (0, r.jsx)(b.A, {
                      customStatusActivity: B,
                      textSize: S,
                      animateEmoji: D,
                      hideEmoji: x,
                      hideTooltip: U,
                      textClassName: f,
                      iconClassName: y,
                      tooltipClassName: eo,
                      voiceChannel: l,
                      hangStatus: W,
                      userId: t?.id,
                  }),
        eu = () =>
            null == H
                ? null
                : (0, r.jsx)(A.A, {
                      customStatusActivity: B,
                      textSize: S,
                      animateEmoji: D,
                      hideEmoji: x,
                      hideTooltip: U,
                      textClassName: f,
                      iconClassName: y,
                      tooltipClassName: eo,
                      voiceChannel: l,
                      hangStatus: W,
                      userId: t?.id,
                  });
    return null != H
        ? (0, r.jsxs)("div", {
              className: eo,
              children: [
                  eu(),
                  J > 0 && (0, r.jsx)(k, { textVariant: `text-${S}/normal`, className: f }),
                  es(),
                  w && (0, r.jsx)(v.A, {}),
              ],
          })
        : (0, r.jsxs)("div", {
              className: eo,
              children: [
                  es(),
                  (null != B || null != W) && J > 0 && (0, r.jsx)(k, { textVariant: `text-${S}/normal`, className: f }),
                  el(),
                  w && (0, r.jsx)(v.A, {}),
              ],
          });
}
