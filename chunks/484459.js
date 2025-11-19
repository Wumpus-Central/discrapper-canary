n.d(t, { Z: () => h });
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
    _ = n(120569);
let p = 60000;
function h(e, t) {
    var n, h, m, g;
    let {
        type: E,
        withMutualGuilds: b = !1,
        withMutualFriendsCount: y = !1,
        withMutualFriends: O = !1,
        dispatchWait: v = !1,
        waitForRefetch: I = !0,
        guildId: T,
        channelId: S,
        joinRequestId: A,
        abortSignal: C,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("" === e || f.Z.isFetchingProfile(e, T)) return Promise.resolve();
    let N = f.Z.getUserProfile(e),
        R = Date.now() - (null != (g = null == N ? void 0 : N.fetchEndedAt) ? g : 0) >= p;
    if (
        ((null == N || null == (n = N.fetchError) ? void 0 : n.status) === 404 ||
            (null == N || null == (h = N.fetchError) ? void 0 : h.status) === 429) &&
        !R
    )
        return Promise.resolve();
    let P = f.Z.getGuildMemberProfile(e, T),
        D = f.Z.getMutualGuilds(e),
        w = f.Z.getMutualFriends(e),
        L = f.Z.getMutualFriendsCount(e),
        x = null == w && O,
        M = null == L && y,
        k = (null == D && b) || x || M,
        j = null == T ? null == N : null == P,
        U = !j && (R || k);
    if (!j && !U) return Promise.resolve();
    let G = null != T ? (null == P ? void 0 : P.profileEffect) : null == N ? void 0 : N.profileEffect;
    null != G && ((0, s.c)("maybeFetchUserProfile") ? (0, o.lW)(G.skuId) : (0, c.t)()), null != t && (0, a.vM)(t);
    let B = {
        type: E,
        withMutualGuilds: b,
        withMutualFriends: O,
        withMutualFriendsCount: y,
        guildId: T,
        joinRequestId: A,
        abortSignal: C,
        connectionsRoleId:
            null == T ||
            null ==
                (m = (0, l.Ur)({
                    guildMember: d.ZP.getMember(T, e),
                    channel: u.Z.getChannel(S),
                }))
                ? void 0
                : m.id,
    };
    if (v) return r.Z.wait(() => (0, i.In)(e, B, _.Z)), Promise.resolve();
    let Z = (0, i.In)(e, B, _.Z);
    return U && !I ? Promise.resolve() : Z;
}
