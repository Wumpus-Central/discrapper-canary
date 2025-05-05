n.d(t, { Z: () => _ });
var r = n(570140),
    i = n(232567),
    a = n(220082),
    o = n(275759),
    s = n(365943),
    l = n(592125),
    c = n(271383),
    u = n(621853),
    d = n(120569);
let f = 60000;
function _(e, t) {
    var n, _, p, h;
    let { type: m, withMutualGuilds: g = !1, withMutualFriendsCount: E = !1, withMutualFriends: b = !1, friendToken: y, dispatchWait: O = !1, waitForRefetch: v = !0, guildId: I, channelId: S, joinRequestId: T, abortSignal: A } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ('' === e || u.Z.isFetchingProfile(e, I)) return Promise.resolve();
    let N = u.Z.getUserProfile(e),
        C = Date.now() - (null != (h = null == N ? void 0 : N.fetchEndedAt) ? h : 0) >= f;
    if (((null == N || null == (n = N.fetchError) ? void 0 : n.status) === 404 || (null == N || null == (_ = N.fetchError) ? void 0 : _.status) === 429) && !C) return Promise.resolve();
    let R = u.Z.getGuildMemberProfile(e, I),
        P = u.Z.getMutualGuilds(e),
        w = u.Z.getMutualFriends(e),
        D = u.Z.getMutualFriendsCount(e),
        L = null == w && b,
        x = null == D && E,
        M = (null == P && g) || L || x,
        k = null == I ? null == N : null == R,
        j = !k && (C || M);
    if (!k && !j) return Promise.resolve();
    (0, s.z)(), null != t && (0, a.vM)(t);
    let U = {
        type: m,
        withMutualGuilds: g,
        withMutualFriends: b,
        withMutualFriendsCount: E,
        friendToken: y,
        guildId: I,
        joinRequestId: T,
        abortSignal: A,
        connectionsRoleId:
            null == I ||
            null ==
                (p = (0, o.Ur)({
                    guildMember: c.ZP.getMember(I, e),
                    channel: l.Z.getChannel(S)
                }))
                ? void 0
                : p.id
    };
    if (O) return r.Z.wait(() => (0, i.In)(e, U, d.Z)), Promise.resolve();
    let G = (0, i.In)(e, U, d.Z);
    return j && !v ? Promise.resolve() : G;
}
