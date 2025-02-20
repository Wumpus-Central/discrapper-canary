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
    let { channelId: t, onClose: n, appContext: b, exitFullScreen: _, onSelect: C } = e,
        v = (0, i.e7)([s.Z], () => s.Z.getSelectedParticipant(t)),
        y = (null == v ? void 0 : v.type) === m.fO.STREAM ? v.stream : null,
        x = (0, i.e7)([o.Z], () => ((null == v ? void 0 : v.type) === m.fO.ACTIVITY ? o.Z.getApplication(v.applicationId) : void 0)),
        j = (0, c.Z)(t),
        O = (0, d.Z)(),
        N = (0, u.Z)(t),
        E = (0, f.Z)(t),
        P = (0, p.Z)(x, t),
        I = (0, a.Z)({
            id: null == x ? void 0 : x.id,
            label: g.NW.string(g.t['+NP/b2'])
        });
    return (0, r.jsxs)(l.v2r, {
        navId: 'channel-call-overflow-popout',
        onClose: n,
        'aria-label': g.NW.string(g.t.pkYeAw),
        onSelect: C,
        children: [j, O, N, E, (0, h.Z)(y, b, _), P, (0, r.jsx)(l.kSQ, { children: I })]
    });
}
