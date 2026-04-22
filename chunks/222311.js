n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(477782),
    r = n(935649),
    d = n(847599),
    o = n(71393),
    s = n(287809),
    u = n(977997),
    c = n(849736),
    A = n(776781),
    g = n(312006),
    f = n(150401),
    E = n(354583),
    b = n(418208),
    x = n(985018);
function m(e) {
    let t = (0, E.A)(),
        n = t?.id,
        m = t?.guild_id,
        C = (0, l.bG)([o.A], () => o.A.getGuild(m), [m]),
        I = (0, l.bG)([u.A], () => (null != n ? u.A.getVoiceStateForChannel(n, e.id) : null), [n, e.id]),
        h = s.default.getCurrentUser()?.id === e.id,
        S = (0, f.A)(),
        v = (0, l.bG)([g.Ay], () => g.Ay.getPermissionsForUser(e.id, n), [n, e.id]),
        _ = (0, A.Ni)(n),
        M = (0, b.zU)();
    if (null == t || null == C || null == I || v.speaker) return null;
    let D = () => {
        if (h) {
            if ((0, b.Cf)(t.id))
                return void r.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND });
            (0, c.e7)(t, !1);
        } else (0, c.SA)(t, e.id);
    };
    return h && M
        ? null
        : _
          ? (0, i.jsx)(a.Dr, {
                id: "invite-speaker",
                label: h ? x.intl.string(x.t["W6c/Vf"]) : x.intl.string(x.t.VUCWcO),
                action: D,
            })
          : S && h
            ? (0, i.jsx)(a.Dr, { id: "invite-speaker", label: x.intl.string(x.t["W6c/Vf"]), action: D })
            : null;
}
