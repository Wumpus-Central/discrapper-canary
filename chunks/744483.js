n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(604681),
    r = n(672385),
    o = n(950191),
    c = n(168015),
    d = n(761640),
    u = n(58736),
    h = n(652215),
    A = n(985018);
function _(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        _ = (0, l.bG)([d.Ay], () => d.Ay.getSection(t.id, t?.isDM())),
        m = (0, o.Ay)(t.getRecipientId()),
        g = (0, c.A)(),
        p = _ === h.YvQ.PROFILE && g;
    return (0, i.jsx)(u.In, {
        disabled: !g || n,
        tooltip: !g || n ? A.intl.string(A.t.YneDgF) : p ? A.intl.string(A.t.niD64e) : A.intl.string(A.t["+FAsHq"]),
        icon: s.nRI,
        onClick: () => {
            (0, r.am)({ displayProfile: m, isProfileOpen: !p }), a.A.toggleUserProfileSidebarSection();
        },
        selected: p && !n,
    });
}
