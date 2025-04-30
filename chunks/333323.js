t.d(n, { Z: () => D }), t(388685);
var l = t(200651),
    r = t(192379),
    a = t(120356),
    i = t.n(a),
    s = t(399606),
    c = t(481060),
    o = t(749210),
    d = t(131388),
    u = t(367907),
    h = t(644080),
    m = t(984370),
    f = t(6025),
    g = t(433355),
    p = t(626135),
    x = t(526120),
    b = t(563534),
    j = t(846121),
    C = t(460347),
    _ = t(404488),
    I = t(605276),
    v = t(869764),
    Z = t(919318),
    y = t(150512),
    N = t(981631),
    O = t(176505),
    P = t(388032),
    w = t(617449),
    E = t(100658);
function S(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function k(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let A = _.q + 300 + 64,
    M = r.memo(function (e) {
        let { guild: n } = e;
        return (0, l.jsxs)(m.Z, {
            channelId: O.oC.GUILD_HOME,
            guildId: n.id,
            className: i()(w.title, w.background),
            innerClassname: w.headerBarInner,
            children: [
                (0, l.jsx)(m.Z.Icon, {
                    icon: c.Vy8,
                    'aria-hidden': !0
                }),
                (0, l.jsxs)(m.Z.Title, {
                    children: [(0, l.jsx)(c.nn4, { children: n.name }), P.intl.string(P.t.VbpLyc)]
                })
            ]
        });
    });
function D(e) {
    var n, t;
    let { guild: a, width: m } = e,
        P = (0, s.e7)([g.ZP], () => g.ZP.getSection(O.oC.GUILD_HOME)),
        [D, R] = r.useState(!1),
        [L, T] = r.useState(N.$Y6),
        B = P === N.ULH.SIDEBAR_CHAT,
        H = (0, c.mFp)(),
        W = (0, s.e7)([b.Z], () => b.Z.getSettings(a.id)),
        U = null == W ? void 0 : W.welcomeMessage,
        z = (0, C.Z)(a.id),
        G = !z && (null != (t = null == W || null == (n = W.resourceChannels) ? void 0 : n.length) ? t : 0) === 0,
        F = (0, d.Z)('(max-width: 1300px)'),
        q = m - N.PrS - L,
        V = (B && q < A) || F || G;
    return (r.useEffect(() => {
        if (W === b.P) (0, x.cP)(a.id);
        else if (null != W) {
            var e, n, t, l, r;
            p.default.track(
                N.rMx.SERVER_GUIDE_VIEWED,
                k(S({}, (0, u.hH)(a.id)), {
                    num_member_actions: null != (t = null == (e = W.newMemberActions) ? void 0 : e.length) ? t : 0,
                    num_member_actions_completed: Object.keys(null != (l = j.Z.getCompletedActions(a.id)) ? l : {}).length,
                    num_resource_channels: null != (r = null == (n = W.resourceChannels) ? void 0 : n.length) ? r : 0
                })
            );
        }
    }, [a.id, W]),
    r.useEffect(
        () => () => {
            f.Z.closeChannelSidebar(O.oC.GUILD_HOME);
        },
        []
    ),
    r.useEffect(() => {
        G && W !== b.P && o.Z.escapeToDefaultChannel(a.id);
    }, [a.id, G, W]),
    G)
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      className: i()(E.chat, w.background, {
                          [E.threadSidebarOpen]: B,
                          [E.threadSidebarFloating]: B && D
                      }),
                      children: [
                          (0, l.jsx)(M, { guild: a }),
                          (0, l.jsx)(
                              c.yWw,
                              k(S({}, H), {
                                  children: (0, l.jsxs)('div', {
                                      className: i()(w.homeContainer, { [w.homeContainerCollapsed]: V }),
                                      children: [
                                          (0, l.jsx)('div', {
                                              className: w.maxWidthWrapper,
                                              children: (0, l.jsx)(h.Z, {
                                                  guild: a,
                                                  titleClassName: F ? w.emptyHeaderTitle : void 0
                                              })
                                          }),
                                          (0, l.jsxs)('div', {
                                              className: i()(w.homeContent, w.maxWidthWrapper),
                                              children: [
                                                  (0, l.jsxs)('div', {
                                                      className: w.mainContent,
                                                      children: [
                                                          z &&
                                                              (0, l.jsx)(y.Z, {
                                                                  guildId: a.id,
                                                                  welcomeMessage: U
                                                              }),
                                                          z && (0, l.jsx)(v.Z, { guildId: a.id }),
                                                          !z || V
                                                              ? (0, l.jsx)(Z.ZP, {
                                                                    guild: a,
                                                                    isNewMember: z
                                                                })
                                                              : null
                                                      ]
                                                  }),
                                                  V
                                                      ? null
                                                      : (0, l.jsx)(I.Z, {
                                                            guild: a,
                                                            isNewMember: z
                                                        })
                                              ]
                                          })
                                      ]
                                  })
                              })
                          )
                      ]
                  }),
                  B
                      ? (0, l.jsx)(_.Z, {
                            pageWidth: m,
                            onSidebarResize: (e, n) => {
                                R(n), T(e);
                            }
                        })
                      : null
              ]
          });
}
