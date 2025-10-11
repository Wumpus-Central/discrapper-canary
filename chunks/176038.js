n.d(t, {
    _Y: () => T,
    aB: () => S,
    th: () => E,
    ub: () => O,
}),
    n(388685),
    n(457542);
var a = n(647438),
    r = n(524437),
    i = n(809206),
    l = n(153867),
    s = n(857595),
    o = n(607070),
    c = n(1870),
    d = n(884697),
    u = n(164946),
    m = n(210887),
    p = n(695346),
    h = n(675478),
    x = n(25990),
    f = n(594174),
    b = n(74538),
    g = n(981631),
    v = n(469115),
    j = n(959517);
let _ = [g.BRd.DARK, g.BRd.LIGHT, g.BRd.DARKER, g.BRd.MIDNIGHT],
    y = [r.Pi.COMPACT, r.Pi.COZY, r.Pi.DEFAULT];
function C(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function S() {
    let e = (function () {
            let e = f.default.getCurrentUser();
            return b.ZP.canUseClientThemes(e) ? Object.keys(v.qt).map((e) => Number(e)) : [];
        })(),
        t = e.length > 0 && Math.random() > 0.7;
    try {
        if (t) {
            let t,
                a = [...e, null],
                r = C(a);
            if (null != r) {
                var n;
                let e = v.qt[r];
                t = null != (n = null == e ? void 0 : e.theme) ? n : g.BRd.DARK;
            } else t = C([g.BRd.DARK, g.BRd.DARKER, g.BRd.MIDNIGHT]);
            await l.ZI(
                {
                    theme: t,
                    backgroundGradientPresetId: null != r ? r : void 0,
                    customUserThemeSettings: void 0,
                },
                h.fy.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = C(_);
            await l.ZI(
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
                (0, i.cV)(e);
            }
            if (r) {
                let e = C([...n, null]);
                (0, i.Rx)(e);
            }
            let e = x.Z.getAllPending(),
                l = (0, u.ED)(e);
            await (0, i.Mn)(l).finally(i.si);
        } catch (e) {}
}
function T() {
    try {
        let e = C(g.yqN.FONT_SIZES);
        (0, s.oL)(e);
        let t = C(j.fP);
        (0, s.ZZ)(t);
        let n = C(y);
        p.YC.updateSetting(n);
    } catch (e) {}
}
function O() {
    a.useEffect(() => {
        var e, t, n, a, r;
        let b = f.default.getCurrentUser(),
            g = p.L1.getSetting(),
            v = c.Z.purchases,
            j = (0, d.Ad)(v),
            _ = (0, d.jT)(v),
            y = m.Z.theme,
            C = g.backgroundGradientPresetId,
            S = null == b || null == (e = b.avatarDecoration) ? void 0 : e.skuId,
            E = null == b || null == (n = b.collectibles) || null == (t = n.nameplate) ? void 0 : t.skuId,
            T = null != S && null != (a = j.find((e) => e.skuId === S)) ? a : null,
            O = null != E && null != (r = _.find((e) => e.skuId === E)) ? r : null,
            N = o.Z.fontSize,
            P = o.Z.messageGroupSpacing,
            I = p.YC.getSetting();
        return () => {
            try {
                l.ZI(
                    {
                        theme: y,
                        backgroundGradientPresetId: null != C ? C : void 0,
                        customUserThemeSettings: void 0,
                    },
                    h.fy.INFREQUENT_USER_ACTION,
                ),
                    (0, i.cV)(T),
                    (0, i.Rx)(O);
                let e = x.Z.getAllPending(),
                    t = (0, u.ED)(e);
                (0, i.Mn)(t).finally(i.si), (0, s.oL)(N), (0, s.ZZ)(P), p.YC.updateSetting(I);
            } catch (e) {}
        };
    }, []);
}
