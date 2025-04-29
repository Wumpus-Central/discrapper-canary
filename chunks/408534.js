n.d(t, { Z: () => O });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(40851),
    a = n(812206),
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
    let { onClose: t, onSelect: n, channel: O, remoteMode: E, onInteraction: I } = e,
        S = (0, o.bp)(),
        { id: P, type: Z } = O,
        N = (0, i.e7)([u.Z], () => u.Z.getGuild(O.guild_id), [O.guild_id]),
        T = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(P)),
        A = (null == T ? void 0 : T.type) === C.fO.STREAM ? T.stream : null,
        w = (0, i.e7)([a.Z], () => ((null == T ? void 0 : T.type) === C.fO.ACTIVITY ? a.Z.getApplication(T.applicationId) : void 0)),
        R = (0, h.Z)(P),
        k = (0, _.Z)(P),
        M = (0, m.Z)(O, N, null == A ? void 0 : A.ownerId, null == w ? void 0 : w.id),
        L = (0, p.Z)(P),
        D = (0, y.Z)(),
        U = (0, c.$A)(P),
        B = (0, c.j8)(P),
        G = (0, b.Z)(A, S),
        F = (0, g.Z)(w, P),
        H = (0, f.Z)(),
        V = (0, s.Z)(O);
    return (0, r.jsxs)(l.v2r, {
        className: j.menu,
        onClose: t,
        onSelect: n,
        onInteraction: I,
        navId: 'more-settings-context',
        'aria-label': v.intl.string(v.t.FTLzdX),
        children: [
            (0, r.jsx)(l.kSQ, { children: Z !== x.d4z.GUILD_STAGE_VOICE ? M : null }),
            (0, r.jsxs)(l.kSQ, {
                children: [Z === x.d4z.GUILD_STAGE_VOICE ? U : null, Z === x.d4z.GUILD_STAGE_VOICE ? B : null, E || Z === x.d4z.GUILD_STAGE_VOICE ? null : L, H, Z !== x.d4z.GUILD_STAGE_VOICE ? R : null, Z === x.d4z.GUILD_STAGE_VOICE || Z === x.d4z.GUILD_VOICE ? k : null]
            }),
            (0, r.jsx)(l.kSQ, { children: V }),
            (0, r.jsx)(l.kSQ, { children: D }),
            (0, r.jsxs)(l.kSQ, {
                children: [null != A ? G : null, null != w ? F : null]
            })
        ]
    });
}
