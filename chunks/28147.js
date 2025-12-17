n.d(t, { Z: () => Z }), n(388685);
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
    p = n(177653),
    _ = n(585483),
    m = n(499254),
    h = n(541099),
    g = n(827498),
    E = n(392370),
    b = n(98880),
    y = n(804307),
    O = n(520315),
    v = n(532309),
    S = n(561160),
    I = n(41558),
    T = n(106771),
    C = n(79984),
    A = n(314734),
    N = n(981631),
    P = n(388032),
    R = n(425838);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = Array(6)
        .fill(0)
        .map((e, t) => t),
    M = [, , ,].fill(0).map((e, t) => t),
    k = [, , , ,].fill(0).map((e, t) => t),
    U = 4,
    G = 5;
function Z(e) {
    return (0, r.jsx)(F, D({}, e));
}
function F(e) {
    let { context: t, query: n, entrypoint: a, isScrollCloseToBottom: l } = e,
        c = a === g._b.TEXT,
        u = a === g._b.TEXT,
        {
            loading: d,
            isEmptyState: f,
            commandResults: _,
            hasCommandResults: m,
            applicationResults: h,
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
        l && b === p.M.FETCHED && O();
    }, [O, b, l]);
    let v = null == b || b === p.M.FETCHING,
        I = i.useMemo(() => {
            let e = h.map((e) => ({
                    application: e,
                    installOnDemand: !0,
                })),
                t = new Set(
                    h.map((e) => {
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
        }, [y, h]),
        T = I.length > 0,
        C = f && !T && !v;
    return d
        ? (0, r.jsx)(W, {})
        : C
          ? (0, r.jsx)(S.A, {
                type: g.LG.SEARCH_EMPTY,
                searchQuery: n,
                textContent: a === g._b.TEXT ? P.intl.string(P.t.LSNOYf) : P.intl.string(P.t.Clu7Qh),
            })
          : (0, r.jsxs)("div", {
                children: [
                    m &&
                        (0, r.jsx)(B, {
                            context: t,
                            commandResults: _,
                            query: n,
                        }),
                    (T || v) &&
                        (0, r.jsx)(H, {
                            context: t,
                            applicationResults: I,
                            includePlaceholder: v,
                            query: n,
                            searchesBots: u,
                        }),
                ],
            });
}
function B(e) {
    var t, n;
    let { context: a, commandResults: o, query: s } = e,
        p = o.length > U,
        E = i.useMemo(() => (p ? o.slice(0, U) : o), [o, p]),
        [b, y] = i.useState(!1),
        v = null != (t = (0, l.Z)(b)) ? t : b,
        S = i.useCallback(() => y((e) => !e), []),
        C = (null != (n = (0, l.Z)(s)) ? n : s)[0] !== s[0],
        w = b && !C;
    i.useLayoutEffect(() => y(!1), [C]);
    let {
        ref: D,
        isTransitioning: x,
        onTransitionEnd: L,
    } = (0, O.Z)({
        key: s,
        isExpanded: w,
        durationMs: 200,
        maxAnimationHeight: A.K7,
    });
    i.useEffect(() => {
        !v &&
            b &&
            (0, c.yw)(N.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: g.L3.SEARCH,
                source: h.Z.entrypoint(),
                num: o.length,
            });
    }, [o.length, v, b]);
    let j = w || x,
        M = w ? I.Z.buttonTypes.VIEW_LESS : I.Z.buttonTypes.VIEW_MORE,
        k = j ? o : E;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(I.Z, {
                title: P.intl.string(P.t["0hKkS+"]),
                buttonType: M,
                onClickViewButton: p ? S : void 0,
            }),
            (0, r.jsx)("div", {
                className: R.sectionContentContainer,
                ref: D,
                onTransitionEnd: L,
                children: k.map((e, t) => {
                    let { command: n, application: i, section: o } = e;
                    return (0, r.jsx)(
                        T.Z,
                        {
                            command: n,
                            application: i,
                            query: s,
                            searchResultsPosition: t,
                            onClick: () => {
                                let e = h.Z.entrypoint();
                                m.y(g.ti.DISMISSED),
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
                                        _.S.dispatch(N.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.channel.id }));
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
        className: R.searchOpenAppDetailAppCard,
        ref: (e) => {
            t.current = e;
        },
        children: (0, r.jsx)(
            b.kA,
            L(D({}, e), {
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
                  (0, r.jsx)(I.Z, { title: P.intl.string(P.t.PHjkRE) }),
                  (0, r.jsxs)("div", {
                      className: R.sectionContentContainer,
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
                          i && M.map((e) => (0, r.jsx)(C.Z, {}, e)),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(I.Z, { title: P.intl.string(P.t.shUONg) }),
                  (0, r.jsxs)("div", {
                      className: R.sectionActivitiesContentContainer,
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
                          i && k.map((e) => (0, r.jsx)(y.Z, { look: b.U4.LARGE_BANNER }, e)),
                      ],
                  }),
              ],
          });
}
function Y(e) {
    let { onClickAppCard: t } = (0, b.cG)(e);
    return (0, r.jsx)(T.Z, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
}
function W() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(I.Z, { title: P.intl.string(P.t["0hKkS+"]) }),
            (0, r.jsx)("div", {
                className: R.sectionContentContainer,
                children: j.map((e) => (0, r.jsx)(C.Z, {}, e)),
            }),
            (0, r.jsx)(I.Z, { title: P.intl.string(P.t.PHjkRE) }),
            (0, r.jsx)("div", {
                className: R.sectionContentContainer,
                children: M.map((e) => (0, r.jsx)(C.Z, {}, e)),
            }),
        ],
    });
}
