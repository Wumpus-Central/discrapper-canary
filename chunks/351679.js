n.d(t, { Z: () => N });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(442837),
    c = n(518738),
    u = n(628238),
    d = n(786761),
    p = n(739566),
    f = n(492593),
    g = n(453687),
    h = n(25015),
    m = n(438075),
    b = n(963550),
    _ = n(845080),
    E = n(295790),
    O = n(145807),
    v = n(592125),
    y = n(709054),
    I = n(981631),
    C = n(630573),
    S = n(548498);
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
        k = N.type === I.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        U = N.isFirstMessageInForumPost(Z),
        G = (0, u.A)((null != (n = N.editedTimestamp) ? n : N.timestamp).valueOf()),
        {
            content: B,
            hasSpoilerEmbeds: H,
            hasBailedAst: V,
        } = (0, h.Z)(N, {
            hideSimpleEmbedContent: A,
            allowList: U || G,
            allowHeading: U || G,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        F = (0, s.JA)(N.id),
        z = (0, p.ZP)(N),
        Y = (0, o.e7)(
            [v.Z],
            () => N.hasFlag(I.iLy.HAS_THREAD) && v.Z.getChannel(y.default.castMessageIdAsChannelId(N.id)),
        ),
        W = (0, c.p9)({
            guildId: Z.guild_id,
            roleId: z.iconRoleId,
        }),
        q = (0, g.iG)(N),
        K = (0, g.Gx)(N);
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
                childrenHeader: (0, _.Z)({
                    message: N,
                    channel: Z,
                    author: z,
                    guildId: Z.guild_id,
                    compact: !1,
                    animateAvatar: L,
                    isGroupStart: !0,
                    roleIcon: W,
                    hideTimestamp: !0,
                    hideGuildTag: !1,
                }),
                childrenAccessories: e.hideAccessories ? void 0 : (0, m.Q)(e, H, V),
                childrenMessageContent: (0, b.Z)(e, B),
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
                hasThread: D && null != Y && N.hasFlag(I.iLy.HAS_THREAD),
                hasReply: !1,
                "aria-labelledby": q,
                "aria-describedby": K,
                author: z,
            },
            F,
            M,
        ),
    );
});
