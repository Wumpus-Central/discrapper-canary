n.d(t, {
    mr: () => E,
    n6: () => m,
    sg: () => g
}),
    n(47120);
var r,
    i = n(788347),
    o = n(372793),
    a = n(731965),
    s = n(433517),
    l = n(489495);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = '__DEBUG_PROFILE_EFFECTS_STORE',
    p = { profileEffects: null != (r = s.K.get(_)) ? r : {} },
    h = (e) => {
        s.K.set(_, e.profileEffects);
    },
    m = (0, o.F)((e) =>
        f(u({}, p), {
            upsertConfig: (t) =>
                (0, a.j)(() => {
                    e((e) => {
                        let n = u({}, e);
                        return (n.profileEffects[t.id] = t), h(n), n;
                    });
                }),
            deleteConfig: (t) =>
                (0, a.j)(() => {
                    e((e) => {
                        let n = u({}, e);
                        return delete n.profileEffects[t], h(n), n;
                    });
                })
        })
    ),
    g = () =>
        m((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, i.X),
    E = (e) => {
        let t = m((t) => (null != e ? t.profileEffects[e] : null));
        if (null == t) return null;
        let n = [...t.config.effects].map((e) => ((e.src = (0, l.$j)(e.base64)), e));
        return f(u({}, t), { config: f(u({}, t.config), { effects: n }) });
    };
