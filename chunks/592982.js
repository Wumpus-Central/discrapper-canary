n.d(t, {
    A: () => _,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(587895),
    s = n(690953),
    o = n(267102),
    c = n(516311),
    u = n(71393),
    d = n(313961),
    f = n(457246),
    p = n(973937),
    h = n(854182),
    b = n(734337),
    g = n(834857),
    m = n(451556),
    A = n(74329),
    y = n(956747),
    O = n(470743),
    j = n(806931),
    v = n(652215),
    x = n(985018),
    E = n(220636);

function _(e) {
    let { onClose: t, onSelect: n, channel: _, remoteMode: C, onInteraction: S } = e,
        I = (0, o.Us)(),
        { id: N, type: T } = _,
        P = (0, l.bG)([u.A], () => u.A.getGuild(_.guild_id), [_.guild_id]),
        w = (0, l.bG)([d.A], () => d.A.getSelectedParticipant(N)),
        R = (null == w ? void 0 : w.type) === j.lp.STREAM ? w.stream : null,
        D = (0, l.bG)([a.A], () =>
            (null == w ? void 0 : w.type) === j.lp.ACTIVITY ? a.A.getApplication(w.applicationId) : void 0,
        ),
        M = (0, h.A)(N),
        L = (0, y.A)(N),
        G = (0, g.A)(_, P, null == R ? void 0 : R.ownerId, null == D ? void 0 : D.id),
        k = (0, p.A)(N),
        U = (0, O.A)(),
        V = (0, c.RQ)(N),
        F = (0, c.dA)(N),
        H = (0, A.A)(R, I),
        B = (0, m.A)(D, N),
        K = (0, b.A)(),
        W = (0, s.A)(_),
        z = (0, f.f)(N);
    return (0, r.jsxs)(i.W1t, {
        className: E.MK,
        onClose: t,
        onSelect: n,
        onInteraction: S,
        navId: "more-settings-context",
        "aria-label": x.intl.string(x.t.FTLzdR),
        children: [
            (0, r.jsx)(i.rXV, {
                children: T !== v.rbe.GUILD_STAGE_VOICE ? G : null,
            }),
            (0, r.jsxs)(i.rXV, {
                children: [
                    T === v.rbe.GUILD_STAGE_VOICE ? V : null,
                    T === v.rbe.GUILD_STAGE_VOICE ? F : null,
                    C || T === v.rbe.GUILD_STAGE_VOICE ? null : k,
                    K,
                    T !== v.rbe.GUILD_STAGE_VOICE ? M : null,
                    T === v.rbe.GUILD_STAGE_VOICE || T === v.rbe.GUILD_VOICE ? L : null,
                ],
            }),
            (0, r.jsx)(i.rXV, {
                children: W,
            }),
            (0, r.jsxs)(i.rXV, {
                children: [!_.isManaged() && _.isPrivate() ? z : null, U],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [null != R ? H : null, null != D ? B : null],
            }),
        ],
    });
}
