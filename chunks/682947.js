n.d(t, { G: () => o });
var r = n(284363),
    i = n(854218),
    a = n(388032);
function o(e, t) {
    let n = t === i.PZ.PUBLIC ? a.NW.string(a.t.op2cJy) : t === i.PZ.APPLY_TO_JOIN ? a.NW.string(a.t.YwZfbm) : a.NW.string(a.t.TME4LC);
    switch (e) {
        case r.Q.STAFF:
            return {
                tooltipTitle: a.NW.string(a.t['lMrv9/']),
                tooltipSubtitle: a.NW.string(a.t['lMrv9/']),
                tooltipDescription: a.NW.string(a.t['lMrv9/'])
            };
        case r.Q.VERIFIED:
            return {
                tooltipTitle: a.NW.string(a.t.K7iRio),
                tooltipSubtitle: a.NW.string(a.t.iCehw8),
                tooltipDescription: n
            };
        case r.Q.PARTNERED:
            return {
                tooltipTitle: a.NW.string(a.t.K7iRio),
                tooltipSubtitle: a.NW.string(a.t.hfYfEB),
                tooltipDescription: n
            };
        case r.Q.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: a.NW.string(a.t.K7iRio),
                tooltipSubtitle: a.NW.string(a.t['TX+iFB']),
                tooltipDescription: n
            };
        case r.Q.COMMUNITY:
            return {
                tooltipTitle: a.NW.string(a.t.K7iRio),
                tooltipDescription: n
            };
        case r.Q.DISCOVERABLE:
            return {
                tooltipTitle: a.NW.string(a.t.K7iRio),
                tooltipDescription: a.NW.string(a.t.op2cJy)
            };
        case r.Q.CLAN:
            return {
                tooltipTitle: a.NW.string(a.t['5K6LdX']),
                tooltipDescription: a.NW.string(a.t.YwZfbm)
            };
        default:
            return { tooltipTitle: a.NW.string(a.t.iZRkCw) };
    }
}
