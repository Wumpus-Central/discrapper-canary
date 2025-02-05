n.d(t, { Z: () => w });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(25610),
    d = n(703751),
    u = n(628238),
    m = n(976853),
    _ = n(977683),
    h = n(869765),
    p = n(695346),
    g = n(592125),
    f = n(699516),
    x = n(709054),
    C = n(786761),
    v = n(493892),
    E = n(901461),
    I = n(739566),
    N = n(443877),
    S = n(492593),
    T = n(938353),
    b = n(25015),
    A = n(689674),
    j = n(963550),
    y = n(845080),
    Z = n(295790),
    R = n(145807),
    L = n(56744),
    P = n(834129),
    k = n(981631),
    M = n(388032),
    O = n(447817),
    D = n(46124);
let w = l.memo(function e(t) {
    var n;
    let l;
    let { channel: a, message: o, compact: P = !1, className: O, onContextMenu: w, onClick: U, disableInteraction: B = !1, hasThread: G, treatSpam: H } = t,
        V = k.OBS.has(o.type) ? o.messageReference : void 0,
        z = (0, s.e7)([h.Z], () => h.Z.getMessageByReference(V)),
        W = (0, s.e7)([g.Z], () => (o.type === k.uaV.THREAD_STARTER_MESSAGE && z.state === h.Y.LOADED ? g.Z.getChannel(z.message.channel_id) : null)),
        K = p.x4.useSetting(),
        Y = p.RS.useSetting(),
        X = p.NA.useSetting(),
        q = p.QK.useSetting(),
        Q = (0, u.A)((null !== (n = o.editedTimestamp) && void 0 !== n ? n : o.timestamp).valueOf()),
        J = (0, m.Z)(null == a ? void 0 : a.id),
        { disableReactionCreates: $ } = (0, N.Z)(a),
        { content: ee, hasSpoilerEmbeds: et } = (0, b.Z)(o, {
            hideSimpleEmbedContent: Y && X,
            allowList: Q,
            allowHeading: Q,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        en = (0, I.ZP)(o),
        ei = (0, s.e7)([g.Z], () => o.hasFlag(k.iLy.HAS_THREAD) && g.Z.getChannel(x.default.castMessageIdAsChannelId(o.id))),
        el = o.type === k.uaV.THREAD_STARTER_MESSAGE && z.state === h.Y.LOADED && null != W,
        ea = !el && void 0 === l,
        er = (0, A.Z)({
            message: o,
            channel: a,
            enabled: ea
        }),
        es = (0, c.V)(a.id, o.author.id),
        eo = (0, d.r)(o.id),
        ec = (0, _.Z)(o);
    return el
        ? (0, i.jsx)(e, {
              ...t,
              message: z.message,
              channel: W,
              hasThread: !1
          })
        : (f.Z.isBlockedForMessage(o) ? (l = M.t['+FcYMz']) : f.Z.isIgnoredForMessage(o) ? (l = M.t.VFWjc3) : (0, v.DQ)(o) && H && (l = M.t.xfkfTE), void 0 !== l)
          ? (0, i.jsx)(F, {
                className: O,
                compact: P,
                count: 1,
                collapsedReason: l
            })
          : (0, i.jsx)(S.Z, {
                compact: P,
                className: r()(O, {
                    [D.ephemeral]: (0, C.Pv)(o),
                    [D.disableInteraction]: B,
                    [D.groupStart]: t.isGroupStart
                }),
                childrenRepliedMessage: (0, L.Z)(o, a, V, z, P),
                childrenHeader: (0, y.Z)({
                    ...t,
                    author: en,
                    guildId: a.guild_id
                }),
                childrenAccessories: (0, i.jsx)(T.BB, {
                    channel: a,
                    message: o,
                    hasSpoilerEmbeds: et,
                    compact: P,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: $,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: G,
                    inlineAttachmentMedia: K,
                    inlineEmbedMedia: Y,
                    renderEmbeds: X,
                    gifAutoPlay: q,
                    poll: ec,
                    showListsAndHeaders: Q,
                    showMaskedLinks: Q,
                    shouldHideMediaOptions: J,
                    shouldRedactExplicitContent: es,
                    shouldRenderCtaButton: eo,
                    hasInlineForwardButton: !1
                }),
                childrenExecutedCommand: (0, R.Z)(o, a, P),
                childrenMessageContent: (0, j.Z)(t, ee),
                childrenSystemMessage: (0, Z.Z)(t),
                onContextMenu: w,
                onClick: U,
                hasThread: !1 !== G && null != ei && o.hasFlag(k.iLy.HAS_THREAD),
                hasReply: o.type === k.uaV.REPLY,
                isSystemMessage: (0, E.Z)(o),
                messageRef: er
            });
});
function F(e) {
    let { className: t, count: n, compact: l, collapsedReason: a } = e;
    return (0, i.jsx)(S.Z, {
        className: t,
        compact: l,
        role: 'group',
        childrenMessageContent: (0, i.jsx)(P.Z, {
            compact: l,
            className: O.blockedSystemMessage,
            iconNode: (0, i.jsx)(o.Dio, {
                size: 'md',
                color: 'currentColor',
                className: O.blockedIcon
            }),
            children: (0, i.jsx)('div', {
                className: O.blockedMessageText,
                children: M.intl.format(a, { count: n })
            })
        })
    });
}
