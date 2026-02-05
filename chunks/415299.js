l.d(t, { v: () => u });
var s = l(64700),
    a = l(508425),
    n = l(559949),
    i = l(631670),
    r = l(159001),
    o = l(207803),
    d = l(954571),
    c = l(652215);
function u(e) {
    let {
        hasChanges: t,
        selectedFontId: l,
        selectedEffectId: u,
        selectedColors: m,
        defaultColor: _,
        guildId: x,
        isTryItOut: g,
        onClose: h,
    } = e;
    return s.useCallback(() => {
        if (t) {
            let e = m;
            u === a.z.SOLID && m.length > 0 && m[0] === _ && (e = []);
            let t = { fontId: l, effectId: u, colors: e };
            null != x ? (0, r.mZ)(t) : g ? (0, o.EW)(t) : (0, i.dM)(t),
                d.default.track(c.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                    font_name: n.x[l],
                    effect_name: a.z[u],
                    colors: m,
                }),
                h?.();
        }
    }, [t, l, u, m, _, h, x, g]);
}
