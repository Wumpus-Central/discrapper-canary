n.d(t, {
    AP: () => er,
    Ru: () => ei,
    ZP: () => eo
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
    C = n(807092),
    x = n(869765),
    v = n(703656),
    j = n(695346),
    O = n(592125),
    E = n(906467),
    I = n(323873),
    P = n(709054),
    S = n(786761),
    Z = n(750030),
    N = n(534091),
    T = n(901461),
    A = n(739566),
    w = n(233715),
    R = n(492593),
    k = n(453687),
    M = n(348238),
    L = n(62072),
    D = n(38267),
    U = n(25015),
    B = n(689674),
    G = n(438075),
    F = n(764893),
    H = n(481363),
    V = n(900902),
    z = n(252032),
    W = n(737243),
    Y = n(614584),
    q = n(295790),
    K = n(959517),
    X = n(981631),
    Q = n(388032),
    J = n(30804);
function $() {
    return ($ =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function ee(e) {
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
function et(e, t) {
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
function en(e, t) {
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
function er(e, t, n) {
    return e.getElementById((0, N.p)(t, n));
}
function ei(e) {
    var t;
    let {
        id: n,
        message: i,
        message: { messageReference: l },
        compact: a = !1,
        className: d
    } = e;
    s()(i.type === X.uaV.THREAD_STARTER_MESSAGE, 'Message must be a thread starter message');
    let p = $(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })((0, c.JA)(null != (t = e.id) ? t : ''))
        ),
        h = (0, u.e7)([x.Z], () => x.Z.getMessageByReference(l)),
        { popouts: f, setPopout: m } = (0, D.Z)(i.id, K.d$),
        g = (0, A.ZP)(i),
        b = (0, k.iG)(i),
        _ = (0, k.Gx)(i),
        C = (0, y.Z)(g),
        v = (0, Z.k)(i);
    return i.type === X.uaV.THREAD_STARTER_MESSAGE && null != h && h.state === x.Y.LOADED
        ? (0, r.jsx)(
              el,
              et(ee({}, e), {
                  viewingChannelId: i.channel_id,
                  message: h.message,
                  groupId: h.message.id
              })
          )
        : (0, r.jsx)(
              R.Z,
              et(ee({}, p), {
                  id: n,
                  compact: a,
                  className: o()(d, {
                      [J.message]: !0,
                      [J.cozyMessage]: !a,
                      [J.systemMessage]: !0,
                      [J.groupStart]: !0
                  }),
                  childrenHeader: (0, V.Z)({
                      messageProps: e,
                      setPopout: m,
                      messagePopouts: f,
                      replyReference: l,
                      author: g
                  }),
                  childrenSystemMessage: (0, q.Z)(e),
                  childrenMessageContent: null,
                  'aria-labelledby': b,
                  'aria-describedby': _,
                  hasThread: !1,
                  authorHasGradientRole: C,
                  guildId: v
              })
          );
}
function el(e) {
    var t, n;
    let {
            id: l,
            message: a,
            message: { id: s, channel_id: h },
            channel: { guild_id: g },
            compact: b = !1,
            className: _,
            groupId: C,
            viewingChannelId: O
        } = e,
        E = a.type === X.uaV.REPLY ? a.messageReference : void 0,
        I = (0, c.JA)(null != (t = e.id) ? t : ''),
        { onFocus: P } = I,
        Z = en(I, ['onFocus']),
        { isFocused: N, handleFocus: w, handleBlur: B } = (0, M.bb)(P),
        { popouts: F, selected: H, setPopout: W } = (0, D.Z)(a.id, K.d$),
        $ = j.RS.useSetting(),
        er = j.NA.useSetting(),
        ei = (0, u.e7)([x.Z], () => x.Z.getMessageByReference(E)),
        el = (0, m.A)((null != (n = a.editedTimestamp) ? n : a.timestamp).valueOf()),
        {
            handleMouseEnter: eo,
            handleMouseLeave: ea,
            isHovered: es
        } = (0, M.tn)({
            groupId: C,
            message: a,
            defaultValue: H,
            popouts: F
        }),
        ec = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eu = H || (ec && N),
        ed = eu || es,
        { content: ep, hasSpoilerEmbeds: eh } = (0, U.Z)(a, {
            hideSimpleEmbedContent: $ && er,
            isInteracting: ed,
            formatInline: !1,
            allowList: el,
            allowHeading: el,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: O
        }),
        ef = (0, L.Z)(s, h, ec),
        em = (0, A.ZP)(a),
        eg = (0, k.iG)(a, C),
        eb = (0, k.Gx)(a),
        e_ = (0, z.Z)(e, ep, !1),
        ey = i.useCallback(() => (0, v.XU)(g, h, s), [g, h, s]),
        eC = (0, f.p9)({
            guildId: g,
            roleId: em.iconRoleId
        }),
        ex = (0, y.Z)(em);
    return (0, r.jsxs)('div', {
        className: J.quotedChatMessage,
        children: [
            (0, r.jsx)(d.P3F, {
                className: J.jump,
                onClick: ey,
                'aria-label': Q.intl.string(Q.t.k5WiPT),
                children: Q.intl.string(Q.t.k5WiPT)
            }),
            (0, r.jsx)(
                R.Z,
                et(ee({}, Z), {
                    id: l,
                    compact: b,
                    className: o()(_, {
                        [J.message]: !0,
                        [J.cozyMessage]: !b,
                        [J.mentioned]: a.mentioned,
                        [J.ephemeral]: (0, S.Pv)(a),
                        [J.systemMessage]: (0, T.Z)(a),
                        [J.groupStart]: a.id === C || a.type === X.uaV.REPLY,
                        [J.selected]: eu
                    }),
                    zalgo: !0,
                    onKeyDown: ef,
                    onFocus: w,
                    onBlur: B,
                    childrenRepliedMessage:
                        a.type === X.uaV.REPLY &&
                        (0, Y.Z)(
                            et(ee({}, e), {
                                setPopout: W,
                                referencedUsernameProfile: F.referencedUsernameProfile,
                                referencedAvatarProfile: F.referencedAvatarProfile,
                                replyReference: E,
                                replyMessage: ei,
                                isReplySpineClickable: !0
                            })
                        ),
                    childrenHeader: (0, V.Z)({
                        messageProps: e,
                        setPopout: W,
                        messagePopouts: F,
                        replyReference: E,
                        author: em,
                        repliedMessage: ei,
                        roleIcon: eC
                    }),
                    childrenAccessories: (0, G.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: eh,
                        isInteracting: ed,
                        renderThreadAccessory: !1,
                        renderSuppressEmbeds: !1,
                        renderReactions: !1,
                        disableComponentInteractivity: !0
                    }),
                    childrenSystemMessage: (0, q.Z)(e),
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
let eo = i.memo(function (e) {
    var t, n;
    let l,
        {
            id: a,
            message: v,
            message: { id: Z },
            channel: N,
            channel: { id: $ },
            compact: er = !1,
            className: ei,
            flashKey: el,
            groupId: eo,
            renderContentOnly: ea
        } = e;
    s()(v.type !== X.uaV.THREAD_STARTER_MESSAGE, 'Message must not be a thread starter message');
    let es = X.OBS.has(v.type) ? v.messageReference : void 0,
        ec = (0, c.JA)(null != (t = e.id) ? t : ''),
        { onFocus: eu } = ec,
        ed = en(ec, ['onFocus']),
        ep = (0, b.p7)('ChatMessage'),
        eh = j.RS.useSetting(),
        ef = j.NA.useSetting(),
        em = (0, u.e7)([x.Z], () => x.Z.getMessageByReference(es)),
        { popouts: eg, selected: eb, setPopout: e_ } = (0, D.Z)(v.id, K.d$),
        ey = (0, M.qo)(v, N, e_),
        eC = (0, M.Go)(v, N),
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
        { isFocused: eE, hasFocused: eI, handleFocus: eP, handleBlur: eS } = (0, M.bb)(eu),
        eZ = i.useCallback(
            (e) => {
                eP(e), ex(e);
            },
            [eP, ex]
        ),
        eN = i.useCallback(
            (e) => {
                eS(e), ev();
            },
            [eS, ev]
        ),
        eT = (0, u.e7)([I.Z], () => I.Z.isEditing($, Z), [$, Z]),
        eA = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        ew = eb || eT || (eA && eE),
        eR = ew || eO,
        ek = (0, u.e7)([O.Z], () => v.hasFlag(X.iLy.HAS_THREAD) && O.Z.getChannel(P.default.castMessageIdAsChannelId(v.id))),
        eM = v.isFirstMessageInForumPost(N),
        eL = (0, m.A)((null != (n = v.editedTimestamp) ? n : v.timestamp).valueOf()),
        eD = (0, u.e7)([E.Z], () => E.Z.isDeveloper),
        { content: eU, hasSpoilerEmbeds: eB } = (0, U.Z)(v, {
            hideSimpleEmbedContent: eh && ef,
            isInteracting: eR,
            formatInline: !1,
            allowList: eM || eL,
            allowHeading: eM || eL,
            allowLinks: !0,
            allowDevLinks: eD,
            previewLinkTarget: !0
        }),
        eG = (0, L.Z)(Z, $, eA),
        eF = (0, A.ZP)(v),
        eH = (0, u.e7)([C.Z], () => C.Z.getPendingReply($)),
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
            guildId: N.guild_id,
            roleId: eF.iconRoleId
        }),
        eW = (0, k.iG)(v, eo),
        eY = (0, k.Gx)(v),
        eq = (0, u.e7)([h.Z], () => h.Z.getMessage(Z), [Z]),
        eK = (0, B.Z)({
            message: v,
            channel: N
        }),
        eX = null != eq,
        eQ = i.useMemo(() => Object.values(eg).some((e) => e), [eg]);
    l = v.type === X.uaV.CUSTOM_GIFT ? '' : !eT && eX ? (0, F.Z)(e, eU) : (0, z.Z)(e, eU, eT);
    let eJ = (0, y.Z)(eF),
        e$ = v.id === eo,
        e0 = (0, r.jsx)(d.tEY, {
            offset: {
                left: 4,
                right: 4
            },
            children: (0, r.jsxs)('li', {
                id: a,
                className: J.messageListItem,
                'aria-setsize': -1,
                children: [
                    (0, _.Uw)(v) &&
                        (0, r.jsx)(g.Z, {
                            compact: er,
                            message: v,
                            hovering: eO && !eT && !eQ
                        }),
                    (0, r.jsx)(
                        R.Z,
                        et(ee({}, ed), {
                            'aria-setsize': -1,
                            'aria-roledescription': Q.intl.string(Q.t.BAB0yM),
                            'aria-labelledby': eW,
                            'aria-describedby': eY,
                            onFocus: eZ,
                            onBlur: eN,
                            onContextMenu: ey,
                            onKeyDown: eG,
                            onClick: eC,
                            compact: er,
                            contentOnly: ea,
                            className: o()(ei, {
                                [J.message]: !0,
                                [J.cozyMessage]: !er,
                                [J.mentioned]: v.mentioned,
                                [J.ephemeral]: (0, S.Pv)(v),
                                [J.nitroMessage]: v.type === X.uaV.NITRO_NOTIFICATION || v.type === X.uaV.CHAT_WALLPAPER_SET || v.type === X.uaV.CHAT_WALLPAPER_REMOVED,
                                [J.systemMessage]: (0, T.Z)(v),
                                [J.groupStart]: !ea && (e$ || v.type === X.uaV.REPLY),
                                [J.selected]: ew,
                                [J.replying]: (null == eH ? void 0 : eH.message.id) === v.id,
                                [J.interactionSending]: v.isCommandType() && v.state === X.yb.SENDING,
                                [J.automodMessage]: eX,
                                [J.editing]: eT,
                                [J.hasOpenPopouts]: eQ,
                                [J.potioned]: (0, _.Uw)(v) && ep
                            }),
                            zalgo: !eT,
                            childrenRepliedMessage:
                                ea || v.type !== X.uaV.REPLY
                                    ? void 0
                                    : (0, Y.Z)(
                                          et(ee({}, e), {
                                              setPopout: e_,
                                              referencedUsernameProfile: eg.referencedUsernameProfile,
                                              referencedAvatarProfile: eg.referencedAvatarProfile,
                                              replyReference: es,
                                              replyMessage: em,
                                              isReplySpineClickable: !0
                                          })
                                      ),
                            childrenExecutedCommand: (0, W.Z)(e, e_, eg),
                            childrenHeader: ea
                                ? void 0
                                : (0, V.Z)({
                                      messageProps: e,
                                      setPopout: e_,
                                      messagePopouts: eg,
                                      replyReference: es,
                                      author: eF,
                                      repliedMessage: em,
                                      roleIcon: ez
                                  }),
                            childrenAccessories: (0, G.Z)({
                                channelMessageProps: e,
                                hasSpoilerEmbeds: eB,
                                handleContextMenu: ey,
                                isInteracting: eR,
                                isAutomodBlockedMessage: eX
                            }),
                            childrenButtons:
                                ej || eI
                                    ? (0, H.Z)({
                                          buttonProps: e,
                                          setPopout: e_,
                                          messagePopouts: eg,
                                          isFocused: eO || eE
                                      })
                                    : void 0,
                            childrenSystemMessage: (0, q.Z)(e),
                            childrenMessageContent: l,
                            onMouseMove: ex,
                            onMouseLeave: ev,
                            hasThread: !ea && v.hasFlag(X.iLy.HAS_THREAD) && null != ek,
                            isSystemMessage: (0, T.Z)(v),
                            hasReply: v.type === X.uaV.REPLY,
                            messageRef: eK,
                            authorHasGradientRole: eJ,
                            guildId: N.guild_id
                        })
                    )
                ]
            })
        });
    return null != eV
        ? (0, r.jsx)(
              w.Z,
              {
                  flashKey: eV,
                  className: o()({
                      [J.backgroundFlash]: !0,
                      [J.groupStart]: !er && v.id === eo
                  }),
                  children: e0
              },
              'bg-flash-'.concat(a)
          )
        : e0;
});
