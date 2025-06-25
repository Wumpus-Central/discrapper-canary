n.d(t, { Z: () => M });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    c = n(442837),
    s = n(518738),
    u = n(628238),
    d = n(869765),
    _ = n(592125),
    E = n(496675),
    I = n(709054),
    O = n(786761),
    T = n(900164),
    p = n(739566),
    N = n(492593),
    S = n(453687),
    f = n(25015),
    m = n(689674),
    A = n(438075),
    R = n(963550),
    g = n(845080),
    P = n(295790),
    C = n(145807),
    y = n(56744),
    b = n(981631),
    D = n(30804);
function h(e) {
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
let M = i.memo(function (e) {
    var t, n;
    let { message: i, compact: l = !1, className: M, onContextMenu: v, onClick: k, hideSimpleEmbedContent: L = !0, channel: Z, isGroupStart: j, animateAvatar: x, subscribeToComponentDispatch: F, renderThreadAccessory: V, trackAnnouncementViews: G = !1 } = e,
        w = (function (e, t) {
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
        B = i.type === b.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        W = i.isFirstMessageInForumPost(Z),
        z = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()),
        { content: H, hasSpoilerEmbeds: Y } = (0, f.Z)(i, {
            hideSimpleEmbedContent: L,
            allowList: W || z,
            allowHeading: W || z,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        K = i.type === b.uaV.REPLY ? i.messageReference : void 0,
        q = (0, c.e7)([d.Z], () => d.Z.getMessageByReference(K)),
        X = (0, a.JA)(i.id),
        J = (0, p.ZP)(i),
        Q = (0, c.e7)([_.Z], () => i.hasFlag(b.iLy.HAS_THREAD) && _.Z.getChannel(I.default.castMessageIdAsChannelId(i.id))),
        $ = (0, s.p9)({
            guildId: Z.guild_id,
            roleId: J.iconRoleId
        }),
        ee = (0, c.e7)([E.Z], () => E.Z.can(b.Plq.CREATE_INSTANT_INVITE, Z)),
        et = (0, m.Z)({
            message: i,
            channel: Z,
            enabled: G
        });
    if ((0, T.Z)(i, ee)) return null;
    let en = (0, S.iG)(i),
        er = (0, S.Gx)(i);
    return (0, r.jsx)(
        N.Z,
        h(
            {
                compact: l,
                className: o()(M, {
                    [D.ephemeral]: (0, O.Pv)(i),
                    [D.disableInteraction]: B
                }),
                disableInteraction: B,
                childrenRepliedMessage: (0, y.Z)(i, Z, K, q, l),
                childrenExecutedCommand: (0, C.Z)(i, Z, l),
                childrenHeader: (0, g.Z)(
                    U(h({}, e), {
                        guildId: Z.guild_id,
                        author: J,
                        roleIcon: $
                    })
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, A.Q)(e, Y),
                childrenMessageContent: (0, R.Z)(e, H),
                childrenSystemMessage: (0, P.Z)(U(h({}, e), { disableInteraction: B })),
                onContextMenu: v,
                onClick: k,
                hasThread: V && null != Q && i.hasFlag(b.iLy.HAS_THREAD),
                hasReply: i.type === b.uaV.REPLY,
                'aria-labelledby': en,
                'aria-describedby': er,
                messageRef: et,
                author: J
            },
            X,
            w
        )
    );
});
