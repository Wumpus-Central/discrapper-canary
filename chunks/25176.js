"use strict";
n.d(t, {
    Li: () => C,
    KE: () => b,
    Ni: () => D,
    aL: () => S,
    RN: () => g,
    ds: () => K,
    Kx: () => L,
    eg: () => j,
    GF: () => y,
    pd: () => U,
    Lv: () => W,
    Jn: () => R,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956);
var i,
    r,
    a,
    s,
    l = n(64700),
    o = n(691540),
    d = n(857250),
    c = n(97483),
    u = n(626584),
    _ = n(59318),
    E = n(597404),
    A =
        (((i = {})[(i.INNER_WIDTH = 1200)] = "INNER_WIDTH"),
        (i[(i.OVERFLOW_TOP = 304)] = "OVERFLOW_TOP"),
        (i[(i.OVERFLOW_BOTTOM = 212)] = "OVERFLOW_BOTTOM"),
        (i[(i.OVERFLOW_HORIZONTAL = 56)] = "OVERFLOW_HORIZONTAL"),
        i),
    h = n(102607),
    I = n(374380);
function f(e, t) {
    return e.length > 0 ? Math.max(...e) : t;
}
function p(e, t, n) {
    return Math.max(0, e - (t - n));
}
var T = n(940622);
let m = new u.A("ShopAssetsPreviewUtils");
var g =
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
let S = {
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
    N = new Map(Object.values(g).flatMap((e) => S[e].map((t) => [`${e}.${t}`, e]))),
    C = new Set(N.keys());
var R =
    (((a = {}).PROFILE_EFFECT = "profile_effect"),
    (a.AVATAR_DECORATION = "avatar_decoration"),
    (a.PROFILE_FRAME = "profile_frame"),
    a);
let O = ".DS_Store";
var L =
    (((s = {}).COLLECTION = "collection"),
    (s.AVATAR_DECORATIONS = "avatar_decorations"),
    (s.FRAMES = "frames"),
    (s.NAMEPLATES = "nameplates"),
    (s.PROFILE_EFFECTS = "profile_effects"),
    s);
function D(e) {
    (0, o.P0)((0, d.o)(e, c.Ck.FAILURE));
}
function y(e) {
    (0, o.P0)((0, d.o)(e, c.Ck.SUCCESS));
}
function v(e, t) {
    let n = new FileReader();
    (n.onload = (n) => {
        null == n.target || "string" != typeof n.target.result
            ? D("Error uploading file. Try again!")
            : t(e, n.target.result);
    }),
        n.readAsDataURL(e);
}
function b(e, t, n) {
    if (0 === e.length) return void n?.("No files found!");
    for (let n of e) v(n, t);
}
function M(e, t) {
    return `${e}/${t}`;
}
function P(e) {
    return (0, _.tT)(e.type) || (0, _.XB)(e.type) || (0, _.XA)(e.name);
}
function U(e) {
    return N.get(e.name) ?? null;
}
async function w(e) {
    let t = e.createReader();
    return (await new Promise((e) => t.readEntries(e))).filter((e) => !(e.isDirectory && e.name.startsWith("_")));
}
let G = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = await new Promise((t) => e.file(t));
            n.name !== O && t.push(n);
        } else if (e.isDirectory) {
            let n = await w(e),
                i = await Promise.all(n.map((e) => G(e)));
            t.push(...i.flat());
        }
        return t;
    },
    x = (e, t, n, i) => {
        if (t.name === O) return;
        let r = M(e, t.name);
        if ("profile_effects" === n)
            P(t) || t.name.endsWith(".txt")
                ? (e in i.profileEffectFilesMap || (i.profileEffectFilesMap[e] = []),
                  i.profileEffectFilesMap[e].push(t))
                : i.ignoredFilenames.push(M(e, t.name));
        else
            P(t)
                ? "collection" === n || null === n
                    ? null != U(t)
                        ? i.collectionFiles.push(t)
                        : i.ignoredFilenames.push(r)
                    : "avatar_decorations" === n
                      ? i.avatarDecorationFiles.push(t)
                      : i.ignoredFilenames.push(r)
                : i.ignoredFilenames.push(r);
    };
