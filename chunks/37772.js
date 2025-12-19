n.d(t, { Z: () => B });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(262777),
    u = n(628238),
    d = n(976853),
    f = n(977683),
    h = n(869765),
    p = n(695346),
    g = n(592125),
    b = n(699516),
    m = n(709054),
    y = n(594173),
    O = n(786761),
    v = n(493892),
    j = n(901461),
    C = n(739566),
    x = n(443877),
    E = n(492593),
    S = n(453687),
    I = n(938353),
    _ = n(25015),
    P = n(689674),
    N = n(963550),
    Z = n(845080),
    w = n(295790),
    T = n(145807),
    A = n(56744),
    R = n(834129),
    D = n(981631),
    M = n(388032),
    L = n(884193),
    k = n(548498);
function G(e) {
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
function U(e, t) {
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
let B = i.memo(function e(t) {
    var n;
    let i,
        {
            channel: l,
            message: s,
            compact: R = !1,
            className: L,
            onContextMenu: B,
            onClick: V,
            disableInteraction: H = !1,
            hasThread: W,
            treatSpam: z,
        } = t,
        K = D.OBS.has(s.type) ? s.messageReference : void 0,
        Y = (0, o.e7)([h.Z], () => h.Z.getMessageByReference(K)),
        q = (0, o.e7)([g.Z], () =>
            s.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === h.Y.LOADED
                ? g.Z.getChannel(Y.message.channel_id)
                : null,
        ),
        Q = p.x4.useSetting(),
        X = p.RS.useSetting(),
        J = p.NA.useSetting(),
        $ = p.QK.useSetting(),
        ee = (0, u.A)((null != (n = s.editedTimestamp) ? n : s.timestamp).valueOf()),
        et = (0, d.Z)(null == l ? void 0 : l.id),
        { disableReactionCreates: en } = (0, x.Z)(l),
        {
            content: er,
            hasSpoilerEmbeds: ei,
            hasBailedAst: el,
        } = (0, _.Z)(s, {
            hideSimpleEmbedContent: X && J,
            allowList: ee,
            allowHeading: ee,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        ea = (0, C.ZP)(s),
        eo = (0, o.e7)(
            [g.Z],
            () => s.hasFlag(D.iLy.HAS_THREAD) && g.Z.getChannel(m.default.castMessageIdAsChannelId(s.id)),
        ),
        es = s.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === h.Y.LOADED && null != q,
        ec = !es && void 0 === i,
        eu = (0, P.Z)({
            message: s,
            channel: l,
            enabled: ec,
        }),
        ed = (0, c.v)(s),
        ef = (0, y.ro)(s.id, s.channel_id),
        eh = (0, f.Z)(s),
        ep = (0, S.iG)(s);
    return es
        ? (0, r.jsx)(
              e,
              U(G({}, t), {
                  message: Y.message,
                  channel: q,
                  hasThread: !1,
              }),
          )
        : (b.Z.isBlockedForMessage(s)
                ? (i = M.t["+FcYM/"])
                : b.Z.isIgnoredForMessage(s)
                  ? (i = M.t["VFWjc+"])
                  : (0, v.DQ)(s) && z && (i = M.t.xfkfTK),
            void 0 !== i)
          ? (0, r.jsx)(F, {
                className: L,
                compact: R,
                count: 1,
                collapsedReason: i,
            })
          : (0, r.jsx)(E.Z, {
                compact: R,
                className: a()(L, {
                    [k.ephemeral]: (0, O.Pv)(s),
                    [k.disableInteraction]: H,
                    [k.groupStart]: t.isGroupStart,
                }),
                childrenRepliedMessage: (0, A.Z)(s, l, K, Y, R),
                childrenHeader: (0, Z.Z)(
                    U(G({}, t), {
                        author: ea,
                        guildId: l.guild_id,
                    }),
                ),
                childrenAccessories: (0, r.jsx)(I.BB, {
                    channel: l,
                    message: s,
                    hasSpoilerEmbeds: ei,
                    hasBailedAst: el,
                    compact: R,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: en,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: W,
                    inlineAttachmentMedia: Q,
                    inlineEmbedMedia: X,
                    renderEmbeds: J,
                    gifAutoPlay: $,
                    poll: eh,
                    showListsAndHeaders: ee,
                    showMaskedLinks: ee,
                    shouldHideMediaOptions: et,
                    enabledContentHarmTypeFlags: ed,
                    ctaButtonType: ef,
                }),
                childrenExecutedCommand: (0, T.Z)(s, l, R),
                childrenMessageContent: (0, N.Z)(t, er),
                childrenSystemMessage: (0, w.Z)(t),
                onContextMenu: B,
                onClick: V,
                hasThread: !1 !== W && null != eo && s.hasFlag(D.iLy.HAS_THREAD),
                hasReply: s.type === D.uaV.REPLY,
                isSystemMessage: (0, j.Z)(s),
                messageRef: eu,
                author: ea,
                "aria-labelledby": ep,
                "aria-roledescription": M.intl.string(M.t.BAB0yK),
            });
});
function F(e) {
    let { className: t, count: n, compact: i, collapsedReason: l } = e;
    return (0, r.jsx)(E.Z, {
        className: t,
        compact: i,
        role: "group",
        childrenMessageContent: (0, r.jsx)(R.Z, {
            compact: i,
            className: L.blockedSystemMessage,
            iconNode: (0, r.jsx)(s.Dio, {
                size: "md",
                color: "currentColor",
                className: L.blockedIcon,
            }),
            children: (0, r.jsx)("div", {
                className: L.blockedMessageText,
                children: M.intl.format(l, { count: n }),
            }),
        }),
    });
}
