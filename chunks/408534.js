n.d(t, { Z: () => j });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(40851),
    a = n(812206),
    s = n(831002),
    c = n(430824),
    u = n(358221),
    d = n(843638),
    p = n(441061),
    h = n(167675),
    f = n(532239),
    m = n(811423),
    g = n(418469),
    b = n(673539),
    _ = n(589049),
    C = n(354459),
    v = n(981631),
    y = n(388032),
    x = n(694189);
function j(e) {
    let { onClose: t, onSelect: n, channel: j } = e,
        O = (0, o.bp)(),
        { id: N, type: E } = j,
        P = (0, i.e7)([c.Z], () => c.Z.getGuild(j.guild_id), [j.guild_id]),
        I = (0, i.e7)([u.Z], () => u.Z.getSelectedParticipant(N)),
        S = (null == I ? void 0 : I.type) === C.fO.STREAM ? I.stream : null,
        Z = (0, i.e7)([a.Z], () => ((null == I ? void 0 : I.type) === C.fO.ACTIVITY ? a.Z.getApplication(I.applicationId) : void 0)),
        T = (0, p.Z)(N),
        A = (0, b.Z)(N),
        w = (0, f.Z)(j, P, null == S ? void 0 : S.ownerId, null == Z ? void 0 : Z.id),
        R = (0, d.Z)(N),
        k = (0, _.Z)(),
        M = (0, s.$A)(N),
        L = (0, s.j8)(N),
        D = (0, g.Z)(S, O),
        W = (0, m.Z)(Z, N),
        U = (0, h.Z)();
    return (0, r.jsxs)(l.v2r, {
        className: x.menu,
        onClose: t,
        onSelect: n,
        navId: 'more-settings-context',
        'aria-label': y.NW.string(y.t.FTLzdX),
        children: [
            (0, r.jsx)(l.kSQ, { children: E !== v.d4z.GUILD_STAGE_VOICE ? w : null }),
            (0, r.jsxs)(l.kSQ, {
                children: [E === v.d4z.GUILD_STAGE_VOICE ? M : null, E === v.d4z.GUILD_STAGE_VOICE ? L : null, E !== v.d4z.GUILD_STAGE_VOICE ? R : null, U, E !== v.d4z.GUILD_STAGE_VOICE ? T : null, E === v.d4z.GUILD_STAGE_VOICE || E === v.d4z.GUILD_VOICE ? A : null]
            }),
            (0, r.jsx)(l.kSQ, { children: k }),
            (0, r.jsxs)(l.kSQ, {
                children: [null != S ? D : null, null != Z ? W : null]
            })
        ]
    });
}
