n.d(t, {
    E: () => h,
    m: () => m
}),
    n(47120);
var r,
    i = n(230383),
    o = n(731965),
    a = n(433517),
    s = n(477146);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = '__DEBUG_PROFILE_EFFECTS_STORE',
    _ = { profileEffects: null !== (r = a.K.get(f)) && void 0 !== r ? r : {} },
    p = (e) => {
        a.K.set(f, e.profileEffects);
    },
    h = (0, i.U)((e) =>
        d(c({}, _), {
            upsertConfig: (t) =>
                (0, o.j)(() => {
                    e((e) => {
                        let n = c({}, e);
                        return (n.profileEffects[t.id] = t), p(n), n;
                    });
                }),
            deleteConfig: (t) =>
                (0, o.j)(() => {
                    e((e) => {
                        let n = c({}, e);
                        return delete n.profileEffects[t], p(n), n;
                    });
                })
        })
    ),
    m = (e) => {
        let t = h((t) => (null != e ? t.profileEffects[e] : null));
        if (null == t) return null;
        let n = [...t.config.effects].map((e) => ((e.src = (0, s.$j)(e.base64)), e));
        return d(c({}, t), { config: d(c({}, t.config), { effects: n }) });
    };
