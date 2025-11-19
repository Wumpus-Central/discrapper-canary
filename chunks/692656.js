n.d(t, { Z: () => ea }), n(388685), n(539854), n(997841);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
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
    C = n(425986),
    N = n(216780),
    R = n(857192),
    P = n(630388),
    D = n(823379),
    w = n(541099),
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
    X = n(595050);
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
function ea(e) {
    let { context: t, entrypoint: n, searchQuery: a, setSearchQuery: o, setScroller: s, isScrollCloseToBottom: l } = e,
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
        C = (d || u) && !A,
        N = f && c;
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
    let R = a.length > 0;
    return (0, r.jsxs)("div", {
        className: X.container,
        children: [
            N ? (0, r.jsx)(eo, {}) : null,
            (0, r.jsx)(es, {
                searchQuery: a,
                setSearchQuery: o,
                placeholder: h ? q.intl.string(q.t.ziyFv2) : q.intl.string(q.t["pw+r5b"]),
            }),
            (0, r.jsx)(p.Ttm, {
                ref: s,
                className: X.scrollableContent,
                fade: !0,
                children: R
                    ? (0, r.jsx)(Y.Z, {
                          context: t,
                          query: a,
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
                                          n === L._b.TEXT ? q.intl.string(q.t.iKZctW) : q.intl.string(q.t.RL7Ncg),
                                  }),
                              C && (0, r.jsx)(H.Z, {}),
                          ],
                      }),
            }),
        ],
    });
}
function eo() {
    return (0, r.jsxs)("div", {
        className: X.developerShelfControlsContainer,
        children: [
            (0, r.jsx)(p.Text, {
                className: X.developerShelfControlsLabel,
                variant: "text-sm/normal",
                children: q.intl.string(q.t.tZ3FNs),
            }),
            (0, r.jsx)(y.W, { hideSearch: !0 }),
        ],
    });
}
function es(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: a } = e,
        s = i.useRef(null),
        [l, c] = i.useState(!1),
        u = i.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, O.yw)(K.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: w.Z.entrypoint(),
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
                    source: w.Z.entrypoint(),
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
                ref: s,
                placeholder: a,
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
    let { context: t, entrypoint: n, onEmptyState: a } = e,
        o = n === L._b.VOICE,
        { frecentApps: s, loading: l } = (0, x.f)({
            context: t,
            onlyActivityApps: o,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0,
        }),
        c = i.useMemo(() => {
            let e = [];
            for (let t of s) null != t.application && e.push({ application: t.application });
            return e;
        }, [s]),
        u = q.intl.string(q.t["s+UQpc"]),
        d = u;
    o && (d = q.intl.string(q.t["2pFD8L"]));
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
        a(p);
    }, [p, a]),
    el({
        apps: f,
        onlyActivityApps: o,
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
                              return o
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
    let { context: n, onEmptyState: a } = e;
    (0, b.g)();
    let o = (0, E.Z)({ guildId: "channel" === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0 }),
        s = G.U4.LARGE_BANNER,
        { trackSectionImpressionRef: l } = (0, Z.Z)({
            sectionName: L.L3.ACTIVITIES,
            numItems: o.length,
            numVisibleItems: o.length,
        }),
        c = (0, k.s)(),
        u = 0 === o.length;
    return (i.useEffect(() => {
        a(u);
    }, [a, u]),
    u)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", {
                      ref: (e) => {
                          l.current = e;
                      },
                      children: (0, r.jsx)(V.Z, { title: q.intl.string(q.t.shUONg) }),
                  }),
                  (0, r.jsx)("div", {
                      className: X.sectionTwoColumnContentContainer,
                      children: o.map((e, t) => {
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
        a = L.L3.APPS_IN_THIS_SERVER,
        { appsInThisServer: o, isLoading: s } = (0, M.Z)({ context: t }),
        { items: l, handleViewMore: c } = eE({
            title: q.intl.string(q.t.KfkuGc),
            look: G.U4.ROW,
            items: o,
            limit: J,
            sectionName: a,
        }),
        { trackSectionImpressionRef: u } = (0, Z.Z)({
            sectionName: a,
            numItems: o.length,
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
                          title: q.intl.string(q.t.KfkuGc),
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
                                              sectionName: a,
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
    let { context: t, entrypoint: n, onEmptyState: a } = e,
        {
            fetchState: o,
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
        u = o === C.M.FETCHING,
        d = !u && 0 === s.length;
    return (i.useEffect(() => {
        a(d);
    }, [d, a]),
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
        { recommendationsSection: a, remainingActivities: o, isInstallOnDemand: s, position: u, context: _ } = e,
        p = a.title;
    switch (a.type) {
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
            let e = a.application_directory_collection_items
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
                .filter(D.lm);
            return (
                (0, P.yE)(a.flags, l.b.APPENDS_REMAINING_ACTIVITIES) &&
                    e.push(
                        ...o.map((e) => {
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
        }, [s, a.application_directory_collection_items, a.flags, o]),
        m = a.title;
    switch (a.type) {
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
        y = a.type !== f.o.SMALL_BANNER_CARDS;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)("div", {
                ref: (e) => {
                    b.current = e;
                },
                children: (0, r.jsx)(V.Z, {
                    title: a.title,
                    buttonType: V.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: E,
                }),
            }),
            (0, r.jsx)("div", {
                className: t === G.U4.ROW ? X.sectionRowsContentContainer : X.sectionTwoColumnContentContainer,
                children: g.map((e, n) => {
                    let i,
                        {
                            collectionItemId: a,
                            collectionItemImageHash: o,
                            application: s,
                            installOnDemand: l,
                            showsPromoted: c,
                        } = e;
                    return (
                        null != a &&
                            null != o &&
                            (i = (0, N.$_)({
                                itemId: a,
                                hash: o,
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
    let { sectionDescriptors: a } = v.wi({
            context: t,
            filters: { commandTypes: [h.yU.CHAT] },
            options: {
                placeholderCount: 0,
                limit: z.tn,
                includeFrecency: !0,
            },
            allowFetch: !0,
        }),
        o = i.useCallback((e) => null == a.find((t) => t.id === e.id), [a]),
        s = (0, _.e7)([C.Z], () =>
            C.Z.getFetchState({
                surface: ei,
                activeState: r,
            }),
        ),
        l = (0, _.e7)([C.Z], () =>
            C.Z.getCollections({
                surface: ei,
                activeState: r,
            }),
        ),
        c = n === L._b.VOICE;
    return {
        fetchState: s,
        recommendationsSections: i.useMemo(() => (c ? (0, j.pF)(l) : l), [l, c]),
        isInstallOnDemand: o,
    };
}
function eg(e) {
    var t;
    let { context: n, recommendationsSections: r } = e;
    (0, b.g)();
    let a = (0, E.Z)({ guildId: "channel" === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0 });
    return i.useMemo(() => {
        if (!r.some((e) => (0, P.yE)(e.flags, l.b.APPENDS_REMAINING_ACTIVITIES))) return Q;
        let e = new Set();
        return (
            r.forEach((t) => {
                t.application_directory_collection_items.forEach((t) => {
                    t.type === d.C.APPLICATION && e.add(t.application.id);
                });
            }),
            a.filter((t) => !e.has(t.application.id))
        );
    }, [r, a]);
}
function eE(e) {
    let { title: t, look: n, items: r, limit: a, sectionName: o, sectionOverallPosition: s } = e,
        { pushHistory: l } = (0, U.hH)();
    return i.useMemo(
        () =>
            r.length <= a
                ? {
                      items: r,
                      handleViewMore: void 0,
                  }
                : {
                      items: r.slice(0, a),
                      handleViewMore: () => {
                          (0, O.yw)(K.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: o,
                              source: w.Z.entrypoint(),
                              num: r.length,
                          }),
                              l({
                                  type: U.gc.LIST,
                                  title: t,
                                  look: n,
                                  items: r,
                                  sectionName: o,
                                  sectionOverallPosition: s,
                              });
                      },
                  },
        [r, a, o, l, t, n, s],
    );
}
