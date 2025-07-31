(n.d(t, { Z: () => et }), n(388685), n(539854), n(997841));
var l = n(255367),
    i = n(73800),
    r = n(392711),
    a = n.n(r),
    o = n(535655),
    s = n(754738),
    c = n(727241),
    u = n(973693),
    d = n(912370),
    p = n(873199),
    m = n(442837),
    f = n(481060),
    h = n(911969),
    v = n(115130),
    y = n(566620),
    x = n(127255),
    b = n(880308),
    g = n(427996),
    j = n(367907),
    N = n(10718),
    C = n(895924),
    E = n(835473),
    P = n(568100),
    O = n(471518),
    A = n(425986),
    I = n(216780),
    _ = n(857192),
    S = n(630388),
    T = n(823379),
    L = n(541099),
    R = n(827498),
    Z = n(87005),
    w = n(219066),
    k = n(106066),
    M = n(783097),
    U = n(695676),
    D = n(98880),
    H = n(804307),
    V = n(888617),
    B = n(561160),
    W = n(41558),
    F = n(105862),
    G = n(28147),
    z = n(314734),
    q = n(981631),
    Y = n(689079),
    X = n(388032),
    Q = n(355563);
let J = [],
    K = [, , , ,].fill(0).map((e, t) => t),
    $ = [
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: D.U4.MEDIUM_BANNER
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: D.U4.ROW
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: D.U4.ROW
        }
    ],
    ee = u.Y.APP_LAUNCHER_IN_TEXT;
