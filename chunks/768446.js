n.d(t, { z: () => u });
var l = n(473749),
    o = n(522942),
    r = n(342905),
    i = n(809206),
    a = n(18438),
    s = n(350327),
    c = n(626135),
    d = n(981631);
function u(e) {
    let {
        hasChanges: t,
        selectedFontId: n,
        selectedEffectId: u,
        selectedColors: p,
        defaultColor: m,
        guildId: f,
        isTryItOut: g,
        onClose: h,
    } = e;
    return l.useCallback(() => {
        if (t) {
            let e = p;
            u === o.m.SOLID && p.length > 0 && p[0] === m && (e = []);
            let t = {
                fontId: n,
                effectId: u,
                colors: e,
            };
            null != f ? (0, a.N_)(t) : g ? (0, s.rH)(t) : (0, i.NI)(t),
                c.default.track(d.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                    font_name: r.C[n],
                    effect_name: o.m[u],
                    colors: p,
                }),
                null == h || h();
        }
    }, [t, n, u, p, m, h, f, g]);
}
