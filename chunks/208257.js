n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(970606),
    c = n(122051),
    s = n(650774),
    d = n(430824),
    u = n(496675),
    m = n(693546),
    f = n(246364),
    x = n(98493),
    b = n(985159),
    h = n(328977),
    p = n(412222),
    C = n(223312),
    _ = n(571728),
    g = n(572940),
    v = n(80487),
    j = n(146463),
    I = n(981631),
    T = n(388032),
    R = n(991154);
function E(e) {
    let { guild: t } = e;
    return (0, i.jsxs)('div', {
        className: R.setupHeader,
        children: [
            (0, i.jsxs)('div', {
                className: R.previewContainer,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-lg/bold',
                        children: T.intl.string(T.t.aOQWKi)
                    }),
                    (0, i.jsxs)(o.Button, {
                        color: o.Button.Colors.TRANSPARENT,
                        onClick: () => {
                            (0, o.openModalLazy)(async () => {
                                let { default: e } = await n.e('52657').then(n.bind(n, 645264));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        guildId: t.id,
                                        isPreview: !0
                                    });
                            });
                        },
                        size: o.ButtonSizes.SMALL,
                        'aria-label': T.intl.string(T.t.rqfRdX),
                        innerClassName: R.previewButton,
                        children: [
                            (0, i.jsx)(o.EyeIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            T.intl.string(T.t.rqfRdX)
                        ]
                    })
                ]
            }),
            (0, i.jsx)(o.Text, {
                className: R.description,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: T.intl.format(T.t.xpB4Ym, { guildName: t.name })
            })
        ]
    });
}
function S(e) {
    var t, n;
    let { guildId: S, isSidebarOpen: A } = e,
        w = r.useRef(null),
        [N, P] = r.useState((0, b.z)({ guildId: S })),
        B = (0, p.C)({ guildId: S }),
        Z = (0, h.L)({ guildId: S }),
        k = null !== (t = (0, _.A)({ guildId: S })) && void 0 !== t ? t : 0,
        { guildJoinRequests: M } = (0, C.j)({
            guildId: S,
            applicationStatus: 'REVIEW_APPLICATION' === N ? f.wB.SUBMITTED : N,
            sortOrder: B
        }),
        y = (0, a.e7)([d.Z], () => d.Z.getGuild(S), [S]),
        F = (0, a.e7)([s.Z], () => s.Z.getMemberCount(S)),
        U = null != y && (null != F ? F : 0) >= y.maxMembers,
        { fetchNextPage: L } = (0, x.m)({
            guildId: S,
            guildJoinRequests: M
        }),
        D = (0, a.e7)([u.Z], () => u.Z.can(I.Plq.KICK_MEMBERS, y)),
        O = r.useRef(!1);
    !O.current && ((O.current = !0), L(B, 'REVIEW_APPLICATION' === N ? f.wB.SUBMITTED : N)),
        r.useEffect(() => {
            !D && P('REVIEW_APPLICATION');
        }, [D]);
    let J = r.useRef(!1);
    r.useEffect(() => {
        J.current = !0;
    }, [B, N]),
        r.useEffect(() => {
            if (J.current && 0 !== M.length && 'REVIEW_APPLICATION' !== N) {
                var e;
                (J.current = !1), m.Z.setSelectedGuildJoinRequest(S, M[0]), null === (e = w.current) || void 0 === e || e.scrollToTop();
            }
        }, [S, M, Z, N]);
    let q = r.useCallback(
            async (e) => {
                if ('REVIEW_APPLICATION' !== N) B !== e && (m.Z.setSelectedSortOrder(S, e), await L(e, N));
            },
            [N, B, S, L]
        ),
        H = r.useCallback(
            async (e) => {
                if (N !== e) {
                    if (
                        (P(e),
                        (0, l.Q2)({
                            guildId: S,
                            source: I.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                            tab: e
                        }),
                        m.Z.setSelectedGuildJoinRequest(S, null),
                        'REVIEW_APPLICATION' !== e)
                    )
                        m.Z.setSelectedApplicationTab(S, e), await L(B, e);
                }
            },
            [N, B, S, L]
        ),
        V = r.useCallback(async () => {
            var e;
            if ('REVIEW_APPLICATION' === N) return;
            let t = null === (e = w.current) || void 0 === e ? void 0 : e.getScrollerState();
            if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await L(B, N));
        }, [N, B, L]),
        W = null !== (n = null == y ? void 0 : y.hasFeature(I.oNc.CLAN)) && void 0 !== n && n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.Z, {
                currentTab: N,
                onTabItemSelect: H,
                pendingGuildJoinRequestsTotal: k,
                showSetupTab: W,
                canActionJoinRequests: D,
                isSidebarOpen: A
            }),
            (0, i.jsx)('div', {
                className: R.content,
                children:
                    'REVIEW_APPLICATION' === N
                        ? null != y
                            ? (0, i.jsx)(o.ScrollerThin, {
                                  children: (0, i.jsxs)('div', {
                                      className: R.scrollerContent,
                                      children: [
                                          (0, i.jsx)(E, { guild: y }),
                                          (0, i.jsx)(c.Z, {
                                              guild: y,
                                              isClanContext: !0
                                          })
                                      ]
                                  })
                              })
                            : null
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  D &&
                                      U &&
                                      (0, i.jsx)(o.HelpMessage, {
                                          messageType: o.HelpMessageTypes.WARNING,
                                          textVariant: 'text-sm/medium',
                                          className: R.headerWarning,
                                          children: T.intl.format(T.t.o3mLzM, { count: null == y ? void 0 : y.maxMembers })
                                      }),
                                  (0, i.jsx)('div', {
                                      className: R.listControls,
                                      children: (0, i.jsx)(g.Z, {
                                          className: R.sortSelect,
                                          sortOrder: B,
                                          onSortChange: q
                                      })
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      className: R.description,
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: T.intl.string(T.t.OCorGR)
                                  }),
                                  (0, i.jsx)(j.Z, {
                                      applicationStatus: N,
                                      guildJoinRequests: M,
                                      guildId: S,
                                      onScroll: V,
                                      listRef: w,
                                      atMaxMemberCapacity: U
                                  })
                              ]
                          })
            })
        ]
    });
}
t.Z = r.memo(function (e) {
    let { guildId: t, isSidebarOpen: n } = e;
    return (0, i.jsx)(S, {
        guildId: t,
        isSidebarOpen: n
    });
});
