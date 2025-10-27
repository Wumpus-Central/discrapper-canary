n.d(t, { Z: () => j });
var i = n(951288);
n(647438);
var r = n(442837),
    l = n(481060),
    a = n(812206),
    o = n(420529),
    s = n(728285),
    c = n(831002),
    u = n(430824),
    d = n(358221),
    p = n(843638),
    h = n(441061),
    f = n(167675),
    m = n(532239),
    g = n(811423),
    b = n(418469),
    C = n(673539),
    y = n(589049),
    _ = n(354459),
    v = n(981631),
    x = n(388032),
    O = n(895634);
function j(e) {
    let { onClose: t, onSelect: n, channel: j, remoteMode: E, onInteraction: S } = e,
        P = (0, s.bp)(),
        { id: I, type: Z } = j,
        T = (0, r.e7)([u.Z], () => u.Z.getGuild(j.guild_id), [j.guild_id]),
        N = (0, r.e7)([d.Z], () => d.Z.getSelectedParticipant(I)),
        A = (null == N ? void 0 : N.type) === _.fO.STREAM ? N.stream : null,
        w = (0, r.e7)([a.Z], () =>
            (null == N ? void 0 : N.type) === _.fO.ACTIVITY ? a.Z.getApplication(N.applicationId) : void 0,
        ),
        M = (0, h.Z)(I),
        R = (0, C.Z)(I),
        L = (0, m.Z)(j, T, null == A ? void 0 : A.ownerId, null == w ? void 0 : w.id),
        D = (0, p.Z)(I),
        k = (0, y.Z)(),
        U = (0, c.$A)(I),
        B = (0, c.j8)(I),
        H = (0, b.Z)(A, P),
        F = (0, g.Z)(w, I),
        V = (0, f.Z)(),
        G = (0, o.Z)(j);
    return (0, i.jsxs)(l.v2r, {
        className: O.menu,
        onClose: t,
        onSelect: n,
        onInteraction: S,
        navId: "more-settings-context",
        "aria-label": x.intl.string(x.t.FTLzdR),
        children: [
            (0, i.jsx)(l.kSQ, { children: Z !== v.d4z.GUILD_STAGE_VOICE ? L : null }),
            (0, i.jsxs)(l.kSQ, {
                children: [
                    Z === v.d4z.GUILD_STAGE_VOICE ? U : null,
                    Z === v.d4z.GUILD_STAGE_VOICE ? B : null,
                    E || Z === v.d4z.GUILD_STAGE_VOICE ? null : D,
                    V,
                    Z !== v.d4z.GUILD_STAGE_VOICE ? M : null,
                    Z === v.d4z.GUILD_STAGE_VOICE || Z === v.d4z.GUILD_VOICE ? R : null,
                ],
            }),
            (0, i.jsx)(l.kSQ, { children: G }),
            (0, i.jsx)(l.kSQ, { children: k }),
            (0, i.jsxs)(l.kSQ, {
                children: [null != A ? H : null, null != w ? F : null],
            }),
        ],
    });
}
