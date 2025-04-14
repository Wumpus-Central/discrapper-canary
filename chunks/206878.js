n.d(t, { g: () => S }), n(388685), n(35282);
var r = n(192379),
    a = n(281598);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function i(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let o = new Set([a.jE.SHOP_ALL_BANNER_STATIC, a.jE.HERO_BANNER_STATIC, a.jE.HERO_LOGO, a.jE.PDP_BACKGROUND, a.jE.PDP_LOGO, a.jE.COLLECTED_MODAL_BG, a.jE.MOBILE_BANNER, a.jE.MOBILE_BACKGROUND]),
    s = ['reduced_motion.png', 'static.png', 'thumbnail.png'],
    c = ['intro', 'idle'],
    d = {
        max: 5000000,
        warn: 2000000
    },
    u = {
        max: 3000000,
        warn: 1000000
    },
    m = {
        max: 2000000,
        warn: 1000000
    },
    x = {
        max: 1000000,
        warn: 500000
    },
    h = {
        max: 250000,
        warn: 50000
    },
    p = {
        [a.aB.PROFILE_EFFECT]: d,
        [a.aB.AVATAR_DECORATION]: u,
        [a.jE.HERO_BANNER_ANIMATED]: d,
        [a.jE.SHOP_ALL_BANNER_ANIMATED]: d,
        [a.jE.SHOP_BUTTON_BG_HOVER]: u,
        [a.jE.SHOP_BUTTON_BG_HOVER_DARK]: u,
        [a.jE.SHOP_BUTTON_BG_HOVER_LIGHT]: u,
        [a.jE.SHOP_BUTTON_BG_RESTING]: u,
        [a.jE.SHOP_BUTTON_BG_RESTING_DARK]: u,
        [a.jE.SHOP_BUTTON_BG_RESTING_LIGHT]: u,
        [a.jE.HERO_BANNER_STATIC]: m,
        [a.jE.SHOP_ALL_BANNER_STATIC]: m,
        [a.jE.UPSELL_BANNER]: x,
        [a.jE.UPSELL_BANNER_POPOUT]: h,
        [a.jE.MOBILE_BANNER]: x,
        [a.jE.MOBILE_BACKGROUND]: h,
        [a.jE.PDP_BACKGROUND]: h,
        [a.jE.PDP_LOGO]: h,
        [a.jE.COLLECTED_MODAL_BG]: h,
        [a.jE.COACHTIP_AVATAR]: h
    },
    b = async (e) => {
        let t = Object.values(a.CM),
            n = new Set(),
            r = e.createReader();
        for (let e of await new Promise((e) => r.readEntries(e))) e.isDirectory && t.includes(e.name) && n.add(e.name);
        return t.filter((e) => !n.has(e));
    },
    f = (e) => {
        let { files: t, addWarning: n } = e;
        t.ignoredFilenames.length > 0 && n('Contains unrecognized files', t.ignoredFilenames);
    },
    _ = (e) => {
        let { names: t, addError: n } = e,
            r = /^[a-z]+(_[a-z]+)*(\.[a-z0-9]+)?$/,
            a = t.filter((e) => !r.test(e));
        a.length > 0 && n('File names must be in lowercase snake case', a);
    },
    g = (e, t, n, r) => {
        let a = t.size,
            l = a > 1000000 ? ''.concat((a / 1000000).toFixed(2), 'MB') : ''.concat((a / 1000).toFixed(2), 'KB'),
            i = ''.concat(t.name, ' - ').concat(l);
        if (a > e.max) {
            let t = e.max > 1000000 ? ''.concat(Math.round(e.max / 1000000), 'MB') : ''.concat(Math.round(e.max / 1000), 'KB');
            n('Files exceed the recommended size limit - make sure they are optimized!', [''.concat(i, ' (max: ').concat(t, ')')]);
        } else a > e.warn && r("Files are a tad chonky - are you sure they're optimized?", [''.concat(i)]);
    },
    v = (e, t, n, r) => {
        let a = p[e];
        if (null != a) for (let e of t) e.name.endsWith('.txt') || g(a, e, n, r);
    },
    j = (e, t, n) => {
        for (let r of e) {
            let e = (0, a.BU)(r),
                l = null != e ? p[e] : null;
            null != l && g(l, r, t, n);
        }
    },
    y = (e) => {
        let { files: t, addError: n, addWarning: r } = e;
        j(t.collectionFiles, n, r),
            _({
                names: t.collectionFiles.map((e) => e.name),
                addError: n
            });
        let l = new Set(t.collectionFiles.map((e) => e.name)),
            i = Array.from(o).filter((e) => !l.has(e));
        i.length > 0 && n('Missing required files', i);
        let s = Object.values(a.jE)
            .filter((e) => !o.has(e))
            .filter((e) => !l.has(e));
        s.length > 0 && r('Missing optional assets', s);
    },
    C = (e) => {
        let { files: t, addError: n, addWarning: r } = e;
        _({
            names: Object.keys(t.profileEffectFilesMap),
            addError: n
        }),
            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                let [t, l] = e,
                    i = l.map((e) => e.name);
                _({
                    names: i,
                    addError: n
                }),
                    v(a.aB.PROFILE_EFFECT, l, n, r);
                let o = s.filter((e) => !i.some((t) => t === e)).map((e) => ''.concat(t, ' - ').concat(e));
                o.length > 0 && n('Missing required files', o);
                let d = c.filter((e) => !i.some((t) => t.startsWith(e))).map((e) => ''.concat(t, ' - ').concat(e));
                d.length > 0 && n('Missing required PFX files with prefix', d), i.some((e) => e.endsWith('.txt')) || n('PFX configs required - please include both exports!', [t]);
                let u = i.filter((e) => !s.some((t) => t === e) && !c.some((t) => e.startsWith(t)) && !e.endsWith('.txt')).map((e) => ''.concat(t, '/').concat(e));
                u.length > 0 && r('Contains unrecognized files', u);
            });
    },
    O = (e) => {
        let { files: t, addError: n, addWarning: r } = e;
        _({
            names: t.avatarDecorationFiles.map((e) => e.name),
            addError: n
        }),
            v(a.aB.AVATAR_DECORATION, t.avatarDecorationFiles, n, r);
    },
    N = (e, t, n) => {
        y({
            files: e,
            addError: n,
            addWarning: t
        }),
            C({
                files: e,
                addError: n,
                addWarning: t
            }),
            O({
                files: e,
                addError: n,
                addWarning: t
            }),
            f({
                files: e,
                addError: n,
                addWarning: t
            });
    },
    S = () => {
        let [e, t] = r.useState(!1),
            [n, o] = r.useState({}),
            [s, c] = r.useState({}),
            d = r.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                c((n) => {
                    var r;
                    let a = null != (r = n[e]) ? r : [];
                    return i(l({}, n), {
                        [e]: [...a, ...t]
                    });
                });
            }, []),
            u = r.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                o((n) => {
                    var r;
                    let a = null != (r = n[e]) ? r : [];
                    return i(l({}, n), {
                        [e]: [...a, ...t]
                    });
                });
            }, []),
            m = r.useCallback(() => {
                t(!1), c({}), o({});
            }, []);
        return {
            validationComplete: e,
            errors: s,
            warnings: n,
            validateShopAssetPackage: r.useCallback(
                async (e) => {
                    try {
                        if (0 === e.length) return void d('No files found');
                        if (e.length > 1) return void d('Uploaded multiple files. Expected 1 directory.');
                        let t = e[0];
                        if (!t.isDirectory) return void d('Uploaded a file. Expected a directory.');
                        let n = await b(t);
                        if (n.length > 0) return void d('Missing required directories', n);
                        let r = await (0, a.LY)([t]);
                        N(r, u, d);
                    } finally {
                        t(!0);
                    }
                },
                [d, u]
            ),
            reset: m
        };
    };
