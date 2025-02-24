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
    C = n(589049),
    v = n(354459),
    y = n(981631),
    x = n(388032),
    j = n(694189);
function O(e) {
    let { onClose: t, onSelect: n, channel: O, remoteMode: E, onInteraction: N } = e,
        I = (0, o.bp)(),
        { id: P, type: S } = O,
        Z = (0, i.e7)([u.Z], () => u.Z.getGuild(O.guild_id), [O.guild_id]),
        T = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(P)),
        A = (null == T ? void 0 : T.type) === v.fO.STREAM ? T.stream : null,
        w = (0, i.e7)([a.Z], () => ((null == T ? void 0 : T.type) === v.fO.ACTIVITY ? a.Z.getApplication(T.applicationId) : void 0)),
        R = (0, h.Z)(P),
        M = (0, _.Z)(P),
        k = (0, m.Z)(O, Z, null == A ? void 0 : A.ownerId, null == w ? void 0 : w.id),
        L = (0, p.Z)(P),
        D = (0, C.Z)(),
        W = (0, c.$A)(P),
        U = (0, c.j8)(P),
        B = (0, b.Z)(A, I),
        F = (0, g.Z)(w, P),
        H = (0, f.Z)(),
        G = (0, s.Z)(O);
    return (0, r.jsxs)(l.v2r, {
        className: j.menu,
        onClose: t,
        onSelect: n,
        onInteraction: N,
        navId: 'more-settings-context',
        'aria-label': x.NW.string(x.t.FTLzdX),
        children: [
            (0, r.jsx)(l.kSQ, { children: S !== y.d4z.GUILD_STAGE_VOICE ? k : null }),
            (0, r.jsxs)(l.kSQ, {
                children: [S === y.d4z.GUILD_STAGE_VOICE ? W : null, S === y.d4z.GUILD_STAGE_VOICE ? U : null, E || S === y.d4z.GUILD_STAGE_VOICE ? null : L, H, S !== y.d4z.GUILD_STAGE_VOICE ? R : null, S === y.d4z.GUILD_STAGE_VOICE || S === y.d4z.GUILD_VOICE ? M : null]
            }),
            (0, r.jsx)(l.kSQ, { children: G }),
            (0, r.jsx)(l.kSQ, { children: D }),
            (0, r.jsxs)(l.kSQ, {
                children: [null != A ? B : null, null != w ? F : null]
            })
        ]
    });
}
