n.d(t, { Z: () => M }), n(411104), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(529103),
    u = n(194359),
    d = n(410575),
    p = n(100527),
    h = n(906732),
    g = n(835473),
    f = n(372460),
    m = n(327419),
    b = n(795448),
    _ = n(699516),
    E = n(974042),
    O = n(451478),
    N = n(701861),
    v = n(437314),
    y = n(696577),
    I = n(163417),
    C = n(830880),
    S = n(492347),
    T = n(42575),
    P = n(617015),
    j = n(981631),
    A = n(388032),
    Z = n(137184);
function x(e) {
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
function L(e, t) {
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
let w = [];
function R() {
    c.Z.setSection(j.pJs.ADD_FRIEND);
}
function D() {
    (0, s.ZDy)(async () => {
        let { default: e } = await n.e('36312').then(n.bind(n, 153932));
        return (t) => (0, r.jsx)(e, x({}, t));
    });
}
function k(e) {
    let { section: t, showSpamCta: n } = e,
        l = i.useMemo(() => (n ? D : t !== j.pJs.PENDING ? R : void 0), [n, t]);
    return (0, r.jsx)('div', {
        className: Z.emptyStateContainer,
        children: (0, r.jsx)(
            v.Z,
            {
                type: t,
                onClick: l
            },
            t
        )
    });
}
let M = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, h.ZP)(p.Z.FRIENDS_LIST),
        { rows: l, section: c } = (0, a.cj)([E.ZP], () => E.ZP.getState()),
        R = (0, a.e7)([O.Z], () => O.Z.isFocused()),
        { relationshipCount: M, hasBlockedOrIgnored: U } = (0, a.cj)([_.Z], () => ({
            relationshipCount: _.Z.getRelationshipCount(),
            hasBlockedOrIgnored: _.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        G = (0, f.wn)({ location: 'PeopleList' }),
        W = (0, m.U)({ location: 'PeopleList' }),
        [V, B] = i.useState(() => {
            let e = {};
            for (let t of Object.values(j.pJs)) e[t] = '';
            return e;
        }),
        H = i.useCallback(
            (e) => {
                let { key: t } = e,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(e, ['key']);
                switch (c) {
                    case j.pJs.PENDING:
                        return (0, r.jsx)(
                            y.Z,
                            L(x({}, n), {
                                isFocused: R,
                                disambiguateGameRelationships: W
                            }),
                            t
                        );
                    case j.pJs.SUGGESTIONS:
                        return (0, r.jsx)(T.Z, L(x({}, n), { isFocused: R }), t);
                    case j.pJs.ONLINE:
                    case j.pJs.ALL:
                    default:
                        return (0, r.jsx)(N.Z, L(x({}, n), { isFocused: R }), t);
                }
            },
            [R, W, c]
        ),
        F = i.useCallback(
            (e) => {
                B(L(x({}, V), { [c]: e }));
            },
            [V, c]
        ),
        z = i.useCallback(() => {
            B(L(x({}, V), { [c]: '' }));
        }, [V, c]),
        Y = i.useMemo(() => c === j.pJs.PENDING && (l.filter(j.pJs.SPAM).length > 0 || l.filter(j.pJs.PENDING_IGNORED).length > 0), [l, c]),
        K = i.useMemo(() => l.filter(c, V[c]), [l, V, c]),
        q = G && c === j.pJs.PENDING,
        X = i.useMemo(() => {
            if (!q) return w;
            let e = [];
            return (
                K.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [q, K]);
    (0, g.Z)(X, q);
    let Q = i.useMemo(() => {
            if (c === j.pJs.PENDING) {
                let e = [],
                    t = [];
                return (
                    K.forEach((n) => {
                        n.type === j.OGo.PENDING_INCOMING ? e.push(n) : n.type === j.OGo.PENDING_OUTGOING && t.push(n);
                    }),
                    [e, t]
                );
            }
            return [K];
        }, [K, c]),
        J = i.useMemo(() => K.filter((e) => e.type === j.OGo.PENDING_INCOMING).length, [K]),
        $ = c === j.pJs.PENDING && J > 0 && J >= P.yf,
        ee = i.useCallback(
            (e) => {
                e.stopPropagation(), u.Z.confirmClearPendingRelationships(J);
            },
            [J]
        ),
        et = i.useCallback(
            (e) => {
                let n = (function (e, t, n) {
                    switch (e) {
                        case j.pJs.ONLINE:
                            return A.NW.formatToPlainString(A.t.BagU2d, { online: t.toString() });
                        case j.pJs.PENDING:
                            if (0 === n) return A.NW.formatToPlainString(A.t['g+3FIS'], { count: t.toString() });
                            if (1 === n) return A.NW.formatToPlainString(A.t.npJsRk, { count: t.toString() });
                            throw Error('Unexpected pending friend requests section index: '.concat(n));
                        case j.pJs.SUGGESTIONS:
                            return A.NW.formatToPlainString(A.t['DYMZ/v'], { count: t.toString() });
                        default:
                            return A.NW.formatToPlainString(A.t.rHRrhI, { count: t.toString() });
                    }
                })(c, Q[e].length, e);
                return c === j.pJs.PENDING && 0 === e
                    ? (0, r.jsxs)(
                          'div',
                          {
                              className: Z.sectionTitle,
                              children: [
                                  (0, r.jsx)(S.Z, {
                                      id: t,
                                      title: n
                                  }),
                                  $ &&
                                      (0, r.jsx)(s.zxk, {
                                          look: s.iLD.LINK,
                                          color: s.Ttl.LINK,
                                          className: Z.clearButton,
                                          size: s.zxk.Sizes.TINY,
                                          onClick: ee,
                                          'aria-label': A.NW.string(A.t.O8k7Oz),
                                          children: A.NW.string(A.t.O8k7Oz)
                                      })
                              ]
                          },
                          n
                      )
                    : (0, r.jsx)(
                          'div',
                          {
                              className: Z.sectionTitle,
                              children: (0, r.jsx)(S.Z, {
                                  id: t,
                                  title: n
                              })
                          },
                          n
                      );
            },
            [Q, c, t, $, ee]
        );
    if (
        (i.useEffect(() => {
            c === j.pJs.ALL && (0, b.d$)();
        }, [c]),
        0 === K.length && '' === V[c])
    )
        return (0, r.jsx)(k, {
            section: c,
            showSpamCta: Y
        });
    let en = '' !== V[c],
        er = 0 === K.length && en;
    return (0, r.jsx)(h.Gt, {
        value: n,
        children: (0, r.jsxs)(d.Z, {
            section: j.jXE.FRIENDS_LIST,
            children: [
                U && (0, r.jsx)(C.R, {}),
                (0, r.jsx)(s.E1j, {
                    className: o()(Z.searchBar, er ? Z.searchEmptyState : null),
                    query: V[c],
                    onChange: F,
                    onClear: z,
                    size: s.E1j.Sizes.MEDIUM
                }),
                (0, r.jsx)(I.Z, {
                    rows: Q,
                    renderRow: H,
                    renderSection: et,
                    sectionFilter: c,
                    isVirtualizedList: M >= P.nG,
                    hasSearchQuery: en,
                    footer:
                        Y && !er
                            ? (0, r.jsx)(s.zxk, {
                                  look: s.zxk.Looks.LINK,
                                  color: Z.viewSpamButtonColor,
                                  className: Z.viewSpamButton,
                                  onClick: D,
                                  size: s.PhG.TINY,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      children: A.NW.string(A.t.R40bU1)
                                  })
                              })
                            : null
                }),
                er &&
                    (0, r.jsx)('div', {
                        className: Z.emptyStateContainer,
                        children: (0, r.jsx)(v.Z, { type: v.j.SECTION_NO_RESULTS }, c)
                    })
            ]
        })
    });
};
