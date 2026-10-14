n.d(t, { A: () => g });
var i = n(439372),
    r = n(695515),
    a = n(400492),
    s = n(885386),
    l = n(617617),
    o = n(803224),
    d = n(309010),
    c = n(967198),
    u = n(461213),
    _ = n(287809),
    E = n(427262),
    A = n(260498),
    h = n(189714),
    f = n(1371),
    I = n(246338),
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
        r = A.Ay.getProject(t);
    null != r && O(t, r.guild_id ?? r.preview_guild_id ?? null, r.name, n, i);
}
function C() {
    b.clear();
}
function O(e, t, n, i, m) {
    if (null != m) {
        if (m <= (b.get(e) ?? 0)) return;
        b.set(e, m);
    }
    if (
        f.A.areTurnNotificationsDisabled() ||
        u.A.getStatus() === p.clD.DND ||
        s.NO.getSetting() ||
        r.A.isCurrentUserInRestrictedHours() ||
        (0, h.j)(l.A.settings, e)
    )
        return;
    let g = !o.A.isSoundDisabled(L),
        S = c.A.getGuildId();
    if (
        null != S &&
        A.Ay.getSelectedProjectId(S) === e &&
        d.Ay.getChannelId() === T.VV.CONJURE &&
        f.A.isWindowFocused()
    ) {
        g && (0, a.Ak)(R, D);
        return;
    }
    let N = t ?? (0, I.oX)(y);
    f.A.presentTurnNotification({
        projectId: e,
        guildId: N,
        title: n,
        body: i.replace(v, (e, t) => {
            let n = _.default.getUser(t);
            return null == n ? e : `@${E.Ay.getName(n)}`;
        }),
        route: null == N ? null : p.BVt.CHANNEL(N, T.VV.CONJURE, e),
        sound: g ? R : void 0,
        volume: D,
    });
}
let R = "bit_message1",
    L = "message1",
    y = "VibegrationsChatStore",
    D = 0.4,
    v = /<@!?(\d+)>/g,
    b = new Map();
