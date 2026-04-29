n.d(e, { A: () => d });
var i = n(627968);
n(64700);
var s = n(17928),
    l = n(477782),
    r = n(827343),
    a = n(51760),
    u = n(533488),
    o = n(509381),
    c = n(985018);
function d(t) {
    let { enabledInputProfiles: e } = (0, u.d)({ location: "useInputProfileItems" }),
        n = {
            [o.m.VOICE_ISOLATION]: c.intl.string(c.t.cjPbpT),
            [o.m.STUDIO]: c.intl.string(c.t.VZPR0R),
            [o.m.CUSTOM]: c.intl.string(c.t["N/PQjv"]),
        },
        d = (0, s.bG)([a.Ay], () => a.Ay.getActiveInputProfile()),
        m = e.map((e) =>
            (0, i.jsx)(
                l.iD,
                {
                    id: e,
                    group: "input-profiles",
                    label: n[e],
                    checked: e === (d ?? o.m.CUSTOM),
                    action: () => r.A.setActiveInputProfile(e, { analyticsLocations: t }),
                },
                e,
            ),
        );
    return (0, i.jsx)(l.Dr, {
        id: "input-profiles",
        label: c.intl.string(c.t.LM3U3k),
        subtext: n[d ?? o.m.CUSTOM],
        children: m,
    });
}
