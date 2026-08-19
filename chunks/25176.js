t.d(r, {
    Li: () => F,
    KE: () => N,
    Ni: () => L,
    aL: () => b,
    RN: () => E,
    ds: () => W,
    Kx: () => y,
    eg: () => x,
    GF: () => D,
    pd: () => U,
    Lv: () => G,
    Jn: () => R,
}),
    t(321073),
    t(323874),
    t(14289),
    t(35956);
var n,
    a,
    l,
    i,
    o = t(582128);
if (588245 != t.j) var s = t(691540);
if (588245 != t.j) var u = t(857250);
if (588245 != t.j) var c = t(97483);
var p = t(626584),
    f = t(59318),
    m = t(597404),
    _ =
        588245 != t.j
            ? (((n = {})[(n.INNER_WIDTH = 1200)] = "INNER_WIDTH"),
              (n[(n.OVERFLOW_TOP = 304)] = "OVERFLOW_TOP"),
              (n[(n.OVERFLOW_BOTTOM = 212)] = "OVERFLOW_BOTTOM"),
              (n[(n.OVERFLOW_HORIZONTAL = 56)] = "OVERFLOW_HORIZONTAL"),
              n)
            : null,
    d = t(102607),
    v = t(374380);
function h(e, r) {
    return e.length > 0 ? Math.max(...e) : r;
}
function g(e, r, t) {
    return Math.max(0, e - (r - t));
}
var w = t(940622);
let O = new p.A("ShopAssetsPreviewUtils");
var E =
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
let b = {
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
    A = new Map(Object.values(E).flatMap((e) => b[e].map((r) => [`${e}.${r}`, e]))),
    F = new Set(A.keys());
var R =
    (((l = {}).PROFILE_EFFECT = "profile_effect"),
    (l.AVATAR_DECORATION = "avatar_decoration"),
    (l.PROFILE_FRAME = "profile_frame"),
    l);
let T = ".DS_Store";
var y =
    588245 != t.j
        ? (((i = {}).COLLECTION = "collection"),
          (i.AVATAR_DECORATIONS = "avatar_decorations"),
          (i.FRAMES = "frames"),
          (i.NAMEPLATES = "nameplates"),
          (i.PROFILE_EFFECTS = "profile_effects"),
          i)
        : null;
function L(e) {
    (0, s.P0)((0, u.o)(e, c.Ck.FAILURE));
}
function D(e) {
    (0, s.P0)((0, u.o)(e, c.Ck.SUCCESS));
}
function P(e, r) {
    let t = new FileReader();
    (t.onload = (t) => {
        null == t.target || "string" != typeof t.target.result
            ? L("Error uploading file. Try again!")
            : r(e, t.target.result);
    }),
        t.readAsDataURL(e);
}
function N(e, r, t) {
    if (0 === e.length) return void t?.("No files found!");
    for (let t of e) P(t, r);
}
function S(e, r) {
    return `${e}/${r}`;
}
function I(e) {
    return (0, f.tT)(e.type) || (0, f.XB)(e.type) || (0, f.XA)(e.name);
}
function U(e) {
    return A.get(e.name) ?? null;
}
async function M(e) {
    let r = e.createReader();
    return (await new Promise((e) => r.readEntries(e))).filter((e) => !(e.isDirectory && e.name.startsWith("_")));
}
async function B(e) {
    let r = [];
    if (e.isFile) {
        let t = await new Promise((r) => e.file(r));
        t.name !== T && r.push(t);
    } else if (e.isDirectory) {
        let t = await M(e),
            n = await Promise.all(t.map((e) => B(e)));
        r.push(...n.flat());
    }
    return r;
}
function C(e, r, t, n) {
    if (r.name === T) return;
    let a = S(e, r.name);
    if ("profile_effects" === t)
        I(r) || r.name.endsWith(".txt")
            ? (e in n.profileEffectFilesMap || (n.profileEffectFilesMap[e] = []), n.profileEffectFilesMap[e].push(r))
            : n.ignoredFilenames.push(S(e, r.name));
    else
        I(r)
            ? "collection" === t || null === t
                ? null != U(r)
                    ? n.collectionFiles.push(r)
                    : n.ignoredFilenames.push(a)
                : "avatar_decorations" === t
                  ? n.avatarDecorationFiles.push(r)
                  : n.ignoredFilenames.push(a)
            : n.ignoredFilenames.push(a);
}
async function j(e, r, t) {
    for (let n of await M(e))
        if (n.isFile) {
            let a = n,
                l = await new Promise((e) => a.file(e));
            C(e.name, l, r, t);
        } else {
            let e = await B(n);
            t.ignoredFilenames.push(...e.map((e) => S(n.name, e.name)));
        }
}
async function k(e, r) {
    let t = e.name,
        n = await M(e),
        a = { previewFile: null, layerFiles: [], unrecognizedSubdirs: [] };
    for (let e of n) {
        if (e.isFile) {
            if (e.name === T) continue;
            let n = e,
                l = await new Promise((e) => n.file(e));
            (0, m.Y_)(l.name) ? (a.previewFile = l) : r.ignoredFilenames.push(`frames/${t}/${l.name}`);
            continue;
        }
        if (e.isDirectory) {
            let n = e.name;
            if ("foreground" === n || "background" === n) {
                for (let l of await M(e))
                    if (l.isFile && l.name !== T) {
                        let e = l,
                            r = await new Promise((r) => e.file(r));
                        a.layerFiles.push({ file: r, folder: n });
                    } else if (l.isDirectory) {
                        let e = await B(l);
                        r.ignoredFilenames.push(...e.map((e) => `frames/${t}/${n}/${l.name}/${e.name}`));
                    }
            } else {
                a.unrecognizedSubdirs.push(n);
                let l = await B(e);
                r.ignoredFilenames.push(...l.map((e) => `frames/${t}/${n}/${e.name}`));
            }
        }
    }
    (null != a.previewFile || 0 !== a.layerFiles.length) && (r.profileFrameDirsMap[t] = a);
}
async function H(e, r) {
    for (let t of await M(e))
        t.isDirectory ? await k(t, r) : t.isFile && t.name !== T && r.ignoredFilenames.push(`frames/${t.name}`);
}
async function K(e, r) {
    for (let t of await M(e))
        t.isDirectory
            ? await j(t, "profile_effects", r)
            : t.isFile && t.name !== T && r.ignoredFilenames.push(S(e.name, t.name));
}
async function $(e, r) {
    for (let t of await M(e))
        if (t.isDirectory) {
            let e = t;
            if ("collection" === e.name) await j(e, "collection", r);
            else if ("avatar_decorations" === e.name) await j(e, "avatar_decorations", r);
            else if ("profile_effects" === e.name) await K(e, r);
            else if ("frames" === e.name) await H(e, r);
            else {
                let t = await B(e);
                r.ignoredFilenames.push(...t.map((r) => S(e.name, r.name)));
            }
        }
}
async function x(e) {
    let r = {
        collectionFiles: [],
        avatarDecorationFiles: [],
        profileEffectFilesMap: {},
        profileFrameDirsMap: {},
        ignoredFilenames: [],
    };
    for (let t of e)
        if (t.isDirectory) {
            let e = t.name;
            "collection" === e || "avatar_decorations" === e
                ? await j(t, e, r)
                : "profile_effects" === e
                  ? await K(t, r)
                  : "frames" === e
                    ? await H(t, r)
                    : await $(t, r);
        } else if (t.isFile) {
            let e = t;
            C("", await new Promise((r) => e.file(r)), null, r);
        }
    return (
        r.collectionFiles.sort((e, r) => e.name.localeCompare(r.name)),
        r.avatarDecorationFiles.sort((e, r) => e.name.localeCompare(r.name)),
        r.ignoredFilenames.sort((e, r) => e.localeCompare(r)),
        r
    );
}
function G(e) {
    return new Promise((r, t) => {
        let n = new window.Image(),
            a = setTimeout(() => t(Error("Timed out measuring image")), 15e3);
        (n.onload = () => {
            clearTimeout(a), r({ width: n.naturalWidth, height: n.naturalHeight });
        }),
            (n.onerror = () => {
                clearTimeout(a), t(Error("Failed to measure image"));
            }),
            (n.src = e);
    });
}
async function V(e, r, t) {
    var n;
    let a,
        l,
        i = null != r.previewFile ? URL.createObjectURL(r.previewFile) : null,
        o = [],
        s = {};
    for (let { file: n, folder: a } of r.layerFiles) {
        let { parsed: r, errorType: l } = (0, m.Mf)(n.name);
        if (null == r) {
            let r = null != l ? m.h4[l] : "invalid";
            t.push(`frames/${e}/${a}/${n.name}: ${r}`);
            continue;
        }
        let i = m.R9[a],
            u = `preview-${e}-${i}-${r.index}`;
        o.push({
            layer: { id: u, type: r.type, order: i, anchor: r.anchor, responsive: r.responsive },
            order: i,
            index: r.index,
        }),
            (s[u] = URL.createObjectURL(n));
    }
    o.sort(m.ui);
    let u = o.map((e) => e.layer);
    if (0 === u.length && null == i) return null;
    let c =
        ((n = (
            await Promise.all(
                o.map(async (e) => {
                    let { layer: r } = e;
                    try {
                        return { layer: r, dims: await G(s[r.id]) };
                    } catch (e) {
                        return O.error(`Failed to measure preview layer ${r.id}:`, e), null;
                    }
                }),
            )
        ).filter((e) => null != e)),
        (a = _.INNER_WIDTH),
        (l = h(
            n.map((e) => {
                let { dims: r } = e;
                return Math.round(Math.max(0, (r.width - a) / 2));
            }),
            0,
        )),
        {
            innerWidth: a,
            overflowTop: h(
                n
                    .filter((e) => {
                        let { layer: r } = e;
                        return r.type === v.O.STAPLE && r.anchor === d.T.TOP;
                    })
                    .map((e) => {
                        let { dims: r } = e;
                        return g(r.height, 716, _.OVERFLOW_TOP);
                    }),
                0,
            ),
            overflowBottom: h(
                n
                    .filter((e) => {
                        let { layer: r } = e;
                        return r.type === v.O.STAPLE && r.anchor === d.T.BOTTOM;
                    })
                    .map((e) => {
                        let { dims: r } = e;
                        return g(r.height, 424, _.OVERFLOW_BOTTOM);
                    }),
                0,
            ),
            overflowHorizontal: l,
        });
    return { key: e, previewSrc: i, layers: u, layerSrcByLayerId: s, ...c };
}
function W() {
    let [e, r] = o.useState(() => ({
            collectionFiles: [],
            avatarDecorationFiles: [],
            profileEffectFilesMap: {},
            profileFrameDirsMap: {},
            ignoredFilenames: [],
        })),
        { upsertCollectionAsset: t, upsertAvatarDecorationAsset: n, upsertProfileFrame: a } = (0, w.JE)(),
        l = o.useCallback(
            async (e) => {
                let l = await x(e);
                l.collectionFiles.forEach((e) => {
                    P(e, (e) => {
                        let r = U(e);
                        null != r && t(r, e);
                    });
                }),
                    l.avatarDecorationFiles.forEach((e) => {
                        P(e, (e) => {
                            n(e);
                        });
                    }),
                    await Promise.all(
                        Object.entries(l.profileFrameDirsMap).map(async (e) => {
                            let [r, t] = e,
                                n = await V(r, t, l.ignoredFilenames);
                            null != n && a(r, n);
                        }),
                    ),
                    l.ignoredFilenames.sort((e, r) => e.localeCompare(r)),
                    r(l);
            },
            [t, n, a],
        ),
        i = o.useCallback(() => {
            r((e) => ({
                ...e,
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                profileFrameDirsMap: {},
            }));
        }, []),
        s = o.useCallback(() => {
            r((e) => ({ ...e, ignoredFilenames: [] }));
        }, []);
    return {
        ignoredFilenames: e.ignoredFilenames,
        clearAssets: i,
        clearIgnoredFilenames: s,
        processAndUpsertAssets: l,
    };
}
