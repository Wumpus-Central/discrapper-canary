s.d(t, { A: () => et, o: () => ee });
var l = s(477900),
    n = s(582128),
    a = s(503698),
    r = s.n(a),
    i = s(536637),
    o = s.n(i),
    c = s(534890),
    u = s(638916),
    h = s(642846),
    m = s(922016),
    d = s(939249),
    g = s(176781),
    C = s(834730),
    p = s(531142),
    E = s(191023),
    x = s(812282),
    N = s(633018),
    A = s(831544),
    S = s(793574),
    f = s(688810),
    D = s(613373),
    M = s(584669);
s(321073);
let j = String.raw`(?:\d{2,}:)?\d{2}:\d{2}\.\d{3}`,
    _ = new RegExp(String.raw`^\s*(${j})\s*-->\s*(${j})`);
function I(e) {
    let t = 0;
    for (let s of e.split(":")) t = 60 * t + parseFloat(s);
    return t;
}
let v = [];
var L = s(562756);
let P = { innerRef: null, onMouseEnter: () => {}, onMouseLeave: () => {} };
function R(e) {
    let { attachment: t, timestampMs: s, children: n } = e,
        a = t?.spritesheet_vtt_url;
    return null == a || 0 === a.length ? n(P) : (0, l.jsx)(O, { vttUrl: a, timestampMs: s, children: n });
}
function O(e) {
    let { vttUrl: t, timestampMs: s, children: a } = e,
        r = n.useRef(null),
        [i, o] = n.useState(!1),
        c = (function (e, t) {
            let [s, l] = n.useState(null);
            return (
                n.useEffect(() => {
                    if (!e || null == t || 0 === t.length || s?.url === t) return;
                    let n = new AbortController();
                    return (
                        (async () => {
                            try {
                                let e = await fetch(t, { signal: n.signal });
                                if (!e.ok) throw Error(`Sprite sheet VTT fetch failed: ${e.status}`);
                                let s = await e.text();
                                l({
                                    url: t,
                                    cues: (function (e) {
                                        let t = [],
                                            s = e.split(/\r?\n/);
                                        for (let e = 0; e < s.length; e++) {
                                            let l = s[e].match(_);
                                            if (null == l) continue;
                                            let n = [];
                                            for (let t = e + 1; t < s.length && s[t].trim().length > 0; t++)
                                                n.push(s[t].trim());
                                            let a = (0, D.xx)(n.join("\n"));
                                            null != a && t.push({ startSec: I(l[1]), endSec: I(l[2]), ...a });
                                        }
                                        return t.sort((e, t) => e.startSec - t.startSec), t;
                                    })(s),
                                });
                            } catch {}
                        })(),
                        () => n.abort()
                    );
                }, [e, t, s?.url]),
                null != s && s.url === t ? s.cues : v
            );
        })(i, t),
        u = (0, D.B8)(c, s / 1e3),
        h = u?.imageUrl,
        [d, g] = n.useState(null);
    n.useEffect(() => {
        if (null == h) return;
        let e = new Image();
        return (
            (e.onload = () => g(h)),
            (e.src = h),
            () => {
                e.onload = null;
            }
        );
    }, [h]);
    let C = n.useCallback(() => o(!0), []),
        p = n.useCallback(() => o(!1), []),
        E = n.useCallback(
            (e) => {
                let { setPopoutRef: t } = e;
                return null == u || u.w <= 0 || u.h <= 0
                    ? null
                    : (0, l.jsx)("div", { ref: t, className: L.F, style: (0, M.u)(u), "aria-hidden": !0 });
            },
            [u],
        ),
        x = { innerRef: r, onMouseEnter: C, onMouseLeave: p },
        N = null != u && u.w > 0 && u.h > 0 && d === u.imageUrl;
    return (0, l.jsx)(m.Y, {
        targetElementRef: r,
        renderPopout: E,
        animationPosition: "bottom",
        shouldShow: i && N,
        position: "top",
        align: "center",
        disablePointerEvents: !0,
        children: () => a(x),
    });
}
var U = s(427930),
    w = s(387408),
    T = s(427209),
    y = s(650019),
    k = s(969632),
    J = s(9842),
    b = s(68935),
    z = s(486020),
    G = s(58703),
    F = s(403362),
    V = s(860227),
    $ = s(438729),
    B = s(943220),
    H = s(943815),
    K = s(838541),
    X = s(652215),
    Y = s(375708),
    q = s(318626),
    Q = s(165648);
