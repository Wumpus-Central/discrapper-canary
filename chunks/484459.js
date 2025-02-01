n.d(t, { Z: () => _ });
var i = n(570140),
    r = n(232567),
    a = n(220082),
    s = n(275759),
    o = n(365943),
    l = n(592125),
    u = n(271383),
    c = n(621853),
    d = n(120569);
let f = 60000;
async function _(e, t) {
    var n, _, p, h;
    let { withMutualGuilds: m = !1, withMutualFriendsCount: g = !1, withMutualFriends: E = !1, friendToken: v, preloadUserBanner: y = !0, dispatchWait: I = !1, guildId: T, channelId: b, joinRequestId: S, abortSignal: A } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ('' === e || c.Z.isFetchingProfile(e, T)) return;
    let N = c.Z.getUserProfile(e),
        C = Date.now() - (null !== (h = null == N ? void 0 : N.lastFetched) && void 0 !== h ? h : 0) >= f;
    if (((null == N ? void 0 : null === (n = N.fetchError) || void 0 === n ? void 0 : n.status) === 404 || (null == N ? void 0 : null === (_ = N.fetchError) || void 0 === _ ? void 0 : _.status) === 429) && !C) return;
    let R = c.Z.getGuildMemberProfile(e, T),
        O = c.Z.getMutualGuilds(e),
        D = c.Z.getMutualFriends(e),
        x = c.Z.getMutualFriendsCount(e);
    m = m || null != T;
    let L = null == D && E,
        P = null == x && g,
        w = null != T && null == R;
    if (!(null == O && m) && !L && !P && !w && !C) return;
    (0, o.z)(), null != t && (0, a.vM)(t);
    let M = {
            withMutualGuilds: m,
            withMutualFriends: E,
            withMutualFriendsCount: g,
            friendToken: v,
            guildId: T,
            joinRequestId: S,
            abortSignal: A,
            connectionsRoleId:
                null == T
                    ? void 0
                    : null ===
                            (p = (0, s.Ur)({
                                guildMember: u.ZP.getMember(T, e),
                                channel: l.Z.getChannel(b)
                            })) || void 0 === p
                      ? void 0
                      : p.id
        },
        k = y ? d.Z : void 0;
    if (I) return i.Z.wait(() => (0, r.In)(e, M, k));
    await (0, r.In)(e, M, k);
}
