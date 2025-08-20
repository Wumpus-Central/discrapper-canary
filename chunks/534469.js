n.d(t, {
    AP: () => et,
    Ru: () => en,
    ZP: () => ei,
});
var r = n(951288),
    i = n(647438),
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
    y = n(235894),
    _ = n(807092),
    C = n(869765),
    x = n(703656),
    v = n(695346),
    O = n(592125),
    j = n(906467),
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
    k = n(38267),
    D = n(25015),
    L = n(689674),
    U = n(438075),
    B = n(764893),
    F = n(481363),
    H = n(900902),
    G = n(252032),
    V = n(737243),
    z = n(614584),
    W = n(295790),
    q = n(959517),
    Y = n(981631),
    K = n(388032),
    X = n(360514);
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
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function et(e, t, n) {
    return e.getElementById((0, I.p)(t, n));
}
function en(e) {
    var t;
    let {
        id: n,
        message: i,
        message: { messageReference: l },
        compact: o = !1,
        className: d,
    } = e;
    s()(i.type === Y.uaV.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let p = Q(
            {},
            (function (e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
                return e;
            })((0, c.JA)(null != (t = e.id) ? t : "")),
        ),
        h = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(l)),
        { popouts: f, setPopout: m } = (0, k.Z)(i.id, q.d$),
        g = (0, T.ZP)(i),
        b = (0, w.iG)(i),
        y = (0, w.Gx)(i);
    return i.type === Y.uaV.THREAD_STARTER_MESSAGE && null != h && h.state === C.Y.LOADED
        ? (0, r.jsx)(
              er,
              $(J({}, e), {
                  viewingChannelId: i.channel_id,
                  message: h.message,
                  groupId: h.message.id,
              }),
          )
        : (0, r.jsx)(
              A.Z,
              $(J({}, p), {
                  id: n,
                  compact: o,
                  className: a()(d, {
                      [X.message]: !0,
                      [X.cozyMessage]: !o,
                      [X.systemMessage]: !0,
                      [X.groupStart]: !0,
                  }),
                  childrenHeader: (0, H.Z)({
                      messageProps: e,
                      setPopout: m,
                      messagePopouts: f,
                      replyReference: l,
                      author: g,
                  }),
                  childrenSystemMessage: (0, W.Z)(e),
                  childrenMessageContent: null,
                  "aria-labelledby": b,
                  "aria-describedby": y,
                  hasThread: !1,
                  author: g,
              }),
          );
}
function er(e) {
    var t, n;
    let {
            id: l,
            message: o,
            message: { id: s, channel_id: h },
            channel: { guild_id: g },
            compact: b = !1,
            className: y,
            groupId: _,
            viewingChannelId: O,
        } = e,
        j = o.type === Y.uaV.REPLY ? o.messageReference : void 0,
        E = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: S } = E,
        I = ee(E, ["onFocus"]),
        { isFocused: N, handleFocus: L, handleBlur: B } = (0, R.bb)(S),
        { popouts: F, selected: V, setPopout: Q } = (0, k.Z)(o.id, q.d$),
        et = v.RS.useSetting(),
        en = v.NA.useSetting(),
        er = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(j)),
        ei = (0, m.A)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()),
        {
            handleMouseEnter: el,
            handleMouseLeave: ea,
            isHovered: eo,
        } = (0, R.tn)({
            groupId: _,
            message: o,
            defaultValue: V,
            popouts: F,
        }),
        es = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        ec = V || (es && N),
        eu = ec || eo,
        { content: ed, hasSpoilerEmbeds: ep } = (0, D.Z)(o, {
            hideSimpleEmbedContent: et && en,
            isInteracting: eu,
            formatInline: !1,
            allowList: ei,
            allowHeading: ei,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: O,
        }),
        eh = (0, M.Z)(s, h, es),
        ef = (0, T.ZP)(o),
        em = (0, w.iG)(o, _),
        eg = (0, w.Gx)(o),
        eb = (0, G.Z)(e, ed, !1),
        ey = i.useCallback(() => (0, x.XU)(g, h, s), [g, h, s]),
        e_ = (0, f.p9)({
            guildId: g,
            roleId: ef.iconRoleId,
        });
    return (0, r.jsxs)("div", {
        className: X.quotedChatMessage,
        children: [
            (0, r.jsx)(d.P3F, {
                className: X.jump,
                onClick: ey,
                "aria-label": K.intl.string(K.t.k5WiPT),
                children: K.intl.string(K.t.k5WiPT),
            }),
            (0, r.jsx)(
                A.Z,
                $(J({}, I), {
                    id: l,
                    compact: b,
                    className: a()(y, {
                        [X.message]: !0,
                        [X.cozyMessage]: !b,
                        [X.mentioned]: o.mentioned,
                        [X.ephemeral]: (0, P.Pv)(o),
                        [X.systemMessage]: (0, Z.Z)(o),
                        [X.groupStart]: o.id === _ || o.type === Y.uaV.REPLY,
                        [X.selected]: ec,
                    }),
                    zalgo: !0,
                    onKeyDown: eh,
                    onFocus: L,
                    onBlur: B,
                    childrenRepliedMessage:
                        o.type === Y.uaV.REPLY &&
                        (0, z.Z)(
                            $(J({}, e), {
                                setPopout: Q,
                                referencedUsernameProfile: F.referencedUsernameProfile,
                                referencedAvatarProfile: F.referencedAvatarProfile,
                                replyReference: j,
                                replyMessage: er,
                                isReplySpineClickable: !0,
                            }),
                        ),
                    childrenHeader: (0, H.Z)({
                        messageProps: e,
                        setPopout: Q,
                        messagePopouts: F,
                        replyReference: j,
                        author: ef,
                        repliedMessage: er,
                        roleIcon: e_,
                    }),
                    childrenAccessories: (0, U.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: ep,
                        isInteracting: eu,
                        renderThreadAccessory: !1,
                        renderSuppressEmbeds: !1,
                        renderReactions: !1,
                        disableComponentInteractivity: !0,
                    }),
                    childrenSystemMessage: (0, W.Z)(e),
                    childrenMessageContent: eb,
                    onMouseMove: el,
                    onMouseLeave: ea,
                    "aria-labelledby": em,
                    "aria-describedby": eg,
                    hasThread: !1,
                    author: ef,
                }),
            ),
        ],
    });
}
let ei = i.memo(function (e) {
    var t, n;
    let l,
        {
            id: o,
            message: x,
            message: { id: I },
            channel: Q,
            channel: { id: et },
            compact: en = !1,
            className: er,
            flashKey: ei,
            groupId: el,
            renderContentOnly: ea,
        } = e;
    s()(x.type !== Y.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let eo = Y.OBS.has(x.type) ? x.messageReference : void 0,
        es = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: ec } = es,
        eu = ee(es, ["onFocus"]),
        ed = (0, b.p7)("ChatMessage"),
        ep = v.RS.useSetting(),
        eh = v.NA.useSetting(),
        ef = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(eo)),
        { popouts: em, selected: eg, setPopout: eb } = (0, k.Z)(x.id, q.d$),
        ey = (0, R.qo)(x, Q, eb),
        e_ = (0, R.Go)(x, Q),
        {
            handleMouseEnter: eC,
            handleMouseLeave: ex,
            hasHovered: ev,
            isHovered: eO,
        } = (0, R.tn)({
            groupId: el,
            message: x,
            defaultValue: eg,
            popouts: em,
        }),
        { isFocused: ej, hasFocused: eE, handleFocus: eS, handleBlur: eP } = (0, R.bb)(ec),
        eI = i.useCallback(
            (e) => {
                eS(e), eC(e);
            },
            [eS, eC],
        ),
        eZ = i.useCallback(
            (e) => {
                eP(e), ex();
            },
            [eP, ex],
        ),
        eT = (0, u.e7)([E.Z], () => E.Z.isEditing(et, I), [et, I]),
        eN = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eA = eg || eT || (eN && ej),
        ew = eA || eO,
        eR = (0, u.e7)(
            [O.Z],
            () => x.hasFlag(Y.iLy.HAS_THREAD) && O.Z.getChannel(S.default.castMessageIdAsChannelId(x.id)),
        ),
        eM = x.isFirstMessageInForumPost(Q),
        ek = (0, m.A)((null != (n = x.editedTimestamp) ? n : x.timestamp).valueOf()),
        eD = (0, u.e7)([j.Z], () => j.Z.isDeveloper),
        { content: eL, hasSpoilerEmbeds: eU } = (0, D.Z)(x, {
            hideSimpleEmbedContent: ep && eh,
            isInteracting: ew,
            formatInline: !1,
            allowList: eM || ek,
            allowHeading: eM || ek,
            allowLinks: !0,
            allowDevLinks: eD,
            previewLinkTarget: !0,
        }),
        eB = (0, M.Z)(I, et, eN),
        eF = (0, T.ZP)(x),
        eH = (0, u.e7)([_.Z], () => _.Z.getPendingReply(et)),
        eG = (function (e) {
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
            roleId: eF.iconRoleId,
        }),
        ez = (0, w.iG)(x, el),
        eW = (0, w.Gx)(x),
        eq = (0, u.e7)([h.Z], () => h.Z.getMessage(I), [I]),
        eY = (0, L.Z)({
            message: x,
            channel: Q,
        }),
        eK = i.useRef(window),
        eX = null != eq,
        eQ = i.useMemo(() => Object.values(em).some((e) => e), [em]);
    l = x.type === Y.uaV.CUSTOM_GIFT ? "" : !eT && eX ? (0, B.Z)(e, eL) : (0, G.Z)(e, eL, eT);
    let eJ = x.id === el,
        e$ = (0, r.jsx)(d.tEY, {
            offset: {
                left: 4,
                right: 4,
            },
            children: (0, r.jsxs)("li", {
                id: o,
                className: X.messageListItem,
                "aria-setsize": -1,
                children: [
                    (0, y.Uw)(x) &&
                        (0, r.jsx)(g.Z, {
                            compact: en,
                            message: x,
                            hovering: eO && !eT && !eQ,
                        }),
                    (0, r.jsx)(
                        A.Z,
                        $(J({}, eu), {
                            "aria-setsize": -1,
                            "aria-roledescription": K.intl.string(K.t.BAB0yM),
                            "aria-labelledby": ez,
                            "aria-describedby": eW,
                            onFocus: eI,
                            onBlur: eZ,
                            onContextMenu: ey,
                            onKeyDown: eB,
                            onClick: e_,
                            compact: en,
                            contentOnly: ea,
                            className: a()(er, {
                                [X.message]: !0,
                                [X.cozyMessage]: !en,
                                [X.mentioned]: x.mentioned,
                                [X.ephemeral]: (0, P.Pv)(x),
                                [X.nitroMessage]:
                                    x.type === Y.uaV.NITRO_NOTIFICATION ||
                                    x.type === Y.uaV.CHAT_WALLPAPER_SET ||
                                    x.type === Y.uaV.CHAT_WALLPAPER_REMOVED,
                                [X.systemMessage]: (0, Z.Z)(x),
                                [X.groupStart]: !ea && (eJ || x.type === Y.uaV.REPLY),
                                [X.selected]: eA,
                                [X.replying]: (null == eH ? void 0 : eH.message.id) === x.id,
                                [X.interactionSending]: x.isCommandType() && x.state === Y.yb.SENDING,
                                [X.automodMessage]: eX,
                                [X.editing]: eT,
                                [X.hasOpenPopouts]: eQ,
                                [X.potioned]: (0, y.Uw)(x) && ed,
                            }),
                            zalgo: !eT,
                            childrenRepliedMessage:
                                ea || x.type !== Y.uaV.REPLY
                                    ? void 0
                                    : (0, z.Z)(
                                          $(J({}, e), {
                                              setPopout: eb,
                                              referencedUsernameProfile: em.referencedUsernameProfile,
                                              referencedAvatarProfile: em.referencedAvatarProfile,
                                              replyReference: eo,
                                              replyMessage: ef,
                                              isReplySpineClickable: !0,
                                          }),
                                      ),
                            childrenExecutedCommand: (0, V.Z)(e, eb, em),
                            childrenHeader: ea
                                ? void 0
                                : (0, H.Z)({
                                      messageProps: e,
                                      setPopout: eb,
                                      messagePopouts: em,
                                      replyReference: eo,
                                      author: eF,
                                      repliedMessage: ef,
                                      roleIcon: eV,
                                  }),
                            childrenAccessories: (0, U.Z)({
                                channelMessageProps: e,
                                hasSpoilerEmbeds: eU,
                                handleContextMenu: ey,
                                isInteracting: ew,
                                isAutomodBlockedMessage: eX,
                                forceAddReactions: x.type === Y.uaV.EMOJI_ADDED,
                            }),
                            childrenButtons:
                                ev || eE
                                    ? (0, F.Z)({
                                          buttonProps: e,
                                          setPopout: eb,
                                          messagePopouts: em,
                                          isFocused: eO || ej,
                                          messageWindow: eK.current,
                                      })
                                    : void 0,
                            childrenSystemMessage: (0, W.Z)(e),
                            childrenMessageContent: l,
                            onMouseMove: eC,
                            onMouseLeave: ex,
                            hasThread: !ea && x.hasFlag(Y.iLy.HAS_THREAD) && null != eR,
                            isSystemMessage: (0, Z.Z)(x),
                            hasReply: x.type === Y.uaV.REPLY,
                            messageRef: (e) => {
                                var t, n;
                                (eY.current = e),
                                    (eK.current =
                                        null !=
                                        (n = null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView)
                                            ? n
                                            : window);
                            },
                            author: eF,
                        }),
                    ),
                ],
            }),
        });
    return null != eG
        ? (0, r.jsx)(
              N.Z,
              {
                  flashKey: eG,
                  className: a()({
                      [X.backgroundFlash]: !0,
                      [X.groupStart]: !en && x.id === el,
                  }),
                  children: e$,
              },
              "bg-flash-".concat(o),
          )
        : e$;
});
