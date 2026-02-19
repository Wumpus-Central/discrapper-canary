"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(604681),
    a = n(672385),
    o = n(950191),
    c = n(168015),
    d = n(761640),
    u = n(58736),
    h = n(652215),
    A = n(985018);
function p(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        p = (0, s.bG)([d.Ay], () => d.Ay.getSection(t.id, t?.isDM())),
        g = (0, o.Ay)(t.getRecipientId()),
        m = (0, c.A)(),
        _ = p === h.YvQ.PROFILE && m;
    return (0, i.jsx)(u.In, {
        disabled: !m || n,
        tooltip: !m || n ? A.intl.string(A.t.YneDgF) : _ ? A.intl.string(A.t.niD64e) : A.intl.string(A.t["+FAsHq"]),
        icon: l.nRI,
        onClick: () => {
            (0, a.am)({ displayProfile: g, isProfileOpen: !_ }), r.A.toggleUserProfileSidebarSection();
        },
        selected: _ && m && !n,
    });
}
