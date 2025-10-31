n.d(t, { Z: () => N });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(442837),
    c = n(518738),
    u = n(628238),
    d = n(786761),
    p = n(739566),
    f = n(492593),
    m = n(453687),
    h = n(25015),
    g = n(438075),
    _ = n(963550),
    b = n(845080),
    E = n(295790),
    O = n(145807),
    I = n(592125),
    y = n(709054),
    v = n(981631),
    C = n(7938),
    S = n(360514);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let N = i.memo(function (e) {
    var t, n, i, l;
    let {
            message: N,
            className: j,
            onContextMenu: P,
            onClick: x,
            hideSimpleEmbedContent: A = !0,
            channel: Z,
            isGroupStart: w,
            animateAvatar: L,
            subscribeToComponentDispatch: R,
            renderThreadAccessory: D,
        } = e,
        M = (function (e, t) {
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, [
            "message",
            "className",
            "onContextMenu",
            "onClick",
            "hideSimpleEmbedContent",
            "channel",
            "isGroupStart",
            "animateAvatar",
            "subscribeToComponentDispatch",
            "renderThreadAccessory",
        ]),
        k = N.type === v.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        U = N.isFirstMessageInForumPost(Z),
        G = (0, u.A)((null != (n = N.editedTimestamp) ? n : N.timestamp).valueOf()),
        { content: B, hasSpoilerEmbeds: H } = (0, h.Z)(N, {
            hideSimpleEmbedContent: A,
            allowList: U || G,
            allowHeading: U || G,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        V = (0, s.JA)(N.id),
        F = (0, p.ZP)(N),
        z = (0, o.e7)(
            [I.Z],
            () => N.hasFlag(v.iLy.HAS_THREAD) && I.Z.getChannel(y.default.castMessageIdAsChannelId(N.id)),
        ),
        Y = (0, c.p9)({
            guildId: Z.guild_id,
            roleId: F.iconRoleId,
        }),
        W = (0, m.iG)(N),
        q = (0, m.Gx)(N);
    return (0, r.jsx)(
        f.Z,
        T(
            {
                compact: !1,
                className: a()(j, C.icymiMessageWrapper, {
                    [S.ephemeral]: (0, d.Pv)(N),
                    [S.disableInteraction]: k,
                }),
                disableInteraction: k,
                childrenExecutedCommand: (0, O.Z)(N, Z, !1),
                childrenHeader: (0, b.Z)({
                    message: N,
                    channel: Z,
                    author: F,
                    guildId: Z.guild_id,
                    compact: !1,
                    animateAvatar: L,
                    isGroupStart: !0,
                    roleIcon: Y,
                    hideTimestamp: !0,
                    hideGuildTag: !1,
                }),
                childrenAccessories: e.hideAccessories ? void 0 : (0, g.Q)(e, H),
                childrenMessageContent: (0, _.Z)(e, B),
                childrenSystemMessage: (0, E.Z)(
                    ((i = T({}, e)),
                    (l = l = { disableInteraction: k }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    i),
                ),
                onContextMenu: P,
                onClick: x,
                hasThread: D && null != z && N.hasFlag(v.iLy.HAS_THREAD),
                hasReply: !1,
                "aria-labelledby": W,
                "aria-describedby": q,
                author: F,
            },
            V,
            M,
        ),
    );
});
