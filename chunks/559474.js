(i.d(a, {
    GF: () => w,
    KE: () => v,
    Kx: () => b,
    Li: () => d,
    Lv: () => C,
    Ni: () => F,
    RN: () => f,
    aL: () => m,
    ds: () => G,
    eg: () => $,
    pd: () => A,
}),
    i(321073),
    i(323874),
    i(14289),
    i(35956));
var n,
    t,
    r = i(582128);
if (588245 != i.j) var l = i(858899);
var o = i(626584),
    s = i(59318),
    _ = i(597404),
    p = i(561509),
    c = i(940622);
let u = new o.A("ShopAssetsPreviewUtils");
var f =
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
let m = {
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
    g = new Map(Object.values(f).flatMap((e) => m[e].map((a) => [`${e}.${a}`, e]))),
    d = new Set(g.keys()),
    h = ".DS_Store";
var b =
    588245 != i.j
        ? (((t = {}).COLLECTION = "collection"),
          (t.AVATAR_DECORATIONS = "avatar_decorations"),
          (t.FRAMES = "frames"),
          (t.NAMEPLATES = "nameplates"),
          (t.PROFILE_EFFECTS = "profile_effects"),
          t)
        : null;
function F(e) {
    (0, l.P0)({ text: e, variant: "critical" });
}
function w(e) {
    (0, l.P0)({ text: e, variant: "success" });
}
function E(e, a) {
    let i = new FileReader();
    ((i.onload = (i) => {
        null == i.target || "string" != typeof i.target.result
            ? F("Error uploading file. Try again!")
            : a(e, i.target.result);
    }),
        i.readAsDataURL(e));
}
function v(e, a, i) {
    if (0 === e.length) return void i?.("No files found!");
    for (let i of e) E(i, a);
}
function O(e, a) {
    return `${e}/${a}`;
}
function T(e) {
    return (0, s.tT)(e.type) || (0, s.XB)(e.type) || (0, s.XA)(e.name);
}
function A(e) {
    return g.get(e.name) ?? null;
}
async function R(e) {
    let a = e.createReader();
    return (await new Promise((e) => a.readEntries(e))).filter((e) => !(e.isDirectory && e.name.startsWith("_")));
}
async function N(e) {
    let a = [];
    if (e.isFile) {
        let i = await new Promise((a) => e.file(a));
        i.name !== h && a.push(i);
    } else if (e.isDirectory) {
        let i = await R(e),
            n = await Promise.all(i.map((e) => N(e)));
        a.push(...n.flat());
    }
    return a;
}
function y(e, a, i, n) {
    if (a.name === h) return;
    let t = O(e, a.name);
    if ("profile_effects" === i)
        T(a) || a.name.endsWith(".txt")
            ? (e in n.profileEffectFilesMap || (n.profileEffectFilesMap[e] = []), n.profileEffectFilesMap[e].push(a))
            : n.ignoredFilenames.push(O(e, a.name));
    else
        T(a)
            ? "collection" === i || null === i
                ? null != A(a)
                    ? n.collectionFiles.push(a)
                    : n.ignoredFilenames.push(t)
                : "avatar_decorations" === i
                  ? n.avatarDecorationFiles.push(a)
                  : n.ignoredFilenames.push(t)
            : n.ignoredFilenames.push(t);
}
async function D(e, a, i) {
    for (let n of await R(e))
        if (n.isFile) {
            let t = n,
                r = await new Promise((e) => t.file(e));
            y(e.name, r, a, i);
        } else {
            let e = await N(n);
            i.ignoredFilenames.push(...e.map((e) => O(n.name, e.name)));
        }
}
async function B(e, a) {
    let i = e.name,
        n = await R(e),
        t = { previewFile: null, layerFiles: [], unrecognizedSubdirs: [] };
    for (let e of n) {
        if (e.isFile) {
            if (e.name === h) continue;
            let n = e,
                r = await new Promise((e) => n.file(e));
            (0, _.Y_)(r.name) ? (t.previewFile = r) : a.ignoredFilenames.push(`frames/${i}/${r.name}`);
            continue;
        }
        if (e.isDirectory) {
            let n = e.name;
            if ("foreground" === n || "background" === n) {
                for (let r of await R(e))
                    if (r.isFile && r.name !== h) {
                        let e = r,
                            a = await new Promise((a) => e.file(a));
                        t.layerFiles.push({ file: a, folder: n });
                    } else if (r.isDirectory) {
                        let e = await N(r);
                        a.ignoredFilenames.push(...e.map((e) => `frames/${i}/${n}/${r.name}/${e.name}`));
                    }
            } else {
                t.unrecognizedSubdirs.push(n);
                let r = await N(e);
                a.ignoredFilenames.push(...r.map((e) => `frames/${i}/${n}/${e.name}`));
            }
        }
    }
    (null != t.previewFile || 0 !== t.layerFiles.length) && (a.profileFrameDirsMap[i] = t);
}
async function L(e, a) {
    for (let i of await R(e))
        i.isDirectory ? await B(i, a) : i.isFile && i.name !== h && a.ignoredFilenames.push(`frames/${i.name}`);
}
async function P(e, a) {
    for (let i of await R(e))
        i.isDirectory
            ? await D(i, "profile_effects", a)
            : i.isFile && i.name !== h && a.ignoredFilenames.push(O(e.name, i.name));
}
async function S(e, a) {
    for (let i of await R(e))
        if (i.isDirectory) {
            let e = i;
            if ("collection" === e.name) await D(e, "collection", a);
            else if ("avatar_decorations" === e.name) await D(e, "avatar_decorations", a);
            else if ("profile_effects" === e.name) await P(e, a);
            else if ("frames" === e.name) await L(e, a);
            else {
                let i = await N(e);
                a.ignoredFilenames.push(...i.map((a) => O(e.name, a.name)));
            }
        }
}
async function $(e) {
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
                ? await D(i, e, a)
                : "profile_effects" === e
                  ? await P(i, a)
                  : "frames" === e
                    ? await L(i, a)
                    : await S(i, a);
        } else if (i.isFile) {
            let e = i;
            y("", await new Promise((a) => e.file(a)), null, a);
        }
    return (
        a.collectionFiles.sort((e, a) => e.name.localeCompare(a.name)),
        a.avatarDecorationFiles.sort((e, a) => e.name.localeCompare(a.name)),
        a.ignoredFilenames.sort((e, a) => e.localeCompare(a)),
        a
    );
}
function C(e) {
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
async function M(e, a, i) {
    let n = null != a.previewFile ? URL.createObjectURL(a.previewFile) : null,
        t = [],
        r = {};
    for (let { file: n, folder: l } of a.layerFiles) {
        let { parsed: a, errorType: o } = (0, _.Mf)(n.name);
        if (null == a) {
            let a = null != o ? _.h4[o] : "invalid";
            i.push(`frames/${e}/${l}/${n.name}: ${a}`);
            continue;
        }
        let s = _.R9[l],
            p = `preview-${e}-${s}-${a.index}`;
        (t.push({
            layer: { id: p, type: a.type, order: s, anchor: a.anchor, responsive: a.responsive },
            order: s,
            index: a.index,
        }),
            (r[p] = URL.createObjectURL(n)));
    }
    t.sort(_.ui);
    let l = t.map((e) => e.layer);
    if (0 === l.length && null == n) return null;
    let o = (
        await Promise.all(
            t.map(async (e) => {
                let { layer: a } = e;
                try {
                    return { layer: a, dims: await C(r[a.id]) };
                } catch (e) {
                    return (u.error(`Failed to measure preview layer ${a.id}:`, e), null);
                }
            }),
        )
    ).filter((e) => null != e);
    return { key: e, previewSrc: n, layers: l, layerSrcByLayerId: r, ...(0, p.l)(o) };
}
function G() {
    let [e, a] = r.useState(() => ({
            collectionFiles: [],
            avatarDecorationFiles: [],
            profileEffectFilesMap: {},
            profileFrameDirsMap: {},
            ignoredFilenames: [],
        })),
        { upsertCollectionAsset: i, upsertAvatarDecorationAsset: n, upsertProfileFrame: t } = (0, c.JE)(),
        l = r.useCallback(
            async (e) => {
                let r = await $(e);
                (r.collectionFiles.forEach((e) => {
                    E(e, (e) => {
                        let a = A(e);
                        null != a && i(a, e);
                    });
                }),
                    r.avatarDecorationFiles.forEach((e) => {
                        E(e, (e) => {
                            n(e);
                        });
                    }),
                    await Promise.all(
                        Object.entries(r.profileFrameDirsMap).map(async (e) => {
                            let [a, i] = e,
                                n = await M(a, i, r.ignoredFilenames);
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
