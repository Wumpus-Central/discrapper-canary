(n.d(t, { A: () => Q }), n(321073));
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(435558),
    o = n(350835),
    u = n(855986),
    c = n(834730),
    d = n(866665),
    m = n(672979),
    A = n(87664),
    p = n(84804),
    h = n(834757),
    f = n(430363),
    g = n(51183),
    x = n(287809),
    I = n(823854);
n(851883);
var v = n(607013);
function T(e) {
    let t,
        {
            customStatusActivity: n,
            iconClassName: a,
            textClassName: s,
            userId: o,
            textSize: m = "xs",
            animateEmoji: A = !0,
            hideEmoji: p = !1,
            hideTooltip: h = !1,
        } = e,
        T = n?.emoji,
        S = (function (e) {
            let { customStatusActivity: t, statusOwnerId: n, location: l } = e,
                a = i.useMemo(() => null, [t]),
                r = null == a || null == n ? null : n === a.senderId ? a.targetId : a.senderId,
                s = (0, u.bG)([x.default], () => (null != r ? x.default.getUser(r) : null), [r]),
                o = (0, u.bG)([I.A], () => (null == n ? null : I.A.getProgressForUserId(n)), [n]);
            return (0, f.Uk)(l)
                ? { presence: a, progress: o, statusTextOverride: (s?.globalName ?? s?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: o, location: "CustomStatusVoiceDare" }),
        y = S.statusTextOverride ?? n?.state,
        N = null != y && "" !== y,
        E = null;
    null == T || p || (E = (0, l.jsx)(g.A, { emoji: T, animate: A, className: a, hideTooltip: h || N }));
    let C = N ? (null != E ? ` ${y}` : y) : null;
    return null == n
        ? null
        : (0, l.jsx)(c.E, {
              variant: `body-${m}/medium`,
              color: "none",
              className: r()(v.ps, s),
              children:
                  ((t = null != T && !p && !N),
                  h || t
                      ? (0, l.jsxs)(l.Fragment, { children: [E, C] })
                      : null != S.presence
                        ? (0, l.jsx)(d.m, { delay: 150, children: (0, l.jsxs)("span", { children: [E, C] }) })
                        : (0, l.jsxs)("span", { children: [E, C] })),
          });
}
var S = n(994500);
let y = (0, n(945810).mj)({
    kind: "user",
    name: "2026-11-voice-activity-status-group",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var N = n(821609),
    E = n(329554),
    C = n(100663),
    j = n(518477),
    _ = n(792996),
    b = n(306972);
function P(e) {
    let { user: t, activities: n, guildId: i } = e,
        a = n.slice(0, 3),
        r = n.length > 3;
    return (0, l.jsxs)("div", {
        className: b.S,
        children: [
            a.map((e) =>
                (0, l.jsx)(
                    "div",
                    {
                        className: b.u,
                        children: (0, l.jsx)(E.A, { userId: t.id, presenceActivity: e, buttonVariant: "secondary" }),
                    },
                    e.application_id ?? e.name,
                ),
            ),
            r &&
                (0, l.jsx)("div", {
                    className: b.u,
                    children: (0, l.jsx)(N.$, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: _.intl.string(_.t.pD1L1u),
                        onClick: function () {
                            (0, C.openUserProfileModal)({ userId: t.id, guildId: i, tabSection: j.RP.ACTIVITY });
                        },
                    }),
                }),
        ],
    });
}
var R = n(577473),
    O = n(646514);
function D(e) {
    let { className: t } = e;
    return (0, l.jsx)(R.QuestsIcon, {
        className: r()(v.tt, t),
        size: "custom",
        height: 14,
        width: 14,
        color: O.A.unsafe_rawColors.BRAND_345.css,
    });
}
var U = n(748562),
    L = n(47167),
    M = n(734057),
    G = n(864436),
    w = n(200041);
function Y(e) {
    let {
            stream: t,
            game: n,
            textVariant: i,
            textClassName: a,
            iconClassName: r,
            hideIcon: s = !1,
            hideText: o = !1,
            hideTooltip: c = !1,
            canTruncate: d = !0,
            showChannelName: m = !1,
        } = e,
        A = (0, u.bG)([M.A], () => M.A.getChannel(t.channelId)),
        p = (0, L.Ay)(A),
        h = n?.name === "" ? null : n?.name,
        f = null != h ? h : _.intl.string(_.t.eXan7B),
        g = null != p ? `${f} (${p})` : f,
        x = m ? g : f;
    return (0, l.jsx)(w.A, {
        icon: s ? void 0 : (0, l.jsx)(G.A, { icon: U.TvIcon, className: r }),
        text: x,
        tooltipText: c ? void 0 : o ? g : m ? void 0 : (p ?? void 0),
        textVariant: i,
        className: a,
        canTruncate: d,
        hideTooltip: c,
        "aria-label": g,
        hideText: o,
    });
}
var k = n(3026),
    V = n(208971);
function $(e) {
    let {
            customStatusActivity: t,
            textClassName: n,
            iconClassName: i,
            tooltipClassName: a,
            textSize: s = "xs",
            animateEmoji: o = !0,
            hideEmoji: u = !1,
            hideTooltip: d = !1,
        } = e,
        m = (0, V.G)(t?.state);
    if (null == t) return null;
    let A = t?.emoji,
        p = null != m && "" !== m,
        h = null;
    null == A || u || (h = (0, l.jsx)(g.A, { emoji: A, animate: o, className: i, hideTooltip: d || p }));
    let f = p && (null != h ? ` ${m}` : m);
    return (0, l.jsx)(c.E, {
        variant: `body-${s}/medium`,
        color: "none",
        className: r()(v.ps, d && v.$9, n),
        children: (function () {
            if (null != A && !u && !p && !d) return h;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [h, !1 !== f && (0, l.jsx)("span", { className: v.ps, children: f })],
            });
            return d
                ? (0, l.jsx)("span", { className: v.Nu, children: e })
                : (0, l.jsx)(k.A, { delay: 150, tooltipClassName: a, className: v.Nu, children: e });
        })(),
    });
}
var F = n(835072),
    H = n(935154),
    B = n(652215),
    J = n(802341),
    W = n(10862);
function z(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: i,
            iconClassName: a,
            hideText: s = !1,
            hideTooltip: o = !1,
            canTruncate: u = !0,
            showChannelName: c = !1,
            showPopout: d = !1,
            isStreaming: m = !1,
        } = e,
        A = (0, H.S3)(B.clD.ONLINE),
        p = (0, L.Ay)(t),
        h = t.isDM() || t.isGroupDM(),
        f = d && !o && t.isGuildVocal(),
        g = m
            ? _.intl.string(_.t.eXan7B)
            : h
              ? _.intl.string(_.t["9FaEzi"])
              : t.isGuildStageVoice()
                ? _.intl.string(_.t.QygGCN)
                : _.intl.string(_.t.msxteM),
        x = null != p ? `${g} (${p})` : g,
        I = c ? x : g,
        T = (0, l.jsx)(w.A, {
            icon: m
                ? (0, l.jsx)(G.A, { icon: U.TvIcon, className: a })
                : (0, l.jsx)(W.A, { size: "custom", color: A, channel: t, className: r()(v.Kk, a) }),
            text: I,
            tooltipText: o ? void 0 : s ? x : h || c ? void 0 : (p ?? void 0),
            textVariant: n,
            textClassName: i,
            hideTooltip: o || f,
            canTruncate: u,
            "aria-label": x,
            hideText: s,
        });
    return f ? (0, l.jsx)(J.T, { channel: t, childWrapperClassName: v.dU, children: T }) : T;
}
function Z(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e;
    return (0, l.jsxs)(c.E, {
        variant: t,
        className: r()(n, v.qi),
        color: i ? "status-positive" : "none",
        children: ["+", a - 1],
    });
}
function X(e) {
    let { textVariant: t, className: n } = e;
    return (0, l.jsx)(c.E, { variant: t, className: r()(v.Om, n), "aria-hidden": !0, children: "\u2022" });
}
function Q(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: c,
        textClassName: g,
        iconClassName: x,
        textSize: I = "xs",
        animateEmoji: N = !0,
        hasQuest: E = !1,
        hideEmoji: C = !1,
        hideTooltip: j = !1,
    } = e;
    (0, A.A)(t?.id);
    let _ = a?.discoverable !== !1 ? a : null,
        { enabled: b } = y.useConfig(
            { location: "ActivityStatus" },
            { autoTrackExposure: null != c || null != _ || (n?.length ?? 0) > 0 },
        ),
        R = b && null != c,
        O = R ? null : _,
        U = (0, h.AO)(O),
        L = i.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === o.$.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        M = (0, f.Uk)("ActivityStatus"),
        G = i.useMemo(() => (null != L, null), [L, M]),
        w = i.useMemo(
            () =>
                (0, s.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== o.$.CUSTOM_STATUS && t !== o.$.HANG_STATUS && n !== U?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, U?.name],
        ),
        k = n?.find((e) => e.name === U?.name),
        V = t?.bot === !0,
        H = (0, u.bG)([S.A], () => S.A.isBlockedOrIgnored(t?.id)),
        B = L?.state != null,
        J = null != O,
        W = !R && !J && null != c,
        Q = w.length + (J || W ? 1 : 0),
        q = Q > 1,
        K = L?.state != null && "xs" === I,
        ee = b && !j && !V && null != t && w.length > 0 && null == O;
    if (H) return null;
    function et(e) {
        return null == c
            ? null
            : (0, l.jsx)(z, {
                  channel: c,
                  textVariant: `body-${I}/medium`,
                  textClassName: g,
                  iconClassName: x,
                  hideText: K,
                  hideTooltip: e,
                  showPopout: R,
                  isStreaming: null != _,
              });
    }
    function en() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = !0 === e || j || ee;
        if (null != O)
            return (0, l.jsx)(Y, {
                stream: O,
                game: k,
                textVariant: `body-${I}/medium`,
                textClassName: g,
                iconClassName: x,
                hideText: K,
                hideIcon: V,
                hideTooltip: t,
            });
        let n = w?.[0];
        return null != n
            ? (0, l.jsx)(F.A, {
                  activity: n,
                  textVariant: `body-${I}/medium`,
                  textClassName: g,
                  iconClassName: x,
                  hideText: K,
                  hideIcon: V,
                  hideTooltip: t,
              })
            : W
              ? et(t)
              : null;
    }
    function el() {
        return (0, l.jsx)(Z, {
            textVariant: `body-${I}/medium`,
            className: g,
            hasCustomStatusText: B,
            totalActivityCount: Q,
        });
    }
    function ei(e) {
        let i = (function () {
            if (0 === Q) return null;
            if (q && !V) {
                let e, t;
                return j || ee
                    ? (0, l.jsxs)("div", { className: r()(v.ht, K && v.e7), children: [en(), el()] })
                    : (0, l.jsx)(d.m, {
                          delay: 150,
                          __unsupportedReactNodeAsText:
                              ((e = []),
                              (t = {
                                  textVariant: "body-sm/medium",
                                  hideTooltip: !0,
                                  hideIcon: !1,
                                  hideText: !1,
                                  canTruncate: !1,
                              }),
                              null != O &&
                                  e.push(
                                      (0, l.jsx)(
                                          Y,
                                          { stream: O, game: n?.find(m.A), ...t, showChannelName: !0 },
                                          "stream",
                                      ),
                                  ),
                              w.forEach((n, i) => {
                                  e.push((0, l.jsx)(F.A, { activity: n, ...t }, `activity-${i}`));
                              }),
                              W && e.push((0, l.jsx)(z, { channel: c, ...t, showChannelName: !0 }, "voice")),
                              e),
                          children: (0, l.jsxs)("div", { className: r()(v.ht, K && v.e7), children: [en(!0), el()] }),
                      });
            }
            return en();
        })();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                R && et(j),
                R && e && (0, l.jsx)(X, { textVariant: `body-${I}/normal`, className: g }),
                ee && null != t
                    ? (0, l.jsx)(p.A, {
                          childWrapperClassName: r()(v.dU, q && v.dr),
                          renderPopout: () => (0, l.jsx)(P, { user: t, activities: w, guildId: c?.guild_id }),
                          children: i,
                      })
                    : i,
            ],
        });
    }
    let ea = r()(v.kL, { [v.Dk]: "xs" === I, [v.WV]: "sm" === I });
    return null != G
        ? (0, l.jsxs)("div", {
              className: ea,
              children: [
                  null == G
                      ? null
                      : (0, l.jsx)(T, {
                            customStatusActivity: L,
                            textSize: I,
                            animateEmoji: N,
                            hideEmoji: C,
                            hideTooltip: j,
                            textClassName: g,
                            iconClassName: x,
                            tooltipClassName: ea,
                            userId: t?.id,
                        }),
                  (Q > 0 || R) && (0, l.jsx)(X, { textVariant: `body-${I}/normal`, className: g }),
                  ei(Q > 0),
                  E && (0, l.jsx)(D, {}),
              ],
          })
        : (0, l.jsxs)("div", {
              className: ea,
              children: [
                  ei(Q > 0 || null != L),
                  null != L && Q > 0 && (0, l.jsx)(X, { textVariant: `body-${I}/normal`, className: g }),
                  null == L
                      ? null
                      : (0, l.jsx)($, {
                            customStatusActivity: L,
                            textSize: I,
                            animateEmoji: N,
                            hideEmoji: C,
                            hideTooltip: j,
                            textClassName: g,
                            iconClassName: x,
                            tooltipClassName: ea,
                        }),
                  E && (0, l.jsx)(D, {}),
              ],
          });
}
