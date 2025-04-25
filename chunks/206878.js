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
    h = {
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
    p = async (e) => {
        let t = Object.values(r.CM),
            n = new Set(),
            a = e.createReader();
        for (let e of await new Promise((e) => a.readEntries(e))) e.isDirectory && t.includes(e.name) && n.add(e.name);
        return t.filter((e) => !n.has(e));
    },
    b = (e) => {
        let { files: t, addWarning: n } = e;
        t.ignoredFilenames.length > 0 && n('Contains unrecognized files', t.ignoredFilenames);
    },
    f = (e) => {
        let { names: t, addError: n } = e,
            a = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
            r = t.filter((e) => !a.test(e));
        r.length > 0 && n('File names must be in lowercase snake case', r);
    },
    v = (e, t, n, a) => {
        let r = t.size,
            l = r > 1000000 ? ''.concat((r / 1000000).toFixed(2), 'MB') : ''.concat((r / 1000).toFixed(2), 'KB'),
            i = ''.concat(t.name, ' - ').concat(l);
        if (r > e.max) {
            let t = e.max > 1000000 ? ''.concat(Math.round(e.max / 1000000), 'MB') : ''.concat(Math.round(e.max / 1000), 'KB');
            n('Files exceed the recommended size limit - make sure they are optimized!', [''.concat(i, ' (max: ').concat(t, ')')]);
        } else r > e.warn && a("Files are a tad chonky - are you sure they're optimized?", [''.concat(i)]);
    },
    j = (e, t, n, a) => {
        let r = h[e];
        if (null != r) for (let e of t) e.name.endsWith('.txt') || v(r, e, n, a);
    },
    g = (e, t, n) => {
        for (let a of e) {
            let e = (0, r.BU)(a),
                l = null != e ? h[e] : null;
            null != l && v(l, a, t, n);
        }
    },
    _ = (e) => {
        let { files: t, addError: n, addWarning: a } = e;
        g(t.collectionFiles, n, a),
            f({
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
    y = (e) => {
        let { files: t, addError: n, addWarning: a } = e;
        f({
            names: Object.keys(t.profileEffectFilesMap),
            addError: n
        }),
            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                let [t, l] = e,
                    i = l.map((e) => e.name);
                f({
                    names: i.map((e) => {
                        let t = e.indexOf('-');
                        return e.substring(0, t > 0 ? t : e.length);
                    }),
                    addError: n
                }),
                    j(r.aB.PROFILE_EFFECT, l, n, a);
                let s = o.filter((e) => !i.some((t) => t.startsWith(e) && t.endsWith('.png'))).map((e) => ''.concat(t, '/').concat(e));
                s.length > 0 && n('Missing required PFX files with prefix', s), i.some((e) => e.endsWith('.txt')) || n('PFX configs required - please include both exports! (exception: duplicate variant configs are optional)', [t]);
                let c = i.filter((e) => !o.some((t) => e.startsWith(t)) && !e.endsWith('.txt')).map((e) => ''.concat(t, '/').concat(e));
                c.length > 0 && a('Contains unrecognized files', c);
            });
    },
    O = (e) => {
        let { files: t, addError: n, addWarning: a } = e;
        f({
            names: t.avatarDecorationFiles.map((e) => e.name),
            addError: n
        }),
            j(r.aB.AVATAR_DECORATION, t.avatarDecorationFiles, n, a);
    },
    C = (e, t, n) => {
        _({
            files: e,
            addError: n,
            addWarning: t
        }),
            y({
                files: e,
                addError: n,
                addWarning: t
            }),
            O({
                files: e,
                addError: n,
                addWarning: t
            }),
            b({
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
                        let n = await p(t);
                        if (n.length > 0) return void d('Missing required directories', n);
                        let a = await (0, r.LY)([t]);
                        C(a, u, d);
                    } finally {
                        t(!0);
                    }
                },
                [d, u]
            ),
            reset: m
        };
    };
