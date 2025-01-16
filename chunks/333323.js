l.d(n, {
    Z: function () {
        return P;
    }
}),
    l(47120);
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
    v = l(563534),
    I = l(846121),
    p = l(460347),
    Z = l(404488),
    j = l(605276),
    N = l(869764),
    _ = l(919318),
    b = l(150512),
    A = l(981631),
    E = l(176505),
    S = l(388032),
    M = l(588898),
    y = l(247627);
let k = Z.q + 300 + 64,
    w = i.memo(function (e) {
        let { guild: n } = e;
        return (0, a.jsxs)(m.Z, {
            channelId: E.oC.GUILD_HOME,
            guildId: n.id,
            className: r()(M.title, M.background),
            innerClassname: M.headerBarInner,
            children: [
                (0, a.jsx)(m.Z.Icon, {
                    icon: d.SignPostIcon,
                    'aria-hidden': !0
                }),
                (0, a.jsxs)(m.Z.Title, {
                    children: [(0, a.jsx)(d.HiddenVisually, { children: n.name }), S.intl.string(S.t.VbpLyc)]
                })
            ]
        });
    });
function P(e) {
    var n, l;
    let { guild: t, width: m } = e,
        S = (0, s.e7)([x.ZP], () => x.ZP.getSection(E.oC.GUILD_HOME)),
        [P, B] = i.useState(!1),
        [R, T] = i.useState(A.$Y6),
        H = S === A.ULH.SIDEBAR_CHAT,
        L = (0, d.useFocusJumpSection)(),
        D = (0, s.e7)([v.Z], () => v.Z.getSettings(t.id)),
        W = null == D ? void 0 : D.welcomeMessage,
        U = (0, p.Z)(t.id),
        G = !U && (null !== (l = null == D ? void 0 : null === (n = D.resourceChannels) || void 0 === n ? void 0 : n.length) && void 0 !== l ? l : 0) === 0,
        O = (0, c.Z)('(max-width: 1300px)'),
        z = m - A.PrS - R,
        F = (H && z < k) || O || G;
    return (i.useEffect(() => {
        if (D === v.P) (0, C.cP)(t.id);
        else if (null != D) {
            var e, n, l, a, i;
            f.default.track(A.rMx.SERVER_GUIDE_VIEWED, {
                ...(0, u.hH)(t.id),
                num_member_actions: null !== (l = null === (e = D.newMemberActions) || void 0 === e ? void 0 : e.length) && void 0 !== l ? l : 0,
                num_member_actions_completed: Object.keys(null !== (a = I.Z.getCompletedActions(t.id)) && void 0 !== a ? a : {}).length,
                num_resource_channels: null !== (i = null === (n = D.resourceChannels) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0
            });
        }
    }, [t.id, D]),
    i.useEffect(
        () => () => {
            g.Z.closeChannelSidebar(E.oC.GUILD_HOME);
        },
        []
    ),
    i.useEffect(() => {
        G && D !== v.P && o.Z.escapeToDefaultChannel(t.id);
    }, [t.id, G, D]),
    G)
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)('div', {
                      className: r()(y.chat, M.background, {
                          [y.threadSidebarOpen]: H,
                          [y.threadSidebarFloating]: H && P
                      }),
                      children: [
                          (0, a.jsx)(w, { guild: t }),
                          (0, a.jsx)(d.AdvancedScrollerAuto, {
                              ...L,
                              children: (0, a.jsxs)('div', {
                                  className: r()(M.homeContainer, { [M.homeContainerCollapsed]: F }),
                                  children: [
                                      (0, a.jsx)('div', {
                                          className: M.maxWidthWrapper,
                                          children: (0, a.jsx)(h.Z, {
                                              guild: t,
                                              titleClassName: O ? M.emptyHeaderTitle : void 0
                                          })
                                      }),
                                      (0, a.jsxs)('div', {
                                          className: r()(M.homeContent, M.maxWidthWrapper),
                                          children: [
                                              (0, a.jsxs)('div', {
                                                  className: M.mainContent,
                                                  children: [
                                                      U &&
                                                          (0, a.jsx)(b.Z, {
                                                              guildId: t.id,
                                                              welcomeMessage: W
                                                          }),
                                                      U && (0, a.jsx)(N.Z, { guildId: t.id }),
                                                      !U || F
                                                          ? (0, a.jsx)(_.ZP, {
                                                                guild: t,
                                                                isNewMember: U
                                                            })
                                                          : null
                                                  ]
                                              }),
                                              F
                                                  ? null
                                                  : (0, a.jsx)(j.Z, {
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
                  H
                      ? (0, a.jsx)(Z.Z, {
                            pageWidth: m,
                            onSidebarResize: (e, n) => {
                                B(n), T(e);
                            }
                        })
                      : null
              ]
          });
}
