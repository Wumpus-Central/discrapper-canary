n.d(t, { Z: () => O }), n(266796), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(442837),
    o = n(481060),
    l = n(970606),
    s = n(122051),
    c = n(650774),
    d = n(430824),
    u = n(496675),
    m = n(693546),
    p = n(246364),
    f = n(98493),
    x = n(985159),
    h = n(328977),
    b = n(412222),
    j = n(223312),
    _ = n(571728),
    g = n(572940),
    v = n(80487),
    C = n(146463),
    y = n(981631),
    N = n(388032),
    T = n(9375);
function I(e) {
    let { guild: t } = e;
    return (0, r.jsxs)('div', {
        className: T.setupHeader,
        children: [
            (0, r.jsxs)('div', {
                className: T.previewContainer,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-lg/bold',
                        children: N.NW.string(N.t.aOQWKi)
                    }),
                    (0, r.jsxs)(o.zxk, {
                        color: o.zxk.Colors.TRANSPARENT,
                        onClick: () => {
                            (0, o.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e('99916'), n.e('80026'), n.e('92531')]).then(n.bind(n, 645264));
                                return (n) => {
                                    var a, i;
                                    return (0, r.jsx)(
                                        e,
                                        ((a = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    r.forEach(function (t) {
                                                        var r;
                                                        (r = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = r);
                                                    });
                                            }
                                            return e;
                                        })({}, n)),
                                        (i = i =
                                            {
                                                guildId: t.id,
                                                isPreview: !0
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(i)).forEach(function (e) {
                                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                                              }),
                                        a)
                                    );
                                };
                            });
                        },
                        size: o.PhG.SMALL,
                        'aria-label': N.NW.string(N.t.rqfRdX),
                        innerClassName: T.previewButton,
                        children: [
                            (0, r.jsx)(o.tEF, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            N.NW.string(N.t.rqfRdX)
                        ]
                    })
                ]
            }),
            (0, r.jsx)(o.Text, {
                className: T.description,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: N.NW.format(N.t.Ty8RcH, { guildName: t.name })
            })
        ]
    });
}
function w(e) {
    var t, n;
    let { guildId: w, isSidebarOpen: O } = e,
        P = a.useRef(null),
        [R, E] = a.useState((0, x.z)({ guildId: w })),
        S = (0, b.C)({ guildId: w }),
        B = (0, h.L)({ guildId: w }),
        k = null != (t = (0, _.A)({ guildId: w })) ? t : 0,
        { guildJoinRequests: F } = (0, j.j)({
            guildId: w,
            applicationStatus: 'REVIEW_APPLICATION' === R ? p.wB.SUBMITTED : R,
            sortOrder: S
        }),
        q = (0, i.e7)([d.Z], () => d.Z.getGuild(w), [w]),
        Z = (0, i.e7)([c.Z], () => c.Z.getMemberCount(w)),
        A = null != q && (null != Z ? Z : 0) >= q.maxMembers,
        { fetchNextPage: W } = (0, f.m)({
            guildId: w,
            guildJoinRequests: F
        }),
        D = (0, i.e7)([u.Z], () => u.Z.can(y.Plq.KICK_MEMBERS, q)),
        M = a.useRef(!1);
    M.current || ((M.current = !0), W(S, 'REVIEW_APPLICATION' === R ? p.wB.SUBMITTED : R)),
        a.useEffect(() => {
            D || E('REVIEW_APPLICATION');
        }, [D]);
    let U = a.useRef(!1);
    a.useEffect(() => {
        U.current = !0;
    }, [S, R]),
        a.useEffect(() => {
            if (U.current && 0 !== F.length && 'REVIEW_APPLICATION' !== R) {
                var e;
                (U.current = !1), m.Z.setSelectedGuildJoinRequest(w, F[0]), null == (e = P.current) || e.scrollToTop();
            }
        }, [w, F, B, R]);
    let L = a.useCallback(
            async (e) => {
                'REVIEW_APPLICATION' !== R && S !== e && (m.Z.setSelectedSortOrder(w, e), await W(e, R));
            },
            [R, S, w, W]
        ),
        z = a.useCallback(
            async (e) => {
                R !== e &&
                    (E(e),
                    (0, l.Q2)({
                        guildId: w,
                        source: y.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                        tab: e
                    }),
                    m.Z.setSelectedGuildJoinRequest(w, null),
                    'REVIEW_APPLICATION' !== e && (m.Z.setSelectedApplicationTab(w, e), await W(S, e)));
            },
            [R, S, w, W]
        ),
        J = a.useCallback(async () => {
            var e;
            if ('REVIEW_APPLICATION' === R) return;
            let t = null == (e = P.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await W(S, R));
        }, [R, S, W]),
        G = null != (n = null == q ? void 0 : q.hasFeature(y.oNc.CLAN)) && n;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.Z, {
                currentTab: R,
                onTabItemSelect: z,
                pendingGuildJoinRequestsTotal: k,
                showSetupTab: G,
                canActionJoinRequests: D,
                isSidebarOpen: O
            }),
            (0, r.jsx)('div', {
                className: T.content,
                children:
                    'REVIEW_APPLICATION' === R
                        ? null != q
                            ? (0, r.jsx)(o.zJl, {
                                  children: (0, r.jsxs)('div', {
                                      className: T.scrollerContent,
                                      children: [
                                          (0, r.jsx)(I, { guild: q }),
                                          (0, r.jsx)(s.Z, {
                                              guild: q,
                                              isClanContext: !0
                                          })
                                      ]
                                  })
                              })
                            : null
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  D &&
                                      A &&
                                      (0, r.jsx)(o.Wn, {
                                          messageType: o.QYI.WARNING,
                                          textVariant: 'text-sm/medium',
                                          className: T.headerWarning,
                                          children: N.NW.format(N.t.h10yUl, { count: null == q ? void 0 : q.maxMembers })
                                      }),
                                  (0, r.jsx)('div', {
                                      className: T.listControls,
                                      children: (0, r.jsx)(g.Z, {
                                          className: T.sortSelect,
                                          sortOrder: S,
                                          onSortChange: L
                                      })
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      className: T.description,
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: N.NW.string(N.t.OCorGR)
                                  }),
                                  (0, r.jsx)(C.Z, {
                                      applicationStatus: R,
                                      guildJoinRequests: F,
                                      guildId: w,
                                      onScroll: J,
                                      listRef: P,
                                      atMaxMemberCapacity: A
                                  })
                              ]
                          })
            })
        ]
    });
}
let O = a.memo(function (e) {
    let { guildId: t, isSidebarOpen: n } = e;
    return (0, r.jsx)(w, {
        guildId: t,
        isSidebarOpen: n
    });
});
