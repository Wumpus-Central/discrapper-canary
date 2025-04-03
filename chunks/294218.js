n.d(t, { Z: () => Z });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
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
    O = n(438075),
    N = n(963550),
    j = n(845080),
    C = n(295790),
    I = n(145807),
    S = n(56744),
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
    let { message: a, compact: Z = !1, className: k, onContextMenu: R, onClick: D, hideSimpleEmbedContent: L = !0, channel: M, isGroupStart: W, animateAvatar: U, subscribeToComponentDispatch: F, renderThreadAccessory: B, trackAnnouncementViews: G = !1 } = e,
        H = (function (e, t) {
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
        V = a.type === T.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        z = a.isFirstMessageInForumPost(M),
        K = (0, u.A)((null != (n = a.editedTimestamp) ? n : a.timestamp).valueOf()),
        { content: Y, hasSpoilerEmbeds: X } = (0, E.Z)(a, {
            hideSimpleEmbedContent: L,
            allowList: z || K,
            allowHeading: z || K,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        q = a.type === T.uaV.REPLY ? a.messageReference : void 0,
        Q = (0, s.e7)([p.Z], () => p.Z.getMessageByReference(q)),
        J = (0, o.JA)(a.id),
        $ = (0, b.ZP)(a),
        ee = null != (i = a.getGuildId()) ? i : void 0,
        et = (0, d.Z)($),
        en = (0, s.e7)([m.Z], () => a.hasFlag(T.iLy.HAS_THREAD) && m.Z.getChannel(h.default.castMessageIdAsChannelId(a.id))),
        er = (0, c.p9)({
            guildId: M.guild_id,
            roleId: $.iconRoleId
        }),
        ei = (0, s.e7)([f.Z], () => f.Z.can(T.Plq.CREATE_INSTANT_INVITE, M)),
        ea = (0, v.Z)({
            message: a,
            channel: M,
            enabled: G
        });
    if ((0, _.Z)(a, ei)) return null;
    let el = (0, y.iG)(a),
        eo = (0, y.Gx)(a);
    return (0, r.jsx)(
        x.Z,
        A(
            {
                compact: Z,
                className: l()(k, {
                    [P.ephemeral]: (0, g.Pv)(a),
                    [P.disableInteraction]: V
                }),
                disableInteraction: V,
                childrenRepliedMessage: (0, S.Z)(a, M, q, Q, Z),
                childrenExecutedCommand: (0, I.Z)(a, M, Z),
                childrenHeader: (0, j.Z)(
                    w(A({}, e), {
                        guildId: M.guild_id,
                        author: $,
                        roleIcon: er
                    })
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, O.Q)(e, X),
                childrenMessageContent: (0, N.Z)(e, Y),
                childrenSystemMessage: (0, C.Z)(w(A({}, e), { disableInteraction: V })),
                onContextMenu: R,
                onClick: D,
                hasThread: B && null != en && a.hasFlag(T.iLy.HAS_THREAD),
                hasReply: a.type === T.uaV.REPLY,
                'aria-labelledby': el,
                'aria-describedby': eo,
                messageRef: ea,
                authorHasGradientRole: et,
                guildId: ee
            },
            J,
            H
        )
    );
});
