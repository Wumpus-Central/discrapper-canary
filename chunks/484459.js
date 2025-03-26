n.d(t, { Z: () => _ });
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
function _(e, t) {
    var n, _, p, h;
    let { type: m, withMutualGuilds: g = !1, withMutualFriendsCount: E = !1, withMutualFriends: b = !1, friendToken: v, preloadUserBanner: y = !0, dispatchWait: O = !1, waitForRefetch: I = !0, guildId: S, channelId: T, joinRequestId: A, abortSignal: N } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ('' === e || u.Z.isFetchingProfile(e, S)) return Promise.resolve();
    let C = u.Z.getUserProfile(e),
        R = Date.now() - (null !== (h = null == C ? void 0 : C.lastFetched) && void 0 !== h ? h : 0) >= f;
    if (((null == C ? void 0 : null === (n = C.fetchError) || void 0 === n ? void 0 : n.status) === 404 || (null == C ? void 0 : null === (_ = C.fetchError) || void 0 === _ ? void 0 : _.status) === 429) && !R) return Promise.resolve();
    let P = u.Z.getGuildMemberProfile(e, S),
        w = u.Z.getMutualGuilds(e),
        D = u.Z.getMutualFriends(e),
        L = u.Z.getMutualFriendsCount(e),
        x = null == D && b,
        M = null == L && E,
        k = (null == w && g) || x || M,
        j = null == S ? null == C : null == P,
        U = !j && (R || k);
    if (!j && !U) return Promise.resolve();
    (0, s.z)(), null != t && (0, o.vM)(t);
    let G = {
            type: m,
            withMutualGuilds: g,
            withMutualFriends: b,
            withMutualFriendsCount: E,
            friendToken: v,
            guildId: S,
            joinRequestId: A,
            abortSignal: N,
            connectionsRoleId:
                null == S
                    ? void 0
                    : null ===
                            (p = (0, a.Ur)({
                                guildMember: c.ZP.getMember(S, e),
                                channel: l.Z.getChannel(T)
                            })) || void 0 === p
                      ? void 0
                      : p.id
        },
        B = y ? d.Z : void 0;
    if (O) return r.Z.wait(() => (0, i.In)(e, G, B)), Promise.resolve();
    let F = (0, i.In)(e, G, B);
    return U && !I ? Promise.resolve() : F;
}
