n.d(t, { n: () => p }), n(411104);
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(910111),
    o = n(732559),
    c = n(723851),
    d = n(981631),
    u = n(388032),
    m = n(758528);
let _ = {
    [d.TaA.WINDOWS]: {
        icon: c.Z,
        getLabel: () => u.intl.string(u.t['0/xHFB'])
    },
    [d.TaA.MACOS]: {
        icon: o.Z,
        getLabel: () => u.intl.string(u.t.E4u4n5)
    },
    [d.TaA.LINUX]: {
        icon: s.Z,
        getLabel: () => u.intl.string(u.t.tcawo6)
    }
};
function h(e) {
    let { operatingSystem: t, className: n } = e,
        l = _[t];
    if (null == l) throw Error('Unexpected operating system: '.concat(t));
    let a = l.icon;
    return (0, i.jsx)(r.ua7, {
        text: l.getLabel(),
        children: (e) =>
            (0, i.jsx)(a, {
                ...e,
                className: n
            })
    });
}
let p = (e) => {
    let { systems: t, className: n, iconClassName: l } = e;
    return (0, i.jsx)('div', {
        className: a()(m.OSSection, n),
        children: t.map((e) =>
            (0, i.jsx)(
                h,
                {
                    operatingSystem: e,
                    className: a()(m.purchaseUnitOperatingSystem, l)
                },
                e
            )
        )
    });
};
