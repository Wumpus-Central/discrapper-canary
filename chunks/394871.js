(n.d(l, { A: () => V }), n(321073));
var t = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(435558),
    u = n(17928),
    o = n(834730),
    c = n(866665),
    d = n(672979),
    m = n(87664),
    x = n(834757),
    h = n(430363),
    f = n(51183),
    p = n(287809),
    j = n(823854);
n(851883);
var A = n(607013);
function g(e) {
    let l,
        {
            customStatusActivity: n,
            iconClassName: i,
            textClassName: r,
            userId: d,
            textSize: m = "xs",
            animateEmoji: x = !0,
            hideEmoji: g = !1,
            hideTooltip: N = !1,
        } = e,
        v = n?.emoji,
        I = (function (e) {
            let { customStatusActivity: l, statusOwnerId: n, location: t } = e,
                i = s.useMemo(() => null, [l]),
                a = null == i || null == n ? null : n === i.senderId ? i.targetId : i.senderId,
                r = (0, u.bG)([p.default], () => (null != a ? p.default.getUser(a) : null), [a]),
                o = (0, u.bG)([j.A], () => (null == n ? null : j.A.getProgressForUserId(n)), [n]);
            return (0, h.Uk)(t)
                ? { presence: i, progress: o, statusTextOverride: (r?.globalName ?? r?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: d, location: "CustomStatusVoiceDare" }),
        S = I.statusTextOverride ?? n?.state,
        T = null != S && "" !== S,
        C = null;
    null == v || g || (C = (0, t.jsx)(f.A, { emoji: v, animate: x, className: i, hideTooltip: N || T }));
    let b = T ? (null != C ? ` ${S}` : S) : null;
    return null == n
        ? null
        : (0, t.jsx)(o.E, {
              variant: `text-${m}/medium`,
              color: "none",
              className: a()(A.ps, r),
              children:
                  ((l = null != v && !g && !T),
                  N || l
                      ? (0, t.jsxs)(t.Fragment, { children: [C, b] })
                      : null != I.presence
                        ? (0, t.jsx)(c.m, { delay: 150, children: (0, t.jsxs)("span", { children: [C, b] }) })
                        : (0, t.jsxs)("span", { children: [C, b] })),
          });
}
var N = n(994500),
    v = n(577473),
    I = n(661531);
function S(e) {
    let { className: l } = e;
    return (0, t.jsx)(v.r, {
        className: a()(A.tt, l),
        size: "custom",
        height: 14,
        width: 14,
        color: I.A.unsafe_rawColors.BRAND_345.css,
    });
}
var T = n(748562),
    C = n(47167),
    b = n(734057),
    y = n(864436),
    E = n(200041),
    M = n(105292);
function R(e) {
    let {
            stream: l,
            game: n,
            textVariant: s,
            textClassName: i,
            iconClassName: a,
            hideIcon: r = !1,
            hideText: o = !1,
            hideTooltip: c = !1,
            canTruncate: d = !0,
            showChannelName: m = !1,
        } = e,
        x = (0, u.bG)([b.A], () => b.A.getChannel(l.channelId)),
        h = (0, C.Ay)(x),
        f = n?.name === "" ? null : n?.name,
        p = null != f ? f : M.intl.string(M.t.eXan7B),
        j = null != h ? `${p} (${h})` : p,
        A = m ? j : p;
    return (0, t.jsx)(E.A, {
        icon: r ? void 0 : (0, t.jsx)(y.A, { icon: T.U, className: a }),
        text: A,
        tooltipText: c ? void 0 : o ? j : m ? void 0 : (h ?? void 0),
        textVariant: s,
        className: i,
        canTruncate: d,
        hideTooltip: c,
        "aria-label": j,
        hideText: o,
    });
}
var G = n(3026),
    _ = n(208971);
function U(e) {
    let l,
        {
            customStatusActivity: n,
            textClassName: s,
            iconClassName: i,
            tooltipClassName: r,
            textSize: u = "xs",
            animateEmoji: c = !0,
            hideEmoji: d = !1,
            hideTooltip: m = !1,
        } = e,
        x = (0, _.G)(n?.state);
    if (null == n) return null;
    let h = n?.emoji,
        p = null != x && "" !== x,
        j = null;
    null == h || d || (j = (0, t.jsx)(f.A, { emoji: h, animate: c, className: i, hideTooltip: m || p }));
    let g = p && (null != j ? ` ${x}` : x);
    return (0, t.jsx)(o.E, {
        variant: `text-${u}/medium`,
        color: "none",
        className: a()(A.ps, s),
        children:
            ((l = null != h && !d && !p),
            m || l
                ? (0, t.jsxs)(t.Fragment, { children: [j, g] })
                : (0, t.jsxs)(G.A, {
                      delay: 150,
                      tooltipClassName: r,
                      className: A.Nu,
                      children: [j, !1 !== g && (0, t.jsx)("span", { className: A.ps, children: g })],
                  })),
    });
}
var k = n(835072),
    w = n(935154),
    D = n(652215),
    P = n(10862);
function O(e) {
    let {
            channel: l,
            textVariant: n,
            textClassName: s,
            iconClassName: i,
            hideText: r = !1,
            hideTooltip: u = !1,
            canTruncate: o = !0,
            showChannelName: c = !1,
        } = e,
        d = (0, w.S3)(D.clD.ONLINE),
        m = (0, C.Ay)(l),
        x = l.isDM() || l.isGroupDM(),
        h = x
            ? M.intl.string(M.t["9FaEzi"])
            : l.isGuildStageVoice()
              ? M.intl.string(M.t.QygGCN)
              : M.intl.string(M.t.msxteM),
        f = null != m ? `${h} (${m})` : h,
        p = c ? f : h;
    return (0, t.jsx)(E.A, {
        icon: (0, t.jsx)(P.A, { size: "custom", color: d, channel: l, className: a()(A.Kk, i) }),
        text: p,
        tooltipText: u ? void 0 : r ? f : x || c ? void 0 : (m ?? void 0),
        textVariant: n,
        textClassName: s,
        hideTooltip: u,
        canTruncate: o,
        "aria-label": f,
        hideText: r,
    });
}
function F(e) {
    let { textVariant: l, className: n, hasCustomStatusText: s, totalActivityCount: i } = e;
    return (0, t.jsxs)(o.E, {
        variant: l,
        className: a()(n, A.qi),
        color: s ? "status-positive" : "none",
        children: ["+", i - 1],
    });
}
function L(e) {
    let { textVariant: l, className: n } = e;
    return (0, t.jsx)(o.E, { variant: l, className: a()(A.Om, n), "aria-hidden": !0, children: "\u2022" });
}
function V(e) {
    let {
        user: l,
        activities: n,
        applicationStream: i,
        voiceChannel: o,
        textClassName: f,
        iconClassName: p,
        textSize: j = "xs",
        animateEmoji: v = !0,
        hasQuest: I = !1,
        hideEmoji: T = !1,
        hideTooltip: C = !1,
    } = e;
    (0, m.A)(l?.id);
    let b = i?.discoverable !== !1 ? i : null,
        y = (0, x.AO)(b),
        E = s.useMemo(() => {
            let e = n?.find((e) => {
                let { type: l } = e;
                return l === D.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let l = e.state?.trim() ?? null;
            return null == ("" === l ? null : l) && null == e.emoji ? null : e;
        }, [n]),
        M = (0, h.Uk)("ActivityStatus"),
        G = s.useMemo(() => (null != E, null), [E, M]),
        _ = s.useMemo(
            () =>
                (0, r.uniqWith)(
                    n?.filter((e) => {
                        let { type: l, name: n } = e;
                        return l !== D.$pd.CUSTOM_STATUS && l !== D.$pd.HANG_STATUS && n !== y?.name;
                    }) ?? [],
                    (e, l) =>
                        (null != e.application_id &&
                            null != l.application_id &&
                            e.application_id === l.application_id) ||
                        (null != e.name && null != l.name && e.name === l.name),
                ),
            [n, y?.name],
        ),
        w = n?.find((e) => e.name === y?.name),
        P = l?.bot === !0,
        V = (0, u.bG)([N.A], () => N.A.isBlockedOrIgnored(l?.id)),
        $ = E?.state != null,
        z = null != b,
        B = !z && null != o,
        H = _.length + (z || B ? 1 : 0),
        Y = H > 1,
        W = E?.state != null && "xs" === j;
    if (V) return null;
    function Z() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = !0 === e || C;
        if (null != b)
            return (0, t.jsx)(R, {
                stream: b,
                game: w,
                textVariant: `text-${j}/medium`,
                textClassName: f,
                iconClassName: p,
                hideText: W,
                hideIcon: P,
                hideTooltip: l,
            });
        let n = _?.[0];
        return null != n
            ? (0, t.jsx)(k.A, {
                  activity: n,
                  textVariant: `text-${j}/medium`,
                  textClassName: f,
                  iconClassName: p,
                  hideText: W,
                  hideIcon: P,
                  hideTooltip: l,
              })
            : null != o
              ? (0, t.jsx)(O, {
                    channel: o,
                    textVariant: `text-${j}/medium`,
                    textClassName: f,
                    iconClassName: p,
                    hideText: W,
                    hideTooltip: l,
                })
              : null;
    }
    function q() {
        return (0, t.jsx)(F, {
            textVariant: `text-${j}/medium`,
            className: f,
            hasCustomStatusText: $,
            totalActivityCount: H,
        });
    }
    function X() {
        if (0 === H) return null;
        if (Y && !P) {
            let e, l;
            return C
                ? (0, t.jsxs)("div", { className: a()(A.ht, W && A.e7), children: [Z(), q()] })
                : (0, t.jsx)(c.m, {
                      delay: 150,
                      __unsupportedReactNodeAsText:
                          ((e = []),
                          (l = {
                              textVariant: "text-sm/medium",
                              hideTooltip: !0,
                              hideIcon: !1,
                              hideText: !1,
                              canTruncate: !1,
                          }),
                          null != b &&
                              e.push(
                                  (0, t.jsx)(R, { stream: b, game: n?.find(d.A), ...l, showChannelName: !0 }, "stream"),
                              ),
                          _.forEach((n, s) => {
                              e.push((0, t.jsx)(k.A, { activity: n, ...l }, `activity-${s}`));
                          }),
                          B && e.push((0, t.jsx)(O, { channel: o, ...l, showChannelName: !0 }, "voice")),
                          e),
                      children: (0, t.jsxs)("div", { className: a()(A.ht, W && A.e7), children: [Z(!0), q()] }),
                  });
        }
        return Z();
    }
    let J = a()(A.kL, { [A.Dk]: "xs" === j, [A.WV]: "sm" === j });
    return null != G
        ? (0, t.jsxs)("div", {
              className: J,
              children: [
                  null == G
                      ? null
                      : (0, t.jsx)(g, {
                            customStatusActivity: E,
                            textSize: j,
                            animateEmoji: v,
                            hideEmoji: T,
                            hideTooltip: C,
                            textClassName: f,
                            iconClassName: p,
                            tooltipClassName: J,
                            userId: l?.id,
                        }),
                  H > 0 && (0, t.jsx)(L, { textVariant: `text-${j}/normal`, className: f }),
                  X(),
                  I && (0, t.jsx)(S, {}),
              ],
          })
        : (0, t.jsxs)("div", {
              className: J,
              children: [
                  X(),
                  null != E && H > 0 && (0, t.jsx)(L, { textVariant: `text-${j}/normal`, className: f }),
                  null == E
                      ? null
                      : (0, t.jsx)(U, {
                            customStatusActivity: E,
                            textSize: j,
                            animateEmoji: v,
                            hideEmoji: T,
                            hideTooltip: C,
                            textClassName: f,
                            iconClassName: p,
                            tooltipClassName: J,
                        }),
                  I && (0, t.jsx)(S, {}),
              ],
          });
}
