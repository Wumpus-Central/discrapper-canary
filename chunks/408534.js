n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(40851),
    o = n(812206),
    s = n(420529),
    c = n(831002),
    u = n(430824),
    d = n(358221),
    p = n(843638),
    h = n(441061),
    f = n(167675),
    m = n(532239),
    g = n(811423),
    b = n(418469),
    _ = n(673539),
    y = n(589049),
    C = n(354459),
    x = n(981631),
    v = n(388032),
    j = n(292538);
function O(e) {
    let { onClose: t, onSelect: n, channel: O, remoteMode: E, onInteraction: S } = e,
        P = (0, a.bp)(),
        { id: I, type: Z } = O,
        T = (0, i.e7)([u.Z], () => u.Z.getGuild(O.guild_id), [O.guild_id]),
        N = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(I)),
        A = (null == N ? void 0 : N.type) === C.fO.STREAM ? N.stream : null,
        w = (0, i.e7)([o.Z], () => ((null == N ? void 0 : N.type) === C.fO.ACTIVITY ? o.Z.getApplication(N.applicationId) : void 0)),
        R = (0, h.Z)(I),
        M = (0, _.Z)(I),
        D = (0, m.Z)(O, T, null == A ? void 0 : A.ownerId, null == w ? void 0 : w.id),
        L = (0, p.Z)(I),
        k = (0, y.Z)(),
        U = (0, c.$A)(I),
        B = (0, c.j8)(I),
        F = (0, b.Z)(A, P),
        H = (0, g.Z)(w, I),
        G = (0, f.Z)(),
        V = (0, s.Z)(O);
    return (0, r.jsxs)(l.v2r, {
        className: j.menu,
        onClose: t,
        onSelect: n,
        onInteraction: S,
        navId: 'more-settings-context',
        'aria-label': v.intl.string(v.t.FTLzdX),
        children: [
            (0, r.jsx)(l.kSQ, { children: Z !== x.d4z.GUILD_STAGE_VOICE ? D : null }),
            (0, r.jsxs)(l.kSQ, {
                children: [Z === x.d4z.GUILD_STAGE_VOICE ? U : null, Z === x.d4z.GUILD_STAGE_VOICE ? B : null, E || Z === x.d4z.GUILD_STAGE_VOICE ? null : L, G, Z !== x.d4z.GUILD_STAGE_VOICE ? R : null, Z === x.d4z.GUILD_STAGE_VOICE || Z === x.d4z.GUILD_VOICE ? M : null]
            }),
            (0, r.jsx)(l.kSQ, { children: V }),
            (0, r.jsx)(l.kSQ, { children: k }),
            (0, r.jsxs)(l.kSQ, {
                children: [null != A ? F : null, null != w ? H : null]
            })
        ]
    });
}
