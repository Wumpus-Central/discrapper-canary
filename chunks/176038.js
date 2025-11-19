n.d(t, {
    _Y: () => T,
    aB: () => E,
    th: () => N,
    ub: () => O,
}),
    n(388685),
    n(457542);
var a = n(473749),
    l = n(524437),
    i = n(809206),
    r = n(153867),
    s = n(857595),
    o = n(607070),
    c = n(1870),
    d = n(884697),
    u = n(150039),
    m = n(164946),
    p = n(210887),
    h = n(695346),
    x = n(675478),
    g = n(25990),
    f = n(594174),
    b = n(74538),
    v = n(981631),
    j = n(469115),
    _ = n(959517);
let y = [v.BRd.DARK, v.BRd.LIGHT, v.BRd.DARKER, v.BRd.MIDNIGHT],
    C = [l.Pi.COMPACT, l.Pi.COZY, l.Pi.DEFAULT];
function S(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function E() {
    let e = (function () {
            let e = f.default.getCurrentUser();
            return b.ZP.canUseClientThemes(e) ? Object.keys(j.qt).map((e) => Number(e)) : [];
        })(),
        t = e.length > 0 && Math.random() > 0.7;
    try {
        if (t) {
            let t,
                a = [...e, null],
                l = S(a);
            if (null != l) {
                var n;
                let e = j.qt[l];
                t = null != (n = null == e ? void 0 : e.theme) ? n : v.BRd.DARK;
            } else t = S([v.BRd.DARK, v.BRd.DARKER, v.BRd.MIDNIGHT]);
            await r.ZI(
                {
                    theme: t,
                    backgroundGradientPresetId: null != l ? l : void 0,
                    customUserThemeSettings: void 0,
                },
                x.fy.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = S(y);
            await r.ZI(
                {
                    theme: e,
                    backgroundGradientPresetId: void 0,
                    customUserThemeSettings: void 0,
                },
                x.fy.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function N() {
    let e = c.Z.purchases,
        t = (0, d.Ad)(e),
        n = (0, d.jT)(e),
        a = t.length > 0,
        l = n.length > 0;
    if (a || l)
        try {
            if (a) {
                let e = S([...t, null]);
                (0, u.PO)(e);
            }
            if (l) {
                let e = S([...n, null]);
                (0, u.Wh)(e);
            }
            let e = g.Z.getAllPending(),
                r = (0, m.ED)(e);
            await (0, i.Mn)(r).finally(i.si);
        } catch (e) {}
}
function T() {
    try {
        let e = S(v.yqN.FONT_SIZES);
        (0, s.oL)(e);
        let t = S(_.fP);
        (0, s.ZZ)(t);
        let n = S(C);
        h.YC.updateSetting(n);
    } catch (e) {}
}
function O() {
    a.useEffect(() => {
        var e, t, n, a, l;
        let b = f.default.getCurrentUser(),
            v = h.L1.getSetting(),
            j = c.Z.purchases,
            _ = (0, d.Ad)(j),
            y = (0, d.jT)(j),
            C = p.Z.theme,
            S = v.backgroundGradientPresetId,
            E = null == b || null == (e = b.avatarDecoration) ? void 0 : e.skuId,
            N = null == b || null == (n = b.collectibles) || null == (t = n.nameplate) ? void 0 : t.skuId,
            T = null != E && null != (a = _.find((e) => e.skuId === E)) ? a : null,
            O = null != N && null != (l = y.find((e) => e.skuId === N)) ? l : null,
            P = o.Z.fontSize,
            I = o.Z.messageGroupSpacing,
            w = h.YC.getSetting();
        return () => {
            try {
                r.ZI(
                    {
                        theme: C,
                        backgroundGradientPresetId: null != S ? S : void 0,
                        customUserThemeSettings: void 0,
                    },
                    x.fy.INFREQUENT_USER_ACTION,
                ),
                    (0, u.PO)(T),
                    (0, u.Wh)(O);
                let e = g.Z.getAllPending(),
                    t = (0, m.ED)(e);
                (0, i.Mn)(t).finally(i.si), (0, s.oL)(P), (0, s.ZZ)(I), h.YC.updateSetting(w);
            } catch (e) {}
        };
    }, []);
}
