t.d(r, {
    GF: () => F,
    Jn: () => O,
    KE: () => L,
    Kx: () => w,
    Li: () => b,
    Lv: () => x,
    Ni: () => T,
    RN: () => g,
    aL: () => h,
    ds: () => V,
    eg: () => H,
    pd: () => N,
}),
    t(321073),
    t(323874),
    t(14289),
    t(35956);
var a,
    n,
    l,
    i = t(64700),
    o = t(820391),
    s = t(102607),
    u = t(374380),
    c = t(691540),
    p = t(857250),
    d = t(97483),
    f = t(626584),
    m = t(59318),
    v = t(572868),
    A = t(940622);
let _ = new f.A("ShopAssetsPreviewUtils");
var g =
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
    E = new Map(Object.values(g).flatMap((e) => h[e].map((r) => [`${e}.${r}`, e]))),
    b = new Set(E.keys());
var O =
    (((n = {}).PROFILE_EFFECT = "profile_effect"),
    (n.AVATAR_DECORATION = "avatar_decoration"),
    (n.PROFILE_FRAME = "profile_frame"),
    n);
let R = ".DS_Store";
var w =
    (((l = {}).COLLECTION = "collection"),
    (l.AVATAR_DECORATIONS = "avatar_decorations"),
    (l.FRAMES = "frames"),
    (l.NAMEPLATES = "nameplates"),
    (l.PROFILE_EFFECTS = "profile_effects"),
    l);
let T = (e) => {
        (0, c.P0)((0, p.o)(e, d.Ck.FAILURE));
    },
    F = (e) => {
        (0, c.P0)((0, p.o)(e, d.Ck.SUCCESS));
    },
    y = (e, r) => {
        let t = new FileReader();
        (t.onload = (t) => {
            null == t.target || "string" != typeof t.target.result
                ? T("Error uploading file. Try again!")
                : r(e, t.target.result);
        }),
            t.readAsDataURL(e);
    },
    L = (e, r, t) => {
        if (0 === e.length) return void t?.("No files found!");
        for (let t of e) y(t, r);
    },
    D = (e, r) => `${e}/${r}`,
    P = (e) => (0, m.tT)(e.type) || (0, m.XB)(e.type) || (0, m.XA)(e.name),
    N = (e) => E.get(e.name) ?? null,
    M = async (e) => {
        let r = e.createReader();
        return (await new Promise((e) => r.readEntries(e))).filter((e) => !(e.isDirectory && e.name.startsWith("_")));
    },
    I = async (e) => {
        let r = [];
        if (e.isFile) {
            let t = await new Promise((r) => e.file(r));
            t.name !== R && r.push(t);
        } else if (e.isDirectory) {
            let t = await M(e),
                a = await Promise.all(t.map((e) => I(e)));
            r.push(...a.flat());
        }
        return r;
    },
    S = (e, r, t, a) => {
        if (r.name === R) return;
        let n = D(e, r.name);
        if ("profile_effects" === t)
            P(r) || r.name.endsWith(".txt")
                ? (e in a.profileEffectFilesMap || (a.profileEffectFilesMap[e] = []),
                  a.profileEffectFilesMap[e].push(r))
                : a.ignoredFilenames.push(D(e, r.name));
        else
            P(r)
                ? "collection" === t || null === t
                    ? null != N(r)
                        ? a.collectionFiles.push(r)
                        : a.ignoredFilenames.push(n)
                    : "avatar_decorations" === t
                      ? a.avatarDecorationFiles.push(r)
                      : a.ignoredFilenames.push(n)
                : a.ignoredFilenames.push(n);
    },
    U = async (e, r, t) => {
        for (let a of await M(e))
            if (a.isFile) {
                let n = a,
                    l = await new Promise((e) => n.file(e));
                S(e.name, l, r, t);
            } else {
                let e = await I(a);
                t.ignoredFilenames.push(...e.map((e) => D(a.name, e.name)));
            }
    },
    C = async (e, r) => {
        let t = e.name,
            a = await M(e),
            n = { previewFile: null, layerFiles: [], unrecognizedSubdirs: [] };
        for (let e of a) {
            if (e.isFile) {
                if (e.name === R) continue;
                let a = e,
                    l = await new Promise((e) => a.file(e));
                (0, v.Y_)(l.name) ? (n.previewFile = l) : r.ignoredFilenames.push(`frames/${t}/${l.name}`);
                continue;
            }
            if (e.isDirectory) {
                let a = e.name;
                if ("foreground" === a || "background" === a) {
                    for (let l of await M(e))
                        if (l.isFile && l.name !== R) {
                            let e = l,
                                r = await new Promise((r) => e.file(r));
                            n.layerFiles.push({ file: r, folder: a });
                        } else if (l.isDirectory) {
                            let e = await I(l);
                            r.ignoredFilenames.push(...e.map((e) => `frames/${t}/${a}/${l.name}/${e.name}`));
                        }
                } else {
                    n.unrecognizedSubdirs.push(a);
                    let l = await I(e);
                    r.ignoredFilenames.push(...l.map((e) => `frames/${t}/${a}/${e.name}`));
                }
            }
        }
        (null != n.previewFile || 0 !== n.layerFiles.length) && (r.profileFrameDirsMap[t] = n);
    },
    B = async (e, r) => {
        for (let t of await M(e))
            t.isDirectory ? await C(t, r) : t.isFile && t.name !== R && r.ignoredFilenames.push(`frames/${t.name}`);
    },
    k = async (e, r) => {
        for (let t of await M(e))
            t.isDirectory
                ? await U(t, "profile_effects", r)
                : t.isFile && t.name !== R && r.ignoredFilenames.push(D(e.name, t.name));
    },
    j = async (e, r) => {
        for (let t of await M(e))
            if (t.isDirectory) {
                let e = t;
                if ("collection" === e.name) await U(e, "collection", r);
                else if ("avatar_decorations" === e.name) await U(e, "avatar_decorations", r);
                else if ("profile_effects" === e.name) await k(e, r);
                else if ("frames" === e.name) await B(e, r);
                else {
                    let t = await I(e);
                    r.ignoredFilenames.push(...t.map((r) => D(e.name, r.name)));
                }
            }
    },
    H = async (e) => {
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
                    ? await U(t, e, r)
                    : "profile_effects" === e
                      ? await k(t, r)
                      : "frames" === e
                        ? await B(t, r)
                        : await j(t, r);
            } else if (t.isFile) {
                let e = t;
                S("", await new Promise((r) => e.file(r)), null, r);
            }
        return (
            r.collectionFiles.sort((e, r) => e.name.localeCompare(r.name)),
            r.avatarDecorationFiles.sort((e, r) => e.name.localeCompare(r.name)),
            r.ignoredFilenames.sort((e, r) => e.localeCompare(r)),
            r
        );
    };
