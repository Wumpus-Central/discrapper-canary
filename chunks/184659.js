n.d(t, { z: () => u });
var r = n(627968),
    i = n(311907),
    a = n(287070),
    l = n(101058),
    s = n(836602),
    c = n(927578),
    o = n(132198),
    d = n(83554);
let u = (e) => {
    let { user: t } = e,
        n = c.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: u, ..._ } = (0, i.cf)([s.A], () => s.A.getPendingChanges()),
        m = (0, l.V7)({ userId: t.id, image: u });
    return (0, r.jsx)("div", {
        className: d.k,
        children: (0, r.jsx)(a.A, {
            ..._,
            pendingAvatar: m,
            user: t,
            pendingBadges: [(0, o._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
