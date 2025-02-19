n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    o = n.n(r),
    a = n(209173),
    s = n(110924),
    c = n(367907),
    u = n(555573),
    d = n(895924),
    m = n(809547),
    p = n(583027),
    h = n(585483),
    f = n(499254),
    v = n(541099),
    N = n(827498),
    x = n(392370),
    y = n(98880),
    b = n(804307),
    E = n(520315),
    C = n(532309),
    j = n(561160),
    g = n(41558),
    P = n(106771),
    A = n(79984),
    O = n(314734),
    I = n(981631),
    _ = n(388032),
    S = n(862802);
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
    M = [, , , ,].fill(0).map((e, t) => t);
function Z(e) {
    return (0, i.jsx)(k, T({}, e));
}
function k(e) {
    let { context: t, query: n, entrypoint: r, isScrollCloseToBottom: s } = e,
        c = r === N._b.TEXT,
        u = r === N._b.TEXT,
        {
            loading: d,
            isEmptyState: p,
            commandResults: h,
            hasCommandResults: f,
            applicationResults: v
        } = (0, x.pe)({
            context: t,
            query: n,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: u
        }),
        {
            fetchState: y,
            applicationResults: b,
            fetchNextPage: E
        } = (0, x.Q2)({
            query: n,
            context: t,
            fetches: !0,
            pageLimit: 5,
            entrypoint: r
        });
    l.useEffect(() => {
        s && y === m.M.FETCHED && E();
    }, [E, y, s]);
    let C = null == y || y === m.M.FETCHING,
        g = l.useMemo(() => {
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
                ...o().compact(
                    b.map((e) =>
                        e.type === a.s.CONNECTION || t.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0
                              }
                    )
                )
            ];
        }, [b, v]),
        P = g.length > 0,
        A = p && !P && !C;
    return d
        ? (0, i.jsx)(H, {})
        : A
          ? (0, i.jsx)(j.A, {
                type: N.LG.SEARCH_EMPTY,
                searchQuery: n,
                textContent: r === N._b.TEXT ? _.NW.string(_.t.LSNOYW) : _.NW.string(_.t.Clu7Qk)
            })
          : (0, i.jsxs)('div', {
                children: [
                    f &&
                        (0, i.jsx)(w, {
                            context: t,
                            commandResults: h,
                            query: n
                        }),
                    (P || C) &&
                        (0, i.jsx)(D, {
                            context: t,
                            applicationResults: g,
                            includePlaceholder: C,
                            query: n,
                            searchesBots: u
                        })
                ]
            });
}
function w(e) {
    var t, n;
    let { context: r, commandResults: o, query: a } = e,
        m = o.length > 4,
        x = l.useMemo(() => (m ? o.slice(0, 4) : o), [o, m]),
        [y, b] = l.useState(!1),
        C = null !== (t = (0, s.Z)(y)) && void 0 !== t ? t : y,
        j = l.useCallback(() => b((e) => !e), []),
        A = (null !== (n = (0, s.Z)(a)) && void 0 !== n ? n : a)[0] !== a[0],
        T = y && !A;
    l.useLayoutEffect(() => b(!1), [A]);
    let {
        ref: L,
        isTransitioning: R,
        onTransitionEnd: M
    } = (0, E.Z)({
        key: a,
        isExpanded: T,
        durationMs: 200,
        maxAnimationHeight: O.K7
    });
    l.useEffect(() => {
        !C &&
            y &&
            (0, c.yw)(I.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: N.L3.SEARCH,
                source: v.Z.entrypoint(),
                num: o.length
            });
    }, [o.length, C, y]);
    let Z = T || R,
        k = T ? g.Z.buttonTypes.VIEW_LESS : g.Z.buttonTypes.VIEW_MORE,
        w = Z ? o : x;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.Z, {
                title: _.NW.string(_.t['0hKkS0']),
                buttonType: k,
                onClickViewButton: m ? j : void 0
            }),
            (0, i.jsx)('div', {
                className: S.sectionContentContainer,
                ref: L,
                onTransitionEnd: M,
                children: w.map((e, t) => {
                    let { command: n, application: l, section: o } = e;
                    return (0, i.jsx)(
                        P.Z,
                        {
                            command: n,
                            application: l,
                            query: a,
                            searchResultsPosition: t,
                            onClick: () => {
                                let e = v.Z.entrypoint();
                                f.yT(N.ti.DISMISSED),
                                    (0, p.Mo)({
                                        command: n,
                                        location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: N.L3.SEARCH
                                    }),
                                    'channel' === r.type &&
                                        (u.Po({
                                            channelId: r.channel.id,
                                            command: n,
                                            section: o,
                                            location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: a.length,
                                            sectionName: N.L3.SEARCH,
                                            query: a,
                                            searchResultsPosition: t,
                                            source: e
                                        }),
                                        h.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: r.channel.id }));
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
    let { trackSearchResultsItemImpressionRef: l } = (0, C.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, i.jsx)('div', {
        className: S.searchOpenAppDetailAppCard,
        ref: (e) => (l.current = e),
        children: (0, i.jsx)(
            y.kA,
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
function D(e) {
    let { context: t, applicationResults: n, includePlaceholder: l, query: r, searchesBots: o } = e;
    return o
        ? (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(g.Z, { title: _.NW.string(_.t.PHjkRE) }),
                  (0, i.jsxs)('div', {
                      className: S.sectionContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: o } = e;
                              return (0, i.jsx)(
                                  W,
                                  {
                                      context: t,
                                      application: l,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: N.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: o,
                                      query: r
                                  },
                                  l.id
                              );
                          }),
                          l && R.map((e) => (0, i.jsx)(A.Z, {}, e))
                      ]
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(g.Z, { title: _.NW.string(_.t.shUONj) }),
                  (0, i.jsxs)('div', {
                      className: S.sectionActivitiesContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: o } = e;
                              return (0, i.jsx)(
                                  U,
                                  {
                                      context: t,
                                      application: l,
                                      look: y.U4.LARGE_BANNER,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: N.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: o,
                                      query: r
                                  },
                                  l.id
                              );
                          }),
                          l && M.map((e) => (0, i.jsx)(b.Z, { look: y.U4.LARGE_BANNER }, e))
                      ]
                  })
              ]
          });
}
function W(e) {
    let t = (0, y.cG)(e);
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
            (0, i.jsx)(g.Z, { title: _.NW.string(_.t['0hKkS0']) }),
            (0, i.jsx)('div', {
                className: S.sectionContentContainer,
                children: L.map((e) => (0, i.jsx)(A.Z, {}, e))
            }),
            (0, i.jsx)(g.Z, { title: _.NW.string(_.t.PHjkRE) }),
            (0, i.jsx)('div', {
                className: S.sectionContentContainer,
                children: R.map((e) => (0, i.jsx)(A.Z, {}, e))
            })
        ]
    });
}
