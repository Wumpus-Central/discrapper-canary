n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(812206),
    a = n(299206),
    s = n(358221),
    c = n(441061),
    u = n(431368),
    d = n(167675),
    p = n(811423),
    h = n(418469),
    f = n(673539),
    m = n(354459),
    g = n(388032);
function b(e) {
    let { channelId: t, onClose: n, appContext: b, exitFullScreen: _, onSelect: C, onInteraction: v } = e,
        y = (0, i.e7)([s.Z], () => s.Z.getSelectedParticipant(t)),
        x = (null == y ? void 0 : y.type) === m.fO.STREAM ? y.stream : null,
        j = (0, i.e7)([o.Z], () => ((null == y ? void 0 : y.type) === m.fO.ACTIVITY ? o.Z.getApplication(y.applicationId) : void 0)),
        O = (0, c.Z)(t),
        E = (0, d.Z)(),
        N = (0, u.Z)(t),
        I = (0, f.Z)(t),
        P = (0, p.Z)(j, t),
        S = (0, a.Z)({
            id: null == j ? void 0 : j.id,
            label: g.NW.string(g.t['+NP/b2'])
        });
    return (0, r.jsxs)(l.v2r, {
        navId: 'channel-call-overflow-popout',
        onClose: n,
        'aria-label': g.NW.string(g.t.pkYeAw),
        onSelect: C,
        onInteraction: v,
        children: [O, E, N, I, (0, h.Z)(x, b, _), P, (0, r.jsx)(l.kSQ, { children: S })]
    });
}
