a.d(t, { Z: () => _ }), a(388685), a(457542);
var n = a(73800),
    r = a(442837),
    l = a(809206),
    i = a(153867),
    s = a(1870),
    o = a(884697),
    c = a(223143),
    d = a(164946),
    u = a(675478),
    m = a(25990),
    x = a(594174),
    h = a(74538),
    p = a(981631),
    f = a(469115);
let b = [p.BRd.DARK, p.BRd.LIGHT, p.BRd.DARKER, p.BRd.MIDNIGHT];
function v(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function j() {
    let e = (function () {
            let e = x.default.getCurrentUser();
            return h.ZP.canUseClientThemes(e) ? Object.keys(f.qt).map((e) => Number(e)) : [];
        })(),
        t = e.length > 0 && Math.random() > 0.7;
    try {
        if (t) {
            let t,
                n = [...e, null],
                r = v(n);
            if (null != r) {
                var a;
                let e = f.qt[r];
                t = null != (a = null == e ? void 0 : e.theme) ? a : p.BRd.DARK;
            } else t = v([p.BRd.DARK, p.BRd.DARKER, p.BRd.MIDNIGHT]);
            await i.ZI(
                {
                    theme: t,
                    backgroundGradientPresetId: null != r ? r : void 0,
                    customUserThemeSettings: void 0,
                },
                u.fy.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = v(b);
            await i.ZI(
                {
                    theme: e,
                    backgroundGradientPresetId: void 0,
                    customUserThemeSettings: void 0,
                },
                u.fy.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function g(e, t) {
    let a = e.length > 0,
        n = t.length > 0;
    if (a || n)
        try {
            if (a) {
                let t = v([...e, null]);
                (0, l.cV)(t);
            }
            if (n) {
                let e = v([...t, null]);
                (0, l.Rx)(e);
            }
            let r = m.Z.getAllPending(),
                i = (0, d.ED)(r);
            await (0, l.Mn)(i).finally(l.si);
        } catch (e) {}
}
function _() {
    (0, c.mw)();
    let [e, t] = (0, r.Wu)([s.Z], () => {
            let e = s.Z.purchases;
            return [(0, o.Ad)(e), (0, o.jT)(e)];
        }),
        a = n.useCallback(() => {
            j(), g(e, t);
        }, [e, t]);
    n.useEffect(() => {
        let e = setInterval(() => {
            a();
        }, 5000);
        return () => clearInterval(e);
    }, [a]);
}
