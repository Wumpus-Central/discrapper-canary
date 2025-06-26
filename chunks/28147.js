n.d(t, { Z: () => w }), n(388685);
var l = n(255367),
    i = n(73800),
    r = n(392711),
    a = n.n(r),
    o = n(209173),
    s = n(110924),
    c = n(367907),
    u = n(555573),
    d = n(895924),
    p = n(583027),
    m = n(177653),
    f = n(585483),
    h = n(499254),
    v = n(541099),
    y = n(827498),
    x = n(392370),
    b = n(98880),
    g = n(804307),
    j = n(520315),
    N = n(532309),
    C = n(561160),
    E = n(41558),
    P = n(106771),
    O = n(79984),
    A = n(314734),
    I = n(981631),
    _ = n(388032),
    S = n(946908);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let L = Array(6)
        .fill(0)
        .map((e, t) => t),
    R = [, , ,].fill(0).map((e, t) => t),
    Z = [, , , ,].fill(0).map((e, t) => t);
function w(e) {
    return (0, l.jsx)(k, T({}, e));
}
function k(e) {
    let { context: t, query: n, entrypoint: r, isScrollCloseToBottom: s } = e,
        c = r === y._b.TEXT,
        u = r === y._b.TEXT,
        {
            loading: d,
            isEmptyState: p,
            commandResults: f,
            hasCommandResults: h,
            applicationResults: v
        } = (0, x.pe)({
            context: t,
            query: n,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: u
        }),
        {
            fetchState: b,
            applicationResults: g,
            fetchNextPage: j
        } = (0, x.Q2)({
            query: n,
            context: t,
            fetches: !0,
            pageLimit: 5,
            entrypoint: r
        });
    i.useEffect(() => {
        s && b === m.M.FETCHED && j();
    }, [j, b, s]);
    let N = null == b || b === m.M.FETCHING,
        E = i.useMemo(() => {
            let e = v.map((e) => ({
                    application: e,
                    installOnDemand: !0
                })),
                t = new Set(
                    v.map((e) => {
                        let { id: t } = e;
                        return t;
                    })
                );
            return [
                ...e,
                ...a().compact(
                    g.map((e) =>
                        e.type === o.s.CONNECTION || t.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0
                              }
                    )
                )
            ];
        }, [g, v]),
        P = E.length > 0,
        O = p && !P && !N;
    return d
        ? (0, l.jsx)(V, {})
        : O
          ? (0, l.jsx)(C.A, {
                type: y.LG.SEARCH_EMPTY,
                searchQuery: n,
                textContent: r === y._b.TEXT ? _.intl.string(_.t.LSNOYW) : _.intl.string(_.t.Clu7Qk)
            })
          : (0, l.jsxs)('div', {
                children: [
                    h &&
                        (0, l.jsx)(M, {
                            context: t,
                            commandResults: f,
                            query: n
                        }),
                    (P || N) &&
                        (0, l.jsx)(D, {
                            context: t,
                            applicationResults: E,
                            includePlaceholder: N,
                            query: n,
                            searchesBots: u
                        })
                ]
            });
}
function M(e) {
    var t, n;
    let { context: r, commandResults: a, query: o } = e,
        m = a.length > 4,
        x = i.useMemo(() => (m ? a.slice(0, 4) : a), [a, m]),
        [b, g] = i.useState(!1),
        N = null != (t = (0, s.Z)(b)) ? t : b,
        C = i.useCallback(() => g((e) => !e), []),
        O = (null != (n = (0, s.Z)(o)) ? n : o)[0] !== o[0],
        T = b && !O;
    i.useLayoutEffect(() => g(!1), [O]);
    let {
        ref: L,
        isTransitioning: R,
        onTransitionEnd: Z
    } = (0, j.Z)({
        key: o,
        isExpanded: T,
        durationMs: 200,
        maxAnimationHeight: A.K7
    });
    i.useEffect(() => {
        !N &&
            b &&
            (0, c.yw)(I.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: y.L3.SEARCH,
                source: v.Z.entrypoint(),
                num: a.length
            });
    }, [a.length, N, b]);
    let w = T || R,
        k = T ? E.Z.buttonTypes.VIEW_LESS : E.Z.buttonTypes.VIEW_MORE,
        M = w ? a : x;
    return (0, l.jsxs)('div', {
        children: [
            (0, l.jsx)(E.Z, {
                title: _.intl.string(_.t['0hKkS0']),
                buttonType: k,
                onClickViewButton: m ? C : void 0
            }),
            (0, l.jsx)('div', {
                className: S.sectionContentContainer,
                ref: L,
                onTransitionEnd: Z,
                children: M.map((e, t) => {
                    let { command: n, application: i, section: a } = e;
                    return (0, l.jsx)(
                        P.Z,
                        {
                            command: n,
                            application: i,
                            query: o,
                            searchResultsPosition: t,
                            onClick: () => {
                                let e = v.Z.entrypoint();
                                h.yT(y.ti.DISMISSED),
                                    (0, p.Mo)({
                                        command: n,
                                        location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: y.L3.SEARCH
                                    }),
                                    'channel' === r.type &&
                                        (u.Po({
                                            channelId: r.channel.id,
                                            command: n,
                                            section: a,
                                            location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: o.length,
                                            sectionName: y.L3.SEARCH,
                                            query: o,
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
function U(e) {
    var t, n;
    let { trackSearchResultsItemImpressionRef: i } = (0, N.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, l.jsx)('div', {
        className: S.searchOpenAppDetailAppCard,
        ref: (e) => {
            i.current = e;
        },
        children: (0, l.jsx)(
            b.kA,
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
                          var l = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, l);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    });
}
function D(e) {
    let { context: t, applicationResults: n, includePlaceholder: i, query: r, searchesBots: a } = e;
    return a
        ? (0, l.jsxs)('div', {
              children: [
                  (0, l.jsx)(E.Z, { title: _.intl.string(_.t.PHjkRE) }),
                  (0, l.jsxs)('div', {
                      className: S.sectionContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: i, installOnDemand: a } = e;
                              return (0, l.jsx)(
                                  H,
                                  {
                                      context: t,
                                      application: i,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: y.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: r
                                  },
                                  i.id
                              );
                          }),
                          i && R.map((e) => (0, l.jsx)(O.Z, {}, e))
                      ]
                  })
              ]
          })
        : (0, l.jsxs)('div', {
              children: [
                  (0, l.jsx)(E.Z, { title: _.intl.string(_.t.shUONj) }),
                  (0, l.jsxs)('div', {
                      className: S.sectionActivitiesContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: i, installOnDemand: a } = e;
                              return (0, l.jsx)(
                                  U,
                                  {
                                      context: t,
                                      application: i,
                                      look: b.U4.LARGE_BANNER,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: y.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: r
                                  },
                                  i.id
                              );
                          }),
                          i && Z.map((e) => (0, l.jsx)(g.Z, { look: b.U4.LARGE_BANNER }, e))
                      ]
                  })
              ]
          });
}
function H(e) {
    let { onClickAppCard: t } = (0, b.cG)(e);
    return (0, l.jsx)(P.Z, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
}
function V() {
    return (0, l.jsxs)('div', {
        children: [
            (0, l.jsx)(E.Z, { title: _.intl.string(_.t['0hKkS0']) }),
            (0, l.jsx)('div', {
                className: S.sectionContentContainer,
                children: L.map((e) => (0, l.jsx)(O.Z, {}, e))
            }),
            (0, l.jsx)(E.Z, { title: _.intl.string(_.t.PHjkRE) }),
            (0, l.jsx)('div', {
                className: S.sectionContentContainer,
                children: R.map((e) => (0, l.jsx)(O.Z, {}, e))
            })
        ]
    });
}
