n.d(t, {
    Eo: () => p,
    Fr: () => d,
    KI: () => A,
    Kj: () => f,
    Kr: () => g,
    XA: () => h
}),
    n(388685),
    n(539854),
    n(472816),
    n(794429),
    n(642613);
var r = n(192379),
    i = n(481060),
    o = n(406432),
    a = n(619899);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
    return (e.SHOP_ALL_BANNER_STATIC = 'shop_all_banner'), (e.SHOP_ALL_BANNER_ANIMATED = 'shop_all_banner_animated'), (e.HERO_BANNER_STATIC = 'hero_banner'), (e.HERO_BANNER_ANIMATED = 'hero_banner_animated'), (e.HERO_LOGO = 'hero_logo'), (e.FEATURED_BLOCK = 'featured_block'), (e.UPSELL_BANNER = 'upsell_banner'), (e.UPSELL_BANNER_POPOUT = 'upsell_popout'), (e.PDP_BACKGROUND = 'pdp_bg'), (e.PDP_LOGO = 'pdp_logo'), (e.COLLECTED_MODAL_BG = 'collected_modal_bg'), (e.SHOP_BUTTON_BG_HOVER = 'shop_button_bg_hover'), (e.SHOP_BUTTON_BG_HOVER_DARK = 'shop_button_bg_hover_dark'), (e.SHOP_BUTTON_BG_HOVER_LIGHT = 'shop_button_bg_hover_light'), (e.SHOP_BUTTON_BG_RESTING = 'shop_button_bg_resting'), (e.SHOP_BUTTON_BG_RESTING_DARK = 'shop_button_bg_resting_dark'), (e.SHOP_BUTTON_BG_RESTING_LIGHT = 'shop_button_bg_resting_light'), (e.COACHTIP_AVATAR = 'coachtip_avatar'), (e.AVATAR_DECORATION = 'avatar_decoration'), e;
})({});
let f = {
        'shop_all_banner.jpg': 'shop_all_banner',
        'shop_all_banner_animated.webm': 'shop_all_banner_animated',
        'hero_banner.jpg': 'hero_banner',
        'hero_banner_animated.webm': 'hero_banner_animated',
        'hero_logo.png': 'hero_logo',
        'featured_block.png': 'featured_block',
        'upsell_banner.jpg': 'upsell_banner',
        'upsell_banner_popout.png': 'upsell_popout',
        'pdp_bg.jpg': 'pdp_bg',
        'pdp_logo.png': 'pdp_logo',
        'collected_modal_bg.jpg': 'collected_modal_bg',
        'shop_button_bg_hover.png': 'shop_button_bg_hover',
        'shop_button_bg_hover_dark.png': 'shop_button_bg_hover_dark',
        'shop_button_bg_hover_light.png': 'shop_button_bg_hover_light',
        'shop_button_bg_resting.png': 'shop_button_bg_resting',
        'shop_button_bg_resting_dark.png': 'shop_button_bg_resting_dark',
        'shop_button_bg_resting_light.png': 'shop_button_bg_resting_light',
        'coachtip_avatar.png': 'coachtip_avatar'
    },
    _ = '.DS_Store',
    p = (e) => {
        (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE));
    },
    h = (e) => {
        (0, i.showToast)((0, i.createToast)(e, i.ToastType.SUCCESS));
    },
    m = (e, t) => {
        let n = new FileReader();
        (n.onload = (n) => {
            if (null == n.target || 'string' != typeof n.target.result) return void p('Error uploading file. Try again!');
            t(e, n.target.result);
        }),
            n.readAsDataURL(e);
    },
    g = (e, t, n) => {
        if (0 === e.length) {
            null == n || n('No files found!');
            return;
        }
        for (let n of e) m(n, t);
    },
    E = (e, t) => ''.concat(e, '/').concat(t),
    b = (e) => (0, o.tw)(e.type) || (0, o.X2)(e.type),
    y = (e) => {
        var t;
        return null != (t = f[e.name]) ? t : null;
    },
    v = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = e,
                r = await new Promise((e) => n.file(e));
            r.name !== _ && t.push(r);
        } else if (e.isDirectory) {
            let n = e.createReader(),
                r = await new Promise((e) => n.readEntries(e)),
                i = await Promise.all(r.map((e) => v(e)));
            t.push(...i.flat());
        }
        return t;
    },
    O = (e, t, n) => {
        if (e.name !== _) {
            if (!b(e)) return void n.ignoredFilenames.push(e.name);
            'collection' === t || null === t ? (e.name in f ? n.collectionFiles.push(e) : n.ignoredFilenames.push(e.name)) : 'avatar_decorations' === t ? n.avatarDecorationFiles.push(e) : n.ignoredFilenames.push(e.name);
        }
    },
    I = async (e, t, n) => {
        let r = e.createReader();
        for (let e of await new Promise((e) => r.readEntries(e)))
            if (e.isFile) {
                let r = e;
                O(await new Promise((e) => r.file(e)), t, n);
            } else {
                let t = await v(e);
                n.ignoredFilenames.push(...t.map((t) => E(e.name, t.name)));
            }
    },
    S = async (e, t) => {
        let n = e.createReader();
        for (let r of await new Promise((e) => n.readEntries(e)))
            if (r.isDirectory) {
                let e = r;
                await I(e, 'profile_effects', t);
            } else r.isFile && r.name !== _ && t.ignoredFilenames.push(E(e.name, r.name));
    },
    T = async (e, t) => {
        let n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e)))
            if (e.isDirectory) {
                let n = e;
                if ('collection' === n.name) await I(n, 'collection', t);
                else if ('avatar_decorations' === n.name) await I(n, 'avatar_decorations', t);
                else if ('profile_effects' === n.name) await S(n, t);
                else {
                    let e = await v(n);
                    t.ignoredFilenames.push(...e.map((e) => E(n.name, e.name)));
                }
            }
    },
    N = async (e) => {
        let t = {
            collectionFiles: [],
            avatarDecorationFiles: [],
            ignoredFilenames: []
        };
        for (let n of e)
            if (n.isDirectory) {
                let e = n,
                    r = e.name;
                'collection' === r || 'avatar_decorations' === r ? await I(e, r, t) : 'profile_effects' === r ? await S(e, t) : await T(e, t);
            } else if (n.isFile) {
                let e = n;
                O(await new Promise((t) => e.file(t)), null, t);
            }
        return t.collectionFiles.sort((e, t) => e.name.localeCompare(t.name)), t.avatarDecorationFiles.sort((e, t) => e.name.localeCompare(t.name)), t.ignoredFilenames.sort((e, t) => e.localeCompare(t)), t;
    },
    A = () => {
        let [e, t] = r.useState(() => ({
                collectionFiles: [],
                avatarDecorationFiles: [],
                ignoredFilenames: []
            })),
            { upsertCollectionAsset: n, upsertAvatarDecorationAsset: i } = (0, a.N9)(),
            o = r.useCallback(
                async (e) => {
                    let r = await N(e);
                    t(r),
                        (0 !== r.collectionFiles.length || 0 !== r.avatarDecorationFiles.length) &&
                            (r.collectionFiles.forEach((e) => {
                                m(e, (e) => {
                                    let t = y(e);
                                    null != t && n(t, e);
                                });
                            }),
                            r.avatarDecorationFiles.forEach((e) => {
                                m(e, (e) => {
                                    i(e);
                                });
                            }));
                },
                [n, i]
            ),
            s = r.useCallback(() => {
                t((e) =>
                    u(l({}, e), {
                        collectionFiles: [],
                        avatarDecorationFiles: []
                    })
                );
            }, []),
            c = r.useCallback(() => {
                t((e) => u(l({}, e), { ignoredFilenames: [] }));
            }, []);
        return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: s,
            clearIgnoredFilenames: c,
            processAndUpsertAssets: o
        };
    };
