"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(477782),
    a = n(827343),
    o = n(235058),
    l = n(852712),
    u = n(509381),
    c = n(375708);
function d(e) {
    let { enabledInputProfiles: t } = (0, l.d)({ location: "useInputProfileItems" }),
        n = {
            [u.m.VOICE_ISOLATION]: c.intl.string(c.t.cjPbpT),
            [u.m.STUDIO]: c.intl.string(c.t.VZPR0R),
            [u.m.CUSTOM]: c.intl.string(c.t["N/PQjv"]),
        },
        d = (0, r.bG)([o.Ay], () => o.Ay.getActiveInputProfile()),
        _ = t.map((t) =>
            (0, i.jsx)(
                s.iD,
                {
                    id: t,
                    group: "input-profiles",
                    label: n[t],
                    checked: t === (d ?? u.m.CUSTOM),
                    action: () => a.A.setActiveInputProfile(t, { analyticsLocations: e }),
                },
                t,
            ),
        );
    return (0, i.jsx)(s.Dr, {
        id: "input-profiles",
        label: c.intl.string(c.t.LM3U3k),
        subtext: n[d ?? u.m.CUSTOM],
        children: _,
    });
}
