n.d(t, { z: () => d });
var r = n(627968),
    i = n(17928),
    l = n(986687),
    a = n(101058),
    s = n(836602),
    o = n(428262),
    c = n(576052),
    u = n(83554);
let d = (e) => {
    let { user: t } = e,
        n = o.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: d, ...m } = (0, i.cf)([s.A], () => s.A.getPendingChanges()),
        R = (0, a.V7)({ userId: t.id, image: d });
    return (0, r.jsx)("div", {
        className: u.k,
        children: (0, r.jsx)(l.A, {
            ...m,
            pendingAvatar: R,
            user: t,
            pendingBadges: [(0, c._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
