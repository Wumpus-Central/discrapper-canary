n.d(t, { default: () => m }), n(35282), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(82659),
    u = n(755721),
    c = n(481060),
    d = n(749210),
    b = n(430824),
    p = n(399860),
    f = n(335049),
    g = n(689079),
    h = n(388032),
    y = n(320692);
function m(e) {
    let {
            editPermissions: t,
            guildId: n,
            hasMemberSearch: l,
            headerText: m,
            onClose: k,
            overwrittenKeys: j,
            search: C,
            searchPlaceholderText: v,
            selectedPermissionCount: E,
            transitionState: w,
        } = e,
        O = (0, a.e7)([b.Z], () => b.Z.getGuild(n), [n]);
    s()(null != O, "");
    let [x, M] = r.useState(null),
        { query: T, results: P, setQuery: S } = C(n),
        [Z, _] = r.useState({}),
        q = r.useMemo(() => Object.keys(Z).length, [Z]),
        I = q + E >= g._n,
        N = r.useMemo(
            () =>
                P.filter((e) => {
                    let t = (0, p.rE)(e.id, e.type);
                    return !j.includes(t);
                }),
            [j, P],
        ),
        D = r.useCallback(
            (e, t) => {
                _((n) => {
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
                            : I ||
                              (r[i] = {
                                  id: e,
                                  permission: !0,
                                  type: t,
                              }),
                        r
                    );
                });
            },
            [I, _],
        ),
        H = r.useCallback(() => {
            t(Z, []), k();
        }, [t, k, Z]);
    r.useEffect(() => () => clearTimeout(x), [x]);
    let R = r.useCallback(
            (e) => {
                S(e),
                    l &&
                        M((t) =>
                            (clearTimeout(t), 0 === e.length)
                                ? null
                                : setTimeout(() => {
                                      d.Z.requestMembers(n, e, 200, !1);
                                  }, 500),
                        );
            },
            [n, l, S, M],
        ),
        V = r.useCallback(
            (e) => {
                let t = N[e.rowIndex],
                    n = (0, p.rE)(t.id, t.type),
                    r = n in Z,
                    l = I && !r;
                return (0, i.jsx)(
                    "div",
                    {
                        className: y.item,
                        children: (0, i.jsx)(u.$q, {
                            type: u.M0.INVERTED,
                            disabled: l,
                            value: r,
                            onChange: () => D(t.id, t.type),
                            children: (0, i.jsx)(f.Z, {
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
            [N, O, I, D, Z],
        );
    return (
        r.useEffect(() => {
            d.Z.requestMembers(n, void 0, 200, !1);
        }, [n]),
        (0, i.jsx)(o.Modal, {
            "aria-label": h.intl.string(h.t["N+InBQ"]),
            transitionState: w,
            title: m,
            subtitle: I ? h.intl.string(h.t.XTwtW1) : void 0,
            onClose: k,
            input: (0, i.jsx)(c.E1j, {
                query: T,
                placeholder: v,
                "aria-label": v,
                onChange: R,
                onClear: () => S(""),
            }),
            actions: [
                {
                    text: h.intl.string(h.t["ETE/oK"]),
                    onClick: k,
                    variant: "secondary",
                },
                {
                    text: h.intl.string(h.t.OYkgVl),
                    onClick: H,
                    variant: "primary",
                    disabled: 0 === q,
                },
            ],
            listProps: {
                renderRow: V,
                sections: [N.length],
                rowHeight: 36,
                sectionHeight: 36,
            },
        })
    );
}
