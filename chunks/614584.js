n.d(t, { Z: () => R });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(25209),
    s = n(39154),
    l = n(627050),
    c = n(35125),
    u = n(905405),
    d = n(628238),
    f = n(499401),
    _ = n(693912),
    p = n(869765),
    h = n(699516),
    m = n(352736),
    g = n(937889),
    E = n(739566),
    b = n(267128),
    y = n(507418),
    O = n(348238),
    v = n(981631),
    I = n(388032);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = i.memo(function (e) {
    var t;
    let {
            baseMessage: n,
            referencedMessage: T,
            channel: A,
            compact: C = !1,
            referencedUsernameProfile: R,
            referencedAvatarProfile: P,
            setPopout: w,
            isReplySpineClickable: D,
            showReplySpine: L,
        } = e,
        x = T.state === p.Y.LOADED ? T.message : void 0,
        M = (0, E.Uj)(x),
        j = (0, u.p)(),
        k = l.d.useExperiment({ location: "repliedMessage" }).enabled,
        U = (0, d.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        G = i.useMemo(() => {
            if (null == x) return null;
            let e = (0, s.Z)(x);
            if (e.type === v.uaV.USER_JOIN)
                return (0, a.Rp)(
                    I.intl.formatToParts(m.Z.getSystemMessageUserJoin(e.id), {
                        username: null != M ? M.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === v.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, a.Rp)(
                    (0, c.PA)({
                        username: null != M ? M.nick : e.author.username,
                        guildId: null == A ? void 0 : A.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === v.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, a.Rp)(
                    (0, f.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick,
                    }),
                );
            if (e.type === v.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, a.Rp)(
                    (0, _.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick,
                    }),
                );
            if (e.type === v.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, a.Rp)(
                    (0, _.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick,
                    }),
                );
            else if (e.type === v.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
                return "" !== e.content ? e.content : I.intl.string(I.t.wnn1DQ);
            if (null != e.content && "" !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                        shouldFilterKeywords: j,
                    },
                    n = e.isFirstMessageInForumPost(A)
                        ? N(S({}, t), {
                              noStyleAndInteraction: !0,
                              allowHeading: !0,
                              allowList: !0,
                              allowGameMentions: k,
                          })
                        : N(S({}, t), {
                              formatInline: !0,
                              allowHeading: U,
                              allowList: U,
                              allowGameMentions: k,
                          });
                return (0, g.ZP)(e, n).content;
            }
            return null;
        }, [x, M, A, U, j, k]),
        { isReplyAuthorBlocked: B, isReplyAuthorIgnored: Z } = (0, o.cj)(
            [h.Z],
            () => ({
                isReplyAuthorBlocked: null != x && h.Z.isBlockedForMessage(x),
                isReplyAuthorIgnored: null != x && h.Z.isIgnoredForMessage(x),
            }),
            [x],
        ),
        F = (0, O.wq)(null == x ? void 0 : x.author.id, A.id),
        V = (0, O.$3)(n, x),
        H = (0, O.Wl)(x, A, R, w),
        Y = (0, O.rY)(P, w),
        W = i.useCallback(() => {
            w({
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [w]),
        K = (0, E.Uj)(n);
    return (0, r.jsx)(b.Z, {
        repliedAuthor: M,
        baseMessage: n,
        channel: A,
        baseAuthor: K,
        referencedMessage: T,
        content: G,
        compact: C,
        isReplyAuthorBlocked: B,
        isReplyAuthorIgnored: Z,
        showAvatarPopout: P,
        showUsernamePopout: R,
        renderPopout: y.Z,
        onClickAvatar: Y,
        onClickUsername: H,
        onClickReply: V,
        onContextMenu: F,
        onPopoutRequestClose: W,
        isReplySpineClickable: D,
        showReplySpine: L,
    });
});
function R(e) {
    let {
        message: t,
        channel: n,
        compact: i,
        setPopout: o,
        referencedUsernameProfile: a,
        referencedAvatarProfile: s,
        replyReference: l,
        replyMessage: c,
        isReplySpineClickable: u,
        showReplySpine: d = !0,
    } = e;
    return (
        null != l &&
        (0, r.jsx)(C, {
            baseMessage: t,
            replyReference: l,
            referencedMessage: c,
            channel: n,
            compact: i,
            setPopout: o,
            referencedUsernameProfile: a,
            referencedAvatarProfile: s,
            isReplySpineClickable: u,
            showReplySpine: d,
        })
    );
}
