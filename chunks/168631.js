n.d(t, {
    J2: () => h,
    V3: () => p,
    ZB: () => E,
    e4: () => v,
    fq: () => _,
    lM: () => y,
    wu: () => g
}),
    n(47120);
var i = n(192379),
    r = n(392711),
    a = n(866442),
    s = n(399606),
    o = n(692547),
    l = n(780384),
    u = n(607070),
    c = n(44315),
    d = n(564334),
    f = n(981631);
function _(e) {
    let t = (0, s.e7)([u.Z], () => u.Z.saturation);
    return (0, i.useMemo)(
        () =>
            null == e
                ? null
                : {
                      overlaySyncedWithUserTheme: o.Z.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      overlay: o.Z.colors.PROFILE_GRADIENT_OVERLAY.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      sectionBox: o.Z.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      messageInputBorder: o.Z.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      dividerOpacity: e === o.Z.themes.DARK ? 0.24 : 0.12,
                      noteBackgroundColor: o.Z.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      profileBodyBackgroundHover: o.Z.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      rolePillBackgroundColor: o.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      rolePillBorderColor: o.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      icon: o.Z.colors.INTERACTIVE_NORMAL.resolve({
                          theme: e,
                          saturation: t
                      }).hsl()
                  },
        [e, t]
    );
}
function p(e) {
    return null == e ? null : (0, a.Bd)(e) > 0.5 ? f.BRd.DARK : f.BRd.LIGHT;
}
function h(e, t, n) {
    let i = n / 100,
        r = 1 - i;
    return [Math.round(e[0] * r + t[0] * i), Math.round(e[1] * r + t[1] * i), Math.round(e[2] * r + t[2] * i)];
}
function m(e, t) {
    let n = (0, a.px)(e);
    if (null == t) return 0;
    let i = d.Z.parseString(t);
    if (null == i) return 0;
    let r = [i.red, i.green, i.blue],
        s = [n[0], n[1], n[2]],
        o = i.alpha,
        [l, u, c] = r.map((e, t) => Math.floor(o * e + (1 - o) * s[t]));
    return (0, a.QT)('rgba('.concat(l, ', ').concat(u, ', ').concat(c, ')'));
}
function g(e, t, n) {
    let i = _(e);
    return null == i || null == t ? null : m(t, n ? i.overlaySyncedWithUserTheme : i.overlay);
}
let E = (0, r.memoize)(
    (e) => {
        let t = (0, l.Qg)(e, {
            base: '#ffffff',
            contrastRatio: l.S3.HighContrastText
        });
        return (0, a._i)(t);
    },
    (e) => e
);
function v(e, t) {
    let n = _(e);
    return null != n && null != t ? m(t, null == n ? void 0 : n.messageInputBorder) : null;
}
function y(e, t) {
    let n = (0, c.Sl)(f.Ilk.WHITE_500).hex;
    return (0, l.wj)(e) ? (0, a._i)(n) : null != t ? E(t) : null;
}
