n.d(t, { Z: () => Z });
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
    _ = n(900164),
    b = n(739566),
    x = n(492593),
    y = n(453687),
    E = n(25015),
    v = n(689674),
    N = n(438075),
    O = n(963550),
    j = n(845080),
    C = n(295790),
    S = n(145807),
    I = n(56744),
    T = n(981631),
    P = n(30804);
function A(e) {
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
function w(e, t) {
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
let Z = i.memo(function (e) {
    var t, n, i;
    let { message: l, compact: Z = !1, className: R, onContextMenu: k, onClick: D, hideSimpleEmbedContent: L = !0, channel: M, isGroupStart: W, animateAvatar: U, subscribeToComponentDispatch: F, renderThreadAccessory: B, trackAnnouncementViews: G = !1 } = e,
        H = (function (e, t) {
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
        V = l.type === T.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        z = l.isFirstMessageInForumPost(M),
        K = (0, u.A)((null != (n = l.editedTimestamp) ? n : l.timestamp).valueOf()),
        { content: Y, hasSpoilerEmbeds: X } = (0, E.Z)(l, {
            hideSimpleEmbedContent: L,
            allowList: z || K,
            allowHeading: z || K,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        q = l.type === T.uaV.REPLY ? l.messageReference : void 0,
        Q = (0, s.e7)([p.Z], () => p.Z.getMessageByReference(q)),
        J = (0, o.JA)(l.id),
        $ = (0, b.ZP)(l),
        ee = null != (i = l.getGuildId()) ? i : void 0,
        et = (0, d.Z)($),
        en = (0, s.e7)([m.Z], () => l.hasFlag(T.iLy.HAS_THREAD) && m.Z.getChannel(h.default.castMessageIdAsChannelId(l.id))),
        er = (0, c.p9)({
            guildId: M.guild_id,
            roleId: $.iconRoleId
        }),
        ei = (0, s.e7)([f.Z], () => f.Z.can(T.Plq.CREATE_INSTANT_INVITE, M)),
        el = (0, v.Z)({
            message: l,
            channel: M,
            enabled: G
        });
    if ((0, _.Z)(l, ei)) return null;
    let ea = (0, y.iG)(l),
        eo = (0, y.Gx)(l);
    return (0, r.jsx)(
        x.Z,
        A(
            {
                compact: Z,
                className: a()(R, {
                    [P.ephemeral]: (0, g.Pv)(l),
                    [P.disableInteraction]: V
                }),
                disableInteraction: V,
                childrenRepliedMessage: (0, I.Z)(l, M, q, Q, Z),
                childrenExecutedCommand: (0, S.Z)(l, M, Z),
                childrenHeader: (0, j.Z)(
                    w(A({}, e), {
                        guildId: M.guild_id,
                        author: $,
                        roleIcon: er
                    })
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, N.Q)(e, X),
                childrenMessageContent: (0, O.Z)(e, Y),
                childrenSystemMessage: (0, C.Z)(w(A({}, e), { disableInteraction: V })),
                onContextMenu: k,
                onClick: D,
                hasThread: B && null != en && l.hasFlag(T.iLy.HAS_THREAD),
                hasReply: l.type === T.uaV.REPLY,
                'aria-labelledby': ea,
                'aria-describedby': eo,
                messageRef: el,
                authorHasGradientRole: et,
                guildId: ee
            },
            J,
            H
        )
    );
});
