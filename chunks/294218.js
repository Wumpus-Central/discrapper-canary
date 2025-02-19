n.d(t, { Z: () => w });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(91192),
    s = n(442837),
    c = n(518738),
    d = n(628238),
    u = n(869765),
    p = n(592125),
    m = n(496675),
    f = n(709054),
    h = n(786761),
    g = n(900164),
    _ = n(739566),
    b = n(492593),
    v = n(453687),
    y = n(25015),
    x = n(689674),
    O = n(438075),
    E = n(963550),
    j = n(845080),
    N = n(295790),
    C = n(145807),
    I = n(56744),
    S = n(981631),
    P = n(656017);
function T(e) {
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
function A(e, t) {
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
let w = i.memo(function (e) {
    var t, n;
    let { message: i, compact: a = !1, className: w, onContextMenu: Z, onClick: k, hideSimpleEmbedContent: R = !0, channel: L, isGroupStart: D, animateAvatar: M, subscribeToComponentDispatch: W, renderThreadAccessory: F, trackAnnouncementViews: U = !1 } = e,
        B = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['message', 'compact', 'className', 'onContextMenu', 'onClick', 'hideSimpleEmbedContent', 'channel', 'isGroupStart', 'animateAvatar', 'subscribeToComponentDispatch', 'renderThreadAccessory', 'trackAnnouncementViews']),
        G = i.type === S.uaV.POLL_RESULT || (null !== (t = e.disableInteraction) && void 0 !== t && t),
        H = i.isFirstMessageInForumPost(L),
        V = (0, d.A)((null !== (n = i.editedTimestamp) && void 0 !== n ? n : i.timestamp).valueOf()),
        { content: z, hasSpoilerEmbeds: K } = (0, y.Z)(i, {
            hideSimpleEmbedContent: R,
            allowList: H || V,
            allowHeading: H || V,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        Y = i.type === S.uaV.REPLY ? i.messageReference : void 0,
        X = (0, s.e7)([u.Z], () => u.Z.getMessageByReference(Y)),
        q = (0, l.JA)(i.id),
        Q = (0, _.ZP)(i),
        J = (0, s.e7)([p.Z], () => i.hasFlag(S.iLy.HAS_THREAD) && p.Z.getChannel(f.default.castMessageIdAsChannelId(i.id))),
        $ = (0, c.p9)({
            guildId: L.guild_id,
            roleId: Q.iconRoleId
        }),
        ee = (0, s.e7)([m.Z], () => m.Z.can(S.Plq.CREATE_INSTANT_INVITE, L)),
        et = (0, x.Z)({
            message: i,
            channel: L,
            enabled: U
        });
    if ((0, g.Z)(i, ee)) return null;
    let en = (0, v.iG)(i),
        er = (0, v.Gx)(i);
    return (0, r.jsx)(
        b.Z,
        T(
            {
                compact: a,
                className: o()(w, {
                    [P.ephemeral]: (0, h.Pv)(i),
                    [P.disableInteraction]: G
                }),
                disableInteraction: G,
                childrenRepliedMessage: (0, I.Z)(i, L, Y, X, a),
                childrenExecutedCommand: (0, C.Z)(i, L, a),
                childrenHeader: (0, j.Z)(
                    A(T({}, e), {
                        guildId: L.guild_id,
                        author: Q,
                        roleIcon: $
                    })
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, O.Q)(e, K),
                childrenMessageContent: (0, E.Z)(e, z),
                childrenSystemMessage: (0, N.Z)(A(T({}, e), { disableInteraction: G })),
                onContextMenu: Z,
                onClick: k,
                hasThread: F && null != J && i.hasFlag(S.iLy.HAS_THREAD),
                hasReply: i.type === S.uaV.REPLY,
                'aria-labelledby': en,
                'aria-describedby': er,
                messageRef: et
            },
            q,
            B
        )
    );
});
