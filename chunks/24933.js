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
            [o.my.VOICE_ISOLATION]: c.intl.string(c.t.cjPbpT),
            [o.my.STUDIO]: c.intl.string(c.t.VZPR0R),
            [o.my.CUSTOM]: c.intl.string(c.t["N/PQjv"]),
        },
        d = (0, a.bG)([u.A], () => u.A.getActiveInputProfile()),
        m = t.map((t) =>
            (0, r.jsx)(
                l.iDA,
                {
                    id: t,
                    group: "input-profiles",
                    label: n[t],
                    checked: t === (d ?? o.my.CUSTOM),
                    action: () => i.A.setActiveInputProfile(t, { analyticsLocations: e }),
                },
                t,
            ),
        );
    return (0, r.jsx)(l.Drp, {
        id: "input-profiles",
        label: c.intl.string(c.t.LM3U3k),
        subtext: n[d ?? o.my.CUSTOM],
        children: m,
    });
}
