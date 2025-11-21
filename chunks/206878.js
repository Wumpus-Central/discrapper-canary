n.d(t, { g: () => v }), n(388685), n(35282);
var a = n(473749),
    l = n(281598);
function r(e) {
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
function i(e, t) {
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
        l.jE.HERO_BANNER_STATIC,
        l.jE.HERO_LOGO,
        l.jE.PDP_BACKGROUND,
        l.jE.LOGO,
        l.jE.MOBILE_BANNER,
        l.jE.MOBILE_BACKGROUND,
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
        [l.aB.PROFILE_EFFECT]: c,
        [l.aB.AVATAR_DECORATION]: d,
        [l.jE.HERO_BANNER_ANIMATED]: c,
        [l.jE.HERO_BANNER_RIVE]: c,
        [l.jE.SHOP_BUTTON_BG_HOVER]: d,
        [l.jE.SHOP_BUTTON_BG_HOVER_DARK]: d,
        [l.jE.SHOP_BUTTON_BG_HOVER_LIGHT]: d,
        [l.jE.SHOP_BUTTON_BG_RESTING]: d,
        [l.jE.SHOP_BUTTON_BG_RESTING_DARK]: d,
        [l.jE.SHOP_BUTTON_BG_RESTING_LIGHT]: d,
        [l.jE.HERO_BANNER_STATIC]: u,
        [l.jE.UPSELL_BANNER]: m,
        [l.jE.UPSELL_BANNER_POPOUT]: p,
        [l.jE.MOBILE_BANNER]: m,
        [l.jE.MOBILE_BACKGROUND]: p,
        [l.jE.PDP_BACKGROUND]: p,
        [l.jE.LOGO]: p,
        [l.jE.COACHTIP_AVATAR]: p,
    },
    x = async (e) => {
        let t = Object.values(l.CM),
            n = new Set(),
            a = e.createReader();
        for (let e of await new Promise((e) => a.readEntries(e))) e.isDirectory && t.includes(e.name) && n.add(e.name);
        return t.filter((e) => !n.has(e));
    },
    g = (e) => {
        let { names: t, addError: n } = e,
            a = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
            l = t.filter((e) => !a.test(e));
        l.length > 0 && n("File names must be in lowercase snake case", l);
    },
    f = (e, t, n, a) => {
        let l = t.size,
            r = l > 1000000 ? "".concat((l / 1000000).toFixed(2), "MB") : "".concat((l / 1000).toFixed(2), "KB"),
            i = "".concat(t.name, " - ").concat(r);
        if (l > e.max) {
            let t =
                e.max > 1000000
                    ? "".concat(Math.round(e.max / 1000000), "MB")
                    : "".concat(Math.round(e.max / 1000), "KB");
            n("Files exceed the recommended size limit - make sure they are optimized!", [
                "".concat(i, " (max: ").concat(t, ")"),
            ]);
        } else l > e.warn && a("Files are a tad chonky - are you sure they're optimized?", ["".concat(i)]);
    },
    b = (e, t, n, a) => {
        let l = h[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || f(l, e, n, a);
    },
    v = () => {
        let [e, t] = a.useState(!1),
            [n, c] = a.useState({}),
            [d, u] = a.useState({}),
            m = a.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                u((n) => {
                    var a;
                    let l = null != (a = n[e]) ? a : [];
                    return i(r({}, n), {
                        [e]: [...l, ...t],
                    });
                });
            }, []),
            p = a.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                c((n) => {
                    var a;
                    let l = null != (a = n[e]) ? a : [];
                    return i(r({}, n), {
                        [e]: [...l, ...t],
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
                        (n = await (0, l.LY)([t])),
                            ((e) => {
                                let { files: t, addError: n, addWarning: a } = e;
                                for (let e of t.collectionFiles) {
                                    let t = (0, l.BU)(e),
                                        r = null != t ? h[t] : null;
                                    null != r && f(r, e, n, a);
                                }
                                g({
                                    names: t.collectionFiles.map((e) => e.name),
                                    addError: n,
                                });
                                let r = new Set(t.collectionFiles.map((e) => e.name)),
                                    i = Array.from(s).filter((e) => !r.has(e));
                                i.length > 0 && n("Missing required files", i);
                                let o = Object.values(l.jE)
                                    .filter((e) => !s.has(e))
                                    .filter((e) => !r.has(e));
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
                                        let [t, r] = e,
                                            i = r.map((e) => e.name);
                                        g({
                                            names: i.map((e) => {
                                                let t = e.indexOf("-");
                                                return e.substring(0, t > 0 ? t : e.length);
                                            }),
                                            addError: n,
                                        }),
                                            b(l.aB.PROFILE_EFFECT, r, n, a);
                                        let s = o
                                            .filter((e) => !i.some((t) => t.startsWith(e) && t.endsWith(".png")))
                                            .map((e) => "".concat(t, "/").concat(e));
                                        s.length > 0 && n("Missing required PFX files with prefix", s),
                                            i.some((e) => e.endsWith(".txt")) ||
                                                n(
                                                    "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                    [t],
                                                );
                                        let c = i
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
                                    b(l.aB.AVATAR_DECORATION, t.avatarDecorationFiles, n, a);
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
