n.d(t, { Z: () => I });
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
    p = n(532239),
    m = n(811423),
    f = n(418469),
    g = n(673539),
    _ = n(589049),
    C = n(354459),
    x = n(981631),
    v = n(388032),
    E = n(821948);
function I(e) {
    let { onClose: t, onSelect: n, channel: I } = e,
        b = (0, r.bp)(),
        { id: Z, type: N } = I,
        T = (0, l.e7)([c.Z], () => c.Z.getGuild(I.guild_id), [I.guild_id]),
        S = (0, l.e7)([d.Z], () => d.Z.getSelectedParticipant(Z)),
        j = (null == S ? void 0 : S.type) === C.fO.STREAM ? S.stream : null,
        y = (0, l.e7)([s.Z], () => ((null == S ? void 0 : S.type) === C.fO.ACTIVITY ? s.Z.getApplication(S.applicationId) : void 0)),
        A = (0, h.Z)(Z),
        P = (0, g.Z)(Z),
        R = (0, p.Z)(I, T, null == j ? void 0 : j.ownerId, null == y ? void 0 : y.id),
        M = (0, u.Z)(Z),
        L = (0, _.Z)(),
        k = (0, o.$A)(Z),
        O = (0, o.j8)(Z),
        D = (0, f.Z)(j, b),
        w = (0, m.Z)(y, Z);
    return (0, i.jsxs)(a.v2r, {
        className: E.menu,
        onClose: t,
        onSelect: n,
        navId: 'more-settings-context',
        'aria-label': v.intl.string(v.t.FTLzdX),
        children: [
            (0, i.jsx)(a.kSQ, { children: N !== x.d4z.GUILD_STAGE_VOICE ? R : null }),
            (0, i.jsxs)(a.kSQ, {
                children: [N !== x.d4z.GUILD_STAGE_VOICE ? M : null, N !== x.d4z.GUILD_STAGE_VOICE ? A : null, N === x.d4z.GUILD_STAGE_VOICE ? k : null, N === x.d4z.GUILD_STAGE_VOICE || N === x.d4z.GUILD_VOICE ? P : null, N === x.d4z.GUILD_STAGE_VOICE ? O : null]
            }),
            (0, i.jsx)(a.kSQ, { children: L }),
            (0, i.jsxs)(a.kSQ, {
                children: [null != j ? D : null, null != y ? w : null]
            })
        ]
    });
}
