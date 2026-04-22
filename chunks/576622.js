"use strict";
n.d(t, { A: () => _ });
var r = n(73153),
    i = n(803306),
    s = n(654107),
    a = n(979286),
    o = n(370480),
    l = n(734057),
    u = n(696451),
    d = n(622543),
    c = n(663311);
function _(e, t) {
    let {
        type: n,
        withMutualGuilds: _ = !1,
        withMutualFriendsCount: f = !1,
        withMutualFriends: E = !1,
        dispatchWait: h = !1,
        waitForRefetch: p = !0,
        guildId: m,
        channelId: g,
        joinRequestId: A,
        abortSignal: I,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("" === e || d.A.isFetchingProfile(e, m)) return Promise.resolve();
    let T = d.A.getUserProfile(e),
        S = d.A.getGuildMemberProfile(e, m),
        y = null != m ? S : T,
        N = Date.now() - (y?.fetchEndedAt ?? 0) >= 6e4;
    if ((y?.fetchError?.status === 404 || y?.fetchError?.status === 429) && !N) return Promise.resolve();
    let O = d.A.getMutualGuilds(e),
        R = d.A.getMutualFriends(e),
        v = d.A.getMutualFriendsCount(e),
        C = null == O && _,
        b = null == R && E,
        D = null == v && f,
        L = null == m ? null == T : null == S,
        w = !L && (N || C || b || D);
    if (!L && !w) return Promise.resolve();
    let M = null != m ? S?.profileEffect : T?.profileEffect;
    null != M && (0, a.RE)(M.skuId);
    let P = null != m ? S?.profileFrame : T?.profileFrame;
    null != P && (0, a.RE)(P.skuId), null != t && (0, s.l0)(t);
    let U = {
        type: n,
        withMutualGuilds: _,
        withMutualFriends: E,
        withMutualFriendsCount: f,
        guildId: m,
        joinRequestId: A,
        abortSignal: I,
        connectionsRoleId:
            null == m ? void 0 : (0, o._g)({ guildMember: u.Ay.getMember(m, e), channel: l.A.getChannel(g) })?.id,
    };
    if (h) return r.h.wait(() => (0, i.eO)(e, U, c.A)), Promise.resolve();
    let k = (0, i.eO)(e, U, c.A);
    return w && !p ? Promise.resolve() : k;
}