function x(e) {
    return new Promise((r, t) => {
        let a = new window.Image(),
            n = setTimeout(() => t(Error("Timed out measuring image")), 15e3);
        (a.onload = () => {
            clearTimeout(n), r({ width: a.naturalWidth, height: a.naturalHeight });
        }),
            (a.onerror = () => {
                clearTimeout(n), t(Error("Failed to measure image"));
            }),
            (a.src = e);
    });
}
function K(e, r) {
    return e.length > 0 ? Math.max(...e) : r;
}
function $(e, r, t) {
    return Math.max(0, e - (r - t));
}
let G = async (e, r, t) => {
        var a;
        let n,
            l,
            i = null != r.previewFile ? URL.createObjectURL(r.previewFile) : null,
            c = [],
            p = {};
        for (let { file: a, folder: n } of r.layerFiles) {
            let { parsed: r, errorType: l } = (0, v.Mf)(a.name);
            if (null == r) {
                let r = null != l ? v.h4[l] : "invalid";
                t.push(`frames/${e}/${n}/${a.name}: ${r}`);
                continue;
            }
            let i = v.R9[n],
                o = `preview-${e}-${i}-${r.index}`;
            c.push({
                layer: { id: o, type: r.type, order: i, anchor: r.anchor, responsive: r.responsive },
                order: i,
                index: r.index,
            }),
                (p[o] = URL.createObjectURL(a));
        }
        c.sort(v.ui);
        let d = c.map((e) => e.layer);
        if (0 === d.length && null == i) return null;
        let f =
            ((a = (
                await Promise.all(
                    c.map(async (e) => {
                        let { layer: r } = e;
                        try {
                            return { layer: r, dims: await x(p[r.id]) };
                        } catch (e) {
                            return _.error(`Failed to measure preview layer ${r.id}:`, e), null;
                        }
                    }),
                )
            ).filter((e) => null != e)),
            (n = o.x.INNER_WIDTH),
            (l = K(
                a
                    .filter((e) => {
                        let { layer: r } = e;
                        return r.type === u.O.BORDER || r.type === u.O.RAIL;
                    })
                    .map((e) => {
                        let { dims: r } = e;
                        return Math.round(Math.max(0, (r.width - n) / 2));
                    }),
                o.x.OVERFLOW_HORIZONTAL,
            )),
            {
                innerWidth: n,
                overflowTop: K(
                    a
                        .filter((e) => {
                            let { layer: r } = e;
                            return r.type === u.O.STAPLE && r.anchor === s.T.TOP;
                        })
                        .map((e) => {
                            let { dims: r } = e;
                            return $(r.height, 716, o.x.OVERFLOW_TOP);
                        }),
                    0,
                ),
                overflowBottom: K(
                    a
                        .filter((e) => {
                            let { layer: r } = e;
                            return r.type === u.O.STAPLE && r.anchor === s.T.BOTTOM;
                        })
                        .map((e) => {
                            let { dims: r } = e;
                            return $(r.height, 424, o.x.OVERFLOW_BOTTOM);
                        }),
                    0,
                ),
                overflowHorizontal: l,
            });
        return { key: e, previewSrc: i, layers: d, layerSrcByLayerId: p, ...f };
    },
    V = () => {
        let [e, r] = i.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                profileFrameDirsMap: {},
                ignoredFilenames: [],
            })),
            { upsertCollectionAsset: t, upsertAvatarDecorationAsset: a, upsertProfileFrame: n } = (0, A.JE)(),
            l = i.useCallback(
                async (e) => {
                    let l = await H(e);
                    l.collectionFiles.forEach((e) => {
                        y(e, (e) => {
                            let r = N(e);
                            null != r && t(r, e);
                        });
                    }),
                        l.avatarDecorationFiles.forEach((e) => {
                            y(e, (e) => {
                                a(e);
                            });
                        }),
                        await Promise.all(
                            Object.entries(l.profileFrameDirsMap).map(async (e) => {
                                let [r, t] = e,
                                    a = await G(r, t, l.ignoredFilenames);
                                null != a && n(r, a);
                            }),
                        ),
                        l.ignoredFilenames.sort((e, r) => e.localeCompare(r)),
                        r(l);
                },
                [t, a, n],
            ),
            o = i.useCallback(() => {
                r((e) => ({
                    ...e,
                    collectionFiles: [],
                    avatarDecorationFiles: [],
                    profileEffectFilesMap: {},
                    profileFrameDirsMap: {},
                }));
            }, []),
            s = i.useCallback(() => {
                r((e) => ({ ...e, ignoredFilenames: [] }));
            }, []);
        return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: o,
            clearIgnoredFilenames: s,
            processAndUpsertAssets: l,
        };
    };
