n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(587895),
    a = n(690953),
    o = n(267102),
    c = n(516311),
    u = n(71393),
    d = n(313961),
    p = n(457246),
    h = n(973937),
    f = n(854182),
    g = n(734337),
    m = n(834857),
    b = n(451556),
    A = n(74329),
    y = n(956747),
    _ = n(470743),
    O = n(806931),
    j = n(652215),
    v = n(985018),
    x = n(220636);

function E(e) {
    let { onClose: t, onSelect: n, channel: E, remoteMode: C, onInteraction: S } = e,
        I = (0, o.Us)(),
        { id: N, type: T } = E,
        P = (0, l.bG)([u.A], () => u.A.getGuild(E.guild_id), [E.guild_id]),
        w = (0, l.bG)([d.A], () => d.A.getSelectedParticipant(N)),
        R = (null == w ? void 0 : w.type) === O.lp.STREAM ? w.stream : null,
        D = (0, l.bG)([s.A], () =>
            (null == w ? void 0 : w.type) === O.lp.ACTIVITY ? s.A.getApplication(w.applicationId) : void 0,
        ),
        M = (0, f.A)(N),
        L = (0, y.A)(N),
        k = (0, m.A)(E, P, null == R ? void 0 : R.ownerId, null == D ? void 0 : D.id),
        G = (0, h.A)(N),
        U = (0, _.A)(),
        B = (0, c.RQ)(N),
        V = (0, c.dA)(N),
        F = (0, A.A)(R, I),
        H = (0, b.A)(D, N),
        K = (0, g.A)(),
        W = (0, a.A)(E),
        z = (0, p.f)(N);
    return (0, r.jsxs)(i.W1t, {
        "data-menu-mixed": !0,
        className: x.MK,
        onClose: t,
        onSelect: n,
        onInteraction: S,
        navId: "more-settings-context",
        "aria-label": v.intl.string(v.t.FTLzdR),
        children: [
            (0, r.jsx)(i.rXV, {
                children: T !== j.rbe.GUILD_STAGE_VOICE ? k : null,
            }),
            (0, r.jsxs)(i.rXV, {
                children: [
                    T === j.rbe.GUILD_STAGE_VOICE ? B : null,
                    T === j.rbe.GUILD_STAGE_VOICE ? V : null,
                    C || T === j.rbe.GUILD_STAGE_VOICE ? null : G,
                    K,
                    T !== j.rbe.GUILD_STAGE_VOICE ? M : null,
                    T === j.rbe.GUILD_STAGE_VOICE || T === j.rbe.GUILD_VOICE ? L : null,
                ],
            }),
            (0, r.jsx)(i.rXV, {
                children: W,
            }),
            (0, r.jsxs)(i.rXV, {
                children: [!E.isManaged() && E.isPrivate() ? z : null, U],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [null != R ? F : null, null != D ? H : null],
            }),
        ],
    });
}
