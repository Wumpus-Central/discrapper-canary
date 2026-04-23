n.d(t, { z: () => u });
var i = n(627968),
    r = n(311907),
    a = n(287070),
    l = n(101058),
    s = n(836602),
    o = n(927578),
    c = n(132198),
    d = n(83554);
let u = (e) => {
    let { user: t } = e,
        n = o.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: u, ..._ } = (0, r.cf)([s.A], () => s.A.getPendingChanges()),
        m = (0, l.V7)({ userId: t.id, image: u });
    return (0, i.jsx)("div", {
        className: d.k,
        children: (0, i.jsx)(a.A, {
            ..._,
            pendingAvatar: m,
            user: t,
            pendingBadges: [(0, c._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
