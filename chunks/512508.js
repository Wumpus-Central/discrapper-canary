n.d(t, {
    PM: () => I,
    WG: () => M,
    ZP: () => T
}),
    n(388685),
    n(781311);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(658722),
    s = n.n(i),
    c = n(442837),
    u = n(481060),
    d = n(461745),
    C = n(933557),
    m = n(471445),
    b = n(91218),
    p = n(313201),
    f = n(518738),
    h = n(884902),
    j = n(662594),
    g = n(592125),
    x = n(430824),
    O = n(699516),
    y = n(594174),
    v = n(388032),
    N = n(962923);
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    var t = (function (e, t) {
        if ('object' !== S(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== S(r)) return r;
            throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === S(t) ? t : String(t);
}
function S(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let D = (0, p.hQ)(),
    Z = (0, p.hQ)(),
    L = 'text-sm/medium';
function R(e) {
    return 1 === e.type;
}
function P(e) {
    return 0 === e.type;
}
function M(e) {
    let t = ''.concat(!e.name.includes(j.CR) ? '@' : '').concat(e.name);
    return {
        tag: {
            type: d.Fj.ROLE,
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
function I(e) {
    let t = (0, C.F6)(e, y.default, O.Z);
    return {
        tag: {
            type: d.Fj.CHANNEL,
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
let V = l.memo(function (e) {
    var t;
    let { row: n, guildId: l, className: o } = e,
        { id: i, name: s } = n.record,
        d = (0, f.p9)({
            guildId: l,
            roleId: i,
            size: 16
        }),
        C = (0, c.e7)([x.Z], () => x.Z.getRole(l, i)),
        m = s.includes(j.CR) ? '' : '@',
        p = (0, u.dQu)(u.TVs.unsafe_rawColors.PRIMARY_300).hsl(),
        g = null != (t = null == C ? void 0 : C.colorString) ? t : p,
        O = (0, h.X)(l, null == C ? void 0 : C.colorStrings);
    return (0, r.jsxs)('div', {
        className: a()(N.rowLabel, N.roleTagContainer, o),
        children: [
            (0, r.jsx)(u.FhE, {
                className: N.__invalid_roleDot,
                color: g,
                colors: O,
                background: !1,
                tooltip: !1
            }),
            null != d ? (0, r.jsx)(b.Z, _(H({ className: N.roleTagIcon }, d), { enableTooltip: !1 })) : m,
            (0, r.jsx)(u.Text, {
                variant: L,
                className: N.roleTagLabel,
                children: s
            })
        ]
    });
});
function E(e) {
    let { channel: t, row: n, className: l } = e,
        o = null != t.parent_id,
        i = (0, m.KS)(t);
    return (0, r.jsxs)('div', {
        className: a()(N.rowLabel, N.channelLabel, { [N.hasParent]: o }, l),
        children: [
            null != i &&
                (0, r.jsx)(i, {
                    size: 'xs',
                    color: 'currentColor',
                    className: N.channelIcon
                }),
            (0, r.jsx)(u.Text, {
                variant: t.isCategory() ? 'eyebrow' : L,
                children: n.display
            })
        ]
    });
}
function k(e, t, n) {
    return R(e)
        ? (0, r.jsx)(
              V,
              {
                  row: e,
                  guildId: t,
                  className: n
              },
              e.record.id
          )
        : P(e)
          ? (0, r.jsx)(
                E,
                {
                    row: e,
                    channel: e.record,
                    className: n
                },
                e.record.id
            )
          : null;
}
function T(e) {
    let { guildId: t, roleRows: n = [], channelRows: o = [], selectedChannelIds: i = new Set(), selectedRoleIds: C = new Set(), onChange: m, placeholder: b, helperText: p, className: f } = e,
        h = (0, c.e7)([x.Z], () => x.Z.getRoles(t)),
        j = l.useMemo(
            () =>
                (function (e, t, n) {
                    if (null == e) return {};
                    let r = {};
                    return (
                        e.forEach((e) => {
                            let t = g.Z.getChannel(e);
                            null != t && (r[e] = I(t));
                        }),
                        t.forEach((e) => {
                            e in n && (r[e] = M(n[e]));
                        }),
                        r
                    );
                })(i, C, h),
            [i, C, h]
        ),
        O = l.useMemo(() => Object.keys(j), [j]),
        [y, S] = l.useState(''),
        [L, V] = l.useState(!1),
        [E, T] = l.useState(!1),
        [A, W] = l.useState(!1),
        B = l.useRef(null),
        { sections: U, sectionCounts: F } = l.useMemo(() => {
            let e = '' !== y ? o.filter((e) => s()(y, e.display.toLocaleLowerCase())) : o,
                t = '' !== y ? n.filter((e) => s()(y, e.display.toLocaleLowerCase())) : n,
                r = [],
                l = [];
            return (
                (r[0] = e),
                (l[0] = e.length),
                (r[1] = t),
                (l[1] = t.length),
                {
                    sections: r,
                    sectionCounts: l
                }
            );
        }, [y, o, n]),
        z = l.useCallback(
            (e) => {
                let t = Object.values(e),
                    n = t
                        .filter((e) => {
                            let { row: t } = e;
                            return P(t);
                        })
                        .map((e) => e.row.record.id),
                    r = t
                        .filter((e) => {
                            let { row: t } = e;
                            return R(t);
                        })
                        .map((e) => e.row.record.id);
                m(new Set(n), new Set(r));
            },
            [m]
        ),
        G = () => {
            V(!1), T(!1);
        };
    l.useEffect(() => {
        let e = setTimeout(() => {
            W(L || E);
        }, 32);
        return () => {
            clearTimeout(e);
        };
    }, [L, E]);
    let q = (e, t, n) => {
            n.stopPropagation(), n.preventDefault(), 2 === t ? V(e) : (1 === t || V(e), T(e));
        },
        Y = l.useCallback(
            (e) => {
                let t = H({}, j);
                P(e) ? (t[e.id] = I(e.record)) : R(e) && (t[e.id] = M(e.record)),
                    z(t),
                    S(''),
                    G(),
                    setTimeout(() => {
                        var e;
                        let t = null == (e = B.current) ? void 0 : e.containerRef.current,
                            n = null == t ? void 0 : t.firstChild;
                        null != n &&
                            n.scrollTo({
                                top: n.scrollHeight,
                                behavior: 'smooth'
                            });
                    }, 16);
            },
            [z, j]
        ),
        X = l.useCallback(
            (e) => {
                let { section: n, row: l } = e,
                    o = U[n][l];
                return (0, r.jsx)(
                    u.P3F,
                    {
                        className: a()(N.selectableSearchRow, N.rowHeight),
                        onClick: (e) => {
                            e.stopPropagation(), Y(o);
                        },
                        children: (0, r.jsx)('div', {
                            className: N.rowContainer,
                            children: k(o, t, N.searchRowLabel)
                        })
                    },
                    o.id
                );
            },
            [t, Y, U]
        ),
        J = l.useMemo(
            () =>
                O.map((e) => {
                    var n;
                    return (n = j[e]), _(H({}, n.tag), { label: k(n.row, t, N.noIndent) });
                }),
            [j, O, t]
        );
    return (0, r.jsxs)('div', {
        className: a()(N.searchContainer, f),
        children: [
            (0, r.jsxs)('div', {
                className: N.searchBox,
                children: [
                    (0, r.jsx)(d.ZP, {
                        tags: J,
                        maxHeight: 98,
                        size: d.ZP.Sizes.MEDIUM,
                        query: y,
                        ref: B,
                        onRemoveTag: (e) => {
                            let t = O[e],
                                { [t]: n } = j;
                            z(
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        l = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                l = {},
                                                o = Object.keys(e);
                                            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                            return l;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                                    }
                                    return l;
                                })(j, [t].map(w))
                            ),
                                S(''),
                                G();
                        },
                        onQueryChange: (e) => {
                            S(e.trim().toLocaleLowerCase());
                        },
                        placeholder: null != b ? b : v.NW.string(v.t.uqHLzc),
                        sections: [O.length],
                        inputProps: {
                            'aria-labelledby': D,
                            'aria-controls': Z,
                            'aria-expanded': A,
                            onFocus: (e) => q(!0, 2, e),
                            onBlur: (e) => q(!1, 2, e)
                        }
                    }),
                    A &&
                        (0, r.jsx)('div', {
                            className: N.resultsListParent,
                            onFocus: (e) => q(!0, 1, e),
                            onBlur: (e) => q(!1, 1, e),
                            tabIndex: -1,
                            children: (0, r.jsx)(u._2F, {
                                className: N.resultsListContainer,
                                innerClassName: N.resultsList,
                                sections: F,
                                renderRow: X,
                                rowHeight: 34,
                                renderSection: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? (0, r.jsx)(
                                              u.vwX,
                                              {
                                                  tag: 'h5',
                                                  className: a()(N.sectionTitle, N.sectionHeight),
                                                  children: v.NW.string(v.t.OGiMXF)
                                              },
                                              v.NW.string(v.t.OGiMXF)
                                          )
                                        : 1 === t
                                          ? (0, r.jsx)(
                                                u.vwX,
                                                {
                                                    tag: 'h5',
                                                    className: a()(N.sectionTitle, N.sectionHeight),
                                                    children: v.NW.string(v.t.LPJmLy)
                                                },
                                                v.NW.string(v.t.LPJmLy)
                                            )
                                          : null;
                                },
                                renderFooter: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? 0 === F[1] && F[0] > 0
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: N.sectionFooter,
                                                  children: (0, r.jsx)(u.$i$, {})
                                              })
                                        : null;
                                },
                                sectionHeight: 24,
                                footerHeight: (e) => (0 === e ? (0 === F[1] && F[0] > 0 ? 0 : 32) : 0),
                                role: void 0,
                                innerRole: 'listbox',
                                innerId: Z,
                                innerAriaOrientation: 'vertical'
                            })
                        })
                ]
            }),
            null != p &&
                (0, r.jsx)(u.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: N.helperText,
                    children: p
                })
        ]
    });
}
