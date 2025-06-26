n.d(t, { Z: () => et }), n(388685), n(539854), n(997841);
var i = n(255367),
    l = n(73800),
    r = n(392711),
    o = n.n(r),
    a = n(535655),
    c = n(754738),
    s = n(727241),
    u = n(973693),
    d = n(912370),
    p = n(873199),
    m = n(442837),
    f = n(481060),
    h = n(911969),
    b = n(115130),
    _ = n(566620),
    C = n(127255),
    v = n(880308),
    x = n(427996),
    y = n(367907),
    g = n(10718),
    j = n(895924),
    N = n(835473),
    P = n(568100),
    E = n(471518),
    A = n(425986),
    I = n(216780),
    O = n(857192),
    S = n(630388),
    T = n(823379),
    L = n(541099),
    R = n(827498),
    w = n(87005),
    k = n(219066),
    Z = n(106066),
    M = n(783097),
    D = n(695676),
    U = n(98880),
    B = n(804307),
    H = n(888617),
    V = n(561160),
    W = n(41558),
    F = n(105862),
    z = n(28147),
    G = n(314734),
    q = n(981631),
    Y = n(689079),
    X = n(388032),
    Q = n(355563);
let J = [],
    K = [, , , ,].fill(0).map((e, t) => t),
    $ = [
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: U.U4.MEDIUM_BANNER
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: U.U4.ROW
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: U.U4.ROW
        }
    ],
    ee = u.Y.APP_LAUNCHER_IN_TEXT;
