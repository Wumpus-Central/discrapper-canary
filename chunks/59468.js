n.d(t, { t: () => d }), n(35282), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733), n(608445), n(853839), n(570086), n(479048);
var r = n(788900),
    l = n(268146),
    i = n(141038),
    s = n(131951),
    a = n(830461),
    o = n(388032);
let c = ['GQgGHISKZ5aYqYeYhX9isDUHGw', 'bAgKFITWhoVvmHVRuokCdjVQaA', 'XAgGDIJ/ipadd3iCiYUcWpCZBA', 'HRkGDIT5aXRneomGdlvUawB7qA', 'I9gNDISmlqqPmHiKd3isTp/5lg', 'XxgGBIIwT2ZGpneUeZev6fWLXQ', 'KzsKNIZDeYmfd3ihe1bXfr8Jxg', 'J9cRDIJ6iHd/d4h4eIUJf5LyRw', 'DggKFIQwtndKe3hVfXnAWQmddQ', 'WggKDILeh3ePZpd6l4jln1b5SQ', '4PgJJIJVl3eAaod2iJeHj7tE8Q'];
async function d(e) {
    let { width: t, height: n, types: d = [l.vA.CAMERA, l.vA.SCREEN, l.vA.WINDOW] } = e,
        u = s.Z.getVideoDevices(),
        f = (0, i.Z)(s.Z.getMediaEngine(), d, {
            width: t,
            height: n
        }),
        m = (0, a._)(),
        h = await m,
        x = await f,
        p = x
            .filter((e) => e.id.startsWith(l.vA.SCREEN))
            .map((e) => {
                var t, n;
                let r = e.name;
                return (
                    'Entire screen' === r ? (r = o.intl.string(o.t.R4wpLC)) : /^Screen \d+$/.test(r) && (r = o.intl.formatToPlainString(o.t['y/R7n5'], { index: parseInt(r.split(' ')[1]) })),
                    (t = (function (e) {
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
                    })({}, e)),
                    (n = n = { name: r }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t
                );
            }),
        g = (function (e, t) {
            let n = {};
            return (
                t.forEach((e) => {
                    n[e.id] = e;
                }),
                e.forEach((e) => {
                    n[e.id] = e;
                }),
                Object.values(n)
            );
        })(
            x.filter((e) => e.id.startsWith(l.vA.WINDOW)),
            h
        ),
        _ = [];
    return (
        d.includes(l.vA.CAMERA) &&
            (_ = Object.entries(u)
                .filter((e) => {
                    let [t, n] = e;
                    return !n.disabled;
                })
                .map((e, t) => {
                    let [n, l] = e,
                        i = c[t % c.length],
                        s = Uint8Array.from(atob(i), (e) => e.charCodeAt(0)),
                        a = (0, r.xS)(s);
                    return {
                        id: 'camera:' + l.id,
                        name: l.name,
                        url: a
                    };
                })),
        {
            windowSources: g,
            screenSources: p,
            cameraSources: _
        }
    );
}
