"use strict";
a.d(t, { v: () => c });
var l = a(64700),
    i = a(508425),
    r = a(559949),
    n = a(207803),
    s = a(84540),
    o = a(954571),
    d = a(652215);
function c(e) {
    let {
        hasChanges: t,
        selectedFontId: a,
        selectedEffectId: c,
        selectedColors: u,
        defaultColor: _,
        guildId: h,
        isTryItOut: m,
        onClose: p,
    } = e;
    return l.useCallback(() => {
        if (t) {
            let e = u;
            c === i.z.SOLID && u.length > 0 && u[0] === _ && (e = []);
            let t = { fontId: a, effectId: c, colors: e };
            m ? (0, n.EW)(t) : (0, s.p)({ guildId: h, displayNameStyles: t }),
                o.default.track(d.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                    font_name: r.x[a],
                    effect_name: i.z[c],
                    colors: u,
                }),
                p?.();
        }
    }, [t, a, c, u, _, p, h, m]);
}
