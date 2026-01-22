l.d(t, {
    v: () => u,
});
var n = l(64700),
    a = l(508425),
    s = l(559949),
    r = l(631670),
    i = l(159001),
    o = l(207803),
    c = l(954571),
    d = l(652215);

function u(e) {
    let {
        hasChanges: t,
        selectedFontId: l,
        selectedEffectId: u,
        selectedColors: f,
        defaultColor: m,
        guildId: b,
        isTryItOut: p,
        onClose: x,
    } = e;
    return n.useCallback(() => {
        if (t) {
            let e = f;
            u === a.z.SOLID && f.length > 0 && f[0] === m && (e = []);
            let t = {
                fontId: l,
                effectId: u,
                colors: e,
            };
            null != b ? (0, i.mZ)(t) : p ? (0, o.EW)(t) : (0, r.dM)(t),
                c.default.track(d.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                    font_name: s.x[l],
                    effect_name: a.z[u],
                    colors: f,
                }),
                null == x || x();
        }
    }, [t, l, u, f, m, x, b, p]);
}