async function k(e, t, n) {
    for (let i of await w(e))
        if (i.isFile) {
            let r = i,
                a = await new Promise((e) => r.file(e));
            x(e.name, a, t, n);
        } else {
            let e = await G(i);
            n.ignoredFilenames.push(...e.map((e) => M(i.name, e.name)));
        }
}
let F = async (e, t) => {
        let n = e.name,
            i = await w(e),
            r = { previewFile: null, layerFiles: [], unrecognizedSubdirs: [] };
        for (let e of i) {
            if (e.isFile) {
                if (e.name === O) continue;
                let i = e,
                    a = await new Promise((e) => i.file(e));
                (0, E.Y_)(a.name) ? (r.previewFile = a) : t.ignoredFilenames.push(`frames/${n}/${a.name}`);
                continue;
            }
            if (e.isDirectory) {
                let i = e.name;
                if ("foreground" === i || "background" === i) {
                    for (let a of await w(e))
                        if (a.isFile && a.name !== O) {
                            let e = a,
                                t = await new Promise((t) => e.file(t));
                            r.layerFiles.push({ file: t, folder: i });
                        } else if (a.isDirectory) {
                            let e = await G(a);
                            t.ignoredFilenames.push(...e.map((e) => `frames/${n}/${i}/${a.name}/${e.name}`));
                        }
                } else {
                    r.unrecognizedSubdirs.push(i);
                    let a = await G(e);
                    t.ignoredFilenames.push(...a.map((e) => `frames/${n}/${i}/${e.name}`));
                }
            }
        }
        (null != r.previewFile || 0 !== r.layerFiles.length) && (t.profileFrameDirsMap[n] = r);
    },
    V = async (e, t) => {
        for (let n of await w(e))
            n.isDirectory ? await F(n, t) : n.isFile && n.name !== O && t.ignoredFilenames.push(`frames/${n.name}`);
    },
    B = async (e, t) => {
        for (let n of await w(e))
            n.isDirectory
                ? await k(n, "profile_effects", t)
                : n.isFile && n.name !== O && t.ignoredFilenames.push(M(e.name, n.name));
    };
