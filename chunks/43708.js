n.d(t, {
    ZK: () => y,
    pF: () => b,
    wu: () => E,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(321073);
var r,
    i = n(64700),
    a = n(942381),
    s = n(265690),
    o = n(121894),
    l = n(506774),
    c = n(397927),
    u = n(14752);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = "__DEBUG_PROFILE_EFFECTS_STORE",
    m = { profileEffects: null != (r = l.w.get(h)) ? r : {} },
    g = (e) => {
        try {
            l.w.set(h, e.profileEffects);
        } catch (e) {
            console.error(e),
                (0, c.showToast)(
                    (0, c.createToast)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        c.ToastType.FAILURE,
                    ),
                );
        }
    },
    E = (0, s.h)((e) =>
        _(f({}, m), {
            upsertConfig: (t) =>
                (0, o.r)(() => {
                    e((e) => {
                        let n = f({}, e);
                        return (n.profileEffects[t.skuId] = t), g(n), n;
                    });
                }),
            deleteConfig: (t) =>
                (0, o.r)(() => {
                    e((e) => {
                        let n = f({}, e);
                        return delete n.profileEffects[t], g(n), n;
                    });
                }),
            clearAll: () =>
                (0, o.r)(() => {
                    e(() => (l.w.remove(h), { profileEffects: {} }));
                }),
        }),
    ),
    b = () =>
        E((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, a.x),
    y = (e) => {
        let t = E((t) => (null != e ? t.profileEffects[e] : null)),
            n = i.useRef([]);
        return (
            i.useEffect(
                () => () => {
                    n.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (n.current = []);
                },
                [],
            ),
            i.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, u.fB)(e);
                        return n.current.push(t), t;
                    },
                    r = t.config.stillFrames,
                    i = null != r ? f({}, r) : {};
                for (let t in i) {
                    let n = i[t];
                    null != n && (i[t] = _(f({}, n), { src: e(n.base64) }));
                }
                return _(f({}, t), { config: _(f({}, t.config), { stillFrames: i }) });
            }, [t])
        );
    };
