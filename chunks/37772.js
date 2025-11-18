n.d(t, { Z: () => B });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(262777),
    u = n(628238),
    d = n(976853),
    p = n(977683),
    f = n(869765),
    h = n(695346),
    g = n(592125),
    m = n(699516),
    b = n(709054),
    _ = n(594173),
    y = n(786761),
    O = n(493892),
    v = n(901461),
    j = n(739566),
    x = n(443877),
    C = n(492593),
    E = n(453687),
    S = n(938353),
    I = n(25015),
    P = n(689674),
    N = n(963550),
    Z = n(845080),
    w = n(295790),
    T = n(145807),
    A = n(56744),
    R = n(834129),
    D = n(981631),
    L = n(388032),
    M = n(77162),
    k = n(5898);
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
            className: M,
            onContextMenu: B,
            onClick: V,
            disableInteraction: H = !1,
            hasThread: z,
            treatSpam: W,
        } = t,
        K = D.OBS.has(s.type) ? s.messageReference : void 0,
        Y = (0, a.e7)([f.Z], () => f.Z.getMessageByReference(K)),
        q = (0, a.e7)([g.Z], () =>
            s.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === f.Y.LOADED
                ? g.Z.getChannel(Y.message.channel_id)
                : null,
        ),
        X = h.x4.useSetting(),
        Q = h.RS.useSetting(),
        J = h.NA.useSetting(),
        $ = h.QK.useSetting(),
        ee = (0, u.A)((null != (n = s.editedTimestamp) ? n : s.timestamp).valueOf()),
        et = (0, d.Z)(null == l ? void 0 : l.id),
        { disableReactionCreates: en } = (0, x.Z)(l),
        { content: er, hasSpoilerEmbeds: ei } = (0, I.Z)(s, {
            hideSimpleEmbedContent: Q && J,
            allowList: ee,
            allowHeading: ee,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        el = (0, j.ZP)(s),
        eo = (0, a.e7)(
            [g.Z],
            () => s.hasFlag(D.iLy.HAS_THREAD) && g.Z.getChannel(b.default.castMessageIdAsChannelId(s.id)),
        ),
        ea = s.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === f.Y.LOADED && null != q,
        es = !ea && void 0 === i,
        ec = (0, P.Z)({
            message: s,
            channel: l,
            enabled: es,
        }),
        eu = (0, c.v)(s),
        ed = (0, _.ro)(s.id, s.channel_id),
        ep = (0, p.Z)(s),
        ef = (0, E.iG)(s);
    return ea
        ? (0, r.jsx)(
              e,
              U(G({}, t), {
                  message: Y.message,
                  channel: q,
                  hasThread: !1,
              }),
          )
        : (m.Z.isBlockedForMessage(s)
                ? (i = L.t["+FcYM/"])
                : m.Z.isIgnoredForMessage(s)
                  ? (i = L.t["VFWjc+"])
                  : (0, O.DQ)(s) && W && (i = L.t.xfkfTK),
            void 0 !== i)
          ? (0, r.jsx)(F, {
                className: M,
                compact: R,
                count: 1,
                collapsedReason: i,
            })
          : (0, r.jsx)(C.Z, {
                compact: R,
                className: o()(M, {
                    [k.ephemeral]: (0, y.Pv)(s),
                    [k.disableInteraction]: H,
                    [k.groupStart]: t.isGroupStart,
                }),
                childrenRepliedMessage: (0, A.Z)(s, l, K, Y, R),
                childrenHeader: (0, Z.Z)(
                    U(G({}, t), {
                        author: el,
                        guildId: l.guild_id,
                    }),
                ),
                childrenAccessories: (0, r.jsx)(S.BB, {
                    channel: l,
                    message: s,
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
                    poll: ep,
                    showListsAndHeaders: ee,
                    showMaskedLinks: ee,
                    shouldHideMediaOptions: et,
                    enabledContentHarmTypeFlags: eu,
                    ctaButtonType: ed,
                }),
                childrenExecutedCommand: (0, T.Z)(s, l, R),
                childrenMessageContent: (0, N.Z)(t, er),
                childrenSystemMessage: (0, w.Z)(t),
                onContextMenu: B,
                onClick: V,
                hasThread: !1 !== z && null != eo && s.hasFlag(D.iLy.HAS_THREAD),
                hasReply: s.type === D.uaV.REPLY,
                isSystemMessage: (0, v.Z)(s),
                messageRef: ec,
                author: el,
                "aria-labelledby": ef,
                "aria-roledescription": L.intl.string(L.t.BAB0yK),
            });
});
function F(e) {
    let { className: t, count: n, compact: i, collapsedReason: l } = e;
    return (0, r.jsx)(C.Z, {
        className: t,
        compact: i,
        role: "group",
        childrenMessageContent: (0, r.jsx)(R.Z, {
            compact: i,
            className: M.blockedSystemMessage,
            iconNode: (0, r.jsx)(s.Dio, {
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
