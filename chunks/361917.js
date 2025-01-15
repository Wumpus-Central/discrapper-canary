t.d(n, {
    Z: function () {
        return en;
    }
}),
    t(47120),
    t(653041),
    t(789020);
var i = t(200651),
    l = t(192379),
    a = t(392711),
    o = t.n(a),
    r = t(228458),
    s = t(535655),
    c = t(754738),
    d = t(727241),
    u = t(973693),
    m = t(912370),
    p = t(873199),
    h = t(442837),
    f = t(481060),
    C = t(911969),
    v = t(115130),
    x = t(566620),
    _ = t(127255),
    N = t(880308),
    I = t(427996),
    A = t(367907),
    E = t(10718),
    g = t(895924),
    b = t(674588),
    P = t(368862),
    S = t(34674),
    j = t(835473),
    y = t(857192),
    T = t(630388),
    L = t(823379),
    R = t(541099),
    M = t(827498),
    Z = t(87005),
    k = t(219066),
    O = t(106066),
    U = t(783097),
    B = t(695676),
    D = t(98880),
    w = t(804307),
    H = t(888617),
    V = t(561160),
    W = t(41558),
    F = t(105862),
    G = t(28147),
    z = t(314734),
    Y = t(981631),
    X = t(689079),
    q = t(388032),
    J = t(578710);
let Q = [],
    K = [, , , ,].fill(0).map((e, n) => n),
    $ = [
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: D.U4.MEDIUM_BANNER
        },
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: D.U4.ROW
        },
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: D.U4.ROW
        }
    ],
    ee = u.Y.APP_LAUNCHER_IN_TEXT;
