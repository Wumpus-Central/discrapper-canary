"use strict";
n.d(t, { y: () => s }), n(321073);
var r = n(361670),
    i = n(464114);
let s = (e, t, n) => {
    if ("" === e) return null;
    let s = [],
        a = [];
    return (
        (0, i.G2)(e).forEach((e) => {
            let i = (0, r.W$)(e, t, n);
            i === r.Ux.SENDABLE ? s.push(e) : i === r.Ux.SENDABLE_WITH_PREMIUM && a.push(e);
        }),
        { sendable: s, sendableWithPremium: a }
    );
};
