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
    p = n(795448),
    g = n(922611),
    f = n(699516),
    _ = n(974042),
    E = n(451478),
    I = n(434184),
    C = n(701861),
    N = n(437314),
    v = n(696577),
    S = n(163417),
    T = n(830880),
    A = n(492347),
    b = n(42575),
    Z = n(617015),
    x = n(981631),
    L = n(388032),
    P = n(732144);
function O() {
    c.Z.setSection(x.pJs.ADD_FRIEND);
}
function y() {
    (0, o.openModalLazy)(async () => {
        let { default: e } = await n.e('36312').then(n.bind(n, 153932));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function R(e) {
    let { section: t, showSpamCta: n } = e,
        l = r.useMemo(() => (n ? y : t !== x.pJs.PENDING ? O : void 0), [n, t]);
    return (0, i.jsx)('div', {
        className: P.emptyStateContainer,
        children: (0, i.jsx)(
            N.Z,
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
        { rows: l, section: c } = (0, s.cj)([_.ZP], () => _.ZP.getState()),
        O = (0, s.e7)([E.Z], () => E.Z.isFocused()),
        { relationshipCount: j, hasBlockedOrIgnored: D } = (0, s.cj)([f.Z], () => ({
            relationshipCount: f.Z.getRelationshipCount(),
            hasBlockedOrIgnored: f.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        M = (0, g.Do)({ location: 'PeopleList' }),
        [w, k] = r.useState(() => {
            let e = {};
            for (let t of Object.values(x.pJs)) e[t] = '';
            return e;
        }),
        U = r.useCallback(
            (e) => {
                switch (c) {
                    case x.pJs.BLOCKED:
                        return (0, i.jsx)(I.Z, {
                            ...e,
                            isFocused: O
                        });
                    case x.pJs.PENDING:
                        return (0, i.jsx)(v.Z, {
                            ...e,
                            isFocused: O
                        });
                    case x.pJs.SUGGESTIONS:
                        return (0, i.jsx)(b.Z, {
                            ...e,
                            isFocused: O
                        });
                    case x.pJs.ONLINE:
                    case x.pJs.ALL:
                    default:
                        let { key: t, ...n } = e;
                        return (0, i.jsx)(
                            C.Z,
                            {
                                ...n,
                                isFocused: O
                            },
                            t
                        );
                }
            },
            [O, c]
        ),
        G = r.useCallback(
            (e) => {
                k({
                    ...w,
                    [c]: e
                });
            },
            [w, c]
        ),
        B = r.useCallback(() => {
            k({
                ...w,
                [c]: ''
            });
        }, [w, c]),
        H = r.useMemo(() => c === x.pJs.PENDING && (l.filter(x.pJs.SPAM).length > 0 || l.filter(x.pJs.PENDING_IGNORED).length > 0), [l, c]),
        V = r.useMemo(() => l.filter(c, w[c]), [l, w, c]),
        F = r.useMemo(() => {
            if (c === x.pJs.PENDING) {
                let e = [],
                    t = [];
                return (
                    V.forEach((n) => {
                        n.type === x.OGo.PENDING_INCOMING ? e.push(n) : n.type === x.OGo.PENDING_OUTGOING && t.push(n);
                    }),
                    [e, t]
                );
            }
            return [V];
        }, [V, c]),
        z = r.useMemo(() => V.filter((e) => e.type === x.OGo.PENDING_INCOMING).length, [V]),
        W = c === x.pJs.PENDING && z > 0 && z >= Z.yf,
        Y = r.useCallback(
            (e) => {
                e.stopPropagation(), d.Z.confirmClearPendingRelationships(z);
            },
            [z]
        ),
        K = r.useCallback(
            (e) => {
                let n = (function (e, t, n) {
                    switch (e) {
                        case x.pJs.ONLINE:
                            return L.intl.formatToPlainString(L.t.BagU2d, { online: t.toString() });
                        case x.pJs.PENDING:
                            if (0 === n) return L.intl.formatToPlainString(L.t['g+3FIS'], { count: t.toString() });
                            if (1 === n) return L.intl.formatToPlainString(L.t.npJsRk, { count: t.toString() });
                            else throw Error('Unexpected pending friend requests section index: '.concat(n));
                        case x.pJs.SUGGESTIONS:
                            return L.intl.formatToPlainString(L.t['DYMZ/v'], { count: t.toString() });
                        case x.pJs.BLOCKED:
                            return L.intl.formatToPlainString(L.t.M83kKy, { count: t.toString() });
                        default:
                            return L.intl.formatToPlainString(L.t.rHRrhI, { count: t.toString() });
                    }
                })(c, F[e].length, e);
                return c === x.pJs.PENDING && 0 === e
                    ? (0, i.jsxs)('div', {
                          className: P.sectionTitle,
                          children: [
                              (0, i.jsx)(A.Z, {
                                  id: t,
                                  title: n
                              }),
                              W &&
                                  (0, i.jsx)(o.Button, {
                                      look: o.ButtonLooks.LINK,
                                      color: o.ButtonColors.LINK,
                                      className: P.clearButton,
                                      size: o.Button.Sizes.TINY,
                                      onClick: Y,
                                      'aria-label': L.intl.string(L.t.O8k7Oz),
                                      children: L.intl.string(L.t.O8k7Oz)
                                  })
                          ]
                      })
                    : (0, i.jsx)('div', {
                          className: P.sectionTitle,
                          children: (0, i.jsx)(A.Z, {
                              id: t,
                              title: n
                          })
                      });
            },
            [F, c, t, W, Y]
        );
    if (
        (r.useEffect(() => {
            c === x.pJs.ALL && (0, p.d$)();
        }, [c]),
        0 === V.length && '' === w[c])
    )
        return (0, i.jsx)(R, {
            section: c,
            showSpamCta: H
        });
    let q = '' !== w[c],
        X = 0 === V.length && q;
    return (0, i.jsx)(m.Gt, {
        value: n,
        children: (0, i.jsxs)(u.Z, {
            section: x.jXE.FRIENDS_LIST,
            children: [
                M && D && (0, i.jsx)(T.R, {}),
                (0, i.jsx)(o.SearchBar, {
                    className: a()(P.searchBar, X ? P.searchEmptyState : null),
                    query: w[c],
                    onChange: G,
                    onClear: B,
                    size: o.SearchBar.Sizes.MEDIUM
                }),
                (0, i.jsx)(S.Z, {
                    rows: F,
                    renderRow: U,
                    renderSection: K,
                    sectionFilter: c,
                    isVirtualizedList: j >= Z.nG,
                    hasSearchQuery: q,
                    footer:
                        H && !X
                            ? (0, i.jsx)(o.Button, {
                                  look: o.Button.Looks.LINK,
                                  color: P.viewSpamButtonColor,
                                  className: P.viewSpamButton,
                                  onClick: y,
                                  size: o.ButtonSizes.TINY,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: 'text-xs/medium',
                                      children: M ? L.intl.string(L.t.R40bU1) : L.intl.string(L.t.rXl8fn)
                                  })
                              })
                            : null
                }),
                X &&
                    (0, i.jsx)('div', {
                        className: P.emptyStateContainer,
                        children: (0, i.jsx)(N.Z, { type: N.j.SECTION_NO_RESULTS }, c)
                    })
            ]
        })
    });
};
