t.d(n, {
    Z: function () {
        return F;
    }
}),
    t(47120),
    t(653041);
var i = t(200651),
    l = t(192379),
    a = t(392711),
    o = t.n(a),
    r = t(892814),
    s = t(79411),
    c = t(442837),
    d = t(481060),
    u = t(911969),
    m = t(115130),
    p = t(566620),
    h = t(127255),
    f = t(880308),
    C = t(427996),
    v = t(367907),
    x = t(399654),
    _ = t(844439),
    N = t(10718),
    g = t(895924),
    A = t(835473),
    E = t(541099),
    b = t(827498),
    I = t(87005),
    P = t(219066),
    j = t(106066),
    y = t(783097),
    S = t(695676),
    T = t(98880),
    L = t(804307),
    R = t(888617),
    M = t(561160),
    Z = t(41558),
    k = t(105862),
    O = t(28147),
    U = t(981631),
    B = t(689079),
    w = t(388032),
    D = t(105328);
let H = [],
    V = [, , , ,].fill(0).map((e, n) => n),
    W = [
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: T.U4.MEDIUM_BANNER
        },
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: T.U4.ROW
        },
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: T.U4.ROW
        }
    ];
function F(e) {
    let { channel: n, entrypoint: t, searchQuery: a, setSearchQuery: o, setScroller: r, isScrollCloseToBottom: s } = e,
        u = (0, c.e7)([m.Z], () => m.Z.getIsEnabled(), []),
        h = t === b._b.TEXT && !n.isPrivate(),
        f = (0, y.Yn)(t),
        C = !(0, y.Yn)(t),
        v = t === b._b.TEXT,
        [x, _] = K(!0),
        [N, g] = K(h),
        [A, E] = K(f),
        [I, P] = K(C),
        j = x && N && A && I,
        S = (f || h) && !j,
        T = C && u;
    l.useEffect(() => {
        (0, p.w1)({
            guildId: n.guild_id,
            force: !0
        });
    }, [n.guild_id]),
        l.useEffect(() => {
            t === b._b.VOICE && p.ux();
        }, [t]);
    let L = a.length > 0;
    return (0, i.jsxs)('div', {
        className: D.container,
        children: [
            T ? (0, i.jsx)(G, {}) : null,
            (0, i.jsx)(z, {
                searchQuery: a,
                setSearchQuery: o,
                placeholder: v ? w.intl.string(w.t.ziyFv7) : w.intl.string(w.t['pw+r5e'])
            }),
            (0, i.jsx)(d.Scroller, {
                ref: r,
                className: D.scrollableContent,
                fade: !0,
                children: L
                    ? (0, i.jsx)(O.Z, {
                          channel: n,
                          query: a,
                          entrypoint: t,
                          isScrollCloseToBottom: s
                      })
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(Y, {
                                  channel: n,
                                  entrypoint: t,
                                  onEmptyState: _
                              }),
                              h &&
                                  (0, i.jsx)(q, {
                                      channel: n,
                                      onEmptyState: g
                                  }),
                              f &&
                                  (0, i.jsx)(J, {
                                      channel: n,
                                      entrypoint: t,
                                      onEmptyState: E
                                  }),
                              C &&
                                  (0, i.jsx)(X, {
                                      channel: n,
                                      onEmptyState: P
                                  }),
                              j &&
                                  (0, i.jsx)(M.A, {
                                      type: b.LG.HOME_EMPTY,
                                      textContent: t === b._b.TEXT ? w.intl.string(w.t.iKZctb) : w.intl.string(w.t.RL7Ncn)
                                  }),
                              S && (0, i.jsx)(k.Z, {})
                          ]
                      })
            })
        ]
    });
}
function G() {
    return (0, i.jsxs)('div', {
        className: D.developerShelfControlsContainer,
        children: [
            (0, i.jsx)(d.Text, {
                className: D.developerShelfControlsLabel,
                variant: 'text-sm/normal',
                children: w.intl.string(w.t.tZ3FNj)
            }),
            (0, i.jsx)(C.W, { hideSearch: !0 })
        ]
    });
}
function z(e) {
    let { searchQuery: n, setSearchQuery: t, placeholder: a } = e,
        r = l.useRef(null),
        [s, c] = l.useState(!1),
        u = l.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, v.yw)(U.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: E.Z.entrypoint(),
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
        m = l.useCallback(() => t(''), [t]),
        p = l.useCallback(() => {
            c(!0),
                (0, v.yw)(U.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: E.Z.entrypoint(),
                    location: g.Vh.APP_LAUNCHER_HOME
                });
        }, []),
        h = l.useCallback(() => {
            c(!1);
        }, []),
        f = l.useCallback(
            (e) => {
                !s && p(), t(e), u(e);
            },
            [s, t, p, u]
        );
    return (
        l.useEffect(() => {
            let e = r.current;
            if (null == e) return;
            let n = () => {
                !s && p();
            };
            return (
                e.addEventListener('click', n),
                () => {
                    e.removeEventListener('click', n);
                }
            );
        }, [s, p]),
        (0, i.jsx)('div', {
            className: D.searchBarContainer,
            children: (0, i.jsx)(d.SearchBar, {
                ref: (e) => {
                    var n;
                    r.current = null !== (n = null == e ? void 0 : e.containerRef.current) && void 0 !== n ? n : null;
                },
                placeholder: a,
                query: n,
                onChange: f,
                onClear: m,
                size: d.SearchBar.Sizes.MEDIUM,
                onFocus: h,
                autoFocus: !0
            })
        })
    );
}
function Y(e) {
    let { channel: n, entrypoint: t, onEmptyState: a } = e,
        o = t === b._b.VOICE,
        { frecentApps: r, loading: s } = (0, I.f)({
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
        d = w.intl.string(w.t['s+UQpa']),
        u = d;
    o && (u = w.intl.string(w.t['2pFD8P']));
    let { items: m, handleViewMore: p } = $({
        title: u,
        look: t === b._b.VOICE ? T.U4.LARGE_BANNER : T.U4.ROW,
        items: c,
        limit: 8,
        sectionName: b.L3.RECENT_APPS
    });
    l.useEffect(() => {
        if (!0 !== s.current)
            0 !== m.length &&
                (0, v.yw)(U.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: m.length,
                    section_name: b.L3.RECENT_APPS,
                    location: b.G0.HOME,
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
        (0, A.Z)(i);
    })({
        apps: m,
        onlyActivityApps: o
    }),
    h || f)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(Z.Z, {
                      title: d,
                      buttonType: Z.Z.buttonTypes.VIEW_MORE,
                      onClickViewButton: p
                  }),
                  (0, i.jsx)('div', {
                      className: D.sectionContentContainer,
                      children: (0, i.jsx)('div', {
                          className: D.frecentList,
                          children: m.map((e, t) => {
                              let { application: l } = e;
                              return o
                                  ? (0, i.jsx)(
                                        T.qR,
                                        {
                                            channel: n,
                                            application: l,
                                            look: T.U4.ICON,
                                            location: b.G0.HOME,
                                            sectionName: b.L3.RECENT_APPS,
                                            resultsPosition: t,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1
                                        },
                                        l.id
                                    )
                                  : (0, i.jsx)(
                                        T.kA,
                                        {
                                            application: l,
                                            look: T.U4.ICON,
                                            location: b.G0.HOME,
                                            sectionName: b.L3.RECENT_APPS,
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
function X(e) {
    let { channel: n, onEmptyState: t } = e;
    (0, f.g)();
    let a = (0, h.Z)({ guildId: n.getGuildId() }),
        o = T.U4.LARGE_BANNER,
        { trackSectionImpressionRef: r } = (0, R.Z)({
            sectionName: b.L3.ACTIVITIES,
            numItems: a.length,
            numVisibleItems: a.length
        }),
        s = (0, j.s)('ActivitiesShelfSection'),
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
                      children: (0, i.jsx)(Z.Z, { title: w.intl.string(w.t.shUONj) })
                  }),
                  (0, i.jsx)('div', {
                      className: D.sectionTwoColumnContentContainer,
                      children: a.map((e, t) => {
                          let { application: l } = e;
                          return (0, i.jsx)(
                              T.qR,
                              {
                                  channel: n,
                                  application: l,
                                  look: o,
                                  location: g.Vh.APP_LAUNCHER_HOME,
                                  sectionName: b.L3.ACTIVITIES,
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
function q(e) {
    let { channel: n, onEmptyState: t } = e,
        a = b.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: o, isLoading: r } = (0, P.Z)({ channel: n }),
        { items: s, handleViewMore: c } = $({
            title: w.intl.string(w.t.KfkuGR),
            look: T.U4.ROW,
            items: o,
            limit: 4,
            sectionName: a
        }),
        { trackSectionImpressionRef: d } = (0, R.Z)({
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
                      children: (0, i.jsx)(Z.Z, {
                          title: w.intl.string(w.t.KfkuGR),
                          buttonType: Z.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: c
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: D.sectionRowsContentContainer,
                      children: r
                          ? V.map((e) => (0, i.jsx)(L.Z, { look: T.U4.ROW }, e))
                          : s.map((e, n) => {
                                let { application: t } = e;
                                return null != t
                                    ? (0, i.jsx)(
                                          T.kA,
                                          {
                                              application: t,
                                              look: T.U4.ROW,
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
function J(e) {
    let { channel: n, entrypoint: t, onEmptyState: a } = e,
        {
            fetchState: o,
            recommendationsSections: s,
            isInstallOnDemand: d
        } = (function (e) {
            let { channel: n, location: t } = e,
                i = n.id;
            l.useEffect(() => {
                (0, x.a)({
                    channelId: i,
                    location: t,
                    withCommands: !1
                });
            }, [i, t]);
            let { sectionDescriptors: a } = N.wi({
                    channel: n,
                    filters: { commandTypes: [u.yU.CHAT] },
                    options: {
                        placeholderCount: 0,
                        limit: B.tn,
                        includeFrecency: !0
                    },
                    allowFetch: !0
                }),
                o = l.useCallback((e) => !(null != a.find((n) => n.id === e.id)), [a]),
                { fetchState: s, recommendationsSections: d } = (0, c.cj)([_.ZP], () => ({
                    fetchState: _.ZP.getFetchState({
                        channelId: i,
                        location: t,
                        withCommands: !1
                    }),
                    recommendationsSections: _.ZP.getRecommendations({
                        channelId: i,
                        location: t,
                        withCommands: !1
                    })
                })),
                m = t === r.I.APP_LAUNCHER_VOICE;
            return {
                fetchState: s,
                recommendationsSections: l.useMemo(() => (m ? (0, y.pF)(d) : d), [d, m]),
                isInstallOnDemand: o
            };
        })({
            channel: n,
            location: t === b._b.TEXT ? r.I.APP_LAUNCHER_TEXT : r.I.APP_LAUNCHER_VOICE
        }),
        m = (function (e) {
            let { channel: n, recommendationsSections: t } = e;
            (0, f.g)();
            let i = (0, h.Z)({ guildId: n.getGuildId() });
            return l.useMemo(() => {
                if (!t.some((e) => e.appends_remaining_activities)) return H;
                let e = new Set();
                return (
                    t.forEach((n) => {
                        n.items.forEach((n) => {
                            null != n.application && e.add(n.application.id);
                        });
                    }),
                    i.filter((n) => !e.has(n.application.id))
                );
            }, [t, i]);
        })({
            channel: n,
            recommendationsSections: s
        }),
        p = o === _.M.FETCHING,
        C = !p && 0 === s.length;
    return (l.useEffect(() => {
        a(C);
    }, [C, a]),
    C)
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: p
                  ? W.map((e, n) => {
                        let { cards: t, look: l } = e;
                        return (0, i.jsxs)(
                            'div',
                            {
                                children: [
                                    (0, i.jsx)(Z.Z.Loading, {}),
                                    (0, i.jsx)('div', {
                                        className: l === T.U4.ROW ? D.sectionRowsContentContainer : D.sectionTwoColumnContentContainer,
                                        children: t.map((e) => (0, i.jsx)(L.Z, { look: l }, e))
                                    })
                                ]
                            },
                            n
                        );
                    })
                  : s.map((e, n) =>
                        (0, i.jsx)(
                            Q,
                            {
                                recommendationsSection: e,
                                remainingActivities: m,
                                isInstallOnDemand: d,
                                position: n
                            },
                            e.key
                        )
                    )
          });
}
function Q(e) {
    let n,
        t,
        { recommendationsSection: a, remainingActivities: o, isInstallOnDemand: r, position: c } = e,
        d = a.section_title;
    switch (a.type) {
        case s.i.BANNER_CARDS:
            n = T.U4.LARGE_BANNER;
            break;
        case s.i.SMALL_BANNER_CARDS:
            n = T.U4.MEDIUM_BANNER;
            break;
        default:
            n = T.U4.ROW;
    }
    let u = l.useMemo(() => {
            let e = a.items.map((e) => {
                let { application: n } = e;
                return {
                    application: n,
                    installOnDemand: r(n)
                };
            });
            return (
                a.appends_remaining_activities &&
                    e.push(
                        ...o.map((e) => {
                            let { application: n } = e;
                            return {
                                application: n,
                                installOnDemand: !0
                            };
                        })
                    ),
                e
            );
        }, [a.items, a.appends_remaining_activities, r, o]),
        m = a.key;
    switch (a.type) {
        case s.i.BANNER_CARDS:
        case s.i.SMALL_BANNER_CARDS:
            t = 6;
            break;
        case s.i.EXPANDABLE_LIST:
        default:
            t = 4;
    }
    let { items: p, handleViewMore: h } = $({
            title: d,
            look: n,
            items: u,
            limit: t,
            sectionName: m,
            sectionOverallPosition: c
        }),
        { trackSectionImpressionRef: f } = (0, R.Z)({
            sectionName: m,
            numItems: u.length,
            numVisibleItems: p.length
        }),
        C = a.type !== s.i.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => (f.current = e),
                children: (0, i.jsx)(Z.Z, {
                    title: a.section_title,
                    buttonType: Z.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: h
                })
            }),
            (0, i.jsx)('div', {
                className: n === T.U4.ROW ? D.sectionRowsContentContainer : D.sectionTwoColumnContentContainer,
                children: p.map((e, t) => {
                    let { application: l, installOnDemand: a } = e;
                    return (0, i.jsx)(
                        T.kA,
                        {
                            application: l,
                            look: n,
                            sectionName: m,
                            resultsPosition: t,
                            location: g.Vh.APP_LAUNCHER_HOME,
                            installOnDemand: a,
                            enableVideoBanner: C,
                            sectionOverallPosition: c
                        },
                        l.id
                    );
                })
            })
        ]
    });
}
function K(e) {
    let [n, t] = l.useState(!e);
    return [
        n,
        l.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            t(e);
        }, [])
    ];
}
function $(e) {
    let { title: n, look: t, items: i, limit: a, sectionName: o, sectionOverallPosition: r } = e,
        { pushHistory: s } = (0, S.hH)();
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
                          (0, v.yw)(U.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: o,
                              source: E.Z.entrypoint(),
                              num: i.length
                          }),
                              s({
                                  type: S.gc.LIST,
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