function et(e) {
    let { context: t, entrypoint: n, searchQuery: r, setSearchQuery: a, setScroller: o, isScrollCloseToBottom: s } = e,
        c = (0, m.e7)([v.Z], () => v.Z.getIsEnabled(), []),
        u = n === R._b.TEXT && 'channel' === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, M.Yn)(n),
        p = !(0, M.Yn)(n),
        h = n === R._b.TEXT,
        [x, b] = ec(!0),
        [g, j] = ec(u),
        [N, C] = ec(d),
        [E, P] = ec(p),
        O = x && g && N && E,
        A = (d || u) && !O,
        I = p && c;
    (i.useEffect(() => {
        var e;
        let n = 'channel' === t.type ? (null == (e = t.channel) ? void 0 : e.guild_id) : void 0;
        (0, y.w1)({
            guildId: n,
            force: !0
        });
    }, [t]),
        i.useEffect(() => {
            n === R._b.VOICE && y.ux();
        }, [n]));
    let _ = r.length > 0;
    return (0, l.jsxs)('div', {
        className: Q.container,
        children: [
            I ? (0, l.jsx)(en, {}) : null,
            (0, l.jsx)(el, {
                searchQuery: r,
                setSearchQuery: a,
                placeholder: h ? X.intl.string(X.t.ziyFv7) : X.intl.string(X.t['pw+r5e'])
            }),
            (0, l.jsx)(f.Ttm, {
                ref: o,
                className: Q.scrollableContent,
                fade: !0,
                children: _
                    ? (0, l.jsx)(G.Z, {
                          context: t,
                          query: r,
                          entrypoint: n,
                          isScrollCloseToBottom: s
                      })
                    : (0, l.jsxs)('div', {
                          children: [
                              (0, l.jsx)(ei, {
                                  context: t,
                                  entrypoint: n,
                                  onEmptyState: b
                              }),
                              u &&
                                  'channel' === t.type &&
                                  (0, l.jsx)(ea, {
                                      context: t,
                                      onEmptyState: j
                                  }),
                              d &&
                                  (0, l.jsx)(eo, {
                                      context: t,
                                      entrypoint: n,
                                      onEmptyState: C
                                  }),
                              p &&
                                  (0, l.jsx)(er, {
                                      context: t,
                                      onEmptyState: P
                                  }),
                              O &&
                                  (0, l.jsx)(B.A, {
                                      type: R.LG.HOME_EMPTY,
                                      textContent: n === R._b.TEXT ? X.intl.string(X.t.iKZctb) : X.intl.string(X.t.RL7Ncn)
                                  }),
                              A && (0, l.jsx)(F.Z, {})
                          ]
                      })
            })
        ]
    });
}
function en() {
    return (0, l.jsxs)('div', {
        className: Q.developerShelfControlsContainer,
        children: [
            (0, l.jsx)(f.Text, {
                className: Q.developerShelfControlsLabel,
                variant: 'text-sm/normal',
                children: X.intl.string(X.t.tZ3FNj)
            }),
            (0, l.jsx)(g.W, { hideSearch: !0 })
        ]
    });
}
function el(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: r } = e,
        o = i.useRef(null),
        [s, c] = i.useState(!1),
        u = i.useMemo(
            () =>
                a().debounce(
                    (e) => {
                        (0, j.yw)(q.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: L.Z.entrypoint(),
                            location: C.Vh.APP_LAUNCHER_HOME
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0
                    }
                ),
            []
        ),
        d = i.useCallback(() => n(''), [n]),
        p = i.useCallback(() => {
            (c(!0),
                (0, j.yw)(q.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: L.Z.entrypoint(),
                    location: C.Vh.APP_LAUNCHER_HOME
                }));
        }, []),
        m = i.useCallback(() => {
            c(!1);
        }, []),
        h = i.useCallback(
            (e) => {
                (s || p(), n(e), u(e));
            },
            [s, n, p, u]
        );
    return (
        i.useEffect(() => {
            let e = o.current;
            if (null == e) return;
            let t = () => {
                s || p();
            };
            return (
                e.addEventListener('click', t),
                () => {
                    e.removeEventListener('click', t);
                }
            );
        }, [s, p]),
        (0, l.jsx)('div', {
            className: Q.searchBarContainer,
            children: (0, l.jsx)(f.E1j, {
                ref: (e) => {
                    var t;
                    o.current = null != (t = null == e ? void 0 : e.containerRef.current) ? t : null;
                },
                placeholder: r,
                query: t,
                onChange: h,
                onClear: d,
                onFocus: m,
                autoFocus: !0
            })
        })
    );
}
function ei(e) {
    let { context: t, entrypoint: n, onEmptyState: r } = e,
        a = n === R._b.VOICE,
        { frecentApps: o, loading: s } = (0, Z.f)({
            context: t,
            onlyActivityApps: a,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0
        }),
        c = i.useMemo(() => {
            let e = [];
            for (let t of o) null != t.application && e.push({ application: t.application });
            return e;
        }, [o]),
        u = X.intl.string(X.t['s+UQpa']),
        d = u;
    a && (d = X.intl.string(X.t['2pFD8P']));
    let { items: p, handleViewMore: m } = eu({
        title: d,
        look: n === R._b.VOICE ? D.U4.LARGE_BANNER : D.U4.ROW,
        items: c,
        limit: 8,
        sectionName: R.L3.RECENT_APPS
    });
    i.useEffect(() => {
        s ||
            (0 !== p.length &&
                (0, j.yw)(q.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: p.length,
                    section_name: R.L3.RECENT_APPS,
                    location: R.G0.HOME,
                    source: n
                }));
    }, [p.length, n, s]);
    let f = !s && 0 === p.length;
    return (i.useEffect(() => {
        r(f);
    }, [f, r]),
    !(function (e) {
        let { apps: t, onlyActivityApps: n } = e,
            l = i.useMemo(
                () =>
                    n
                        ? t.map((e) => {
                              let { application: t } = e;
                              return t.id;
                          })
                        : [],
                [t, n]
            );
        (0, E.Z)(l);
    })({
        apps: p,
        onlyActivityApps: a
    }),
    s || f)
        ? null
        : (0, l.jsxs)('div', {
              children: [
                  (0, l.jsx)(W.Z, {
                      title: u,
                      buttonType: W.Z.buttonTypes.VIEW_MORE,
                      onClickViewButton: m
                  }),
                  (0, l.jsx)('div', {
                      className: Q.sectionContentContainer,
                      children: (0, l.jsx)('div', {
                          className: Q.frecentList,
                          children: p.map((e, n) => {
                              let { application: i } = e;
                              return a
                                  ? (0, l.jsx)(
                                        D.qR,
                                        {
                                            context: t,
                                            application: i,
                                            look: D.U4.ICON,
                                            location: R.G0.HOME,
                                            sectionName: R.L3.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1
                                        },
                                        i.id
                                    )
                                  : (0, l.jsx)(
                                        D.kA,
                                        {
                                            context: t,
                                            application: i,
                                            look: D.U4.ICON,
                                            location: R.G0.HOME,
                                            sectionName: R.L3.RECENT_APPS,
                                            resultsPosition: n
                                        },
                                        i.id
                                    );
                          })
                      })
                  })
              ]
          });
}
function er(e) {
    var t;
    let { context: n, onEmptyState: r } = e;
    (0, b.g)();
    let a = (0, x.Z)({ guildId: 'channel' === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0 }),
        o = D.U4.LARGE_BANNER,
        { trackSectionImpressionRef: s } = (0, V.Z)({
            sectionName: R.L3.ACTIVITIES,
            numItems: a.length,
            numVisibleItems: a.length
        }),
        c = (0, k.s)(),
        u = 0 === a.length;
    return (i.useEffect(() => {
        r(u);
    }, [r, u]),
    u)
        ? null
        : (0, l.jsxs)('div', {
              children: [
                  (0, l.jsx)('div', {
                      ref: (e) => {
                          s.current = e;
                      },
                      children: (0, l.jsx)(W.Z, { title: X.intl.string(X.t.shUONj) })
                  }),
                  (0, l.jsx)('div', {
                      className: Q.sectionTwoColumnContentContainer,
                      children: a.map((e, t) => {
                          let { application: i } = e;
                          return (0, l.jsx)(
                              D.qR,
                              {
                                  context: n,
                                  application: i,
                                  look: o,
                                  location: C.Vh.APP_LAUNCHER_HOME,
                                  sectionName: R.L3.ACTIVITIES,
                                  resultsPosition: t,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !c,
                                  fetchesApplication: !1
                              },
                              i.id
                          );
                      })
                  })
              ]
          });
}
function ea(e) {
    let { context: t, onEmptyState: n } = e,
        r = R.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: a, isLoading: o } = (0, w.Z)({ context: t }),
        { items: s, handleViewMore: c } = eu({
            title: X.intl.string(X.t.KfkuGR),
            look: D.U4.ROW,
            items: a,
            limit: 4,
            sectionName: r
        }),
        { trackSectionImpressionRef: u } = (0, V.Z)({
            sectionName: r,
            numItems: a.length,
            numVisibleItems: s.length
        }),
        d = !o && 0 === s.length;
    return (i.useEffect(() => {
        n(d);
    }, [d, n]),
    d)
        ? null
        : (0, l.jsxs)('div', {
              children: [
                  (0, l.jsx)('div', {
                      ref: (e) => {
                          u.current = e;
                      },
                      children: (0, l.jsx)(W.Z, {
                          title: X.intl.string(X.t.KfkuGR),
                          buttonType: W.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: c
                      })
                  }),
                  (0, l.jsx)('div', {
                      className: Q.sectionRowsContentContainer,
                      children: o
                          ? K.map((e) => (0, l.jsx)(H.Z, { look: D.U4.ROW }, e))
                          : s.map((e, n) => {
                                let { application: i } = e;
                                return null != i
                                    ? (0, l.jsx)(
                                          D.kA,
                                          {
                                              context: t,
                                              application: i,
                                              look: D.U4.ROW,
                                              sectionName: r,
                                              resultsPosition: n,
                                              location: C.Vh.APP_LAUNCHER_HOME
                                          },
                                          i.id
                                      )
                                    : null;
                            })
                  })
              ]
          });
}
function eo(e) {
    let { context: t, entrypoint: n, onEmptyState: r } = e,
        {
            fetchState: a,
            recommendationsSections: c,
            isInstallOnDemand: u
        } = (function (e) {
            let { context: t, entrypoint: n } = e,
                l = (function () {
                    let e = (0, m.e7)([_.default], () => _.default.onlyShowPreviewAppCollections),
                        t = P.Z.getCurrentConfig({ location: 'App Launcher Home (Web)' }, { autoTrackExposure: !1 }).enabled;
                    return e ? o.E.PREVIEW : t ? o.E.NON_STAFF_PREVIEW : o.E.ACTIVE;
                })();
            i.useEffect(() => {
                (0, O.XK)({
                    surface: ee,
                    activeState: l
                });
            }, [l]);
            let { sectionDescriptors: r } = N.wi({
                    context: t,
                    filters: { commandTypes: [h.yU.CHAT] },
                    options: {
                        placeholderCount: 0,
                        limit: Y.tn,
                        includeFrecency: !0
                    },
                    allowFetch: !0
                }),
                a = i.useCallback((e) => null == r.find((t) => t.id === e.id), [r]),
                s = (0, m.e7)([A.Z], () =>
                    A.Z.getFetchState({
                        surface: ee,
                        activeState: l
                    })
                ),
                c = (0, m.e7)([A.Z], () =>
                    A.Z.getCollections({
                        surface: ee,
                        activeState: l
                    })
                ),
                u = n === R._b.VOICE;
            return {
                fetchState: s,
                recommendationsSections: i.useMemo(() => (u ? (0, M.pF)(c) : c), [c, u]),
                isInstallOnDemand: a
            };
        })({
            context: t,
            entrypoint: n
        }),
        p = (function (e) {
            var t;
            let { context: n, recommendationsSections: l } = e;
            (0, b.g)();
            let r = (0, x.Z)({ guildId: 'channel' === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0 });
            return i.useMemo(() => {
                if (!l.some((e) => (0, S.yE)(e.flags, s.b.APPENDS_REMAINING_ACTIVITIES))) return J;
                let e = new Set();
                return (
                    l.forEach((t) => {
                        t.application_directory_collection_items.forEach((t) => {
                            t.type === d.C.APPLICATION && e.add(t.application.id);
                        });
                    }),
                    r.filter((t) => !e.has(t.application.id))
                );
            }, [l, r]);
        })({
            context: t,
            recommendationsSections: c
        }),
        f = a === A.M.FETCHING,
        v = !f && 0 === c.length;
    return (i.useEffect(() => {
        r(v);
    }, [v, r]),
    v)
        ? null
        : f
          ? $.map((e, t) => {
                let { cards: n, look: i } = e;
                return (0, l.jsxs)(
                    'div',
                    {
                        children: [
                            (0, l.jsx)(W.Z.Loading, {}),
                            (0, l.jsx)('div', {
                                className: i === D.U4.ROW ? Q.sectionRowsContentContainer : Q.sectionTwoColumnContentContainer,
                                children: n.map((e) => (0, l.jsx)(H.Z, { look: i }, e))
                            })
                        ]
                    },
                    t
                );
            })
          : c.map((e, n) =>
                (0, l.jsx)(
                    es,
                    {
                        recommendationsSection: e,
                        remainingActivities: p,
                        isInstallOnDemand: u,
                        position: n,
                        context: t
                    },
                    e.id
                )
            );
}
function es(e) {
    let t,
        n,
        { recommendationsSection: r, remainingActivities: a, isInstallOnDemand: o, position: u, context: m } = e,
        f = r.title;
    switch (r.type) {
        case p.o.BANNER_CARDS:
            t = D.U4.LARGE_BANNER;
            break;
        case p.o.SMALL_BANNER_CARDS:
            t = D.U4.MEDIUM_BANNER;
            break;
        default:
            t = D.U4.ROW;
    }
    let h = i.useMemo(() => {
            let e = r.application_directory_collection_items
                .map((e) => {
                    if (e.type === d.C.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, S.yE)(e.flags, c.q.PROMOTED),
                            application: e.application,
                            installOnDemand: o(e.application)
                        };
                })
                .filter(T.lm);
            return (
                (0, S.yE)(r.flags, s.b.APPENDS_REMAINING_ACTIVITIES) &&
                    e.push(
                        ...a.map((e) => {
                            let { application: t } = e;
                            return {
                                collectionItemId: void 0,
                                collectionItemImageHash: void 0,
                                showsPromoted: !1,
                                application: t,
                                installOnDemand: !0
                            };
                        })
                    ),
                e
            );
        }, [o, r.application_directory_collection_items, r.flags, a]),
        v = r.title;
    switch (r.type) {
        case p.o.BANNER_CARDS:
        case p.o.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case p.o.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: y, handleViewMore: x } = eu({
            title: f,
            look: t,
            items: h,
            limit: n,
            sectionName: v,
            sectionOverallPosition: u
        }),
        { trackSectionImpressionRef: b } = (0, V.Z)({
            sectionName: v,
            numItems: h.length,
            numVisibleItems: y.length
        }),
        g = r.type !== p.o.SMALL_BANNER_CARDS;
    return (0, l.jsxs)('div', {
        children: [
            (0, l.jsx)('div', {
                ref: (e) => {
                    b.current = e;
                },
                children: (0, l.jsx)(W.Z, {
                    title: r.title,
                    buttonType: W.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: x
                })
            }),
            (0, l.jsx)('div', {
                className: t === D.U4.ROW ? Q.sectionRowsContentContainer : Q.sectionTwoColumnContentContainer,
                children: y.map((e, n) => {
                    let i,
                        { collectionItemId: r, collectionItemImageHash: a, application: o, installOnDemand: s, showsPromoted: c } = e;
                    return (
                        null != r &&
                            null != a &&
                            (i = (0, I.$_)({
                                itemId: r,
                                hash: a,
                                containerWidth: z.Gy
                            })),
                        (0, l.jsx)(
                            D.kA,
                            {
                                context: m,
                                application: o,
                                look: t,
                                sectionName: v,
                                resultsPosition: n,
                                location: C.Vh.APP_LAUNCHER_HOME,
                                installOnDemand: s,
                                enableVideoBanner: g,
                                sectionOverallPosition: u,
                                overrideImageUrl: i,
                                showsPromoted: c
                            },
                            ''.concat(n, '-').concat(o.id)
                        )
                    );
                })
            })
        ]
    });
}
function ec(e) {
    let [t, n] = i.useState(!e);
    return [
        t,
        i.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, [])
    ];
}
function eu(e) {
    let { title: t, look: n, items: l, limit: r, sectionName: a, sectionOverallPosition: o } = e,
        { pushHistory: s } = (0, U.hH)();
    return i.useMemo(
        () =>
            l.length <= r
                ? {
                      items: l,
                      handleViewMore: void 0
                  }
                : {
                      items: l.slice(0, r),
                      handleViewMore: () => {
                          ((0, j.yw)(q.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: a,
                              source: L.Z.entrypoint(),
                              num: l.length
                          }),
                              s({
                                  type: U.gc.LIST,
                                  title: t,
                                  look: n,
                                  items: l,
                                  sectionName: a,
                                  sectionOverallPosition: o
                              }));
                      }
                  },
        [l, r, a, s, t, n, o]
    );
}
