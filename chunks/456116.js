n.d(t, {
    $L: () => g,
    Oz: () => p,
});
var r = n(481060),
    i = n(864806),
    a = n(706872),
    o = n(400058),
    s = n(112726),
    l = n(244318),
    c = n(461318),
    u = n(231195),
    d = n(610750),
    f = n(80148),
    _ = n(472826),
    p = (function (e) {
        return (e.PAYMENTS = "payments"), (e.VIRTUAL_CURRENCY = "virtual-currency"), (e.NITRO = "nitro"), e;
    })({});
let h = ["Revenue Storybook", "Revenue Playground"],
    m = {
        id: "payments",
        name: "Payments",
        groups: [o.C, _.iZ, l.R, s.pl, f.W],
        tags: h,
        IconComponent: r.uMN,
    },
    g = {
        playgroundBaseUrl: "revenue",
        collections: [
            m,
            {
                id: "virtual-currency",
                name: "Virtual Currency",
                groups: [a.Oi, i.vP, u.X, d.R],
                tags: h,
                IconComponent: r.aQr,
            },
            {
                id: "nitro",
                name: "Nitro",
                groups: [c.De],
                tags: h,
                IconComponent: r.SrA,
            },
        ],
    };
