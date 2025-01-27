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
    v = n(451478),
    N = n(434184),
    T = n(701861),
    S = n(437314),
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
            S.Z,
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
        D = (0, s.e7)([v.Z], () => v.Z.isFocused()),
        { relationshipCount: k, hasBlockedOrIgnored: U } = (0, s.cj)([I.Z], () => ({
            relationshipCount: I.Z.getRelationshipCount(),
            hasBlockedOrIgnored: I.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        G = (0, E.Do)({ location: 'PeopleList' }),
        B = (0, g.wn)({ location: 'PeopleList' }),
        V = (0, s.e7)([f.Z], () => f.Z.getGameRelationshipCount() > 0),
        H = B && V,
        [F, z] = r.useState(() => {
            let e = {};
            for (let t of Object.values(P.pJs)) e[t] = '';
            return e;
        }),
        W = r.useCallback(
            (e) => {
                switch (c) {
                    case P.pJs.BLOCKED:
                        return (0, i.jsx)(N.Z, {
                            ...e,
                            isFocused: D
                        });
                    case P.pJs.PENDING:
                        return (0, i.jsx)(b.Z, {
                            ...e,
                            isFocused: D,
                            disambiguateGameFriends: H
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
        Q = B && c === P.pJs.PENDING,
        J = r.useMemo(() => {
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
    let $ = r.useMemo(() => {
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
        ee = r.useMemo(() => X.filter((e) => e.type === P.OGo.PENDING_INCOMING).length, [X]),
        et = c === P.pJs.PENDING && ee > 0 && ee >= y.yf,
        en = r.useCallback(
            (e) => {
                e.stopPropagation(), d.Z.confirmClearPendingRelationships(ee);
            },
            [ee]
        ),
        ei = r.useCallback(
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
                })(c, $[e].length, e);
                return c === P.pJs.PENDING && 0 === e
                    ? (0, i.jsxs)('div', {
                          className: R.sectionTitle,
                          children: [
                              (0, i.jsx)(x.Z, {
                                  id: t,
                                  title: n
                              }),
                              et &&
                                  (0, i.jsx)(o.Button, {
                                      look: o.ButtonLooks.LINK,
                                      color: o.ButtonColors.LINK,
                                      className: R.clearButton,
                                      size: o.Button.Sizes.TINY,
                                      onClick: en,
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
            [$, c, t, et, en]
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
    let er = '' !== F[c],
        el = 0 === X.length && er;
    return (0, i.jsx)(m.Gt, {
        value: n,
        children: (0, i.jsxs)(u.Z, {
            section: P.jXE.FRIENDS_LIST,
            children: [
                G && U && (0, i.jsx)(Z.R, {}),
                (0, i.jsx)(o.SearchBar, {
                    className: a()(R.searchBar, el ? R.searchEmptyState : null),
                    query: F[c],
                    onChange: Y,
                    onClear: K,
                    size: o.SearchBar.Sizes.MEDIUM
                }),
                (0, i.jsx)(A.Z, {
                    rows: $,
                    renderRow: W,
                    renderSection: ei,
                    sectionFilter: c,
                    isVirtualizedList: k >= y.nG,
                    hasSearchQuery: er,
                    footer:
                        q && !el
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
                el &&
                    (0, i.jsx)('div', {
                        className: R.emptyStateContainer,
                        children: (0, i.jsx)(S.Z, { type: S.j.SECTION_NO_RESULTS }, c)
                    })
            ]
        })
    });
};
