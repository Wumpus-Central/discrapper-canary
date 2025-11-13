n.d(t, {
    _Y: () => O,
    aB: () => E,
    th: () => T,
    ub: () => N,
}),
    n(388685),
    n(457542);
var a = n(647438),
    i = n(524437),
    r = n(809206),
    l = n(153867),
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
    C = [i.Pi.COMPACT, i.Pi.COZY, i.Pi.DEFAULT];
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
                i = S(a);
            if (null != i) {
                var n;
                let e = j.qt[i];
                t = null != (n = null == e ? void 0 : e.theme) ? n : v.BRd.DARK;
            } else t = S([v.BRd.DARK, v.BRd.DARKER, v.BRd.MIDNIGHT]);
            await l.ZI(
                {
                    theme: t,
                    backgroundGradientPresetId: null != i ? i : void 0,
                    customUserThemeSettings: void 0,
                },
                x.fy.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = S(y);
            await l.ZI(
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
async function T() {
    let e = c.Z.purchases,
        t = (0, d.Ad)(e),
        n = (0, d.jT)(e),
        a = t.length > 0,
        i = n.length > 0;
    if (a || i)
        try {
            if (a) {
                let e = S([...t, null]);
                (0, u.PO)(e);
            }
            if (i) {
                let e = S([...n, null]);
                (0, u.Wh)(e);
            }
            let e = g.Z.getAllPending(),
                l = (0, m.ED)(e);
            await (0, r.Mn)(l).finally(r.si);
        } catch (e) {}
}
function O() {
    try {
        let e = S(v.yqN.FONT_SIZES);
        (0, s.oL)(e);
        let t = S(_.fP);
        (0, s.ZZ)(t);
        let n = S(C);
        h.YC.updateSetting(n);
    } catch (e) {}
}
function N() {
    a.useEffect(() => {
        var e, t, n, a, i;
        let b = f.default.getCurrentUser(),
            v = h.L1.getSetting(),
            j = c.Z.purchases,
            _ = (0, d.Ad)(j),
            y = (0, d.jT)(j),
            C = p.Z.theme,
            S = v.backgroundGradientPresetId,
            E = null == b || null == (e = b.avatarDecoration) ? void 0 : e.skuId,
            T = null == b || null == (n = b.collectibles) || null == (t = n.nameplate) ? void 0 : t.skuId,
            O = null != E && null != (a = _.find((e) => e.skuId === E)) ? a : null,
            N = null != T && null != (i = y.find((e) => e.skuId === T)) ? i : null,
            P = o.Z.fontSize,
            I = o.Z.messageGroupSpacing,
            w = h.YC.getSetting();
        return () => {
            try {
                l.ZI(
                    {
                        theme: C,
                        backgroundGradientPresetId: null != S ? S : void 0,
                        customUserThemeSettings: void 0,
                    },
                    x.fy.INFREQUENT_USER_ACTION,
                ),
                    (0, u.PO)(O),
                    (0, u.Wh)(N);
                let e = g.Z.getAllPending(),
                    t = (0, m.ED)(e);
                (0, r.Mn)(t).finally(r.si), (0, s.oL)(P), (0, s.ZZ)(I), h.YC.updateSetting(w);
            } catch (e) {}
        };
    }, []);
}
