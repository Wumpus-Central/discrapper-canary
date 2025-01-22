n(411104), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(529103),
    d = n(194359),
    u = n(410575),
    h = n(100527),
    m = n(906732),
    p = n(835473),
    g = n(372460),
    f = n(91896),
    _ = n(795448),
    E = n(922611),
    I = n(699516),
    C = n(974042),
    N = n(451478),
    v = n(434184),
    S = n(701861),
    T = n(437314),
    b = n(696577),
    A = n(163417),
    Z = n(830880),
    x = n(492347),
    L = n(42575),
    y = n(617015),
    P = n(981631),
    O = n(388032),
    R = n(732144);
let j = [];
function D() {
    c.Z.setSection(P.pJs.ADD_FRIEND);
}
function M() {
    (0, o.openModalLazy)(async () => {
        let { default: e } = await n.e('36312').then(n.bind(n, 153932));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function w(e) {
    let { section: t, showSpamCta: n } = e,
        l = r.useMemo(() => (n ? M : t !== P.pJs.PENDING ? D : void 0), [n, t]);
    return (0, i.jsx)('div', {
        className: R.emptyStateContainer,
        children: (0, i.jsx)(
            T.Z,
            {
                type: t,
                onClick: l
            },
            t
        )
    });
}
t.Z = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, m.ZP)(h.Z.FRIENDS_LIST),
        { rows: l, section: c } = (0, s.cj)([C.ZP], () => C.ZP.getState()),
        D = (0, s.e7)([N.Z], () => N.Z.isFocused()),
        { relationshipCount: k, hasBlockedOrIgnored: U } = (0, s.cj)([I.Z], () => ({
            relationshipCount: I.Z.getRelationshipCount(),
            hasBlockedOrIgnored: I.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        G = (0, E.Do)({ location: 'PeopleList' }),
        B = (0, g.wn)({ location: 'PeopleList' }),
        H = (0, s.e7)([f.Z], () => f.Z.getGameRelationshipCount() > 0),
        V = B && H,
        [F, z] = r.useState(() => {
            let e = {};
            for (let t of Object.values(P.pJs)) e[t] = '';
            return e;
        }),
        W = r.useCallback(
            (e) => {
                switch (c) {
                    case P.pJs.BLOCKED:
                        return (0, i.jsx)(v.Z, {
                            ...e,
                            isFocused: D
                        });
                    case P.pJs.PENDING:
                        return (0, i.jsx)(b.Z, {
                            ...e,
                            isFocused: D,
                            disambiguateGameFriends: V
                        });
                    case P.pJs.SUGGESTIONS:
                        return (0, i.jsx)(L.Z, {
                            ...e,
                            isFocused: D
                        });
                    case P.pJs.ONLINE:
                    case P.pJs.ALL:
                    default:
                        let { key: t, ...n } = e;
                        return (0, i.jsx)(
                            S.Z,
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
        Y = r.useCallback(
            (e) => {
                z({
                    ...F,
                    [c]: e
                });
            },
            [F, c]
        ),
        K = r.useCallback(() => {
            z({
                ...F,
                [c]: ''
            });
        }, [F, c]),
        q = r.useMemo(() => c === P.pJs.PENDING && (l.filter(P.pJs.SPAM).length > 0 || l.filter(P.pJs.PENDING_IGNORED).length > 0), [l, c]),
        X = r.useMemo(() => l.filter(c, F[c]), [l, F, c]),
        Q = r.useMemo(() => {
            if (!B) return j;
            let e = [];
            return (
                X.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [X, B]);
    (0, p.Z)(Q, B);
    let J = r.useMemo(() => {
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
        $ = r.useMemo(() => X.filter((e) => e.type === P.OGo.PENDING_INCOMING).length, [X]),
        ee = c === P.pJs.PENDING && $ > 0 && $ >= y.yf,
        et = r.useCallback(
            (e) => {
                e.stopPropagation(), d.Z.confirmClearPendingRelationships($);
            },
            [$]
        ),
        en = r.useCallback(
            (e) => {
                let n = (function (e, t, n) {
                    switch (e) {
                        case P.pJs.ONLINE:
                            return O.intl.formatToPlainString(O.t.BagU2d, { online: t.toString() });
                        case P.pJs.PENDING:
                            if (0 === n) return O.intl.formatToPlainString(O.t['g+3FIS'], { count: t.toString() });
                            if (1 === n) return O.intl.formatToPlainString(O.t.npJsRk, { count: t.toString() });
                            else throw Error('Unexpected pending friend requests section index: '.concat(n));
                        case P.pJs.SUGGESTIONS:
                            return O.intl.formatToPlainString(O.t['DYMZ/v'], { count: t.toString() });
                        case P.pJs.BLOCKED:
                            return O.intl.formatToPlainString(O.t.M83kKy, { count: t.toString() });
                        default:
                            return O.intl.formatToPlainString(O.t.rHRrhI, { count: t.toString() });
                    }
                })(c, J[e].length, e);
                return c === P.pJs.PENDING && 0 === e
                    ? (0, i.jsxs)('div', {
                          className: R.sectionTitle,
                          children: [
                              (0, i.jsx)(x.Z, {
                                  id: t,
                                  title: n
                              }),
                              ee &&
                                  (0, i.jsx)(o.Button, {
                                      look: o.ButtonLooks.LINK,
                                      color: o.ButtonColors.LINK,
                                      className: R.clearButton,
                                      size: o.Button.Sizes.TINY,
                                      onClick: et,
                                      'aria-label': O.intl.string(O.t.O8k7Oz),
                                      children: O.intl.string(O.t.O8k7Oz)
                                  })
                          ]
                      })
                    : (0, i.jsx)('div', {
                          className: R.sectionTitle,
                          children: (0, i.jsx)(x.Z, {
                              id: t,
                              title: n
                          })
                      });
            },
            [J, c, t, ee, et]
        );
    if (
        (r.useEffect(() => {
            c === P.pJs.ALL && (0, _.d$)();
        }, [c]),
        0 === X.length && '' === F[c])
    )
        return (0, i.jsx)(w, {
            section: c,
            showSpamCta: q
        });
    let ei = '' !== F[c],
        er = 0 === X.length && ei;
    return (0, i.jsx)(m.Gt, {
        value: n,
        children: (0, i.jsxs)(u.Z, {
            section: P.jXE.FRIENDS_LIST,
            children: [
                G && U && (0, i.jsx)(Z.R, {}),
                (0, i.jsx)(o.SearchBar, {
                    className: a()(R.searchBar, er ? R.searchEmptyState : null),
                    query: F[c],
                    onChange: Y,
                    onClear: K,
                    size: o.SearchBar.Sizes.MEDIUM
                }),
                (0, i.jsx)(A.Z, {
                    rows: J,
                    renderRow: W,
                    renderSection: en,
                    sectionFilter: c,
                    isVirtualizedList: k >= y.nG,
                    hasSearchQuery: ei,
                    footer:
                        q && !er
                            ? (0, i.jsx)(o.Button, {
                                  look: o.Button.Looks.LINK,
                                  color: R.viewSpamButtonColor,
                                  className: R.viewSpamButton,
                                  onClick: M,
                                  size: o.ButtonSizes.TINY,
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
                        children: (0, i.jsx)(T.Z, { type: T.j.SECTION_NO_RESULTS }, c)
                    })
            ]
        })
    });
};
