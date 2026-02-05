n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(604681),
    r = n(672385),
    o = n(950191),
    d = n(168015),
    c = n(761640),
    u = n(58736),
    h = n(652215),
    A = n(985018);
function g(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        g = (0, l.bG)([c.Ay], () => c.Ay.getSection(t.id, t?.isDM())),
        m = (0, o.Ay)(t.getRecipientId()),
        p = (0, d.A)(),
        _ = g === h.YvQ.PROFILE && p;
    return (0, i.jsx)(u.In, {
        disabled: !p || n,
        tooltip: !p || n ? A.intl.string(A.t.YneDgF) : _ ? A.intl.string(A.t.niD64e) : A.intl.string(A.t["+FAsHq"]),
        icon: s.nRI,
        onClick: () => {
            (0, r.am)({ displayProfile: m, isProfileOpen: !_ }), a.A.toggleUserProfileSidebarSection();
        },
        selected: _ && p && !n,
    });
}
