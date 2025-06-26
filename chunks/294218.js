n.d(t, { Z: () => M });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    s = n(442837),
    c = n(518738),
    u = n(628238),
    E = n(869765),
    d = n(592125),
    _ = n(496675),
    O = n(709054),
    I = n(786761),
    T = n(900164),
    N = n(739566),
    S = n(492593),
    p = n(453687),
    R = n(25015),
    A = n(689674),
    P = n(438075),
    C = n(963550),
    D = n(845080),
    f = n(295790),
    m = n(145807),
    y = n(56744),
    g = n(981631),
    h = n(30804);
function U(e) {
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
function b(e, t) {
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
    let { message: i, compact: l = !1, className: M, onContextMenu: k, onClick: Z, hideSimpleEmbedContent: j = !0, channel: v, isGroupStart: L, animateAvatar: F, subscribeToComponentDispatch: x, renderThreadAccessory: V, trackAnnouncementViews: G = !1 } = e,
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
        B = i.type === g.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        z = i.isFirstMessageInForumPost(v),
        W = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()),
        { content: Y, hasSpoilerEmbeds: H } = (0, R.Z)(i, {
            hideSimpleEmbedContent: j,
            allowList: z || W,
            allowHeading: z || W,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        K = i.type === g.uaV.REPLY ? i.messageReference : void 0,
        X = (0, s.e7)([E.Z], () => E.Z.getMessageByReference(K)),
        q = (0, a.JA)(i.id),
        J = (0, N.ZP)(i),
        Q = (0, s.e7)([d.Z], () => i.hasFlag(g.iLy.HAS_THREAD) && d.Z.getChannel(O.default.castMessageIdAsChannelId(i.id))),
        $ = (0, c.p9)({
            guildId: v.guild_id,
            roleId: J.iconRoleId
        }),
        ee = (0, s.e7)([_.Z], () => _.Z.can(g.Plq.CREATE_INSTANT_INVITE, v)),
        et = (0, A.Z)({
            message: i,
            channel: v,
            enabled: G
        });
    if ((0, T.Z)(i, ee)) return null;
    let en = (0, p.iG)(i),
        er = (0, p.Gx)(i);
    return (0, r.jsx)(
        S.Z,
        U(
            {
                compact: l,
                className: o()(M, {
                    [h.ephemeral]: (0, I.Pv)(i),
                    [h.disableInteraction]: B
                }),
                disableInteraction: B,
                childrenRepliedMessage: (0, y.Z)(i, v, K, X, l),
                childrenExecutedCommand: (0, m.Z)(i, v, l),
                childrenHeader: (0, D.Z)(
                    b(U({}, e), {
                        guildId: v.guild_id,
                        author: J,
                        roleIcon: $
                    })
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, P.Q)(e, H),
                childrenMessageContent: (0, C.Z)(e, Y),
                childrenSystemMessage: (0, f.Z)(b(U({}, e), { disableInteraction: B })),
                onContextMenu: k,
                onClick: Z,
                hasThread: V && null != Q && i.hasFlag(g.iLy.HAS_THREAD),
                hasReply: i.type === g.uaV.REPLY,
                'aria-labelledby': en,
                'aria-describedby': er,
                messageRef: et,
                author: J
            },
            q,
            w
        )
    );
});
