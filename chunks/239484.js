n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(417597),
    l = n(793574),
    s = n(688810),
    a = n(351906),
    c = n(555337),
    o = n(328650);
let d = function () {
    let e = (0, i.bG)([a.A], () => a.A.hideInstantInvites),
        { invites: t, guild: n } = (0, i.cf)([c.A], () => c.A.getProps(), []),
        { analyticsLocations: d } = (0, s.Ay)(l.A.GUILD_SETTINGS_PROFILE_PAGE);
    return (0, r.jsx)(s.f5, {
        value: d,
        children: (0, r.jsx)(o.A, {
            invites: t,
            guild: n,
            showChannel: !0,
            hide: e,
            withV2Actions: !0,
            canCreateInvites: !0,
        }),
    });
};
