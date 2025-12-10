n.d(t, { Z: () => p });
var r = n(570140),
    i = n(232567),
    a = n(220082),
    o = n(335131),
    s = n(275759),
    l = n(592125),
    c = n(271383),
    u = n(621853),
    d = n(120569);
let f = 60000;
function p(e, t) {
    var n, p, _, m;
    let {
        type: h,
        withMutualGuilds: g = !1,
        withMutualFriendsCount: E = !1,
        withMutualFriends: b = !1,
        dispatchWait: y = !1,
        waitForRefetch: O = !0,
        guildId: v,
        channelId: S,
        joinRequestId: I,
        abortSignal: T,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("" === e || u.Z.isFetchingProfile(e, v)) return Promise.resolve();
    let C = u.Z.getUserProfile(e),
        A = Date.now() - (null != (m = null == C ? void 0 : C.fetchEndedAt) ? m : 0) >= f;
    if (
        ((null == C || null == (n = C.fetchError) ? void 0 : n.status) === 404 ||
            (null == C || null == (p = C.fetchError) ? void 0 : p.status) === 429) &&
        !A
    )
        return Promise.resolve();
    let N = u.Z.getGuildMemberProfile(e, v),
        P = u.Z.getMutualGuilds(e),
        R = u.Z.getMutualFriends(e),
        D = u.Z.getMutualFriendsCount(e),
        w = null == R && b,
        x = null == D && E,
        L = (null == P && g) || w || x,
        j = null == v ? null == C : null == N,
        M = !j && (A || L);
    if (!j && !M) return Promise.resolve();
    let k = null != v ? (null == N ? void 0 : N.profileEffect) : null == C ? void 0 : C.profileEffect;
    null != k && (0, o.lW)(k.skuId), null != t && (0, a.vM)(t);
    let U = {
        type: h,
        withMutualGuilds: g,
        withMutualFriends: b,
        withMutualFriendsCount: E,
        guildId: v,
        joinRequestId: I,
        abortSignal: T,
        connectionsRoleId:
            null == v ||
            null ==
                (_ = (0, s.Ur)({
                    guildMember: c.ZP.getMember(v, e),
                    channel: l.Z.getChannel(S),
                }))
                ? void 0
                : _.id,
    };
    if (y) return r.Z.wait(() => (0, i.In)(e, U, d.Z)), Promise.resolve();
    let G = (0, i.In)(e, U, d.Z);
    return M && !O ? Promise.resolve() : G;
}
