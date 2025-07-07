n.d(t, {
    DX: () => i,
    Gr: () => o,
    S2: () => a
});
var r = n(866442);
function i(e) {
    return {
        primaryColor: null == e.primary_color ? void 0 : (0, r.Rf)(e.primary_color),
        secondaryColor: null == e.secondary_color ? void 0 : (0, r.Rf)(e.secondary_color),
        tertiaryColor: null == e.tertiary_color ? void 0 : (0, r.Rf)(e.tertiary_color)
    };
}
function a(e) {
    return null != e && null != e.colorStrings && null != e.colorStrings.primaryColor && null != e.colorStrings.secondaryColor;
}
function o(e) {
    return null != e.colors && 0 === e.colors.primary_color && null == e.colors.secondary_color && null == e.colors.tertiary_color;
}
