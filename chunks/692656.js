n.d(t, { Z: () => en }), n(47120), n(653041), n(789020);
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
    y = n(566620),
    x = n(127255),
    b = n(880308),
    E = n(427996),
    C = n(367907),
    g = n(10718),
    j = n(895924),
    P = n(151517),
    A = n(674588),
    I = n(368862),
    O = n(34674),
    _ = n(835473),
    S = n(857192),
    T = n(630388),
    L = n(823379),
    R = n(541099),
    M = n(827498),
    Z = n(87005),
    k = n(219066),
    w = n(106066),
    U = n(783097),
    D = n(695676),
    W = n(98880),
    H = n(804307),
    V = n(888617),
    B = n(561160),
    F = n(41558),
    G = n(105862),
    z = n(28147),
    Y = n(314734),
    X = n(981631),
    q = n(689079),
    Q = n(388032),
    J = n(712319);
let K = [],
    $ = [, , , ,].fill(0).map((e, t) => t),
    ee = [
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: W.U4.MEDIUM_BANNER
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: W.U4.ROW
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: W.U4.ROW
        }
    ],
    et = d.Y.APP_LAUNCHER_IN_TEXT;
function en(e) {
    let { context: t, entrypoint: n, searchQuery: r, setSearchQuery: o, setScroller: a, isScrollCloseToBottom: s } = e,
        c = (0, h.e7)([N.Z], () => N.Z.getIsEnabled(), []),
        u = n === M._b.TEXT && 'channel' === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, U.Yn)(n),
        p = !(0, U.Yn)(n),
        m = n === M._b.TEXT,
        [v, x] = eu(!0),
        [b, E] = eu(u),
        [C, g] = eu(d),
        [j, P] = eu(p),
        A = v && b && C && j,
        I = (d || u) && !A,
        O = p && c;
    l.useEffect(() => {
        var e;
        let n = 'channel' === t.type ? (null === (e = t.channel) || void 0 === e ? void 0 : e.guild_id) : void 0;
        (0, y.w1)({
            guildId: n,
            force: !0
        });
    }, [t]),
        l.useEffect(() => {
            n === M._b.VOICE && y.ux();
        }, [n]);
    let _ = r.length > 0;
    return (0, i.jsxs)('div', {
        className: J.container,
        children: [
            O ? (0, i.jsx)(ei, {}) : null,
            (0, i.jsx)(el, {
                searchQuery: r,
                setSearchQuery: o,
                placeholder: m ? Q.NW.string(Q.t.ziyFv7) : Q.NW.string(Q.t['pw+r5e'])
            }),
            (0, i.jsx)(f.Ttm, {
                ref: a,
                className: J.scrollableContent,
                fade: !0,
                children: _
                    ? (0, i.jsx)(z.Z, {
                          context: t,
                          query: r,
                          entrypoint: n,
                          isScrollCloseToBottom: s
                      })
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(er, {
                                  context: t,
                                  entrypoint: n,
                                  onEmptyState: x
                              }),
                              u &&
                                  'channel' === t.type &&
                                  (0, i.jsx)(ea, {
                                      context: t,
                                      onEmptyState: E
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
                              A &&
                                  (0, i.jsx)(B.A, {
                                      type: M.LG.HOME_EMPTY,
                                      textContent: n === M._b.TEXT ? Q.NW.string(Q.t.iKZctb) : Q.NW.string(Q.t.RL7Ncn)
                                  }),
                              I && (0, i.jsx)(G.Z, {})
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
                children: Q.NW.string(Q.t.tZ3FNj)
            }),
            (0, i.jsx)(E.W, { hideSearch: !0 })
        ]
    });
}
function el(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: r } = e,
        a = l.useRef(null),
        [s, c] = l.useState(!1),
        u = l.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, C.yw)(X.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
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
        d = l.useCallback(() => n(''), [n]),
        p = l.useCallback(() => {
            c(!0),
                (0, C.yw)(X.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: R.Z.entrypoint(),
                    location: j.Vh.APP_LAUNCHER_HOME
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
            className: J.searchBarContainer,
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
function er(e) {
    let { context: t, entrypoint: n, onEmptyState: r } = e,
        o = n === M._b.VOICE,
        { frecentApps: a, loading: s } = (0, Z.f)({
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
        u = Q.NW.string(Q.t['s+UQpa']),
        d = u;
    o && (d = Q.NW.string(Q.t['2pFD8P']));
    let { items: p, handleViewMore: m } = ed({
        title: d,
        look: n === M._b.VOICE ? W.U4.LARGE_BANNER : W.U4.ROW,
        items: c,
        limit: 8,
        sectionName: M.L3.RECENT_APPS
    });
    l.useEffect(() => {
        !s &&
            0 !== p.length &&
            (0, C.yw)(X.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                num: p.length,
                section_name: M.L3.RECENT_APPS,
                location: M.G0.HOME,
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
        (0, _.Z)(i);
    })({
        apps: p,
        onlyActivityApps: o
    }),
    s || h)
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
                              let { application: l } = e;
                              return o
                                  ? (0, i.jsx)(
                                        W.qR,
                                        {
                                            context: t,
                                            application: l,
                                            look: W.U4.ICON,
                                            location: M.G0.HOME,
                                            sectionName: M.L3.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1
                                        },
                                        l.id
                                    )
                                  : (0, i.jsx)(
                                        W.kA,
                                        {
                                            context: t,
                                            application: l,
                                            look: W.U4.ICON,
                                            location: M.G0.HOME,
                                            sectionName: M.L3.RECENT_APPS,
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
function eo(e) {
    var t;
    let { context: n, onEmptyState: r } = e;
    (0, b.g)();
    let o = (0, x.Z)({ guildId: 'channel' === n.type ? (null === (t = n.channel) || void 0 === t ? void 0 : t.getGuildId()) : void 0 }),
        a = W.U4.LARGE_BANNER,
        { trackSectionImpressionRef: s } = (0, V.Z)({
            sectionName: M.L3.ACTIVITIES,
            numItems: o.length,
            numVisibleItems: o.length
        }),
        c = (0, w.s)('ActivitiesShelfSection'),
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
                      children: (0, i.jsx)(F.Z, { title: Q.NW.string(Q.t.shUONj) })
                  }),
                  (0, i.jsx)('div', {
                      className: J.sectionTwoColumnContentContainer,
                      children: o.map((e, t) => {
                          let { application: l } = e;
                          return (0, i.jsx)(
                              W.qR,
                              {
                                  context: n,
                                  application: l,
                                  look: a,
                                  location: j.Vh.APP_LAUNCHER_HOME,
                                  sectionName: M.L3.ACTIVITIES,
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
function ea(e) {
    let { context: t, onEmptyState: n } = e,
        r = M.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: o, isLoading: a } = (0, k.Z)({ context: t }),
        { items: s, handleViewMore: c } = ed({
            title: Q.NW.string(Q.t.KfkuGR),
            look: W.U4.ROW,
            items: o,
            limit: 4,
            sectionName: r
        }),
        { trackSectionImpressionRef: u } = (0, V.Z)({
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
                      children: (0, i.jsx)(F.Z, {
                          title: Q.NW.string(Q.t.KfkuGR),
                          buttonType: F.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: c
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: J.sectionRowsContentContainer,
                      children: a
                          ? $.map((e) => (0, i.jsx)(H.Z, { look: W.U4.ROW }, e))
                          : s.map((e, n) => {
                                let { application: l } = e;
                                return null != l
                                    ? (0, i.jsx)(
                                          W.kA,
                                          {
                                              context: t,
                                              application: l,
                                              look: W.U4.ROW,
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
function es(e) {
    let { context: t, entrypoint: n, onEmptyState: r } = e,
        {
            fetchState: o,
            recommendationsSections: u,
            isInstallOnDemand: d
        } = (function (e) {
            let { context: t, location: n } = e,
                i = (function () {
                    let e = (0, h.e7)([S.default], () => S.default.onlyShowPreviewAppCollections),
                        t = P.Z.getCurrentConfig({ location: 'App Launcher Home (Web)' }, { autoTrackExposure: !1 }).enabled;
                    return e ? s.E.PREVIEW : t ? s.E.NON_STAFF_PREVIEW : s.E.ACTIVE;
                })();
            l.useEffect(() => {
                (0, A.XK)({
                    surface: et,
                    activeState: i
                });
            }, [i]);
            let { sectionDescriptors: r } = g.wi({
                    context: t,
                    filters: { commandTypes: [v.yU.CHAT] },
                    options: {
                        placeholderCount: 0,
                        limit: q.tn,
                        includeFrecency: !0
                    },
                    allowFetch: !0
                }),
                o = l.useCallback((e) => null == r.find((t) => t.id === e.id), [r]),
                c = (0, h.e7)([I.Z], () =>
                    I.Z.getFetchState({
                        surface: et,
                        activeState: i
                    })
                ),
                u = (0, h.e7)([I.Z], () =>
                    I.Z.getCollections({
                        surface: et,
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
            location: n === M._b.TEXT ? a.I.APP_LAUNCHER_TEXT : a.I.APP_LAUNCHER_VOICE
        }),
        m = (function (e) {
            var t;
            let { context: n, recommendationsSections: i } = e;
            (0, b.g)();
            let r = (0, x.Z)({ guildId: 'channel' === n.type ? (null === (t = n.channel) || void 0 === t ? void 0 : t.getGuildId()) : void 0 });
            return l.useMemo(() => {
                if (!i.some((e) => (0, T.yE)(e.flags, c.b.APPENDS_REMAINING_ACTIVITIES))) return K;
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
        f = o === I.M.FETCHING,
        N = !f && 0 === u.length;
    return (l.useEffect(() => {
        r(N);
    }, [N, r]),
    N)
        ? null
        : f
          ? ee.map((e, t) => {
                let { cards: n, look: l } = e;
                return (0, i.jsxs)(
                    'div',
                    {
                        children: [
                            (0, i.jsx)(F.Z.Loading, {}),
                            (0, i.jsx)('div', {
                                className: l === W.U4.ROW ? J.sectionRowsContentContainer : J.sectionTwoColumnContentContainer,
                                children: n.map((e) => (0, i.jsx)(H.Z, { look: l }, e))
                            })
                        ]
                    },
                    t
                );
            })
          : u.map((e, n) =>
                (0, i.jsx)(
                    ec,
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
function ec(e) {
    let t,
        n,
        { recommendationsSection: r, remainingActivities: o, isInstallOnDemand: a, position: s, context: d } = e,
        h = r.title;
    switch (r.type) {
        case m.o.BANNER_CARDS:
            t = W.U4.LARGE_BANNER;
            break;
        case m.o.SMALL_BANNER_CARDS:
            t = W.U4.MEDIUM_BANNER;
            break;
        default:
            t = W.U4.ROW;
    }
    let f = l.useMemo(() => {
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
                e
            );
        }, [a, r.application_directory_collection_items, r.flags, o]),
        v = r.id;
    switch (r.type) {
        case m.o.BANNER_CARDS:
        case m.o.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case m.o.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: N, handleViewMore: y } = ed({
            title: h,
            look: t,
            items: f,
            limit: n,
            sectionName: v,
            sectionOverallPosition: s
        }),
        { trackSectionImpressionRef: x } = (0, V.Z)({
            sectionName: v,
            numItems: f.length,
            numVisibleItems: N.length
        }),
        b = r.type !== m.o.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => (x.current = e),
                children: (0, i.jsx)(F.Z, {
                    title: r.title,
                    buttonType: F.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: y
                })
            }),
            (0, i.jsx)('div', {
                className: t === W.U4.ROW ? J.sectionRowsContentContainer : J.sectionTwoColumnContentContainer,
                children: N.map((e, n) => {
                    let l,
                        { collectionItemId: r, collectionItemImageHash: o, application: a, installOnDemand: c, showsPromoted: u } = e;
                    return (
                        null != r &&
                            null != o &&
                            (l = (0, O.$_)({
                                itemId: r,
                                hash: o,
                                containerWidth: Y.Gy
                            })),
                        (0, i.jsx)(
                            W.kA,
                            {
                                context: d,
                                application: a,
                                look: t,
                                sectionName: v,
                                resultsPosition: n,
                                location: j.Vh.APP_LAUNCHER_HOME,
                                installOnDemand: c,
                                enableVideoBanner: b,
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
function eu(e) {
    let [t, n] = l.useState(!e);
    return [
        t,
        l.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, [])
    ];
}
function ed(e) {
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
                          (0, C.yw)(X.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: o,
                              source: R.Z.entrypoint(),
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
