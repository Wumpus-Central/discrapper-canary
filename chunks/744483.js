n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(604681),
    s = n(672385),
    o = n(950191),
    c = n(168015),
    u = n(761640),
    d = n(58736),
    f = n(652215),
    p = n(985018);

function h(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        h = (0, l.bG)([u.Ay], () => u.Ay.getSection(t.id, null == t ? void 0 : t.isDM())),
        b = (0, o.Ay)(t.getRecipientId()),
        g = (0, c.A)(),
        m = h === f.YvQ.PROFILE && g;
    return (0, r.jsx)(d.In, {
        disabled: !g || n,
        tooltip: !g || n ? p.intl.string(p.t.YneDgF) : m ? p.intl.string(p.t.niD64e) : p.intl.string(p.t["+FAsHq"]),
        icon: i.nRI,
        onClick: () => {
            (0, s.am)({
                displayProfile: b,
                isProfileOpen: !m,
            }),
                a.A.toggleUserProfileSidebarSection();
        },
        selected: m && g && !n,
    });
}
