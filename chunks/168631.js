n.d(t, {
    J2: () => _,
    V3: () => f,
    ZB: () => p,
    fq: () => d
}),
    n(388685);
var r = n(73800),
    i = n(392711),
    a = n(866442),
    o = n(399606),
    s = n(900089),
    l = n(780384),
    c = n(607070);
n(564334);
var u = n(981631);
function d(e) {
    let t = (0, o.e7)([c.Z], () => c.Z.saturation);
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
            dividerOpacity: e === (0, s.RC)().DARK ? 0.24 : 0.12,
            rolePillBackgroundColor: (0, s.uJ)('PROFILE_GRADIENT_ROLE_PILL_BACKGROUND', n)
        };
    }, [e, t]);
}
function f(e) {
    return null == e ? null : (0, a.Bd)(e) > 0.5 ? u.BRd.DARK : u.BRd.LIGHT;
}
function _(e, t, n) {
    let r = n / 100,
        i = 1 - r;
    return [Math.round(e[0] * i + t[0] * r), Math.round(e[1] * i + t[1] * r), Math.round(e[2] * i + t[2] * r)];
}
let p = (0, i.memoize)(
    (e) => {
        let t = (0, l.Qg)(e, {
            base: '#ffffff',
            contrastRatio: l.S3.HighContrastText
        });
        return (0, a._i)(t);
    },
    (e) => e
);
