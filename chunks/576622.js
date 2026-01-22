n.d(t, { A: () => p });
var r = n(73153),
    i = n(803306),
    a = n(654107),
    s = n(979286),
    o = n(370480),
    l = n(734057),
    c = n(696451),
    u = n(622543),
    d = n(663311);
let f = 60000;
function p(e, t) {
    var n, p, _, h;
    let {
        type: m,
        withMutualGuilds: g = !1,
        withMutualFriendsCount: E = !1,
        withMutualFriends: b = !1,
        dispatchWait: y = !1,
        waitForRefetch: O = !0,
        guildId: A,
        channelId: v,
        joinRequestId: S,
        abortSignal: I,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("" === e || u.A.isFetchingProfile(e, A)) return Promise.resolve();
    let T = u.A.getUserProfile(e),
        C = Date.now() - (null != (n = null == T ? void 0 : T.fetchEndedAt) ? n : 0) >= f;
    if (
        ((null == T || null == (p = T.fetchError) ? void 0 : p.status) === 404 ||
            (null == T || null == (_ = T.fetchError) ? void 0 : _.status) === 429) &&
        !C
    )
        return Promise.resolve();
    let N = u.A.getGuildMemberProfile(e, A),
        R = u.A.getMutualGuilds(e),
        w = u.A.getMutualFriends(e),
        P = u.A.getMutualFriendsCount(e),
        D = null == w && b,
        x = null == P && E,
        L = (null == R && g) || D || x,
        j = null == A ? null == T : null == N,
        M = !j && (C || L);
    if (!j && !M) return Promise.resolve();
    let k = null != A ? (null == N ? void 0 : N.profileEffect) : null == T ? void 0 : T.profileEffect;
    null != k && (0, s.RE)(k.skuId), null != t && (0, a.l0)(t);
    let U = {
        type: m,
        withMutualGuilds: g,
        withMutualFriends: b,
        withMutualFriendsCount: E,
        guildId: A,
        joinRequestId: S,
        abortSignal: I,
        connectionsRoleId:
            null == A ||
            null ==
                (h = (0, o._g)({
                    guildMember: c.Ay.getMember(A, e),
                    channel: l.A.getChannel(v),
                }))
                ? void 0
                : h.id,
    };
    if (y) return r.h.wait(() => (0, i.eO)(e, U, d.A)), Promise.resolve();
    let G = (0, i.eO)(e, U, d.A);
    return M && !O ? Promise.resolve() : G;
}
