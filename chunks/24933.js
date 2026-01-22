r.d(t, {
    A: () => b,
});
var n = r(627968);
r(64700);
var o = r(311907),
    u = r(397927),
    i = r(827343),
    l = r(430452),
    a = r(77735),
    c = r(509381),
    s = r(985018);

function b(e) {
    let { enabledInputProfiles: t } = (0, a.d)({
            location: "useInputProfileItems",
        }),
        r = {
            [c.my.VOICE_ISOLATION]: s.intl.string(s.t.cjPbpT),
            [c.my.STUDIO]: s.intl.string(s.t.VZPR0R),
            [c.my.CUSTOM]: s.intl.string(s.t["N/PQjv"]),
        },
        b = (0, o.bG)([l.A], () => l.A.getActiveInputProfile()),
        p = t.map((t) =>
            (0, n.jsx)(
                u.iDA,
                {
                    id: t,
                    group: "input-profiles",
                    label: r[t],
                    checked: t === (null != b ? b : c.my.CUSTOM),
                    action: () =>
                        i.A.setActiveInputProfile(t, {
                            analyticsLocations: e,
                        }),
                },
                t,
            ),
        );
    return (0, n.jsx)(u.Drp, {
        id: "input-profiles",
        label: s.intl.string(s.t.LM3U3k),
        subtext: r[null != b ? b : c.my.CUSTOM],
        children: p,
    });
}
