n.d(t, {
    PM: () => M,
    WG: () => I,
    ZP: () => k
}),
    n(388685),
    n(781311);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(658722),
    s = n.n(a),
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
    v = n(699516),
    O = n(594174),
    y = n(388032),
    _ = n(962923);
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
function w(e, t) {
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
function N(e) {
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
function I(e) {
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
function M(e) {
    let t = (0, C.F6)(e, O.default, v.Z);
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
        { id: a, name: s } = n.record,
        d = (0, f.p9)({
            guildId: l,
            roleId: a,
            size: 16
        }),
        C = (0, c.e7)([x.Z], () => x.Z.getRole(l, a)),
        m = s.includes(j.CR) ? '' : '@',
        p = (0, u.dQu)(u.TVs.unsafe_rawColors.PRIMARY_300).hsl(),
        g = null != (t = null == C ? void 0 : C.colorString) ? t : p,
        v = (0, h.X)(l, null == C ? void 0 : C.colorStrings);
    return (0, r.jsxs)('div', {
        className: i()(_.rowLabel, _.roleTagContainer, o),
        children: [
            (0, r.jsx)(u.FhE, {
                className: _.__invalid_roleDot,
                color: g,
                colors: v,
                background: !1,
                tooltip: !1
            }),
            null != d ? (0, r.jsx)(b.Z, w(H({ className: _.roleTagIcon }, d), { enableTooltip: !1 })) : m,
            (0, r.jsx)(u.Text, {
                variant: L,
                className: _.roleTagLabel,
                children: s
            })
        ]
    });
});
function E(e) {
    let { channel: t, row: n, className: l } = e,
        o = null != t.parent_id,
        a = (0, m.KS)(t);
    return (0, r.jsxs)('div', {
        className: i()(_.rowLabel, _.channelLabel, { [_.hasParent]: o }, l),
        children: [
            null != a &&
                (0, r.jsx)(a, {
                    size: 'xs',
                    color: 'currentColor',
                    className: _.channelIcon
                }),
            (0, r.jsx)(u.Text, {
                variant: t.isCategory() ? 'eyebrow' : L,
                children: n.display
            })
        ]
    });
}
function T(e, t, n) {
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
function k(e) {
    let { guildId: t, roleRows: n = [], channelRows: o = [], selectedChannelIds: a = new Set(), selectedRoleIds: C = new Set(), onChange: m, placeholder: b, helperText: p, className: f } = e,
        h = (0, c.e7)([x.Z], () => x.Z.getRoles(t)),
        j = l.useMemo(
            () =>
                (function (e, t, n) {
                    if (null == e) return {};
                    let r = {};
                    return (
                        e.forEach((e) => {
                            let t = g.Z.getChannel(e);
                            null != t && (r[e] = M(t));
                        }),
                        t.forEach((e) => {
                            e in n && (r[e] = I(n[e]));
                        }),
                        r
                    );
                })(a, C, h),
            [a, C, h]
        ),
        v = l.useMemo(() => Object.keys(j), [j]),
        [O, S] = l.useState(''),
        [L, V] = l.useState(!1),
        [E, k] = l.useState(!1),
        [A, B] = l.useState(!1),
        U = l.useRef(null),
        { sections: F, sectionCounts: z } = l.useMemo(() => {
            let e = '' !== O ? o.filter((e) => s()(O, e.display.toLocaleLowerCase())) : o,
                t = '' !== O ? n.filter((e) => s()(O, e.display.toLocaleLowerCase())) : n,
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
        }, [O, o, n]),
        q = l.useCallback(
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
            V(!1), k(!1);
        };
    l.useEffect(() => {
        let e = setTimeout(() => {
            B(L || E);
        }, 32);
        return () => {
            clearTimeout(e);
        };
    }, [L, E]);
    let Y = (e, t, n) => {
            n.stopPropagation(), n.preventDefault(), 2 === t ? V(e) : (1 === t || V(e), k(e));
        },
        W = l.useCallback(
            (e) => {
                let t = H({}, j);
                P(e) ? (t[e.id] = M(e.record)) : R(e) && (t[e.id] = I(e.record)),
                    q(t),
                    S(''),
                    G(),
                    setTimeout(() => {
                        var e;
                        let t = null == (e = U.current) ? void 0 : e.containerRef.current,
                            n = null == t ? void 0 : t.firstChild;
                        null != n &&
                            n.scrollTo({
                                top: n.scrollHeight,
                                behavior: 'smooth'
                            });
                    }, 16);
            },
            [q, j]
        ),
        X = l.useCallback(
            (e) => {
                let { section: n, row: l } = e,
                    o = F[n][l];
                return (0, r.jsx)(
                    u.P3F,
                    {
                        className: i()(_.selectableSearchRow, _.rowHeight),
                        onClick: (e) => {
                            e.stopPropagation(), W(o);
                        },
                        children: (0, r.jsx)('div', {
                            className: _.rowContainer,
                            children: T(o, t, _.searchRowLabel)
                        })
                    },
                    o.id
                );
            },
            [t, W, F]
        ),
        K = l.useMemo(
            () =>
                v.map((e) => {
                    var n;
                    return (n = j[e]), w(H({}, n.tag), { label: T(n.row, t, _.noIndent) });
                }),
            [j, v, t]
        );
    return (0, r.jsxs)('div', {
        className: i()(_.searchContainer, f),
        children: [
            (0, r.jsxs)('div', {
                className: _.searchBox,
                children: [
                    (0, r.jsx)(d.ZP, {
                        tags: K,
                        maxHeight: 98,
                        size: d.ZP.Sizes.MEDIUM,
                        query: O,
                        ref: U,
                        onRemoveTag: (e) => {
                            let t = v[e],
                                { [t]: n } = j;
                            q(
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
                                })(j, [t].map(N))
                            ),
                                S(''),
                                G();
                        },
                        onQueryChange: (e) => {
                            S(e.trim().toLocaleLowerCase());
                        },
                        placeholder: null != b ? b : y.intl.string(y.t.uqHLzc),
                        sections: [v.length],
                        inputProps: {
                            'aria-labelledby': D,
                            'aria-controls': Z,
                            'aria-expanded': A,
                            onFocus: (e) => Y(!0, 2, e),
                            onBlur: (e) => Y(!1, 2, e)
                        }
                    }),
                    A &&
                        (0, r.jsx)('div', {
                            className: _.resultsListParent,
                            onFocus: (e) => Y(!0, 1, e),
                            onBlur: (e) => Y(!1, 1, e),
                            tabIndex: -1,
                            children: (0, r.jsx)(u._2F, {
                                className: _.resultsListContainer,
                                innerClassName: _.resultsList,
                                sections: z,
                                renderRow: X,
                                rowHeight: 34,
                                renderSection: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? (0, r.jsx)(
                                              u.vwX,
                                              {
                                                  tag: 'h5',
                                                  className: i()(_.sectionTitle, _.sectionHeight),
                                                  children: y.intl.string(y.t.OGiMXF)
                                              },
                                              y.intl.string(y.t.OGiMXF)
                                          )
                                        : 1 === t
                                          ? (0, r.jsx)(
                                                u.vwX,
                                                {
                                                    tag: 'h5',
                                                    className: i()(_.sectionTitle, _.sectionHeight),
                                                    children: y.intl.string(y.t.LPJmLy)
                                                },
                                                y.intl.string(y.t.LPJmLy)
                                            )
                                          : null;
                                },
                                renderFooter: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? 0 === z[1] && z[0] > 0
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: _.sectionFooter,
                                                  children: (0, r.jsx)(u.$i$, {})
                                              })
                                        : null;
                                },
                                sectionHeight: 24,
                                footerHeight: (e) => (0 === e ? (0 === z[1] && z[0] > 0 ? 0 : 32) : 0),
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
                    className: _.helperText,
                    children: p
                })
        ]
    });
}
