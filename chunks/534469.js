n.d(t, {
    AP: () => J,
    Ru: () => $,
    ZP: () => et,
});
var r = n(54381),
    i = n(473749),
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
    g = n(628238),
    m = n(807092),
    b = n(869765),
    y = n(703656),
    v = n(695346),
    O = n(592125),
    j = n(906467),
    x = n(323873),
    C = n(709054),
    E = n(786761),
    S = n(534091),
    _ = n(901461),
    I = n(739566),
    P = n(233715),
    Z = n(492593),
    N = n(453687),
    T = n(348238),
    A = n(62072),
    w = n(38267),
    R = n(25015),
    D = n(689674),
    M = n(438075),
    k = n(764893),
    L = n(481363),
    U = n(900902),
    G = n(252032),
    B = n(737243),
    F = n(614584),
    H = n(295790),
    V = n(959517),
    z = n(981631),
    W = n(388032),
    K = n(548498);
function Y() {
    return (Y =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function q(e) {
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
function X(e, t) {
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
function Q(e, t) {
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
function J(e, t, n) {
    return e.getElementById((0, S.p)(t, n));
}
function $(e) {
    var t;
    let {
        id: n,
        message: i,
        message: { messageReference: l },
        compact: o = !1,
        className: d,
    } = e;
    s()(i.type === z.uaV.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let p = Y(
            {},
            (function (e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
                return e;
            })((0, c.JA)(null != (t = e.id) ? t : "")),
        ),
        f = (0, u.e7)([b.Z], () => b.Z.getMessageByReference(l)),
        { popouts: h, setPopout: g } = (0, w.Z)(i.id, V.d$),
        m = (0, I.ZP)(i),
        y = (0, N.iG)(i),
        v = (0, N.Gx)(i);
    return i.type === z.uaV.THREAD_STARTER_MESSAGE && null != f && f.state === b.Y.LOADED
        ? (0, r.jsx)(
              ee,
              X(q({}, e), {
                  viewingChannelId: i.channel_id,
                  message: f.message,
                  groupId: f.message.id,
              }),
          )
        : (0, r.jsx)(
              Z.Z,
              X(q({}, p), {
                  id: n,
                  compact: o,
                  className: a()(d, {
                      [K.message]: !0,
                      [K.cozyMessage]: !o,
                      [K.systemMessage]: !0,
                      [K.groupStart]: !0,
                  }),
                  childrenHeader: (0, U.Z)({
                      messageProps: e,
                      setPopout: g,
                      messagePopouts: h,
                      replyReference: l,
                      author: m,
                  }),
                  childrenSystemMessage: (0, H.Z)(e),
                  childrenMessageContent: null,
                  "aria-labelledby": y,
                  "aria-describedby": v,
                  hasThread: !1,
                  author: m,
              }),
          );
}
function ee(e) {
    var t, n;
    let {
            id: l,
            message: o,
            message: { id: s, channel_id: f },
            channel: { guild_id: m },
            compact: O = !1,
            className: x,
            groupId: C,
            viewingChannelId: S,
        } = e,
        P = o.type === z.uaV.REPLY ? o.messageReference : void 0,
        D = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: k } = D,
        L = Q(D, ["onFocus"]),
        { isFocused: B, handleFocus: Y, handleBlur: J } = (0, T.bb)(k),
        { popouts: $, selected: ee, setPopout: et } = (0, w.Z)(o.id, V.d$),
        en = v.RS.useSetting(),
        er = v.NA.useSetting(),
        ei = (0, u.e7)([b.Z], () => b.Z.getMessageByReference(P)),
        el = (0, g.A)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()),
        {
            handleMouseEnter: ea,
            handleMouseLeave: eo,
            isHovered: es,
        } = (0, T.tn)({
            groupId: C,
            message: o,
            defaultValue: ee,
        }),
        ec = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eu = ee || (ec && B),
        ed = eu || es,
        ep = (0, u.e7)([j.Z], () => j.Z.isDeveloper),
        {
            content: ef,
            hasSpoilerEmbeds: eh,
            hasBailedAst: eg,
        } = (0, R.Z)(o, {
            hideSimpleEmbedContent: en && er,
            isInteracting: ed,
            formatInline: !1,
            allowList: el,
            allowHeading: el,
            allowLinks: !0,
            allowDevLinks: ep,
            previewLinkTarget: !0,
            viewingChannelId: S,
        }),
        em = (0, A.Z)(s, f, ec),
        eb = (0, I.ZP)(o),
        ey = (0, N.iG)(o, C),
        ev = (0, N.Gx)(o),
        eO = (0, G.Z)(e, ef, !1),
        ej = i.useCallback(() => (0, y.XU)(m, f, s), [m, f, s]),
        ex = (0, h.p9)({
            guildId: m,
            roleId: eb.iconRoleId,
        });
    return (0, r.jsxs)("div", {
        className: K.quotedChatMessage,
        children: [
            (0, r.jsx)(d.P3F, {
                className: K.jump,
                onClick: ej,
                "aria-label": W.intl.string(W.t.k5WiPf),
                children: W.intl.string(W.t.k5WiPf),
            }),
            (0, r.jsx)(
                Z.Z,
                X(q({}, L), {
                    id: l,
                    compact: O,
                    className: a()(x, {
                        [K.message]: !0,
                        [K.cozyMessage]: !O,
                        [K.mentioned]: o.mentioned,
                        [K.ephemeral]: (0, E.Pv)(o),
                        [K.systemMessage]: (0, _.Z)(o),
                        [K.groupStart]: o.id === C || o.type === z.uaV.REPLY,
                        [K.selected]: eu,
                    }),
                    zalgo: !0,
                    onKeyDown: em,
                    onFocus: Y,
                    onBlur: J,
                    childrenRepliedMessage:
                        o.type === z.uaV.REPLY &&
                        (0, F.Z)(
                            X(q({}, e), {
                                setPopout: et,
                                referencedUsernameProfile: $.referencedUsernameProfile,
                                referencedAvatarProfile: $.referencedAvatarProfile,
                                replyReference: P,
                                replyMessage: ei,
                                isReplySpineClickable: !0,
                            }),
                        ),
                    childrenHeader: (0, U.Z)({
                        messageProps: e,
                        setPopout: et,
                        messagePopouts: $,
                        replyReference: P,
                        author: eb,
                        repliedMessage: ei,
                        roleIcon: ex,
                    }),
                    childrenAccessories: (0, M.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: eh,
                        hasBailedAst: eg,
                        isInteracting: ed,
                        renderThreadAccessory: !1,
                        renderSuppressEmbeds: !1,
                        renderReactions: !1,
                        disableComponentInteractivity: !0,
                    }),
                    childrenSystemMessage: (0, H.Z)(e),
                    childrenMessageContent: eO,
                    onMouseMove: ea,
                    onMouseLeave: eo,
                    "aria-labelledby": ey,
                    "aria-describedby": ev,
                    hasThread: !1,
                    author: eb,
                }),
            ),
        ],
    });
}
let et = i.memo(function (e) {
    var t, n;
    let l,
        {
            id: o,
            message: y,
            message: { id: S },
            channel: Y,
            channel: { id: J },
            compact: $ = !1,
            className: ee,
            flashKey: et,
            groupId: en,
            renderContentOnly: er,
        } = e;
    s()(y.type !== z.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let ei = z.OBS.has(y.type) ? y.messageReference : void 0,
        el = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: ea } = el,
        eo = Q(el, ["onFocus"]),
        es = v.RS.useSetting(),
        ec = v.NA.useSetting(),
        eu = (0, u.e7)([b.Z], () => b.Z.getMessageByReference(ei)),
        { popouts: ed, selected: ep, setPopout: ef } = (0, w.Z)(y.id, V.d$),
        eh = (0, T.qo)(y, Y, ef),
        eg = (0, T.Go)(y, Y),
        {
            handleMouseEnter: em,
            handleMouseLeave: eb,
            hasHovered: ey,
            isHovered: ev,
        } = (0, T.tn)({
            groupId: en,
            message: y,
            defaultValue: ep,
        }),
        { isFocused: eO, hasFocused: ej, handleFocus: ex, handleBlur: eC } = (0, T.bb)(ea),
        eE = i.useCallback(
            (e) => {
                ex(e), em(e);
            },
            [ex, em],
        ),
        eS = i.useCallback(
            (e) => {
                eC(e), eb();
            },
            [eC, eb],
        ),
        e_ = (0, u.e7)([x.Z], () => x.Z.isEditing(J, S), [J, S]),
        eI = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eP = ep || e_ || (eI && eO),
        eZ = eP || ev,
        eN = (0, u.e7)(
            [O.Z],
            () => y.hasFlag(z.iLy.HAS_THREAD) && O.Z.getChannel(C.default.castMessageIdAsChannelId(y.id)),
        ),
        eT = y.isFirstMessageInForumPost(Y),
        eA = (0, g.A)((null != (n = y.editedTimestamp) ? n : y.timestamp).valueOf()),
        ew = (0, u.e7)([j.Z], () => j.Z.isDeveloper),
        {
            content: eR,
            hasSpoilerEmbeds: eD,
            hasBailedAst: eM,
        } = (0, R.Z)(y, {
            hideSimpleEmbedContent: es && ec,
            isInteracting: eZ,
            formatInline: !1,
            allowList: eT || eA,
            allowHeading: eT || eA,
            allowLinks: !0,
            allowDevLinks: ew,
            previewLinkTarget: !0,
        }),
        ek = (0, A.Z)(S, J, eI),
        eL = (0, I.ZP)(y),
        eU = (0, u.e7)([m.Z], () => m.Z.getPendingReply(J)),
        eG = (function (e) {
            let t = i.useRef(e);
            return (
                i.useEffect(() => {
                    t.current = null != e ? e : t.current;
                }),
                null != e ? e : t.current
            );
        })(et),
        eB = (0, h.p9)({
            guildId: Y.guild_id,
            roleId: eL.iconRoleId,
        }),
        eF = (0, N.iG)(y, en),
        eH = (0, N.Gx)(y),
        eV = (0, u.e7)([f.Z], () => f.Z.getMessage(S), [S]),
        ez = (0, D.Z)({
            message: y,
            channel: Y,
        }),
        eW = i.useRef(window),
        eK = null != eV;
    l = y.type === z.uaV.CUSTOM_GIFT ? "" : !e_ && eK ? (0, k.Z)(e, eR) : (0, G.Z)(e, eR, e_);
    let eY = y.id === en,
        eq = (0, r.jsx)(d.tEY, {
            offset: {
                left: 4,
                right: 4,
            },
            children: (0, r.jsx)("li", {
                id: o,
                className: K.messageListItem,
                "aria-setsize": -1,
                children: (0, r.jsx)(
                    Z.Z,
                    X(q({}, eo), {
                        "aria-setsize": -1,
                        "aria-roledescription": W.intl.string(W.t.BAB0yK),
                        "aria-labelledby": eF,
                        "aria-describedby": eH,
                        onFocus: eE,
                        onBlur: eS,
                        onContextMenu: eh,
                        onKeyDown: ek,
                        onClick: eg,
                        compact: $,
                        contentOnly: er,
                        className: a()(ee, {
                            [K.message]: !0,
                            [K.cozyMessage]: !$,
                            [K.mentioned]: y.mentioned,
                            [K.ephemeral]: (0, E.Pv)(y),
                            [K.nitroMessage]: y.type === z.uaV.NITRO_NOTIFICATION,
                            [K.systemMessage]: (0, _.Z)(y),
                            [K.groupStart]: !er && (eY || y.type === z.uaV.REPLY),
                            [K.selected]: eP,
                            [K.replying]: (null == eU ? void 0 : eU.message.id) === y.id,
                            [K.interactionSending]: y.isCommandType() && y.state === z.yb.SENDING,
                            [K.automodMessage]: eK,
                        }),
                        zalgo: !e_,
                        childrenRepliedMessage:
                            er || y.type !== z.uaV.REPLY
                                ? void 0
                                : (0, F.Z)(
                                      X(q({}, e), {
                                          setPopout: ef,
                                          referencedUsernameProfile: ed.referencedUsernameProfile,
                                          referencedAvatarProfile: ed.referencedAvatarProfile,
                                          replyReference: ei,
                                          replyMessage: eu,
                                          isReplySpineClickable: !0,
                                      }),
                                  ),
                        childrenExecutedCommand: (0, B.Z)(e, ef, ed),
                        childrenHeader: er
                            ? void 0
                            : (0, U.Z)({
                                  messageProps: e,
                                  setPopout: ef,
                                  messagePopouts: ed,
                                  replyReference: ei,
                                  author: eL,
                                  repliedMessage: eu,
                                  roleIcon: eB,
                              }),
                        childrenAccessories: (0, M.Z)({
                            channelMessageProps: e,
                            hasSpoilerEmbeds: eD,
                            hasBailedAst: eM,
                            handleContextMenu: eh,
                            isInteracting: eZ,
                            isAutomodBlockedMessage: eK,
                            forceAddReactions: y.type === z.uaV.EMOJI_ADDED,
                        }),
                        childrenButtons:
                            ey || ej
                                ? (0, L.Z)({
                                      buttonProps: e,
                                      setPopout: ef,
                                      messagePopouts: ed,
                                      isFocused: ev || eO,
                                      messageWindow: eW.current,
                                  })
                                : void 0,
                        childrenSystemMessage: (0, H.Z)(e),
                        childrenMessageContent: l,
                        onMouseMove: em,
                        onMouseLeave: eb,
                        hasThread: !er && y.hasFlag(z.iLy.HAS_THREAD) && null != eN,
                        isSystemMessage: (0, _.Z)(y),
                        hasReply: y.type === z.uaV.REPLY,
                        messageRef: (e) => {
                            var t, n;
                            (ez.current = e),
                                (eW.current =
                                    null != (n = null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView)
                                        ? n
                                        : window);
                        },
                        author: eL,
                    }),
                ),
            }),
        });
    return null != eG
        ? (0, r.jsx)(
              P.Z,
              {
                  flashKey: eG,
                  className: a()({
                      [K.backgroundFlash]: !0,
                      [K.groupStart]: !$ && y.id === en,
                  }),
                  children: eq,
              },
              "bg-flash-".concat(o),
          )
        : eq;
});
