n.d(t, { Z: () => k }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(209173),
    s = n(110924),
    c = n(367907),
    d = n(555573),
    u = n(895924),
    p = n(583027),
    m = n(177653),
    f = n(585483),
    h = n(499254),
    b = n(541099),
    x = n(827498),
    C = n(392370),
    _ = n(98880),
    v = n(804307),
    y = n(520315),
    N = n(532309),
    g = n(561160),
    j = n(41558),
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
    w = [, , ,].fill(0).map((e, t) => t),
    R = [, , , ,].fill(0).map((e, t) => t);
function k(e) {
    return (0, i.jsx)(Z, T({}, e));
}
function Z(e) {
    let { context: t, query: n, entrypoint: l, isScrollCloseToBottom: s } = e,
        c = l === x._b.TEXT,
        d = l === x._b.TEXT,
        {
            loading: u,
            isEmptyState: p,
            commandResults: f,
            hasCommandResults: h,
            applicationResults: b
        } = (0, C.pe)({
            context: t,
            query: n,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: d
        }),
        {
            fetchState: _,
            applicationResults: v,
            fetchNextPage: y
        } = (0, C.Q2)({
            query: n,
            context: t,
            fetches: !0,
            pageLimit: 5,
            entrypoint: l
        });
    r.useEffect(() => {
        s && _ === m.M.FETCHED && y();
    }, [y, _, s]);
    let N = null == _ || _ === m.M.FETCHING,
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
                ...a().compact(
                    v.map((e) =>
                        e.type === o.s.CONNECTION || t.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0
                              }
                    )
                )
            ];
        }, [v, b]),
        P = j.length > 0,
        E = p && !P && !N;
    return u
        ? (0, i.jsx)(B, {})
        : E
          ? (0, i.jsx)(g.A, {
                type: x.LG.SEARCH_EMPTY,
                searchQuery: n,
                textContent: l === x._b.TEXT ? O.NW.string(O.t.LSNOYW) : O.NW.string(O.t.Clu7Qk)
            })
          : (0, i.jsxs)('div', {
                children: [
                    h &&
                        (0, i.jsx)(M, {
                            context: t,
                            commandResults: f,
                            query: n
                        }),
                    (P || N) &&
                        (0, i.jsx)(D, {
                            context: t,
                            applicationResults: j,
                            includePlaceholder: N,
                            query: n,
                            searchesBots: d
                        })
                ]
            });
}
function M(e) {
    var t, n;
    let { context: l, commandResults: a, query: o } = e,
        m = a.length > 4,
        C = r.useMemo(() => (m ? a.slice(0, 4) : a), [a, m]),
        [_, v] = r.useState(!1),
        N = null != (t = (0, s.Z)(_)) ? t : _,
        g = r.useCallback(() => v((e) => !e), []),
        E = (null != (n = (0, s.Z)(o)) ? n : o)[0] !== o[0],
        T = _ && !E;
    r.useLayoutEffect(() => v(!1), [E]);
    let {
        ref: L,
        isTransitioning: w,
        onTransitionEnd: R
    } = (0, y.Z)({
        key: o,
        isExpanded: T,
        durationMs: 200,
        maxAnimationHeight: A.K7
    });
    r.useEffect(() => {
        !N &&
            _ &&
            (0, c.yw)(I.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: x.L3.SEARCH,
                source: b.Z.entrypoint(),
                num: a.length
            });
    }, [a.length, N, _]);
    let k = T || w,
        Z = T ? j.Z.buttonTypes.VIEW_LESS : j.Z.buttonTypes.VIEW_MORE,
        M = k ? a : C;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(j.Z, {
                title: O.NW.string(O.t['0hKkS0']),
                buttonType: Z,
                onClickViewButton: m ? g : void 0
            }),
            (0, i.jsx)('div', {
                className: S.sectionContentContainer,
                ref: L,
                onTransitionEnd: R,
                children: M.map((e, t) => {
                    let { command: n, application: r, section: a } = e;
                    return (0, i.jsx)(
                        P.Z,
                        {
                            command: n,
                            application: r,
                            query: o,
                            searchResultsPosition: t,
                            onClick: () => {
                                let e = b.Z.entrypoint();
                                h.yT(x.ti.DISMISSED),
                                    (0, p.Mo)({
                                        command: n,
                                        location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: x.L3.SEARCH
                                    }),
                                    'channel' === l.type &&
                                        (d.Po({
                                            channelId: l.channel.id,
                                            command: n,
                                            section: a,
                                            location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: o.length,
                                            sectionName: x.L3.SEARCH,
                                            query: o,
                                            searchResultsPosition: t,
                                            source: e
                                        }),
                                        f.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.channel.id }));
                            }
                        },
                        n.id
                    );
                })
            })
        ]
    });
}
function W(e) {
    var t, n;
    let { trackSearchResultsItemImpressionRef: r } = (0, N.Z)({
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
            _.kA,
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
    let { context: t, applicationResults: n, includePlaceholder: r, query: l, searchesBots: a } = e;
    return a
        ? (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(j.Z, { title: O.NW.string(O.t.PHjkRE) }),
                  (0, i.jsxs)('div', {
                      className: S.sectionContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: r, installOnDemand: a } = e;
                              return (0, i.jsx)(
                                  U,
                                  {
                                      context: t,
                                      application: r,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: x.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: l
                                  },
                                  r.id
                              );
                          }),
                          r && w.map((e) => (0, i.jsx)(E.Z, {}, e))
                      ]
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(j.Z, { title: O.NW.string(O.t.shUONj) }),
                  (0, i.jsxs)('div', {
                      className: S.sectionActivitiesContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: r, installOnDemand: a } = e;
                              return (0, i.jsx)(
                                  W,
                                  {
                                      context: t,
                                      application: r,
                                      look: _.U4.LARGE_BANNER,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: x.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: l
                                  },
                                  r.id
                              );
                          }),
                          r && R.map((e) => (0, i.jsx)(v.Z, { look: _.U4.LARGE_BANNER }, e))
                      ]
                  })
              ]
          });
}
function U(e) {
    let { onClickAppCard: t, onClickAppCardFriends: n } = (0, _.cG)(e);
    return (0, i.jsx)(P.Z, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
        onClickAppCardFriends: n
    });
}
function B() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(j.Z, { title: O.NW.string(O.t['0hKkS0']) }),
            (0, i.jsx)('div', {
                className: S.sectionContentContainer,
                children: L.map((e) => (0, i.jsx)(E.Z, {}, e))
            }),
            (0, i.jsx)(j.Z, { title: O.NW.string(O.t.PHjkRE) }),
            (0, i.jsx)('div', {
                className: S.sectionContentContainer,
                children: w.map((e) => (0, i.jsx)(E.Z, {}, e))
            })
        ]
    });
}
