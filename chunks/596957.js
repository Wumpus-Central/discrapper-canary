n.d(t, { Z: () => k }), n(411104), n(47120), n(653041);
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
    g = n(372460),
    m = n(795448),
    b = n(699516),
    _ = n(974042),
    E = n(451478),
    O = n(701861),
    N = n(437314),
    y = n(696577),
    I = n(163417),
    v = n(830880),
    C = n(492347),
    S = n(42575),
    T = n(617015),
    P = n(981631),
    j = n(388032),
    A = n(222001);
function Z(e) {
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
let L = [];
function w() {
    c.Z.setSection(P.pJs.ADD_FRIEND);
}
function R() {
    (0, s.ZDy)(async () => {
        let { default: e } = await n.e('36312').then(n.bind(n, 153932));
        return (t) => (0, r.jsx)(e, Z({}, t));
    });
}
function D(e) {
    let { section: t, showSpamCta: n } = e,
        l = i.useMemo(() => (n ? R : t !== P.pJs.PENDING ? w : void 0), [n, t]);
    return (0, r.jsx)('div', {
        className: A.emptyStateContainer,
        children: (0, r.jsx)(
            N.Z,
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
        { analyticsLocations: n } = (0, h.ZP)(p.Z.FRIENDS_LIST),
        { rows: l, section: c } = (0, o.cj)([_.ZP], () => _.ZP.getState()),
        w = (0, o.e7)([E.Z], () => E.Z.isFocused()),
        { relationshipCount: k, hasBlockedOrIgnored: M } = (0, o.cj)([b.Z], () => ({
            relationshipCount: b.Z.getRelationshipCount(),
            hasBlockedOrIgnored: b.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        U = (0, g.wn)({ location: 'PeopleList' }),
        [G, W] = i.useState(() => {
            let e = {};
            for (let t of Object.values(P.pJs)) e[t] = '';
            return e;
        }),
        V = i.useCallback(
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
                    case P.pJs.PENDING:
                        return (0, r.jsx)(y.Z, x(Z({}, n), { isFocused: w }), t);
                    case P.pJs.SUGGESTIONS:
                        return (0, r.jsx)(S.Z, x(Z({}, n), { isFocused: w }), t);
                    case P.pJs.ONLINE:
                    case P.pJs.ALL:
                    default:
                        return (0, r.jsx)(O.Z, x(Z({}, n), { isFocused: w }), t);
                }
            },
            [w, c]
        ),
        B = i.useCallback(
            (e) => {
                W(x(Z({}, G), { [c]: e }));
            },
            [G, c]
        ),
        H = i.useCallback(() => {
            W(x(Z({}, G), { [c]: '' }));
        }, [G, c]),
        F = i.useMemo(() => c === P.pJs.PENDING && (l.filter(P.pJs.SPAM).length > 0 || l.filter(P.pJs.PENDING_IGNORED).length > 0), [l, c]),
        z = i.useMemo(() => l.filter(c, G[c]), [l, G, c]),
        Y = U && c === P.pJs.PENDING,
        K = i.useMemo(() => {
            if (!Y) return L;
            let e = [];
            return (
                z.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [Y, z]);
    (0, f.Z)(K, Y);
    let q = i.useMemo(() => {
            if (c !== P.pJs.PENDING) return [z];
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
        }, [z, c]),
        Q = i.useMemo(() => z.filter((e) => e.type === P.OGo.PENDING_INCOMING).length, [z]),
        X = c === P.pJs.PENDING && Q > 0 && Q >= T.yf,
        J = i.useCallback(
            (e) => {
                e.stopPropagation(), u.Z.confirmClearPendingRelationships(Q);
            },
            [Q]
        ),
        $ = i.useCallback(
            (e) => {
                let n = (function (e, t, n) {
                    switch (e) {
                        case P.pJs.ONLINE:
                            return j.NW.formatToPlainString(j.t.BagU2d, { online: t.toString() });
                        case P.pJs.PENDING:
                            if (0 === n) return j.NW.formatToPlainString(j.t['g+3FIS'], { count: t.toString() });
                            if (1 === n) return j.NW.formatToPlainString(j.t.npJsRk, { count: t.toString() });
                            throw Error('Unexpected pending friend requests section index: '.concat(n));
                        case P.pJs.SUGGESTIONS:
                            return j.NW.formatToPlainString(j.t['DYMZ/v'], { count: t.toString() });
                        default:
                            return j.NW.formatToPlainString(j.t.rHRrhI, { count: t.toString() });
                    }
                })(c, q[e].length, e);
                return c === P.pJs.PENDING && 0 === e
                    ? (0, r.jsxs)(
                          'div',
                          {
                              className: A.sectionTitle,
                              children: [
                                  (0, r.jsx)(C.Z, {
                                      id: t,
                                      title: n
                                  }),
                                  X &&
                                      (0, r.jsx)(s.zxk, {
                                          look: s.iLD.LINK,
                                          color: s.Ttl.LINK,
                                          className: A.clearButton,
                                          size: s.zxk.Sizes.TINY,
                                          onClick: J,
                                          'aria-label': j.NW.string(j.t.O8k7Oz),
                                          children: j.NW.string(j.t.O8k7Oz)
                                      })
                              ]
                          },
                          n
                      )
                    : (0, r.jsx)(
                          'div',
                          {
                              className: A.sectionTitle,
                              children: (0, r.jsx)(C.Z, {
                                  id: t,
                                  title: n
                              })
                          },
                          n
                      );
            },
            [q, c, t, X, J]
        );
    if (
        (i.useEffect(() => {
            c === P.pJs.ALL && (0, m.d$)();
        }, [c]),
        0 === z.length && '' === G[c])
    )
        return (0, r.jsx)(D, {
            section: c,
            showSpamCta: F
        });
    let ee = '' !== G[c],
        et = 0 === z.length && ee;
    return (0, r.jsx)(h.Gt, {
        value: n,
        children: (0, r.jsxs)(d.Z, {
            section: P.jXE.FRIENDS_LIST,
            children: [
                M && (0, r.jsx)(v.R, {}),
                (0, r.jsx)(s.E1j, {
                    className: a()(A.searchBar, et ? A.searchEmptyState : null),
                    query: G[c],
                    onChange: B,
                    onClear: H,
                    size: s.E1j.Sizes.MEDIUM
                }),
                (0, r.jsx)(I.Z, {
                    rows: q,
                    renderRow: V,
                    renderSection: $,
                    sectionFilter: c,
                    isVirtualizedList: k >= T.nG,
                    hasSearchQuery: ee,
                    footer:
                        F && !et
                            ? (0, r.jsx)(s.zxk, {
                                  look: s.zxk.Looks.LINK,
                                  color: A.viewSpamButtonColor,
                                  className: A.viewSpamButton,
                                  onClick: R,
                                  size: s.PhG.TINY,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      children: j.NW.string(j.t.R40bU1)
                                  })
                              })
                            : null
                }),
                et &&
                    (0, r.jsx)('div', {
                        className: A.emptyStateContainer,
                        children: (0, r.jsx)(N.Z, { type: N.j.SECTION_NO_RESULTS }, c)
                    })
            ]
        })
    });
};
