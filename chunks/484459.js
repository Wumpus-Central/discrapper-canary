n.d(t, { Z: () => p });
var r = n(570140),
    i = n(232567),
    o = n(220082),
    a = n(275759),
    s = n(365943),
    l = n(592125),
    c = n(271383),
    u = n(621853),
    d = n(120569);
let f = 60000;
async function p(e, t) {
    var n, p, _, h;
    let { withMutualGuilds: m = !1, withMutualFriendsCount: g = !1, withMutualFriends: E = !1, friendToken: v, preloadUserBanner: b = !0, dispatchWait: y = !1, guildId: O, channelId: S, joinRequestId: I, abortSignal: T } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ('' === e || u.Z.isFetchingProfile(e, O)) return;
    let N = u.Z.getUserProfile(e),
        A = Date.now() - (null !== (h = null == N ? void 0 : N.lastFetched) && void 0 !== h ? h : 0) >= f;
    if (((null == N ? void 0 : null === (n = N.fetchError) || void 0 === n ? void 0 : n.status) === 404 || (null == N ? void 0 : null === (p = N.fetchError) || void 0 === p ? void 0 : p.status) === 429) && !A) return;
    let C = u.Z.getGuildMemberProfile(e, O),
        R = u.Z.getMutualGuilds(e),
        P = u.Z.getMutualFriends(e),
        w = u.Z.getMutualFriendsCount(e);
    m = m || null != O;
    let D = null == P && E,
        x = null == w && g,
        L = null != O && null == C;
    if (!(null == R && m) && !D && !x && !L && !A) return;
    (0, s.z)(), null != t && (0, o.vM)(t);
    let M = {
            withMutualGuilds: m,
            withMutualFriends: E,
            withMutualFriendsCount: g,
            friendToken: v,
            guildId: O,
            joinRequestId: I,
            abortSignal: T,
            connectionsRoleId:
                null == O
                    ? void 0
                    : null ===
                            (_ = (0, a.Ur)({
                                guildMember: c.ZP.getMember(O, e),
                                channel: l.Z.getChannel(S)
                            })) || void 0 === _
                      ? void 0
                      : _.id
        },
        k = b ? d.Z : void 0;
    if (y) return r.Z.wait(() => (0, i.In)(e, M, k));
    await (0, i.In)(e, M, k);
}
