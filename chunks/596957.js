(n.d(t, { Z: () => k }), n(415506), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(529103),
    d = n(194359),
    p = n(410575),
    h = n(100527),
    f = n(906732),
    g = n(835473),
    m = n(795448),
    b = n(699516),
    _ = n(974042),
    E = n(451478),
    O = n(701861),
    y = n(437314),
    I = n(696577),
    v = n(163417),
    C = n(830880),
    S = n(492347),
    N = n(42575),
    T = n(617015),
    P = n(981631),
    j = n(388032),
    A = n(222001);
function Z(e) {
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
}
function x(e, t) {
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
function L() {
    u.Z.transitionToSection(P.pJs.ADD_FRIEND, { explicit: !0 });
}
function R() {
    (0, c.ZDy)(async () => {
        let { default: e } = await n.e('36312').then(n.bind(n, 153932));
        return (t) => (0, r.jsx)(e, Z({}, t));
    });
}
function D(e) {
    let { section: t, showSpamCta: n } = e,
        l = i.useMemo(() => (n ? R : t !== P.pJs.PENDING ? L : void 0), [n, t]);
    return (0, r.jsx)('div', {
        className: A.emptyStateContainer,
        children: (0, r.jsx)(
            y.Z,
            {
                type: t,
                onClick: l
            },
            t
        )
    });
}
let k = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, f.ZP)(h.Z.FRIENDS_LIST),
        { rows: l, section: u } = (0, o.cj)([_.ZP], () => _.ZP.getState()),
        L = (0, o.e7)([E.Z], () => E.Z.isFocused()),
        { relationshipCount: k, hasBlockedOrIgnored: M } = (0, o.cj)([b.Z], () => ({
            relationshipCount: b.Z.getRelationshipCount(),
            hasBlockedOrIgnored: b.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        [U, G] = i.useState(() => {
            let e = {};
            for (let t of Object.values(P.pJs)) e[t] = '';
            return e;
        }),
        B = i.useCallback(
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
                                for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                        }
                        return i;
                    })(e, ['key']);
                switch (u) {
                    case P.pJs.PENDING:
                        return (0, r.jsx)(I.Z, x(Z({}, n), { isFocused: L }), t);
                    case P.pJs.SUGGESTIONS:
                        return (0, r.jsx)(N.Z, x(Z({}, n), { isFocused: L }), t);
                    case P.pJs.ONLINE:
                    case P.pJs.ALL:
                    default:
                        return (0, r.jsx)(O.Z, x(Z({}, n), { isFocused: L }), t);
                }
            },
            [L, u]
        ),
        V = i.useCallback(
            (e) => {
                G(x(Z({}, U), { [u]: e }));
            },
            [U, u]
        ),
        H = i.useCallback(() => {
            G(x(Z({}, U), { [u]: '' }));
        }, [U, u]),
        F = i.useMemo(() => u === P.pJs.PENDING && (l.filter(P.pJs.SPAM).length > 0 || l.filter(P.pJs.PENDING_IGNORED).length > 0), [l, u]),
        z = i.useMemo(() => l.filter(u, U[u]), [l, U, u]),
        W = u === P.pJs.PENDING,
        Y = i.useMemo(() => {
            if (!W) return w;
            let e = [];
            return (
                z.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [W, z]);
    (0, g.Z)(Y, W);
    let K = i.useMemo(() => {
            if (u !== P.pJs.PENDING) return [z];
            {
                let e = [],
                    t = [];
                return (
                    z.forEach((n) => {
                        n.type === P.OGo.PENDING_INCOMING ? e.push(n) : n.type === P.OGo.PENDING_OUTGOING && t.push(n);
                    }),
                    [e, t]
                );
            }
        }, [z, u]),
        q = i.useMemo(() => z.filter((e) => e.type === P.OGo.PENDING_INCOMING).length, [z]),
        Q = u === P.pJs.PENDING && q > 0 && q >= T.yf,
        X = i.useCallback(
            (e) => {
                (e.stopPropagation(), d.Z.confirmClearPendingRelationships(q));
            },
            [q]
        ),
        J = i.useCallback(
            (e) => {
                let n = (function (e, t, n) {
                    switch (e) {
                        case P.pJs.ONLINE:
                            return j.intl.formatToPlainString(j.t.BagU2d, { online: t.toString() });
                        case P.pJs.PENDING:
                            if (0 === n) return j.intl.formatToPlainString(j.t['g+3FIS'], { count: t.toString() });
                            if (1 === n) return j.intl.formatToPlainString(j.t.npJsRk, { count: t.toString() });
                            throw Error('Unexpected pending friend requests section index: '.concat(n));
                        case P.pJs.SUGGESTIONS:
                            return j.intl.formatToPlainString(j.t['DYMZ/v'], { count: t.toString() });
                        default:
                            return j.intl.formatToPlainString(j.t.rHRrhI, { count: t.toString() });
                    }
                })(u, K[e].length, e);
                return u === P.pJs.PENDING && 0 === e
                    ? (0, r.jsxs)(
                          'div',
                          {
                              className: A.sectionTitle,
                              children: [
                                  (0, r.jsx)(S.Z, {
                                      id: t,
                                      title: n
                                  }),
                                  Q &&
                                      (0, r.jsx)(s.zx, {
                                          look: s.iL.LINK,
                                          color: s.Tt.LINK,
                                          className: A.clearButton,
                                          size: s.zx.Sizes.TINY,
                                          onClick: X,
                                          'aria-label': j.intl.string(j.t.O8k7Oz),
                                          children: j.intl.string(j.t.O8k7Oz)
                                      })
                              ]
                          },
                          n
                      )
                    : (0, r.jsx)(
                          'div',
                          {
                              className: A.sectionTitle,
                              children: (0, r.jsx)(S.Z, {
                                  id: t,
                                  title: n
                              })
                          },
                          n
                      );
            },
            [K, u, t, Q, X]
        );
    if (
        (i.useEffect(() => {
            u === P.pJs.ALL && (0, m.d$)();
        }, [u]),
        0 === z.length && '' === U[u])
    )
        return (0, r.jsx)(D, {
            section: u,
            showSpamCta: F
        });
    let $ = '' !== U[u],
        ee = 0 === z.length && $;
    return (0, r.jsx)(f.Gt, {
        value: n,
        children: (0, r.jsxs)(p.Z, {
            section: P.jXE.FRIENDS_LIST,
            children: [
                M && (0, r.jsx)(C.R, {}),
                (0, r.jsx)(c.E1j, {
                    className: a()(A.searchBar, ee ? A.searchEmptyState : null),
                    query: U[u],
                    onChange: V,
                    onClear: H,
                    size: c.E1j.Sizes.MEDIUM
                }),
                (0, r.jsx)(v.Z, {
                    rows: K,
                    renderRow: B,
                    renderSection: J,
                    sectionFilter: u,
                    isVirtualizedList: k >= T.nG,
                    hasSearchQuery: $,
                    footer:
                        F && !ee
                            ? (0, r.jsx)(s.zx, {
                                  look: s.zx.Looks.LINK,
                                  color: A.viewSpamButtonColor,
                                  className: A.viewSpamButton,
                                  onClick: R,
                                  size: s.Ph.TINY,
                                  children: (0, r.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      children: j.intl.string(j.t.R40bU1)
                                  })
                              })
                            : null
                }),
                ee &&
                    (0, r.jsx)('div', {
                        className: A.emptyStateContainer,
                        children: (0, r.jsx)(y.Z, { type: y.j.SECTION_NO_RESULTS }, u)
                    })
            ]
        })
    });
};
