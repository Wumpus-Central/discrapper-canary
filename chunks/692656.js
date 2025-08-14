n.d(t, { Z: () => eo }), n(388685), n(539854), n(997841);
var r = n(255367),
    i = n(73800),
    o = n(392711),
    a = n.n(o),
    s = n(535655),
    l = n(754738),
    c = n(727241),
    u = n(973693),
    d = n(912370),
    f = n(873199),
    _ = n(442837),
    p = n(481060),
    h = n(911969),
    m = n(115130),
    g = n(566620),
    E = n(127255),
    b = n(880308),
    y = n(427996),
    O = n(367907),
    v = n(10718),
    I = n(895924),
    T = n(835473),
    S = n(568100),
    A = n(471518),
    N = n(425986),
    C = n(216780),
    R = n(857192),
    P = n(630388),
    w = n(823379),
    D = n(541099),
    L = n(827498),
    x = n(87005),
    M = n(219066),
    k = n(106066),
    j = n(783097),
    U = n(695676),
    G = n(98880),
    B = n(804307),
    Z = n(888617),
    F = n(561160),
    V = n(41558),
    H = n(105862),
    Y = n(28147),
    W = n(314734),
    K = n(981631),
    z = n(689079),
    q = n(388032),
    X = n(729755);
let Q = [],
    J = 4,
    $ = 4,
    ee = 6,
    et = 8,
    en = [, , , ,].fill(0).map((e, t) => t),
    er = [
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: G.U4.MEDIUM_BANNER,
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: G.U4.ROW,
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: G.U4.ROW,
        },
    ],
    ei = u.Y.APP_LAUNCHER_IN_TEXT;
