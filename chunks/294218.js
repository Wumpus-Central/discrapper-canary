n.d(t, { Z: () => w });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(518738),
    u = n(628238),
    d = n(869765),
    p = n(592125),
    m = n(496675),
    f = n(709054),
    h = n(786761),
    g = n(900164),
    _ = n(739566),
    b = n(492593),
    E = n(453687),
    y = n(25015),
    x = n(689674),
    v = n(438075),
    O = n(963550),
    j = n(845080),
    C = n(295790),
    S = n(145807),
    I = n(56744),
    N = n(981631),
    T = n(30804);
function P(e) {
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
    let { message: i, compact: l = !1, className: w, onContextMenu: Z, onClick: R, hideSimpleEmbedContent: k = !0, channel: D, isGroupStart: L, animateAvatar: M, subscribeToComponentDispatch: U, renderThreadAccessory: F, trackAnnouncementViews: B = !1 } = e,
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
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['message', 'compact', 'className', 'onContextMenu', 'onClick', 'hideSimpleEmbedContent', 'channel', 'isGroupStart', 'animateAvatar', 'subscribeToComponentDispatch', 'renderThreadAccessory', 'trackAnnouncementViews']),
        H = i.type === N.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        V = i.isFirstMessageInForumPost(D),
        z = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()),
        { content: W, hasSpoilerEmbeds: K } = (0, y.Z)(i, {
            hideSimpleEmbedContent: k,
            allowList: V || z,
            allowHeading: V || z,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        Y = i.type === N.uaV.REPLY ? i.messageReference : void 0,
        X = (0, s.e7)([d.Z], () => d.Z.getMessageByReference(Y)),
        q = (0, o.JA)(i.id),
        Q = (0, _.ZP)(i),
        J = (0, s.e7)([p.Z], () => i.hasFlag(N.iLy.HAS_THREAD) && p.Z.getChannel(f.default.castMessageIdAsChannelId(i.id))),
        $ = (0, c.p9)({
            guildId: D.guild_id,
            roleId: Q.iconRoleId
        }),
        ee = (0, s.e7)([m.Z], () => m.Z.can(N.Plq.CREATE_INSTANT_INVITE, D)),
        et = (0, x.Z)({
            message: i,
            channel: D,
            enabled: B
        });
    if ((0, g.Z)(i, ee)) return null;
    let en = (0, E.iG)(i),
        er = (0, E.Gx)(i);
    return (0, r.jsx)(
        b.Z,
        P(
            {
                compact: l,
                className: a()(w, {
                    [T.ephemeral]: (0, h.Pv)(i),
                    [T.disableInteraction]: H
                }),
                disableInteraction: H,
                childrenRepliedMessage: (0, I.Z)(i, D, Y, X, l),
                childrenExecutedCommand: (0, S.Z)(i, D, l),
                childrenHeader: (0, j.Z)(
                    A(P({}, e), {
                        guildId: D.guild_id,
                        author: Q,
                        roleIcon: $
                    })
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, v.Q)(e, K),
                childrenMessageContent: (0, O.Z)(e, W),
                childrenSystemMessage: (0, C.Z)(A(P({}, e), { disableInteraction: H })),
                onContextMenu: Z,
                onClick: R,
                hasThread: F && null != J && i.hasFlag(N.iLy.HAS_THREAD),
                hasReply: i.type === N.uaV.REPLY,
                'aria-labelledby': en,
                'aria-describedby': er,
                messageRef: et,
                author: Q
            },
            q,
            G
        )
    );
});
