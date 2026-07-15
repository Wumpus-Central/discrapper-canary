n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(477782),
    r = n(827343),
    a = n(186295),
    o = n(852712),
    u = n(621380),
    d = n(375708);
function c(e) {
    let { enabledInputProfiles: t } = (0, o.d)({ location: "useInputProfileItems" }),
        n = {
            [u.m.VOICE_ISOLATION]: d.intl.string(d.t.cjPbpT),
            [u.m.STUDIO]: d.intl.string(d.t.VZPR0R),
            [u.m.CUSTOM]: d.intl.string(d.t["N/PQjv"]),
        },
        c = (0, l.bG)([a.Ay], () => a.Ay.getActiveInputProfile()),
        h = t.map((t) =>
            (0, i.jsx)(
                s.iD,
                {
                    id: t,
                    group: "input-profiles",
                    label: n[t],
                    checked: t === (c ?? u.m.CUSTOM),
                    action: () => r.A.setActiveInputProfile(t, { analyticsLocations: e }),
                },
                t,
            ),
        );
    return (0, i.jsx)(s.Dr, {
        id: "input-profiles",
        label: d.intl.string(d.t.LM3U3k),
        subtext: n[c ?? u.m.CUSTOM],
        children: h,
    });
}
