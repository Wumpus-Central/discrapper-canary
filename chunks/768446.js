n.d(t, { z: () => d });
var l = n(473749),
    o = n(522942),
    r = n(342905),
    i = n(809206),
    a = n(18438),
    s = n(626135),
    c = n(981631);
function d(e) {
    let {
        hasChanges: t,
        selectedFontId: n,
        selectedEffectId: d,
        selectedColors: u,
        defaultColor: p,
        guildId: m,
        onClose: f,
    } = e;
    return l.useCallback(() => {
        if (t) {
            let e = u;
            d === o.m.SOLID && u.length > 0 && u[0] === p && (e = []);
            let t = {
                fontId: n,
                effectId: d,
                colors: e,
            };
            null != m ? (0, a.N_)(t) : (0, i.NI)(t),
                s.default.track(c.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                    font_name: r.C[n],
                    effect_name: o.m[d],
                    colors: u,
                }),
                null == f || f();
        }
    }, [t, n, d, u, p, f, m]);
}