function eo(e) {
    let { context: t, entrypoint: n, searchQuery: o, setSearchQuery: a, setScroller: s, isScrollCloseToBottom: l } = e,
        c = (0, _.e7)([m.Z], () => m.Z.getIsEnabled(), []),
        u = n === L._b.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, j.Yn)(n),
        f = !(0, j.Yn)(n),
        h = n === L._b.TEXT,
        [E, b] = ep(!0),
        [y, O] = ep(u),
        [v, I] = ep(d),
        [T, S] = ep(f),
        A = E && y && v && T,
        N = (d || u) && !A,
        C = f && c;
    i.useEffect(() => {
        var e;
        let n = "channel" === t.type ? (null == (e = t.channel) ? void 0 : e.guild_id) : void 0;
        (0, g.w1)({
            guildId: n,
            force: !0,
        });
    }, [t]),
        i.useEffect(() => {
            n === L._b.VOICE && g.ux();
        }, [n]);
    let R = o.length > 0;
    return (0, r.jsxs)("div", {
        className: X.container,
        children: [
            C ? (0, r.jsx)(ea, {}) : null,
            (0, r.jsx)(es, {
                searchQuery: o,
                setSearchQuery: a,
                placeholder: h ? q.intl.string(q.t.ziyFv7) : q.intl.string(q.t["pw+r5e"]),
            }),
            (0, r.jsx)(p.Ttm, {
                ref: s,
                className: X.scrollableContent,
                fade: !0,
                children: R
                    ? (0, r.jsx)(Y.Z, {
                          context: t,
                          query: o,
                          entrypoint: n,
                          isScrollCloseToBottom: l,
                      })
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(ec, {
                                  context: t,
                                  entrypoint: n,
                                  onEmptyState: b,
                              }),
                              u &&
                                  "channel" === t.type &&
                                  (0, r.jsx)(ed, {
                                      context: t,
                                      onEmptyState: O,
                                  }),
                              d &&
                                  (0, r.jsx)(ef, {
                                      context: t,
                                      entrypoint: n,
                                      onEmptyState: I,
                                  }),
                              f &&
                                  (0, r.jsx)(eu, {
                                      context: t,
                                      onEmptyState: S,
                                  }),
                              A &&
                                  (0, r.jsx)(F.A, {
                                      type: L.LG.HOME_EMPTY,
                                      textContent:
                                          n === L._b.TEXT ? q.intl.string(q.t.iKZctb) : q.intl.string(q.t.RL7Ncn),
                                  }),
                              N && (0, r.jsx)(H.Z, {}),
                          ],
                      }),
            }),
        ],
    });
}
function ea() {
    return (0, r.jsxs)("div", {
        className: X.developerShelfControlsContainer,
        children: [
            (0, r.jsx)(p.Text, {
                className: X.developerShelfControlsLabel,
                variant: "text-sm/normal",
                children: q.intl.string(q.t.tZ3FNj),
            }),
            (0, r.jsx)(y.W, { hideSearch: !0 }),
        ],
    });
}
function es(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: o } = e,
        s = i.useRef(null),
        [l, c] = i.useState(!1),
        u = i.useMemo(
            () =>
                a().debounce(
                    (e) => {
                        (0, O.yw)(K.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: D.Z.entrypoint(),
                            location: I.Vh.APP_LAUNCHER_HOME,
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0,
                    },
                ),
            [],
        ),
        d = i.useCallback(() => n(""), [n]),
        f = i.useCallback(() => {
            c(!0),
                (0, O.yw)(K.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: D.Z.entrypoint(),
                    location: I.Vh.APP_LAUNCHER_HOME,
                });
        }, []),
        _ = i.useCallback(() => {
            c(!1);
        }, []),
        h = i.useCallback(
            (e) => {
                l || f(), n(e), u(e);
            },
            [l, n, f, u],
        );
    return (
        i.useEffect(() => {
            let e = s.current;
            if (null == e) return;
            let t = () => {
                l || f();
            };
            return (
                e.addEventListener("click", t),
                () => {
                    e.removeEventListener("click", t);
                }
            );
        }, [l, f]),
        (0, r.jsx)("div", {
            className: X.searchBarContainer,
            children: (0, r.jsx)(p.E1j, {
                ref: (e) => {
                    var t;
                    s.current = null != (t = null == e ? void 0 : e.containerRef.current) ? t : null;
                },
                placeholder: o,
                query: t,
                onChange: h,
                onClear: d,
                onFocus: _,
                autoFocus: !0,
            }),
        })
    );
}
function el(e) {
    let { apps: t, onlyActivityApps: n } = e,
        r = i.useMemo(
            () =>
                n
                    ? t.map((e) => {
                          let { application: t } = e;
                          return t.id;
                      })
                    : [],
            [t, n],
        );
    (0, T.Z)(r);
}
function ec(e) {
    let { context: t, entrypoint: n, onEmptyState: o } = e,
        a = n === L._b.VOICE,
        { frecentApps: s, loading: l } = (0, x.f)({
            context: t,
            onlyActivityApps: a,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0,
        }),
        c = i.useMemo(() => {
            let e = [];
            for (let t of s) null != t.application && e.push({ application: t.application });
            return e;
        }, [s]),
        u = q.intl.string(q.t["s+UQpa"]),
        d = u;
    a && (d = q.intl.string(q.t["2pFD8P"]));
    let { items: f, handleViewMore: _ } = eE({
        title: d,
        look: n === L._b.VOICE ? G.U4.LARGE_BANNER : G.U4.ROW,
        items: c,
        limit: et,
        sectionName: L.L3.RECENT_APPS,
    });
    i.useEffect(() => {
        l ||
            (0 !== f.length &&
                (0, O.yw)(K.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: f.length,
                    section_name: L.L3.RECENT_APPS,
                    location: L.G0.HOME,
                    source: n,
                }));
    }, [f.length, n, l]);
    let p = !l && 0 === f.length;
    return (i.useEffect(() => {
        o(p);
    }, [p, o]),
    el({
        apps: f,
        onlyActivityApps: a,
    }),
    l || p)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(V.Z, {
                      title: u,
                      buttonType: V.Z.buttonTypes.VIEW_MORE,
                      onClickViewButton: _,
                  }),
                  (0, r.jsx)("div", {
                      className: X.sectionContentContainer,
                      children: (0, r.jsx)("div", {
                          className: X.frecentList,
                          children: f.map((e, n) => {
                              let { application: i } = e;
                              return a
                                  ? (0, r.jsx)(
                                        G.qR,
                                        {
                                            context: t,
                                            application: i,
                                            look: G.U4.ICON,
                                            location: L.G0.HOME,
                                            sectionName: L.L3.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1,
                                        },
                                        i.id,
                                    )
                                  : (0, r.jsx)(
                                        G.kA,
                                        {
                                            context: t,
                                            application: i,
                                            look: G.U4.ICON,
                                            location: L.G0.HOME,
                                            sectionName: L.L3.RECENT_APPS,
                                            resultsPosition: n,
                                        },
                                        i.id,
                                    );
                          }),
                      }),
                  }),
              ],
          });
}
function eu(e) {
    var t;
    let { context: n, onEmptyState: o } = e;
    (0, b.g)();
    let a = (0, E.Z)({ guildId: "channel" === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0 }),
        s = G.U4.LARGE_BANNER,
        { trackSectionImpressionRef: l } = (0, Z.Z)({
            sectionName: L.L3.ACTIVITIES,
            numItems: a.length,
            numVisibleItems: a.length,
        }),
        c = (0, k.s)(),
        u = 0 === a.length;
    return (i.useEffect(() => {
        o(u);
    }, [o, u]),
    u)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", {
                      ref: (e) => {
                          l.current = e;
                      },
                      children: (0, r.jsx)(V.Z, { title: q.intl.string(q.t.shUONj) }),
                  }),
                  (0, r.jsx)("div", {
                      className: X.sectionTwoColumnContentContainer,
                      children: a.map((e, t) => {
                          let { application: i } = e;
                          return (0, r.jsx)(
                              G.qR,
                              {
                                  context: n,
                                  application: i,
                                  look: s,
                                  location: I.Vh.APP_LAUNCHER_HOME,
                                  sectionName: L.L3.ACTIVITIES,
                                  resultsPosition: t,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !c,
                                  fetchesApplication: !1,
                              },
                              i.id,
                          );
                      }),
                  }),
              ],
          });
}
function ed(e) {
    let { context: t, onEmptyState: n } = e,
        o = L.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: a, isLoading: s } = (0, M.Z)({ context: t }),
        { items: l, handleViewMore: c } = eE({
            title: q.intl.string(q.t.KfkuGR),
            look: G.U4.ROW,
            items: a,
            limit: J,
            sectionName: o,
        }),
        { trackSectionImpressionRef: u } = (0, Z.Z)({
            sectionName: o,
            numItems: a.length,
            numVisibleItems: l.length,
        }),
        d = !s && 0 === l.length;
    return (i.useEffect(() => {
        n(d);
    }, [d, n]),
    d)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", {
                      ref: (e) => {
                          u.current = e;
                      },
                      children: (0, r.jsx)(V.Z, {
                          title: q.intl.string(q.t.KfkuGR),
                          buttonType: V.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: c,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: X.sectionRowsContentContainer,
                      children: s
                          ? en.map((e) => (0, r.jsx)(B.Z, { look: G.U4.ROW }, e))
                          : l.map((e, n) => {
                                let { application: i } = e;
                                return null != i
                                    ? (0, r.jsx)(
                                          G.kA,
                                          {
                                              context: t,
                                              application: i,
                                              look: G.U4.ROW,
                                              sectionName: o,
                                              resultsPosition: n,
                                              location: I.Vh.APP_LAUNCHER_HOME,
                                          },
                                          i.id,
                                      )
                                    : null;
                            }),
                  }),
              ],
          });
}
function ef(e) {
    let { context: t, entrypoint: n, onEmptyState: o } = e,
        {
            fetchState: a,
            recommendationsSections: s,
            isInstallOnDemand: l,
        } = em({
            context: t,
            entrypoint: n,
        }),
        c = eg({
            context: t,
            recommendationsSections: s,
        }),
        u = a === N.M.FETCHING,
        d = !u && 0 === s.length;
    return (i.useEffect(() => {
        o(d);
    }, [d, o]),
    d)
        ? null
        : u
          ? er.map((e, t) => {
                let { cards: n, look: i } = e;
                return (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsx)(V.Z.Loading, {}),
                            (0, r.jsx)("div", {
                                className:
                                    i === G.U4.ROW ? X.sectionRowsContentContainer : X.sectionTwoColumnContentContainer,
                                children: n.map((e) => (0, r.jsx)(B.Z, { look: i }, e)),
                            }),
                        ],
                    },
                    t,
                );
            })
          : s.map((e, n) =>
                (0, r.jsx)(
                    e_,
                    {
                        recommendationsSection: e,
                        remainingActivities: c,
                        isInstallOnDemand: l,
                        position: n,
                        context: t,
                    },
                    e.id,
                ),
            );
}
function e_(e) {
    let t,
        n,
        { recommendationsSection: o, remainingActivities: a, isInstallOnDemand: s, position: u, context: _ } = e,
        p = o.title;
    switch (o.type) {
        case f.o.BANNER_CARDS:
            t = G.U4.LARGE_BANNER;
            break;
        case f.o.SMALL_BANNER_CARDS:
            t = G.U4.MEDIUM_BANNER;
            break;
        default:
            t = G.U4.ROW;
    }
    let h = i.useMemo(() => {
            let e = o.application_directory_collection_items
                .map((e) => {
                    if (e.type === d.C.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, P.yE)(e.flags, c.q.PROMOTED),
                            application: e.application,
                            installOnDemand: s(e.application),
                        };
                })
                .filter(w.lm);
            return (
                (0, P.yE)(o.flags, l.b.APPENDS_REMAINING_ACTIVITIES) &&
                    e.push(
                        ...a.map((e) => {
                            let { application: t } = e;
                            return {
                                collectionItemId: void 0,
                                collectionItemImageHash: void 0,
                                showsPromoted: !1,
                                application: t,
                                installOnDemand: !0,
                            };
                        }),
                    ),
                e
            );
        }, [s, o.application_directory_collection_items, o.flags, a]),
        m = o.title;
    switch (o.type) {
        case f.o.BANNER_CARDS:
        case f.o.SMALL_BANNER_CARDS:
            n = ee;
            break;
        case f.o.EXPANDABLE_LIST:
        default:
            n = $;
    }
    let { items: g, handleViewMore: E } = eE({
            title: p,
            look: t,
            items: h,
            limit: n,
            sectionName: m,
            sectionOverallPosition: u,
        }),
        { trackSectionImpressionRef: b } = (0, Z.Z)({
            sectionName: m,
            numItems: h.length,
            numVisibleItems: g.length,
        }),
        y = o.type !== f.o.SMALL_BANNER_CARDS;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)("div", {
                ref: (e) => {
                    b.current = e;
                },
                children: (0, r.jsx)(V.Z, {
                    title: o.title,
                    buttonType: V.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: E,
                }),
            }),
            (0, r.jsx)("div", {
                className: t === G.U4.ROW ? X.sectionRowsContentContainer : X.sectionTwoColumnContentContainer,
                children: g.map((e, n) => {
                    let i,
                        {
                            collectionItemId: o,
                            collectionItemImageHash: a,
                            application: s,
                            installOnDemand: l,
                            showsPromoted: c,
                        } = e;
                    return (
                        null != o &&
                            null != a &&
                            (i = (0, C.$_)({
                                itemId: o,
                                hash: a,
                                containerWidth: W.Gy,
                            })),
                        (0, r.jsx)(
                            G.kA,
                            {
                                context: _,
                                application: s,
                                look: t,
                                sectionName: m,
                                resultsPosition: n,
                                location: I.Vh.APP_LAUNCHER_HOME,
                                installOnDemand: l,
                                enableVideoBanner: y,
                                sectionOverallPosition: u,
                                overrideImageUrl: i,
                                showsPromoted: c,
                            },
                            "".concat(n, "-").concat(s.id),
                        )
                    );
                }),
            }),
        ],
    });
}
function ep(e) {
    let [t, n] = i.useState(!e);
    return [
        t,
        i.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, []),
    ];
}
function eh() {
    let e = (0, _.e7)([R.default], () => R.default.onlyShowPreviewAppCollections),
        t = S.Z.getCurrentConfig({ location: "App Launcher Home (Web)" }, { autoTrackExposure: !1 }).enabled;
    return e ? s.E.PREVIEW : t ? s.E.NON_STAFF_PREVIEW : s.E.ACTIVE;
}
function em(e) {
    let { context: t, entrypoint: n } = e,
        r = eh();
    i.useEffect(() => {
        (0, A.XK)({
            surface: ei,
            activeState: r,
        });
    }, [r]);
    let { sectionDescriptors: o } = v.wi({
            context: t,
            filters: { commandTypes: [h.yU.CHAT] },
            options: {
                placeholderCount: 0,
                limit: z.tn,
                includeFrecency: !0,
            },
            allowFetch: !0,
        }),
        a = i.useCallback((e) => null == o.find((t) => t.id === e.id), [o]),
        s = (0, _.e7)([N.Z], () =>
            N.Z.getFetchState({
                surface: ei,
                activeState: r,
            }),
        ),
        l = (0, _.e7)([N.Z], () =>
            N.Z.getCollections({
                surface: ei,
                activeState: r,
            }),
        ),
        c = n === L._b.VOICE;
    return {
        fetchState: s,
        recommendationsSections: i.useMemo(() => (c ? (0, j.pF)(l) : l), [l, c]),
        isInstallOnDemand: a,
    };
}
function eg(e) {
    var t;
    let { context: n, recommendationsSections: r } = e;
    (0, b.g)();
    let o = (0, E.Z)({ guildId: "channel" === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0 });
    return i.useMemo(() => {
        if (!r.some((e) => (0, P.yE)(e.flags, l.b.APPENDS_REMAINING_ACTIVITIES))) return Q;
        let e = new Set();
        return (
            r.forEach((t) => {
                t.application_directory_collection_items.forEach((t) => {
                    t.type === d.C.APPLICATION && e.add(t.application.id);
                });
            }),
            o.filter((t) => !e.has(t.application.id))
        );
    }, [r, o]);
}
function eE(e) {
    let { title: t, look: n, items: r, limit: o, sectionName: a, sectionOverallPosition: s } = e,
        { pushHistory: l } = (0, U.hH)();
    return i.useMemo(
        () =>
            r.length <= o
                ? {
                      items: r,
                      handleViewMore: void 0,
                  }
                : {
                      items: r.slice(0, o),
                      handleViewMore: () => {
                          (0, O.yw)(K.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: a,
                              source: D.Z.entrypoint(),
                              num: r.length,
                          }),
                              l({
                                  type: U.gc.LIST,
                                  title: t,
                                  look: n,
                                  items: r,
                                  sectionName: a,
                                  sectionOverallPosition: s,
                              });
                      },
                  },
        [r, o, a, l, t, n, s],
    );
}
