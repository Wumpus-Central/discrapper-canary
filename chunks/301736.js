"use strict";
n.d(t, { A: () => o });
var r = n(688810),
    i = n(17460),
    s = n(866903),
    a = n(436620);
function o() {
    let { analyticsLocations: e } = (0, r.Ay)();
    if ((0, i.Pi)())
        return () => {
            (0, s.A)(a.J.ACTIVITY_PRIVACY, { analyticsLocations: e });
        };
}
