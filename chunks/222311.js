n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(935649),
    d = n(847599),
    s = n(71393),
    o = n(287809),
    u = n(977997),
    c = n(849736),
    A = n(776781),
    g = n(312006),
    E = n(150401),
    _ = n(354583),
    b = n(418208),
    f = n(985018);
function m(e) {
    let t = (0, _.A)(),
        n = t?.id,
        m = t?.guild_id,
        C = (0, l.bG)([s.A], () => s.A.getGuild(m), [m]),
        h = (0, l.bG)([u.A], () => (null != n ? u.A.getVoiceStateForChannel(n, e.id) : null), [n, e.id]),
        M = o.default.getCurrentUser()?.id === e.id,
        S = (0, E.A)(),
        x = (0, l.bG)([g.Ay], () => g.Ay.getPermissionsForUser(e.id, n), [n, e.id]),
        I = (0, A.Ni)(n),
        D = (0, b.zU)();
    if (null == t || null == C || null == h || x.speaker) return null;
    let v = () => {
        if (M) {
            if ((0, b.Cf)(t.id))
                return void r.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND });
            (0, c.e7)(t, !1);
        } else (0, c.SA)(t, e.id);
    };
    return M && D
        ? null
        : I
          ? (0, i.jsx)(a.Drp, {
                id: "invite-speaker",
                label: M ? f.intl.string(f.t["W6c/Vf"]) : f.intl.string(f.t.VUCWcO),
                action: v,
            })
          : S && M
            ? (0, i.jsx)(a.Drp, { id: "invite-speaker", label: f.intl.string(f.t["W6c/Vf"]), action: v })
            : null;
}
