(i.d(a, {
    GF: () => O,
    KE: () => T,
    Kx: () => w,
    Li: () => b,
    Lv: () => I,
    Ni: () => E,
    RN: () => g,
    aL: () => d,
    ds: () => G,
    eg: () => M,
    pd: () => N,
}),
    i(321073),
    i(323874),
    i(14289),
    i(35956));
var n,
    t,
    r = i(582128);
if (588245 != i.j) var l = i(739187);
if (588245 != i.j) var o = i(857250);
if (588245 != i.j) var s = i(97483);
var _ = i(626584),
    p = i(59318),
    f = i(597404),
    c = i(561509),
    u = i(940622);
let m = new _.A("ShopAssetsPreviewUtils");
var g =
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
let d = {
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
    h = new Map(Object.values(g).flatMap((e) => d[e].map((a) => [`${e}.${a}`, e]))),
    b = new Set(h.keys()),
    F = ".DS_Store";
var w =
    588245 != i.j
        ? (((t = {}).COLLECTION = "collection"),
          (t.AVATAR_DECORATIONS = "avatar_decorations"),
          (t.FRAMES = "frames"),
          (t.NAMEPLATES = "nameplates"),
          (t.PROFILE_EFFECTS = "profile_effects"),
          t)
        : null;
function E(e) {
    (0, l.P)((0, o.o)(e, s.Ck.FAILURE));
}
function O(e) {
    (0, l.P)((0, o.o)(e, s.Ck.SUCCESS));
}
function v(e, a) {
    let i = new FileReader();
    ((i.onload = (i) => {
        null == i.target || "string" != typeof i.target.result
            ? E("Error uploading file. Try again!")
            : a(e, i.target.result);
    }),
        i.readAsDataURL(e));
}
function T(e, a, i) {
    if (0 === e.length) return void i?.("No files found!");
    for (let i of e) v(i, a);
}
function R(e, a) {
    return `${e}/${a}`;
}
function A(e) {
    return (0, p.tT)(e.type) || (0, p.XB)(e.type) || (0, p.XA)(e.name);
}
function N(e) {
    return h.get(e.name) ?? null;
}
async function y(e) {
    let a = e.createReader();
    return (await new Promise((e) => a.readEntries(e))).filter((e) => !(e.isDirectory && e.name.startsWith("_")));
}
async function D(e) {
    let a = [];
    if (e.isFile) {
        let i = await new Promise((a) => e.file(a));
        i.name !== F && a.push(i);
    } else if (e.isDirectory) {
        let i = await y(e),
            n = await Promise.all(i.map((e) => D(e)));
        a.push(...n.flat());
    }
    return a;
}
function B(e, a, i, n) {
    if (a.name === F) return;
    let t = R(e, a.name);
    if ("profile_effects" === i)
        A(a) || a.name.endsWith(".txt")
            ? (e in n.profileEffectFilesMap || (n.profileEffectFilesMap[e] = []), n.profileEffectFilesMap[e].push(a))
            : n.ignoredFilenames.push(R(e, a.name));
    else
        A(a)
            ? "collection" === i || null === i
                ? null != N(a)
                    ? n.collectionFiles.push(a)
                    : n.ignoredFilenames.push(t)
                : "avatar_decorations" === i
                  ? n.avatarDecorationFiles.push(a)
                  : n.ignoredFilenames.push(t)
            : n.ignoredFilenames.push(t);
}
async function L(e, a, i) {
    for (let n of await y(e))
        if (n.isFile) {
            let t = n,
                r = await new Promise((e) => t.file(e));
            B(e.name, r, a, i);
        } else {
            let e = await D(n);
            i.ignoredFilenames.push(...e.map((e) => R(n.name, e.name)));
        }
}
async function P(e, a) {
    let i = e.name,
        n = await y(e),
        t = { previewFile: null, layerFiles: [], unrecognizedSubdirs: [] };
    for (let e of n) {
        if (e.isFile) {
            if (e.name === F) continue;
            let n = e,
                r = await new Promise((e) => n.file(e));
            (0, f.Y_)(r.name) ? (t.previewFile = r) : a.ignoredFilenames.push(`frames/${i}/${r.name}`);
            continue;
        }
        if (e.isDirectory) {
            let n = e.name;
            if ("foreground" === n || "background" === n) {
                for (let r of await y(e))
                    if (r.isFile && r.name !== F) {
                        let e = r,
                            a = await new Promise((a) => e.file(a));
                        t.layerFiles.push({ file: a, folder: n });
                    } else if (r.isDirectory) {
                        let e = await D(r);
                        a.ignoredFilenames.push(...e.map((e) => `frames/${i}/${n}/${r.name}/${e.name}`));
                    }
            } else {
                t.unrecognizedSubdirs.push(n);
                let r = await D(e);
                a.ignoredFilenames.push(...r.map((e) => `frames/${i}/${n}/${e.name}`));
            }
        }
    }
    (null != t.previewFile || 0 !== t.layerFiles.length) && (a.profileFrameDirsMap[i] = t);
}
async function S(e, a) {
    for (let i of await y(e))
        i.isDirectory ? await P(i, a) : i.isFile && i.name !== F && a.ignoredFilenames.push(`frames/${i.name}`);
}
async function C(e, a) {
    for (let i of await y(e))
        i.isDirectory
            ? await L(i, "profile_effects", a)
            : i.isFile && i.name !== F && a.ignoredFilenames.push(R(e.name, i.name));
}
async function $(e, a) {
    for (let i of await y(e))
        if (i.isDirectory) {
            let e = i;
            if ("collection" === e.name) await L(e, "collection", a);
            else if ("avatar_decorations" === e.name) await L(e, "avatar_decorations", a);
            else if ("profile_effects" === e.name) await C(e, a);
            else if ("frames" === e.name) await S(e, a);
            else {
                let i = await D(e);
                a.ignoredFilenames.push(...i.map((a) => R(e.name, a.name)));
            }
        }
}
async function M(e) {
    let a = {
        collectionFiles: [],
        avatarDecorationFiles: [],
        profileEffectFilesMap: {},
        profileFrameDirsMap: {},
        ignoredFilenames: [],
    };
    for (let i of e)
        if (i.isDirectory) {
            let e = i.name;
            "collection" === e || "avatar_decorations" === e
                ? await L(i, e, a)
                : "profile_effects" === e
                  ? await C(i, a)
                  : "frames" === e
                    ? await S(i, a)
                    : await $(i, a);
        } else if (i.isFile) {
            let e = i;
            B("", await new Promise((a) => e.file(a)), null, a);
        }
    return (
        a.collectionFiles.sort((e, a) => e.name.localeCompare(a.name)),
        a.avatarDecorationFiles.sort((e, a) => e.name.localeCompare(a.name)),
        a.ignoredFilenames.sort((e, a) => e.localeCompare(a)),
        a
    );
}
function I(e) {
    return new Promise((a, i) => {
        let n = new window.Image(),
            t = setTimeout(() => i(Error("Timed out measuring image")), 15e3);
        ((n.onload = () => {
            (clearTimeout(t), a({ width: n.naturalWidth, height: n.naturalHeight }));
        }),
            (n.onerror = () => {
                (clearTimeout(t), i(Error("Failed to measure image")));
            }),
            (n.src = e));
    });
}
async function U(e, a, i) {
    let n = null != a.previewFile ? URL.createObjectURL(a.previewFile) : null,
        t = [],
        r = {};
    for (let { file: n, folder: l } of a.layerFiles) {
        let { parsed: a, errorType: o } = (0, f.Mf)(n.name);
        if (null == a) {
            let a = null != o ? f.h4[o] : "invalid";
            i.push(`frames/${e}/${l}/${n.name}: ${a}`);
            continue;
        }
        let s = f.R9[l],
            _ = `preview-${e}-${s}-${a.index}`;
        (t.push({
            layer: { id: _, type: a.type, order: s, anchor: a.anchor, responsive: a.responsive },
            order: s,
            index: a.index,
        }),
            (r[_] = URL.createObjectURL(n)));
    }
    t.sort(f.ui);
    let l = t.map((e) => e.layer);
    if (0 === l.length && null == n) return null;
    let o = (
        await Promise.all(
            t.map(async (e) => {
                let { layer: a } = e;
                try {
                    return { layer: a, dims: await I(r[a.id]) };
                } catch (e) {
                    return (m.error(`Failed to measure preview layer ${a.id}:`, e), null);
                }
            }),
        )
    ).filter((e) => null != e);
    return { key: e, previewSrc: n, layers: l, layerSrcByLayerId: r, ...(0, c.l)(o) };
}
function G() {
    let [e, a] = r.useState(() => ({
            collectionFiles: [],
            avatarDecorationFiles: [],
            profileEffectFilesMap: {},
            profileFrameDirsMap: {},
            ignoredFilenames: [],
        })),
        { upsertCollectionAsset: i, upsertAvatarDecorationAsset: n, upsertProfileFrame: t } = (0, u.JE)(),
        l = r.useCallback(
            async (e) => {
                let r = await M(e);
                (r.collectionFiles.forEach((e) => {
                    v(e, (e) => {
                        let a = N(e);
                        null != a && i(a, e);
                    });
                }),
                    r.avatarDecorationFiles.forEach((e) => {
                        v(e, (e) => {
                            n(e);
                        });
                    }),
                    await Promise.all(
                        Object.entries(r.profileFrameDirsMap).map(async (e) => {
                            let [a, i] = e,
                                n = await U(a, i, r.ignoredFilenames);
                            null != n && t(a, n);
                        }),
                    ),
                    r.ignoredFilenames.sort((e, a) => e.localeCompare(a)),
                    a(r));
            },
            [i, n, t],
        ),
        o = r.useCallback(() => {
            a((e) => ({
                ...e,
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                profileFrameDirsMap: {},
            }));
        }, []),
        s = r.useCallback(() => {
            a((e) => ({ ...e, ignoredFilenames: [] }));
        }, []);
    return {
        ignoredFilenames: e.ignoredFilenames,
        clearAssets: o,
        clearIgnoredFilenames: s,
        processAndUpsertAssets: l,
    };
}
