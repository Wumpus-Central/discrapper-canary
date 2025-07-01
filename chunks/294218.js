n.d(t, { Z: () => h });
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
    E = n(709054),
    O = n(786761),
    I = n(739566),
    T = n(492593),
    p = n(453687),
    S = n(25015),
    N = n(689674),
    A = n(438075),
    f = n(963550),
    m = n(845080),
    R = n(295790),
    g = n(145807),
    P = n(56744),
    C = n(981631),
    y = n(30804);
function b(e) {
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
function D(e, t) {
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
let h = i.memo(function (e) {
    var t, n;
    let { message: i, compact: l = !1, className: h, onContextMenu: U, onClick: M, hideSimpleEmbedContent: v = !0, channel: k, isGroupStart: L, animateAvatar: Z, subscribeToComponentDispatch: j, renderThreadAccessory: x, trackAnnouncementViews: F = !1 } = e,
        G = (function (e, t) {
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
        V = i.type === C.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        w = i.isFirstMessageInForumPost(k),
        B = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()),
        { content: W, hasSpoilerEmbeds: z } = (0, S.Z)(i, {
            hideSimpleEmbedContent: v,
            allowList: w || B,
            allowHeading: w || B,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        H = i.type === C.uaV.REPLY ? i.messageReference : void 0,
        Y = (0, c.e7)([d.Z], () => d.Z.getMessageByReference(H)),
        K = (0, a.JA)(i.id),
        q = (0, I.ZP)(i),
        X = (0, c.e7)([_.Z], () => i.hasFlag(C.iLy.HAS_THREAD) && _.Z.getChannel(E.default.castMessageIdAsChannelId(i.id))),
        J = (0, s.p9)({
            guildId: k.guild_id,
            roleId: q.iconRoleId
        }),
        Q = (0, N.Z)({
            message: i,
            channel: k,
            enabled: F
        }),
        $ = (0, p.iG)(i),
        ee = (0, p.Gx)(i);
    return (0, r.jsx)(
        T.Z,
        b(
            {
                compact: l,
                className: o()(h, {
                    [y.ephemeral]: (0, O.Pv)(i),
                    [y.disableInteraction]: V
                }),
                disableInteraction: V,
                childrenRepliedMessage: (0, P.Z)(i, k, H, Y, l),
                childrenExecutedCommand: (0, g.Z)(i, k, l),
                childrenHeader: (0, m.Z)(
                    D(b({}, e), {
                        guildId: k.guild_id,
                        author: q,
                        roleIcon: J
                    })
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, A.Q)(e, z),
                childrenMessageContent: (0, f.Z)(e, W),
                childrenSystemMessage: (0, R.Z)(D(b({}, e), { disableInteraction: V })),
                onContextMenu: U,
                onClick: M,
                hasThread: x && null != X && i.hasFlag(C.iLy.HAS_THREAD),
                hasReply: i.type === C.uaV.REPLY,
                'aria-labelledby': $,
                'aria-describedby': ee,
                messageRef: Q,
                author: q
            },
            K,
            G
        )
    );
});
