n.d(t, {
    IK: () => b,
    Ym: () => O,
    _I: () => y,
});
var r = n(442837),
    i = n(433517),
    a = n(872810),
    o = n(722733),
    s = n(633289),
    l = n(751823),
    c = n(361291),
    u = n(37113);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = {
        allowAutoQuality: !1,
        defaultAutoQuality: !1,
        migrateAutoQuality: !1,
    },
    h = "GoLiveAutoQualityMigrationVersion",
    g = 1,
    E = (0, o.ZP)({
        name: "2025-10-go-live-auto-quality",
        kind: "user",
        defaultConfig: m,
        variations: {
            1: _(f({}, m), {
                allowAutoQuality: !0,
                migrateAutoQuality: !0,
            }),
            2: _(f({}, m), {
                allowAutoQuality: !0,
                defaultAutoQuality: !0,
            }),
        },
    });
function b(e) {
    let { location: t } = e,
        { isInHoldout: n } = l.L.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? E.definition.defaultConfig : E.getConfig({ location: t });
}
function y(e) {
    let { location: t } = e;
    return (0, r.e7)([s.Z], () => b({ location: t }));
}
function O() {
    var e;
    let t = E.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality,
        n = Number(null != (e = i.K.get(h)) ? e : 0);
    if (!t || n >= g) return;
    let r = c.Z.getState();
    if (r.preset !== u.tI.PRESET_CUSTOM) {
        (0, a.Rc)({
            preset: u.tI.PRESET_AUTO,
            resolution: r.resolution,
            frameRate: r.fps,
            soundshareEnabled: r.soundshareEnabled,
            noTrack: !0,
        }),
            i.K.set(h, g);
        return;
    }
}
