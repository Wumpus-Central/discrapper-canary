n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(477782),
    r = n(827343),
    a = n(430452),
    o = n(533488),
    u = n(509381),
    c = n(985018);
function d(e) {
    let { enabledInputProfiles: t } = (0, o.d)({ location: "useInputProfileItems" }),
        n = {
            [u.m.VOICE_ISOLATION]: c.intl.string(c.t.cjPbpT),
            [u.m.STUDIO]: c.intl.string(c.t.VZPR0R),
            [u.m.CUSTOM]: c.intl.string(c.t["N/PQjv"]),
        },
        d = (0, l.bG)([a.Ay], () => a.Ay.getActiveInputProfile()),
        m = t.map((t) =>
            (0, i.jsx)(
                s.iD,
                {
                    id: t,
                    group: "input-profiles",
                    label: n[t],
                    checked: t === (d ?? u.m.CUSTOM),
                    action: () => r.A.setActiveInputProfile(t, { analyticsLocations: e }),
                },
                t,
            ),
        );
    return (0, i.jsx)(s.Dr, {
        id: "input-profiles",
        label: c.intl.string(c.t.LM3U3k),
        subtext: n[d ?? u.m.CUSTOM],
        children: m,
    });
}
