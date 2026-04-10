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
        y = c.A.getGuildMemberProfile(e, g),
        v = null != g ? y : S,
        N = Date.now() - (v?.fetchEndedAt ?? 0) >= _;
    if ((v?.fetchError?.status === 404 || v?.fetchError?.status === 429) && !N) return Promise.resolve();
    let C = c.A.getMutualGuilds(e),
        R = c.A.getMutualFriends(e),
        O = c.A.getMutualFriendsCount(e),
        b = null == R && h,
        D = null == O && p,
        L = (null == C && f) || b || D,
        w = null == g ? null == S : null == y,
        M = !w && (N || L);
    if (!w && !M) return Promise.resolve();
    let x = null != g ? y?.profileEffect : S?.profileEffect;
    null != x && (0, a.RE)(x.skuId);
    let P = null != g ? y?.profileFrame : S?.profileFrame;
    null != P && (0, a.RE)(P.skuId), null != t && (0, s.l0)(t);
    let k = {
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
    if (m) return r.h.wait(() => (0, i.eO)(e, k, d.A)), Promise.resolve();
    let U = (0, i.eO)(e, k, d.A);
    return M && !E ? Promise.resolve() : U;
}
