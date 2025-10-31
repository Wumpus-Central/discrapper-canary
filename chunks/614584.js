n.d(t, { Z: () => P });
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
    f = n(693912),
    h = n(869765),
    m = n(699516),
    g = n(352736),
    b = n(937889),
    _ = n(739566),
    y = n(267128),
    C = n(507418),
    v = n(348238),
    O = n(981631),
    x = n(388032);
function E(e) {
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
function j(e, t) {
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
            channel: P,
            compact: I = !1,
            referencedUsernameProfile: Z,
            referencedAvatarProfile: T,
            setPopout: N,
            isReplySpineClickable: A,
            showReplySpine: w,
        } = e,
        M = S.state === h.Y.LOADED ? S.message : void 0,
        R = (0, _.Uj)(M),
        D = (0, u.p)(),
        L = s.d.useExperiment({ location: "repliedMessage" }).enabled,
        k = (0, d.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        U = i.useMemo(() => {
            if (null == M) return null;
            let e = (0, o.Z)(M);
            if (e.type === O.uaV.USER_JOIN)
                return (0, a.Rp)(
                    x.intl.formatToParts(g.Z.getSystemMessageUserJoin(e.id), {
                        username: null != R ? R.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === O.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, a.Rp)(
                    (0, c.PA)({
                        username: null != R ? R.nick : e.author.username,
                        guildId: null == P ? void 0 : P.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === O.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, a.Rp)(
                    (0, p.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick,
                    }),
                );
            if (e.type === O.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, a.Rp)(
                    (0, f.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick,
                    }),
                );
            if (e.type === O.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, a.Rp)(
                    (0, f.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick,
                    }),
                );
            else if (e.type === O.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
                return "" !== e.content ? e.content : x.intl.string(x.t.wnn1Dc);
            if (null != e.content && "" !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                        shouldFilterKeywords: D,
                    },
                    n = e.isFirstMessageInForumPost(P)
                        ? j(E({}, t), {
                              noStyleAndInteraction: !0,
                              allowHeading: !0,
                              allowList: !0,
                              allowGameMentions: L,
                          })
                        : j(E({}, t), {
                              formatInline: !0,
                              allowHeading: k,
                              allowList: k,
                              allowGameMentions: L,
                          });
                return (0, b.ZP)(e, n).content;
            }
            return null;
        }, [M, R, P, k, D, L]),
        { isReplyAuthorBlocked: B, isReplyAuthorIgnored: F } = (0, l.cj)(
            [m.Z],
            () => ({
                isReplyAuthorBlocked: null != M && m.Z.isBlockedForMessage(M),
                isReplyAuthorIgnored: null != M && m.Z.isIgnoredForMessage(M),
            }),
            [M],
        ),
        V = (0, v.wq)(null == M ? void 0 : M.author.id, P.id),
        H = (0, v.$3)(n, M),
        G = (0, v.Wl)(M, P, Z, N),
        W = (0, v.rY)(T, N),
        z = i.useCallback(() => {
            N({
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [N]),
        q = (0, _.Uj)(n);
    return (0, r.jsx)(y.Z, {
        repliedAuthor: R,
        baseMessage: n,
        channel: P,
        baseAuthor: q,
        referencedMessage: S,
        content: U,
        compact: I,
        isReplyAuthorBlocked: B,
        isReplyAuthorIgnored: F,
        showAvatarPopout: T,
        showUsernamePopout: Z,
        renderPopout: C.Z,
        onClickAvatar: W,
        onClickUsername: G,
        onClickReply: H,
        onContextMenu: V,
        onPopoutRequestClose: z,
        isReplySpineClickable: A,
        showReplySpine: w,
    });
});
function P(e) {
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
