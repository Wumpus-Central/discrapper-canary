n.d(t, {
    A: () => j,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(837381),
    l = n(311907),
    c = n(201275),
    u = n(384231),
    d = n(9842),
    f = n(734057),
    p = n(661191),
    _ = n(141468),
    h = n(763754),
    m = n(491182),
    g = n(860227),
    E = n(538355),
    b = n(522871),
    y = n(699352),
    O = n(715628),
    A = n(752636),
    v = n(675722),
    S = n(268719),
    I = n(234957),
    T = n(652215),
    C = n(119907);

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

function w(e, t) {
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

function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = x(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function L(e) {
    var t, n;
    let {
            message: i,
            compact: a = !1,
            className: N,
            onContextMenu: w,
            onClick: x,
            hideSimpleEmbedContent: L = !0,
            channel: j,
            isGroupStart: M,
            animateAvatar: k,
            subscribeToComponentDispatch: U,
            renderThreadAccessory: G,
            trackAnnouncementViews: V = !1,
        } = e,
        F = D(e, [
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
        B = i.type === T.lAJ.POLL_RESULT || (null != (t = e.disableInteraction) && t),
        H = i.isFirstMessageInForumPost(j),
        Y = (0, u.S)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()),
        {
            content: W,
            hasSpoilerEmbeds: K,
            hasBailedAst: z,
        } = (0, E.A)(i, {
            hideSimpleEmbedContent: L,
            allowList: H || Y,
            allowHeading: H || Y,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        q = i.type === T.lAJ.REPLY ? i.messageReference : void 0,
        X = (0, l.bG)([d.A], () => d.A.getMessageByReference(q)),
        Z = (0, o.rm)(i.id),
        Q = (0, h.Ay)(i),
        $ = (0, l.bG)(
            [f.A],
            () => i.hasFlag(T.pr7.HAS_THREAD) && f.A.getChannel(p.default.castMessageIdAsChannelId(i.id)),
        ),
        J = (0, c.$7)({
            guildId: j.guild_id,
            roleId: Q.iconRoleId,
        }),
        ee = (0, b.A)({
            message: i,
            channel: j,
            enabled: V,
        }),
        et = (0, g.fF)(i),
        en = (0, g.ZD)(i);
    return (0, r.jsx)(
        m.A,
        R(
            {
                compact: a,
                className: s()(N, {
                    [C.M1]: (0, _.ec)(i),
                    [C.XN]: B,
                }),
                disableInteraction: B,
                childrenRepliedMessage: (0, I.A)(i, j, q, X, a),
                childrenExecutedCommand: (0, S.A)(i, j, a),
                childrenHeader: (0, A.A)(
                    P(R({}, e), {
                        guildId: j.guild_id,
                        author: Q,
                        roleIcon: J,
                    }),
                ),
                childrenAccessories: e.hideAccessories ? void 0 : (0, y.J)(e, K, z),
                childrenMessageContent: (0, O.A)(e, W),
                childrenSystemMessage: (0, v.A)(
                    P(R({}, e), {
                        disableInteraction: B,
                    }),
                ),
                onContextMenu: w,
                onClick: x,
                hasThread: G && null != $ && i.hasFlag(T.pr7.HAS_THREAD),
                hasReply: i.type === T.lAJ.REPLY,
                "aria-labelledby": et,
                "aria-describedby": en,
                messageRef: ee,
                author: Q,
            },
            Z,
            F,
        ),
    );
}
let j = i.memo(L);
