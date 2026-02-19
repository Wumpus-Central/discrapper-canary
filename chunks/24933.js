n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var a = n(311907),
    l = n(397927),
    i = n(827343),
    u = n(430452),
    s = n(77735),
    o = n(509381),
    c = n(985018);
function d(e) {
    let { enabledInputProfiles: t } = (0, s.d)({ location: "useInputProfileItems" }),
        n = {
            [o.m.VOICE_ISOLATION]: c.intl.string(c.t.cjPbpT),
            [o.m.STUDIO]: c.intl.string(c.t.VZPR0R),
            [o.m.CUSTOM]: c.intl.string(c.t["N/PQjv"]),
        },
        d = (0, a.bG)([u.Ay], () => u.Ay.getActiveInputProfile()),
        m = t.map((t) =>
            (0, r.jsx)(
                l.iDA,
                {
                    id: t,
                    group: "input-profiles",
                    label: n[t],
                    checked: t === (d ?? o.m.CUSTOM),
                    action: () => i.A.setActiveInputProfile(t, { analyticsLocations: e }),
                },
                t,
            ),
        );
    return (0, r.jsx)(l.Drp, {
        id: "input-profiles",
        label: c.intl.string(c.t.LM3U3k),
        subtext: n[d ?? o.m.CUSTOM],
        children: m,
    });
}
