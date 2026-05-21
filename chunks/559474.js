a.d(t, {
    GF: () => b,
    Jn: () => g,
    KE: () => O,
    Kx: () => m,
    Li: () => v,
    Ni: () => E,
    RN: () => d,
    aL: () => _,
    ds: () => y,
    eg: () => I,
    pd: () => D,
}),
    a(321073);
var r,
    n,
    l,
    o = a(64700),
    i = a(691540),
    s = a(857250),
    c = a(97483),
    u = a(59318),
    p = a(940622),
    d =
        (((r = {}).CATALOG_BANNER_STATIC = "catalog_banner"),
        (r.CATALOG_BANNER_ANIMATED = "catalog_banner_animated"),
        (r.CATALOG_BANNER_RIVE = "catalog_banner_rive"),
        (r.HERO_BANNER_STATIC = "hero_banner"),
        (r.HERO_BANNER_ANIMATED = "hero_banner_animated"),
        (r.HERO_BANNER_RIVE = "hero_rive"),
        (r.HERO_LOGO = "hero_logo"),
        (r.FEATURED_BLOCK = "featured_block"),
        (r.UPSELL_BANNER = "upsell_banner"),
        (r.UPSELL_BANNER_POPOUT = "upsell_banner_popout"),
        (r.PDP_BACKGROUND = "pdp_bg"),
        (r.SHOP_BUTTON_BG_HOVER = "shop_button_bg_hover"),
        (r.SHOP_BUTTON_BG_HOVER_DARK = "shop_button_bg_hover_dark"),
        (r.SHOP_BUTTON_BG_HOVER_LIGHT = "shop_button_bg_hover_light"),
        (r.SHOP_BUTTON_BG_RESTING = "shop_button_bg_resting"),
        (r.SHOP_BUTTON_BG_RESTING_DARK = "shop_button_bg_resting_dark"),
        (r.SHOP_BUTTON_BG_RESTING_LIGHT = "shop_button_bg_resting_light"),
        (r.TAB_TOOLTIP = "tab_tooltip"),
        (r.LOGO = "logo"),
        (r.MOBILE_BANNER = "mobile_banner"),
        (r.MOBILE_BACKGROUND = "mobile_bg"),
        (r.MOBILE_HERO = "mobile_hero"),
        r);
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
    A = new Map(Object.values(d).flatMap((e) => _[e].map((t) => [`${e}.${t}`, e]))),
    v = new Set(A.keys());
var g = (((n = {}).PROFILE_EFFECT = "profile_effect"), (n.AVATAR_DECORATION = "avatar_decoration"), n);
let f = ".DS_Store";
var m =
    (((l = {}).COLLECTION = "collection"),
    (l.AVATAR_DECORATIONS = "avatar_decorations"),
    (l.PROFILE_EFFECTS = "profile_effects"),
    l);
let E = (e) => {
        (0, i.P0)((0, s.o)(e, c.Ck.FAILURE));
    },
    b = (e) => {
        (0, i.P0)((0, s.o)(e, c.Ck.SUCCESS));
    },
    R = (e, t) => {
        let a = new FileReader();
        (a.onload = (a) => {
            null == a.target || "string" != typeof a.target.result
                ? E("Error uploading file. Try again!")
                : t(e, a.target.result);
        }),
            a.readAsDataURL(e);
    },
    O = (e, t, a) => {
        if (0 === e.length) return void a?.("No files found!");
        for (let a of e) R(a, t);
    },
    h = (e, t) => `${e}/${t}`,
    T = (e) => (0, u.tT)(e.type) || (0, u.XB)(e.type) || (0, u.XA)(e.name),
    D = (e) => A.get(e.name) ?? null,
    w = async (e) => {
        let t = [];
        if (e.isFile) {
            let a = await new Promise((t) => e.file(t));
            a.name !== f && t.push(a);
        } else if (e.isDirectory) {
            let a = e.createReader(),
                r = await new Promise((e) => a.readEntries(e)),
                n = await Promise.all(r.map((e) => w(e)));
            t.push(...n.flat());
        }
        return t;
    },
    L = (e, t, a, r) => {
        if (t.name === f) return;
        let n = h(e, t.name);
        if ("profile_effects" === a)
            T(t) || t.name.endsWith(".txt")
                ? (e in r.profileEffectFilesMap || (r.profileEffectFilesMap[e] = []),
                  r.profileEffectFilesMap[e].push(t))
                : r.ignoredFilenames.push(h(e, t.name));
        else
            T(t)
                ? "collection" === a || null === a
                    ? null != D(t)
                        ? r.collectionFiles.push(t)
                        : r.ignoredFilenames.push(n)
                    : "avatar_decorations" === a
                      ? r.avatarDecorationFiles.push(t)
                      : r.ignoredFilenames.push(n)
                : r.ignoredFilenames.push(n);
    },
    F = async (e, t, a) => {
        let r = e.createReader();
        for (let n of await new Promise((e) => r.readEntries(e)))
            if (n.isFile) {
                let r = n,
                    l = await new Promise((e) => r.file(e));
                L(e.name, l, t, a);
            } else {
                let e = await w(n);
                a.ignoredFilenames.push(...e.map((e) => h(n.name, e.name)));
            }
    },
    N = async (e, t) => {
        let a = e.createReader();
        for (let r of await new Promise((e) => a.readEntries(e)))
            r.isDirectory
                ? await F(r, "profile_effects", t)
                : r.isFile && r.name !== f && t.ignoredFilenames.push(h(e.name, r.name));
    },
    U = async (e, t) => {
        let a = e.createReader();
        for (let e of await new Promise((e) => a.readEntries(e)))
            if (e.isDirectory) {
                let a = e;
                if ("collection" === a.name) await F(a, "collection", t);
                else if ("avatar_decorations" === a.name) await F(a, "avatar_decorations", t);
                else if ("profile_effects" === a.name) await N(a, t);
                else {
                    let e = await w(a);
                    t.ignoredFilenames.push(...e.map((e) => h(a.name, e.name)));
                }
            }
    },
    I = async (e) => {
        let t = { collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {}, ignoredFilenames: [] };
        for (let a of e)
            if (a.isDirectory) {
                let e = a.name;
                "collection" === e || "avatar_decorations" === e
                    ? await F(a, e, t)
                    : "profile_effects" === e
                      ? await N(a, t)
                      : await U(a, t);
            } else if (a.isFile) {
                let e = a;
                L("", await new Promise((t) => e.file(t)), null, t);
            }
        return (
            t.collectionFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.avatarDecorationFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
            t
        );
    },
    y = () => {
        let [e, t] = o.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                ignoredFilenames: [],
            })),
            { upsertCollectionAsset: a, upsertAvatarDecorationAsset: r } = (0, p.JE)(),
            n = o.useCallback(
                async (e) => {
                    let n = await I(e);
                    t(n),
                        (0 !== n.collectionFiles.length || 0 !== n.avatarDecorationFiles.length) &&
                            (n.collectionFiles.forEach((e) => {
                                R(e, (e) => {
                                    let t = D(e);
                                    null != t && a(t, e);
                                });
                            }),
                            n.avatarDecorationFiles.forEach((e) => {
                                R(e, (e) => {
                                    r(e);
                                });
                            }));
                },
                [a, r],
            ),
            l = o.useCallback(() => {
                t((e) => ({ ...e, collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {} }));
            }, []),
            i = o.useCallback(() => {
                t((e) => ({ ...e, ignoredFilenames: [] }));
            }, []);
        return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: l,
            clearIgnoredFilenames: i,
            processAndUpsertAssets: n,
        };
    };
