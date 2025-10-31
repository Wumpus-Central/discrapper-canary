n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(812206),
    o = n(420529),
    s = n(728285),
    c = n(831002),
    u = n(430824),
    d = n(358221),
    p = n(843638),
    f = n(441061),
    h = n(167675),
    m = n(532239),
    g = n(811423),
    b = n(418469),
    _ = n(673539),
    y = n(589049),
    C = n(354459),
    v = n(981631),
    O = n(388032),
    x = n(895634);
function E(e) {
    let { onClose: t, onSelect: n, channel: E, remoteMode: j, onInteraction: S } = e,
        P = (0, s.bp)(),
        { id: I, type: Z } = E,
        T = (0, i.e7)([u.Z], () => u.Z.getGuild(E.guild_id), [E.guild_id]),
        N = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(I)),
        A = (null == N ? void 0 : N.type) === C.fO.STREAM ? N.stream : null,
        w = (0, i.e7)([a.Z], () =>
            (null == N ? void 0 : N.type) === C.fO.ACTIVITY ? a.Z.getApplication(N.applicationId) : void 0,
        ),
        M = (0, f.Z)(I),
        R = (0, _.Z)(I),
        D = (0, m.Z)(E, T, null == A ? void 0 : A.ownerId, null == w ? void 0 : w.id),
        L = (0, p.Z)(I),
        k = (0, y.Z)(),
        U = (0, c.$A)(I),
        B = (0, c.j8)(I),
        F = (0, b.Z)(A, P),
        V = (0, g.Z)(w, I),
        H = (0, h.Z)(),
        G = (0, o.Z)(E);
    return (0, r.jsxs)(l.v2r, {
        className: x.menu,
        onClose: t,
        onSelect: n,
        onInteraction: S,
        navId: "more-settings-context",
        "aria-label": O.intl.string(O.t.FTLzdR),
        children: [
            (0, r.jsx)(l.kSQ, { children: Z !== v.d4z.GUILD_STAGE_VOICE ? D : null }),
            (0, r.jsxs)(l.kSQ, {
                children: [
                    Z === v.d4z.GUILD_STAGE_VOICE ? U : null,
                    Z === v.d4z.GUILD_STAGE_VOICE ? B : null,
                    j || Z === v.d4z.GUILD_STAGE_VOICE ? null : L,
                    H,
                    Z !== v.d4z.GUILD_STAGE_VOICE ? M : null,
                    Z === v.d4z.GUILD_STAGE_VOICE || Z === v.d4z.GUILD_VOICE ? R : null,
                ],
            }),
            (0, r.jsx)(l.kSQ, { children: G }),
            (0, r.jsx)(l.kSQ, { children: k }),
            (0, r.jsxs)(l.kSQ, {
                children: [null != A ? F : null, null != w ? V : null],
            }),
        ],
    });
}
