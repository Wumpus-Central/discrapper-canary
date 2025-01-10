var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(25610),
    u = n(703751),
    d = n(628238),
    m = n(976853),
    h = n(977683),
    f = n(869765),
    p = n(695346),
    _ = n(592125),
    g = n(699516),
    E = n(709054),
    C = n(786761),
    I = n(493892),
    x = n(901461),
    N = n(739566),
    v = n(443877),
    T = n(492593),
    S = n(938353),
    A = n(25015),
    b = n(689674),
    j = n(963550),
    R = n(845080),
    Z = n(295790),
    P = n(145807),
    L = n(56744),
    y = n(834129),
    O = n(981631),
    M = n(388032),
    k = n(447817),
    D = n(46124);
function B(e) {
    let { className: t, count: n, compact: r, collapsedReason: l } = e;
    return (0, i.jsx)(T.Z, {
        className: t,
        compact: r,
        role: 'group',
        childrenMessageContent: (0, i.jsx)(y.Z, {
            compact: r,
            className: k.blockedSystemMessage,
            iconNode: (0, i.jsx)(s.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: k.blockedIcon
            }),
            children: (0, i.jsx)('div', {
                className: k.blockedMessageText,
                children: M.intl.format(l, { count: n })
            })
        })
    });
}
t.Z = r.memo(function e(t) {
    var n;
    let r;
    let { channel: l, message: s, compact: y = !1, className: k, onContextMenu: U, onClick: w, disableInteraction: F = !1, hasThread: G, treatSpam: V } = t,
        H = O.OBS.has(s.type) ? s.messageReference : void 0,
        z = (0, o.e7)([f.Z], () => f.Z.getMessageByReference(H)),
        W = (0, o.e7)([_.Z], () => (s.type === O.uaV.THREAD_STARTER_MESSAGE && z.state === f.Y.LOADED ? _.Z.getChannel(z.message.channel_id) : null)),
        K = p.x4.useSetting(),
        Y = p.RS.useSetting(),
        X = p.NA.useSetting(),
        Q = p.QK.useSetting(),
        q = (0, d.A)((null !== (n = s.editedTimestamp) && void 0 !== n ? n : s.timestamp).valueOf()),
        J = (0, m.Z)(null == l ? void 0 : l.id),
        { disableReactionCreates: $ } = (0, v.Z)(l),
        { content: ee, hasSpoilerEmbeds: et } = (0, A.Z)(s, {
            hideSimpleEmbedContent: Y && X,
            allowList: q,
            allowHeading: q,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        en = (0, N.ZP)(s),
        ei = (0, o.e7)([_.Z], () => s.hasFlag(O.iLy.HAS_THREAD) && _.Z.getChannel(E.default.castMessageIdAsChannelId(s.id))),
        er = s.type === O.uaV.THREAD_STARTER_MESSAGE && z.state === f.Y.LOADED && null != W,
        el = !er && void 0 === r,
        ea = (0, b.Z)({
            message: s,
            channel: l,
            enabled: el
        }),
        eo = (0, c.V)(l.id, s.author.id),
        es = (0, u.r)(s.id),
        ec = (0, h.Z)(s);
    return er
        ? (0, i.jsx)(e, {
              ...t,
              message: z.message,
              channel: W,
              hasThread: !1
          })
        : (g.Z.isBlockedForMessage(s) ? (r = M.t['+FcYMz']) : g.Z.isIgnoredForMessage(s) ? (r = M.t.VFWjc3) : (0, I.DQ)(s) && V && (r = M.t.xfkfTE), void 0 !== r)
          ? (0, i.jsx)(B, {
                className: k,
                compact: y,
                count: 1,
                collapsedReason: r
            })
          : (0, i.jsx)(T.Z, {
                compact: y,
                className: a()(k, {
                    [D.ephemeral]: (0, C.Pv)(s),
                    [D.disableInteraction]: F,
                    [D.groupStart]: t.isGroupStart
                }),
                childrenRepliedMessage: (0, L.Z)(s, l, H, z, y),
                childrenHeader: (0, R.Z)({
                    ...t,
                    author: en,
                    guildId: l.guild_id
                }),
                childrenAccessories: (0, i.jsx)(S.BB, {
                    channel: l,
                    message: s,
                    hasSpoilerEmbeds: et,
                    compact: y,
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
                    gifAutoPlay: Q,
                    poll: ec,
                    showListsAndHeaders: q,
                    showMaskedLinks: q,
                    shouldHideMediaOptions: J,
                    shouldRedactExplicitContent: eo,
                    shouldRenderCtaButton: es,
                    hasInlineForwardButton: !1
                }),
                childrenExecutedCommand: (0, P.Z)(s, l, y),
                childrenMessageContent: (0, j.Z)(t, ee),
                childrenSystemMessage: (0, Z.Z)(t),
                onContextMenu: U,
                onClick: w,
                hasThread: !1 !== G && null != ei && s.hasFlag(O.iLy.HAS_THREAD),
                hasReply: s.type === O.uaV.REPLY,
                isSystemMessage: (0, x.Z)(s),
                messageRef: ea
            });
});
