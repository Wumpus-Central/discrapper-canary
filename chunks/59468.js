l.d(t, { t: () => o }), l(301563), l(47120), l(518263), l(970173), l(520712), l(268111), l(941497), l(32026), l(480839), l(744285), l(492257), l(873817), l(610885), l(126298), l(863942), l(866573), l(642549), l(787622);
var r = l(788900),
    i = l(268146),
    s = l(141038),
    n = l(131951),
    a = l(830461),
    c = l(388032);
async function o(e) {
    let { width: t, height: l } = e,
        o = n.Z.getVideoDevices(),
        d = (0, s.Z)(n.Z.getMediaEngine(), [i.vA.WINDOW, i.vA.SCREEN], {
            width: t,
            height: l
        }),
        f = (0, a._)(),
        u = await f,
        h = await d,
        x = h
            .filter((e) => e.id.startsWith(i.vA.SCREEN))
            .map((e) => {
                var t, l;
                let r = e.name;
                return (
                    'Entire screen' === r ? (r = c.NW.string(c.t.R4wpLC)) : /^Screen \d+$/.test(r) && (r = c.NW.formatToPlainString(c.t['y/R7n5'], { index: parseInt(r.split(' ')[1]) })),
                    (t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var l = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(l);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(l).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = l[t]),
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
                    (l = l = { name: r }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var l = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  l.push.apply(l, r);
                              }
                              return l;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    t
                );
            }),
        p = (function (e, t) {
            let l = {};
            return (
                t.forEach((e) => {
                    l[e.id] = e;
                }),
                e.forEach((e) => {
                    l[e.id] = e;
                }),
                Object.values(l)
            );
        })(
            h.filter((e) => e.id.startsWith(i.vA.WINDOW)),
            u
        ),
        j = ['GQgGHISKZ5aYqYeYhX9isDUHGw', 'bAgKFITWhoVvmHVRuokCdjVQaA', 'XAgGDIJ/ipadd3iCiYUcWpCZBA', 'HRkGDIT5aXRneomGdlvUawB7qA', 'I9gNDISmlqqPmHiKd3isTp/5lg', 'XxgGBIIwT2ZGpneUeZev6fWLXQ', 'KzsKNIZDeYmfd3ihe1bXfr8Jxg', 'J9cRDIJ6iHd/d4h4eIUJf5LyRw', 'DggKFIQwtndKe3hVfXnAWQmddQ', 'WggKDILeh3ePZpd6l4jln1b5SQ', '4PgJJIJVl3eAaod2iJeHj7tE8Q'];
    return {
        windowSources: p,
        screenSources: x,
        cameraSources: Object.entries(o)
            .filter((e) => {
                let [t, l] = e;
                return !l.disabled;
            })
            .map((e, t) => {
                let [l, i] = e,
                    s = j[t % j.length],
                    n = Uint8Array.from(atob(s), (e) => e.charCodeAt(0)),
                    a = (0, r.xS)(n);
                return {
                    id: 'camera:' + i.id,
                    name: i.name,
                    url: a
                };
            })
    };
}
