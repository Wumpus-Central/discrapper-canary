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
    b = n(163417),
    Z = n(830880),
    x = n(492347),
    L = n(42575),
    y = n(617015),
    P = n(981631),
    O = n(388032),
    R = n(574514);
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
        D = (0, s.e7)([N.Z], () => N.Z.isFocused()),
        { relationshipCount: M, hasBlockedOrIgnored: U } = (0, s.cj)([I.Z], () => ({
            relationshipCount: I.Z.getRelationshipCount(),
            hasBlockedOrIgnored: I.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        G = (0, E.Do)({ location: 'PeopleList' }),
        B = (0, g.wn)({ location: 'PeopleList' }),
        V = (0, _.U)({ location: 'PeopleList' }),
        [H, F] = l.useState(() => {
            let e = {};
            for (let t of Object.values(P.pJs)) e[t] = '';
            return e;
        }),
        z = l.useCallback(
            (e) => {
                let { key: t, ...n } = e;
                switch (c) {
                    case P.pJs.BLOCKED:
                        return (0, i.jsx)(
                            v.Z,
                            {
                                ...n,
                                isFocused: D
                            },
                            t
                        );
                    case P.pJs.PENDING:
                        return (0, i.jsx)(
                            A.Z,
                            {
                                ...n,
                                isFocused: D,
                                disambiguateGameRelationships: V
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
            [D, V, c]
        ),
        W = l.useCallback(
            (e) => {
                F({
                    ...H,
                    [c]: e
                });
            },
            [H, c]
        ),
        Y = l.useCallback(() => {
            F({
                ...H,
                [c]: ''
            });
        }, [H, c]),
        K = l.useMemo(() => c === P.pJs.PENDING && (r.filter(P.pJs.SPAM).length > 0 || r.filter(P.pJs.PENDING_IGNORED).length > 0), [r, c]),
        q = l.useMemo(() => r.filter(c, H[c]), [r, H, c]),
        X = B && c === P.pJs.PENDING,
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
            if (c === P.pJs.PENDING) {
                let e = [],
                    t = [];
                return (
                    q.forEach((n) => {
                        n.type === P.OGo.PENDING_INCOMING ? e.push(n) : n.type === P.OGo.PENDING_OUTGOING && t.push(n);
                    }),
                    [e, t]
                );
            }
            return [q];
        }, [q, c]),
        $ = l.useMemo(() => q.filter((e) => e.type === P.OGo.PENDING_INCOMING).length, [q]),
        ee = c === P.pJs.PENDING && $ > 0 && $ >= y.yf,
        et = l.useCallback(
            (e) => {
                e.stopPropagation(), d.Z.confirmClearPendingRelationships($);
            },
            [$]
        ),
        en = l.useCallback(
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
                })(c, J[e].length, e);
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
                                  ee &&
                                      (0, i.jsx)(o.zxk, {
                                          look: o.iLD.LINK,
                                          color: o.Ttl.LINK,
                                          className: R.clearButton,
                                          size: o.zxk.Sizes.TINY,
                                          onClick: et,
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
            [J, c, t, ee, et]
        );
    if (
        (l.useEffect(() => {
            c === P.pJs.ALL && (0, f.d$)();
        }, [c]),
        0 === q.length && '' === H[c])
    )
        return (0, i.jsx)(k, {
            section: c,
            showSpamCta: K
        });
    let ei = '' !== H[c],
        el = 0 === q.length && ei;
    return (0, i.jsx)(m.Gt, {
        value: n,
        children: (0, i.jsxs)(u.Z, {
            section: P.jXE.FRIENDS_LIST,
            children: [
                G && U && (0, i.jsx)(Z.R, {}),
                (0, i.jsx)(o.E1j, {
                    className: a()(R.searchBar, el ? R.searchEmptyState : null),
                    query: H[c],
                    onChange: W,
                    onClear: Y,
                    size: o.E1j.Sizes.MEDIUM
                }),
                (0, i.jsx)(b.Z, {
                    rows: J,
                    renderRow: z,
                    renderSection: en,
                    sectionFilter: c,
                    isVirtualizedList: M >= y.nG,
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
                                      children: G ? O.intl.string(O.t.R40bU1) : O.intl.string(O.t.rXl8fn)
                                  })
                              })
                            : null
                }),
                el &&
                    (0, i.jsx)('div', {
                        className: R.emptyStateContainer,
                        children: (0, i.jsx)(S.Z, { type: S.j.SECTION_NO_RESULTS }, c)
                    })
            ]
        })
    });
};
