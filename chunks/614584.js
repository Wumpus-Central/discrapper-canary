n.d(t, { Z: () => S });
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(25209),
    o = n(39154),
    s = n(627050),
    c = n(35125),
    u = n(628238),
    d = n(499401),
    p = n(693912),
    h = n(869765),
    f = n(699516),
    m = n(352736),
    g = n(937889),
    b = n(739566),
    C = n(267128),
    y = n(507418),
    _ = n(348238),
    v = n(981631),
    O = n(388032);
function x(e) {
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
let j = r.memo(function (e) {
    var t;
    let {
            baseMessage: n,
            referencedMessage: j,
            channel: S,
            compact: P = !1,
            referencedUsernameProfile: I,
            referencedAvatarProfile: Z,
            setPopout: T,
            isReplySpineClickable: N,
            showReplySpine: A,
        } = e,
        w = j.state === h.Y.LOADED ? j.message : void 0,
        M = (0, b.Uj)(w),
        R = s.d.useExperiment({ location: "repliedMessage" }).enabled,
        L = (0, u.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        D = r.useMemo(() => {
            if (null == w) return null;
            let e = (0, o.Z)(w);
            if (e.type === v.uaV.USER_JOIN)
                return (0, a.Rp)(
                    O.intl.formatToParts(m.Z.getSystemMessageUserJoin(e.id), {
                        username: null != M ? M.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === v.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, a.Rp)(
                    (0, c.PA)({
                        username: null != M ? M.nick : e.author.username,
                        guildId: null == S ? void 0 : S.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === v.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, a.Rp)(
                    (0, d.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick,
                    }),
                );
            if (e.type === v.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, a.Rp)(
                    (0, p.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick,
                    }),
                );
            if (e.type === v.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, a.Rp)(
                    (0, p.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == M ? void 0 : M.nick,
                    }),
                );
            else if (e.type === v.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
                return "" !== e.content ? e.content : O.intl.string(O.t.wnn1Dc);
            if (null != e.content && "" !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                    },
                    n = e.isFirstMessageInForumPost(S)
                        ? E(x({}, t), {
                              noStyleAndInteraction: !0,
                              allowHeading: !0,
                              allowList: !0,
                              allowGameMentions: R,
                          })
                        : E(x({}, t), {
                              formatInline: !0,
                              allowHeading: L,
                              allowList: L,
                              allowGameMentions: R,
                          });
                return (0, g.ZP)(e, n).content;
            }
            return null;
        }, [w, M, S, L, R]),
        { isReplyAuthorBlocked: k, isReplyAuthorIgnored: U } = (0, l.cj)(
            [f.Z],
            () => ({
                isReplyAuthorBlocked: null != w && f.Z.isBlockedForMessage(w),
                isReplyAuthorIgnored: null != w && f.Z.isIgnoredForMessage(w),
            }),
            [w],
        ),
        V = (0, _.wq)(null == w ? void 0 : w.author.id, S.id),
        F = (0, _.$3)(n, w),
        B = (0, _.Wl)(w, S, I, T),
        H = (0, _.rY)(Z, T),
        G = r.useCallback(() => {
            T({
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [T]),
        W = (0, b.Uj)(n);
    return (0, i.jsx)(C.Z, {
        repliedAuthor: M,
        baseMessage: n,
        channel: S,
        baseAuthor: W,
        referencedMessage: j,
        content: D,
        compact: P,
        isReplyAuthorBlocked: k,
        isReplyAuthorIgnored: U,
        showAvatarPopout: Z,
        showUsernamePopout: I,
        renderPopout: y.Z,
        onClickAvatar: H,
        onClickUsername: B,
        onClickReply: F,
        onContextMenu: V,
        onPopoutRequestClose: G,
        isReplySpineClickable: N,
        showReplySpine: A,
    });
});
function S(e) {
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
        (0, i.jsx)(j, {
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
