(n.d(t, {
    I2: () => v,
    RD: () => I,
    mY: () => O,
    pH: () => T
}),
    n(539854),
    n(388685));
var r = n(73800),
    i = n(94171),
    o = n(362383),
    a = n(731965),
    s = n(881052),
    l = n(36459),
    c = n(866894),
    u = n(273504),
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
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
let m = {},
    g = 20000;
function E(e) {
    var t;
    return Date.now() - (null != (t = m[e]) ? t : 0) > g;
}
let b = (e) => {
        let t = {
            [u.fX.KEYWORD]: [],
            [u.fX.ML_SPAM]: [],
            [u.fX.DEFAULT_KEYWORD_LIST]: [],
            [u.fX.MENTION_SPAM]: [],
            [u.fX.USER_PROFILE]: [],
            [u.fX.SERVER_POLICY]: []
        };
        return (
            e.forEach((e) => {
                var n;
                let { triggerType: r } = e;
                null == (n = t[r]) || n.push(e);
            }),
            t
        );
    },
    y = (0, o.F)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            var r, i;
            let { guildId: o, id: s, triggerType: l } = n,
                { rules: u } = t(),
                d = null != (r = u[o]) ? r : {},
                f = null != (i = d[l]) ? i : [],
                p = f.some((e) => e.id === s),
                m = f.filter((e) => !(0, c.U)(e.id) || e.triggerType !== l),
                g = p ? m.map((e) => (e.id === s ? n : e)) : [...m, n];
            (0, a.j)(() => {
                e({
                    rules: h(_({}, u), { [o]: h(_({}, d), { [l]: g }) }),
                    error: null
                });
            });
        },
        removeRule: (n, r) => {
            let { rules: i } = t(),
                o = i[r],
                s = Object.keys(o).reduce((e, t) => {
                    var r;
                    let i = Number(t),
                        a = null != (r = o[i]) ? r : [];
                    return ((e[i] = a.filter((e) => e.id !== n)), e);
                }, {});
            (0, a.j)(() => {
                e({
                    rules: h(_({}, i), { [r]: s }),
                    error: null
                });
            });
        },
        syncRules: async (n) => {
            if (E(n)) {
                m[n] = Date.now();
                try {
                    let r = await (0, l.$Y)(n),
                        i = b(r),
                        o = t().rules;
                    (0, a.j)(() => {
                        e({
                            rules: h(_({}, o), { [n]: i }),
                            error: null
                        });
                    });
                } catch (n) {
                    let t = new s.Hx(n);
                    (0, a.j)(() => {
                        e({ error: t });
                    });
                }
            }
        }
    })),
    O = (e, t) => {
        var n, r;
        return (null != (r = null == (n = y.getState().rules[e]) ? void 0 : n[t]) ? r : []).length;
    };
function v(e) {
    let [t, n] = r.useState(!1),
        [o, a] = y((e) => [e.syncRules, e.fetching], i.X);
    return [
        t,
        r.useCallback(async () => {
            if (!a && null != e)
                try {
                    (n(!0), await o(e));
                } finally {
                    n(!1);
                }
        }, [e, a, o])
    ];
}
function I(e) {
    let [t, n] = v(e);
    return (
        r.useEffect(() => {
            (async () => {
                await n();
            })();
        }, [e, n]),
        [t, n]
    );
}
function T(e) {
    return y((t) => {
        var n;
        return {
            rulesByTriggerType: null != (n = t.rules[null != e ? e : d.lds]) ? n : {},
            updateRule: t.updateRule,
            removeRule: t.removeRule
        };
    }, i.X);
}
