n.d(t, { Z: () => R });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(518738),
    u = n(628238),
    d = n(367814),
    p = n(869765),
    m = n(592125),
    f = n(496675),
    h = n(709054),
    g = n(786761),
    _ = n(750030),
    b = n(900164),
    x = n(739566),
    y = n(492593),
    E = n(453687),
    v = n(25015),
    O = n(689674),
    j = n(438075),
    C = n(963550),
    S = n(845080),
    I = n(295790),
    N = n(145807),
    T = n(56744),
    P = n(981631),
    A = n(30804);
function w(e) {
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
function Z(e, t) {
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
let R = i.memo(function (e) {
    var t, n;
    let { message: i, compact: l = !1, className: R, onContextMenu: k, onClick: D, hideSimpleEmbedContent: L = !0, channel: M, isGroupStart: U, animateAvatar: F, subscribeToComponentDispatch: B, renderThreadAccessory: G, trackAnnouncementViews: H = !1 } = e,
        V = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['message', 'compact', 'className', 'onContextMenu', 'onClick', 'hideSimpleEmbedContent', 'channel', 'isGroupStart', 'animateAvatar', 'subscribeToComponentDispatch', 'renderThreadAccessory', 'trackAnnouncementViews']),
        z = i.type === P.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        W = i.isFirstMessageInForumPost(M),
        K = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()),
        { content: Y, hasSpoilerEmbeds: X } = (0, v.Z)(i, {
            hideSimpleEmbedContent: L,
            allowList: W || K,
            allowHeading: W || K,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        q = i.type === P.uaV.REPLY ? i.messageReference : void 0,
        Q = (0, s.e7)([p.Z], () => p.Z.getMessageByReference(q)),
        J = (0, o.JA)(i.id),
        $ = (0, x.ZP)(i),
        ee = (0, _.k)(i),
        et = (0, d.Z)($),
        en = (0, s.e7)([m.Z], () => i.hasFlag(P.iLy.HAS_THREAD) && m.Z.getChannel(h.default.castMessageIdAsChannelId(i.id))),
        er = (0, c.p9)({
            guildId: M.guild_id,
            roleId: $.iconRoleId
        }),
        ei = (0, s.e7)([f.Z], () => f.Z.can(P.Plq.CREATE_INSTANT_INVITE, M)),
        el = (0, O.Z)({
            message: i,
            channel: M,
            enabled: H
        });
    if ((0, b.Z)(i, ei)) return null;
    let ea = (0, E.iG)(i),
        eo = (0, E.Gx)(i);
    return (0, r.jsx)(
        y.Z,
        w(
            {
                compact: l,
                className: a()(R, {
                    [A.ephemeral]: (0, g.Pv)(i),
                    [A.disableInteraction]: z
                }),
                disableInteraction: z,
                childrenRepliedMessage: (0, T.Z)(i, M, q, Q, l),
                childrenExecutedCommand: (0, N.Z)(i, M, l),
                childrenHeader: (0, S.Z)(
                    Z(w({}, e), {
                        guildId: M.guild_id,
                        author: $,
                        roleIcon: er
                    })
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, j.Q)(e, X),
                childrenMessageContent: (0, C.Z)(e, Y),
                childrenSystemMessage: (0, I.Z)(Z(w({}, e), { disableInteraction: z })),
                onContextMenu: k,
                onClick: D,
                hasThread: G && null != en && i.hasFlag(P.iLy.HAS_THREAD),
                hasReply: i.type === P.uaV.REPLY,
                'aria-labelledby': ea,
                'aria-describedby': eo,
                messageRef: el,
                authorHasGradientRole: et,
                guildId: ee
            },
            J,
            V
        )
    );
});
