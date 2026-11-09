n(321073);
var i = n(38021),
    r = n(164636),
    a = n(646514),
    s = n(775602),
    l = n(626584),
    o = n(534409);
let d = new l.A("useToken"),
    c = new Set();
n.d(
    t,
    {},
    {
        r: function (e, t) {
            let { theme: n, density: l } = (0, i.wR)(),
                u = (0, r.bG)([s.Ay], () => s.Ay.saturation),
                _ = (0, r.bG)([s.Ay], () => s.Ay.isHighContrastModeEnabled),
                E = (0, o.qK)("useToken"),
                A = (0, o.k5)("useToken"),
                f = (0, o.lV)("useToken"),
                h = [];
            (E && h.push("refresh-fast-follow-avatars"),
                A && h.push("refresh-fast-follow-guild-bg"),
                f && h.push("refresh-fast-follow-distinct-borders"));
            let I = t ?? n;
            return (
                (0, a.Q)(I) ||
                    c.has(I) ||
                    (c.add(I), d.warn(`Unknown theme ${JSON.stringify(I)}, using the default dark theme`)),
                e.resolve({ theme: I, saturation: u, enabledExperiments: h, density: l, highContrastModeEnabled: _ })
            );
        },
    },
);
