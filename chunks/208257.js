n.d(t, { Z: () => w }), n(47120);
var a = n(200651),
    i = n(192379),
    r = n(442837),
    l = n(481060),
    o = n(970606),
    s = n(122051),
    c = n(650774),
    d = n(430824),
    u = n(496675),
    m = n(693546),
    x = n(246364),
    h = n(98493),
    _ = n(985159),
    p = n(328977),
    f = n(412222),
    C = n(223312),
    j = n(571728),
    v = n(572940),
    b = n(80487),
    g = n(146463),
    T = n(981631),
    I = n(388032),
    R = n(613201);
function N(e) {
    let { guild: t } = e;
    return (0, a.jsxs)('div', {
        className: R.setupHeader,
        children: [
            (0, a.jsxs)('div', {
                className: R.previewContainer,
                children: [
                    (0, a.jsx)(l.X6q, {
                        variant: 'heading-lg/bold',
                        children: I.intl.string(I.t.aOQWKi)
                    }),
                    (0, a.jsxs)(l.zxk, {
                        color: l.zxk.Colors.TRANSPARENT,
                        onClick: () => {
                            (0, l.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e('99916'), n.e('81038'), n.e('52657')]).then(n.bind(n, 645264));
                                return (n) =>
                                    (0, a.jsx)(e, {
                                        ...n,
                                        guildId: t.id,
                                        isPreview: !0
                                    });
                            });
                        },
                        size: l.PhG.SMALL,
                        'aria-label': I.intl.string(I.t.rqfRdX),
                        innerClassName: R.previewButton,
                        children: [
                            (0, a.jsx)(l.tEF, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            I.intl.string(I.t.rqfRdX)
                        ]
                    })
                ]
            }),
            (0, a.jsx)(l.Text, {
                className: R.description,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: I.intl.format(I.t.xpB4Ym, { guildName: t.name })
            })
        ]
    });
}
function E(e) {
    var t, n;
    let { guildId: E, isSidebarOpen: w } = e,
        B = i.useRef(null),
        [S, P] = i.useState((0, _.z)({ guildId: E })),
        F = (0, f.C)({ guildId: E }),
        y = (0, p.L)({ guildId: E }),
        q = null !== (t = (0, j.A)({ guildId: E })) && void 0 !== t ? t : 0,
        { guildJoinRequests: Z } = (0, C.j)({
            guildId: E,
            applicationStatus: 'REVIEW_APPLICATION' === S ? x.wB.SUBMITTED : S,
            sortOrder: F
        }),
        k = (0, r.e7)([d.Z], () => d.Z.getGuild(E), [E]),
        A = (0, r.e7)([c.Z], () => c.Z.getMemberCount(E)),
        M = null != k && (null != A ? A : 0) >= k.maxMembers,
        { fetchNextPage: L } = (0, h.m)({
            guildId: E,
            guildJoinRequests: Z
        }),
        U = (0, r.e7)([u.Z], () => u.Z.can(T.Plq.KICK_MEMBERS, k)),
        D = i.useRef(!1);
    D.current || ((D.current = !0), L(F, 'REVIEW_APPLICATION' === S ? x.wB.SUBMITTED : S)),
        i.useEffect(() => {
            U || P('REVIEW_APPLICATION');
        }, [U]);
    let z = i.useRef(!1);
    i.useEffect(() => {
        z.current = !0;
    }, [F, S]),
        i.useEffect(() => {
            if (z.current && 0 !== Z.length && 'REVIEW_APPLICATION' !== S) {
                var e;
                (z.current = !1), m.Z.setSelectedGuildJoinRequest(E, Z[0]), null === (e = B.current) || void 0 === e || e.scrollToTop();
            }
        }, [E, Z, y, S]);
    let J = i.useCallback(
            async (e) => {
                'REVIEW_APPLICATION' !== S && F !== e && (m.Z.setSelectedSortOrder(E, e), await L(e, S));
            },
            [S, F, E, L]
        ),
        O = i.useCallback(
            async (e) => {
                S !== e &&
                    (P(e),
                    (0, o.Q2)({
                        guildId: E,
                        source: T.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                        tab: e
                    }),
                    m.Z.setSelectedGuildJoinRequest(E, null),
                    'REVIEW_APPLICATION' !== e && (m.Z.setSelectedApplicationTab(E, e), await L(F, e)));
            },
            [S, F, E, L]
        ),
        W = i.useCallback(async () => {
            var e;
            if ('REVIEW_APPLICATION' === S) return;
            let t = null === (e = B.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await L(F, S));
        }, [S, F, L]),
        G = null !== (n = null == k ? void 0 : k.hasFeature(T.oNc.CLAN)) && void 0 !== n && n;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(b.Z, {
                currentTab: S,
                onTabItemSelect: O,
                pendingGuildJoinRequestsTotal: q,
                showSetupTab: G,
                canActionJoinRequests: U,
                isSidebarOpen: w
            }),
            (0, a.jsx)('div', {
                className: R.content,
                children:
                    'REVIEW_APPLICATION' === S
                        ? null != k
                            ? (0, a.jsx)(l.zJl, {
                                  children: (0, a.jsxs)('div', {
                                      className: R.scrollerContent,
                                      children: [
                                          (0, a.jsx)(N, { guild: k }),
                                          (0, a.jsx)(s.Z, {
                                              guild: k,
                                              isClanContext: !0
                                          })
                                      ]
                                  })
                              })
                            : null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  U &&
                                      M &&
                                      (0, a.jsx)(l.Wn, {
                                          messageType: l.QYI.WARNING,
                                          textVariant: 'text-sm/medium',
                                          className: R.headerWarning,
                                          children: I.intl.format(I.t.o3mLzM, { count: null == k ? void 0 : k.maxMembers })
                                      }),
                                  (0, a.jsx)('div', {
                                      className: R.listControls,
                                      children: (0, a.jsx)(v.Z, {
                                          className: R.sortSelect,
                                          sortOrder: F,
                                          onSortChange: J
                                      })
                                  }),
                                  (0, a.jsx)(l.Text, {
                                      className: R.description,
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: I.intl.string(I.t.OCorGR)
                                  }),
                                  (0, a.jsx)(g.Z, {
                                      applicationStatus: S,
                                      guildJoinRequests: Z,
                                      guildId: E,
                                      onScroll: W,
                                      listRef: B,
                                      atMaxMemberCapacity: M
                                  })
                              ]
                          })
            })
        ]
    });
}
let w = i.memo(function (e) {
    let { guildId: t, isSidebarOpen: n } = e;
    return (0, a.jsx)(E, {
        guildId: t,
        isSidebarOpen: n
    });
});
