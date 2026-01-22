n.d(t, { E: () => h }), n(65821);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(547056),
    l = n(169295),
    c = n(18301),
    u = n(652215),
    d = n(985018),
    f = n(860894);
let p = {
    [u.uje.WINDOWS]: {
        icon: c.A,
        getLabel: () => d.intl.string(d.t["0/xHFO"]),
    },
    [u.uje.MACOS]: {
        icon: l.A,
        getLabel: () => d.intl.string(d.t.E4u4n5),
    },
    [u.uje.LINUX]: {
        icon: o.A,
        getLabel: () => d.intl.string(d.t.tcawo3),
    },
};
function _(e) {
    let { operatingSystem: t, className: n } = e,
        i = p[t];
    if (null == i) throw Error("Unexpected operating system: ".concat(t));
    let a = i.icon;
    return (0, r.jsx)(s.m, {
        text: i.getLabel(),
        children: (0, r.jsx)(a, { className: n }),
    });
}
let h = (e) => {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, r.jsx)("div", {
        className: a()(f.I, n),
        children: t.map((e) =>
            (0, r.jsx)(
                _,
                {
                    operatingSystem: e,
                    className: a()(f.A, i),
                },
                e,
            ),
        ),
    });
};
