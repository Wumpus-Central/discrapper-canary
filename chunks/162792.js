n.d(t, {
    A: () => C,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(436857),
    s = n(387408),
    o = n(352505),
    c = n(942075),
    u = n(384231),
    d = n(808829),
    f = n(552691),
    p = n(9842),
    h = n(994500),
    b = n(638075),
    g = n(465364),
    m = n(763754),
    A = n(448368),
    y = n(535421),
    O = n(112758),
    j = n(652215),
    v = n(985018);

function x(e) {
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
let _ = l.memo(function (e) {
    var t;
    let {
            baseMessage: n,
            referencedMessage: _,
            channel: C,
            compact: S = !1,
            referencedUsernameProfile: I,
            referencedAvatarProfile: N,
            setPopout: T,
            isReplySpineClickable: P,
            showReplySpine: w,
        } = e,
        R = _.state === p.a.LOADED ? _.message : void 0,
        D = (0, m.X4)(R),
        M = o.m.useExperiment({
            location: "repliedMessage",
        }).enabled,
        L = (0, u.S)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        G = l.useMemo(() => {
            if (null == R) return null;
            let e = (0, s.A)(R);
            if (e.type === j.lAJ.USER_JOIN)
                return (0, a.$)(
                    v.intl.formatToParts(b.A.getSystemMessageUserJoin(e.id), {
                        username: null != D ? D.nick : e.author.username,
                        usernameHook: (e) => e,
                    }),
                );
            if (e.type === j.lAJ.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, a.$)(
                    (0, c.WC)({
                        username: null != D ? D.nick : e.author.username,
                        guildId: null == C ? void 0 : C.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData,
                    }),
                );
            if (e.type === j.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, a.$)(
                    (0, d.P)({
                        application: null == e ? void 0 : e.application,
                        username: null == D ? void 0 : D.nick,
                    }),
                );
            if (e.type === j.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, a.$)(
                    (0, f.g6)({
                        application: null == e ? void 0 : e.application,
                        username: null == D ? void 0 : D.nick,
                    }),
                );
            if (e.type === j.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, a.$)(
                    (0, f.uk)({
                        application: null == e ? void 0 : e.application,
                        username: null == D ? void 0 : D.nick,
                    }),
                );
            else if (e.type === j.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT)
                return "" !== e.content ? e.content : v.intl.string(v.t.wnn1Dc);
            if (null != e.content && "" !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                    },
                    n = e.isFirstMessageInForumPost(C)
                        ? E(x({}, t), {
                              noStyleAndInteraction: !0,
                              allowHeading: !0,
                              allowList: !0,
                              allowGameMentions: M,
                          })
                        : E(x({}, t), {
                              formatInline: !0,
                              allowHeading: L,
                              allowList: L,
                              allowGameMentions: M,
                          });
                return (0, g.Ay)(e, n).content;
            }
            return null;
        }, [R, D, C, L, M]),
        { isReplyAuthorBlocked: k, isReplyAuthorIgnored: U } = (0, i.cf)(
            [h.A],
            () => ({
                isReplyAuthorBlocked: null != R && h.A.isBlockedForMessage(R),
                isReplyAuthorIgnored: null != R && h.A.isIgnoredForMessage(R),
            }),
            [R],
        ),
        V = (0, O.r4)(null == R ? void 0 : R.author.id, C.id),
        F = (0, O.Ck)(n, R),
        H = (0, O.H9)(R, C, I, T),
        B = (0, O.Ge)(N, T),
        K = l.useCallback(() => {
            T({
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1,
            });
        }, [T]),
        W = (0, m.X4)(n);
    return (0, r.jsx)(A.A, {
        repliedAuthor: D,
        baseMessage: n,
        channel: C,
        baseAuthor: W,
        referencedMessage: _,
        content: G,
        compact: S,
        isReplyAuthorBlocked: k,
        isReplyAuthorIgnored: U,
        showAvatarPopout: N,
        showUsernamePopout: I,
        renderPopout: y.A,
        onClickAvatar: B,
        onClickUsername: H,
        onClickReply: F,
        onContextMenu: V,
        onPopoutRequestClose: K,
        isReplySpineClickable: P,
        showReplySpine: w,
    });
});

function C(e) {
    let {
        message: t,
        channel: n,
        compact: l,
        setPopout: i,
        referencedUsernameProfile: a,
        referencedAvatarProfile: s,
        replyReference: o,
        replyMessage: c,
        isReplySpineClickable: u,
        showReplySpine: d = !0,
    } = e;
    return (
        null != o &&
        (0, r.jsx)(_, {
            baseMessage: t,
            replyReference: o,
            referencedMessage: c,
            channel: n,
            compact: l,
            setPopout: i,
            referencedUsernameProfile: a,
            referencedAvatarProfile: s,
            isReplySpineClickable: u,
            showReplySpine: d,
        })
    );
}
