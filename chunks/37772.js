n.d(t, { Z: () => F });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    s = n(481060),
    c = n(25610),
    d = n(703751),
    u = n(628238),
    p = n(976853),
    m = n(977683),
    f = n(869765),
    h = n(695346),
    g = n(592125),
    _ = n(699516),
    b = n(709054),
    v = n(786761),
    y = n(493892),
    x = n(901461),
    O = n(739566),
    E = n(443877),
    j = n(492593),
    N = n(938353),
    C = n(25015),
    I = n(689674),
    S = n(963550),
    P = n(845080),
    T = n(295790),
    A = n(145807),
    w = n(56744),
    Z = n(834129),
    k = n(981631),
    R = n(388032),
    L = n(527173),
    D = n(656017);
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
function W(e, t) {
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
    let i;
    let { channel: a, message: s, compact: Z = !1, className: L, onContextMenu: F, onClick: B, disableInteraction: G = !1, hasThread: H, treatSpam: V } = t,
        z = k.OBS.has(s.type) ? s.messageReference : void 0,
        K = (0, l.e7)([f.Z], () => f.Z.getMessageByReference(z)),
        Y = (0, l.e7)([g.Z], () => (s.type === k.uaV.THREAD_STARTER_MESSAGE && K.state === f.Y.LOADED ? g.Z.getChannel(K.message.channel_id) : null)),
        X = h.x4.useSetting(),
        q = h.RS.useSetting(),
        Q = h.NA.useSetting(),
        J = h.QK.useSetting(),
        $ = (0, u.A)((null !== (n = s.editedTimestamp) && void 0 !== n ? n : s.timestamp).valueOf()),
        ee = (0, p.Z)(null == a ? void 0 : a.id),
        { disableReactionCreates: et } = (0, E.Z)(a),
        { content: en, hasSpoilerEmbeds: er } = (0, C.Z)(s, {
            hideSimpleEmbedContent: q && Q,
            allowList: $,
            allowHeading: $,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        ei = (0, O.ZP)(s),
        ea = (0, l.e7)([g.Z], () => s.hasFlag(k.iLy.HAS_THREAD) && g.Z.getChannel(b.default.castMessageIdAsChannelId(s.id))),
        eo = s.type === k.uaV.THREAD_STARTER_MESSAGE && K.state === f.Y.LOADED && null != Y,
        el = !eo && void 0 === i,
        es = (0, I.Z)({
            message: s,
            channel: a,
            enabled: el
        }),
        ec = (0, c.V)(a.id, s.author.id),
        ed = (0, d.r)(s.id),
        eu = (0, m.Z)(s);
    return eo
        ? (0, r.jsx)(
              e,
              W(M({}, t), {
                  message: K.message,
                  channel: Y,
                  hasThread: !1
              })
          )
        : (_.Z.isBlockedForMessage(s) ? (i = R.t['+FcYMz']) : _.Z.isIgnoredForMessage(s) ? (i = R.t.VFWjc3) : (0, y.DQ)(s) && V && (i = R.t.xfkfTE), void 0 !== i)
          ? (0, r.jsx)(U, {
                className: L,
                compact: Z,
                count: 1,
                collapsedReason: i
            })
          : (0, r.jsx)(j.Z, {
                compact: Z,
                className: o()(L, {
                    [D.ephemeral]: (0, v.Pv)(s),
                    [D.disableInteraction]: G,
                    [D.groupStart]: t.isGroupStart
                }),
                childrenRepliedMessage: (0, w.Z)(s, a, z, K, Z),
                childrenHeader: (0, P.Z)(
                    W(M({}, t), {
                        author: ei,
                        guildId: a.guild_id
                    })
                ),
                childrenAccessories: (0, r.jsx)(N.BB, {
                    channel: a,
                    message: s,
                    hasSpoilerEmbeds: er,
                    compact: Z,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: et,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: H,
                    inlineAttachmentMedia: X,
                    inlineEmbedMedia: q,
                    renderEmbeds: Q,
                    gifAutoPlay: J,
                    poll: eu,
                    showListsAndHeaders: $,
                    showMaskedLinks: $,
                    shouldHideMediaOptions: ee,
                    shouldRedactExplicitContent: ec,
                    shouldRenderCtaButton: ed,
                    hasInlineForwardButton: !1
                }),
                childrenExecutedCommand: (0, A.Z)(s, a, Z),
                childrenMessageContent: (0, S.Z)(t, en),
                childrenSystemMessage: (0, T.Z)(t),
                onContextMenu: F,
                onClick: B,
                hasThread: !1 !== H && null != ea && s.hasFlag(k.iLy.HAS_THREAD),
                hasReply: s.type === k.uaV.REPLY,
                isSystemMessage: (0, x.Z)(s),
                messageRef: es
            });
});
function U(e) {
    let { className: t, count: n, compact: i, collapsedReason: a } = e;
    return (0, r.jsx)(j.Z, {
        className: t,
        compact: i,
        role: 'group',
        childrenMessageContent: (0, r.jsx)(Z.Z, {
            compact: i,
            className: L.blockedSystemMessage,
            iconNode: (0, r.jsx)(s.Dio, {
                size: 'md',
                color: 'currentColor',
                className: L.blockedIcon
            }),
            children: (0, r.jsx)('div', {
                className: L.blockedMessageText,
                children: R.NW.format(a, { count: n })
            })
        })
    });
}
