n.d(t, { Z: () => G });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(25610),
    u = n(628238),
    d = n(976853),
    p = n(977683),
    m = n(367814),
    f = n(869765),
    h = n(695346),
    g = n(592125),
    _ = n(699516),
    b = n(709054),
    x = n(594173),
    y = n(786761),
    E = n(750030),
    v = n(493892),
    O = n(901461),
    j = n(739566),
    C = n(443877),
    S = n(492593),
    I = n(938353),
    N = n(25015),
    T = n(689674),
    P = n(963550),
    A = n(845080),
    w = n(295790),
    Z = n(145807),
    R = n(56744),
    k = n(834129),
    D = n(981631),
    L = n(388032),
    M = n(758010),
    U = n(30804);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function B(e, t) {
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
let G = i.memo(function e(t) {
    var n;
    let i,
        { channel: l, message: s, compact: k = !1, className: M, onContextMenu: G, onClick: V, disableInteraction: z = !1, hasThread: W, treatSpam: K } = t,
        Y = D.OBS.has(s.type) ? s.messageReference : void 0,
        X = (0, o.e7)([f.Z], () => f.Z.getMessageByReference(Y)),
        q = (0, o.e7)([g.Z], () => (s.type === D.uaV.THREAD_STARTER_MESSAGE && X.state === f.Y.LOADED ? g.Z.getChannel(X.message.channel_id) : null)),
        Q = h.x4.useSetting(),
        J = h.RS.useSetting(),
        $ = h.NA.useSetting(),
        ee = h.QK.useSetting(),
        et = (0, u.A)((null != (n = s.editedTimestamp) ? n : s.timestamp).valueOf()),
        en = (0, d.Z)(null == l ? void 0 : l.id),
        { disableReactionCreates: er } = (0, C.Z)(l),
        { content: ei, hasSpoilerEmbeds: el } = (0, N.Z)(s, {
            hideSimpleEmbedContent: J && $,
            allowList: et,
            allowHeading: et,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        ea = (0, j.ZP)(s),
        eo = (0, E.k)(s),
        es = (0, m.Z)(ea),
        ec = (0, o.e7)([g.Z], () => s.hasFlag(D.iLy.HAS_THREAD) && g.Z.getChannel(b.default.castMessageIdAsChannelId(s.id))),
        eu = s.type === D.uaV.THREAD_STARTER_MESSAGE && X.state === f.Y.LOADED && null != q,
        ed = !eu && void 0 === i,
        ep = (0, T.Z)({
            message: s,
            channel: l,
            enabled: ed
        }),
        em = (0, c.V)(l.id, s.author.id),
        ef = (0, x.ro)(s.id, s.channel_id),
        eh = (0, p.Z)(s);
    return eu
        ? (0, r.jsx)(
              e,
              B(F({}, t), {
                  message: X.message,
                  channel: q,
                  hasThread: !1
              })
          )
        : (_.Z.isBlockedForMessage(s) ? (i = L.t['+FcYMz']) : _.Z.isIgnoredForMessage(s) ? (i = L.t.VFWjc3) : (0, v.DQ)(s) && K && (i = L.t.xfkfTE), void 0 !== i)
          ? (0, r.jsx)(H, {
                className: M,
                compact: k,
                count: 1,
                collapsedReason: i
            })
          : (0, r.jsx)(S.Z, {
                compact: k,
                className: a()(M, {
                    [U.ephemeral]: (0, y.Pv)(s),
                    [U.disableInteraction]: z,
                    [U.groupStart]: t.isGroupStart
                }),
                childrenRepliedMessage: (0, R.Z)(s, l, Y, X, k),
                childrenHeader: (0, A.Z)(
                    B(F({}, t), {
                        author: ea,
                        guildId: l.guild_id
                    })
                ),
                childrenAccessories: (0, r.jsx)(I.BB, {
                    channel: l,
                    message: s,
                    hasSpoilerEmbeds: el,
                    compact: k,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: er,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: W,
                    inlineAttachmentMedia: Q,
                    inlineEmbedMedia: J,
                    renderEmbeds: $,
                    gifAutoPlay: ee,
                    poll: eh,
                    showListsAndHeaders: et,
                    showMaskedLinks: et,
                    shouldHideMediaOptions: en,
                    shouldRedactExplicitContent: em,
                    ctaButtonType: ef
                }),
                childrenExecutedCommand: (0, Z.Z)(s, l, k),
                childrenMessageContent: (0, P.Z)(t, ei),
                childrenSystemMessage: (0, w.Z)(t),
                onContextMenu: G,
                onClick: V,
                hasThread: !1 !== W && null != ec && s.hasFlag(D.iLy.HAS_THREAD),
                hasReply: s.type === D.uaV.REPLY,
                isSystemMessage: (0, O.Z)(s),
                messageRef: ep,
                guildId: eo,
                authorHasGradientRole: es
            });
});
function H(e) {
    let { className: t, count: n, compact: i, collapsedReason: l } = e;
    return (0, r.jsx)(S.Z, {
        className: t,
        compact: i,
        role: 'group',
        childrenMessageContent: (0, r.jsx)(k.Z, {
            compact: i,
            className: M.blockedSystemMessage,
            iconNode: (0, r.jsx)(s.Dio, {
                size: 'md',
                color: 'currentColor',
                className: M.blockedIcon
            }),
            children: (0, r.jsx)('div', {
                className: M.blockedMessageText,
                children: L.intl.format(l, { count: n })
            })
        })
    });
}
