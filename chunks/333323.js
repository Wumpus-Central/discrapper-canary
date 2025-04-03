l.d(n, { Z: () => W }), l(47120);
var t = l(200651),
    r = l(192379),
    a = l(120356),
    i = l.n(a),
    s = l(399606),
    c = l(481060),
    o = l(749210),
    d = l(131388),
    u = l(367907),
    m = l(644080),
    h = l(984370),
    g = l(6025),
    f = l(433355),
    x = l(626135),
    p = l(526120),
    b = l(563534),
    j = l(846121),
    C = l(460347),
    _ = l(404488),
    v = l(605276),
    I = l(869764),
    Z = l(919318),
    N = l(150512),
    y = l(981631),
    O = l(176505),
    P = l(388032),
    w = l(617449),
    E = l(100658);
function S(e) {
    for (var n = 1; n < arguments.length; n++) {
        var l = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            t.forEach(function (n) {
                var t;
                (t = l[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = t);
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
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var t = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, t);
                  }
                  return l;
              })(Object(n)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l));
              }),
        e
    );
}
let A = _.q + 300 + 64,
    M = r.memo(function (e) {
        let { guild: n } = e;
        return (0, t.jsxs)(h.Z, {
            channelId: O.oC.GUILD_HOME,
            guildId: n.id,
            className: i()(w.title, w.background),
            innerClassname: w.headerBarInner,
            children: [
                (0, t.jsx)(h.Z.Icon, {
                    icon: c.Vy8,
                    'aria-hidden': !0
                }),
                (0, t.jsxs)(h.Z.Title, {
                    children: [(0, t.jsx)(c.nn4, { children: n.name }), P.NW.string(P.t.VbpLyc)]
                })
            ]
        });
    });
function W(e) {
    var n, l;
    let { guild: a, width: h } = e,
        P = (0, s.e7)([f.ZP], () => f.ZP.getSection(O.oC.GUILD_HOME)),
        [W, R] = r.useState(!1),
        [D, T] = r.useState(y.$Y6),
        L = P === y.ULH.SIDEBAR_CHAT,
        B = (0, c.mFp)(),
        H = (0, s.e7)([b.Z], () => b.Z.getSettings(a.id)),
        z = null == H ? void 0 : H.welcomeMessage,
        U = (0, C.Z)(a.id),
        F = !U && (null != (l = null == H || null == (n = H.resourceChannels) ? void 0 : n.length) ? l : 0) === 0,
        G = (0, d.Z)('(max-width: 1300px)'),
        q = h - y.PrS - D,
        V = (L && q < A) || G || F;
    return (r.useEffect(() => {
        if (H === b.P) (0, p.cP)(a.id);
        else if (null != H) {
            var e, n, l, t, r;
            x.default.track(
                y.rMx.SERVER_GUIDE_VIEWED,
                k(S({}, (0, u.hH)(a.id)), {
                    num_member_actions: null != (l = null == (e = H.newMemberActions) ? void 0 : e.length) ? l : 0,
                    num_member_actions_completed: Object.keys(null != (t = j.Z.getCompletedActions(a.id)) ? t : {}).length,
                    num_resource_channels: null != (r = null == (n = H.resourceChannels) ? void 0 : n.length) ? r : 0
                })
            );
        }
    }, [a.id, H]),
    r.useEffect(
        () => () => {
            g.Z.closeChannelSidebar(O.oC.GUILD_HOME);
        },
        []
    ),
    r.useEffect(() => {
        F && H !== b.P && o.Z.escapeToDefaultChannel(a.id);
    }, [a.id, F, H]),
    F)
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsxs)('div', {
                      className: i()(E.chat, w.background, {
                          [E.threadSidebarOpen]: L,
                          [E.threadSidebarFloating]: L && W
                      }),
                      children: [
                          (0, t.jsx)(M, { guild: a }),
                          (0, t.jsx)(
                              c.yWw,
                              k(S({}, B), {
                                  children: (0, t.jsxs)('div', {
                                      className: i()(w.homeContainer, { [w.homeContainerCollapsed]: V }),
                                      children: [
                                          (0, t.jsx)('div', {
                                              className: w.maxWidthWrapper,
                                              children: (0, t.jsx)(m.Z, {
                                                  guild: a,
                                                  titleClassName: G ? w.emptyHeaderTitle : void 0
                                              })
                                          }),
                                          (0, t.jsxs)('div', {
                                              className: i()(w.homeContent, w.maxWidthWrapper),
                                              children: [
                                                  (0, t.jsxs)('div', {
                                                      className: w.mainContent,
                                                      children: [
                                                          U &&
                                                              (0, t.jsx)(N.Z, {
                                                                  guildId: a.id,
                                                                  welcomeMessage: z
                                                              }),
                                                          U && (0, t.jsx)(I.Z, { guildId: a.id }),
                                                          !U || V
                                                              ? (0, t.jsx)(Z.ZP, {
                                                                    guild: a,
                                                                    isNewMember: U
                                                                })
                                                              : null
                                                      ]
                                                  }),
                                                  V
                                                      ? null
                                                      : (0, t.jsx)(v.Z, {
                                                            guild: a,
                                                            isNewMember: U
                                                        })
                                              ]
                                          })
                                      ]
                                  })
                              })
                          )
                      ]
                  }),
                  L
                      ? (0, t.jsx)(_.Z, {
                            pageWidth: h,
                            onSidebarResize: (e, n) => {
                                R(n), T(e);
                            }
                        })
                      : null
              ]
          });
}
