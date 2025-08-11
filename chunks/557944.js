n.d(t, { default: () => h }), n(35282), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(82659),
    u = n(481060),
    c = n(749210),
    d = n(430824),
    p = n(399860),
    b = n(335049),
    f = n(689079),
    g = n(388032),
    y = n(969957);
function h(e) {
    let {
            editPermissions: t,
            guildId: n,
            hasMemberSearch: l,
            headerText: h,
            onClose: m,
            overwrittenKeys: k,
            search: j,
            searchPlaceholderText: C,
            selectedPermissionCount: v,
            transitionState: E,
        } = e,
        w = (0, a.e7)([d.Z], () => d.Z.getGuild(n), [n]);
    s()(null != w, "");
    let [O, x] = r.useState(null),
        { query: T, results: Z, setQuery: M } = j(n),
        [P, S] = r.useState({}),
        _ = r.useMemo(() => Object.keys(P).length, [P]),
        q = _ + v >= f._n,
        I = r.useMemo(
            () =>
                Z.filter((e) => {
                    let t = (0, p.rE)(e.id, e.type);
                    return !k.includes(t);
                }),
            [k, Z],
        ),
        N = r.useCallback(
            (e, t) => {
                S((n) => {
                    let i = (0, p.rE)(e, t),
                        r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, n);
                    return (
                        i in n
                            ? delete r[i]
                            : q ||
                              (r[i] = {
                                  id: e,
                                  permission: !0,
                                  type: t,
                              }),
                        r
                    );
                });
            },
            [q, S],
        ),
        X = r.useCallback(() => {
            t(P, []), m();
        }, [t, m, P]);
    r.useEffect(() => () => clearTimeout(O), [O]);
    let D = r.useCallback(
            (e) => {
                M(e),
                    l &&
                        x((t) =>
                            (clearTimeout(t), 0 === e.length)
                                ? null
                                : setTimeout(() => {
                                      c.Z.requestMembers(n, e, 200, !1);
                                  }, 500),
                        );
            },
            [n, l, M, x],
        ),
        H = r.useCallback(
            (e) => {
                let t = I[e.rowIndex],
                    n = (0, p.rE)(t.id, t.type),
                    r = n in P,
                    l = q && !r;
                return (0, i.jsx)(
                    "div",
                    {
                        className: y.item,
                        children: (0, i.jsx)(u.XZJ, {
                            type: u.XZJ.Types.INVERTED,
                            disabled: l,
                            value: r,
                            onChange: () => N(t.id, t.type),
                            children: (0, i.jsx)(b.Z, {
                                guild: w,
                                id: t.id,
                                type: t.type,
                                isLocked: !1,
                            }),
                        }),
                    },
                    n,
                );
            },
            [I, w, q, N, P],
        );
    return (
        r.useEffect(() => {
            c.Z.requestMembers(n, void 0, 200, !1);
        }, [n]),
        (0, i.jsx)(o.Modal, {
            "aria-label": g.intl.string(g.t["N+InBQ"]),
            transitionState: E,
            title: h,
            subtitle: q ? g.intl.string(g.t.XTwtW1) : void 0,
            onClose: m,
            input: (0, i.jsx)(u.E1j, {
                query: T,
                placeholder: C,
                "aria-label": C,
                onChange: D,
                onClear: () => M(""),
            }),
            actions: [
                {
                    text: g.intl.string(g.t["ETE/oK"]),
                    onClick: m,
                    variant: "secondary",
                },
                {
                    text: g.intl.string(g.t.OYkgVl),
                    onClick: X,
                    variant: "primary",
                    disabled: 0 === _,
                },
            ],
            listProps: {
                renderRow: H,
                sections: [I.length],
                rowHeight: 36,
                sectionHeight: 36,
            },
        })
    );
}
