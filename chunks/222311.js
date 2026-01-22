n.d(t, {
    A: () => y,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(935649),
    o = n(847599),
    u = n(71393),
    c = n(287809),
    s = n(977997),
    d = n(849736),
    A = n(776781),
    b = n(312006),
    f = n(150401),
    g = n(354583),
    O = n(418208),
    p = n(985018);

function y(e) {
    var t;
    let n = (0, g.A)(),
        y = null == n ? void 0 : n.id,
        m = null == n ? void 0 : n.guild_id,
        j = (0, l.bG)([u.A], () => u.A.getGuild(m), [m]),
        E = (0, l.bG)([s.A], () => (null != y ? s.A.getVoiceStateForChannel(y, e.id) : null), [y, e.id]),
        v = (null == (t = c.default.getCurrentUser()) ? void 0 : t.id) === e.id,
        _ = (0, f.A)(),
        h = (0, l.bG)([b.Ay], () => b.Ay.getPermissionsForUser(e.id, y), [y, e.id]),
        S = (0, A.Ni)(y),
        I = (0, O.zU)();
    if (null == n || null == j || null == E || h.speaker) return null;
    let D = () => {
        if (v) {
            if ((0, O.Cf)(n.id))
                return void a.A.showAgeVerificationGetStartedModal({
                    entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND,
                });
            (0, d.e7)(n, !1);
        } else (0, d.SA)(n, e.id);
    };
    return v && I
        ? null
        : S
          ? (0, r.jsx)(i.Drp, {
                id: "invite-speaker",
                label: v ? p.intl.string(p.t["W6c/Vf"]) : p.intl.string(p.t.VUCWcO),
                action: D,
            })
          : _ && v
            ? (0, r.jsx)(i.Drp, {
                  id: "invite-speaker",
                  label: p.intl.string(p.t["W6c/Vf"]),
                  action: D,
              })
            : null;
}
