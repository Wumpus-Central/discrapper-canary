n.d(t, {
    J2: () => h,
    V3: () => p,
    ZB: () => E,
    e4: () => b,
    fq: () => _,
    lM: () => y,
    wu: () => g
}),
    n(47120);
var r = n(192379),
    i = n(392711),
    o = n(866442),
    a = n(399606),
    s = n(900089),
    l = n(780384),
    c = n(607070),
    u = n(44315),
    d = n(564334),
    f = n(981631);
function _(e) {
    let t = (0, a.e7)([c.Z], () => c.Z.saturation);
    return (0, r.useMemo)(() => {
        if (null == e) return null;
        let n = {
            theme: e,
            saturation: t
        };
        return {
            overlaySyncedWithUserTheme: (0, s.uJ)('PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME', n),
            overlay: (0, s.uJ)('PROFILE_GRADIENT_OVERLAY', n),
            sectionBox: (0, s.uJ)('PROFILE_GRADIENT_SECTION_BOX', n),
            messageInputBorder: (0, s.uJ)('PROFILE_GRADIENT_MESSAGE_INPUT_BORDER', n),
            dividerOpacity: e === (0, s.RC)().DARK ? 0.24 : 0.12,
            noteBackgroundColor: (0, s.uJ)('PROFILE_GRADIENT_NOTE_BACKGROUND', n),
            profileBodyBackgroundHover: (0, s.uJ)('PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER', n),
            rolePillBackgroundColor: (0, s.uJ)('PROFILE_GRADIENT_ROLE_PILL_BACKGROUND', n),
            rolePillBorderColor: (0, s.uJ)('PROFILE_GRADIENT_ROLE_PILL_BORDER', n),
            icon: (0, s.uJ)('INTERACTIVE_NORMAL', n)
        };
    }, [e, t]);
}
function p(e) {
    return null == e ? null : (0, o.Bd)(e) > 0.5 ? f.BRd.DARK : f.BRd.LIGHT;
}
function h(e, t, n) {
    let r = n / 100,
        i = 1 - r;
    return [Math.round(e[0] * i + t[0] * r), Math.round(e[1] * i + t[1] * r), Math.round(e[2] * i + t[2] * r)];
}
function m(e, t) {
    let n = (0, o.px)(e);
    if (null == t) return 0;
    let r = d.Z.parseString(t);
    if (null == r) return 0;
    let i = [r.red, r.green, r.blue],
        a = [n[0], n[1], n[2]],
        s = r.alpha,
        [l, c, u] = i.map((e, t) => Math.floor(s * e + (1 - s) * a[t]));
    return (0, o.QT)('rgba('.concat(l, ', ').concat(c, ', ').concat(u, ')'));
}
function g(e, t, n) {
    let r = _(e);
    return null == r || null == t ? null : m(t, n ? r.overlaySyncedWithUserTheme : r.overlay);
}
let E = (0, i.memoize)(
    (e) => {
        let t = (0, l.Qg)(e, {
            base: '#ffffff',
            contrastRatio: l.S3.HighContrastText
        });
        return (0, o._i)(t);
    },
    (e) => e
);
function b(e, t) {
    let n = _(e);
    return null != n && null != t ? m(t, null == n ? void 0 : n.messageInputBorder) : null;
}
function y(e, t) {
    let n = (0, u.Sl)(f.Ilk.WHITE_500).hex;
    return (0, l.wj)(e) ? (0, o._i)(n) : null != t ? E(t) : null;
}
