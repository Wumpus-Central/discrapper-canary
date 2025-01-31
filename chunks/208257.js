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
    _ = n(246364),
    x = n(98493),
    f = n(985159),
    h = n(328977),
    p = n(412222),
    b = n(223312),
    g = n(571728),
    C = n(572940),
    v = n(80487),
    j = n(146463),
    I = n(981631),
    T = n(388032),
    R = n(991154);
function E(e) {
    let { guild: t } = e;
    return (0, a.jsxs)('div', {
        className: R.setupHeader,
        children: [
            (0, a.jsxs)('div', {
                className: R.previewContainer,
                children: [
                    (0, a.jsx)(l.X6q, {
                        variant: 'heading-lg/bold',
                        children: T.intl.string(T.t.aOQWKi)
                    }),
                    (0, a.jsxs)(l.zxk, {
                        color: l.zxk.Colors.TRANSPARENT,
                        onClick: () => {
                            (0, l.ZDy)(async () => {
                                let { default: e } = await n.e('52657').then(n.bind(n, 645264));
                                return (n) =>
                                    (0, a.jsx)(e, {
                                        ...n,
                                        guildId: t.id,
                                        isPreview: !0
                                    });
                            });
                        },
                        size: l.PhG.SMALL,
                        'aria-label': T.intl.string(T.t.rqfRdX),
                        innerClassName: R.previewButton,
                        children: [
                            (0, a.jsx)(l.tEF, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            T.intl.string(T.t.rqfRdX)
                        ]
                    })
                ]
            }),
            (0, a.jsx)(l.Text, {
                className: R.description,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: T.intl.format(T.t.xpB4Ym, { guildName: t.name })
            })
        ]
    });
}
function P(e) {
    var t, n;
    let { guildId: P, isSidebarOpen: w } = e,
        N = i.useRef(null),
        [S, A] = i.useState((0, f.z)({ guildId: P })),
        Z = (0, p.C)({ guildId: P }),
        B = (0, h.L)({ guildId: P }),
        k = null !== (t = (0, g.A)({ guildId: P })) && void 0 !== t ? t : 0,
        { guildJoinRequests: y } = (0, b.j)({
            guildId: P,
            applicationStatus: 'REVIEW_APPLICATION' === S ? _.wB.SUBMITTED : S,
            sortOrder: Z
        }),
        F = (0, r.e7)([d.Z], () => d.Z.getGuild(P), [P]),
        M = (0, r.e7)([c.Z], () => c.Z.getMemberCount(P)),
        U = null != F && (null != M ? M : 0) >= F.maxMembers,
        { fetchNextPage: D } = (0, x.m)({
            guildId: P,
            guildJoinRequests: y
        }),
        L = (0, r.e7)([u.Z], () => u.Z.can(I.Plq.KICK_MEMBERS, F)),
        q = i.useRef(!1);
    q.current || ((q.current = !0), D(Z, 'REVIEW_APPLICATION' === S ? _.wB.SUBMITTED : S)),
        i.useEffect(() => {
            L || A('REVIEW_APPLICATION');
        }, [L]);
    let J = i.useRef(!1);
    i.useEffect(() => {
        J.current = !0;
    }, [Z, S]),
        i.useEffect(() => {
            if (J.current && 0 !== y.length && 'REVIEW_APPLICATION' !== S) {
                var e;
                (J.current = !1), m.Z.setSelectedGuildJoinRequest(P, y[0]), null === (e = N.current) || void 0 === e || e.scrollToTop();
            }
        }, [P, y, B, S]);
    let O = i.useCallback(
            async (e) => {
                'REVIEW_APPLICATION' !== S && Z !== e && (m.Z.setSelectedSortOrder(P, e), await D(e, S));
            },
            [S, Z, P, D]
        ),
        V = i.useCallback(
            async (e) => {
                S !== e &&
                    (A(e),
                    (0, o.Q2)({
                        guildId: P,
                        source: I.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                        tab: e
                    }),
                    m.Z.setSelectedGuildJoinRequest(P, null),
                    'REVIEW_APPLICATION' !== e && (m.Z.setSelectedApplicationTab(P, e), await D(Z, e)));
            },
            [S, Z, P, D]
        ),
        z = i.useCallback(async () => {
            var e;
            if ('REVIEW_APPLICATION' === S) return;
            let t = null === (e = N.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await D(Z, S));
        }, [S, Z, D]),
        W = null !== (n = null == F ? void 0 : F.hasFeature(I.oNc.CLAN)) && void 0 !== n && n;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.Z, {
                currentTab: S,
                onTabItemSelect: V,
                pendingGuildJoinRequestsTotal: k,
                showSetupTab: W,
                canActionJoinRequests: L,
                isSidebarOpen: w
            }),
            (0, a.jsx)('div', {
                className: R.content,
                children:
                    'REVIEW_APPLICATION' === S
                        ? null != F
                            ? (0, a.jsx)(l.zJl, {
                                  children: (0, a.jsxs)('div', {
                                      className: R.scrollerContent,
                                      children: [
                                          (0, a.jsx)(E, { guild: F }),
                                          (0, a.jsx)(s.Z, {
                                              guild: F,
                                              isClanContext: !0
                                          })
                                      ]
                                  })
                              })
                            : null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  L &&
                                      U &&
                                      (0, a.jsx)(l.Wn, {
                                          messageType: l.QYI.WARNING,
                                          textVariant: 'text-sm/medium',
                                          className: R.headerWarning,
                                          children: T.intl.format(T.t.o3mLzM, { count: null == F ? void 0 : F.maxMembers })
                                      }),
                                  (0, a.jsx)('div', {
                                      className: R.listControls,
                                      children: (0, a.jsx)(C.Z, {
                                          className: R.sortSelect,
                                          sortOrder: Z,
                                          onSortChange: O
                                      })
                                  }),
                                  (0, a.jsx)(l.Text, {
                                      className: R.description,
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: T.intl.string(T.t.OCorGR)
                                  }),
                                  (0, a.jsx)(j.Z, {
                                      applicationStatus: S,
                                      guildJoinRequests: y,
                                      guildId: P,
                                      onScroll: z,
                                      listRef: N,
                                      atMaxMemberCapacity: U
                                  })
                              ]
                          })
            })
        ]
    });
}
let w = i.memo(function (e) {
    let { guildId: t, isSidebarOpen: n } = e;
    return (0, a.jsx)(P, {
        guildId: t,
        isSidebarOpen: n
    });
});
