n.d(t, { A: () => g });
var i = n(439372),
    r = n(695515),
    a = n(400492),
    s = n(253932),
    l = n(617617),
    o = n(803224),
    d = n(309010),
    c = n(967198),
    u = n(461213),
    _ = n(735769),
    E = n(260498),
    A = n(189714),
    h = n(1371),
    f = n(246338),
    I = n(901173),
    p = n(652215),
    T = n(746080);
class m extends i.A {
    actions = { CONJURE_TURN_SETTLED: S, CONJURE_TURN_NOTIFICATION: N, LOGOUT: C };
}
let g = new m();
function S(e) {
    let { projectId: t, guildId: n, title: i, body: r, nonce: a } = e;
    O(t, n, i, r, a);
}
function N(e) {
    let { projectId: t, body: n, nonce: i } = e,
        r = E.Ay.getProject(t);
    null != r && O(t, r.guild_id ?? r.preview_guild_id ?? null, r.name, n, i);
}
function C() {
    v.clear();
}
function O(e, t, n, i, m) {
    if (null != m) {
        if (m <= (v.get(e) ?? 0)) return;
        v.set(e, m);
    }
    if (
        h.A.areTurnNotificationsDisabled() ||
        u.A.getStatus() === p.clD.DND ||
        s.NO.getSetting() ||
        r.A.isCurrentUserInRestrictedHours() ||
        (0, A.j)(l.A.settings, e)
    )
        return;
    let g = !o.A.isSoundDisabled(L),
        S = c.A.getGuildId();
    if (
        (_.A.getShownProjectId() === e ||
            E.Ay.getGlobalSelectedProjectId() === e ||
            (null != S && E.Ay.getSelectedProjectId(S) === e && d.Ay.getChannelId() === T.VV.CONJURE)) &&
        h.A.isWindowFocused()
    ) {
        g && (0, a.Ak)(R, D);
        return;
    }
    let N = t ?? (0, f.oX)(y);
    h.A.presentTurnNotification({
        projectId: e,
        guildId: N,
        title: n,
        body: (0, I.Lj)(i),
        route: null == N ? null : p.BVt.CHANNEL(N, T.VV.CONJURE, e),
        sound: g ? R : void 0,
        volume: D,
    });
}
let R = "bit_message1",
    L = "message1",
    y = "ConjureChatStore",
    D = 0.4,
    v = new Map();
