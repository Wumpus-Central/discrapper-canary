n.d(t, { Z: () => D });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(518738),
    u = n(628238),
    d = n(869765),
    _ = n(592125),
    E = n(709054),
    p = n(786761),
    O = n(739566),
    S = n(492593),
    I = n(453687),
    f = n(25015),
    h = n(689674),
    T = n(438075),
    m = n(963550),
    g = n(845080),
    N = n(295790),
    y = n(145807),
    R = n(56744),
    A = n(981631),
    b = n(30804);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function P(e, t) {
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
let D = i.memo(function (e) {
    var t, n;
    let { message: i, compact: l = !1, className: D, onContextMenu: M, onClick: j, hideSimpleEmbedContent: x = !0, channel: v, isGroupStart: k, animateAvatar: Z, subscribeToComponentDispatch: L, renderThreadAccessory: U, trackAnnouncementViews: F = !1 } = e,
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
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['message', 'compact', 'className', 'onContextMenu', 'onClick', 'hideSimpleEmbedContent', 'channel', 'isGroupStart', 'animateAvatar', 'subscribeToComponentDispatch', 'renderThreadAccessory', 'trackAnnouncementViews']),
        G = i.type === A.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        V = i.isFirstMessageInForumPost(v),
        B = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()),
        { content: W, hasSpoilerEmbeds: H } = (0, f.Z)(i, {
            hideSimpleEmbedContent: x,
            allowList: V || B,
            allowHeading: V || B,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        z = i.type === A.uaV.REPLY ? i.messageReference : void 0,
        Y = (0, s.e7)([d.Z], () => d.Z.getMessageByReference(z)),
        K = (0, o.JA)(i.id),
        q = (0, O.ZP)(i),
        Q = (0, s.e7)([_.Z], () => i.hasFlag(A.iLy.HAS_THREAD) && _.Z.getChannel(E.default.castMessageIdAsChannelId(i.id))),
        X = (0, c.p9)({
            guildId: v.guild_id,
            roleId: q.iconRoleId
        }),
        J = (0, h.Z)({
            message: i,
            channel: v,
            enabled: F
        }),
        $ = (0, I.iG)(i),
        ee = (0, I.Gx)(i);
    return (0, r.jsx)(
        S.Z,
        C(
            {
                compact: l,
                className: a()(D, {
                    [b.ephemeral]: (0, p.Pv)(i),
                    [b.disableInteraction]: G
                }),
                disableInteraction: G,
                childrenRepliedMessage: (0, R.Z)(i, v, z, Y, l),
                childrenExecutedCommand: (0, y.Z)(i, v, l),
                childrenHeader: (0, g.Z)(
                    P(C({}, e), {
                        guildId: v.guild_id,
                        author: q,
                        roleIcon: X
                    })
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, T.Q)(e, H),
                childrenMessageContent: (0, m.Z)(e, W),
                childrenSystemMessage: (0, N.Z)(P(C({}, e), { disableInteraction: G })),
                onContextMenu: M,
                onClick: j,
                hasThread: U && null != Q && i.hasFlag(A.iLy.HAS_THREAD),
                hasReply: i.type === A.uaV.REPLY,
                'aria-labelledby': $,
                'aria-describedby': ee,
                messageRef: J,
                author: q
            },
            K,
            w
        )
    );
});
