n.d(t, { Z: () => D }), n(415506), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(529103),
    u = n(194359),
    d = n(410575),
    p = n(100527),
    h = n(906732),
    f = n(835473),
    g = n(795448),
    m = n(699516),
    b = n(974042),
    _ = n(451478),
    E = n(701861),
    O = n(437314),
    N = n(696577),
    y = n(163417),
    I = n(830880),
    v = n(492347),
    C = n(42575),
    S = n(617015),
    T = n(981631),
    P = n(388032),
    j = n(222001);
function A(e) {
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
function Z(e, t) {
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
let x = [];
function L() {
    c.Z.setSection(T.pJs.ADD_FRIEND);
}
function w() {
    (0, s.ZDy)(async () => {
        let { default: e } = await n.e('36312').then(n.bind(n, 153932));
        return (t) => (0, r.jsx)(e, A({}, t));
    });
}
function R(e) {
    let { section: t, showSpamCta: n } = e,
        l = i.useMemo(() => (n ? w : t !== T.pJs.PENDING ? L : void 0), [n, t]);
    return (0, r.jsx)('div', {
        className: j.emptyStateContainer,
        children: (0, r.jsx)(
            O.Z,
            {
                type: t,
                onClick: l
            },
            t
        )
    });
}
let D = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, h.ZP)(p.Z.FRIENDS_LIST),
        { rows: l, section: c } = (0, o.cj)([b.ZP], () => b.ZP.getState()),
        L = (0, o.e7)([_.Z], () => _.Z.isFocused()),
        { relationshipCount: D, hasBlockedOrIgnored: k } = (0, o.cj)([m.Z], () => ({
            relationshipCount: m.Z.getRelationshipCount(),
            hasBlockedOrIgnored: m.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        [M, U] = i.useState(() => {
            let e = {};
            for (let t of Object.values(T.pJs)) e[t] = '';
            return e;
        }),
        G = i.useCallback(
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
                    case T.pJs.PENDING:
                        return (0, r.jsx)(N.Z, Z(A({}, n), { isFocused: L }), t);
                    case T.pJs.SUGGESTIONS:
                        return (0, r.jsx)(C.Z, Z(A({}, n), { isFocused: L }), t);
                    case T.pJs.ONLINE:
                    case T.pJs.ALL:
                    default:
                        return (0, r.jsx)(E.Z, Z(A({}, n), { isFocused: L }), t);
                }
            },
            [L, c]
        ),
        W = i.useCallback(
            (e) => {
                U(Z(A({}, M), { [c]: e }));
            },
            [M, c]
        ),
        V = i.useCallback(() => {
            U(Z(A({}, M), { [c]: '' }));
        }, [M, c]),
        B = i.useMemo(() => c === T.pJs.PENDING && (l.filter(T.pJs.SPAM).length > 0 || l.filter(T.pJs.PENDING_IGNORED).length > 0), [l, c]),
        H = i.useMemo(() => l.filter(c, M[c]), [l, M, c]),
        F = c === T.pJs.PENDING,
        z = i.useMemo(() => {
            if (!F) return x;
            let e = [];
            return (
                H.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [F, H]);
    (0, f.Z)(z, F);
    let Y = i.useMemo(() => {
            if (c !== T.pJs.PENDING) return [H];
            {
                let e = [],
                    t = [];
                return (
                    H.forEach((n) => {
                        n.type === T.OGo.PENDING_INCOMING ? e.push(n) : n.type === T.OGo.PENDING_OUTGOING && t.push(n);
                    }),
                    [e, t]
                );
            }
        }, [H, c]),
        K = i.useMemo(() => H.filter((e) => e.type === T.OGo.PENDING_INCOMING).length, [H]),
        q = c === T.pJs.PENDING && K > 0 && K >= S.yf,
        Q = i.useCallback(
            (e) => {
                e.stopPropagation(), u.Z.confirmClearPendingRelationships(K);
            },
            [K]
        ),
        X = i.useCallback(
            (e) => {
                let n = (function (e, t, n) {
                    switch (e) {
                        case T.pJs.ONLINE:
                            return P.NW.formatToPlainString(P.t.BagU2d, { online: t.toString() });
                        case T.pJs.PENDING:
                            if (0 === n) return P.NW.formatToPlainString(P.t['g+3FIS'], { count: t.toString() });
                            if (1 === n) return P.NW.formatToPlainString(P.t.npJsRk, { count: t.toString() });
                            throw Error('Unexpected pending friend requests section index: '.concat(n));
                        case T.pJs.SUGGESTIONS:
                            return P.NW.formatToPlainString(P.t['DYMZ/v'], { count: t.toString() });
                        default:
                            return P.NW.formatToPlainString(P.t.rHRrhI, { count: t.toString() });
                    }
                })(c, Y[e].length, e);
                return c === T.pJs.PENDING && 0 === e
                    ? (0, r.jsxs)(
                          'div',
                          {
                              className: j.sectionTitle,
                              children: [
                                  (0, r.jsx)(v.Z, {
                                      id: t,
                                      title: n
                                  }),
                                  q &&
                                      (0, r.jsx)(s.zxk, {
                                          look: s.iLD.LINK,
                                          color: s.Ttl.LINK,
                                          className: j.clearButton,
                                          size: s.zxk.Sizes.TINY,
                                          onClick: Q,
                                          'aria-label': P.NW.string(P.t.O8k7Oz),
                                          children: P.NW.string(P.t.O8k7Oz)
                                      })
                              ]
                          },
                          n
                      )
                    : (0, r.jsx)(
                          'div',
                          {
                              className: j.sectionTitle,
                              children: (0, r.jsx)(v.Z, {
                                  id: t,
                                  title: n
                              })
                          },
                          n
                      );
            },
            [Y, c, t, q, Q]
        );
    if (
        (i.useEffect(() => {
            c === T.pJs.ALL && (0, g.d$)();
        }, [c]),
        0 === H.length && '' === M[c])
    )
        return (0, r.jsx)(R, {
            section: c,
            showSpamCta: B
        });
    let J = '' !== M[c],
        $ = 0 === H.length && J;
    return (0, r.jsx)(h.Gt, {
        value: n,
        children: (0, r.jsxs)(d.Z, {
            section: T.jXE.FRIENDS_LIST,
            children: [
                k && (0, r.jsx)(I.R, {}),
                (0, r.jsx)(s.E1j, {
                    className: a()(j.searchBar, $ ? j.searchEmptyState : null),
                    query: M[c],
                    onChange: W,
                    onClear: V,
                    size: s.E1j.Sizes.MEDIUM
                }),
                (0, r.jsx)(y.Z, {
                    rows: Y,
                    renderRow: G,
                    renderSection: X,
                    sectionFilter: c,
                    isVirtualizedList: D >= S.nG,
                    hasSearchQuery: J,
                    footer:
                        B && !$
                            ? (0, r.jsx)(s.zxk, {
                                  look: s.zxk.Looks.LINK,
                                  color: j.viewSpamButtonColor,
                                  className: j.viewSpamButton,
                                  onClick: w,
                                  size: s.PhG.TINY,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      children: P.NW.string(P.t.R40bU1)
                                  })
                              })
                            : null
                }),
                $ &&
                    (0, r.jsx)('div', {
                        className: j.emptyStateContainer,
                        children: (0, r.jsx)(O.Z, { type: O.j.SECTION_NO_RESULTS }, c)
                    })
            ]
        })
    });
};
