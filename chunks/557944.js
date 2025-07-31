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
    let { editPermissions: t, guildId: n, hasMemberSearch: l, headerText: s, onClose: y, overwrittenKeys: k, search: C, searchPlaceholderText: _, selectedPermissionCount: v, transitionState: E } = e,
        w = (0, c.e7)([b.Z], () => b.Z.getGuild(n), [n]);
    o()(null != w, '');
    let [O, Z] = i.useState(null),
        { query: N, results: T, setQuery: B } = C(n),
        [D, I] = i.useState({}),
        S = i.useMemo(() => Object.keys(D).length, [D]),
        X = S + v >= f._n,
        q = i.useMemo(
            () =>
                T.filter((e) => {
                    let t = (0, p.rE)(e.id, e.type);
                    return !k.includes(t);
                }),
            [k, T]
        ),
        z = i.useCallback(
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
                            : X ||
                              (i[r] = {
                                  id: e,
                                  permission: !0,
                                  type: t
                              }),
                        i
                    );
                });
            },
            [X, I]
        ),
        M = i.useCallback(() => {
            (t(D, []), y());
        }, [t, y, D]);
    i.useEffect(() => () => clearTimeout(O), [O]);
    let P = i.useCallback(
            (e) => {
                (B(e),
                    l &&
                        Z((t) =>
                            (clearTimeout(t), 0 === e.length)
                                ? null
                                : setTimeout(() => {
                                      u.Z.requestMembers(n, e, 200, !1);
                                  }, 500)
                        ));
            },
            [n, l, B, Z]
        ),
        R = i.useCallback(
            (e) => {
                let t = q[e],
                    n = (0, p.rE)(t.id, t.type),
                    i = n in D,
                    l = X && !i;
                return (0, r.jsx)(
                    'div',
                    {
                        className: j.item,
                        children: (0, r.jsx)(d.XZJ, {
                            type: d.XZJ.Types.INVERTED,
                            className: a()({ [j.checkboxItemDisabled]: l }),
                            disabled: l,
                            value: i,
                            onChange: () => z(t.id, t.type),
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
            [q, w, X, z, D]
        );
    return (
        i.useEffect(() => {
            u.Z.requestMembers(n, void 0, 200, !1);
        }, [n]),
        (0, r.jsxs)(d.Y0X, {
            'aria-label': g.intl.string(g.t['N+InBQ']),
            transitionState: E,
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
                        X
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
                            onClear: () => B('')
                        }),
                        (0, r.jsx)(m.Z, {
                            role: 'listbox',
                            renderRow: R,
                            rowCount: q.length,
                            rowCountBySection: [q.length],
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
                                onClick: M,
                                disabled: 0 === S
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
