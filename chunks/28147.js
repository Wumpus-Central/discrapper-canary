n.d(t, { Z: () => B }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(209173),
    l = n(110924),
    c = n(367907),
    u = n(555573),
    d = n(895924),
    f = n(583027),
    _ = n(177653),
    p = n(585483),
    h = n(499254),
    m = n(541099),
    g = n(827498),
    E = n(392370),
    b = n(98880),
    y = n(804307),
    O = n(520315),
    v = n(532309),
    I = n(561160),
    T = n(41558),
    S = n(106771),
    A = n(79984),
    C = n(314734),
    N = n(981631),
    R = n(388032),
    P = n(712658);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = Array(6)
        .fill(0)
        .map((e, t) => t),
    k = [, , ,].fill(0).map((e, t) => t),
    j = [, , , ,].fill(0).map((e, t) => t),
    U = 4,
    G = 5;
function B(e) {
    return (0, r.jsx)(Z, w({}, e));
}
function Z(e) {
    let { context: t, query: n, entrypoint: a, isScrollCloseToBottom: l } = e,
        c = a === g._b.TEXT,
        u = a === g._b.TEXT,
        {
            loading: d,
            isEmptyState: f,
            commandResults: p,
            hasCommandResults: h,
            applicationResults: m,
        } = (0, E.pe)({
            context: t,
            query: n,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: u,
        }),
        {
            fetchState: b,
            applicationResults: y,
            fetchNextPage: O,
        } = (0, E.Q2)({
            query: n,
            context: t,
            fetches: !0,
            pageLimit: G,
            entrypoint: a,
        });
    i.useEffect(() => {
        l && b === _.M.FETCHED && O();
    }, [O, b, l]);
    let v = null == b || b === _.M.FETCHING,
        T = i.useMemo(() => {
            let e = m.map((e) => ({
                    application: e,
                    installOnDemand: !0,
                })),
                t = new Set(
                    m.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                );
            return [
                ...e,
                ...o().compact(
                    y.map((e) =>
                        e.type === s.s.CONNECTION || t.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0,
                              },
                    ),
                ),
            ];
        }, [y, m]),
        S = T.length > 0,
        A = f && !S && !v;
    return d
        ? (0, r.jsx)(W, {})
        : A
          ? (0, r.jsx)(I.A, {
                type: g.LG.SEARCH_EMPTY,
                searchQuery: n,
                textContent: a === g._b.TEXT ? R.intl.string(R.t.LSNOYf) : R.intl.string(R.t.Clu7Qh),
            })
          : (0, r.jsxs)("div", {
                children: [
                    h &&
                        (0, r.jsx)(F, {
                            context: t,
                            commandResults: p,
                            query: n,
                        }),
                    (S || v) &&
                        (0, r.jsx)(H, {
                            context: t,
                            applicationResults: T,
                            includePlaceholder: v,
                            query: n,
                            searchesBots: u,
                        }),
                ],
            });
}
function F(e) {
    var t, n;
    let { context: a, commandResults: o, query: s } = e,
        _ = o.length > U,
        E = i.useMemo(() => (_ ? o.slice(0, U) : o), [o, _]),
        [b, y] = i.useState(!1),
        v = null != (t = (0, l.Z)(b)) ? t : b,
        I = i.useCallback(() => y((e) => !e), []),
        A = (null != (n = (0, l.Z)(s)) ? n : s)[0] !== s[0],
        D = b && !A;
    i.useLayoutEffect(() => y(!1), [A]);
    let {
        ref: w,
        isTransitioning: L,
        onTransitionEnd: x,
    } = (0, O.Z)({
        key: s,
        isExpanded: D,
        durationMs: 200,
        maxAnimationHeight: C.K7,
    });
    i.useEffect(() => {
        !v &&
            b &&
            (0, c.yw)(N.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: g.L3.SEARCH,
                source: m.Z.entrypoint(),
                num: o.length,
            });
    }, [o.length, v, b]);
    let M = D || L,
        k = D ? T.Z.buttonTypes.VIEW_LESS : T.Z.buttonTypes.VIEW_MORE,
        j = M ? o : E;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(T.Z, {
                title: R.intl.string(R.t["0hKkS+"]),
                buttonType: k,
                onClickViewButton: _ ? I : void 0,
            }),
            (0, r.jsx)("div", {
                className: P.sectionContentContainer,
                ref: w,
                onTransitionEnd: x,
                children: j.map((e, t) => {
                    let { command: n, application: i, section: o } = e;
                    return (0, r.jsx)(
                        S.Z,
                        {
                            command: n,
                            application: i,
                            query: s,
                            searchResultsPosition: t,
                            onClick: () => {
                                let e = m.Z.entrypoint();
                                h.y(g.ti.DISMISSED),
                                    (0, f.Mo)({
                                        command: n,
                                        location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: g.L3.SEARCH,
                                    }),
                                    "channel" === a.type &&
                                        (u.Po({
                                            channelId: a.channel.id,
                                            command: n,
                                            section: o,
                                            location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: s.length,
                                            sectionName: g.L3.SEARCH,
                                            query: s,
                                            searchResultsPosition: t,
                                            source: e,
                                        }),
                                        p.S.dispatch(N.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.channel.id }));
                            },
                        },
                        n.id,
                    );
                }),
            }),
        ],
    });
}
function V(e) {
    let { trackSearchResultsItemImpressionRef: t } = (0, v.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
    return (0, r.jsx)("div", {
        className: P.searchOpenAppDetailAppCard,
        ref: (e) => {
            t.current = e;
        },
        children: (0, r.jsx)(
            b.kA,
            x(w({}, e), {
                tracksImpression: !1,
                enableVideoBanner: !0,
            }),
        ),
    });
}
function H(e) {
    let { context: t, applicationResults: n, includePlaceholder: i, query: a, searchesBots: o } = e;
    return o
        ? (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(T.Z, { title: R.intl.string(R.t.PHjkRE) }),
                  (0, r.jsxs)("div", {
                      className: P.sectionContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: i, installOnDemand: o } = e;
                              return (0, r.jsx)(
                                  Y,
                                  {
                                      context: t,
                                      application: i,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: g.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: o,
                                      query: a,
                                  },
                                  i.id,
                              );
                          }),
                          i && k.map((e) => (0, r.jsx)(A.Z, {}, e)),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(T.Z, { title: R.intl.string(R.t.shUONg) }),
                  (0, r.jsxs)("div", {
                      className: P.sectionActivitiesContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: i, installOnDemand: o } = e;
                              return (0, r.jsx)(
                                  V,
                                  {
                                      context: t,
                                      application: i,
                                      look: b.U4.LARGE_BANNER,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: g.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: o,
                                      query: a,
                                  },
                                  i.id,
                              );
                          }),
                          i && j.map((e) => (0, r.jsx)(y.Z, { look: b.U4.LARGE_BANNER }, e)),
                      ],
                  }),
              ],
          });
}
function Y(e) {
    let { onClickAppCard: t } = (0, b.cG)(e);
    return (0, r.jsx)(S.Z, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
}
function W() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(T.Z, { title: R.intl.string(R.t["0hKkS+"]) }),
            (0, r.jsx)("div", {
                className: P.sectionContentContainer,
                children: M.map((e) => (0, r.jsx)(A.Z, {}, e)),
            }),
            (0, r.jsx)(T.Z, { title: R.intl.string(R.t.PHjkRE) }),
            (0, r.jsx)("div", {
                className: P.sectionContentContainer,
                children: k.map((e) => (0, r.jsx)(A.Z, {}, e)),
            }),
        ],
    });
}
