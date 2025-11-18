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
    y = n(235894),
    C = n(807092),
    v = n(869765),
    _ = n(703656),
    x = n(695346),
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
    M = n(348238),
    R = n(62072),
    L = n(38267),
    k = n(25015),
    D = n(689674),
    U = n(438075),
    B = n(764893),
    H = n(481363),
    V = n(900902),
    F = n(252032),
    G = n(737243),
    z = n(614584),
    W = n(295790),
    q = n(959517),
    K = n(981631),
    Y = n(388032),
    X = n(5898);
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
        h = (0, u.e7)([v.Z], () => v.Z.getMessageByReference(l)),
        { popouts: f, setPopout: m } = (0, L.Z)(r.id, q.d$),
        g = (0, T.ZP)(r),
        b = (0, w.iG)(r),
        y = (0, w.Gx)(r);
    return r.type === K.uaV.THREAD_STARTER_MESSAGE && null != h && h.state === v.Y.LOADED
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
                  childrenHeader: (0, V.Z)({
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
function ei(e) {
    var t, n;
    let {
            id: l,
            message: o,
            message: { id: s, channel_id: h },
            channel: { guild_id: g },
            compact: b = !1,
            className: y,
            groupId: C,
            viewingChannelId: j,
        } = e,
        E = o.type === K.uaV.REPLY ? o.messageReference : void 0,
        S = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: I } = S,
        N = ee(S, ["onFocus"]),
        { isFocused: D, handleFocus: B, handleBlur: H } = (0, M.bb)(I),
        { popouts: G, selected: J, setPopout: et } = (0, L.Z)(o.id, q.d$),
        en = x.RS.useSetting(),
        ei = x.NA.useSetting(),
        er = (0, u.e7)([v.Z], () => v.Z.getMessageByReference(E)),
        el = (0, m.A)((null != (n = o.editedTimestamp) ? n : o.timestamp).valueOf()),
        {
            handleMouseEnter: ea,
            handleMouseLeave: eo,
            isHovered: es,
        } = (0, M.tn)({
            groupId: C,
            message: o,
            defaultValue: J,
            popouts: G,
        }),
        ec = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eu = J || (ec && D),
        ed = eu || es,
        ep = (0, u.e7)([O.Z], () => O.Z.isDeveloper),
        { content: eh, hasSpoilerEmbeds: ef } = (0, k.Z)(o, {
            hideSimpleEmbedContent: en && ei,
            isInteracting: ed,
            formatInline: !1,
            allowList: el,
            allowHeading: el,
            allowLinks: !0,
            allowDevLinks: ep,
            previewLinkTarget: !0,
            viewingChannelId: j,
        }),
        em = (0, R.Z)(s, h, ec),
        eg = (0, T.ZP)(o),
        eb = (0, w.iG)(o, C),
        ey = (0, w.Gx)(o),
        eC = (0, F.Z)(e, eh, !1),
        ev = r.useCallback(() => (0, _.XU)(g, h, s), [g, h, s]),
        e_ = (0, f.p9)({
            guildId: g,
            roleId: eg.iconRoleId,
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
                    className: a()(y, {
                        [X.message]: !0,
                        [X.cozyMessage]: !b,
                        [X.mentioned]: o.mentioned,
                        [X.ephemeral]: (0, P.Pv)(o),
                        [X.systemMessage]: (0, Z.Z)(o),
                        [X.groupStart]: o.id === C || o.type === K.uaV.REPLY,
                        [X.selected]: eu,
                    }),
                    zalgo: !0,
                    onKeyDown: em,
                    onFocus: B,
                    onBlur: H,
                    childrenRepliedMessage:
                        o.type === K.uaV.REPLY &&
                        (0, z.Z)(
                            $(Q({}, e), {
                                setPopout: et,
                                referencedUsernameProfile: G.referencedUsernameProfile,
                                referencedAvatarProfile: G.referencedAvatarProfile,
                                replyReference: E,
                                replyMessage: er,
                                isReplySpineClickable: !0,
                            }),
                        ),
                    childrenHeader: (0, V.Z)({
                        messageProps: e,
                        setPopout: et,
                        messagePopouts: G,
                        replyReference: E,
                        author: eg,
                        repliedMessage: er,
                        roleIcon: e_,
                    }),
                    childrenAccessories: (0, U.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: ef,
                        isInteracting: ed,
                        renderThreadAccessory: !1,
                        renderSuppressEmbeds: !1,
                        renderReactions: !1,
                        disableComponentInteractivity: !0,
                    }),
                    childrenSystemMessage: (0, W.Z)(e),
                    childrenMessageContent: eC,
                    onMouseMove: ea,
                    onMouseLeave: eo,
                    "aria-labelledby": eb,
                    "aria-describedby": ey,
                    hasThread: !1,
                    author: eg,
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
            message: _,
            message: { id: I },
            channel: J,
            channel: { id: et },
            compact: en = !1,
            className: ei,
            flashKey: er,
            groupId: el,
            renderContentOnly: ea,
        } = e;
    s()(_.type !== K.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let eo = K.OBS.has(_.type) ? _.messageReference : void 0,
        es = (0, c.JA)(null != (t = e.id) ? t : ""),
        { onFocus: ec } = es,
        eu = ee(es, ["onFocus"]),
        ed = (0, b.p7)("ChatMessage"),
        ep = x.RS.useSetting(),
        eh = x.NA.useSetting(),
        ef = (0, u.e7)([v.Z], () => v.Z.getMessageByReference(eo)),
        { popouts: em, selected: eg, setPopout: eb } = (0, L.Z)(_.id, q.d$),
        ey = (0, M.qo)(_, J, eb),
        eC = (0, M.Go)(_, J),
        {
            handleMouseEnter: ev,
            handleMouseLeave: e_,
            hasHovered: ex,
            isHovered: ej,
        } = (0, M.tn)({
            groupId: el,
            message: _,
            defaultValue: eg,
            popouts: em,
        }),
        { isFocused: eO, hasFocused: eE, handleFocus: eS, handleBlur: eP } = (0, M.bb)(ec),
        eI = r.useCallback(
            (e) => {
                eS(e), ev(e);
            },
            [eS, ev],
        ),
        eZ = r.useCallback(
            (e) => {
                eP(e), e_();
            },
            [eP, e_],
        ),
        eT = (0, u.e7)([E.Z], () => E.Z.isEditing(et, I), [et, I]),
        eN = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eA = eg || eT || (eN && eO),
        ew = eA || ej,
        eM = (0, u.e7)(
            [j.Z],
            () => _.hasFlag(K.iLy.HAS_THREAD) && j.Z.getChannel(S.default.castMessageIdAsChannelId(_.id)),
        ),
        eR = _.isFirstMessageInForumPost(J),
        eL = (0, m.A)((null != (n = _.editedTimestamp) ? n : _.timestamp).valueOf()),
        ek = (0, u.e7)([O.Z], () => O.Z.isDeveloper),
        { content: eD, hasSpoilerEmbeds: eU } = (0, k.Z)(_, {
            hideSimpleEmbedContent: ep && eh,
            isInteracting: ew,
            formatInline: !1,
            allowList: eR || eL,
            allowHeading: eR || eL,
            allowLinks: !0,
            allowDevLinks: ek,
            previewLinkTarget: !0,
        }),
        eB = (0, R.Z)(I, et, eN),
        eH = (0, T.ZP)(_),
        eV = (0, u.e7)([C.Z], () => C.Z.getPendingReply(et)),
        eF = (function (e) {
            let t = r.useRef(e);
            return (
                r.useEffect(() => {
                    t.current = null != e ? e : t.current;
                }),
                null != e ? e : t.current
            );
        })(er),
        eG = (0, f.p9)({
            guildId: J.guild_id,
            roleId: eH.iconRoleId,
        }),
        ez = (0, w.iG)(_, el),
        eW = (0, w.Gx)(_),
        eq = (0, u.e7)([h.Z], () => h.Z.getMessage(I), [I]),
        eK = (0, D.Z)({
            message: _,
            channel: J,
        }),
        eY = r.useRef(window),
        eX = null != eq,
        eJ = r.useMemo(() => Object.values(em).some((e) => e), [em]);
    l = _.type === K.uaV.CUSTOM_GIFT ? "" : !eT && eX ? (0, B.Z)(e, eD) : (0, F.Z)(e, eD, eT);
    let eQ = _.id === el,
        e$ = (0, i.jsx)(d.tEY, {
            offset: {
                left: 4,
                right: 4,
            },
            children: (0, i.jsxs)("li", {
                id: o,
                className: X.messageListItem,
                "aria-setsize": -1,
                children: [
                    (0, y.Uw)(_) &&
                        (0, i.jsx)(g.Z, {
                            compact: en,
                            message: _,
                            hovering: ej && !eT && !eJ,
                        }),
                    (0, i.jsx)(
                        A.Z,
                        $(Q({}, eu), {
                            "aria-setsize": -1,
                            "aria-roledescription": Y.intl.string(Y.t.BAB0yK),
                            "aria-labelledby": ez,
                            "aria-describedby": eW,
                            onFocus: eI,
                            onBlur: eZ,
                            onContextMenu: ey,
                            onKeyDown: eB,
                            onClick: eC,
                            compact: en,
                            contentOnly: ea,
                            className: a()(ei, {
                                [X.message]: !0,
                                [X.cozyMessage]: !en,
                                [X.mentioned]: _.mentioned,
                                [X.ephemeral]: (0, P.Pv)(_),
                                [X.nitroMessage]: _.type === K.uaV.NITRO_NOTIFICATION,
                                [X.systemMessage]: (0, Z.Z)(_),
                                [X.groupStart]: !ea && (eQ || _.type === K.uaV.REPLY),
                                [X.selected]: eA,
                                [X.replying]: (null == eV ? void 0 : eV.message.id) === _.id,
                                [X.interactionSending]: _.isCommandType() && _.state === K.yb.SENDING,
                                [X.automodMessage]: eX,
                                [X.editing]: eT,
                                [X.hasOpenPopouts]: eJ,
                                [X.potioned]: (0, y.Uw)(_) && ed,
                            }),
                            zalgo: !eT,
                            childrenRepliedMessage:
                                ea || _.type !== K.uaV.REPLY
                                    ? void 0
                                    : (0, z.Z)(
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
                                : (0, V.Z)({
                                      messageProps: e,
                                      setPopout: eb,
                                      messagePopouts: em,
                                      replyReference: eo,
                                      author: eH,
                                      repliedMessage: ef,
                                      roleIcon: eG,
                                  }),
                            childrenAccessories: (0, U.Z)({
                                channelMessageProps: e,
                                hasSpoilerEmbeds: eU,
                                handleContextMenu: ey,
                                isInteracting: ew,
                                isAutomodBlockedMessage: eX,
                                forceAddReactions: _.type === K.uaV.EMOJI_ADDED,
                            }),
                            childrenButtons:
                                ex || eE
                                    ? (0, H.Z)({
                                          buttonProps: e,
                                          setPopout: eb,
                                          messagePopouts: em,
                                          isFocused: ej || eO,
                                          messageWindow: eY.current,
                                      })
                                    : void 0,
                            childrenSystemMessage: (0, W.Z)(e),
                            childrenMessageContent: l,
                            onMouseMove: ev,
                            onMouseLeave: e_,
                            hasThread: !ea && _.hasFlag(K.iLy.HAS_THREAD) && null != eM,
                            isSystemMessage: (0, Z.Z)(_),
                            hasReply: _.type === K.uaV.REPLY,
                            messageRef: (e) => {
                                var t, n;
                                (eK.current = e),
                                    (eY.current =
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
    return null != eF
        ? (0, i.jsx)(
              N.Z,
              {
                  flashKey: eF,
                  className: a()({
                      [X.backgroundFlash]: !0,
                      [X.groupStart]: !en && _.id === el,
                  }),
                  children: e$,
              },
              "bg-flash-".concat(o),
          )
        : e$;
});
