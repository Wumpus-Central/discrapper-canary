t.d(n, { Z: () => L }), t(388685);
var a = t(54381),
    l = t(473749),
    r = t(120356),
    i = t.n(r),
    c = t(399606),
    s = t(481060),
    d = t(749210),
    o = t(131388),
    u = t(367907),
    m = t(644080),
    h = t(984370),
    f = t(6025),
    g = t(433355),
    b = t(626135),
    x = t(526120),
    p = t(563534),
    j = t(846121),
    C = t(460347),
    v = t(404488),
    Z = t(605276),
    I = t(869764),
    N = t(919318),
    y = t(150512),
    O = t(981631),
    _ = t(176505),
    P = t(388032),
    w = t(358053),
    E = t(978966);
function S(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            a.forEach(function (n) {
                var a;
                (a = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = a);
            });
    }
    return e;
}
function A(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, a);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let M = v.q + 300 + 64,
    k = l.memo(function (e) {
        let { guild: n } = e;
        return (0, a.jsxs)(h.Z, {
            channelId: _.oC.GUILD_HOME,
            guildId: n.id,
            className: i()(w.title, w.background),
            innerClassname: w.headerBarInner,
            children: [
                (0, a.jsx)(h.Z.Icon, {
                    icon: s.Vy8,
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)(h.Z.Title, {
                    children: [(0, a.jsx)(s.nn4, { children: n.name }), P.intl.string(P.t.VbpLyU)],
                }),
            ],
        });
    });
function L(e) {
    var n, t;
    let { guild: r, width: h } = e,
        P = (0, c.e7)([g.ZP], () => g.ZP.getSection(_.oC.GUILD_HOME)),
        [L, H] = l.useState(!1),
        [T, D] = l.useState(O.$Y6),
        R = P === O.ULH.SIDEBAR_CHAT,
        B = (0, s.mFp)(),
        W = (0, c.e7)([p.Z], () => p.Z.getSettings(r.id)),
        U = null == W ? void 0 : W.welcomeMessage,
        G = (0, C.Z)(r.id),
        F = !G && (null != (t = null == W || null == (n = W.resourceChannels) ? void 0 : n.length) ? t : 0) === 0,
        z = (0, o.Z)("(max-width: 1300px)"),
        V = h - O.PrS - T,
        q = (R && V < M) || z || F;
    return (l.useEffect(() => {
        if (W === p.P) (0, x.cP)(r.id);
        else if (null != W) {
            var e, n, t, a, l;
            b.default.track(
                O.rMx.SERVER_GUIDE_VIEWED,
                A(S({}, (0, u.hH)(r.id)), {
                    num_member_actions: null != (t = null == (e = W.newMemberActions) ? void 0 : e.length) ? t : 0,
                    num_member_actions_completed: Object.keys(null != (a = j.Z.getCompletedActions(r.id)) ? a : {})
                        .length,
                    num_resource_channels: null != (l = null == (n = W.resourceChannels) ? void 0 : n.length) ? l : 0,
                }),
            );
        }
    }, [r.id, W]),
    l.useEffect(
        () => () => {
            f.Z.closeChannelSidebar(_.oC.GUILD_HOME);
        },
        [],
    ),
    l.useEffect(() => {
        F && W !== p.P && d.Z.escapeToDefaultChannel(r.id);
    }, [r.id, F, W]),
    F)
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)("div", {
                      className: i()(E.chat, w.background, {
                          [E.threadSidebarOpen]: R,
                          [E.threadSidebarFloating]: R && L,
                      }),
                      children: [
                          (0, a.jsx)(k, { guild: r }),
                          (0, a.jsx)(
                              s.yWw,
                              A(S({}, B), {
                                  children: (0, a.jsxs)("div", {
                                      className: i()(w.homeContainer, { [w.homeContainerCollapsed]: q }),
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: w.maxWidthWrapper,
                                              children: (0, a.jsx)(m.Z, {
                                                  guild: r,
                                                  titleClassName: z ? w.emptyHeaderTitle : void 0,
                                              }),
                                          }),
                                          (0, a.jsxs)("div", {
                                              className: i()(w.homeContent, w.maxWidthWrapper),
                                              children: [
                                                  (0, a.jsxs)("div", {
                                                      className: w.mainContent,
                                                      children: [
                                                          G &&
                                                              (0, a.jsx)(y.Z, {
                                                                  guildId: r.id,
                                                                  welcomeMessage: U,
                                                              }),
                                                          G && (0, a.jsx)(I.Z, { guildId: r.id }),
                                                          !G || q
                                                              ? (0, a.jsx)(N.ZP, {
                                                                    guild: r,
                                                                    isNewMember: G,
                                                                })
                                                              : null,
                                                      ],
                                                  }),
                                                  q
                                                      ? null
                                                      : (0, a.jsx)(Z.Z, {
                                                            guild: r,
                                                            isNewMember: G,
                                                        }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                          ),
                      ],
                  }),
                  R
                      ? (0, a.jsx)(v.Z, {
                            pageWidth: h,
                            onSidebarResize: (e, n) => {
                                H(n), D(e);
                            },
                        })
                      : null,
              ],
          });
}
