n.d(t, { Z: () => en }), n(47120), n(653041), n(789020);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    o = n.n(a),
    s = n(228458),
    r = n(535655),
    c = n(754738),
    d = n(727241),
    u = n(973693),
    m = n(912370),
    p = n(873199),
    h = n(442837),
    v = n(481060),
    x = n(911969),
    f = n(115130),
    N = n(566620),
    C = n(127255),
    E = n(880308),
    A = n(427996),
    I = n(367907),
    g = n(10718),
    _ = n(895924),
    P = n(151517),
    j = n(674588),
    y = n(368862),
    T = n(34674),
    S = n(835473),
    L = n(857192),
    b = n(630388),
    R = n(823379),
    Z = n(541099),
    M = n(827498),
    O = n(87005),
    k = n(219066),
    U = n(106066),
    H = n(783097),
    D = n(695676),
    w = n(98880),
    V = n(804307),
    B = n(888617),
    W = n(561160),
    F = n(41558),
    G = n(105862),
    z = n(28147),
    Y = n(314734),
    X = n(981631),
    q = n(689079),
    Q = n(388032),
    J = n(105328);
let K = [],
    $ = [, , , ,].fill(0).map((e, t) => t),
    ee = [
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: w.U4.MEDIUM_BANNER
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: w.U4.ROW
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: w.U4.ROW
        }
    ],
    et = u.Y.APP_LAUNCHER_IN_TEXT;
