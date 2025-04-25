n.d(t, {
    AP: () => en,
    Ru: () => er,
    ZP: () => el
});
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    p = n(607070),
    h = n(223606),
    f = n(518738),
    m = n(628238),
    g = n(911266),
    b = n(111810),
    _ = n(235894),
    y = n(367814),
    x = n(807092),
    C = n(869765),
    v = n(703656),
    j = n(695346),
    O = n(592125),
    E = n(906467),
    I = n(323873),
    P = n(709054),
    S = n(786761),
    Z = n(534091),
    N = n(901461),
    T = n(739566),
    A = n(233715),
    w = n(492593),
    R = n(453687),
    k = n(348238),
    M = n(62072),
    L = n(38267),
    D = n(25015),
    U = n(689674),
    B = n(438075),
    G = n(764893),
    F = n(481363),
    H = n(900902),
    V = n(252032),
    z = n(737243),
    W = n(614584),
    Y = n(295790),
    q = n(959517),
    K = n(981631),
    X = n(388032),
    Q = n(30804);
function J() {
    return (J =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function et(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function en(e, t, n) {
    return e.getElementById((0, Z.p)(t, n));
}
function er(e) {
    var t, n;
    let {
        id: i,
        message: l,
        message: { messageReference: a },
        compact: d = !1,
        className: p
    } = e;
    s()(l.type === K.uaV.THREAD_STARTER_MESSAGE, 'Message must be a thread starter message');
    let h = J(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })((0, c.JA)(null != (t = e.id) ? t : ''))
        ),
        f = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(a)),
        { popouts: m, setPopout: g } = (0, L.Z)(l.id, q.d$),
        b = (0, T.ZP)(l),
        _ = (0, R.iG)(l),
        x = (0, R.Gx)(l),
        v = (0, y.Z)(b),
        j = null != (n = l.getGuildId()) ? n : void 0;
    return l.type === K.uaV.THREAD_STARTER_MESSAGE && null != f && f.state === C.Y.LOADED
        ? (0, r.jsx)(
              ei,
              ee($({}, e), {
                  viewingChannelId: l.channel_id,
                  message: f.message,
                  groupId: f.message.id
              })
          )
        : (0, r.jsx)(
              w.Z,
              ee($({}, h), {
                  id: i,
                  compact: d,
                  className: o()(p, {
                      [Q.message]: !0,
                      [Q.cozyMessage]: !d,
                      [Q.systemMessage]: !0,
                      [Q.groupStart]: !0
                  }),
                  childrenHeader: (0, H.Z)({
                      messageProps: e,
                      setPopout: g,
                      messagePopouts: m,
                      replyReference: a,
                      author: b
                  }),
                  childrenSystemMessage: (0, Y.Z)(e),
                  childrenMessageContent: null,
                  'aria-labelledby': _,
                  'aria-describedby': x,
                  hasThread: !1,
                  authorHasGradientRole: v,
                  guildId: j
              })
          );
}
function ei(e) {
    var t, n;
    let {
            id: l,
            message: a,
            message: { id: s, channel_id: h },
            channel: { guild_id: g },
            compact: b = !1,
            className: _,
            groupId: x,
            viewingChannelId: O
        } = e,
        E = a.type === K.uaV.REPLY ? a.messageReference : void 0,
        I = (0, c.JA)(null != (t = e.id) ? t : ''),
        { onFocus: P } = I,
        Z = et(I, ['onFocus']),
        { isFocused: A, handleFocus: U, handleBlur: G } = (0, k.bb)(P),
        { popouts: F, selected: z, setPopout: J } = (0, L.Z)(a.id, q.d$),
        en = j.RS.useSetting(),
        er = j.NA.useSetting(),
        ei = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(E)),
        el = (0, m.A)((null != (n = a.editedTimestamp) ? n : a.timestamp).valueOf()),
        {
            handleMouseEnter: eo,
            handleMouseLeave: ea,
            isHovered: es
        } = (0, k.tn)({
            groupId: x,
            message: a,
            defaultValue: z,
            popouts: F
        }),
        ec = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eu = z || (ec && A),
        ed = eu || es,
        { content: ep, hasSpoilerEmbeds: eh } = (0, D.Z)(a, {
            hideSimpleEmbedContent: en && er,
            isInteracting: ed,
            formatInline: !1,
            allowList: el,
            allowHeading: el,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: O
        }),
        ef = (0, M.Z)(s, h, ec),
        em = (0, T.ZP)(a),
        eg = (0, R.iG)(a, x),
        eb = (0, R.Gx)(a),
        e_ = (0, V.Z)(e, ep, !1),
        ey = i.useCallback(() => (0, v.XU)(g, h, s), [g, h, s]),
        ex = (0, f.p9)({
            guildId: g,
            roleId: em.iconRoleId
        }),
        eC = (0, y.Z)(em);
    return (0, r.jsxs)('div', {
        className: Q.quotedChatMessage,
        children: [
            (0, r.jsx)(d.P3F, {
                className: Q.jump,
                onClick: ey,
                'aria-label': X.intl.string(X.t.k5WiPT),
                children: X.intl.string(X.t.k5WiPT)
            }),
            (0, r.jsx)(
                w.Z,
                ee($({}, Z), {
                    id: l,
                    compact: b,
                    className: o()(_, {
                        [Q.message]: !0,
                        [Q.cozyMessage]: !b,
                        [Q.mentioned]: a.mentioned,
                        [Q.ephemeral]: (0, S.Pv)(a),
                        [Q.systemMessage]: (0, N.Z)(a),
                        [Q.groupStart]: a.id === x || a.type === K.uaV.REPLY,
                        [Q.selected]: eu
                    }),
                    zalgo: !0,
                    onKeyDown: ef,
                    onFocus: U,
                    onBlur: G,
                    childrenRepliedMessage:
                        a.type === K.uaV.REPLY &&
                        (0, W.Z)(
                            ee($({}, e), {
                                setPopout: J,
                                referencedUsernameProfile: F.referencedUsernameProfile,
                                referencedAvatarProfile: F.referencedAvatarProfile,
                                replyReference: E,
                                replyMessage: ei,
                                isReplySpineClickable: !0
                            })
                        ),
                    childrenHeader: (0, H.Z)({
                        messageProps: e,
                        setPopout: J,
                        messagePopouts: F,
                        replyReference: E,
                        author: em,
                        repliedMessage: ei,
                        roleIcon: ex
                    }),
                    childrenAccessories: (0, B.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: eh,
                        isInteracting: ed,
                        renderThreadAccessory: !1,
                        renderSuppressEmbeds: !1,
                        renderReactions: !1,
                        disableComponentInteractivity: !0
                    }),
                    childrenSystemMessage: (0, Y.Z)(e),
                    childrenMessageContent: e_,
                    onMouseMove: eo,
                    onMouseLeave: ea,
                    'aria-labelledby': eg,
                    'aria-describedby': eb,
                    hasThread: !1,
                    guildId: g,
                    authorHasGradientRole: eC
                })
            )
        ]
    });
}
let el = i.memo(function (e) {
    var t, n;
    let l,
        {
            id: a,
            message: v,
            message: { id: Z },
            channel: J,
            channel: { id: en },
            compact: er = !1,
            className: ei,
            flashKey: el,
            groupId: eo,
            renderContentOnly: ea
        } = e;
    s()(v.type !== K.uaV.THREAD_STARTER_MESSAGE, 'Message must not be a thread starter message');
    let es = K.OBS.has(v.type) ? v.messageReference : void 0,
        ec = (0, c.JA)(null != (t = e.id) ? t : ''),
        { onFocus: eu } = ec,
        ed = et(ec, ['onFocus']),
        ep = (0, b.p7)('ChatMessage'),
        eh = j.RS.useSetting(),
        ef = j.NA.useSetting(),
        em = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(es)),
        { popouts: eg, selected: eb, setPopout: e_ } = (0, L.Z)(v.id, q.d$),
        ey = (0, k.qo)(v, J, e_),
        ex = (0, k.Go)(v, J),
        {
            handleMouseEnter: eC,
            handleMouseLeave: ev,
            hasHovered: ej,
            isHovered: eO
        } = (0, k.tn)({
            groupId: eo,
            message: v,
            defaultValue: eb,
            popouts: eg
        }),
        { isFocused: eE, hasFocused: eI, handleFocus: eP, handleBlur: eS } = (0, k.bb)(eu),
        eZ = i.useCallback(
            (e) => {
                eP(e), eC(e);
            },
            [eP, eC]
        ),
        eN = i.useCallback(
            (e) => {
                eS(e), ev();
            },
            [eS, ev]
        ),
        eT = (0, u.e7)([I.Z], () => I.Z.isEditing(en, Z), [en, Z]),
        eA = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        ew = eb || eT || (eA && eE),
        eR = ew || eO,
        ek = (0, u.e7)([O.Z], () => v.hasFlag(K.iLy.HAS_THREAD) && O.Z.getChannel(P.default.castMessageIdAsChannelId(v.id))),
        eM = v.isFirstMessageInForumPost(J),
        eL = (0, m.A)((null != (n = v.editedTimestamp) ? n : v.timestamp).valueOf()),
        eD = (0, u.e7)([E.Z], () => E.Z.isDeveloper),
        { content: eU, hasSpoilerEmbeds: eB } = (0, D.Z)(v, {
            hideSimpleEmbedContent: eh && ef,
            isInteracting: eR,
            formatInline: !1,
            allowList: eM || eL,
            allowHeading: eM || eL,
            allowLinks: !0,
            allowDevLinks: eD,
            previewLinkTarget: !0
        }),
        eG = (0, M.Z)(Z, en, eA),
        eF = (0, T.ZP)(v),
        eH = (0, u.e7)([x.Z], () => x.Z.getPendingReply(en)),
        eV = (function (e) {
            let t = i.useRef(e);
            return (
                i.useEffect(() => {
                    t.current = null != e ? e : t.current;
                }),
                null != e ? e : t.current
            );
        })(el),
        ez = (0, f.p9)({
            guildId: J.guild_id,
            roleId: eF.iconRoleId
        }),
        eW = (0, R.iG)(v, eo),
        eY = (0, R.Gx)(v),
        eq = (0, u.e7)([h.Z], () => h.Z.getMessage(Z), [Z]),
        eK = (0, U.Z)({
            message: v,
            channel: J
        }),
        eX = null != eq,
        eQ = i.useMemo(() => Object.values(eg).some((e) => e), [eg]);
    l = v.type === K.uaV.CUSTOM_GIFT ? '' : !eT && eX ? (0, G.Z)(e, eU) : (0, V.Z)(e, eU, eT);
    let eJ = (0, y.Z)(eF),
        e$ = v.id === eo,
        e0 = (0, r.jsx)(d.tEY, {
            offset: {
                left: 4,
                right: 4
            },
            children: (0, r.jsxs)('li', {
                id: a,
                className: Q.messageListItem,
                'aria-setsize': -1,
                children: [
                    (0, _.Uw)(v) &&
                        (0, r.jsx)(g.Z, {
                            compact: er,
                            message: v,
                            hovering: eO && !eT && !eQ
                        }),
                    (0, r.jsx)(
                        w.Z,
                        ee($({}, ed), {
                            'aria-setsize': -1,
                            'aria-roledescription': X.intl.string(X.t.BAB0yM),
                            'aria-labelledby': eW,
                            'aria-describedby': eY,
                            onFocus: eZ,
                            onBlur: eN,
                            onContextMenu: ey,
                            onKeyDown: eG,
                            onClick: ex,
                            compact: er,
                            contentOnly: ea,
                            className: o()(ei, {
                                [Q.message]: !0,
                                [Q.cozyMessage]: !er,
                                [Q.mentioned]: v.mentioned,
                                [Q.ephemeral]: (0, S.Pv)(v),
                                [Q.nitroMessage]: v.type === K.uaV.NITRO_NOTIFICATION || v.type === K.uaV.CHAT_WALLPAPER_SET || v.type === K.uaV.CHAT_WALLPAPER_REMOVED,
                                [Q.systemMessage]: (0, N.Z)(v),
                                [Q.groupStart]: !ea && (e$ || v.type === K.uaV.REPLY),
                                [Q.selected]: ew,
                                [Q.replying]: (null == eH ? void 0 : eH.message.id) === v.id,
                                [Q.interactionSending]: v.isCommandType() && v.state === K.yb.SENDING,
                                [Q.automodMessage]: eX,
                                [Q.editing]: eT,
                                [Q.hasOpenPopouts]: eQ,
                                [Q.potioned]: (0, _.Uw)(v) && ep
                            }),
                            zalgo: !eT,
                            childrenRepliedMessage:
                                ea || v.type !== K.uaV.REPLY
                                    ? void 0
                                    : (0, W.Z)(
                                          ee($({}, e), {
                                              setPopout: e_,
                                              referencedUsernameProfile: eg.referencedUsernameProfile,
                                              referencedAvatarProfile: eg.referencedAvatarProfile,
                                              replyReference: es,
                                              replyMessage: em,
                                              isReplySpineClickable: !0
                                          })
                                      ),
                            childrenExecutedCommand: (0, z.Z)(e, e_, eg),
                            childrenHeader: ea
                                ? void 0
                                : (0, H.Z)({
                                      messageProps: e,
                                      setPopout: e_,
                                      messagePopouts: eg,
                                      replyReference: es,
                                      author: eF,
                                      repliedMessage: em,
                                      roleIcon: ez
                                  }),
                            childrenAccessories: (0, B.Z)({
                                channelMessageProps: e,
                                hasSpoilerEmbeds: eB,
                                handleContextMenu: ey,
                                isInteracting: eR,
                                isAutomodBlockedMessage: eX
                            }),
                            childrenButtons:
                                ej || eI
                                    ? (0, F.Z)({
                                          buttonProps: e,
                                          setPopout: e_,
                                          messagePopouts: eg,
                                          isFocused: eO || eE
                                      })
                                    : void 0,
                            childrenSystemMessage: (0, Y.Z)(e),
                            childrenMessageContent: l,
                            onMouseMove: eC,
                            onMouseLeave: ev,
                            hasThread: !ea && v.hasFlag(K.iLy.HAS_THREAD) && null != ek,
                            isSystemMessage: (0, N.Z)(v),
                            hasReply: v.type === K.uaV.REPLY,
                            messageRef: eK,
                            authorHasGradientRole: eJ,
                            guildId: J.guild_id
                        })
                    )
                ]
            })
        });
    return null != eV
        ? (0, r.jsx)(
              A.Z,
              {
                  flashKey: eV,
                  className: o()({
                      [Q.backgroundFlash]: !0,
                      [Q.groupStart]: !er && v.id === eo
                  }),
                  children: e0
              },
              'bg-flash-'.concat(a)
          )
        : e0;
});
