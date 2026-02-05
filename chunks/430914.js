i.d(t, { Zs: () => h, uS: () => f });
var l = i(311907),
    n = i(600975),
    r = i(428835),
    s = i(961350),
    d = i(994500),
    o = i(652215);
let u = (0, n.C)({
    kind: "user",
    id: "2025-11_invite_friend_members",
    label: "Show Friends in Server on Invite Modal",
    defaultConfig: { showFriendsInServer: !1, showInviter: !1 },
    treatments: [
        { id: 1, label: "Show Friends in Server", config: { showFriendsInServer: !0, showInviter: !1 } },
        { id: 2, label: "Show Friends in Server and Inviter", config: { showFriendsInServer: !0, showInviter: !0 } },
    ],
});
function a(e) {
    if (null == e) return !1;
    let t = e.features;
    return Array.isArray(t)
        ? !t.includes(o.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
        : !(t instanceof Set) || !t.has(o.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED);
}
let c = { showFriendsInServer: !1, showInviter: !1 };
function f(e) {
    let { guild: t, ...i } = e,
        n = (0, l.bG)([s.default], () => s.default.isAuthenticated()),
        o = (0, l.bG)([d.A], () => d.A.getFriendCount() > 0),
        f = a(t),
        h = n && o && f,
        g = (0, r.Dr)(u, { ...i, disable: !h });
    return h ? g : c;
}
function h(e) {
    let { guild: t, ...i } = e,
        l = s.default.isAuthenticated(),
        n = d.A.getFriendCount() > 0;
    return l && n && a(t) ? (0, r.Kd)(u, i) : c;
}