function et(e) {
    let { context: t, entrypoint: n, searchQuery: r, setSearchQuery: o, setScroller: a, isScrollCloseToBottom: c } = e,
        s = (0, m.e7)([b.Z], () => b.Z.getIsEnabled(), []),
        u = n === R._b.TEXT && 'channel' === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, M.Yn)(n),
        p = !(0, M.Yn)(n),
        h = n === R._b.TEXT,
        [C, v] = es(!0),
        [x, y] = es(u),
        [g, j] = es(d),
        [N, P] = es(p),
        E = C && x && g && N,
        A = (d || u) && !E,
        I = p && s;
    l.useEffect(() => {
        var e;
        let n = 'channel' === t.type ? (null == (e = t.channel) ? void 0 : e.guild_id) : void 0;
        (0, _.w1)({
            guildId: n,
            force: !0
        });
    }, [t]),
        l.useEffect(() => {
            n === R._b.VOICE && _.ux();
        }, [n]);
    let O = r.length > 0;
    return (0, i.jsxs)('div', {
        className: Q.container,
        children: [
            I ? (0, i.jsx)(en, {}) : null,
            (0, i.jsx)(ei, {
                searchQuery: r,
                setSearchQuery: o,
                placeholder: h ? X.intl.string(X.t.ziyFv7) : X.intl.string(X.t['pw+r5e'])
            }),
            (0, i.jsx)(f.Ttm, {
                ref: a,
                className: Q.scrollableContent,
                fade: !0,
                children: O
                    ? (0, i.jsx)(z.Z, {
                          context: t,
                          query: r,
                          entrypoint: n,
                          isScrollCloseToBottom: c
                      })
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(el, {
                                  context: t,
                                  entrypoint: n,
                                  onEmptyState: v
                              }),
                              u &&
                                  'channel' === t.type &&
                                  (0, i.jsx)(eo, {
                                      context: t,
                                      onEmptyState: y
                                  }),
                              d &&
                                  (0, i.jsx)(ea, {
                                      context: t,
                                      entrypoint: n,
                                      onEmptyState: j
                                  }),
                              p &&
                                  (0, i.jsx)(er, {
                                      context: t,
                                      onEmptyState: P
                                  }),
                              E &&
                                  (0, i.jsx)(V.A, {
                                      type: R.LG.HOME_EMPTY,
                                      textContent: n === R._b.TEXT ? X.intl.string(X.t.iKZctb) : X.intl.string(X.t.RL7Ncn)
                                  }),
                              A && (0, i.jsx)(F.Z, {})
                          ]
                      })
            })
        ]
    });
}
function en() {
    return (0, i.jsxs)('div', {
        className: Q.developerShelfControlsContainer,
        children: [
            (0, i.jsx)(f.Text, {
                className: Q.developerShelfControlsLabel,
                variant: 'text-sm/normal',
                children: X.intl.string(X.t.tZ3FNj)
            }),
            (0, i.jsx)(x.W, { hideSearch: !0 })
        ]
    });
}
function ei(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: r } = e,
        a = l.useRef(null),
        [c, s] = l.useState(!1),
        u = l.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, y.yw)(q.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: L.Z.entrypoint(),
                            location: j.Vh.APP_LAUNCHER_HOME
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
        d = l.useCallback(() => n(''), [n]),
        p = l.useCallback(() => {
            s(!0),
                (0, y.yw)(q.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: L.Z.entrypoint(),
                    location: j.Vh.APP_LAUNCHER_HOME
                });
        }, []),
        m = l.useCallback(() => {
            s(!1);
        }, []),
        h = l.useCallback(
            (e) => {
                c || p(), n(e), u(e);
            },
            [c, n, p, u]
        );
    return (
        l.useEffect(() => {
            let e = a.current;
            if (null == e) return;
            let t = () => {
                c || p();
            };
            return (
                e.addEventListener('click', t),
                () => {
                    e.removeEventListener('click', t);
                }
            );
        }, [c, p]),
        (0, i.jsx)('div', {
            className: Q.searchBarContainer,
            children: (0, i.jsx)(f.E1j, {
                ref: (e) => {
                    var t;
                    a.current = null != (t = null == e ? void 0 : e.containerRef.current) ? t : null;
                },
                placeholder: r,
                query: t,
                onChange: h,
                onClear: d,
                size: f.E1j.Sizes.MEDIUM,
                onFocus: m,
                autoFocus: !0
            })
        })
    );
}
function el(e) {
    let { context: t, entrypoint: n, onEmptyState: r } = e,
        o = n === R._b.VOICE,
        { frecentApps: a, loading: c } = (0, w.f)({
            context: t,
            onlyActivityApps: o,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0
        }),
        s = l.useMemo(() => {
            let e = [];
            for (let t of a) null != t.application && e.push({ application: t.application });
            return e;
        }, [a]),
        u = X.intl.string(X.t['s+UQpa']),
        d = u;
    o && (d = X.intl.string(X.t['2pFD8P']));
    let { items: p, handleViewMore: m } = eu({
        title: d,
        look: n === R._b.VOICE ? U.U4.LARGE_BANNER : U.U4.ROW,
        items: s,
        limit: 8,
        sectionName: R.L3.RECENT_APPS
    });
    l.useEffect(() => {
        c ||
            (0 !== p.length &&
                (0, y.yw)(q.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: p.length,
                    section_name: R.L3.RECENT_APPS,
                    location: R.G0.HOME,
                    source: n
                }));
    }, [p.length, n, c]);
    let f = !c && 0 === p.length;
    return (l.useEffect(() => {
        r(f);
    }, [f, r]),
    !(function (e) {
        let { apps: t, onlyActivityApps: n } = e,
            i = l.useMemo(
                () =>
                    n
                        ? t.map((e) => {
                              let { application: t } = e;
                              return t.id;
                          })
                        : [],
                [t, n]
            );
        (0, N.Z)(i);
    })({
        apps: p,
        onlyActivityApps: o
    }),
    c || f)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(W.Z, {
                      title: u,
                      buttonType: W.Z.buttonTypes.VIEW_MORE,
                      onClickViewButton: m
                  }),
                  (0, i.jsx)('div', {
                      className: Q.sectionContentContainer,
                      children: (0, i.jsx)('div', {
                          className: Q.frecentList,
                          children: p.map((e, n) => {
                              let { application: l } = e;
                              return o
                                  ? (0, i.jsx)(
                                        U.qR,
                                        {
                                            context: t,
                                            application: l,
                                            look: U.U4.ICON,
                                            location: R.G0.HOME,
                                            sectionName: R.L3.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1
                                        },
                                        l.id
                                    )
                                  : (0, i.jsx)(
                                        U.kA,
                                        {
                                            context: t,
                                            application: l,
                                            look: U.U4.ICON,
                                            location: R.G0.HOME,
                                            sectionName: R.L3.RECENT_APPS,
                                            resultsPosition: n
                                        },
                                        l.id
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
    (0, v.g)();
    let o = (0, C.Z)({ guildId: 'channel' === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0 }),
        a = U.U4.LARGE_BANNER,
        { trackSectionImpressionRef: c } = (0, H.Z)({
            sectionName: R.L3.ACTIVITIES,
            numItems: o.length,
            numVisibleItems: o.length
        }),
        s = (0, Z.s)(),
        u = 0 === o.length;
    return (l.useEffect(() => {
        r(u);
    }, [r, u]),
    u)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => {
                          c.current = e;
                      },
                      children: (0, i.jsx)(W.Z, { title: X.intl.string(X.t.shUONj) })
                  }),
                  (0, i.jsx)('div', {
                      className: Q.sectionTwoColumnContentContainer,
                      children: o.map((e, t) => {
                          let { application: l } = e;
                          return (0, i.jsx)(
                              U.qR,
                              {
                                  context: n,
                                  application: l,
                                  look: a,
                                  location: j.Vh.APP_LAUNCHER_HOME,
                                  sectionName: R.L3.ACTIVITIES,
                                  resultsPosition: t,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !s,
                                  fetchesApplication: !1
                              },
                              l.id
                          );
                      })
                  })
              ]
          });
}
function eo(e) {
    let { context: t, onEmptyState: n } = e,
        r = R.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: o, isLoading: a } = (0, k.Z)({ context: t }),
        { items: c, handleViewMore: s } = eu({
            title: X.intl.string(X.t.KfkuGR),
            look: U.U4.ROW,
            items: o,
            limit: 4,
            sectionName: r
        }),
        { trackSectionImpressionRef: u } = (0, H.Z)({
            sectionName: r,
            numItems: o.length,
            numVisibleItems: c.length
        }),
        d = !a && 0 === c.length;
    return (l.useEffect(() => {
        n(d);
    }, [d, n]),
    d)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => {
                          u.current = e;
                      },
                      children: (0, i.jsx)(W.Z, {
                          title: X.intl.string(X.t.KfkuGR),
                          buttonType: W.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: s
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: Q.sectionRowsContentContainer,
                      children: a
                          ? K.map((e) => (0, i.jsx)(B.Z, { look: U.U4.ROW }, e))
                          : c.map((e, n) => {
                                let { application: l } = e;
                                return null != l
                                    ? (0, i.jsx)(
                                          U.kA,
                                          {
                                              context: t,
                                              application: l,
                                              look: U.U4.ROW,
                                              sectionName: r,
                                              resultsPosition: n,
                                              location: j.Vh.APP_LAUNCHER_HOME
                                          },
                                          l.id
                                      )
                                    : null;
                            })
                  })
              ]
          });
}
function ea(e) {
    let { context: t, entrypoint: n, onEmptyState: r } = e,
        {
            fetchState: o,
            recommendationsSections: s,
            isInstallOnDemand: u
        } = (function (e) {
            let { context: t, entrypoint: n } = e,
                i = (function () {
                    let e = (0, m.e7)([O.default], () => O.default.onlyShowPreviewAppCollections),
                        t = P.Z.getCurrentConfig({ location: 'App Launcher Home (Web)' }, { autoTrackExposure: !1 }).enabled;
                    return e ? a.E.PREVIEW : t ? a.E.NON_STAFF_PREVIEW : a.E.ACTIVE;
                })();
            l.useEffect(() => {
                (0, E.XK)({
                    surface: ee,
                    activeState: i
                });
            }, [i]);
            let { sectionDescriptors: r } = g.wi({
                    context: t,
                    filters: { commandTypes: [h.yU.CHAT] },
                    options: {
                        placeholderCount: 0,
                        limit: Y.tn,
                        includeFrecency: !0
                    },
                    allowFetch: !0
                }),
                o = l.useCallback((e) => null == r.find((t) => t.id === e.id), [r]),
                c = (0, m.e7)([A.Z], () =>
                    A.Z.getFetchState({
                        surface: ee,
                        activeState: i
                    })
                ),
                s = (0, m.e7)([A.Z], () =>
                    A.Z.getCollections({
                        surface: ee,
                        activeState: i
                    })
                ),
                u = n === R._b.VOICE;
            return {
                fetchState: c,
                recommendationsSections: l.useMemo(() => (u ? (0, M.pF)(s) : s), [s, u]),
                isInstallOnDemand: o
            };
        })({
            context: t,
            entrypoint: n
        }),
        p = (function (e) {
            var t;
            let { context: n, recommendationsSections: i } = e;
            (0, v.g)();
            let r = (0, C.Z)({ guildId: 'channel' === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0 });
            return l.useMemo(() => {
                if (!i.some((e) => (0, S.yE)(e.flags, c.b.APPENDS_REMAINING_ACTIVITIES))) return J;
                let e = new Set();
                return (
                    i.forEach((t) => {
                        t.application_directory_collection_items.forEach((t) => {
                            t.type === d.C.APPLICATION && e.add(t.application.id);
                        });
                    }),
                    r.filter((t) => !e.has(t.application.id))
                );
            }, [i, r]);
        })({
            context: t,
            recommendationsSections: s
        }),
        f = o === A.M.FETCHING,
        b = !f && 0 === s.length;
    return (l.useEffect(() => {
        r(b);
    }, [b, r]),
    b)
        ? null
        : f
          ? $.map((e, t) => {
                let { cards: n, look: l } = e;
                return (0, i.jsxs)(
                    'div',
                    {
                        children: [
                            (0, i.jsx)(W.Z.Loading, {}),
                            (0, i.jsx)('div', {
                                className: l === U.U4.ROW ? Q.sectionRowsContentContainer : Q.sectionTwoColumnContentContainer,
                                children: n.map((e) => (0, i.jsx)(B.Z, { look: l }, e))
                            })
                        ]
                    },
                    t
                );
            })
          : s.map((e, n) =>
                (0, i.jsx)(
                    ec,
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
function ec(e) {
    let t,
        n,
        { recommendationsSection: r, remainingActivities: o, isInstallOnDemand: a, position: u, context: m } = e,
        f = r.title;
    switch (r.type) {
        case p.o.BANNER_CARDS:
            t = U.U4.LARGE_BANNER;
            break;
        case p.o.SMALL_BANNER_CARDS:
            t = U.U4.MEDIUM_BANNER;
            break;
        default:
            t = U.U4.ROW;
    }
    let h = l.useMemo(() => {
            let e = r.application_directory_collection_items
                .map((e) => {
                    if (e.type === d.C.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, S.yE)(e.flags, s.q.PROMOTED),
                            application: e.application,
                            installOnDemand: a(e.application)
                        };
                })
                .filter(T.lm);
            return (
                (0, S.yE)(r.flags, c.b.APPENDS_REMAINING_ACTIVITIES) &&
                    e.push(
                        ...o.map((e) => {
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
        }, [a, r.application_directory_collection_items, r.flags, o]),
        b = r.title;
    switch (r.type) {
        case p.o.BANNER_CARDS:
        case p.o.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case p.o.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: _, handleViewMore: C } = eu({
            title: f,
            look: t,
            items: h,
            limit: n,
            sectionName: b,
            sectionOverallPosition: u
        }),
        { trackSectionImpressionRef: v } = (0, H.Z)({
            sectionName: b,
            numItems: h.length,
            numVisibleItems: _.length
        }),
        x = r.type !== p.o.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => {
                    v.current = e;
                },
                children: (0, i.jsx)(W.Z, {
                    title: r.title,
                    buttonType: W.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: C
                })
            }),
            (0, i.jsx)('div', {
                className: t === U.U4.ROW ? Q.sectionRowsContentContainer : Q.sectionTwoColumnContentContainer,
                children: _.map((e, n) => {
                    let l,
                        { collectionItemId: r, collectionItemImageHash: o, application: a, installOnDemand: c, showsPromoted: s } = e;
                    return (
                        null != r &&
                            null != o &&
                            (l = (0, I.$_)({
                                itemId: r,
                                hash: o,
                                containerWidth: G.Gy
                            })),
                        (0, i.jsx)(
                            U.kA,
                            {
                                context: m,
                                application: a,
                                look: t,
                                sectionName: b,
                                resultsPosition: n,
                                location: j.Vh.APP_LAUNCHER_HOME,
                                installOnDemand: c,
                                enableVideoBanner: x,
                                sectionOverallPosition: u,
                                overrideImageUrl: l,
                                showsPromoted: s
                            },
                            ''.concat(n, '-').concat(a.id)
                        )
                    );
                })
            })
        ]
    });
}
function es(e) {
    let [t, n] = l.useState(!e);
    return [
        t,
        l.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, [])
    ];
}
function eu(e) {
    let { title: t, look: n, items: i, limit: r, sectionName: o, sectionOverallPosition: a } = e,
        { pushHistory: c } = (0, D.hH)();
    return l.useMemo(
        () =>
            i.length <= r
                ? {
                      items: i,
                      handleViewMore: void 0
                  }
                : {
                      items: i.slice(0, r),
                      handleViewMore: () => {
                          (0, y.yw)(q.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: o,
                              source: L.Z.entrypoint(),
                              num: i.length
                          }),
                              c({
                                  type: D.gc.LIST,
                                  title: t,
                                  look: n,
                                  items: i,
                                  sectionName: o,
                                  sectionOverallPosition: a
                              });
                      }
                  },
        [i, r, o, c, t, n, a]
    );
}