async function H(e, t) {
    for (let n of await w(e))
        if (n.isDirectory) {
            let e = n;
            if ("collection" === e.name) await k(e, "collection", t);
            else if ("avatar_decorations" === e.name) await k(e, "avatar_decorations", t);
            else if ("profile_effects" === e.name) await B(e, t);
            else if ("frames" === e.name) await V(e, t);
            else {
                let n = await G(e);
                t.ignoredFilenames.push(...n.map((t) => M(e.name, t.name)));
            }
        }
}
async function j(e) {
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
                ? await k(n, e, t)
                : "profile_effects" === e
                  ? await B(n, t)
                  : "frames" === e
                    ? await V(n, t)
                    : await H(n, t);
        } else if (n.isFile) {
            let e = n;
            x("", await new Promise((t) => e.file(t)), null, t);
        }
    return (
        t.collectionFiles.sort((e, t) => e.name.localeCompare(t.name)),
        t.avatarDecorationFiles.sort((e, t) => e.name.localeCompare(t.name)),
        t.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
        t
    );
}
function W(e) {
    return new Promise((t, n) => {
        let i = new window.Image(),
            r = setTimeout(() => n(Error("Timed out measuring image")), 15e3);
        (i.onload = () => {
            clearTimeout(r), t({ width: i.naturalWidth, height: i.naturalHeight });
        }),
            (i.onerror = () => {
                clearTimeout(r), n(Error("Failed to measure image"));
            }),
            (i.src = e);
    });
}
async function Y(e, t, n) {
    var i;
    let r,
        a,
        s = null != t.previewFile ? URL.createObjectURL(t.previewFile) : null,
        l = [],
        o = {};
    for (let { file: i, folder: r } of t.layerFiles) {
        let { parsed: t, errorType: a } = (0, E.Mf)(i.name);
        if (null == t) {
            let t = null != a ? E.h4[a] : "invalid";
            n.push(`frames/${e}/${r}/${i.name}: ${t}`);
            continue;
        }
        let s = E.R9[r],
            d = `preview-${e}-${s}-${t.index}`;
        l.push({
            layer: { id: d, type: t.type, order: s, anchor: t.anchor, responsive: t.responsive },
            order: s,
            index: t.index,
        }),
            (o[d] = URL.createObjectURL(i));
    }
    l.sort(E.ui);
    let d = l.map((e) => e.layer);
    if (0 === d.length && null == s) return null;
    let c =
        ((i = (
            await Promise.all(
                l.map(async (e) => {
                    let { layer: t } = e;
                    try {
                        return { layer: t, dims: await W(o[t.id]) };
                    } catch (e) {
                        return m.error(`Failed to measure preview layer ${t.id}:`, e), null;
                    }
                }),
            )
        ).filter((e) => null != e)),
        (r = A.INNER_WIDTH),
        (a = f(
            i.map((e) => {
                let { dims: t } = e;
                return Math.round(Math.max(0, (t.width - r) / 2));
            }),
            0,
        )),
        {
            innerWidth: r,
            overflowTop: f(
                i
                    .filter((e) => {
                        let { layer: t } = e;
                        return t.type === I.O.STAPLE && t.anchor === h.T.TOP;
                    })
                    .map((e) => {
                        let { dims: t } = e;
                        return p(t.height, 716, A.OVERFLOW_TOP);
                    }),
                0,
            ),
            overflowBottom: f(
                i
                    .filter((e) => {
                        let { layer: t } = e;
                        return t.type === I.O.STAPLE && t.anchor === h.T.BOTTOM;
                    })
                    .map((e) => {
                        let { dims: t } = e;
                        return p(t.height, 424, A.OVERFLOW_BOTTOM);
                    }),
                0,
            ),
            overflowHorizontal: a,
        });
    return { key: e, previewSrc: s, layers: d, layerSrcByLayerId: o, ...c };
}
function K() {
    let [e, t] = l.useState(() => ({
            collectionFiles: [],
            avatarDecorationFiles: [],
            profileEffectFilesMap: {},
            profileFrameDirsMap: {},
            ignoredFilenames: [],
        })),
        { upsertCollectionAsset: n, upsertAvatarDecorationAsset: i, upsertProfileFrame: r } = (0, T.JE)(),
        a = l.useCallback(
            async (e) => {
                let a = await j(e);
                a.collectionFiles.forEach((e) => {
                    v(e, (e) => {
                        let t = U(e);
                        null != t && n(t, e);
                    });
                }),
                    a.avatarDecorationFiles.forEach((e) => {
                        v(e, (e) => {
                            i(e);
                        });
                    }),
                    await Promise.all(
                        Object.entries(a.profileFrameDirsMap).map(async (e) => {
                            let [t, n] = e,
                                i = await Y(t, n, a.ignoredFilenames);
                            null != i && r(t, i);
                        }),
                    ),
                    a.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
                    t(a);
            },
            [n, i, r],
        ),
        s = l.useCallback(() => {
            t((e) => ({
                ...e,
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                profileFrameDirsMap: {},
            }));
        }, []),
        o = l.useCallback(() => {
            t((e) => ({ ...e, ignoredFilenames: [] }));
        }, []);
    return {
        ignoredFilenames: e.ignoredFilenames,
        clearAssets: s,
        clearIgnoredFilenames: o,
        processAndUpsertAssets: a,
    };
}
