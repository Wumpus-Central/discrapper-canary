n.d(t, {
    n: function () {
        return p;
    }
}),
    n(411104);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(910111),
    s = n(732559),
    c = n(723851),
    u = n(981631),
    d = n(388032),
    m = n(758528);
let h = {
    [u.TaA.WINDOWS]: {
        icon: c.Z,
        getLabel: () => d.intl.string(d.t['0/xHFB'])
    },
    [u.TaA.MACOS]: {
        icon: s.Z,
        getLabel: () => d.intl.string(d.t.E4u4n5)
    },
    [u.TaA.LINUX]: {
        icon: o.Z,
        getLabel: () => d.intl.string(d.t.tcawo6)
    }
};
function f(e) {
    let { operatingSystem: t, className: n } = e,
        r = h[t];
    if (null == r) throw Error('Unexpected operating system: '.concat(t));
    let l = r.icon;
    return (0, i.jsx)(a.Tooltip, {
        text: r.getLabel(),
        children: (e) =>
            (0, i.jsx)(l, {
                ...e,
                className: n
            })
    });
}
let p = (e) => {
    let { systems: t, className: n, iconClassName: r } = e;
    return (0, i.jsx)('div', {
        className: l()(m.OSSection, n),
        children: t.map((e) =>
            (0, i.jsx)(
                f,
                {
                    operatingSystem: e,
                    className: l()(m.purchaseUnitOperatingSystem, r)
                },
                e
            )
        )
    });
};
