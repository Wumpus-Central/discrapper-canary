n.d(t, { G: () => o });
var r = n(284363),
    i = n(854218),
    a = n(388032);
function o(e, t) {
    let n =
        t === i.PZ.PUBLIC
            ? a.intl.string(a.t.op2cJ6)
            : t === i.PZ.APPLY_TO_JOIN
              ? a.intl.string(a.t.YwZfbt)
              : a.intl.string(a.t.TME4LJ);
    switch (e) {
        case r.Q.STAFF:
            return {
                tooltipTitle: a.intl.string(a.t.lMrv96),
                tooltipSubtitle: a.intl.string(a.t.lMrv96),
                tooltipDescription: a.intl.string(a.t.lMrv96),
            };
        case r.Q.VERIFIED:
            return {
                tooltipTitle: a.intl.string(a.t.K7iRig),
                tooltipSubtitle: a.intl.string(a.t.iCehw9),
                tooltipDescription: n,
            };
        case r.Q.PARTNERED:
            return {
                tooltipTitle: a.intl.string(a.t.K7iRig),
                tooltipSubtitle: a.intl.string(a.t.hfYfEE),
                tooltipDescription: n,
            };
        case r.Q.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: a.intl.string(a.t.K7iRig),
                tooltipSubtitle: a.intl.string(a.t["TX+iFC"]),
                tooltipDescription: n,
            };
        case r.Q.COMMUNITY:
            return {
                tooltipTitle: a.intl.string(a.t.K7iRig),
                tooltipDescription: n,
            };
        case r.Q.DISCOVERABLE:
            return {
                tooltipTitle: a.intl.string(a.t.K7iRig),
                tooltipDescription: a.intl.string(a.t.op2cJ6),
            };
        default:
            return { tooltipTitle: a.intl.string(a.t["iZRkC/"]) };
    }
}
