r.d(t, { default: () => j }), r(301563), r(47120);
var l = r(200651),
    n = r(192379),
    s = r(120356),
    i = r.n(s),
    a = r(512722),
    o = r.n(a),
    c = r(442837),
    d = r(481060),
    u = r(749210),
    h = r(600164),
    b = r(218867),
    m = r(430824),
    x = r(399860),
    p = r(335049),
    f = r(689079),
    k = r(388032),
    g = r(969957);
function j(e) {
    let { editPermissions: t, guildId: r, hasMemberSearch: s, headerText: a, onClose: j, overwrittenKeys: y, search: C, searchPlaceholderText: _, selectedPermissionCount: E, transitionState: N } = e,
        w = (0, c.e7)([m.Z], () => m.Z.getGuild(r), [r]);
    o()(null != w, '');
    let [v, O] = n.useState(null),
        { query: I, results: Z, setQuery: z } = C(r),
        [T, D] = n.useState({}),
        M = n.useMemo(() => Object.keys(T).length, [T]),
        S = M + E >= f._n,
        B = n.useMemo(
            () =>
                Z.filter((e) => {
                    let t = (0, x.rE)(e.id, e.type);
                    return !y.includes(t);
                }),
            [y, Z]
        ),
        X = n.useCallback(
            (e, t) => {
                D((r) => {
                    let l = (0, x.rE)(e, t),
                        n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        (l = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = l);
                                    });
                            }
                            return e;
                        })({}, r);
                    return (
                        l in r
                            ? delete n[l]
                            : S ||
                              (n[l] = {
                                  id: e,
                                  permission: !0,
                                  type: t
                              }),
                        n
                    );
                });
            },
            [S, D]
        ),
        q = n.useCallback(() => {
            t(T, []), j();
        }, [t, j, T]);
    n.useEffect(() => () => clearTimeout(v), [v]);
    let P = n.useCallback(
            (e) => {
                z(e),
                    s &&
                        O((t) =>
                            (clearTimeout(t), 0 === e.length)
                                ? null
                                : setTimeout(() => {
                                      u.Z.requestMembers(r, e, 200, !1);
                                  }, 500)
                        );
            },
            [r, s, z, O]
        ),
        R = n.useCallback(
            (e) => {
                let t = B[e],
                    r = (0, x.rE)(t.id, t.type),
                    n = r in T,
                    s = S && !n;
                return (0, l.jsx)(
                    'div',
                    {
                        className: g.item,
                        children: (0, l.jsx)(d.XZJ, {
                            type: d.XZJ.Types.INVERTED,
                            className: i()({ [g.checkboxItemDisabled]: s }),
                            disabled: s,
                            value: n,
                            onChange: () => X(t.id, t.type),
                            children: (0, l.jsx)(p.Z, {
                                guild: w,
                                id: t.id,
                                type: t.type,
                                isLocked: !1
                            })
                        })
                    },
                    r
                );
            },
            [B, w, S, X, T]
        );
    return (
        n.useEffect(() => {
            u.Z.requestMembers(r, void 0, 200, !1);
        }, [r]),
        (0, l.jsxs)(d.Y0X, {
            'aria-label': k.NW.string(k.t['N+InBQ']),
            transitionState: N,
            children: [
                (0, l.jsxs)(d.xBx, {
                    separator: !1,
                    direction: h.Z.Direction.VERTICAL,
                    children: [
                        (0, l.jsx)(d.X6q, {
                            variant: 'heading-xl/semibold',
                            className: g.header,
                            children: a
                        }),
                        S
                            ? (0, l.jsx)(d.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'text-danger',
                                  children: k.NW.string(k.t.XTwtW1)
                              })
                            : null
                    ]
                }),
                (0, l.jsxs)(d.hzk, {
                    className: g.modalContent,
                    children: [
                        (0, l.jsx)(d.E1j, {
                            className: g.searchBar,
                            query: I,
                            placeholder: _,
                            'aria-label': _,
                            onChange: P,
                            onClear: () => z(''),
                            size: d.E1j.Sizes.MEDIUM
                        }),
                        (0, l.jsx)(b.Z, {
                            role: 'listbox',
                            renderRow: R,
                            rowCount: B.length,
                            rowCountBySection: [B.length],
                            rowHeight: 36,
                            className: g.__invalid_list
                        })
                    ]
                }),
                (0, l.jsxs)(d.mzw, {
                    children: [
                        (0, l.jsx)(d.zxk, {
                            type: 'submit',
                            onClick: q,
                            disabled: 0 === M,
                            children: k.NW.string(k.t.OYkgVl)
                        }),
                        (0, l.jsx)(d.zxk, {
                            onClick: j,
                            look: d.zxk.Looks.LINK,
                            color: d.zxk.Colors.PRIMARY,
                            children: k.NW.string(k.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
