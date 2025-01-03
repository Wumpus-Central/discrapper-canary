n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(529103),
    d = n(194359),
    u = n(410575),
    h = n(607070),
    m = n(100527),
    p = n(906732),
    g = n(795448),
    f = n(922611),
    _ = n(699516),
    E = n(974042),
    I = n(451478),
    C = n(434184),
    N = n(701861),
    v = n(437314),
    S = n(696577),
    T = n(163417),
    b = n(830880),
    A = n(492347),
    Z = n(42575),
    x = n(617015),
    L = n(981631),
    P = n(388032),
    O = n(732144);
t.Z = function (e) {
    let { sectionFilter: t, titleId: l } = e,
        { analyticsLocations: y } = (0, p.ZP)(m.Z.FRIENDS_LIST),
        { rows: R, section: j } = (0, s.cj)([E.ZP], () => E.ZP.getState()),
        D = (0, s.e7)([I.Z], () => I.Z.isFocused()),
        { relationshipCount: M, hasBlockedOrIgnored: w } = (0, s.cj)([_.Z], () => ({
            relationshipCount: _.Z.getRelationshipCount(),
            hasBlockedOrIgnored: _.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        k = (0, f.Do)({ location: 'PeopleList' }),
        [U, G] = r.useState(() => {
            let e = {};
            for (let t of Object.values(L.pJs)) e[t] = '';
            return e;
        }),
        B = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e('36312').then(n.bind(n, 153932));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        H = r.useCallback(
            (e) => {
                G({
                    ...U,
                    [t]: e
                });
            },
            [U, t]
        ),
        V = r.useCallback(() => {
            G({
                ...U,
                [t]: ''
            });
        }, [U, t]),
        F = t === L.pJs.PENDING && (R.filter(L.pJs.SPAM).length > 0 || R.filter(L.pJs.PENDING_IGNORED).length > 0),
        z = R.filter(t, U[t]);
    if (
        (r.useEffect(() => {
            t === L.pJs.ALL && (0, g.d$)();
        }, [t]),
        0 === z.length && '' === U[t])
    )
        return (0, i.jsx)('div', {
            className: O.emptyStateContainer,
            children: (0, i.jsx)(
                v.Z,
                {
                    type: t,
                    onClick: F
                        ? B
                        : t !== L.pJs.PENDING
                          ? () => {
                                c.Z.setSection(L.pJs.ADD_FRIEND);
                            }
                          : void 0
                },
                j
            )
        });
    let W = [z],
        Y = 0 === z.length && '' !== U[t],
        K = z.filter((e) => e.type === L.OGo.PENDING_INCOMING).length,
        q = t === L.pJs.PENDING && K > 0 && K >= x.yf;
    return (0, i.jsx)(p.Gt, {
        value: y,
        children: (0, i.jsxs)(u.Z, {
            section: L.jXE.FRIENDS_LIST,
            children: [
                k && w && (0, i.jsx)(b.R, {}),
                (0, i.jsx)(o.SearchBar, {
                    className: a()(O.searchBar, Y ? O.searchEmptyState : null),
                    query: U[t],
                    onChange: H,
                    onClear: V,
                    size: o.SearchBar.Sizes.MEDIUM
                }),
                (0, i.jsxs)('div', {
                    className: O.sectionTitle,
                    children: [
                        (0, i.jsx)(A.Z, {
                            id: l,
                            title: (function (e, t) {
                                switch (e) {
                                    case L.pJs.ONLINE:
                                        return P.intl.formatToPlainString(P.t.BagU2d, { online: t.toString() });
                                    case L.pJs.PENDING:
                                        return P.intl.formatToPlainString(P.t.XIpar6, { count: t.toString() });
                                    case L.pJs.SUGGESTIONS:
                                        return P.intl.formatToPlainString(P.t['DYMZ/v'], { count: t.toString() });
                                    case L.pJs.BLOCKED:
                                        return P.intl.formatToPlainString(P.t.M83kKy, { count: t.toString() });
                                    default:
                                        return P.intl.formatToPlainString(P.t.rHRrhI, { count: t.toString() });
                                }
                            })(t, z.length)
                        }),
                        q &&
                            (0, i.jsx)(o.Button, {
                                look: o.ButtonLooks.LINK,
                                color: o.ButtonColors.LINK,
                                className: O.clearButton,
                                size: o.Button.Sizes.TINY,
                                onClick: (e) => {
                                    e.stopPropagation(), d.Z.confirmClearPendingRelationships(K);
                                },
                                'aria-label': P.intl.string(P.t.T3uOb2),
                                children: P.intl.string(P.t.T3uOb2)
                            })
                    ]
                }),
                Y
                    ? (0, i.jsx)('div', {
                          className: O.emptyStateContainer,
                          children: (0, i.jsx)(v.Z, { type: v.j.SECTION_NO_RESULTS }, j)
                      })
                    : (0, i.jsx)(T.Z, {
                          relationshipCount: M,
                          statusSections: W,
                          renderRow: function (e) {
                              switch (t) {
                                  case L.pJs.BLOCKED:
                                      return (0, i.jsx)(C.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case L.pJs.PENDING:
                                      return (0, i.jsx)(S.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case L.pJs.SUGGESTIONS:
                                      return (0, i.jsx)(Z.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case L.pJs.ONLINE:
                                  case L.pJs.ALL:
                                  default:
                                      let { key: n, ...r } = e;
                                      return (0, i.jsx)(
                                          N.Z,
                                          {
                                              ...r,
                                              isFocused: D
                                          },
                                          n
                                      );
                              }
                          },
                          sectionFilter: t,
                          searchQuery: U[t],
                          useReducedMotion: h.Z.useReducedMotion,
                          footer: F
                              ? (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.LINK,
                                    color: O.viewSpamButtonColor,
                                    className: O.viewSpamButton,
                                    onClick: () => B(),
                                    size: o.ButtonSizes.TINY,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        children: k ? P.intl.string(P.t.R40bU1) : P.intl.string(P.t.rXl8fn)
                                    })
                                })
                              : null
                      })
            ]
        })
    });
};
