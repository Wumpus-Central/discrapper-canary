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
    C = n(367814),
    y = n(807092),
    x = n(869765),
    v = n(703656),
    j = n(695346),
    O = n(592125),
    E = n(906467),
    N = n(323873),
    I = n(709054),
    P = n(786761),
    S = n(534091),
    Z = n(901461),
    T = n(739566),
    A = n(233715),
    w = n(492593),
    R = n(453687),
    M = n(348238),
    k = n(62072),
    L = n(38267),
    D = n(25015),
    W = n(689674),
    U = n(438075),
    B = n(764893),
    H = n(481363),
    F = n(900902),
    G = n(252032),
    V = n(737243),
    z = n(614584),
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
    return e.getElementById((0, S.p)(t, n));
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
        f = (0, u.e7)([x.Z], () => x.Z.getMessageByReference(a)),
        { popouts: m, setPopout: g } = (0, L.Z)(l.id, q.d$),
        b = (0, T.ZP)(l),
        _ = (0, R.iG)(l),
        y = (0, R.Gx)(l),
        v = (0, C.Z)(b),
        j = null != (n = l.getGuildId()) ? n : void 0;
    return l.type === K.uaV.THREAD_STARTER_MESSAGE && null != f && f.state === x.Y.LOADED
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
                  childrenHeader: (0, F.Z)({
                      messageProps: e,
                      setPopout: g,
                      messagePopouts: m,
                      replyReference: a,
                      author: b
                  }),
                  childrenSystemMessage: (0, Y.Z)(e),
                  childrenMessageContent: null,
                  'aria-labelledby': _,
                  'aria-describedby': y,
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
            groupId: y,
            viewingChannelId: O
        } = e,
        E = a.type === K.uaV.REPLY ? a.messageReference : void 0,
        N = (0, c.JA)(null != (t = e.id) ? t : ''),
        { onFocus: I } = N,
        S = et(N, ['onFocus']),
        { isFocused: A, handleFocus: W, handleBlur: B } = (0, M.bb)(I),
        { popouts: H, selected: V, setPopout: J } = (0, L.Z)(a.id, q.d$),
        en = j.RS.useSetting(),
        er = j.NA.useSetting(),
        ei = (0, u.e7)([x.Z], () => x.Z.getMessageByReference(E)),
        el = (0, m.A)((null != (n = a.editedTimestamp) ? n : a.timestamp).valueOf()),
        {
            handleMouseEnter: eo,
            handleMouseLeave: ea,
            isHovered: es
        } = (0, M.tn)({
            groupId: y,
            message: a,
            defaultValue: V,
            popouts: H
        }),
        ec = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eu = V || (ec && A),
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
        ef = (0, k.Z)(s, h, ec),
        em = (0, T.ZP)(a),
        eg = (0, R.iG)(a, y),
        eb = (0, R.Gx)(a),
        e_ = (0, G.Z)(e, ep, !1),
        eC = i.useCallback(() => (0, v.XU)(g, h, s), [g, h, s]),
        ey = (0, f.p9)({
            guildId: g,
            roleId: em.iconRoleId
        }),
        ex = (0, C.Z)(em);
    return (0, r.jsxs)('div', {
        className: Q.quotedChatMessage,
        children: [
            (0, r.jsx)(d.P3F, {
                className: Q.jump,
                onClick: eC,
                'aria-label': X.NW.string(X.t.k5WiPT),
                children: X.NW.string(X.t.k5WiPT)
            }),
            (0, r.jsx)(
                w.Z,
                ee($({}, S), {
                    id: l,
                    compact: b,
                    className: o()(_, {
                        [Q.message]: !0,
                        [Q.cozyMessage]: !b,
                        [Q.mentioned]: a.mentioned,
                        [Q.ephemeral]: (0, P.Pv)(a),
                        [Q.systemMessage]: (0, Z.Z)(a),
                        [Q.groupStart]: a.id === y || a.type === K.uaV.REPLY,
                        [Q.selected]: eu
                    }),
                    zalgo: !0,
                    onKeyDown: ef,
                    onFocus: W,
                    onBlur: B,
                    childrenRepliedMessage:
                        a.type === K.uaV.REPLY &&
                        (0, z.Z)(
                            ee($({}, e), {
                                setPopout: J,
                                referencedUsernameProfile: H.referencedUsernameProfile,
                                referencedAvatarProfile: H.referencedAvatarProfile,
                                replyReference: E,
                                replyMessage: ei,
                                isReplySpineClickable: !0
                            })
                        ),
                    childrenHeader: (0, F.Z)({
                        messageProps: e,
                        setPopout: J,
                        messagePopouts: H,
                        replyReference: E,
                        author: em,
                        repliedMessage: ei,
                        roleIcon: ey
                    }),
                    childrenAccessories: (0, U.Z)({
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
                    authorHasGradientRole: ex
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
            message: { id: S },
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
        em = (0, u.e7)([x.Z], () => x.Z.getMessageByReference(es)),
        { popouts: eg, selected: eb, setPopout: e_ } = (0, L.Z)(v.id, q.d$),
        eC = (0, M.qo)(v, J, e_),
        ey = (0, M.Go)(v, J),
        {
            handleMouseEnter: ex,
            handleMouseLeave: ev,
            hasHovered: ej,
            isHovered: eO
        } = (0, M.tn)({
            groupId: eo,
            message: v,
            defaultValue: eb,
            popouts: eg
        }),
        { isFocused: eE, hasFocused: eN, handleFocus: eI, handleBlur: eP } = (0, M.bb)(eu),
        eS = i.useCallback(
            (e) => {
                eI(e), ex(e);
            },
            [eI, ex]
        ),
        eZ = i.useCallback(
            (e) => {
                eP(e), ev();
            },
            [eP, ev]
        ),
        eT = (0, u.e7)([N.Z], () => N.Z.isEditing(en, S), [en, S]),
        eA = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        ew = eb || eT || (eA && eE),
        eR = ew || eO,
        eM = (0, u.e7)([O.Z], () => v.hasFlag(K.iLy.HAS_THREAD) && O.Z.getChannel(I.default.castMessageIdAsChannelId(v.id))),
        ek = v.isFirstMessageInForumPost(J),
        eL = (0, m.A)((null != (n = v.editedTimestamp) ? n : v.timestamp).valueOf()),
        eD = (0, u.e7)([E.Z], () => E.Z.isDeveloper),
        { content: eW, hasSpoilerEmbeds: eU } = (0, D.Z)(v, {
            hideSimpleEmbedContent: eh && ef,
            isInteracting: eR,
            formatInline: !1,
            allowList: ek || eL,
            allowHeading: ek || eL,
            allowLinks: !0,
            allowDevLinks: eD,
            previewLinkTarget: !0
        }),
        eB = (0, k.Z)(S, en, eA),
        eH = (0, T.ZP)(v),
        eF = (0, u.e7)([y.Z], () => y.Z.getPendingReply(en)),
        eG = (function (e) {
            let t = i.useRef(e);
            return (
                i.useEffect(() => {
                    t.current = null != e ? e : t.current;
                }),
                null != e ? e : t.current
            );
        })(el),
        eV = (0, f.p9)({
            guildId: J.guild_id,
            roleId: eH.iconRoleId
        }),
        ez = (0, R.iG)(v, eo),
        eY = (0, R.Gx)(v),
        eq = (0, u.e7)([h.Z], () => h.Z.getMessage(S), [S]),
        eK = (0, W.Z)({
            message: v,
            channel: J
        }),
        eX = null != eq,
        eQ = i.useMemo(() => Object.values(eg).some((e) => e), [eg]);
    l = v.type === K.uaV.CUSTOM_GIFT ? '' : !eT && eX ? (0, B.Z)(e, eW) : (0, G.Z)(e, eW, eT);
    let eJ = (0, C.Z)(eH),
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
                            'aria-roledescription': X.NW.string(X.t.BAB0yM),
                            'aria-labelledby': ez,
                            'aria-describedby': eY,
                            onFocus: eS,
                            onBlur: eZ,
                            onContextMenu: eC,
                            onKeyDown: eB,
                            onClick: ey,
                            compact: er,
                            contentOnly: ea,
                            className: o()(ei, {
                                [Q.message]: !0,
                                [Q.cozyMessage]: !er,
                                [Q.mentioned]: v.mentioned,
                                [Q.ephemeral]: (0, P.Pv)(v),
                                [Q.nitroMessage]: v.type === K.uaV.NITRO_NOTIFICATION || v.type === K.uaV.CHAT_WALLPAPER_SET || v.type === K.uaV.CHAT_WALLPAPER_REMOVED,
                                [Q.systemMessage]: (0, Z.Z)(v),
                                [Q.groupStart]: !ea && (e$ || v.type === K.uaV.REPLY),
                                [Q.selected]: ew,
                                [Q.replying]: (null == eF ? void 0 : eF.message.id) === v.id,
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
                                    : (0, z.Z)(
                                          ee($({}, e), {
                                              setPopout: e_,
                                              referencedUsernameProfile: eg.referencedUsernameProfile,
                                              referencedAvatarProfile: eg.referencedAvatarProfile,
                                              replyReference: es,
                                              replyMessage: em,
                                              isReplySpineClickable: !0
                                          })
                                      ),
                            childrenExecutedCommand: (0, V.Z)(e, e_, eg),
                            childrenHeader: ea
                                ? void 0
                                : (0, F.Z)({
                                      messageProps: e,
                                      setPopout: e_,
                                      messagePopouts: eg,
                                      replyReference: es,
                                      author: eH,
                                      repliedMessage: em,
                                      roleIcon: eV
                                  }),
                            childrenAccessories: (0, U.Z)({
                                channelMessageProps: e,
                                hasSpoilerEmbeds: eU,
                                handleContextMenu: eC,
                                isInteracting: eR,
                                isAutomodBlockedMessage: eX
                            }),
                            childrenButtons:
                                ej || eN
                                    ? (0, H.Z)({
                                          buttonProps: e,
                                          setPopout: e_,
                                          messagePopouts: eg,
                                          isFocused: eO || eE
                                      })
                                    : void 0,
                            childrenSystemMessage: (0, Y.Z)(e),
                            childrenMessageContent: l,
                            onMouseMove: ex,
                            onMouseLeave: ev,
                            hasThread: !ea && v.hasFlag(K.iLy.HAS_THREAD) && null != eM,
                            isSystemMessage: (0, Z.Z)(v),
                            hasReply: v.type === K.uaV.REPLY,
                            messageRef: eK,
                            authorHasGradientRole: eJ,
                            guildId: J.guild_id
                        })
                    )
                ]
            })
        });
    return null != eG
        ? (0, r.jsx)(
              A.Z,
              {
                  flashKey: eG,
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
