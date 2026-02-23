"use strict";
n.d(t, { A: () => N });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(587895),
    a = n(690953),
    o = n(267102),
    c = n(516311),
    d = n(71393),
    u = n(313961),
    h = n(457246),
    A = n(973937),
    p = n(854182),
    g = n(734337),
    m = n(834857),
    _ = n(451556),
    f = n(74329),
    x = n(956747),
    C = n(470743),
    E = n(806931),
    I = n(652215),
    b = n(985018);
function N(e) {
    let { onClose: t, onSelect: n, channel: N, remoteMode: S, onInteraction: T } = e,
        y = (0, o.Us)(),
        { id: v, type: j } = N,
        R = (0, s.bG)([d.A], () => d.A.getGuild(N.guild_id), [N.guild_id]),
        O = (0, s.bG)([u.A], () => u.A.getSelectedParticipant(v)),
        L = O?.type === E.lp.STREAM ? O.stream : null,
        M = (0, s.bG)([r.A], () => (O?.type === E.lp.ACTIVITY ? r.A.getApplication(O.applicationId) : void 0)),
        D = (0, p.A)(v),
        G = (0, x.A)(v),
        U = (0, m.A)(N, R, L?.ownerId, M?.id),
        P = (0, A.A)(v),
        w = (0, C.A)(),
        k = (0, c.RQ)(v),
        V = (0, c.dA)(v),
        B = (0, f.A)(L, y),
        H = (0, _.A)(M, v),
        F = (0, g.A)(),
        K = (0, a.A)(N),
        W = (0, h.f)(v);
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        onClose: t,
        onSelect: n,
        onInteraction: T,
        navId: "more-settings-context",
        "aria-label": b.intl.string(b.t.FTLzdR),
        children: [
            (0, i.jsx)(l.rXV, { children: j !== I.rbe.GUILD_STAGE_VOICE ? U : null }),
            (0, i.jsxs)(l.rXV, {
                children: [
                    j === I.rbe.GUILD_STAGE_VOICE ? k : null,
                    j === I.rbe.GUILD_STAGE_VOICE ? V : null,
                    S || j === I.rbe.GUILD_STAGE_VOICE ? null : P,
                    F,
                    j !== I.rbe.GUILD_STAGE_VOICE ? D : null,
                    j === I.rbe.GUILD_STAGE_VOICE || j === I.rbe.GUILD_VOICE ? G : null,
                ],
            }),
            (0, i.jsx)(l.rXV, { children: K }),
            (0, i.jsxs)(l.rXV, { children: [w, !N.isManaged() && N.isPrivate() ? W : null] }),
            (0, i.jsxs)(l.rXV, { children: [null != L ? B : null, null != M ? H : null] }),
        ],
    });
}
