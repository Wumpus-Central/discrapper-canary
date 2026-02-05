"use strict";
n.d(t, { F: () => r.Fn, O: () => o });
var r = n(349941),
    i = n(873298),
    a = n(728458),
    s = n(185928);
let o = (e) => {
    let t = Object.entries(s.dP).find((t) => {
        let [n, r] = t;
        return r === e;
    });
    return void 0 === t
        ? (a.A.captureException(Error(`No ProtoTheme found for base theme: ${e}`)), i.Sx.UNSET)
        : parseInt(t[0]);
};
