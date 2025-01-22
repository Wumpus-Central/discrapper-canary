r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(570140),
    a = r(232567),
    o = r(220082),
    s = r(275759),
    l = r(365943),
    u = r(592125),
    c = r(271383),
    d = r(621853),
    f = r(120569);
let p = 60000;
async function h(e, n) {
    var r, h, _, m;
    let { withMutualGuilds: g = !1, withMutualFriendsCount: E = !1, withMutualFriends: v = !1, friendToken: y, preloadUserBanner: b = !0, dispatchWait: I = !1, guildId: T, channelId: S, joinRequestId: A, abortSignal: C } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ('' === e || d.Z.isFetchingProfile(e, T)) return;
    let N = d.Z.getUserProfile(e),
        R = Date.now() - (null !== (m = null == N ? void 0 : N.lastFetched) && void 0 !== m ? m : 0) >= p;
    if (((null == N ? void 0 : null === (r = N.fetchError) || void 0 === r ? void 0 : r.status) === 404 || (null == N ? void 0 : null === (h = N.fetchError) || void 0 === h ? void 0 : h.status) === 429) && !R) return;
    let O = d.Z.getGuildMemberProfile(e, T),
        D = d.Z.getMutualGuilds(e),
        L = d.Z.getMutualFriends(e),
        x = d.Z.getMutualFriendsCount(e);
    g = g || null != T;
    let w = null == L && v,
        P = null == x && E,
        M = null != T && null == O;
    if (!(null == D && g) && !w && !P && !M && !R) return;
    (0, l.z)(), null != n && (0, o.vM)(n);
    let k = {
            withMutualGuilds: g,
            withMutualFriends: v,
            withMutualFriendsCount: E,
            friendToken: y,
            guildId: T,
            joinRequestId: A,
            abortSignal: C,
            connectionsRoleId:
                null == T
                    ? void 0
                    : null ===
                            (_ = (0, s.Ur)({
                                guildMember: c.ZP.getMember(T, e),
                                channel: u.Z.getChannel(S)
                            })) || void 0 === _
                      ? void 0
                      : _.id
        },
        U = b ? f.Z : void 0;
    if (I) return i.Z.wait(() => (0, a.In)(e, k, U));
    await (0, a.In)(e, k, U);
}
