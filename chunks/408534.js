n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(40851),
    s = n(812206),
    o = n(831002),
    c = n(430824),
    d = n(358221),
    u = n(843638),
    h = n(441061),
    p = n(167675),
    m = n(532239),
    f = n(811423),
    g = n(418469),
    _ = n(673539),
    C = n(589049),
    x = n(354459),
    v = n(981631),
    E = n(388032),
    I = n(821948);
function b(e) {
    let { onClose: t, onSelect: n, channel: b } = e,
        Z = (0, r.bp)(),
        { id: N, type: T } = b,
        S = (0, l.e7)([c.Z], () => c.Z.getGuild(b.guild_id), [b.guild_id]),
        j = (0, l.e7)([d.Z], () => d.Z.getSelectedParticipant(N)),
        y = (null == j ? void 0 : j.type) === x.fO.STREAM ? j.stream : null,
        A = (0, l.e7)([s.Z], () => ((null == j ? void 0 : j.type) === x.fO.ACTIVITY ? s.Z.getApplication(j.applicationId) : void 0)),
        P = (0, h.Z)(N),
        R = (0, _.Z)(N),
        M = (0, m.Z)(b, S, null == y ? void 0 : y.ownerId, null == A ? void 0 : A.id),
        L = (0, u.Z)(N),
        k = (0, C.Z)(),
        O = (0, o.$A)(N),
        D = (0, o.j8)(N),
        w = (0, g.Z)(y, Z),
        U = (0, f.Z)(A, N),
        B = (0, p.Z)();
    return (0, i.jsxs)(a.v2r, {
        className: I.menu,
        onClose: t,
        onSelect: n,
        navId: 'more-settings-context',
        'aria-label': E.intl.string(E.t.FTLzdX),
        children: [
            (0, i.jsx)(a.kSQ, { children: T !== v.d4z.GUILD_STAGE_VOICE ? M : null }),
            (0, i.jsxs)(a.kSQ, {
                children: [T === v.d4z.GUILD_STAGE_VOICE ? O : null, T === v.d4z.GUILD_STAGE_VOICE ? D : null, T !== v.d4z.GUILD_STAGE_VOICE ? L : null, B, T !== v.d4z.GUILD_STAGE_VOICE ? P : null, T === v.d4z.GUILD_STAGE_VOICE || T === v.d4z.GUILD_VOICE ? R : null]
            }),
            (0, i.jsx)(a.kSQ, { children: k }),
            (0, i.jsxs)(a.kSQ, {
                children: [null != y ? w : null, null != A ? U : null]
            })
        ]
    });
}
