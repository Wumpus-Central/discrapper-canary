n.d(t, { Z: () => ei }), n(388685), n(539854), n(997841);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(228458),
    s = n(535655),
    c = n(754738),
    u = n(727241),
    d = n(973693),
    p = n(912370),
    m = n(873199),
    f = n(442837),
    h = n(481060),
    b = n(911969),
    _ = n(115130),
    y = n(566620),
    x = n(127255),
    C = n(880308),
    v = n(427996),
    g = n(367907),
    N = n(10718),
    j = n(895924),
    P = n(835473),
    E = n(568100),
    O = n(471518),
    A = n(425986),
    I = n(216780),
    S = n(857192),
    T = n(630388),
    L = n(823379),
    w = n(424602),
    R = n(541099),
    k = n(827498),
    Z = n(87005),
    M = n(219066),
    W = n(106066),
    D = n(783097),
    B = n(695676),
    U = n(98880),
    H = n(804307),
    V = n(888617),
    F = n(561160),
    z = n(41558),
    G = n(105862),
    X = n(28147),
    q = n(314734),
    Y = n(981631),
    Q = n(689079),
    J = n(388032),
    K = n(355563);
let $ = [],
    ee = [, , , ,].fill(0).map((e, t) => t),
    et = [
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
    en = d.Y.APP_LAUNCHER_IN_TEXT;
function ei(e) {
    let { context: t, entrypoint: n, searchQuery: l, setSearchQuery: o, setScroller: a, isScrollCloseToBottom: s } = e,
        c = (0, f.e7)([_.Z], () => _.Z.getIsEnabled(), []),
        u = n === k._b.TEXT && 'channel' === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, D.Yn)(n),
        p = !(0, D.Yn)(n),
        m = n === k._b.TEXT,
        [b, x] = ed(!0),
        [C, v] = ed(u),
        [g, N] = ed(d),
        [j, P] = ed(p),
        E = b && C && g && j,
        O = (d || u) && !E,
        A = p && c;
    r.useEffect(() => {
        var e;
        let n = 'channel' === t.type ? (null == (e = t.channel) ? void 0 : e.guild_id) : void 0;
        (0, y.w1)({
            guildId: n,
            force: !0
        });
    }, [t]),
        r.useEffect(() => {
            n === k._b.VOICE && y.ux();
        }, [n]);
    let I = l.length > 0;
    return (0, i.jsxs)('div', {
        className: K.container,
        children: [
            A ? (0, i.jsx)(er, {}) : null,
            (0, i.jsx)(el, {
                searchQuery: l,
                setSearchQuery: o,
                placeholder: m ? J.NW.string(J.t.ziyFv7) : J.NW.string(J.t['pw+r5e'])
            }),
            (0, i.jsx)(h.Ttm, {
                ref: a,
                className: K.scrollableContent,
                fade: !0,
                children: I
                    ? (0, i.jsx)(X.Z, {
                          context: t,
                          query: l,
                          entrypoint: n,
                          isScrollCloseToBottom: s
                      })
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(eo, {
                                  context: t,
                                  entrypoint: n,
                                  onEmptyState: x
                              }),
                              u &&
                                  'channel' === t.type &&
                                  (0, i.jsx)(es, {
                                      context: t,
                                      onEmptyState: v
                                  }),
                              d &&
                                  (0, i.jsx)(ec, {
                                      context: t,
                                      entrypoint: n,
                                      onEmptyState: N
                                  }),
                              p &&
                                  (0, i.jsx)(ea, {
                                      context: t,
                                      onEmptyState: P
                                  }),
                              E &&
                                  (0, i.jsx)(F.A, {
                                      type: k.LG.HOME_EMPTY,
                                      textContent: n === k._b.TEXT ? J.NW.string(J.t.iKZctb) : J.NW.string(J.t.RL7Ncn)
                                  }),
                              O && (0, i.jsx)(G.Z, {})
                          ]
                      })
            })
        ]
    });
}
function er() {
    return (0, i.jsxs)('div', {
        className: K.developerShelfControlsContainer,
        children: [
            (0, i.jsx)(h.Text, {
                className: K.developerShelfControlsLabel,
                variant: 'text-sm/normal',
                children: J.NW.string(J.t.tZ3FNj)
            }),
            (0, i.jsx)(v.W, { hideSearch: !0 })
        ]
    });
}
function el(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: l } = e,
        a = r.useRef(null),
        [s, c] = r.useState(!1),
        u = r.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, g.yw)(Y.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: R.Z.entrypoint(),
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
                (0, g.yw)(Y.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: R.Z.entrypoint(),
                    location: j.Vh.APP_LAUNCHER_HOME
                });
        }, []),
        m = r.useCallback(() => {
            c(!1);
        }, []),
        f = r.useCallback(
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
            className: K.searchBarContainer,
            children: (0, i.jsx)(h.E1j, {
                ref: (e) => {
                    var t;
                    a.current = null != (t = null == e ? void 0 : e.containerRef.current) ? t : null;
                },
                placeholder: l,
                query: t,
                onChange: f,
                onClear: d,
                size: h.E1j.Sizes.MEDIUM,
                onFocus: m,
                autoFocus: !0
            })
        })
    );
}
function eo(e) {
    let { context: t, entrypoint: n, onEmptyState: l } = e,
        o = n === k._b.VOICE,
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
        u = J.NW.string(J.t['s+UQpa']),
        d = u;
    o && (d = J.NW.string(J.t['2pFD8P']));
    let { items: p, handleViewMore: m } = ep({
        title: d,
        look: n === k._b.VOICE ? U.U4.LARGE_BANNER : U.U4.ROW,
        items: c,
        limit: 8,
        sectionName: k.L3.RECENT_APPS
    });
    r.useEffect(() => {
        s ||
            (0 !== p.length &&
                (0, g.yw)(Y.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: p.length,
                    section_name: k.L3.RECENT_APPS,
                    location: k.G0.HOME,
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
                  (0, i.jsx)(z.Z, {
                      title: u,
                      buttonType: z.Z.buttonTypes.VIEW_MORE,
                      onClickViewButton: m
                  }),
                  (0, i.jsx)('div', {
                      className: K.sectionContentContainer,
                      children: (0, i.jsx)('div', {
                          className: K.frecentList,
                          children: p.map((e, n) => {
                              let { application: r } = e;
                              return o
                                  ? (0, i.jsx)(
                                        U.qR,
                                        {
                                            context: t,
                                            application: r,
                                            look: U.U4.ICON,
                                            location: k.G0.HOME,
                                            sectionName: k.L3.RECENT_APPS,
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
                                            location: k.G0.HOME,
                                            sectionName: k.L3.RECENT_APPS,
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
function ea(e) {
    var t;
    let { context: n, onEmptyState: l } = e;
    (0, C.g)();
    let o = (0, x.Z)({
            guildId: 'channel' === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0,
            context: n
        }),
        a = U.U4.LARGE_BANNER,
        { trackSectionImpressionRef: s } = (0, V.Z)({
            sectionName: k.L3.ACTIVITIES,
            numItems: o.length,
            numVisibleItems: o.length
        }),
        c = (0, W.s)('ActivitiesShelfSection'),
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
                      children: (0, i.jsx)(z.Z, { title: J.NW.string(J.t.shUONj) })
                  }),
                  (0, i.jsx)('div', {
                      className: K.sectionTwoColumnContentContainer,
                      children: o.map((e, t) => {
                          let { application: r } = e;
                          return (0, i.jsx)(
                              U.qR,
                              {
                                  context: n,
                                  application: r,
                                  look: a,
                                  location: j.Vh.APP_LAUNCHER_HOME,
                                  sectionName: k.L3.ACTIVITIES,
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
function es(e) {
    let { context: t, onEmptyState: n } = e,
        l = k.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: o, isLoading: a } = (0, M.Z)({ context: t }),
        { items: s, handleViewMore: c } = ep({
            title: J.NW.string(J.t.KfkuGR),
            look: U.U4.ROW,
            items: o,
            limit: 4,
            sectionName: l
        }),
        { trackSectionImpressionRef: u } = (0, V.Z)({
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
                      children: (0, i.jsx)(z.Z, {
                          title: J.NW.string(J.t.KfkuGR),
                          buttonType: z.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: c
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: K.sectionRowsContentContainer,
                      children: a
                          ? ee.map((e) => (0, i.jsx)(H.Z, { look: U.U4.ROW }, e))
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
function ec(e) {
    let { context: t, entrypoint: n, onEmptyState: l } = e,
        {
            fetchState: o,
            recommendationsSections: u,
            isInstallOnDemand: d
        } = (function (e) {
            let { context: t, location: n } = e,
                i = (function () {
                    let e = (0, f.e7)([S.default], () => S.default.onlyShowPreviewAppCollections),
                        t = E.Z.getCurrentConfig({ location: 'App Launcher Home (Web)' }, { autoTrackExposure: !1 }).enabled;
                    return e ? s.E.PREVIEW : t ? s.E.NON_STAFF_PREVIEW : s.E.ACTIVE;
                })();
            r.useEffect(() => {
                (0, O.XK)({
                    surface: en,
                    activeState: i
                });
            }, [i]);
            let { sectionDescriptors: l } = N.wi({
                    context: t,
                    filters: { commandTypes: [b.yU.CHAT] },
                    options: {
                        placeholderCount: 0,
                        limit: Q.tn,
                        includeFrecency: !0
                    },
                    allowFetch: !0
                }),
                o = r.useCallback((e) => null == l.find((t) => t.id === e.id), [l]),
                c = (0, f.e7)([A.Z], () =>
                    A.Z.getFetchState({
                        surface: en,
                        activeState: i
                    })
                ),
                u = (0, f.e7)([A.Z], () =>
                    A.Z.getCollections({
                        surface: en,
                        activeState: i
                    })
                ),
                d = n === a.I.APP_LAUNCHER_VOICE;
            return {
                fetchState: c,
                recommendationsSections: r.useMemo(() => (d ? (0, D.pF)(u) : u), [u, d]),
                isInstallOnDemand: o
            };
        })({
            context: t,
            location: n === k._b.TEXT ? a.I.APP_LAUNCHER_TEXT : a.I.APP_LAUNCHER_VOICE
        }),
        m = (function (e) {
            var t;
            let { context: n, recommendationsSections: i } = e;
            (0, C.g)();
            let l = (0, x.Z)({
                guildId: 'channel' === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0,
                context: n
            });
            return r.useMemo(() => {
                if (!i.some((e) => (0, T.yE)(e.flags, c.b.APPENDS_REMAINING_ACTIVITIES))) return $;
                let e = new Set();
                return (
                    i.forEach((t) => {
                        t.application_directory_collection_items.forEach((t) => {
                            t.type === p.C.APPLICATION && e.add(t.application.id);
                        });
                    }),
                    l.filter((t) => !e.has(t.application.id))
                );
            }, [i, l]);
        })({
            context: t,
            recommendationsSections: u
        }),
        h = o === A.M.FETCHING,
        _ = !h && 0 === u.length;
    return (r.useEffect(() => {
        l(_);
    }, [_, l]),
    _)
        ? null
        : h
          ? et.map((e, t) => {
                let { cards: n, look: r } = e;
                return (0, i.jsxs)(
                    'div',
                    {
                        children: [
                            (0, i.jsx)(z.Z.Loading, {}),
                            (0, i.jsx)('div', {
                                className: r === U.U4.ROW ? K.sectionRowsContentContainer : K.sectionTwoColumnContentContainer,
                                children: n.map((e) => (0, i.jsx)(H.Z, { look: r }, e))
                            })
                        ]
                    },
                    t
                );
            })
          : u.map((e, n) =>
                (0, i.jsx)(
                    eu,
                    {
                        recommendationsSection: e,
                        remainingActivities: m,
                        isInstallOnDemand: d,
                        position: n,
                        context: t
                    },
                    e.id
                )
            );
}
function eu(e) {
    let t,
        n,
        { recommendationsSection: l, remainingActivities: o, isInstallOnDemand: a, position: s, context: d } = e,
        f = l.title;
    switch (l.type) {
        case m.o.BANNER_CARDS:
            t = U.U4.LARGE_BANNER;
            break;
        case m.o.SMALL_BANNER_CARDS:
            t = U.U4.MEDIUM_BANNER;
            break;
        default:
            t = U.U4.ROW;
    }
    let h = 'channel' in d && (0, w.aZ)(d.channel, 'AppLauncherHome.RecommendationsSection()'),
        b = r.useMemo(() => {
            let e = l.application_directory_collection_items
                .map((e) => {
                    if (e.type === p.C.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, T.yE)(e.flags, u.q.PROMOTED),
                            application: e.application,
                            installOnDemand: a(e.application)
                        };
                })
                .filter(L.lm);
            return (
                (0, T.yE)(l.flags, c.b.APPENDS_REMAINING_ACTIVITIES) &&
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
                e.filter((e) => !h || e.application.id !== w.gu)
            );
        }, [a, l.application_directory_collection_items, l.flags, o, h]),
        _ = l.id;
    switch (l.type) {
        case m.o.BANNER_CARDS:
        case m.o.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case m.o.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: y, handleViewMore: x } = ep({
            title: f,
            look: t,
            items: b,
            limit: n,
            sectionName: _,
            sectionOverallPosition: s
        }),
        { trackSectionImpressionRef: C } = (0, V.Z)({
            sectionName: _,
            numItems: b.length,
            numVisibleItems: y.length
        }),
        v = l.type !== m.o.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => {
                    C.current = e;
                },
                children: (0, i.jsx)(z.Z, {
                    title: l.title,
                    buttonType: z.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: x
                })
            }),
            (0, i.jsx)('div', {
                className: t === U.U4.ROW ? K.sectionRowsContentContainer : K.sectionTwoColumnContentContainer,
                children: y.map((e, n) => {
                    let r,
                        { collectionItemId: l, collectionItemImageHash: o, application: a, installOnDemand: c, showsPromoted: u } = e;
                    return (
                        null != l &&
                            null != o &&
                            (r = (0, I.$_)({
                                itemId: l,
                                hash: o,
                                containerWidth: q.Gy
                            })),
                        (0, i.jsx)(
                            U.kA,
                            {
                                context: d,
                                application: a,
                                look: t,
                                sectionName: _,
                                resultsPosition: n,
                                location: j.Vh.APP_LAUNCHER_HOME,
                                installOnDemand: c,
                                enableVideoBanner: v,
                                sectionOverallPosition: s,
                                overrideImageUrl: r,
                                showsPromoted: u
                            },
                            ''.concat(n, '-').concat(a.id)
                        )
                    );
                })
            })
        ]
    });
}
function ed(e) {
    let [t, n] = r.useState(!e);
    return [
        t,
        r.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, [])
    ];
}
function ep(e) {
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
                          (0, g.yw)(Y.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: o,
                              source: R.Z.entrypoint(),
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
