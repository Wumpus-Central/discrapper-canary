n.d(t, {
    _Y: () => T,
    aB: () => S,
    th: () => E,
    ub: () => N,
}),
    n(388685),
    n(457542);
var a = n(647438),
    i = n(524437),
    l = n(809206),
    r = n(153867),
    s = n(857595),
    o = n(607070),
    c = n(1870),
    d = n(884697),
    u = n(164946),
    m = n(210887),
    p = n(695346),
    h = n(675478),
    x = n(25990),
    g = n(594174),
    f = n(74538),
    b = n(981631),
    v = n(469115),
    j = n(959517);
let _ = [b.BRd.DARK, b.BRd.LIGHT, b.BRd.DARKER, b.BRd.MIDNIGHT],
    y = [i.Pi.COMPACT, i.Pi.COZY, i.Pi.DEFAULT];
function C(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function S() {
    let e = (function () {
            let e = g.default.getCurrentUser();
            return f.ZP.canUseClientThemes(e) ? Object.keys(v.qt).map((e) => Number(e)) : [];
        })(),
        t = e.length > 0 && Math.random() > 0.7;
    try {
        if (t) {
            let t,
                a = [...e, null],
                i = C(a);
            if (null != i) {
                var n;
                let e = v.qt[i];
                t = null != (n = null == e ? void 0 : e.theme) ? n : b.BRd.DARK;
            } else t = C([b.BRd.DARK, b.BRd.DARKER, b.BRd.MIDNIGHT]);
            await r.ZI(
                {
                    theme: t,
                    backgroundGradientPresetId: null != i ? i : void 0,
                    customUserThemeSettings: void 0,
                },
                h.fy.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = C(_);
            await r.ZI(
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
        i = n.length > 0;
    if (a || i)
        try {
            if (a) {
                let e = C([...t, null]);
                (0, l.cV)(e);
            }
            if (i) {
                let e = C([...n, null]);
                (0, l.Rx)(e);
            }
            let e = x.Z.getAllPending(),
                r = (0, u.ED)(e);
            await (0, l.Mn)(r).finally(l.si);
        } catch (e) {}
}
function T() {
    try {
        let e = C(b.yqN.FONT_SIZES);
        (0, s.oL)(e);
        let t = C(j.fP);
        (0, s.ZZ)(t);
        let n = C(y);
        p.YC.updateSetting(n);
    } catch (e) {}
}
function N() {
    a.useEffect(() => {
        var e, t, n, a, i;
        let f = g.default.getCurrentUser(),
            b = p.L1.getSetting(),
            v = c.Z.purchases,
            j = (0, d.Ad)(v),
            _ = (0, d.jT)(v),
            y = m.Z.theme,
            C = b.backgroundGradientPresetId,
            S = null == f || null == (e = f.avatarDecoration) ? void 0 : e.skuId,
            E = null == f || null == (n = f.collectibles) || null == (t = n.nameplate) ? void 0 : t.skuId,
            T = null != S && null != (a = j.find((e) => e.skuId === S)) ? a : null,
            N = null != E && null != (i = _.find((e) => e.skuId === E)) ? i : null,
            O = o.Z.fontSize,
            P = o.Z.messageGroupSpacing,
            w = p.YC.getSetting();
        return () => {
            try {
                r.ZI(
                    {
                        theme: y,
                        backgroundGradientPresetId: null != C ? C : void 0,
                        customUserThemeSettings: void 0,
                    },
                    h.fy.INFREQUENT_USER_ACTION,
                ),
                    (0, l.cV)(T),
                    (0, l.Rx)(N);
                let e = x.Z.getAllPending(),
                    t = (0, u.ED)(e);
                (0, l.Mn)(t).finally(l.si), (0, s.oL)(O), (0, s.ZZ)(P), p.YC.updateSetting(w);
            } catch (e) {}
        };
    }, []);
}
