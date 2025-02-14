n.d(t, { Z: () => k }), n(411104), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    d = n(529103),
    c = n(194359),
    u = n(410575),
    h = n(100527),
    m = n(906732),
    p = n(835473),
    g = n(372460),
    _ = n(327419),
    f = n(795448),
    E = n(922611),
    I = n(699516),
    C = n(974042),
    N = n(451478),
    v = n(434184),
    T = n(701861),
    S = n(437314),
    A = n(696577),
    Z = n(163417),
    x = n(830880),
    b = n(492347),
    L = n(42575),
    y = n(617015),
    O = n(981631),
    P = n(388032),
    R = n(574514);
let j = [];
function D() {
    d.Z.setSection(O.pJs.ADD_FRIEND);
}
function w() {
    (0, o.ZDy)(async () => {
        let { default: e } = await n.e('36312').then(n.bind(n, 153932));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function M(e) {
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
let k = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, m.ZP)(h.Z.FRIENDS_LIST),
        { rows: r, section: d } = (0, s.cj)([C.ZP], () => C.ZP.getState()),
        D = (0, s.e7)([N.Z], () => N.Z.isFocused()),
        { relationshipCount: k, hasBlockedOrIgnored: U } = (0, s.cj)([I.Z], () => ({
            relationshipCount: I.Z.getRelationshipCount(),
            hasBlockedOrIgnored: I.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        G = (0, E.Do)({ location: 'PeopleList' }),
        B = (0, g.wn)({ location: 'PeopleList' }),
        V = (0, _.U)({ location: 'PeopleList' }),
        [H, F] = l.useState(() => {
            let e = {};
            for (let t of Object.values(O.pJs)) e[t] = '';
            return e;
        }),
        z = l.useCallback(
            (e) => {
                let { key: t, ...n } = e;
                switch (d) {
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
                                disambiguateGameRelationships: V
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
            [D, V, d]
        ),
        W = l.useCallback(
            (e) => {
                F({
                    ...H,
                    [d]: e
                });
            },
            [H, d]
        ),
        Y = l.useCallback(() => {
            F({
                ...H,
                [d]: ''
            });
        }, [H, d]),
        K = l.useMemo(() => d === O.pJs.PENDING && (r.filter(O.pJs.SPAM).length > 0 || r.filter(O.pJs.PENDING_IGNORED).length > 0), [r, d]),
        q = l.useMemo(() => r.filter(d, H[d]), [r, H, d]),
        X = B && d === O.pJs.PENDING,
        Q = l.useMemo(() => {
            if (!X) return j;
            let e = [];
            return (
                q.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [X, q]);
    (0, p.Z)(Q, X);
    let J = l.useMemo(() => {
            if (d === O.pJs.PENDING) {
                let e = [],
                    t = [];
                return (
                    q.forEach((n) => {
                        n.type === O.OGo.PENDING_INCOMING ? e.push(n) : n.type === O.OGo.PENDING_OUTGOING && t.push(n);
                    }),
                    [e, t]
                );
            }
            return [q];
        }, [q, d]),
        $ = l.useMemo(() => q.filter((e) => e.type === O.OGo.PENDING_INCOMING).length, [q]),
        ee = d === O.pJs.PENDING && $ > 0 && $ >= y.yf,
        et = l.useCallback(
            (e) => {
                e.stopPropagation(), c.Z.confirmClearPendingRelationships($);
            },
            [$]
        ),
        en = l.useCallback(
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
                })(d, J[e].length, e);
                return d === O.pJs.PENDING && 0 === e
                    ? (0, i.jsxs)(
                          'div',
                          {
                              className: R.sectionTitle,
                              children: [
                                  (0, i.jsx)(b.Z, {
                                      id: t,
                                      title: n
                                  }),
                                  ee &&
                                      (0, i.jsx)(o.zxk, {
                                          look: o.iLD.LINK,
                                          color: o.Ttl.LINK,
                                          className: R.clearButton,
                                          size: o.zxk.Sizes.TINY,
                                          onClick: et,
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
                              children: (0, i.jsx)(b.Z, {
                                  id: t,
                                  title: n
                              })
                          },
                          n
                      );
            },
            [J, d, t, ee, et]
        );
    if (
        (l.useEffect(() => {
            d === O.pJs.ALL && (0, f.d$)();
        }, [d]),
        0 === q.length && '' === H[d])
    )
        return (0, i.jsx)(M, {
            section: d,
            showSpamCta: K
        });
    let ei = '' !== H[d],
        el = 0 === q.length && ei;
    return (0, i.jsx)(m.Gt, {
        value: n,
        children: (0, i.jsxs)(u.Z, {
            section: O.jXE.FRIENDS_LIST,
            children: [
                G && U && (0, i.jsx)(x.R, {}),
                (0, i.jsx)(o.E1j, {
                    className: a()(R.searchBar, el ? R.searchEmptyState : null),
                    query: H[d],
                    onChange: W,
                    onClear: Y,
                    size: o.E1j.Sizes.MEDIUM
                }),
                (0, i.jsx)(Z.Z, {
                    rows: J,
                    renderRow: z,
                    renderSection: en,
                    sectionFilter: d,
                    isVirtualizedList: k >= y.nG,
                    hasSearchQuery: ei,
                    footer:
                        K && !el
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
                el &&
                    (0, i.jsx)('div', {
                        className: R.emptyStateContainer,
                        children: (0, i.jsx)(S.Z, { type: S.j.SECTION_NO_RESULTS }, d)
                    })
            ]
        })
    });
};
