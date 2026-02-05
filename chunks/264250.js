n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(934551),
    s = n(367513),
    a = n(812771),
    r = n(58736),
    o = n(43189),
    d = n(985018);
function c(e) {
    let { channel: t, maxWidth: n } = e,
        c = (0, i.jsx)(r.Ay.Icon, {
            icon: l.XSmallIcon,
            tooltip: d.intl.string(d.t.cpT0Cq),
            onClick: () => s.A.toggleParticipantsList(t.id, !1),
        });
    return (0, i.jsx)(a.A, {
        sidebarType: a.X.ParticipantsSidebar,
        maxWidth: n,
        floatingLayer: o.Ay,
        children: (0, i.jsxs)(r.Ay, {
            toolbar: c,
            "aria-label": d.intl.string(d.t["jNqDh/"]),
            children: [
                (0, i.jsx)(r.Ay.Icon, { icon: l.GroupIcon, disabled: !0, "aria-label": d.intl.string(d.t["jNqDh/"]) }),
                (0, i.jsx)(r.Ay.Title, { children: d.intl.string(d.t["jNqDh/"]) }),
            ],
        }),
    });
}
