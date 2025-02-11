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
    v = n(451478),
    N = n(434184),
    T = n(701861),
    S = n(437314),
    Z = n(696577),
    A = n(163417),
    b = n(830880),
    x = n(492347),
    L = n(42575),
    y = n(617015),
    P = n(981631),
    O = n(388032),
    R = n(718762);
let j = [];
function D() {
    c.Z.setSection(P.pJs.ADD_FRIEND);
}
function w() {
    (0, o.ZDy)(async () => {
        let { default: e } = await n.e('36312').then(n.bind(n, 153932));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function k(e) {
    let { section: t, showSpamCta: n } = e,
        r = l.useMemo(() => (n ? w : t !== P.pJs.PENDING ? D : void 0), [n, t]);
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
        D = (0, s.e7)([v.Z], () => v.Z.isFocused()),
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
            for (let t of Object.values(P.pJs)) e[t] = '';
            return e;
        }),
        W = l.useCallback(
            (e) => {
                let { key: t, ...n } = e;
                switch (c) {
                    case P.pJs.BLOCKED:
                        return (0, i.jsx)(
                            N.Z,
                            {
                                ...n,
                                isFocused: D
                            },
                            t
                        );
                    case P.pJs.PENDING:
                        return (0, i.jsx)(
                            Z.Z,
                            {
                                ...n,
                                isFocused: D,
                                disambiguateGameFriends: H
                            },
                            t
                        );
                    case P.pJs.SUGGESTIONS:
                        return (0, i.jsx)(
                            L.Z,
                            {
                                ...n,
                                isFocused: D
                            },
                            t
                        );
                    case P.pJs.ONLINE:
                    case P.pJs.ALL:
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
        q = l.useMemo(() => c === P.pJs.PENDING && (r.filter(P.pJs.SPAM).length > 0 || r.filter(P.pJs.PENDING_IGNORED).length > 0), [r, c]),
        X = l.useMemo(() => r.filter(c, F[c]), [r, F, c]),
        Q = B && c === P.pJs.PENDING,
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
            if (c === P.pJs.PENDING) {
                let e = [],
                    t = [];
                return (
                    X.forEach((n) => {
                        n.type === P.OGo.PENDING_INCOMING ? e.push(n) : n.type === P.OGo.PENDING_OUTGOING && t.push(n);
                    }),
                    [e, t]
                );
            }
            return [X];
        }, [X, c]),
        ee = l.useMemo(() => X.filter((e) => e.type === P.OGo.PENDING_INCOMING).length, [X]),
        et = c === P.pJs.PENDING && ee > 0 && ee >= y.yf,
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
                        case P.pJs.ONLINE:
                            return O.intl.formatToPlainString(O.t.BagU2d, { online: t.toString() });
                        case P.pJs.PENDING:
                            if (0 === n) return O.intl.formatToPlainString(O.t['g+3FIS'], { count: t.toString() });
                            if (1 === n) return O.intl.formatToPlainString(O.t.npJsRk, { count: t.toString() });
                            throw Error('Unexpected pending friend requests section index: '.concat(n));
                        case P.pJs.SUGGESTIONS:
                            return O.intl.formatToPlainString(O.t['DYMZ/v'], { count: t.toString() });
                        case P.pJs.BLOCKED:
                            return O.intl.formatToPlainString(O.t.M83kKy, { count: t.toString() });
                        default:
                            return O.intl.formatToPlainString(O.t.rHRrhI, { count: t.toString() });
                    }
                })(c, $[e].length, e);
                return c === P.pJs.PENDING && 0 === e
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
                                          'aria-label': O.intl.string(O.t.O8k7Oz),
                                          children: O.intl.string(O.t.O8k7Oz)
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
            c === P.pJs.ALL && (0, f.d$)();
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
            section: P.jXE.FRIENDS_LIST,
            children: [
                G && U && (0, i.jsx)(b.R, {}),
                (0, i.jsx)(o.E1j, {
                    className: a()(R.searchBar, er ? R.searchEmptyState : null),
                    query: F[c],
                    onChange: Y,
                    onClear: K,
                    size: o.E1j.Sizes.MEDIUM
                }),
                (0, i.jsx)(A.Z, {
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
                                      children: G ? O.intl.string(O.t.R40bU1) : O.intl.string(O.t.rXl8fn)
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
