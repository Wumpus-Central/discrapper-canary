"use strict";
n.d(t, { A: () => o });
var r = n(688810),
    i = n(682262),
    s = n(725177),
    a = n(857266);
function o() {
    let { analyticsLocations: e } = (0, r.Ay)();
    if ((0, i.Pi)())
        return () => {
            (0, s.A)(a.J.ACTIVITY_PRIVACY, { analyticsLocations: e });
        };
}
