n.d(t, {
    AP: () => et,
    Ru: () => en,
    ZP: () => ei
});
var r = n(255367),
    i = n(73800),
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
    y = n(807092),
    C = n(869765),
    x = n(703656),
    v = n(695346),
    j = n(592125),
    O = n(906467),
    E = n(323873),
    I = n(709054),
    S = n(786761),
    P = n(534091),
    Z = n(901461),
    N = n(739566),
    T = n(233715),
    A = n(492593),
    w = n(453687),
    R = n(348238),
    k = n(62072),
    M = n(38267),
    D = n(25015),
    L = n(689674),
    U = n(438075),
    B = n(764893),
    F = n(481363),
    G = n(900902),
    H = n(252032),
    V = n(737243),
    z = n(614584),
    W = n(295790),
    Y = n(959517),
    q = n(981631),
    K = n(388032),
    X = n(30804);
function Q() {
    return (Q =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function J(e) {
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
function $(e, t) {
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
function ee(e, t) {
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
function et(e, t, n) {
    return e.getElementById((0, P.p)(t, n));
}
function en(e) {
    var t;
    let {
        id: n,
        message: i,
        message: { messageReference: l },
        compact: a = !1,
        className: d
    } = e;
    s()(i.type === q.uaV.THREAD_STARTER_MESSAGE, 'Message must be a thread starter message');
    let p = Q(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })((0, c.JA)(null != (t = e.id) ? t : ''))
        ),
        h = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(l)),
        { popouts: f, setPopout: m } = (0, M.Z)(i.id, Y.d$),
        g = (0, N.ZP)(i),
        b = (0, w.iG)(i),
        _ = (0, w.Gx)(i);
    return i.type === q.uaV.THREAD_STARTER_MESSAGE && null != h && h.state === C.Y.LOADED
        ? (0, r.jsx)(
              er,
              $(J({}, e), {
                  viewingChannelId: i.channel_id,
                  message: h.message,
                  groupId: h.message.id
              })
          )
        : (0, r.jsx)(
              A.Z,
              $(J({}, p), {
                  id: n,
                  compact: a,
                  className: o()(d, {
                      [X.message]: !0,
                      [X.cozyMessage]: !a,
                      [X.systemMessage]: !0,
                      [X.groupStart]: !0
                  }),
                  childrenHeader: (0, G.Z)({
                      messageProps: e,
                      setPopout: m,
                      messagePopouts: f,
                      replyReference: l,
                      author: g
                  }),
                  childrenSystemMessage: (0, W.Z)(e),
                  childrenMessageContent: null,
                  'aria-labelledby': b,
                  'aria-describedby': _,
                  hasThread: !1,
                  author: g
              })
          );
}
function er(e) {
    var t, n;
    let {
            id: l,
            message: a,
            message: { id: s, channel_id: h },
            channel: { guild_id: g },
            compact: b = !1,
            className: _,
            groupId: y,
            viewingChannelId: j
        } = e,
        O = a.type === q.uaV.REPLY ? a.messageReference : void 0,
        E = (0, c.JA)(null != (t = e.id) ? t : ''),
        { onFocus: I } = E,
        P = ee(E, ['onFocus']),
        { isFocused: T, handleFocus: L, handleBlur: B } = (0, R.bb)(I),
        { popouts: F, selected: V, setPopout: Q } = (0, M.Z)(a.id, Y.d$),
        et = v.RS.useSetting(),
        en = v.NA.useSetting(),
        er = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(O)),
        ei = (0, m.A)((null != (n = a.editedTimestamp) ? n : a.timestamp).valueOf()),
        {
            handleMouseEnter: el,
            handleMouseLeave: eo,
            isHovered: ea
        } = (0, R.tn)({
            groupId: y,
            message: a,
            defaultValue: V,
            popouts: F
        }),
        es = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        ec = V || (es && T),
        eu = ec || ea,
        { content: ed, hasSpoilerEmbeds: ep } = (0, D.Z)(a, {
            hideSimpleEmbedContent: et && en,
            isInteracting: eu,
            formatInline: !1,
            allowList: ei,
            allowHeading: ei,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: j
        }),
        eh = (0, k.Z)(s, h, es),
        ef = (0, N.ZP)(a),
        em = (0, w.iG)(a, y),
        eg = (0, w.Gx)(a),
        eb = (0, H.Z)(e, ed, !1),
        e_ = i.useCallback(() => (0, x.XU)(g, h, s), [g, h, s]),
        ey = (0, f.p9)({
            guildId: g,
            roleId: ef.iconRoleId
        });
    return (0, r.jsxs)('div', {
        className: X.quotedChatMessage,
        children: [
            (0, r.jsx)(d.P3F, {
                className: X.jump,
                onClick: e_,
                'aria-label': K.intl.string(K.t.k5WiPT),
                children: K.intl.string(K.t.k5WiPT)
            }),
            (0, r.jsx)(
                A.Z,
                $(J({}, P), {
                    id: l,
                    compact: b,
                    className: o()(_, {
                        [X.message]: !0,
                        [X.cozyMessage]: !b,
                        [X.mentioned]: a.mentioned,
                        [X.ephemeral]: (0, S.Pv)(a),
                        [X.systemMessage]: (0, Z.Z)(a),
                        [X.groupStart]: a.id === y || a.type === q.uaV.REPLY,
                        [X.selected]: ec
                    }),
                    zalgo: !0,
                    onKeyDown: eh,
                    onFocus: L,
                    onBlur: B,
                    childrenRepliedMessage:
                        a.type === q.uaV.REPLY &&
                        (0, z.Z)(
                            $(J({}, e), {
                                setPopout: Q,
                                referencedUsernameProfile: F.referencedUsernameProfile,
                                referencedAvatarProfile: F.referencedAvatarProfile,
                                replyReference: O,
                                replyMessage: er,
                                isReplySpineClickable: !0
                            })
                        ),
                    childrenHeader: (0, G.Z)({
                        messageProps: e,
                        setPopout: Q,
                        messagePopouts: F,
                        replyReference: O,
                        author: ef,
                        repliedMessage: er,
                        roleIcon: ey
                    }),
                    childrenAccessories: (0, U.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: ep,
                        isInteracting: eu,
                        renderThreadAccessory: !1,
                        renderSuppressEmbeds: !1,
                        renderReactions: !1,
                        disableComponentInteractivity: !0
                    }),
                    childrenSystemMessage: (0, W.Z)(e),
                    childrenMessageContent: eb,
                    onMouseMove: el,
                    onMouseLeave: eo,
                    'aria-labelledby': em,
                    'aria-describedby': eg,
                    hasThread: !1,
                    author: ef
                })
            )
        ]
    });
}
let ei = i.memo(function (e) {
    var t, n;
    let l,
        {
            id: a,
            message: x,
            message: { id: P },
            channel: Q,
            channel: { id: et },
            compact: en = !1,
            className: er,
            flashKey: ei,
            groupId: el,
            renderContentOnly: eo
        } = e;
    s()(x.type !== q.uaV.THREAD_STARTER_MESSAGE, 'Message must not be a thread starter message');
    let ea = q.OBS.has(x.type) ? x.messageReference : void 0,
        es = (0, c.JA)(null != (t = e.id) ? t : ''),
        { onFocus: ec } = es,
        eu = ee(es, ['onFocus']),
        ed = (0, b.p7)('ChatMessage'),
        ep = v.RS.useSetting(),
        eh = v.NA.useSetting(),
        ef = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(ea)),
        { popouts: em, selected: eg, setPopout: eb } = (0, M.Z)(x.id, Y.d$),
        e_ = (0, R.qo)(x, Q, eb),
        ey = (0, R.Go)(x, Q),
        {
            handleMouseEnter: eC,
            handleMouseLeave: ex,
            hasHovered: ev,
            isHovered: ej
        } = (0, R.tn)({
            groupId: el,
            message: x,
            defaultValue: eg,
            popouts: em
        }),
        { isFocused: eO, hasFocused: eE, handleFocus: eI, handleBlur: eS } = (0, R.bb)(ec),
        eP = i.useCallback(
            (e) => {
                eI(e), eC(e);
            },
            [eI, eC]
        ),
        eZ = i.useCallback(
            (e) => {
                eS(e), ex();
            },
            [eS, ex]
        ),
        eN = (0, u.e7)([E.Z], () => E.Z.isEditing(et, P), [et, P]),
        eT = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eA = eg || eN || (eT && eO),
        ew = eA || ej,
        eR = (0, u.e7)([j.Z], () => x.hasFlag(q.iLy.HAS_THREAD) && j.Z.getChannel(I.default.castMessageIdAsChannelId(x.id))),
        ek = x.isFirstMessageInForumPost(Q),
        eM = (0, m.A)((null != (n = x.editedTimestamp) ? n : x.timestamp).valueOf()),
        eD = (0, u.e7)([O.Z], () => O.Z.isDeveloper),
        { content: eL, hasSpoilerEmbeds: eU } = (0, D.Z)(x, {
            hideSimpleEmbedContent: ep && eh,
            isInteracting: ew,
            formatInline: !1,
            allowList: ek || eM,
            allowHeading: ek || eM,
            allowLinks: !0,
            allowDevLinks: eD,
            previewLinkTarget: !0
        }),
        eB = (0, k.Z)(P, et, eT),
        eF = (0, N.ZP)(x),
        eG = (0, u.e7)([y.Z], () => y.Z.getPendingReply(et)),
        eH = (function (e) {
            let t = i.useRef(e);
            return (
                i.useEffect(() => {
                    t.current = null != e ? e : t.current;
                }),
                null != e ? e : t.current
            );
        })(ei),
        eV = (0, f.p9)({
            guildId: Q.guild_id,
            roleId: eF.iconRoleId
        }),
        ez = (0, w.iG)(x, el),
        eW = (0, w.Gx)(x),
        eY = (0, u.e7)([h.Z], () => h.Z.getMessage(P), [P]),
        eq = (0, L.Z)({
            message: x,
            channel: Q
        }),
        eK = null != eY,
        eX = i.useMemo(() => Object.values(em).some((e) => e), [em]);
    l = x.type === q.uaV.CUSTOM_GIFT ? '' : !eN && eK ? (0, B.Z)(e, eL) : (0, H.Z)(e, eL, eN);
    let eQ = x.id === el,
        eJ = (0, r.jsx)(d.tEY, {
            offset: {
                left: 4,
                right: 4
            },
            children: (0, r.jsxs)('li', {
                id: a,
                className: X.messageListItem,
                'aria-setsize': -1,
                children: [
                    (0, _.Uw)(x) &&
                        (0, r.jsx)(g.Z, {
                            compact: en,
                            message: x,
                            hovering: ej && !eN && !eX
                        }),
                    (0, r.jsx)(
                        A.Z,
                        $(J({}, eu), {
                            'aria-setsize': -1,
                            'aria-roledescription': K.intl.string(K.t.BAB0yM),
                            'aria-labelledby': ez,
                            'aria-describedby': eW,
                            onFocus: eP,
                            onBlur: eZ,
                            onContextMenu: e_,
                            onKeyDown: eB,
                            onClick: ey,
                            compact: en,
                            contentOnly: eo,
                            className: o()(er, {
                                [X.message]: !0,
                                [X.cozyMessage]: !en,
                                [X.mentioned]: x.mentioned,
                                [X.ephemeral]: (0, S.Pv)(x),
                                [X.nitroMessage]: x.type === q.uaV.NITRO_NOTIFICATION || x.type === q.uaV.CHAT_WALLPAPER_SET || x.type === q.uaV.CHAT_WALLPAPER_REMOVED,
                                [X.systemMessage]: (0, Z.Z)(x),
                                [X.groupStart]: !eo && (eQ || x.type === q.uaV.REPLY),
                                [X.selected]: eA,
                                [X.replying]: (null == eG ? void 0 : eG.message.id) === x.id,
                                [X.interactionSending]: x.isCommandType() && x.state === q.yb.SENDING,
                                [X.automodMessage]: eK,
                                [X.editing]: eN,
                                [X.hasOpenPopouts]: eX,
                                [X.potioned]: (0, _.Uw)(x) && ed
                            }),
                            zalgo: !eN,
                            childrenRepliedMessage:
                                eo || x.type !== q.uaV.REPLY
                                    ? void 0
                                    : (0, z.Z)(
                                          $(J({}, e), {
                                              setPopout: eb,
                                              referencedUsernameProfile: em.referencedUsernameProfile,
                                              referencedAvatarProfile: em.referencedAvatarProfile,
                                              replyReference: ea,
                                              replyMessage: ef,
                                              isReplySpineClickable: !0
                                          })
                                      ),
                            childrenExecutedCommand: (0, V.Z)(e, eb, em),
                            childrenHeader: eo
                                ? void 0
                                : (0, G.Z)({
                                      messageProps: e,
                                      setPopout: eb,
                                      messagePopouts: em,
                                      replyReference: ea,
                                      author: eF,
                                      repliedMessage: ef,
                                      roleIcon: eV
                                  }),
                            childrenAccessories: (0, U.Z)({
                                channelMessageProps: e,
                                hasSpoilerEmbeds: eU,
                                handleContextMenu: e_,
                                isInteracting: ew,
                                isAutomodBlockedMessage: eK
                            }),
                            childrenButtons:
                                ev || eE
                                    ? (0, F.Z)({
                                          buttonProps: e,
                                          setPopout: eb,
                                          messagePopouts: em,
                                          isFocused: ej || eO
                                      })
                                    : void 0,
                            childrenSystemMessage: (0, W.Z)(e),
                            childrenMessageContent: l,
                            onMouseMove: eC,
                            onMouseLeave: ex,
                            hasThread: !eo && x.hasFlag(q.iLy.HAS_THREAD) && null != eR,
                            isSystemMessage: (0, Z.Z)(x),
                            hasReply: x.type === q.uaV.REPLY,
                            messageRef: eq,
                            author: eF
                        })
                    )
                ]
            })
        });
    return null != eH
        ? (0, r.jsx)(
              T.Z,
              {
                  flashKey: eH,
                  className: o()({
                      [X.backgroundFlash]: !0,
                      [X.groupStart]: !en && x.id === el
                  }),
                  children: eJ
              },
              'bg-flash-'.concat(a)
          )
        : eJ;
});
