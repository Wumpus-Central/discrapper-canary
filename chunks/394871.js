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
    h = n(834757),
    f = n(430363),
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
            animateEmoji: h = !0,
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
            return (0, f.Uk)(i)
                ? { presence: s, progress: l, statusTextOverride: (o?.globalName ?? o?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: d, location: "CustomStatusVoiceDare" }),
        y = S.statusTextOverride ?? n?.state,
        N = null != y && "" !== y,
        v = null;
    null == T || A || (v = (0, i.jsx)(p.A, { emoji: T, animate: h, className: s, hideTooltip: I || N }));
    let C = N ? (null != v ? ` ${y}` : y) : null;
    return null == n
        ? null
        : (0, i.jsx)(l.E, {
              variant: `text-${_}/medium`,
              color: "none",
              className: a()(g.ps, o),
              children:
                  ((t = null != T && !A && !N),
                  I || t
                      ? (0, i.jsxs)(i.Fragment, { children: [v, C] })
                      : null != S.presence
                        ? (0, i.jsx)(c.m, { delay: 150, children: (0, i.jsxs)("span", { children: [v, C] }) })
                        : (0, i.jsxs)("span", { children: [v, C] })),
          });
}
var I = n(994500),
    T = n(577473),
    S = n(661531);
function y(e) {
    let { className: t } = e;
    return (0, i.jsx)(T.r, {
        className: a()(g.tt, t),
        size: "custom",
        height: 14,
        width: 14,
        color: S.A.unsafe_rawColors.BRAND_345.css,
    });
}
var N = n(748562),
    v = n(47167),
    C = n(734057),
    R = n(864436),
    O = n(200041),
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
        h = (0, u.bG)([C.A], () => C.A.getChannel(t.channelId)),
        f = (0, v.Ay)(h),
        p = n?.name === "" ? null : n?.name,
        E = null != p ? p : b.intl.string(b.t.eXan7B),
        m = null != f ? `${E} (${f})` : E,
        g = _ ? m : E;
    return (0, i.jsx)(O.A, {
        icon: o ? void 0 : (0, i.jsx)(R.A, { icon: N.U, className: a }),
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
            hideTooltip: h = !1,
        } = e;
    if (null == r) return null;
    let f = r?.emoji,
        E = r?.state,
        m = null != E && "" !== E,
        A = null;
    null == f || _ || (A = (0, i.jsx)(p.A, { emoji: f, animate: d, className: o, hideTooltip: h || m }));
    let I = m && (null != A ? ` ${E}` : E);
    return (0, i.jsx)(l.E, {
        variant: `text-${c}/medium`,
        color: "none",
        className: a()(g.ps, s),
        children:
            ((t = null != f && !_ && !m),
            (n = null != E && E.length > 30),
            h || t
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
    k = n(10862);
function U(e) {
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
        _ = (0, v.Ay)(t),
        h =
            t.isDM() || t.isGroupDM()
                ? b.intl.string(b.t["9FaEzi"])
                : t.isGuildStageVoice()
                  ? b.intl.string(b.t.QygGCN)
                  : b.intl.string(b.t.msxteM),
        f = null != _ ? `${h} (${_})` : h,
        p = c ? f : h;
    return (0, i.jsx)(O.A, {
        icon: (0, i.jsx)(k.A, { size: "custom", color: d, channel: t, className: a()(g.Kk, s) }),
        text: p,
        tooltipText: l ? void 0 : f,
        textVariant: n,
        textClassName: r,
        hideTooltip: l,
        canTruncate: u,
        "aria-label": f,
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
        hideEmoji: N = !1,
        hideTooltip: v = !1,
    } = e;
    (0, _.A)(t?.id);
    let C = s?.discoverable !== !1 ? s : null,
        R = (0, h.AO)(C),
        O = r.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === x.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        b = (0, f.Uk)("ActivityStatus"),
        L = r.useMemo(() => (null != O, null), [O, b]),
        P = r.useMemo(
            () =>
                (0, o.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== x.$pd.CUSTOM_STATUS && t !== x.$pd.HANG_STATUS && n !== R?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, R?.name],
        ),
        k = n?.find((e) => e.name === R?.name),
        V = t?.bot === !0,
        B = (0, u.bG)([I.A], () => I.A.isBlockedOrIgnored(t?.id)),
        H = O?.state != null,
        j = null != C,
        Y = !j && null != l,
        W = P.length + (j || Y ? 1 : 0),
        K = W > 1,
        $ = O?.state != null && "xs" === m;
    if (B) return null;
    let z = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || v;
            if (null != C)
                return (0, i.jsx)(D, {
                    stream: C,
                    game: k,
                    textVariant: `text-${m}/medium`,
                    textClassName: p,
                    iconClassName: E,
                    hideText: $,
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
                      hideText: $,
                      hideIcon: V,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, i.jsx)(U, {
                        channel: l,
                        textVariant: `text-${m}/medium`,
                        textClassName: p,
                        iconClassName: E,
                        hideText: $,
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
        X = () => {
            if (0 === W) return null;
            if (K && !V) {
                let e, t;
                return v
                    ? (0, i.jsxs)("div", { className: a()(g.ht, $ && g.e7), children: [z(), q()] })
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
                              null != C &&
                                  e.push(
                                      (0, i.jsx)(
                                          D,
                                          { stream: C, game: n?.find(d.A), ...t, showChannelName: !0 },
                                          "stream",
                                      ),
                                  ),
                              P.forEach((n, r) => {
                                  e.push((0, i.jsx)(M.A, { activity: n, ...t }, `activity-${r}`));
                              }),
                              Y && e.push((0, i.jsx)(U, { channel: l, ...t, showChannelName: !0 }, "voice")),
                              e),
                          children: (0, i.jsxs)("div", { className: a()(g.ht, $ && g.e7), children: [z(!0), q()] }),
                      });
            }
            return z();
        },
        Z = a()(g.kL, { [g.Dk]: "xs" === m, [g.WV]: "sm" === m });
    return null != L
        ? (0, i.jsxs)("div", {
              className: Z,
              children: [
                  null == L
                      ? null
                      : (0, i.jsx)(A, {
                            customStatusActivity: O,
                            textSize: m,
                            animateEmoji: T,
                            hideEmoji: N,
                            hideTooltip: v,
                            textClassName: p,
                            iconClassName: E,
                            tooltipClassName: Z,
                            userId: t?.id,
                        }),
                  W > 0 && (0, i.jsx)(F, { textVariant: `text-${m}/normal`, className: p }),
                  X(),
                  S && (0, i.jsx)(y, {}),
              ],
          })
        : (0, i.jsxs)("div", {
              className: Z,
              children: [
                  X(),
                  null != O && W > 0 && (0, i.jsx)(F, { textVariant: `text-${m}/normal`, className: p }),
                  null == O
                      ? null
                      : (0, i.jsx)(w, {
                            customStatusActivity: O,
                            textSize: m,
                            animateEmoji: T,
                            hideEmoji: N,
                            hideTooltip: v,
                            textClassName: p,
                            iconClassName: E,
                            tooltipClassName: Z,
                        }),
                  S && (0, i.jsx)(y, {}),
              ],
          });
}
