n.d(t, {
    X5: () => y,
    eO: () => b,
    pn: () => O,
});
var r = n(311907),
    i = n(506774),
    a = n(401843),
    s = n(250105),
    o = n(217222),
    l = n(128319),
    c = n(929921),
    u = n(753070);
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
let h = {
        allowAutoQuality: !1,
        defaultAutoQuality: !1,
        migrateAutoQuality: !1,
    },
    m = "GoLiveAutoQualityMigrationVersion",
    g = 1,
    E = (0, s.Ay)({
        name: "2025-10-go-live-auto-quality",
        kind: "user",
        defaultConfig: h,
        variations: {
            1: _(f({}, h), {
                allowAutoQuality: !0,
                migrateAutoQuality: !0,
            }),
            2: _(f({}, h), {
                allowAutoQuality: !0,
                defaultAutoQuality: !0,
            }),
        },
    });
function b(e) {
    let { location: t } = e,
        { isInHoldout: n } = l.p.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? E.definition.defaultConfig : E.getConfig({ location: t });
}
function y(e) {
    let { location: t } = e;
    return (0, r.bG)([o.A], () => b({ location: t }));
}
function O() {
    var e;
    let t = E.getConfig({ location: "maybeMigrateToAutoQuality" }).migrateAutoQuality,
        n = Number(null != (e = i.w.get(m)) ? e : 0);
    if (!t || n >= g) return;
    let r = c.A.getState();
    if (r.preset !== u.jQ.PRESET_CUSTOM) {
        (0, a.Xd)({
            preset: u.jQ.PRESET_AUTO,
            resolution: r.resolution,
            frameRate: r.fps,
            soundshareEnabled: r.soundshareEnabled,
            noTrack: !0,
        }),
            i.w.set(m, g);
        return;
    }
}
