l.d(n, { Z: () => P }), l(47120);
var a = l(200651),
    i = l(192379),
    t = l(120356),
    r = l.n(t),
    s = l(399606),
    d = l(481060),
    o = l(749210),
    c = l(131388),
    u = l(367907),
    h = l(644080),
    m = l(984370),
    g = l(6025),
    x = l(433355),
    f = l(626135),
    C = l(526120),
    _ = l(563534),
    v = l(846121),
    Z = l(460347),
    I = l(404488),
    p = l(605276),
    j = l(869764),
    N = l(919318),
    b = l(150512),
    E = l(981631),
    A = l(176505),
    M = l(388032),
    y = l(959454),
    w = l(3114);
let S = I.q + 300 + 64,
    k = i.memo(function (e) {
        let { guild: n } = e;
        return (0, a.jsxs)(m.Z, {
            channelId: A.oC.GUILD_HOME,
            guildId: n.id,
            className: r()(y.title, y.background),
            innerClassname: y.headerBarInner,
            children: [
                (0, a.jsx)(m.Z.Icon, {
                    icon: d.Vy8,
                    'aria-hidden': !0
                }),
                (0, a.jsxs)(m.Z.Title, {
                    children: [(0, a.jsx)(d.nn4, { children: n.name }), M.intl.string(M.t.VbpLyc)]
                })
            ]
        });
    });
function P(e) {
    var n, l;
    let { guild: t, width: m } = e,
        M = (0, s.e7)([x.ZP], () => x.ZP.getSection(A.oC.GUILD_HOME)),
        [P, R] = i.useState(!1),
        [T, L] = i.useState(E.$Y6),
        B = M === E.ULH.SIDEBAR_CHAT,
        H = (0, d.mFp)(),
        D = (0, s.e7)([_.Z], () => _.Z.getSettings(t.id)),
        W = null == D ? void 0 : D.welcomeMessage,
        U = (0, Z.Z)(t.id),
        z = !U && (null !== (l = null == D ? void 0 : null === (n = D.resourceChannels) || void 0 === n ? void 0 : n.length) && void 0 !== l ? l : 0) === 0,
        F = (0, c.Z)('(max-width: 1300px)'),
        G = m - E.PrS - T,
        O = (B && G < S) || F || z;
    return (i.useEffect(() => {
        if (D === _.P) (0, C.cP)(t.id);
        else if (null != D) {
            var e, n, l, a, i;
            f.default.track(E.rMx.SERVER_GUIDE_VIEWED, {
                ...(0, u.hH)(t.id),
                num_member_actions: null !== (l = null === (e = D.newMemberActions) || void 0 === e ? void 0 : e.length) && void 0 !== l ? l : 0,
                num_member_actions_completed: Object.keys(null !== (a = v.Z.getCompletedActions(t.id)) && void 0 !== a ? a : {}).length,
                num_resource_channels: null !== (i = null === (n = D.resourceChannels) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0
            });
        }
    }, [t.id, D]),
    i.useEffect(
        () => () => {
            g.Z.closeChannelSidebar(A.oC.GUILD_HOME);
        },
        []
    ),
    i.useEffect(() => {
        z && D !== _.P && o.Z.escapeToDefaultChannel(t.id);
    }, [t.id, z, D]),
    z)
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)('div', {
                      className: r()(w.chat, y.background, {
                          [w.threadSidebarOpen]: B,
                          [w.threadSidebarFloating]: B && P
                      }),
                      children: [
                          (0, a.jsx)(k, { guild: t }),
                          (0, a.jsx)(d.yWw, {
                              ...H,
                              children: (0, a.jsxs)('div', {
                                  className: r()(y.homeContainer, { [y.homeContainerCollapsed]: O }),
                                  children: [
                                      (0, a.jsx)('div', {
                                          className: y.maxWidthWrapper,
                                          children: (0, a.jsx)(h.Z, {
                                              guild: t,
                                              titleClassName: F ? y.emptyHeaderTitle : void 0
                                          })
                                      }),
                                      (0, a.jsxs)('div', {
                                          className: r()(y.homeContent, y.maxWidthWrapper),
                                          children: [
                                              (0, a.jsxs)('div', {
                                                  className: y.mainContent,
                                                  children: [
                                                      U &&
                                                          (0, a.jsx)(b.Z, {
                                                              guildId: t.id,
                                                              welcomeMessage: W
                                                          }),
                                                      U && (0, a.jsx)(j.Z, { guildId: t.id }),
                                                      !U || O
                                                          ? (0, a.jsx)(N.ZP, {
                                                                guild: t,
                                                                isNewMember: U
                                                            })
                                                          : null
                                                  ]
                                              }),
                                              O
                                                  ? null
                                                  : (0, a.jsx)(p.Z, {
                                                        guild: t,
                                                        isNewMember: U
                                                    })
                                          ]
                                      })
                                  ]
                              })
                          })
                      ]
                  }),
                  B
                      ? (0, a.jsx)(I.Z, {
                            pageWidth: m,
                            onSidebarResize: (e, n) => {
                                R(n), L(e);
                            }
                        })
                      : null
              ]
          });
}
