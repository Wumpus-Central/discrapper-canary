n.d(t, { g: () => v }), n(388685), n(35282);
var a = n(647438),
    i = n(281598);
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function r(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let s = new Set([
        i.jE.HERO_BANNER_STATIC,
        i.jE.HERO_LOGO,
        i.jE.PDP_BACKGROUND,
        i.jE.LOGO,
        i.jE.MOBILE_BANNER,
        i.jE.MOBILE_BACKGROUND,
    ]),
    o = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    c = {
        max: 5000000,
        warn: 2000000,
    },
    d = {
        max: 3000000,
        warn: 1000000,
    },
    u = {
        max: 2000000,
        warn: 1000000,
    },
    m = {
        max: 1000000,
        warn: 500000,
    },
    p = {
        max: 250000,
        warn: 50000,
    },
    h = {
        [i.aB.PROFILE_EFFECT]: c,
        [i.aB.AVATAR_DECORATION]: d,
        [i.jE.HERO_BANNER_ANIMATED]: c,
        [i.jE.SHOP_BUTTON_BG_HOVER]: d,
        [i.jE.SHOP_BUTTON_BG_HOVER_DARK]: d,
        [i.jE.SHOP_BUTTON_BG_HOVER_LIGHT]: d,
        [i.jE.SHOP_BUTTON_BG_RESTING]: d,
        [i.jE.SHOP_BUTTON_BG_RESTING_DARK]: d,
        [i.jE.SHOP_BUTTON_BG_RESTING_LIGHT]: d,
        [i.jE.HERO_BANNER_STATIC]: u,
        [i.jE.UPSELL_BANNER]: m,
        [i.jE.UPSELL_BANNER_POPOUT]: p,
        [i.jE.MOBILE_BANNER]: m,
        [i.jE.MOBILE_BACKGROUND]: p,
        [i.jE.PDP_BACKGROUND]: p,
        [i.jE.LOGO]: p,
        [i.jE.COACHTIP_AVATAR]: p,
    },
    x = async (e) => {
        let t = Object.values(i.CM),
            n = new Set(),
            a = e.createReader();
        for (let e of await new Promise((e) => a.readEntries(e))) e.isDirectory && t.includes(e.name) && n.add(e.name);
        return t.filter((e) => !n.has(e));
    },
    g = (e) => {
        let { names: t, addError: n } = e,
            a = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
            i = t.filter((e) => !a.test(e));
        i.length > 0 && n("File names must be in lowercase snake case", i);
    },
    f = (e, t, n, a) => {
        let i = t.size,
            l = i > 1000000 ? "".concat((i / 1000000).toFixed(2), "MB") : "".concat((i / 1000).toFixed(2), "KB"),
            r = "".concat(t.name, " - ").concat(l);
        if (i > e.max) {
            let t =
                e.max > 1000000
                    ? "".concat(Math.round(e.max / 1000000), "MB")
                    : "".concat(Math.round(e.max / 1000), "KB");
            n("Files exceed the recommended size limit - make sure they are optimized!", [
                "".concat(r, " (max: ").concat(t, ")"),
            ]);
        } else i > e.warn && a("Files are a tad chonky - are you sure they're optimized?", ["".concat(r)]);
    },
    b = (e, t, n, a) => {
        let i = h[e];
        if (null != i) for (let e of t) e.name.endsWith(".txt") || f(i, e, n, a);
    },
    v = () => {
        let [e, t] = a.useState(!1),
            [n, c] = a.useState({}),
            [d, u] = a.useState({}),
            m = a.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                u((n) => {
                    var a;
                    let i = null != (a = n[e]) ? a : [];
                    return r(l({}, n), {
                        [e]: [...i, ...t],
                    });
                });
            }, []),
            p = a.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                c((n) => {
                    var a;
                    let i = null != (a = n[e]) ? a : [];
                    return r(l({}, n), {
                        [e]: [...i, ...t],
                    });
                });
            }, []),
            v = a.useCallback(() => {
                t(!1), u({}), c({});
            }, []);
        return {
            validationComplete: e,
            errors: d,
            warnings: n,
            validateShopAssetPackage: a.useCallback(
                async (e) => {
                    try {
                        var n;
                        if (0 === e.length) return void m("No files found");
                        if (e.length > 1) return void m("Uploaded multiple files. Expected 1 directory.");
                        let t = e[0];
                        if (!t.isDirectory) return void m("Uploaded a file. Expected a directory.");
                        let a = await x(t);
                        if (a.length > 0) return void m("Missing required directories", a);
                        (n = await (0, i.LY)([t])),
                            ((e) => {
                                let { files: t, addError: n, addWarning: a } = e;
                                for (let e of t.collectionFiles) {
                                    let t = (0, i.BU)(e),
                                        l = null != t ? h[t] : null;
                                    null != l && f(l, e, n, a);
                                }
                                g({
                                    names: t.collectionFiles.map((e) => e.name),
                                    addError: n,
                                });
                                let l = new Set(t.collectionFiles.map((e) => e.name)),
                                    r = Array.from(s).filter((e) => !l.has(e));
                                r.length > 0 && n("Missing required files", r);
                                let o = Object.values(i.jE)
                                    .filter((e) => !s.has(e))
                                    .filter((e) => !l.has(e));
                                o.length > 0 && a("Missing optional assets", o);
                            })({
                                files: n,
                                addError: m,
                                addWarning: p,
                            }),
                            ((e) => {
                                let { files: t, addError: n, addWarning: a } = e;
                                g({
                                    names: Object.keys(t.profileEffectFilesMap),
                                    addError: n,
                                }),
                                    Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                        let [t, l] = e,
                                            r = l.map((e) => e.name);
                                        g({
                                            names: r.map((e) => {
                                                let t = e.indexOf("-");
                                                return e.substring(0, t > 0 ? t : e.length);
                                            }),
                                            addError: n,
                                        }),
                                            b(i.aB.PROFILE_EFFECT, l, n, a);
                                        let s = o
                                            .filter((e) => !r.some((t) => t.startsWith(e) && t.endsWith(".png")))
                                            .map((e) => "".concat(t, "/").concat(e));
                                        s.length > 0 && n("Missing required PFX files with prefix", s),
                                            r.some((e) => e.endsWith(".txt")) ||
                                                n(
                                                    "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                    [t],
                                                );
                                        let c = r
                                            .filter((e) => !o.some((t) => e.startsWith(t)) && !e.endsWith(".txt"))
                                            .map((e) => "".concat(t, "/").concat(e));
                                        c.length > 0 && a("Contains unrecognized files", c);
                                    });
                            })({
                                files: n,
                                addError: m,
                                addWarning: p,
                            }),
                            ((e) => {
                                let { files: t, addError: n, addWarning: a } = e;
                                g({
                                    names: t.avatarDecorationFiles.map((e) => e.name),
                                    addError: n,
                                }),
                                    b(i.aB.AVATAR_DECORATION, t.avatarDecorationFiles, n, a);
                            })({
                                files: n,
                                addError: m,
                                addWarning: p,
                            }),
                            ((e) => {
                                let { files: t, addWarning: n } = e;
                                t.ignoredFilenames.length > 0 && n("Contains unrecognized files", t.ignoredFilenames);
                            })({
                                files: n,
                                addError: m,
                                addWarning: p,
                            });
                    } finally {
                        t(!0);
                    }
                },
                [m, p],
            ),
            reset: v,
        };
    };
