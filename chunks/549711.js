"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(960488),
    a = n(110259),
    s = n(139286);
function o(e) {
    let { impressionName: t, impressionProperties: n, disableTrack: o, ...l } = e,
        u = n;
    return (
        "function" == typeof u && (u = u(l)),
        (0, s.A)({ type: a.ImpressionTypes.PAGE, name: t, properties: u }, { disableTrack: o }, [l.location?.pathname]),
        (0, r.jsx)(i.qh, { ...l })
    );
}
