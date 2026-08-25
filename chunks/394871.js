"use strict";
n.d(t, { A: () => F }), n(321073);
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(435558),
    o = n(834730),
    u = n(17928),
    c = n(866665),
    d = n(672979),
    h = n(87664),
    m = n(834757),
    f = n(430363),
    p = n(51183),
    g = n(287809),
    x = n(823854);
n(851883);
var A = n(607013);
function C(e) {
    let t,
        {
            customStatusActivity: n,
            iconClassName: s,
            textClassName: a,
            userId: d,
            textSize: h = "xs",
            animateEmoji: m = !0,
            hideEmoji: C = !1,
            hideTooltip: E = !1,
        } = e,
        I = n?.emoji,
        y = (function (e) {
            let { customStatusActivity: t, statusOwnerId: n, location: l } = e,
                s = i.useMemo(() => null, [t]),
                r = null == s || null == n ? null : n === s.senderId ? s.targetId : s.senderId,
                a = (0, u.bG)([g.default], () => (null != r ? g.default.getUser(r) : null), [r]),
                o = (0, u.bG)([x.A], () => (null == n ? null : x.A.getProgressForUserId(n)), [n]);
            return (0, f.Uk)(l)
                ? { presence: s, progress: o, statusTextOverride: (a?.globalName ?? a?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: d, location: "CustomStatusVoiceDare" }),
        S = y.statusTextOverride ?? n?.state,
        v = null != S && "" !== S,
        N = null;
    null == I || C || (N = (0, l.jsx)(p.A, { emoji: I, animate: m, className: s, hideTooltip: E || v }));
    let _ = v ? (null != N ? ` ${S}` : S) : null;
    return null == n
        ? null
        : (0, l.jsx)(o.E, {
              variant: `text-${h}/medium`,
              color: "none",
              className: r()(A.ps, a),
              children:
                  ((t = null != I && !C && !v),
                  E || t
                      ? (0, l.jsxs)(l.Fragment, { children: [N, _] })
                      : null != y.presence
                        ? (0, l.jsx)(c.m, { delay: 150, children: (0, l.jsxs)("span", { children: [N, _] }) })
                        : (0, l.jsxs)("span", { children: [N, _] })),
          });
}
var E = n(994500),
    I = n(577473),
    y = n(661531);
function S(e) {
    let { className: t } = e;
    return (0, l.jsx)(I.r, {
        className: r()(A.tt, t),
        size: "custom",
        height: 14,
        width: 14,
        color: y.A.unsafe_rawColors.BRAND_345.css,
    });
}
var v = n(748562),
    N = n(47167),
    _ = n(734057),
    T = n(864436),
    j = n(200041),
    b = n(375708);
function R(e) {
    let {
            stream: t,
            game: n,
            textVariant: i,
            textClassName: s,
            iconClassName: r,
            hideIcon: a = !1,
            hideText: o = !1,
            hideTooltip: c = !1,
            canTruncate: d = !0,
            showChannelName: h = !1,
        } = e,
        m = (0, u.bG)([_.A], () => _.A.getChannel(t.channelId)),
        f = (0, N.Ay)(m),
        p = n?.name === "" ? null : n?.name,
        g = null != p ? p : b.intl.string(b.t.eXan7B),
        x = null != f ? `${g} (${f})` : g,
        A = h ? x : g;
    return (0, l.jsx)(j.A, {
        icon: a ? void 0 : (0, l.jsx)(T.A, { icon: v.U, className: r }),
        text: A,
        tooltipText: c ? void 0 : x,
        textVariant: i,
        className: s,
        canTruncate: d,
        hideTooltip: c,
        "aria-label": x,
        hideText: o,
    });
}
var O = n(3026),
    M = n(208971);
function L(e) {
    let t,
        {
            customStatusActivity: n,
            textClassName: i,
            iconClassName: s,
            tooltipClassName: a,
            textSize: u = "xs",
            animateEmoji: c = !0,
            hideEmoji: d = !1,
            hideTooltip: h = !1,
        } = e,
        m = (0, M.G)(n?.state);
    if (null == n) return null;
    let f = n?.emoji,
        g = null != m && "" !== m,
        x = null;
    null == f || d || (x = (0, l.jsx)(p.A, { emoji: f, animate: c, className: s, hideTooltip: h || g }));
    let C = g && (null != x ? ` ${m}` : m);
    return (0, l.jsx)(o.E, {
        variant: `text-${u}/medium`,
        color: "none",
        className: r()(A.ps, i),
        children:
            ((t = null != f && !d && !g),
            h || t
                ? (0, l.jsxs)(l.Fragment, { children: [x, C] })
                : (0, l.jsxs)(O.A, {
                      delay: 150,
                      tooltipClassName: a,
                      className: A.Nu,
                      children: [x, !1 !== C && (0, l.jsx)("span", { className: A.ps, children: C })],
                  })),
    });
}
var w = n(835072),
    k = n(935154),
    P = n(652215),
    D = n(10862);
function U(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: i,
            iconClassName: s,
            hideText: a = !1,
            hideTooltip: o = !1,
            canTruncate: u = !0,
            showChannelName: c = !1,
        } = e,
        d = (0, k.S3)(P.clD.ONLINE),
        h = (0, N.Ay)(t),
        m =
            t.isDM() || t.isGroupDM()
                ? b.intl.string(b.t["9FaEzi"])
                : t.isGuildStageVoice()
                  ? b.intl.string(b.t.QygGCN)
                  : b.intl.string(b.t.msxteM),
        f = null != h ? `${m} (${h})` : m,
        p = c ? f : m;
    return (0, l.jsx)(j.A, {
        icon: (0, l.jsx)(D.A, { size: "custom", color: d, channel: t, className: r()(A.Kk, s) }),
        text: p,
        tooltipText: o ? void 0 : f,
        textVariant: n,
        textClassName: i,
        hideTooltip: o,
        canTruncate: u,
        "aria-label": f,
        hideText: a,
    });
}
function G(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: s } = e;
    return (0, l.jsxs)(o.E, {
        variant: t,
        className: r()(n, A.qi),
        color: i ? "status-positive" : "none",
        children: ["+", s - 1],
    });
}
function V(e) {
    let { textVariant: t, className: n } = e;
    return (0, l.jsx)(o.E, { variant: t, className: r()(A.Om, n), "aria-hidden": !0, children: "\u2022" });
}
function F(e) {
    let {
        user: t,
        activities: n,
        applicationStream: s,
        voiceChannel: o,
        textClassName: p,
        iconClassName: g,
        textSize: x = "xs",
        animateEmoji: I = !0,
        hasQuest: y = !1,
        hideEmoji: v = !1,
        hideTooltip: N = !1,
    } = e;
    (0, h.A)(t?.id);
    let _ = s?.discoverable !== !1 ? s : null,
        T = (0, m.AO)(_),
        j = i.useMemo(() => {
            let e = n?.find((e) => {
                let { type: t } = e;
                return t === P.$pd.CUSTOM_STATUS;
            });
            if (null == e) return null;
            let t = e.state?.trim() ?? null;
            return null == ("" === t ? null : t) && null == e.emoji ? null : e;
        }, [n]),
        b = (0, f.Uk)("ActivityStatus"),
        O = i.useMemo(() => (null != j, null), [j, b]),
        M = i.useMemo(
            () =>
                (0, a.uniqWith)(
                    n?.filter((e) => {
                        let { type: t, name: n } = e;
                        return t !== P.$pd.CUSTOM_STATUS && t !== P.$pd.HANG_STATUS && n !== T?.name;
                    }) ?? [],
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
            [n, T?.name],
        ),
        k = n?.find((e) => e.name === T?.name),
        D = t?.bot === !0,
        F = (0, u.bG)([E.A], () => E.A.isBlockedOrIgnored(t?.id)),
        H = j?.state != null,
        B = null != _,
        W = !B && null != o,
        K = M.length + (B || W ? 1 : 0),
        z = K > 1,
        Z = j?.state != null && "xs" === x;
    if (F) return null;
    function Y() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = !0 === e || N;
        if (null != _)
            return (0, l.jsx)(R, {
                stream: _,
                game: k,
                textVariant: `text-${x}/medium`,
                textClassName: p,
                iconClassName: g,
                hideText: Z,
                hideIcon: D,
                hideTooltip: t,
            });
        let n = M?.[0];
        return null != n
            ? (0, l.jsx)(w.A, {
                  activity: n,
                  textVariant: `text-${x}/medium`,
                  textClassName: p,
                  iconClassName: g,
                  hideText: Z,
                  hideIcon: D,
                  hideTooltip: t,
              })
            : null != o
              ? (0, l.jsx)(U, {
                    channel: o,
                    textVariant: `text-${x}/medium`,
                    textClassName: p,
                    iconClassName: g,
                    hideText: Z,
                    hideTooltip: t,
                })
              : null;
    }
    function q() {
        return (0, l.jsx)(G, {
            textVariant: `text-${x}/medium`,
            className: p,
            hasCustomStatusText: H,
            totalActivityCount: K,
        });
    }
    function J() {
        if (0 === K) return null;
        if (z && !D) {
            let e, t;
            return N
                ? (0, l.jsxs)("div", { className: r()(A.ht, Z && A.e7), children: [Y(), q()] })
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
                          null != _ &&
                              e.push(
                                  (0, l.jsx)(R, { stream: _, game: n?.find(d.A), ...t, showChannelName: !0 }, "stream"),
                              ),
                          M.forEach((n, i) => {
                              e.push((0, l.jsx)(w.A, { activity: n, ...t }, `activity-${i}`));
                          }),
                          W && e.push((0, l.jsx)(U, { channel: o, ...t, showChannelName: !0 }, "voice")),
                          e),
                      children: (0, l.jsxs)("div", { className: r()(A.ht, Z && A.e7), children: [Y(!0), q()] }),
                  });
        }
        return Y();
    }
    let $ = r()(A.kL, { [A.Dk]: "xs" === x, [A.WV]: "sm" === x });
    return null != O
        ? (0, l.jsxs)("div", {
              className: $,
              children: [
                  null == O
                      ? null
                      : (0, l.jsx)(C, {
                            customStatusActivity: j,
                            textSize: x,
                            animateEmoji: I,
                            hideEmoji: v,
                            hideTooltip: N,
                            textClassName: p,
                            iconClassName: g,
                            tooltipClassName: $,
                            userId: t?.id,
                        }),
                  K > 0 && (0, l.jsx)(V, { textVariant: `text-${x}/normal`, className: p }),
                  J(),
                  y && (0, l.jsx)(S, {}),
              ],
          })
        : (0, l.jsxs)("div", {
              className: $,
              children: [
                  J(),
                  null != j && K > 0 && (0, l.jsx)(V, { textVariant: `text-${x}/normal`, className: p }),
                  null == j
                      ? null
                      : (0, l.jsx)(L, {
                            customStatusActivity: j,
                            textSize: x,
                            animateEmoji: I,
                            hideEmoji: v,
                            hideTooltip: N,
                            textClassName: p,
                            iconClassName: g,
                            tooltipClassName: $,
                        }),
                  y && (0, l.jsx)(S, {}),
              ],
          });
}
