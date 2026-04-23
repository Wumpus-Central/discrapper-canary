a.d(t, { v: () => d });
var l = a(64700),
    n = a(508425),
    s = a(559949),
    r = a(207803),
    i = a(84540),
    o = a(954571),
    c = a(652215);
function d(e) {
    let {
        hasChanges: t,
        selectedFontId: a,
        selectedEffectId: d,
        selectedColors: u,
        defaultColor: m,
        guildId: _,
        isTryItOut: h,
        onClose: p,
    } = e;
    return l.useCallback(() => {
        if (t) {
            let e = u;
            d === n.z.SOLID && u.length > 0 && u[0] === m && (e = []);
            let t = { fontId: a, effectId: d, colors: e };
            h ? (0, r.EW)(t) : (0, i.p)({ guildId: _, displayNameStyles: t }),
                o.default.track(c.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                    font_name: s.x[a],
                    effect_name: n.z[d],
                    colors: u,
                }),
                p?.();
        }
    }, [t, a, d, u, m, p, _, h]);
}
