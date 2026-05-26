"use strict";
n.d(t, {
    Li: () => R,
    KE: () => x,
    Ni: () => w,
    aL: () => v,
    RN: () => C,
    ds: () => $,
    Kx: () => L,
    eg: () => z,
    GF: () => M,
    pd: () => G,
    Jn: () => b,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956);
var i,
    r,
    s,
    a,
    o,
    l,
    u = n(64700),
    c = n(691540),
    d = n(857250),
    _ = n(97483),
    f = n(59318),
    h = (((i = {}).TOP = "top"), (i.BOTTOM = "bottom"), (i.CENTER = "center"), i),
    p = (((r = {}).FRONT = "front"), (r.BACK = "back"), r),
    E = (((s = {}).STAPLE = "staple"), (s.RAIL = "rail"), (s.BORDER = "border"), s);
let m = "responsive",
    g = { foreground: p.FRONT, background: p.BACK },
    A = new Set([E.STAPLE, E.RAIL, E.BORDER]),
    I = new Set([h.TOP, h.BOTTOM, h.CENTER]),
    T = {
        wrong_part_count: "wrong filename format",
        invalid_index: "invalid index",
        invalid_type: `invalid type (expected: ${[...A].join(", ")})`,
        invalid_anchor: `invalid anchor (expected: ${[...I].join(", ")})`,
        invalid_responsive: `invalid suffix (expected '${m}')`,
        border_has_anchor: "border layers must omit the anchor",
    },
    S = { [p.FRONT]: 0, [p.BACK]: 1 };
function N(e, t) {
    let n = S[e.order] - S[t.order];
    return 0 !== n ? n : e.index - t.index;
}
var y = n(940622),
    C =
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
let v = {
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
    O = new Map(Object.values(C).flatMap((e) => v[e].map((t) => [`${e}.${t}`, e]))),
    R = new Set(O.keys());
var b = (((o = {}).PROFILE_EFFECT = "profile_effect"), (o.AVATAR_DECORATION = "avatar_decoration"), o);
let D = ".DS_Store";
var L =
    (((l = {}).COLLECTION = "collection"),
    (l.AVATAR_DECORATIONS = "avatar_decorations"),
    (l.FRAMES = "frames"),
    (l.NAMEPLATES = "nameplates"),
    (l.PROFILE_EFFECTS = "profile_effects"),
    l);
let w = (e) => {
        (0, c.P0)((0, d.o)(e, _.Ck.FAILURE));
    },
    M = (e) => {
        (0, c.P0)((0, d.o)(e, _.Ck.SUCCESS));
    },
    P = (e, t) => {
        let n = new FileReader();
        (n.onload = (n) => {
            null == n.target || "string" != typeof n.target.result
                ? w("Error uploading file. Try again!")
                : t(e, n.target.result);
        }),
            n.readAsDataURL(e);
    },
    x = (e, t, n) => {
        if (0 === e.length) return void n?.("No files found!");
        for (let n of e) P(n, t);
    },
    U = (e, t) => `${e}/${t}`,
    k = (e) => (0, f.tT)(e.type) || (0, f.XB)(e.type) || (0, f.XA)(e.name),
    G = (e) => O.get(e.name) ?? null,
    F = async (e) => {
        let t = e.createReader();
        return (await new Promise((e) => t.readEntries(e))).filter((e) => !(e.isDirectory && e.name.startsWith("_")));
    },
    V = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = await new Promise((t) => e.file(t));
            n.name !== D && t.push(n);
        } else if (e.isDirectory) {
            let n = await F(e),
                i = await Promise.all(n.map((e) => V(e)));
            t.push(...i.flat());
        }
        return t;
    },
    B = (e, t, n, i) => {
        if (t.name === D) return;
        let r = U(e, t.name);
        if ("profile_effects" === n)
            k(t) || t.name.endsWith(".txt")
                ? (e in i.profileEffectFilesMap || (i.profileEffectFilesMap[e] = []),
                  i.profileEffectFilesMap[e].push(t))
                : i.ignoredFilenames.push(U(e, t.name));
        else
            k(t)
                ? "collection" === n || null === n
                    ? null != G(t)
                        ? i.collectionFiles.push(t)
                        : i.ignoredFilenames.push(r)
                    : "avatar_decorations" === n
                      ? i.avatarDecorationFiles.push(t)
                      : i.ignoredFilenames.push(r)
                : i.ignoredFilenames.push(r);
    },
    H = async (e, t, n) => {
        for (let i of await F(e))
            if (i.isFile) {
                let r = i,
                    s = await new Promise((e) => r.file(e));
                B(e.name, s, t, n);
            } else {
                let e = await V(i);
                n.ignoredFilenames.push(...e.map((e) => U(i.name, e.name)));
            }
    },
    j = async (e, t) => {
        let n = e.name,
            i = await F(e),
            r = { previewFile: null, layerFiles: [], unrecognizedSubdirs: [] };
        for (let e of i) {
            if (e.isFile) {
                if (e.name === D) continue;
                let i = e,
                    s = await new Promise((e) => i.file(e));
                "preview" === s.name.replace(/\.\w+$/, "")
                    ? (r.previewFile = s)
                    : t.ignoredFilenames.push(`frames/${n}/${s.name}`);
                continue;
            }
            if (e.isDirectory) {
                let i = e.name;
                if ("foreground" === i || "background" === i) {
                    for (let s of await F(e))
                        if (s.isFile && s.name !== D) {
                            let e = s,
                                t = await new Promise((t) => e.file(t));
                            r.layerFiles.push({ file: t, folder: i });
                        } else if (s.isDirectory) {
                            let e = await V(s);
                            t.ignoredFilenames.push(...e.map((e) => `frames/${n}/${i}/${s.name}/${e.name}`));
                        }
                } else {
                    r.unrecognizedSubdirs.push(i);
                    let s = await V(e);
                    t.ignoredFilenames.push(...s.map((e) => `frames/${n}/${i}/${e.name}`));
                }
            }
        }
        (null != r.previewFile || 0 !== r.layerFiles.length) && (t.profileFrameDirsMap[n] = r);
    },
    Y = async (e, t) => {
        for (let n of await F(e))
            n.isDirectory ? await j(n, t) : n.isFile && n.name !== D && t.ignoredFilenames.push(`frames/${n.name}`);
    },
    W = async (e, t) => {
        for (let n of await F(e))
            n.isDirectory
                ? await H(n, "profile_effects", t)
                : n.isFile && n.name !== D && t.ignoredFilenames.push(U(e.name, n.name));
    },
    K = async (e, t) => {
        for (let n of await F(e))
            if (n.isDirectory) {
                let e = n;
                if ("collection" === e.name) await H(e, "collection", t);
                else if ("avatar_decorations" === e.name) await H(e, "avatar_decorations", t);
                else if ("profile_effects" === e.name) await W(e, t);
                else if ("frames" === e.name) await Y(e, t);
                else {
                    let n = await V(e);
                    t.ignoredFilenames.push(...n.map((t) => U(e.name, t.name)));
                }
            }
    },
    z = async (e) => {
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
                    ? await H(n, e, t)
                    : "profile_effects" === e
                      ? await W(n, t)
                      : "frames" === e
                        ? await Y(n, t)
                        : await K(n, t);
            } else if (n.isFile) {
                let e = n;
                B("", await new Promise((t) => e.file(t)), null, t);
            }
        return (
            t.collectionFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.avatarDecorationFiles.sort((e, t) => e.name.localeCompare(t.name)),
            t.ignoredFilenames.sort((e, t) => e.localeCompare(t)),
            t
        );
    },
    $ = () => {
        let [e, t] = u.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                profileFrameDirsMap: {},
                ignoredFilenames: [],
            })),
            { upsertCollectionAsset: n, upsertAvatarDecorationAsset: i, upsertProfileFrame: r } = (0, y.JE)(),
            s = u.useCallback(
                async (e) => {
                    let s = await z(e);
                    Object.entries(s.profileFrameDirsMap).forEach((e) => {
                        let [t, n] = e,
                            i = ((e, t, n) => {
                                let i = null != t.previewFile ? URL.createObjectURL(t.previewFile) : null,
                                    r = [],
                                    s = {};
                                for (let { file: i, folder: a } of t.layerFiles) {
                                    let { parsed: t, errorType: o } = (function (e) {
                                        var t;
                                        let n = e.replace(/\.\w+$/, "").split("_");
                                        if (n.length < 2 || n.length > 4)
                                            return { parsed: null, errorType: "wrong_part_count" };
                                        let [i, r, ...s] = n;
                                        if (!/^\d+$/.test(i)) return { parsed: null, errorType: "invalid_index" };
                                        if (!A.has(r)) return { parsed: null, errorType: "invalid_type" };
                                        if (r === E.BORDER) {
                                            if (s.length > 0 && ((t = s[0]), I.has(t)))
                                                return { parsed: null, errorType: "border_has_anchor" };
                                            if (s.length > 1) return { parsed: null, errorType: "wrong_part_count" };
                                            if (1 === s.length && s[0] !== m)
                                                return { parsed: null, errorType: "invalid_responsive" };
                                            let e = 1 === s.length;
                                            return {
                                                parsed: { index: Number(i), type: r, anchor: h.CENTER, responsive: e },
                                                errorType: null,
                                            };
                                        }
                                        let a = s[0];
                                        if (null == a || !I.has(a))
                                            return { parsed: null, errorType: "invalid_anchor" };
                                        if (s.length > 2) return { parsed: null, errorType: "wrong_part_count" };
                                        if (2 === s.length && s[1] !== m)
                                            return { parsed: null, errorType: "invalid_responsive" };
                                        let o = 2 === s.length || r === E.RAIL;
                                        return {
                                            parsed: { index: Number(i), type: r, anchor: a, responsive: o },
                                            errorType: null,
                                        };
                                    })(i.name);
                                    if (null == t) {
                                        let t = null != o ? T[o] : "invalid";
                                        n.push(`frames/${e}/${a}/${i.name}: ${t}`);
                                        continue;
                                    }
                                    let l = g[a],
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
                                r.sort(N);
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
                                P(e, (e) => {
                                    let t = G(e);
                                    null != t && n(t, e);
                                });
                            }),
                            s.avatarDecorationFiles.forEach((e) => {
                                P(e, (e) => {
                                    i(e);
                                });
                            }));
                },
                [n, i, r],
            ),
            a = u.useCallback(() => {
                t((e) => ({
                    ...e,
                    collectionFiles: [],
                    avatarDecorationFiles: [],
                    profileEffectFilesMap: {},
                    profileFrameDirsMap: {},
                }));
            }, []),
            o = u.useCallback(() => {
                t((e) => ({ ...e, ignoredFilenames: [] }));
            }, []);
        return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: a,
            clearIgnoredFilenames: o,
            processAndUpsertAssets: s,
        };
    };
