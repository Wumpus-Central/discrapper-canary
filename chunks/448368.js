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
    A = t(427209),
    x = t(969632),
    N = t(9842),
    C = t(697474),
    p = t(378058),
    j = t(486020),
    E = t(405269),
    I = t(403362),
    _ = t(860227),
    M = t(291812),
    T = t(943220),
    v = t(943815),
    S = t(838541),
    f = t(652215),
    L = t(985018),
    R = t(679740),
    k = t(206314);
function D(e) {
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
function y(e) {
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
        N,
        C = (0, g.A)(e),
        { trailingIconClass: j, leadingIconClass: E, iconSize: I } = r,
        _ = null == s || "" === s || (Array.isArray(s) && 0 === s.length),
        T = (0, p.o6)(C).length > 0,
        v = null != C.interaction,
        S = C.hasFlag(f.pr7.IS_VOICE_MESSAGE),
        D = C.isPoll(),
        y = C.type === f.lAJ.POLL_RESULT;
    return (
        (0, h.A)(e) && (N = (0, n.jsx)(A.A, { size: "custom", className: E, width: I, height: I })),
        t
            ? (o = L.intl.string(L.t.XAkOo2))
            : a
              ? (o = L.intl.string(L.t["G7p6v/"]))
              : C.type === f.lAJ.CHANNEL_PINNED_MESSAGE
                ? (o = L.intl.string(L.t.sCfDDl))
                : C.type === f.lAJ.EMOJI_ADDED
                  ? (m = (0, n.jsx)(d.HN, { message: C, rendered: s }))
                  : _
                    ? D
                        ? (m = (0, n.jsx)("div", { className: i()(R.Io, k.PT), children: C?.poll?.question?.text }))
                        : y
                          ? (o = (0, x.Il)(C))
                          : T
                            ? (o = L.intl.string(L.t.kHdYCW))
                            : v
                              ? (o = L.intl.string(L.t["E+6SSY"]))
                              : S
                                ? (o = L.intl.string(L.t.XC3A52))
                                : C.hasFlag(f.pr7.IS_COMPONENTS_V2)
                                  ? (o = L.intl.string(L.t.Xxat6S))
                                  : ((o = L.intl.string(L.t["6hGo0c"])),
                                    (u = (0, n.jsx)(c.xfq, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: j,
                                        width: I,
                                        height: I,
                                    })))
                    : (m = (0, n.jsx)(M.Ay, { message: C, content: s, className: l, compact: !0 })),
        T
            ? (u = (0, n.jsx)(c.s2T, { size: "custom", color: "currentColor", className: j, width: I, height: I }))
            : v
              ? (u = (0, n.jsx)(c.kC9, { size: "custom", color: "currentColor", className: j, width: I, height: I }))
              : S
                ? (u = (0, n.jsx)(c.cNw, {
                      size: "custom",
                      color: "currentColor",
                      className: j,
                      width: (19 / 24) * I,
                      height: I,
                  }))
                : (C.attachments.length > 0 || C.embeds.length > 0) &&
                  !y &&
                  (u = (0, n.jsx)(c.xfq, { size: "custom", color: "currentColor", className: j, width: I, height: I })),
        { contentPlaceholder: o, renderedContent: m, trailingIcon: u, leadingIcon: N }
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
            showReplySpine: A,
        } = e,
        [x, p] = a.useState(!1),
        M = a.useMemo(() => (null != h && d.state === N.a.LOADED ? (e) => h(e, d.message) : void 0), [d, h]),
        k = a.useCallback(() => p((e) => !e), []),
        P = (function (e, s, t) {
            let {
                    referencedMessage: l,
                    channel: r,
                    compact: o,
                    isReplyAuthorBlocked: d,
                    repliedAuthor: h,
                    showAvatarPopout: g,
                    onClickAvatar: A,
                    onContextMenu: x,
                    onPopoutRequestClose: C,
                } = e,
                { analyticsLocations: p } = (0, u.Ay)(m.A.AVATAR),
                E = a.useRef(null);
            if (o || l.state !== N.a.LOADED || d)
                return t === f.lAJ.CONTEXT_MENU_COMMAND
                    ? (0, n.jsx)("div", { className: R.Do, children: (0, n.jsx)(c.oyn, { size: "xs" }) })
                    : (0, n.jsx)("div", { className: R.Cz, children: (0, n.jsx)(D, { className: R.UE }) });
            if (
                l.message.type === f.lAJ.USER_JOIN ||
                l.message.type === f.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                l.message.type === f.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT ||
                l.message.type === f.lAJ.GUILD_GAMING_STATS_PROMPT
            )
                return (0, n.jsx)(y, { className: R.VJ });
            if (l.message.type === f.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, n.jsx)(c.qyI, { size: "md", color: "currentColor", className: R.Cw });
            if (l.message.type === f.lAJ.POLL_RESULT)
                return (0, n.jsx)(c.YRe, { className: R.Vs, width: S.eJ, height: S.eJ, size: "custom" });
            let I = () => {
                var e, s;
                return (
                    (e = l.message.author),
                    (s = r.guild_id),
                    (0, n.jsx)("img", {
                        alt: "",
                        src:
                            h?.guildMemberAvatar != null && null != s
                                ? (0, j.s7)({ guildId: s, userId: e.id, avatar: h.guildMemberAvatar })
                                : e.getAvatarURL(s, 16),
                        onClick: A,
                        onContextMenu: x,
                        className: i()({ [R.mf]: !0, [R.vk]: null != A }),
                        ref: E,
                    })
                );
            };
            return null != s && null != g
                ? (0, n.jsx)(u.f5, {
                      value: p,
                      children: (0, n.jsx)(c.YNO, {
                          targetElementRef: E,
                          renderPopout: s,
                          shouldShow: g,
                          position: "right",
                          onRequestClose: C,
                          children: I,
                      }),
                  })
                : (0, n.jsx)(u.f5, { value: p, children: I() });
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
                m = l?.state === N.a.LOADED ? l.message : void 0;
            return null == m ||
                m.type === f.lAJ.USER_JOIN ||
                m.type === f.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                m.type === f.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
                m.type === f.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT ||
                m.type === f.lAJ.GUILD_GAMING_STATS_PROMPT ||
                m.type === f.lAJ.POLL_RESULT
                ? null
                : (0, n.jsx)(T.A, {
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
                u = l.state !== N.a.DELETED ? m : void 0;
            switch (l.state) {
                case N.a.LOADED: {
                    let {
                        contentPlaceholder: e,
                        renderedContent: m,
                        trailingIcon: d,
                        leadingIcon: h,
                    } = O(l.message, a, r, o, R.Io, {
                        trailingIconClass: R.$4,
                        leadingIconClass: R.Vs,
                        iconSize: S.eJ,
                    });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            h,
                            (0, n.jsx)(c.DUT, {
                                className: i()(R.$y, R.vk, { [R.FQ]: s }),
                                onClick: u,
                                onMouseEnter: t,
                                onMouseLeave: t,
                                children: (0, n.jsx)(c.RDc, {
                                    children: m ?? (0, n.jsx)("span", { className: R.MK, children: e }),
                                }),
                            }),
                            d,
                        ],
                    });
                }
                case N.a.NOT_LOADED:
                    return (0, n.jsx)(c.DUT, {
                        className: i()(R.$y, R.vk),
                        onClick: u,
                        children: (0, n.jsx)("span", { className: R.MK, children: L.intl.string(L.t["1i+hMi"]) }),
                    });
                case N.a.DELETED:
                    return (0, n.jsx)("div", {
                        className: R.$y,
                        children: (0, n.jsx)("span", { className: R.MK, children: L.intl.string(L.t.mE3KJN) }),
                    });
                default:
                    (0, I.xb)(l);
            }
        })(e, x, k),
        b = a.useMemo(() => (e.compact ? (0, v.A)((0, E.i$)(o()(), "LT")) : null), [e.compact]);
    null != t && null != l && (s = L.intl.formatToPlainString(L.t.RhbQ2K, { author: l?.nick, repliedAuthor: t?.nick }));
    let w = r.type === f.lAJ.CONTEXT_MENU_COMMAND;
    return (0, n.jsxs)("div", {
        id: (0, _.nS)(r),
        className: i()(R.JZ, b, w ? R.C4 : { [R.NB]: !g && A }),
        "aria-label": s,
        children: [
            g &&
                A &&
                (0, n.jsx)(c.DUT, {
                    tag: "div",
                    "aria-label": L.intl.string(L.t.dpjpOp),
                    className: i()(R.Uo, { [R.xe]: x }),
                    onClick: e.onClickReply,
                    onMouseEnter: k,
                    onMouseLeave: k,
                }),
            P,
            U,
            J,
        ],
    });
}
