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
    let { channelId: t, onClose: n, appContext: b, exitFullScreen: _, onSelect: y, onInteraction: C } = e,
        x = (0, i.e7)([s.Z], () => s.Z.getSelectedParticipant(t)),
        v = (null == x ? void 0 : x.type) === m.fO.STREAM ? x.stream : null,
        j = (0, i.e7)([o.Z], () => ((null == x ? void 0 : x.type) === m.fO.ACTIVITY ? o.Z.getApplication(x.applicationId) : void 0)),
        O = (0, c.Z)(t),
        E = (0, d.Z)(),
        I = (0, u.Z)(t),
        S = (0, f.Z)(t),
        P = (0, p.Z)(j, t),
        Z = (0, a.Z)({
            id: null == j ? void 0 : j.id,
            label: g.intl.string(g.t['+NP/b2'])
        });
    return (0, r.jsxs)(l.v2r, {
        navId: 'channel-call-overflow-popout',
        onClose: n,
        'aria-label': g.intl.string(g.t.pkYeAw),
        onSelect: y,
        onInteraction: C,
        children: [O, E, I, S, (0, h.Z)(v, b, _), P, (0, r.jsx)(l.kSQ, { children: Z })]
    });
}
