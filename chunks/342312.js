(n.d(l, { A: () => L }), n(321073));
var t = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(435558),
    u = n(350835),
    o = n(855986),
    d = n(834730),
    c = n(866665),
    m = n(672979),
    x = n(87664),
    h = n(834757),
    f = n(430363),
    p = n(51183),
    j = n(287809),
    A = n(823854);
n(851883);
var g = n(607013);
function N(e) {
    let l,
        {
            customStatusActivity: n,
            iconClassName: a,
            textClassName: r,
            userId: u,
            textSize: m = "xs",
            animateEmoji: x = !0,
            hideEmoji: h = !1,
            hideTooltip: N = !1,
        } = e,
        v = n?.emoji,
        I = (function (e) {
            let { customStatusActivity: l, statusOwnerId: n, location: t } = e,
                a = s.useMemo(() => null, [l]),
                i = null == a || null == n ? null : n === a.senderId ? a.targetId : a.senderId,
                r = (0, o.bG)([j.default], () => (null != i ? j.default.getUser(i) : null), [i]),
                u = (0, o.bG)([A.A], () => (null == n ? null : A.A.getProgressForUserId(n)), [n]);
            return (0, f.Uk)(t)
                ? { presence: a, progress: u, statusTextOverride: (r?.globalName ?? r?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: u, location: "CustomStatusVoiceDare" }),
        S = I.statusTextOverride ?? n?.state,
        T = null != S && "" !== S,
        b = null;
    null == v || h || (b = (0, t.jsx)(p.A, { emoji: v, animate: x, className: a, hideTooltip: N || T }));
    let y = T ? (null != b ? ` ${S}` : S) : null;
    return null == n
        ? null
        : (0, t.jsx)(d.E, {
              variant: `body-${m}/medium`,
              color: "none",
              className: i()(g.ps, r),
              children:
                  ((l = null != v && !h && !T),
                  N || l
                      ? (0, t.jsxs)(t.Fragment, { children: [b, y] })
                      : null != I.presence
                        ? (0, t.jsx)(c.m, { delay: 150, children: (0, t.jsxs)("span", { children: [b, y] }) })
                        : (0, t.jsxs)("span", { children: [b, y] })),
          });
}
var v = n(994500),
    I = n(577473),
    S = n(646514);
function T(e) {
    let { className: l } = e;
    return (0, t.jsx)(I.r, {
        className: i()(g.tt, l),
        size: "custom",
        height: 14,
        width: 14,
        color: S.A.unsafe_rawColors.BRAND_345.css,
    });
}
var b = n(748562),
    y = n(47167),
    C = n(734057),
    E = n(864436),
    G = n(200041),
    M = n(792996);
function R(e) {
    let {
            stream: l,
            game: n,
            textVariant: s,
            textClassName: a,
            iconClassName: i,
            hideIcon: r = !1,
            hideText: u = !1,
            hideTooltip: d = !1,
            canTruncate: c = !0,
            showChannelName: m = !1,
        } = e,
        x = (0, o.bG)([C.A], () => C.A.getChannel(l.channelId)),
        h = (0, y.Ay)(x),
        f = n?.name === "" ? null : n?.name,
        p = null != f ? f : M.intl.string(M.t.eXan7B),
        j = null != h ? `${p} (${h})` : p,
        A = m ? j : p;
    return (0, t.jsx)(G.A, {
        icon: r ? void 0 : (0, t.jsx)(E.A, { icon: b.U, className: i }),
        text: A,
        tooltipText: d ? void 0 : u ? j : m ? void 0 : (h ?? void 0),
        textVariant: s,
        className: a,
        canTruncate: c,
        hideTooltip: d,
        "aria-label": j,
        hideText: u,
    });
}
var k = n(3026),
    w = n(208971);
function U(e) {
    let {
            customStatusActivity: l,
            textClassName: n,
            iconClassName: s,
            tooltipClassName: a,
            textSize: r = "xs",
            animateEmoji: u = !0,
            hideEmoji: o = !1,
            hideTooltip: c = !1,
        } = e,
        m = (0, w.G)(l?.state);
    if (null == l) return null;
    let x = l?.emoji,
        h = null != m && "" !== m,
        f = null;
    null == x || o || (f = (0, t.jsx)(p.A, { emoji: x, animate: u, className: s, hideTooltip: c || h }));
    let j = h && (null != f ? ` ${m}` : m);
    return (0, t.jsx)(d.E, {
        variant: `body-${r}/medium`,
        color: "none",
        className: i()(g.ps, c && g.$9, n),
        children: (function () {
            if (null != x && !o && !h && !c) return f;
            let e = (0, t.jsxs)(t.Fragment, {
                children: [f, !1 !== j && (0, t.jsx)("span", { className: g.ps, children: j })],
            });
            return c
                ? (0, t.jsx)("span", { className: g.Nu, children: e })
                : (0, t.jsx)(k.A, { delay: 150, tooltipClassName: a, className: g.Nu, children: e });
        })(),
    });
}
var _ = n(835072),
    D = n(935154),
    P = n(652215),
    O = n(10862);
function F(e) {
    let {
            channel: l,
            textVariant: n,
            textClassName: s,
            iconClassName: a,
            hideText: r = !1,
            hideTooltip: u = !1,
            canTruncate: o = !0,
            showChannelName: d = !1,
        } = e,
        c = (0, D.S3)(P.clD.ONLINE),
        m = (0, y.Ay)(l),
        x = l.isDM() || l.isGroupDM(),
        h = x
            ? M.intl.string(M.t["9FaEzi"])
            : l.isGuildStageVoice()
              ? M.intl.string(M.t.QygGCN)
              : M.intl.string(M.t.msxteM),
        f = null != m ? `${h} (${m})` : h,
        p = d ? f : h;
    return (0, t.jsx)(G.A, {
        icon: (0, t.jsx)(O.A, { size: "custom", color: c, channel: l, className: i()(g.Kk, a) }),
        text: p,
        tooltipText: u ? void 0 : r ? f : x || d ? void 0 : (m ?? void 0),
        textVariant: n,
        textClassName: s,
        hideTooltip: u,
        canTruncate: o,
        "aria-label": f,
        hideText: r,
    });
}
function $(e) {
    let { textVariant: l, className: n, hasCustomStatusText: s, totalActivityCount: a } = e;
    return (0, t.jsxs)(d.E, {
        variant: l,
        className: i()(n, g.qi),
        color: s ? "status-positive" : "none",
        children: ["+", a - 1],
    });
}
function V(e) {
    let { textVariant: l, className: n } = e;
    return (0, t.jsx)(d.E, { variant: l, className: i()(g.Om, n), "aria-hidden": !0, children: "\u2022" });
}
function L(e) {
    let {
        user: l,
        activities: n,
        applicationStream: a,
        voiceChannel: d,
        textClassName: p,
        iconClassName: j,
        textSize: A = "xs",
        animateEmoji: I = !0,
        hasQuest: S = !1,
        hideEmoji: b = !1,
        hideTooltip: y = !1,
    } = e;
    (0, x.A)(l?.id);
    let C = a?.discoverable !== !1 ? a : null,
        E = (0, h.AO)(C),
        G = s.useMemo(() => {
            let e = n?.find((e) => {
                let { type: l } = e;
                return l === u.$.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let l = e.state?.trim() ?? null;
            return null == ("" === l ? null : l) && null == e.emoji ? null : e;
        }, [n]),
        M = (0, f.Uk)("ActivityStatus"),
        k = s.useMemo(() => (null != G, null), [G, M]),
        w = s.useMemo(
            () =>
                (0, r.uniqWith)(
                    n?.filter((e) => {
                        let { type: l, name: n } = e;
                        return l !== u.$.CUSTOM_STATUS && l !== u.$.HANG_STATUS && n !== E?.name;
                    }) ?? [],
                    (e, l) =>
                        (null != e.application_id &&
                            null != l.application_id &&
                            e.application_id === l.application_id) ||
                        (null != e.name && null != l.name && e.name === l.name),
                ),
            [n, E?.name],
        ),
        D = n?.find((e) => e.name === E?.name),
        P = l?.bot === !0,
        O = (0, o.bG)([v.A], () => v.A.isBlockedOrIgnored(l?.id)),
        L = G?.state != null,
        z = null != C,
        B = !z && null != d,
        Y = w.length + (z || B ? 1 : 0),
        H = Y > 1,
        Z = G?.state != null && "xs" === A;
    if (O) return null;
    function q() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = !0 === e || y;
        if (null != C)
            return (0, t.jsx)(R, {
                stream: C,
                game: D,
                textVariant: `body-${A}/medium`,
                textClassName: p,
                iconClassName: j,
                hideText: Z,
                hideIcon: P,
                hideTooltip: l,
            });
        let n = w?.[0];
        return null != n
            ? (0, t.jsx)(_.A, {
                  activity: n,
                  textVariant: `body-${A}/medium`,
                  textClassName: p,
                  iconClassName: j,
                  hideText: Z,
                  hideIcon: P,
                  hideTooltip: l,
              })
            : null != d
              ? (0, t.jsx)(F, {
                    channel: d,
                    textVariant: `body-${A}/medium`,
                    textClassName: p,
                    iconClassName: j,
                    hideText: Z,
                    hideTooltip: l,
                })
              : null;
    }
    function W() {
        return (0, t.jsx)($, {
            textVariant: `body-${A}/medium`,
            className: p,
            hasCustomStatusText: L,
            totalActivityCount: Y,
        });
    }
    function X() {
        if (0 === Y) return null;
        if (H && !P) {
            let e, l;
            return y
                ? (0, t.jsxs)("div", { className: i()(g.ht, Z && g.e7), children: [q(), W()] })
                : (0, t.jsx)(c.m, {
                      delay: 150,
                      __unsupportedReactNodeAsText:
                          ((e = []),
                          (l = {
                              textVariant: "body-sm/medium",
                              hideTooltip: !0,
                              hideIcon: !1,
                              hideText: !1,
                              canTruncate: !1,
                          }),
                          null != C &&
                              e.push(
                                  (0, t.jsx)(R, { stream: C, game: n?.find(m.A), ...l, showChannelName: !0 }, "stream"),
                              ),
                          w.forEach((n, s) => {
                              e.push((0, t.jsx)(_.A, { activity: n, ...l }, `activity-${s}`));
                          }),
                          B && e.push((0, t.jsx)(F, { channel: d, ...l, showChannelName: !0 }, "voice")),
                          e),
                      children: (0, t.jsxs)("div", { className: i()(g.ht, Z && g.e7), children: [q(!0), W()] }),
                  });
        }
        return q();
    }
    let K = i()(g.kL, { [g.Dk]: "xs" === A, [g.WV]: "sm" === A });
    return null != k
        ? (0, t.jsxs)("div", {
              className: K,
              children: [
                  null == k
                      ? null
                      : (0, t.jsx)(N, {
                            customStatusActivity: G,
                            textSize: A,
                            animateEmoji: I,
                            hideEmoji: b,
                            hideTooltip: y,
                            textClassName: p,
                            iconClassName: j,
                            tooltipClassName: K,
                            userId: l?.id,
                        }),
                  Y > 0 && (0, t.jsx)(V, { textVariant: `body-${A}/normal`, className: p }),
                  X(),
                  S && (0, t.jsx)(T, {}),
              ],
          })
        : (0, t.jsxs)("div", {
              className: K,
              children: [
                  X(),
                  null != G && Y > 0 && (0, t.jsx)(V, { textVariant: `body-${A}/normal`, className: p }),
                  null == G
                      ? null
                      : (0, t.jsx)(U, {
                            customStatusActivity: G,
                            textSize: A,
                            animateEmoji: I,
                            hideEmoji: b,
                            hideTooltip: y,
                            textClassName: p,
                            iconClassName: j,
                            tooltipClassName: K,
                        }),
                  S && (0, t.jsx)(T, {}),
              ],
          });
}
