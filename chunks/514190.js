"use strict";
n.d(t, { N: () => a });
var r = n(651162),
    i = n(295811),
    s = n(758836);
function a() {
    for (let e of [s.G2.HOME, s.G2.ORBS, s.G2.CATALOG]) {
        let t = i.A.getShopBlocks(e).find((e) => e.type === r.g.WIDE_BANNER);
        if (t?.dismissibleContentVersion != null) return t.dismissibleContentVersion;
    }
    return 0;
}