function en(e) {
    let { channel: n, entrypoint: t, searchQuery: a, setSearchQuery: o, setScroller: r, isScrollCloseToBottom: s } = e,
        c = (0, h.e7)([v.Z], () => v.Z.getIsEnabled(), []),
        d = t === M._b.TEXT && !n.isPrivate(),
        u = (0, U.Yn)(t),
        m = !(0, U.Yn)(t),
        p = t === M._b.TEXT,
        [C, _] = ec(!0),
        [N, I] = ec(d),
        [A, E] = ec(u),
        [g, b] = ec(m),
        P = C && N && A && g,
        S = (u || d) && !P,
        j = m && c;
    l.useEffect(() => {
        (0, x.w1)({
            guildId: n.guild_id,
            force: !0
        });
    }, [n.guild_id]),
        l.useEffect(() => {
            t === M._b.VOICE && x.ux();
        }, [t]);
    let y = a.length > 0;
    return (0, i.jsxs)('div', {
        className: J.container,
        children: [
            j ? (0, i.jsx)(et, {}) : null,
            (0, i.jsx)(ei, {
                searchQuery: a,
                setSearchQuery: o,
                placeholder: p ? q.intl.string(q.t.ziyFv7) : q.intl.string(q.t['pw+r5e'])
            }),
            (0, i.jsx)(f.Scroller, {
                ref: r,
                className: J.scrollableContent,
                fade: !0,
                children: y
                    ? (0, i.jsx)(G.Z, {
                          channel: n,
                          query: a,
                          entrypoint: t,
                          isScrollCloseToBottom: s
                      })
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(el, {
                                  channel: n,
                                  entrypoint: t,
                                  onEmptyState: _
                              }),
                              d &&
                                  (0, i.jsx)(eo, {
                                      channel: n,
                                      onEmptyState: I
                                  }),
                              u &&
                                  (0, i.jsx)(er, {
                                      channel: n,
                                      entrypoint: t,
                                      onEmptyState: E
                                  }),
                              m &&
                                  (0, i.jsx)(ea, {
                                      channel: n,
                                      onEmptyState: b
                                  }),
                              P &&
                                  (0, i.jsx)(V.A, {
                                      type: M.LG.HOME_EMPTY,
                                      textContent: t === M._b.TEXT ? q.intl.string(q.t.iKZctb) : q.intl.string(q.t.RL7Ncn)
                                  }),
                              S && (0, i.jsx)(F.Z, {})
                          ]
                      })
            })
        ]
    });
}
function et() {
    return (0, i.jsxs)('div', {
        className: J.developerShelfControlsContainer,
        children: [
            (0, i.jsx)(f.Text, {
                className: J.developerShelfControlsLabel,
                variant: 'text-sm/normal',
                children: q.intl.string(q.t.tZ3FNj)
            }),
            (0, i.jsx)(I.W, { hideSearch: !0 })
        ]
    });
}
function ei(e) {
    let { searchQuery: n, setSearchQuery: t, placeholder: a } = e,
        r = l.useRef(null),
        [s, c] = l.useState(!1),
        d = l.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, A.yw)(Y.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: R.Z.entrypoint(),
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
        u = l.useCallback(() => t(''), [t]),
        m = l.useCallback(() => {
            c(!0),
                (0, A.yw)(Y.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: R.Z.entrypoint(),
                    location: g.Vh.APP_LAUNCHER_HOME
                });
        }, []),
        p = l.useCallback(() => {
            c(!1);
        }, []),
        h = l.useCallback(
            (e) => {
                !s && m(), t(e), d(e);
            },
            [s, t, m, d]
        );
    return (
        l.useEffect(() => {
            let e = r.current;
            if (null == e) return;
            let n = () => {
                !s && m();
            };
            return (
                e.addEventListener('click', n),
                () => {
                    e.removeEventListener('click', n);
                }
            );
        }, [s, m]),
        (0, i.jsx)('div', {
            className: J.searchBarContainer,
            children: (0, i.jsx)(f.SearchBar, {
                ref: (e) => {
                    var n;
                    r.current = null !== (n = null == e ? void 0 : e.containerRef.current) && void 0 !== n ? n : null;
                },
                placeholder: a,
                query: n,
                onChange: h,
                onClear: u,
                size: f.SearchBar.Sizes.MEDIUM,
                onFocus: p,
                autoFocus: !0
            })
        })
    );
}
function el(e) {
    let { channel: n, entrypoint: t, onEmptyState: a } = e,
        o = t === M._b.VOICE,
        { frecentApps: r, loading: s } = (0, Z.f)({
            channel: n,
            onlyActivityApps: o,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0
        }),
        c = l.useMemo(() => {
            let e = [];
            for (let n of r) null != n.application && e.push({ application: n.application });
            return e;
        }, [r]),
        d = q.intl.string(q.t['s+UQpa']),
        u = d;
    o && (u = q.intl.string(q.t['2pFD8P']));
    let { items: m, handleViewMore: p } = ed({
        title: u,
        look: t === M._b.VOICE ? D.U4.LARGE_BANNER : D.U4.ROW,
        items: c,
        limit: 8,
        sectionName: M.L3.RECENT_APPS
    });
    l.useEffect(() => {
        if (!0 !== s.current)
            0 !== m.length &&
                (0, A.yw)(Y.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: m.length,
                    section_name: M.L3.RECENT_APPS,
                    location: M.G0.HOME,
                    source: t
                });
    }, [m.length, t, s]);
    let h = s.current,
        f = !h && 0 === m.length;
    return (l.useEffect(() => {
        a(f);
    }, [f, a]),
    !(function (e) {
        let { apps: n, onlyActivityApps: t } = e,
            i = l.useMemo(
                () =>
                    t
                        ? n.map((e) => {
                              let { application: n } = e;
                              return n.id;
                          })
                        : [],
                [n, t]
            );
        (0, j.Z)(i);
    })({
        apps: m,
        onlyActivityApps: o
    }),
    h || f)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(W.Z, {
                      title: d,
                      buttonType: W.Z.buttonTypes.VIEW_MORE,
                      onClickViewButton: p
                  }),
                  (0, i.jsx)('div', {
                      className: J.sectionContentContainer,
                      children: (0, i.jsx)('div', {
                          className: J.frecentList,
                          children: m.map((e, t) => {
                              let { application: l } = e;
                              return o
                                  ? (0, i.jsx)(
                                        D.qR,
                                        {
                                            channel: n,
                                            application: l,
                                            look: D.U4.ICON,
                                            location: M.G0.HOME,
                                            sectionName: M.L3.RECENT_APPS,
                                            resultsPosition: t,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1
                                        },
                                        l.id
                                    )
                                  : (0, i.jsx)(
                                        D.kA,
                                        {
                                            application: l,
                                            look: D.U4.ICON,
                                            location: M.G0.HOME,
                                            sectionName: M.L3.RECENT_APPS,
                                            resultsPosition: t
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
    let { channel: n, onEmptyState: t } = e;
    (0, N.g)();
    let a = (0, _.Z)({ guildId: n.getGuildId() }),
        o = D.U4.LARGE_BANNER,
        { trackSectionImpressionRef: r } = (0, H.Z)({
            sectionName: M.L3.ACTIVITIES,
            numItems: a.length,
            numVisibleItems: a.length
        }),
        s = (0, O.s)('ActivitiesShelfSection'),
        c = 0 === a.length;
    return (l.useEffect(() => {
        t(c);
    }, [t, c]),
    c)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => (r.current = e),
                      children: (0, i.jsx)(W.Z, { title: q.intl.string(q.t.shUONj) })
                  }),
                  (0, i.jsx)('div', {
                      className: J.sectionTwoColumnContentContainer,
                      children: a.map((e, t) => {
                          let { application: l } = e;
                          return (0, i.jsx)(
                              D.qR,
                              {
                                  channel: n,
                                  application: l,
                                  look: o,
                                  location: g.Vh.APP_LAUNCHER_HOME,
                                  sectionName: M.L3.ACTIVITIES,
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
    let { channel: n, onEmptyState: t } = e,
        a = M.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: o, isLoading: r } = (0, k.Z)({ channel: n }),
        { items: s, handleViewMore: c } = ed({
            title: q.intl.string(q.t.KfkuGR),
            look: D.U4.ROW,
            items: o,
            limit: 4,
            sectionName: a
        }),
        { trackSectionImpressionRef: d } = (0, H.Z)({
            sectionName: a,
            numItems: o.length,
            numVisibleItems: s.length
        }),
        u = !r && 0 === s.length;
    return (l.useEffect(() => {
        t(u);
    }, [u, t]),
    u)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => (d.current = e),
                      children: (0, i.jsx)(W.Z, {
                          title: q.intl.string(q.t.KfkuGR),
                          buttonType: W.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: c
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: J.sectionRowsContentContainer,
                      children: r
                          ? K.map((e) => (0, i.jsx)(w.Z, { look: D.U4.ROW }, e))
                          : s.map((e, n) => {
                                let { application: t } = e;
                                return null != t
                                    ? (0, i.jsx)(
                                          D.kA,
                                          {
                                              application: t,
                                              look: D.U4.ROW,
                                              sectionName: a,
                                              resultsPosition: n,
                                              location: g.Vh.APP_LAUNCHER_HOME
                                          },
                                          t.id
                                      )
                                    : null;
                            })
                  })
              ]
          });
}
function er(e) {
    let { channel: n, entrypoint: t, onEmptyState: a } = e,
        {
            fetchState: o,
            recommendationsSections: d,
            isInstallOnDemand: u
        } = (function (e) {
            let { channel: n, location: t } = e,
                i = (0, h.e7)([y.default], () => y.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE;
            l.useEffect(() => {
                (0, b.XK)({
                    surface: ee,
                    activeState: i
                });
            }, [i]);
            let { sectionDescriptors: a } = E.wi({
                    channel: n,
                    filters: { commandTypes: [C.yU.CHAT] },
                    options: {
                        placeholderCount: 0,
                        limit: X.tn,
                        includeFrecency: !0
                    },
                    allowFetch: !0
                }),
                o = l.useCallback((e) => !(null != a.find((n) => n.id === e.id)), [a]),
                c = (0, h.e7)([P.Z], () =>
                    P.Z.getFetchState({
                        surface: ee,
                        activeState: i
                    })
                ),
                d = (0, h.e7)([P.Z], () =>
                    P.Z.getCollections({
                        surface: ee,
                        activeState: i
                    })
                ),
                u = t === r.I.APP_LAUNCHER_VOICE;
            return {
                fetchState: c,
                recommendationsSections: l.useMemo(() => (u ? (0, U.pF)(d) : d), [d, u]),
                isInstallOnDemand: o
            };
        })({
            channel: n,
            location: t === M._b.TEXT ? r.I.APP_LAUNCHER_TEXT : r.I.APP_LAUNCHER_VOICE
        }),
        p = (function (e) {
            let { channel: n, recommendationsSections: t } = e;
            (0, N.g)();
            let i = (0, _.Z)({ guildId: n.getGuildId() });
            return l.useMemo(() => {
                if (!t.some((e) => (0, T.yE)(e.flags, c.b.APPENDS_REMAINING_ACTIVITIES))) return Q;
                let e = new Set();
                return (
                    t.forEach((n) => {
                        n.application_directory_collection_items.forEach((n) => {
                            n.type === m.C.APPLICATION && e.add(n.application.id);
                        });
                    }),
                    i.filter((n) => !e.has(n.application.id))
                );
            }, [t, i]);
        })({
            channel: n,
            recommendationsSections: d
        }),
        f = o === P.M.FETCHING,
        v = !f && 0 === d.length;
    return (l.useEffect(() => {
        a(v);
    }, [v, a]),
    v)
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: f
                  ? $.map((e, n) => {
                        let { cards: t, look: l } = e;
                        return (0, i.jsxs)(
                            'div',
                            {
                                children: [
                                    (0, i.jsx)(W.Z.Loading, {}),
                                    (0, i.jsx)('div', {
                                        className: l === D.U4.ROW ? J.sectionRowsContentContainer : J.sectionTwoColumnContentContainer,
                                        children: t.map((e) => (0, i.jsx)(w.Z, { look: l }, e))
                                    })
                                ]
                            },
                            n
                        );
                    })
                  : d.map((e, n) =>
                        (0, i.jsx)(
                            es,
                            {
                                recommendationsSection: e,
                                remainingActivities: p,
                                isInstallOnDemand: u,
                                position: n
                            },
                            e.id
                        )
                    )
          });
}
function es(e) {
    let n,
        t,
        { recommendationsSection: a, remainingActivities: o, isInstallOnDemand: r, position: s } = e,
        u = a.title;
    switch (a.type) {
        case p.o.BANNER_CARDS:
            n = D.U4.LARGE_BANNER;
            break;
        case p.o.SMALL_BANNER_CARDS:
            n = D.U4.MEDIUM_BANNER;
            break;
        default:
            n = D.U4.ROW;
    }
    let h = l.useMemo(() => {
            let e = a.application_directory_collection_items
                .map((e) => {
                    if (e.type === m.C.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, T.yE)(e.flags, d.q.PROMOTED),
                            application: e.application,
                            installOnDemand: r(e.application)
                        };
                })
                .filter(L.lm);
            return (
                (0, T.yE)(a.flags, c.b.APPENDS_REMAINING_ACTIVITIES) &&
                    e.push(
                        ...o.map((e) => {
                            let { application: n } = e;
                            return {
                                collectionItemId: void 0,
                                collectionItemImageHash: void 0,
                                showsPromoted: !1,
                                application: n,
                                installOnDemand: !0
                            };
                        })
                    ),
                e
            );
        }, [r, a.application_directory_collection_items, a.flags, o]),
        f = a.id;
    switch (a.type) {
        case p.o.BANNER_CARDS:
        case p.o.SMALL_BANNER_CARDS:
            t = 6;
            break;
        case p.o.EXPANDABLE_LIST:
        default:
            t = 4;
    }
    let { items: C, handleViewMore: v } = ed({
            title: u,
            look: n,
            items: h,
            limit: t,
            sectionName: f,
            sectionOverallPosition: s
        }),
        { trackSectionImpressionRef: x } = (0, H.Z)({
            sectionName: f,
            numItems: h.length,
            numVisibleItems: C.length
        }),
        _ = a.type !== p.o.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => (x.current = e),
                children: (0, i.jsx)(W.Z, {
                    title: a.title,
                    buttonType: W.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: v
                })
            }),
            (0, i.jsx)('div', {
                className: n === D.U4.ROW ? J.sectionRowsContentContainer : J.sectionTwoColumnContentContainer,
                children: C.map((e, t) => {
                    let l,
                        { collectionItemId: a, collectionItemImageHash: o, application: r, installOnDemand: c, showsPromoted: d } = e;
                    return (
                        null != a &&
                            null != o &&
                            (l = (0, S.$_)({
                                itemId: a,
                                hash: o,
                                containerWidth: z.Gy
                            })),
                        (0, i.jsx)(
                            D.kA,
                            {
                                application: r,
                                look: n,
                                sectionName: f,
                                resultsPosition: t,
                                location: g.Vh.APP_LAUNCHER_HOME,
                                installOnDemand: c,
                                enableVideoBanner: _,
                                sectionOverallPosition: s,
                                overrideImageUrl: l,
                                showsPromoted: d
                            },
                            ''.concat(t, '-').concat(r.id)
                        )
                    );
                })
            })
        ]
    });
}
function ec(e) {
    let [n, t] = l.useState(!e);
    return [
        n,
        l.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            t(e);
        }, [])
    ];
}
function ed(e) {
    let { title: n, look: t, items: i, limit: a, sectionName: o, sectionOverallPosition: r } = e,
        { pushHistory: s } = (0, B.hH)();
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
                          (0, A.yw)(Y.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: o,
                              source: R.Z.entrypoint(),
                              num: i.length
                          }),
                              s({
                                  type: B.gc.LIST,
                                  title: n,
                                  look: t,
                                  items: i,
                                  sectionName: o,
                                  sectionOverallPosition: r
                              });
                      }
                  },
        [i, a, o, s, n, t, r]
    );
}
