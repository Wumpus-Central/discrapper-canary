n.d(t, { Z: () => G });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(262777),
    u = n(628238),
    d = n(976853),
    h = n(977683),
    p = n(869765),
    f = n(695346),
    g = n(592125),
    m = n(699516),
    b = n(709054),
    _ = n(594173),
    O = n(786761),
    y = n(493892),
    v = n(901461),
    C = n(739566),
    j = n(443877),
    S = n(492593),
    E = n(938353),
    x = n(25015),
    I = n(689674),
    P = n(963550),
    N = n(845080),
    w = n(295790),
    Z = n(145807),
    T = n(56744),
    A = n(834129),
    R = n(981631),
    D = n(388032),
    L = n(758010),
    M = n(30804);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
let G = i.memo(function e(t) {
    var n;
    let i,
        { channel: l, message: s, compact: A = !1, className: L, onContextMenu: G, onClick: F, disableInteraction: V = !1, hasThread: H, treatSpam: z } = t,
        W = R.OBS.has(s.type) ? s.messageReference : void 0,
        K = (0, a.e7)([p.Z], () => p.Z.getMessageByReference(W)),
        Y = (0, a.e7)([g.Z], () => (s.type === R.uaV.THREAD_STARTER_MESSAGE && K.state === p.Y.LOADED ? g.Z.getChannel(K.message.channel_id) : null)),
        q = f.x4.useSetting(),
        X = f.RS.useSetting(),
        Q = f.NA.useSetting(),
        J = f.QK.useSetting(),
        $ = (0, u.A)((null != (n = s.editedTimestamp) ? n : s.timestamp).valueOf()),
        ee = (0, d.Z)(null == l ? void 0 : l.id),
        { disableReactionCreates: et } = (0, j.Z)(l),
        { content: en, hasSpoilerEmbeds: er } = (0, x.Z)(s, {
            hideSimpleEmbedContent: X && Q,
            allowList: $,
            allowHeading: $,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        ei = (0, C.ZP)(s),
        el = (0, a.e7)([g.Z], () => s.hasFlag(R.iLy.HAS_THREAD) && g.Z.getChannel(b.default.castMessageIdAsChannelId(s.id))),
        eo = s.type === R.uaV.THREAD_STARTER_MESSAGE && K.state === p.Y.LOADED && null != Y,
        ea = !eo && void 0 === i,
        es = (0, I.Z)({
            message: s,
            channel: l,
            enabled: ea
        }),
        ec = (0, c.v)(s),
        eu = (0, _.ro)(s.id, s.channel_id),
        ed = (0, h.Z)(s);
    return eo
        ? (0, r.jsx)(
              e,
              U(k({}, t), {
                  message: K.message,
                  channel: Y,
                  hasThread: !1
              })
          )
        : (m.Z.isBlockedForMessage(s) ? (i = D.t['+FcYMz']) : m.Z.isIgnoredForMessage(s) ? (i = D.t.VFWjc3) : (0, y.DQ)(s) && z && (i = D.t.xfkfTE), void 0 !== i)
          ? (0, r.jsx)(B, {
                className: L,
                compact: A,
                count: 1,
                collapsedReason: i
            })
          : (0, r.jsx)(S.Z, {
                compact: A,
                className: o()(L, {
                    [M.ephemeral]: (0, O.Pv)(s),
                    [M.disableInteraction]: V,
                    [M.groupStart]: t.isGroupStart
                }),
                childrenRepliedMessage: (0, T.Z)(s, l, W, K, A),
                childrenHeader: (0, N.Z)(
                    U(k({}, t), {
                        author: ei,
                        guildId: l.guild_id
                    })
                ),
                childrenAccessories: (0, r.jsx)(E.BB, {
                    channel: l,
                    message: s,
                    hasSpoilerEmbeds: er,
                    compact: A,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: et,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: H,
                    inlineAttachmentMedia: q,
                    inlineEmbedMedia: X,
                    renderEmbeds: Q,
                    gifAutoPlay: J,
                    poll: ed,
                    showListsAndHeaders: $,
                    showMaskedLinks: $,
                    shouldHideMediaOptions: ee,
                    enabledContentHarmTypeFlags: ec,
                    ctaButtonType: eu
                }),
                childrenExecutedCommand: (0, Z.Z)(s, l, A),
                childrenMessageContent: (0, P.Z)(t, en),
                childrenSystemMessage: (0, w.Z)(t),
                onContextMenu: G,
                onClick: F,
                hasThread: !1 !== H && null != el && s.hasFlag(R.iLy.HAS_THREAD),
                hasReply: s.type === R.uaV.REPLY,
                isSystemMessage: (0, v.Z)(s),
                messageRef: es,
                author: ei
            });
});
function B(e) {
    let { className: t, count: n, compact: i, collapsedReason: l } = e;
    return (0, r.jsx)(S.Z, {
        className: t,
        compact: i,
        role: 'group',
        childrenMessageContent: (0, r.jsx)(A.Z, {
            compact: i,
            className: L.blockedSystemMessage,
            iconNode: (0, r.jsx)(s.Dio, {
                size: 'md',
                color: 'currentColor',
                className: L.blockedIcon
            }),
            children: (0, r.jsx)('div', {
                className: L.blockedMessageText,
                children: D.intl.format(l, { count: n })
            })
        })
    });
}
