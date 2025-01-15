n.d(t, {
    AP: function () {
        return J;
    },
    Ru: function () {
        return Q;
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
    C = n(111810),
    x = n(235894),
    v = n(807092),
    _ = n(869765),
    I = n(703656),
    E = n(695346),
    b = n(592125),
    Z = n(906467),
    N = n(323873),
    S = n(709054),
    T = n(786761),
    j = n(534091),
    A = n(901461),
    y = n(739566),
    P = n(233715),
    M = n(492593),
    R = n(453687),
    L = n(348238),
    k = n(62072),
    O = n(38267),
    D = n(25015),
    w = n(689674),
    B = n(438075),
    U = n(764893),
    H = n(481363),
    G = n(900902),
    F = n(252032),
    V = n(737243),
    z = n(614584),
    W = n(295790),
    K = n(959517),
    Y = n(981631),
    q = n(388032),
    X = n(831637);
function J(e, t, n) {
    return e.getElementById((0, j.p)(t, n));
}
function Q(e) {
    var t;
    let {
        id: n,
        message: l,
        message: { messageReference: r },
        compact: s = !1,
        className: u
    } = e;
    o()(l.type === Y.uaV.THREAD_STARTER_MESSAGE, 'Message must be a thread starter message');
    let { ...h } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        p = (0, d.e7)([_.Z], () => _.Z.getMessageByReference(r)),
        { popouts: m, setPopout: f } = (0, O.Z)(l.id, K.d$),
        g = (0, y.ZP)(l),
        C = (0, R.iG)(l),
        x = (0, R.Gx)(l);
    return l.type === Y.uaV.THREAD_STARTER_MESSAGE && null != p && p.state === _.Y.LOADED
        ? (0, i.jsx)($, {
              ...e,
              viewingChannelId: l.channel_id,
              message: p.message,
              groupId: p.message.id
          })
        : (0, i.jsx)(M.Z, {
              ...h,
              id: n,
              compact: s,
              className: a()(u, {
                  [X.message]: !0,
                  [X.cozyMessage]: !s,
                  [X.systemMessage]: !0,
                  [X.groupStart]: !0
              }),
              childrenHeader: (0, G.Z)({
                  messageProps: e,
                  setPopout: f,
                  messagePopouts: m,
                  replyReference: r,
                  author: g
              }),
              childrenSystemMessage: (0, W.Z)(e),
              childrenMessageContent: null,
              'aria-labelledby': C,
              'aria-describedby': x,
              hasThread: !1
          });
}
function $(e) {
    var t, n;
    let {
            id: r,
            message: s,
            message: { id: o, channel_id: p },
            channel: { guild_id: g },
            compact: C = !1,
            className: x,
            groupId: v,
            viewingChannelId: b
        } = e,
        Z = s.type === Y.uaV.REPLY ? s.messageReference : void 0,
        { onFocus: N, ...S } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        { isFocused: j, handleFocus: P, handleBlur: w } = (0, L.bb)(N),
        { popouts: U, selected: H, setPopout: V } = (0, O.Z)(s.id, K.d$),
        J = E.RS.useSetting(),
        Q = E.NA.useSetting(),
        $ = (0, d.e7)([_.Z], () => _.Z.getMessageByReference(Z)),
        ee = (0, f.A)((null !== (n = s.editedTimestamp) && void 0 !== n ? n : s.timestamp).valueOf()),
        {
            handleMouseEnter: et,
            handleMouseLeave: en,
            isHovered: ei
        } = (0, L.tn)({
            groupId: v,
            message: s,
            defaultValue: H
        }),
        el = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        er = H || (el && j),
        ea = er || ei,
        { content: es, hasSpoilerEmbeds: eo } = (0, D.Z)(s, {
            hideSimpleEmbedContent: J && Q,
            isInteracting: ea,
            formatInline: !1,
            allowList: ee,
            allowHeading: ee,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: b
        }),
        ec = (0, k.Z)(o, p, el),
        ed = (0, y.ZP)(s),
        eu = (0, R.iG)(s, v),
        eh = (0, R.Gx)(s),
        ep = (0, F.Z)(e, es, !1),
        em = l.useCallback(() => (0, I.XU)(g, p, o), [g, p, o]),
        ef = (0, m.p9)({
            guildId: g,
            roleId: ed.iconRoleId
        });
    return (0, i.jsxs)('div', {
        className: X.quotedChatMessage,
        children: [
            (0, i.jsx)(u.Clickable, {
                className: X.jump,
                onClick: em,
                'aria-label': q.intl.string(q.t.k5WiPT),
                children: q.intl.string(q.t.k5WiPT)
            }),
            (0, i.jsx)(M.Z, {
                ...S,
                id: r,
                compact: C,
                className: a()(x, {
                    [X.message]: !0,
                    [X.cozyMessage]: !C,
                    [X.mentioned]: s.mentioned,
                    [X.ephemeral]: (0, T.Pv)(s),
                    [X.systemMessage]: (0, A.Z)(s),
                    [X.groupStart]: s.id === v || s.type === Y.uaV.REPLY,
                    [X.selected]: er
                }),
                zalgo: !0,
                onKeyDown: ec,
                onFocus: P,
                onBlur: w,
                childrenRepliedMessage:
                    s.type === Y.uaV.REPLY &&
                    (0, z.Z)({
                        ...e,
                        setPopout: V,
                        referencedUsernameProfile: U.referencedUsernameProfile,
                        referencedAvatarProfile: U.referencedAvatarProfile,
                        replyReference: Z,
                        replyMessage: $,
                        isReplySpineClickable: !0
                    }),
                childrenHeader: (0, G.Z)({
                    messageProps: e,
                    setPopout: V,
                    messagePopouts: U,
                    replyReference: Z,
                    author: ed,
                    repliedMessage: $,
                    roleIcon: ef
                }),
                childrenAccessories: (0, B.Z)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: eo,
                    isInteracting: ea,
                    renderThreadAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1,
                    disableComponentInteractivity: !0
                }),
                childrenSystemMessage: (0, W.Z)(e),
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
        message: I,
        message: { id: j },
        channel: J,
        channel: { id: Q },
        compact: $ = !1,
        className: ee,
        flashKey: et,
        groupId: en,
        renderContentOnly: ei
    } = e;
    o()(I.type !== Y.uaV.THREAD_STARTER_MESSAGE, 'Message must not be a thread starter message');
    let el = Y.OBS.has(I.type) ? I.messageReference : void 0,
        { onFocus: er, ...ea } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        es = (0, C.p7)('ChatMessage'),
        eo = E.RS.useSetting(),
        ec = E.NA.useSetting(),
        ed = (0, d.e7)([_.Z], () => _.Z.getMessageByReference(el)),
        { popouts: eu, selected: eh, setPopout: ep } = (0, O.Z)(I.id, K.d$),
        em = (0, L.qo)(I, J, ep),
        ef = (0, L.Go)(I, J),
        {
            handleMouseEnter: eg,
            handleMouseLeave: eC,
            hasHovered: ex,
            isHovered: ev
        } = (0, L.tn)({
            groupId: en,
            message: I,
            defaultValue: eh
        }),
        { isFocused: e_, hasFocused: eI, handleFocus: eE, handleBlur: eb } = (0, L.bb)(er),
        eZ = l.useCallback(
            (e) => {
                eE(e), eg(e);
            },
            [eE, eg]
        ),
        eN = l.useCallback(
            (e) => {
                eb(e), eC();
            },
            [eb, eC]
        ),
        eS = (0, d.e7)([N.Z], () => N.Z.isEditing(Q, j), [Q, j]),
        eT = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        ej = eh || eS || (eT && e_),
        eA = ej || ev,
        ey = (0, d.e7)([b.Z], () => I.hasFlag(Y.iLy.HAS_THREAD) && b.Z.getChannel(S.default.castMessageIdAsChannelId(I.id))),
        eP = I.isFirstMessageInForumPost(J),
        eM = (0, f.A)((null !== (n = I.editedTimestamp) && void 0 !== n ? n : I.timestamp).valueOf()),
        eR = (0, d.e7)([Z.Z], () => Z.Z.isDeveloper),
        { content: eL, hasSpoilerEmbeds: ek } = (0, D.Z)(I, {
            hideSimpleEmbedContent: eo && ec,
            isInteracting: eA,
            formatInline: !1,
            allowList: eP || eM,
            allowHeading: eP || eM,
            allowLinks: !0,
            allowDevLinks: eR,
            previewLinkTarget: !0
        }),
        eO = (0, k.Z)(j, Q, eT),
        eD = (0, y.ZP)(I),
        ew = (0, d.e7)([v.Z], () => v.Z.getPendingReply(Q)),
        eB = (function (e) {
            let t = l.useRef(e);
            return l.useEffect(() => void (t.current = null != e ? e : t.current)), null != e ? e : t.current;
        })(et),
        eU = (0, m.p9)({
            guildId: J.guild_id,
            roleId: eD.iconRoleId
        }),
        eH = (0, R.iG)(I, en),
        eG = (0, R.Gx)(I),
        eF = (0, d.e7)([p.Z], () => p.Z.getMessage(j), [j]),
        eV = (0, w.Z)({
            message: I,
            channel: J
        }),
        ez = null != eF;
    r = I.type === Y.uaV.CUSTOM_GIFT ? '' : !eS && ez ? (0, U.Z)(e, eL) : (0, F.Z)(e, eL, eS);
    let eW = I.id === en,
        eK = (0, i.jsx)(u.FocusRing, {
            offset: {
                left: 4,
                right: 4
            },
            children: (0, i.jsxs)('li', {
                id: s,
                className: X.messageListItem,
                'aria-setsize': -1,
                children: [
                    (0, x.U)(I) && (0, i.jsx)(g.Z, { message: I }),
                    (0, i.jsx)(M.Z, {
                        ...ea,
                        'aria-setsize': -1,
                        'aria-roledescription': q.intl.string(q.t.BAB0yM),
                        'aria-labelledby': eH,
                        'aria-describedby': eG,
                        onFocus: eZ,
                        onBlur: eN,
                        onContextMenu: em,
                        onKeyDown: eO,
                        onClick: ef,
                        compact: $,
                        contentOnly: ei,
                        className: a()(ee, {
                            [X.message]: !0,
                            [X.cozyMessage]: !$,
                            [X.mentioned]: I.mentioned,
                            [X.ephemeral]: (0, T.Pv)(I),
                            [X.nitroMessage]: I.type === Y.uaV.NITRO_NOTIFICATION,
                            [X.systemMessage]: (0, A.Z)(I),
                            [X.groupStart]: !ei && (eW || I.type === Y.uaV.REPLY),
                            [X.selected]: ej,
                            [X.replying]: (null == ew ? void 0 : ew.message.id) === I.id,
                            [X.interactionSending]: I.isCommandType() && I.state === Y.yb.SENDING,
                            [X.automodMessage]: ez,
                            [X.potioned]: (0, x.U)(I) && es
                        }),
                        zalgo: !eS,
                        childrenRepliedMessage:
                            ei || I.type !== Y.uaV.REPLY
                                ? void 0
                                : (0, z.Z)({
                                      ...e,
                                      setPopout: ep,
                                      referencedUsernameProfile: eu.referencedUsernameProfile,
                                      referencedAvatarProfile: eu.referencedAvatarProfile,
                                      replyReference: el,
                                      replyMessage: ed,
                                      isReplySpineClickable: !0
                                  }),
                        childrenExecutedCommand: (0, V.Z)(e, ep, eu),
                        childrenHeader: ei
                            ? void 0
                            : (0, G.Z)({
                                  messageProps: e,
                                  setPopout: ep,
                                  messagePopouts: eu,
                                  replyReference: el,
                                  author: eD,
                                  repliedMessage: ed,
                                  roleIcon: eU
                              }),
                        childrenAccessories: (0, B.Z)({
                            channelMessageProps: e,
                            hasSpoilerEmbeds: ek,
                            handleContextMenu: em,
                            isInteracting: eA,
                            isAutomodBlockedMessage: ez
                        }),
                        childrenButtons:
                            ex || eI
                                ? (0, H.Z)({
                                      buttonProps: e,
                                      setPopout: ep,
                                      messagePopouts: eu,
                                      isFocused: ev || e_
                                  })
                                : void 0,
                        childrenSystemMessage: (0, W.Z)(e),
                        childrenMessageContent: r,
                        onMouseMove: eg,
                        onMouseLeave: eC,
                        hasThread: !ei && I.hasFlag(Y.iLy.HAS_THREAD) && null != ey,
                        isSystemMessage: (0, A.Z)(I),
                        hasReply: I.type === Y.uaV.REPLY,
                        messageRef: eV
                    })
                ]
            })
        });
    return null != eB
        ? (0, i.jsx)(
              P.Z,
              {
                  flashKey: eB,
                  className: a()({
                      [X.backgroundFlash]: !0,
                      [X.groupStart]: !$ && I.id === en
                  }),
                  children: eK
              },
              'bg-flash-'.concat(s)
          )
        : eK;
});
