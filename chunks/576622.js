"use strict";
n.d(t, { A: () => f });
var r = n(73153),
    i = n(803306),
    a = n(654107),
    s = n(979286),
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
        waitForRefetch: g = !0,
        guildId: E,
        channelId: A,
        joinRequestId: I,
        abortSignal: T,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("" === e || c.A.isFetchingProfile(e, E)) return Promise.resolve();
    let y = c.A.getUserProfile(e),
        S = Date.now() - (y?.fetchEndedAt ?? 0) >= _;
    if ((y?.fetchError?.status === 404 || y?.fetchError?.status === 429) && !S) return Promise.resolve();
    let v = c.A.getGuildMemberProfile(e, E),
        C = c.A.getMutualGuilds(e),
        b = c.A.getMutualFriends(e),
        N = c.A.getMutualFriendsCount(e),
        R = null == b && h,
        O = null == N && p,
        D = (null == C && f) || R || O,
        L = null == E ? null == y : null == v,
        w = !L && (S || D);
    if (!L && !w) return Promise.resolve();
    let x = null != E ? v?.profileEffect : y?.profileEffect;
    null != x && (0, s.RE)(x.skuId), null != t && (0, a.l0)(t);
    let P = {
        type: n,
        withMutualGuilds: f,
        withMutualFriends: h,
        withMutualFriendsCount: p,
        guildId: E,
        joinRequestId: I,
        abortSignal: T,
        connectionsRoleId:
            null == E ? void 0 : (0, o._g)({ guildMember: u.Ay.getMember(E, e), channel: l.A.getChannel(A) })?.id,
    };
    if (m) return r.h.wait(() => (0, i.eO)(e, P, d.A)), Promise.resolve();
    let M = (0, i.eO)(e, P, d.A);
    return w && !g ? Promise.resolve() : M;
}
