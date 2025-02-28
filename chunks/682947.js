n.d(t, { G: () => a });
var r = n(284363),
    i = n(854218),
    o = n(388032);
function a(e, t) {
    let n = t === i.PZ.PUBLIC ? o.NW.string(o.t.op2cJy) : t === i.PZ.APPLY_TO_JOIN ? o.NW.string(o.t.YwZfbm) : o.NW.string(o.t.TME4LC);
    switch (e) {
        case r.Q.STAFF:
            return {
                tooltipTitle: o.NW.string(o.t['lMrv9/']),
                tooltipSubtitle: o.NW.string(o.t['lMrv9/']),
                tooltipDescription: o.NW.string(o.t['lMrv9/'])
            };
        case r.Q.VERIFIED:
            return {
                tooltipTitle: o.NW.string(o.t.K7iRio),
                tooltipSubtitle: o.NW.string(o.t.iCehw8),
                tooltipDescription: n
            };
        case r.Q.PARTNERED:
            return {
                tooltipTitle: o.NW.string(o.t.K7iRio),
                tooltipSubtitle: o.NW.string(o.t.hfYfEB),
                tooltipDescription: n
            };
        case r.Q.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: o.NW.string(o.t.K7iRio),
                tooltipSubtitle: o.NW.string(o.t['TX+iFB']),
                tooltipDescription: n
            };
        case r.Q.COMMUNITY:
            return {
                tooltipTitle: o.NW.string(o.t.K7iRio),
                tooltipDescription: n
            };
        case r.Q.DISCOVERABLE:
            return {
                tooltipTitle: o.NW.string(o.t.K7iRio),
                tooltipDescription: o.NW.string(o.t.op2cJy)
            };
        case r.Q.CLAN:
            return {
                tooltipTitle: o.NW.string(o.t['5K6LdX']),
                tooltipDescription: o.NW.string(o.t.YwZfbm)
            };
        default:
            return { tooltipTitle: o.NW.string(o.t.iZRkCw) };
    }
}
