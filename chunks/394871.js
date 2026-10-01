(n.d(t, { A: () => B }), n(321073));
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(435558),
    o = n(17928),
    u = n(834730),
    d = n(866665),
    c = n(672979),
    m = n(87664),
    x = n(834757),
    h = n(430363),
    j = n(51183),
    g = n(287809),
    p = n(823854);
n(851883);
var f = n(607013);
function N(e) {
    let t,
        {
            customStatusActivity: n,
            iconClassName: s,
            textClassName: r,
            userId: c,
            textSize: m = "xs",
            animateEmoji: x = !0,
            hideEmoji: N = !1,
            hideTooltip: A = !1,
        } = e,
        I = n?.emoji,
        v = (function (e) {
            let { customStatusActivity: t, statusOwnerId: n, location: l } = e,
                s = i.useMemo(() => null, [t]),
                a = null == s || null == n ? null : n === s.senderId ? s.targetId : s.senderId,
                r = (0, o.bG)([g.default], () => (null != a ? g.default.getUser(a) : null), [a]),
                u = (0, o.bG)([p.A], () => (null == n ? null : p.A.getProgressForUserId(n)), [n]);
            return (0, h.Uk)(l)
                ? { presence: s, progress: u, statusTextOverride: (r?.globalName ?? r?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: c, location: "CustomStatusVoiceDare" }),
        b = v.statusTextOverride ?? n?.state,
        S = null != b && "" !== b,
        E = null;
    null == I || N || (E = (0, l.jsx)(j.A, { emoji: I, animate: x, className: s, hideTooltip: A || S }));
    let C = S ? (null != E ? ` ${b}` : b) : null;
    return null == n
        ? null
        : (0, l.jsx)(u.E, {
              variant: `text-${m}/medium`,
              color: "none",
              className: a()(f.ps, r),
              children:
                  ((t = null != I && !N && !S),
                  A || t
                      ? (0, l.jsxs)(l.Fragment, { children: [E, C] })
                      : null != v.presence
                        ? (0, l.jsx)(d.m, { delay: 150, children: (0, l.jsxs)("span", { children: [E, C] }) })
                        : (0, l.jsxs)("span", { children: [E, C] })),
          });
}
var A = n(994500),
    I = n(577473),
    v = n(661531);
function b(e) {
    let { className: t } = e;
    return (0, l.jsx)(I.r, {
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
    O = n(375708);
function _(e) {
    let {
            stream: t,
            game: n,
            textVariant: i,
            textClassName: s,
            iconClassName: a,
            hideIcon: r = !1,
            hideText: u = !1,
            hideTooltip: d = !1,
            canTruncate: c = !0,
            showChannelName: m = !1,
        } = e,
        x = (0, o.bG)([C.A], () => C.A.getChannel(t.channelId)),
        h = (0, E.Ay)(x),
        j = n?.name === "" ? null : n?.name,
        g = null != j ? j : O.intl.string(O.t.eXan7B),
        p = null != h ? `${g} (${h})` : g,
        f = m ? p : g;
    return (0, l.jsx)(y.A, {
        icon: r ? void 0 : (0, l.jsx)(T.A, { icon: S.U, className: a }),
        text: f,
        tooltipText: d ? void 0 : u ? p : m ? void 0 : (h ?? void 0),
        textVariant: i,
        className: s,
        canTruncate: c,
        hideTooltip: d,
        "aria-label": p,
        hideText: u,
    });
}
var R = n(3026),
    G = n(208971);
function k(e) {
    let t,
        {
            customStatusActivity: n,
            textClassName: i,
            iconClassName: s,
            tooltipClassName: r,
            textSize: o = "xs",
            animateEmoji: d = !0,
            hideEmoji: c = !1,
            hideTooltip: m = !1,
        } = e,
        x = (0, G.G)(n?.state);
    if (null == n) return null;
    let h = n?.emoji,
        g = null != x && "" !== x,
        p = null;
    null == h || c || (p = (0, l.jsx)(j.A, { emoji: h, animate: d, className: s, hideTooltip: m || g }));
    let N = g && (null != p ? ` ${x}` : x);
    return (0, l.jsx)(u.E, {
        variant: `text-${o}/medium`,
        color: "none",
        className: a()(f.ps, i),
        children:
            ((t = null != h && !c && !g),
            m || t
                ? (0, l.jsxs)(l.Fragment, { children: [p, N] })
                : (0, l.jsxs)(R.A, {
                      delay: 150,
                      tooltipClassName: r,
                      className: f.Nu,
                      children: [p, !1 !== N && (0, l.jsx)("span", { className: f.ps, children: N })],
                  })),
    });
}
var P = n(835072),
    M = n(935154),
    L = n(652215),
    D = n(10862);
function w(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: i,
            iconClassName: s,
            hideText: r = !1,
            hideTooltip: o = !1,
            canTruncate: u = !0,
            showChannelName: d = !1,
        } = e,
        c = (0, M.S3)(L.clD.ONLINE),
        m = (0, E.Ay)(t),
        x = t.isDM() || t.isGroupDM(),
        h = x
            ? O.intl.string(O.t["9FaEzi"])
            : t.isGuildStageVoice()
              ? O.intl.string(O.t.QygGCN)
              : O.intl.string(O.t.msxteM),
        j = null != m ? `${h} (${m})` : h,
        g = d ? j : h;
    return (0, l.jsx)(y.A, {
        icon: (0, l.jsx)(D.A, { size: "custom", color: c, channel: t, className: a()(f.Kk, s) }),
        text: g,
        tooltipText: o ? void 0 : r ? j : x || d ? void 0 : (m ?? void 0),
        textVariant: n,
        textClassName: i,
        hideTooltip: o,
        canTruncate: u,
        "aria-label": j,
        hideText: r,
    });
}
function U(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: s } = e;
    return (0, l.jsxs)(u.E, {
        variant: t,
        className: a()(n, f.qi),
        color: i ? "status-positive" : "none",
        children: ["+", s - 1],
    });
}
function z(e) {
    let { textVariant: t, className: n } = e;
    return (0, l.jsx)(u.E, { variant: t, className: a()(f.Om, n), "aria-hidden": !0, children: "\u2022" });
}
function B(e) {
    let {
        user: t,
        activities: n,
        applicationStream: s,
        voiceChannel: u,
        textClassName: j,
        iconClassName: g,
        textSize: p = "xs",
        animateEmoji: I = !0,
        hasQuest: v = !1,
        hideEmoji: S = !1,
        hideTooltip: E = !1,
    } = e;
    (0, m.A)(t?.id);
    let C = s?.discoverable !== !1 ? s : null,
        T = (0, x.AO)(C),
        y = i.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === L.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        O = (0, h.Uk)("ActivityStatus"),
        R = i.useMemo(() => (null != y, null), [y, O]),
        G = i.useMemo(
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
        B = (0, o.bG)([A.A], () => A.A.isBlockedOrIgnored(t?.id)),
        V = y?.state != null,
        F = null != C,
        H = !F && null != u,
        J = G.length + (F || H ? 1 : 0),
        W = J > 1,
        K = y?.state != null && "xs" === p;
    if (B) return null;
    function Y() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = !0 === e || E;
        if (null != C)
            return (0, l.jsx)(_, {
                stream: C,
                game: M,
                textVariant: `text-${p}/medium`,
                textClassName: j,
                iconClassName: g,
                hideText: K,
                hideIcon: D,
                hideTooltip: t,
            });
        let n = G?.[0];
        return null != n
            ? (0, l.jsx)(P.A, {
                  activity: n,
                  textVariant: `text-${p}/medium`,
                  textClassName: j,
                  iconClassName: g,
                  hideText: K,
                  hideIcon: D,
                  hideTooltip: t,
              })
            : null != u
              ? (0, l.jsx)(w, {
                    channel: u,
                    textVariant: `text-${p}/medium`,
                    textClassName: j,
                    iconClassName: g,
                    hideText: K,
                    hideTooltip: t,
                })
              : null;
    }
    function $() {
        return (0, l.jsx)(U, {
            textVariant: `text-${p}/medium`,
            className: j,
            hasCustomStatusText: V,
            totalActivityCount: J,
        });
    }
    function q() {
        if (0 === J) return null;
        if (W && !D) {
            let e, t;
            return E
                ? (0, l.jsxs)("div", { className: a()(f.ht, K && f.e7), children: [Y(), $()] })
                : (0, l.jsx)(d.m, {
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
                                  (0, l.jsx)(_, { stream: C, game: n?.find(c.A), ...t, showChannelName: !0 }, "stream"),
                              ),
                          G.forEach((n, i) => {
                              e.push((0, l.jsx)(P.A, { activity: n, ...t }, `activity-${i}`));
                          }),
                          H && e.push((0, l.jsx)(w, { channel: u, ...t, showChannelName: !0 }, "voice")),
                          e),
                      children: (0, l.jsxs)("div", { className: a()(f.ht, K && f.e7), children: [Y(!0), $()] }),
                  });
        }
        return Y();
    }
    let X = a()(f.kL, { [f.Dk]: "xs" === p, [f.WV]: "sm" === p });
    return null != R
        ? (0, l.jsxs)("div", {
              className: X,
              children: [
                  null == R
                      ? null
                      : (0, l.jsx)(N, {
                            customStatusActivity: y,
                            textSize: p,
                            animateEmoji: I,
                            hideEmoji: S,
                            hideTooltip: E,
                            textClassName: j,
                            iconClassName: g,
                            tooltipClassName: X,
                            userId: t?.id,
                        }),
                  J > 0 && (0, l.jsx)(z, { textVariant: `text-${p}/normal`, className: j }),
                  q(),
                  v && (0, l.jsx)(b, {}),
              ],
          })
        : (0, l.jsxs)("div", {
              className: X,
              children: [
                  q(),
                  null != y && J > 0 && (0, l.jsx)(z, { textVariant: `text-${p}/normal`, className: j }),
                  null == y
                      ? null
                      : (0, l.jsx)(k, {
                            customStatusActivity: y,
                            textSize: p,
                            animateEmoji: I,
                            hideEmoji: S,
                            hideTooltip: E,
                            textClassName: j,
                            iconClassName: g,
                            tooltipClassName: X,
                        }),
                  v && (0, l.jsx)(b, {}),
              ],
          });
}
