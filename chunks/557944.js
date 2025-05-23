l.d(t, { default: () => j }), l(35282), l(388685);
var n = l(255367),
    r = l(73800),
    i = l(120356),
    s = l.n(i),
    a = l(512722),
    o = l.n(a),
    c = l(442837),
    d = l(481060),
    u = l(749210),
    h = l(600164),
    b = l(218867),
    m = l(430824),
    x = l(399860),
    p = l(335049),
    f = l(689079),
    k = l(388032),
    g = l(969957);
function j(e) {
    let { editPermissions: t, guildId: l, hasMemberSearch: i, headerText: a, onClose: j, overwrittenKeys: y, search: C, searchPlaceholderText: _, selectedPermissionCount: E, transitionState: w } = e,
        v = (0, c.e7)([m.Z], () => m.Z.getGuild(l), [l]);
    o()(null != v, '');
    let [O, I] = r.useState(null),
        { query: N, results: Z, setQuery: z } = C(l),
        [T, D] = r.useState({}),
        M = r.useMemo(() => Object.keys(T).length, [T]),
        S = M + E >= f._n,
        B = r.useMemo(
            () =>
                Z.filter((e) => {
                    let t = (0, x.rE)(e.id, e.type);
                    return !y.includes(t);
                }),
            [y, Z]
        ),
        X = r.useCallback(
            (e, t) => {
                D((l) => {
                    let n = (0, x.rE)(e, t),
                        r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var l = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(l);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(l).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = l[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, l);
                    return (
                        n in l
                            ? delete r[n]
                            : S ||
                              (r[n] = {
                                  id: e,
                                  permission: !0,
                                  type: t
                              }),
                        r
                    );
                });
            },
            [S, D]
        ),
        q = r.useCallback(() => {
            t(T, []), j();
        }, [t, j, T]);
    r.useEffect(() => () => clearTimeout(O), [O]);
    let P = r.useCallback(
            (e) => {
                z(e),
                    i &&
                        I((t) =>
                            (clearTimeout(t), 0 === e.length)
                                ? null
                                : setTimeout(() => {
                                      u.Z.requestMembers(l, e, 200, !1);
                                  }, 500)
                        );
            },
            [l, i, z, I]
        ),
        R = r.useCallback(
            (e) => {
                let t = B[e],
                    l = (0, x.rE)(t.id, t.type),
                    r = l in T,
                    i = S && !r;
                return (0, n.jsx)(
                    'div',
                    {
                        className: g.item,
                        children: (0, n.jsx)(d.XZJ, {
                            type: d.XZJ.Types.INVERTED,
                            className: s()({ [g.checkboxItemDisabled]: i }),
                            disabled: i,
                            value: r,
                            onChange: () => X(t.id, t.type),
                            children: (0, n.jsx)(p.Z, {
                                guild: v,
                                id: t.id,
                                type: t.type,
                                isLocked: !1
                            })
                        })
                    },
                    l
                );
            },
            [B, v, S, X, T]
        );
    return (
        r.useEffect(() => {
            u.Z.requestMembers(l, void 0, 200, !1);
        }, [l]),
        (0, n.jsxs)(d.Y0X, {
            'aria-label': k.intl.string(k.t['N+InBQ']),
            transitionState: w,
            children: [
                (0, n.jsxs)(d.xBx, {
                    separator: !1,
                    direction: h.Z.Direction.VERTICAL,
                    children: [
                        (0, n.jsx)(d.X6q, {
                            variant: 'heading-xl/semibold',
                            className: g.header,
                            children: a
                        }),
                        S
                            ? (0, n.jsx)(d.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'text-danger',
                                  children: k.intl.string(k.t.XTwtW1)
                              })
                            : null
                    ]
                }),
                (0, n.jsxs)(d.hzk, {
                    className: g.modalContent,
                    children: [
                        (0, n.jsx)(d.E1j, {
                            className: g.searchBar,
                            query: N,
                            placeholder: _,
                            'aria-label': _,
                            onChange: P,
                            onClear: () => z(''),
                            size: d.E1j.Sizes.MEDIUM
                        }),
                        (0, n.jsx)(b.Z, {
                            role: 'listbox',
                            renderRow: R,
                            rowCount: B.length,
                            rowCountBySection: [B.length],
                            rowHeight: 36,
                            className: g.__invalid_list
                        })
                    ]
                }),
                (0, n.jsxs)(d.mzw, {
                    children: [
                        (0, n.jsx)(d.zxk, {
                            type: 'submit',
                            onClick: q,
                            disabled: 0 === M,
                            children: k.intl.string(k.t.OYkgVl)
                        }),
                        (0, n.jsx)(d.zxk, {
                            onClick: j,
                            look: d.zxk.Looks.LINK,
                            color: d.zxk.Colors.PRIMARY,
                            children: k.intl.string(k.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
