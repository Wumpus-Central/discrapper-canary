n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(793574),
    r = n(688810),
    a = n(351906),
    o = n(555337),
    d = n(328650);
let c = function () {
    let e = (0, l.bG)([a.A], () => a.A.hideInstantInvites),
        { invites: t, guild: n } = (0, l.cf)([o.A], () => o.A.getProps(), []),
        { analyticsLocations: c } = (0, r.Ay)(s.A.GUILD_SETTINGS_PROFILE_PAGE);
    return (0, i.jsx)(r.f5, {
        value: c,
        children: (0, i.jsx)(d.A, {
            invites: t,
            guild: n,
            showChannel: !0,
            hide: e,
            withV2Actions: !0,
            canCreateInvites: !0,
        }),
    });
};
