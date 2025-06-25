n.d(t, {
    DX: () => i,
    Gr: () => s,
    S2: () => o,
    ft: () => a
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
    return {
        primaryColor: null == e.primaryColor ? void 0 : (0, r.Rf)(e.primaryColor),
        secondaryColor: null == e.secondaryColor ? void 0 : (0, r.Rf)(e.secondaryColor),
        tertiaryColor: null == e.tertiaryColor ? void 0 : (0, r.Rf)(e.tertiaryColor)
    };
}
function o(e) {
    return null != e && null != e.colorStrings && null != e.colorStrings.primaryColor && null != e.colorStrings.secondaryColor;
}
function s(e) {
    return null != e.colors && 0 === e.colors.primary_color && null == e.colors.secondary_color && null == e.colors.tertiary_color;
}
