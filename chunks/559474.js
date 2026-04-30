t.d(a, {
    GF: () => v,
    Jn: () => d,
    KE: () => L,
    Kx: () => f,
    Li: () => R,
    Ni: () => m,
    RN: () => c,
    aL: () => E,
    ds: () => P,
    eg: () => S,
    pd: () => T,
}),
    t(321073);
var n,
    r,
    l,
    i = t(64700),
    o = t(691540),
    s = t(857250),
    _ = t(97483),
    u = t(77350),
    A = t(940622),
    c =
        (((n = {}).CATALOG_BANNER_STATIC = "catalog_banner"),
        (n.CATALOG_BANNER_ANIMATED = "catalog_banner_animated"),
        (n.CATALOG_BANNER_RIVE = "catalog_banner_rive"),
        (n.HERO_BANNER_STATIC = "hero_banner"),
        (n.HERO_BANNER_ANIMATED = "hero_banner_animated"),
        (n.HERO_BANNER_RIVE = "hero_rive"),
        (n.HERO_LOGO = "hero_logo"),
        (n.FEATURED_BLOCK = "featured_block"),
        (n.UPSELL_BANNER = "upsell_banner"),
        (n.UPSELL_BANNER_POPOUT = "upsell_banner_popout"),
        (n.PDP_BACKGROUND = "pdp_bg"),
        (n.SHOP_BUTTON_BG_HOVER = "shop_button_bg_hover"),
        (n.SHOP_BUTTON_BG_HOVER_DARK = "shop_button_bg_hover_dark"),
        (n.SHOP_BUTTON_BG_HOVER_LIGHT = "shop_button_bg_hover_light"),
        (n.SHOP_BUTTON_BG_RESTING = "shop_button_bg_resting"),
        (n.SHOP_BUTTON_BG_RESTING_DARK = "shop_button_bg_resting_dark"),
        (n.SHOP_BUTTON_BG_RESTING_LIGHT = "shop_button_bg_resting_light"),
        (n.TAB_TOOLTIP = "tab_tooltip"),
        (n.LOGO = "logo"),
        (n.MOBILE_BANNER = "mobile_banner"),
        (n.MOBILE_BACKGROUND = "mobile_bg"),
        (n.MOBILE_HERO = "mobile_hero"),
        n);
