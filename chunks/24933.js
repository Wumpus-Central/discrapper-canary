n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(827343),
    r = n(430452),
    o = n(533488),
    c = n(509381),
    d = n(985018);
function u(e) {
    let { enabledInputProfiles: t } = (0, o.d)({ location: "useInputProfileItems" }),
        n = {
            [c.m.VOICE_ISOLATION]: d.intl.string(d.t.cjPbpT),
            [c.m.STUDIO]: d.intl.string(d.t.VZPR0R),
            [c.m.CUSTOM]: d.intl.string(d.t["N/PQjv"]),
        },
        u = (0, l.bG)([r.Ay], () => r.Ay.getActiveInputProfile()),
        h = t.map((t) =>
            (0, i.jsx)(
                s.iDA,
                {
                    id: t,
                    group: "input-profiles",
                    label: n[t],
                    checked: t === (u ?? c.m.CUSTOM),
                    action: () => a.A.setActiveInputProfile(t, { analyticsLocations: e }),
                },
                t,
            ),
        );
    return (0, i.jsx)(s.Drp, {
        id: "input-profiles",
        label: d.intl.string(d.t.LM3U3k),
        subtext: n[u ?? c.m.CUSTOM],
        children: h,
    });
}
