n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(657707),
    l = n(475179),
    a = n(325708),
    o = n(665149),
    s = n(909820),
    c = n(388032);
function u(e) {
    let { channel: t, maxWidth: n } = e,
        u = (0, r.jsx)(o.ZP.Icon, {
            icon: i.Dio,
            tooltip: c.intl.string(c.t.cpT0Cq),
            onClick: () => l.Z.toggleParticipantsList(t.id, !1),
        });
    return (0, r.jsx)(a.Z, {
        sidebarType: a.y.ParticipantsSidebar,
        maxWidth: n,
        floatingLayer: s.ZP,
        children: (0, r.jsxs)(o.ZP, {
            toolbar: u,
            "aria-label": c.intl.string(c.t["jNqDh/"]),
            children: [
                (0, r.jsx)(o.ZP.Icon, {
                    icon: i.BFJ,
                    disabled: !0,
                    "aria-label": c.intl.string(c.t["jNqDh/"]),
                }),
                (0, r.jsx)(o.ZP.Title, { children: c.intl.string(c.t["jNqDh/"]) }),
            ],
        }),
    });
}
