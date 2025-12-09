n.d(t, { Z: () => j });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(812206),
    o = n(420529),
    s = n(728285),
    c = n(831002),
    u = n(430824),
    d = n(358221),
    p = n(225653),
    h = n(843638),
    f = n(441061),
    m = n(167675),
    g = n(532239),
    b = n(811423),
    C = n(418469),
    y = n(673539),
    _ = n(589049),
    v = n(354459),
    O = n(981631),
    x = n(388032),
    E = n(895634);
function j(e) {
    let { onClose: t, onSelect: n, channel: j, remoteMode: S, onInteraction: P } = e,
        I = (0, s.bp)(),
        { id: Z, type: T } = j,
        N = (0, r.e7)([u.Z], () => u.Z.getGuild(j.guild_id), [j.guild_id]),
        A = (0, r.e7)([d.Z], () => d.Z.getSelectedParticipant(Z)),
        w = (null == A ? void 0 : A.type) === v.fO.STREAM ? A.stream : null,
        M = (0, r.e7)([a.Z], () =>
            (null == A ? void 0 : A.type) === v.fO.ACTIVITY ? a.Z.getApplication(A.applicationId) : void 0,
        ),
        R = (0, f.Z)(Z),
        L = (0, y.Z)(Z),
        D = (0, g.Z)(j, N, null == w ? void 0 : w.ownerId, null == M ? void 0 : M.id),
        k = (0, h.Z)(Z),
        U = (0, _.Z)(),
        V = (0, c.$A)(Z),
        B = (0, c.j8)(Z),
        F = (0, C.Z)(w, I),
        H = (0, b.Z)(M, Z),
        G = (0, m.Z)(),
        W = (0, o.Z)(j),
        z = (0, p.m)(Z);
    return (0, i.jsxs)(l.v2r, {
        className: E.menu,
        onClose: t,
        onSelect: n,
        onInteraction: P,
        navId: "more-settings-context",
        "aria-label": x.intl.string(x.t.FTLzdR),
        children: [
            (0, i.jsx)(l.kSQ, { children: T !== O.d4z.GUILD_STAGE_VOICE ? D : null }),
            (0, i.jsxs)(l.kSQ, {
                children: [
                    T === O.d4z.GUILD_STAGE_VOICE ? V : null,
                    T === O.d4z.GUILD_STAGE_VOICE ? B : null,
                    S || T === O.d4z.GUILD_STAGE_VOICE ? null : k,
                    G,
                    T !== O.d4z.GUILD_STAGE_VOICE ? R : null,
                    T === O.d4z.GUILD_STAGE_VOICE || T === O.d4z.GUILD_VOICE ? L : null,
                ],
            }),
            (0, i.jsx)(l.kSQ, { children: W }),
            (0, i.jsxs)(l.kSQ, {
                children: [!j.isManaged() && j.isPrivate() ? z : null, U],
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [null != w ? F : null, null != M ? H : null],
            }),
        ],
    });
}
