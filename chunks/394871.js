(n.d(l, { A: () => $ }), n(321073));
var t = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(435558),
    u = n(350835),
    o = n(17928),
    c = n(834730),
    d = n(866665),
    m = n(672979),
    x = n(87664),
    h = n(834757),
    f = n(430363),
    j = n(51183),
    A = n(287809),
    p = n(823854);
n(851883);
var g = n(607013);
function N(e) {
    let l,
        {
            customStatusActivity: n,
            iconClassName: i,
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
                i = s.useMemo(() => null, [l]),
                a = null == i || null == n ? null : n === i.senderId ? i.targetId : i.senderId,
                r = (0, o.bG)([A.default], () => (null != a ? A.default.getUser(a) : null), [a]),
                u = (0, o.bG)([p.A], () => (null == n ? null : p.A.getProgressForUserId(n)), [n]);
            return (0, f.Uk)(t)
                ? { presence: i, progress: u, statusTextOverride: (r?.globalName ?? r?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: u, location: "CustomStatusVoiceDare" }),
        S = I.statusTextOverride ?? n?.state,
        T = null != S && "" !== S,
        C = null;
    null == v || h || (C = (0, t.jsx)(j.A, { emoji: v, animate: x, className: i, hideTooltip: N || T }));
    let b = T ? (null != C ? ` ${S}` : S) : null;
    return null == n
        ? null
        : (0, t.jsx)(c.E, {
              variant: `text-${m}/medium`,
              color: "none",
              className: a()(g.ps, r),
              children:
                  ((l = null != v && !h && !T),
                  N || l
                      ? (0, t.jsxs)(t.Fragment, { children: [C, b] })
                      : null != I.presence
                        ? (0, t.jsx)(d.m, { delay: 150, children: (0, t.jsxs)("span", { children: [C, b] }) })
                        : (0, t.jsxs)("span", { children: [C, b] })),
          });
}
var v = n(994500),
    I = n(577473),
    S = n(661531);
function T(e) {
    let { className: l } = e;
    return (0, t.jsx)(I.r, {
        className: a()(g.tt, l),
        size: "custom",
        height: 14,
        width: 14,
        color: S.A.unsafe_rawColors.BRAND_345.css,
    });
}
var C = n(748562),
    b = n(47167),
    y = n(734057),
    E = n(864436),
    M = n(200041),
    R = n(105292);
function G(e) {
    let {
            stream: l,
            game: n,
            textVariant: s,
            textClassName: i,
            iconClassName: a,
            hideIcon: r = !1,
            hideText: u = !1,
            hideTooltip: c = !1,
            canTruncate: d = !0,
            showChannelName: m = !1,
        } = e,
        x = (0, o.bG)([y.A], () => y.A.getChannel(l.channelId)),
        h = (0, b.Ay)(x),
        f = n?.name === "" ? null : n?.name,
        j = null != f ? f : R.intl.string(R.t.eXan7B),
        A = null != h ? `${j} (${h})` : j,
        p = m ? A : j;
    return (0, t.jsx)(M.A, {
        icon: r ? void 0 : (0, t.jsx)(E.A, { icon: C.U, className: a }),
        text: p,
        tooltipText: c ? void 0 : u ? A : m ? void 0 : (h ?? void 0),
        textVariant: s,
        className: i,
        canTruncate: d,
        hideTooltip: c,
        "aria-label": A,
        hideText: u,
    });
}
var _ = n(3026),
    U = n(208971);
function k(e) {
    let l,
        {
            customStatusActivity: n,
            textClassName: s,
            iconClassName: i,
            tooltipClassName: r,
            textSize: u = "xs",
            animateEmoji: o = !0,
            hideEmoji: d = !1,
            hideTooltip: m = !1,
        } = e,
        x = (0, U.G)(n?.state);
    if (null == n) return null;
    let h = n?.emoji,
        f = null != x && "" !== x,
        A = null;
    null == h || d || (A = (0, t.jsx)(j.A, { emoji: h, animate: o, className: i, hideTooltip: m || f }));
    let p = f && (null != A ? ` ${x}` : x);
    return (0, t.jsx)(c.E, {
        variant: `text-${u}/medium`,
        color: "none",
        className: a()(g.ps, s),
        children:
            ((l = null != h && !d && !f),
            m || l
                ? (0, t.jsxs)(t.Fragment, { children: [A, p] })
                : (0, t.jsxs)(_.A, {
                      delay: 150,
                      tooltipClassName: r,
                      className: g.Nu,
                      children: [A, !1 !== p && (0, t.jsx)("span", { className: g.ps, children: p })],
                  })),
    });
}
var w = n(835072),
    D = n(935154),
    P = n(652215),
    O = n(10862);
function F(e) {
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
        d = (0, D.S3)(P.clD.ONLINE),
        m = (0, b.Ay)(l),
        x = l.isDM() || l.isGroupDM(),
        h = x
            ? R.intl.string(R.t["9FaEzi"])
            : l.isGuildStageVoice()
              ? R.intl.string(R.t.QygGCN)
              : R.intl.string(R.t.msxteM),
        f = null != m ? `${h} (${m})` : h,
        j = c ? f : h;
    return (0, t.jsx)(M.A, {
        icon: (0, t.jsx)(O.A, { size: "custom", color: d, channel: l, className: a()(g.Kk, i) }),
        text: j,
        tooltipText: u ? void 0 : r ? f : x || c ? void 0 : (m ?? void 0),
        textVariant: n,
        textClassName: s,
        hideTooltip: u,
        canTruncate: o,
        "aria-label": f,
        hideText: r,
    });
}
function L(e) {
    let { textVariant: l, className: n, hasCustomStatusText: s, totalActivityCount: i } = e;
    return (0, t.jsxs)(c.E, {
        variant: l,
        className: a()(n, g.qi),
        color: s ? "status-positive" : "none",
        children: ["+", i - 1],
    });
}
function V(e) {
    let { textVariant: l, className: n } = e;
    return (0, t.jsx)(c.E, { variant: l, className: a()(g.Om, n), "aria-hidden": !0, children: "\u2022" });
}
function $(e) {
    let {
        user: l,
        activities: n,
        applicationStream: i,
        voiceChannel: c,
        textClassName: j,
        iconClassName: A,
        textSize: p = "xs",
        animateEmoji: I = !0,
        hasQuest: S = !1,
        hideEmoji: C = !1,
        hideTooltip: b = !1,
    } = e;
    (0, x.A)(l?.id);
    let y = i?.discoverable !== !1 ? i : null,
        E = (0, h.AO)(y),
        M = s.useMemo(() => {
            let e = n?.find((e) => {
                let { type: l } = e;
                return l === u.$.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let l = e.state?.trim() ?? null;
            return null == ("" === l ? null : l) && null == e.emoji ? null : e;
        }, [n]),
        R = (0, f.Uk)("ActivityStatus"),
        _ = s.useMemo(() => (null != M, null), [M, R]),
        U = s.useMemo(
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
        $ = M?.state != null,
        z = null != y,
        B = !z && null != c,
        H = U.length + (z || B ? 1 : 0),
        Y = H > 1,
        W = M?.state != null && "xs" === p;
    if (O) return null;
    function Z() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = !0 === e || b;
        if (null != y)
            return (0, t.jsx)(G, {
                stream: y,
                game: D,
                textVariant: `text-${p}/medium`,
                textClassName: j,
                iconClassName: A,
                hideText: W,
                hideIcon: P,
                hideTooltip: l,
            });
        let n = U?.[0];
        return null != n
            ? (0, t.jsx)(w.A, {
                  activity: n,
                  textVariant: `text-${p}/medium`,
                  textClassName: j,
                  iconClassName: A,
                  hideText: W,
                  hideIcon: P,
                  hideTooltip: l,
              })
            : null != c
              ? (0, t.jsx)(F, {
                    channel: c,
                    textVariant: `text-${p}/medium`,
                    textClassName: j,
                    iconClassName: A,
                    hideText: W,
                    hideTooltip: l,
                })
              : null;
    }
    function q() {
        return (0, t.jsx)(L, {
            textVariant: `text-${p}/medium`,
            className: j,
            hasCustomStatusText: $,
            totalActivityCount: H,
        });
    }
    function X() {
        if (0 === H) return null;
        if (Y && !P) {
            let e, l;
            return b
                ? (0, t.jsxs)("div", { className: a()(g.ht, W && g.e7), children: [Z(), q()] })
                : (0, t.jsx)(d.m, {
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
                          null != y &&
                              e.push(
                                  (0, t.jsx)(G, { stream: y, game: n?.find(m.A), ...l, showChannelName: !0 }, "stream"),
                              ),
                          U.forEach((n, s) => {
                              e.push((0, t.jsx)(w.A, { activity: n, ...l }, `activity-${s}`));
                          }),
                          B && e.push((0, t.jsx)(F, { channel: c, ...l, showChannelName: !0 }, "voice")),
                          e),
                      children: (0, t.jsxs)("div", { className: a()(g.ht, W && g.e7), children: [Z(!0), q()] }),
                  });
        }
        return Z();
    }
    let J = a()(g.kL, { [g.Dk]: "xs" === p, [g.WV]: "sm" === p });
    return null != _
        ? (0, t.jsxs)("div", {
              className: J,
              children: [
                  null == _
                      ? null
                      : (0, t.jsx)(N, {
                            customStatusActivity: M,
                            textSize: p,
                            animateEmoji: I,
                            hideEmoji: C,
                            hideTooltip: b,
                            textClassName: j,
                            iconClassName: A,
                            tooltipClassName: J,
                            userId: l?.id,
                        }),
                  H > 0 && (0, t.jsx)(V, { textVariant: `text-${p}/normal`, className: j }),
                  X(),
                  S && (0, t.jsx)(T, {}),
              ],
          })
        : (0, t.jsxs)("div", {
              className: J,
              children: [
                  X(),
                  null != M && H > 0 && (0, t.jsx)(V, { textVariant: `text-${p}/normal`, className: j }),
                  null == M
                      ? null
                      : (0, t.jsx)(k, {
                            customStatusActivity: M,
                            textSize: p,
                            animateEmoji: I,
                            hideEmoji: C,
                            hideTooltip: b,
                            textClassName: j,
                            iconClassName: A,
                            tooltipClassName: J,
                        }),
                  S && (0, t.jsx)(T, {}),
              ],
          });
}
