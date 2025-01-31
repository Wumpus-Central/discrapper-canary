n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(812206),
    s = n(299206),
    o = n(358221),
    c = n(441061),
    d = n(431368),
    u = n(167675),
    h = n(811423),
    p = n(418469),
    m = n(673539),
    f = n(354459),
    g = n(388032);
function _(e) {
    let { channelId: t, onClose: n, appContext: _, exitFullScreen: C, onSelect: x } = e,
        v = (0, l.e7)([o.Z], () => o.Z.getSelectedParticipant(t)),
        E = (null == v ? void 0 : v.type) === f.fO.STREAM ? v.stream : null,
        I = (0, l.e7)([r.Z], () => ((null == v ? void 0 : v.type) === f.fO.ACTIVITY ? r.Z.getApplication(v.applicationId) : void 0)),
        b = (0, c.Z)(t),
        Z = (0, u.Z)(),
        N = (0, d.Z)(t),
        T = (0, m.Z)(t),
        S = (0, h.Z)(I, t),
        j = (0, s.Z)({
            id: null == I ? void 0 : I.id,
            label: g.intl.string(g.t['+NP/b2'])
        });
    return (0, i.jsxs)(a.v2r, {
        navId: 'channel-call-overflow-popout',
        onClose: n,
        'aria-label': g.intl.string(g.t.pkYeAw),
        onSelect: x,
        children: [b, Z, N, T, (0, p.Z)(E, _, C), S, (0, i.jsx)(a.kSQ, { children: j })]
    });
}
