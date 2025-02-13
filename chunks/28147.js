n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    o = n.n(a),
    s = n(209173),
    r = n(110924),
    c = n(367907),
    d = n(555573),
    u = n(895924),
    m = n(809547),
    p = n(583027),
    h = n(585483),
    x = n(499254),
    v = n(541099),
    f = n(827498),
    N = n(392370),
    C = n(98880),
    E = n(804307),
    A = n(520315),
    I = n(532309),
    _ = n(561160),
    g = n(41558),
    P = n(106771),
    y = n(79984),
    j = n(314734),
    T = n(981631),
    S = n(388032),
    L = n(272033);
let b = Array(6)
        .fill(0)
        .map((e, t) => t),
    R = [, , ,].fill(0).map((e, t) => t),
    M = [, , , ,].fill(0).map((e, t) => t);
function Z(e) {
    return (0, i.jsx)(O, { ...e });
}
function O(e) {
    let { context: t, query: n, entrypoint: a, isScrollCloseToBottom: r } = e,
        c = a === f._b.TEXT,
        d = a === f._b.TEXT,
        {
            loading: u,
            isEmptyState: p,
            commandResults: h,
            hasCommandResults: x,
            applicationResults: v
        } = (0, N.pe)({
            context: t,
            query: n,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: d
        }),
        {
            fetchState: C,
            applicationResults: E,
            fetchNextPage: A
        } = (0, N.Q2)({
            query: n,
            context: t,
            fetches: !0,
            pageLimit: 5,
            entrypoint: a
        });
    l.useEffect(() => {
        r && C === m.M.FETCHED && A();
    }, [A, C, r]);
    let I = null == C || C === m.M.FETCHING,
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
                    E.map((e) =>
                        e.type === s.s.CONNECTION || t.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0
                              }
                    )
                )
            ];
        }, [E, v]),
        P = g.length > 0,
        y = p && !P && !I;
    return u
        ? (0, i.jsx)(w, {})
        : y
          ? (0, i.jsx)(_.A, {
                type: f.LG.SEARCH_EMPTY,
                searchQuery: n,
                textContent: a === f._b.TEXT ? S.intl.string(S.t.LSNOYW) : S.intl.string(S.t.Clu7Qk)
            })
          : (0, i.jsxs)('div', {
                children: [
                    x &&
                        (0, i.jsx)(k, {
                            context: t,
                            commandResults: h,
                            query: n
                        }),
                    (P || I) &&
                        (0, i.jsx)(H, {
                            context: t,
                            applicationResults: g,
                            includePlaceholder: I,
                            query: n,
                            searchesBots: d
                        })
                ]
            });
}
function k(e) {
    var t, n;
    let { context: a, commandResults: o, query: s } = e,
        m = o.length > 4,
        N = l.useMemo(() => (m ? o.slice(0, 4) : o), [o, m]),
        [C, E] = l.useState(!1),
        I = null !== (t = (0, r.Z)(C)) && void 0 !== t ? t : C,
        _ = l.useCallback(() => E((e) => !e), []),
        y = (null !== (n = (0, r.Z)(s)) && void 0 !== n ? n : s)[0] !== s[0],
        b = C && !y;
    l.useLayoutEffect(() => E(!1), [y]);
    let {
        ref: R,
        isTransitioning: M,
        onTransitionEnd: Z
    } = (0, A.Z)({
        key: s,
        isExpanded: b,
        durationMs: 200,
        maxAnimationHeight: j.K7
    });
    l.useEffect(() => {
        !I &&
            C &&
            (0, c.yw)(T.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: f.L3.SEARCH,
                source: v.Z.entrypoint(),
                num: o.length
            });
    }, [o.length, I, C]);
    let O = b || M,
        k = b ? g.Z.buttonTypes.VIEW_LESS : g.Z.buttonTypes.VIEW_MORE,
        U = O ? o : N;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.Z, {
                title: S.intl.string(S.t['0hKkS0']),
                buttonType: k,
                onClickViewButton: m ? _ : void 0
            }),
            (0, i.jsx)('div', {
                className: L.sectionContentContainer,
                ref: R,
                onTransitionEnd: Z,
                children: U.map((e, t) => {
                    let { command: n, application: l, section: o } = e;
                    return (0, i.jsx)(
                        P.Z,
                        {
                            command: n,
                            application: l,
                            query: s,
                            searchResultsPosition: t,
                            onClick: () => {
                                let e = v.Z.entrypoint();
                                x.yT(f.ti.DISMISSED),
                                    (0, p.Mo)({
                                        command: n,
                                        location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: f.L3.SEARCH
                                    }),
                                    'channel' === a.type &&
                                        (d.Po({
                                            channelId: a.channel.id,
                                            command: n,
                                            section: o,
                                            location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: s.length,
                                            sectionName: f.L3.SEARCH,
                                            query: s,
                                            searchResultsPosition: t,
                                            source: e
                                        }),
                                        h.S.dispatch(T.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.channel.id }));
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
    let { trackSearchResultsItemImpressionRef: t } = (0, I.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, i.jsx)('div', {
        className: L.searchOpenAppDetailAppCard,
        ref: (e) => (t.current = e),
        children: (0, i.jsx)(C.kA, {
            ...e,
            tracksImpression: !1,
            enableVideoBanner: !0
        })
    });
}
function H(e) {
    let { context: t, applicationResults: n, includePlaceholder: l, query: a, searchesBots: o } = e;
    return o
        ? (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(g.Z, { title: S.intl.string(S.t.PHjkRE) }),
                  (0, i.jsxs)('div', {
                      className: L.sectionContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: o } = e;
                              return (0, i.jsx)(
                                  D,
                                  {
                                      context: t,
                                      application: l,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: f.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: o,
                                      query: a
                                  },
                                  l.id
                              );
                          }),
                          l && R.map((e) => (0, i.jsx)(y.Z, {}, e))
                      ]
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(g.Z, { title: S.intl.string(S.t.shUONj) }),
                  (0, i.jsxs)('div', {
                      className: L.sectionActivitiesContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: o } = e;
                              return (0, i.jsx)(
                                  U,
                                  {
                                      context: t,
                                      application: l,
                                      look: C.U4.LARGE_BANNER,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: f.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: o,
                                      query: a
                                  },
                                  l.id
                              );
                          }),
                          l && M.map((e) => (0, i.jsx)(E.Z, { look: C.U4.LARGE_BANNER }, e))
                      ]
                  })
              ]
          });
}
function D(e) {
    let t = (0, C.cG)(e);
    return (0, i.jsx)(P.Z, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
}
function w() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.Z, { title: S.intl.string(S.t['0hKkS0']) }),
            (0, i.jsx)('div', {
                className: L.sectionContentContainer,
                children: b.map((e) => (0, i.jsx)(y.Z, {}, e))
            }),
            (0, i.jsx)(g.Z, { title: S.intl.string(S.t.PHjkRE) }),
            (0, i.jsx)('div', {
                className: L.sectionContentContainer,
                children: R.map((e) => (0, i.jsx)(y.Z, {}, e))
            })
        ]
    });
}
