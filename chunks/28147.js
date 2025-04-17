n.d(t, { Z: () => k }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(209173),
    s = n(110924),
    c = n(367907),
    u = n(555573),
    d = n(895924),
    p = n(583027),
    m = n(177653),
    f = n(585483),
    h = n(499254),
    b = n(541099),
    _ = n(827498),
    y = n(392370),
    x = n(98880),
    C = n(804307),
    v = n(520315),
    g = n(532309),
    N = n(561160),
    j = n(41558),
    P = n(106771),
    O = n(79984),
    E = n(314734),
    A = n(981631),
    I = n(388032),
    S = n(946908);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let L = Array(6)
        .fill(0)
        .map((e, t) => t),
    w = [, , ,].fill(0).map((e, t) => t),
    R = [, , , ,].fill(0).map((e, t) => t);
function k(e) {
    return (0, i.jsx)(Z, T({}, e));
}
function Z(e) {
    let { context: t, query: n, entrypoint: l, isScrollCloseToBottom: s } = e,
        c = l === _._b.TEXT,
        u = l === _._b.TEXT,
        {
            loading: d,
            isEmptyState: p,
            commandResults: f,
            hasCommandResults: h,
            applicationResults: b
        } = (0, y.pe)({
            context: t,
            query: n,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: u
        }),
        {
            fetchState: x,
            applicationResults: C,
            fetchNextPage: v
        } = (0, y.Q2)({
            query: n,
            context: t,
            fetches: !0,
            pageLimit: 5,
            entrypoint: l
        });
    r.useEffect(() => {
        s && x === m.M.FETCHED && v();
    }, [v, x, s]);
    let g = null == x || x === m.M.FETCHING,
        j = r.useMemo(() => {
            let e = b.map((e) => ({
                    application: e,
                    installOnDemand: !0
                })),
                t = new Set(
                    b.map((e) => {
                        let { id: t } = e;
                        return t;
                    })
                );
            return [
                ...e,
                ...o().compact(
                    C.map((e) =>
                        e.type === a.s.CONNECTION || t.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0
                              }
                    )
                )
            ];
        }, [C, b]),
        P = j.length > 0,
        O = p && !P && !g;
    return d
        ? (0, i.jsx)(U, {})
        : O
          ? (0, i.jsx)(N.A, {
                type: _.LG.SEARCH_EMPTY,
                searchQuery: n,
                textContent: l === _._b.TEXT ? I.NW.string(I.t.LSNOYW) : I.NW.string(I.t.Clu7Qk)
            })
          : (0, i.jsxs)('div', {
                children: [
                    h &&
                        (0, i.jsx)(M, {
                            context: t,
                            commandResults: f,
                            query: n
                        }),
                    (P || g) &&
                        (0, i.jsx)(W, {
                            context: t,
                            applicationResults: j,
                            includePlaceholder: g,
                            query: n,
                            searchesBots: u
                        })
                ]
            });
}
function M(e) {
    var t, n;
    let { context: l, commandResults: o, query: a } = e,
        m = o.length > 4,
        y = r.useMemo(() => (m ? o.slice(0, 4) : o), [o, m]),
        [x, C] = r.useState(!1),
        g = null != (t = (0, s.Z)(x)) ? t : x,
        N = r.useCallback(() => C((e) => !e), []),
        O = (null != (n = (0, s.Z)(a)) ? n : a)[0] !== a[0],
        T = x && !O;
    r.useLayoutEffect(() => C(!1), [O]);
    let {
        ref: L,
        isTransitioning: w,
        onTransitionEnd: R
    } = (0, v.Z)({
        key: a,
        isExpanded: T,
        durationMs: 200,
        maxAnimationHeight: E.K7
    });
    r.useEffect(() => {
        !g &&
            x &&
            (0, c.yw)(A.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: _.L3.SEARCH,
                source: b.Z.entrypoint(),
                num: o.length
            });
    }, [o.length, g, x]);
    let k = T || w,
        Z = T ? j.Z.buttonTypes.VIEW_LESS : j.Z.buttonTypes.VIEW_MORE,
        M = k ? o : y;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(j.Z, {
                title: I.NW.string(I.t['0hKkS0']),
                buttonType: Z,
                onClickViewButton: m ? N : void 0
            }),
            (0, i.jsx)('div', {
                className: S.sectionContentContainer,
                ref: L,
                onTransitionEnd: R,
                children: M.map((e, t) => {
                    let { command: n, application: r, section: o } = e;
                    return (0, i.jsx)(
                        P.Z,
                        {
                            command: n,
                            application: r,
                            query: a,
                            searchResultsPosition: t,
                            onClick: () => {
                                let e = b.Z.entrypoint();
                                h.yT(_.ti.DISMISSED),
                                    (0, p.Mo)({
                                        command: n,
                                        location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: _.L3.SEARCH
                                    }),
                                    'channel' === l.type &&
                                        (u.Po({
                                            channelId: l.channel.id,
                                            command: n,
                                            section: o,
                                            location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: a.length,
                                            sectionName: _.L3.SEARCH,
                                            query: a,
                                            searchResultsPosition: t,
                                            source: e
                                        }),
                                        f.S.dispatch(A.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.channel.id }));
                            }
                        },
                        n.id
                    );
                })
            })
        ]
    });
}
function D(e) {
    var t, n;
    let { trackSearchResultsItemImpressionRef: r } = (0, g.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, i.jsx)('div', {
        className: S.searchOpenAppDetailAppCard,
        ref: (e) => {
            r.current = e;
        },
        children: (0, i.jsx)(
            x.kA,
            ((t = T({}, e)),
            (n = n =
                {
                    tracksImpression: !1,
                    enableVideoBanner: !0
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    });
}
function W(e) {
    let { context: t, applicationResults: n, includePlaceholder: r, query: l, searchesBots: o } = e;
    return o
        ? (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(j.Z, { title: I.NW.string(I.t.PHjkRE) }),
                  (0, i.jsxs)('div', {
                      className: S.sectionContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: r, installOnDemand: o } = e;
                              return (0, i.jsx)(
                                  B,
                                  {
                                      context: t,
                                      application: r,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: _.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: o,
                                      query: l
                                  },
                                  r.id
                              );
                          }),
                          r && w.map((e) => (0, i.jsx)(O.Z, {}, e))
                      ]
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(j.Z, { title: I.NW.string(I.t.shUONj) }),
                  (0, i.jsxs)('div', {
                      className: S.sectionActivitiesContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: r, installOnDemand: o } = e;
                              return (0, i.jsx)(
                                  D,
                                  {
                                      context: t,
                                      application: r,
                                      look: x.U4.LARGE_BANNER,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: _.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: o,
                                      query: l
                                  },
                                  r.id
                              );
                          }),
                          r && R.map((e) => (0, i.jsx)(C.Z, { look: x.U4.LARGE_BANNER }, e))
                      ]
                  })
              ]
          });
}
function B(e) {
    let { onClickAppCard: t, onClickAppCardFriends: n } = (0, x.cG)(e);
    return (0, i.jsx)(P.Z, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
        onClickAppCardFriends: n
    });
}
function U() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(j.Z, { title: I.NW.string(I.t['0hKkS0']) }),
            (0, i.jsx)('div', {
                className: S.sectionContentContainer,
                children: L.map((e) => (0, i.jsx)(O.Z, {}, e))
            }),
            (0, i.jsx)(j.Z, { title: I.NW.string(I.t.PHjkRE) }),
            (0, i.jsx)('div', {
                className: S.sectionContentContainer,
                children: w.map((e) => (0, i.jsx)(O.Z, {}, e))
            })
        ]
    });
}
