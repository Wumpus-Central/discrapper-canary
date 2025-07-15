n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    c = n(442837),
    s = n(518738),
    u = n(628238),
    d = n(869765),
    _ = n(592125),
    E = n(709054),
    I = n(786761),
    O = n(739566),
    p = n(492593),
    T = n(453687),
    S = n(25015),
    N = n(689674),
    f = n(438075),
    m = n(963550),
    A = n(845080),
    g = n(295790),
    R = n(145807),
    C = n(56744),
    P = n(981631),
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
    let { message: i, compact: l = !1, className: h, onContextMenu: U, onClick: M, hideSimpleEmbedContent: v = !0, channel: Z, isGroupStart: L, animateAvatar: j, subscribeToComponentDispatch: k, renderThreadAccessory: x, trackAnnouncementViews: F = !1 } = e,
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
        w = i.type === P.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        V = i.isFirstMessageInForumPost(Z),
        B = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()),
        { content: W, hasSpoilerEmbeds: H } = (0, S.Z)(i, {
            hideSimpleEmbedContent: v,
            allowList: V || B,
            allowHeading: V || B,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        z = i.type === P.uaV.REPLY ? i.messageReference : void 0,
        Y = (0, c.e7)([d.Z], () => d.Z.getMessageByReference(z)),
        K = (0, o.JA)(i.id),
        q = (0, O.ZP)(i),
        X = (0, c.e7)([_.Z], () => i.hasFlag(P.iLy.HAS_THREAD) && _.Z.getChannel(E.default.castMessageIdAsChannelId(i.id))),
        Q = (0, s.p9)({
            guildId: Z.guild_id,
            roleId: q.iconRoleId
        }),
        J = (0, N.Z)({
            message: i,
            channel: Z,
            enabled: F
        }),
        $ = (0, T.iG)(i),
        ee = (0, T.Gx)(i);
    return (0, r.jsx)(
        p.Z,
        b(
            {
                compact: l,
                className: a()(h, {
                    [y.ephemeral]: (0, I.Pv)(i),
                    [y.disableInteraction]: w
                }),
                disableInteraction: w,
                childrenRepliedMessage: (0, C.Z)(i, Z, z, Y, l),
                childrenExecutedCommand: (0, R.Z)(i, Z, l),
                childrenHeader: (0, A.Z)(
                    D(b({}, e), {
                        guildId: Z.guild_id,
                        author: q,
                        roleIcon: Q
                    })
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, f.Q)(e, H),
                childrenMessageContent: (0, m.Z)(e, W),
                childrenSystemMessage: (0, g.Z)(D(b({}, e), { disableInteraction: w })),
                onContextMenu: U,
                onClick: M,
                hasThread: x && null != X && i.hasFlag(P.iLy.HAS_THREAD),
                hasReply: i.type === P.uaV.REPLY,
                'aria-labelledby': $,
                'aria-describedby': ee,
                messageRef: J,
                author: q
            },
            K,
            G
        )
    );
});
