n.d(t, {
    default: () => k,
}),
    n(747238),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(158954),
    o = n(311907),
    u = n(421380),
    c = n(397927),
    d = n(686956),
    b = n(71393),
    p = n(200662),
    g = n(739174),
    f = n(73510),
    h = n(985018),
    y = n(650659);

function k(e) {
    let {
            editPermissions: t,
            guildId: n,
            hasMemberSearch: l,
            headerText: k,
            onClose: m,
            overwrittenKeys: C,
            search: j,
            searchPlaceholderText: v,
            selectedPermissionCount: w,
            transitionState: E,
        } = e,
        O = (0, o.bG)([b.A], () => b.A.getGuild(n), [n]);
    s()(null != O, "");
    let [x, A] = i.useState(null),
        { query: T, results: M, setQuery: P } = j(n),
        [S, I] = i.useState({}),
        q = i.useMemo(() => Object.keys(S).length, [S]),
        N = q + w >= f.iW,
        V = i.useMemo(
            () =>
                M.filter((e) => {
                    let t = (0, p.Eu)(e.id, e.type);
                    return !C.includes(t);
                }),
            [C, M],
        ),
        W = i.useCallback(
            (e, t) => {
                I((n) => {
                    let r = (0, p.Eu)(e, t),
                        i = (function (e) {
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
                        })({}, n);
                    return (
                        r in n
                            ? delete i[r]
                            : N ||
                              (i[r] = {
                                  id: e,
                                  permission: !0,
                                  type: t,
                              }),
                        i
                    );
                });
            },
            [N, I],
        ),
        D = i.useCallback(() => {
            t(S, []), m();
        }, [t, m, S]);
    i.useEffect(() => () => clearTimeout(x), [x]);
    let G = i.useCallback(
            (e) => {
                P(e),
                    l &&
                        A((t) =>
                            (clearTimeout(t), 0 === e.length)
                                ? null
                                : setTimeout(() => {
                                      d.A.requestMembers(n, e, 200, !1);
                                  }, 500),
                        );
            },
            [n, l, P, A],
        ),
        H = i.useCallback(
            (e) => {
                let t = V[e.rowIndex],
                    n = (0, p.Eu)(t.id, t.type),
                    i = n in S,
                    l = N && !i;
                return (0, r.jsx)(
                    "div",
                    {
                        className: y.A,
                        children: (0, r.jsx)(u.Kj, {
                            type: u.Xo.INVERTED,
                            disabled: l,
                            value: i,
                            onChange: () => W(t.id, t.type),
                            children: (0, r.jsx)(g.A, {
                                guild: O,
                                id: t.id,
                                type: t.type,
                                isLocked: !1,
                            }),
                        }),
                    },
                    n,
                );
            },
            [V, O, N, W, S],
        );
    return (
        i.useEffect(() => {
            d.A.requestMembers(n, void 0, 200, !1);
        }, [n]),
        (0, r.jsx)(a.Modal, {
            "aria-label": h.intl.string(h.t["N+InBa"]),
            transitionState: E,
            title: k,
            subtitle: N ? h.intl.string(h.t["XTwtW/"]) : void 0,
            onClose: m,
            input: (0, r.jsx)(c.IWV, {
                query: T,
                placeholder: v,
                "aria-label": v,
                onChange: G,
                onClear: () => P(""),
            }),
            actions: [
                {
                    text: h.intl.string(h.t["ETE/oC"]),
                    onClick: m,
                    variant: "secondary",
                },
                {
                    text: h.intl.string(h.t.OYkgVk),
                    onClick: D,
                    variant: "primary",
                    disabled: 0 === q,
                },
            ],
            listProps: {
                renderRow: H,
                sections: [V.length],
                rowHeight: 36,
                sectionHeight: 36,
            },
        })
    );
}
