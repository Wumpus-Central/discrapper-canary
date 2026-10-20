e.d(i, { A: () => p });
var d = e(477900);
e(582128);
var n = e(17928),
    r = e(477782),
    s = e(827343),
    o = e(360906),
    c = e(723702),
    u = e(652215),
    a = e(105292);
function p(t) {
    let i = !c.isPlatformEmbedded,
        e = (0, n.bG)([o.Ay], () => o.Ay.getMode());
    function p(i, n) {
        return (0, d.jsx)(
            r.iD,
            {
                id: i,
                group: "input-modes",
                label: n,
                checked: e === i,
                action: () => s.default.setMode(i, void 0, void 0, { analyticsLocations: t }),
            },
            i,
        );
    }
    return [
        p(u.TBI.VOICE_ACTIVITY, a.intl.string(a.t.cHCEOJ)),
        p(u.TBI.PUSH_TO_TALK, i ? a.intl.string(a.t["1AINrB"]) : a.intl.string(a.t.Q8gkVL)),
    ];
}
