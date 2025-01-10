n.d(t, {
    AP: function () {
        return q;
    },
    Ru: function () {
        return X;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(91192),
    d = n(442837),
    u = n(481060),
    h = n(607070),
    p = n(223606),
    m = n(518738),
    f = n(628238),
    g = n(911266),
    C = n(807092),
    x = n(869765),
    v = n(703656),
    _ = n(695346),
    I = n(592125),
    E = n(906467),
    b = n(323873),
    Z = n(709054),
    N = n(786761),
    S = n(534091),
    T = n(901461),
    j = n(739566),
    A = n(233715),
    y = n(492593),
    P = n(453687),
    M = n(348238),
    R = n(62072),
    L = n(38267),
    k = n(25015),
    O = n(689674),
    D = n(438075),
    w = n(764893),
    B = n(481363),
    U = n(900902),
    H = n(252032),
    G = n(737243),
    F = n(614584),
    V = n(295790),
    z = n(959517),
    W = n(981631),
    K = n(388032),
    Y = n(46124);
function q(e, t, n) {
    return e.getElementById((0, S.p)(t, n));
}
function X(e) {
    var t;
    let {
        id: n,
        message: l,
        message: { messageReference: r },
        compact: s = !1,
        className: u
    } = e;
    o()(l.type === W.uaV.THREAD_STARTER_MESSAGE, 'Message must be a thread starter message');
    let { ...h } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        p = (0, d.e7)([x.Z], () => x.Z.getMessageByReference(r)),
        { popouts: m, setPopout: f } = (0, L.Z)(l.id, z.d$),
        g = (0, j.ZP)(l),
        C = (0, P.iG)(l),
        v = (0, P.Gx)(l);
    return l.type === W.uaV.THREAD_STARTER_MESSAGE && null != p && p.state === x.Y.LOADED
        ? (0, i.jsx)(J, {
              ...e,
              viewingChannelId: l.channel_id,
              message: p.message,
              groupId: p.message.id
          })
        : (0, i.jsx)(y.Z, {
              ...h,
              id: n,
              compact: s,
              className: a()(u, {
                  [Y.message]: !0,
                  [Y.cozyMessage]: !s,
                  [Y.systemMessage]: !0,
                  [Y.groupStart]: !0
              }),
              childrenHeader: (0, U.Z)({
                  messageProps: e,
                  setPopout: f,
                  messagePopouts: m,
                  replyReference: r,
                  author: g
              }),
              childrenSystemMessage: (0, V.Z)(e),
              childrenMessageContent: null,
              'aria-labelledby': C,
              'aria-describedby': v,
              hasThread: !1
          });
}
function J(e) {
    var t, n;
    let {
            id: r,
            message: s,
            message: { id: o, channel_id: p },
            channel: { guild_id: g },
            compact: C = !1,
            className: I,
            groupId: E,
            viewingChannelId: b
        } = e,
        Z = s.type === W.uaV.REPLY ? s.messageReference : void 0,
        { onFocus: S, ...A } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        { isFocused: O, handleFocus: w, handleBlur: B } = (0, M.bb)(S),
        { popouts: G, selected: q, setPopout: X } = (0, L.Z)(s.id, z.d$),
        J = _.RS.useSetting(),
        Q = _.NA.useSetting(),
        $ = (0, d.e7)([x.Z], () => x.Z.getMessageByReference(Z)),
        ee = (0, f.A)((null !== (n = s.editedTimestamp) && void 0 !== n ? n : s.timestamp).valueOf()),
        {
            handleMouseEnter: et,
            handleMouseLeave: en,
            isHovered: ei
        } = (0, M.tn)({
            groupId: E,
            message: s,
            defaultValue: q
        }),
        el = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        er = q || (el && O),
        ea = er || ei,
        { content: es, hasSpoilerEmbeds: eo } = (0, k.Z)(s, {
            hideSimpleEmbedContent: J && Q,
            isInteracting: ea,
            formatInline: !1,
            allowList: ee,
            allowHeading: ee,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: b
        }),
        ec = (0, R.Z)(o, p, el),
        ed = (0, j.ZP)(s),
        eu = (0, P.iG)(s, E),
        eh = (0, P.Gx)(s),
        ep = (0, H.Z)(e, es, !1),
        em = l.useCallback(() => (0, v.XU)(g, p, o), [g, p, o]),
        ef = (0, m.p9)({
            guildId: g,
            roleId: ed.iconRoleId
        });
    return (0, i.jsxs)('div', {
        className: Y.quotedChatMessage,
        children: [
            (0, i.jsx)(u.Clickable, {
                className: Y.jump,
                onClick: em,
                'aria-label': K.intl.string(K.t.k5WiPT),
                children: K.intl.string(K.t.k5WiPT)
            }),
            (0, i.jsx)(y.Z, {
                ...A,
                id: r,
                compact: C,
                className: a()(I, {
                    [Y.message]: !0,
                    [Y.cozyMessage]: !C,
                    [Y.mentioned]: s.mentioned,
                    [Y.ephemeral]: (0, N.Pv)(s),
                    [Y.systemMessage]: (0, T.Z)(s),
                    [Y.groupStart]: s.id === E || s.type === W.uaV.REPLY,
                    [Y.selected]: er
                }),
                zalgo: !0,
                onKeyDown: ec,
                onFocus: w,
                onBlur: B,
                childrenRepliedMessage:
                    s.type === W.uaV.REPLY &&
                    (0, F.Z)({
                        ...e,
                        setPopout: X,
                        referencedUsernameProfile: G.referencedUsernameProfile,
                        referencedAvatarProfile: G.referencedAvatarProfile,
                        replyReference: Z,
                        replyMessage: $,
                        isReplySpineClickable: !0
                    }),
                childrenHeader: (0, U.Z)({
                    messageProps: e,
                    setPopout: X,
                    messagePopouts: G,
                    replyReference: Z,
                    author: ed,
                    repliedMessage: $,
                    roleIcon: ef
                }),
                childrenAccessories: (0, D.Z)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: eo,
                    isInteracting: ea,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0
                }),
                childrenSystemMessage: (0, V.Z)(e),
                childrenMessageContent: ep,
                onMouseMove: et,
                onMouseLeave: en,
                'aria-labelledby': eu,
                'aria-describedby': eh,
                hasThread: !1
            })
        ]
    });
}
t.ZP = l.memo(function (e) {
    var t, n;
    let r;
    let {
        id: s,
        message: v,
        message: { id: S },
        channel: q,
        channel: { id: X },
        compact: J = !1,
        className: Q,
        flashKey: $,
        groupId: ee,
        renderContentOnly: et
    } = e;
    o()(v.type !== W.uaV.THREAD_STARTER_MESSAGE, 'Message must not be a thread starter message');
    let en = W.OBS.has(v.type) ? v.messageReference : void 0,
        { onFocus: ei, ...el } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        er = _.RS.useSetting(),
        ea = _.NA.useSetting(),
        es = (0, d.e7)([x.Z], () => x.Z.getMessageByReference(en)),
        { popouts: eo, selected: ec, setPopout: ed } = (0, L.Z)(v.id, z.d$),
        eu = (0, M.qo)(v, q, ed),
        eh = (0, M.Go)(v, q),
        {
            handleMouseEnter: ep,
            handleMouseLeave: em,
            hasHovered: ef,
            isHovered: eg
        } = (0, M.tn)({
            groupId: ee,
            message: v,
            defaultValue: ec
        }),
        { isFocused: eC, hasFocused: ex, handleFocus: ev, handleBlur: e_ } = (0, M.bb)(ei),
        eI = (0, d.e7)([b.Z], () => b.Z.isEditing(X, S), [X, S]),
        eE = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        eb = ec || eI || (eE && eC),
        eZ = eb || eg,
        eN = (0, d.e7)([I.Z], () => v.hasFlag(W.iLy.HAS_THREAD) && I.Z.getChannel(Z.default.castMessageIdAsChannelId(v.id))),
        eS = v.isFirstMessageInForumPost(q),
        eT = (0, f.A)((null !== (n = v.editedTimestamp) && void 0 !== n ? n : v.timestamp).valueOf()),
        ej = (0, d.e7)([E.Z], () => E.Z.isDeveloper),
        { content: eA, hasSpoilerEmbeds: ey } = (0, k.Z)(v, {
            hideSimpleEmbedContent: er && ea,
            isInteracting: eZ,
            formatInline: !1,
            allowList: eS || eT,
            allowHeading: eS || eT,
            allowLinks: !0,
            allowDevLinks: ej,
            previewLinkTarget: !0
        }),
        eP = (0, R.Z)(S, X, eE),
        eM = (0, j.ZP)(v),
        eR = (0, d.e7)([C.Z], () => C.Z.getPendingReply(X)),
        eL = (function (e) {
            let t = l.useRef(e);
            return l.useEffect(() => void (t.current = null != e ? e : t.current)), null != e ? e : t.current;
        })($),
        ek = (0, m.p9)({
            guildId: q.guild_id,
            roleId: eM.iconRoleId
        }),
        eO = (0, P.iG)(v, ee),
        eD = (0, P.Gx)(v),
        ew = (0, d.e7)([p.Z], () => p.Z.getMessage(S), [S]),
        eB = (0, O.Z)({
            message: v,
            channel: q
        }),
        eU = null != ew;
    r = v.type === W.uaV.CUSTOM_GIFT ? '' : !eI && eU ? (0, w.Z)(e, eA) : (0, H.Z)(e, eA, eI);
    let eH = v.id === ee,
        eG = (0, i.jsx)(u.FocusRing, {
            offset: {
                left: 4,
                right: 4
            },
            children: (0, i.jsxs)('li', {
                id: s,
                className: Y.messageListItem,
                'aria-setsize': -1,
                children: [
                    v.hasPotions() && (0, i.jsx)(g.Z, { message: v }),
                    (0, i.jsx)(y.Z, {
                        ...el,
                        'aria-setsize': -1,
                        'aria-roledescription': K.intl.string(K.t.BAB0yM),
                        'aria-labelledby': eO,
                        'aria-describedby': eD,
                        onFocus: ev,
                        onBlur: e_,
                        onContextMenu: eu,
                        onKeyDown: eP,
                        onClick: eh,
                        compact: J,
                        contentOnly: et,
                        className: a()(Q, {
                            [Y.message]: !0,
                            [Y.cozyMessage]: !J,
                            [Y.mentioned]: v.mentioned,
                            [Y.ephemeral]: (0, N.Pv)(v),
                            [Y.nitroMessage]: v.type === W.uaV.NITRO_NOTIFICATION,
                            [Y.systemMessage]: (0, T.Z)(v),
                            [Y.groupStart]: !et && (eH || v.type === W.uaV.REPLY),
                            [Y.selected]: eb,
                            [Y.replying]: (null == eR ? void 0 : eR.message.id) === v.id,
                            [Y.interactionSending]: v.isCommandType() && v.state === W.yb.SENDING,
                            [Y.automodMessage]: eU,
                            [Y.potioned]: v.hasPotions()
                        }),
                        zalgo: !eI,
                        childrenRepliedMessage:
                            et || v.type !== W.uaV.REPLY
                                ? void 0
                                : (0, F.Z)({
                                      ...e,
                                      setPopout: ed,
                                      referencedUsernameProfile: eo.referencedUsernameProfile,
                                      referencedAvatarProfile: eo.referencedAvatarProfile,
                                      replyReference: en,
                                      replyMessage: es,
                                      isReplySpineClickable: !0
                                  }),
                        childrenExecutedCommand: (0, G.Z)(e, ed, eo),
                        childrenHeader: et
                            ? void 0
                            : (0, U.Z)({
                                  messageProps: e,
                                  setPopout: ed,
                                  messagePopouts: eo,
                                  replyReference: en,
                                  author: eM,
                                  repliedMessage: es,
                                  roleIcon: ek
                              }),
                        childrenAccessories: (0, D.Z)({
                            channelMessageProps: e,
                            hasSpoilerEmbeds: ey,
                            handleContextMenu: eu,
                            isInteracting: eZ,
                            isAutomodBlockedMessage: eU
                        }),
                        childrenButtons:
                            ef || ex
                                ? (0, B.Z)({
                                      buttonProps: e,
                                      setPopout: ed,
                                      messagePopouts: eo,
                                      isFocused: eg || eC
                                  })
                                : void 0,
                        childrenSystemMessage: (0, V.Z)(e),
                        childrenMessageContent: r,
                        onMouseMove: ep,
                        onMouseLeave: em,
                        hasThread: !et && v.hasFlag(W.iLy.HAS_THREAD) && null != eN,
                        isSystemMessage: (0, T.Z)(v),
                        hasReply: v.type === W.uaV.REPLY,
                        messageRef: eB
                    })
                ]
            })
        });
    return null != eL
        ? (0, i.jsx)(
              A.Z,
              {
                  flashKey: eL,
                  className: a()({
                      [Y.backgroundFlash]: !0,
                      [Y.groupStart]: !J && v.id === ee
                  }),
                  children: eG
              },
              'bg-flash-'.concat(s)
          )
        : eG;
});
