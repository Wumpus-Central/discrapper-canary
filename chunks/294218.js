n.d(t, { Z: () => Z });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(91192),
    o = n(442837),
    c = n(518738),
    d = n(628238),
    u = n(869765),
    m = n(592125),
    h = n(496675),
    _ = n(709054),
    p = n(786761),
    g = n(900164),
    f = n(739566),
    x = n(492593),
    E = n(453687),
    C = n(25015),
    v = n(689674),
    I = n(438075),
    N = n(963550),
    S = n(845080),
    T = n(295790),
    b = n(145807),
    A = n(56744),
    j = n(981631),
    y = n(46124);
let Z = l.memo(function (e) {
    var t, n;
    let { message: l, compact: a = !1, className: Z, onContextMenu: R, onClick: L, hideSimpleEmbedContent: P = !0, channel: k, isGroupStart: M, animateAvatar: O, subscribeToComponentDispatch: D, renderThreadAccessory: w, trackAnnouncementViews: F = !1, ...U } = e,
        B = l.type === j.uaV.POLL_RESULT || (null !== (t = e.disableInteraction) && void 0 !== t && t),
        G = l.isFirstMessageInForumPost(k),
        H = (0, d.A)((null !== (n = l.editedTimestamp) && void 0 !== n ? n : l.timestamp).valueOf()),
        { content: V, hasSpoilerEmbeds: z } = (0, C.Z)(l, {
            hideSimpleEmbedContent: P,
            allowList: G || H,
            allowHeading: G || H,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        W = l.type === j.uaV.REPLY ? l.messageReference : void 0,
        K = (0, o.e7)([u.Z], () => u.Z.getMessageByReference(W)),
        Y = (0, s.JA)(l.id),
        X = (0, f.ZP)(l),
        q = (0, o.e7)([m.Z], () => l.hasFlag(j.iLy.HAS_THREAD) && m.Z.getChannel(_.default.castMessageIdAsChannelId(l.id))),
        Q = (0, c.p9)({
            guildId: k.guild_id,
            roleId: X.iconRoleId
        }),
        J = (0, o.e7)([h.Z], () => h.Z.can(j.Plq.CREATE_INSTANT_INVITE, k)),
        $ = (0, v.Z)({
            message: l,
            channel: k,
            enabled: F
        });
    if ((0, g.Z)(l, J)) return null;
    let ee = (0, E.iG)(l),
        et = (0, E.Gx)(l);
    return (0, i.jsx)(x.Z, {
        compact: a,
        className: r()(Z, {
            [y.ephemeral]: (0, p.Pv)(l),
            [y.disableInteraction]: B
        }),
        disableInteraction: B,
        childrenRepliedMessage: (0, A.Z)(l, k, W, K, a),
        childrenExecutedCommand: (0, b.Z)(l, k, a),
        childrenHeader: (0, S.Z)({
            ...e,
            guildId: k.guild_id,
            author: X,
            roleIcon: Q
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, I.Q)(e, z),
        childrenMessageContent: (0, N.Z)(e, V),
        childrenSystemMessage: (0, T.Z)({
            ...e,
            disableInteraction: B
        }),
        onContextMenu: R,
        onClick: L,
        hasThread: w && null != q && l.hasFlag(j.iLy.HAS_THREAD),
        hasReply: l.type === j.uaV.REPLY,
        'aria-labelledby': ee,
        'aria-describedby': et,
        messageRef: $,
        ...Y,
        ...U
    });
});
