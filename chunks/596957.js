n.d(t, { Z: () => M }), n(411104), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(529103),
    d = n(194359),
    u = n(410575),
    h = n(100527),
    m = n(906732),
    p = n(835473),
    g = n(372460),
    _ = n(91896),
    f = n(795448),
    E = n(922611),
    I = n(699516),
    C = n(974042),
    N = n(451478),
    v = n(434184),
    T = n(701861),
    S = n(437314),
    A = n(696577),
    b = n(163417),
    Z = n(830880),
    x = n(492347),
    L = n(42575),
    y = n(617015),
    O = n(981631),
    P = n(388032),
    R = n(718762);
let j = [];
function D() {
    c.Z.setSection(O.pJs.ADD_FRIEND);
}
function w() {
    (0, o.ZDy)(async () => {
        let { default: e } = await n.e('36312').then(n.bind(n, 153932));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function k(e) {
    let { section: t, showSpamCta: n } = e,
        r = l.useMemo(() => (n ? w : t !== O.pJs.PENDING ? D : void 0), [n, t]);
    return (0, i.jsx)('div', {
        className: R.emptyStateContainer,
        children: (0, i.jsx)(
            S.Z,
            {
                type: t,
                onClick: r
            },
            t
        )
    });
}
let M = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, m.ZP)(h.Z.FRIENDS_LIST),
        { rows: r, section: c } = (0, s.cj)([C.ZP], () => C.ZP.getState()),
        D = (0, s.e7)([N.Z], () => N.Z.isFocused()),
        { relationshipCount: M, hasBlockedOrIgnored: U } = (0, s.cj)([I.Z], () => ({
            relationshipCount: I.Z.getRelationshipCount(),
            hasBlockedOrIgnored: I.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        G = (0, E.Do)({ location: 'PeopleList' }),
        B = (0, g.wn)({ location: 'PeopleList' }),
        V = (0, s.e7)([_.Z], () => _.Z.getGameRelationshipCount() > 0),
        H = B && V,
        [F, z] = l.useState(() => {
            let e = {};
            for (let t of Object.values(O.pJs)) e[t] = '';
            return e;
        }),
        W = l.useCallback(
            (e) => {
                let { key: t, ...n } = e;
                switch (c) {
                    case O.pJs.BLOCKED:
                        return (0, i.jsx)(
                            v.Z,
                            {
                                ...n,
                                isFocused: D
                            },
                            t
                        );
                    case O.pJs.PENDING:
                        return (0, i.jsx)(
                            A.Z,
                            {
                                ...n,
                                isFocused: D,
                                disambiguateGameRelationships: H
                            },
                            t
                        );
                    case O.pJs.SUGGESTIONS:
                        return (0, i.jsx)(
                            L.Z,
                            {
                                ...n,
                                isFocused: D
                            },
                            t
                        );
                    case O.pJs.ONLINE:
                    case O.pJs.ALL:
                    default:
                        return (0, i.jsx)(
                            T.Z,
                            {
                                ...n,
                                isFocused: D
                            },
                            t
                        );
                }
            },
            [D, H, c]
        ),
        Y = l.useCallback(
            (e) => {
                z({
                    ...F,
                    [c]: e
                });
            },
            [F, c]
        ),
        K = l.useCallback(() => {
            z({
                ...F,
                [c]: ''
            });
        }, [F, c]),
        q = l.useMemo(() => c === O.pJs.PENDING && (r.filter(O.pJs.SPAM).length > 0 || r.filter(O.pJs.PENDING_IGNORED).length > 0), [r, c]),
        X = l.useMemo(() => r.filter(c, F[c]), [r, F, c]),
        Q = B && c === O.pJs.PENDING,
        J = l.useMemo(() => {
            if (!Q) return j;
            let e = [];
            return (
                X.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [Q, X]);
    (0, p.Z)(J, Q);
    let $ = l.useMemo(() => {
            if (c === O.pJs.PENDING) {
                let e = [],
                    t = [];
                return (
                    X.forEach((n) => {
                        n.type === O.OGo.PENDING_INCOMING ? e.push(n) : n.type === O.OGo.PENDING_OUTGOING && t.push(n);
                    }),
                    [e, t]
                );
            }
            return [X];
        }, [X, c]),
        ee = l.useMemo(() => X.filter((e) => e.type === O.OGo.PENDING_INCOMING).length, [X]),
        et = c === O.pJs.PENDING && ee > 0 && ee >= y.yf,
        en = l.useCallback(
            (e) => {
                e.stopPropagation(), d.Z.confirmClearPendingRelationships(ee);
            },
            [ee]
        ),
        ei = l.useCallback(
            (e) => {
                let n = (function (e, t, n) {
                    switch (e) {
                        case O.pJs.ONLINE:
                            return P.intl.formatToPlainString(P.t.BagU2d, { online: t.toString() });
                        case O.pJs.PENDING:
                            if (0 === n) return P.intl.formatToPlainString(P.t['g+3FIS'], { count: t.toString() });
                            if (1 === n) return P.intl.formatToPlainString(P.t.npJsRk, { count: t.toString() });
                            throw Error('Unexpected pending friend requests section index: '.concat(n));
                        case O.pJs.SUGGESTIONS:
                            return P.intl.formatToPlainString(P.t['DYMZ/v'], { count: t.toString() });
                        case O.pJs.BLOCKED:
                            return P.intl.formatToPlainString(P.t.M83kKy, { count: t.toString() });
                        default:
                            return P.intl.formatToPlainString(P.t.rHRrhI, { count: t.toString() });
                    }
                })(c, $[e].length, e);
                return c === O.pJs.PENDING && 0 === e
                    ? (0, i.jsxs)(
                          'div',
                          {
                              className: R.sectionTitle,
                              children: [
                                  (0, i.jsx)(x.Z, {
                                      id: t,
                                      title: n
                                  }),
                                  et &&
                                      (0, i.jsx)(o.zxk, {
                                          look: o.iLD.LINK,
                                          color: o.Ttl.LINK,
                                          className: R.clearButton,
                                          size: o.zxk.Sizes.TINY,
                                          onClick: en,
                                          'aria-label': P.intl.string(P.t.O8k7Oz),
                                          children: P.intl.string(P.t.O8k7Oz)
                                      })
                              ]
                          },
                          n
                      )
                    : (0, i.jsx)(
                          'div',
                          {
                              className: R.sectionTitle,
                              children: (0, i.jsx)(x.Z, {
                                  id: t,
                                  title: n
                              })
                          },
                          n
                      );
            },
            [$, c, t, et, en]
        );
    if (
        (l.useEffect(() => {
            c === O.pJs.ALL && (0, f.d$)();
        }, [c]),
        0 === X.length && '' === F[c])
    )
        return (0, i.jsx)(k, {
            section: c,
            showSpamCta: q
        });
    let el = '' !== F[c],
        er = 0 === X.length && el;
    return (0, i.jsx)(m.Gt, {
        value: n,
        children: (0, i.jsxs)(u.Z, {
            section: O.jXE.FRIENDS_LIST,
            children: [
                G && U && (0, i.jsx)(Z.R, {}),
                (0, i.jsx)(o.E1j, {
                    className: a()(R.searchBar, er ? R.searchEmptyState : null),
                    query: F[c],
                    onChange: Y,
                    onClear: K,
                    size: o.E1j.Sizes.MEDIUM
                }),
                (0, i.jsx)(b.Z, {
                    rows: $,
                    renderRow: W,
                    renderSection: ei,
                    sectionFilter: c,
                    isVirtualizedList: M >= y.nG,
                    hasSearchQuery: el,
                    footer:
                        q && !er
                            ? (0, i.jsx)(o.zxk, {
                                  look: o.zxk.Looks.LINK,
                                  color: R.viewSpamButtonColor,
                                  className: R.viewSpamButton,
                                  onClick: w,
                                  size: o.PhG.TINY,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: 'text-xs/medium',
                                      children: G ? P.intl.string(P.t.R40bU1) : P.intl.string(P.t.rXl8fn)
                                  })
                              })
                            : null
                }),
                er &&
                    (0, i.jsx)('div', {
                        className: R.emptyStateContainer,
                        children: (0, i.jsx)(S.Z, { type: S.j.SECTION_NO_RESULTS }, c)
                    })
            ]
        })
    });
};
