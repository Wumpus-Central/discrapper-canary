n.d(t, { n: () => m }), n(415506);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(910111),
    l = n(732559),
    c = n(723851),
    u = n(981631),
    d = n(388032),
    f = n(84637);
let p = {
    [u.TaA.WINDOWS]: {
        icon: c.Z,
        getLabel: () => d.intl.string(d.t["0/xHFO"]),
    },
    [u.TaA.MACOS]: {
        icon: l.Z,
        getLabel: () => d.intl.string(d.t.E4u4n5),
    },
    [u.TaA.LINUX]: {
        icon: s.Z,
        getLabel: () => d.intl.string(d.t.tcawo3),
    },
};
function _(e) {
    let { operatingSystem: t, className: n } = e,
        i = p[t];
    if (null == i) throw Error("Unexpected operating system: ".concat(t));
    let a = i.icon;
    return (0, r.jsx)(o.u, {
        text: i.getLabel(),
        children: (0, r.jsx)(a, { className: n }),
    });
}
let m = (e) => {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, r.jsx)("div", {
        className: a()(f.OSSection, n),
        children: t.map((e) =>
            (0, r.jsx)(
                _,
                {
                    operatingSystem: e,
                    className: a()(f.purchaseUnitOperatingSystem, i),
                },
                e,
            ),
        ),
    });
};
