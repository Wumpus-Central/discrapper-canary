var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(518738),
    d = n(628238),
    u = n(869765),
    m = n(592125),
    h = n(496675),
    f = n(709054),
    p = n(786761),
    _ = n(900164),
    g = n(739566),
    E = n(492593),
    C = n(453687),
    I = n(25015),
    x = n(689674),
    N = n(438075),
    v = n(963550),
    T = n(845080),
    S = n(295790),
    A = n(145807),
    b = n(56744),
    j = n(981631),
    R = n(46124);
t.Z = r.memo(function (e) {
    var t, n;
    let { message: r, compact: l = !1, className: Z, onContextMenu: P, onClick: L, hideSimpleEmbedContent: y = !0, channel: O, isGroupStart: M, animateAvatar: k, subscribeToComponentDispatch: D, renderThreadAccessory: B, trackAnnouncementViews: U = !1, ...w } = e,
        F = r.type === j.uaV.POLL_RESULT || (null !== (t = e.disableInteraction) && void 0 !== t && t),
        G = r.isFirstMessageInForumPost(O),
        V = (0, d.A)((null !== (n = r.editedTimestamp) && void 0 !== n ? n : r.timestamp).valueOf()),
        { content: H, hasSpoilerEmbeds: z } = (0, I.Z)(r, {
            hideSimpleEmbedContent: y,
            allowList: G || V,
            allowHeading: G || V,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        W = r.type === j.uaV.REPLY ? r.messageReference : void 0,
        K = (0, s.e7)([u.Z], () => u.Z.getMessageByReference(W)),
        Y = (0, o.JA)(r.id),
        X = (0, g.ZP)(r),
        Q = (0, s.e7)([m.Z], () => r.hasFlag(j.iLy.HAS_THREAD) && m.Z.getChannel(f.default.castMessageIdAsChannelId(r.id))),
        q = (0, c.p9)({
            guildId: O.guild_id,
            roleId: X.iconRoleId
        }),
        J = (0, s.e7)([h.Z], () => h.Z.can(j.Plq.CREATE_INSTANT_INVITE, O)),
        $ = (0, x.Z)({
            message: r,
            channel: O,
            enabled: U
        });
    if ((0, _.Z)(r, J)) return null;
    let ee = (0, C.iG)(r),
        et = (0, C.Gx)(r);
    return (0, i.jsx)(E.Z, {
        compact: l,
        className: a()(Z, {
            [R.ephemeral]: (0, p.Pv)(r),
            [R.disableInteraction]: F
        }),
        disableInteraction: F,
        childrenRepliedMessage: (0, b.Z)(r, O, W, K, l),
        childrenExecutedCommand: (0, A.Z)(r, O, l),
        childrenHeader: (0, T.Z)({
            ...e,
            guildId: O.guild_id,
            author: X,
            roleIcon: q
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, N.Q)(e, z),
        childrenMessageContent: (0, v.Z)(e, H),
        childrenSystemMessage: (0, S.Z)({
            ...e,
            disableInteraction: F
        }),
        onContextMenu: P,
        onClick: L,
        hasThread: B && null != Q && r.hasFlag(j.iLy.HAS_THREAD),
        hasReply: r.type === j.uaV.REPLY,
        'aria-labelledby': ee,
        'aria-describedby': et,
        messageRef: $,
        ...Y,
        ...w
    });
});
