l.d(t, { A: () => et, o: () => ee });
var s = l(477900),
    n = l(582128),
    a = l(503698),
    r = l.n(a),
    i = l(989349),
    o = l.n(i),
    c = l(534890),
    u = l(638916),
    h = l(642846),
    m = l(922016),
    d = l(939249),
    g = l(176781),
    C = l(834730),
    p = l(531142),
    x = l(191023),
    A = l(812282),
    N = l(633018),
    f = l(831544),
    E = l(793574),
    M = l(688810),
    j = l(613373),
    S = l(584669);
l(321073);
let v = String.raw`(?:\d{2,}:)?\d{2}:\d{2}\.\d{3}`,
    I = new RegExp(String.raw`^\s*(${v})\s*-->\s*(${v})`);
function _(e) {
    let t = 0;
    for (let l of e.split(":")) t = 60 * t + parseFloat(l);
    return t;
}
let L = [];
var P = l(562756);
let R = { innerRef: null, onMouseEnter: () => {}, onMouseLeave: () => {} };
function D(e) {
    let { attachment: t, timestampMs: l, children: n } = e,
        a = t?.spritesheet_vtt_url;
    return null == a || 0 === a.length ? n(R) : (0, s.jsx)(O, { vttUrl: a, timestampMs: l, children: n });
}
function O(e) {
    let { vttUrl: t, timestampMs: l, children: a } = e,
        r = n.useRef(null),
        [i, o] = n.useState(!1),
        c = (function (e, t) {
            let [l, s] = n.useState(null);
            return (
                n.useEffect(() => {
                    if (!e || null == t || 0 === t.length || l?.url === t) return;
                    let n = new AbortController();
                    return (
                        (async () => {
                            try {
                                let e = await fetch(t, { signal: n.signal });
                                if (!e.ok) throw Error(`Sprite sheet VTT fetch failed: ${e.status}`);
                                let l = await e.text();
                                s({
                                    url: t,
                                    cues: (function (e) {
                                        let t = [],
                                            l = e.split(/\r?\n/);
                                        for (let e = 0; e < l.length; e++) {
                                            let s = l[e].match(I);
                                            if (null == s) continue;
                                            let n = [];
                                            for (let t = e + 1; t < l.length && l[t].trim().length > 0; t++)
                                                n.push(l[t].trim());
                                            let a = (0, j.xx)(n.join("\n"));
                                            null != a && t.push({ startSec: _(s[1]), endSec: _(s[2]), ...a });
                                        }
                                        return t.sort((e, t) => e.startSec - t.startSec), t;
                                    })(l),
                                });
                            } catch {}
                        })(),
                        () => n.abort()
                    );
                }, [e, t, l?.url]),
                null != l && l.url === t ? l.cues : L
            );
        })(i, t),
        u = (0, j.B8)(c, l / 1e3),
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
        x = n.useCallback(
            (e) => {
                let { setPopoutRef: t } = e;
                return null == u || u.w <= 0 || u.h <= 0
                    ? null
                    : (0, s.jsx)("div", { ref: t, className: P.F, style: (0, S.u)(u), "aria-hidden": !0 });
            },
            [u],
        ),
        A = { innerRef: r, onMouseEnter: C, onMouseLeave: p },
        N = null != u && u.w > 0 && u.h > 0 && d === u.imageUrl;
    return (0, s.jsx)(m.Y, {
        targetElementRef: r,
        renderPopout: x,
        animationPosition: "bottom",
        shouldShow: i && N,
        position: "top",
        align: "center",
        disablePointerEvents: !0,
        children: () => a(A),
    });
}
var w = l(427930),
    T = l(387408),
    y = l(427209),
    k = l(650019),
    U = l(969632),
    J = l(9842),
    b = l(68935),
    z = l(486020),
    G = l(58703),
    V = l(403362),
    $ = l(860227),
    B = l(438729),
    F = l(943220),
    H = l(943815),
    K = l(838541),
    X = l(652215),
    Y = l(375708),
    q = l(318626),
    Q = l(165648);
