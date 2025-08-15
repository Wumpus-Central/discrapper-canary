n.d(t, { Z: () => b });
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
    T = n(739566),
    O = n(492593),
    p = n(453687),
    N = n(25015),
    f = n(689674),
    S = n(438075),
    m = n(963550),
    R = n(845080),
    A = n(295790),
    g = n(145807),
    P = n(56744),
    C = n(981631),
    D = n(360514);
function y(e) {
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
function h(e, t) {
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
let b = i.memo(function (e) {
    var t, n;
    let {
            message: i,
            compact: l = !1,
            className: b,
            onContextMenu: U,
            onClick: M,
            hideSimpleEmbedContent: v = !0,
            channel: Z,
            isGroupStart: L,
            animateAvatar: k,
            subscribeToComponentDispatch: j,
            renderThreadAccessory: x,
            trackAnnouncementViews: F = !1,
        } = e,
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, [
            "message",
            "compact",
            "className",
            "onContextMenu",
            "onClick",
            "hideSimpleEmbedContent",
            "channel",
            "isGroupStart",
            "animateAvatar",
            "subscribeToComponentDispatch",
            "renderThreadAccessory",
            "trackAnnouncementViews",
        ]),
        V = i.type === C.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        w = i.isFirstMessageInForumPost(Z),
        B = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()),
        { content: H, hasSpoilerEmbeds: W } = (0, N.Z)(i, {
            hideSimpleEmbedContent: v,
            allowList: w || B,
            allowHeading: w || B,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        Y = i.type === C.uaV.REPLY ? i.messageReference : void 0,
        K = (0, c.e7)([d.Z], () => d.Z.getMessageByReference(Y)),
        z = (0, o.JA)(i.id),
        q = (0, T.ZP)(i),
        X = (0, c.e7)(
            [_.Z],
            () => i.hasFlag(C.iLy.HAS_THREAD) && _.Z.getChannel(E.default.castMessageIdAsChannelId(i.id)),
        ),
        J = (0, s.p9)({
            guildId: Z.guild_id,
            roleId: q.iconRoleId,
        }),
        Q = (0, f.Z)({
            message: i,
            channel: Z,
            enabled: F,
        }),
        $ = (0, p.iG)(i),
        ee = (0, p.Gx)(i);
    return (0, r.jsx)(
        O.Z,
        y(
            {
                compact: l,
                className: a()(b, {
                    [D.ephemeral]: (0, I.Pv)(i),
                    [D.disableInteraction]: V,
                }),
                disableInteraction: V,
                childrenRepliedMessage: (0, P.Z)(i, Z, Y, K, l),
                childrenExecutedCommand: (0, g.Z)(i, Z, l),
                childrenHeader: (0, R.Z)(
                    h(y({}, e), {
                        guildId: Z.guild_id,
                        author: q,
                        roleIcon: J,
                    }),
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, S.Q)(e, W),
                childrenMessageContent: (0, m.Z)(e, H),
                childrenSystemMessage: (0, A.Z)(h(y({}, e), { disableInteraction: V })),
                onContextMenu: U,
                onClick: M,
                hasThread: x && null != X && i.hasFlag(C.iLy.HAS_THREAD),
                hasReply: i.type === C.uaV.REPLY,
                "aria-labelledby": $,
                "aria-describedby": ee,
                messageRef: Q,
                author: q,
            },
            z,
            G,
        ),
    );
});
