n.d(t, { Z: () => m });
var r = n(570140),
    i = n(232567),
    a = n(220082),
    o = n(335131),
    s = n(873626),
    l = n(275759),
    c = n(365943),
    u = n(592125),
    d = n(271383),
    f = n(621853),
    p = n(120569);
let _ = 60000;
function m(e, t) {
    var n, m, h, g;
    let {
        type: E,
        withMutualGuilds: b = !1,
        withMutualFriendsCount: y = !1,
        withMutualFriends: O = !1,
        dispatchWait: v = !1,
        waitForRefetch: S = !0,
        guildId: I,
        channelId: T,
        joinRequestId: A,
        abortSignal: C,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("" === e || f.Z.isFetchingProfile(e, I)) return Promise.resolve();
    let N = f.Z.getUserProfile(e),
        P = Date.now() - (null != (g = null == N ? void 0 : N.fetchEndedAt) ? g : 0) >= _;
    if (
        ((null == N || null == (n = N.fetchError) ? void 0 : n.status) === 404 ||
            (null == N || null == (m = N.fetchError) ? void 0 : m.status) === 429) &&
        !P
    )
        return Promise.resolve();
    let R = f.Z.getGuildMemberProfile(e, I),
        w = f.Z.getMutualGuilds(e),
        D = f.Z.getMutualFriends(e),
        x = f.Z.getMutualFriendsCount(e),
        L = null == D && O,
        j = null == x && y,
        M = (null == w && b) || L || j,
        k = null == I ? null == N : null == R,
        U = !k && (P || M);
    if (!k && !U) return Promise.resolve();
    let G = null != I ? (null == R ? void 0 : R.profileEffect) : null == N ? void 0 : N.profileEffect;
    null != G && ((0, s.c)("maybeFetchUserProfile") ? (0, o.lW)(G.skuId) : (0, c.t)()), null != t && (0, a.vM)(t);
    let Z = {
        type: E,
        withMutualGuilds: b,
        withMutualFriends: O,
        withMutualFriendsCount: y,
        guildId: I,
        joinRequestId: A,
        abortSignal: C,
        connectionsRoleId:
            null == I ||
            null ==
                (h = (0, l.Ur)({
                    guildMember: d.ZP.getMember(I, e),
                    channel: u.Z.getChannel(T),
                }))
                ? void 0
                : h.id,
    };
    if (v) return r.Z.wait(() => (0, i.In)(e, Z, p.Z)), Promise.resolve();
    let B = (0, i.In)(e, Z, p.Z);
    return U && !S ? Promise.resolve() : B;
}
