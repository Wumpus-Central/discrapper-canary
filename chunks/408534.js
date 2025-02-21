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
    let { onClose: t, onSelect: n, channel: O, remoteMode: N } = e,
        E = (0, o.bp)(),
        { id: P, type: I } = O,
        S = (0, i.e7)([u.Z], () => u.Z.getGuild(O.guild_id), [O.guild_id]),
        Z = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(P)),
        T = (null == Z ? void 0 : Z.type) === v.fO.STREAM ? Z.stream : null,
        A = (0, i.e7)([a.Z], () => ((null == Z ? void 0 : Z.type) === v.fO.ACTIVITY ? a.Z.getApplication(Z.applicationId) : void 0)),
        w = (0, h.Z)(P),
        R = (0, _.Z)(P),
        k = (0, m.Z)(O, S, null == T ? void 0 : T.ownerId, null == A ? void 0 : A.id),
        M = (0, p.Z)(P),
        L = (0, C.Z)(),
        D = (0, c.$A)(P),
        W = (0, c.j8)(P),
        U = (0, b.Z)(T, E),
        B = (0, g.Z)(A, P),
        F = (0, f.Z)(),
        H = (0, s.Z)(O);
    return (0, r.jsxs)(l.v2r, {
        className: j.menu,
        onClose: t,
        onSelect: n,
        navId: 'more-settings-context',
        'aria-label': x.NW.string(x.t.FTLzdX),
        children: [
            (0, r.jsx)(l.kSQ, { children: I !== y.d4z.GUILD_STAGE_VOICE ? k : null }),
            (0, r.jsxs)(l.kSQ, {
                children: [I === y.d4z.GUILD_STAGE_VOICE ? D : null, I === y.d4z.GUILD_STAGE_VOICE ? W : null, N || I === y.d4z.GUILD_STAGE_VOICE ? null : M, F, I !== y.d4z.GUILD_STAGE_VOICE ? w : null, I === y.d4z.GUILD_STAGE_VOICE || I === y.d4z.GUILD_VOICE ? R : null]
            }),
            (0, r.jsx)(l.kSQ, { children: H }),
            (0, r.jsx)(l.kSQ, { children: L }),
            (0, r.jsxs)(l.kSQ, {
                children: [null != T ? U : null, null != A ? B : null]
            })
        ]
    });
}
