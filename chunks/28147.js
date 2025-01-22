t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(392711),
    o = t.n(a),
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
    _ = t(392370),
    x = t(98880),
    N = t(804307),
    I = t(520315),
    A = t(532309),
    E = t(561160),
    g = t(41558),
    b = t(106771),
    P = t(79984),
    S = t(314734),
    j = t(981631),
    y = t(388032),
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
    let { channel: n, query: t, entrypoint: a, isScrollCloseToBottom: s } = e,
        c = a === v._b.TEXT,
        d = a === v._b.TEXT,
        {
            loading: u,
            isEmptyState: p,
            commandResults: h,
            hasCommandResults: f,
            applicationResults: C
        } = (0, _.pe)({
            channel: n,
            query: t,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: d
        }),
        {
            fetchState: x,
            applicationResults: N,
            fetchNextPage: I
        } = (0, _.Q2)({
            query: t,
            channel: n,
            fetches: !0,
            pageLimit: 5,
            entrypoint: a
        });
    l.useEffect(() => {
        s && x === m.M.FETCHED && I();
    }, [I, x, s]);
    let A = null == x || x === m.M.FETCHING,
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
                ...o().compact(
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
        P = p && !b && !A;
    return u
        ? (0, i.jsx)(w, {})
        : P
          ? (0, i.jsx)(E.A, {
                type: v.LG.SEARCH_EMPTY,
                searchQuery: t,
                textContent: a === v._b.TEXT ? y.intl.string(y.t.LSNOYW) : y.intl.string(y.t.Clu7Qk)
            })
          : (0, i.jsxs)('div', {
                children: [
                    f &&
                        (0, i.jsx)(O, {
                            channel: n,
                            commandResults: h,
                            query: t
                        }),
                    (b || A) &&
                        (0, i.jsx)(B, {
                            applicationResults: g,
                            includePlaceholder: A,
                            query: t,
                            searchesBots: d
                        })
                ]
            });
}
function O(e) {
    var n, t;
    let { channel: a, commandResults: o, query: r } = e,
        m = o.length > 4,
        _ = l.useMemo(() => (m ? o.slice(0, 4) : o), [o, m]),
        [x, N] = l.useState(!1),
        A = null !== (n = (0, s.Z)(x)) && void 0 !== n ? n : x,
        E = l.useCallback(() => N((e) => !e), []),
        P = (null !== (t = (0, s.Z)(r)) && void 0 !== t ? t : r)[0] !== r[0],
        L = x && !P;
    l.useLayoutEffect(() => N(!1), [P]);
    let {
        ref: R,
        isTransitioning: M,
        onTransitionEnd: Z
    } = (0, I.Z)({
        key: r,
        isExpanded: L,
        durationMs: 200,
        maxAnimationHeight: S.K7
    });
    l.useEffect(() => {
        !A &&
            x &&
            (0, c.yw)(j.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: v.L3.SEARCH,
                source: C.Z.entrypoint(),
                num: o.length
            });
    }, [o.length, A, x]);
    let k = L || M,
        O = L ? g.Z.buttonTypes.VIEW_LESS : g.Z.buttonTypes.VIEW_MORE,
        U = k ? o : _;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.Z, {
                title: y.intl.string(y.t['0hKkS0']),
                buttonType: O,
                onClickViewButton: m ? E : void 0
            }),
            (0, i.jsx)('div', {
                className: T.sectionContentContainer,
                ref: R,
                onTransitionEnd: Z,
                children: U.map((e, n) => {
                    let { command: t, application: l, section: o } = e;
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
                                    d.Po({
                                        channelId: a.id,
                                        command: t,
                                        section: o,
                                        location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        triggerSection: void 0,
                                        queryLength: r.length,
                                        sectionName: v.L3.SEARCH,
                                        query: r,
                                        searchResultsPosition: n,
                                        source: e
                                    }),
                                    h.S.dispatch(j.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.id });
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
    let { trackSearchResultsItemImpressionRef: n } = (0, A.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition
    });
    return (0, i.jsx)('div', {
        className: T.searchOpenAppDetailAppCard,
        ref: (e) => (n.current = e),
        children: (0, i.jsx)(x.kA, {
            ...e,
            tracksImpression: !1,
            enableVideoBanner: !0
        })
    });
}
function B(e) {
    let { applicationResults: n, includePlaceholder: t, query: l, searchesBots: a } = e;
    return a
        ? (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(g.Z, { title: y.intl.string(y.t.PHjkRE) }),
                  (0, i.jsxs)('div', {
                      className: T.sectionContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: t, installOnDemand: a } = e;
                              return (0, i.jsx)(
                                  D,
                                  {
                                      application: t,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: v.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: l
                                  },
                                  t.id
                              );
                          }),
                          t && R.map((e) => (0, i.jsx)(P.Z, {}, e))
                      ]
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(g.Z, { title: y.intl.string(y.t.shUONj) }),
                  (0, i.jsxs)('div', {
                      className: T.sectionActivitiesContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: t, installOnDemand: a } = e;
                              return (0, i.jsx)(
                                  U,
                                  {
                                      application: t,
                                      look: x.U4.LARGE_BANNER,
                                      location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: v.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: l
                                  },
                                  t.id
                              );
                          }),
                          t && M.map((e) => (0, i.jsx)(N.Z, { look: x.U4.LARGE_BANNER }, e))
                      ]
                  })
              ]
          });
}
function D(e) {
    let n = (0, x.cG)(e);
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
            (0, i.jsx)(g.Z, { title: y.intl.string(y.t['0hKkS0']) }),
            (0, i.jsx)('div', {
                className: T.sectionContentContainer,
                children: L.map((e) => (0, i.jsx)(P.Z, {}, e))
            }),
            (0, i.jsx)(g.Z, { title: y.intl.string(y.t.PHjkRE) }),
            (0, i.jsx)('div', {
                className: T.sectionContentContainer,
                children: R.map((e) => (0, i.jsx)(P.Z, {}, e))
            })
        ]
    });
}
