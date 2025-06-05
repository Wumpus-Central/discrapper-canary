n.d(t, {
    J2: () => h,
    V3: () => p,
    ZB: () => m,
    fq: () => _,
    oU: () => g
}),
    n(388685);
var r = n(73800),
    i = n(688619),
    a = n.n(i),
    o = n(392711),
    s = n(866442),
    l = n(399606),
    c = n(900089),
    u = n(780384),
    d = n(607070);
n(564334);
var f = n(981631);
function _(e) {
    let t = (0, l.e7)([d.Z], () => d.Z.saturation);
    return (0, r.useMemo)(() => {
        if (null == e) return null;
        let n = {
            theme: e,
            saturation: t
        };
        return {
            overlaySyncedWithUserTheme: (0, c.uJ)('PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME', n),
            overlay: (0, c.uJ)('PROFILE_GRADIENT_OVERLAY', n),
            sectionBox: (0, c.uJ)('PROFILE_GRADIENT_SECTION_BOX', n),
            dividerOpacity: e === (0, c.RC)().DARK ? 0.24 : 0.12,
            rolePillBackgroundColor: (0, c.uJ)('PROFILE_GRADIENT_ROLE_PILL_BACKGROUND', n)
        };
    }, [e, t]);
}
function p(e) {
    return null == e ? null : (0, s.Bd)(e) > 0.5 ? f.BRd.DARK : f.BRd.LIGHT;
}
function h(e, t, n) {
    let r = n / 100,
        i = 1 - r;
    return [Math.round(e[0] * i + t[0] * r), Math.round(e[1] * i + t[1] * r), Math.round(e[2] * i + t[2] * r)];
}
let m = (0, o.memoize)(
        (e) => {
            let t = (0, u.Qg)(e, {
                base: '#ffffff',
                contrastRatio: u.S3.HighContrastText
            });
            return (0, s._i)(t);
        },
        (e) => e
    ),
    g = (0, o.memoize)(
        (e, t, n) => {
            let r = (null != n ? n : p(e)) !== f.BRd.LIGHT,
                i = 0.5,
                s = 0.1,
                l = 0.8,
                c = a().mix(a()(e), a()(t), i, 'lab'),
                u = Math.round(100 * c.get('hsl.l')) / 100,
                d = r ? (0, o.clamp)(u, 0, s) : (0, o.clamp)(u, l, 1);
            return a()(c).set('hsl.l', d).num();
        },
        (e, t, n) => ''.concat(e, '-').concat(t, '-').concat(n)
    );
