l.d(t, { default: () => j }), l(47120);
var s = l(200651),
    i = l(192379),
    n = l(120356),
    a = l.n(n),
    r = l(512722),
    o = l.n(r),
    c = l(442837),
    d = l(481060),
    u = l(749210),
    h = l(600164),
    m = l(218867),
    x = l(430824),
    k = l(399860),
    b = l(335049),
    p = l(689079),
    C = l(388032),
    g = l(452397);
function j(e) {
    let { editPermissions: t, guildId: l, hasMemberSearch: n, headerText: r, onClose: j, overwrittenKeys: _, search: f, searchPlaceholderText: E, selectedPermissionCount: y, transitionState: I } = e,
        N = (0, c.e7)([x.Z], () => x.Z.getGuild(l), [l]);
    o()(null != N, '');
    let [Z, w] = i.useState(null),
        { query: z, results: T, setQuery: v } = f(l),
        [M, B] = i.useState({}),
        D = i.useMemo(() => Object.keys(M).length, [M]),
        X = D + y >= p._n,
        q = i.useMemo(
            () =>
                T.filter((e) => {
                    let t = (0, k.rE)(e.id, e.type);
                    return !_.includes(t);
                }),
            [_, T]
        ),
        R = i.useCallback(
            (e, t) => {
                B((l) => {
                    let s = (0, k.rE)(e, t),
                        i = { ...l };
                    return (
                        s in l
                            ? delete i[s]
                            : X ||
                              (i[s] = {
                                  id: e,
                                  permission: !0,
                                  type: t
                              }),
                        i
                    );
                });
            },
            [X, B]
        ),
        S = i.useCallback(() => {
            t(M, []), j();
        }, [t, j, M]);
    i.useEffect(() => () => clearTimeout(Z), [Z]);
    let L = i.useCallback(
            (e) => {
                v(e),
                    n &&
                        w((t) =>
                            (clearTimeout(t), 0 === e.length)
                                ? null
                                : setTimeout(() => {
                                      u.Z.requestMembers(l, e, 200, !1);
                                  }, 500)
                        );
            },
            [l, n, v, w]
        ),
        V = i.useCallback(
            (e) => {
                let t = q[e],
                    l = (0, k.rE)(t.id, t.type),
                    i = l in M,
                    n = X && !i;
                return (0, s.jsx)(
                    'div',
                    {
                        className: g.item,
                        children: (0, s.jsx)(d.XZJ, {
                            type: d.XZJ.Types.INVERTED,
                            className: a()({ [g.checkboxItemDisabled]: n }),
                            disabled: n,
                            value: i,
                            onChange: () => R(t.id, t.type),
                            children: (0, s.jsx)(b.Z, {
                                guild: N,
                                id: t.id,
                                type: t.type,
                                isLocked: !1
                            })
                        })
                    },
                    l
                );
            },
            [q, N, X, R, M]
        );
    return (
        i.useEffect(() => {
            u.Z.requestMembers(l, void 0, 200, !1);
        }, [l]),
        (0, s.jsxs)(d.Y0X, {
            'aria-label': C.intl.string(C.t['N+InBQ']),
            transitionState: I,
            children: [
                (0, s.jsxs)(d.xBx, {
                    separator: !1,
                    direction: h.Z.Direction.VERTICAL,
                    children: [
                        (0, s.jsx)(d.X6q, {
                            variant: 'heading-xl/semibold',
                            className: g.header,
                            children: r
                        }),
                        X
                            ? (0, s.jsx)(d.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'text-danger',
                                  children: C.intl.string(C.t.XTwtW1)
                              })
                            : null
                    ]
                }),
                (0, s.jsxs)(d.hzk, {
                    className: g.modalContent,
                    children: [
                        (0, s.jsx)(d.E1j, {
                            className: g.searchBar,
                            query: z,
                            placeholder: E,
                            'aria-label': E,
                            onChange: L,
                            onClear: () => v(''),
                            size: d.E1j.Sizes.MEDIUM
                        }),
                        (0, s.jsx)(m.Z, {
                            role: 'listbox',
                            renderRow: V,
                            rowCount: q.length,
                            rowCountBySection: [q.length],
                            rowHeight: 36,
                            className: g.__invalid_list
                        })
                    ]
                }),
                (0, s.jsxs)(d.mzw, {
                    children: [
                        (0, s.jsx)(d.zxk, {
                            type: 'submit',
                            onClick: S,
                            disabled: 0 === D,
                            children: C.intl.string(C.t.OYkgVl)
                        }),
                        (0, s.jsx)(d.zxk, {
                            onClick: j,
                            look: d.zxk.Looks.LINK,
                            color: d.zxk.Colors.PRIMARY,
                            children: C.intl.string(C.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
