n.d(t, { Av: () => q, Ay: () => Z, VO: () => J });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(837381),
    d = n(311907),
    u = n(397927),
    h = n(775602),
    m = n(93474),
    A = n(201275),
    p = n(384231),
    g = n(853145),
    f = n(9842),
    _ = n(976860),
    E = n(253932),
    C = n(734057),
    x = n(540999),
    S = n(580745),
    T = n(661191),
    I = n(141468),
    N = n(375901),
    v = n(143413),
    y = n(763754),
    b = n(245748),
    R = n(491182),
    j = n(860227),
    M = n(112758),
    D = n(866897),
    O = n(754459),
    L = n(538355),
    P = n(522871),
    w = n(699352),
    k = n(426153),
    U = n(444529),
    G = n(241874),
    F = n(91624),
    H = n(653008),
    B = n(162792),
    V = n(675722),
    W = n(381941),
    K = n(652215),
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
        compact: a = !1,
        className: r,
    } = e;
    o()(n.type === K.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let { ...u } = (0, c.rm)(e.id ?? ""),
        h = (0, d.bG)([f.A], () => f.A.getMessageByReference(l)),
        { popouts: m, setPopout: A } = (0, O.A)(n.id, W.Fd),
        p = (0, y.Ay)(n),
        g = (0, j.fF)(n),
        _ = (0, j.ZD)(n);
    return n.type === K.lAJ.THREAD_STARTER_MESSAGE && null != h && h.state === f.a.LOADED
        ? (0, i.jsx)($, { ...e, viewingChannelId: n.channel_id, message: h.message, groupId: h.message.id })
        : (0, i.jsx)(R.A, {
              ...u,
              id: t,
              compact: a,
              className: s()(r, { [Y.iU]: !0, [Y.HJ]: !a, [Y.H4]: !0, [Y._A]: !0 }),
              childrenHeader: (0, G.A)({
                  messageProps: e,
                  setPopout: A,
                  messagePopouts: m,
                  replyReference: l,
                  author: p,
              }),
              childrenSystemMessage: (0, V.A)(e),
              childrenMessageContent: null,
              "aria-labelledby": g,
              "aria-describedby": _,
              hasThread: !1,
              author: p,
          });
}
function $(e) {
    let {
            id: t,
            message: n,
            message: { id: a, channel_id: r },
            channel: { guild_id: o },
            compact: m = !1,
            className: g,
            groupId: C,
            viewingChannelId: S,
        } = e,
        T = n.type === K.lAJ.REPLY ? n.messageReference : void 0,
        { onFocus: N, ...b } = (0, c.rm)(e.id ?? ""),
        { isFocused: P, handleFocus: k, handleBlur: U } = (0, M.G8)(N),
        { popouts: H, selected: q, setPopout: J } = (0, O.A)(n.id, W.Fd),
        $ = E.hD.useSetting(),
        Z = E.rs.useSetting(),
        X = (0, d.bG)([f.A], () => f.A.getMessageByReference(T)),
        Q = (0, p.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        {
            handleMouseEnter: ee,
            handleMouseLeave: et,
            isHovered: en,
        } = (0, M.yp)({ groupId: C, message: n, defaultValue: q }),
        ei = (0, d.bG)([h.A], () => h.A.keyboardModeEnabled),
        el = q || (ei && P),
        ea = el || en,
        es = (0, d.bG)([x.A], () => x.A.isDeveloper),
        {
            content: er,
            hasSpoilerEmbeds: eo,
            hasBailedAst: ec,
        } = (0, L.A)(n, {
            hideSimpleEmbedContent: $ && Z,
            isInteracting: ea,
            formatInline: !1,
            allowList: Q,
            allowHeading: Q,
            allowLinks: !0,
            allowDevLinks: es,
            previewLinkTarget: !0,
            viewingChannelId: S,
        }),
        ed = (0, D.A)(a, r, ei),
        eu = (0, y.Ay)(n),
        eh = (0, j.fF)(n, C),
        em = (0, j.ZD)(n),
        eA = (0, F.A)(e, er, !1),
        ep = l.useCallback(() => (0, _.uh)(o, r, a), [o, r, a]),
        eg = (0, A.$7)({ guildId: o, roleId: eu.iconRoleId });
    return (0, i.jsxs)("div", {
        className: Y.m5,
        children: [
            (0, i.jsx)(u.DUT, {
                className: Y.lA,
                onClick: ep,
                "aria-label": z.intl.string(z.t.k5WiPf),
                children: z.intl.string(z.t.k5WiPf),
            }),
            (0, i.jsx)(R.A, {
                ...b,
                id: t,
                compact: m,
                className: s()(g, {
                    [Y.iU]: !0,
                    [Y.HJ]: !m,
                    [Y.mK]: n.mentioned,
                    [Y.M1]: (0, I.ec)(n),
                    [Y.H4]: (0, v.A)(n),
                    [Y._A]: n.id === C || n.type === K.lAJ.REPLY,
                    [Y.wH]: el,
                }),
                zalgo: !0,
                onKeyDown: ed,
                onFocus: k,
                onBlur: U,
                childrenRepliedMessage:
                    n.type === K.lAJ.REPLY &&
                    (0, B.A)({
                        ...e,
                        setPopout: J,
                        referencedUsernameProfile: H.referencedUsernameProfile,
                        referencedAvatarProfile: H.referencedAvatarProfile,
                        replyReference: T,
                        replyMessage: X,
                        isReplySpineClickable: !0,
                    }),
                childrenHeader: (0, G.A)({
                    messageProps: e,
                    setPopout: J,
                    messagePopouts: H,
                    replyReference: T,
                    author: eu,
                    repliedMessage: X,
                    roleIcon: eg,
                }),
                childrenAccessories: (0, w.A)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: eo,
                    hasBailedAst: ec,
                    isInteracting: ea,
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
            id: a,
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
    o()(r.type !== K.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let ee = K.sl8.has(r.type) ? r.messageReference : void 0,
        { onFocus: et, ...en } = (0, c.rm)(e.id ?? ""),
        ei = E.hD.useSetting(),
        el = E.rs.useSetting(),
        ea = (0, d.bG)([f.A], () => f.A.getMessageByReference(ee)),
        { popouts: es, selected: er, setPopout: eo } = (0, O.A)(r.id, W.Fd),
        ec = (0, M.VL)(r, N, eo),
        ed = (0, M.ri)(r, N),
        {
            handleMouseEnter: eu,
            handleMouseLeave: eh,
            hasHovered: em,
            isHovered: eA,
        } = (0, M.yp)({ groupId: X, message: r, defaultValue: er }),
        { isFocused: ep, hasFocused: eg, handleFocus: ef, handleBlur: e_ } = (0, M.G8)(et),
        eE = l.useCallback(
            (e) => {
                ef(e), eu(e);
            },
            [ef, eu],
        ),
        eC = l.useCallback(
            (e) => {
                e_(e), eh();
            },
            [e_, eh],
        ),
        ex = (0, d.bG)([S.A], () => S.A.isEditing(q, _), [q, _]),
        eS = (0, d.bG)([h.A], () => h.A.keyboardModeEnabled),
        eT = er || ex || (eS && ep),
        eI = eT || eA,
        eN = (0, d.bG)(
            [C.A],
            () => r.hasFlag(K.pr7.HAS_THREAD) && C.A.getChannel(T.default.castMessageIdAsChannelId(r.id)),
        ),
        ev = r.isFirstMessageInForumPost(N),
        ey = (0, p.S)((r.editedTimestamp ?? r.timestamp).valueOf()),
        eb = (0, d.bG)([x.A], () => x.A.isDeveloper),
        {
            content: eR,
            hasSpoilerEmbeds: ej,
            hasBailedAst: eM,
        } = (0, L.A)(r, {
            hideSimpleEmbedContent: ei && el,
            isInteracting: eI,
            formatInline: !1,
            allowList: ev || ey,
            allowHeading: ev || ey,
            allowLinks: !0,
            allowDevLinks: eb,
            previewLinkTarget: !0,
        }),
        eD = (0, D.A)(_, q, eS),
        eO = (0, y.Ay)(r),
        eL = (0, d.bG)([g.A], () => g.A.getPendingReply(q)),
        eP =
            ((t = l.useRef(Z)),
            l.useEffect(() => {
                t.current = Z ?? t.current;
            }),
            Z ?? t.current),
        ew = (0, A.$7)({ guildId: N.guild_id, roleId: eO.iconRoleId }),
        ek = (0, j.fF)(r, X),
        eU = (0, j.ZD)(r),
        eG = (0, d.bG)([m.A], () => m.A.getMessage(_), [_]),
        eF = (0, P.A)({ message: r, channel: N }),
        eH = l.useRef(window),
        eB = null != eG;
    n = r.type === K.lAJ.CUSTOM_GIFT ? "" : !ex && eB ? (0, k.A)(e, eR) : (0, F.A)(e, eR, ex);
    let eV = r.id === X,
        eW = (0, i.jsx)(u.vN3, {
            offset: { left: 4, right: 4 },
            children: (0, i.jsx)("li", {
                id: a,
                className: Y.Nt,
                "aria-setsize": -1,
                children: (0, i.jsx)(R.A, {
                    ...en,
                    "aria-setsize": -1,
                    "aria-roledescription": z.intl.string(z.t.BAB0yK),
                    "aria-labelledby": ek,
                    "aria-describedby": eU,
                    onFocus: eE,
                    onBlur: eC,
                    onContextMenu: ec,
                    onKeyDown: eD,
                    onClick: ed,
                    compact: J,
                    contentOnly: Q,
                    className: s()($, {
                        [Y.iU]: !0,
                        [Y.HJ]: !J,
                        [Y.mK]: r.mentioned,
                        [Y.M1]: (0, I.ec)(r),
                        [Y.SH]: r.type === K.lAJ.NITRO_NOTIFICATION,
                        [Y.H4]: (0, v.A)(r),
                        [Y._A]: !Q && (eV || r.type === K.lAJ.REPLY),
                        [Y.wH]: eT,
                        [Y.$n]: eL?.message.id === r.id,
                        [Y.$w]: r.isCommandType() && r.state === K.cmJ.SENDING,
                        [Y.DX]: eB,
                    }),
                    zalgo: !ex,
                    childrenRepliedMessage:
                        Q || r.type !== K.lAJ.REPLY
                            ? void 0
                            : (0, B.A)({
                                  ...e,
                                  setPopout: eo,
                                  referencedUsernameProfile: es.referencedUsernameProfile,
                                  referencedAvatarProfile: es.referencedAvatarProfile,
                                  replyReference: ee,
                                  replyMessage: ea,
                                  isReplySpineClickable: !0,
                              }),
                    childrenExecutedCommand: (0, H.A)(e, eo, es),
                    childrenHeader: Q
                        ? void 0
                        : (0, G.A)({
                              messageProps: e,
                              setPopout: eo,
                              messagePopouts: es,
                              replyReference: ee,
                              author: eO,
                              repliedMessage: ea,
                              roleIcon: ew,
                          }),
                    childrenAccessories: (0, w.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: ej,
                        hasBailedAst: eM,
                        handleContextMenu: ec,
                        isInteracting: eI,
                        isAutomodBlockedMessage: eB,
                        forceAddReactions: r.type === K.lAJ.EMOJI_ADDED,
                    }),
                    childrenButtons:
                        em || eg
                            ? (0, U.A)({
                                  buttonProps: e,
                                  setPopout: eo,
                                  messagePopouts: es,
                                  isFocused: eA || ep,
                                  messageWindow: eH.current,
                              })
                            : void 0,
                    childrenSystemMessage: (0, V.A)(e),
                    childrenMessageContent: n,
                    onMouseMove: eu,
                    onMouseLeave: eh,
                    hasThread: !Q && r.hasFlag(K.pr7.HAS_THREAD) && null != eN,
                    isSystemMessage: (0, v.A)(r),
                    hasReply: r.type === K.lAJ.REPLY,
                    messageRef: (e) => {
                        (eF.current = e), (eH.current = e?.ownerDocument?.defaultView ?? window);
                    },
                    author: eO,
                }),
            }),
        });
    return null != eP
        ? (0, i.jsx)(
              b.A,
              { flashKey: eP, className: s()({ [Y.bB]: !0, [Y._A]: !J && r.id === X }), children: eW },
              `bg-flash-${a}`,
          )
        : eW;
});
