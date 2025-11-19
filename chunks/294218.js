n.d(t, { Z: () => M });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(442837),
    c = n(518738),
    u = n(628238),
    d = n(869765),
    f = n(592125),
    _ = n(709054),
    p = n(786761),
    h = n(739566),
    m = n(492593),
    g = n(453687),
    E = n(25015),
    b = n(689674),
    y = n(438075),
    O = n(963550),
    v = n(845080),
    I = n(295790),
    T = n(145807),
    S = n(56744),
    A = n(981631),
    C = n(5898);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = L(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function x(e) {
    var t, n;
    let {
            message: i,
            compact: a = !1,
            className: N,
            onContextMenu: P,
            onClick: L,
            hideSimpleEmbedContent: x = !0,
            channel: M,
            isGroupStart: j,
            animateAvatar: k,
            subscribeToComponentDispatch: U,
            renderThreadAccessory: G,
            trackAnnouncementViews: B = !1,
        } = e,
        Z = w(e, [
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
        F = i.type === A.uaV.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        V = i.isFirstMessageInForumPost(M),
        H = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()),
        { content: Y, hasSpoilerEmbeds: W } = (0, E.Z)(i, {
            hideSimpleEmbedContent: x,
            allowList: V || H,
            allowHeading: V || H,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        K = i.type === A.uaV.REPLY ? i.messageReference : void 0,
        z = (0, l.e7)([d.Z], () => d.Z.getMessageByReference(K)),
        q = (0, s.JA)(i.id),
        X = (0, h.ZP)(i),
        Q = (0, l.e7)(
            [f.Z],
            () => i.hasFlag(A.iLy.HAS_THREAD) && f.Z.getChannel(_.default.castMessageIdAsChannelId(i.id)),
        ),
        J = (0, c.p9)({
            guildId: M.guild_id,
            roleId: X.iconRoleId,
        }),
        $ = (0, b.Z)({
            message: i,
            channel: M,
            enabled: B,
        }),
        ee = (0, g.iG)(i),
        et = (0, g.Gx)(i);
    return (0, r.jsx)(
        m.Z,
        R(
            {
                compact: a,
                className: o()(N, {
                    [C.ephemeral]: (0, p.Pv)(i),
                    [C.disableInteraction]: F,
                }),
                disableInteraction: F,
                childrenRepliedMessage: (0, S.Z)(i, M, K, z, a),
                childrenExecutedCommand: (0, T.Z)(i, M, a),
                childrenHeader: (0, v.Z)(
                    D(R({}, e), {
                        guildId: M.guild_id,
                        author: X,
                        roleIcon: J,
                    }),
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, y.Q)(e, W),
                childrenMessageContent: (0, O.Z)(e, Y),
                childrenSystemMessage: (0, I.Z)(D(R({}, e), { disableInteraction: F })),
                onContextMenu: P,
                onClick: L,
                hasThread: G && null != Q && i.hasFlag(A.iLy.HAS_THREAD),
                hasReply: i.type === A.uaV.REPLY,
                "aria-labelledby": ee,
                "aria-describedby": et,
                messageRef: $,
                author: X,
            },
            q,
            Z,
        ),
    );
}
let M = i.memo(x);
