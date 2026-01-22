n.d(t, {
    Av: () => Z,
    Ay: () => et,
    VO: () => $,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(837381),
    u = n(311907),
    d = n(397927),
    f = n(775602),
    p = n(93474),
    h = n(201275),
    b = n(384231),
    g = n(853145),
    m = n(9842),
    A = n(976860),
    y = n(253932),
    O = n(734057),
    j = n(540999),
    v = n(580745),
    x = n(661191),
    E = n(141468),
    _ = n(375901),
    C = n(143413),
    S = n(763754),
    I = n(245748),
    N = n(491182),
    T = n(860227),
    P = n(112758),
    w = n(866897),
    R = n(754459),
    D = n(538355),
    M = n(522871),
    L = n(699352),
    G = n(426153),
    k = n(444529),
    U = n(241874),
    V = n(91624),
    F = n(653008),
    H = n(162792),
    B = n(675722),
    K = n(381941),
    W = n(652215),
    z = n(985018),
    Y = n(119907);
function q() {
    return (q =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function X(e) {
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
function J(e, t) {
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
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}
function Z(e, t, n) {
    return e.getElementById((0, _.j)(t, n));
}
function $(e) {
    var t;
    let {
        id: n,
        message: l,
        message: { messageReference: i },
        compact: s = !1,
        className: d,
    } = e;
    o()(l.type === W.lAJ.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
    let f = (0, c.rm)(null != (t = e.id) ? t : ""),
        {} = f,
        p = q({}, f),
        h = (0, u.bG)([m.A], () => m.A.getMessageByReference(i)),
        { popouts: b, setPopout: g } = (0, R.A)(l.id, K.Fd),
        A = (0, S.Ay)(l),
        y = (0, T.fF)(l),
        O = (0, T.ZD)(l);
    return l.type === W.lAJ.THREAD_STARTER_MESSAGE && null != h && h.state === m.a.LOADED
        ? (0, r.jsx)(
              ee,
              J(X({}, e), {
                  viewingChannelId: l.channel_id,
                  message: h.message,
                  groupId: h.message.id,
              }),
          )
        : (0, r.jsx)(
              N.A,
              J(X({}, p), {
                  id: n,
                  compact: s,
                  className: a()(d, {
                      [Y.iU]: !0,
                      [Y.HJ]: !s,
                      [Y.H4]: !0,
                      [Y._A]: !0,
                  }),
                  childrenHeader: (0, U.A)({
                      messageProps: e,
                      setPopout: g,
                      messagePopouts: b,
                      replyReference: i,
                      author: A,
                  }),
                  childrenSystemMessage: (0, B.A)(e),
                  childrenMessageContent: null,
                  "aria-labelledby": y,
                  "aria-describedby": O,
                  hasThread: !1,
                  author: A,
              }),
          );
}
function ee(e) {
    var t, n;
    let {
            id: i,
            message: s,
            message: { id: o, channel_id: p },
            channel: { guild_id: g },
            compact: O = !1,
            className: v,
            groupId: x,
            viewingChannelId: _,
        } = e,
        I = s.type === W.lAJ.REPLY ? s.messageReference : void 0,
        M = (0, c.rm)(null != (t = e.id) ? t : ""),
        { onFocus: G } = M,
        k = Q(M, ["onFocus"]),
        { isFocused: F, handleFocus: q, handleBlur: Z } = (0, P.G8)(G),
        { popouts: $, selected: ee, setPopout: et } = (0, R.A)(s.id, K.Fd),
        en = y.hD.useSetting(),
        er = y.rs.useSetting(),
        el = (0, u.bG)([m.A], () => m.A.getMessageByReference(I)),
        ei = (0, b.S)((null != (n = s.editedTimestamp) ? n : s.timestamp).valueOf()),
        {
            handleMouseEnter: ea,
            handleMouseLeave: es,
            isHovered: eo,
        } = (0, P.yp)({
            groupId: x,
            message: s,
            defaultValue: ee,
        }),
        ec = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled),
        eu = ee || (ec && F),
        ed = eu || eo,
        ef = (0, u.bG)([j.A], () => j.A.isDeveloper),
        {
            content: ep,
            hasSpoilerEmbeds: eh,
            hasBailedAst: eb,
        } = (0, D.A)(s, {
            hideSimpleEmbedContent: en && er,
            isInteracting: ed,
            formatInline: !1,
            allowList: ei,
            allowHeading: ei,
            allowLinks: !0,
            allowDevLinks: ef,
            previewLinkTarget: !0,
            viewingChannelId: _,
        }),
        eg = (0, w.A)(o, p, ec),
        em = (0, S.Ay)(s),
        eA = (0, T.fF)(s, x),
        ey = (0, T.ZD)(s),
        eO = (0, V.A)(e, ep, !1),
        ej = l.useCallback(() => (0, A.uh)(g, p, o), [g, p, o]),
        ev = (0, h.$7)({
            guildId: g,
            roleId: em.iconRoleId,
        });
    return (0, r.jsxs)("div", {
        className: Y.m5,
        children: [
            (0, r.jsx)(d.DUT, {
                className: Y.lA,
                onClick: ej,
                "aria-label": z.intl.string(z.t.k5WiPf),
                children: z.intl.string(z.t.k5WiPf),
            }),
            (0, r.jsx)(
                N.A,
                J(X({}, k), {
                    id: i,
                    compact: O,
                    className: a()(v, {
                        [Y.iU]: !0,
                        [Y.HJ]: !O,
                        [Y.mK]: s.mentioned,
                        [Y.M1]: (0, E.ec)(s),
                        [Y.H4]: (0, C.A)(s),
                        [Y._A]: s.id === x || s.type === W.lAJ.REPLY,
                        [Y.wH]: eu,
                    }),
                    zalgo: !0,
                    onKeyDown: eg,
                    onFocus: q,
                    onBlur: Z,
                    childrenRepliedMessage:
                        s.type === W.lAJ.REPLY &&
                        (0, H.A)(
                            J(X({}, e), {
                                setPopout: et,
                                referencedUsernameProfile: $.referencedUsernameProfile,
                                referencedAvatarProfile: $.referencedAvatarProfile,
                                replyReference: I,
                                replyMessage: el,
                                isReplySpineClickable: !0,
                            }),
                        ),
                    childrenHeader: (0, U.A)({
                        messageProps: e,
                        setPopout: et,
                        messagePopouts: $,
                        replyReference: I,
                        author: em,
                        repliedMessage: el,
                        roleIcon: ev,
                    }),
                    childrenAccessories: (0, L.A)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: eh,
                        hasBailedAst: eb,
                        isInteracting: ed,
                        renderThreadAccessory: !1,
                        renderSuppressEmbeds: !1,
                        renderReactions: !1,
                        disableComponentInteractivity: !0,
                    }),
                    childrenSystemMessage: (0, B.A)(e),
                    childrenMessageContent: eO,
                    onMouseMove: ea,
                    onMouseLeave: es,
                    "aria-labelledby": eA,
                    "aria-describedby": ey,
                    hasThread: !1,
                    author: em,
                }),
            ),
        ],
    });
}
let et = l.memo(function (e) {
    var t, n;
    let i,
        s,
        {
            id: A,
            message: _,
            message: { id: q },
            channel: Z,
            channel: { id: $ },
            compact: ee = !1,
            className: et,
            flashKey: en,
            groupId: er,
            renderContentOnly: el,
        } = e;
    o()(_.type !== W.lAJ.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
    let ei = W.sl8.has(_.type) ? _.messageReference : void 0,
        ea = (0, c.rm)(null != (t = e.id) ? t : ""),
        { onFocus: es } = ea,
        eo = Q(ea, ["onFocus"]),
        ec = y.hD.useSetting(),
        eu = y.rs.useSetting(),
        ed = (0, u.bG)([m.A], () => m.A.getMessageByReference(ei)),
        { popouts: ef, selected: ep, setPopout: eh } = (0, R.A)(_.id, K.Fd),
        eb = (0, P.VL)(_, Z, eh),
        eg = (0, P.ri)(_, Z),
        {
            handleMouseEnter: em,
            handleMouseLeave: eA,
            hasHovered: ey,
            isHovered: eO,
        } = (0, P.yp)({
            groupId: er,
            message: _,
            defaultValue: ep,
        }),
        { isFocused: ej, hasFocused: ev, handleFocus: ex, handleBlur: eE } = (0, P.G8)(es),
        e_ = l.useCallback(
            (e) => {
                ex(e), em(e);
            },
            [ex, em],
        ),
        eC = l.useCallback(
            (e) => {
                eE(e), eA();
            },
            [eE, eA],
        ),
        eS = (0, u.bG)([v.A], () => v.A.isEditing($, q), [$, q]),
        eI = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled),
        eN = ep || eS || (eI && ej),
        eT = eN || eO,
        eP = (0, u.bG)(
            [O.A],
            () => _.hasFlag(W.pr7.HAS_THREAD) && O.A.getChannel(x.default.castMessageIdAsChannelId(_.id)),
        ),
        ew = _.isFirstMessageInForumPost(Z),
        eR = (0, b.S)((null != (n = _.editedTimestamp) ? n : _.timestamp).valueOf()),
        eD = (0, u.bG)([j.A], () => j.A.isDeveloper),
        {
            content: eM,
            hasSpoilerEmbeds: eL,
            hasBailedAst: eG,
        } = (0, D.A)(_, {
            hideSimpleEmbedContent: ec && eu,
            isInteracting: eT,
            formatInline: !1,
            allowList: ew || eR,
            allowHeading: ew || eR,
            allowLinks: !0,
            allowDevLinks: eD,
            previewLinkTarget: !0,
        }),
        ek = (0, w.A)(q, $, eI),
        eU = (0, S.Ay)(_),
        eV = (0, u.bG)([g.A], () => g.A.getPendingReply($)),
        eF =
            ((i = l.useRef(en)),
            l.useEffect(() => {
                i.current = null != en ? en : i.current;
            }),
            null != en ? en : i.current),
        eH = (0, h.$7)({
            guildId: Z.guild_id,
            roleId: eU.iconRoleId,
        }),
        eB = (0, T.fF)(_, er),
        eK = (0, T.ZD)(_),
        eW = (0, u.bG)([p.A], () => p.A.getMessage(q), [q]),
        ez = (0, M.A)({
            message: _,
            channel: Z,
        }),
        eY = l.useRef(window),
        eq = null != eW;
    s = _.type === W.lAJ.CUSTOM_GIFT ? "" : !eS && eq ? (0, G.A)(e, eM) : (0, V.A)(e, eM, eS);
    let eX = _.id === er,
        eJ = (0, r.jsx)(d.vN3, {
            offset: {
                left: 4,
                right: 4,
            },
            children: (0, r.jsx)("li", {
                id: A,
                className: Y.Nt,
                "aria-setsize": -1,
                children: (0, r.jsx)(
                    N.A,
                    J(X({}, eo), {
                        "aria-setsize": -1,
                        "aria-roledescription": z.intl.string(z.t.BAB0yK),
                        "aria-labelledby": eB,
                        "aria-describedby": eK,
                        onFocus: e_,
                        onBlur: eC,
                        onContextMenu: eb,
                        onKeyDown: ek,
                        onClick: eg,
                        compact: ee,
                        contentOnly: el,
                        className: a()(et, {
                            [Y.iU]: !0,
                            [Y.HJ]: !ee,
                            [Y.mK]: _.mentioned,
                            [Y.M1]: (0, E.ec)(_),
                            [Y.SH]: _.type === W.lAJ.NITRO_NOTIFICATION,
                            [Y.H4]: (0, C.A)(_),
                            [Y._A]: !el && (eX || _.type === W.lAJ.REPLY),
                            [Y.wH]: eN,
                            [Y.$n]: (null == eV ? void 0 : eV.message.id) === _.id,
                            [Y.$w]: _.isCommandType() && _.state === W.cmJ.SENDING,
                            [Y.DX]: eq,
                        }),
                        zalgo: !eS,
                        childrenRepliedMessage:
                            el || _.type !== W.lAJ.REPLY
                                ? void 0
                                : (0, H.A)(
                                      J(X({}, e), {
                                          setPopout: eh,
                                          referencedUsernameProfile: ef.referencedUsernameProfile,
                                          referencedAvatarProfile: ef.referencedAvatarProfile,
                                          replyReference: ei,
                                          replyMessage: ed,
                                          isReplySpineClickable: !0,
                                      }),
                                  ),
                        childrenExecutedCommand: (0, F.A)(e, eh, ef),
                        childrenHeader: el
                            ? void 0
                            : (0, U.A)({
                                  messageProps: e,
                                  setPopout: eh,
                                  messagePopouts: ef,
                                  replyReference: ei,
                                  author: eU,
                                  repliedMessage: ed,
                                  roleIcon: eH,
                              }),
                        childrenAccessories: (0, L.A)({
                            channelMessageProps: e,
                            hasSpoilerEmbeds: eL,
                            hasBailedAst: eG,
                            handleContextMenu: eb,
                            isInteracting: eT,
                            isAutomodBlockedMessage: eq,
                            forceAddReactions: _.type === W.lAJ.EMOJI_ADDED,
                        }),
                        childrenButtons:
                            ey || ev
                                ? (0, k.A)({
                                      buttonProps: e,
                                      setPopout: eh,
                                      messagePopouts: ef,
                                      isFocused: eO || ej,
                                      messageWindow: eY.current,
                                  })
                                : void 0,
                        childrenSystemMessage: (0, B.A)(e),
                        childrenMessageContent: s,
                        onMouseMove: em,
                        onMouseLeave: eA,
                        hasThread: !el && _.hasFlag(W.pr7.HAS_THREAD) && null != eP,
                        isSystemMessage: (0, C.A)(_),
                        hasReply: _.type === W.lAJ.REPLY,
                        messageRef: (e) => {
                            var t, n;
                            (ez.current = e),
                                (eY.current =
                                    null != (t = null == e || null == (n = e.ownerDocument) ? void 0 : n.defaultView)
                                        ? t
                                        : window);
                        },
                        author: eU,
                    }),
                ),
            }),
        });
    return null != eF
        ? (0, r.jsx)(
              I.A,
              {
                  flashKey: eF,
                  className: a()({
                      [Y.bB]: !0,
                      [Y._A]: !ee && _.id === er,
                  }),
                  children: eJ,
              },
              "bg-flash-".concat(A),
          )
        : eJ;
});
