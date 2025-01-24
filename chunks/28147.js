t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(392711),
    a = t.n(o),
    r = t(209173),
    s = t(110924),
    c = t(367907),
    d = t(555573),
    u = t(895924),
    m = t(809547),
    p = t(583027),
    h = t(585483),
    f = t(499254),
    C = t(541099),
    v = t(827498),
    x = t(392370),
    _ = t(98880),
    N = t(804307),
    A = t(520315),
    I = t(532309),
    E = t(561160),
    g = t(41558),
    b = t(106771),
    P = t(79984),
    y = t(314734),
    S = t(981631),
    j = t(388032),
    T = t(722029);
let L = Array(6)
        .fill(0)
        .map((e, n) => n),
    R = [, , ,].fill(0).map((e, n) => n),
    M = [, , , ,].fill(0).map((e, n) => n);
function Z(e) {
    return (0, i.jsx)(k, { ...e });
}
function k(e) {
    let { context: n, query: t, entrypoint: o, isScrollCloseToBottom: s } = e,
        c = o === v._b.TEXT,
        d = o === v._b.TEXT,
        {
            loading: u,
            isEmptyState: p,
            commandResults: h,
            hasCommandResults: f,
            applicationResults: C
        } = (0, x.pe)({
            context: n,
            query: t,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: d
        }),
        {
            fetchState: _,
            applicationResults: N,
            fetchNextPage: A
        } = (0, x.Q2)({
            query: t,
            context: n,
            fetches: !0,
            pageLimit: 5,
            entrypoint: o
        });
    l.useEffect(() => {
        s && _ === m.M.FETCHED && A();
    }, [A, _, s]);
    let I = null == _ || _ === m.M.FETCHING,
        g = l.useMemo(() => {
            let e = C.map((e) => ({
                    application: e,
                    installOnDemand: !0
                })),
                n = new Set(
                    C.map((e) => {
                        let { id: n } = e;
                        return n;
                    })
                );
            return [
                ...e,
                ...a().compact(
                    N.map((e) =>
                        e.type === r.s.CONNECTION || n.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0
                              }
                    )
                )
            ];
        }, [N, C]),
        b = g.length > 0,
        P = p && !b && !I;
    return u
        ? (0, i.jsx)(w, {})
        : P
          ? (0, i.jsx)(E.A, {
                type: v.LG.SEARCH_EMPTY,
                searchQuery: t,
                textContent: o === v._b.TEXT ? j.intl.string(j.t.LSNOYW) : j.intl.string(j.t.Clu7Qk)
            })
          : (0, i.jsxs)('div', {
                children: [
                    f &&
                        (0, i.jsx)(O, {
                            context: n,
                            commandResults: h,
                            query: t
                        }),
                    (b || I) &&
                        (0, i.jsx)(B, {
                            context: n,
                            applicationResults: g,
                            includePlaceholder: I,
                            query: t,
                            searchesBots: d
                        })
                ]
            });
}
function O(e) {
    var n, t;
    let { context: o, commandResults: a, query: r } = e,
        m = a.length > 4,
        x = l.useMemo(() => (m ? a.slice(0, 4) : a), [a, m]),
        [_, N] = l.useState(!1),
        I = null !== (n = (0, s.Z)(_)) && void 0 !== n ? n : _,
        E = l.useCallback(() => N((e) => !e), []),
        P = (null !== (t = (0, s.Z)(r)) && void 0 !== t ? t : r)[0] !== r[0],
        L = _ && !P;
    l.useLayoutEffect(() => N(!1), [P]);
    let {
        ref: R,
        isTransitioning: M,
        onTransitionEnd: Z
    } = (0, A.Z)({
        key: r,
        isExpanded: L,
        durationMs: 200,
        maxAnimationHeight: y.K7
    });
    l.useEffect(() => {
        !I &&
            _ &&
            (0, c.yw)(S.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: v.L3.SEARCH,
                source: C.Z.entrypoint(),
                num: a.length
            });
    }, [a.length, I, _]);
    let k = L || M,
        O = L ? g.Z.buttonTypes.VIEW_LESS : g.Z.buttonTypes.VIEW_MORE,
        U = k ? a : x;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.Z, {
                title: j.intl.string(j.t['0hKkS0']),
                buttonType: O,
                onClickViewButton: m ? E : void 0
            }),
            (0, i.jsx)('div', {
                className: T.sectionContentContainer,
                ref: R,
                onTransitionEnd: Z,
                children: U.map((e, n) => {
                    let { command: t, application: l, section: a } = e;
                    return (0, i.jsx)(
                        b.Z,
                        {
                            command: t,
                            application: l,
                            query: r,
                            searchResultsPosition: n,
                            onClick: () => {
                                let e = C.Z.entrypoint();
                                f.yT(v.ti.DISMISSED),
                                    (0, p.Mo)({
                                        command: t,
                                        location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: v.L3.SEARCH
                                    }),
                                    'channel' === o.type &&
                                        (d.Po({
                                            channelId: o.channel.id,
                                            command: t,
                                            section: a,
                                            location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: r.length,
                                            sectionName: v.L3.SEARCH,
                                            query: r,
                                            searchResultsPosition: n,
                                            source: e
                                        }),
                                        h.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: o.channel.id }));
                            }
                        },
                        t.id
                    );
                })
            })
        ]
    });
}
function U(e) {
    let { trackSearchResultsItemImpressionRef: n } = (0, I.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, i.jsx)('div', {
        className: T.searchOpenAppDetailAppCard,
        ref: (e) => (n.current = e),
        children: (0, i.jsx)(_.kA, {
            ...e,
            tracksImpression: !1,
            enableVideoBanner: !0
        })
    });
}
function B(e) {
    let { context: n, applicationResults: t, includePlaceholder: l, query: o, searchesBots: a } = e;
    return a
        ? (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(g.Z, { title: j.intl.string(j.t.PHjkRE) }),
                  (0, i.jsxs)('div', {
                      className: T.sectionContentContainer,
                      children: [
                          t.map((e, t) => {
                              let { application: l, installOnDemand: a } = e;
                              return (0, i.jsx)(
                                  D,
                                  {
                                      context: n,
                                      application: l,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: v.L3.SEARCH,
                                      resultsPosition: t,
                                      installOnDemand: a,
                                      query: o
                                  },
                                  l.id
                              );
                          }),
                          l && R.map((e) => (0, i.jsx)(P.Z, {}, e))
                      ]
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(g.Z, { title: j.intl.string(j.t.shUONj) }),
                  (0, i.jsxs)('div', {
                      className: T.sectionActivitiesContentContainer,
                      children: [
                          t.map((e, t) => {
                              let { application: l, installOnDemand: a } = e;
                              return (0, i.jsx)(
                                  U,
                                  {
                                      context: n,
                                      application: l,
                                      look: _.U4.LARGE_BANNER,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: v.L3.SEARCH,
                                      resultsPosition: t,
                                      installOnDemand: a,
                                      query: o
                                  },
                                  l.id
                              );
                          }),
                          l && M.map((e) => (0, i.jsx)(N.Z, { look: _.U4.LARGE_BANNER }, e))
                      ]
                  })
              ]
          });
}
function D(e) {
    let n = (0, _.cG)(e);
    return (0, i.jsx)(b.Z, {
        application: e.application,
        onClick: n,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
}
function w() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.Z, { title: j.intl.string(j.t['0hKkS0']) }),
            (0, i.jsx)('div', {
                className: T.sectionContentContainer,
                children: L.map((e) => (0, i.jsx)(P.Z, {}, e))
            }),
            (0, i.jsx)(g.Z, { title: j.intl.string(j.t.PHjkRE) }),
            (0, i.jsx)('div', {
                className: T.sectionContentContainer,
                children: R.map((e) => (0, i.jsx)(P.Z, {}, e))
            })
        ]
    });
}
