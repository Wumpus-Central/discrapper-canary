"use strict";
n.d(t, { K3: () => a, Qv: () => l, kz: () => s });
var i = n(317097),
    r = n(652215);
function a(e) {
    return {
        primaryColor: 0 === e.primary_color ? r.TpD : (0, i.Hl)(e.primary_color),
        secondaryColor: null == e.secondary_color ? null : (0, i.Hl)(e.secondary_color),
        tertiaryColor: null == e.tertiary_color ? null : (0, i.Hl)(e.tertiary_color),
    };
}
function s(e) {
    return (
        null != e &&
        null != e.colorStrings &&
        null != e.colorStrings.primaryColor &&
        null != e.colorStrings.secondaryColor
    );
}
function l(e) {
    let t = 0 === e.color,
        n =
            null != e.colors &&
            0 === e.colors.primary_color &&
            null == e.colors.secondary_color &&
            null == e.colors.tertiary_color;
    return t || n;
}
