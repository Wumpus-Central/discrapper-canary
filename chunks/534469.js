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
    h = n(223606),
    f = n(518738),
    m = n(628238),
    g = n(911266),
    b = n(111810),
    C = n(235894),
    y = n(807092),
    _ = n(869765),
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
    L = n(38267),
    D = n(25015),
    k = n(689674),
    U = n(438075),
    V = n(764893),
    B = n(481363),
    F = n(900902),
    H = n(252032),
    G = n(737243),
    W = n(614584),
    z = n(295790),
    q = n(959517),
    K = n(981631),
    Y = n(388032),
    X = n(360514);
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
        h = (0, u.e7)([_.Z], () => _.Z.getMessageByReference(l)),
        { popouts: f, setPopout: m } = (0, L.Z)(r.id, q.d$),
        g = (0, T.ZP)(r),
        b = (0, w.iG)(r),
        C = (0, w.Gx)(r);
    return r.type === K.uaV.THREAD_STARTER_MESSAGE && null != h && h.state === _.Y.LOADED
        ? (0, i.jsx)(
              ei,
              $(Q({}, e), {
                  viewingChannelId: r.channel_id,
                  message: h.message,
                  groupId: h.message.id,
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
                  childrenHeader: (0, F.Z)({
                      messageProps: e,
                      setPopout: m,
                      messagePopouts: f,
                      replyReference: l,
                      author: g,
                  }),
                  childrenSystemMessage: (0, z.Z)(e),
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
            message: { id: s, channel_id: h },
            channel: { guild_id: g },
            compact: b = !1,
            className: C,
            groupId: y,
            viewingChannelId: x,
        } = e,
        j = o.type === K.uaV.REPLY ? o.messageReference : void 0,
        S = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: I } = S,
        N = ee(S, ["onFocus"]),
        { isFocused: k, handleFocus: V, handleBlur: B } = (0, M.bb)(I),
        { popouts: G, selected: J, setPopout: et } = (0, L.Z)(o.id, q.d$),
        en = O.RS.useSetting(),
        ei = O.NA.useSetting(),
        er = (0, u.e7)([_.Z], () => _.Z.getMessageByReference(j)),
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
        {
            content: eh,
            hasSpoilerEmbeds: ef,
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
            viewingChannelId: x,
        }),
        eg = (0, R.Z)(s, h, ec),
        eb = (0, T.ZP)(o),
        eC = (0, w.iG)(o, y),
        ey = (0, w.Gx)(o),
        e_ = (0, H.Z)(e, eh, !1),
        ev = r.useCallback(() => (0, v.XU)(g, h, s), [g, h, s]),
        eO = (0, f.p9)({
            guildId: g,
            roleId: eb.iconRoleId,
        });
    return (0, i.jsxs)("div", {
        className: X.quotedChatMessage,
        children: [
            (0, i.jsx)(d.P3F, {
                className: X.jump,
                onClick: ev,
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
                    onBlur: B,
                    childrenRepliedMessage:
                        o.type === K.uaV.REPLY &&
                        (0, W.Z)(
                            $(Q({}, e), {
                                setPopout: et,
                                referencedUsernameProfile: G.referencedUsernameProfile,
                                referencedAvatarProfile: G.referencedAvatarProfile,
                                replyReference: j,
                                replyMessage: er,
                                isReplySpineClickable: !0,
                            }),
                        ),
                    childrenHeader: (0, F.Z)({
                        messageProps: e,
                        setPopout: et,
                        messagePopouts: G,
                        replyReference: j,
                        author: eb,
                        repliedMessage: er,
                        roleIcon: eO,
                    }),
                    childrenAccessories: (0, U.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: ef,
                        hasBailedAst: em,
                        isInteracting: ed,
                        renderThreadAccessory: !1,
                        renderSuppressEmbeds: !1,
                        renderReactions: !1,
                        disableComponentInteractivity: !0,
                    }),
                    childrenSystemMessage: (0, z.Z)(e),
                    childrenMessageContent: e_,
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
            message: v,
            message: { id: I },
            channel: J,
            channel: { id: et },
            compact: en = !1,
            className: ei,
            flashKey: er,
            groupId: el,
            renderContentOnly: ea,
        } = e;
    s()(v.type !== K.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let eo = K.OBS.has(v.type) ? v.messageReference : void 0,
        es = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: ec } = es,
        eu = ee(es, ["onFocus"]),
        ed = (0, b.p7)("ChatMessage"),
        ep = O.RS.useSetting(),
        eh = O.NA.useSetting(),
        ef = (0, u.e7)([_.Z], () => _.Z.getMessageByReference(eo)),
        { popouts: em, selected: eg, setPopout: eb } = (0, L.Z)(v.id, q.d$),
        eC = (0, M.qo)(v, J, eb),
        ey = (0, M.Go)(v, J),
        {
            handleMouseEnter: e_,
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
        eI = r.useCallback(
            (e) => {
                eS(e), e_(e);
            },
            [eS, e_],
        ),
        eZ = r.useCallback(
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
            () => v.hasFlag(K.iLy.HAS_THREAD) && x.Z.getChannel(S.default.castMessageIdAsChannelId(v.id)),
        ),
        eR = v.isFirstMessageInForumPost(J),
        eL = (0, m.A)((null != (n = v.editedTimestamp) ? n : v.timestamp).valueOf()),
        eD = (0, u.e7)([E.Z], () => E.Z.isDeveloper),
        {
            content: ek,
            hasSpoilerEmbeds: eU,
            hasBailedAst: eV,
        } = (0, D.Z)(v, {
            hideSimpleEmbedContent: ep && eh,
            isInteracting: ew,
            formatInline: !1,
            allowList: eR || eL,
            allowHeading: eR || eL,
            allowLinks: !0,
            allowDevLinks: eD,
            previewLinkTarget: !0,
        }),
        eB = (0, R.Z)(I, et, eN),
        eF = (0, T.ZP)(v),
        eH = (0, u.e7)([y.Z], () => y.Z.getPendingReply(et)),
        eG = (function (e) {
            let t = r.useRef(e);
            return (
                r.useEffect(() => {
                    t.current = null != e ? e : t.current;
                }),
                null != e ? e : t.current
            );
        })(er),
        eW = (0, f.p9)({
            guildId: J.guild_id,
            roleId: eF.iconRoleId,
        }),
        ez = (0, w.iG)(v, el),
        eq = (0, w.Gx)(v),
        eK = (0, u.e7)([h.Z], () => h.Z.getMessage(I), [I]),
        eY = (0, k.Z)({
            message: v,
            channel: J,
        }),
        eX = r.useRef(window),
        eJ = null != eK,
        eQ = r.useMemo(() => Object.values(em).some((e) => e), [em]);
    l = v.type === K.uaV.CUSTOM_GIFT ? "" : !eT && eJ ? (0, V.Z)(e, ek) : (0, H.Z)(e, ek, eT);
    let e$ = v.id === el,
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
                    (0, C.Uw)(v) &&
                        (0, i.jsx)(g.Z, {
                            compact: en,
                            message: v,
                            hovering: ex && !eT && !eQ,
                        }),
                    (0, i.jsx)(
                        A.Z,
                        $(Q({}, eu), {
                            "aria-setsize": -1,
                            "aria-roledescription": Y.intl.string(Y.t.BAB0yK),
                            "aria-labelledby": ez,
                            "aria-describedby": eq,
                            onFocus: eI,
                            onBlur: eZ,
                            onContextMenu: eC,
                            onKeyDown: eB,
                            onClick: ey,
                            compact: en,
                            contentOnly: ea,
                            className: a()(ei, {
                                [X.message]: !0,
                                [X.cozyMessage]: !en,
                                [X.mentioned]: v.mentioned,
                                [X.ephemeral]: (0, P.Pv)(v),
                                [X.nitroMessage]: v.type === K.uaV.NITRO_NOTIFICATION,
                                [X.systemMessage]: (0, Z.Z)(v),
                                [X.groupStart]: !ea && (e$ || v.type === K.uaV.REPLY),
                                [X.selected]: eA,
                                [X.replying]: (null == eH ? void 0 : eH.message.id) === v.id,
                                [X.interactionSending]: v.isCommandType() && v.state === K.yb.SENDING,
                                [X.automodMessage]: eJ,
                                [X.editing]: eT,
                                [X.hasOpenPopouts]: eQ,
                                [X.potioned]: (0, C.Uw)(v) && ed,
                            }),
                            zalgo: !eT,
                            childrenRepliedMessage:
                                ea || v.type !== K.uaV.REPLY
                                    ? void 0
                                    : (0, W.Z)(
                                          $(Q({}, e), {
                                              setPopout: eb,
                                              referencedUsernameProfile: em.referencedUsernameProfile,
                                              referencedAvatarProfile: em.referencedAvatarProfile,
                                              replyReference: eo,
                                              replyMessage: ef,
                                              isReplySpineClickable: !0,
                                          }),
                                      ),
                            childrenExecutedCommand: (0, G.Z)(e, eb, em),
                            childrenHeader: ea
                                ? void 0
                                : (0, F.Z)({
                                      messageProps: e,
                                      setPopout: eb,
                                      messagePopouts: em,
                                      replyReference: eo,
                                      author: eF,
                                      repliedMessage: ef,
                                      roleIcon: eW,
                                  }),
                            childrenAccessories: (0, U.Z)({
                                channelMessageProps: e,
                                hasSpoilerEmbeds: eU,
                                hasBailedAst: eV,
                                handleContextMenu: eC,
                                isInteracting: ew,
                                isAutomodBlockedMessage: eJ,
                                forceAddReactions: v.type === K.uaV.EMOJI_ADDED,
                            }),
                            childrenButtons:
                                eO || ej
                                    ? (0, B.Z)({
                                          buttonProps: e,
                                          setPopout: eb,
                                          messagePopouts: em,
                                          isFocused: ex || eE,
                                          messageWindow: eX.current,
                                      })
                                    : void 0,
                            childrenSystemMessage: (0, z.Z)(e),
                            childrenMessageContent: l,
                            onMouseMove: e_,
                            onMouseLeave: ev,
                            hasThread: !ea && v.hasFlag(K.iLy.HAS_THREAD) && null != eM,
                            isSystemMessage: (0, Z.Z)(v),
                            hasReply: v.type === K.uaV.REPLY,
                            messageRef: (e) => {
                                var t, n;
                                (eY.current = e),
                                    (eX.current =
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
        ? (0, i.jsx)(
              N.Z,
              {
                  flashKey: eG,
                  className: a()({
                      [X.backgroundFlash]: !0,
                      [X.groupStart]: !en && v.id === el,
                  }),
                  children: e0,
              },
              "bg-flash-".concat(o),
          )
        : e0;
});
