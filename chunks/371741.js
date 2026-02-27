n.d(t, { Av: () => q, Ay: () => Z, VO: () => J });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(837381),
    d = n(311907),
    u = n(397927),
    h = n(775602),
    m = n(93474),
    A = n(201275),
    g = n(384231),
    p = n(853145),
    f = n(9842),
    _ = n(976860),
    E = n(253932),
    x = n(734057),
    C = n(540999),
    S = n(580745),
    I = n(661191),
    T = n(141468),
    N = n(375901),
    b = n(143413),
    y = n(763754),
    v = n(245748),
    j = n(491182),
    R = n(860227),
    M = n(112758),
    D = n(866897),
    O = n(754459),
    L = n(538355),
    P = n(522871),
    k = n(699352),
    w = n(426153),
    U = n(444529),
    G = n(241874),
    F = n(91624),
    H = n(653008),
    B = n(162792),
    V = n(675722),
    K = n(381941),
    W = n(652215),
    z = n(985018),
    Y = n(119907);
function q(e, t, n) {
    return e.getElementById((0, N.j)(t, n));
}
function J(e) {
    let {
        id: t,
        message: n,
        message: { messageReference: l },
        compact: s = !1,
        className: r,
    } = e;
    o()(n.type === W.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...u } = (0, c.rm)(e.id ?? ""),
        h = (0, d.bG)([f.A], () => f.A.getMessageByReference(l)),
        { popouts: m, setPopout: A } = (0, O.A)(n.id, K.Fd),
        g = (0, y.Ay)(n),
        p = (0, R.fF)(n),
        _ = (0, R.ZD)(n);
    return n.type === W.lAJ.THREAD_STARTER_MESSAGE && null != h && h.state === f.a.LOADED
        ? (0, i.jsx)($, { ...e, viewingChannelId: n.channel_id, message: h.message, groupId: h.message.id })
        : (0, i.jsx)(j.A, {
              ...u,
              id: t,
              compact: s,
              className: a()(r, { [Y.iU]: !0, [Y.HJ]: !s, [Y.H4]: !0, [Y._A]: !0 }),
              childrenHeader: (0, G.A)({
                  messageProps: e,
                  setPopout: A,
                  messagePopouts: m,
                  replyReference: l,
                  author: g,
              }),
              childrenSystemMessage: (0, V.A)(e),
              childrenMessageContent: null,
              "aria-labelledby": p,
              "aria-describedby": _,
              hasThread: !1,
              author: g,
          });
}
function $(e) {
    let {
            id: t,
            message: n,
            message: { id: s, channel_id: r },
            channel: { guild_id: o },
            compact: m = !1,
            className: p,
            groupId: x,
            viewingChannelId: S,
        } = e,
        I = n.type === W.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: N, ...v } = (0, c.rm)(e.id ?? ""),
        { isFocused: P, handleFocus: w, handleBlur: U } = (0, M.G8)(N),
        { popouts: H, selected: q, setPopout: J } = (0, O.A)(n.id, K.Fd),
        $ = E.hD.useSetting(),
        Z = E.rs.useSetting(),
        X = (0, d.bG)([f.A], () => f.A.getMessageByReference(I)),
        Q = (0, g.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: ee,
            handleMouseLeave: et,
            isHovered: en,
        } = (0, M.yp)({ groupId: x, message: n, defaultValue: q }),
        ei = (0, d.bG)([h.A], () => h.A.keyboardModeEnabled),
        el = q || (ei && P),
        es = el || en,
        ea = (0, d.bG)([C.A], () => C.A.isDeveloper),
        {
            content: er,
            hasSpoilerEmbeds: eo,
            hasBailedAst: ec,
        } = (0, L.A)(n, {
            hideSimpleEmbedContent: $ && Z,
            isInteracting: es,
            formatInline: !1,
            allowList: Q,
            allowHeading: Q,
            allowLinks: !0,
            allowDevLinks: ea,
            previewLinkTarget: !0,
            viewingChannelId: S,
        }),
        ed = (0, D.A)(s, r, ei),
        eu = (0, y.Ay)(n),
        eh = (0, R.fF)(n, x),
        em = (0, R.ZD)(n),
        eA = (0, F.A)(e, er, !1),
        eg = l.useCallback(() => (0, _.uh)(o, r, s), [o, r, s]),
        ep = (0, A.$7)({ guildId: o, roleId: eu.iconRoleId });
    return (0, i.jsxs)("div", {
        className: Y.m5,
        children: [
            (0, i.jsx)(u.DUT, {
                className: Y.lA,
                onClick: eg,
                "aria-label": z.intl.string(z.t.k5WiPf),
                children: z.intl.string(z.t.k5WiPf),
            }),
            (0, i.jsx)(j.A, {
                ...v,
                id: t,
                compact: m,
                className: a()(p, {
                    [Y.iU]: !0,
                    [Y.HJ]: !m,
                    [Y.mK]: n.mentioned,
                    [Y.M1]: (0, T.ec)(n),
                    [Y.H4]: (0, b.A)(n),
                    [Y._A]: n.id === x || n.type === W.lAJ.REPLY,
                    [Y.wH]: el,
                }),
                zalgo: !0,
                onKeyDown: ed,
                onFocus: w,
                onBlur: U,
                childrenRepliedMessage:
                    n.type === W.lAJ.REPLY &&
                    (0, B.A)({
                        ...e,
                        setPopout: J,
                        referencedUsernameProfile: H.referencedUsernameProfile,
                        referencedAvatarProfile: H.referencedAvatarProfile,
                        replyReference: I,
                        replyMessage: X,
                        isReplySpineClickable: !0,
                    }),
                childrenHeader: (0, G.A)({
                    messageProps: e,
                    setPopout: J,
                    messagePopouts: H,
                    replyReference: I,
                    author: eu,
                    repliedMessage: X,
                    roleIcon: ep,
                }),
                childrenAccessories: (0, k.A)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: eo,
                    hasBailedAst: ec,
                    isInteracting: es,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0,
                }),
                childrenSystemMessage: (0, V.A)(e),
                childrenMessageContent: eA,
                onMouseMove: ee,
                onMouseLeave: et,
                "aria-labelledby": eh,
                "aria-describedby": em,
                hasThread: !1,
                author: eu,
            }),
        ],
    });
}
let Z = l.memo(function (e) {
    let t,
        n,
        {
            id: s,
            message: r,
            message: { id: _ },
            channel: N,
            channel: { id: q },
            compact: J = !1,
            className: $,
            flashKey: Z,
            groupId: X,
            renderContentOnly: Q,
        } = e;
    o()(r.type !== W.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let ee = W.sl8.has(r.type) ? r.messageReference : void 0,
        { onFocus: et, ...en } = (0, c.rm)(e.id ?? ""),
        ei = E.hD.useSetting(),
        el = E.rs.useSetting(),
        es = (0, d.bG)([f.A], () => f.A.getMessageByReference(ee)),
        { popouts: ea, selected: er, setPopout: eo } = (0, O.A)(r.id, K.Fd),
        ec = (0, M.VL)(r, N, eo),
        ed = (0, M.ri)(r, N),
        {
            handleMouseEnter: eu,
            handleMouseLeave: eh,
            hasHovered: em,
            isHovered: eA,
        } = (0, M.yp)({ groupId: X, message: r, defaultValue: er }),
        { isFocused: eg, hasFocused: ep, handleFocus: ef, handleBlur: e_ } = (0, M.G8)(et),
        eE = l.useCallback(
            (e) => {
                ef(e), eu(e);
            },
            [ef, eu],
        ),
        ex = l.useCallback(
            (e) => {
                e_(e), eh();
            },
            [e_, eh],
        ),
        eC = (0, d.bG)([S.A], () => S.A.isEditing(q, _), [q, _]),
        eS = (0, d.bG)([h.A], () => h.A.keyboardModeEnabled),
        eI = er || eC || (eS && eg),
        eT = eI || eA,
        eN = (0, d.bG)(
            [x.A],
            () => r.hasFlag(W.pr7.HAS_THREAD) && x.A.getChannel(I.default.castMessageIdAsChannelId(r.id)),
        ),
        eb = r.isFirstMessageInForumPost(N),
        ey = (0, g.S)((r.editedTimestamp ?? r.timestamp).valueOf()),
        ev = (0, d.bG)([C.A], () => C.A.isDeveloper),
        {
            content: ej,
            hasSpoilerEmbeds: eR,
            hasBailedAst: eM,
        } = (0, L.A)(r, {
            hideSimpleEmbedContent: ei && el,
            isInteracting: eT,
            formatInline: !1,
            allowList: eb || ey,
            allowHeading: eb || ey,
            allowLinks: !0,
            allowDevLinks: ev,
            previewLinkTarget: !0,
        }),
        eD = (0, D.A)(_, q, eS),
        eO = (0, y.Ay)(r),
        eL = (0, d.bG)([p.A], () => p.A.getPendingReply(q)),
        eP =
            ((t = l.useRef(Z)),
            l.useEffect(() => {
                t.current = Z ?? t.current;
            }),
            Z ?? t.current),
        ek = (0, A.$7)({ guildId: N.guild_id, roleId: eO.iconRoleId }),
        ew = (0, R.fF)(r, X),
        eU = (0, R.ZD)(r),
        eG = (0, d.bG)([m.A], () => m.A.getMessage(_), [_]),
        eF = (0, P.A)({ message: r, channel: N }),
        eH = l.useRef(window),
        eB = null != eG;
    n = r.type === W.lAJ.CUSTOM_GIFT ? "" : !eC && eB ? (0, w.A)(e, ej) : (0, F.A)(e, ej, eC);
    let eV = r.id === X,
        eK = (0, i.jsx)(u.vN3, {
            offset: { left: 4, right: 4 },
            children: (0, i.jsx)("li", {
                id: s,
                className: Y.Nt,
                "aria-setsize": -1,
                children: (0, i.jsx)(j.A, {
                    ...en,
                    "aria-setsize": -1,
                    "aria-roledescription": z.intl.string(z.t.BAB0yK),
                    "aria-labelledby": ew,
                    "aria-describedby": eU,
                    onFocus: eE,
                    onBlur: ex,
                    onContextMenu: ec,
                    onKeyDown: eD,
                    onClick: ed,
                    compact: J,
                    contentOnly: Q,
                    className: a()($, {
                        [Y.iU]: !0,
                        [Y.HJ]: !J,
                        [Y.mK]: r.mentioned,
                        [Y.M1]: (0, T.ec)(r),
                        [Y.SH]: r.type === W.lAJ.NITRO_NOTIFICATION,
                        [Y.H4]: (0, b.A)(r),
                        [Y._A]: !Q && (eV || r.type === W.lAJ.REPLY),
                        [Y.wH]: eI,
                        [Y.$n]: eL?.message.id === r.id,
                        [Y.$w]: r.isCommandType() && r.state === W.cmJ.SENDING,
                        [Y.DX]: eB,
                    }),
                    zalgo: !eC,
                    childrenRepliedMessage:
                        Q || r.type !== W.lAJ.REPLY
                            ? void 0
                            : (0, B.A)({
                                  ...e,
                                  setPopout: eo,
                                  referencedUsernameProfile: ea.referencedUsernameProfile,
                                  referencedAvatarProfile: ea.referencedAvatarProfile,
                                  replyReference: ee,
                                  replyMessage: es,
                                  isReplySpineClickable: !0,
                              }),
                    childrenExecutedCommand: (0, H.A)(e, eo, ea),
                    childrenHeader: Q
                        ? void 0
                        : (0, G.A)({
                              messageProps: e,
                              setPopout: eo,
                              messagePopouts: ea,
                              replyReference: ee,
                              author: eO,
                              repliedMessage: es,
                              roleIcon: ek,
                          }),
                    childrenAccessories: (0, k.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: eR,
                        hasBailedAst: eM,
                        handleContextMenu: ec,
                        isInteracting: eT,
                        isAutomodBlockedMessage: eB,
                        forceAddReactions: r.type === W.lAJ.EMOJI_ADDED,
                    }),
                    childrenButtons:
                        em || ep
                            ? (0, U.A)({
                                  buttonProps: e,
                                  setPopout: eo,
                                  messagePopouts: ea,
                                  isFocused: eA || eg,
                                  messageWindow: eH.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, V.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: eu,
                    onMouseLeave: eh,
                    hasThread: !Q && r.hasFlag(W.pr7.HAS_THREAD) && null != eN,
                    isSystemMessage: (0, b.A)(r),
                    hasReply: r.type === W.lAJ.REPLY,
                    messageRef: (e) => {
                        (eF.current = e), (eH.current = e?.ownerDocument?.defaultView ?? window);
                    },
                    author: eO,
                }),
            }),
        });
    return null != eP
        ? (0, i.jsx)(
              v.A,
              { flashKey: eP, className: a()({ [Y.bB]: !0, [Y._A]: !J && r.id === X }), children: eK },
              `bg-flash-${s}`,
          )
        : eK;
});