function en(e) {
    let { context: t, entrypoint: n, searchQuery: a, setSearchQuery: o, setScroller: s, isScrollCloseToBottom: r } = e,
        c = (0, h.e7)([f.Z], () => f.Z.getIsEnabled(), []),
        d = n === M._b.TEXT && 'channel' === t.type && null != t.channel && !t.channel.isPrivate(),
        u = (0, H.Yn)(n),
        m = !(0, H.Yn)(n),
        p = n === M._b.TEXT,
        [x, C] = ed(!0),
        [E, A] = ed(d),
        [I, g] = ed(u),
        [_, P] = ed(m),
        j = x && E && I && _,
        y = (u || d) && !j,
        T = m && c;
    l.useEffect(() => {
        var e;
        let n = 'channel' === t.type ? (null === (e = t.channel) || void 0 === e ? void 0 : e.guild_id) : void 0;
        (0, N.w1)({
            guildId: n,
            force: !0
        });
    }, [t]),
        l.useEffect(() => {
            n === M._b.VOICE && N.ux();
        }, [n]);
    let S = a.length > 0;
    return (0, i.jsxs)('div', {
        className: J.container,
        children: [
            T ? (0, i.jsx)(ei, {}) : null,
            (0, i.jsx)(el, {
                searchQuery: a,
                setSearchQuery: o,
                placeholder: p ? Q.intl.string(Q.t.ziyFv7) : Q.intl.string(Q.t['pw+r5e'])
            }),
            (0, i.jsx)(v.Ttm, {
                ref: s,
                className: J.scrollableContent,
                fade: !0,
                children: S
                    ? (0, i.jsx)(z.Z, {
                          context: t,
                          query: a,
                          entrypoint: n,
                          isScrollCloseToBottom: r
                      })
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(ea, {
                                  context: t,
                                  entrypoint: n,
                                  onEmptyState: C
                              }),
                              d &&
                                  'channel' === t.type &&
                                  (0, i.jsx)(es, {
                                      context: t,
                                      onEmptyState: A
                                  }),
                              u &&
                                  (0, i.jsx)(er, {
                                      context: t,
                                      entrypoint: n,
                                      onEmptyState: g
                                  }),
                              m &&
                                  (0, i.jsx)(eo, {
                                      context: t,
                                      onEmptyState: P
                                  }),
                              j &&
                                  (0, i.jsx)(W.A, {
                                      type: M.LG.HOME_EMPTY,
                                      textContent: n === M._b.TEXT ? Q.intl.string(Q.t.iKZctb) : Q.intl.string(Q.t.RL7Ncn)
                                  }),
                              y && (0, i.jsx)(G.Z, {})
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
            (0, i.jsx)(v.Text, {
                className: J.developerShelfControlsLabel,
                variant: 'text-sm/normal',
                children: Q.intl.string(Q.t.tZ3FNj)
            }),
            (0, i.jsx)(A.W, { hideSearch: !0 })
        ]
    });
}
function el(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: a } = e,
        s = l.useRef(null),
        [r, c] = l.useState(!1),
        d = l.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, I.yw)(X.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: Z.Z.entrypoint(),
                            location: _.Vh.APP_LAUNCHER_HOME
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
        u = l.useCallback(() => n(''), [n]),
        m = l.useCallback(() => {
            c(!0),
                (0, I.yw)(X.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: Z.Z.entrypoint(),
                    location: _.Vh.APP_LAUNCHER_HOME
                });
        }, []),
        p = l.useCallback(() => {
            c(!1);
        }, []),
        h = l.useCallback(
            (e) => {
                r || m(), n(e), d(e);
            },
            [r, n, m, d]
        );
    return (
        l.useEffect(() => {
            let e = s.current;
            if (null == e) return;
            let t = () => {
                r || m();
            };
            return (
                e.addEventListener('click', t),
                () => {
                    e.removeEventListener('click', t);
                }
            );
        }, [r, m]),
        (0, i.jsx)('div', {
            className: J.searchBarContainer,
            children: (0, i.jsx)(v.E1j, {
                ref: (e) => {
                    var t;
                    s.current = null !== (t = null == e ? void 0 : e.containerRef.current) && void 0 !== t ? t : null;
                },
                placeholder: a,
                query: t,
                onChange: h,
                onClear: u,
                size: v.E1j.Sizes.MEDIUM,
                onFocus: p,
                autoFocus: !0
            })
        })
    );
}
function ea(e) {
    let { context: t, entrypoint: n, onEmptyState: a } = e,
        o = n === M._b.VOICE,
        { frecentApps: s, loading: r } = (0, O.f)({
            context: t,
            onlyActivityApps: o,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0
        }),
        c = l.useMemo(() => {
            let e = [];
            for (let t of s) null != t.application && e.push({ application: t.application });
            return e;
        }, [s]),
        d = Q.intl.string(Q.t['s+UQpa']),
        u = d;
    o && (u = Q.intl.string(Q.t['2pFD8P']));
    let { items: m, handleViewMore: p } = eu({
        title: u,
        look: n === M._b.VOICE ? w.U4.LARGE_BANNER : w.U4.ROW,
        items: c,
        limit: 8,
        sectionName: M.L3.RECENT_APPS
    });
    l.useEffect(() => {
        !r &&
            0 !== m.length &&
            (0, I.yw)(X.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                num: m.length,
                section_name: M.L3.RECENT_APPS,
                location: M.G0.HOME,
                source: n
            });
    }, [m.length, n, r]);
    let h = !r && 0 === m.length;
    return (l.useEffect(() => {
        a(h);
    }, [h, a]),
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
        (0, S.Z)(i);
    })({
        apps: m,
        onlyActivityApps: o
    }),
    r || h)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(F.Z, {
                      title: d,
                      buttonType: F.Z.buttonTypes.VIEW_MORE,
                      onClickViewButton: p
                  }),
                  (0, i.jsx)('div', {
                      className: J.sectionContentContainer,
                      children: (0, i.jsx)('div', {
                          className: J.frecentList,
                          children: m.map((e, n) => {
                              let { application: l } = e;
                              return o
                                  ? (0, i.jsx)(
                                        w.qR,
                                        {
                                            context: t,
                                            application: l,
                                            look: w.U4.ICON,
                                            location: M.G0.HOME,
                                            sectionName: M.L3.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1
                                        },
                                        l.id
                                    )
                                  : (0, i.jsx)(
                                        w.kA,
                                        {
                                            context: t,
                                            application: l,
                                            look: w.U4.ICON,
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
    let { context: n, onEmptyState: a } = e;
    (0, E.g)();
    let o = (0, C.Z)({ guildId: 'channel' === n.type ? (null === (t = n.channel) || void 0 === t ? void 0 : t.getGuildId()) : void 0 }),
        s = w.U4.LARGE_BANNER,
        { trackSectionImpressionRef: r } = (0, B.Z)({
            sectionName: M.L3.ACTIVITIES,
            numItems: o.length,
            numVisibleItems: o.length
        }),
        c = (0, U.s)('ActivitiesShelfSection'),
        d = 0 === o.length;
    return (l.useEffect(() => {
        a(d);
    }, [a, d]),
    d)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => (r.current = e),
                      children: (0, i.jsx)(F.Z, { title: Q.intl.string(Q.t.shUONj) })
                  }),
                  (0, i.jsx)('div', {
                      className: J.sectionTwoColumnContentContainer,
                      children: o.map((e, t) => {
                          let { application: l } = e;
                          return (0, i.jsx)(
                              w.qR,
                              {
                                  context: n,
                                  application: l,
                                  look: s,
                                  location: _.Vh.APP_LAUNCHER_HOME,
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
function es(e) {
    let { context: t, onEmptyState: n } = e,
        a = M.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: o, isLoading: s } = (0, k.Z)({ context: t }),
        { items: r, handleViewMore: c } = eu({
            title: Q.intl.string(Q.t.KfkuGR),
            look: w.U4.ROW,
            items: o,
            limit: 4,
            sectionName: a
        }),
        { trackSectionImpressionRef: d } = (0, B.Z)({
            sectionName: a,
            numItems: o.length,
            numVisibleItems: r.length
        }),
        u = !s && 0 === r.length;
    return (l.useEffect(() => {
        n(u);
    }, [u, n]),
    u)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => (d.current = e),
                      children: (0, i.jsx)(F.Z, {
                          title: Q.intl.string(Q.t.KfkuGR),
                          buttonType: F.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: c
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: J.sectionRowsContentContainer,
                      children: s
                          ? $.map((e) => (0, i.jsx)(V.Z, { look: w.U4.ROW }, e))
                          : r.map((e, n) => {
                                let { application: l } = e;
                                return null != l
                                    ? (0, i.jsx)(
                                          w.kA,
                                          {
                                              context: t,
                                              application: l,
                                              look: w.U4.ROW,
                                              sectionName: a,
                                              resultsPosition: n,
                                              location: _.Vh.APP_LAUNCHER_HOME
                                          },
                                          l.id
                                      )
                                    : null;
                            })
                  })
              ]
          });
}
function er(e) {
    let { context: t, entrypoint: n, onEmptyState: a } = e,
        {
            fetchState: o,
            recommendationsSections: d,
            isInstallOnDemand: u
        } = (function (e) {
            let { context: t, location: n } = e,
                i = (function () {
                    let e = (0, h.e7)([L.default], () => L.default.onlyShowPreviewAppCollections),
                        t = P.Z.getCurrentConfig({ location: 'App Launcher Home (Web)' }, { autoTrackExposure: !1 }).enabled;
                    return e ? r.E.PREVIEW : t ? r.E.NON_STAFF_PREVIEW : r.E.ACTIVE;
                })();
            l.useEffect(() => {
                (0, j.XK)({
                    surface: et,
                    activeState: i
                });
            }, [i]);
            let { sectionDescriptors: a } = g.wi({
                    context: t,
                    filters: { commandTypes: [x.yU.CHAT] },
                    options: {
                        placeholderCount: 0,
                        limit: q.tn,
                        includeFrecency: !0
                    },
                    allowFetch: !0
                }),
                o = l.useCallback((e) => !(null != a.find((t) => t.id === e.id)), [a]),
                c = (0, h.e7)([y.Z], () =>
                    y.Z.getFetchState({
                        surface: et,
                        activeState: i
                    })
                ),
                d = (0, h.e7)([y.Z], () =>
                    y.Z.getCollections({
                        surface: et,
                        activeState: i
                    })
                ),
                u = n === s.I.APP_LAUNCHER_VOICE;
            return {
                fetchState: c,
                recommendationsSections: l.useMemo(() => (u ? (0, H.pF)(d) : d), [d, u]),
                isInstallOnDemand: o
            };
        })({
            context: t,
            location: n === M._b.TEXT ? s.I.APP_LAUNCHER_TEXT : s.I.APP_LAUNCHER_VOICE
        }),
        p = (function (e) {
            var t;
            let { context: n, recommendationsSections: i } = e;
            (0, E.g)();
            let a = (0, C.Z)({ guildId: 'channel' === n.type ? (null === (t = n.channel) || void 0 === t ? void 0 : t.getGuildId()) : void 0 });
            return l.useMemo(() => {
                if (!i.some((e) => (0, b.yE)(e.flags, c.b.APPENDS_REMAINING_ACTIVITIES))) return K;
                let e = new Set();
                return (
                    i.forEach((t) => {
                        t.application_directory_collection_items.forEach((t) => {
                            t.type === m.C.APPLICATION && e.add(t.application.id);
                        });
                    }),
                    a.filter((t) => !e.has(t.application.id))
                );
            }, [i, a]);
        })({
            context: t,
            recommendationsSections: d
        }),
        v = o === y.M.FETCHING,
        f = !v && 0 === d.length;
    return (l.useEffect(() => {
        a(f);
    }, [f, a]),
    f)
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: v
                  ? ee.map((e, t) => {
                        let { cards: n, look: l } = e;
                        return (0, i.jsxs)(
                            'div',
                            {
                                children: [
                                    (0, i.jsx)(F.Z.Loading, {}),
                                    (0, i.jsx)('div', {
                                        className: l === w.U4.ROW ? J.sectionRowsContentContainer : J.sectionTwoColumnContentContainer,
                                        children: n.map((e) => (0, i.jsx)(V.Z, { look: l }, e))
                                    })
                                ]
                            },
                            t
                        );
                    })
                  : d.map((e, n) =>
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
                    )
          });
}
function ec(e) {
    let t,
        n,
        { recommendationsSection: a, remainingActivities: o, isInstallOnDemand: s, position: r, context: u } = e,
        h = a.title;
    switch (a.type) {
        case p.o.BANNER_CARDS:
            t = w.U4.LARGE_BANNER;
            break;
        case p.o.SMALL_BANNER_CARDS:
            t = w.U4.MEDIUM_BANNER;
            break;
        default:
            t = w.U4.ROW;
    }
    let v = l.useMemo(() => {
            let e = a.application_directory_collection_items
                .map((e) => {
                    if (e.type === m.C.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, b.yE)(e.flags, d.q.PROMOTED),
                            application: e.application,
                            installOnDemand: s(e.application)
                        };
                })
                .filter(R.lm);
            return (
                (0, b.yE)(a.flags, c.b.APPENDS_REMAINING_ACTIVITIES) &&
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
        }, [s, a.application_directory_collection_items, a.flags, o]),
        x = a.id;
    switch (a.type) {
        case p.o.BANNER_CARDS:
        case p.o.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case p.o.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: f, handleViewMore: N } = eu({
            title: h,
            look: t,
            items: v,
            limit: n,
            sectionName: x,
            sectionOverallPosition: r
        }),
        { trackSectionImpressionRef: C } = (0, B.Z)({
            sectionName: x,
            numItems: v.length,
            numVisibleItems: f.length
        }),
        E = a.type !== p.o.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => (C.current = e),
                children: (0, i.jsx)(F.Z, {
                    title: a.title,
                    buttonType: F.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: N
                })
            }),
            (0, i.jsx)('div', {
                className: t === w.U4.ROW ? J.sectionRowsContentContainer : J.sectionTwoColumnContentContainer,
                children: f.map((e, n) => {
                    let l,
                        { collectionItemId: a, collectionItemImageHash: o, application: s, installOnDemand: c, showsPromoted: d } = e;
                    return (
                        null != a &&
                            null != o &&
                            (l = (0, T.$_)({
                                itemId: a,
                                hash: o,
                                containerWidth: Y.Gy
                            })),
                        (0, i.jsx)(
                            w.kA,
                            {
                                context: u,
                                application: s,
                                look: t,
                                sectionName: x,
                                resultsPosition: n,
                                location: _.Vh.APP_LAUNCHER_HOME,
                                installOnDemand: c,
                                enableVideoBanner: E,
                                sectionOverallPosition: r,
                                overrideImageUrl: l,
                                showsPromoted: d
                            },
                            ''.concat(n, '-').concat(s.id)
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
function eu(e) {
    let { title: t, look: n, items: i, limit: a, sectionName: o, sectionOverallPosition: s } = e,
        { pushHistory: r } = (0, D.hH)();
    return l.useMemo(
        () =>
            i.length <= a
                ? {
                      items: i,
                      handleViewMore: void 0
                  }
                : {
                      items: i.slice(0, a),
                      handleViewMore: () => {
                          (0, I.yw)(X.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: o,
                              source: Z.Z.entrypoint(),
                              num: i.length
                          }),
                              r({
                                  type: D.gc.LIST,
                                  title: t,
                                  look: n,
                                  items: i,
                                  sectionName: o,
                                  sectionOverallPosition: s
                              });
                      }
                  },
        [i, a, o, r, t, n, s]
    );
}
