n.d(t, { Z: () => P });
var i = n(951288),
    r = n(647438),
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
    y = n(739566),
    C = n(267128),
    v = n(507418),
    _ = n(348238),
    x = n(981631),
    j = n(388032);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = r.memo(function (e) {
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
        M = S.state === f.Y.LOADED ? S.message : void 0,
        R = (0, y.Uj)(M),
        L = (0, u.p)(),
        D = s.d.useExperiment({ location: "repliedMessage" }).enabled,
        k = (0, d.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        U = r.useMemo(() => {
            if (null == M) return null;
            let e = (0, o.Z)(M);
            if (e.type === x.uaV.USER_JOIN)
                return (0, a.Rp)(
                    j.intl.formatToParts(g.Z.getSystemMessageUserJoin(e.id), {
                        username: null != R ? R.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === x.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, a.Rp)(
                    (0, c.PA)({
                        username: null != R ? R.nick : e.author.username,
                        guildId: null == P ? void 0 : P.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === x.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, a.Rp)(
                    (0, p.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick,
                    }),
                );
            if (e.type === x.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, a.Rp)(
                    (0, h.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick,
                    }),
                );
            if (e.type === x.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, a.Rp)(
                    (0, h.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick,
                    }),
                );
            else if (e.type === x.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
                return "" !== e.content ? e.content : j.intl.string(j.t.wnn1Dc);
            if (null != e.content && "" !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                        shouldFilterKeywords: L,
                    },
                    n = e.isFirstMessageInForumPost(P)
                        ? E(O({}, t), {
                              noStyleAndInteraction: !0,
                              allowHeading: !0,
                              allowList: !0,
                              allowGameMentions: D,
                          })
                        : E(O({}, t), {
                              formatInline: !0,
                              allowHeading: k,
                              allowList: k,
                              allowGameMentions: D,
                          });
                return (0, b.ZP)(e, n).content;
            }
            return null;
        }, [M, R, P, k, L, D]),
        { isReplyAuthorBlocked: B, isReplyAuthorIgnored: H } = (0, l.cj)(
            [m.Z],
            () => ({
                isReplyAuthorBlocked: null != M && m.Z.isBlockedForMessage(M),
                isReplyAuthorIgnored: null != M && m.Z.isIgnoredForMessage(M),
            }),
            [M],
        ),
        V = (0, _.wq)(null == M ? void 0 : M.author.id, P.id),
        F = (0, _.$3)(n, M),
        G = (0, _.Wl)(M, P, Z, N),
        z = (0, _.rY)(T, N),
        W = r.useCallback(() => {
            N({
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [N]),
        q = (0, y.Uj)(n);
    return (0, i.jsx)(C.Z, {
        repliedAuthor: R,
        baseMessage: n,
        channel: P,
        baseAuthor: q,
        referencedMessage: S,
        content: U,
        compact: I,
        isReplyAuthorBlocked: B,
        isReplyAuthorIgnored: H,
        showAvatarPopout: T,
        showUsernamePopout: Z,
        renderPopout: v.Z,
        onClickAvatar: z,
        onClickUsername: G,
        onClickReply: F,
        onContextMenu: V,
        onPopoutRequestClose: W,
        isReplySpineClickable: A,
        showReplySpine: w,
    });
});
function P(e) {
    let {
        message: t,
        channel: n,
        compact: r,
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
        (0, i.jsx)(S, {
            baseMessage: t,
            replyReference: s,
            referencedMessage: c,
            channel: n,
            compact: r,
            setPopout: l,
            referencedUsernameProfile: a,
            referencedAvatarProfile: o,
            isReplySpineClickable: u,
            showReplySpine: d,
        })
    );
}
