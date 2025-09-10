n.d(t, {
    DX: () => s,
    Gr: () => c,
    S2: () => l,
    uH: () => o,
});
var r = n(866442),
    i = n(430824),
    a = n(981631);
function o(e, t) {
    if (null == e || null == t) return a.i5p;
    let n = i.Z.getGuild(t),
        r = null != n && n.features.has(a.oNc.ENHANCED_ROLE_COLORS),
        o = {
            primary_color: 0 === e.primary_color ? a.p6O : e.primary_color,
            secondary_color: null,
            tertiary_color: null,
        };
    return r || t === a.aIL ? e : o;
}
function s(e, t) {
    let n = o(e, t);
    return null == n
        ? a.J0O
        : {
              primaryColor: 0 === n.primary_color ? a.Pbq : (0, r.Rf)(n.primary_color),
              secondaryColor: null == n.secondary_color ? null : (0, r.Rf)(n.secondary_color),
              tertiaryColor: null == n.tertiary_color ? null : (0, r.Rf)(n.tertiary_color),
          };
}
function l(e) {
    return (
        null != e &&
        null != e.colorStrings &&
        null != e.colorStrings.primaryColor &&
        null != e.colorStrings.secondaryColor
    );
}
function c(e) {
    let t = 0 === e.color,
        n =
            null != e.colors &&
            0 === e.colors.primary_color &&
            null == e.colors.secondary_color &&
            null == e.colors.tertiary_color;
    return t || n;
}
