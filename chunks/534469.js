n.d(t, {
    AP: () => en,
    Ru: () => er,
    ZP: () => el
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
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
    S = n(709054),
    P = n(786761),
    I = n(534091),
    Z = n(901461),
    T = n(739566),
    N = n(233715),
    A = n(492593),
    w = n(453687),
    R = n(348238),
    M = n(62072),
    D = n(38267),
    L = n(25015),
    k = n(689674),
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
    X = n(30804),
    Q = n(482695);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function en(e, t, n) {
    return e.getElementById((0, I.p)(t, n));
}
function er(e) {
    var t;
    let {
        id: n,
        message: i,
        message: { messageReference: l },
        compact: o = !1,
        className: d
    } = e;
    s()(i.type === q.uaV.THREAD_STARTER_MESSAGE, 'Message must be a thread starter message');
    let p = J(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })((0, c.JA)(null != (t = e.id) ? t : ''))
        ),
        h = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(l)),
        { popouts: f, setPopout: m } = (0, D.Z)(i.id, Y.d$),
        g = (0, T.ZP)(i),
        b = (0, w.iG)(i),
        _ = (0, w.Gx)(i);
    return i.type === q.uaV.THREAD_STARTER_MESSAGE && null != h && h.state === C.Y.LOADED
        ? (0, r.jsx)(
              ei,
              ee($({}, e), {
                  viewingChannelId: i.channel_id,
                  message: h.message,
                  groupId: h.message.id
              })
          )
        : (0, r.jsx)(
              A.Z,
              ee($({}, p), {
                  id: n,
                  compact: o,
                  className: a()(d, {
                      [X.message]: !0,
                      [X.cozyMessage]: !o,
                      [X.systemMessage]: !0,
                      [X.groupStart]: !0
                  }),
                  childrenHeader: (0, H.Z)({
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
function ei(e) {
    var t, n;
    let {
            id: l,
            message: o,
            message: { id: s, channel_id: h },
            channel: { guild_id: g },
            compact: b = !1,
            className: _,
            groupId: y,
            viewingChannelId: j
        } = e,
        O = o.type === q.uaV.REPLY ? o.messageReference : void 0,
        E = (0, c.JA)(null != (t = e.id) ? t : ''),
        { onFocus: S } = E,
        I = et(E, ['onFocus']),
        { isFocused: N, handleFocus: k, handleBlur: B } = (0, R.bb)(S),
        { popouts: F, selected: V, setPopout: Q } = (0, D.Z)(o.id, Y.d$),
        J = v.RS.useSetting(),
        en = v.NA.useSetting(),
        er = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(O)),
        ei = (0, m.A)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()),
        {
            handleMouseEnter: el,
            handleMouseLeave: ea,
            isHovered: eo
        } = (0, R.tn)({
            groupId: y,
            message: o,
            defaultValue: V,
            popouts: F
        }),
        es = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        ec = V || (es && N),
        eu = ec || eo,
        { content: ed, hasSpoilerEmbeds: ep } = (0, L.Z)(o, {
            hideSimpleEmbedContent: J && en,
            isInteracting: eu,
            formatInline: !1,
            allowList: ei,
            allowHeading: ei,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: j
        }),
        eh = (0, M.Z)(s, h, es),
        ef = (0, T.ZP)(o),
        em = (0, w.iG)(o, y),
        eg = (0, w.Gx)(o),
        eb = (0, G.Z)(e, ed, !1),
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
                ee($({}, I), {
                    id: l,
                    compact: b,
                    className: a()(_, {
                        [X.message]: !0,
                        [X.cozyMessage]: !b,
                        [X.mentioned]: o.mentioned,
                        [X.ephemeral]: (0, P.Pv)(o),
                        [X.systemMessage]: (0, Z.Z)(o),
                        [X.groupStart]: o.id === y || o.type === q.uaV.REPLY,
                        [X.selected]: ec
                    }),
                    zalgo: !0,
                    onKeyDown: eh,
                    onFocus: k,
                    onBlur: B,
                    childrenRepliedMessage:
                        o.type === q.uaV.REPLY &&
                        (0, z.Z)(
                            ee($({}, e), {
                                setPopout: Q,
                                referencedUsernameProfile: F.referencedUsernameProfile,
                                referencedAvatarProfile: F.referencedAvatarProfile,
                                replyReference: O,
                                replyMessage: er,
                                isReplySpineClickable: !0
                            })
                        ),
                    childrenHeader: (0, H.Z)({
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
                    onMouseLeave: ea,
                    'aria-labelledby': em,
                    'aria-describedby': eg,
                    hasThread: !1,
                    author: ef
                })
            )
        ]
    });
}
let el = i.memo(function (e) {
    var t, n;
    let l,
        {
            id: o,
            message: x,
            message: { id: I },
            channel: J,
            channel: { id: en },
            compact: er = !1,
            className: ei,
            flashKey: el,
            groupId: ea,
            renderContentOnly: eo
        } = e;
    s()(x.type !== q.uaV.THREAD_STARTER_MESSAGE, 'Message must not be a thread starter message');
    let es = q.OBS.has(x.type) ? x.messageReference : void 0,
        ec = (0, c.JA)(null != (t = e.id) ? t : ''),
        { onFocus: eu } = ec,
        ed = et(ec, ['onFocus']),
        ep = (0, b.p7)('ChatMessage'),
        eh = v.RS.useSetting(),
        ef = v.NA.useSetting(),
        em = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(es)),
        { popouts: eg, selected: eb, setPopout: e_ } = (0, D.Z)(x.id, Y.d$),
        ey = (0, R.qo)(x, J, e_),
        eC = (0, R.Go)(x, J),
        {
            handleMouseEnter: ex,
            handleMouseLeave: ev,
            hasHovered: ej,
            isHovered: eO
        } = (0, R.tn)({
            groupId: ea,
            message: x,
            defaultValue: eb,
            popouts: eg
        }),
        { isFocused: eE, hasFocused: eS, handleFocus: eP, handleBlur: eI } = (0, R.bb)(eu),
        eZ = i.useCallback(
            (e) => {
                (eP(e), ex(e));
            },
            [eP, ex]
        ),
        eT = i.useCallback(
            (e) => {
                (eI(e), ev());
            },
            [eI, ev]
        ),
        eN = (0, u.e7)([E.Z], () => E.Z.isEditing(en, I), [en, I]),
        eA = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        ew = eb || eN || (eA && eE),
        eR = ew || eO,
        eM = (0, u.e7)([j.Z], () => x.hasFlag(q.iLy.HAS_THREAD) && j.Z.getChannel(S.default.castMessageIdAsChannelId(x.id))),
        eD = x.isFirstMessageInForumPost(J),
        eL = (0, m.A)((null != (n = x.editedTimestamp) ? n : x.timestamp).valueOf()),
        ek = (0, u.e7)([O.Z], () => O.Z.isDeveloper),
        { content: eU, hasSpoilerEmbeds: eB } = (0, L.Z)(x, {
            hideSimpleEmbedContent: eh && ef,
            isInteracting: eR,
            formatInline: !1,
            allowList: eD || eL,
            allowHeading: eD || eL,
            allowLinks: !0,
            allowDevLinks: ek,
            previewLinkTarget: !0
        }),
        eF = (0, M.Z)(I, en, eA),
        eH = (0, T.ZP)(x),
        eG = (0, u.e7)([y.Z], () => y.Z.getPendingReply(en)),
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
            roleId: eH.iconRoleId
        }),
        eW = (0, w.iG)(x, ea),
        eY = (0, w.Gx)(x),
        eq = (0, u.e7)([h.Z], () => h.Z.getMessage(I), [I]),
        eK = (0, k.Z)({
            message: x,
            channel: J
        }),
        eX = null != eq,
        eQ = i.useMemo(() => Object.values(eg).some((e) => e), [eg]);
    l = x.type === q.uaV.CUSTOM_GIFT ? '' : !eN && eX ? (0, B.Z)(e, eU) : (0, G.Z)(e, eU, eN);
    let eJ = x.id === ea,
        e$ = (0, r.jsx)(d.tEY, {
            offset: {
                left: 4,
                right: 4
            },
            children: (0, r.jsxs)('li', {
                id: o,
                className: X.messageListItem,
                'aria-setsize': -1,
                children: [
                    (0, _.Uw)(x) &&
                        (0, r.jsx)(g.Z, {
                            compact: er,
                            message: x,
                            hovering: eO && !eN && !eQ
                        }),
                    (0, r.jsx)(
                        A.Z,
                        ee($({}, ed), {
                            'aria-setsize': -1,
                            'aria-roledescription': K.intl.string(K.t.BAB0yM),
                            'aria-labelledby': eW,
                            'aria-describedby': eY,
                            onFocus: eZ,
                            onBlur: eT,
                            onContextMenu: ey,
                            onKeyDown: eF,
                            onClick: eC,
                            compact: er,
                            contentOnly: eo,
                            className: a()(ei, {
                                [X.message]: !0,
                                [X.cozyMessage]: !er,
                                [X.mentioned]: x.mentioned,
                                [X.ephemeral]: (0, P.Pv)(x),
                                [X.nitroMessage]: x.type === q.uaV.NITRO_NOTIFICATION || x.type === q.uaV.CHAT_WALLPAPER_SET || x.type === q.uaV.CHAT_WALLPAPER_REMOVED,
                                [X.systemMessage]: (0, Z.Z)(x),
                                [X.groupStart]: !eo && (eJ || x.type === q.uaV.REPLY),
                                [X.selected]: ew,
                                [X.replying]: (null == eG ? void 0 : eG.message.id) === x.id,
                                [X.interactionSending]: x.isCommandType() && x.state === q.yb.SENDING,
                                [X.automodMessage]: eX,
                                [X.editing]: eN,
                                [X.hasOpenPopouts]: eQ,
                                [X.potioned]: (0, _.Uw)(x) && ep,
                                [Q.forceAnimate]: eO
                            }),
                            zalgo: !eN,
                            childrenRepliedMessage:
                                eo || x.type !== q.uaV.REPLY
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
                            childrenHeader: eo
                                ? void 0
                                : (0, H.Z)({
                                      messageProps: e,
                                      setPopout: e_,
                                      messagePopouts: eg,
                                      replyReference: es,
                                      author: eH,
                                      repliedMessage: em,
                                      roleIcon: ez
                                  }),
                            childrenAccessories: (0, U.Z)({
                                channelMessageProps: e,
                                hasSpoilerEmbeds: eB,
                                handleContextMenu: ey,
                                isInteracting: eR,
                                isAutomodBlockedMessage: eX,
                                forceAddReactions: x.type === q.uaV.EMOJI_ADDED
                            }),
                            childrenButtons:
                                ej || eS
                                    ? (0, F.Z)({
                                          buttonProps: e,
                                          setPopout: e_,
                                          messagePopouts: eg,
                                          isFocused: eO || eE
                                      })
                                    : void 0,
                            childrenSystemMessage: (0, W.Z)(e),
                            childrenMessageContent: l,
                            onMouseMove: ex,
                            onMouseLeave: ev,
                            hasThread: !eo && x.hasFlag(q.iLy.HAS_THREAD) && null != eM,
                            isSystemMessage: (0, Z.Z)(x),
                            hasReply: x.type === q.uaV.REPLY,
                            messageRef: eK,
                            author: eH
                        })
                    )
                ]
            })
        });
    return null != eV
        ? (0, r.jsx)(
              N.Z,
              {
                  flashKey: eV,
                  className: a()({
                      [X.backgroundFlash]: !0,
                      [X.groupStart]: !er && x.id === ea
                  }),
                  children: e$
              },
              'bg-flash-'.concat(o)
          )
        : e$;
});
