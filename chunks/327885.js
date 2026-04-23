a.d(t, { y: () => b });
var n = a(64700),
    l = a(559474);
let i = new Set([
        l.RN.HERO_BANNER_STATIC,
        l.RN.HERO_LOGO,
        l.RN.PDP_BACKGROUND,
        l.RN.LOGO,
        l.RN.MOBILE_BANNER,
        l.RN.MOBILE_BACKGROUND,
    ]),
    s = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    r = { max: 5e6, warn: 2e6 },
    o = { max: 3e6, warn: 1e6 },
    d = { max: 2e6, warn: 1e6 },
    c = { max: 1e6, warn: 5e5 },
    u = { max: 25e4, warn: 5e4 },
    m = {
        [l.Jn.PROFILE_EFFECT]: r,
        [l.Jn.AVATAR_DECORATION]: o,
        [l.RN.HERO_BANNER_ANIMATED]: r,
        [l.RN.HERO_BANNER_RIVE]: r,
        [l.RN.CATALOG_BANNER_RIVE]: r,
        [l.RN.SHOP_BUTTON_BG_HOVER]: o,
        [l.RN.SHOP_BUTTON_BG_HOVER_DARK]: o,
        [l.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: o,
        [l.RN.SHOP_BUTTON_BG_RESTING]: o,
        [l.RN.SHOP_BUTTON_BG_RESTING_DARK]: o,
        [l.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: o,
        [l.RN.HERO_BANNER_STATIC]: d,
        [l.RN.UPSELL_BANNER]: c,
        [l.RN.UPSELL_BANNER_POPOUT]: u,
        [l.RN.MOBILE_BANNER]: c,
        [l.RN.MOBILE_BACKGROUND]: u,
        [l.RN.MOBILE_HERO]: c,
        [l.RN.PDP_BACKGROUND]: u,
        [l.RN.LOGO]: u,
        [l.RN.TAB_TOOLTIP]: u,
    },
    h = async (e) => {
        let t = Object.values(l.Kx),
            a = new Set(),
            n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e))) e.isDirectory && t.includes(e.name) && a.add(e.name);
        return t.filter((e) => !a.has(e));
    },
    p = (e) => {
        let { names: t, addError: a } = e,
            n = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
            l = t.filter((e) => !n.test(e));
        l.length > 0 && a("File names must be in lowercase snake case", l);
    },
    x = (e, t, a, n) => {
        let l = t.size,
            i = l > 1e6 ? `${(l / 1e6).toFixed(2)}MB` : `${(l / 1e3).toFixed(2)}KB`,
            s = `${t.name} - ${i}`;
        if (l > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${s} (max: ${t})`]);
        } else l > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${s}`]);
    },
    g = (e, t, a, n) => {
        let l = m[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || x(l, e, a, n);
    },
    v = (e) => {
        let t = l.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    },
    b = () => {
        let [e, t] = n.useState(!1),
            [a, r] = n.useState({}),
            [o, d] = n.useState({}),
            c = n.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                d((a) => {
                    let n = a[e] ?? [];
                    return { ...a, [e]: [...n, ...t] };
                });
            }, []),
            u = n.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                r((a) => {
                    let n = a[e] ?? [];
                    return { ...a, [e]: [...n, ...t] };
                });
            }, []),
            b = n.useCallback(() => {
                t(!1), d({}), r({});
            }, []);
        return {
            validationComplete: e,
            errors: o,
            warnings: a,
            validateShopAssetPackage: n.useCallback(
                async (e) => {
                    try {
                        var a;
                        if (0 === e.length) return void c("No files found");
                        if (e.length > 1) return void c("Uploaded multiple files. Expected 1 directory.");
                        let t = e[0];
                        if (!t.isDirectory) return void c("Uploaded a file. Expected a directory.");
                        let n = await h(t);
                        if (n.length > 0) return void c("Missing required directories", n);
                        (a = await (0, l.eg)([t])),
                            ((e) => {
                                let { files: t, addError: a, addWarning: n } = e;
                                for (let e of t.collectionFiles) {
                                    let t = (0, l.pd)(e),
                                        i = null != t ? m[t] : null;
                                    null != i && x(i, e, a, n);
                                }
                                p({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                let s = new Set(t.collectionFiles.map((e) => (0, l.pd)(e)).filter((e) => null != e)),
                                    r = Array.from(i)
                                        .filter((e) => !s.has(e))
                                        .map(v);
                                r.length > 0 && a("Missing required files", r);
                                let o = Object.values(l.RN)
                                    .filter((e) => !i.has(e))
                                    .filter((e) => !s.has(e))
                                    .map(v);
                                o.length > 0 && n("Missing optional assets", o);
                            })({ files: a, addError: c, addWarning: u }),
                            ((e) => {
                                let { files: t, addError: a, addWarning: n } = e;
                                p({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                    Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                        let [t, i] = e,
                                            r = i.map((e) => e.name);
                                        p({
                                            names: r.map((e) => {
                                                let t = e.indexOf("-");
                                                return e.substring(0, t > 0 ? t : e.length);
                                            }),
                                            addError: a,
                                        }),
                                            g(l.Jn.PROFILE_EFFECT, i, a, n);
                                        let o = s
                                            .filter((e) => !r.some((t) => t.startsWith(e) && t.endsWith(".png")))
                                            .map((e) => `${t}/${e}`);
                                        o.length > 0 && a("Missing required PFX files with prefix", o),
                                            r.some((e) => e.endsWith(".txt")) ||
                                                a(
                                                    "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                    [t],
                                                );
                                        let d = r
                                            .filter((e) => !s.some((t) => e.startsWith(t)) && !e.endsWith(".txt"))
                                            .map((e) => `${t}/${e}`);
                                        d.length > 0 && n("Contains unrecognized files", d);
                                    });
                            })({ files: a, addError: c, addWarning: u }),
                            ((e) => {
                                let { files: t, addError: a, addWarning: n } = e;
                                p({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                    g(l.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
                            })({ files: a, addError: c, addWarning: u }),
                            ((e) => {
                                let { files: t, addWarning: a } = e;
                                t.ignoredFilenames.length > 0 && a("Contains unrecognized files", t.ignoredFilenames);
                            })({ files: a, addError: c, addWarning: u });
                    } finally {
                        t(!0);
                    }
                },
                [c, u],
            ),
            reset: b,
        };
    };
