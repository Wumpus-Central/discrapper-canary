n.d(t, { Z: () => k }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(209173),
    c = n(110924),
    s = n(367907),
    u = n(555573),
    d = n(895924),
    p = n(583027),
    m = n(177653),
    f = n(585483),
    h = n(499254),
    b = n(541099),
    C = n(827498),
    x = n(392370),
    _ = n(98880),
    y = n(804307),
    v = n(520315),
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
    let { context: t, query: n, entrypoint: l, isScrollCloseToBottom: c } = e,
        s = l === C._b.TEXT,
        u = l === C._b.TEXT,
        {
            loading: d,
            isEmptyState: p,
            commandResults: f,
            hasCommandResults: h,
            applicationResults: b
        } = (0, x.pe)({
            context: t,
            query: n,
            searchesActivities: !0,
            searchesCommands: s,
            searchesBots: u
        }),
        {
            fetchState: _,
            applicationResults: y,
            fetchNextPage: v
        } = (0, x.Q2)({
            query: n,
            context: t,
            fetches: !0,
            pageLimit: 5,
            entrypoint: l
        });
    r.useEffect(() => {
        c && _ === m.M.FETCHED && v();
    }, [v, _, c]);
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
                    y.map((e) =>
                        e.type === o.s.CONNECTION || t.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0
                              }
                    )
                )
            ];
        }, [y, b]),
        P = j.length > 0,
        E = p && !P && !N;
    return d
        ? (0, i.jsx)(U, {})
        : E
          ? (0, i.jsx)(g.A, {
                type: C.LG.SEARCH_EMPTY,
                searchQuery: n,
                textContent: l === C._b.TEXT ? O.NW.string(O.t.LSNOYW) : O.NW.string(O.t.Clu7Qk)
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
                        (0, i.jsx)(W, {
                            context: t,
                            applicationResults: j,
                            includePlaceholder: N,
                            query: n,
                            searchesBots: u
                        })
                ]
            });
}
function M(e) {
    var t, n;
    let { context: l, commandResults: a, query: o } = e,
        m = a.length > 4,
        x = r.useMemo(() => (m ? a.slice(0, 4) : a), [a, m]),
        [_, y] = r.useState(!1),
        N = null != (t = (0, c.Z)(_)) ? t : _,
        g = r.useCallback(() => y((e) => !e), []),
        E = (null != (n = (0, c.Z)(o)) ? n : o)[0] !== o[0],
        T = _ && !E;
    r.useLayoutEffect(() => y(!1), [E]);
    let {
        ref: L,
        isTransitioning: w,
        onTransitionEnd: R
    } = (0, v.Z)({
        key: o,
        isExpanded: T,
        durationMs: 200,
        maxAnimationHeight: A.K7
    });
    r.useEffect(() => {
        !N &&
            _ &&
            (0, s.yw)(I.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: C.L3.SEARCH,
                source: b.Z.entrypoint(),
                num: a.length
            });
    }, [a.length, N, _]);
    let k = T || w,
        Z = T ? j.Z.buttonTypes.VIEW_LESS : j.Z.buttonTypes.VIEW_MORE,
        M = k ? a : x;
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
                                h.yT(C.ti.DISMISSED),
                                    (0, p.Mo)({
                                        command: n,
                                        location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: C.L3.SEARCH
                                    }),
                                    'channel' === l.type &&
                                        (u.Po({
                                            channelId: l.channel.id,
                                            command: n,
                                            section: a,
                                            location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: o.length,
                                            sectionName: C.L3.SEARCH,
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
function D(e) {
    var t, n;
    let { trackSearchResultsItemImpressionRef: r } = (0, N.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, i.jsx)('div', {
        className: S.searchOpenAppDetailAppCard,
        ref: (e) => (r.current = e),
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
function W(e) {
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
                                  B,
                                  {
                                      context: t,
                                      application: r,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: C.L3.SEARCH,
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
                                  D,
                                  {
                                      context: t,
                                      application: r,
                                      look: _.U4.LARGE_BANNER,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: C.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: l
                                  },
                                  r.id
                              );
                          }),
                          r && R.map((e) => (0, i.jsx)(y.Z, { look: _.U4.LARGE_BANNER }, e))
                      ]
                  })
              ]
          });
}
function B(e) {
    let { onClickAppCard: t, onClickAppCardFriends: n } = (0, _.cG)(e);
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
