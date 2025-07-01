(n.d(t, { default: () => j }), n(35282), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(749210),
    h = n(600164),
    m = n(218867),
    b = n(430824),
    p = n(399860),
    x = n(335049),
    f = n(689079),
    k = n(388032),
    g = n(969957);
function j(e) {
    let { editPermissions: t, guildId: n, hasMemberSearch: i, headerText: a, onClose: j, overwrittenKeys: y, search: C, searchPlaceholderText: _, selectedPermissionCount: E, transitionState: w } = e,
        v = (0, c.e7)([b.Z], () => b.Z.getGuild(n), [n]);
    o()(null != v, '');
    let [O, I] = l.useState(null),
        { query: N, results: Z, setQuery: z } = C(n),
        [M, T] = l.useState({}),
        D = l.useMemo(() => Object.keys(M).length, [M]),
        S = D + E >= f._n,
        B = l.useMemo(
            () =>
                Z.filter((e) => {
                    let t = (0, p.rE)(e.id, e.type);
                    return !y.includes(t);
                }),
            [y, Z]
        ),
        P = l.useCallback(
            (e, t) => {
                T((n) => {
                    let r = (0, p.rE)(e, t),
                        l = (function (e) {
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
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })({}, n);
                    return (
                        r in n
                            ? delete l[r]
                            : S ||
                              (l[r] = {
                                  id: e,
                                  permission: !0,
                                  type: t
                              }),
                        l
                    );
                });
            },
            [S, T]
        ),
        X = l.useCallback(() => {
            (t(M, []), j());
        }, [t, j, M]);
    l.useEffect(() => () => clearTimeout(O), [O]);
    let q = l.useCallback(
            (e) => {
                (z(e),
                    i &&
                        I((t) =>
                            (clearTimeout(t), 0 === e.length)
                                ? null
                                : setTimeout(() => {
                                      u.Z.requestMembers(n, e, 200, !1);
                                  }, 500)
                        ));
            },
            [n, i, z, I]
        ),
        R = l.useCallback(
            (e) => {
                let t = B[e],
                    n = (0, p.rE)(t.id, t.type),
                    l = n in M,
                    i = S && !l;
                return (0, r.jsx)(
                    'div',
                    {
                        className: g.item,
                        children: (0, r.jsx)(d.XZJ, {
                            type: d.XZJ.Types.INVERTED,
                            className: s()({ [g.checkboxItemDisabled]: i }),
                            disabled: i,
                            value: l,
                            onChange: () => P(t.id, t.type),
                            children: (0, r.jsx)(x.Z, {
                                guild: v,
                                id: t.id,
                                type: t.type,
                                isLocked: !1
                            })
                        })
                    },
                    n
                );
            },
            [B, v, S, P, M]
        );
    return (
        l.useEffect(() => {
            u.Z.requestMembers(n, void 0, 200, !1);
        }, [n]),
        (0, r.jsxs)(d.Y0X, {
            'aria-label': k.intl.string(k.t['N+InBQ']),
            transitionState: w,
            parentComponent: 'AddPermissionsModal',
            children: [
                (0, r.jsxs)(d.xBx, {
                    separator: !1,
                    direction: h.Z.Direction.VERTICAL,
                    children: [
                        (0, r.jsx)(d.X6q, {
                            variant: 'heading-xl/semibold',
                            className: g.header,
                            children: a
                        }),
                        S
                            ? (0, r.jsx)(d.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'text-danger',
                                  children: k.intl.string(k.t.XTwtW1)
                              })
                            : null
                    ]
                }),
                (0, r.jsxs)(d.hzk, {
                    className: g.modalContent,
                    children: [
                        (0, r.jsx)(d.E1j, {
                            className: g.searchBar,
                            query: N,
                            placeholder: _,
                            'aria-label': _,
                            onChange: q,
                            onClear: () => z(''),
                            size: d.E1j.Sizes.MEDIUM
                        }),
                        (0, r.jsx)(m.Z, {
                            role: 'listbox',
                            renderRow: R,
                            rowCount: B.length,
                            rowCountBySection: [B.length],
                            rowHeight: 36,
                            className: g.__invalid_list
                        })
                    ]
                }),
                (0, r.jsxs)(d.mzw, {
                    children: [
                        (0, r.jsx)(d.zxk, {
                            type: 'submit',
                            onClick: X,
                            disabled: 0 === D,
                            children: k.intl.string(k.t.OYkgVl)
                        }),
                        (0, r.jsx)(d.zxk, {
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
