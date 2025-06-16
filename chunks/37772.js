n.d(t, { Z: () => F });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(262777),
    u = n(628238),
    d = n(976853),
    p = n(977683),
    m = n(869765),
    f = n(695346),
    h = n(592125),
    g = n(699516),
    _ = n(709054),
    b = n(594173),
    E = n(786761),
    y = n(493892),
    x = n(901461),
    v = n(739566),
    O = n(443877),
    j = n(492593),
    C = n(938353),
    S = n(25015),
    I = n(689674),
    N = n(963550),
    T = n(845080),
    P = n(295790),
    A = n(145807),
    w = n(56744),
    Z = n(834129),
    R = n(981631),
    k = n(388032),
    D = n(758010),
    L = n(30804);
function M(e) {
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
    var n;
    let i,
        { channel: l, message: s, compact: Z = !1, className: D, onContextMenu: F, onClick: G, disableInteraction: H = !1, hasThread: V, treatSpam: z } = t,
        W = R.OBS.has(s.type) ? s.messageReference : void 0,
        K = (0, o.e7)([m.Z], () => m.Z.getMessageByReference(W)),
        Y = (0, o.e7)([h.Z], () => (s.type === R.uaV.THREAD_STARTER_MESSAGE && K.state === m.Y.LOADED ? h.Z.getChannel(K.message.channel_id) : null)),
        X = f.x4.useSetting(),
        q = f.RS.useSetting(),
        Q = f.NA.useSetting(),
        J = f.QK.useSetting(),
        $ = (0, u.A)((null != (n = s.editedTimestamp) ? n : s.timestamp).valueOf()),
        ee = (0, d.Z)(null == l ? void 0 : l.id),
        { disableReactionCreates: et } = (0, O.Z)(l),
        { content: en, hasSpoilerEmbeds: er } = (0, S.Z)(s, {
            hideSimpleEmbedContent: q && Q,
            allowList: $,
            allowHeading: $,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        ei = (0, v.ZP)(s),
        el = (0, o.e7)([h.Z], () => s.hasFlag(R.iLy.HAS_THREAD) && h.Z.getChannel(_.default.castMessageIdAsChannelId(s.id))),
        ea = s.type === R.uaV.THREAD_STARTER_MESSAGE && K.state === m.Y.LOADED && null != Y,
        eo = !ea && void 0 === i,
        es = (0, I.Z)({
            message: s,
            channel: l,
            enabled: eo
        }),
        ec = (0, c.v)(s),
        eu = (0, b.ro)(s.id, s.channel_id),
        ed = (0, p.Z)(s);
    return ea
        ? (0, r.jsx)(
              e,
              U(M({}, t), {
                  message: K.message,
                  channel: Y,
                  hasThread: !1
              })
          )
        : (g.Z.isBlockedForMessage(s) ? (i = k.t['+FcYMz']) : g.Z.isIgnoredForMessage(s) ? (i = k.t.VFWjc3) : (0, y.DQ)(s) && z && (i = k.t.xfkfTE), void 0 !== i)
          ? (0, r.jsx)(B, {
                className: D,
                compact: Z,
                count: 1,
                collapsedReason: i
            })
          : (0, r.jsx)(j.Z, {
                compact: Z,
                className: a()(D, {
                    [L.ephemeral]: (0, E.Pv)(s),
                    [L.disableInteraction]: H,
                    [L.groupStart]: t.isGroupStart
                }),
                childrenRepliedMessage: (0, w.Z)(s, l, W, K, Z),
                childrenHeader: (0, T.Z)(
                    U(M({}, t), {
                        author: ei,
                        guildId: l.guild_id
                    })
                ),
                childrenAccessories: (0, r.jsx)(C.BB, {
                    channel: l,
                    message: s,
                    hasSpoilerEmbeds: er,
                    compact: Z,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: et,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: V,
                    inlineAttachmentMedia: X,
                    inlineEmbedMedia: q,
                    renderEmbeds: Q,
                    gifAutoPlay: J,
                    poll: ed,
                    showListsAndHeaders: $,
                    showMaskedLinks: $,
                    shouldHideMediaOptions: ee,
                    enabledContentHarmTypeFlags: ec,
                    ctaButtonType: eu
                }),
                childrenExecutedCommand: (0, A.Z)(s, l, Z),
                childrenMessageContent: (0, N.Z)(t, en),
                childrenSystemMessage: (0, P.Z)(t),
                onContextMenu: F,
                onClick: G,
                hasThread: !1 !== V && null != el && s.hasFlag(R.iLy.HAS_THREAD),
                hasReply: s.type === R.uaV.REPLY,
                isSystemMessage: (0, x.Z)(s),
                messageRef: es,
                author: ei
            });
});
function B(e) {
    let { className: t, count: n, compact: i, collapsedReason: l } = e;
    return (0, r.jsx)(j.Z, {
        className: t,
        compact: i,
        role: 'group',
        childrenMessageContent: (0, r.jsx)(Z.Z, {
            compact: i,
            className: D.blockedSystemMessage,
            iconNode: (0, r.jsx)(s.Dio, {
                size: 'md',
                color: 'currentColor',
                className: D.blockedIcon
            }),
            children: (0, r.jsx)('div', {
                className: D.blockedMessageText,
                children: k.intl.format(l, { count: n })
            })
        })
    });
}
