"use strict";
n.d(t, { A: () => f });
var r = n(73153),
    i = n(803306),
    s = n(654107),
    a = n(979286),
    o = n(370480),
    l = n(734057),
    u = n(696451),
    c = n(622543),
    d = n(663311);
let _ = 6e4;
function f(e, t) {
    let {
        type: n,
        withMutualGuilds: f = !1,
        withMutualFriendsCount: p = !1,
        withMutualFriends: h = !1,
        dispatchWait: m = !1,
        waitForRefetch: E = !0,
        guildId: g,
        channelId: A,
        joinRequestId: I,
        abortSignal: T,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("" === e || c.A.isFetchingProfile(e, g)) return Promise.resolve();
    let S = c.A.getUserProfile(e),
        y = Date.now() - (S?.fetchEndedAt ?? 0) >= _;
    if ((S?.fetchError?.status === 404 || S?.fetchError?.status === 429) && !y) return Promise.resolve();
    let v = c.A.getGuildMemberProfile(e, g),
        N = c.A.getMutualGuilds(e),
        C = c.A.getMutualFriends(e),
        R = c.A.getMutualFriendsCount(e),
        O = null == C && h,
        b = null == R && p,
        D = (null == N && f) || O || b,
        L = null == g ? null == S : null == v,
        w = !L && (y || D);
    if (!L && !w) return Promise.resolve();
    let M = null != g ? v?.profileEffect : S?.profileEffect;
    null != M && (0, a.RE)(M.skuId);
    let x = null != g ? v?.profileFrame : S?.profileFrame;
    null != x && (0, a.RE)(x.skuId), null != t && (0, s.l0)(t);
    let P = {
        type: n,
        withMutualGuilds: f,
        withMutualFriends: h,
        withMutualFriendsCount: p,
        guildId: g,
        joinRequestId: I,
        abortSignal: T,
        connectionsRoleId:
            null == g ? void 0 : (0, o._g)({ guildMember: u.Ay.getMember(g, e), channel: l.A.getChannel(A) })?.id,
    };
    if (m) return r.h.wait(() => (0, i.eO)(e, P, d.A)), Promise.resolve();
    let k = (0, i.eO)(e, P, d.A);
    return w && !E ? Promise.resolve() : k;
}
