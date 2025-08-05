n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(657707),
    a = n(475179),
    o = n(325708),
    s = n(665149),
    l = n(909820),
    c = n(388032);
function u(e) {
    let { channel: t, maxWidth: n } = e,
        u = () => a.Z.toggleParticipantsList(t.id, !1),
        d = (0, r.jsx)(s.ZP.Icon, {
            icon: i.Dio,
            tooltip: c.intl.string(c.t.cpT0Cg),
            onClick: u
        });
    return (0, r.jsx)(o.Z, {
        sidebarType: o.y.ParticipantsSidebar,
        maxWidth: n,
        floatingLayer: l.ZP,
        children: (0, r.jsxs)(s.ZP, {
            toolbar: d,
            'aria-label': c.intl.string(c.t.jNqDh4),
            children: [
                (0, r.jsx)(s.ZP.Icon, {
                    icon: i.BFJ,
                    disabled: !0,
                    'aria-label': c.intl.string(c.t.jNqDh4)
                }),
                (0, r.jsx)(s.ZP.Title, { children: c.intl.string(c.t.jNqDh4) })
            ]
        })
    });
}
