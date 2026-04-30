"use strict";
n.d(t, {
    GF: () => I,
    Jn: () => E,
    KE: () => S,
    Kx: () => g,
    Li: () => p,
    Ni: () => A,
    RN: () => _,
    aL: () => f,
    ds: () => w,
    eg: () => L,
    pd: () => C,
}),
    n(321073);
var i,
    r,
    s,
    a = n(64700),
    o = n(691540),
    l = n(857250),
    u = n(97483),
    c = n(59318),
    d = n(940622),
    _ =
        (((i = {}).CATALOG_BANNER_STATIC = "catalog_banner"),
        (i.CATALOG_BANNER_ANIMATED = "catalog_banner_animated"),
        (i.CATALOG_BANNER_RIVE = "catalog_banner_rive"),
        (i.HERO_BANNER_STATIC = "hero_banner"),
        (i.HERO_BANNER_ANIMATED = "hero_banner_animated"),
        (i.HERO_BANNER_RIVE = "hero_rive"),
        (i.HERO_LOGO = "hero_logo"),
        (i.FEATURED_BLOCK = "featured_block"),
        (i.UPSELL_BANNER = "upsell_banner"),
        (i.UPSELL_BANNER_POPOUT = "upsell_banner_popout"),
        (i.PDP_BACKGROUND = "pdp_bg"),
        (i.SHOP_BUTTON_BG_HOVER = "shop_button_bg_hover"),
        (i.SHOP_BUTTON_BG_HOVER_DARK = "shop_button_bg_hover_dark"),
        (i.SHOP_BUTTON_BG_HOVER_LIGHT = "shop_button_bg_hover_light"),
        (i.SHOP_BUTTON_BG_RESTING = "shop_button_bg_resting"),
        (i.SHOP_BUTTON_BG_RESTING_DARK = "shop_button_bg_resting_dark"),
        (i.SHOP_BUTTON_BG_RESTING_LIGHT = "shop_button_bg_resting_light"),
        (i.TAB_TOOLTIP = "tab_tooltip"),
        (i.LOGO = "logo"),
        (i.MOBILE_BANNER = "mobile_banner"),
        (i.MOBILE_BACKGROUND = "mobile_bg"),
        (i.MOBILE_HERO = "mobile_hero"),
        i);
let f = {
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
    h = new Map(Object.values(_).flatMap((e) => f[e].map((t) => [`${e}.${t}`, e]))),
    p = new Set(h.keys());
var E = (((r = {}).PROFILE_EFFECT = "profile_effect"), (r.AVATAR_DECORATION = "avatar_decoration"), r);
let m = ".DS_Store";
var g =
    (((s = {}).COLLECTION = "collection"),
    (s.AVATAR_DECORATIONS = "avatar_decorations"),
    (s.PROFILE_EFFECTS = "profile_effects"),
    s);
let A = (e) => {
        (0, o.P0)((0, l.o)(e, u.Ck.FAILURE));
    },
    I = (e) => {
        (0, o.P0)((0, l.o)(e, u.Ck.SUCCESS));
    },
    T = (e, t) => {
        let n = new FileReader();
        (n.onload = (n) => {
            null == n.target || "string" != typeof n.target.result
                ? A("Error uploading file. Try again!")
                : t(e, n.target.result);
        }),
            n.readAsDataURL(e);
    },
    S = (e, t, n) => {
        if (0 === e.length) return void n?.("No files found!");
        for (let n of e) T(n, t);
    },
    N = (e, t) => `${e}/${t}`,
    y = (e) => (0, c.tT)(e.type) || (0, c.XB)(e.type) || (0, c.XA)(e.name),
    C = (e) => h.get(e.name) ?? null,
    v = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = await new Promise((t) => e.file(t));
            n.name !== m && t.push(n);
        } else if (e.isDirectory) {
            let n = e.createReader(),
                i = await new Promise((e) => n.readEntries(e)),
                r = await Promise.all(i.map((e) => v(e)));
            t.push(...r.flat());
        }
        return t;
    },
    O = (e, t, n, i) => {
        if (t.name === m) return;
        let r = N(e, t.name);
        if ("profile_effects" === n)
            y(t) || t.name.endsWith(".txt")
                ? (e in i.profileEffectFilesMap || (i.profileEffectFilesMap[e] = []),
                  i.profileEffectFilesMap[e].push(t))
                : i.ignoredFilenames.push(N(e, t.name));
        else
            y(t)
                ? "collection" === n || null === n
                    ? null != C(t)
                        ? i.collectionFiles.push(t)
                        : i.ignoredFilenames.push(r)
                    : "avatar_decorations" === n
                      ? i.avatarDecorationFiles.push(t)
                      : i.ignoredFilenames.push(r)
                : i.ignoredFilenames.push(r);
    },
    R = async (e, t, n) => {
        let i = e.createReader();
        for (let r of await new Promise((e) => i.readEntries(e)))
            if (r.isFile) {
                let i = r,
                    s = await new Promise((e) => i.file(e));
                O(e.name, s, t, n);
            } else {
                let e = await v(r);
                n.ignoredFilenames.push(...e.map((e) => N(r.name, e.name)));
            }
    },
    b = async (e, t) => {
        let n = e.createReader();
        for (let i of await new Promise((e) => n.readEntries(e)))
            i.isDirectory
                ? await R(i, "profile_effects", t)
                : i.isFile && i.name !== m && t.ignoredFilenames.push(N(e.name, i.name));
    },
    D = async (e, t) => {
        let n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e)))
            if (e.isDirectory) {
                let n = e;
                if ("collection" === n.name) await R(n, "collection", t);
                else if ("avatar_decorations" === n.name) await R(n, "avatar_decorations", t);
                else if ("profile_effects" === n.name) await b(n, t);
                else {
                    let e = await v(n);
                    t.ignoredFilenames.push(...e.map((e) => N(n.name, e.name)));
                }
            }
    },
    L = async (e) => {
        let t = { collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {}, ignoredFilenames: [] };
        for (let n of e)
            if (n.isDirectory) {
                let e = n.name;
                "collection" === e || "avatar_decorations" === e
                    ? await R(n, e, t)
                    : "profile_effects" === e
                      ? await b(n, t)
                      : await D(n, t);
            } else if (n.isFile) {
                let e = n;
                O("", await new Promise((t) => e.file(t)), null, t);
            }
        return (
            t.collectionFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.avatarDecorationFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
            t
        );
    },
    w = () => {
        let [e, t] = a.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                ignoredFilenames: [],
            })),
            { upsertCollectionAsset: n, upsertAvatarDecorationAsset: i } = (0, d.JE)(),
            r = a.useCallback(
                async (e) => {
                    let r = await L(e);
                    t(r),
                        (0 !== r.collectionFiles.length || 0 !== r.avatarDecorationFiles.length) &&
                            (r.collectionFiles.forEach((e) => {
                                T(e, (e) => {
                                    let t = C(e);
                                    null != t && n(t, e);
                                });
                            }),
                            r.avatarDecorationFiles.forEach((e) => {
                                T(e, (e) => {
                                    i(e);
                                });
                            }));
                },
                [n, i],
            ),
            s = a.useCallback(() => {
                t((e) => ({ ...e, collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {} }));
            }, []),
            o = a.useCallback(() => {
                t((e) => ({ ...e, ignoredFilenames: [] }));
            }, []);
        return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: s,
            clearIgnoredFilenames: o,
            processAndUpsertAssets: r,
        };
    };