function Z(e) {
    let { width: t = 12, height: l = 8, color: n = "currentColor", className: a, foreground: r } = e;
    return (0, s.jsx)("svg", {
        className: a,
        width: t,
        height: l,
        viewBox: "0 0 12 8",
        children: (0, s.jsx)("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: r,
            fill: n,
        }),
    });
}
function W(e) {
    let { width: t = 18, height: l = 18, className: n, foreground: a } = e;
    return (0, s.jsx)("svg", {
        className: n,
        width: t,
        height: l,
        viewBox: "0 0 18 18",
        children: (0, s.jsx)("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: a,
        }),
    });
}
function ee(e, t, l, n, a, i) {
    let o,
        c,
        u,
        h,
        m = (0, T.A)(e),
        { trailingIconClass: d, leadingIconClass: g, iconSize: C } = i,
        p = null == t || "" === t || (Array.isArray(t) && 0 === t.length),
        E = (0, b.o6)(m).length > 0,
        M = null != m.interaction,
        j = m.hasFlag(X.pr7.IS_VOICE_MESSAGE),
        S = m.isPoll(),
        v = m.type === X.lAJ.POLL_RESULT;
    return (
        (0, w.A)(e) && (h = (0, s.jsx)(y.A, { size: "custom", className: g, width: C, height: C })),
        l
            ? (o = Y.intl.string(Y.t.XAkOo2))
            : n
              ? (o = Y.intl.string(Y.t["G7p6v/"]))
              : m.type === X.lAJ.CHANNEL_PINNED_MESSAGE
                ? (o = Y.intl.string(Y.t.sCfDDl))
                : p
                  ? S
                      ? (c = (0, s.jsx)("div", { className: r()(q.Io, Q.PT), children: m?.poll?.question?.text }))
                      : v
                        ? (o = (0, U.Il)(m))
                        : E
                          ? (o = Y.intl.string(Y.t.kHdYCW))
                          : M
                            ? (o = Y.intl.string(Y.t["E+6SSY"]))
                            : j
                              ? (o = Y.intl.string(Y.t.XC3A52))
                              : m.hasFlag(X.pr7.IS_COMPONENTS_V2)
                                ? (o = Y.intl.string(Y.t.Xxat6S))
                                : ((o = Y.intl.string(Y.t["6hGo0c"])),
                                  (u = (0, s.jsx)(x.ImageIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: d,
                                      width: C,
                                      height: C,
                                  })))
                  : (c = (0, s.jsx)(B.Ay, { message: m, content: t, className: a, compact: !0 })),
        E
            ? (u = (0, s.jsx)(A.s, { size: "custom", color: "currentColor", className: d, width: C, height: C }))
            : M
              ? (u = (0, s.jsx)(N.k, { size: "custom", color: "currentColor", className: d, width: C, height: C }))
              : j
                ? (u = (0, s.jsx)(f.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      className: d,
                      width: (19 / 24) * C,
                      height: C,
                  }))
                : (m.attachments.length > 0 || m.embeds.length > 0) &&
                  !v &&
                  (u = (0, s.jsx)(x.ImageIcon, {
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
            repliedAuthor: l,
            baseAuthor: a,
            baseMessage: i,
            referencedMessage: x,
            renderPopout: A,
            isReplySpineClickable: N,
            showReplySpine: f,
        } = e,
        [j, S] = n.useState(!1),
        v = n.useMemo(() => (null != A && x.state === J.a.LOADED ? (e) => A(e, x.message) : void 0), [x, A]),
        I = n.useCallback(() => S((e) => !e), []),
        _ = (function (e, t, l) {
            let {
                    referencedMessage: a,
                    channel: i,
                    compact: o,
                    isReplyAuthorBlocked: d,
                    repliedAuthor: g,
                    showAvatarPopout: C,
                    onClickAvatar: p,
                    onContextMenu: x,
                    onPopoutRequestClose: A,
                } = e,
                { analyticsLocations: N } = (0, M.Ay)(E.A.AVATAR),
                f = n.useRef(null);
            if (o || a.state !== J.a.LOADED || d)
                return l === X.lAJ.CONTEXT_MENU_COMMAND
                    ? (0, s.jsx)("div", { className: q.Do, children: (0, s.jsx)(c.ChatIcon, { size: "xs" }) })
                    : (0, s.jsx)("div", { className: q.Cz, children: (0, s.jsx)(Z, { className: q.UE }) });
            if (
                a.message.type === X.lAJ.USER_JOIN ||
                a.message.type === X.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                a.message.type === X.lAJ.GUILD_GAMING_STATS_PROMPT
            )
                return (0, s.jsx)(W, { className: q.VJ });
            if (a.message.type === X.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, s.jsx)(u.q, { size: "md", color: "currentColor", className: q.Cw });
            if (a.message.type === X.lAJ.POLL_RESULT)
                return (0, s.jsx)(h.Y, { className: q.Vs, width: K.eJ, height: K.eJ, size: "custom" });
            function j() {
                var e, t;
                return a.state !== J.a.LOADED
                    ? null
                    : ((e = a.message.author),
                      (t = i.guild_id),
                      (0, s.jsx)("img", {
                          alt: "",
                          src:
                              g?.guildMemberAvatar != null && null != t
                                  ? (0, z.s7)({ guildId: t, userId: e.id, avatar: g.guildMemberAvatar })
                                  : e.getAvatarURL(t, 16),
                          onClick: p,
                          onContextMenu: x,
                          className: r()({ [q.mf]: !0, [q.vk]: null != p }),
                          ref: f,
                      }));
            }
            return null != t && null != C
                ? (0, s.jsx)(M.f5, {
                      value: N,
                      children: (0, s.jsx)(m.Y, {
                          targetElementRef: f,
                          renderPopout: t,
                          shouldShow: C,
                          position: "right",
                          onRequestClose: A,
                          children: j,
                      }),
                  })
                : (0, s.jsx)(M.f5, { value: N, children: j() });
        })(e, v, i.type),
        L = (function (e, t) {
            let {
                    baseMessage: l,
                    channel: n,
                    referencedMessage: a,
                    showUsernamePopout: r,
                    onClickUsername: i,
                    onContextMenu: o,
                    onPopoutRequestClose: c,
                } = e,
                u = a?.state === J.a.LOADED ? a.message : void 0;
            return null == u ||
                u.type === X.lAJ.USER_JOIN ||
                u.type === X.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                u.type === X.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
                u.type === X.lAJ.GUILD_GAMING_STATS_PROMPT ||
                u.type === X.lAJ.POLL_RESULT
                ? null
                : (0, s.jsx)(F.A, {
                      message: u,
                      channel: n,
                      compact: !0,
                      withMentionPrefix: null != u && !!l.mentions.includes(u.author.id),
                      showPopout: r,
                      renderPopout: t,
                      onClick: i,
                      onContextMenu: o,
                      onPopoutRequestClose: c,
                      isRepliedMessage: !0,
                  });
        })(e, v),
        P = (function (e, t, l) {
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
                    let e = (0, k.A)(n.mediaMention, i.message.attachments);
                    if (null != e) {
                        let a = n.mediaMention;
                        return (0, s.jsx)(D, {
                            attachment: e.attachment,
                            timestampMs: a?.timestamp ?? 0,
                            children: (n) => {
                                let { innerRef: a, onMouseEnter: i, onMouseLeave: o } = n;
                                return (0, s.jsx)(d.D, {
                                    className: r()(q.$y, q.vk, { [q.FQ]: t }),
                                    onClick: h,
                                    onMouseEnter: () => {
                                        l(), i();
                                    },
                                    onMouseLeave: () => {
                                        l(), o();
                                    },
                                    children: (0, s.jsxs)("span", {
                                        className: q.wl,
                                        children: [
                                            e.isClip &&
                                                (0, s.jsx)(g.x, { size: "xs", color: "currentColor", className: q.te }),
                                            (0, s.jsx)(C.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-default",
                                                className: q.CD,
                                                children: e.title ?? Y.intl.string(Y.t.Cyxddp),
                                            }),
                                            (0, s.jsxs)(C.E, {
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
                        trailingIcon: x,
                        leadingIcon: A,
                    } = ee(i.message, a, o, c, q.Io, {
                        trailingIconClass: q.$4,
                        leadingIconClass: q.Vs,
                        iconSize: K.eJ,
                    });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            A,
                            (0, s.jsx)(d.D, {
                                className: r()(q.$y, q.vk, { [q.FQ]: t }),
                                onClick: h,
                                onMouseEnter: l,
                                onMouseLeave: l,
                                children: (0, s.jsx)(p.R, {
                                    children: m ?? (0, s.jsx)("span", { className: q.MK, children: u }),
                                }),
                            }),
                            x,
                        ],
                    });
                }
                case J.a.NOT_LOADED:
                    return (0, s.jsx)(d.D, {
                        className: r()(q.$y, q.vk),
                        onClick: h,
                        children: (0, s.jsx)("span", { className: q.MK, children: Y.intl.string(Y.t["1i+hMi"]) }),
                    });
                case J.a.DELETED:
                    return (0, s.jsx)("div", {
                        className: q.$y,
                        children: (0, s.jsx)("span", { className: q.MK, children: Y.intl.string(Y.t.mE3KJN) }),
                    });
                default:
                    (0, V.xb)(i);
            }
        })(e, j, I),
        R = n.useMemo(() => (e.compact ? (0, H.A)((0, G.i$)(o()(), "LT")) : null), [e.compact]);
    null != l && null != a && (t = Y.intl.formatToPlainString(Y.t.RhbQ2K, { author: a?.nick, repliedAuthor: l?.nick }));
    let O = i.type === X.lAJ.CONTEXT_MENU_COMMAND;
    return (0, s.jsxs)("div", {
        id: (0, $.nS)(i),
        className: r()(q.JZ, R, O ? q.C4 : { [q.NB]: !N && f }),
        "aria-label": t,
        children: [
            N &&
                f &&
                (0, s.jsx)(d.D, {
                    tag: "div",
                    "aria-label": Y.intl.string(Y.t.dpjpOp),
                    className: r()(q.Uo, { [q.xe]: j }),
                    onClick: e.onClickReply,
                    onMouseEnter: I,
                    onMouseLeave: I,
                }),
            _,
            L,
            P,
        ],
    });
}
