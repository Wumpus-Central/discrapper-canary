t.d(s, { A: () => V, o: () => G });
var a = t(627968),
    n = t(64700),
    l = t(503698),
    i = t.n(l),
    r = t(989349),
    o = t.n(r),
    c = t(534890),
    m = t(638916),
    d = t(642846),
    u = t(265872),
    h = t(939249),
    g = t(531142),
    x = t(191023),
    A = t(812282),
    N = t(633018),
    p = t(831544),
    j = t(793574),
    C = t(688810),
    v = t(659859),
    E = t(427930),
    I = t(387408),
    f = t(427209),
    M = t(969632),
    _ = t(9842),
    T = t(697474),
    S = t(378058),
    w = t(486020),
    L = t(405269),
    k = t(403362),
    R = t(860227),
    y = t(291812),
    D = t(943220),
    O = t(943815),
    P = t(838541),
    J = t(652215),
    U = t(985018),
    b = t(334211),
    z = t(992595);
function H(e) {
    let { width: s = 12, height: t = 8, color: n = "currentColor", className: l, foreground: i } = e;
    return (0, a.jsx)("svg", {
        className: l,
        width: s,
        height: t,
        viewBox: "0 0 12 8",
        children: (0, a.jsx)("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: i,
            fill: n,
        }),
    });
}
function B(e) {
    let { width: s = 18, height: t = 18, className: n, foreground: l } = e;
    return (0, a.jsx)("svg", {
        className: n,
        width: s,
        height: t,
        viewBox: "0 0 18 18",
        children: (0, a.jsx)("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: l,
        }),
    });
}
function G(e, s, t, n, l, r) {
    let o,
        c,
        m,
        d,
        u = (0, I.A)(e),
        { trailingIconClass: h, leadingIconClass: g, iconSize: j } = r,
        C = null == s || "" === s || (Array.isArray(s) && 0 === s.length),
        _ = (0, S.o6)(u).length > 0,
        T = null != u.interaction,
        w = u.hasFlag(J.pr7.IS_VOICE_MESSAGE),
        L = u.isPoll(),
        k = u.type === J.lAJ.POLL_RESULT;
    return (
        (0, E.A)(e) && (d = (0, a.jsx)(f.A, { size: "custom", className: g, width: j, height: j })),
        t
            ? (o = U.intl.string(U.t.XAkOo2))
            : n
              ? (o = U.intl.string(U.t["G7p6v/"]))
              : u.type === J.lAJ.CHANNEL_PINNED_MESSAGE
                ? (o = U.intl.string(U.t.sCfDDl))
                : u.type === J.lAJ.EMOJI_ADDED
                  ? (c = (0, a.jsx)(v.HN, { message: u, rendered: s }))
                  : C
                    ? L
                        ? (c = (0, a.jsx)("div", { className: i()(b.Io, z.PT), children: u?.poll?.question?.text }))
                        : k
                          ? (o = (0, M.Il)(u))
                          : _
                            ? (o = U.intl.string(U.t.kHdYCW))
                            : T
                              ? (o = U.intl.string(U.t["E+6SSY"]))
                              : w
                                ? (o = U.intl.string(U.t.XC3A52))
                                : u.hasFlag(J.pr7.IS_COMPONENTS_V2)
                                  ? (o = U.intl.string(U.t.Xxat6S))
                                  : ((o = U.intl.string(U.t["6hGo0c"])),
                                    (m = (0, a.jsx)(x.x, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: h,
                                        width: j,
                                        height: j,
                                    })))
                    : (c = (0, a.jsx)(y.Ay, { message: u, content: s, className: l, compact: !0 })),
        _
            ? (m = (0, a.jsx)(A.s, { size: "custom", color: "currentColor", className: h, width: j, height: j }))
            : T
              ? (m = (0, a.jsx)(N.k, { size: "custom", color: "currentColor", className: h, width: j, height: j }))
              : w
                ? (m = (0, a.jsx)(p.c, {
                      size: "custom",
                      color: "currentColor",
                      className: h,
                      width: (19 / 24) * j,
                      height: j,
                  }))
                : (u.attachments.length > 0 || u.embeds.length > 0) &&
                  !k &&
                  (m = (0, a.jsx)(x.x, { size: "custom", color: "currentColor", className: h, width: j, height: j })),
        { contentPlaceholder: o, renderedContent: c, trailingIcon: m, leadingIcon: d }
    );
}
function V(e) {
    let s,
        {
            repliedAuthor: t,
            baseAuthor: l,
            baseMessage: r,
            referencedMessage: x,
            renderPopout: A,
            isReplySpineClickable: N,
            showReplySpine: p,
        } = e,
        [v, E] = n.useState(!1),
        I = n.useMemo(() => (null != A && x.state === _.a.LOADED ? (e) => A(e, x.message) : void 0), [x, A]),
        f = n.useCallback(() => E((e) => !e), []),
        M = (function (e, s, t) {
            let {
                    referencedMessage: l,
                    channel: r,
                    compact: o,
                    isReplyAuthorBlocked: h,
                    repliedAuthor: g,
                    showAvatarPopout: x,
                    onClickAvatar: A,
                    onContextMenu: N,
                    onPopoutRequestClose: p,
                } = e,
                { analyticsLocations: v } = (0, C.Ay)(j.A.AVATAR),
                E = n.useRef(null);
            if (o || l.state !== _.a.LOADED || h)
                return t === J.lAJ.CONTEXT_MENU_COMMAND
                    ? (0, a.jsx)("div", { className: b.Do, children: (0, a.jsx)(c.o, { size: "xs" }) })
                    : (0, a.jsx)("div", { className: b.Cz, children: (0, a.jsx)(H, { className: b.UE }) });
            if (
                l.message.type === J.lAJ.USER_JOIN ||
                l.message.type === J.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                l.message.type === J.lAJ.GUILD_GAMING_STATS_PROMPT
            )
                return (0, a.jsx)(B, { className: b.VJ });
            if (l.message.type === J.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, a.jsx)(m.q, { size: "md", color: "currentColor", className: b.Cw });
            if (l.message.type === J.lAJ.POLL_RESULT)
                return (0, a.jsx)(d.Y, { className: b.Vs, width: P.eJ, height: P.eJ, size: "custom" });
            let I = () => {
                var e, s;
                return (
                    (e = l.message.author),
                    (s = r.guild_id),
                    (0, a.jsx)("img", {
                        alt: "",
                        src:
                            g?.guildMemberAvatar != null && null != s
                                ? (0, w.s7)({ guildId: s, userId: e.id, avatar: g.guildMemberAvatar })
                                : e.getAvatarURL(s, 16),
                        onClick: A,
                        onContextMenu: N,
                        className: i()({ [b.mf]: !0, [b.vk]: null != A }),
                        ref: E,
                    })
                );
            };
            return null != s && null != x
                ? (0, a.jsx)(C.f5, {
                      value: v,
                      children: (0, a.jsx)(u.Y, {
                          targetElementRef: E,
                          renderPopout: s,
                          shouldShow: x,
                          position: "right",
                          onRequestClose: p,
                          children: I,
                      }),
                  })
                : (0, a.jsx)(C.f5, { value: v, children: I() });
        })(e, I, r.type),
        S = (function (e, s) {
            let {
                    baseMessage: t,
                    channel: n,
                    referencedMessage: l,
                    showUsernamePopout: i,
                    onClickUsername: r,
                    onContextMenu: o,
                    onPopoutRequestClose: c,
                } = e,
                m = l?.state === _.a.LOADED ? l.message : void 0;
            return null == m ||
                m.type === J.lAJ.USER_JOIN ||
                m.type === J.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                m.type === J.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
                m.type === J.lAJ.GUILD_GAMING_STATS_PROMPT ||
                m.type === J.lAJ.POLL_RESULT
                ? null
                : (0, a.jsx)(D.A, {
                      message: m,
                      channel: n,
                      compact: !0,
                      withMentionPrefix: (0, T.A)(t, m),
                      showPopout: i,
                      renderPopout: s,
                      onClick: r,
                      onContextMenu: o,
                      onPopoutRequestClose: c,
                      isRepliedMessage: !0,
                  });
        })(e, I),
        y = (function (e, s, t) {
            let {
                    content: n,
                    referencedMessage: l,
                    isReplyAuthorBlocked: r,
                    isReplyAuthorIgnored: o,
                    onClickReply: c,
                } = e,
                m = l.state !== _.a.DELETED ? c : void 0;
            switch (l.state) {
                case _.a.LOADED: {
                    let {
                        contentPlaceholder: e,
                        renderedContent: c,
                        trailingIcon: d,
                        leadingIcon: u,
                    } = G(l.message, n, r, o, b.Io, {
                        trailingIconClass: b.$4,
                        leadingIconClass: b.Vs,
                        iconSize: P.eJ,
                    });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            u,
                            (0, a.jsx)(h.D, {
                                className: i()(b.$y, b.vk, { [b.FQ]: s }),
                                onClick: m,
                                onMouseEnter: t,
                                onMouseLeave: t,
                                children: (0, a.jsx)(g.R, {
                                    children: c ?? (0, a.jsx)("span", { className: b.MK, children: e }),
                                }),
                            }),
                            d,
                        ],
                    });
                }
                case _.a.NOT_LOADED:
                    return (0, a.jsx)(h.D, {
                        className: i()(b.$y, b.vk),
                        onClick: m,
                        children: (0, a.jsx)("span", { className: b.MK, children: U.intl.string(U.t["1i+hMi"]) }),
                    });
                case _.a.DELETED:
                    return (0, a.jsx)("div", {
                        className: b.$y,
                        children: (0, a.jsx)("span", { className: b.MK, children: U.intl.string(U.t.mE3KJN) }),
                    });
                default:
                    (0, k.xb)(l);
            }
        })(e, v, f),
        z = n.useMemo(() => (e.compact ? (0, O.A)((0, L.i$)(o()(), "LT")) : null), [e.compact]);
    null != t && null != l && (s = U.intl.formatToPlainString(U.t.RhbQ2K, { author: l?.nick, repliedAuthor: t?.nick }));
    let V = r.type === J.lAJ.CONTEXT_MENU_COMMAND;
    return (0, a.jsxs)("div", {
        id: (0, R.nS)(r),
        className: i()(b.JZ, z, V ? b.C4 : { [b.NB]: !N && p }),
        "aria-label": s,
        children: [
            N &&
                p &&
                (0, a.jsx)(h.D, {
                    tag: "div",
                    "aria-label": U.intl.string(U.t.dpjpOp),
                    className: i()(b.Uo, { [b.xe]: v }),
                    onClick: e.onClickReply,
                    onMouseEnter: f,
                    onMouseLeave: f,
                }),
            M,
            S,
            y,
        ],
    });
}
