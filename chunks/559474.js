t.d(r, {
    GF: () => h,
    Jn: () => A,
    KE: () => F,
    Kx: () => b,
    Li: () => _,
    Ni: () => E,
    RN: () => f,
    aL: () => v,
    ds: () => C,
    eg: () => I,
    pd: () => T,
}),
    t(321073),
    t(323874),
    t(14289),
    t(35956);
var a,
    n,
    l,
    i = t(64700),
    o = t(691540),
    s = t(857250),
    u = t(97483),
    c = t(59318),
    p = t(120301),
    d = t(940622),
    f =
        (((a = {}).CATALOG_BANNER_STATIC = "catalog_banner"),
        (a.CATALOG_BANNER_ANIMATED = "catalog_banner_animated"),
        (a.CATALOG_BANNER_RIVE = "catalog_banner_rive"),
        (a.HERO_BANNER_STATIC = "hero_banner"),
        (a.HERO_BANNER_ANIMATED = "hero_banner_animated"),
        (a.HERO_BANNER_RIVE = "hero_rive"),
        (a.HERO_LOGO = "hero_logo"),
        (a.FEATURED_BLOCK = "featured_block"),
        (a.UPSELL_BANNER = "upsell_banner"),
        (a.UPSELL_BANNER_POPOUT = "upsell_banner_popout"),
        (a.PDP_BACKGROUND = "pdp_bg"),
        (a.SHOP_BUTTON_BG_HOVER = "shop_button_bg_hover"),
        (a.SHOP_BUTTON_BG_HOVER_DARK = "shop_button_bg_hover_dark"),
        (a.SHOP_BUTTON_BG_HOVER_LIGHT = "shop_button_bg_hover_light"),
        (a.SHOP_BUTTON_BG_RESTING = "shop_button_bg_resting"),
        (a.SHOP_BUTTON_BG_RESTING_DARK = "shop_button_bg_resting_dark"),
        (a.SHOP_BUTTON_BG_RESTING_LIGHT = "shop_button_bg_resting_light"),
        (a.TAB_TOOLTIP = "tab_tooltip"),
        (a.LOGO = "logo"),
        (a.MOBILE_BANNER = "mobile_banner"),
        (a.MOBILE_BACKGROUND = "mobile_bg"),
        (a.MOBILE_HERO = "mobile_hero"),
        a);
let v = {
        catalog_banner: ["jpg", "png"],
        catalog_banner_animated: ["webm"],
        catalog_banner_rive: ["riv"],
        hero_banner: ["jpg", "png"],
        hero_banner_animated: ["webm"],
        hero_rive: ["riv"],
        hero_logo: ["png"],
        featured_block: ["png"],
        upsell_banner: ["jpg", "png"],
        upsell_banner_popout: ["png"],
        pdp_bg: ["jpg"],
        shop_button_bg_hover: ["png"],
        shop_button_bg_hover_dark: ["png"],
        shop_button_bg_hover_light: ["png"],
        shop_button_bg_resting: ["png"],
        shop_button_bg_resting_dark: ["png"],
        shop_button_bg_resting_light: ["png"],
        tab_tooltip: ["jpg", "png"],
        logo: ["png"],
        mobile_banner: ["jpg"],
        mobile_bg: ["jpg"],
        mobile_hero: ["jpg"],
    },
    m = new Map(Object.values(f).flatMap((e) => v[e].map((r) => [`${e}.${r}`, e]))),
    _ = new Set(m.keys());
var A =
    (((n = {}).PROFILE_EFFECT = "profile_effect"),
    (n.AVATAR_DECORATION = "avatar_decoration"),
    (n.PROFILE_FRAME = "profile_frame"),
    n);
let g = ".DS_Store";
var b =
    (((l = {}).COLLECTION = "collection"),
    (l.AVATAR_DECORATIONS = "avatar_decorations"),
    (l.FRAMES = "frames"),
    (l.NAMEPLATES = "nameplates"),
    (l.PROFILE_EFFECTS = "profile_effects"),
    l);
