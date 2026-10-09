(n.d(t, { A: () => V }), n(321073));
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(435558),
    o = n(17928),
    u = n(834730),
    c = n(866665),
    d = n(672979),
    m = n(87664),
    x = n(834757),
    h = n(430363),
    j = n(51183),
    p = n(287809),
    g = n(823854);
n(851883);
var f = n(607013);
function N(e) {
    let t,
        {
            customStatusActivity: n,
            iconClassName: i,
            textClassName: r,
            userId: d,
            textSize: m = "xs",
            animateEmoji: x = !0,
            hideEmoji: N = !1,
            hideTooltip: I = !1,
        } = e,
        A = n?.emoji,
        v = (function (e) {
            let { customStatusActivity: t, statusOwnerId: n, location: l } = e,
                i = s.useMemo(() => null, [t]),
                a = null == i || null == n ? null : n === i.senderId ? i.targetId : i.senderId,
                r = (0, o.bG)([p.default], () => (null != a ? p.default.getUser(a) : null), [a]),
                u = (0, o.bG)([g.A], () => (null == n ? null : g.A.getProgressForUserId(n)), [n]);
            return (0, h.Uk)(l)
                ? { presence: i, progress: u, statusTextOverride: (r?.globalName ?? r?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: d, location: "CustomStatusVoiceDare" }),
        b = v.statusTextOverride ?? n?.state,
        S = null != b && "" !== b,
        E = null;
    null == A || N || (E = (0, l.jsx)(j.A, { emoji: A, animate: x, className: i, hideTooltip: I || S }));
    let C = S ? (null != E ? ` ${b}` : b) : null;
    return null == n
        ? null
        : (0, l.jsx)(u.E, {
              variant: `text-${m}/medium`,
              color: "none",
              className: a()(f.ps, r),
              children:
                  ((t = null != A && !N && !S),
                  I || t
                      ? (0, l.jsxs)(l.Fragment, { children: [E, C] })
                      : null != v.presence
                        ? (0, l.jsx)(c.m, { delay: 150, children: (0, l.jsxs)("span", { children: [E, C] }) })
                        : (0, l.jsxs)("span", { children: [E, C] })),
          });
}
var I = n(994500),
    A = n(577473),
    v = n(661531);
function b(e) {
    let { className: t } = e;
    return (0, l.jsx)(A.r, {
        className: a()(f.tt, t),
        size: "custom",
        height: 14,
        width: 14,
        color: v.A.unsafe_rawColors.BRAND_345.css,
    });
}
var S = n(748562),
    E = n(47167),
    C = n(734057),
    T = n(864436),
    y = n(200041),
    O = n(660183);
function k(e) {
    let {
            stream: t,
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
        x = (0, o.bG)([C.A], () => C.A.getChannel(t.channelId)),
        h = (0, E.Ay)(x),
        j = n?.name === "" ? null : n?.name,
        p = null != j ? j : O.intl.string(O.t.eXan7B),
        g = null != h ? `${p} (${h})` : p,
        f = m ? g : p;
    return (0, l.jsx)(y.A, {
        icon: r ? void 0 : (0, l.jsx)(T.A, { icon: S.U, className: a }),
        text: f,
        tooltipText: c ? void 0 : u ? g : m ? void 0 : (h ?? void 0),
        textVariant: s,
        className: i,
        canTruncate: d,
        hideTooltip: c,
        "aria-label": g,
        hideText: u,
    });
}
var G = n(3026),
    _ = n(208971);
function R(e) {
    let t,
        {
            customStatusActivity: n,
            textClassName: s,
            iconClassName: i,
            tooltipClassName: r,
            textSize: o = "xs",
            animateEmoji: c = !0,
            hideEmoji: d = !1,
            hideTooltip: m = !1,
        } = e,
        x = (0, _.G)(n?.state);
    if (null == n) return null;
    let h = n?.emoji,
        p = null != x && "" !== x,
        g = null;
    null == h || d || (g = (0, l.jsx)(j.A, { emoji: h, animate: c, className: i, hideTooltip: m || p }));
    let N = p && (null != g ? ` ${x}` : x);
    return (0, l.jsx)(u.E, {
        variant: `text-${o}/medium`,
        color: "none",
        className: a()(f.ps, s),
        children:
            ((t = null != h && !d && !p),
            m || t
                ? (0, l.jsxs)(l.Fragment, { children: [g, N] })
                : (0, l.jsxs)(G.A, {
                      delay: 150,
                      tooltipClassName: r,
                      className: f.Nu,
                      children: [g, !1 !== N && (0, l.jsx)("span", { className: f.ps, children: N })],
                  })),
    });
}
var P = n(835072),
    M = n(935154),
    L = n(652215),
    D = n(10862);
function U(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: s,
            iconClassName: i,
            hideText: r = !1,
            hideTooltip: o = !1,
            canTruncate: u = !0,
            showChannelName: c = !1,
        } = e,
        d = (0, M.S3)(L.clD.ONLINE),
        m = (0, E.Ay)(t),
        x = t.isDM() || t.isGroupDM(),
        h = x
            ? O.intl.string(O.t["9FaEzi"])
            : t.isGuildStageVoice()
              ? O.intl.string(O.t.QygGCN)
              : O.intl.string(O.t.msxteM),
        j = null != m ? `${h} (${m})` : h,
        p = c ? j : h;
    return (0, l.jsx)(y.A, {
        icon: (0, l.jsx)(D.A, { size: "custom", color: d, channel: t, className: a()(f.Kk, i) }),
        text: p,
        tooltipText: o ? void 0 : r ? j : x || c ? void 0 : (m ?? void 0),
        textVariant: n,
        textClassName: s,
        hideTooltip: o,
        canTruncate: u,
        "aria-label": j,
        hideText: r,
    });
}
function w(e) {
    let { textVariant: t, className: n, hasCustomStatusText: s, totalActivityCount: i } = e;
    return (0, l.jsxs)(u.E, {
        variant: t,
        className: a()(n, f.qi),
        color: s ? "status-positive" : "none",
        children: ["+", i - 1],
    });
}
function z(e) {
    let { textVariant: t, className: n } = e;
    return (0, l.jsx)(u.E, { variant: t, className: a()(f.Om, n), "aria-hidden": !0, children: "\u2022" });
}
function V(e) {
    let {
        user: t,
        activities: n,
        applicationStream: i,
        voiceChannel: u,
        textClassName: j,
        iconClassName: p,
        textSize: g = "xs",
        animateEmoji: A = !0,
        hasQuest: v = !1,
        hideEmoji: S = !1,
        hideTooltip: E = !1,
    } = e;
    (0, m.A)(t?.id);
    let C = i?.discoverable !== !1 ? i : null,
        T = (0, x.AO)(C),
        y = s.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === L.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        O = (0, h.Uk)("ActivityStatus"),
        G = s.useMemo(() => (null != y, null), [y, O]),
        _ = s.useMemo(
            () =>
                (0, r.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== L.$pd.CUSTOM_STATUS && t !== L.$pd.HANG_STATUS && n !== T?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, T?.name],
        ),
        M = n?.find((e) => e.name === T?.name),
        D = t?.bot === !0,
        V = (0, o.bG)([I.A], () => I.A.isBlockedOrIgnored(t?.id)),
        B = y?.state != null,
        F = null != C,
        J = !F && null != u,
        H = _.length + (F || J ? 1 : 0),
        K = H > 1,
        W = y?.state != null && "xs" === g;
    if (V) return null;
    function $() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = !0 === e || E;
        if (null != C)
            return (0, l.jsx)(k, {
                stream: C,
                game: M,
                textVariant: `text-${g}/medium`,
                textClassName: j,
                iconClassName: p,
                hideText: W,
                hideIcon: D,
                hideTooltip: t,
            });
        let n = _?.[0];
        return null != n
            ? (0, l.jsx)(P.A, {
                  activity: n,
                  textVariant: `text-${g}/medium`,
                  textClassName: j,
                  iconClassName: p,
                  hideText: W,
                  hideIcon: D,
                  hideTooltip: t,
              })
            : null != u
              ? (0, l.jsx)(U, {
                    channel: u,
                    textVariant: `text-${g}/medium`,
                    textClassName: j,
                    iconClassName: p,
                    hideText: W,
                    hideTooltip: t,
                })
              : null;
    }
    function X() {
        return (0, l.jsx)(w, {
            textVariant: `text-${g}/medium`,
            className: j,
            hasCustomStatusText: B,
            totalActivityCount: H,
        });
    }
    function Y() {
        if (0 === H) return null;
        if (K && !D) {
            let e, t;
            return E
                ? (0, l.jsxs)("div", { className: a()(f.ht, W && f.e7), children: [$(), X()] })
                : (0, l.jsx)(c.m, {
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
                                  (0, l.jsx)(k, { stream: C, game: n?.find(d.A), ...t, showChannelName: !0 }, "stream"),
                              ),
                          _.forEach((n, s) => {
                              e.push((0, l.jsx)(P.A, { activity: n, ...t }, `activity-${s}`));
                          }),
                          J && e.push((0, l.jsx)(U, { channel: u, ...t, showChannelName: !0 }, "voice")),
                          e),
                      children: (0, l.jsxs)("div", { className: a()(f.ht, W && f.e7), children: [$(!0), X()] }),
                  });
        }
        return $();
    }
    let q = a()(f.kL, { [f.Dk]: "xs" === g, [f.WV]: "sm" === g });
    return null != G
        ? (0, l.jsxs)("div", {
              className: q,
              children: [
                  null == G
                      ? null
                      : (0, l.jsx)(N, {
                            customStatusActivity: y,
                            textSize: g,
                            animateEmoji: A,
                            hideEmoji: S,
                            hideTooltip: E,
                            textClassName: j,
                            iconClassName: p,
                            tooltipClassName: q,
                            userId: t?.id,
                        }),
                  H > 0 && (0, l.jsx)(z, { textVariant: `text-${g}/normal`, className: j }),
                  Y(),
                  v && (0, l.jsx)(b, {}),
              ],
          })
        : (0, l.jsxs)("div", {
              className: q,
              children: [
                  Y(),
                  null != y && H > 0 && (0, l.jsx)(z, { textVariant: `text-${g}/normal`, className: j }),
                  null == y
                      ? null
                      : (0, l.jsx)(R, {
                            customStatusActivity: y,
                            textSize: g,
                            animateEmoji: A,
                            hideEmoji: S,
                            hideTooltip: E,
                            textClassName: j,
                            iconClassName: p,
                            tooltipClassName: q,
                        }),
                  v && (0, l.jsx)(b, {}),
              ],
          });
}
