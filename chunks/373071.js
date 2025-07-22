(n.d(t, {
    lb: () => E,
    mr: () => b,
    n6: () => g
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(539854));
var r,
    i = n(73800),
    a = n(94171),
    o = n(362383),
    s = n(731965),
    l = n(433517),
    c = n(489495);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = '__DEBUG_PROFILE_EFFECTS_STORE',
    h = { profileEffects: null != (r = l.K.get(p)) ? r : {} },
    m = (e) => {
        l.K.set(p, e.profileEffects);
    },
    g = (0, o.F)((e) =>
        f(d({}, h), {
            upsertConfig: (t) =>
                (0, s.j)(() => {
                    e((e) => {
                        let n = d({}, e);
                        return ((n.profileEffects[t.id] = t), m(n), n);
                    });
                }),
            deleteConfig: (t) =>
                (0, s.j)(() => {
                    e((e) => {
                        let n = d({}, e);
                        return (delete n.profileEffects[t], m(n), n);
                    });
                })
        })
    ),
    E = () =>
        g((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, a.X),
    b = (e) => {
        let t = g((t) => (null != e ? t.profileEffects[e] : null)),
            n = i.useRef([]);
        return (
            i.useEffect(
                () => () => {
                    (n.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (n.current = []));
                },
                []
            ),
            i.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, c.$j)(e);
                        return (n.current.push(t), t);
                    },
                    r = t.config.effects.map((t) => f(d({}, t), { src: e(t.base64) })),
                    i = t.config.stillFrames,
                    a = null != i ? d({}, i) : {};
                for (let t in a) {
                    let n = a[t];
                    null != n && (a[t] = f(d({}, n), { src: e(n.base64) }));
                }
                return f(d({}, t), {
                    config: f(d({}, t.config), {
                        effects: r,
                        stillFrames: a
                    })
                });
            }, [t])
        );
    };
