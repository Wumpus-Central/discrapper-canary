var a = n(477900);
n(582128);
var i = n(855986),
    l = n(477782),
    r = n(952270),
    c = n(686449),
    d = n(543465),
    s = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = (0, i.bG)([d.Ay], () => d.Ay.isGuildCollapsed(e), [e]);
            return (0, a.jsx)(l.sL, {
                id: "hide-muted-channels",
                label: s.intl.string(s.t.UwOLJO),
                leadingAccessory: t ? { type: "icon", icon: r.EyeSlashIcon } : void 0,
                action: () => c.A.toggleCollapseGuild(e),
                checked: n,
            });
        },
    },
);
