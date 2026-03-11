"use strict";
n.d(t, {
    GF: () => h,
    Jn: () => d,
    KE: () => E,
    Kx: () => f,
    Li: () => c,
    Ni: () => p,
    RN: () => o,
    aL: () => l,
    ds: () => O,
    eg: () => R,
    pd: () => I,
}),
    n(321073);
var r = n(64700),
    i = n(397927),
    s = n(77350),
    a = n(940622),
    o = (function (e) {
        return (
            (e.CATALOG_BANNER_STATIC = "catalog_banner"),
            (e.CATALOG_BANNER_ANIMATED = "catalog_banner_animated"),
            (e.CATALOG_BANNER_RIVE = "catalog_banner_rive"),
            (e.HERO_BANNER_STATIC = "hero_banner"),
            (e.HERO_BANNER_ANIMATED = "hero_banner_animated"),
            (e.HERO_BANNER_RIVE = "hero_rive"),
            (e.HERO_LOGO = "hero_logo"),
            (e.FEATURED_BLOCK = "featured_block"),
            (e.UPSELL_BANNER = "upsell_banner"),
            (e.UPSELL_BANNER_POPOUT = "upsell_banner_popout"),
            (e.PDP_BACKGROUND = "pdp_bg"),
            (e.SHOP_BUTTON_BG_HOVER = "shop_button_bg_hover"),
            (e.SHOP_BUTTON_BG_HOVER_DARK = "shop_button_bg_hover_dark"),
            (e.SHOP_BUTTON_BG_HOVER_LIGHT = "shop_button_bg_hover_light"),
            (e.SHOP_BUTTON_BG_RESTING = "shop_button_bg_resting"),
            (e.SHOP_BUTTON_BG_RESTING_DARK = "shop_button_bg_resting_dark"),
            (e.SHOP_BUTTON_BG_RESTING_LIGHT = "shop_button_bg_resting_light"),
            (e.COACHTIP_AVATAR = "coachtip_avatar"),
            (e.TAB_TOOLTIP = "tab_tooltip"),
            (e.LOGO = "logo"),
            (e.MOBILE_BANNER = "mobile_banner"),
            (e.MOBILE_BACKGROUND = "mobile_bg"),
            (e.MOBILE_HERO = "mobile_hero"),
            e
        );
    })({});
let l = {
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
        coachtip_avatar: ["png"],
        tab_tooltip: ["jpg", "png"],
        logo: ["png"],
        mobile_banner: ["jpg"],
        mobile_bg: ["jpg"],
        mobile_hero: ["jpg"],
    },
    u = new Map(Object.values(o).flatMap((e) => l[e].map((t) => [`${e}.${t}`, e]))),
    c = new Set(u.keys());
