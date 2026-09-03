n.d(t, { F: () => r, O: () => o });
var i,
    r =
        (((i = {}).BACKGROUND_GRADIENT_PRESET = "backgroundGradientPreset"),
        (i.STANDARD_BACKGROUND_THEME = "standardBackgroundTheme"),
        (i.CUSTOM_BACKGROUND_GRADIENT = "customBackgroundGradient"),
        i),
    a = n(873298),
    s = n(38405),
    l = n(185928);
function o(e) {
    let t = Object.entries(l.dP).find((t) => {
        let [n, i] = t;
        return i === e;
    });
    return void 0 === t
        ? (s.A.captureException(Error(`No ProtoTheme found for base theme: ${e}`)), a.Sx.UNSET)
        : parseInt(t[0]);
}
