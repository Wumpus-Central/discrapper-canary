n.d(t, {
    AP: () => J,
    Ru: () => Q,
    ZP: () => ee
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(111810),
    C = n(235894),
    x = n(807092),
    v = n(869765),
    E = n(703656),
    I = n(695346),
    b = n(592125),
    Z = n(906467),
    N = n(323873),
    T = n(709054),
    S = n(786761),
    j = n(534091),
    y = n(901461),
    A = n(739566),
    P = n(233715),
    R = n(492593),
    M = n(453687),
    L = n(348238),
    k = n(62072),
    O = n(38267),
    D = n(25015),
    w = n(689674),
    U = n(438075),
    B = n(764893),
    F = n(481363),
    H = n(900902),
    G = n(252032),
    V = n(737243),
    z = n(614584),
    W = n(295790),
    Y = n(959517),
    q = n(981631),
    K = n(388032),
    X = n(194240);
function J(e, t, n) {
    return e.getElementById((0, j.p)(t, n));
}
function Q(e) {
    var t;
    let {
        id: n,
        message: l,
        message: { messageReference: a },
        compact: s = !1,
        className: u
    } = e;
    o()(l.type === q.uaV.THREAD_STARTER_MESSAGE, 'Message must be a thread starter message');
    let { ...h } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        p = (0, d.e7)([v.Z], () => v.Z.getMessageByReference(a)),
        { popouts: m, setPopout: f } = (0, O.Z)(l.id, Y.d$),
        g = (0, A.ZP)(l),
        _ = (0, M.iG)(l),
        C = (0, M.Gx)(l);
    return l.type === q.uaV.THREAD_STARTER_MESSAGE && null != p && p.state === v.Y.LOADED
        ? (0, i.jsx)($, {
              ...e,
              viewingChannelId: l.channel_id,
              message: p.message,
              groupId: p.message.id
          })
        : (0, i.jsx)(R.Z, {
              ...h,
              id: n,
              compact: s,
              className: r()(u, {
                  [X.message]: !0,
                  [X.cozyMessage]: !s,
                  [X.systemMessage]: !0,
                  [X.groupStart]: !0
              }),
              childrenHeader: (0, H.Z)({
                  messageProps: e,
                  setPopout: f,
                  messagePopouts: m,
                  replyReference: a,
                  author: g
              }),
              childrenSystemMessage: (0, W.Z)(e),
              childrenMessageContent: null,
              'aria-labelledby': _,
              'aria-describedby': C,
              hasThread: !1
          });
}
function $(e) {
    var t, n;
    let {
            id: a,
            message: s,
            message: { id: o, channel_id: p },
            channel: { guild_id: g },
            compact: _ = !1,
            className: C,
            groupId: x,
            viewingChannelId: b
        } = e,
        Z = s.type === q.uaV.REPLY ? s.messageReference : void 0,
        { onFocus: N, ...T } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        { isFocused: j, handleFocus: P, handleBlur: w } = (0, L.bb)(N),
        { popouts: B, selected: F, setPopout: V } = (0, O.Z)(s.id, Y.d$),
        J = I.RS.useSetting(),
        Q = I.NA.useSetting(),
        $ = (0, d.e7)([v.Z], () => v.Z.getMessageByReference(Z)),
        ee = (0, f.A)((null !== (n = s.editedTimestamp) && void 0 !== n ? n : s.timestamp).valueOf()),
        {
            handleMouseEnter: et,
            handleMouseLeave: en,
            isHovered: ei
        } = (0, L.tn)({
            groupId: x,
            message: s,
            defaultValue: F,
            popouts: B
        }),
        el = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        ea = F || (el && j),
        er = ea || ei,
        { content: es, hasSpoilerEmbeds: eo } = (0, D.Z)(s, {
            hideSimpleEmbedContent: J && Q,
            isInteracting: er,
            formatInline: !1,
            allowList: ee,
            allowHeading: ee,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: b
        }),
        ec = (0, k.Z)(o, p, el),
        ed = (0, A.ZP)(s),
        eu = (0, M.iG)(s, x),
        eh = (0, M.Gx)(s),
        ep = (0, G.Z)(e, es, !1),
        em = l.useCallback(() => (0, E.XU)(g, p, o), [g, p, o]),
        ef = (0, m.p9)({
            guildId: g,
            roleId: ed.iconRoleId
        });
    return (0, i.jsxs)('div', {
        className: X.quotedChatMessage,
        children: [
            (0, i.jsx)(u.P3F, {
                className: X.jump,
                onClick: em,
                'aria-label': K.intl.string(K.t.k5WiPT),
                children: K.intl.string(K.t.k5WiPT)
            }),
            (0, i.jsx)(R.Z, {
                ...T,
                id: a,
                compact: _,
                className: r()(C, {
                    [X.message]: !0,
                    [X.cozyMessage]: !_,
                    [X.mentioned]: s.mentioned,
                    [X.ephemeral]: (0, S.Pv)(s),
                    [X.systemMessage]: (0, y.Z)(s),
                    [X.groupStart]: s.id === x || s.type === q.uaV.REPLY,
                    [X.selected]: ea
                }),
                zalgo: !0,
                onKeyDown: ec,
                onFocus: P,
                onBlur: w,
                childrenRepliedMessage:
                    s.type === q.uaV.REPLY &&
                    (0, z.Z)({
                        ...e,
                        setPopout: V,
                        referencedUsernameProfile: B.referencedUsernameProfile,
                        referencedAvatarProfile: B.referencedAvatarProfile,
                        replyReference: Z,
                        replyMessage: $,
                        isReplySpineClickable: !0
                    }),
                childrenHeader: (0, H.Z)({
                    messageProps: e,
                    setPopout: V,
                    messagePopouts: B,
                    replyReference: Z,
                    author: ed,
                    repliedMessage: $,
                    roleIcon: ef
                }),
                childrenAccessories: (0, U.Z)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: eo,
                    isInteracting: er,
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
let ee = l.memo(function (e) {
    var t, n;
    let a;
    let {
        id: s,
        message: E,
        message: { id: j },
        channel: J,
        channel: { id: Q },
        compact: $ = !1,
        className: ee,
        flashKey: et,
        groupId: en,
        renderContentOnly: ei
    } = e;
    o()(E.type !== q.uaV.THREAD_STARTER_MESSAGE, 'Message must not be a thread starter message');
    let el = q.OBS.has(E.type) ? E.messageReference : void 0,
        { onFocus: ea, ...er } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        es = (0, _.p7)('ChatMessage'),
        eo = I.RS.useSetting(),
        ec = I.NA.useSetting(),
        ed = (0, d.e7)([v.Z], () => v.Z.getMessageByReference(el)),
        { popouts: eu, selected: eh, setPopout: ep } = (0, O.Z)(E.id, Y.d$),
        em = (0, L.qo)(E, J, ep),
        ef = (0, L.Go)(E, J),
        {
            handleMouseEnter: eg,
            handleMouseLeave: e_,
            hasHovered: eC,
            isHovered: ex
        } = (0, L.tn)({
            groupId: en,
            message: E,
            defaultValue: eh,
            popouts: eu
        }),
        { isFocused: ev, hasFocused: eE, handleFocus: eI, handleBlur: eb } = (0, L.bb)(ea),
        eZ = l.useCallback(
            (e) => {
                eI(e), eg(e);
            },
            [eI, eg]
        ),
        eN = l.useCallback(
            (e) => {
                eb(e), e_();
            },
            [eb, e_]
        ),
        eT = (0, d.e7)([N.Z], () => N.Z.isEditing(Q, j), [Q, j]),
        eS = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        ej = eh || eT || (eS && ev),
        ey = ej || ex,
        eA = (0, d.e7)([b.Z], () => E.hasFlag(q.iLy.HAS_THREAD) && b.Z.getChannel(T.default.castMessageIdAsChannelId(E.id))),
        eP = E.isFirstMessageInForumPost(J),
        eR = (0, f.A)((null !== (n = E.editedTimestamp) && void 0 !== n ? n : E.timestamp).valueOf()),
        eM = (0, d.e7)([Z.Z], () => Z.Z.isDeveloper),
        { content: eL, hasSpoilerEmbeds: ek } = (0, D.Z)(E, {
            hideSimpleEmbedContent: eo && ec,
            isInteracting: ey,
            formatInline: !1,
            allowList: eP || eR,
            allowHeading: eP || eR,
            allowLinks: !0,
            allowDevLinks: eM,
            previewLinkTarget: !0
        }),
        eO = (0, k.Z)(j, Q, eS),
        eD = (0, A.ZP)(E),
        ew = (0, d.e7)([x.Z], () => x.Z.getPendingReply(Q)),
        eU = (function (e) {
            let t = l.useRef(e);
            return (
                l.useEffect(() => {
                    t.current = null != e ? e : t.current;
                }),
                null != e ? e : t.current
            );
        })(et),
        eB = (0, m.p9)({
            guildId: J.guild_id,
            roleId: eD.iconRoleId
        }),
        eF = (0, M.iG)(E, en),
        eH = (0, M.Gx)(E),
        eG = (0, d.e7)([p.Z], () => p.Z.getMessage(j), [j]),
        eV = (0, w.Z)({
            message: E,
            channel: J
        }),
        ez = null != eG,
        eW = l.useMemo(() => Object.values(eu).some((e) => e), [eu]);
    a = E.type === q.uaV.CUSTOM_GIFT ? '' : !eT && ez ? (0, B.Z)(e, eL) : (0, G.Z)(e, eL, eT);
    let eY = E.id === en,
        eq = (0, i.jsx)(u.tEY, {
            offset: {
                left: 4,
                right: 4
            },
            children: (0, i.jsxs)('li', {
                id: s,
                className: X.messageListItem,
                'aria-setsize': -1,
                children: [
                    (0, C.Uw)(E) &&
                        (0, i.jsx)(g.Z, {
                            compact: $,
                            message: E,
                            hovering: ex && !eT && !eW
                        }),
                    (0, i.jsx)(R.Z, {
                        ...er,
                        'aria-setsize': -1,
                        'aria-roledescription': K.intl.string(K.t.BAB0yM),
                        'aria-labelledby': eF,
                        'aria-describedby': eH,
                        onFocus: eZ,
                        onBlur: eN,
                        onContextMenu: em,
                        onKeyDown: eO,
                        onClick: ef,
                        compact: $,
                        contentOnly: ei,
                        className: r()(ee, {
                            [X.message]: !0,
                            [X.cozyMessage]: !$,
                            [X.mentioned]: E.mentioned,
                            [X.ephemeral]: (0, S.Pv)(E),
                            [X.nitroMessage]: E.type === q.uaV.NITRO_NOTIFICATION,
                            [X.systemMessage]: (0, y.Z)(E),
                            [X.groupStart]: !ei && (eY || E.type === q.uaV.REPLY),
                            [X.selected]: ej,
                            [X.replying]: (null == ew ? void 0 : ew.message.id) === E.id,
                            [X.interactionSending]: E.isCommandType() && E.state === q.yb.SENDING,
                            [X.automodMessage]: ez,
                            [X.editing]: eT,
                            [X.hasOpenPopouts]: eW,
                            [X.potioned]: (0, C.Uw)(E) && es
                        }),
                        zalgo: !eT,
                        childrenRepliedMessage:
                            ei || E.type !== q.uaV.REPLY
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
                            : (0, H.Z)({
                                  messageProps: e,
                                  setPopout: ep,
                                  messagePopouts: eu,
                                  replyReference: el,
                                  author: eD,
                                  repliedMessage: ed,
                                  roleIcon: eB
                              }),
                        childrenAccessories: (0, U.Z)({
                            channelMessageProps: e,
                            hasSpoilerEmbeds: ek,
                            handleContextMenu: em,
                            isInteracting: ey,
                            isAutomodBlockedMessage: ez
                        }),
                        childrenButtons:
                            eC || eE
                                ? (0, F.Z)({
                                      buttonProps: e,
                                      setPopout: ep,
                                      messagePopouts: eu,
                                      isFocused: ex || ev
                                  })
                                : void 0,
                        childrenSystemMessage: (0, W.Z)(e),
                        childrenMessageContent: a,
                        onMouseMove: eg,
                        onMouseLeave: e_,
                        hasThread: !ei && E.hasFlag(q.iLy.HAS_THREAD) && null != eA,
                        isSystemMessage: (0, y.Z)(E),
                        hasReply: E.type === q.uaV.REPLY,
                        messageRef: eV
                    })
                ]
            })
        });
    return null != eU
        ? (0, i.jsx)(
              P.Z,
              {
                  flashKey: eU,
                  className: r()({
                      [X.backgroundFlash]: !0,
                      [X.groupStart]: !$ && E.id === en
                  }),
                  children: eq
              },
              'bg-flash-'.concat(s)
          )
        : eq;
});
