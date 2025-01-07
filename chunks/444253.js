n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(812206),
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
function C(e) {
    let { channelId: t, onClose: n, appContext: C, exitFullScreen: x, onSelect: v } = e,
        _ = (0, l.e7)([o.Z], () => o.Z.getSelectedParticipant(t)),
        I = (null == _ ? void 0 : _.type) === f.fO.STREAM ? _.stream : null,
        E = (0, l.e7)([a.Z], () => ((null == _ ? void 0 : _.type) === f.fO.ACTIVITY ? a.Z.getApplication(_.id) : void 0)),
        b = (0, c.Z)(t),
        Z = (0, u.Z)(),
        N = (0, d.Z)(t),
        S = (0, m.Z)(t),
        T = (0, h.Z)(E, t),
        j = (0, s.Z)({
            id: null == E ? void 0 : E.id,
            label: g.intl.string(g.t['+NP/b2'])
        });
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-call-overflow-popout',
        onClose: n,
        'aria-label': g.intl.string(g.t.pkYeAw),
        onSelect: v,
        children: [b, Z, N, S, (0, p.Z)(I, C, x), T, (0, i.jsx)(r.MenuGroup, { children: j })]
    });
}
