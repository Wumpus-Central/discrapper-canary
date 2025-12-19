n.d(t, { Z: () => S });
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
    f = n(843638),
    h = n(441061),
    m = n(167675),
    g = n(532239),
    b = n(811423),
    y = n(418469),
    C = n(673539),
    v = n(589049),
    x = n(354459),
    O = n(981631),
    E = n(388032),
    j = n(898742);
function S(e) {
    let { onClose: t, onSelect: n, channel: S, remoteMode: _, onInteraction: P } = e,
        I = (0, s.bp)(),
        { id: Z, type: T } = S,
        N = (0, r.e7)([u.Z], () => u.Z.getGuild(S.guild_id), [S.guild_id]),
        A = (0, r.e7)([d.Z], () => d.Z.getSelectedParticipant(Z)),
        w = (null == A ? void 0 : A.type) === x.fO.STREAM ? A.stream : null,
        M = (0, r.e7)([a.Z], () =>
            (null == A ? void 0 : A.type) === x.fO.ACTIVITY ? a.Z.getApplication(A.applicationId) : void 0,
        ),
        R = (0, h.Z)(Z),
        D = (0, C.Z)(Z),
        k = (0, g.Z)(S, N, null == w ? void 0 : w.ownerId, null == M ? void 0 : M.id),
        L = (0, f.Z)(Z),
        U = (0, v.Z)(),
        V = (0, c.$A)(Z),
        H = (0, c.j8)(Z),
        F = (0, y.Z)(w, I),
        B = (0, b.Z)(M, Z),
        G = (0, m.Z)(),
        W = (0, o.Z)(S),
        z = (0, p.m)(Z);
    return (0, i.jsxs)(l.v2r, {
        className: j.menu,
        onClose: t,
        onSelect: n,
        onInteraction: P,
        navId: "more-settings-context",
        "aria-label": E.intl.string(E.t.FTLzdR),
        children: [
            (0, i.jsx)(l.kSQ, { children: T !== O.d4z.GUILD_STAGE_VOICE ? k : null }),
            (0, i.jsxs)(l.kSQ, {
                children: [
                    T === O.d4z.GUILD_STAGE_VOICE ? V : null,
                    T === O.d4z.GUILD_STAGE_VOICE ? H : null,
                    _ || T === O.d4z.GUILD_STAGE_VOICE ? null : L,
                    G,
                    T !== O.d4z.GUILD_STAGE_VOICE ? R : null,
                    T === O.d4z.GUILD_STAGE_VOICE || T === O.d4z.GUILD_VOICE ? D : null,
                ],
            }),
            (0, i.jsx)(l.kSQ, { children: W }),
            (0, i.jsxs)(l.kSQ, {
                children: [!S.isManaged() && S.isPrivate() ? z : null, U],
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [null != w ? F : null, null != M ? B : null],
            }),
        ],
    });
}
