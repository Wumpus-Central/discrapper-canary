s.d(t, { v: () => c });
var l = s(64700),
    a = s(508425),
    n = s(559949),
    i = s(207803),
    r = s(84540),
    o = s(954571),
    d = s(652215);
function c(e) {
    let {
        hasChanges: t,
        selectedFontId: s,
        selectedEffectId: c,
        selectedColors: u,
        defaultColor: m,
        guildId: _,
        isTryItOut: x,
        onClose: p,
    } = e;
    return l.useCallback(() => {
        if (t) {
            let e = u;
            c === a.z.SOLID && u.length > 0 && u[0] === m && (e = []);
            let t = { fontId: s, effectId: c, colors: e };
            x ? (0, i.EW)(t) : (0, r.p)({ guildId: _, displayNameStyles: t }),
                o.default.track(d.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                    font_name: n.x[s],
                    effect_name: a.z[c],
                    colors: u,
                }),
                p?.();
        }
    }, [t, s, c, u, m, p, _, x]);
}
