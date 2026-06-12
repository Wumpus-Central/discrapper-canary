r.d(t, { z: () => d });
var n = r(627968),
    i = r(17928),
    l = r(986687),
    a = r(101058),
    s = r(836602),
    o = r(428262),
    c = r(576052),
    u = r(83554);
let d = (e) => {
    let { user: t } = e,
        r = o.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: d, ...m } = (0, i.cf)([s.A], () => s.A.getPendingChanges()),
        R = (0, a.V7)({ userId: t.id, image: d });
    return (0, n.jsx)("div", {
        className: u.k,
        children: (0, n.jsx)(l.A, {
            ...m,
            pendingAvatar: R,
            user: t,
            pendingBadges: [(0, c._)()],
            canUsePremiumCustomization: r,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
