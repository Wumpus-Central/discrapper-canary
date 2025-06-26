n.d(t, { Z: () => k }), n(388685);
var i = n(255367),
    l = n(73800),
    r = n(392711),
    o = n.n(r),
    a = n(209173),
    c = n(110924),
    s = n(367907),
    u = n(555573),
    d = n(895924),
    p = n(583027),
    m = n(177653),
    f = n(585483),
    h = n(499254),
    b = n(541099),
    _ = n(827498),
    C = n(392370),
    v = n(98880),
    x = n(804307),
    y = n(520315),
    g = n(532309),
    j = n(561160),
    N = n(41558),
    P = n(106771),
    E = n(79984),
    A = n(314734),
    I = n(981631),
    O = n(388032),
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
    R = [, , ,].fill(0).map((e, t) => t),
    w = [, , , ,].fill(0).map((e, t) => t);
function k(e) {
    return (0, i.jsx)(Z, T({}, e));
}
function Z(e) {
    let { context: t, query: n, entrypoint: r, isScrollCloseToBottom: c } = e,
        s = r === _._b.TEXT,
        u = r === _._b.TEXT,
        {
            loading: d,
            isEmptyState: p,
            commandResults: f,
            hasCommandResults: h,
            applicationResults: b
        } = (0, C.pe)({
            context: t,
            query: n,
            searchesActivities: !0,
            searchesCommands: s,
            searchesBots: u
        }),
        {
            fetchState: v,
            applicationResults: x,
            fetchNextPage: y
        } = (0, C.Q2)({
            query: n,
            context: t,
            fetches: !0,
            pageLimit: 5,
            entrypoint: r
        });
    l.useEffect(() => {
        c && v === m.M.FETCHED && y();
    }, [y, v, c]);
    let g = null == v || v === m.M.FETCHING,
        N = l.useMemo(() => {
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
                    x.map((e) =>
                        e.type === a.s.CONNECTION || t.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0
                              }
                    )
                )
            ];
        }, [x, b]),
        P = N.length > 0,
        E = p && !P && !g;
    return d
        ? (0, i.jsx)(H, {})
        : E
          ? (0, i.jsx)(j.A, {
                type: _.LG.SEARCH_EMPTY,
                searchQuery: n,
                textContent: r === _._b.TEXT ? O.intl.string(O.t.LSNOYW) : O.intl.string(O.t.Clu7Qk)
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
                        (0, i.jsx)(U, {
                            context: t,
                            applicationResults: N,
                            includePlaceholder: g,
                            query: n,
                            searchesBots: u
                        })
                ]
            });
}
function M(e) {
    var t, n;
    let { context: r, commandResults: o, query: a } = e,
        m = o.length > 4,
        C = l.useMemo(() => (m ? o.slice(0, 4) : o), [o, m]),
        [v, x] = l.useState(!1),
        g = null != (t = (0, c.Z)(v)) ? t : v,
        j = l.useCallback(() => x((e) => !e), []),
        E = (null != (n = (0, c.Z)(a)) ? n : a)[0] !== a[0],
        T = v && !E;
    l.useLayoutEffect(() => x(!1), [E]);
    let {
        ref: L,
        isTransitioning: R,
        onTransitionEnd: w
    } = (0, y.Z)({
        key: a,
        isExpanded: T,
        durationMs: 200,
        maxAnimationHeight: A.K7
    });
    l.useEffect(() => {
        !g &&
            v &&
            (0, s.yw)(I.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: _.L3.SEARCH,
                source: b.Z.entrypoint(),
                num: o.length
            });
    }, [o.length, g, v]);
    let k = T || R,
        Z = T ? N.Z.buttonTypes.VIEW_LESS : N.Z.buttonTypes.VIEW_MORE,
        M = k ? o : C;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(N.Z, {
                title: O.intl.string(O.t['0hKkS0']),
                buttonType: Z,
                onClickViewButton: m ? j : void 0
            }),
            (0, i.jsx)('div', {
                className: S.sectionContentContainer,
                ref: L,
                onTransitionEnd: w,
                children: M.map((e, t) => {
                    let { command: n, application: l, section: o } = e;
                    return (0, i.jsx)(
                        P.Z,
                        {
                            command: n,
                            application: l,
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
                                    'channel' === r.type &&
                                        (u.Po({
                                            channelId: r.channel.id,
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
                                        f.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: r.channel.id }));
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
    let { trackSearchResultsItemImpressionRef: l } = (0, g.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, i.jsx)('div', {
        className: S.searchOpenAppDetailAppCard,
        ref: (e) => {
            l.current = e;
        },
        children: (0, i.jsx)(
            v.kA,
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
function U(e) {
    let { context: t, applicationResults: n, includePlaceholder: l, query: r, searchesBots: o } = e;
    return o
        ? (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(N.Z, { title: O.intl.string(O.t.PHjkRE) }),
                  (0, i.jsxs)('div', {
                      className: S.sectionContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: o } = e;
                              return (0, i.jsx)(
                                  B,
                                  {
                                      context: t,
                                      application: l,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: _.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: o,
                                      query: r
                                  },
                                  l.id
                              );
                          }),
                          l && R.map((e) => (0, i.jsx)(E.Z, {}, e))
                      ]
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(N.Z, { title: O.intl.string(O.t.shUONj) }),
                  (0, i.jsxs)('div', {
                      className: S.sectionActivitiesContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: o } = e;
                              return (0, i.jsx)(
                                  D,
                                  {
                                      context: t,
                                      application: l,
                                      look: v.U4.LARGE_BANNER,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: _.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: o,
                                      query: r
                                  },
                                  l.id
                              );
                          }),
                          l && w.map((e) => (0, i.jsx)(x.Z, { look: v.U4.LARGE_BANNER }, e))
                      ]
                  })
              ]
          });
}
function B(e) {
    let { onClickAppCard: t } = (0, v.cG)(e);
    return (0, i.jsx)(P.Z, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
}
function H() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(N.Z, { title: O.intl.string(O.t['0hKkS0']) }),
            (0, i.jsx)('div', {
                className: S.sectionContentContainer,
                children: L.map((e) => (0, i.jsx)(E.Z, {}, e))
            }),
            (0, i.jsx)(N.Z, { title: O.intl.string(O.t.PHjkRE) }),
            (0, i.jsx)('div', {
                className: S.sectionContentContainer,
                children: R.map((e) => (0, i.jsx)(E.Z, {}, e))
            })
        ]
    });
}
