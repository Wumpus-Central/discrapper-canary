"use strict";
n.d(t, { A: () => V }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n(834730),
    u = n(17928),
    c = n(990078),
    d = n(672979),
    _ = n(87664),
    f = n(834757),
    h = n(430363),
    p = n(51183),
    E = n(287809),
    m = n(823854);
n(851883);
var g = n(124704);
function A(e) {
    let t,
        {
            customStatusActivity: n,
            iconClassName: s,
            textClassName: o,
            userId: d,
            textSize: _ = "xs",
            animateEmoji: f = !0,
            hideEmoji: A = !1,
            hideTooltip: I = !1,
        } = e,
        T = n?.emoji,
        S = (function (e) {
            let { customStatusActivity: t, statusOwnerId: n, location: i } = e,
                s = r.useMemo(() => null, [t]),
                a = null == s || null == n ? null : n === s.senderId ? s.targetId : s.senderId,
                o = (0, u.bG)([E.default], () => (null != a ? E.default.getUser(a) : null), [a]),
                l = (0, u.bG)([m.A], () => (null == n ? null : m.A.getProgressForUserId(n)), [n]);
            return (0, h.Uk)(i)
                ? { presence: s, progress: l, statusTextOverride: (o?.globalName ?? o?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: d, location: "CustomStatusVoiceDare" }),
        N = S.statusTextOverride ?? n?.state,
        y = null != N && "" !== N,
        C = null;
    null == T || A || (C = (0, i.jsx)(p.A, { emoji: T, animate: f, className: s, hideTooltip: I || y }));
    let v = y ? (null != C ? ` ${N}` : N) : null;
    return null == n
        ? null
        : (0, i.jsx)(l.E, {
              variant: `text-${_}/medium`,
              color: "none",
              className: a()(g.ps, o),
              children:
                  ((t = null != T && !A && !y),
                  I || t
                      ? (0, i.jsxs)(i.Fragment, { children: [C, v] })
                      : null != S.presence
                        ? (0, i.jsx)(c.m, { delay: 150, children: (0, i.jsxs)("span", { children: [C, v] }) })
                        : (0, i.jsxs)("span", { children: [C, v] })),
          });
}
var I = n(994500),
    T = n(577473),
    S = n(661531);
function N(e) {
    let { className: t } = e;
    return (0, i.jsx)(T.r, {
        className: a()(g.tt, t),
        size: "custom",
        height: 14,
        width: 14,
        color: S.A.unsafe_rawColors.BRAND_345.css,
    });
}
var y = n(748562),
    C = n(47167),
    v = n(734057),
    O = n(864436),
    R = n(200041),
    b = n(375708);
function D(e) {
    let {
            stream: t,
            game: n,
            textVariant: r,
            textClassName: s,
            iconClassName: a,
            hideIcon: o = !1,
            hideText: l = !1,
            hideTooltip: c = !1,
            canTruncate: d = !0,
            showChannelName: _ = !1,
        } = e,
        f = (0, u.bG)([v.A], () => v.A.getChannel(t.channelId)),
        h = (0, C.Ay)(f),
        p = n?.name === "" ? null : n?.name,
        E = null != p ? p : b.intl.string(b.t.eXan7B),
        m = null != h ? `${E} (${h})` : E,
        g = _ ? m : E;
    return (0, i.jsx)(R.A, {
        icon: o ? void 0 : (0, i.jsx)(O.A, { icon: y.U, className: a }),
        text: g,
        tooltipText: c ? void 0 : m,
        textVariant: r,
        className: s,
        canTruncate: d,
        hideTooltip: c,
        "aria-label": m,
        hideText: l,
    });
}
var L = n(780645);
function w(e) {
    let t,
        n,
        {
            customStatusActivity: r,
            textClassName: s,
            iconClassName: o,
            tooltipClassName: u,
            textSize: c = "xs",
            animateEmoji: d = !0,
            hideEmoji: _ = !1,
            hideTooltip: f = !1,
        } = e;
    if (null == r) return null;
    let h = r?.emoji,
        E = r?.state,
        m = null != E && "" !== E,
        A = null;
    null == h || _ || (A = (0, i.jsx)(p.A, { emoji: h, animate: d, className: o, hideTooltip: f || m }));
    let I = m && (null != A ? ` ${E}` : E);
    return (0, i.jsx)(l.E, {
        variant: `text-${c}/medium`,
        color: "none",
        className: a()(g.ps, s),
        children:
            ((t = null != h && !_ && !m),
            (n = null != E && E.length > 30),
            f || t
                ? (0, i.jsxs)(i.Fragment, { children: [A, I] })
                : (0, i.jsxs)(L.A, {
                      delay: 150,
                      tooltipClassName: u,
                      className: a()({ [g.D7]: !n }),
                      children: [A, I],
                  })),
    });
}
var M = n(835072),
    P = n(133171),
    x = n(652215),
    U = n(10862);
function k(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: r,
            iconClassName: s,
            hideText: o = !1,
            hideTooltip: l = !1,
            canTruncate: u = !0,
            showChannelName: c = !1,
        } = e,
        d = (0, P.S3)(x.clD.ONLINE),
        _ = (0, C.Ay)(t),
        f =
            t.isDM() || t.isGroupDM()
                ? b.intl.string(b.t["9FaEzi"])
                : t.isGuildStageVoice()
                  ? b.intl.string(b.t.QygGCN)
                  : b.intl.string(b.t.msxteM),
        h = null != _ ? `${f} (${_})` : f,
        p = c ? h : f;
    return (0, i.jsx)(R.A, {
        icon: (0, i.jsx)(U.A, { size: "custom", color: d, channel: t, className: a()(g.Kk, s) }),
        text: p,
        tooltipText: l ? void 0 : h,
        textVariant: n,
        textClassName: r,
        hideTooltip: l,
        canTruncate: u,
        "aria-label": h,
        hideText: o,
    });
}
function G(e) {
    let { textVariant: t, className: n, hasCustomStatusText: r, totalActivityCount: s } = e;
    return (0, i.jsxs)(l.E, {
        variant: t,
        className: a()(n, g.qi),
        color: r ? "status-positive" : "none",
        children: ["+", s - 1],
    });
}
function F(e) {
    let { textVariant: t, className: n } = e;
    return (0, i.jsx)(l.E, { variant: t, className: a()(g.Om, n), "aria-hidden": !0, children: "\u2022" });
}
function V(e) {
    let {
        user: t,
        activities: n,
        applicationStream: s,
        voiceChannel: l,
        textClassName: p,
        iconClassName: E,
        textSize: m = "xs",
        animateEmoji: T = !0,
        hasQuest: S = !1,
        hideEmoji: y = !1,
        hideTooltip: C = !1,
    } = e;
    (0, _.A)(t?.id);
    let v = s?.discoverable !== !1 ? s : null,
        O = (0, f.AO)(v),
        R = r.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === x.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        b = (0, h.Uk)("ActivityStatus"),
        L = r.useMemo(() => (null != R, null), [R, b]),
        P = r.useMemo(
            () =>
                (0, o.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== x.$pd.CUSTOM_STATUS && t !== x.$pd.HANG_STATUS && n !== O?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, O?.name],
        ),
        U = n?.find((e) => e.name === O?.name),
        V = t?.bot === !0,
        B = (0, u.bG)([I.A], () => I.A.isBlockedOrIgnored(t?.id)),
        H = R?.state != null,
        j = null != v,
        Y = !j && null != l,
        W = P.length + (j || Y ? 1 : 0),
        K = W > 1,
        z = R?.state != null && "xs" === m;
    if (B) return null;
    let $ = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || C;
            if (null != v)
                return (0, i.jsx)(D, {
                    stream: v,
                    game: U,
                    textVariant: `text-${m}/medium`,
                    textClassName: p,
                    iconClassName: E,
                    hideText: z,
                    hideIcon: V,
                    hideTooltip: t,
                });
            let n = P?.[0];
            return null != n
                ? (0, i.jsx)(M.A, {
                      activity: n,
                      textVariant: `text-${m}/medium`,
                      textClassName: p,
                      iconClassName: E,
                      hideText: z,
                      hideIcon: V,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, i.jsx)(k, {
                        channel: l,
                        textVariant: `text-${m}/medium`,
                        textClassName: p,
                        iconClassName: E,
                        hideText: z,
                        hideTooltip: t,
                    })
                  : null;
        },
        q = () =>
            (0, i.jsx)(G, {
                textVariant: `text-${m}/medium`,
                className: p,
                hasCustomStatusText: H,
                totalActivityCount: W,
            }),
        Z = () => {
            if (0 === W) return null;
            if (K && !V) {
                let e, t;
                return C
                    ? (0, i.jsxs)("div", { className: a()(g.ht, z && g.e7), children: [$(), q()] })
                    : (0, i.jsx)(c.m, {
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
                              null != v &&
                                  e.push(
                                      (0, i.jsx)(
                                          D,
                                          { stream: v, game: n?.find(d.A), ...t, showChannelName: !0 },
                                          "stream",
                                      ),
                                  ),
                              P.forEach((n, r) => {
                                  e.push((0, i.jsx)(M.A, { activity: n, ...t }, `activity-${r}`));
                              }),
                              Y && e.push((0, i.jsx)(k, { channel: l, ...t, showChannelName: !0 }, "voice")),
                              e),
                          children: (0, i.jsxs)("div", { className: a()(g.ht, z && g.e7), children: [$(!0), q()] }),
                      });
            }
            return $();
        },
        X = a()(g.kL, { [g.Dk]: "xs" === m, [g.WV]: "sm" === m });
    return null != L
        ? (0, i.jsxs)("div", {
              className: X,
              children: [
                  null == L
                      ? null
                      : (0, i.jsx)(A, {
                            customStatusActivity: R,
                            textSize: m,
                            animateEmoji: T,
                            hideEmoji: y,
                            hideTooltip: C,
                            textClassName: p,
                            iconClassName: E,
                            tooltipClassName: X,
                            userId: t?.id,
                        }),
                  W > 0 && (0, i.jsx)(F, { textVariant: `text-${m}/normal`, className: p }),
                  Z(),
                  S && (0, i.jsx)(N, {}),
              ],
          })
        : (0, i.jsxs)("div", {
              className: X,
              children: [
                  Z(),
                  null != R && W > 0 && (0, i.jsx)(F, { textVariant: `text-${m}/normal`, className: p }),
                  null == R
                      ? null
                      : (0, i.jsx)(w, {
                            customStatusActivity: R,
                            textSize: m,
                            animateEmoji: T,
                            hideEmoji: y,
                            hideTooltip: C,
                            textClassName: p,
                            iconClassName: E,
                            tooltipClassName: X,
                        }),
                  S && (0, i.jsx)(N, {}),
              ],
          });
}
