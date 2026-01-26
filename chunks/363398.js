n.d(t, {
    A: () => h,
}),
    n(896048),
    n(747238);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(442433),
    o = n(627794),
    c = n(928348),
    s = n(53594),
    d = n(979816),
    u = n(268749),
    g = n(239705),
    p = n(264349),
    f = n(997509),
    y = n(652215),
    b = n(411335),
    A = n(985018),
    m = n(300328);

function O(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function v(e, t) {
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
let j = b.uh.KEYWORD;

function h(e, t) {
    let { perGuildMaxCount: n } = s.i$[j],
        { isLoading: h, saveRule: E, errorMessage: S } = (0, u.S)(),
        { createNewEditingRule: _ } = (0, u.U)(),
        [D, P] = i.useState(!1),
        [T, I] = (0, c.H6)(t),
        { rulesByTriggerType: x, updateRule: w } = (0, c.wP)(t),
        M = i.useMemo(() => {
            var e;
            return null != (e = x[j]) ? e : [];
        }, [x]),
        C = 0 === M.length,
        N = n > M.length && !C;
    if (!i.useMemo(() => (0, d.i_)(t), [t]) || null == e || 0 === e.length || null == t) return null;
    let R = e.split(" "),
        G = R.length;
    try {
        (0, o.wk)(R, b.bV);
    } catch (e) {
        return null;
    }
    let L = () => {
            null != t &&
                ((0, a.Z_)(),
                f.A.open(t, y.BEX.GUILD_AUTOMOD),
                setTimeout(() => {
                    _(t, j, {
                        triggerMetadata: {
                            keywordFilter: [e],
                            regexPatterns: [],
                            allowList: [],
                        },
                    });
                }, 400));
        },
        U = async (t) => {
            var n, r;
            if (((0, a.Z_)(), !(await (0, p.Zy)(t.name, e)))) return;
            let i = v(O({}, t), {
                triggerMetadata: v(O({}, t.triggerMetadata), {
                    keywordFilter: [
                        ...(null != (n = null == (r = t.triggerMetadata) ? void 0 : r.keywordFilter) ? n : []),
                        e,
                    ],
                }),
            });
            await E(i, M),
                w(i),
                null != S
                    ? (0, l.showToast)((0, l.createToast)(A.intl.string(A.t.wH6L0r), l.ToastType.FAILURE))
                    : (0, l.showToast)((0, l.createToast)(A.intl.string(A.t["0rdYm2"]), l.ToastType.SUCCESS));
        },
        k = (0, r.jsx)(l.Drp, {
            id: "automod-rules-loading",
            label: A.intl.string(A.t.ZTNur7),
        });
    return (
        T ||
            (k = (0, r.jsxs)(r.Fragment, {
                children: [
                    C &&
                        (0, r.jsx)(l.Drp, {
                            id: "add-first-rule",
                            label: A.intl.string(A.t.f72Zqb),
                            action: L,
                            disabled: h,
                        }),
                    M.map((e) => {
                        let t = (0, s.J6)(j).reduce((t, n) => {
                            let r = e.actions.find((e) => {
                                let { type: t } = e;
                                return n === t;
                            });
                            if (null == r) return t;
                            let i = (0, g.x)(n, r);
                            return t + ", ".concat(null == i ? void 0 : i.headerText);
                        }, "");
                        return (0, r.jsx)(
                            l.iDA,
                            {
                                id: e.id,
                                label: e.name,
                                subtext: (0, r.jsx)(l.Text, {
                                    color: "text-muted",
                                    className: m.XX,
                                    variant: "text-xs/normal",
                                    children: t.slice(2),
                                }),
                                group: "automod-rule-selection",
                                checked: !1,
                                disabled: h,
                                action: () => U(e),
                            },
                            e.id,
                        );
                    }),
                    N &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.bXX, {}),
                                (0, r.jsx)(l.Drp, {
                                    id: "add-another-rule",
                                    label: A.intl.string(A.t["0K5jDE"]),
                                    action: L,
                                    disabled: h,
                                }),
                            ],
                        }),
                ],
            })),
        (0, r.jsx)(l.Drp, {
            id: "guild-automod-add-selection",
            label: A.intl.formatToPlainString(A.t.Kkjv1m, {
                keywordCount: G,
            }),
            leadingAccessory: {
                type: "icon",
                icon: l.lmn,
            },
            onFocus: () => {
                D || (P(!0), I());
            },
            children: k,
        })
    );
}
