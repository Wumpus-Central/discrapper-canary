n.d(t, {
    AP: () => ea,
    Ru: () => ec,
    ZP: () => ed,
});
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    f = n(607070),
    _ = n(223606),
    p = n(518738),
    h = n(628238),
    m = n(911266),
    g = n(111810),
    E = n(235894),
    b = n(807092),
    y = n(869765),
    O = n(703656),
    v = n(695346),
    I = n(592125),
    T = n(906467),
    S = n(323873),
    A = n(709054),
    N = n(786761),
    C = n(534091),
    R = n(901461),
    P = n(739566),
    w = n(233715),
    D = n(492593),
    L = n(453687),
    x = n(348238),
    M = n(62072),
    k = n(38267),
    j = n(25015),
    U = n(689674),
    G = n(438075),
    B = n(764893),
    Z = n(481363),
    F = n(900902),
    V = n(252032),
    H = n(737243),
    Y = n(614584),
    W = n(295790),
    K = n(959517),
    z = n(981631),
    q = n(388032),
    X = n(30804),
    Q = n(482695);
function J(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function et(e) {
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
                J(e, t, n[t]);
            });
    }
    return e;
}
function en(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function er(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : en(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ei(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eo(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eo(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function ea(e, t, n) {
    return e.getElementById((0, C.p)(t, n));
}
function es(e) {
    let t = i.useRef(e);
    return (
        i.useEffect(() => {
            t.current = null != e ? e : t.current;
        }),
        null != e ? e : t.current
    );
}
function el(e) {
    var t, n;
    let o,
        {
            id: s,
            message: O,
            message: { id: C },
            channel: J,
            channel: { id: $ },
            compact: ee = !1,
            className: en,
            flashKey: eo,
            groupId: ea,
            renderContentOnly: el,
        } = e;
    l()(O.type !== z.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let ec = z.OBS.has(O.type) ? O.messageReference : void 0,
        eu = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: ed } = eu,
        ef = ei(eu, ["onFocus"]),
        e_ = (0, g.p7)("ChatMessage"),
        ep = v.RS.useSetting(),
        eh = v.NA.useSetting(),
        em = ep && eh,
        eg = (0, u.e7)([y.Z], () => y.Z.getMessageByReference(ec)),
        { popouts: eE, selected: eb, setPopout: ey } = (0, k.Z)(O.id, K.d$),
        eO = (0, x.qo)(O, J, ey),
        ev = (0, x.Go)(O, J),
        {
            handleMouseEnter: eI,
            handleMouseLeave: eT,
            hasHovered: eS,
            isHovered: eA,
        } = (0, x.tn)({
            groupId: ea,
            message: O,
            defaultValue: eb,
            popouts: eE,
        }),
        { isFocused: eN, hasFocused: eC, handleFocus: eR, handleBlur: eP } = (0, x.bb)(ed),
        ew = i.useCallback(
            (e) => {
                eR(e), eI(e);
            },
            [eR, eI],
        ),
        eD = i.useCallback(
            (e) => {
                eP(e), eT();
            },
            [eP, eT],
        ),
        eL = (0, u.e7)([S.Z], () => S.Z.isEditing($, C), [$, C]),
        ex = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        eM = eb || eL || (ex && eN),
        ek = eM || eA,
        ej = (0, u.e7)(
            [I.Z],
            () => O.hasFlag(z.iLy.HAS_THREAD) && I.Z.getChannel(A.default.castMessageIdAsChannelId(O.id)),
        ),
        eU = O.isFirstMessageInForumPost(J),
        eG = (0, h.A)((null != (n = O.editedTimestamp) ? n : O.timestamp).valueOf()),
        eB = (0, u.e7)([T.Z], () => T.Z.isDeveloper),
        { content: eZ, hasSpoilerEmbeds: eF } = (0, j.Z)(O, {
            hideSimpleEmbedContent: em,
            isInteracting: ek,
            formatInline: !1,
            allowList: eU || eG,
            allowHeading: eU || eG,
            allowLinks: !0,
            allowDevLinks: eB,
            previewLinkTarget: !0,
        }),
        eV = (0, M.Z)(C, $, ex),
        eH = (0, P.ZP)(O),
        eY = (0, u.e7)([b.Z], () => b.Z.getPendingReply($)),
        eW = es(eo),
        eK = (0, p.p9)({
            guildId: J.guild_id,
            roleId: eH.iconRoleId,
        }),
        ez = (0, L.iG)(O, ea),
        eq = (0, L.Gx)(O),
        eX = (0, u.e7)([_.Z], () => _.Z.getMessage(C), [C]),
        eQ = (0, U.Z)({
            message: O,
            channel: J,
        }),
        eJ = i.useRef(window),
        e$ = null != eX,
        e0 = i.useMemo(() => Object.values(eE).some((e) => e), [eE]);
    o = O.type === z.uaV.CUSTOM_GIFT ? "" : !eL && e$ ? (0, B.Z)(e, eZ) : (0, V.Z)(e, eZ, eL);
    let e1 = O.id === ea,
        e2 = (0, r.jsx)(d.tEY, {
            offset: {
                left: 4,
                right: 4,
            },
            children: (0, r.jsxs)("li", {
                id: s,
                className: X.messageListItem,
                "aria-setsize": -1,
                children: [
                    (0, E.Uw)(O) &&
                        (0, r.jsx)(m.Z, {
                            compact: ee,
                            message: O,
                            hovering: eA && !eL && !e0,
                        }),
                    (0, r.jsx)(
                        D.Z,
                        er(et({}, ef), {
                            "aria-setsize": -1,
                            "aria-roledescription": q.intl.string(q.t.BAB0yM),
                            "aria-labelledby": ez,
                            "aria-describedby": eq,
                            onFocus: ew,
                            onBlur: eD,
                            onContextMenu: eO,
                            onKeyDown: eV,
                            onClick: ev,
                            compact: ee,
                            contentOnly: el,
                            className: a()(en, {
                                [X.message]: !0,
                                [X.cozyMessage]: !ee,
                                [X.mentioned]: O.mentioned,
                                [X.ephemeral]: (0, N.Pv)(O),
                                [X.nitroMessage]:
                                    O.type === z.uaV.NITRO_NOTIFICATION ||
                                    O.type === z.uaV.CHAT_WALLPAPER_SET ||
                                    O.type === z.uaV.CHAT_WALLPAPER_REMOVED,
                                [X.systemMessage]: (0, R.Z)(O),
                                [X.groupStart]: !el && (e1 || O.type === z.uaV.REPLY),
                                [X.selected]: eM,
                                [X.replying]: (null == eY ? void 0 : eY.message.id) === O.id,
                                [X.interactionSending]: O.isCommandType() && O.state === z.yb.SENDING,
                                [X.automodMessage]: e$,
                                [X.editing]: eL,
                                [X.hasOpenPopouts]: e0,
                                [X.potioned]: (0, E.Uw)(O) && e_,
                                [Q.forceAnimate]: eA,
                            }),
                            zalgo: !eL,
                            childrenRepliedMessage:
                                el || O.type !== z.uaV.REPLY
                                    ? void 0
                                    : (0, Y.Z)(
                                          er(et({}, e), {
                                              setPopout: ey,
                                              referencedUsernameProfile: eE.referencedUsernameProfile,
                                              referencedAvatarProfile: eE.referencedAvatarProfile,
                                              replyReference: ec,
                                              replyMessage: eg,
                                              isReplySpineClickable: !0,
                                          }),
                                      ),
                            childrenExecutedCommand: (0, H.Z)(e, ey, eE),
                            childrenHeader: el
                                ? void 0
                                : (0, F.Z)({
                                      messageProps: e,
                                      setPopout: ey,
                                      messagePopouts: eE,
                                      replyReference: ec,
                                      author: eH,
                                      repliedMessage: eg,
                                      roleIcon: eK,
                                  }),
                            childrenAccessories: (0, G.Z)({
                                channelMessageProps: e,
                                hasSpoilerEmbeds: eF,
                                handleContextMenu: eO,
                                isInteracting: ek,
                                isAutomodBlockedMessage: e$,
                                forceAddReactions: O.type === z.uaV.EMOJI_ADDED,
                            }),
                            childrenButtons:
                                eS || eC
                                    ? (0, Z.Z)({
                                          buttonProps: e,
                                          setPopout: ey,
                                          messagePopouts: eE,
                                          isFocused: eA || eN,
                                          messageWindow: eJ.current,
                                      })
                                    : void 0,
                            childrenSystemMessage: (0, W.Z)(e),
                            childrenMessageContent: o,
                            onMouseMove: eI,
                            onMouseLeave: eT,
                            hasThread: !el && O.hasFlag(z.iLy.HAS_THREAD) && null != ej,
                            isSystemMessage: (0, R.Z)(O),
                            hasReply: O.type === z.uaV.REPLY,
                            messageRef: (e) => {
                                var t, n;
                                (eQ.current = e),
                                    (eJ.current =
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
    return null != eW
        ? (0, r.jsx)(
              w.Z,
              {
                  flashKey: eW,
                  className: a()({
                      [X.backgroundFlash]: !0,
                      [X.groupStart]: !ee && O.id === ea,
                  }),
                  children: e2,
              },
              "bg-flash-".concat(s),
          )
        : e2;
}
function ec(e) {
    var t;
    let {
        id: n,
        message: i,
        message: { messageReference: o },
        compact: s = !1,
        className: d,
    } = e;
    l()(i.type === z.uaV.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let f = $({}, ee((0, c.JA)(null != (t = e.id) ? t : ""))),
        _ = (0, u.e7)([y.Z], () => y.Z.getMessageByReference(o)),
        { popouts: p, setPopout: h } = (0, k.Z)(i.id, K.d$),
        m = (0, P.ZP)(i),
        g = (0, L.iG)(i),
        E = (0, L.Gx)(i);
    return i.type === z.uaV.THREAD_STARTER_MESSAGE && null != _ && _.state === y.Y.LOADED
        ? (0, r.jsx)(
              eu,
              er(et({}, e), {
                  viewingChannelId: i.channel_id,
                  message: _.message,
                  groupId: _.message.id,
              }),
          )
        : (0, r.jsx)(
              D.Z,
              er(et({}, f), {
                  id: n,
                  compact: s,
                  className: a()(d, {
                      [X.message]: !0,
                      [X.cozyMessage]: !s,
                      [X.systemMessage]: !0,
                      [X.groupStart]: !0,
                  }),
                  childrenHeader: (0, F.Z)({
                      messageProps: e,
                      setPopout: h,
                      messagePopouts: p,
                      replyReference: o,
                      author: m,
                  }),
                  childrenSystemMessage: (0, W.Z)(e),
                  childrenMessageContent: null,
                  "aria-labelledby": g,
                  "aria-describedby": E,
                  hasThread: !1,
                  author: m,
              }),
          );
}
function eu(e) {
    var t, n;
    let {
            id: o,
            message: s,
            message: { id: l, channel_id: _ },
            channel: { guild_id: m },
            compact: g = !1,
            className: E,
            groupId: b,
            viewingChannelId: I,
        } = e,
        T = s.type === z.uaV.REPLY ? s.messageReference : void 0,
        S = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: A } = S,
        C = ei(S, ["onFocus"]),
        { isFocused: w, handleFocus: U, handleBlur: B } = (0, x.bb)(A),
        { popouts: Z, selected: H, setPopout: Q } = (0, k.Z)(s.id, K.d$),
        J = v.RS.useSetting(),
        $ = v.NA.useSetting(),
        ee = J && $,
        en = (0, u.e7)([y.Z], () => y.Z.getMessageByReference(T)),
        eo = (0, h.A)((null != (n = s.editedTimestamp) ? n : s.timestamp).valueOf()),
        {
            handleMouseEnter: ea,
            handleMouseLeave: es,
            isHovered: el,
        } = (0, x.tn)({
            groupId: b,
            message: s,
            defaultValue: H,
            popouts: Z,
        }),
        ec = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        eu = H || (ec && w),
        ed = eu || el,
        { content: ef, hasSpoilerEmbeds: e_ } = (0, j.Z)(s, {
            hideSimpleEmbedContent: ee,
            isInteracting: ed,
            formatInline: !1,
            allowList: eo,
            allowHeading: eo,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: I,
        }),
        ep = (0, M.Z)(l, _, ec),
        eh = (0, P.ZP)(s),
        em = (0, L.iG)(s, b),
        eg = (0, L.Gx)(s),
        eE = (0, V.Z)(e, ef, !1),
        eb = i.useCallback(() => (0, O.XU)(m, _, l), [m, _, l]),
        ey = (0, p.p9)({
            guildId: m,
            roleId: eh.iconRoleId,
        });
    return (0, r.jsxs)("div", {
        className: X.quotedChatMessage,
        children: [
            (0, r.jsx)(d.P3F, {
                className: X.jump,
                onClick: eb,
                "aria-label": q.intl.string(q.t.k5WiPT),
                children: q.intl.string(q.t.k5WiPT),
            }),
            (0, r.jsx)(
                D.Z,
                er(et({}, C), {
                    id: o,
                    compact: g,
                    className: a()(E, {
                        [X.message]: !0,
                        [X.cozyMessage]: !g,
                        [X.mentioned]: s.mentioned,
                        [X.ephemeral]: (0, N.Pv)(s),
                        [X.systemMessage]: (0, R.Z)(s),
                        [X.groupStart]: s.id === b || s.type === z.uaV.REPLY,
                        [X.selected]: eu,
                    }),
                    zalgo: !0,
                    onKeyDown: ep,
                    onFocus: U,
                    onBlur: B,
                    childrenRepliedMessage:
                        s.type === z.uaV.REPLY &&
                        (0, Y.Z)(
                            er(et({}, e), {
                                setPopout: Q,
                                referencedUsernameProfile: Z.referencedUsernameProfile,
                                referencedAvatarProfile: Z.referencedAvatarProfile,
                                replyReference: T,
                                replyMessage: en,
                                isReplySpineClickable: !0,
                            }),
                        ),
                    childrenHeader: (0, F.Z)({
                        messageProps: e,
                        setPopout: Q,
                        messagePopouts: Z,
                        replyReference: T,
                        author: eh,
                        repliedMessage: en,
                        roleIcon: ey,
                    }),
                    childrenAccessories: (0, G.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: e_,
                        isInteracting: ed,
                        renderThreadAccessory: !1,
                        renderSuppressEmbeds: !1,
                        renderReactions: !1,
                        disableComponentInteractivity: !0,
                    }),
                    childrenSystemMessage: (0, W.Z)(e),
                    childrenMessageContent: eE,
                    onMouseMove: ea,
                    onMouseLeave: es,
                    "aria-labelledby": em,
                    "aria-describedby": eg,
                    hasThread: !1,
                    author: eh,
                }),
            ),
        ],
    });
}
let ed = i.memo(el);
