"use strict";
n.d(t, {
    GF: () => I,
    Jn: () => E,
    KE: () => S,
    Kx: () => g,
    Li: () => h,
    Ni: () => A,
    RN: () => _,
    aL: () => f,
    ds: () => w,
    eg: () => L,
    pd: () => v,
}),
    n(321073);
var r,
    i,
    s,
    a = n(64700),
    o = n(691540),
    l = n(857250),
    u = n(97483),
    c = n(77350),
    d = n(940622),
    _ =
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
    p = new Map(Object.values(_).flatMap((e) => f[e].map((t) => [`${e}.${t}`, e]))),
    h = new Set(p.keys());
var E = (((i = {}).PROFILE_EFFECT = "profile_effect"), (i.AVATAR_DECORATION = "avatar_decoration"), i);
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
    y = (e, t) => `${e}/${t}`,
    N = (e) => (0, c.tT)(e.type) || (0, c.XB)(e.type) || (0, c.XA)(e.name),
    v = (e) => p.get(e.name) ?? null,
    C = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = await new Promise((t) => e.file(t));
            n.name !== m && t.push(n);
        } else if (e.isDirectory) {
            let n = e.createReader(),
                r = await new Promise((e) => n.readEntries(e)),
                i = await Promise.all(r.map((e) => C(e)));
            t.push(...i.flat());
        }
        return t;
    },
    O = (e, t, n, r) => {
        if (t.name === m) return;
        let i = y(e, t.name);
        if ("profile_effects" === n)
            N(t) || t.name.endsWith(".txt")
                ? (e in r.profileEffectFilesMap || (r.profileEffectFilesMap[e] = []),
                  r.profileEffectFilesMap[e].push(t))
                : r.ignoredFilenames.push(y(e, t.name));
        else
            N(t)
                ? "collection" === n || null === n
                    ? null != v(t)
                        ? r.collectionFiles.push(t)
                        : r.ignoredFilenames.push(i)
                    : "avatar_decorations" === n
                      ? r.avatarDecorationFiles.push(t)
                      : r.ignoredFilenames.push(i)
                : r.ignoredFilenames.push(i);
    },
    R = async (e, t, n) => {
        let r = e.createReader();
        for (let i of await new Promise((e) => r.readEntries(e)))
            if (i.isFile) {
                let r = i,
                    s = await new Promise((e) => r.file(e));
                O(e.name, s, t, n);
            } else {
                let e = await C(i);
                n.ignoredFilenames.push(...e.map((e) => y(i.name, e.name)));
            }
    },
    b = async (e, t) => {
        let n = e.createReader();
        for (let r of await new Promise((e) => n.readEntries(e)))
            r.isDirectory
                ? await R(r, "profile_effects", t)
                : r.isFile && r.name !== m && t.ignoredFilenames.push(y(e.name, r.name));
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
                    let e = await C(n);
                    t.ignoredFilenames.push(...e.map((e) => y(n.name, e.name)));
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
            { upsertCollectionAsset: n, upsertAvatarDecorationAsset: r } = (0, d.JE)(),
            i = a.useCallback(
                async (e) => {
                    let i = await L(e);
                    t(i),
                        (0 !== i.collectionFiles.length || 0 !== i.avatarDecorationFiles.length) &&
                            (i.collectionFiles.forEach((e) => {
                                T(e, (e) => {
                                    let t = v(e);
                                    null != t && n(t, e);
                                });
                            }),
                            i.avatarDecorationFiles.forEach((e) => {
                                T(e, (e) => {
                                    r(e);
                                });
                            }));
                },
                [n, r],
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
            processAndUpsertAssets: i,
        };
    };
