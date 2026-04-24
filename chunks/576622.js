"use strict";
n.d(t, { A: () => c });
var i = n(228366),
    r = n(803306),
    s = n(654107),
    a = n(693477),
    o = n(370480),
    l = n(734057),
    _ = n(696451),
    d = n(841595),
    u = n(663311);
function c(e, t) {
    let {
        type: n,
        withMutualGuilds: c = !1,
        withMutualFriendsCount: E = !1,
        withMutualFriends: h = !1,
        dispatchWait: m = !1,
        waitForRefetch: f = !0,
        guildId: g,
        channelId: I,
        joinRequestId: A,
        abortSignal: p,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("" === e || d.A.isFetchingProfile(e, g)) return Promise.resolve();
    let T = d.A.getUserProfile(e),
        S = d.A.getGuildMemberProfile(e, g),
        N = null != g ? S : T,
        O = Date.now() - (N?.fetchEndedAt ?? 0) >= 6e4;
    if ((N?.fetchError?.status === 404 || N?.fetchError?.status === 429) && !O) return Promise.resolve();
    let R = d.A.getMutualGuilds(e),
        C = d.A.getMutualFriends(e),
        y = d.A.getMutualFriendsCount(e),
        D = null == R && c,
        L = null == C && h,
        v = null == y && E,
        w = null == g ? null == T : null == S,
        P = !w && (O || D || L || v);
    if (!w && !P) return Promise.resolve();
    let b = null != g ? S?.profileEffect : T?.profileEffect;
    null != b && (0, a.RE)(b.skuId);
    let k = null != g ? S?.profileFrame : T?.profileFrame;
    null != k && (0, a.RE)(k.skuId), null != t && (0, s.l0)(t);
    let U = {
        type: n,
        withMutualGuilds: c,
        withMutualFriends: h,
        withMutualFriendsCount: E,
        guildId: g,
        joinRequestId: A,
        abortSignal: p,
        connectionsRoleId:
            null == g ? void 0 : (0, o._g)({ guildMember: _.Ay.getMember(g, e), channel: l.A.getChannel(I) })?.id,
    };
    if (m) return i.h.wait(() => (0, r.eO)(e, U, u.A)), Promise.resolve();
    let M = (0, r.eO)(e, U, u.A);
    return P && !f ? Promise.resolve() : M;
}
