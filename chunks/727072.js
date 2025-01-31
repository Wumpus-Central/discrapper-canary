n.d(t, {
    I2: () => A,
    RD: () => _,
    mY: () => S,
    pH: () => R
}),
    n(653041),
    n(47120),
    n(724458);
var r = n(192379),
    l = n(232713),
    i = n(65400),
    a = n(731965),
    u = n(881052),
    o = n(36459),
    s = n(866894),
    E = n(273504),
    c = n(981631);
let d = {},
    f = (e) => {
        let t = {
            [E.fX.KEYWORD]: [],
            [E.fX.ML_SPAM]: [],
            [E.fX.DEFAULT_KEYWORD_LIST]: [],
            [E.fX.MENTION_SPAM]: [],
            [E.fX.USER_PROFILE]: [],
            [E.fX.SERVER_POLICY]: []
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
    g = (0, i.F)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            var r, l;
            let { guildId: i, id: u, triggerType: o } = n,
                { rules: E } = t(),
                c = null !== (r = E[i]) && void 0 !== r ? r : {},
                d = null !== (l = c[o]) && void 0 !== l ? l : [],
                f = d.some((e) => e.id === u),
                g = d.filter((e) => !(0, s.U)(e.id) || e.triggerType !== o),
                S = f ? g.map((e) => (e.id === u ? n : e)) : [...g, n];
            (0, a.j)(() => {
                e({
                    rules: {
                        ...E,
                        [i]: {
                            ...c,
                            [o]: S
                        }
                    },
                    error: null
                });
            });
        },
        removeRule: (n, r) => {
            let { rules: l } = t(),
                i = l[r],
                u = Object.keys(i).reduce((e, t) => {
                    var r;
                    let l = Number(t),
                        a = null !== (r = i[l]) && void 0 !== r ? r : [];
                    return (e[l] = a.filter((e) => e.id !== n)), e;
                }, i);
            (0, a.j)(() => {
                e({
                    rules: {
                        ...l,
                        [r]: u
                    },
                    error: null
                });
            });
        },
        syncRules: async (n) => {
            if (
                (function (e) {
                    var t;
                    let n = Date.now();
                    return n - (null !== (t = d[e]) && void 0 !== t ? t : 0) > 20000;
                })(n)
            ) {
                d[n] = Date.now();
                try {
                    let r = await (0, o.$Y)(n),
                        l = f(r),
                        i = t().rules;
                    (0, a.j)(() => {
                        e({
                            rules: {
                                ...i,
                                [n]: l
                            },
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
    S = (e, t) => {
        var n, r;
        return (null !== (r = null === (n = g.getState().rules[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : []).length;
    };
function A(e) {
    let [t, n] = r.useState(!1),
        [i, a] = g((e) => [e.syncRules, e.fetching], l.X);
    return [
        t,
        r.useCallback(async () => {
            if (!a && null != e)
                try {
                    n(!0), await i(e);
                } finally {
                    n(!1);
                }
        }, [e, a, i])
    ];
}
function _(e) {
    let [t, n] = A(e);
    return (
        r.useEffect(() => {
            (async () => {
                await n();
            })();
        }, [e, n]),
        [t, n]
    );
}
function R(e) {
    return g((t) => {
        var n;
        return {
            rulesByTriggerType: null !== (n = t.rules[null != e ? e : c.lds]) && void 0 !== n ? n : {},
            updateRule: t.updateRule,
            removeRule: t.removeRule
        };
    }, l.X);
}