let E = (e) => {
        (0, o.P0)((0, s.o)(e, u.Ck.FAILURE));
    },
    h = (e) => {
        (0, o.P0)((0, s.o)(e, u.Ck.SUCCESS));
    },
    R = (e, r) => {
        let t = new FileReader();
        (t.onload = (t) => {
            null == t.target || "string" != typeof t.target.result
                ? E("Error uploading file. Try again!")
                : r(e, t.target.result);
        }),
            t.readAsDataURL(e);
    },
    F = (e, r, t) => {
        if (0 === e.length) return void t?.("No files found!");
        for (let t of e) R(t, r);
    },
    O = (e, r) => `${e}/${r}`,
    w = (e) => (0, c.tT)(e.type) || (0, c.XB)(e.type) || (0, c.XA)(e.name),
    T = (e) => m.get(e.name) ?? null,
    y = async (e) => {
        let r = e.createReader();
        return (await new Promise((e) => r.readEntries(e))).filter((e) => !(e.isDirectory && e.name.startsWith("_")));
    },
    D = async (e) => {
        let r = [];
        if (e.isFile) {
            let t = await new Promise((r) => e.file(r));
            t.name !== g && r.push(t);
        } else if (e.isDirectory) {
            let t = await y(e),
                a = await Promise.all(t.map((e) => D(e)));
            r.push(...a.flat());
        }
        return r;
    },
    L = (e, r, t, a) => {
        if (r.name === g) return;
        let n = O(e, r.name);
        if ("profile_effects" === t)
            w(r) || r.name.endsWith(".txt")
                ? (e in a.profileEffectFilesMap || (a.profileEffectFilesMap[e] = []),
                  a.profileEffectFilesMap[e].push(r))
                : a.ignoredFilenames.push(O(e, r.name));
        else
            w(r)
                ? "collection" === t || null === t
                    ? null != T(r)
                        ? a.collectionFiles.push(r)
                        : a.ignoredFilenames.push(n)
                    : "avatar_decorations" === t
                      ? a.avatarDecorationFiles.push(r)
                      : a.ignoredFilenames.push(n)
                : a.ignoredFilenames.push(n);
    },
    N = async (e, r, t) => {
        for (let a of await y(e))
            if (a.isFile) {
                let n = a,
                    l = await new Promise((e) => n.file(e));
                L(e.name, l, r, t);
            } else {
                let e = await D(a);
                t.ignoredFilenames.push(...e.map((e) => O(a.name, e.name)));
            }
    },
    P = async (e, r) => {
        let t = e.name,
            a = await y(e),
            n = { previewFile: null, layerFiles: [], unrecognizedSubdirs: [] };
        for (let e of a) {
            if (e.isFile) {
                if (e.name === g) continue;
                let a = e,
                    l = await new Promise((e) => a.file(e));
                (0, p.Y_)(l.name) ? (n.previewFile = l) : r.ignoredFilenames.push(`frames/${t}/${l.name}`);
                continue;
            }
            if (e.isDirectory) {
                let a = e.name;
                if ("foreground" === a || "background" === a) {
                    for (let l of await y(e))
                        if (l.isFile && l.name !== g) {
                            let e = l,
                                r = await new Promise((r) => e.file(r));
                            n.layerFiles.push({ file: r, folder: a });
                        } else if (l.isDirectory) {
                            let e = await D(l);
                            r.ignoredFilenames.push(...e.map((e) => `frames/${t}/${a}/${l.name}/${e.name}`));
                        }
                } else {
                    n.unrecognizedSubdirs.push(a);
                    let l = await D(e);
                    r.ignoredFilenames.push(...l.map((e) => `frames/${t}/${a}/${e.name}`));
                }
            }
        }
        (null != n.previewFile || 0 !== n.layerFiles.length) && (r.profileFrameDirsMap[t] = n);
    },
    M = async (e, r) => {
        for (let t of await y(e))
            t.isDirectory ? await P(t, r) : t.isFile && t.name !== g && r.ignoredFilenames.push(`frames/${t.name}`);
    },
    U = async (e, r) => {
        for (let t of await y(e))
            t.isDirectory
                ? await N(t, "profile_effects", r)
                : t.isFile && t.name !== g && r.ignoredFilenames.push(O(e.name, t.name));
    },
    S = async (e, r) => {
        for (let t of await y(e))
            if (t.isDirectory) {
                let e = t;
                if ("collection" === e.name) await N(e, "collection", r);
                else if ("avatar_decorations" === e.name) await N(e, "avatar_decorations", r);
                else if ("profile_effects" === e.name) await U(e, r);
                else if ("frames" === e.name) await M(e, r);
                else {
                    let t = await D(e);
                    r.ignoredFilenames.push(...t.map((r) => O(e.name, r.name)));
                }
            }
    },
    I = async (e) => {
        let r = {
            collectionFiles: [],
            avatarDecorationFiles: [],
            profileEffectFilesMap: {},
            profileFrameDirsMap: {},
            ignoredFilenames: [],
        };
        for (let t of e)
            if (t.isDirectory) {
                let e = t.name;
                "collection" === e || "avatar_decorations" === e
                    ? await N(t, e, r)
                    : "profile_effects" === e
                      ? await U(t, r)
                      : "frames" === e
                        ? await M(t, r)
                        : await S(t, r);
            } else if (t.isFile) {
                let e = t;
                L("", await new Promise((r) => e.file(r)), null, r);
            }
        return (
            r.collectionFiles.sort((e, r) => e.name.localeCompare(r.name)),
            r.avatarDecorationFiles.sort((e, r) => e.name.localeCompare(r.name)),
            r.ignoredFilenames.sort((e, r) => e.localeCompare(r)),
            r
        );
    },
    C = () => {
        let [e, r] = i.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                profileFrameDirsMap: {},
                ignoredFilenames: [],
            })),
            { upsertCollectionAsset: t, upsertAvatarDecorationAsset: a, upsertProfileFrame: n } = (0, d.JE)(),
            l = i.useCallback(
                async (e) => {
                    let l = await I(e);
                    Object.entries(l.profileFrameDirsMap).forEach((e) => {
                        let [r, t] = e,
                            a = ((e, r, t) => {
                                let a = null != r.previewFile ? URL.createObjectURL(r.previewFile) : null,
                                    n = [],
                                    l = {};
                                for (let { file: a, folder: i } of r.layerFiles) {
                                    let { parsed: r, errorType: o } = (0, p.Mf)(a.name);
                                    if (null == r) {
                                        let r = null != o ? p.h4[o] : "invalid";
                                        t.push(`frames/${e}/${i}/${a.name}: ${r}`);
                                        continue;
                                    }
                                    let s = p.R9[i],
                                        u = `preview-${e}-${s}-${r.index}`;
                                    n.push({
                                        layer: {
                                            id: u,
                                            type: r.type,
                                            order: s,
                                            anchor: r.anchor,
                                            responsive: r.responsive,
                                        },
                                        order: s,
                                        index: r.index,
                                    }),
                                        (l[u] = URL.createObjectURL(a));
                                }
                                n.sort(p.ui);
                                let i = n.map((e) => e.layer);
                                return 0 === i.length && null == a
                                    ? null
                                    : { key: e, previewSrc: a, layers: i, layerSrcByLayerId: l };
                            })(r, t, l.ignoredFilenames);
                        null != a && n(r, a);
                    }),
                        l.ignoredFilenames.sort((e, r) => e.localeCompare(r)),
                        r(l),
                        (0 !== l.collectionFiles.length || 0 !== l.avatarDecorationFiles.length) &&
                            (l.collectionFiles.forEach((e) => {
                                R(e, (e) => {
                                    let r = T(e);
                                    null != r && t(r, e);
                                });
                            }),
                            l.avatarDecorationFiles.forEach((e) => {
                                R(e, (e) => {
                                    a(e);
                                });
                            }));
                },
                [t, a, n],
            ),
            o = i.useCallback(() => {
                r((e) => ({
                    ...e,
                    collectionFiles: [],
                    avatarDecorationFiles: [],
                    profileEffectFilesMap: {},
                    profileFrameDirsMap: {},
                }));
            }, []),
            s = i.useCallback(() => {
                r((e) => ({ ...e, ignoredFilenames: [] }));
            }, []);
        return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: o,
            clearIgnoredFilenames: s,
            processAndUpsertAssets: l,
        };
    };
