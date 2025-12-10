n.d(t, {
    BU: () => v,
    CM: () => m,
    Eo: () => h,
    Kr: () => b,
    LY: () => P,
    XA: () => g,
    aB: () => p,
    hm: () => R,
    jE: () => d,
    w6: () => f,
}),
    n(388685),
    n(539854),
    n(472816),
    n(794429),
    n(642613);
var r = n(473749),
    i = n(481060),
    a = n(406432),
    o = n(619899);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var d = (function (e) {
    return (
        (e.CATALOG_BANNER_STATIC = "catalog_banner.jpg"),
        (e.CATALOG_BANNER_ANIMATED = "catalog_banner_animated.webm"),
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
        (e.LOGO = "logo.png"),
        (e.MOBILE_BANNER = "mobile_banner.jpg"),
        (e.MOBILE_BACKGROUND = "mobile_bg.jpg"),
        e
    );
})({});
let f = new Set(Object.values(d));
var p = (function (e) {
    return (e.PROFILE_EFFECT = "profile_effect"), (e.AVATAR_DECORATION = "avatar_decoration"), e;
})({});
let _ = ".DS_Store";
var m = (function (e) {
    return (
        (e.COLLECTION = "collection"),
        (e.AVATAR_DECORATIONS = "avatar_decorations"),
        (e.PROFILE_EFFECTS = "profile_effects"),
        e
    );
})({});
let h = (e) => {
        (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE));
    },
    g = (e) => {
        (0, i.showToast)((0, i.createToast)(e, i.ToastType.SUCCESS));
    },
    E = (e, t) => {
        let n = new FileReader();
        (n.onload = (n) => {
            if (null == n.target || "string" != typeof n.target.result)
                return void h("Error uploading file. Try again!");
            t(e, n.target.result);
        }),
            n.readAsDataURL(e);
    },
    b = (e, t, n) => {
        if (0 === e.length) {
            null == n || n("No files found!");
            return;
        }
        for (let n of e) E(n, t);
    },
    y = (e, t) => "".concat(e, "/").concat(t),
    O = (e) => (0, a.tw)(e.type) || (0, a.X2)(e.type) || (0, a.yn)(e.name),
    v = (e) => (f.has(e.name) ? e.name : null),
    S = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = e,
                r = await new Promise((e) => n.file(e));
            r.name !== _ && t.push(r);
        } else if (e.isDirectory) {
            let n = e.createReader(),
                r = await new Promise((e) => n.readEntries(e)),
                i = await Promise.all(r.map((e) => S(e)));
            t.push(...i.flat());
        }
        return t;
    },
    I = (e, t, n) => {
        if (!O(t) && !t.name.endsWith(".txt")) return void n.ignoredFilenames.push(y(e, t.name));
        e in n.profileEffectFilesMap || (n.profileEffectFilesMap[e] = []), n.profileEffectFilesMap[e].push(t);
    },
    T = (e, t, n, r) => {
        if (t.name === _) return;
        let i = y(e, t.name);
        "profile_effects" === n
            ? I(e, t, r)
            : O(t)
              ? "collection" === n || null === n
                  ? f.has(t.name)
                      ? r.collectionFiles.push(t)
                      : r.ignoredFilenames.push(i)
                  : "avatar_decorations" === n
                    ? r.avatarDecorationFiles.push(t)
                    : r.ignoredFilenames.push(i)
              : r.ignoredFilenames.push(i);
    },
    C = async (e, t, n) => {
        let r = e.createReader();
        for (let i of await new Promise((e) => r.readEntries(e)))
            if (i.isFile) {
                let r = i,
                    a = await new Promise((e) => r.file(e));
                T(e.name, a, t, n);
            } else {
                let e = await S(i);
                n.ignoredFilenames.push(...e.map((e) => y(i.name, e.name)));
            }
    },
    A = async (e, t) => {
        let n = e.createReader();
        for (let r of await new Promise((e) => n.readEntries(e)))
            if (r.isDirectory) {
                let e = r;
                await C(e, "profile_effects", t);
            } else r.isFile && r.name !== _ && t.ignoredFilenames.push(y(e.name, r.name));
    },
    N = async (e, t) => {
        let n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e)))
            if (e.isDirectory) {
                let n = e;
                if ("collection" === n.name) await C(n, "collection", t);
                else if ("avatar_decorations" === n.name) await C(n, "avatar_decorations", t);
                else if ("profile_effects" === n.name) await A(n, t);
                else {
                    let e = await S(n);
                    t.ignoredFilenames.push(...e.map((e) => y(n.name, e.name)));
                }
            }
    },
    P = async (e) => {
        let t = {
            collectionFiles: [],
            avatarDecorationFiles: [],
            profileEffectFilesMap: {},
            ignoredFilenames: [],
        };
        for (let n of e)
            if (n.isDirectory) {
                let e = n,
                    r = e.name;
                "collection" === r || "avatar_decorations" === r
                    ? await C(e, r, t)
                    : "profile_effects" === r
                      ? await A(e, t)
                      : await N(e, t);
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
    R = () => {
        let [e, t] = r.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
                ignoredFilenames: [],
            })),
            { upsertCollectionAsset: n, upsertAvatarDecorationAsset: i } = (0, o.N9)(),
            a = r.useCallback(
                async (e) => {
                    let r = await P(e);
                    t(r),
                        (0 !== r.collectionFiles.length || 0 !== r.avatarDecorationFiles.length) &&
                            (r.collectionFiles.forEach((e) => {
                                E(e, (e) => {
                                    let t = v(e);
                                    null != t && n(t, e);
                                });
                            }),
                            r.avatarDecorationFiles.forEach((e) => {
                                E(e, (e) => {
                                    i(e);
                                });
                            }));
                },
                [n, i],
            ),
            s = r.useCallback(() => {
                t((e) =>
                    u(l({}, e), {
                        collectionFiles: [],
                        avatarDecorationFiles: [],
                        profileEffectFilesMap: {},
                    }),
                );
            }, []),
            c = r.useCallback(() => {
                t((e) => u(l({}, e), { ignoredFilenames: [] }));
            }, []);
        return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: s,
            clearIgnoredFilenames: c,
            processAndUpsertAssets: a,
        };
    };