let E = {
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
    p = new Map(Object.values(c).flatMap((e) => E[e].map((a) => [`${e}.${a}`, e]))),
    R = new Set(p.keys());
var d = (((r = {}).PROFILE_EFFECT = "profile_effect"), (r.AVATAR_DECORATION = "avatar_decoration"), r);
let g = ".DS_Store";
var f =
    (((l = {}).COLLECTION = "collection"),
    (l.AVATAR_DECORATIONS = "avatar_decorations"),
    (l.PROFILE_EFFECTS = "profile_effects"),
    l);
let m = (e) => {
        (0, o.P0)((0, s.o)(e, _.Ck.FAILURE));
    },
    v = (e) => {
        (0, o.P0)((0, s.o)(e, _.Ck.SUCCESS));
    },
    O = (e, a) => {
        let t = new FileReader();
        (t.onload = (t) => {
            null == t.target || "string" != typeof t.target.result
                ? m("Error uploading file. Try again!")
                : a(e, t.target.result);
        }),
            t.readAsDataURL(e);
    },
    L = (e, a, t) => {
        if (0 === e.length) return void t?.("No files found!");
        for (let t of e) O(t, a);
    },
    I = (e, a) => `${e}/${a}`,
    F = (e) => (0, u.tT)(e.type) || (0, u.XB)(e.type) || (0, u.XA)(e.name),
    T = (e) => p.get(e.name) ?? null,
    b = async (e) => {
        let a = [];
        if (e.isFile) {
            let t = await new Promise((a) => e.file(a));
            t.name !== g && a.push(t);
        } else if (e.isDirectory) {
            let t = e.createReader(),
                n = await new Promise((e) => t.readEntries(e)),
                r = await Promise.all(n.map((e) => b(e)));
            a.push(...r.flat());
        }
        return a;
    },
    N = (e, a, t, n) => {
        if (a.name === g) return;
        let r = I(e, a.name);
        if ("profile_effects" === t)
            F(a) || a.name.endsWith(".txt")
                ? (e in n.profileEffectFilesMap || (n.profileEffectFilesMap[e] = []),
                  n.profileEffectFilesMap[e].push(a))
                : n.ignoredFilenames.push(I(e, a.name));
        else
            F(a)
                ? "collection" === t || null === t
                    ? null != T(a)
                        ? n.collectionFiles.push(a)
                        : n.ignoredFilenames.push(r)
                    : "avatar_decorations" === t
                      ? n.avatarDecorationFiles.push(a)
                      : n.ignoredFilenames.push(r)
                : n.ignoredFilenames.push(r);
    },
    D = async (e, a, t) => {
        let n = e.createReader();
        for (let r of await new Promise((e) => n.readEntries(e)))
            if (r.isFile) {
                let n = r,
                    l = await new Promise((e) => n.file(e));
                N(e.name, l, a, t);
            } else {
                let e = await b(r);
                t.ignoredFilenames.push(...e.map((e) => I(r.name, e.name)));
            }
    },
    h = async (e, a) => {
        let t = e.createReader();
        for (let n of await new Promise((e) => t.readEntries(e)))
            n.isDirectory
                ? await D(n, "profile_effects", a)
                : n.isFile && n.name !== g && a.ignoredFilenames.push(I(e.name, n.name));
    },
    U = async (e, a) => {
        let t = e.createReader();
        for (let e of await new Promise((e) => t.readEntries(e)))
            if (e.isDirectory) {
                let t = e;
                if ("collection" === t.name) await D(t, "collection", a);
                else if ("avatar_decorations" === t.name) await D(t, "avatar_decorations", a);
                else if ("profile_effects" === t.name) await h(t, a);
                else {
                    let e = await b(t);
                    a.ignoredFilenames.push(...e.map((e) => I(t.name, e.name)));
                }
            }
    },
    S = async (e) => {
        let a = { collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {}, ignoredFilenames: [] };
        for (let t of e)
            if (t.isDirectory) {
                let e = t.name;
                "collection" === e || "avatar_decorations" === e
                    ? await D(t, e, a)
                    : "profile_effects" === e
                      ? await h(t, a)
                      : await U(t, a);
            } else if (t.isFile) {
                let e = t;
                N("", await new Promise((a) => e.file(a)), null, a);
            }
        return (
            a.collectionFiles.sort((e, a) => e.name.localeCompare(a.name)),
            a.avatarDecorationFiles.sort((e, a) => e.name.localeCompare(a.name)),
            a.ignoredFilenames.sort((e, a) => e.localeCompare(a)),
            a
        );
    },
    P = () => {
        let [e, a] = i.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                ignoredFilenames: [],
            })),
            { upsertCollectionAsset: t, upsertAvatarDecorationAsset: n } = (0, A.JE)(),
            r = i.useCallback(
                async (e) => {
                    let r = await S(e);
                    a(r),
                        (0 !== r.collectionFiles.length || 0 !== r.avatarDecorationFiles.length) &&
                            (r.collectionFiles.forEach((e) => {
                                O(e, (e) => {
                                    let a = T(e);
                                    null != a && t(a, e);
                                });
                            }),
                            r.avatarDecorationFiles.forEach((e) => {
                                O(e, (e) => {
                                    n(e);
                                });
                            }));
                },
                [t, n],
            ),
            l = i.useCallback(() => {
                a((e) => ({ ...e, collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {} }));
            }, []),
            o = i.useCallback(() => {
                a((e) => ({ ...e, ignoredFilenames: [] }));
            }, []);
        return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: l,
            clearIgnoredFilenames: o,
            processAndUpsertAssets: r,
        };
    };
