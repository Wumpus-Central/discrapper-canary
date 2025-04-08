n.d(t, { Z: () => F });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
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
    v = n(493892),
    E = n(901461),
    N = n(739566),
    O = n(443877),
    j = n(492593),
    C = n(938353),
    S = n(25015),
    I = n(689674),
    T = n(963550),
    P = n(845080),
    A = n(295790),
    w = n(145807),
    Z = n(56744),
    k = n(834129),
    R = n(981631),
    D = n(388032),
    L = n(758010),
    M = n(30804);
function W(e) {
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
let F = i.memo(function e(t) {
    var n, i;
    let a,
        { channel: s, message: k, compact: L = !1, className: F, onContextMenu: G, onClick: H, disableInteraction: V = !1, hasThread: z, treatSpam: K } = t,
        Y = R.OBS.has(k.type) ? k.messageReference : void 0,
        X = (0, o.e7)([f.Z], () => f.Z.getMessageByReference(Y)),
        q = (0, o.e7)([g.Z], () => (k.type === R.uaV.THREAD_STARTER_MESSAGE && X.state === f.Y.LOADED ? g.Z.getChannel(X.message.channel_id) : null)),
        Q = h.x4.useSetting(),
        J = h.RS.useSetting(),
        $ = h.NA.useSetting(),
        ee = h.QK.useSetting(),
        et = (0, u.A)((null != (n = k.editedTimestamp) ? n : k.timestamp).valueOf()),
        en = (0, d.Z)(null == s ? void 0 : s.id),
        { disableReactionCreates: er } = (0, O.Z)(s),
        { content: ei, hasSpoilerEmbeds: ea } = (0, S.Z)(k, {
            hideSimpleEmbedContent: J && $,
            allowList: et,
            allowHeading: et,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        el = (0, N.ZP)(k),
        eo = null != (i = k.getGuildId()) ? i : void 0,
        es = (0, m.Z)(el),
        ec = (0, o.e7)([g.Z], () => k.hasFlag(R.iLy.HAS_THREAD) && g.Z.getChannel(b.default.castMessageIdAsChannelId(k.id))),
        eu = k.type === R.uaV.THREAD_STARTER_MESSAGE && X.state === f.Y.LOADED && null != q,
        ed = !eu && void 0 === a,
        ep = (0, I.Z)({
            message: k,
            channel: s,
            enabled: ed
        }),
        em = (0, c.V)(s.id, k.author.id),
        ef = (0, x.ro)(k.id, k.channel_id),
        eh = (0, p.Z)(k);
    return eu
        ? (0, r.jsx)(
              e,
              U(W({}, t), {
                  message: X.message,
                  channel: q,
                  hasThread: !1
              })
          )
        : (_.Z.isBlockedForMessage(k) ? (a = D.t['+FcYMz']) : _.Z.isIgnoredForMessage(k) ? (a = D.t.VFWjc3) : (0, v.DQ)(k) && K && (a = D.t.xfkfTE), void 0 !== a)
          ? (0, r.jsx)(B, {
                className: F,
                compact: L,
                count: 1,
                collapsedReason: a
            })
          : (0, r.jsx)(j.Z, {
                compact: L,
                className: l()(F, {
                    [M.ephemeral]: (0, y.Pv)(k),
                    [M.disableInteraction]: V,
                    [M.groupStart]: t.isGroupStart
                }),
                childrenRepliedMessage: (0, Z.Z)(k, s, Y, X, L),
                childrenHeader: (0, P.Z)(
                    U(W({}, t), {
                        author: el,
                        guildId: s.guild_id
                    })
                ),
                childrenAccessories: (0, r.jsx)(C.BB, {
                    channel: s,
                    message: k,
                    hasSpoilerEmbeds: ea,
                    compact: L,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: er,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: z,
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
                childrenExecutedCommand: (0, w.Z)(k, s, L),
                childrenMessageContent: (0, T.Z)(t, ei),
                childrenSystemMessage: (0, A.Z)(t),
                onContextMenu: G,
                onClick: H,
                hasThread: !1 !== z && null != ec && k.hasFlag(R.iLy.HAS_THREAD),
                hasReply: k.type === R.uaV.REPLY,
                isSystemMessage: (0, E.Z)(k),
                messageRef: ep,
                guildId: eo,
                authorHasGradientRole: es
            });
});
function B(e) {
    let { className: t, count: n, compact: i, collapsedReason: a } = e;
    return (0, r.jsx)(j.Z, {
        className: t,
        compact: i,
        role: 'group',
        childrenMessageContent: (0, r.jsx)(k.Z, {
            compact: i,
            className: L.blockedSystemMessage,
            iconNode: (0, r.jsx)(s.Dio, {
                size: 'md',
                color: 'currentColor',
                className: L.blockedIcon
            }),
            children: (0, r.jsx)('div', {
                className: L.blockedMessageText,
                children: D.NW.format(a, { count: n })
            })
        })
    });
}
