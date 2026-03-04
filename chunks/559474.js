"use strict";
n.d(t, {
    GF: () => f,
    Jn: () => u,
    KE: () => h,
    Kx: () => d,
    Li: () => l,
    Ni: () => _,
    RN: () => o,
    ds: () => C,
    eg: () => N,
    pd: () => g,
}),
    n(321073);
var r = n(64700),
    i = n(397927),
    s = n(77350),
    a = n(940622),
    o = (function (e) {
        return (
            (e.CATALOG_BANNER_STATIC = "catalog_banner.jpg"),
            (e.CATALOG_BANNER_ANIMATED = "catalog_banner_animated.webm"),
            (e.CATALOG_BANNER_RIVE = "catalog_banner_rive.riv"),
            (e.HERO_BANNER_STATIC = "hero_banner.jpg"),
            (e.HERO_BANNER_ANIMATED = "hero_banner_animated.webm"),
            (e.HERO_BANNER_RIVE = "hero_rive.riv"),
            (e.HERO_LOGO = "hero_logo.png"),
            (e.FEATURED_BLOCK = "featured_block.png"),
            (e.UPSELL_BANNER = "upsell_banner.jpg"),
            (e.UPSELL_BANNER_POPOUT = "upsell_banner_popout.png"),
            (e.PDP_BACKGROUND = "pdp_bg.jpg"),
            (e.SHOP_BUTTON_BG_HOVER = "shop_button_bg_hover.png"),
            (e.SHOP_BUTTON_BG_HOVER_DARK = "shop_button_bg_hover_dark.png"),
            (e.SHOP_BUTTON_BG_HOVER_LIGHT = "shop_button_bg_hover_light.png"),
            (e.SHOP_BUTTON_BG_RESTING = "shop_button_bg_resting.png"),
            (e.SHOP_BUTTON_BG_RESTING_DARK = "shop_button_bg_resting_dark.png"),
            (e.SHOP_BUTTON_BG_RESTING_LIGHT = "shop_button_bg_resting_light.png"),
            (e.COACHTIP_AVATAR = "coachtip_avatar.png"),
            (e.TAB_TOOLTIP = "tab_tooltip.png"),
            (e.LOGO = "logo.png"),
            (e.MOBILE_BANNER = "mobile_banner.jpg"),
            (e.MOBILE_BACKGROUND = "mobile_bg.jpg"),
            (e.MOBILE_HERO = "mobile_hero.jpg"),
            e
        );
    })({});
let l = new Set(Object.values(o));
var u = (function (e) {
    return (e.PROFILE_EFFECT = "profile_effect"), (e.AVATAR_DECORATION = "avatar_decoration"), e;
})({});
let c = ".DS_Store";
var d = (function (e) {
    return (
        (e.COLLECTION = "collection"),
        (e.AVATAR_DECORATIONS = "avatar_decorations"),
        (e.PROFILE_EFFECTS = "profile_effects"),
        e
    );
})({});
let _ = (e) => {
        (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE));
    },
    f = (e) => {
        (0, i.showToast)((0, i.createToast)(e, i.ToastType.SUCCESS));
    },
    p = (e, t) => {
        let n = new FileReader();
        (n.onload = (n) => {
            null == n.target || "string" != typeof n.target.result
                ? _("Error uploading file. Try again!")
                : t(e, n.target.result);
        }),
            n.readAsDataURL(e);
    },
    h = (e, t, n) => {
        if (0 === e.length) return void n?.("No files found!");
        for (let n of e) p(n, t);
    },
    m = (e, t) => `${e}/${t}`,
    E = (e) => (0, s.tT)(e.type) || (0, s.XB)(e.type) || (0, s.XA)(e.name),
    g = (e) => (l.has(e.name) ? e.name : null),
    A = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = e,
                r = await new Promise((e) => n.file(e));
            r.name !== c && t.push(r);
        } else if (e.isDirectory) {
            let n = e.createReader(),
                r = await new Promise((e) => n.readEntries(e)),
                i = await Promise.all(r.map((e) => A(e)));
            t.push(...i.flat());
        }
        return t;
    },
    I = (e, t, n) => {
        E(t) || t.name.endsWith(".txt")
            ? (e in n.profileEffectFilesMap || (n.profileEffectFilesMap[e] = []), n.profileEffectFilesMap[e].push(t))
            : n.ignoredFilenames.push(m(e, t.name));
    },
    T = (e, t, n, r) => {
        if (t.name === c) return;
        let i = m(e, t.name);
        "profile_effects" === n
            ? I(e, t, r)
            : E(t)
              ? "collection" === n || null === n
                  ? l.has(t.name)
                      ? r.collectionFiles.push(t)
                      : r.ignoredFilenames.push(i)
                  : "avatar_decorations" === n
                    ? r.avatarDecorationFiles.push(t)
                    : r.ignoredFilenames.push(i)
              : r.ignoredFilenames.push(i);
    },
    S = async (e, t, n) => {
        let r = e.createReader();
        for (let i of await new Promise((e) => r.readEntries(e)))
            if (i.isFile) {
                let r = i,
                    s = await new Promise((e) => r.file(e));
                T(e.name, s, t, n);
            } else {
                let e = await A(i);
                n.ignoredFilenames.push(...e.map((e) => m(i.name, e.name)));
            }
    },
    y = async (e, t) => {
        let n = e.createReader();
        for (let r of await new Promise((e) => n.readEntries(e)))
            if (r.isDirectory) {
                let e = r;
                await S(e, "profile_effects", t);
            } else r.isFile && r.name !== c && t.ignoredFilenames.push(m(e.name, r.name));
    },
    v = async (e, t) => {
        let n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e)))
            if (e.isDirectory) {
                let n = e;
                if ("collection" === n.name) await S(n, "collection", t);
                else if ("avatar_decorations" === n.name) await S(n, "avatar_decorations", t);
                else if ("profile_effects" === n.name) await y(n, t);
                else {
                    let e = await A(n);
                    t.ignoredFilenames.push(...e.map((e) => m(n.name, e.name)));
                }
            }
    },
    N = async (e) => {
        let t = { collectionFiles: [], avatarDecorationFiles: [], profileEffectFilesMap: {}, ignoredFilenames: [] };
        for (let n of e)
            if (n.isDirectory) {
                let e = n,
                    r = e.name;
                "collection" === r || "avatar_decorations" === r
                    ? await S(e, r, t)
                    : "profile_effects" === r
                      ? await y(e, t)
                      : await v(e, t);
            } else if (n.isFile) {
                let e = n;
                T("", await new Promise((t) => e.file(t)), null, t);
            }
        return (
            t.collectionFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.avatarDecorationFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
            t
        );
    },
    C = () => {
        let [e, t] = r.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                ignoredFilenames: [],
            })),
            { upsertCollectionAsset: n, upsertAvatarDecorationAsset: i } = (0, a.JE)(),
            s = r.useCallback(
                async (e) => {
                    let r = await N(e);
                    t(r),
                        (0 !== r.collectionFiles.length || 0 !== r.avatarDecorationFiles.length) &&
                            (r.collectionFiles.forEach((e) => {
                                p(e, (e) => {
                                    let t = g(e);
                                    null != t && n(t, e);
                                });
                            }),
                            r.avatarDecorationFiles.forEach((e) => {
                                p(e, (e) => {
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
