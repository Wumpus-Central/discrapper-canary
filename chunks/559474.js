a.d(n, {
    GF: () => b,
    Jn: () => m,
    KE: () => h,
    Kx: () => E,
    Li: () => A,
    Ni: () => v,
    RN: () => p,
    aL: () => _,
    ds: () => P,
    eg: () => L,
    pd: () => T,
}),
    a(321073);
var t,
    r,
    i,
    l = a(64700),
    o = a(691540),
    s = a(857250),
    u = a(97483),
    c = a(77350),
    d = a(940622),
    p =
        (((t = {}).CATALOG_BANNER_STATIC = "catalog_banner"),
        (t.CATALOG_BANNER_ANIMATED = "catalog_banner_animated"),
        (t.CATALOG_BANNER_RIVE = "catalog_banner_rive"),
        (t.HERO_BANNER_STATIC = "hero_banner"),
        (t.HERO_BANNER_ANIMATED = "hero_banner_animated"),
        (t.HERO_BANNER_RIVE = "hero_rive"),
        (t.HERO_LOGO = "hero_logo"),
        (t.FEATURED_BLOCK = "featured_block"),
        (t.UPSELL_BANNER = "upsell_banner"),
        (t.UPSELL_BANNER_POPOUT = "upsell_banner_popout"),
        (t.PDP_BACKGROUND = "pdp_bg"),
        (t.SHOP_BUTTON_BG_HOVER = "shop_button_bg_hover"),
        (t.SHOP_BUTTON_BG_HOVER_DARK = "shop_button_bg_hover_dark"),
        (t.SHOP_BUTTON_BG_HOVER_LIGHT = "shop_button_bg_hover_light"),
        (t.SHOP_BUTTON_BG_RESTING = "shop_button_bg_resting"),
        (t.SHOP_BUTTON_BG_RESTING_DARK = "shop_button_bg_resting_dark"),
        (t.SHOP_BUTTON_BG_RESTING_LIGHT = "shop_button_bg_resting_light"),
        (t.TAB_TOOLTIP = "tab_tooltip"),
        (t.LOGO = "logo"),
        (t.MOBILE_BANNER = "mobile_banner"),
        (t.MOBILE_BACKGROUND = "mobile_bg"),
        (t.MOBILE_HERO = "mobile_hero"),
        t);
