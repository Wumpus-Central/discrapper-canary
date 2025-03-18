n.d(t, { Z: () => ei }), n(47120), n(653041), n(789020);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    o = n.n(r),
    a = n(228458),
    s = n(535655),
    c = n(754738),
    u = n(727241),
    d = n(973693),
    p = n(912370),
    m = n(873199),
    h = n(442837),
    f = n(481060),
    v = n(911969),
    N = n(115130),
    x = n(566620),
    y = n(127255),
    b = n(880308),
    E = n(427996),
    j = n(367907),
    C = n(10718),
    g = n(895924),
    P = n(835473),
    A = n(568100),
    I = n(471518),
    _ = n(425986),
    O = n(216780),
    S = n(857192),
    T = n(630388),
    L = n(823379),
    R = n(424602),
    Z = n(541099),
    k = n(827498),
    M = n(87005),
    w = n(219066),
    W = n(106066),
    U = n(783097),
    D = n(695676),
    H = n(98880),
    V = n(804307),
    B = n(888617),
    F = n(561160),
    G = n(41558),
    z = n(105862),
    Y = n(28147),
    q = n(314734),
    X = n(981631),
    Q = n(689079),
    J = n(388032),
    K = n(712319);
let $ = [],
    ee = [, , , ,].fill(0).map((e, t) => t),
    et = [
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: H.U4.MEDIUM_BANNER
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: H.U4.ROW
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: H.U4.ROW
        }
    ],
    en = d.Y.APP_LAUNCHER_IN_TEXT;
