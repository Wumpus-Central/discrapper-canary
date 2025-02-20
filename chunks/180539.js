n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(816782),
    a = n(221292),
    s = n(687158),
    c = n(646915),
    u = n(433355),
    d = n(665149),
    p = n(981631),
    h = n(388032);
function f(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        f = (0, i.e7)([u.ZP], () => u.ZP.getSection(t.id, null == t ? void 0 : t.isDM())),
        m = (0, s.ZP)(t.getRecipientId()),
        g = (0, c.Z)(),
        b = f === p.ULH.PROFILE && !g;
    return (0, r.jsx)(d.JO, {
        disabled: g || n,
        tooltip: g || n ? h.NW.string(h.t.YneDgI) : b ? h.NW.string(h.t.niD64e) : h.NW.string(h.t['+FAsHh']),
        icon: l.z65,
        onClick: () => {
            (0, a.TY)({
                displayProfile: m,
                isProfileOpen: !b
            }),
                o.Z.toggleProfilePanelSection();
        },
        selected: b && !g && !n
    });
}
