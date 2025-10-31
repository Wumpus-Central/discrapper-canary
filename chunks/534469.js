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
    f = n(223606),
    h = n(518738),
    m = n(628238),
    g = n(911266),
    b = n(111810),
    _ = n(235894),
    y = n(807092),
    C = n(869765),
    v = n(703656),
    O = n(695346),
    x = n(592125),
    E = n(906467),
    j = n(323873),
    S = n(709054),
    P = n(786761),
    I = n(534091),
    Z = n(901461),
    T = n(739566),
    N = n(233715),
    A = n(492593),
    w = n(453687),
    M = n(348238),
    R = n(62072),
    D = n(38267),
    L = n(25015),
    k = n(689674),
    U = n(438075),
    B = n(764893),
    F = n(481363),
    V = n(900902),
    H = n(252032),
    G = n(737243),
    W = n(614584),
    z = n(295790),
    q = n(959517),
    Y = n(981631),
    K = n(388032),
    X = n(360514);
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
function Q(e) {
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
    let p = J(
            {},
            (function (e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
                return e;
            })((0, c.JA)(null != (t = e.id) ? t : "")),
        ),
        f = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(l)),
        { popouts: h, setPopout: m } = (0, D.Z)(i.id, q.d$),
        g = (0, T.ZP)(i),
        b = (0, w.iG)(i),
        _ = (0, w.Gx)(i);
    return i.type === Y.uaV.THREAD_STARTER_MESSAGE && null != f && f.state === C.Y.LOADED
        ? (0, r.jsx)(
              er,
              $(Q({}, e), {
                  viewingChannelId: i.channel_id,
                  message: f.message,
                  groupId: f.message.id,
              }),
          )
        : (0, r.jsx)(
              A.Z,
              $(Q({}, p), {
                  id: n,
                  compact: o,
                  className: a()(d, {
                      [X.message]: !0,
                      [X.cozyMessage]: !o,
                      [X.systemMessage]: !0,
                      [X.groupStart]: !0,
                  }),
                  childrenHeader: (0, V.Z)({
                      messageProps: e,
                      setPopout: m,
                      messagePopouts: h,
                      replyReference: l,
                      author: g,
                  }),
                  childrenSystemMessage: (0, z.Z)(e),
                  childrenMessageContent: null,
                  "aria-labelledby": b,
                  "aria-describedby": _,
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
            message: { id: s, channel_id: f },
            channel: { guild_id: g },
            compact: b = !1,
            className: _,
            groupId: y,
            viewingChannelId: x,
        } = e,
        j = o.type === Y.uaV.REPLY ? o.messageReference : void 0,
        S = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: I } = S,
        N = ee(S, ["onFocus"]),
        { isFocused: k, handleFocus: B, handleBlur: F } = (0, M.bb)(I),
        { popouts: G, selected: J, setPopout: et } = (0, D.Z)(o.id, q.d$),
        en = O.RS.useSetting(),
        er = O.NA.useSetting(),
        ei = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(j)),
        el = (0, m.A)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()),
        {
            handleMouseEnter: ea,
            handleMouseLeave: eo,
            isHovered: es,
        } = (0, M.tn)({
            groupId: y,
            message: o,
            defaultValue: J,
            popouts: G,
        }),
        ec = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eu = J || (ec && k),
        ed = eu || es,
        ep = (0, u.e7)([E.Z], () => E.Z.isDeveloper),
        { content: ef, hasSpoilerEmbeds: eh } = (0, L.Z)(o, {
            hideSimpleEmbedContent: en && er,
            isInteracting: ed,
            formatInline: !1,
            allowList: el,
            allowHeading: el,
            allowLinks: !0,
            allowDevLinks: ep,
            previewLinkTarget: !0,
            viewingChannelId: x,
        }),
        em = (0, R.Z)(s, f, ec),
        eg = (0, T.ZP)(o),
        eb = (0, w.iG)(o, y),
        e_ = (0, w.Gx)(o),
        ey = (0, H.Z)(e, ef, !1),
        eC = i.useCallback(() => (0, v.XU)(g, f, s), [g, f, s]),
        ev = (0, h.p9)({
            guildId: g,
            roleId: eg.iconRoleId,
        });
    return (0, r.jsxs)("div", {
        className: X.quotedChatMessage,
        children: [
            (0, r.jsx)(d.P3F, {
                className: X.jump,
                onClick: eC,
                "aria-label": K.intl.string(K.t.k5WiPf),
                children: K.intl.string(K.t.k5WiPf),
            }),
            (0, r.jsx)(
                A.Z,
                $(Q({}, N), {
                    id: l,
                    compact: b,
                    className: a()(_, {
                        [X.message]: !0,
                        [X.cozyMessage]: !b,
                        [X.mentioned]: o.mentioned,
                        [X.ephemeral]: (0, P.Pv)(o),
                        [X.systemMessage]: (0, Z.Z)(o),
                        [X.groupStart]: o.id === y || o.type === Y.uaV.REPLY,
                        [X.selected]: eu,
                    }),
                    zalgo: !0,
                    onKeyDown: em,
                    onFocus: B,
                    onBlur: F,
                    childrenRepliedMessage:
                        o.type === Y.uaV.REPLY &&
                        (0, W.Z)(
                            $(Q({}, e), {
                                setPopout: et,
                                referencedUsernameProfile: G.referencedUsernameProfile,
                                referencedAvatarProfile: G.referencedAvatarProfile,
                                replyReference: j,
                                replyMessage: ei,
                                isReplySpineClickable: !0,
                            }),
                        ),
                    childrenHeader: (0, V.Z)({
                        messageProps: e,
                        setPopout: et,
                        messagePopouts: G,
                        replyReference: j,
                        author: eg,
                        repliedMessage: ei,
                        roleIcon: ev,
                    }),
                    childrenAccessories: (0, U.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: eh,
                        isInteracting: ed,
                        renderThreadAccessory: !1,
                        renderSuppressEmbeds: !1,
                        renderReactions: !1,
                        disableComponentInteractivity: !0,
                    }),
                    childrenSystemMessage: (0, z.Z)(e),
                    childrenMessageContent: ey,
                    onMouseMove: ea,
                    onMouseLeave: eo,
                    "aria-labelledby": eb,
                    "aria-describedby": e_,
                    hasThread: !1,
                    author: eg,
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
            message: v,
            message: { id: I },
            channel: J,
            channel: { id: et },
            compact: en = !1,
            className: er,
            flashKey: ei,
            groupId: el,
            renderContentOnly: ea,
        } = e;
    s()(v.type !== Y.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let eo = Y.OBS.has(v.type) ? v.messageReference : void 0,
        es = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: ec } = es,
        eu = ee(es, ["onFocus"]),
        ed = (0, b.p7)("ChatMessage"),
        ep = O.RS.useSetting(),
        ef = O.NA.useSetting(),
        eh = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(eo)),
        { popouts: em, selected: eg, setPopout: eb } = (0, D.Z)(v.id, q.d$),
        e_ = (0, M.qo)(v, J, eb),
        ey = (0, M.Go)(v, J),
        {
            handleMouseEnter: eC,
            handleMouseLeave: ev,
            hasHovered: eO,
            isHovered: ex,
        } = (0, M.tn)({
            groupId: el,
            message: v,
            defaultValue: eg,
            popouts: em,
        }),
        { isFocused: eE, hasFocused: ej, handleFocus: eS, handleBlur: eP } = (0, M.bb)(ec),
        eI = i.useCallback(
            (e) => {
                eS(e), eC(e);
            },
            [eS, eC],
        ),
        eZ = i.useCallback(
            (e) => {
                eP(e), ev();
            },
            [eP, ev],
        ),
        eT = (0, u.e7)([j.Z], () => j.Z.isEditing(et, I), [et, I]),
        eN = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eA = eg || eT || (eN && eE),
        ew = eA || ex,
        eM = (0, u.e7)(
            [x.Z],
            () => v.hasFlag(Y.iLy.HAS_THREAD) && x.Z.getChannel(S.default.castMessageIdAsChannelId(v.id)),
        ),
        eR = v.isFirstMessageInForumPost(J),
        eD = (0, m.A)((null != (n = v.editedTimestamp) ? n : v.timestamp).valueOf()),
        eL = (0, u.e7)([E.Z], () => E.Z.isDeveloper),
        { content: ek, hasSpoilerEmbeds: eU } = (0, L.Z)(v, {
            hideSimpleEmbedContent: ep && ef,
            isInteracting: ew,
            formatInline: !1,
            allowList: eR || eD,
            allowHeading: eR || eD,
            allowLinks: !0,
            allowDevLinks: eL,
            previewLinkTarget: !0,
        }),
        eB = (0, R.Z)(I, et, eN),
        eF = (0, T.ZP)(v),
        eV = (0, u.e7)([y.Z], () => y.Z.getPendingReply(et)),
        eH = (function (e) {
            let t = i.useRef(e);
            return (
                i.useEffect(() => {
                    t.current = null != e ? e : t.current;
                }),
                null != e ? e : t.current
            );
        })(ei),
        eG = (0, h.p9)({
            guildId: J.guild_id,
            roleId: eF.iconRoleId,
        }),
        eW = (0, w.iG)(v, el),
        ez = (0, w.Gx)(v),
        eq = (0, u.e7)([f.Z], () => f.Z.getMessage(I), [I]),
        eY = (0, k.Z)({
            message: v,
            channel: J,
        }),
        eK = i.useRef(window),
        eX = null != eq,
        eJ = i.useMemo(() => Object.values(em).some((e) => e), [em]);
    l = v.type === Y.uaV.CUSTOM_GIFT ? "" : !eT && eX ? (0, B.Z)(e, ek) : (0, H.Z)(e, ek, eT);
    let eQ = v.id === el,
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
                    (0, _.Uw)(v) &&
                        (0, r.jsx)(g.Z, {
                            compact: en,
                            message: v,
                            hovering: ex && !eT && !eJ,
                        }),
                    (0, r.jsx)(
                        A.Z,
                        $(Q({}, eu), {
                            "aria-setsize": -1,
                            "aria-roledescription": K.intl.string(K.t.BAB0yK),
                            "aria-labelledby": eW,
                            "aria-describedby": ez,
                            onFocus: eI,
                            onBlur: eZ,
                            onContextMenu: e_,
                            onKeyDown: eB,
                            onClick: ey,
                            compact: en,
                            contentOnly: ea,
                            className: a()(er, {
                                [X.message]: !0,
                                [X.cozyMessage]: !en,
                                [X.mentioned]: v.mentioned,
                                [X.ephemeral]: (0, P.Pv)(v),
                                [X.nitroMessage]: v.type === Y.uaV.NITRO_NOTIFICATION,
                                [X.systemMessage]: (0, Z.Z)(v),
                                [X.groupStart]: !ea && (eQ || v.type === Y.uaV.REPLY),
                                [X.selected]: eA,
                                [X.replying]: (null == eV ? void 0 : eV.message.id) === v.id,
                                [X.interactionSending]: v.isCommandType() && v.state === Y.yb.SENDING,
                                [X.automodMessage]: eX,
                                [X.editing]: eT,
                                [X.hasOpenPopouts]: eJ,
                                [X.potioned]: (0, _.Uw)(v) && ed,
                            }),
                            zalgo: !eT,
                            childrenRepliedMessage:
                                ea || v.type !== Y.uaV.REPLY
                                    ? void 0
                                    : (0, W.Z)(
                                          $(Q({}, e), {
                                              setPopout: eb,
                                              referencedUsernameProfile: em.referencedUsernameProfile,
                                              referencedAvatarProfile: em.referencedAvatarProfile,
                                              replyReference: eo,
                                              replyMessage: eh,
                                              isReplySpineClickable: !0,
                                          }),
                                      ),
                            childrenExecutedCommand: (0, G.Z)(e, eb, em),
                            childrenHeader: ea
                                ? void 0
                                : (0, V.Z)({
                                      messageProps: e,
                                      setPopout: eb,
                                      messagePopouts: em,
                                      replyReference: eo,
                                      author: eF,
                                      repliedMessage: eh,
                                      roleIcon: eG,
                                  }),
                            childrenAccessories: (0, U.Z)({
                                channelMessageProps: e,
                                hasSpoilerEmbeds: eU,
                                handleContextMenu: e_,
                                isInteracting: ew,
                                isAutomodBlockedMessage: eX,
                                forceAddReactions: v.type === Y.uaV.EMOJI_ADDED,
                            }),
                            childrenButtons:
                                eO || ej
                                    ? (0, F.Z)({
                                          buttonProps: e,
                                          setPopout: eb,
                                          messagePopouts: em,
                                          isFocused: ex || eE,
                                          messageWindow: eK.current,
                                      })
                                    : void 0,
                            childrenSystemMessage: (0, z.Z)(e),
                            childrenMessageContent: l,
                            onMouseMove: eC,
                            onMouseLeave: ev,
                            hasThread: !ea && v.hasFlag(Y.iLy.HAS_THREAD) && null != eM,
                            isSystemMessage: (0, Z.Z)(v),
                            hasReply: v.type === Y.uaV.REPLY,
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
    return null != eH
        ? (0, r.jsx)(
              N.Z,
              {
                  flashKey: eH,
                  className: a()({
                      [X.backgroundFlash]: !0,
                      [X.groupStart]: !en && v.id === el,
                  }),
                  children: e$,
              },
              "bg-flash-".concat(o),
          )
        : e$;
});
