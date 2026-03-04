n.d(t, { y: () => _ });
var a = n(64700),
    i = n(559474);
let s = new Set([
        i.RN.HERO_BANNER_STATIC,
        i.RN.HERO_LOGO,
        i.RN.PDP_BACKGROUND,
        i.RN.LOGO,
        i.RN.MOBILE_BANNER,
        i.RN.MOBILE_BACKGROUND,
    ]),
    l = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    r = { max: 5e6, warn: 2e6 },
    o = { max: 3e6, warn: 1e6 },
    d = { max: 2e6, warn: 1e6 },
    c = { max: 1e6, warn: 5e5 },
    u = { max: 25e4, warn: 5e4 },
    m = {
        [i.Jn.PROFILE_EFFECT]: r,
        [i.Jn.AVATAR_DECORATION]: o,
        [i.RN.HERO_BANNER_ANIMATED]: r,
        [i.RN.HERO_BANNER_RIVE]: r,
        [i.RN.CATALOG_BANNER_RIVE]: r,
        [i.RN.SHOP_BUTTON_BG_HOVER]: o,
        [i.RN.SHOP_BUTTON_BG_HOVER_DARK]: o,
        [i.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: o,
        [i.RN.SHOP_BUTTON_BG_RESTING]: o,
        [i.RN.SHOP_BUTTON_BG_RESTING_DARK]: o,
        [i.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: o,
        [i.RN.HERO_BANNER_STATIC]: d,
        [i.RN.UPSELL_BANNER]: c,
        [i.RN.UPSELL_BANNER_POPOUT]: u,
        [i.RN.MOBILE_BANNER]: c,
        [i.RN.MOBILE_BACKGROUND]: u,
        [i.RN.MOBILE_HERO]: c,
        [i.RN.PDP_BACKGROUND]: u,
        [i.RN.LOGO]: u,
        [i.RN.COACHTIP_AVATAR]: u,
        [i.RN.TAB_TOOLTIP]: u,
    },
    h = async (e) => {
        let t = Object.values(i.Kx),
            n = new Set(),
            a = e.createReader();
        for (let e of await new Promise((e) => a.readEntries(e))) e.isDirectory && t.includes(e.name) && n.add(e.name);
        return t.filter((e) => !n.has(e));
    },
    x = (e) => {
        let { names: t, addError: n } = e,
            a = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
            i = t.filter((e) => !a.test(e));
        i.length > 0 && n("File names must be in lowercase snake case", i);
    },
    p = (e, t, n, a) => {
        let i = t.size,
            s = i > 1e6 ? `${(i / 1e6).toFixed(2)}MB` : `${(i / 1e3).toFixed(2)}KB`,
            l = `${t.name} - ${s}`;
        if (i > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            n("Files exceed the recommended size limit - make sure they are optimized!", [`${l} (max: ${t})`]);
        } else i > e.warn && a("Files are a tad chonky - are you sure they're optimized?", [`${l}`]);
    },
    g = (e, t, n, a) => {
        let i = m[e];
        if (null != i) for (let e of t) e.name.endsWith(".txt") || p(i, e, n, a);
    },
    _ = () => {
        let [e, t] = a.useState(!1),
            [n, r] = a.useState({}),
            [o, d] = a.useState({}),
            c = a.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                d((n) => {
                    let a = n[e] ?? [];
                    return { ...n, [e]: [...a, ...t] };
                });
            }, []),
            u = a.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                r((n) => {
                    let a = n[e] ?? [];
                    return { ...n, [e]: [...a, ...t] };
                });
            }, []),
            _ = a.useCallback(() => {
                t(!1), d({}), r({});
            }, []);
        return {
            validationComplete: e,
            errors: o,
            warnings: n,
            validateShopAssetPackage: a.useCallback(
                async (e) => {
                    try {
                        var n;
                        if (0 === e.length) return void c("No files found");
                        if (e.length > 1) return void c("Uploaded multiple files. Expected 1 directory.");
                        let t = e[0];
                        if (!t.isDirectory) return void c("Uploaded a file. Expected a directory.");
                        let a = await h(t);
                        if (a.length > 0) return void c("Missing required directories", a);
                        (n = await (0, i.eg)([t])),
                            ((e) => {
                                let { files: t, addError: n, addWarning: a } = e;
                                for (let e of t.collectionFiles) {
                                    let t = (0, i.pd)(e),
                                        s = null != t ? m[t] : null;
                                    null != s && p(s, e, n, a);
                                }
                                x({ names: t.collectionFiles.map((e) => e.name), addError: n });
                                let l = new Set(t.collectionFiles.map((e) => e.name)),
                                    r = Array.from(s).filter((e) => !l.has(e));
                                r.length > 0 && n("Missing required files", r);
                                let o = Object.values(i.RN)
                                    .filter((e) => !s.has(e))
                                    .filter((e) => !l.has(e));
                                o.length > 0 && a("Missing optional assets", o);
                            })({ files: n, addError: c, addWarning: u }),
                            ((e) => {
                                let { files: t, addError: n, addWarning: a } = e;
                                x({ names: Object.keys(t.profileEffectFilesMap), addError: n }),
                                    Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                        let [t, s] = e,
                                            r = s.map((e) => e.name);
                                        x({
                                            names: r.map((e) => {
                                                let t = e.indexOf("-");
                                                return e.substring(0, t > 0 ? t : e.length);
                                            }),
                                            addError: n,
                                        }),
                                            g(i.Jn.PROFILE_EFFECT, s, n, a);
                                        let o = l
                                            .filter((e) => !r.some((t) => t.startsWith(e) && t.endsWith(".png")))
                                            .map((e) => `${t}/${e}`);
                                        o.length > 0 && n("Missing required PFX files with prefix", o),
                                            r.some((e) => e.endsWith(".txt")) ||
                                                n(
                                                    "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                    [t],
                                                );
                                        let d = r
                                            .filter((e) => !l.some((t) => e.startsWith(t)) && !e.endsWith(".txt"))
                                            .map((e) => `${t}/${e}`);
                                        d.length > 0 && a("Contains unrecognized files", d);
                                    });
                            })({ files: n, addError: c, addWarning: u }),
                            ((e) => {
                                let { files: t, addError: n, addWarning: a } = e;
                                x({ names: t.avatarDecorationFiles.map((e) => e.name), addError: n }),
                                    g(i.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, n, a);
                            })({ files: n, addError: c, addWarning: u }),
                            ((e) => {
                                let { files: t, addWarning: n } = e;
                                t.ignoredFilenames.length > 0 && n("Contains unrecognized files", t.ignoredFilenames);
                            })({ files: n, addError: c, addWarning: u });
                    } finally {
                        t(!0);
                    }
                },
                [c, u],
            ),
            reset: _,
        };
    };
