n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(816782),
    s = n(221292),
    o = n(687158),
    c = n(60577),
    d = n(433355),
    u = n(665149),
    p = n(981631),
    h = n(388032);
function f(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        f = (0, i.e7)([d.ZP], () => d.ZP.getSection(t.id, null == t ? void 0 : t.isDM())),
        g = (0, o.ZP)(t.getRecipientId()),
        m = (0, c.Z)(),
        b = f === p.ULH.PROFILE && m;
    return (0, r.jsx)(u.JO, {
        disabled: !m || n,
        tooltip: !m || n ? h.intl.string(h.t.YneDgF) : b ? h.intl.string(h.t.niD64e) : h.intl.string(h.t["+FAsHq"]),
        icon: l.z65,
        onClick: () => {
            (0, s.TY)({
                displayProfile: g,
                isProfileOpen: !b,
            }),
                a.Z.toggleUserProfileSidebarSection();
        },
        selected: b && m && !n,
    });
}
