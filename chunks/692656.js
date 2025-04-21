n.d(t, { Z: () => en }), n(388685), n(539854), n(997841);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(535655),
    s = n(754738),
    c = n(727241),
    u = n(973693),
    d = n(912370),
    p = n(873199),
    m = n(442837),
    f = n(481060),
    h = n(911969),
    b = n(115130),
    _ = n(566620),
    y = n(127255),
    x = n(880308),
    v = n(427996),
    C = n(367907),
    g = n(10718),
    j = n(895924),
    P = n(835473),
    N = n(568100),
    E = n(471518),
    O = n(425986),
    A = n(216780),
    I = n(857192),
    S = n(630388),
    T = n(823379),
    L = n(424602),
    w = n(541099),
    R = n(827498),
    Z = n(87005),
    k = n(219066),
    M = n(106066),
    D = n(783097),
    B = n(695676),
    U = n(98880),
    H = n(804307),
    W = n(888617),
    V = n(561160),
    F = n(41558),
    z = n(105862),
    G = n(28147),
    X = n(314734),
    q = n(981631),
    Y = n(689079),
    Q = n(388032),
    J = n(355563);
let K = [],
    $ = [, , , ,].fill(0).map((e, t) => t),
    ee = [
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
    et = u.Y.APP_LAUNCHER_IN_TEXT;
function en(e) {
    let { context: t, entrypoint: n, searchQuery: l, setSearchQuery: o, setScroller: a, isScrollCloseToBottom: s } = e,
        c = (0, m.e7)([b.Z], () => b.Z.getIsEnabled(), []),
        u = n === R._b.TEXT && 'channel' === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, D.Yn)(n),
        p = !(0, D.Yn)(n),
        h = n === R._b.TEXT,
        [y, x] = eu(!0),
        [v, C] = eu(u),
        [g, j] = eu(d),
        [P, N] = eu(p),
        E = y && v && g && P,
        O = (d || u) && !E,
        A = p && c;
    r.useEffect(() => {
        var e;
        let n = 'channel' === t.type ? (null == (e = t.channel) ? void 0 : e.guild_id) : void 0;
        (0, _.w1)({
            guildId: n,
            force: !0
        });
    }, [t]),
        r.useEffect(() => {
            n === R._b.VOICE && _.ux();
        }, [n]);
    let I = l.length > 0;
    return (0, i.jsxs)('div', {
        className: J.container,
        children: [
            A ? (0, i.jsx)(ei, {}) : null,
            (0, i.jsx)(er, {
                searchQuery: l,
                setSearchQuery: o,
                placeholder: h ? Q.intl.string(Q.t.ziyFv7) : Q.intl.string(Q.t['pw+r5e'])
            }),
            (0, i.jsx)(f.Ttm, {
                ref: a,
                className: J.scrollableContent,
                fade: !0,
                children: I
                    ? (0, i.jsx)(G.Z, {
                          context: t,
                          query: l,
                          entrypoint: n,
                          isScrollCloseToBottom: s
                      })
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(el, {
                                  context: t,
                                  entrypoint: n,
                                  onEmptyState: x
                              }),
                              u &&
                                  'channel' === t.type &&
                                  (0, i.jsx)(ea, {
                                      context: t,
                                      onEmptyState: C
                                  }),
                              d &&
                                  (0, i.jsx)(es, {
                                      context: t,
                                      entrypoint: n,
                                      onEmptyState: j
                                  }),
                              p &&
                                  (0, i.jsx)(eo, {
                                      context: t,
                                      onEmptyState: N
                                  }),
                              E &&
                                  (0, i.jsx)(V.A, {
                                      type: R.LG.HOME_EMPTY,
                                      textContent: n === R._b.TEXT ? Q.intl.string(Q.t.iKZctb) : Q.intl.string(Q.t.RL7Ncn)
                                  }),
                              O && (0, i.jsx)(z.Z, {})
                          ]
                      })
            })
        ]
    });
}
function ei() {
    return (0, i.jsxs)('div', {
        className: J.developerShelfControlsContainer,
        children: [
            (0, i.jsx)(f.Text, {
                className: J.developerShelfControlsLabel,
                variant: 'text-sm/normal',
                children: Q.intl.string(Q.t.tZ3FNj)
            }),
            (0, i.jsx)(v.W, { hideSearch: !0 })
        ]
    });
}
function er(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: l } = e,
        a = r.useRef(null),
        [s, c] = r.useState(!1),
        u = r.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, C.yw)(q.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: w.Z.entrypoint(),
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
        d = r.useCallback(() => n(''), [n]),
        p = r.useCallback(() => {
            c(!0),
                (0, C.yw)(q.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: w.Z.entrypoint(),
                    location: j.Vh.APP_LAUNCHER_HOME
                });
        }, []),
        m = r.useCallback(() => {
            c(!1);
        }, []),
        h = r.useCallback(
            (e) => {
                s || p(), n(e), u(e);
            },
            [s, n, p, u]
        );
    return (
        r.useEffect(() => {
            let e = a.current;
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
        (0, i.jsx)('div', {
            className: J.searchBarContainer,
            children: (0, i.jsx)(f.E1j, {
                ref: (e) => {
                    var t;
                    a.current = null != (t = null == e ? void 0 : e.containerRef.current) ? t : null;
                },
                placeholder: l,
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
    let { context: t, entrypoint: n, onEmptyState: l } = e,
        o = n === R._b.VOICE,
        { frecentApps: a, loading: s } = (0, Z.f)({
            context: t,
            onlyActivityApps: o,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0
        }),
        c = r.useMemo(() => {
            let e = [];
            for (let t of a) null != t.application && e.push({ application: t.application });
            return e;
        }, [a]),
        u = Q.intl.string(Q.t['s+UQpa']),
        d = u;
    o && (d = Q.intl.string(Q.t['2pFD8P']));
    let { items: p, handleViewMore: m } = ed({
        title: d,
        look: n === R._b.VOICE ? U.U4.LARGE_BANNER : U.U4.ROW,
        items: c,
        limit: 8,
        sectionName: R.L3.RECENT_APPS
    });
    r.useEffect(() => {
        s ||
            (0 !== p.length &&
                (0, C.yw)(q.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: p.length,
                    section_name: R.L3.RECENT_APPS,
                    location: R.G0.HOME,
                    source: n
                }));
    }, [p.length, n, s]);
    let f = !s && 0 === p.length;
    return (r.useEffect(() => {
        l(f);
    }, [f, l]),
    !(function (e) {
        let { apps: t, onlyActivityApps: n } = e,
            i = r.useMemo(
                () =>
                    n
                        ? t.map((e) => {
                              let { application: t } = e;
                              return t.id;
                          })
                        : [],
                [t, n]
            );
        (0, P.Z)(i);
    })({
        apps: p,
        onlyActivityApps: o
    }),
    s || f)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(F.Z, {
                      title: u,
                      buttonType: F.Z.buttonTypes.VIEW_MORE,
                      onClickViewButton: m
                  }),
                  (0, i.jsx)('div', {
                      className: J.sectionContentContainer,
                      children: (0, i.jsx)('div', {
                          className: J.frecentList,
                          children: p.map((e, n) => {
                              let { application: r } = e;
                              return o
                                  ? (0, i.jsx)(
                                        U.qR,
                                        {
                                            context: t,
                                            application: r,
                                            look: U.U4.ICON,
                                            location: R.G0.HOME,
                                            sectionName: R.L3.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1
                                        },
                                        r.id
                                    )
                                  : (0, i.jsx)(
                                        U.kA,
                                        {
                                            context: t,
                                            application: r,
                                            look: U.U4.ICON,
                                            location: R.G0.HOME,
                                            sectionName: R.L3.RECENT_APPS,
                                            resultsPosition: n
                                        },
                                        r.id
                                    );
                          })
                      })
                  })
              ]
          });
}
function eo(e) {
    var t;
    let { context: n, onEmptyState: l } = e;
    (0, x.g)();
    let o = (0, y.Z)({
            guildId: 'channel' === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0,
            context: n
        }),
        a = U.U4.LARGE_BANNER,
        { trackSectionImpressionRef: s } = (0, W.Z)({
            sectionName: R.L3.ACTIVITIES,
            numItems: o.length,
            numVisibleItems: o.length
        }),
        c = (0, M.s)(),
        u = 0 === o.length;
    return (r.useEffect(() => {
        l(u);
    }, [l, u]),
    u)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => {
                          s.current = e;
                      },
                      children: (0, i.jsx)(F.Z, { title: Q.intl.string(Q.t.shUONj) })
                  }),
                  (0, i.jsx)('div', {
                      className: J.sectionTwoColumnContentContainer,
                      children: o.map((e, t) => {
                          let { application: r } = e;
                          return (0, i.jsx)(
                              U.qR,
                              {
                                  context: n,
                                  application: r,
                                  look: a,
                                  location: j.Vh.APP_LAUNCHER_HOME,
                                  sectionName: R.L3.ACTIVITIES,
                                  resultsPosition: t,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !c,
                                  fetchesApplication: !1
                              },
                              r.id
                          );
                      })
                  })
              ]
          });
}
function ea(e) {
    let { context: t, onEmptyState: n } = e,
        l = R.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: o, isLoading: a } = (0, k.Z)({ context: t }),
        { items: s, handleViewMore: c } = ed({
            title: Q.intl.string(Q.t.KfkuGR),
            look: U.U4.ROW,
            items: o,
            limit: 4,
            sectionName: l
        }),
        { trackSectionImpressionRef: u } = (0, W.Z)({
            sectionName: l,
            numItems: o.length,
            numVisibleItems: s.length
        }),
        d = !a && 0 === s.length;
    return (r.useEffect(() => {
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
                      children: (0, i.jsx)(F.Z, {
                          title: Q.intl.string(Q.t.KfkuGR),
                          buttonType: F.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: c
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: J.sectionRowsContentContainer,
                      children: a
                          ? $.map((e) => (0, i.jsx)(H.Z, { look: U.U4.ROW }, e))
                          : s.map((e, n) => {
                                let { application: r } = e;
                                return null != r
                                    ? (0, i.jsx)(
                                          U.kA,
                                          {
                                              context: t,
                                              application: r,
                                              look: U.U4.ROW,
                                              sectionName: l,
                                              resultsPosition: n,
                                              location: j.Vh.APP_LAUNCHER_HOME
                                          },
                                          r.id
                                      )
                                    : null;
                            })
                  })
              ]
          });
}
function es(e) {
    let { context: t, entrypoint: n, onEmptyState: l } = e,
        {
            fetchState: o,
            recommendationsSections: c,
            isInstallOnDemand: u
        } = (function (e) {
            let { context: t, entrypoint: n } = e,
                i = (function () {
                    let e = (0, m.e7)([I.default], () => I.default.onlyShowPreviewAppCollections),
                        t = N.Z.getCurrentConfig({ location: 'App Launcher Home (Web)' }, { autoTrackExposure: !1 }).enabled;
                    return e ? a.E.PREVIEW : t ? a.E.NON_STAFF_PREVIEW : a.E.ACTIVE;
                })();
            r.useEffect(() => {
                (0, E.XK)({
                    surface: et,
                    activeState: i
                });
            }, [i]);
            let { sectionDescriptors: l } = g.wi({
                    context: t,
                    filters: { commandTypes: [h.yU.CHAT] },
                    options: {
                        placeholderCount: 0,
                        limit: Y.tn,
                        includeFrecency: !0
                    },
                    allowFetch: !0
                }),
                o = r.useCallback((e) => null == l.find((t) => t.id === e.id), [l]),
                s = (0, m.e7)([O.Z], () =>
                    O.Z.getFetchState({
                        surface: et,
                        activeState: i
                    })
                ),
                c = (0, m.e7)([O.Z], () =>
                    O.Z.getCollections({
                        surface: et,
                        activeState: i
                    })
                ),
                u = n === R._b.VOICE;
            return {
                fetchState: s,
                recommendationsSections: r.useMemo(() => (u ? (0, D.pF)(c) : c), [c, u]),
                isInstallOnDemand: o
            };
        })({
            context: t,
            entrypoint: n
        }),
        p = (function (e) {
            var t;
            let { context: n, recommendationsSections: i } = e;
            (0, x.g)();
            let l = (0, y.Z)({
                guildId: 'channel' === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0,
                context: n
            });
            return r.useMemo(() => {
                if (!i.some((e) => (0, S.yE)(e.flags, s.b.APPENDS_REMAINING_ACTIVITIES))) return K;
                let e = new Set();
                return (
                    i.forEach((t) => {
                        t.application_directory_collection_items.forEach((t) => {
                            t.type === d.C.APPLICATION && e.add(t.application.id);
                        });
                    }),
                    l.filter((t) => !e.has(t.application.id))
                );
            }, [i, l]);
        })({
            context: t,
            recommendationsSections: c
        }),
        f = o === O.M.FETCHING,
        b = !f && 0 === c.length;
    return (r.useEffect(() => {
        l(b);
    }, [b, l]),
    b)
        ? null
        : f
          ? ee.map((e, t) => {
                let { cards: n, look: r } = e;
                return (0, i.jsxs)(
                    'div',
                    {
                        children: [
                            (0, i.jsx)(F.Z.Loading, {}),
                            (0, i.jsx)('div', {
                                className: r === U.U4.ROW ? J.sectionRowsContentContainer : J.sectionTwoColumnContentContainer,
                                children: n.map((e) => (0, i.jsx)(H.Z, { look: r }, e))
                            })
                        ]
                    },
                    t
                );
            })
          : c.map((e, n) =>
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
        { recommendationsSection: l, remainingActivities: o, isInstallOnDemand: a, position: u, context: m } = e,
        f = l.title;
    switch (l.type) {
        case p.o.BANNER_CARDS:
            t = U.U4.LARGE_BANNER;
            break;
        case p.o.SMALL_BANNER_CARDS:
            t = U.U4.MEDIUM_BANNER;
            break;
        default:
            t = U.U4.ROW;
    }
    let h = 'channel' in m && (0, L.aZ)(m.channel, 'AppLauncherHome.RecommendationsSection()'),
        b = r.useMemo(() => {
            let e = l.application_directory_collection_items
                .map((e) => {
                    if (e.type === d.C.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, S.yE)(e.flags, c.q.PROMOTED),
                            application: e.application,
                            installOnDemand: a(e.application)
                        };
                })
                .filter(T.lm);
            return (
                (0, S.yE)(l.flags, s.b.APPENDS_REMAINING_ACTIVITIES) &&
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
                e.filter((e) => !h || e.application.id !== L.gu)
            );
        }, [a, l.application_directory_collection_items, l.flags, o, h]),
        _ = l.id;
    switch (l.type) {
        case p.o.BANNER_CARDS:
        case p.o.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case p.o.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: y, handleViewMore: x } = ed({
            title: f,
            look: t,
            items: b,
            limit: n,
            sectionName: _,
            sectionOverallPosition: u
        }),
        { trackSectionImpressionRef: v } = (0, W.Z)({
            sectionName: _,
            numItems: b.length,
            numVisibleItems: y.length
        }),
        C = l.type !== p.o.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => {
                    v.current = e;
                },
                children: (0, i.jsx)(F.Z, {
                    title: l.title,
                    buttonType: F.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: x
                })
            }),
            (0, i.jsx)('div', {
                className: t === U.U4.ROW ? J.sectionRowsContentContainer : J.sectionTwoColumnContentContainer,
                children: y.map((e, n) => {
                    let r,
                        { collectionItemId: l, collectionItemImageHash: o, application: a, installOnDemand: s, showsPromoted: c } = e;
                    return (
                        null != l &&
                            null != o &&
                            (r = (0, A.$_)({
                                itemId: l,
                                hash: o,
                                containerWidth: X.Gy
                            })),
                        (0, i.jsx)(
                            U.kA,
                            {
                                context: m,
                                application: a,
                                look: t,
                                sectionName: _,
                                resultsPosition: n,
                                location: j.Vh.APP_LAUNCHER_HOME,
                                installOnDemand: s,
                                enableVideoBanner: C,
                                sectionOverallPosition: u,
                                overrideImageUrl: r,
                                showsPromoted: c
                            },
                            ''.concat(n, '-').concat(a.id)
                        )
                    );
                })
            })
        ]
    });
}
function eu(e) {
    let [t, n] = r.useState(!e);
    return [
        t,
        r.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, [])
    ];
}
function ed(e) {
    let { title: t, look: n, items: i, limit: l, sectionName: o, sectionOverallPosition: a } = e,
        { pushHistory: s } = (0, B.hH)();
    return r.useMemo(
        () =>
            i.length <= l
                ? {
                      items: i,
                      handleViewMore: void 0
                  }
                : {
                      items: i.slice(0, l),
                      handleViewMore: () => {
                          (0, C.yw)(q.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: o,
                              source: w.Z.entrypoint(),
                              num: i.length
                          }),
                              s({
                                  type: B.gc.LIST,
                                  title: t,
                                  look: n,
                                  items: i,
                                  sectionName: o,
                                  sectionOverallPosition: a
                              });
                      }
                  },
        [i, l, o, s, t, n, a]
    );
}
