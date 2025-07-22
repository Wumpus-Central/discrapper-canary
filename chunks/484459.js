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
    let { type: m, withMutualGuilds: g = !1, withMutualFriendsCount: E = !1, withMutualFriends: b = !1, dispatchWait: y = !1, waitForRefetch: O = !0, guildId: v, channelId: I, joinRequestId: T, abortSignal: S } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ('' === e || u.Z.isFetchingProfile(e, v)) return Promise.resolve();
    let A = u.Z.getUserProfile(e),
        N = Date.now() - (null != (h = null == A ? void 0 : A.fetchEndedAt) ? h : 0) >= f;
    if (((null == A || null == (n = A.fetchError) ? void 0 : n.status) === 404 || (null == A || null == (_ = A.fetchError) ? void 0 : _.status) === 429) && !N) return Promise.resolve();
    let C = u.Z.getGuildMemberProfile(e, v),
        R = u.Z.getMutualGuilds(e),
        P = u.Z.getMutualFriends(e),
        w = u.Z.getMutualFriendsCount(e),
        D = null == P && b,
        L = null == w && E,
        x = (null == R && g) || D || L,
        M = null == v ? null == A : null == C,
        k = !M && (N || x);
    if (!M && !k) return Promise.resolve();
    ((0, s.r)(), null != t && (0, a.vM)(t));
    let j = {
        type: m,
        withMutualGuilds: g,
        withMutualFriends: b,
        withMutualFriendsCount: E,
        guildId: v,
        joinRequestId: T,
        abortSignal: S,
        connectionsRoleId:
            null == v ||
            null ==
                (p = (0, o.Ur)({
                    guildMember: c.ZP.getMember(v, e),
                    channel: l.Z.getChannel(I)
                }))
                ? void 0
                : p.id
    };
    if (y) return (r.Z.wait(() => (0, i.In)(e, j, d.Z)), Promise.resolve());
    let U = (0, i.In)(e, j, d.Z);
    return k && !O ? Promise.resolve() : U;
}
