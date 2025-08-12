n.d(t, { Z: () => B });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(262777),
    u = n(628238),
    d = n(976853),
    h = n(977683),
    p = n(869765),
    f = n(695346),
    g = n(592125),
    m = n(699516),
    b = n(709054),
    O = n(594173),
    _ = n(786761),
    y = n(493892),
    C = n(901461),
    v = n(739566),
    j = n(443877),
    E = n(492593),
    S = n(453687),
    x = n(938353),
    I = n(25015),
    P = n(689674),
    N = n(963550),
    w = n(845080),
    Z = n(295790),
    T = n(145807),
    A = n(56744),
    R = n(834129),
    D = n(981631),
    L = n(388032),
    M = n(960777),
    k = n(433869);
function U(e) {
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
function G(e, t) {
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
            message: a,
            compact: R = !1,
            className: M,
            onContextMenu: B,
            onClick: F,
            disableInteraction: H = !1,
            hasThread: z,
            treatSpam: W,
        } = t,
        K = D.OBS.has(a.type) ? a.messageReference : void 0,
        Y = (0, s.e7)([p.Z], () => p.Z.getMessageByReference(K)),
        q = (0, s.e7)([g.Z], () =>
            a.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === p.Y.LOADED
                ? g.Z.getChannel(Y.message.channel_id)
                : null,
        ),
        X = f.x4.useSetting(),
        Q = f.RS.useSetting(),
        J = f.NA.useSetting(),
        $ = f.QK.useSetting(),
        ee = (0, u.A)((null != (n = a.editedTimestamp) ? n : a.timestamp).valueOf()),
        et = (0, d.Z)(null == l ? void 0 : l.id),
        { disableReactionCreates: en } = (0, j.Z)(l),
        { content: er, hasSpoilerEmbeds: ei } = (0, I.Z)(a, {
            hideSimpleEmbedContent: Q && J,
            allowList: ee,
            allowHeading: ee,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        el = (0, v.ZP)(a),
        eo = (0, s.e7)(
            [g.Z],
            () => a.hasFlag(D.iLy.HAS_THREAD) && g.Z.getChannel(b.default.castMessageIdAsChannelId(a.id)),
        ),
        es = a.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === p.Y.LOADED && null != q,
        ea = !es && void 0 === i,
        ec = (0, P.Z)({
            message: a,
            channel: l,
            enabled: ea,
        }),
        eu = (0, c.v)(a),
        ed = (0, O.ro)(a.id, a.channel_id),
        eh = (0, h.Z)(a),
        ep = (0, S.iG)(a);
    return es
        ? (0, r.jsx)(
              e,
              G(U({}, t), {
                  message: Y.message,
                  channel: q,
                  hasThread: !1,
              }),
          )
        : (m.Z.isBlockedForMessage(a)
                ? (i = L.t["+FcYMz"])
                : m.Z.isIgnoredForMessage(a)
                  ? (i = L.t.VFWjc3)
                  : (0, y.DQ)(a) && W && (i = L.t.xfkfTE),
            void 0 !== i)
          ? (0, r.jsx)(V, {
                className: M,
                compact: R,
                count: 1,
                collapsedReason: i,
            })
          : (0, r.jsx)(E.Z, {
                compact: R,
                className: o()(M, {
                    [k.ephemeral]: (0, _.Pv)(a),
                    [k.disableInteraction]: H,
                    [k.groupStart]: t.isGroupStart,
                }),
                childrenRepliedMessage: (0, A.Z)(a, l, K, Y, R),
                childrenHeader: (0, w.Z)(
                    G(U({}, t), {
                        author: el,
                        guildId: l.guild_id,
                    }),
                ),
                childrenAccessories: (0, r.jsx)(x.BB, {
                    channel: l,
                    message: a,
                    hasSpoilerEmbeds: ei,
                    compact: R,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: en,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: z,
                    inlineAttachmentMedia: X,
                    inlineEmbedMedia: Q,
                    renderEmbeds: J,
                    gifAutoPlay: $,
                    poll: eh,
                    showListsAndHeaders: ee,
                    showMaskedLinks: ee,
                    shouldHideMediaOptions: et,
                    enabledContentHarmTypeFlags: eu,
                    ctaButtonType: ed,
                }),
                childrenExecutedCommand: (0, T.Z)(a, l, R),
                childrenMessageContent: (0, N.Z)(t, er),
                childrenSystemMessage: (0, Z.Z)(t),
                onContextMenu: B,
                onClick: F,
                hasThread: !1 !== z && null != eo && a.hasFlag(D.iLy.HAS_THREAD),
                hasReply: a.type === D.uaV.REPLY,
                isSystemMessage: (0, C.Z)(a),
                messageRef: ec,
                author: el,
                "aria-labelledby": ep,
                "aria-roledescription": L.intl.string(L.t.BAB0yM),
            });
});
function V(e) {
    let { className: t, count: n, compact: i, collapsedReason: l } = e;
    return (0, r.jsx)(E.Z, {
        className: t,
        compact: i,
        role: "group",
        childrenMessageContent: (0, r.jsx)(R.Z, {
            compact: i,
            className: M.blockedSystemMessage,
            iconNode: (0, r.jsx)(a.Dio, {
                size: "md",
                color: "currentColor",
                className: M.blockedIcon,
            }),
            children: (0, r.jsx)("div", {
                className: M.blockedMessageText,
                children: L.intl.format(l, { count: n }),
            }),
        }),
    });
}