function Z(e) {
    let { width: t = 12, height: s = 8, color: n = "currentColor", className: a, foreground: r } = e;
    return (0, l.jsx)("svg", {
        className: a,
        width: t,
        height: s,
        viewBox: "0 0 12 8",
        children: (0, l.jsx)("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: r,
            fill: n,
        }),
    });
}
function W(e) {
    let { width: t = 18, height: s = 18, className: n, foreground: a } = e;
    return (0, l.jsx)("svg", {
        className: n,
        width: t,
        height: s,
        viewBox: "0 0 18 18",
        children: (0, l.jsx)("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: a,
        }),
    });
}
function ee(e, t, s, n, a, i) {
    let o,
        c,
        u,
        h,
        m = (0, w.A)(e),
        { trailingIconClass: d, leadingIconClass: g, iconSize: C } = i,
        p = null == t || "" === t || (Array.isArray(t) && 0 === t.length),
        S = (0, b.o6)(m).length > 0,
        f = null != m.interaction,
        D = m.hasFlag(X.pr7.IS_VOICE_MESSAGE),
        M = m.isPoll(),
        j = m.type === X.lAJ.POLL_RESULT;
    return (
        (0, U.A)(e) && (h = (0, l.jsx)(T.A, { size: "custom", className: g, width: C, height: C })),
        s
            ? (o = Y.intl.string(Y.t.XAkOo2))
            : n
              ? (o = Y.intl.string(Y.t["G7p6v/"]))
              : m.type === X.lAJ.CHANNEL_PINNED_MESSAGE
                ? (o = Y.intl.string(Y.t.sCfDDl))
                : p
                  ? M
                      ? (c = (0, l.jsx)("div", { className: r()(q.Io, Q.PT), children: m?.poll?.question?.text }))
                      : j
                        ? (o = (0, k.Il)(m))
                        : S
                          ? (o = Y.intl.string(Y.t.kHdYCW))
                          : f
                            ? (o = Y.intl.string(Y.t["E+6SSY"]))
                            : D
                              ? (o = Y.intl.string(Y.t.XC3A52))
                              : m.hasFlag(X.pr7.IS_COMPONENTS_V2)
                                ? (o = Y.intl.string(Y.t.Xxat6S))
                                : ((o = Y.intl.string(Y.t["6hGo0c"])),
                                  (u = (0, l.jsx)(E.ImageIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: d,
                                      width: C,
                                      height: C,
                                  })))
                  : (c = (0, l.jsx)($.Ay, { message: m, content: t, className: a, compact: !0 })),
        S
            ? (u = (0, l.jsx)(x.s, { size: "custom", color: "currentColor", className: d, width: C, height: C }))
            : f
              ? (u = (0, l.jsx)(N.k, { size: "custom", color: "currentColor", className: d, width: C, height: C }))
              : D
                ? (u = (0, l.jsx)(A.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      className: d,
                      width: (19 / 24) * C,
                      height: C,
                  }))
                : (m.attachments.length > 0 || m.embeds.length > 0) &&
                  !j &&
                  (u = (0, l.jsx)(E.ImageIcon, {
                      size: "custom",
                      color: "currentColor",
                      className: d,
                      width: C,
                      height: C,
                  })),
        { contentPlaceholder: o, renderedContent: c, trailingIcon: u, leadingIcon: h }
    );
}
function et(e) {
    let t,
        {
            repliedAuthor: s,
            baseAuthor: a,
            baseMessage: i,
            referencedMessage: E,
            renderPopout: x,
            isReplySpineClickable: N,
            showReplySpine: A,
        } = e,
        [D, M] = n.useState(!1),
        j = n.useMemo(() => (null != x && E.state === J.a.LOADED ? (e) => x(e, E.message) : void 0), [E, x]),
        _ = n.useCallback(() => M((e) => !e), []),
        I = (function (e, t, s) {
            let {
                    referencedMessage: a,
                    channel: i,
                    compact: o,
                    isReplyAuthorBlocked: d,
                    repliedAuthor: g,
                    showAvatarPopout: C,
                    onClickAvatar: p,
                    onContextMenu: E,
                    onPopoutRequestClose: x,
                } = e,
                { analyticsLocations: N } = (0, f.Ay)(S.A.AVATAR),
                A = n.useRef(null),
                D = a.state === J.a.LOADED && a.message.hasFlag(X.pr7.HIDDEN_SUSPENDED_USER);
            if (o || a.state !== J.a.LOADED || d || D)
                return s === X.lAJ.CONTEXT_MENU_COMMAND
                    ? (0, l.jsx)("div", { className: q.Do, children: (0, l.jsx)(c.ChatIcon, { size: "xs" }) })
                    : (0, l.jsx)("div", { className: q.Cz, children: (0, l.jsx)(Z, { className: q.UE }) });
            if (
                a.message.type === X.lAJ.USER_JOIN ||
                a.message.type === X.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                a.message.type === X.lAJ.GUILD_GAMING_STATS_PROMPT
            )
                return (0, l.jsx)(W, { className: q.VJ });
            if (a.message.type === X.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, l.jsx)(u.q, { size: "md", color: "currentColor", className: q.Cw });
            if (a.message.type === X.lAJ.POLL_RESULT)
                return (0, l.jsx)(h.Y, { className: q.Vs, width: K.eJ, height: K.eJ, size: "custom" });
            function M() {
                var e, t;
                return a.state !== J.a.LOADED
                    ? null
                    : ((e = a.message.author),
                      (t = i.guild_id),
                      (0, l.jsx)("img", {
                          alt: "",
                          src:
                              g?.guildMemberAvatar != null && null != t
                                  ? (0, z.s7)({ guildId: t, userId: e.id, avatar: g.guildMemberAvatar })
                                  : e.getAvatarURL(t, 16),
                          onClick: p,
                          onContextMenu: E,
                          className: r()({ [q.mf]: !0, [q.vk]: null != p }),
                          ref: A,
                      }));
            }
            return null != t && null != C
                ? (0, l.jsx)(f.f5, {
                      value: N,
                      children: (0, l.jsx)(m.Y, {
                          targetElementRef: A,
                          renderPopout: t,
                          shouldShow: C,
                          position: "right",
                          onRequestClose: x,
                          children: M,
                      }),
                  })
                : (0, l.jsx)(f.f5, { value: N, children: M() });
        })(e, j, i.type),
        v = (function (e, t) {
            let {
                    baseMessage: s,
                    channel: n,
                    referencedMessage: a,
                    showUsernamePopout: r,
                    onClickUsername: i,
                    onContextMenu: o,
                    onPopoutRequestClose: c,
                } = e,
                u = a?.state === J.a.LOADED ? a.message : void 0;
            return null == u ||
                u.hasFlag(X.pr7.HIDDEN_SUSPENDED_USER) ||
                u.type === X.lAJ.USER_JOIN ||
                u.type === X.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                u.type === X.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
                u.type === X.lAJ.GUILD_GAMING_STATS_PROMPT ||
                u.type === X.lAJ.POLL_RESULT
                ? null
                : (0, l.jsx)(B.A, {
                      message: u,
                      channel: n,
                      compact: !0,
                      withMentionPrefix: null != u && !!s.mentions.includes(u.author.id),
                      showPopout: r,
                      renderPopout: t,
                      onClick: i,
                      onContextMenu: o,
                      onPopoutRequestClose: c,
                      isRepliedMessage: !0,
                  });
        })(e, j),
        L = (function (e, t, s) {
            let {
                    baseMessage: n,
                    content: a,
                    referencedMessage: i,
                    isReplyAuthorBlocked: o,
                    isReplyAuthorIgnored: c,
                    onClickReply: u,
                } = e,
                h = i.state !== J.a.DELETED ? u : void 0;
            switch (i.state) {
                case J.a.LOADED: {
                    let e = (0, y.A)(n.mediaMention, i.message.attachments);
                    if (null != e) {
                        let a = n.mediaMention;
                        return (0, l.jsx)(R, {
                            attachment: e.attachment,
                            timestampMs: a?.timestamp ?? 0,
                            children: (n) => {
                                let { innerRef: a, onMouseEnter: i, onMouseLeave: o } = n;
                                return (0, l.jsx)(d.D, {
                                    className: r()(q.$y, q.vk, { [q.FQ]: t }),
                                    onClick: h,
                                    onMouseEnter: () => {
                                        s(), i();
                                    },
                                    onMouseLeave: () => {
                                        s(), o();
                                    },
                                    children: (0, l.jsxs)("span", {
                                        className: q.wl,
                                        children: [
                                            e.isClip &&
                                                (0, l.jsx)(g.x, { size: "xs", color: "currentColor", className: q.te }),
                                            (0, l.jsx)(C.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-default",
                                                className: q.CD,
                                                children: e.title ?? Y.intl.string(Y.t.Cyxddp),
                                            }),
                                            (0, l.jsxs)(C.E, {
                                                ref: a,
                                                variant: "text-sm/normal",
                                                color: "text-link",
                                                children: ["@", e.timestamp],
                                            }),
                                        ],
                                    }),
                                });
                            },
                        });
                    }
                    let {
                        contentPlaceholder: u,
                        renderedContent: m,
                        trailingIcon: E,
                        leadingIcon: x,
                    } = ee(i.message, a, o, c, q.Io, {
                        trailingIconClass: q.$4,
                        leadingIconClass: q.Vs,
                        iconSize: K.eJ,
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            x,
                            (0, l.jsx)(d.D, {
                                className: r()(q.$y, q.vk, { [q.FQ]: t }),
                                onClick: h,
                                onMouseEnter: s,
                                onMouseLeave: s,
                                children: (0, l.jsx)(p.R, {
                                    children: m ?? (0, l.jsx)("span", { className: q.MK, children: u }),
                                }),
                            }),
                            E,
                        ],
                    });
                }
                case J.a.NOT_LOADED:
                    return (0, l.jsx)(d.D, {
                        className: r()(q.$y, q.vk),
                        onClick: h,
                        children: (0, l.jsx)("span", { className: q.MK, children: Y.intl.string(Y.t["1i+hMi"]) }),
                    });
                case J.a.DELETED:
                    return (0, l.jsx)("div", {
                        className: q.$y,
                        children: (0, l.jsx)("span", { className: q.MK, children: Y.intl.string(Y.t.mE3KJN) }),
                    });
                default:
                    (0, F.xb)(i);
            }
        })(e, D, _),
        P = n.useMemo(() => (e.compact ? (0, H.A)((0, G.i$)(o()(), "LT")) : null), [e.compact]),
        O = E.state === J.a.LOADED && E.message.hasFlag(X.pr7.HIDDEN_SUSPENDED_USER);
    null == s ||
        null == a ||
        O ||
        (t = Y.intl.formatToPlainString(Y.t.RhbQ2K, { author: a?.nick, repliedAuthor: s?.nick }));
    let U = i.type === X.lAJ.CONTEXT_MENU_COMMAND;
    return (0, l.jsxs)("div", {
        id: (0, V.nS)(i),
        className: r()(q.JZ, P, U ? q.C4 : { [q.NB]: !N && A }),
        "aria-label": t,
        children: [
            N &&
                A &&
                (0, l.jsx)(d.D, {
                    tag: "div",
                    "aria-label": Y.intl.string(Y.t.dpjpOp),
                    className: r()(q.Uo, { [q.xe]: D }),
                    onClick: e.onClickReply,
                    onMouseEnter: _,
                    onMouseLeave: _,
                }),
            I,
            v,
            L,
        ],
    });
}
