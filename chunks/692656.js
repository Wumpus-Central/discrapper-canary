n.d(t, { Z: () => ei }), n(388685), n(539854), n(997841);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(228458),
    c = n(535655),
    s = n(754738),
    u = n(727241),
    d = n(973693),
    p = n(912370),
    m = n(873199),
    f = n(442837),
    h = n(481060),
    b = n(911969),
    C = n(115130),
    x = n(566620),
    _ = n(127255),
    y = n(880308),
    v = n(427996),
    N = n(367907),
    g = n(10718),
    j = n(895924),
    P = n(835473),
    E = n(568100),
    A = n(471518),
    I = n(425986),
    O = n(216780),
    S = n(857192),
    T = n(630388),
    L = n(823379),
    w = n(424602),
    R = n(541099),
    k = n(827498),
    Z = n(87005),
    M = n(219066),
    D = n(106066),
    W = n(783097),
    B = n(695676),
    U = n(98880),
    H = n(804307),
    V = n(888617),
    F = n(561160),
    z = n(41558),
    G = n(105862),
    q = n(28147),
    X = n(314734),
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
    let { context: t, entrypoint: n, searchQuery: l, setSearchQuery: a, setScroller: o, isScrollCloseToBottom: c } = e,
        s = (0, f.e7)([C.Z], () => C.Z.getIsEnabled(), []),
        u = n === k._b.TEXT && 'channel' === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, W.Yn)(n),
        p = !(0, W.Yn)(n),
        m = n === k._b.TEXT,
        [b, _] = ed(!0),
        [y, v] = ed(u),
        [N, g] = ed(d),
        [j, P] = ed(p),
        E = b && y && N && j,
        A = (d || u) && !E,
        I = p && s;
    r.useEffect(() => {
        var e;
        let n = 'channel' === t.type ? (null == (e = t.channel) ? void 0 : e.guild_id) : void 0;
        (0, x.w1)({
            guildId: n,
            force: !0
        });
    }, [t]),
        r.useEffect(() => {
            n === k._b.VOICE && x.ux();
        }, [n]);
    let O = l.length > 0;
    return (0, i.jsxs)('div', {
        className: K.container,
        children: [
            I ? (0, i.jsx)(er, {}) : null,
            (0, i.jsx)(el, {
                searchQuery: l,
                setSearchQuery: a,
                placeholder: m ? J.NW.string(J.t.ziyFv7) : J.NW.string(J.t['pw+r5e'])
            }),
            (0, i.jsx)(h.Ttm, {
                ref: o,
                className: K.scrollableContent,
                fade: !0,
                children: O
                    ? (0, i.jsx)(q.Z, {
                          context: t,
                          query: l,
                          entrypoint: n,
                          isScrollCloseToBottom: c
                      })
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(ea, {
                                  context: t,
                                  entrypoint: n,
                                  onEmptyState: _
                              }),
                              u &&
                                  'channel' === t.type &&
                                  (0, i.jsx)(ec, {
                                      context: t,
                                      onEmptyState: v
                                  }),
                              d &&
                                  (0, i.jsx)(es, {
                                      context: t,
                                      entrypoint: n,
                                      onEmptyState: g
                                  }),
                              p &&
                                  (0, i.jsx)(eo, {
                                      context: t,
                                      onEmptyState: P
                                  }),
                              E &&
                                  (0, i.jsx)(F.A, {
                                      type: k.LG.HOME_EMPTY,
                                      textContent: n === k._b.TEXT ? J.NW.string(J.t.iKZctb) : J.NW.string(J.t.RL7Ncn)
                                  }),
                              A && (0, i.jsx)(G.Z, {})
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
        o = r.useRef(null),
        [c, s] = r.useState(!1),
        u = r.useMemo(
            () =>
                a().debounce(
                    (e) => {
                        (0, N.yw)(Y.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
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
            s(!0),
                (0, N.yw)(Y.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: R.Z.entrypoint(),
                    location: j.Vh.APP_LAUNCHER_HOME
                });
        }, []),
        m = r.useCallback(() => {
            s(!1);
        }, []),
        f = r.useCallback(
            (e) => {
                c || p(), n(e), u(e);
            },
            [c, n, p, u]
        );
    return (
        r.useEffect(() => {
            let e = o.current;
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
            className: K.searchBarContainer,
            children: (0, i.jsx)(h.E1j, {
                ref: (e) => {
                    var t;
                    o.current = null != (t = null == e ? void 0 : e.containerRef.current) ? t : null;
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
function ea(e) {
    let { context: t, entrypoint: n, onEmptyState: l } = e,
        a = n === k._b.VOICE,
        { frecentApps: o, loading: c } = (0, Z.f)({
            context: t,
            onlyActivityApps: a,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0
        }),
        s = r.useMemo(() => {
            let e = [];
            for (let t of o) null != t.application && e.push({ application: t.application });
            return e;
        }, [o]),
        u = J.NW.string(J.t['s+UQpa']),
        d = u;
    a && (d = J.NW.string(J.t['2pFD8P']));
    let { items: p, handleViewMore: m } = ep({
        title: d,
        look: n === k._b.VOICE ? U.U4.LARGE_BANNER : U.U4.ROW,
        items: s,
        limit: 8,
        sectionName: k.L3.RECENT_APPS
    });
    r.useEffect(() => {
        c ||
            (0 !== p.length &&
                (0, N.yw)(Y.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: p.length,
                    section_name: k.L3.RECENT_APPS,
                    location: k.G0.HOME,
                    source: n
                }));
    }, [p.length, n, c]);
    let f = !c && 0 === p.length;
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
        onlyActivityApps: a
    }),
    c || f)
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
                              return a
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
function eo(e) {
    var t;
    let { context: n, onEmptyState: l } = e;
    (0, y.g)();
    let a = (0, _.Z)({
            guildId: 'channel' === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0,
            context: n
        }),
        o = U.U4.LARGE_BANNER,
        { trackSectionImpressionRef: c } = (0, V.Z)({
            sectionName: k.L3.ACTIVITIES,
            numItems: a.length,
            numVisibleItems: a.length
        }),
        s = (0, D.s)('ActivitiesShelfSection'),
        u = 0 === a.length;
    return (r.useEffect(() => {
        l(u);
    }, [l, u]),
    u)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => {
                          c.current = e;
                      },
                      children: (0, i.jsx)(z.Z, { title: J.NW.string(J.t.shUONj) })
                  }),
                  (0, i.jsx)('div', {
                      className: K.sectionTwoColumnContentContainer,
                      children: a.map((e, t) => {
                          let { application: r } = e;
                          return (0, i.jsx)(
                              U.qR,
                              {
                                  context: n,
                                  application: r,
                                  look: o,
                                  location: j.Vh.APP_LAUNCHER_HOME,
                                  sectionName: k.L3.ACTIVITIES,
                                  resultsPosition: t,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !s,
                                  fetchesApplication: !1
                              },
                              r.id
                          );
                      })
                  })
              ]
          });
}
function ec(e) {
    let { context: t, onEmptyState: n } = e,
        l = k.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: a, isLoading: o } = (0, M.Z)({ context: t }),
        { items: c, handleViewMore: s } = ep({
            title: J.NW.string(J.t.KfkuGR),
            look: U.U4.ROW,
            items: a,
            limit: 4,
            sectionName: l
        }),
        { trackSectionImpressionRef: u } = (0, V.Z)({
            sectionName: l,
            numItems: a.length,
            numVisibleItems: c.length
        }),
        d = !o && 0 === c.length;
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
                          onClickViewButton: s
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: K.sectionRowsContentContainer,
                      children: o
                          ? ee.map((e) => (0, i.jsx)(H.Z, { look: U.U4.ROW }, e))
                          : c.map((e, n) => {
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
            fetchState: a,
            recommendationsSections: u,
            isInstallOnDemand: d
        } = (function (e) {
            let { context: t, location: n } = e,
                i = (function () {
                    let e = (0, f.e7)([S.default], () => S.default.onlyShowPreviewAppCollections),
                        t = E.Z.getCurrentConfig({ location: 'App Launcher Home (Web)' }, { autoTrackExposure: !1 }).enabled;
                    return e ? c.E.PREVIEW : t ? c.E.NON_STAFF_PREVIEW : c.E.ACTIVE;
                })();
            r.useEffect(() => {
                (0, A.XK)({
                    surface: en,
                    activeState: i
                });
            }, [i]);
            let { sectionDescriptors: l } = g.wi({
                    context: t,
                    filters: { commandTypes: [b.yU.CHAT] },
                    options: {
                        placeholderCount: 0,
                        limit: Q.tn,
                        includeFrecency: !0
                    },
                    allowFetch: !0
                }),
                a = r.useCallback((e) => null == l.find((t) => t.id === e.id), [l]),
                s = (0, f.e7)([I.Z], () =>
                    I.Z.getFetchState({
                        surface: en,
                        activeState: i
                    })
                ),
                u = (0, f.e7)([I.Z], () =>
                    I.Z.getCollections({
                        surface: en,
                        activeState: i
                    })
                ),
                d = n === o.I.APP_LAUNCHER_VOICE;
            return {
                fetchState: s,
                recommendationsSections: r.useMemo(() => (d ? (0, W.pF)(u) : u), [u, d]),
                isInstallOnDemand: a
            };
        })({
            context: t,
            location: n === k._b.TEXT ? o.I.APP_LAUNCHER_TEXT : o.I.APP_LAUNCHER_VOICE
        }),
        m = (function (e) {
            var t;
            let { context: n, recommendationsSections: i } = e;
            (0, y.g)();
            let l = (0, _.Z)({
                guildId: 'channel' === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0,
                context: n
            });
            return r.useMemo(() => {
                if (!i.some((e) => (0, T.yE)(e.flags, s.b.APPENDS_REMAINING_ACTIVITIES))) return $;
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
        h = a === I.M.FETCHING,
        C = !h && 0 === u.length;
    return (r.useEffect(() => {
        l(C);
    }, [C, l]),
    C)
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
        { recommendationsSection: l, remainingActivities: a, isInstallOnDemand: o, position: c, context: d } = e,
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
                            installOnDemand: o(e.application)
                        };
                })
                .filter(L.lm);
            return (
                (0, T.yE)(l.flags, s.b.APPENDS_REMAINING_ACTIVITIES) &&
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
                e.filter((e) => !h || e.application.id !== w.gu)
            );
        }, [o, l.application_directory_collection_items, l.flags, a, h]),
        C = l.id;
    switch (l.type) {
        case m.o.BANNER_CARDS:
        case m.o.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case m.o.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: x, handleViewMore: _ } = ep({
            title: f,
            look: t,
            items: b,
            limit: n,
            sectionName: C,
            sectionOverallPosition: c
        }),
        { trackSectionImpressionRef: y } = (0, V.Z)({
            sectionName: C,
            numItems: b.length,
            numVisibleItems: x.length
        }),
        v = l.type !== m.o.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => {
                    y.current = e;
                },
                children: (0, i.jsx)(z.Z, {
                    title: l.title,
                    buttonType: z.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: _
                })
            }),
            (0, i.jsx)('div', {
                className: t === U.U4.ROW ? K.sectionRowsContentContainer : K.sectionTwoColumnContentContainer,
                children: x.map((e, n) => {
                    let r,
                        { collectionItemId: l, collectionItemImageHash: a, application: o, installOnDemand: s, showsPromoted: u } = e;
                    return (
                        null != l &&
                            null != a &&
                            (r = (0, O.$_)({
                                itemId: l,
                                hash: a,
                                containerWidth: X.Gy
                            })),
                        (0, i.jsx)(
                            U.kA,
                            {
                                context: d,
                                application: o,
                                look: t,
                                sectionName: C,
                                resultsPosition: n,
                                location: j.Vh.APP_LAUNCHER_HOME,
                                installOnDemand: s,
                                enableVideoBanner: v,
                                sectionOverallPosition: c,
                                overrideImageUrl: r,
                                showsPromoted: u
                            },
                            ''.concat(n, '-').concat(o.id)
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
    let { title: t, look: n, items: i, limit: l, sectionName: a, sectionOverallPosition: o } = e,
        { pushHistory: c } = (0, B.hH)();
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
                          (0, N.yw)(Y.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: a,
                              source: R.Z.entrypoint(),
                              num: i.length
                          }),
                              c({
                                  type: B.gc.LIST,
                                  title: t,
                                  look: n,
                                  items: i,
                                  sectionName: a,
                                  sectionOverallPosition: o
                              });
                      }
                  },
        [i, l, a, c, t, n, o]
    );
}
