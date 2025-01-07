n.d(t, {
    PM: function () {
        return A;
    },
    WG: function () {
        return w;
    },
    ZP: function () {
        return O;
    }
}),
    n(47120);
var l,
    o,
    i,
    a,
    r,
    s,
    c = n(200651),
    C = n(192379),
    d = n(120356),
    u = n.n(d),
    m = n(658722),
    h = n.n(m),
    x = n(442837),
    b = n(481060),
    f = n(461745),
    g = n(933557),
    p = n(471445),
    H = n(91218),
    j = n(313201),
    v = n(518738),
    N = n(662594),
    L = n(592125),
    I = n(430824),
    _ = n(699516),
    M = n(594174),
    Z = n(388032),
    R = n(358627);
let D = (0, j.hQ)(),
    S = (0, j.hQ)(),
    V = 'text-sm/medium';
function T(e) {
    return 1 === e.type;
}
function E(e) {
    return 0 === e.type;
}
function w(e) {
    let t = ''.concat(e.name.includes(N.CR) ? '' : '@').concat(e.name);
    return {
        tag: {
            type: f.Fj.ROLE,
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
function A(e) {
    let t = (0, g.F6)(e, M.default, _.Z);
    return {
        tag: {
            type: f.Fj.CHANNEL,
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
((a = l || (l = {}))[(a.CHANNEL = 0)] = 'CHANNEL'), (a[(a.ROLE = 1)] = 'ROLE');
let k = C.memo(function (e) {
    var t;
    let { row: n, guildId: l, className: o } = e,
        { id: i, name: a } = n.record,
        r = (0, v.p9)({
            guildId: l,
            roleId: i,
            size: 16
        }),
        s = (0, x.e7)([I.Z], () => I.Z.getRole(l, i)),
        C = a.includes(N.CR) ? '' : '@',
        d = (0, b.useToken)(b.tokens.unsafe_rawColors.PRIMARY_300).hsl(),
        m = null !== (t = null == s ? void 0 : s.colorString) && void 0 !== t ? t : d;
    return (0, c.jsxs)('div', {
        className: u()(R.rowLabel, R.roleTagContainer, o),
        children: [
            (0, c.jsx)(b.RoleDot, {
                className: R.__invalid_roleDot,
                color: m,
                background: !1,
                tooltip: !1
            }),
            null != r
                ? (0, c.jsx)(H.Z, {
                      className: R.roleTagIcon,
                      ...r,
                      enableTooltip: !1
                  })
                : C,
            (0, c.jsx)(b.Text, {
                variant: V,
                className: R.roleTagLabel,
                children: a
            })
        ]
    });
});
function y(e) {
    let { channel: t, row: n, className: l } = e,
        o = null != t.parent_id,
        i = (0, p.KS)(t);
    return (0, c.jsxs)('div', {
        className: u()(R.rowLabel, R.channelLabel, { [R.hasParent]: o }, l),
        children: [
            null != i &&
                (0, c.jsx)(i, {
                    size: 'xs',
                    color: 'currentColor',
                    className: R.channelIcon
                }),
            (0, c.jsx)(b.Text, {
                variant: t.isCategory() ? 'eyebrow' : V,
                children: n.display
            })
        ]
    });
}
function B(e, t, n) {
    return T(e)
        ? (0, c.jsx)(
              k,
              {
                  row: e,
                  guildId: t,
                  className: n
              },
              e.record.id
          )
        : E(e)
          ? (0, c.jsx)(
                y,
                {
                    row: e,
                    channel: e.record,
                    className: n
                },
                e.record.id
            )
          : null;
}
function O(e) {
    let { guildId: t, roleRows: n = [], channelRows: l = [], selectedChannelIds: o = new Set(), selectedRoleIds: i = new Set(), onChange: a, placeholder: r, helperText: s, className: d } = e,
        m = (0, x.e7)([I.Z], () => I.Z.getRoles(t)),
        g = C.useMemo(
            () =>
                (function (e, t, n) {
                    if (null == e) return {};
                    let l = {};
                    return (
                        e.forEach((e) => {
                            let t = L.Z.getChannel(e);
                            null != t && (l[e] = A(t));
                        }),
                        t.forEach((e) => {
                            e in n && (l[e] = w(n[e]));
                        }),
                        l
                    );
                })(o, i, m),
            [o, i, m]
        ),
        p = C.useMemo(() => Object.keys(g), [g]),
        [H, j] = C.useState(''),
        [v, N] = C.useState(!1),
        [_, M] = C.useState(!1),
        [V, k] = C.useState(!1),
        y = C.useRef(null),
        { sections: O, sectionCounts: U } = C.useMemo(() => {
            let e = '' !== H ? l.filter((e) => h()(H, e.display.toLocaleLowerCase())) : l,
                t = '' !== H ? n.filter((e) => h()(H, e.display.toLocaleLowerCase())) : n,
                o = [],
                i = [];
            return (
                (o[0] = e),
                (i[0] = e.length),
                (o[1] = t),
                (i[1] = t.length),
                {
                    sections: o,
                    sectionCounts: i
                }
            );
        }, [H, l, n]),
        P = C.useCallback(
            (e) => {
                let t = Object.values(e),
                    n = t
                        .filter((e) => {
                            let { row: t } = e;
                            return E(t);
                        })
                        .map((e) => e.row.record.id),
                    l = t
                        .filter((e) => {
                            let { row: t } = e;
                            return T(t);
                        })
                        .map((e) => e.row.record.id);
                a(new Set(n), new Set(l));
            },
            [a]
        ),
        F = () => {
            N(!1), M(!1);
        };
    C.useEffect(() => {
        let e = setTimeout(() => {
            k(v || _);
        }, 32);
        return () => {
            clearTimeout(e);
        };
    }, [v, _]);
    let G = (e, t, n) => {
            n.stopPropagation(), n.preventDefault(), 2 === t ? N(e) : (1 === t || N(e), M(e));
        },
        z = C.useCallback(
            (e) => {
                let t = { ...g };
                E(e) ? (t[e.id] = A(e.record)) : T(e) && (t[e.id] = w(e.record)),
                    P(t),
                    j(''),
                    F(),
                    setTimeout(() => {
                        var e;
                        let t = null === (e = y.current) || void 0 === e ? void 0 : e.containerRef.current,
                            n = null == t ? void 0 : t.firstChild;
                        null != n &&
                            n.scrollTo({
                                top: n.scrollHeight,
                                behavior: 'smooth'
                            });
                    }, 16);
            },
            [P, g]
        ),
        q = C.useCallback(
            (e) => {
                let { section: n, row: l } = e,
                    o = O[n][l];
                return (0, c.jsx)(
                    b.Clickable,
                    {
                        className: u()(R.selectableSearchRow, R.rowHeight),
                        onClick: (e) => {
                            e.stopPropagation(), z(o);
                        },
                        children: (0, c.jsx)('div', {
                            className: R.rowContainer,
                            children: B(o, t, R.searchRowLabel)
                        })
                    },
                    o.id
                );
            },
            [t, z, O]
        ),
        Y = C.useMemo(
            () =>
                p.map((e) => {
                    var n, l;
                    return (
                        (n = g[e]),
                        (l = t),
                        {
                            ...n.tag,
                            label: B(n.row, l, R.noIndent)
                        }
                    );
                }),
            [g, p, t]
        );
    return (0, c.jsxs)('div', {
        className: u()(R.searchContainer, d),
        children: [
            (0, c.jsxs)('div', {
                className: R.searchBox,
                children: [
                    (0, c.jsx)(f.ZP, {
                        tags: Y,
                        maxHeight: 98,
                        size: f.ZP.Sizes.MEDIUM,
                        query: H,
                        ref: y,
                        onRemoveTag: (e) => {
                            let t = p[e],
                                { [t]: n, ...l } = g;
                            P(l), j(''), F();
                        },
                        onQueryChange: (e) => {
                            j(e.trim().toLocaleLowerCase());
                        },
                        placeholder: null != r ? r : Z.intl.string(Z.t.uqHLzc),
                        sections: [p.length],
                        inputProps: {
                            'aria-labelledby': D,
                            'aria-controls': S,
                            'aria-expanded': V,
                            onFocus: (e) => G(!0, 2, e),
                            onBlur: (e) => G(!1, 2, e)
                        }
                    }),
                    V &&
                        (0, c.jsx)('div', {
                            className: R.resultsListParent,
                            onFocus: (e) => G(!0, 1, e),
                            onBlur: (e) => G(!1, 1, e),
                            tabIndex: -1,
                            children: (0, c.jsx)(b.ListAuto, {
                                className: R.resultsListContainer,
                                innerClassName: R.resultsList,
                                sections: U,
                                renderRow: q,
                                rowHeight: 34,
                                renderSection: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? (0, c.jsx)(
                                              b.FormTitle,
                                              {
                                                  tag: 'h5',
                                                  className: u()(R.sectionTitle, R.sectionHeight),
                                                  children: Z.intl.string(Z.t.OGiMXF)
                                              },
                                              Z.intl.string(Z.t.OGiMXF)
                                          )
                                        : 1 === t
                                          ? (0, c.jsx)(
                                                b.FormTitle,
                                                {
                                                    tag: 'h5',
                                                    className: u()(R.sectionTitle, R.sectionHeight),
                                                    children: Z.intl.string(Z.t.LPJmLy)
                                                },
                                                Z.intl.string(Z.t.LPJmLy)
                                            )
                                          : null;
                                },
                                renderFooter: (e) => {
                                    let { section: t } = e;
                                    if (0 === t)
                                        return 0 === U[1] && U[0] > 0
                                            ? null
                                            : (0, c.jsx)('div', {
                                                  className: R.sectionFooter,
                                                  children: (0, c.jsx)(b.FormDivider, {})
                                              });
                                    return null;
                                },
                                sectionHeight: 24,
                                footerHeight: (e) => {
                                    if (0 === e) return 0 === U[1] && U[0] > 0 ? 0 : 32;
                                    return 0;
                                },
                                role: void 0,
                                innerRole: 'listbox',
                                innerId: S,
                                innerAriaOrientation: 'vertical'
                            })
                        })
                ]
            }),
            null != s &&
                (0, c.jsx)(b.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: R.helperText,
                    children: s
                })
        ]
    });
}
((r = o || (o = {}))[(r.CHANNELS = 0)] = 'CHANNELS'), (r[(r.ROLES = 1)] = 'ROLES'), ((s = i || (i = {}))[(s.NONE = 0)] = 'NONE'), (s[(s.LIST = 1)] = 'LIST'), (s[(s.INPUT = 2)] = 'INPUT');
