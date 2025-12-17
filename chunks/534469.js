n.d(t, {
    AP: () => et,
    Ru: () => en,
    ZP: () => er,
});
var i = n(54381),
    r = n(473749),
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
    C = n(235894),
    y = n(807092),
    v = n(869765),
    x = n(703656),
    O = n(695346),
    E = n(592125),
    j = n(906467),
    S = n(323873),
    _ = n(709054),
    P = n(786761),
    I = n(534091),
    Z = n(901461),
    T = n(739566),
    N = n(233715),
    A = n(492593),
    w = n(453687),
    M = n(348238),
    R = n(62072),
    L = n(38267),
    D = n(25015),
    k = n(689674),
    U = n(438075),
    V = n(764893),
    F = n(481363),
    H = n(900902),
    B = n(252032),
    G = n(737243),
    z = n(614584),
    W = n(295790),
    q = n(959517),
    K = n(981631),
    Y = n(388032),
    X = n(548498);
function J() {
    return (J =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                l = Object.keys(e);
            for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++)
            (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function et(e, t, n) {
    return e.getElementById((0, I.p)(t, n));
}
function en(e) {
    var t;
    let {
        id: n,
        message: r,
        message: { messageReference: l },
        compact: o = !1,
        className: d,
    } = e;
    s()(r.type === K.uaV.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let p = J(
            {},
            (function (e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
                return e;
            })((0, c.JA)(null != (t = e.id) ? t : "")),
        ),
        f = (0, u.e7)([v.Z], () => v.Z.getMessageByReference(l)),
        { popouts: h, setPopout: m } = (0, L.Z)(r.id, q.d$),
        g = (0, T.ZP)(r),
        b = (0, w.iG)(r),
        C = (0, w.Gx)(r);
    return r.type === K.uaV.THREAD_STARTER_MESSAGE && null != f && f.state === v.Y.LOADED
        ? (0, i.jsx)(
              ei,
              $(Q({}, e), {
                  viewingChannelId: r.channel_id,
                  message: f.message,
                  groupId: f.message.id,
              }),
          )
        : (0, i.jsx)(
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
                  childrenHeader: (0, H.Z)({
                      messageProps: e,
                      setPopout: m,
                      messagePopouts: h,
                      replyReference: l,
                      author: g,
                  }),
                  childrenSystemMessage: (0, W.Z)(e),
                  childrenMessageContent: null,
                  "aria-labelledby": b,
                  "aria-describedby": C,
                  hasThread: !1,
                  author: g,
              }),
          );
}
function ei(e) {
    var t, n;
    let {
            id: l,
            message: o,
            message: { id: s, channel_id: f },
            channel: { guild_id: g },
            compact: b = !1,
            className: C,
            groupId: y,
            viewingChannelId: E,
        } = e,
        S = o.type === K.uaV.REPLY ? o.messageReference : void 0,
        _ = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: I } = _,
        N = ee(_, ["onFocus"]),
        { isFocused: k, handleFocus: V, handleBlur: F } = (0, M.bb)(I),
        { popouts: G, selected: J, setPopout: et } = (0, L.Z)(o.id, q.d$),
        en = O.RS.useSetting(),
        ei = O.NA.useSetting(),
        er = (0, u.e7)([v.Z], () => v.Z.getMessageByReference(S)),
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
        ep = (0, u.e7)([j.Z], () => j.Z.isDeveloper),
        {
            content: ef,
            hasSpoilerEmbeds: eh,
            hasBailedAst: em,
        } = (0, D.Z)(o, {
            hideSimpleEmbedContent: en && ei,
            isInteracting: ed,
            formatInline: !1,
            allowList: el,
            allowHeading: el,
            allowLinks: !0,
            allowDevLinks: ep,
            previewLinkTarget: !0,
            viewingChannelId: E,
        }),
        eg = (0, R.Z)(s, f, ec),
        eb = (0, T.ZP)(o),
        eC = (0, w.iG)(o, y),
        ey = (0, w.Gx)(o),
        ev = (0, B.Z)(e, ef, !1),
        ex = r.useCallback(() => (0, x.XU)(g, f, s), [g, f, s]),
        eO = (0, h.p9)({
            guildId: g,
            roleId: eb.iconRoleId,
        });
    return (0, i.jsxs)("div", {
        className: X.quotedChatMessage,
        children: [
            (0, i.jsx)(d.P3F, {
                className: X.jump,
                onClick: ex,
                "aria-label": Y.intl.string(Y.t.k5WiPf),
                children: Y.intl.string(Y.t.k5WiPf),
            }),
            (0, i.jsx)(
                A.Z,
                $(Q({}, N), {
                    id: l,
                    compact: b,
                    className: a()(C, {
                        [X.message]: !0,
                        [X.cozyMessage]: !b,
                        [X.mentioned]: o.mentioned,
                        [X.ephemeral]: (0, P.Pv)(o),
                        [X.systemMessage]: (0, Z.Z)(o),
                        [X.groupStart]: o.id === y || o.type === K.uaV.REPLY,
                        [X.selected]: eu,
                    }),
                    zalgo: !0,
                    onKeyDown: eg,
                    onFocus: V,
                    onBlur: F,
                    childrenRepliedMessage:
                        o.type === K.uaV.REPLY &&
                        (0, z.Z)(
                            $(Q({}, e), {
                                setPopout: et,
                                referencedUsernameProfile: G.referencedUsernameProfile,
                                referencedAvatarProfile: G.referencedAvatarProfile,
                                replyReference: S,
                                replyMessage: er,
                                isReplySpineClickable: !0,
                            }),
                        ),
                    childrenHeader: (0, H.Z)({
                        messageProps: e,
                        setPopout: et,
                        messagePopouts: G,
                        replyReference: S,
                        author: eb,
                        repliedMessage: er,
                        roleIcon: eO,
                    }),
                    childrenAccessories: (0, U.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: eh,
                        hasBailedAst: em,
                        isInteracting: ed,
                        renderThreadAccessory: !1,
                        renderSuppressEmbeds: !1,
                        renderReactions: !1,
                        disableComponentInteractivity: !0,
                    }),
                    childrenSystemMessage: (0, W.Z)(e),
                    childrenMessageContent: ev,
                    onMouseMove: ea,
                    onMouseLeave: eo,
                    "aria-labelledby": eC,
                    "aria-describedby": ey,
                    hasThread: !1,
                    author: eb,
                }),
            ),
        ],
    });
}
let er = r.memo(function (e) {
    var t, n;
    let l,
        {
            id: o,
            message: x,
            message: { id: I },
            channel: J,
            channel: { id: et },
            compact: en = !1,
            className: ei,
            flashKey: er,
            groupId: el,
            renderContentOnly: ea,
        } = e;
    s()(x.type !== K.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let eo = K.OBS.has(x.type) ? x.messageReference : void 0,
        es = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: ec } = es,
        eu = ee(es, ["onFocus"]),
        ed = (0, b.p7)("ChatMessage"),
        ep = O.RS.useSetting(),
        ef = O.NA.useSetting(),
        eh = (0, u.e7)([v.Z], () => v.Z.getMessageByReference(eo)),
        { popouts: em, selected: eg, setPopout: eb } = (0, L.Z)(x.id, q.d$),
        eC = (0, M.qo)(x, J, eb),
        ey = (0, M.Go)(x, J),
        {
            handleMouseEnter: ev,
            handleMouseLeave: ex,
            hasHovered: eO,
            isHovered: eE,
        } = (0, M.tn)({
            groupId: el,
            message: x,
            defaultValue: eg,
            popouts: em,
        }),
        { isFocused: ej, hasFocused: eS, handleFocus: e_, handleBlur: eP } = (0, M.bb)(ec),
        eI = r.useCallback(
            (e) => {
                e_(e), ev(e);
            },
            [e_, ev],
        ),
        eZ = r.useCallback(
            (e) => {
                eP(e), ex();
            },
            [eP, ex],
        ),
        eT = (0, u.e7)([S.Z], () => S.Z.isEditing(et, I), [et, I]),
        eN = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eA = eg || eT || (eN && ej),
        ew = eA || eE,
        eM = (0, u.e7)(
            [E.Z],
            () => x.hasFlag(K.iLy.HAS_THREAD) && E.Z.getChannel(_.default.castMessageIdAsChannelId(x.id)),
        ),
        eR = x.isFirstMessageInForumPost(J),
        eL = (0, m.A)((null != (n = x.editedTimestamp) ? n : x.timestamp).valueOf()),
        eD = (0, u.e7)([j.Z], () => j.Z.isDeveloper),
        {
            content: ek,
            hasSpoilerEmbeds: eU,
            hasBailedAst: eV,
        } = (0, D.Z)(x, {
            hideSimpleEmbedContent: ep && ef,
            isInteracting: ew,
            formatInline: !1,
            allowList: eR || eL,
            allowHeading: eR || eL,
            allowLinks: !0,
            allowDevLinks: eD,
            previewLinkTarget: !0,
        }),
        eF = (0, R.Z)(I, et, eN),
        eH = (0, T.ZP)(x),
        eB = (0, u.e7)([y.Z], () => y.Z.getPendingReply(et)),
        eG = (function (e) {
            let t = r.useRef(e);
            return (
                r.useEffect(() => {
                    t.current = null != e ? e : t.current;
                }),
                null != e ? e : t.current
            );
        })(er),
        ez = (0, h.p9)({
            guildId: J.guild_id,
            roleId: eH.iconRoleId,
        }),
        eW = (0, w.iG)(x, el),
        eq = (0, w.Gx)(x),
        eK = (0, u.e7)([f.Z], () => f.Z.getMessage(I), [I]),
        eY = (0, k.Z)({
            message: x,
            channel: J,
        }),
        eX = r.useRef(window),
        eJ = null != eK,
        eQ = r.useMemo(() => Object.values(em).some((e) => e), [em]);
    l = x.type === K.uaV.CUSTOM_GIFT ? "" : !eT && eJ ? (0, V.Z)(e, ek) : (0, B.Z)(e, ek, eT);
    let e$ = x.id === el,
        e0 = (0, i.jsx)(d.tEY, {
            offset: {
                left: 4,
                right: 4,
            },
            children: (0, i.jsxs)("li", {
                id: o,
                className: X.messageListItem,
                "aria-setsize": -1,
                children: [
                    (0, C.Uw)(x) &&
                        (0, i.jsx)(g.Z, {
                            compact: en,
                            message: x,
                            hovering: eE && !eT && !eQ,
                        }),
                    (0, i.jsx)(
                        A.Z,
                        $(Q({}, eu), {
                            "aria-setsize": -1,
                            "aria-roledescription": Y.intl.string(Y.t.BAB0yK),
                            "aria-labelledby": eW,
                            "aria-describedby": eq,
                            onFocus: eI,
                            onBlur: eZ,
                            onContextMenu: eC,
                            onKeyDown: eF,
                            onClick: ey,
                            compact: en,
                            contentOnly: ea,
                            className: a()(ei, {
                                [X.message]: !0,
                                [X.cozyMessage]: !en,
                                [X.mentioned]: x.mentioned,
                                [X.ephemeral]: (0, P.Pv)(x),
                                [X.nitroMessage]: x.type === K.uaV.NITRO_NOTIFICATION,
                                [X.systemMessage]: (0, Z.Z)(x),
                                [X.groupStart]: !ea && (e$ || x.type === K.uaV.REPLY),
                                [X.selected]: eA,
                                [X.replying]: (null == eB ? void 0 : eB.message.id) === x.id,
                                [X.interactionSending]: x.isCommandType() && x.state === K.yb.SENDING,
                                [X.automodMessage]: eJ,
                                [X.editing]: eT,
                                [X.hasOpenPopouts]: eQ,
                                [X.potioned]: (0, C.Uw)(x) && ed,
                            }),
                            zalgo: !eT,
                            childrenRepliedMessage:
                                ea || x.type !== K.uaV.REPLY
                                    ? void 0
                                    : (0, z.Z)(
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
                                : (0, H.Z)({
                                      messageProps: e,
                                      setPopout: eb,
                                      messagePopouts: em,
                                      replyReference: eo,
                                      author: eH,
                                      repliedMessage: eh,
                                      roleIcon: ez,
                                  }),
                            childrenAccessories: (0, U.Z)({
                                channelMessageProps: e,
                                hasSpoilerEmbeds: eU,
                                hasBailedAst: eV,
                                handleContextMenu: eC,
                                isInteracting: ew,
                                isAutomodBlockedMessage: eJ,
                                forceAddReactions: x.type === K.uaV.EMOJI_ADDED,
                            }),
                            childrenButtons:
                                eO || eS
                                    ? (0, F.Z)({
                                          buttonProps: e,
                                          setPopout: eb,
                                          messagePopouts: em,
                                          isFocused: eE || ej,
                                          messageWindow: eX.current,
                                      })
                                    : void 0,
                            childrenSystemMessage: (0, W.Z)(e),
                            childrenMessageContent: l,
                            onMouseMove: ev,
                            onMouseLeave: ex,
                            hasThread: !ea && x.hasFlag(K.iLy.HAS_THREAD) && null != eM,
                            isSystemMessage: (0, Z.Z)(x),
                            hasReply: x.type === K.uaV.REPLY,
                            messageRef: (e) => {
                                var t, n;
                                (eY.current = e),
                                    (eX.current =
                                        null !=
                                        (n = null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView)
                                            ? n
                                            : window);
                            },
                            author: eH,
                        }),
                    ),
                ],
            }),
        });
    return null != eG
        ? (0, i.jsx)(
              N.Z,
              {
                  flashKey: eG,
                  className: a()({
                      [X.backgroundFlash]: !0,
                      [X.groupStart]: !en && x.id === el,
                  }),
                  children: e0,
              },
              "bg-flash-".concat(o),
          )
        : e0;
});
