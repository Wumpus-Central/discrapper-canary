n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(25209),
    a = n(39154),
    s = n(35125),
    c = n(905405),
    u = n(628238),
    d = n(499401),
    p = n(693912),
    h = n(869765),
    f = n(699516),
    m = n(352736),
    g = n(937889),
    b = n(739566),
    _ = n(267128),
    C = n(507418),
    v = n(348238),
    y = n(981631),
    x = n(388032);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function O(e, t) {
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
let N = i.memo(function (e) {
    var t;
    let { baseMessage: n, referencedMessage: N, channel: E, compact: P = !1, referencedUsernameProfile: I, referencedAvatarProfile: S, setPopout: Z, isReplySpineClickable: T, showReplySpine: A } = e,
        w = N.state === h.Y.LOADED ? N.message : void 0,
        R = (0, b.Uj)(w),
        k = (0, c.p)(),
        M = (0, u.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        L = i.useMemo(() => {
            if (null == w) return null;
            let e = (0, a.Z)(w);
            if (e.type === y.uaV.USER_JOIN) {
                let t = m.Z.getWelcomeMessageKind(E.guild_id);
                return (0, o.Rp)(
                    x.NW.formatToParts(m.Z.getSystemMessageUserJoin(e.id, t), {
                        username: null != R ? R.nick : e.author.username,
                        usernameHook: (e) => e
                    })
                );
            }
            if (e.type === y.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, o.Rp)(
                    (0, s.PA)({
                        username: null != R ? R.nick : e.author.username,
                        guildId: null == E ? void 0 : E.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData
                    })
                );
            if (e.type === y.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, o.Rp)(
                    (0, d.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick
                    })
                );
            if (e.type === y.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, o.Rp)(
                    (0, p.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick
                    })
                );
            if (e.type === y.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, o.Rp)(
                    (0, p.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick
                    })
                );
            else if (e.type === y.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return '' !== e.content ? e.content : x.NW.string(x.t.wnn1DQ);
            if (null != e.content && '' !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                        shouldFilterKeywords: k
                    },
                    n = e.isFirstMessageInForumPost(E)
                        ? O(j({}, t), {
                              noStyleAndInteraction: !0,
                              allowHeading: !0,
                              allowList: !0
                          })
                        : O(j({}, t), {
                              formatInline: !0,
                              allowHeading: M,
                              allowList: M
                          });
                return (0, g.ZP)(e, n).content;
            }
            return null;
        }, [w, R, E, M, k]),
        { isReplyAuthorBlocked: D, isReplyAuthorIgnored: W } = (0, l.cj)(
            [f.Z],
            () => ({
                isReplyAuthorBlocked: null != w && f.Z.isBlockedForMessage(w),
                isReplyAuthorIgnored: null != w && f.Z.isIgnoredForMessage(w)
            }),
            [w]
        ),
        U = (0, v.wq)(null == w ? void 0 : w.author.id, E.id),
        B = (0, v.$3)(n, w, D, W),
        F = (0, v.Wl)(w, E, I, Z),
        H = (0, v.rY)(S, Z),
        G = i.useCallback(() => {
            Z({
                referencedUsernameProfile: !1,
                referencedAvatarProfile: !1
            });
        }, [Z]),
        V = (0, b.Uj)(n);
    return (0, r.jsx)(_.Z, {
        repliedAuthor: R,
        baseMessage: n,
        channel: E,
        baseAuthor: V,
        referencedMessage: N,
        content: L,
        compact: P,
        isReplyAuthorBlocked: D,
        isReplyAuthorIgnored: W,
        showAvatarPopout: S,
        showUsernamePopout: I,
        renderPopout: C.Z,
        onClickAvatar: H,
        onClickUsername: F,
        onClickReply: B,
        onContextMenu: U,
        onPopoutRequestClose: G,
        isReplySpineClickable: T,
        showReplySpine: A
    });
});
function E(e) {
    let { message: t, channel: n, compact: i, setPopout: l, referencedUsernameProfile: o, referencedAvatarProfile: a, replyReference: s, replyMessage: c, isReplySpineClickable: u, showReplySpine: d = !0 } = e,
        p =
            null != s &&
            (0, r.jsx)(N, {
                baseMessage: t,
                replyReference: s,
                referencedMessage: c,
                channel: n,
                compact: i,
                setPopout: l,
                referencedUsernameProfile: o,
                referencedAvatarProfile: a,
                isReplySpineClickable: u,
                showReplySpine: d
            });
    return (0, r.jsx)(r.Fragment, { children: p });
}
