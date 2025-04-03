n.d(t, { Z: () => N });
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
    y = n(348238),
    x = n(981631),
    v = n(388032);
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
let E = i.memo(function (e) {
    var t;
    let { baseMessage: n, referencedMessage: E, channel: N, compact: I = !1, referencedUsernameProfile: P, referencedAvatarProfile: S, setPopout: Z, isReplySpineClickable: T, showReplySpine: A } = e,
        w = E.state === h.Y.LOADED ? E.message : void 0,
        R = (0, b.Uj)(w),
        M = (0, c.p)(),
        k = (0, u.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        L = i.useMemo(() => {
            if (null == w) return null;
            let e = (0, a.Z)(w);
            if (e.type === x.uaV.USER_JOIN) {
                let t = m.Z.getWelcomeMessageKind(N.guild_id);
                return (0, o.Rp)(
                    v.NW.formatToParts(m.Z.getSystemMessageUserJoin(e.id, t), {
                        username: null != R ? R.nick : e.author.username,
                        usernameHook: (e) => e
                    })
                );
            }
            if (e.type === x.uaV.ROLE_SUBSCRIPTION_PURCHASE)
                return (0, o.Rp)(
                    (0, s.PA)({
                        username: null != R ? R.nick : e.author.username,
                        guildId: null == N ? void 0 : N.guild_id,
                        roleSubscriptionData: e.roleSubscriptionData
                    })
                );
            if (e.type === x.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, o.Rp)(
                    (0, d.Y)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick
                    })
                );
            if (e.type === x.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
                return (0, o.Rp)(
                    (0, p.B2)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick
                    })
                );
            if (e.type === x.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
                return (0, o.Rp)(
                    (0, p.hj)({
                        application: null == e ? void 0 : e.application,
                        username: null == R ? void 0 : R.nick
                    })
                );
            else if (e.type === x.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return '' !== e.content ? e.content : v.NW.string(v.t.wnn1DQ);
            if (null != e.content && '' !== e.content) {
                let t = {
                        formatInline: !0,
                        allowLinks: !0,
                        shouldFilterKeywords: M
                    },
                    n = e.isFirstMessageInForumPost(N)
                        ? O(j({}, t), {
                              noStyleAndInteraction: !0,
                              allowHeading: !0,
                              allowList: !0
                          })
                        : O(j({}, t), {
                              formatInline: !0,
                              allowHeading: k,
                              allowList: k
                          });
                return (0, g.ZP)(e, n).content;
            }
            return null;
        }, [w, R, N, k, M]),
        { isReplyAuthorBlocked: D, isReplyAuthorIgnored: W } = (0, l.cj)(
            [f.Z],
            () => ({
                isReplyAuthorBlocked: null != w && f.Z.isBlockedForMessage(w),
                isReplyAuthorIgnored: null != w && f.Z.isIgnoredForMessage(w)
            }),
            [w]
        ),
        U = (0, y.wq)(null == w ? void 0 : w.author.id, N.id),
        B = (0, y.$3)(n, w, D, W),
        H = (0, y.Wl)(w, N, P, Z),
        F = (0, y.rY)(S, Z),
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
        channel: N,
        baseAuthor: V,
        referencedMessage: E,
        content: L,
        compact: I,
        isReplyAuthorBlocked: D,
        isReplyAuthorIgnored: W,
        showAvatarPopout: S,
        showUsernamePopout: P,
        renderPopout: C.Z,
        onClickAvatar: F,
        onClickUsername: H,
        onClickReply: B,
        onContextMenu: U,
        onPopoutRequestClose: G,
        isReplySpineClickable: T,
        showReplySpine: A
    });
});
function N(e) {
    let { message: t, channel: n, compact: i, setPopout: l, referencedUsernameProfile: o, referencedAvatarProfile: a, replyReference: s, replyMessage: c, isReplySpineClickable: u, showReplySpine: d = !0 } = e;
    return (
        null != s &&
        (0, r.jsx)(E, {
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
        })
    );
}
