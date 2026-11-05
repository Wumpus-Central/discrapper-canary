var l = n(477900);
n(582128);
var i = n(574211),
    r = n(168017),
    s = n(404277),
    a = n(209553);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { platforms: t, location: n } = e,
                { extraChromeEnabled: o } = r.A.useConfig({ location: n });
            if (!o) return null;
            let u = t?.includes(i.Z.ROBLOX) ? [i.Z.ROBLOX] : t;
            return (0, l.jsx)("span", { className: a.B, children: (0, l.jsx)(s.A, { platforms: u }) });
        },
    },
);
