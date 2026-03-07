t.d(s, { A: () => P, o: () => O });
var n = t(627968),
    a = t(64700),
    l = t(503698),
    i = t.n(l),
    r = t(989349),
    o = t.n(r),
    c = t(397927),
    m = t(793574),
    u = t(688810),
    d = t(659859),
    h = t(427930),
    g = t(387408),
    x = t(427209),
    N = t(969632),
    A = t(9842),
    C = t(697474),
    j = t(378058),
    p = t(486020),
    I = t(405269),
    E = t(403362),
    v = t(860227),
    M = t(291812),
    S = t(943220),
    T = t(943815),
    _ = t(838541),
    f = t(652215),
    k = t(985018),
    L = t(222590),
    R = t(830412);
function y(e) {
    let { width: s = 12, height: t = 8, color: a = "currentColor", className: l, foreground: i } = e;
    return (0, n.jsx)("svg", {
        className: l,
        width: s,
        height: t,
        viewBox: "0 0 12 8",
        children: (0, n.jsx)("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: i,
            fill: a,
        }),
    });
}
function D(e) {
    let { width: s = 18, height: t = 18, className: a, foreground: l } = e;
    return (0, n.jsx)("svg", {
        className: a,
        width: s,
        height: t,
        viewBox: "0 0 18 18",
        children: (0, n.jsx)("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: l,
        }),
    });
}
function O(e, s, t, a, l, r) {
    let o,
        m,
        u,
        A,
        C = (0, g.A)(e),
        { trailingIconClass: p, leadingIconClass: I, iconSize: E } = r,
        v = null == s || "" === s || (Array.isArray(s) && 0 === s.length),
        S = (0, j.o6)(C).length > 0,
        T = null != C.interaction,
        _ = C.hasFlag(f.pr7.IS_VOICE_MESSAGE),
        y = C.isPoll(),
        D = C.type === f.lAJ.POLL_RESULT;
    return (
        (0, h.A)(e) && (A = (0, n.jsx)(x.A, { size: "custom", className: I, width: E, height: E })),
        t
            ? (o = k.intl.string(k.t.XAkOo2))
            : a
              ? (o = k.intl.string(k.t["G7p6v/"]))
              : C.type === f.lAJ.CHANNEL_PINNED_MESSAGE
                ? (o = k.intl.string(k.t.sCfDDl))
                : C.type === f.lAJ.EMOJI_ADDED
                  ? (m = (0, n.jsx)(d.HN, { message: C, rendered: s }))
                  : v
                    ? y
                        ? (m = (0, n.jsx)("div", { className: i()(L.Io, R.PT), children: C?.poll?.question?.text }))
                        : D
                          ? (o = (0, N.Il)(C))
                          : S
                            ? (o = k.intl.string(k.t.kHdYCW))
                            : T
                              ? (o = k.intl.string(k.t["E+6SSY"]))
                              : _
                                ? (o = k.intl.string(k.t.XC3A52))
                                : C.hasFlag(f.pr7.IS_COMPONENTS_V2)
                                  ? (o = k.intl.string(k.t.Xxat6S))
                                  : ((o = k.intl.string(k.t["6hGo0c"])),
                                    (u = (0, n.jsx)(c.xfq, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: p,
                                        width: E,
                                        height: E,
                                    })))
                    : (m = (0, n.jsx)(M.Ay, { message: C, content: s, className: l, compact: !0 })),
        S
            ? (u = (0, n.jsx)(c.s2T, { size: "custom", color: "currentColor", className: p, width: E, height: E }))
            : T
              ? (u = (0, n.jsx)(c.kC9, { size: "custom", color: "currentColor", className: p, width: E, height: E }))
              : _
                ? (u = (0, n.jsx)(c.cNw, {
                      size: "custom",
                      color: "currentColor",
                      className: p,
                      width: (19 / 24) * E,
                      height: E,
                  }))
                : (C.attachments.length > 0 || C.embeds.length > 0) &&
                  !D &&
                  (u = (0, n.jsx)(c.xfq, { size: "custom", color: "currentColor", className: p, width: E, height: E })),
        { contentPlaceholder: o, renderedContent: m, trailingIcon: u, leadingIcon: A }
    );
}
function P(e) {
    let s,
        {
            repliedAuthor: t,
            baseAuthor: l,
            baseMessage: r,
            referencedMessage: d,
            renderPopout: h,
            isReplySpineClickable: g,
            showReplySpine: x,
        } = e,
        [N, j] = a.useState(!1),
        M = a.useMemo(() => (null != h && d.state === A.a.LOADED ? (e) => h(e, d.message) : void 0), [d, h]),
        R = a.useCallback(() => j((e) => !e), []),
        P = (function (e, s, t) {
            let {
                    referencedMessage: l,
                    channel: r,
                    compact: o,
                    isReplyAuthorBlocked: d,
                    repliedAuthor: h,
                    showAvatarPopout: g,
                    onClickAvatar: x,
                    onContextMenu: N,
                    onPopoutRequestClose: C,
                } = e,
                { analyticsLocations: j } = (0, u.Ay)(m.A.AVATAR),
                I = a.useRef(null);
            if (o || l.state !== A.a.LOADED || d)
                return t === f.lAJ.CONTEXT_MENU_COMMAND
                    ? (0, n.jsx)("div", { className: L.Do, children: (0, n.jsx)(c.oyn, { size: "xs" }) })
                    : (0, n.jsx)("div", { className: L.Cz, children: (0, n.jsx)(y, { className: L.UE }) });
            if (
                l.message.type === f.lAJ.USER_JOIN ||
                l.message.type === f.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                l.message.type === f.lAJ.GUILD_GAMING_STATS_PROMPT
            )
                return (0, n.jsx)(D, { className: L.VJ });
            if (l.message.type === f.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, n.jsx)(c.qyI, { size: "md", color: "currentColor", className: L.Cw });
            if (l.message.type === f.lAJ.POLL_RESULT)
                return (0, n.jsx)(c.YRe, { className: L.Vs, width: _.eJ, height: _.eJ, size: "custom" });
            let E = () => {
                var e, s;
                return (
                    (e = l.message.author),
                    (s = r.guild_id),
                    (0, n.jsx)("img", {
                        alt: "",
                        src:
                            h?.guildMemberAvatar != null && null != s
                                ? (0, p.s7)({ guildId: s, userId: e.id, avatar: h.guildMemberAvatar })
                                : e.getAvatarURL(s, 16),
                        onClick: x,
                        onContextMenu: N,
                        className: i()({ [L.mf]: !0, [L.vk]: null != x }),
                        ref: I,
                    })
                );
            };
            return null != s && null != g
                ? (0, n.jsx)(u.f5, {
                      value: j,
                      children: (0, n.jsx)(c.YNO, {
                          targetElementRef: I,
                          renderPopout: s,
                          shouldShow: g,
                          position: "right",
                          onRequestClose: C,
                          children: E,
                      }),
                  })
                : (0, n.jsx)(u.f5, { value: j, children: E() });
        })(e, M, r.type),
        U = (function (e, s) {
            let {
                    baseMessage: t,
                    channel: a,
                    referencedMessage: l,
                    showUsernamePopout: i,
                    onClickUsername: r,
                    onContextMenu: o,
                    onPopoutRequestClose: c,
                } = e,
                m = l?.state === A.a.LOADED ? l.message : void 0;
            return null == m ||
                m.type === f.lAJ.USER_JOIN ||
                m.type === f.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                m.type === f.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
                m.type === f.lAJ.GUILD_GAMING_STATS_PROMPT ||
                m.type === f.lAJ.POLL_RESULT
                ? null
                : (0, n.jsx)(S.A, {
                      message: m,
                      channel: a,
                      compact: !0,
                      withMentionPrefix: (0, C.A)(t, m),
                      showPopout: i,
                      renderPopout: s,
                      onClick: r,
                      onContextMenu: o,
                      onPopoutRequestClose: c,
                      isRepliedMessage: !0,
                  });
        })(e, M),
        J = (function (e, s, t) {
            let {
                    content: a,
                    referencedMessage: l,
                    isReplyAuthorBlocked: r,
                    isReplyAuthorIgnored: o,
                    onClickReply: m,
                } = e,
                u = l.state !== A.a.DELETED ? m : void 0;
            switch (l.state) {
                case A.a.LOADED: {
                    let {
                        contentPlaceholder: e,
                        renderedContent: m,
                        trailingIcon: d,
                        leadingIcon: h,
                    } = O(l.message, a, r, o, L.Io, {
                        trailingIconClass: L.$4,
                        leadingIconClass: L.Vs,
                        iconSize: _.eJ,
                    });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            h,
                            (0, n.jsx)(c.DUT, {
                                className: i()(L.$y, L.vk, { [L.FQ]: s }),
                                onClick: u,
                                onMouseEnter: t,
                                onMouseLeave: t,
                                children: (0, n.jsx)(c.RDc, {
                                    children: m ?? (0, n.jsx)("span", { className: L.MK, children: e }),
                                }),
                            }),
                            d,
                        ],
                    });
                }
                case A.a.NOT_LOADED:
                    return (0, n.jsx)(c.DUT, {
                        className: i()(L.$y, L.vk),
                        onClick: u,
                        children: (0, n.jsx)("span", { className: L.MK, children: k.intl.string(k.t["1i+hMi"]) }),
                    });
                case A.a.DELETED:
                    return (0, n.jsx)("div", {
                        className: L.$y,
                        children: (0, n.jsx)("span", { className: L.MK, children: k.intl.string(k.t.mE3KJN) }),
                    });
                default:
                    (0, E.xb)(l);
            }
        })(e, N, R),
        b = a.useMemo(() => (e.compact ? (0, T.A)((0, I.i$)(o()(), "LT")) : null), [e.compact]);
    null != t && null != l && (s = k.intl.formatToPlainString(k.t.RhbQ2K, { author: l?.nick, repliedAuthor: t?.nick }));
    let w = r.type === f.lAJ.CONTEXT_MENU_COMMAND;
    return (0, n.jsxs)("div", {
        id: (0, v.nS)(r),
        className: i()(L.JZ, b, w ? L.C4 : { [L.NB]: !g && x }),
        "aria-label": s,
        children: [
            g &&
                x &&
                (0, n.jsx)(c.DUT, {
                    tag: "div",
                    "aria-label": k.intl.string(k.t.dpjpOp),
                    className: i()(L.Uo, { [L.xe]: N }),
                    onClick: e.onClickReply,
                    onMouseEnter: R,
                    onMouseLeave: R,
                }),
            P,
            U,
            J,
        ],
    });
}
