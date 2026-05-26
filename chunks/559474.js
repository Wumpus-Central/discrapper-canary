"use strict";
n.d(t, {
    GF: () => T,
    Jn: () => m,
    KE: () => N,
    Kx: () => A,
    Li: () => E,
    Ni: () => I,
    RN: () => f,
    aL: () => h,
    ds: () => U,
    eg: () => x,
    pd: () => v,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956);
var i,
    r,
    s,
    a = n(64700),
    o = n(691540),
    l = n(857250),
    u = n(97483),
    c = n(59318),
    d = n(120301),
    _ = n(940622),
    f =
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
let h = {
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
    p = new Map(Object.values(f).flatMap((e) => h[e].map((t) => [`${e}.${t}`, e]))),
    E = new Set(p.keys());
var m =
    (((r = {}).PROFILE_EFFECT = "profile_effect"),
    (r.AVATAR_DECORATION = "avatar_decoration"),
    (r.PROFILE_FRAME = "profile_frame"),
    r);
let g = ".DS_Store";
var A =
    (((s = {}).COLLECTION = "collection"),
    (s.AVATAR_DECORATIONS = "avatar_decorations"),
    (s.FRAMES = "frames"),
    (s.NAMEPLATES = "nameplates"),
    (s.PROFILE_EFFECTS = "profile_effects"),
    s);
let I = (e) => {
        (0, o.P0)((0, l.o)(e, u.Ck.FAILURE));
    },
    T = (e) => {
        (0, o.P0)((0, l.o)(e, u.Ck.SUCCESS));
    },
    S = (e, t) => {
        let n = new FileReader();
        (n.onload = (n) => {
            null == n.target || "string" != typeof n.target.result
                ? I("Error uploading file. Try again!")
                : t(e, n.target.result);
        }),
            n.readAsDataURL(e);
    },
    N = (e, t, n) => {
        if (0 === e.length) return void n?.("No files found!");
        for (let n of e) S(n, t);
    },
    y = (e, t) => `${e}/${t}`,
    C = (e) => (0, c.tT)(e.type) || (0, c.XB)(e.type) || (0, c.XA)(e.name),
    v = (e) => p.get(e.name) ?? null,
    O = async (e) => {
        let t = e.createReader();
        return (await new Promise((e) => t.readEntries(e))).filter((e) => !(e.isDirectory && e.name.startsWith("_")));
    },
    R = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = await new Promise((t) => e.file(t));
            n.name !== g && t.push(n);
        } else if (e.isDirectory) {
            let n = await O(e),
                i = await Promise.all(n.map((e) => R(e)));
            t.push(...i.flat());
        }
        return t;
    },
    b = (e, t, n, i) => {
        if (t.name === g) return;
        let r = y(e, t.name);
        if ("profile_effects" === n)
            C(t) || t.name.endsWith(".txt")
                ? (e in i.profileEffectFilesMap || (i.profileEffectFilesMap[e] = []),
                  i.profileEffectFilesMap[e].push(t))
                : i.ignoredFilenames.push(y(e, t.name));
        else
            C(t)
                ? "collection" === n || null === n
                    ? null != v(t)
                        ? i.collectionFiles.push(t)
                        : i.ignoredFilenames.push(r)
                    : "avatar_decorations" === n
                      ? i.avatarDecorationFiles.push(t)
                      : i.ignoredFilenames.push(r)
                : i.ignoredFilenames.push(r);
    },
    D = async (e, t, n) => {
        for (let i of await O(e))
            if (i.isFile) {
                let r = i,
                    s = await new Promise((e) => r.file(e));
                b(e.name, s, t, n);
            } else {
                let e = await R(i);
                n.ignoredFilenames.push(...e.map((e) => y(i.name, e.name)));
            }
    },
    L = async (e, t) => {
        let n = e.name,
            i = await O(e),
            r = { previewFile: null, layerFiles: [], unrecognizedSubdirs: [] };
        for (let e of i) {
            if (e.isFile) {
                if (e.name === g) continue;
                let i = e,
                    s = await new Promise((e) => i.file(e));
                (0, d.Y_)(s.name) ? (r.previewFile = s) : t.ignoredFilenames.push(`frames/${n}/${s.name}`);
                continue;
            }
            if (e.isDirectory) {
                let i = e.name;
                if ("foreground" === i || "background" === i) {
                    for (let s of await O(e))
                        if (s.isFile && s.name !== g) {
                            let e = s,
                                t = await new Promise((t) => e.file(t));
                            r.layerFiles.push({ file: t, folder: i });
                        } else if (s.isDirectory) {
                            let e = await R(s);
                            t.ignoredFilenames.push(...e.map((e) => `frames/${n}/${i}/${s.name}/${e.name}`));
                        }
                } else {
                    r.unrecognizedSubdirs.push(i);
                    let s = await R(e);
                    t.ignoredFilenames.push(...s.map((e) => `frames/${n}/${i}/${e.name}`));
                }
            }
        }
        (null != r.previewFile || 0 !== r.layerFiles.length) && (t.profileFrameDirsMap[n] = r);
    },
    w = async (e, t) => {
        for (let n of await O(e))
            n.isDirectory ? await L(n, t) : n.isFile && n.name !== g && t.ignoredFilenames.push(`frames/${n.name}`);
    },
    M = async (e, t) => {
        for (let n of await O(e))
            n.isDirectory
                ? await D(n, "profile_effects", t)
                : n.isFile && n.name !== g && t.ignoredFilenames.push(y(e.name, n.name));
    },
    P = async (e, t) => {
        for (let n of await O(e))
            if (n.isDirectory) {
                let e = n;
                if ("collection" === e.name) await D(e, "collection", t);
                else if ("avatar_decorations" === e.name) await D(e, "avatar_decorations", t);
                else if ("profile_effects" === e.name) await M(e, t);
                else if ("frames" === e.name) await w(e, t);
                else {
                    let n = await R(e);
                    t.ignoredFilenames.push(...n.map((t) => y(e.name, t.name)));
                }
            }
    },
    x = async (e) => {
        let t = {
            collectionFiles: [],
            avatarDecorationFiles: [],
            profileEffectFilesMap: {},
            profileFrameDirsMap: {},
            ignoredFilenames: [],
        };
        for (let n of e)
            if (n.isDirectory) {
                let e = n.name;
                "collection" === e || "avatar_decorations" === e
                    ? await D(n, e, t)
                    : "profile_effects" === e
                      ? await M(n, t)
                      : "frames" === e
                        ? await w(n, t)
                        : await P(n, t);
            } else if (n.isFile) {
                let e = n;
                b("", await new Promise((t) => e.file(t)), null, t);
            }
        return (
            t.collectionFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.avatarDecorationFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
            t
        );
    },
    U = () => {
        let [e, t] = a.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                profileFrameDirsMap: {},
                ignoredFilenames: [],
            })),
            { upsertCollectionAsset: n, upsertAvatarDecorationAsset: i, upsertProfileFrame: r } = (0, _.JE)(),
            s = a.useCallback(
                async (e) => {
                    let s = await x(e);
                    Object.entries(s.profileFrameDirsMap).forEach((e) => {
                        let [t, n] = e,
                            i = ((e, t, n) => {
                                let i = null != t.previewFile ? URL.createObjectURL(t.previewFile) : null,
                                    r = [],
                                    s = {};
                                for (let { file: i, folder: a } of t.layerFiles) {
                                    let { parsed: t, errorType: o } = (0, d.Mf)(i.name);
                                    if (null == t) {
                                        let t = null != o ? d.h4[o] : "invalid";
                                        n.push(`frames/${e}/${a}/${i.name}: ${t}`);
                                        continue;
                                    }
                                    let l = d.R9[a],
                                        u = `preview-${e}-${l}-${t.index}`;
                                    r.push({
                                        layer: {
                                            id: u,
                                            type: t.type,
                                            order: l,
                                            anchor: t.anchor,
                                            responsive: t.responsive,
                                        },
                                        order: l,
                                        index: t.index,
                                    }),
                                        (s[u] = URL.createObjectURL(i));
                                }
                                r.sort(d.ui);
                                let a = r.map((e) => e.layer);
                                return 0 === a.length && null == i
                                    ? null
                                    : { key: e, previewSrc: i, layers: a, layerSrcByLayerId: s };
                            })(t, n, s.ignoredFilenames);
                        null != i && r(t, i);
                    }),
                        s.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
                        t(s),
                        (0 !== s.collectionFiles.length || 0 !== s.avatarDecorationFiles.length) &&
                            (s.collectionFiles.forEach((e) => {
                                S(e, (e) => {
                                    let t = v(e);
                                    null != t && n(t, e);
                                });
                            }),
                            s.avatarDecorationFiles.forEach((e) => {
                                S(e, (e) => {
                                    i(e);
                                });
                            }));
                },
                [n, i, r],
            ),
            o = a.useCallback(() => {
                t((e) => ({
                    ...e,
                    collectionFiles: [],
                    avatarDecorationFiles: [],
                    profileEffectFilesMap: {},
                    profileFrameDirsMap: {},
                }));
            }, []),
            l = a.useCallback(() => {
                t((e) => ({ ...e, ignoredFilenames: [] }));
            }, []);
        return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: o,
            clearIgnoredFilenames: l,
            processAndUpsertAssets: s,
        };
    };
