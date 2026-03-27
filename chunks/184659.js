"use strict";
r.d(t, { z: () => u });
var n = r(627968),
    i = r(311907),
    s = r(287070),
    a = r(101058),
    l = r(836602),
    c = r(927578),
    o = r(132198),
    d = r(97853);
let u = (e) => {
    let { user: t } = e,
        r = c.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: u, ...m } = (0, i.cf)([l.A], () => l.A.getPendingChanges()),
        p = (0, a.V7)({ userId: t.id, image: u });
    return (0, n.jsx)("div", {
        className: d.k,
        children: (0, n.jsx)(s.A, {
            ...m,
            pendingAvatar: p,
            user: t,
            pendingBadges: [(0, o._)()],
            canUsePremiumCustomization: r,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
