n.d(t, { g: () => E }), n(388685), n(35282);
var a = n(192379),
    r = n(281598);
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
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
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let s = new Set([r.jE.SHOP_ALL_BANNER_STATIC, r.jE.HERO_BANNER_STATIC, r.jE.HERO_LOGO, r.jE.PDP_BACKGROUND, r.jE.PDP_LOGO, r.jE.COLLECTED_MODAL_BG, r.jE.MOBILE_BANNER, r.jE.MOBILE_BACKGROUND]),
    o = ['reduced_motion.png', 'static.png', 'thumbnail.png'],
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
        [r.aB.PROFILE_EFFECT]: d,
        [r.aB.AVATAR_DECORATION]: u,
        [r.jE.HERO_BANNER_ANIMATED]: d,
        [r.jE.SHOP_ALL_BANNER_ANIMATED]: d,
        [r.jE.SHOP_BUTTON_BG_HOVER]: u,
        [r.jE.SHOP_BUTTON_BG_HOVER_DARK]: u,
        [r.jE.SHOP_BUTTON_BG_HOVER_LIGHT]: u,
        [r.jE.SHOP_BUTTON_BG_RESTING]: u,
        [r.jE.SHOP_BUTTON_BG_RESTING_DARK]: u,
        [r.jE.SHOP_BUTTON_BG_RESTING_LIGHT]: u,
        [r.jE.HERO_BANNER_STATIC]: m,
        [r.jE.SHOP_ALL_BANNER_STATIC]: m,
        [r.jE.UPSELL_BANNER]: x,
        [r.jE.UPSELL_BANNER_POPOUT]: h,
        [r.jE.MOBILE_BANNER]: x,
        [r.jE.MOBILE_BACKGROUND]: h,
        [r.jE.PDP_BACKGROUND]: h,
        [r.jE.PDP_LOGO]: h,
        [r.jE.COLLECTED_MODAL_BG]: h,
        [r.jE.COACHTIP_AVATAR]: h
    },
    b = async (e) => {
        let t = Object.values(r.CM),
            n = new Set(),
            a = e.createReader();
        for (let e of await new Promise((e) => a.readEntries(e))) e.isDirectory && t.includes(e.name) && n.add(e.name);
        return t.filter((e) => !n.has(e));
    },
    f = (e) => {
        let { files: t, addWarning: n } = e;
        t.ignoredFilenames.length > 0 && n('Contains unrecognized files', t.ignoredFilenames);
    },
    v = (e) => {
        let { names: t, addError: n } = e,
            a = /^[a-z]+(_[a-z]+)*(\.[a-z0-9]+)?$/,
            r = t.filter((e) => !a.test(e));
        r.length > 0 && n('File names must be in lowercase snake case', r);
    },
    j = (e, t, n, a) => {
        let r = t.size,
            l = r > 1000000 ? ''.concat((r / 1000000).toFixed(2), 'MB') : ''.concat((r / 1000).toFixed(2), 'KB'),
            i = ''.concat(t.name, ' - ').concat(l);
        if (r > e.max) {
            let t = e.max > 1000000 ? ''.concat(Math.round(e.max / 1000000), 'MB') : ''.concat(Math.round(e.max / 1000), 'KB');
            n('Files exceed the recommended size limit - make sure they are optimized!', [''.concat(i, ' (max: ').concat(t, ')')]);
        } else r > e.warn && a("Files are a tad chonky - are you sure they're optimized?", [''.concat(i)]);
    },
    g = (e, t, n, a) => {
        let r = p[e];
        if (null != r) for (let e of t) e.name.endsWith('.txt') || j(r, e, n, a);
    },
    _ = (e, t, n) => {
        for (let a of e) {
            let e = (0, r.BU)(a),
                l = null != e ? p[e] : null;
            null != l && j(l, a, t, n);
        }
    },
    y = (e) => {
        let { files: t, addError: n, addWarning: a } = e;
        _(t.collectionFiles, n, a),
            v({
                names: t.collectionFiles.map((e) => e.name),
                addError: n
            });
        let l = new Set(t.collectionFiles.map((e) => e.name)),
            i = Array.from(s).filter((e) => !l.has(e));
        i.length > 0 && n('Missing required files', i);
        let o = Object.values(r.jE)
            .filter((e) => !s.has(e))
            .filter((e) => !l.has(e));
        o.length > 0 && a('Missing optional assets', o);
    },
    C = (e) => {
        let { files: t, addError: n, addWarning: a } = e;
        v({
            names: Object.keys(t.profileEffectFilesMap),
            addError: n
        }),
            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                let [t, l] = e,
                    i = l.map((e) => e.name);
                v({
                    names: i,
                    addError: n
                }),
                    g(r.aB.PROFILE_EFFECT, l, n, a);
                let s = o.filter((e) => !i.some((t) => t === e)).map((e) => ''.concat(t, ' - ').concat(e));
                s.length > 0 && n('Missing required files', s);
                let d = c.filter((e) => !i.some((t) => t.startsWith(e))).map((e) => ''.concat(t, ' - ').concat(e));
                d.length > 0 && n('Missing required PFX files with prefix', d), i.some((e) => e.endsWith('.txt')) || n('PFX configs required - please include both exports!', [t]);
                let u = i.filter((e) => !o.some((t) => t === e) && !c.some((t) => e.startsWith(t)) && !e.endsWith('.txt')).map((e) => ''.concat(t, '/').concat(e));
                u.length > 0 && a('Contains unrecognized files', u);
            });
    },
    O = (e) => {
        let { files: t, addError: n, addWarning: a } = e;
        v({
            names: t.avatarDecorationFiles.map((e) => e.name),
            addError: n
        }),
            g(r.aB.AVATAR_DECORATION, t.avatarDecorationFiles, n, a);
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
    E = () => {
        let [e, t] = a.useState(!1),
            [n, s] = a.useState({}),
            [o, c] = a.useState({}),
            d = a.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                c((n) => {
                    var a;
                    let r = null != (a = n[e]) ? a : [];
                    return i(l({}, n), {
                        [e]: [...r, ...t]
                    });
                });
            }, []),
            u = a.useCallback(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                s((n) => {
                    var a;
                    let r = null != (a = n[e]) ? a : [];
                    return i(l({}, n), {
                        [e]: [...r, ...t]
                    });
                });
            }, []),
            m = a.useCallback(() => {
                t(!1), c({}), s({});
            }, []);
        return {
            validationComplete: e,
            errors: o,
            warnings: n,
            validateShopAssetPackage: a.useCallback(
                async (e) => {
                    try {
                        if (0 === e.length) return void d('No files found');
                        if (e.length > 1) return void d('Uploaded multiple files. Expected 1 directory.');
                        let t = e[0];
                        if (!t.isDirectory) return void d('Uploaded a file. Expected a directory.');
                        let n = await b(t);
                        if (n.length > 0) return void d('Missing required directories', n);
                        let a = await (0, r.LY)([t]);
                        N(a, u, d);
                    } finally {
                        t(!0);
                    }
                },
                [d, u]
            ),
            reset: m
        };
    };
