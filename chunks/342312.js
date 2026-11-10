(n.d(l, { A: () => V }), n(321073));
var t = n(477900),
    a = n(582128),
    s = n(503698),
    i = n.n(s),
    r = n(435558),
    u = n(350835),
    o = n(855986),
    d = n(834730),
    c = n(866665),
    m = n(672979),
    x = n(87664),
    h = n(834757),
    f = n(430363),
    A = n(51183),
    g = n(287809),
    p = n(823854);
n(851883);
var j = n(607013);
function N(e) {
    let l,
        {
            customStatusActivity: n,
            iconClassName: s,
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
                s = a.useMemo(() => null, [l]),
                i = null == s || null == n ? null : n === s.senderId ? s.targetId : s.senderId,
                r = (0, o.bG)([g.default], () => (null != i ? g.default.getUser(i) : null), [i]),
                u = (0, o.bG)([p.A], () => (null == n ? null : p.A.getProgressForUserId(n)), [n]);
            return (0, f.Uk)(t)
                ? { presence: s, progress: u, statusTextOverride: (r?.globalName ?? r?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: u, location: "CustomStatusVoiceDare" }),
        S = I.statusTextOverride ?? n?.state,
        b = null != S && "" !== S,
        T = null;
    null == v || h || (T = (0, t.jsx)(A.A, { emoji: v, animate: x, className: s, hideTooltip: N || b }));
    let C = b ? (null != T ? ` ${S}` : S) : null;
    return null == n
        ? null
        : (0, t.jsx)(d.E, {
              variant: `body-${m}/medium`,
              color: "none",
              className: i()(j.ps, r),
              children:
                  ((l = null != v && !h && !b),
                  N || l
                      ? (0, t.jsxs)(t.Fragment, { children: [T, C] })
                      : null != I.presence
                        ? (0, t.jsx)(c.m, { delay: 150, children: (0, t.jsxs)("span", { children: [T, C] }) })
                        : (0, t.jsxs)("span", { children: [T, C] })),
          });
}
var v = n(994500),
    I = n(577473),
    S = n(646514);
function b(e) {
    let { className: l } = e;
    return (0, t.jsx)(I.QuestsIcon, {
        className: i()(j.tt, l),
        size: "custom",
        height: 14,
        width: 14,
        color: S.A.unsafe_rawColors.BRAND_345.css,
    });
}
var T = n(748562),
    C = n(47167),
    y = n(734057),
    E = n(864436),
    G = n(200041),
    M = n(792996);
function w(e) {
    let {
            stream: l,
            game: n,
            textVariant: a,
            textClassName: s,
            iconClassName: i,
            hideIcon: r = !1,
            hideText: u = !1,
            hideTooltip: d = !1,
            canTruncate: c = !0,
            showChannelName: m = !1,
        } = e,
        x = (0, o.bG)([y.A], () => y.A.getChannel(l.channelId)),
        h = (0, C.Ay)(x),
        f = n?.name === "" ? null : n?.name,
        A = null != f ? f : M.intl.string(M.t.eXan7B),
        g = null != h ? `${A} (${h})` : A,
        p = m ? g : A;
    return (0, t.jsx)(G.A, {
        icon: r ? void 0 : (0, t.jsx)(E.A, { icon: T.TvIcon, className: i }),
        text: p,
        tooltipText: d ? void 0 : u ? g : m ? void 0 : (h ?? void 0),
        textVariant: a,
        className: s,
        canTruncate: c,
        hideTooltip: d,
        "aria-label": g,
        hideText: u,
    });
}
var R = n(3026),
    k = n(208971);
function U(e) {
    let {
            customStatusActivity: l,
            textClassName: n,
            iconClassName: a,
            tooltipClassName: s,
            textSize: r = "xs",
            animateEmoji: u = !0,
            hideEmoji: o = !1,
            hideTooltip: c = !1,
        } = e,
        m = (0, k.G)(l?.state);
    if (null == l) return null;
    let x = l?.emoji,
        h = null != m && "" !== m,
        f = null;
    null == x || o || (f = (0, t.jsx)(A.A, { emoji: x, animate: u, className: a, hideTooltip: c || h }));
    let g = h && (null != f ? ` ${m}` : m);
    return (0, t.jsx)(d.E, {
        variant: `body-${r}/medium`,
        color: "none",
        className: i()(j.ps, c && j.$9, n),
        children: (function () {
            if (null != x && !o && !h && !c) return f;
            let e = (0, t.jsxs)(t.Fragment, {
                children: [f, !1 !== g && (0, t.jsx)("span", { className: j.ps, children: g })],
            });
            return c
                ? (0, t.jsx)("span", { className: j.Nu, children: e })
                : (0, t.jsx)(R.A, { delay: 150, tooltipClassName: s, className: j.Nu, children: e });
        })(),
    });
}
var P = n(835072),
    _ = n(935154),
    D = n(652215),
    O = n(10862);
function F(e) {
    let {
            channel: l,
            textVariant: n,
            textClassName: a,
            iconClassName: s,
            hideText: r = !1,
            hideTooltip: u = !1,
            canTruncate: o = !0,
            showChannelName: d = !1,
        } = e,
        c = (0, _.S3)(D.clD.ONLINE),
        m = (0, C.Ay)(l),
        x = l.isDM() || l.isGroupDM(),
        h = x
            ? M.intl.string(M.t["9FaEzi"])
            : l.isGuildStageVoice()
              ? M.intl.string(M.t.QygGCN)
              : M.intl.string(M.t.msxteM),
        f = null != m ? `${h} (${m})` : h,
        A = d ? f : h;
    return (0, t.jsx)(G.A, {
        icon: (0, t.jsx)(O.A, { size: "custom", color: c, channel: l, className: i()(j.Kk, s) }),
        text: A,
        tooltipText: u ? void 0 : r ? f : x || d ? void 0 : (m ?? void 0),
        textVariant: n,
        textClassName: a,
        hideTooltip: u,
        canTruncate: o,
        "aria-label": f,
        hideText: r,
    });
}
function $(e) {
    let { textVariant: l, className: n, hasCustomStatusText: a, totalActivityCount: s } = e;
    return (0, t.jsxs)(d.E, {
        variant: l,
        className: i()(n, j.qi),
        color: a ? "status-positive" : "none",
        children: ["+", s - 1],
    });
}
function L(e) {
    let { textVariant: l, className: n } = e;
    return (0, t.jsx)(d.E, { variant: l, className: i()(j.Om, n), "aria-hidden": !0, children: "\u2022" });
}
function V(e) {
    let {
        user: l,
        activities: n,
        applicationStream: s,
        voiceChannel: d,
        textClassName: A,
        iconClassName: g,
        textSize: p = "xs",
        animateEmoji: I = !0,
        hasQuest: S = !1,
        hideEmoji: T = !1,
        hideTooltip: C = !1,
    } = e;
    (0, x.A)(l?.id);
    let y = s?.discoverable !== !1 ? s : null,
        E = (0, h.AO)(y),
        G = a.useMemo(() => {
            let e = n?.find((e) => {
                let { type: l } = e;
                return l === u.$.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let l = e.state?.trim() ?? null;
            return null == ("" === l ? null : l) && null == e.emoji ? null : e;
        }, [n]),
        M = (0, f.Uk)("ActivityStatus"),
        R = a.useMemo(() => (null != G, null), [G, M]),
        k = a.useMemo(
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
        _ = n?.find((e) => e.name === E?.name),
        D = l?.bot === !0,
        O = (0, o.bG)([v.A], () => v.A.isBlockedOrIgnored(l?.id)),
        V = G?.state != null,
        z = null != y,
        B = !z && null != d,
        Y = k.length + (z || B ? 1 : 0),
        H = Y > 1,
        Z = G?.state != null && "xs" === p;
    if (O) return null;
    function q() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = !0 === e || C;
        if (null != y)
            return (0, t.jsx)(w, {
                stream: y,
                game: _,
                textVariant: `body-${p}/medium`,
                textClassName: A,
                iconClassName: g,
                hideText: Z,
                hideIcon: D,
                hideTooltip: l,
            });
        let n = k?.[0];
        return null != n
            ? (0, t.jsx)(P.A, {
                  activity: n,
                  textVariant: `body-${p}/medium`,
                  textClassName: A,
                  iconClassName: g,
                  hideText: Z,
                  hideIcon: D,
                  hideTooltip: l,
              })
            : null != d
              ? (0, t.jsx)(F, {
                    channel: d,
                    textVariant: `body-${p}/medium`,
                    textClassName: A,
                    iconClassName: g,
                    hideText: Z,
                    hideTooltip: l,
                })
              : null;
    }
    function W() {
        return (0, t.jsx)($, {
            textVariant: `body-${p}/medium`,
            className: A,
            hasCustomStatusText: V,
            totalActivityCount: Y,
        });
    }
    function X() {
        if (0 === Y) return null;
        if (H && !D) {
            let e, l;
            return C
                ? (0, t.jsxs)("div", { className: i()(j.ht, Z && j.e7), children: [q(), W()] })
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
                          null != y &&
                              e.push(
                                  (0, t.jsx)(w, { stream: y, game: n?.find(m.A), ...l, showChannelName: !0 }, "stream"),
                              ),
                          k.forEach((n, a) => {
                              e.push((0, t.jsx)(P.A, { activity: n, ...l }, `activity-${a}`));
                          }),
                          B && e.push((0, t.jsx)(F, { channel: d, ...l, showChannelName: !0 }, "voice")),
                          e),
                      children: (0, t.jsxs)("div", { className: i()(j.ht, Z && j.e7), children: [q(!0), W()] }),
                  });
        }
        return q();
    }
    let K = i()(j.kL, { [j.Dk]: "xs" === p, [j.WV]: "sm" === p });
    return null != R
        ? (0, t.jsxs)("div", {
              className: K,
              children: [
                  null == R
                      ? null
                      : (0, t.jsx)(N, {
                            customStatusActivity: G,
                            textSize: p,
                            animateEmoji: I,
                            hideEmoji: T,
                            hideTooltip: C,
                            textClassName: A,
                            iconClassName: g,
                            tooltipClassName: K,
                            userId: l?.id,
                        }),
                  Y > 0 && (0, t.jsx)(L, { textVariant: `body-${p}/normal`, className: A }),
                  X(),
                  S && (0, t.jsx)(b, {}),
              ],
          })
        : (0, t.jsxs)("div", {
              className: K,
              children: [
                  X(),
                  null != G && Y > 0 && (0, t.jsx)(L, { textVariant: `body-${p}/normal`, className: A }),
                  null == G
                      ? null
                      : (0, t.jsx)(U, {
                            customStatusActivity: G,
                            textSize: p,
                            animateEmoji: I,
                            hideEmoji: T,
                            hideTooltip: C,
                            textClassName: A,
                            iconClassName: g,
                            tooltipClassName: K,
                        }),
                  S && (0, t.jsx)(b, {}),
              ],
          });
}
