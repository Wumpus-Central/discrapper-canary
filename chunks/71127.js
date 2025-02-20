n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(657707),
    l = n(475179),
    o = n(325708),
    a = n(665149),
    s = n(909820),
    c = n(388032);
function u(e) {
    let { channel: t, maxWidth: n } = e,
        u = (0, r.jsx)(a.ZP.Icon, {
            icon: i.Dio,
            tooltip: c.NW.string(c.t.cpT0Cg),
            onClick: () => l.Z.toggleParticipantsList(t.id, !1)
        });
    return (0, r.jsx)(o.Z, {
        sidebarType: o.y.ParticipantsSidebar,
        maxWidth: n,
        floatingLayer: s.ZP,
        children: (0, r.jsxs)(a.ZP, {
            toolbar: u,
            'aria-label': c.NW.string(c.t.jNqDh4),
            children: [
                (0, r.jsx)(a.ZP.Icon, {
                    icon: i.BFJ,
                    disabled: !0,
                    'aria-label': c.NW.string(c.t.jNqDh4)
                }),
                (0, r.jsx)(a.ZP.Title, { children: c.NW.string(c.t.jNqDh4) })
            ]
        })
    });
}
