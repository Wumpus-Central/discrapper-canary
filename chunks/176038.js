n.d(t, {
    _Y: () => O,
    aB: () => N,
    th: () => E,
    ub: () => T,
}),
    n(388685),
    n(457542);
var a = n(647438),
    r = n(524437),
    l = n(809206),
    i = n(153867),
    s = n(857595),
    o = n(607070),
    c = n(1870),
    d = n(884697),
    u = n(164946),
    m = n(210887),
    x = n(695346),
    h = n(675478),
    p = n(25990),
    f = n(594174),
    v = n(74538),
    b = n(981631),
    j = n(469115),
    g = n(959517);
let _ = [b.BRd.DARK, b.BRd.LIGHT, b.BRd.DARKER, b.BRd.MIDNIGHT],
    y = [r.Pi.COMPACT, r.Pi.COZY, r.Pi.DEFAULT];
function C(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function N() {
    let e = (function () {
            let e = f.default.getCurrentUser();
            return v.ZP.canUseClientThemes(e) ? Object.keys(j.qt).map((e) => Number(e)) : [];
        })(),
        t = e.length > 0 && Math.random() > 0.7;
    try {
        if (t) {
            let t,
                a = [...e, null],
                r = C(a);
            if (null != r) {
                var n;
                let e = j.qt[r];
                t = null != (n = null == e ? void 0 : e.theme) ? n : b.BRd.DARK;
            } else t = C([b.BRd.DARK, b.BRd.DARKER, b.BRd.MIDNIGHT]);
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
async function E() {
    let e = c.Z.purchases,
        t = (0, d.Ad)(e),
        n = (0, d.jT)(e),
        a = t.length > 0,
        r = n.length > 0;
    if (a || r)
        try {
            if (a) {
                let e = C([...t, null]);
                (0, l.cV)(e);
            }
            if (r) {
                let e = C([...n, null]);
                (0, l.Rx)(e);
            }
            let e = p.Z.getAllPending(),
                i = (0, u.ED)(e);
            await (0, l.Mn)(i).finally(l.si);
        } catch (e) {}
}
function O() {
    try {
        let e = C(b.yqN.FONT_SIZES);
        (0, s.oL)(e);
        let t = C(g.fP);
        (0, s.ZZ)(t);
        let n = C(y);
        x.YC.updateSetting(n);
    } catch (e) {}
}
function T() {
    a.useEffect(() => {
        var e, t, n, a, r;
        let v = f.default.getCurrentUser(),
            b = x.L1.getSetting(),
            j = c.Z.purchases,
            g = (0, d.Ad)(j),
            _ = (0, d.jT)(j),
            y = m.Z.theme,
            C = b.backgroundGradientPresetId,
            N = null == v || null == (e = v.avatarDecoration) ? void 0 : e.skuId,
            E = null == v || null == (n = v.collectibles) || null == (t = n.nameplate) ? void 0 : t.skuId,
            O = null != N && null != (a = g.find((e) => e.skuId === N)) ? a : null,
            T = null != E && null != (r = _.find((e) => e.skuId === E)) ? r : null,
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
                    (0, l.cV)(O),
                    (0, l.Rx)(T);
                let e = p.Z.getAllPending(),
                    t = (0, u.ED)(e);
                (0, l.Mn)(t).finally(l.si), (0, s.oL)(S), (0, s.ZZ)(P), x.YC.updateSetting(w);
            } catch (e) {}
        };
    }, []);
}
