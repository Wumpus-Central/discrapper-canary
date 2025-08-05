n.d(t, { Z: () => C });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(25209),
    s = n(39154),
    l = n(35125),
    c = n(905405),
    u = n(628238),
    d = n(499401),
    f = n(693912),
    _ = n(869765),
    p = n(699516),
    h = n(352736),
    m = n(937889),
    g = n(739566),
    E = n(267128),
    b = n(507418),
    y = n(348238),
    O = n(981631),
    v = n(388032);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            }));
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = i.memo(function (e) {
    var t;
    let { baseMessage: n, referencedMessage: I, channel: S, compact: N = !1, referencedUsernameProfile: C, referencedAvatarProfile: w, setPopout: R, isReplySpineClickable: P, showReplySpine: D } = e,
        L = I.state === _.Y.LOADED ? I.message : void 0,
        x = (0, g.Uj)(L),
        k = (0, c.p)(),
        j = (0, u.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        M = i.useMemo(() => {
            if (null == L) return null;
            let e = (0, s.Z)(L);
            if (e.type === O.uaV.USER_JOIN)
                return (0, o.Rp)(
                    v.intl.formatToParts(h.Z.getSystemMessageUserJoin(e.id), {
                        username: null != x ? x.nick : e.author.username,
                        usernameHook: (e) => e
                    })
                );
            if (e.type === O.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, o.Rp)(
                    (0, l.PA)({
                        username: null != x ? x.nick : e.author.username,
                        guildId: null == S ? void 0 : S.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData
                    })
                );
            if (e.type === O.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, o.Rp)(
                    (0, d.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == x ? void 0 : x.nick
                    })
                );
            if (e.type === O.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, o.Rp)(
                    (0, f.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == x ? void 0 : x.nick
                    })
                );
            if (e.type === O.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, o.Rp)(
                    (0, f.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == x ? void 0 : x.nick
                    })
                );
            else if (e.type === O.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return '' !== e.content ? e.content : v.intl.string(v.t.wnn1DQ);
            if (null != e.content && '' !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                        shouldFilterKeywords: k
                    },
                    n = e.isFirstMessageInForumPost(S)
                        ? A(T({}, t), {
                              noStyleAndInteraction: !0,
                              allowHeading: !0,
                              allowList: !0
                          })
                        : A(T({}, t), {
                              formatInline: !0,
                              allowHeading: j,
                              allowList: j
                          });
                return (0, m.ZP)(e, n).content;
            }
            return null;
        }, [L, x, S, j, k]),
        { isReplyAuthorBlocked: U, isReplyAuthorIgnored: G } = (0, a.cj)(
            [p.Z],
            () => ({
                isReplyAuthorBlocked: null != L && p.Z.isBlockedForMessage(L),
                isReplyAuthorIgnored: null != L && p.Z.isIgnoredForMessage(L)
            }),
            [L]
        ),
        B = (0, y.wq)(null == L ? void 0 : L.author.id, S.id),
        Z = (0, y.$3)(n, L),
        F = (0, y.Wl)(L, S, C, R),
        V = (0, y.rY)(w, R),
        H = i.useCallback(() => {
            R({
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1
            });
        }, [R]),
        Y = (0, g.Uj)(n);
    return (0, r.jsx)(E.Z, {
        repliedAuthor: x,
        baseMessage: n,
        channel: S,
        baseAuthor: Y,
        referencedMessage: I,
        content: M,
        compact: N,
        isReplyAuthorBlocked: U,
        isReplyAuthorIgnored: G,
        showAvatarPopout: w,
        showUsernamePopout: C,
        renderPopout: b.Z,
        onClickAvatar: V,
        onClickUsername: F,
        onClickReply: Z,
        onContextMenu: B,
        onPopoutRequestClose: H,
        isReplySpineClickable: P,
        showReplySpine: D
    });
});
function C(e) {
    let { message: t, channel: n, compact: i, setPopout: a, referencedUsernameProfile: o, referencedAvatarProfile: s, replyReference: l, replyMessage: c, isReplySpineClickable: u, showReplySpine: d = !0 } = e;
    return (
        null != l &&
        (0, r.jsx)(N, {
            baseMessage: t,
            replyReference: l,
            referencedMessage: c,
            channel: n,
            compact: i,
            setPopout: a,
            referencedUsernameProfile: o,
            referencedAvatarProfile: s,
            isReplySpineClickable: u,
            showReplySpine: d
        })
    );
}
