n.d(t, {
    AP: function () {
        return Y;
    },
    Ru: function () {
        return q;
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
    g = n(807092),
    C = n(869765),
    x = n(703656),
    v = n(695346),
    _ = n(592125),
    I = n(906467),
    E = n(323873),
    b = n(709054),
    Z = n(786761),
    N = n(534091),
    S = n(901461),
    T = n(739566),
    j = n(233715),
    A = n(492593),
    y = n(453687),
    P = n(348238),
    M = n(62072),
    R = n(38267),
    L = n(25015),
    k = n(689674),
    O = n(438075),
    D = n(764893),
    w = n(481363),
    B = n(900902),
    U = n(252032),
    H = n(737243),
    G = n(614584),
    F = n(295790),
    V = n(959517),
    z = n(981631),
    W = n(388032),
    K = n(46124);
function Y(e, t, n) {
    return e.getElementById((0, N.p)(t, n));
}
function q(e) {
    var t;
    let {
        id: n,
        message: l,
        message: { messageReference: r },
        compact: s = !1,
        className: u
    } = e;
    o()(l.type === z.uaV.THREAD_STARTER_MESSAGE, 'Message must be a thread starter message');
    let { ...h } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        p = (0, d.e7)([C.Z], () => C.Z.getMessageByReference(r)),
        { popouts: m, setPopout: f } = (0, R.Z)(l.id, V.d$),
        g = (0, T.ZP)(l),
        x = (0, y.iG)(l),
        v = (0, y.Gx)(l);
    return l.type === z.uaV.THREAD_STARTER_MESSAGE && null != p && p.state === C.Y.LOADED
        ? (0, i.jsx)(X, {
              ...e,
              viewingChannelId: l.channel_id,
              message: p.message,
              groupId: p.message.id
          })
        : (0, i.jsx)(A.Z, {
              ...h,
              id: n,
              compact: s,
              className: a()(u, {
                  [K.message]: !0,
                  [K.cozyMessage]: !s,
                  [K.systemMessage]: !0,
                  [K.groupStart]: !0
              }),
              childrenHeader: (0, B.Z)({
                  messageProps: e,
                  setPopout: f,
                  messagePopouts: m,
                  replyReference: r,
                  author: g
              }),
              childrenSystemMessage: (0, F.Z)(e),
              childrenMessageContent: null,
              'aria-labelledby': x,
              'aria-describedby': v,
              hasThread: !1
          });
}
function X(e) {
    var t, n;
    let {
            id: r,
            message: s,
            message: { id: o, channel_id: p },
            channel: { guild_id: g },
            compact: _ = !1,
            className: I,
            groupId: E,
            viewingChannelId: b
        } = e,
        N = s.type === z.uaV.REPLY ? s.messageReference : void 0,
        { onFocus: j, ...k } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        { isFocused: D, handleFocus: w, handleBlur: H } = (0, P.bb)(j),
        { popouts: Y, selected: q, setPopout: X } = (0, R.Z)(s.id, V.d$),
        J = v.RS.useSetting(),
        Q = v.NA.useSetting(),
        $ = (0, d.e7)([C.Z], () => C.Z.getMessageByReference(N)),
        ee = (0, f.A)((null !== (n = s.editedTimestamp) && void 0 !== n ? n : s.timestamp).valueOf()),
        {
            handleMouseEnter: et,
            handleMouseLeave: en,
            isHovered: ei
        } = (0, P.tn)({
            groupId: E,
            message: s,
            defaultValue: q
        }),
        el = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        er = q || (el && D),
        ea = er || ei,
        { content: es, hasSpoilerEmbeds: eo } = (0, L.Z)(s, {
            hideSimpleEmbedContent: J && Q,
            isInteracting: ea,
            formatInline: !1,
            allowList: ee,
            allowHeading: ee,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: b
        }),
        ec = (0, M.Z)(o, p, el),
        ed = (0, T.ZP)(s),
        eu = (0, y.iG)(s, E),
        eh = (0, y.Gx)(s),
        ep = (0, U.Z)(e, es, !1),
        em = l.useCallback(() => (0, x.XU)(g, p, o), [g, p, o]),
        ef = (0, m.p9)({
            guildId: g,
            roleId: ed.iconRoleId
        });
    return (0, i.jsxs)('div', {
        className: K.quotedChatMessage,
        children: [
            (0, i.jsx)(u.Clickable, {
                className: K.jump,
                onClick: em,
                'aria-label': W.intl.string(W.t.k5WiPT),
                children: W.intl.string(W.t.k5WiPT)
            }),
            (0, i.jsx)(A.Z, {
                ...k,
                id: r,
                compact: _,
                className: a()(I, {
                    [K.message]: !0,
                    [K.cozyMessage]: !_,
                    [K.mentioned]: s.mentioned,
                    [K.ephemeral]: (0, Z.Pv)(s),
                    [K.systemMessage]: (0, S.Z)(s),
                    [K.groupStart]: s.id === E || s.type === z.uaV.REPLY,
                    [K.selected]: er
                }),
                zalgo: !0,
                onKeyDown: ec,
                onFocus: w,
                onBlur: H,
                childrenRepliedMessage:
                    s.type === z.uaV.REPLY &&
                    (0, G.Z)({
                        ...e,
                        setPopout: X,
                        referencedUsernameProfile: Y.referencedUsernameProfile,
                        referencedAvatarProfile: Y.referencedAvatarProfile,
                        replyReference: N,
                        replyMessage: $,
                        isReplySpineClickable: !0
                    }),
                childrenHeader: (0, B.Z)({
                    messageProps: e,
                    setPopout: X,
                    messagePopouts: Y,
                    replyReference: N,
                    author: ed,
                    repliedMessage: $,
                    roleIcon: ef
                }),
                childrenAccessories: (0, O.Z)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: eo,
                    isInteracting: ea,
                    renderThreadAccessory: !1,
                    renderComponentAccessory: !1,
                    renderSuppressEmbeds: !1,
                    renderReactions: !1
                }),
                childrenSystemMessage: (0, F.Z)(e),
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
        message: x,
        message: { id: N },
        channel: Y,
        channel: { id: q },
        compact: X = !1,
        className: J,
        flashKey: Q,
        groupId: $,
        renderContentOnly: ee
    } = e;
    o()(x.type !== z.uaV.THREAD_STARTER_MESSAGE, 'Message must not be a thread starter message');
    let et = z.OBS.has(x.type) ? x.messageReference : void 0,
        { onFocus: en, ...ei } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        el = v.RS.useSetting(),
        er = v.NA.useSetting(),
        ea = (0, d.e7)([C.Z], () => C.Z.getMessageByReference(et)),
        { popouts: es, selected: eo, setPopout: ec } = (0, R.Z)(x.id, V.d$),
        ed = (0, P.qo)(x, Y, ec),
        eu = (0, P.Go)(x, Y),
        {
            handleMouseEnter: eh,
            handleMouseLeave: ep,
            hasHovered: em,
            isHovered: ef
        } = (0, P.tn)({
            groupId: $,
            message: x,
            defaultValue: eo
        }),
        { isFocused: eg, hasFocused: eC, handleFocus: ex, handleBlur: ev } = (0, P.bb)(en),
        e_ = (0, d.e7)([E.Z], () => E.Z.isEditing(q, N), [q, N]),
        eI = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        eE = eo || e_ || (eI && eg),
        eb = eE || ef,
        eZ = (0, d.e7)([_.Z], () => x.hasFlag(z.iLy.HAS_THREAD) && _.Z.getChannel(b.default.castMessageIdAsChannelId(x.id))),
        eN = x.isFirstMessageInForumPost(Y),
        eS = (0, f.A)((null !== (n = x.editedTimestamp) && void 0 !== n ? n : x.timestamp).valueOf()),
        eT = (0, d.e7)([I.Z], () => I.Z.isDeveloper),
        { content: ej, hasSpoilerEmbeds: eA } = (0, L.Z)(x, {
            hideSimpleEmbedContent: el && er,
            isInteracting: eb,
            formatInline: !1,
            allowList: eN || eS,
            allowHeading: eN || eS,
            allowLinks: !0,
            allowDevLinks: eT,
            previewLinkTarget: !0
        }),
        ey = (0, M.Z)(N, q, eI),
        eP = (0, T.ZP)(x),
        eM = (0, d.e7)([g.Z], () => g.Z.getPendingReply(q)),
        eR = (function (e) {
            let t = l.useRef(e);
            return l.useEffect(() => void (t.current = null != e ? e : t.current)), null != e ? e : t.current;
        })(Q),
        eL = (0, m.p9)({
            guildId: Y.guild_id,
            roleId: eP.iconRoleId
        }),
        ek = (0, y.iG)(x, $),
        eO = (0, y.Gx)(x),
        eD = (0, d.e7)([p.Z], () => p.Z.getMessage(N), [N]),
        ew = (0, k.Z)({
            message: x,
            channel: Y
        }),
        eB = null != eD;
    r = x.type === z.uaV.CUSTOM_GIFT ? '' : !e_ && eB ? (0, D.Z)(e, ej) : (0, U.Z)(e, ej, e_);
    let eU = x.id === $,
        eH = (0, i.jsx)(u.FocusRing, {
            offset: {
                left: 4,
                right: 4
            },
            children: (0, i.jsx)('li', {
                id: s,
                className: K.messageListItem,
                'aria-setsize': -1,
                children: (0, i.jsx)(A.Z, {
                    ...ei,
                    'aria-setsize': -1,
                    'aria-roledescription': W.intl.string(W.t.BAB0yM),
                    'aria-labelledby': ek,
                    'aria-describedby': eO,
                    onFocus: ex,
                    onBlur: ev,
                    onContextMenu: ed,
                    onKeyDown: ey,
                    onClick: eu,
                    compact: X,
                    contentOnly: ee,
                    className: a()(J, {
                        [K.message]: !0,
                        [K.cozyMessage]: !X,
                        [K.mentioned]: x.mentioned,
                        [K.ephemeral]: (0, Z.Pv)(x),
                        [K.nitroMessage]: x.type === z.uaV.NITRO_NOTIFICATION,
                        [K.systemMessage]: (0, S.Z)(x),
                        [K.groupStart]: !ee && (eU || x.type === z.uaV.REPLY),
                        [K.selected]: eE,
                        [K.replying]: (null == eM ? void 0 : eM.message.id) === x.id,
                        [K.interactionSending]: x.isCommandType() && x.state === z.yb.SENDING,
                        [K.automodMessage]: eB
                    }),
                    zalgo: !e_,
                    childrenRepliedMessage:
                        ee || x.type !== z.uaV.REPLY
                            ? void 0
                            : (0, G.Z)({
                                  ...e,
                                  setPopout: ec,
                                  referencedUsernameProfile: es.referencedUsernameProfile,
                                  referencedAvatarProfile: es.referencedAvatarProfile,
                                  replyReference: et,
                                  replyMessage: ea,
                                  isReplySpineClickable: !0
                              }),
                    childrenExecutedCommand: (0, H.Z)(e, ec, es),
                    childrenHeader: ee
                        ? void 0
                        : (0, B.Z)({
                              messageProps: e,
                              setPopout: ec,
                              messagePopouts: es,
                              replyReference: et,
                              author: eP,
                              repliedMessage: ea,
                              roleIcon: eL
                          }),
                    childrenAccessories: (0, O.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: eA,
                        handleContextMenu: ed,
                        isInteracting: eb,
                        isAutomodBlockedMessage: eB
                    }),
                    childrenButtons:
                        em || eC
                            ? (0, w.Z)({
                                  buttonProps: e,
                                  setPopout: ec,
                                  messagePopouts: es,
                                  isFocused: ef || eg
                              })
                            : void 0,
                    childrenSystemMessage: (0, F.Z)(e),
                    childrenMessageContent: r,
                    onMouseMove: eh,
                    onMouseLeave: ep,
                    hasThread: !ee && x.hasFlag(z.iLy.HAS_THREAD) && null != eZ,
                    isSystemMessage: (0, S.Z)(x),
                    hasReply: x.type === z.uaV.REPLY,
                    messageRef: ew
                })
            })
        });
    return null != eR
        ? (0, i.jsx)(
              j.Z,
              {
                  flashKey: eR,
                  className: a()({
                      [K.backgroundFlash]: !0,
                      [K.groupStart]: !X && x.id === $
                  }),
                  children: eH
              },
              'bg-flash-'.concat(s)
          )
        : eH;
});
