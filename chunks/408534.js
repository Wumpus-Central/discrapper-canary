n.d(t, { Z: () => T });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(40851),
    s = n(812206),
    l = n(420529),
    c = n(831002),
    u = n(430824),
    d = n(358221),
    f = n(843638),
    _ = n(441061),
    p = n(167675),
    h = n(532239),
    m = n(811423),
    g = n(418469),
    E = n(673539),
    b = n(589049),
    y = n(354459),
    O = n(981631),
    v = n(388032),
    I = n(292538);
function T(e) {
    let { onClose: t, onSelect: n, channel: T, remoteMode: S, onInteraction: A } = e,
        N = (0, o.bp)(),
        { id: C, type: w } = T,
        R = (0, i.e7)([u.Z], () => u.Z.getGuild(T.guild_id), [T.guild_id]),
        P = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(C)),
        D = (null == P ? void 0 : P.type) === y.fO.STREAM ? P.stream : null,
        L = (0, i.e7)([s.Z], () => ((null == P ? void 0 : P.type) === y.fO.ACTIVITY ? s.Z.getApplication(P.applicationId) : void 0)),
        x = (0, _.Z)(C),
        k = (0, E.Z)(C),
        j = (0, h.Z)(T, R, null == D ? void 0 : D.ownerId, null == L ? void 0 : L.id),
        M = (0, f.Z)(C),
        U = (0, b.Z)(),
        G = (0, c.$A)(C),
        B = (0, c.j8)(C),
        Z = (0, g.Z)(D, N),
        F = (0, m.Z)(L, C),
        V = (0, p.Z)(),
        H = (0, l.Z)(T);
    return (0, r.jsxs)(a.v2r, {
        className: I.menu,
        onClose: t,
        onSelect: n,
        onInteraction: A,
        navId: 'more-settings-context',
        'aria-label': v.intl.string(v.t.FTLzdX),
        children: [
            (0, r.jsx)(a.kSQ, { children: w !== O.d4z.GUILD_STAGE_VOICE ? j : null }),
            (0, r.jsxs)(a.kSQ, {
                children: [w === O.d4z.GUILD_STAGE_VOICE ? G : null, w === O.d4z.GUILD_STAGE_VOICE ? B : null, S || w === O.d4z.GUILD_STAGE_VOICE ? null : M, V, w !== O.d4z.GUILD_STAGE_VOICE ? x : null, w === O.d4z.GUILD_STAGE_VOICE || w === O.d4z.GUILD_VOICE ? k : null]
            }),
            (0, r.jsx)(a.kSQ, { children: H }),
            (0, r.jsx)(a.kSQ, { children: U }),
            (0, r.jsxs)(a.kSQ, {
                children: [null != D ? Z : null, null != L ? F : null]
            })
        ]
    });
}
