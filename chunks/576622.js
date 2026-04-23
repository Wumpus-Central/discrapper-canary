"use strict";
n.d(t, { A: () => c });
var i = n(228366),
    r = n(803306),
    s = n(654107),
    a = n(803375),
    o = n(370480),
    l = n(734057),
    d = n(696451),
    _ = n(841595),
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
        channelId: p,
        joinRequestId: A,
        abortSignal: I,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("" === e || _.A.isFetchingProfile(e, g)) return Promise.resolve();
    let T = _.A.getUserProfile(e),
        S = _.A.getGuildMemberProfile(e, g),
        N = null != g ? S : T,
        C = Date.now() - (N?.fetchEndedAt ?? 0) >= 6e4;
    if ((N?.fetchError?.status === 404 || N?.fetchError?.status === 429) && !C) return Promise.resolve();
    let R = _.A.getMutualGuilds(e),
        O = _.A.getMutualFriends(e),
        y = _.A.getMutualFriendsCount(e),
        v = null == R && c,
        D = null == O && h,
        L = null == y && E,
        b = null == g ? null == T : null == S,
        w = !b && (C || v || D || L);
    if (!b && !w) return Promise.resolve();
    let P = null != g ? S?.profileEffect : T?.profileEffect;
    null != P && (0, a.RE)(P.skuId);
    let k = null != g ? S?.profileFrame : T?.profileFrame;
    null != k && (0, a.RE)(k.skuId), null != t && (0, s.l0)(t);
    let M = {
        type: n,
        withMutualGuilds: c,
        withMutualFriends: h,
        withMutualFriendsCount: E,
        guildId: g,
        joinRequestId: A,
        abortSignal: I,
        connectionsRoleId:
            null == g ? void 0 : (0, o._g)({ guildMember: d.Ay.getMember(g, e), channel: l.A.getChannel(p) })?.id,
    };
    if (m) return i.h.wait(() => (0, r.eO)(e, M, u.A)), Promise.resolve();
    let U = (0, r.eO)(e, M, u.A);
    return w && !f ? Promise.resolve() : U;
}