var d = (function (e) {
    return (e.PROFILE_EFFECT = "profile_effect"), (e.AVATAR_DECORATION = "avatar_decoration"), e;
})({});
let _ = ".DS_Store";
var f = (function (e) {
    return (
        (e.COLLECTION = "collection"),
        (e.AVATAR_DECORATIONS = "avatar_decorations"),
        (e.PROFILE_EFFECTS = "profile_effects"),
        e
    );
})({});
let p = (e) => {
        (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE));
    },
    h = (e) => {
        (0, i.showToast)((0, i.createToast)(e, i.ToastType.SUCCESS));
    },
    m = (e, t) => {
        let n = new FileReader();
        (n.onload = (n) => {
            null == n.target || "string" != typeof n.target.result
                ? p("Error uploading file. Try again!")
                : t(e, n.target.result);
        }),
            n.readAsDataURL(e);
    },
    E = (e, t, n) => {
        if (0 === e.length) return void n?.("No files found!");
        for (let n of e) m(n, t);
    },
    g = (e, t) => `${e}/${t}`,
    A = (e) => (0, s.tT)(e.type) || (0, s.XB)(e.type) || (0, s.XA)(e.name),
    I = (e) => u.get(e.name) ?? null,
    T = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = e,
                r = await new Promise((e) => n.file(e));
            r.name !== _ && t.push(r);
        } else if (e.isDirectory) {
            let n = e.createReader(),
                r = await new Promise((e) => n.readEntries(e)),
                i = await Promise.all(r.map((e) => T(e)));
            t.push(...i.flat());
        }
        return t;
    },
    S = (e, t, n) => {
        A(t) || t.name.endsWith(".txt")
            ? (e in n.profileEffectFilesMap || (n.profileEffectFilesMap[e] = []), n.profileEffectFilesMap[e].push(t))
            : n.ignoredFilenames.push(g(e, t.name));
    },
    y = (e, t, n, r) => {
        if (t.name === _) return;
        let i = g(e, t.name);
        "profile_effects" === n
            ? S(e, t, r)
            : A(t)
              ? "collection" === n || null === n
                  ? null != I(t)
                      ? r.collectionFiles.push(t)
                      : r.ignoredFilenames.push(i)
                  : "avatar_decorations" === n
                    ? r.avatarDecorationFiles.push(t)
                    : r.ignoredFilenames.push(i)
              : r.ignoredFilenames.push(i);
    },
    v = async (e, t, n) => {
        let r = e.createReader();
        for (let i of await new Promise((e) => r.readEntries(e)))
            if (i.isFile) {
                let r = i,
                    s = await new Promise((e) => r.file(e));
                y(e.name, s, t, n);
            } else {
                let e = await T(i);
                n.ignoredFilenames.push(...e.map((e) => g(i.name, e.name)));
            }
    },
    N = async (e, t) => {
        let n = e.createReader();
        for (let r of await new Promise((e) => n.readEntries(e)))
            if (r.isDirectory) {
                let e = r;
                await v(e, "profile_effects", t);
            } else r.isFile && r.name !== _ && t.ignoredFilenames.push(g(e.name, r.name));
    },
    C = async (e, t) => {
        let n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e)))
            if (e.isDirectory) {
                let n = e;
                if ("collection" === n.name) await v(n, "collection", t);
                else if ("avatar_decorations" === n.name) await v(n, "avatar_decorations", t);
                else if ("profile_effects" === n.name) await N(n, t);
                else {
                    let e = await T(n);
                    t.ignoredFilenames.push(...e.map((e) => g(n.name, e.name)));
                }
            }
    },
    R = async (e) => {
        let t = { collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {}, ignoredFilenames: [] };
        for (let n of e)
            if (n.isDirectory) {
                let e = n,
                    r = e.name;
                "collection" === r || "avatar_decorations" === r
                    ? await v(e, r, t)
                    : "profile_effects" === r
                      ? await N(e, t)
                      : await C(e, t);
            } else if (n.isFile) {
                let e = n;
                y("", await new Promise((t) => e.file(t)), null, t);
            }
        return (
            t.collectionFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.avatarDecorationFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
            t
        );
    },
    O = () => {
        let [e, t] = r.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                ignoredFilenames: [],
            })),
            { upsertCollectionAsset: n, upsertAvatarDecorationAsset: i } = (0, a.JE)(),
            s = r.useCallback(
                async (e) => {
                    let r = await R(e);
                    t(r),
                        (0 !== r.collectionFiles.length || 0 !== r.avatarDecorationFiles.length) &&
                            (r.collectionFiles.forEach((e) => {
                                m(e, (e) => {
                                    let t = I(e);
                                    null != t && n(t, e);
                                });
                            }),
                            r.avatarDecorationFiles.forEach((e) => {
                                m(e, (e) => {
                                    i(e);
                                });
                            }));
                },
                [n, i],
            ),
            o = r.useCallback(() => {
                t((e) => ({ ...e, collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {} }));
            }, []),
            l = r.useCallback(() => {
                t((e) => ({ ...e, ignoredFilenames: [] }));
            }, []);
        return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: o,
            clearIgnoredFilenames: l,
            processAndUpsertAssets: s,
        };
    };
