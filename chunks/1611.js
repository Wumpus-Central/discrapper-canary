e.d(i, { A: () => p });
var n = e(627968);
e(64700);
var d = e(17928),
    r = e(477782),
    s = e(827343),
    o = e(472444),
    c = e(723702),
    u = e(652215),
    a = e(375708);
function p(t) {
    let i = !c.isPlatformEmbedded,
        e = (0, d.bG)([o.Ay], () => o.Ay.getMode());
    function p(i, d) {
        return (0, n.jsx)(
            r.iD,
            {
                id: i,
                group: "input-modes",
                label: d,
                checked: e === i,
                action: () => s.A.setMode(i, void 0, void 0, { analyticsLocations: t }),
            },
            i,
        );
    }
    return [
        p(u.TBI.VOICE_ACTIVITY, a.intl.string(a.t.cHCEOJ)),
        p(u.TBI.PUSH_TO_TALK, i ? a.intl.string(a.t["1AINrB"]) : a.intl.string(a.t.Q8gkVL)),
    ];
}