let _ = {
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
    g = new Map(Object.values(p).flatMap((e) => _[e].map((n) => [`${e}.${n}`, e]))),
    A = new Set(g.keys());
var m = (((r = {}).PROFILE_EFFECT = "profile_effect"), (r.AVATAR_DECORATION = "avatar_decoration"), r);
let f = ".DS_Store";
var E =
    (((i = {}).COLLECTION = "collection"),
    (i.AVATAR_DECORATIONS = "avatar_decorations"),
    (i.PROFILE_EFFECTS = "profile_effects"),
    i);
let v = (e) => {
        (0, o.P0)((0, s.o)(e, u.Ck.FAILURE));
    },
    b = (e) => {
        (0, o.P0)((0, s.o)(e, u.Ck.SUCCESS));
    },
    R = (e, n) => {
        let a = new FileReader();
        (a.onload = (a) => {
            null == a.target || "string" != typeof a.target.result
                ? v("Error uploading file. Try again!")
                : n(e, a.target.result);
        }),
            a.readAsDataURL(e);
    },
    h = (e, n, a) => {
        if (0 === e.length) return void a?.("No files found!");
        for (let a of e) R(a, n);
    },
    N = (e, n) => `${e}/${n}`,
    O = (e) => (0, c.tT)(e.type) || (0, c.XB)(e.type) || (0, c.XA)(e.name),
    T = (e) => g.get(e.name) ?? null,
    I = async (e) => {
        let n = [];
        if (e.isFile) {
            let a = await new Promise((n) => e.file(n));
            a.name !== f && n.push(a);
        } else if (e.isDirectory) {
            let a = e.createReader(),
                t = await new Promise((e) => a.readEntries(e)),
                r = await Promise.all(t.map((e) => I(e)));
            n.push(...r.flat());
        }
        return n;
    },
    D = (e, n, a, t) => {
        if (n.name === f) return;
        let r = N(e, n.name);
        if ("profile_effects" === a)
            O(n) || n.name.endsWith(".txt")
                ? (e in t.profileEffectFilesMap || (t.profileEffectFilesMap[e] = []),
                  t.profileEffectFilesMap[e].push(n))
                : t.ignoredFilenames.push(N(e, n.name));
        else
            O(n)
                ? "collection" === a || null === a
                    ? null != T(n)
                        ? t.collectionFiles.push(n)
                        : t.ignoredFilenames.push(r)
                    : "avatar_decorations" === a
                      ? t.avatarDecorationFiles.push(n)
                      : t.ignoredFilenames.push(r)
                : t.ignoredFilenames.push(r);
    },
    F = async (e, n, a) => {
        let t = e.createReader();
        for (let r of await new Promise((e) => t.readEntries(e)))
            if (r.isFile) {
                let t = r,
                    i = await new Promise((e) => t.file(e));
                D(e.name, i, n, a);
            } else {
                let e = await I(r);
                a.ignoredFilenames.push(...e.map((e) => N(r.name, e.name)));
            }
    },
    S = async (e, n) => {
        let a = e.createReader();
        for (let t of await new Promise((e) => a.readEntries(e)))
            t.isDirectory
                ? await F(t, "profile_effects", n)
                : t.isFile && t.name !== f && n.ignoredFilenames.push(N(e.name, t.name));
    },
    C = async (e, n) => {
        let a = e.createReader();
        for (let e of await new Promise((e) => a.readEntries(e)))
            if (e.isDirectory) {
                let a = e;
                if ("collection" === a.name) await F(a, "collection", n);
                else if ("avatar_decorations" === a.name) await F(a, "avatar_decorations", n);
                else if ("profile_effects" === a.name) await S(a, n);
                else {
                    let e = await I(a);
                    n.ignoredFilenames.push(...e.map((e) => N(a.name, e.name)));
                }
            }
    },
    L = async (e) => {
        let n = { collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {}, ignoredFilenames: [] };
        for (let a of e)
            if (a.isDirectory) {
                let e = a.name;
                "collection" === e || "avatar_decorations" === e
                    ? await F(a, e, n)
                    : "profile_effects" === e
                      ? await S(a, n)
                      : await C(a, n);
            } else if (a.isFile) {
                let e = a;
                D("", await new Promise((n) => e.file(n)), null, n);
            }
        return (
            n.collectionFiles.sort((e, n) => e.name.localeCompare(n.name)),
            n.avatarDecorationFiles.sort((e, n) => e.name.localeCompare(n.name)),
            n.ignoredFilenames.sort((e, n) => e.localeCompare(n)),
            n
        );
    },
    P = () => {
        let [e, n] = l.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                ignoredFilenames: [],
            })),
            { upsertCollectionAsset: a, upsertAvatarDecorationAsset: t } = (0, d.JE)(),
            r = l.useCallback(
                async (e) => {
                    let r = await L(e);
                    n(r),
                        (0 !== r.collectionFiles.length || 0 !== r.avatarDecorationFiles.length) &&
                            (r.collectionFiles.forEach((e) => {
                                R(e, (e) => {
                                    let n = T(e);
                                    null != n && a(n, e);
                                });
                            }),
                            r.avatarDecorationFiles.forEach((e) => {
                                R(e, (e) => {
                                    t(e);
                                });
                            }));
                },
                [a, t],
            ),
            i = l.useCallback(() => {
                n((e) => ({ ...e, collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {} }));
            }, []),
            o = l.useCallback(() => {
                n((e) => ({ ...e, ignoredFilenames: [] }));
            }, []);
        return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: i,
            clearIgnoredFilenames: o,
            processAndUpsertAssets: r,
        };
    };
