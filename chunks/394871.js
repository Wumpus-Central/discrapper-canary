"use strict";
n.d(t, { A: () => B }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n(834730),
    d = n(17928),
    c = n(866665),
    u = n(672979),
    _ = n(87664),
    E = n(834757),
    A = n(430363),
    h = n(51183),
    I = n(287809),
    f = n(823854);
n(851883);
var p = n(124704);
function T(e) {
    let t,
        {
            customStatusActivity: n,
            iconClassName: a,
            textClassName: l,
            userId: u,
            textSize: _ = "xs",
            animateEmoji: E = !0,
            hideEmoji: T = !1,
            hideTooltip: m = !1,
        } = e,
        g = n?.emoji,
        S = (function (e) {
            let { customStatusActivity: t, statusOwnerId: n, location: i } = e,
                a = r.useMemo(() => null, [t]),
                s = null == a || null == n ? null : n === a.senderId ? a.targetId : a.senderId,
                l = (0, d.bG)([I.default], () => (null != s ? I.default.getUser(s) : null), [s]),
                o = (0, d.bG)([f.A], () => (null == n ? null : f.A.getProgressForUserId(n)), [n]);
            return (0, A.Uk)(i)
                ? { presence: a, progress: o, statusTextOverride: (l?.globalName ?? l?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: u, location: "CustomStatusVoiceDare" }),
        N = S.statusTextOverride ?? n?.state,
        C = null != N && "" !== N,
        R = null;
    null == g || T || (R = (0, i.jsx)(h.A, { emoji: g, animate: E, className: a, hideTooltip: m || C }));
    let O = C ? (null != R ? ` ${N}` : N) : null;
    return null == n
        ? null
        : (0, i.jsx)(o.E, {
              variant: `text-${_}/medium`,
              color: "none",
              className: s()(p.ps, l),
              children:
                  ((t = null != g && !T && !C),
                  m || t
                      ? (0, i.jsxs)(i.Fragment, { children: [R, O] })
                      : null != S.presence
                        ? (0, i.jsx)(c.m, { delay: 150, children: (0, i.jsxs)("span", { children: [R, O] }) })
                        : (0, i.jsxs)("span", { children: [R, O] })),
          });
}
var m = n(994500),
    g = n(577473),
    S = n(661531);
function N(e) {
    let { className: t } = e;
    return (0, i.jsx)(g.r, {
        className: s()(p.tt, t),
        size: "custom",
        height: 14,
        width: 14,
        color: S.A.unsafe_rawColors.BRAND_345.css,
    });
}
var C = n(748562),
    R = n(47167),
    O = n(734057),
    L = n(864436),
    y = n(200041),
    D = n(375708);
function v(e) {
    let {
            stream: t,
            game: n,
            textVariant: r,
            textClassName: a,
            iconClassName: s,
            hideIcon: l = !1,
            hideText: o = !1,
            hideTooltip: c = !1,
            canTruncate: u = !0,
            showChannelName: _ = !1,
        } = e,
        E = (0, d.bG)([O.A], () => O.A.getChannel(t.channelId)),
        A = (0, R.Ay)(E),
        h = n?.name === "" ? null : n?.name,
        I = null != h ? h : D.intl.string(D.t.eXan7B),
        f = null != A ? `${I} (${A})` : I,
        p = _ ? f : I;
    return (0, i.jsx)(y.A, {
        icon: l ? void 0 : (0, i.jsx)(L.A, { icon: C.U, className: s }),
        text: p,
        tooltipText: c ? void 0 : f,
        textVariant: r,
        className: a,
        canTruncate: u,
        hideTooltip: c,
        "aria-label": f,
        hideText: o,
    });
}
var b = n(3026),
    M = n(208971);
function P(e) {
    let t,
        n,
        {
            customStatusActivity: r,
            textClassName: a,
            iconClassName: l,
            tooltipClassName: d,
            textSize: c = "xs",
            animateEmoji: u = !0,
            hideEmoji: _ = !1,
            hideTooltip: E = !1,
        } = e,
        A = (0, M.G)(r?.state);
    if (null == r) return null;
    let I = r?.emoji,
        f = null != A && "" !== A,
        T = null;
    null == I || _ || (T = (0, i.jsx)(h.A, { emoji: I, animate: u, className: l, hideTooltip: E || f }));
    let m = f && (null != T ? ` ${A}` : A);
    return (0, i.jsx)(o.E, {
        variant: `text-${c}/medium`,
        color: "none",
        className: s()(p.ps, a),
        children:
            ((t = null != I && !_ && !f),
            (n = null != A && A.length > 30),
            E || t
                ? (0, i.jsxs)(i.Fragment, { children: [T, m] })
                : (0, i.jsxs)(b.A, {
                      delay: 150,
                      tooltipClassName: d,
                      className: s()({ [p.D7]: !n }),
                      children: [T, m],
                  })),
    });
}
var U = n(835072),
    w = n(133171),
    G = n(652215),
    x = n(10862);
function k(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: r,
            iconClassName: a,
            hideText: l = !1,
            hideTooltip: o = !1,
            canTruncate: d = !0,
            showChannelName: c = !1,
        } = e,
        u = (0, w.S3)(G.clD.ONLINE),
        _ = (0, R.Ay)(t),
        E =
            t.isDM() || t.isGroupDM()
                ? D.intl.string(D.t["9FaEzi"])
                : t.isGuildStageVoice()
                  ? D.intl.string(D.t.QygGCN)
                  : D.intl.string(D.t.msxteM),
        A = null != _ ? `${E} (${_})` : E,
        h = c ? A : E;
    return (0, i.jsx)(y.A, {
        icon: (0, i.jsx)(x.A, { size: "custom", color: u, channel: t, className: s()(p.Kk, a) }),
        text: h,
        tooltipText: o ? void 0 : A,
        textVariant: n,
        textClassName: r,
        hideTooltip: o,
        canTruncate: d,
        "aria-label": A,
        hideText: l,
    });
}
function F(e) {
    let { textVariant: t, className: n, hasCustomStatusText: r, totalActivityCount: a } = e;
    return (0, i.jsxs)(o.E, {
        variant: t,
        className: s()(n, p.qi),
        color: r ? "status-positive" : "none",
        children: ["+", a - 1],
    });
}
function V(e) {
    let { textVariant: t, className: n } = e;
    return (0, i.jsx)(o.E, { variant: t, className: s()(p.Om, n), "aria-hidden": !0, children: "\u2022" });
}
function B(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: o,
        textClassName: h,
        iconClassName: I,
        textSize: f = "xs",
        animateEmoji: g = !0,
        hasQuest: S = !1,
        hideEmoji: C = !1,
        hideTooltip: R = !1,
    } = e;
    (0, _.A)(t?.id);
    let O = a?.discoverable !== !1 ? a : null,
        L = (0, E.AO)(O),
        y = r.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === G.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        D = (0, A.Uk)("ActivityStatus"),
        b = r.useMemo(() => (null != y, null), [y, D]),
        M = r.useMemo(
            () =>
                (0, l.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== G.$pd.CUSTOM_STATUS && t !== G.$pd.HANG_STATUS && n !== L?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, L?.name],
        ),
        w = n?.find((e) => e.name === L?.name),
        x = t?.bot === !0,
        B = (0, d.bG)([m.A], () => m.A.isBlockedOrIgnored(t?.id)),
        H = y?.state != null,
        j = null != O,
        W = !j && null != o,
        Y = M.length + (j || W ? 1 : 0),
        K = Y > 1,
        $ = y?.state != null && "xs" === f;
    if (B) return null;
    function z() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = !0 === e || R;
        if (null != O)
            return (0, i.jsx)(v, {
                stream: O,
                game: w,
                textVariant: `text-${f}/medium`,
                textClassName: h,
                iconClassName: I,
                hideText: $,
                hideIcon: x,
                hideTooltip: t,
            });
        let n = M?.[0];
        return null != n
            ? (0, i.jsx)(U.A, {
                  activity: n,
                  textVariant: `text-${f}/medium`,
                  textClassName: h,
                  iconClassName: I,
                  hideText: $,
                  hideIcon: x,
                  hideTooltip: t,
              })
            : null != o
              ? (0, i.jsx)(k, {
                    channel: o,
                    textVariant: `text-${f}/medium`,
                    textClassName: h,
                    iconClassName: I,
                    hideText: $,
                    hideTooltip: t,
                })
              : null;
    }
    function q() {
        return (0, i.jsx)(F, {
            textVariant: `text-${f}/medium`,
            className: h,
            hasCustomStatusText: H,
            totalActivityCount: Y,
        });
    }
    function Z() {
        if (0 === Y) return null;
        if (K && !x) {
            let e, t;
            return R
                ? (0, i.jsxs)("div", { className: s()(p.ht, $ && p.e7), children: [z(), q()] })
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
                          null != O &&
                              e.push(
                                  (0, i.jsx)(v, { stream: O, game: n?.find(u.A), ...t, showChannelName: !0 }, "stream"),
                              ),
                          M.forEach((n, r) => {
                              e.push((0, i.jsx)(U.A, { activity: n, ...t }, `activity-${r}`));
                          }),
                          W && e.push((0, i.jsx)(k, { channel: o, ...t, showChannelName: !0 }, "voice")),
                          e),
                      children: (0, i.jsxs)("div", { className: s()(p.ht, $ && p.e7), children: [z(!0), q()] }),
                  });
        }
        return z();
    }
    let X = s()(p.kL, { [p.Dk]: "xs" === f, [p.WV]: "sm" === f });
    return null != b
        ? (0, i.jsxs)("div", {
              className: X,
              children: [
                  null == b
                      ? null
                      : (0, i.jsx)(T, {
                            customStatusActivity: y,
                            textSize: f,
                            animateEmoji: g,
                            hideEmoji: C,
                            hideTooltip: R,
                            textClassName: h,
                            iconClassName: I,
                            tooltipClassName: X,
                            userId: t?.id,
                        }),
                  Y > 0 && (0, i.jsx)(V, { textVariant: `text-${f}/normal`, className: h }),
                  Z(),
                  S && (0, i.jsx)(N, {}),
              ],
          })
        : (0, i.jsxs)("div", {
              className: X,
              children: [
                  Z(),
                  null != y && Y > 0 && (0, i.jsx)(V, { textVariant: `text-${f}/normal`, className: h }),
                  null == y
                      ? null
                      : (0, i.jsx)(P, {
                            customStatusActivity: y,
                            textSize: f,
                            animateEmoji: g,
                            hideEmoji: C,
                            hideTooltip: R,
                            textClassName: h,
                            iconClassName: I,
                            tooltipClassName: X,
                        }),
                  S && (0, i.jsx)(N, {}),
              ],
          });
}
