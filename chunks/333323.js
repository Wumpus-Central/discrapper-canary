t.d(n, { Z: () => D }), t(388685);
var r = t(200651),
    l = t(192379),
    a = t(120356),
    i = t.n(a),
    s = t(399606),
    o = t(481060),
    c = t(749210),
    d = t(131388),
    u = t(367907),
    m = t(644080),
    h = t(984370),
    f = t(6025),
    g = t(433355),
    p = t(626135),
    x = t(526120),
    b = t(563534),
    j = t(846121),
    C = t(460347),
    v = t(404488),
    _ = t(605276),
    I = t(869764),
    Z = t(919318),
    N = t(150512),
    y = t(981631),
    O = t(176505),
    P = t(388032),
    w = t(617449),
    E = t(100658);
function S(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let A = v.q + 300 + 64,
    M = l.memo(function (e) {
        let { guild: n } = e;
        return (0, r.jsxs)(h.Z, {
            channelId: O.oC.GUILD_HOME,
            guildId: n.id,
            className: i()(w.title, w.background),
            innerClassname: w.headerBarInner,
            children: [
                (0, r.jsx)(h.Z.Icon, {
                    icon: o.Vy8,
                    'aria-hidden': !0
                }),
                (0, r.jsxs)(h.Z.Title, {
                    children: [(0, r.jsx)(o.nn4, { children: n.name }), P.NW.string(P.t.VbpLyc)]
                })
            ]
        });
    });
function D(e) {
    var n, t;
    let { guild: a, width: h } = e,
        P = (0, s.e7)([g.ZP], () => g.ZP.getSection(O.oC.GUILD_HOME)),
        [D, R] = l.useState(!1),
        [W, T] = l.useState(y.$Y6),
        L = P === y.ULH.SIDEBAR_CHAT,
        B = (0, o.mFp)(),
        H = (0, s.e7)([b.Z], () => b.Z.getSettings(a.id)),
        U = null == H ? void 0 : H.welcomeMessage,
        z = (0, C.Z)(a.id),
        F = !z && (null != (t = null == H || null == (n = H.resourceChannels) ? void 0 : n.length) ? t : 0) === 0,
        G = (0, d.Z)('(max-width: 1300px)'),
        q = h - y.PrS - W,
        V = (L && q < A) || G || F;
    return (l.useEffect(() => {
        if (H === b.P) (0, x.cP)(a.id);
        else if (null != H) {
            var e, n, t, r, l;
            p.default.track(
                y.rMx.SERVER_GUIDE_VIEWED,
                k(S({}, (0, u.hH)(a.id)), {
                    num_member_actions: null != (t = null == (e = H.newMemberActions) ? void 0 : e.length) ? t : 0,
                    num_member_actions_completed: Object.keys(null != (r = j.Z.getCompletedActions(a.id)) ? r : {}).length,
                    num_resource_channels: null != (l = null == (n = H.resourceChannels) ? void 0 : n.length) ? l : 0
                })
            );
        }
    }, [a.id, H]),
    l.useEffect(
        () => () => {
            f.Z.closeChannelSidebar(O.oC.GUILD_HOME);
        },
        []
    ),
    l.useEffect(() => {
        F && H !== b.P && c.Z.escapeToDefaultChannel(a.id);
    }, [a.id, F, H]),
    F)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: i()(E.chat, w.background, {
                          [E.threadSidebarOpen]: L,
                          [E.threadSidebarFloating]: L && D
                      }),
                      children: [
                          (0, r.jsx)(M, { guild: a }),
                          (0, r.jsx)(
                              o.yWw,
                              k(S({}, B), {
                                  children: (0, r.jsxs)('div', {
                                      className: i()(w.homeContainer, { [w.homeContainerCollapsed]: V }),
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: w.maxWidthWrapper,
                                              children: (0, r.jsx)(m.Z, {
                                                  guild: a,
                                                  titleClassName: G ? w.emptyHeaderTitle : void 0
                                              })
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: i()(w.homeContent, w.maxWidthWrapper),
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: w.mainContent,
                                                      children: [
                                                          z &&
                                                              (0, r.jsx)(N.Z, {
                                                                  guildId: a.id,
                                                                  welcomeMessage: U
                                                              }),
                                                          z && (0, r.jsx)(I.Z, { guildId: a.id }),
                                                          !z || V
                                                              ? (0, r.jsx)(Z.ZP, {
                                                                    guild: a,
                                                                    isNewMember: z
                                                                })
                                                              : null
                                                      ]
                                                  }),
                                                  V
                                                      ? null
                                                      : (0, r.jsx)(_.Z, {
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
                  L
                      ? (0, r.jsx)(v.Z, {
                            pageWidth: h,
                            onSidebarResize: (e, n) => {
                                R(n), T(e);
                            }
                        })
                      : null
              ]
          });
}
