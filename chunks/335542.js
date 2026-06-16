"use strict";
n.d(t, { F: () => r, O: () => l });
var i,
    r =
        (((i = {}).BACKGROUND_GRADIENT_PRESET = "backgroundGradientPreset"),
        (i.STANDARD_BACKGROUND_THEME = "standardBackgroundTheme"),
        (i.CUSTOM_BACKGROUND_GRADIENT = "customBackgroundGradient"),
        i),
    s = n(873298),
    a = n(38405),
    o = n(185928);
let l = (e) => {
    let t = Object.entries(o.dP).find((t) => {
        let [n, i] = t;
        return i === e;
    });
    return void 0 === t
        ? (a.A.captureException(Error(`No ProtoTheme found for base theme: ${e}`)), s.Sx.UNSET)
        : parseInt(t[0]);
};
