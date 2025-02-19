n.d(t, { Z: () => G }), n(411104), n(47120), n(653041);
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
    _ = n(922611),
    E = n(699516),
    O = n(974042),
    N = n(451478),
    v = n(434184),
    y = n(701861),
    I = n(437314),
    C = n(696577),
    S = n(163417),
    T = n(830880),
    P = n(492347),
    j = n(42575),
    A = n(617015),
    Z = n(981631),
    x = n(388032),
    L = n(137184);
function w(e) {
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
function R(e, t) {
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
let D = [];
function k() {
    c.Z.setSection(Z.pJs.ADD_FRIEND);
}
function M() {
    (0, s.ZDy)(async () => {
        let { default: e } = await n.e('36312').then(n.bind(n, 153932));
        return (t) => (0, r.jsx)(e, w({}, t));
    });
}
function U(e) {
    let { section: t, showSpamCta: n } = e,
        l = i.useMemo(() => (n ? M : t !== Z.pJs.PENDING ? k : void 0), [n, t]);
    return (0, r.jsx)('div', {
        className: L.emptyStateContainer,
        children: (0, r.jsx)(
            I.Z,
            {
                type: t,
                onClick: l
            },
            t
        )
    });
}
let G = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, h.ZP)(p.Z.FRIENDS_LIST),
        { rows: l, section: c } = (0, a.cj)([O.ZP], () => O.ZP.getState()),
        k = (0, a.e7)([N.Z], () => N.Z.isFocused()),
        { relationshipCount: G, hasBlockedOrIgnored: W } = (0, a.cj)([E.Z], () => ({
            relationshipCount: E.Z.getRelationshipCount(),
            hasBlockedOrIgnored: E.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        V = (0, _.Do)({ location: 'PeopleList' }),
        B = (0, f.wn)({ location: 'PeopleList' }),
        H = (0, m.U)({ location: 'PeopleList' }),
        [F, z] = i.useState(() => {
            let e = {};
            for (let t of Object.values(Z.pJs)) e[t] = '';
            return e;
        }),
        Y = i.useCallback(
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
                    case Z.pJs.BLOCKED:
                        return (0, r.jsx)(v.Z, R(w({}, n), { isFocused: k }), t);
                    case Z.pJs.PENDING:
                        return (0, r.jsx)(
                            C.Z,
                            R(w({}, n), {
                                isFocused: k,
                                disambiguateGameRelationships: H
                            }),
                            t
                        );
                    case Z.pJs.SUGGESTIONS:
                        return (0, r.jsx)(j.Z, R(w({}, n), { isFocused: k }), t);
                    case Z.pJs.ONLINE:
                    case Z.pJs.ALL:
                    default:
                        return (0, r.jsx)(y.Z, R(w({}, n), { isFocused: k }), t);
                }
            },
            [k, H, c]
        ),
        K = i.useCallback(
            (e) => {
                z(R(w({}, F), { [c]: e }));
            },
            [F, c]
        ),
        q = i.useCallback(() => {
            z(R(w({}, F), { [c]: '' }));
        }, [F, c]),
        X = i.useMemo(() => c === Z.pJs.PENDING && (l.filter(Z.pJs.SPAM).length > 0 || l.filter(Z.pJs.PENDING_IGNORED).length > 0), [l, c]),
        Q = i.useMemo(() => l.filter(c, F[c]), [l, F, c]),
        J = B && c === Z.pJs.PENDING,
        $ = i.useMemo(() => {
            if (!J) return D;
            let e = [];
            return (
                Q.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [J, Q]);
    (0, g.Z)($, J);
    let ee = i.useMemo(() => {
            if (c === Z.pJs.PENDING) {
                let e = [],
                    t = [];
                return (
                    Q.forEach((n) => {
                        n.type === Z.OGo.PENDING_INCOMING ? e.push(n) : n.type === Z.OGo.PENDING_OUTGOING && t.push(n);
                    }),
                    [e, t]
                );
            }
            return [Q];
        }, [Q, c]),
        et = i.useMemo(() => Q.filter((e) => e.type === Z.OGo.PENDING_INCOMING).length, [Q]),
        en = c === Z.pJs.PENDING && et > 0 && et >= A.yf,
        er = i.useCallback(
            (e) => {
                e.stopPropagation(), u.Z.confirmClearPendingRelationships(et);
            },
            [et]
        ),
        ei = i.useCallback(
            (e) => {
                let n = (function (e, t, n) {
                    switch (e) {
                        case Z.pJs.ONLINE:
                            return x.NW.formatToPlainString(x.t.BagU2d, { online: t.toString() });
                        case Z.pJs.PENDING:
                            if (0 === n) return x.NW.formatToPlainString(x.t['g+3FIS'], { count: t.toString() });
                            if (1 === n) return x.NW.formatToPlainString(x.t.npJsRk, { count: t.toString() });
                            throw Error('Unexpected pending friend requests section index: '.concat(n));
                        case Z.pJs.SUGGESTIONS:
                            return x.NW.formatToPlainString(x.t['DYMZ/v'], { count: t.toString() });
                        case Z.pJs.BLOCKED:
                            return x.NW.formatToPlainString(x.t.M83kKy, { count: t.toString() });
                        default:
                            return x.NW.formatToPlainString(x.t.rHRrhI, { count: t.toString() });
                    }
                })(c, ee[e].length, e);
                return c === Z.pJs.PENDING && 0 === e
                    ? (0, r.jsxs)(
                          'div',
                          {
                              className: L.sectionTitle,
                              children: [
                                  (0, r.jsx)(P.Z, {
                                      id: t,
                                      title: n
                                  }),
                                  en &&
                                      (0, r.jsx)(s.zxk, {
                                          look: s.iLD.LINK,
                                          color: s.Ttl.LINK,
                                          className: L.clearButton,
                                          size: s.zxk.Sizes.TINY,
                                          onClick: er,
                                          'aria-label': x.NW.string(x.t.O8k7Oz),
                                          children: x.NW.string(x.t.O8k7Oz)
                                      })
                              ]
                          },
                          n
                      )
                    : (0, r.jsx)(
                          'div',
                          {
                              className: L.sectionTitle,
                              children: (0, r.jsx)(P.Z, {
                                  id: t,
                                  title: n
                              })
                          },
                          n
                      );
            },
            [ee, c, t, en, er]
        );
    if (
        (i.useEffect(() => {
            c === Z.pJs.ALL && (0, b.d$)();
        }, [c]),
        0 === Q.length && '' === F[c])
    )
        return (0, r.jsx)(U, {
            section: c,
            showSpamCta: X
        });
    let el = '' !== F[c],
        eo = 0 === Q.length && el;
    return (0, r.jsx)(h.Gt, {
        value: n,
        children: (0, r.jsxs)(d.Z, {
            section: Z.jXE.FRIENDS_LIST,
            children: [
                V && W && (0, r.jsx)(T.R, {}),
                (0, r.jsx)(s.E1j, {
                    className: o()(L.searchBar, eo ? L.searchEmptyState : null),
                    query: F[c],
                    onChange: K,
                    onClear: q,
                    size: s.E1j.Sizes.MEDIUM
                }),
                (0, r.jsx)(S.Z, {
                    rows: ee,
                    renderRow: Y,
                    renderSection: ei,
                    sectionFilter: c,
                    isVirtualizedList: G >= A.nG,
                    hasSearchQuery: el,
                    footer:
                        X && !eo
                            ? (0, r.jsx)(s.zxk, {
                                  look: s.zxk.Looks.LINK,
                                  color: L.viewSpamButtonColor,
                                  className: L.viewSpamButton,
                                  onClick: M,
                                  size: s.PhG.TINY,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      children: V ? x.NW.string(x.t.R40bU1) : x.NW.string(x.t.rXl8fn)
                                  })
                              })
                            : null
                }),
                eo &&
                    (0, r.jsx)('div', {
                        className: L.emptyStateContainer,
                        children: (0, r.jsx)(I.Z, { type: I.j.SECTION_NO_RESULTS }, c)
                    })
            ]
        })
    });
};
