r.d(n, {
    J2: function () {
        return g;
    },
    V3: function () {
        return m;
    },
    ZB: function () {
        return y;
    },
    e4: function () {
        return b;
    },
    fq: function () {
        return _;
    },
    lM: function () {
        return I;
    },
    wu: function () {
        return v;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(392711);
var s = r(866442),
    l = r(399606),
    u = r(692547),
    c = r(780384),
    d = r(607070),
    f = r(44315),
    p = r(564334),
    h = r(981631);
function _(e) {
    let n = (0, l.e7)([d.Z], () => d.Z.saturation);
    return (0, a.useMemo)(
        () =>
            null == e
                ? null
                : {
                      overlaySyncedWithUserTheme: u.Z.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      overlay: u.Z.colors.PROFILE_GRADIENT_OVERLAY.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      sectionBox: u.Z.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      messageInputBorder: u.Z.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      dividerOpacity: e === u.Z.themes.DARK ? 0.24 : 0.12,
                      noteBackgroundColor: u.Z.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      profileBodyBackgroundHover: u.Z.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      rolePillBackgroundColor: u.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      rolePillBorderColor: u.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      icon: u.Z.colors.INTERACTIVE_NORMAL.resolve({
                          theme: e,
                          saturation: n
                      }).hsl()
                  },
        [e, n]
    );
}
function m(e) {
    return null == e ? null : (0, s.Bd)(e) > 0.5 ? h.BRd.DARK : h.BRd.LIGHT;
}
function g(e, n, r) {
    let i = r / 100,
        a = 1 - i;
    return [Math.round(e[0] * a + n[0] * i), Math.round(e[1] * a + n[1] * i), Math.round(e[2] * a + n[2] * i)];
}
function E(e, n) {
    let r = (0, s.px)(e);
    if (null == n) return 0;
    let i = p.Z.parseString(n);
    if (null == i) return 0;
    let a = [i.red, i.green, i.blue],
        o = [r[0], r[1], r[2]],
        l = i.alpha,
        [u, c, d] = a.map((e, n) => Math.floor(l * e + (1 - l) * o[n]));
    return (0, s.QT)('rgba('.concat(u, ', ').concat(c, ', ').concat(d, ')'));
}
function v(e, n, r) {
    let i = _(e);
    return null == i || null == n ? null : E(n, r ? i.overlaySyncedWithUserTheme : i.overlay);
}
let y = (0, o.memoize)(
    (e) => {
        let n = (0, c.Qg)(e, {
            base: '#ffffff',
            contrastRatio: c.S3.HighContrastText
        });
        return (0, s._i)(n);
    },
    (e) => e
);
function b(e, n) {
    let r = _(e);
    return null != r && null != n ? E(n, null == r ? void 0 : r.messageInputBorder) : null;
}
function I(e, n) {
    let r = (0, f.Sl)(h.Ilk.WHITE_500).hex;
    return (0, c.wj)(e) ? (0, s._i)(r) : null != n ? y(n) : null;
}
function T(e, n, r) {
    let i = g(e, n, r);
    return 'rgba('.concat(i[0], ', ').concat(i[1], ', ').concat(i[2], ', 1)');
}
