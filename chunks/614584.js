n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(25209),
    o = n(39154),
    s = n(627050),
    c = n(35125),
    u = n(905405),
    d = n(628238),
    p = n(499401),
    h = n(693912),
    f = n(869765),
    m = n(699516),
    g = n(352736),
    b = n(937889),
    _ = n(739566),
    y = n(267128),
    C = n(507418),
    x = n(348238),
    v = n(981631),
    O = n(388032);
function j(e) {
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
function E(e, t) {
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
let S = i.memo(function (e) {
    var t;
    let {
            baseMessage: n,
            referencedMessage: S,
            channel: I,
            compact: P = !1,
            referencedUsernameProfile: Z,
            referencedAvatarProfile: T,
            setPopout: N,
            isReplySpineClickable: A,
            showReplySpine: w,
        } = e,
        R = S.state === f.Y.LOADED ? S.message : void 0,
        M = (0, _.Uj)(R),
        D = (0, u.p)(),
        L = s.d.useExperiment({ location: "repliedMessage" }).enabled,
        k = (0, d.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        U = i.useMemo(() => {
            if (null == R) return null;
            let e = (0, o.Z)(R);
            if (e.type === v.uaV.USER_JOIN)
                return (0, a.Rp)(
                    O.intl.formatToParts(g.Z.getSystemMessageUserJoin(e.id), {
                        username: null != M ? M.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === v.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, a.Rp)(
                    (0, c.PA)({
                        username: null != M ? M.nick : e.author.username,
                        guildId: null == I ? void 0 : I.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === v.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, a.Rp)(
                    (0, p.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick,
                    }),
                );
            if (e.type === v.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, a.Rp)(
                    (0, h.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick,
                    }),
                );
            if (e.type === v.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, a.Rp)(
                    (0, h.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick,
                    }),
                );
            else if (e.type === v.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
                return "" !== e.content ? e.content : O.intl.string(O.t.wnn1DQ);
            if (null != e.content && "" !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                        shouldFilterKeywords: D,
                    },
                    n = e.isFirstMessageInForumPost(I)
                        ? E(j({}, t), {
                              noStyleAndInteraction: !0,
                              allowHeading: !0,
                              allowList: !0,
                              allowGameMentions: L,
                          })
                        : E(j({}, t), {
                              formatInline: !0,
                              allowHeading: k,
                              allowList: k,
                              allowGameMentions: L,
                          });
                return (0, b.ZP)(e, n).content;
            }
            return null;
        }, [R, M, I, k, D, L]),
        { isReplyAuthorBlocked: B, isReplyAuthorIgnored: F } = (0, l.cj)(
            [m.Z],
            () => ({
                isReplyAuthorBlocked: null != R && m.Z.isBlockedForMessage(R),
                isReplyAuthorIgnored: null != R && m.Z.isIgnoredForMessage(R),
            }),
            [R],
        ),
        G = (0, x.wq)(null == R ? void 0 : R.author.id, I.id),
        H = (0, x.$3)(n, R),
        V = (0, x.Wl)(R, I, Z, N),
        z = (0, x.rY)(T, N),
        W = i.useCallback(() => {
            N({
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [N]),
        Y = (0, _.Uj)(n);
    return (0, r.jsx)(y.Z, {
        repliedAuthor: M,
        baseMessage: n,
        channel: I,
        baseAuthor: Y,
        referencedMessage: S,
        content: U,
        compact: P,
        isReplyAuthorBlocked: B,
        isReplyAuthorIgnored: F,
        showAvatarPopout: T,
        showUsernamePopout: Z,
        renderPopout: C.Z,
        onClickAvatar: z,
        onClickUsername: V,
        onClickReply: H,
        onContextMenu: G,
        onPopoutRequestClose: W,
        isReplySpineClickable: A,
        showReplySpine: w,
    });
});
function I(e) {
    let {
        message: t,
        channel: n,
        compact: i,
        setPopout: l,
        referencedUsernameProfile: a,
        referencedAvatarProfile: o,
        replyReference: s,
        replyMessage: c,
        isReplySpineClickable: u,
        showReplySpine: d = !0,
    } = e;
    return (
        null != s &&
        (0, r.jsx)(S, {
            baseMessage: t,
            replyReference: s,
            referencedMessage: c,
            channel: n,
            compact: i,
            setPopout: l,
            referencedUsernameProfile: a,
            referencedAvatarProfile: o,
            isReplySpineClickable: u,
            showReplySpine: d,
        })
    );
}
