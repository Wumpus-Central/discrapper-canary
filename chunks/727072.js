n.d(t, {
    I2: () => N,
    RD: () => p,
    mY: () => j,
    pH: () => A
}),
    n(653041),
    n(47120);
var r = n(192379),
    i = n(232713),
    l = n(65400),
    a = n(731965),
    u = n(881052),
    o = n(36459),
    s = n(866894),
    c = n(273504),
    f = n(981631);
function E(e) {
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
function d(e, t) {
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
let g = {},
    S = (e) => {
        let t = {
            [c.fX.KEYWORD]: [],
            [c.fX.ML_SPAM]: [],
            [c.fX.DEFAULT_KEYWORD_LIST]: [],
            [c.fX.MENTION_SPAM]: [],
            [c.fX.USER_PROFILE]: [],
            [c.fX.SERVER_POLICY]: []
        };
        return (
            e.forEach((e) => {
                var n;
                let { triggerType: r } = e;
                null === (n = t[r]) || void 0 === n || n.push(e);
            }),
            t
        );
    },
    O = (0, l.F)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            var r, i;
            let { guildId: l, id: u, triggerType: o } = n,
                { rules: c } = t(),
                f = null !== (r = c[l]) && void 0 !== r ? r : {},
                g = null !== (i = f[o]) && void 0 !== i ? i : [],
                S = g.some((e) => e.id === u),
                O = g.filter((e) => !(0, s.U)(e.id) || e.triggerType !== o),
                j = S ? O.map((e) => (e.id === u ? n : e)) : [...O, n];
            (0, a.j)(() => {
                e({
                    rules: d(E({}, c), { [l]: d(E({}, f), { [o]: j }) }),
                    error: null
                });
            });
        },
        removeRule: (n, r) => {
            let { rules: i } = t(),
                l = i[r],
                u = Object.keys(l).reduce((e, t) => {
                    var r;
                    let i = Number(t),
                        a = null !== (r = l[i]) && void 0 !== r ? r : [];
                    return (e[i] = a.filter((e) => e.id !== n)), e;
                }, l);
            (0, a.j)(() => {
                e({
                    rules: d(E({}, i), { [r]: u }),
                    error: null
                });
            });
        },
        syncRules: async (n) => {
            if (
                (function (e) {
                    var t;
                    let n = Date.now();
                    return n - (null !== (t = g[e]) && void 0 !== t ? t : 0) > 20000;
                })(n)
            ) {
                g[n] = Date.now();
                try {
                    let r = await (0, o.$Y)(n),
                        i = S(r),
                        l = t().rules;
                    (0, a.j)(() => {
                        e({
                            rules: d(E({}, l), { [n]: i }),
                            error: null
                        });
                    });
                } catch (n) {
                    let t = new u.Hx(n);
                    (0, a.j)(() => {
                        e({ error: t });
                    });
                }
            }
        }
    })),
    j = (e, t) => {
        var n, r;
        return (null !== (r = null === (n = O.getState().rules[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : []).length;
    };
function N(e) {
    let [t, n] = r.useState(!1),
        [l, a] = O((e) => [e.syncRules, e.fetching], i.X);
    return [
        t,
        r.useCallback(async () => {
            if (!a && null != e)
                try {
                    n(!0), await l(e);
                } finally {
                    n(!1);
                }
        }, [e, a, l])
    ];
}
function p(e) {
    let [t, n] = N(e);
    return (
        r.useEffect(() => {
            (async () => {
                await n();
            })();
        }, [e, n]),
        [t, n]
    );
}
function A(e) {
    return O((t) => {
        var n;
        return {
            rulesByTriggerType: null !== (n = t.rules[null != e ? e : f.lds]) && void 0 !== n ? n : {},
            updateRule: t.updateRule,
            removeRule: t.removeRule
        };
    }, i.X);
}
