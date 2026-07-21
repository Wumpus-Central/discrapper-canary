"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(477782),
    s = n(827343),
    l = n(186295),
    o = n(852712),
    d = n(621380),
    c = n(375708);
function u(e) {
    let { enabledInputProfiles: t } = (0, o.d)({ location: "useInputProfileItems" }),
        n = {
            [d.m.VOICE_ISOLATION]: c.intl.string(c.t.cjPbpT),
            [d.m.STUDIO]: c.intl.string(c.t.VZPR0R),
            [d.m.CUSTOM]: c.intl.string(c.t["N/PQjv"]),
        },
        u = (0, r.bG)([l.Ay], () => l.Ay.getActiveInputProfile()),
        _ = t.map((t) =>
            (0, i.jsx)(
                a.iD,
                {
                    id: t,
                    group: "input-profiles",
                    label: n[t],
                    checked: t === (u ?? d.m.CUSTOM),
                    action: () => s.A.setActiveInputProfile(t, { analyticsLocations: e }),
                },
                t,
            ),
        );
    return (0, i.jsx)(a.Dr, {
        id: "input-profiles",
        label: c.intl.string(c.t.LM3U3k),
        subtext: n[u ?? d.m.CUSTOM],
        children: _,
    });
}