function ei(e) {
    let { context: t, entrypoint: n, searchQuery: r, setSearchQuery: o, setScroller: a, isScrollCloseToBottom: s } = e,
        c = (0, h.e7)([N.Z], () => N.Z.getIsEnabled(), []),
        u = n === k._b.TEXT && 'channel' === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, U.Yn)(n),
        p = !(0, U.Yn)(n),
        m = n === k._b.TEXT,
        [v, y] = ed(!0),
        [b, E] = ed(u),
        [j, C] = ed(d),
        [g, P] = ed(p),
        A = v && b && j && g,
        I = (d || u) && !A,
        _ = p && c;
    l.useEffect(() => {
        var e;
        let n = 'channel' === t.type ? (null === (e = t.channel) || void 0 === e ? void 0 : e.guild_id) : void 0;
        (0, x.w1)({
            guildId: n,
            force: !0
        });
    }, [t]),
        l.useEffect(() => {
            n === k._b.VOICE && x.ux();
        }, [n]);
    let O = r.length > 0;
    return (0, i.jsxs)('div', {
        className: K.container,
        children: [
            _ ? (0, i.jsx)(el, {}) : null,
            (0, i.jsx)(er, {
                searchQuery: r,
                setSearchQuery: o,
                placeholder: m ? J.NW.string(J.t.ziyFv7) : J.NW.string(J.t['pw+r5e'])
            }),
            (0, i.jsx)(f.Ttm, {
                ref: a,
                className: K.scrollableContent,
                fade: !0,
                children: O
                    ? (0, i.jsx)(Y.Z, {
                          context: t,
                          query: r,
                          entrypoint: n,
                          isScrollCloseToBottom: s
                      })
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(eo, {
                                  context: t,
                                  entrypoint: n,
                                  onEmptyState: y
                              }),
                              u &&
                                  'channel' === t.type &&
                                  (0, i.jsx)(es, {
                                      context: t,
                                      onEmptyState: E
                                  }),
                              d &&
                                  (0, i.jsx)(ec, {
                                      context: t,
                                      entrypoint: n,
                                      onEmptyState: C
                                  }),
                              p &&
                                  (0, i.jsx)(ea, {
                                      context: t,
                                      onEmptyState: P
                                  }),
                              A &&
                                  (0, i.jsx)(F.A, {
                                      type: k.LG.HOME_EMPTY,
                                      textContent: n === k._b.TEXT ? J.NW.string(J.t.iKZctb) : J.NW.string(J.t.RL7Ncn)
                                  }),
                              I && (0, i.jsx)(z.Z, {})
                          ]
                      })
            })
        ]
    });
}
function el() {
    return (0, i.jsxs)('div', {
        className: K.developerShelfControlsContainer,
        children: [
            (0, i.jsx)(f.Text, {
                className: K.developerShelfControlsLabel,
                variant: 'text-sm/normal',
                children: J.NW.string(J.t.tZ3FNj)
            }),
            (0, i.jsx)(E.W, { hideSearch: !0 })
        ]
    });
}
function er(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: r } = e,
        a = l.useRef(null),
        [s, c] = l.useState(!1),
        u = l.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, j.yw)(X.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: Z.Z.entrypoint(),
                            location: g.Vh.APP_LAUNCHER_HOME
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
            c(!0),
                (0, j.yw)(X.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: Z.Z.entrypoint(),
                    location: g.Vh.APP_LAUNCHER_HOME
                });
        }, []),
        m = l.useCallback(() => {
            c(!1);
        }, []),
        h = l.useCallback(
            (e) => {
                s || p(), n(e), u(e);
            },
            [s, n, p, u]
        );
    return (
        l.useEffect(() => {
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
            children: (0, i.jsx)(f.E1j, {
                ref: (e) => {
                    var t;
                    a.current = null !== (t = null == e ? void 0 : e.containerRef.current) && void 0 !== t ? t : null;
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
function eo(e) {
    let { context: t, entrypoint: n, onEmptyState: r } = e,
        o = n === k._b.VOICE,
        { frecentApps: a, loading: s } = (0, M.f)({
            context: t,
            onlyActivityApps: o,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0
        }),
        c = l.useMemo(() => {
            let e = [];
            for (let t of a) null != t.application && e.push({ application: t.application });
            return e;
        }, [a]),
        u = J.NW.string(J.t['s+UQpa']),
        d = u;
    o && (d = J.NW.string(J.t['2pFD8P']));
    let { items: p, handleViewMore: m } = ep({
        title: d,
        look: n === k._b.VOICE ? H.U4.LARGE_BANNER : H.U4.ROW,
        items: c,
        limit: 8,
        sectionName: k.L3.RECENT_APPS
    });
    l.useEffect(() => {
        !s &&
            0 !== p.length &&
            (0, j.yw)(X.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                num: p.length,
                section_name: k.L3.RECENT_APPS,
                location: k.G0.HOME,
                source: n
            });
    }, [p.length, n, s]);
    let h = !s && 0 === p.length;
    return (l.useEffect(() => {
        r(h);
    }, [h, r]),
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
        (0, P.Z)(i);
    })({
        apps: p,
        onlyActivityApps: o
    }),
    s || h)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(G.Z, {
                      title: u,
                      buttonType: G.Z.buttonTypes.VIEW_MORE,
                      onClickViewButton: m
                  }),
                  (0, i.jsx)('div', {
                      className: K.sectionContentContainer,
                      children: (0, i.jsx)('div', {
                          className: K.frecentList,
                          children: p.map((e, n) => {
                              let { application: l } = e;
                              return o
                                  ? (0, i.jsx)(
                                        H.qR,
                                        {
                                            context: t,
                                            application: l,
                                            look: H.U4.ICON,
                                            location: k.G0.HOME,
                                            sectionName: k.L3.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1
                                        },
                                        l.id
                                    )
                                  : (0, i.jsx)(
                                        H.kA,
                                        {
                                            context: t,
                                            application: l,
                                            look: H.U4.ICON,
                                            location: k.G0.HOME,
                                            sectionName: k.L3.RECENT_APPS,
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
function ea(e) {
    var t;
    let { context: n, onEmptyState: r } = e;
    (0, b.g)();
    let o = (0, y.Z)({
            guildId: 'channel' === n.type ? (null === (t = n.channel) || void 0 === t ? void 0 : t.getGuildId()) : void 0,
            context: n
        }),
        a = H.U4.LARGE_BANNER,
        { trackSectionImpressionRef: s } = (0, B.Z)({
            sectionName: k.L3.ACTIVITIES,
            numItems: o.length,
            numVisibleItems: o.length
        }),
        c = (0, W.s)('ActivitiesShelfSection'),
        u = 0 === o.length;
    return (l.useEffect(() => {
        r(u);
    }, [r, u]),
    u)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => (s.current = e),
                      children: (0, i.jsx)(G.Z, { title: J.NW.string(J.t.shUONj) })
                  }),
                  (0, i.jsx)('div', {
                      className: K.sectionTwoColumnContentContainer,
                      children: o.map((e, t) => {
                          let { application: l } = e;
                          return (0, i.jsx)(
                              H.qR,
                              {
                                  context: n,
                                  application: l,
                                  look: a,
                                  location: g.Vh.APP_LAUNCHER_HOME,
                                  sectionName: k.L3.ACTIVITIES,
                                  resultsPosition: t,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !c,
                                  fetchesApplication: !1
                              },
                              l.id
                          );
                      })
                  })
              ]
          });
}
function es(e) {
    let { context: t, onEmptyState: n } = e,
        r = k.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: o, isLoading: a } = (0, w.Z)({ context: t }),
        { items: s, handleViewMore: c } = ep({
            title: J.NW.string(J.t.KfkuGR),
            look: H.U4.ROW,
            items: o,
            limit: 4,
            sectionName: r
        }),
        { trackSectionImpressionRef: u } = (0, B.Z)({
            sectionName: r,
            numItems: o.length,
            numVisibleItems: s.length
        }),
        d = !a && 0 === s.length;
    return (l.useEffect(() => {
        n(d);
    }, [d, n]),
    d)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => (u.current = e),
                      children: (0, i.jsx)(G.Z, {
                          title: J.NW.string(J.t.KfkuGR),
                          buttonType: G.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: c
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: K.sectionRowsContentContainer,
                      children: a
                          ? ee.map((e) => (0, i.jsx)(V.Z, { look: H.U4.ROW }, e))
                          : s.map((e, n) => {
                                let { application: l } = e;
                                return null != l
                                    ? (0, i.jsx)(
                                          H.kA,
                                          {
                                              context: t,
                                              application: l,
                                              look: H.U4.ROW,
                                              sectionName: r,
                                              resultsPosition: n,
                                              location: g.Vh.APP_LAUNCHER_HOME
                                          },
                                          l.id
                                      )
                                    : null;
                            })
                  })
              ]
          });
}
function ec(e) {
    let { context: t, entrypoint: n, onEmptyState: r } = e,
        {
            fetchState: o,
            recommendationsSections: u,
            isInstallOnDemand: d
        } = (function (e) {
            let { context: t, location: n } = e,
                i = (function () {
                    let e = (0, h.e7)([S.default], () => S.default.onlyShowPreviewAppCollections),
                        t = A.Z.getCurrentConfig({ location: 'App Launcher Home (Web)' }, { autoTrackExposure: !1 }).enabled;
                    return e ? s.E.PREVIEW : t ? s.E.NON_STAFF_PREVIEW : s.E.ACTIVE;
                })();
            l.useEffect(() => {
                (0, I.XK)({
                    surface: en,
                    activeState: i
                });
            }, [i]);
            let { sectionDescriptors: r } = C.wi({
                    context: t,
                    filters: { commandTypes: [v.yU.CHAT] },
                    options: {
                        placeholderCount: 0,
                        limit: Q.tn,
                        includeFrecency: !0
                    },
                    allowFetch: !0
                }),
                o = l.useCallback((e) => null == r.find((t) => t.id === e.id), [r]),
                c = (0, h.e7)([_.Z], () =>
                    _.Z.getFetchState({
                        surface: en,
                        activeState: i
                    })
                ),
                u = (0, h.e7)([_.Z], () =>
                    _.Z.getCollections({
                        surface: en,
                        activeState: i
                    })
                ),
                d = n === a.I.APP_LAUNCHER_VOICE;
            return {
                fetchState: c,
                recommendationsSections: l.useMemo(() => (d ? (0, U.pF)(u) : u), [u, d]),
                isInstallOnDemand: o
            };
        })({
            context: t,
            location: n === k._b.TEXT ? a.I.APP_LAUNCHER_TEXT : a.I.APP_LAUNCHER_VOICE
        }),
        m = (function (e) {
            var t;
            let { context: n, recommendationsSections: i } = e;
            (0, b.g)();
            let r = (0, y.Z)({
                guildId: 'channel' === n.type ? (null === (t = n.channel) || void 0 === t ? void 0 : t.getGuildId()) : void 0,
                context: n
            });
            return l.useMemo(() => {
                if (!i.some((e) => (0, T.yE)(e.flags, c.b.APPENDS_REMAINING_ACTIVITIES))) return $;
                let e = new Set();
                return (
                    i.forEach((t) => {
                        t.application_directory_collection_items.forEach((t) => {
                            t.type === p.C.APPLICATION && e.add(t.application.id);
                        });
                    }),
                    r.filter((t) => !e.has(t.application.id))
                );
            }, [i, r]);
        })({
            context: t,
            recommendationsSections: u
        }),
        f = o === _.M.FETCHING,
        N = !f && 0 === u.length;
    return (l.useEffect(() => {
        r(N);
    }, [N, r]),
    N)
        ? null
        : f
          ? et.map((e, t) => {
                let { cards: n, look: l } = e;
                return (0, i.jsxs)(
                    'div',
                    {
                        children: [
                            (0, i.jsx)(G.Z.Loading, {}),
                            (0, i.jsx)('div', {
                                className: l === H.U4.ROW ? K.sectionRowsContentContainer : K.sectionTwoColumnContentContainer,
                                children: n.map((e) => (0, i.jsx)(V.Z, { look: l }, e))
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
        { recommendationsSection: r, remainingActivities: o, isInstallOnDemand: a, position: s, context: d } = e,
        h = r.title;
    switch (r.type) {
        case m.o.BANNER_CARDS:
            t = H.U4.LARGE_BANNER;
            break;
        case m.o.SMALL_BANNER_CARDS:
            t = H.U4.MEDIUM_BANNER;
            break;
        default:
            t = H.U4.ROW;
    }
    let f = 'channel' in d && (0, R.aZ)(d.channel, 'AppLauncherHome.RecommendationsSection()'),
        v = l.useMemo(() => {
            let e = r.application_directory_collection_items
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
                (0, T.yE)(r.flags, c.b.APPENDS_REMAINING_ACTIVITIES) &&
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
                e.filter((e) => !f || e.application.id !== R.gu)
            );
        }, [a, r.application_directory_collection_items, r.flags, o, f]),
        N = r.id;
    switch (r.type) {
        case m.o.BANNER_CARDS:
        case m.o.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case m.o.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: x, handleViewMore: y } = ep({
            title: h,
            look: t,
            items: v,
            limit: n,
            sectionName: N,
            sectionOverallPosition: s
        }),
        { trackSectionImpressionRef: b } = (0, B.Z)({
            sectionName: N,
            numItems: v.length,
            numVisibleItems: x.length
        }),
        E = r.type !== m.o.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => (b.current = e),
                children: (0, i.jsx)(G.Z, {
                    title: r.title,
                    buttonType: G.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: y
                })
            }),
            (0, i.jsx)('div', {
                className: t === H.U4.ROW ? K.sectionRowsContentContainer : K.sectionTwoColumnContentContainer,
                children: x.map((e, n) => {
                    let l,
                        { collectionItemId: r, collectionItemImageHash: o, application: a, installOnDemand: c, showsPromoted: u } = e;
                    return (
                        null != r &&
                            null != o &&
                            (l = (0, O.$_)({
                                itemId: r,
                                hash: o,
                                containerWidth: q.Gy
                            })),
                        (0, i.jsx)(
                            H.kA,
                            {
                                context: d,
                                application: a,
                                look: t,
                                sectionName: N,
                                resultsPosition: n,
                                location: g.Vh.APP_LAUNCHER_HOME,
                                installOnDemand: c,
                                enableVideoBanner: E,
                                sectionOverallPosition: s,
                                overrideImageUrl: l,
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
    let [t, n] = l.useState(!e);
    return [
        t,
        l.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, [])
    ];
}
function ep(e) {
    let { title: t, look: n, items: i, limit: r, sectionName: o, sectionOverallPosition: a } = e,
        { pushHistory: s } = (0, D.hH)();
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
                          (0, j.yw)(X.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: o,
                              source: Z.Z.entrypoint(),
                              num: i.length
                          }),
                              s({
                                  type: D.gc.LIST,
                                  title: t,
                                  look: n,
                                  items: i,
                                  sectionName: o,
                                  sectionOverallPosition: a
                              });
                      }
                  },
        [i, r, o, s, t, n, a]
    );
}
