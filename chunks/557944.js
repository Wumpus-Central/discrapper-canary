(n.d(t, { default: () => y }), n(35282), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(749210),
    h = n(600164),
    m = n(218867),
    b = n(430824),
    p = n(399860),
    x = n(335049),
    f = n(689079),
    g = n(388032),
    j = n(969957);
function y(e) {
    let { editPermissions: t, guildId: n, hasMemberSearch: l, headerText: s, onClose: y, overwrittenKeys: k, search: C, searchPlaceholderText: _, selectedPermissionCount: E, transitionState: v } = e,
        w = (0, c.e7)([b.Z], () => b.Z.getGuild(n), [n]);
    o()(null != w, '');
    let [O, Z] = i.useState(null),
        { query: N, results: T, setQuery: z } = C(n),
        [D, I] = i.useState({}),
        M = i.useMemo(() => Object.keys(D).length, [D]),
        S = M + E >= f._n,
        B = i.useMemo(
            () =>
                T.filter((e) => {
                    let t = (0, p.rE)(e.id, e.type);
                    return !k.includes(t);
                }),
            [k, T]
        ),
        X = i.useCallback(
            (e, t) => {
                I((n) => {
                    let r = (0, p.rE)(e, t),
                        i = (function (e) {
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
                            ? delete i[r]
                            : S ||
                              (i[r] = {
                                  id: e,
                                  permission: !0,
                                  type: t
                              }),
                        i
                    );
                });
            },
            [S, I]
        ),
        q = i.useCallback(() => {
            (t(D, []), y());
        }, [t, y, D]);
    i.useEffect(() => () => clearTimeout(O), [O]);
    let P = i.useCallback(
            (e) => {
                (z(e),
                    l &&
                        Z((t) =>
                            (clearTimeout(t), 0 === e.length)
                                ? null
                                : setTimeout(() => {
                                      u.Z.requestMembers(n, e, 200, !1);
                                  }, 500)
                        ));
            },
            [n, l, z, Z]
        ),
        R = i.useCallback(
            (e) => {
                let t = B[e],
                    n = (0, p.rE)(t.id, t.type),
                    i = n in D,
                    l = S && !i;
                return (0, r.jsx)(
                    'div',
                    {
                        className: j.item,
                        children: (0, r.jsx)(d.XZJ, {
                            type: d.XZJ.Types.INVERTED,
                            className: a()({ [j.checkboxItemDisabled]: l }),
                            disabled: l,
                            value: i,
                            onChange: () => X(t.id, t.type),
                            children: (0, r.jsx)(x.Z, {
                                guild: w,
                                id: t.id,
                                type: t.type,
                                isLocked: !1
                            })
                        })
                    },
                    n
                );
            },
            [B, w, S, X, D]
        );
    return (
        i.useEffect(() => {
            u.Z.requestMembers(n, void 0, 200, !1);
        }, [n]),
        (0, r.jsxs)(d.Y0X, {
            'aria-label': g.intl.string(g.t['N+InBQ']),
            transitionState: v,
            parentComponent: 'AddPermissionsModal',
            children: [
                (0, r.jsxs)(d.xBx, {
                    separator: !1,
                    direction: h.Z.Direction.VERTICAL,
                    children: [
                        (0, r.jsx)(d.X6q, {
                            variant: 'heading-xl/semibold',
                            className: j.header,
                            children: s
                        }),
                        S
                            ? (0, r.jsx)(d.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'text-danger',
                                  children: g.intl.string(g.t.XTwtW1)
                              })
                            : null
                    ]
                }),
                (0, r.jsxs)(d.hzk, {
                    className: j.modalContent,
                    children: [
                        (0, r.jsx)(d.E1j, {
                            className: j.searchBar,
                            query: N,
                            placeholder: _,
                            'aria-label': _,
                            onChange: P,
                            onClear: () => z(''),
                            size: d.E1j.Sizes.MEDIUM
                        }),
                        (0, r.jsx)(m.Z, {
                            role: 'listbox',
                            renderRow: R,
                            rowCount: B.length,
                            rowCountBySection: [B.length],
                            rowHeight: 36,
                            className: j.__invalid_list
                        })
                    ]
                }),
                (0, r.jsx)(d.mzw, {
                    children: (0, r.jsxs)(d.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, r.jsx)(d.zxk, {
                                variant: 'primary',
                                text: g.intl.string(g.t.OYkgVl),
                                type: 'submit',
                                onClick: q,
                                disabled: 0 === M
                            }),
                            (0, r.jsx)(d.zxk, {
                                variant: 'secondary',
                                text: g.intl.string(g.t['ETE/oK']),
                                onClick: y
                            })
                        ]
                    })
                })
            ]
        })
    );
}
