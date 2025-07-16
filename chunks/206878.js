(a.d(t, { g: () => O }), a(388685), a(35282));
var n = a(73800),
    r = a(281598);
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function i(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
let s = new Set([r.jE.SHOP_ALL_BANNER_STATIC, r.jE.HERO_BANNER_STATIC, r.jE.HERO_LOGO, r.jE.PDP_BACKGROUND, r.jE.PDP_LOGO, r.jE.COLLECTED_MODAL_BG, r.jE.MOBILE_BANNER, r.jE.MOBILE_BACKGROUND]),
    o = ['intro', 'idle', 'reduced_motion', 'static', 'thumbnail'],
    c = {
        max: 5000000,
        warn: 2000000
    },
    d = {
        max: 3000000,
        warn: 1000000
    },
    u = {
        max: 2000000,
        warn: 1000000
    },
    m = {
        max: 1000000,
        warn: 500000
    },
    x = {
        max: 250000,
        warn: 50000
    },
    p = {
        [r.aB.PROFILE_EFFECT]: c,
        [r.aB.AVATAR_DECORATION]: d,
        [r.jE.HERO_BANNER_ANIMATED]: c,
        [r.jE.SHOP_ALL_BANNER_ANIMATED]: c,
        [r.jE.SHOP_BUTTON_BG_HOVER]: d,
        [r.jE.SHOP_BUTTON_BG_HOVER_DARK]: d,
        [r.jE.SHOP_BUTTON_BG_HOVER_LIGHT]: d,
        [r.jE.SHOP_BUTTON_BG_RESTING]: d,
        [r.jE.SHOP_BUTTON_BG_RESTING_DARK]: d,
        [r.jE.SHOP_BUTTON_BG_RESTING_LIGHT]: d,
        [r.jE.HERO_BANNER_STATIC]: u,
        [r.jE.SHOP_ALL_BANNER_STATIC]: u,
        [r.jE.UPSELL_BANNER]: m,
        [r.jE.UPSELL_BANNER_POPOUT]: x,
        [r.jE.MOBILE_BANNER]: m,
        [r.jE.MOBILE_BACKGROUND]: x,
        [r.jE.PDP_BACKGROUND]: x,
        [r.jE.PDP_LOGO]: x,
        [r.jE.COLLECTED_MODAL_BG]: x,
        [r.jE.COACHTIP_AVATAR]: x
    },
    h = async (e) => {
        let t = Object.values(r.CM),
            a = new Set(),
            n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e))) e.isDirectory && t.includes(e.name) && a.add(e.name);
        return t.filter((e) => !a.has(e));
    },
    b = (e) => {
        let { files: t, addWarning: a } = e;
        t.ignoredFilenames.length > 0 && a('Contains unrecognized files', t.ignoredFilenames);
    },
    f = (e) => {
        let { names: t, addError: a } = e,
            n = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
            r = t.filter((e) => !n.test(e));
        r.length > 0 && a('File names must be in lowercase snake case', r);
    },
    v = (e, t, a, n) => {
        let r = t.size,
            l = r > 1000000 ? ''.concat((r / 1000000).toFixed(2), 'MB') : ''.concat((r / 1000).toFixed(2), 'KB'),
            i = ''.concat(t.name, ' - ').concat(l);
        if (r > e.max) {
            let t = e.max > 1000000 ? ''.concat(Math.round(e.max / 1000000), 'MB') : ''.concat(Math.round(e.max / 1000), 'KB');
            a('Files exceed the recommended size limit - make sure they are optimized!', [''.concat(i, ' (max: ').concat(t, ')')]);
        } else r > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [''.concat(i)]);
    },
    j = (e, t, a, n) => {
        let r = p[e];
        if (null != r) for (let e of t) e.name.endsWith('.txt') || v(r, e, a, n);
    },
    g = (e, t, a) => {
        for (let n of e) {
            let e = (0, r.BU)(n),
                l = null != e ? p[e] : null;
            null != l && v(l, n, t, a);
        }
    },
    _ = (e) => {
        let { files: t, addError: a, addWarning: n } = e;
        (g(t.collectionFiles, a, n),
            f({
                names: t.collectionFiles.map((e) => e.name),
                addError: a
            }));
        let l = new Set(t.collectionFiles.map((e) => e.name)),
            i = Array.from(s).filter((e) => !l.has(e));
        i.length > 0 && a('Missing required files', i);
        let o = Object.values(r.jE)
            .filter((e) => !s.has(e))
            .filter((e) => !l.has(e));
        o.length > 0 && n('Missing optional assets', o);
    },
    y = (e) => {
        let { files: t, addError: a, addWarning: n } = e;
        (f({
            names: Object.keys(t.profileEffectFilesMap),
            addError: a
        }),
            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                let [t, l] = e,
                    i = l.map((e) => e.name);
                (f({
                    names: i.map((e) => {
                        let t = e.indexOf('-');
                        return e.substring(0, t > 0 ? t : e.length);
                    }),
                    addError: a
                }),
                    j(r.aB.PROFILE_EFFECT, l, a, n));
                let s = o.filter((e) => !i.some((t) => t.startsWith(e) && t.endsWith('.png'))).map((e) => ''.concat(t, '/').concat(e));
                (s.length > 0 && a('Missing required PFX files with prefix', s), i.some((e) => e.endsWith('.txt')) || a('PFX configs required - please include both exports! (exception: duplicate variant configs are optional)', [t]));
                let c = i.filter((e) => !o.some((t) => e.startsWith(t)) && !e.endsWith('.txt')).map((e) => ''.concat(t, '/').concat(e));
                c.length > 0 && n('Contains unrecognized files', c);
            }));
    },
    C = (e) => {
        let { files: t, addError: a, addWarning: n } = e;
        (f({
            names: t.avatarDecorationFiles.map((e) => e.name),
            addError: a
        }),
            j(r.aB.AVATAR_DECORATION, t.avatarDecorationFiles, a, n));
    },
    N = (e, t, a) => {
        (_({
            files: e,
            addError: a,
            addWarning: t
        }),
            y({
                files: e,
                addError: a,
                addWarning: t
            }),
            C({
                files: e,
                addError: a,
                addWarning: t
            }),
            b({
                files: e,
                addError: a,
                addWarning: t
            }));
    },
    O = () => {
        let [e, t] = n.useState(!1),
            [a, s] = n.useState({}),
            [o, c] = n.useState({}),
            d = n.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                c((a) => {
                    var n;
                    let r = null != (n = a[e]) ? n : [];
                    return i(l({}, a), {
                        [e]: [...r, ...t]
                    });
                });
            }, []),
            u = n.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                s((a) => {
                    var n;
                    let r = null != (n = a[e]) ? n : [];
                    return i(l({}, a), {
                        [e]: [...r, ...t]
                    });
                });
            }, []),
            m = n.useCallback(() => {
                (t(!1), c({}), s({}));
            }, []);
        return {
            validationComplete: e,
            errors: o,
            warnings: a,
            validateShopAssetPackage: n.useCallback(
                async (e) => {
                    try {
                        if (0 === e.length) return void d('No files found');
                        if (e.length > 1) return void d('Uploaded multiple files. Expected 1 directory.');
                        let t = e[0];
                        if (!t.isDirectory) return void d('Uploaded a file. Expected a directory.');
                        let a = await h(t);
                        if (a.length > 0) return void d('Missing required directories', a);
                        let n = await (0, r.LY)([t]);
                        N(n, u, d);
                    } finally {
                        t(!0);
                    }
                },
                [d, u]
            ),
            reset: m
        };
    };
