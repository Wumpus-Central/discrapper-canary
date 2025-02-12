l.d(t, {
    PM: () => V,
    WG: () => M,
    ZP: () => E
}),
    l(47120);
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(658722),
    r = l.n(s),
    c = l(442837),
    d = l(481060),
    C = l(461745),
    u = l(933557),
    m = l(471445),
    h = l(91218),
    x = l(313201),
    g = l(518738),
    p = l(662594),
    _ = l(592125),
    b = l(430824),
    f = l(699516),
    j = l(594174),
    H = l(388032),
    v = l(979592);
let N = (0, x.hQ)(),
    Z = (0, x.hQ)(),
    L = 'text-sm/medium';
function R(e) {
    return 1 === e.type;
}
function I(e) {
    return 0 === e.type;
}
function M(e) {
    let t = ''.concat(e.name.includes(p.CR) ? '' : '@').concat(e.name);
    return {
        tag: {
            type: C.Fj.ROLE,
            label: t
        },
        row: {
            id: e.id,
            display: t,
            type: 1,
            record: e
        }
    };
}
function V(e) {
    let t = (0, u.F6)(e, j.default, f.Z);
    return {
        tag: {
            type: C.Fj.CHANNEL,
            label: t
        },
        row: {
            id: e.id,
            display: t,
            type: 0,
            record: e
        }
    };
}
let D = a.memo(function (e) {
    var t;
    let { row: l, guildId: a, className: i } = e,
        { id: s, name: r } = l.record,
        C = (0, g.p9)({
            guildId: a,
            roleId: s,
            size: 16
        }),
        u = (0, c.e7)([b.Z], () => b.Z.getRole(a, s)),
        m = r.includes(p.CR) ? '' : '@',
        x = (0, d.dQu)(d.TVs.unsafe_rawColors.PRIMARY_300).hsl(),
        _ = null !== (t = null == u ? void 0 : u.colorString) && void 0 !== t ? t : x;
    return (0, n.jsxs)('div', {
        className: o()(v.rowLabel, v.roleTagContainer, i),
        children: [
            (0, n.jsx)(d.FhE, {
                className: v.__invalid_roleDot,
                color: _,
                background: !1,
                tooltip: !1
            }),
            null != C
                ? (0, n.jsx)(h.Z, {
                      className: v.roleTagIcon,
                      ...C,
                      enableTooltip: !1
                  })
                : m,
            (0, n.jsx)(d.Text, {
                variant: L,
                className: v.roleTagLabel,
                children: r
            })
        ]
    });
});
function S(e) {
    let { channel: t, row: l, className: a } = e,
        i = null != t.parent_id,
        s = (0, m.KS)(t);
    return (0, n.jsxs)('div', {
        className: o()(v.rowLabel, v.channelLabel, { [v.hasParent]: i }, a),
        children: [
            null != s &&
                (0, n.jsx)(s, {
                    size: 'xs',
                    color: 'currentColor',
                    className: v.channelIcon
                }),
            (0, n.jsx)(d.Text, {
                variant: t.isCategory() ? 'eyebrow' : L,
                children: l.display
            })
        ]
    });
}
function T(e, t, l) {
    return R(e)
        ? (0, n.jsx)(
              D,
              {
                  row: e,
                  guildId: t,
                  className: l
              },
              e.record.id
          )
        : I(e)
          ? (0, n.jsx)(
                S,
                {
                    row: e,
                    channel: e.record,
                    className: l
                },
                e.record.id
            )
          : null;
}
function E(e) {
    let { guildId: t, roleRows: l = [], channelRows: i = [], selectedChannelIds: s = new Set(), selectedRoleIds: u = new Set(), onChange: m, placeholder: h, helperText: x, className: g } = e,
        p = (0, c.e7)([b.Z], () => b.Z.getRoles(t)),
        f = a.useMemo(
            () =>
                (function (e, t, l) {
                    if (null == e) return {};
                    let n = {};
                    return (
                        e.forEach((e) => {
                            let t = _.Z.getChannel(e);
                            null != t && (n[e] = V(t));
                        }),
                        t.forEach((e) => {
                            e in l && (n[e] = M(l[e]));
                        }),
                        n
                    );
                })(s, u, p),
            [s, u, p]
        ),
        j = a.useMemo(() => Object.keys(f), [f]),
        [L, D] = a.useState(''),
        [S, E] = a.useState(!1),
        [w, k] = a.useState(!1),
        [y, A] = a.useState(!1),
        B = a.useRef(null),
        { sections: O, sectionCounts: U } = a.useMemo(() => {
            let e = '' !== L ? i.filter((e) => r()(L, e.display.toLocaleLowerCase())) : i,
                t = '' !== L ? l.filter((e) => r()(L, e.display.toLocaleLowerCase())) : l,
                n = [],
                a = [];
            return (
                (n[0] = e),
                (a[0] = e.length),
                (n[1] = t),
                (a[1] = t.length),
                {
                    sections: n,
                    sectionCounts: a
                }
            );
        }, [L, i, l]),
        F = a.useCallback(
            (e) => {
                let t = Object.values(e),
                    l = t
                        .filter((e) => {
                            let { row: t } = e;
                            return I(t);
                        })
                        .map((e) => e.row.record.id),
                    n = t
                        .filter((e) => {
                            let { row: t } = e;
                            return R(t);
                        })
                        .map((e) => e.row.record.id);
                m(new Set(l), new Set(n));
            },
            [m]
        ),
        P = () => {
            E(!1), k(!1);
        };
    a.useEffect(() => {
        let e = setTimeout(() => {
            A(S || w);
        }, 32);
        return () => {
            clearTimeout(e);
        };
    }, [S, w]);
    let z = (e, t, l) => {
            l.stopPropagation(), l.preventDefault(), 2 === t ? E(e) : (1 === t || E(e), k(e));
        },
        q = a.useCallback(
            (e) => {
                let t = { ...f };
                I(e) ? (t[e.id] = V(e.record)) : R(e) && (t[e.id] = M(e.record)),
                    F(t),
                    D(''),
                    P(),
                    setTimeout(() => {
                        var e;
                        let t = null === (e = B.current) || void 0 === e ? void 0 : e.containerRef.current,
                            l = null == t ? void 0 : t.firstChild;
                        null != l &&
                            l.scrollTo({
                                top: l.scrollHeight,
                                behavior: 'smooth'
                            });
                    }, 16);
            },
            [F, f]
        ),
        G = a.useCallback(
            (e) => {
                let { section: l, row: a } = e,
                    i = O[l][a];
                return (0, n.jsx)(
                    d.P3F,
                    {
                        className: o()(v.selectableSearchRow, v.rowHeight),
                        onClick: (e) => {
                            e.stopPropagation(), q(i);
                        },
                        children: (0, n.jsx)('div', {
                            className: v.rowContainer,
                            children: T(i, t, v.searchRowLabel)
                        })
                    },
                    i.id
                );
            },
            [t, q, O]
        ),
        Y = a.useMemo(
            () =>
                j.map((e) => {
                    var l;
                    return {
                        ...(l = f[e]).tag,
                        label: T(l.row, t, v.noIndent)
                    };
                }),
            [f, j, t]
        );
    return (0, n.jsxs)('div', {
        className: o()(v.searchContainer, g),
        children: [
            (0, n.jsxs)('div', {
                className: v.searchBox,
                children: [
                    (0, n.jsx)(C.ZP, {
                        tags: Y,
                        maxHeight: 98,
                        size: C.ZP.Sizes.MEDIUM,
                        query: L,
                        ref: B,
                        onRemoveTag: (e) => {
                            let t = j[e],
                                { [t]: l, ...n } = f;
                            F(n), D(''), P();
                        },
                        onQueryChange: (e) => {
                            D(e.trim().toLocaleLowerCase());
                        },
                        placeholder: null != h ? h : H.intl.string(H.t.uqHLzc),
                        sections: [j.length],
                        inputProps: {
                            'aria-labelledby': N,
                            'aria-controls': Z,
                            'aria-expanded': y,
                            onFocus: (e) => z(!0, 2, e),
                            onBlur: (e) => z(!1, 2, e)
                        }
                    }),
                    y &&
                        (0, n.jsx)('div', {
                            className: v.resultsListParent,
                            onFocus: (e) => z(!0, 1, e),
                            onBlur: (e) => z(!1, 1, e),
                            tabIndex: -1,
                            children: (0, n.jsx)(d._2F, {
                                className: v.resultsListContainer,
                                innerClassName: v.resultsList,
                                sections: U,
                                renderRow: G,
                                rowHeight: 34,
                                renderSection: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? (0, n.jsx)(
                                              d.vwX,
                                              {
                                                  tag: 'h5',
                                                  className: o()(v.sectionTitle, v.sectionHeight),
                                                  children: H.intl.string(H.t.OGiMXF)
                                              },
                                              H.intl.string(H.t.OGiMXF)
                                          )
                                        : 1 === t
                                          ? (0, n.jsx)(
                                                d.vwX,
                                                {
                                                    tag: 'h5',
                                                    className: o()(v.sectionTitle, v.sectionHeight),
                                                    children: H.intl.string(H.t.LPJmLy)
                                                },
                                                H.intl.string(H.t.LPJmLy)
                                            )
                                          : null;
                                },
                                renderFooter: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? 0 === U[1] && U[0] > 0
                                            ? null
                                            : (0, n.jsx)('div', {
                                                  className: v.sectionFooter,
                                                  children: (0, n.jsx)(d.$i$, {})
                                              })
                                        : null;
                                },
                                sectionHeight: 24,
                                footerHeight: (e) => (0 === e ? (0 === U[1] && U[0] > 0 ? 0 : 32) : 0),
                                role: void 0,
                                innerRole: 'listbox',
                                innerId: Z,
                                innerAriaOrientation: 'vertical'
                            })
                        })
                ]
            }),
            null != x &&
                (0, n.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: v.helperText,
                    children: x
                })
        ]
    });
}
