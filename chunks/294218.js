n.d(t, { Z: () => D });
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(91192),
    a = n(442837),
    c = n(518738),
    d = n(628238),
    u = n(869765),
    _ = n(592125),
    h = n(709054),
    E = n(786761),
    I = n(739566),
    p = n(492593),
    C = n(453687),
    g = n(25015),
    T = n(689674),
    O = n(438075),
    S = n(963550),
    N = n(845080),
    f = n(295790),
    R = n(145807),
    m = n(56744),
    A = n(981631),
    y = n(30804);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = r.memo(function (e) {
    var t, n;
    let { message: r, compact: l = !1, className: D, onContextMenu: v, onClick: U, hideSimpleEmbedContent: M = !0, channel: L, isGroupStart: Z, animateAvatar: k, subscribeToComponentDispatch: j, renderThreadAccessory: w, trackAnnouncementViews: x = !1 } = e,
        F = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) ((n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) ((n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['message', 'compact', 'className', 'onContextMenu', 'onClick', 'hideSimpleEmbedContent', 'channel', 'isGroupStart', 'animateAvatar', 'subscribeToComponentDispatch', 'renderThreadAccessory', 'trackAnnouncementViews']),
        G = r.type === A.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        V = r.isFirstMessageInForumPost(L),
        B = (0, d.A)((null != (n = r.editedTimestamp) ? n : r.timestamp).valueOf()),
        { content: W, hasSpoilerEmbeds: H } = (0, g.Z)(r, {
            hideSimpleEmbedContent: M,
            allowList: V || B,
            allowHeading: V || B,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        z = r.type === A.uaV.REPLY ? r.messageReference : void 0,
        Y = (0, a.e7)([u.Z], () => u.Z.getMessageByReference(z)),
        K = (0, s.JA)(r.id),
        q = (0, I.ZP)(r),
        X = (0, a.e7)([_.Z], () => r.hasFlag(A.iLy.HAS_THREAD) && _.Z.getChannel(h.default.castMessageIdAsChannelId(r.id))),
        J = (0, c.p9)({
            guildId: L.guild_id,
            roleId: q.iconRoleId
        }),
        Q = (0, T.Z)({
            message: r,
            channel: L,
            enabled: x
        }),
        $ = (0, C.iG)(r),
        ee = (0, C.Gx)(r);
    return (0, i.jsx)(
        p.Z,
        P(
            {
                compact: l,
                className: o()(D, {
                    [y.ephemeral]: (0, E.Pv)(r),
                    [y.disableInteraction]: G
                }),
                disableInteraction: G,
                childrenRepliedMessage: (0, m.Z)(r, L, z, Y, l),
                childrenExecutedCommand: (0, R.Z)(r, L, l),
                childrenHeader: (0, N.Z)(
                    b(P({}, e), {
                        guildId: L.guild_id,
                        author: q,
                        roleIcon: J
                    })
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, O.Q)(e, H),
                childrenMessageContent: (0, S.Z)(e, W),
                childrenSystemMessage: (0, f.Z)(b(P({}, e), { disableInteraction: G })),
                onContextMenu: v,
                onClick: U,
                hasThread: w && null != X && r.hasFlag(A.iLy.HAS_THREAD),
                hasReply: r.type === A.uaV.REPLY,
                'aria-labelledby': $,
                'aria-describedby': ee,
                messageRef: Q,
                author: q
            },
            K,
            F
        )
    );
});
