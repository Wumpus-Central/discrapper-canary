t.d(s, { A: () => K, o: () => $ });
var l = t(477900),
    a = t(582128),
    n = t(503698),
    i = t.n(n),
    r = t(536637),
    o = t.n(r),
    c = t(534890),
    u = t(638916),
    m = t(642846),
    h = t(922016),
    d = t(939249),
    C = t(176781),
    N = t(834730),
    g = t(531142),
    A = t(191023),
    E = t(812282),
    x = t(633018),
    p = t(831544),
    D = t(793574),
    S = t(688810),
    j = t(18697),
    I = t(427930),
    M = t(387408),
    _ = t(427209),
    L = t(650019),
    O = t(969632),
    P = t(9842),
    v = t(697474),
    R = t(68935),
    U = t(486020),
    f = t(58703),
    T = t(403362),
    y = t(860227),
    k = t(438729),
    J = t(943220),
    w = t(943815),
    b = t(838541),
    z = t(652215),
    G = t(375708),
    F = t(318626),
    H = t(165648);
function V(e) {
    let { width: s = 12, height: t = 8, color: a = "currentColor", className: n, foreground: i } = e;
    return (0, l.jsx)("svg", {
        className: n,
        width: s,
        height: t,
        viewBox: "0 0 12 8",
        children: (0, l.jsx)("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: i,
            fill: a,
        }),
    });
}
function B(e) {
    let { width: s = 18, height: t = 18, className: a, foreground: n } = e;
    return (0, l.jsx)("svg", {
        className: a,
        width: s,
        height: t,
        viewBox: "0 0 18 18",
        children: (0, l.jsx)("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: n,
        }),
    });
}
function $(e, s, t, a, n, r) {
    let o,
        c,
        u,
        m,
        h = (0, M.A)(e),
        { trailingIconClass: d, leadingIconClass: C, iconSize: N } = r,
        g = null == s || "" === s || (Array.isArray(s) && 0 === s.length),
        D = (0, R.o6)(h).length > 0,
        S = null != h.interaction,
        j = h.hasFlag(z.pr7.IS_VOICE_MESSAGE),
        L = h.isPoll(),
        P = h.type === z.lAJ.POLL_RESULT;
    return (
        (0, I.A)(e) && (m = (0, l.jsx)(_.A, { size: "custom", className: C, width: N, height: N })),
        t
            ? (o = G.intl.string(G.t.XAkOo2))
            : a
              ? (o = G.intl.string(G.t["G7p6v/"]))
              : h.type === z.lAJ.CHANNEL_PINNED_MESSAGE
                ? (o = G.intl.string(G.t.sCfDDl))
                : g
                  ? L
                      ? (c = (0, l.jsx)("div", { className: i()(F.Io, H.PT), children: h?.poll?.question?.text }))
                      : P
                        ? (o = (0, O.Il)(h))
                        : D
                          ? (o = G.intl.string(G.t.kHdYCW))
                          : S
                            ? (o = G.intl.string(G.t["E+6SSY"]))
                            : j
                              ? (o = G.intl.string(G.t.XC3A52))
                              : h.hasFlag(z.pr7.IS_COMPONENTS_V2)
                                ? (o = G.intl.string(G.t.Xxat6S))
                                : ((o = G.intl.string(G.t["6hGo0c"])),
                                  (u = (0, l.jsx)(A.ImageIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: d,
                                      width: N,
                                      height: N,
                                  })))
                  : (c = (0, l.jsx)(k.Ay, { message: h, content: s, className: n, compact: !0 })),
        D
            ? (u = (0, l.jsx)(E.s, { size: "custom", color: "currentColor", className: d, width: N, height: N }))
            : S
              ? (u = (0, l.jsx)(x.k, { size: "custom", color: "currentColor", className: d, width: N, height: N }))
              : j
                ? (u = (0, l.jsx)(p.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      className: d,
                      width: (19 / 24) * N,
                      height: N,
                  }))
                : (h.attachments.length > 0 || h.embeds.length > 0) &&
                  !P &&
                  (u = (0, l.jsx)(A.ImageIcon, {
                      size: "custom",
                      color: "currentColor",
                      className: d,
                      width: N,
                      height: N,
                  })),
        { contentPlaceholder: o, renderedContent: c, trailingIcon: u, leadingIcon: m }
    );
}
function K(e) {
    let s,
        {
            repliedAuthor: t,
            baseAuthor: n,
            baseMessage: r,
            referencedMessage: A,
            renderPopout: E,
            isReplySpineClickable: x,
            showReplySpine: p,
        } = e,
        [I, M] = a.useState(!1),
        _ = a.useMemo(() => (null != E && A.state === P.a.LOADED ? (e) => E(e, A.message) : void 0), [A, E]),
        O = a.useCallback(() => M((e) => !e), []),
        R = (function (e, s, t) {
            let {
                    referencedMessage: n,
                    channel: r,
                    compact: o,
                    isReplyAuthorBlocked: d,
                    repliedAuthor: C,
                    showAvatarPopout: N,
                    onClickAvatar: g,
                    onContextMenu: A,
                    onPopoutRequestClose: E,
                } = e,
                { analyticsLocations: x } = (0, S.Ay)(D.A.AVATAR),
                p = a.useRef(null),
                j = n.state === P.a.LOADED && n.message.hasFlag(z.pr7.HIDDEN_SUSPENDED_USER);
            if (o || n.state !== P.a.LOADED || d || j)
                return t === z.lAJ.CONTEXT_MENU_COMMAND
                    ? (0, l.jsx)("div", { className: F.Do, children: (0, l.jsx)(c.ChatIcon, { size: "xs" }) })
                    : (0, l.jsx)("div", { className: F.Cz, children: (0, l.jsx)(V, { className: F.UE }) });
            if (
                n.message.type === z.lAJ.USER_JOIN ||
                n.message.type === z.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                n.message.type === z.lAJ.GUILD_GAMING_STATS_PROMPT
            )
                return (0, l.jsx)(B, { className: F.VJ });
            if (n.message.type === z.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, l.jsx)(u.q, { size: "md", color: "currentColor", className: F.Cw });
            if (n.message.type === z.lAJ.POLL_RESULT)
                return (0, l.jsx)(m.Y, { className: F.Vs, width: b.eJ, height: b.eJ, size: "custom" });
            function I() {
                var e, s;
                return n.state !== P.a.LOADED
                    ? null
                    : ((e = n.message.author),
                      (s = r.guild_id),
                      (0, l.jsx)("img", {
                          alt: "",
                          src:
                              C?.guildMemberAvatar != null && null != s
                                  ? (0, U.s7)({ guildId: s, userId: e.id, avatar: C.guildMemberAvatar })
                                  : e.getAvatarURL(s, 16),
                          onClick: g,
                          onContextMenu: A,
                          className: i()({ [F.mf]: !0, [F.vk]: null != g }),
                          ref: p,
                      }));
            }
            return null != s && null != N
                ? (0, l.jsx)(S.f5, {
                      value: x,
                      children: (0, l.jsx)(h.Y, {
                          targetElementRef: p,
                          renderPopout: s,
                          shouldShow: N,
                          position: "right",
                          onRequestClose: E,
                          children: I,
                      }),
                  })
                : (0, l.jsx)(S.f5, { value: x, children: I() });
        })(e, _, r.type),
        k = (function (e, s) {
            let {
                    baseMessage: t,
                    channel: a,
                    referencedMessage: n,
                    showUsernamePopout: i,
                    onClickUsername: r,
                    onContextMenu: o,
                    onPopoutRequestClose: c,
                } = e,
                u = n?.state === P.a.LOADED ? n.message : void 0;
            return null == u ||
                u.hasFlag(z.pr7.HIDDEN_SUSPENDED_USER) ||
                u.type === z.lAJ.USER_JOIN ||
                u.type === z.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                u.type === z.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
                u.type === z.lAJ.GUILD_GAMING_STATS_PROMPT ||
                u.type === z.lAJ.POLL_RESULT
                ? null
                : (0, l.jsx)(J.A, {
                      message: u,
                      channel: a,
                      compact: !0,
                      withMentionPrefix: (0, v.A)(t, u),
                      showPopout: i,
                      renderPopout: s,
                      onClick: r,
                      onContextMenu: o,
                      onPopoutRequestClose: c,
                      isRepliedMessage: !0,
                  });
        })(e, _),
        H = (function (e, s, t) {
            let {
                    baseMessage: a,
                    content: n,
                    referencedMessage: r,
                    isReplyAuthorBlocked: o,
                    isReplyAuthorIgnored: c,
                    onClickReply: u,
                } = e,
                m = r.state !== P.a.DELETED ? u : void 0;
            switch (r.state) {
                case P.a.LOADED: {
                    let e = (0, L.A)(a.mediaMention, r.message.attachments);
                    if (null != e) {
                        let n = a.mediaMention;
                        return (0, l.jsx)(j.A, {
                            attachment: e.attachment,
                            timestampMs: n?.timestamp ?? 0,
                            children: (a) => {
                                let { innerRef: n, onMouseEnter: r, onMouseLeave: o } = a;
                                return (0, l.jsx)(d.D, {
                                    className: i()(F.$y, F.vk, { [F.FQ]: s }),
                                    onClick: m,
                                    onMouseEnter: () => {
                                        (t(), r());
                                    },
                                    onMouseLeave: () => {
                                        (t(), o());
                                    },
                                    children: (0, l.jsxs)("span", {
                                        className: F.wl,
                                        children: [
                                            e.isClip &&
                                                (0, l.jsx)(C.x, { size: "xs", color: "currentColor", className: F.te }),
                                            (0, l.jsx)(N.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-default",
                                                className: F.CD,
                                                children: e.title ?? G.intl.string(G.t.Cyxddp),
                                            }),
                                            (0, l.jsxs)(N.E, {
                                                ref: n,
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
                        renderedContent: h,
                        trailingIcon: A,
                        leadingIcon: E,
                    } = $(r.message, n, o, c, F.Io, {
                        trailingIconClass: F.$4,
                        leadingIconClass: F.Vs,
                        iconSize: b.eJ,
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            E,
                            (0, l.jsx)(d.D, {
                                className: i()(F.$y, F.vk, { [F.FQ]: s }),
                                onClick: m,
                                onMouseEnter: t,
                                onMouseLeave: t,
                                children: (0, l.jsx)(g.R, {
                                    children: h ?? (0, l.jsx)("span", { className: F.MK, children: u }),
                                }),
                            }),
                            A,
                        ],
                    });
                }
                case P.a.NOT_LOADED:
                    return (0, l.jsx)(d.D, {
                        className: i()(F.$y, F.vk),
                        onClick: m,
                        children: (0, l.jsx)("span", { className: F.MK, children: G.intl.string(G.t["1i+hMi"]) }),
                    });
                case P.a.DELETED:
                    return (0, l.jsx)("div", {
                        className: F.$y,
                        children: (0, l.jsx)("span", { className: F.MK, children: G.intl.string(G.t.mE3KJN) }),
                    });
                default:
                    (0, T.xb)(r);
            }
        })(e, I, O),
        K = a.useMemo(() => (e.compact ? (0, w.A)((0, f.i$)(o()(), "LT")) : null), [e.compact]),
        X = A.state === P.a.LOADED && A.message.hasFlag(z.pr7.HIDDEN_SUSPENDED_USER);
    null == t ||
        null == n ||
        X ||
        (s = G.intl.formatToPlainString(G.t.RhbQ2K, { author: n?.nick, repliedAuthor: t?.nick }));
    let q = r.type === z.lAJ.CONTEXT_MENU_COMMAND;
    return (0, l.jsxs)("div", {
        id: (0, y.nS)(r),
        className: i()(F.JZ, K, q ? F.C4 : { [F.NB]: !x && p }),
        "aria-label": s,
        children: [
            x &&
                p &&
                (0, l.jsx)(d.D, {
                    tag: "div",
                    "aria-label": G.intl.string(G.t.dpjpOp),
                    className: i()(F.Uo, { [F.xe]: I }),
                    onClick: e.onClickReply,
                    onMouseEnter: O,
                    onMouseLeave: O,
                }),
            R,
            k,
            H,
        ],
    });
}
