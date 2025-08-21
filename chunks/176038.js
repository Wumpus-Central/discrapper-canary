a.d(t, {
    _Y: () => E,
    aB: () => N,
    th: () => O,
    ub: () => T,
}),
    a(388685),
    a(457542);
var n = a(647438),
    r = a(524437),
    l = a(809206),
    i = a(153867),
    s = a(857595),
    o = a(607070),
    c = a(1870),
    d = a(884697),
    u = a(164946),
    m = a(210887),
    x = a(695346),
    h = a(675478),
    p = a(25990),
    v = a(594174),
    b = a(74538),
    f = a(981631),
    j = a(469115),
    g = a(959517);
let _ = [f.BRd.DARK, f.BRd.LIGHT, f.BRd.DARKER, f.BRd.MIDNIGHT],
    y = [r.Pi.COMPACT, r.Pi.COZY, r.Pi.DEFAULT];
function C(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function N() {
    let e = (function () {
            let e = v.default.getCurrentUser();
            return b.ZP.canUseClientThemes(e) ? Object.keys(j.qt).map((e) => Number(e)) : [];
        })(),
        t = e.length > 0 && Math.random() > 0.7;
    try {
        if (t) {
            let t,
                n = [...e, null],
                r = C(n);
            if (null != r) {
                var a;
                let e = j.qt[r];
                t = null != (a = null == e ? void 0 : e.theme) ? a : f.BRd.DARK;
            } else t = C([f.BRd.DARK, f.BRd.DARKER, f.BRd.MIDNIGHT]);
            await i.ZI(
                {
                    theme: t,
                    backgroundGradientPresetId: null != r ? r : void 0,
                    customUserThemeSettings: void 0,
                },
                h.fy.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = C(_);
            await i.ZI(
                {
                    theme: e,
                    backgroundGradientPresetId: void 0,
                    customUserThemeSettings: void 0,
                },
                h.fy.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function O() {
    let e = c.Z.purchases,
        t = (0, d.Ad)(e),
        a = (0, d.jT)(e),
        n = t.length > 0,
        r = a.length > 0;
    if (n || r)
        try {
            if (n) {
                let e = C([...t, null]);
                (0, l.cV)(e);
            }
            if (r) {
                let e = C([...a, null]);
                (0, l.Rx)(e);
            }
            let e = p.Z.getAllPending(),
                i = (0, u.ED)(e);
            await (0, l.Mn)(i).finally(l.si);
        } catch (e) {}
}
function E() {
    try {
        let e = C(f.yqN.FONT_SIZES);
        (0, s.oL)(e);
        let t = C(g.fP);
        (0, s.ZZ)(t);
        let a = C(y);
        x.YC.updateSetting(a);
    } catch (e) {}
}
function T() {
    n.useEffect(() => {
        var e, t, a, n, r;
        let b = v.default.getCurrentUser(),
            f = x.L1.getSetting(),
            j = c.Z.purchases,
            g = (0, d.Ad)(j),
            _ = (0, d.jT)(j),
            y = m.Z.theme,
            C = f.backgroundGradientPresetId,
            N = null == b || null == (e = b.avatarDecoration) ? void 0 : e.skuId,
            O = null == b || null == (a = b.collectibles) || null == (t = a.nameplate) ? void 0 : t.skuId,
            E = null != N && null != (n = g.find((e) => e.skuId === N)) ? n : null,
            T = null != O && null != (r = _.find((e) => e.skuId === O)) ? r : null,
            S = o.Z.fontSize,
            P = o.Z.messageGroupSpacing,
            w = x.YC.getSetting();
        return () => {
            try {
                i.ZI(
                    {
                        theme: y,
                        backgroundGradientPresetId: null != C ? C : void 0,
                        customUserThemeSettings: void 0,
                    },
                    h.fy.INFREQUENT_USER_ACTION,
                ),
                    (0, l.cV)(E),
                    (0, l.Rx)(T);
                let e = p.Z.getAllPending(),
                    t = (0, u.ED)(e);
                (0, l.Mn)(t).finally(l.si), (0, s.oL)(S), (0, s.ZZ)(P), x.YC.updateSetting(w);
            } catch (e) {}
        };
    }, []);
}
