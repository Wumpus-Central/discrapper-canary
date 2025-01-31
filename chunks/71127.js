n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(657707),
    a = n(475179),
    r = n(325708),
    s = n(665149),
    o = n(909820),
    c = n(388032);
function d(e) {
    let { channel: t, maxWidth: n } = e,
        d = (0, i.jsx)(s.ZP.Icon, {
            icon: l.Dio,
            tooltip: c.intl.string(c.t.cpT0Cg),
            onClick: () => a.Z.toggleParticipantsList(t.id, !1)
        });
    return (0, i.jsx)(r.Z, {
        sidebarType: r.y.ParticipantsSidebar,
        maxWidth: n,
        floatingLayer: o.ZP,
        children: (0, i.jsxs)(s.ZP, {
            toolbar: d,
            'aria-label': c.intl.string(c.t.jNqDh4),
            children: [
                (0, i.jsx)(s.ZP.Icon, {
                    icon: l.BFJ,
                    disabled: !0,
                    'aria-label': c.intl.string(c.t.jNqDh4)
                }),
                (0, i.jsx)(s.ZP.Title, { children: c.intl.string(c.t.jNqDh4) })
            ]
        })
    });
}
