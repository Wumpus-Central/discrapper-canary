n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(816782),
    s = n(221292),
    o = n(687158),
    c = n(60577),
    d = n(433355),
    u = n(665149),
    h = n(981631),
    p = n(388032);
function f(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        f = (0, i.e7)([d.ZP], () => d.ZP.getSection(t.id, null == t ? void 0 : t.isDM())),
        g = (0, o.ZP)(t.getRecipientId()),
        m = (0, c.Z)(),
        b = f === h.ULH.PROFILE && m;
    return (0, r.jsx)(u.JO, {
        disabled: !m || n,
        tooltip: !m || n ? p.intl.string(p.t.YneDgI) : b ? p.intl.string(p.t.niD64e) : p.intl.string(p.t["+FAsHh"]),
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
