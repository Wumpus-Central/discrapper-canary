n.d(t, { z: () => u });
var l = n(473749),
    o = n(522942),
    r = n(342905),
    a = n(809206),
    i = n(18438),
    s = n(350327),
    c = n(626135),
    d = n(981631);
function u(e) {
    let {
        hasChanges: t,
        selectedFontId: n,
        selectedEffectId: u,
        selectedColors: f,
        defaultColor: p,
        guildId: m,
        isTryItOut: g,
        onClose: h,
    } = e;
    return l.useCallback(() => {
        if (t) {
            let e = f;
            u === o.m.SOLID && f.length > 0 && f[0] === p && (e = []);
            let t = {
                fontId: n,
                effectId: u,
                colors: e,
            };
            null != m ? (0, i.N_)(t) : g ? (0, s.rH)(t) : (0, a.NI)(t),
                c.default.track(d.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                    font_name: r.C[n],
                    effect_name: o.m[u],
                    colors: f,
                }),
                null == h || h();
        }
    }, [t, n, u, f, p, h, m, g]);
}
