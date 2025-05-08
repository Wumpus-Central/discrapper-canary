n.d(t, { Z: () => et }), n(388685), n(539854), n(997841);
var i = n(255367),
    r = n(73800),
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
    v = n(880308),
    x = n(427996),
    C = n(367907),
    g = n(10718),
    j = n(895924),
    P = n(835473),
    N = n(568100),
    O = n(471518),
    E = n(425986),
    A = n(216780),
    I = n(857192),
    S = n(630388),
    T = n(823379),
    w = n(541099),
    L = n(827498),
    R = n(87005),
    Z = n(219066),
    k = n(106066),
    M = n(783097),
    D = n(695676),
    B = n(98880),
    U = n(804307),
    H = n(888617),
    W = n(561160),
    V = n(41558),
    F = n(105862),
    G = n(28147),
    z = n(314734),
    X = n(981631),
    q = n(689079),
    Y = n(388032),
    Q = n(355563);
let J = [],
    K = [, , , ,].fill(0).map((e, t) => t),
    $ = [
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: B.U4.MEDIUM_BANNER
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: B.U4.ROW
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: B.U4.ROW
        }
    ],
    ee = u.Y.APP_LAUNCHER_IN_TEXT;
function et(e) {
    let { context: t, entrypoint: n, searchQuery: l, setSearchQuery: o, setScroller: a, isScrollCloseToBottom: s } = e,
        c = (0, m.e7)([b.Z], () => b.Z.getIsEnabled(), []),
        u = n === L._b.TEXT && 'channel' === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, M.Yn)(n),
        p = !(0, M.Yn)(n),
        h = n === L._b.TEXT,
        [y, v] = ec(!0),
        [x, C] = ec(u),
        [g, j] = ec(d),
        [P, N] = ec(p),
        O = y && x && g && P,
        E = (d || u) && !O,
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
            n === L._b.VOICE && _.ux();
        }, [n]);
    let I = l.length > 0;
    return (0, i.jsxs)('div', {
        className: Q.container,
        children: [
            A ? (0, i.jsx)(en, {}) : null,
            (0, i.jsx)(ei, {
                searchQuery: l,
                setSearchQuery: o,
                placeholder: h ? Y.intl.string(Y.t.ziyFv7) : Y.intl.string(Y.t['pw+r5e'])
            }),
            (0, i.jsx)(f.Ttm, {
                ref: a,
                className: Q.scrollableContent,
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
                              (0, i.jsx)(er, {
                                  context: t,
                                  entrypoint: n,
                                  onEmptyState: v
                              }),
                              u &&
                                  'channel' === t.type &&
                                  (0, i.jsx)(eo, {
                                      context: t,
                                      onEmptyState: C
                                  }),
                              d &&
                                  (0, i.jsx)(ea, {
                                      context: t,
                                      entrypoint: n,
                                      onEmptyState: j
                                  }),
                              p &&
                                  (0, i.jsx)(el, {
                                      context: t,
                                      onEmptyState: N
                                  }),
                              O &&
                                  (0, i.jsx)(W.A, {
                                      type: L.LG.HOME_EMPTY,
                                      textContent: n === L._b.TEXT ? Y.intl.string(Y.t.iKZctb) : Y.intl.string(Y.t.RL7Ncn)
                                  }),
                              E && (0, i.jsx)(F.Z, {})
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
                children: Y.intl.string(Y.t.tZ3FNj)
            }),
            (0, i.jsx)(x.W, { hideSearch: !0 })
        ]
    });
}
function ei(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: l } = e,
        a = r.useRef(null),
        [s, c] = r.useState(!1),
        u = r.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, C.yw)(X.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
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
                (0, C.yw)(X.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
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
            className: Q.searchBarContainer,
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
function er(e) {
    let { context: t, entrypoint: n, onEmptyState: l } = e,
        o = n === L._b.VOICE,
        { frecentApps: a, loading: s } = (0, R.f)({
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
        u = Y.intl.string(Y.t['s+UQpa']),
        d = u;
    o && (d = Y.intl.string(Y.t['2pFD8P']));
    let { items: p, handleViewMore: m } = eu({
        title: d,
        look: n === L._b.VOICE ? B.U4.LARGE_BANNER : B.U4.ROW,
        items: c,
        limit: 8,
        sectionName: L.L3.RECENT_APPS
    });
    r.useEffect(() => {
        s ||
            (0 !== p.length &&
                (0, C.yw)(X.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: p.length,
                    section_name: L.L3.RECENT_APPS,
                    location: L.G0.HOME,
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
                  (0, i.jsx)(V.Z, {
                      title: u,
                      buttonType: V.Z.buttonTypes.VIEW_MORE,
                      onClickViewButton: m
                  }),
                  (0, i.jsx)('div', {
                      className: Q.sectionContentContainer,
                      children: (0, i.jsx)('div', {
                          className: Q.frecentList,
                          children: p.map((e, n) => {
                              let { application: r } = e;
                              return o
                                  ? (0, i.jsx)(
                                        B.qR,
                                        {
                                            context: t,
                                            application: r,
                                            look: B.U4.ICON,
                                            location: L.G0.HOME,
                                            sectionName: L.L3.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1
                                        },
                                        r.id
                                    )
                                  : (0, i.jsx)(
                                        B.kA,
                                        {
                                            context: t,
                                            application: r,
                                            look: B.U4.ICON,
                                            location: L.G0.HOME,
                                            sectionName: L.L3.RECENT_APPS,
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
function el(e) {
    var t;
    let { context: n, onEmptyState: l } = e;
    (0, v.g)();
    let o = (0, y.Z)({ guildId: 'channel' === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0 }),
        a = B.U4.LARGE_BANNER,
        { trackSectionImpressionRef: s } = (0, H.Z)({
            sectionName: L.L3.ACTIVITIES,
            numItems: o.length,
            numVisibleItems: o.length
        }),
        c = (0, k.s)(),
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
                      children: (0, i.jsx)(V.Z, { title: Y.intl.string(Y.t.shUONj) })
                  }),
                  (0, i.jsx)('div', {
                      className: Q.sectionTwoColumnContentContainer,
                      children: o.map((e, t) => {
                          let { application: r } = e;
                          return (0, i.jsx)(
                              B.qR,
                              {
                                  context: n,
                                  application: r,
                                  look: a,
                                  location: j.Vh.APP_LAUNCHER_HOME,
                                  sectionName: L.L3.ACTIVITIES,
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
function eo(e) {
    let { context: t, onEmptyState: n } = e,
        l = L.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: o, isLoading: a } = (0, Z.Z)({ context: t }),
        { items: s, handleViewMore: c } = eu({
            title: Y.intl.string(Y.t.KfkuGR),
            look: B.U4.ROW,
            items: o,
            limit: 4,
            sectionName: l
        }),
        { trackSectionImpressionRef: u } = (0, H.Z)({
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
                      children: (0, i.jsx)(V.Z, {
                          title: Y.intl.string(Y.t.KfkuGR),
                          buttonType: V.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: c
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: Q.sectionRowsContentContainer,
                      children: a
                          ? K.map((e) => (0, i.jsx)(U.Z, { look: B.U4.ROW }, e))
                          : s.map((e, n) => {
                                let { application: r } = e;
                                return null != r
                                    ? (0, i.jsx)(
                                          B.kA,
                                          {
                                              context: t,
                                              application: r,
                                              look: B.U4.ROW,
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
function ea(e) {
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
                (0, O.XK)({
                    surface: ee,
                    activeState: i
                });
            }, [i]);
            let { sectionDescriptors: l } = g.wi({
                    context: t,
                    filters: { commandTypes: [h.yU.CHAT] },
                    options: {
                        placeholderCount: 0,
                        limit: q.tn,
                        includeFrecency: !0
                    },
                    allowFetch: !0
                }),
                o = r.useCallback((e) => null == l.find((t) => t.id === e.id), [l]),
                s = (0, m.e7)([E.Z], () =>
                    E.Z.getFetchState({
                        surface: ee,
                        activeState: i
                    })
                ),
                c = (0, m.e7)([E.Z], () =>
                    E.Z.getCollections({
                        surface: ee,
                        activeState: i
                    })
                ),
                u = n === L._b.VOICE;
            return {
                fetchState: s,
                recommendationsSections: r.useMemo(() => (u ? (0, M.pF)(c) : c), [c, u]),
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
            let l = (0, y.Z)({ guildId: 'channel' === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0 });
            return r.useMemo(() => {
                if (!i.some((e) => (0, S.yE)(e.flags, s.b.APPENDS_REMAINING_ACTIVITIES))) return J;
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
        f = o === E.M.FETCHING,
        b = !f && 0 === c.length;
    return (r.useEffect(() => {
        l(b);
    }, [b, l]),
    b)
        ? null
        : f
          ? $.map((e, t) => {
                let { cards: n, look: r } = e;
                return (0, i.jsxs)(
                    'div',
                    {
                        children: [
                            (0, i.jsx)(V.Z.Loading, {}),
                            (0, i.jsx)('div', {
                                className: r === B.U4.ROW ? Q.sectionRowsContentContainer : Q.sectionTwoColumnContentContainer,
                                children: n.map((e) => (0, i.jsx)(U.Z, { look: r }, e))
                            })
                        ]
                    },
                    t
                );
            })
          : c.map((e, n) =>
                (0, i.jsx)(
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
        { recommendationsSection: l, remainingActivities: o, isInstallOnDemand: a, position: u, context: m } = e,
        f = l.title;
    switch (l.type) {
        case p.o.BANNER_CARDS:
            t = B.U4.LARGE_BANNER;
            break;
        case p.o.SMALL_BANNER_CARDS:
            t = B.U4.MEDIUM_BANNER;
            break;
        default:
            t = B.U4.ROW;
    }
    let h = r.useMemo(() => {
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
                e
            );
        }, [a, l.application_directory_collection_items, l.flags, o]),
        b = l.title;
    switch (l.type) {
        case p.o.BANNER_CARDS:
        case p.o.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case p.o.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: _, handleViewMore: y } = eu({
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
        x = l.type !== p.o.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => {
                    v.current = e;
                },
                children: (0, i.jsx)(V.Z, {
                    title: l.title,
                    buttonType: V.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: y
                })
            }),
            (0, i.jsx)('div', {
                className: t === B.U4.ROW ? Q.sectionRowsContentContainer : Q.sectionTwoColumnContentContainer,
                children: _.map((e, n) => {
                    let r,
                        { collectionItemId: l, collectionItemImageHash: o, application: a, installOnDemand: s, showsPromoted: c } = e;
                    return (
                        null != l &&
                            null != o &&
                            (r = (0, A.$_)({
                                itemId: l,
                                hash: o,
                                containerWidth: z.Gy
                            })),
                        (0, i.jsx)(
                            B.kA,
                            {
                                context: m,
                                application: a,
                                look: t,
                                sectionName: b,
                                resultsPosition: n,
                                location: j.Vh.APP_LAUNCHER_HOME,
                                installOnDemand: s,
                                enableVideoBanner: x,
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
function ec(e) {
    let [t, n] = r.useState(!e);
    return [
        t,
        r.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, [])
    ];
}
function eu(e) {
    let { title: t, look: n, items: i, limit: l, sectionName: o, sectionOverallPosition: a } = e,
        { pushHistory: s } = (0, D.hH)();
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
                          (0, C.yw)(X.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: o,
                              source: w.Z.entrypoint(),
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
        [i, l, o, s, t, n, a]
    );
}
