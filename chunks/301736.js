"use strict";
n.d(t, { A: () => o });
var i = n(688810),
    r = n(17460),
    s = n(866903),
    a = n(436620);
function o() {
    let { analyticsLocations: e } = (0, i.Ay)();
    if ((0, r.Pi)())
        return () => {
            (0, s.A)(a.J.ACTIVITY_PRIVACY, { analyticsLocations: e });
        };
}
