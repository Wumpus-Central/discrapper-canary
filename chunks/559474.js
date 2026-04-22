n.d(t, {
    GF: () => b,
    Jn: () => v,
    KE: () => h,
    Kx: () => m,
    Li: () => _,
    Ni: () => E,
    RN: () => p,
    aL: () => A,
    ds: () => k,
    eg: () => S,
    pd: () => T,
}),
    n(321073);
var a,
    r,
    l,
    i = n(64700),
    o = n(691540),
    s = n(857250),
    c = n(97483),
    u = n(77350),
    d = n(940622),
    p =
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
let A = {
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
    g = new Map(Object.values(p).flatMap((e) => A[e].map((t) => [`${e}.${t}`, e]))),
    _ = new Set(g.keys());
var v = (((r = {}).PROFILE_EFFECT = "profile_effect"), (r.AVATAR_DECORATION = "avatar_decoration"), r);
let f = ".DS_Store";
var m =
    (((l = {}).COLLECTION = "collection"),
    (l.AVATAR_DECORATIONS = "avatar_decorations"),
    (l.PROFILE_EFFECTS = "profile_effects"),
    l);
let E = (e) => {
        (0, o.P0)((0, s.o)(e, c.Ck.FAILURE));
    },
    b = (e) => {
        (0, o.P0)((0, s.o)(e, c.Ck.SUCCESS));
    },
    R = (e, t) => {
        let n = new FileReader();
        (n.onload = (n) => {
            null == n.target || "string" != typeof n.target.result
                ? E("Error uploading file. Try again!")
                : t(e, n.target.result);
        }),
            n.readAsDataURL(e);
    },
    h = (e, t, n) => {
        if (0 === e.length) return void n?.("No files found!");
        for (let n of e) R(n, t);
    },
    O = (e, t) => `${e}/${t}`,
    D = (e) => (0, u.tT)(e.type) || (0, u.XB)(e.type) || (0, u.XA)(e.name),
    T = (e) => g.get(e.name) ?? null,
    I = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = await new Promise((t) => e.file(t));
            n.name !== f && t.push(n);
        } else if (e.isDirectory) {
            let n = e.createReader(),
                a = await new Promise((e) => n.readEntries(e)),
                r = await Promise.all(a.map((e) => I(e)));
            t.push(...r.flat());
        }
        return t;
    },
    N = (e, t, n, a) => {
        if (t.name === f) return;
        let r = O(e, t.name);
        if ("profile_effects" === n)
            D(t) || t.name.endsWith(".txt")
                ? (e in a.profileEffectFilesMap || (a.profileEffectFilesMap[e] = []),
                  a.profileEffectFilesMap[e].push(t))
                : a.ignoredFilenames.push(O(e, t.name));
        else
            D(t)
                ? "collection" === n || null === n
                    ? null != T(t)
                        ? a.collectionFiles.push(t)
                        : a.ignoredFilenames.push(r)
                    : "avatar_decorations" === n
                      ? a.avatarDecorationFiles.push(t)
                      : a.ignoredFilenames.push(r)
                : a.ignoredFilenames.push(r);
    },
    C = async (e, t, n) => {
        let a = e.createReader();
        for (let r of await new Promise((e) => a.readEntries(e)))
            if (r.isFile) {
                let a = r,
                    l = await new Promise((e) => a.file(e));
                N(e.name, l, t, n);
            } else {
                let e = await I(r);
                n.ignoredFilenames.push(...e.map((e) => O(r.name, e.name)));
            }
    },
    L = async (e, t) => {
        let n = e.createReader();
        for (let a of await new Promise((e) => n.readEntries(e)))
            a.isDirectory
                ? await C(a, "profile_effects", t)
                : a.isFile && a.name !== f && t.ignoredFilenames.push(O(e.name, a.name));
    },
    w = async (e, t) => {
        let n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e)))
            if (e.isDirectory) {
                let n = e;
                if ("collection" === n.name) await C(n, "collection", t);
                else if ("avatar_decorations" === n.name) await C(n, "avatar_decorations", t);
                else if ("profile_effects" === n.name) await L(n, t);
                else {
                    let e = await I(n);
                    t.ignoredFilenames.push(...e.map((e) => O(n.name, e.name)));
                }
            }
    },
    S = async (e) => {
        let t = { collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {}, ignoredFilenames: [] };
        for (let n of e)
            if (n.isDirectory) {
                let e = n.name;
                "collection" === e || "avatar_decorations" === e
                    ? await C(n, e, t)
                    : "profile_effects" === e
                      ? await L(n, t)
                      : await w(n, t);
            } else if (n.isFile) {
                let e = n;
                N("", await new Promise((t) => e.file(t)), null, t);
            }
        return (
            t.collectionFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.avatarDecorationFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
            t
        );
    },
    k = () => {
        let [e, t] = i.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                ignoredFilenames: [],
            })),
            { upsertCollectionAsset: n, upsertAvatarDecorationAsset: a } = (0, d.JE)(),
            r = i.useCallback(
                async (e) => {
                    let r = await S(e);
                    t(r),
                        (0 !== r.collectionFiles.length || 0 !== r.avatarDecorationFiles.length) &&
                            (r.collectionFiles.forEach((e) => {
                                R(e, (e) => {
                                    let t = T(e);
                                    null != t && n(t, e);
                                });
                            }),
                            r.avatarDecorationFiles.forEach((e) => {
                                R(e, (e) => {
                                    a(e);
                                });
                            }));
                },
                [n, a],
            ),
            l = i.useCallback(() => {
                t((e) => ({ ...e, collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {} }));
            }, []),
            o = i.useCallback(() => {
                t((e) => ({ ...e, ignoredFilenames: [] }));
            }, []);
        return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: l,
            clearIgnoredFilenames: o,
            processAndUpsertAssets: r,
        };
    };
