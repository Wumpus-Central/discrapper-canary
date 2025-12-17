n.d(t, {
    _Y: () => O,
    aB: () => E,
    th: () => T,
    ub: () => N,
}),
    n(388685),
    n(457542);
var a = n(473749),
    r = n(524437),
    l = n(809206),
    i = n(153867),
    s = n(857595),
    o = n(607070),
    c = n(1870),
    d = n(884697),
    u = n(150039),
    m = n(164946),
    p = n(210887),
    h = n(695346),
    f = n(675478),
    x = n(25990),
    b = n(594174),
    g = n(74538),
    v = n(981631),
    j = n(469115),
    y = n(959517);
let C = [v.BRd.DARK, v.BRd.LIGHT, v.BRd.DARKER, v.BRd.MIDNIGHT],
    _ = [r.Pi.COMPACT, r.Pi.COZY, r.Pi.DEFAULT];
function S(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function E() {
    let e = (function () {
            let e = b.default.getCurrentUser();
            return g.ZP.canUseClientThemes(e) ? Object.keys(j.qt).map((e) => Number(e)) : [];
        })(),
        t = e.length > 0 && Math.random() > 0.7;
    try {
        if (t) {
            let t,
                a = [...e, null],
                r = S(a);
            if (null != r) {
                var n;
                let e = j.qt[r];
                t = null != (n = null == e ? void 0 : e.theme) ? n : v.BRd.DARK;
            } else t = S([v.BRd.DARK, v.BRd.DARKER, v.BRd.MIDNIGHT]);
            await i.ZI(
                {
                    theme: t,
                    backgroundGradientPresetId: null != r ? r : void 0,
                    customUserThemeSettings: void 0,
                },
                f.fy.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = S(C);
            await i.ZI(
                {
                    theme: e,
                    backgroundGradientPresetId: void 0,
                    customUserThemeSettings: void 0,
                },
                f.fy.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function T() {
    let e = c.Z.purchases,
        t = (0, d.Ad)(e),
        n = (0, d.jT)(e),
        a = t.length > 0,
        r = n.length > 0;
    if (a || r)
        try {
            if (a) {
                let e = S([...t, null]);
                (0, u.PO)(e);
            }
            if (r) {
                let e = S([...n, null]);
                (0, u.Wh)(e);
            }
            let e = x.Z.getAllPending(),
                i = (0, m.ED)(e);
            await (0, l.Mn)(i).finally(l.si);
        } catch (e) {}
}
function O() {
    try {
        let e = S(v.yqN.FONT_SIZES);
        (0, s.oL)(e);
        let t = S(y.fP);
        (0, s.ZZ)(t);
        let n = S(_);
        h.YC.updateSetting(n);
    } catch (e) {}
}
function N() {
    a.useEffect(() => {
        var e, t, n, a, r;
        let g = b.default.getCurrentUser(),
            v = h.L1.getSetting(),
            j = c.Z.purchases,
            y = (0, d.Ad)(j),
            C = (0, d.jT)(j),
            _ = p.Z.theme,
            S = v.backgroundGradientPresetId,
            E = null == g || null == (e = g.avatarDecoration) ? void 0 : e.skuId,
            T = null == g || null == (n = g.collectibles) || null == (t = n.nameplate) ? void 0 : t.skuId,
            O = null != E && null != (a = y.find((e) => e.skuId === E)) ? a : null,
            N = null != T && null != (r = C.find((e) => e.skuId === T)) ? r : null,
            w = o.Z.fontSize,
            P = o.Z.messageGroupSpacing,
            I = h.YC.getSetting();
        return () => {
            try {
                i.ZI(
                    {
                        theme: _,
                        backgroundGradientPresetId: null != S ? S : void 0,
                        customUserThemeSettings: void 0,
                    },
                    f.fy.INFREQUENT_USER_ACTION,
                ),
                    (0, u.PO)(O),
                    (0, u.Wh)(N);
                let e = x.Z.getAllPending(),
                    t = (0, m.ED)(e);
                (0, l.Mn)(t).finally(l.si), (0, s.oL)(w), (0, s.ZZ)(P), h.YC.updateSetting(I);
            } catch (e) {}
        };
    }, []);
}
