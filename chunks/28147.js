n.d(t, { Z: () => w }), n(388685);
var i = n(951288),
    l = n(647438),
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
    g = n(392370),
    x = n(98880),
    b = n(804307),
    N = n(520315),
    j = n(532309),
    C = n(561160),
    E = n(41558),
    P = n(106771),
    A = n(79984),
    _ = n(314734),
    O = n(981631),
    I = n(388032),
    S = n(399235);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
    Z = [, , , ,].fill(0).map((e, t) => t);
function w(e) {
    return (0, i.jsx)(k, T({}, e));
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
            applicationResults: v,
        } = (0, g.pe)({
            context: t,
            query: n,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: u,
        }),
        {
            fetchState: x,
            applicationResults: b,
            fetchNextPage: N,
        } = (0, g.Q2)({
            query: n,
            context: t,
            fetches: !0,
            pageLimit: 5,
            entrypoint: r,
        });
    l.useEffect(() => {
        s && x === m.M.FETCHED && N();
    }, [N, x, s]);
    let j = null == x || x === m.M.FETCHING,
        E = l.useMemo(() => {
            let e = v.map((e) => ({
                    application: e,
                    installOnDemand: !0,
                })),
                t = new Set(
                    v.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                );
            return [
                ...e,
                ...a().compact(
                    b.map((e) =>
                        e.type === o.s.CONNECTION || t.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0,
                              },
                    ),
                ),
            ];
        }, [b, v]),
        P = E.length > 0,
        A = p && !P && !j;
    return d
        ? (0, i.jsx)(B, {})
        : A
          ? (0, i.jsx)(C.A, {
                type: y.LG.SEARCH_EMPTY,
                searchQuery: n,
                textContent: r === y._b.TEXT ? I.intl.string(I.t.LSNOYf) : I.intl.string(I.t.Clu7Qh),
            })
          : (0, i.jsxs)("div", {
                children: [
                    h &&
                        (0, i.jsx)(M, {
                            context: t,
                            commandResults: f,
                            query: n,
                        }),
                    (P || j) &&
                        (0, i.jsx)(D, {
                            context: t,
                            applicationResults: E,
                            includePlaceholder: j,
                            query: n,
                            searchesBots: u,
                        }),
                ],
            });
}
function M(e) {
    var t, n;
    let { context: r, commandResults: a, query: o } = e,
        m = a.length > 4,
        g = l.useMemo(() => (m ? a.slice(0, 4) : a), [a, m]),
        [x, b] = l.useState(!1),
        j = null != (t = (0, s.Z)(x)) ? t : x,
        C = l.useCallback(() => b((e) => !e), []),
        A = (null != (n = (0, s.Z)(o)) ? n : o)[0] !== o[0],
        T = x && !A;
    l.useLayoutEffect(() => b(!1), [A]);
    let {
        ref: L,
        isTransitioning: R,
        onTransitionEnd: Z,
    } = (0, N.Z)({
        key: o,
        isExpanded: T,
        durationMs: 200,
        maxAnimationHeight: _.K7,
    });
    l.useEffect(() => {
        !j &&
            x &&
            (0, c.yw)(O.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: y.L3.SEARCH,
                source: v.Z.entrypoint(),
                num: a.length,
            });
    }, [a.length, j, x]);
    let w = T || R,
        k = T ? E.Z.buttonTypes.VIEW_LESS : E.Z.buttonTypes.VIEW_MORE,
        M = w ? a : g;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(E.Z, {
                title: I.intl.string(I.t["0hKkS+"]),
                buttonType: k,
                onClickViewButton: m ? C : void 0,
            }),
            (0, i.jsx)("div", {
                className: S.sectionContentContainer,
                ref: L,
                onTransitionEnd: Z,
                children: M.map((e, t) => {
                    let { command: n, application: l, section: a } = e;
                    return (0, i.jsx)(
                        P.Z,
                        {
                            command: n,
                            application: l,
                            query: o,
                            searchResultsPosition: t,
                            onClick: () => {
                                let e = v.Z.entrypoint();
                                h.y(y.ti.DISMISSED),
                                    (0, p.Mo)({
                                        command: n,
                                        location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: y.L3.SEARCH,
                                    }),
                                    "channel" === r.type &&
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
                                            source: e,
                                        }),
                                        f.S.dispatch(O.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: r.channel.id }));
                            },
                        },
                        n.id,
                    );
                }),
            }),
        ],
    });
}
function U(e) {
    var t, n;
    let { trackSearchResultsItemImpressionRef: l } = (0, j.Z)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
    return (0, i.jsx)("div", {
        className: S.searchOpenAppDetailAppCard,
        ref: (e) => {
            l.current = e;
        },
        children: (0, i.jsx)(
            x.kA,
            ((t = T({}, e)),
            (n = n =
                {
                    tracksImpression: !1,
                    enableVideoBanner: !0,
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
            t),
        ),
    });
}
function D(e) {
    let { context: t, applicationResults: n, includePlaceholder: l, query: r, searchesBots: a } = e;
    return a
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(E.Z, { title: I.intl.string(I.t.PHjkRE) }),
                  (0, i.jsxs)("div", {
                      className: S.sectionContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: a } = e;
                              return (0, i.jsx)(
                                  H,
                                  {
                                      context: t,
                                      application: l,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: y.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: r,
                                  },
                                  l.id,
                              );
                          }),
                          l && R.map((e) => (0, i.jsx)(A.Z, {}, e)),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(E.Z, { title: I.intl.string(I.t.shUONg) }),
                  (0, i.jsxs)("div", {
                      className: S.sectionActivitiesContentContainer,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: a } = e;
                              return (0, i.jsx)(
                                  U,
                                  {
                                      context: t,
                                      application: l,
                                      look: x.U4.LARGE_BANNER,
                                      location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: y.L3.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: r,
                                  },
                                  l.id,
                              );
                          }),
                          l && Z.map((e) => (0, i.jsx)(b.Z, { look: x.U4.LARGE_BANNER }, e)),
                      ],
                  }),
              ],
          });
}
function H(e) {
    let { onClickAppCard: t } = (0, x.cG)(e);
    return (0, i.jsx)(P.Z, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
}
function B() {
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(E.Z, { title: I.intl.string(I.t["0hKkS+"]) }),
            (0, i.jsx)("div", {
                className: S.sectionContentContainer,
                children: L.map((e) => (0, i.jsx)(A.Z, {}, e)),
            }),
            (0, i.jsx)(E.Z, { title: I.intl.string(I.t.PHjkRE) }),
            (0, i.jsx)("div", {
                className: S.sectionContentContainer,
                children: R.map((e) => (0, i.jsx)(A.Z, {}, e)),
            }),
        ],
    });
}
