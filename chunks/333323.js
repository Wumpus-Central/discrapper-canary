t.d(n, { Z: () => L }), t(388685);
var l = t(54381),
    r = t(473749),
    a = t(120356),
    i = t.n(a),
    s = t(399606),
    c = t(481060),
    o = t(749210),
    d = t(131388),
    u = t(367907),
    m = t(644080),
    h = t(984370),
    g = t(6025),
    f = t(433355),
    x = t(626135),
    p = t(526120),
    b = t(563534),
    j = t(846121),
    C = t(460347),
    v = t(404488),
    _ = t(605276),
    Z = t(869764),
    I = t(919318),
    N = t(150512),
    y = t(981631),
    O = t(176505),
    P = t(388032),
    w = t(31499),
    E = t(97009);
function S(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
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
let M = v.q + 300 + 64,
    k = r.memo(function (e) {
        let { guild: n } = e;
        return (0, l.jsxs)(h.Z, {
            channelId: O.oC.GUILD_HOME,
            guildId: n.id,
            className: i()(w.title, w.background),
            innerClassname: w.headerBarInner,
            children: [
                (0, l.jsx)(h.Z.Icon, {
                    icon: c.Vy8,
                    "aria-hidden": !0,
                }),
                (0, l.jsxs)(h.Z.Title, {
                    children: [(0, l.jsx)(c.nn4, { children: n.name }), P.intl.string(P.t.VbpLyU)],
                }),
            ],
        });
    });
function L(e) {
    var n, t;
    let { guild: a, width: h } = e,
        P = (0, s.e7)([f.ZP], () => f.ZP.getSection(O.oC.GUILD_HOME)),
        [L, H] = r.useState(!1),
        [T, D] = r.useState(y.$Y6),
        R = P === y.ULH.SIDEBAR_CHAT,
        B = (0, c.mFp)(),
        W = (0, s.e7)([b.Z], () => b.Z.getSettings(a.id)),
        U = null == W ? void 0 : W.welcomeMessage,
        G = (0, C.Z)(a.id),
        F = !G && (null != (t = null == W || null == (n = W.resourceChannels) ? void 0 : n.length) ? t : 0) === 0,
        z = (0, d.Z)("(max-width: 1300px)"),
        V = h - y.PrS - T,
        q = (R && V < M) || z || F;
    return (r.useEffect(() => {
        if (W === b.P) (0, p.cP)(a.id);
        else if (null != W) {
            var e, n, t, l, r;
            x.default.track(
                y.rMx.SERVER_GUIDE_VIEWED,
                A(S({}, (0, u.hH)(a.id)), {
                    num_member_actions: null != (t = null == (e = W.newMemberActions) ? void 0 : e.length) ? t : 0,
                    num_member_actions_completed: Object.keys(null != (l = j.Z.getCompletedActions(a.id)) ? l : {})
                        .length,
                    num_resource_channels: null != (r = null == (n = W.resourceChannels) ? void 0 : n.length) ? r : 0,
                }),
            );
        }
    }, [a.id, W]),
    r.useEffect(
        () => () => {
            g.Z.closeChannelSidebar(O.oC.GUILD_HOME);
        },
        [],
    ),
    r.useEffect(() => {
        F && W !== b.P && o.Z.escapeToDefaultChannel(a.id);
    }, [a.id, F, W]),
    F)
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: i()(E.chat, w.background, {
                          [E.threadSidebarOpen]: R,
                          [E.threadSidebarFloating]: R && L,
                      }),
                      children: [
                          (0, l.jsx)(k, { guild: a }),
                          (0, l.jsx)(
                              c.yWw,
                              A(S({}, B), {
                                  children: (0, l.jsxs)("div", {
                                      className: i()(w.homeContainer, { [w.homeContainerCollapsed]: q }),
                                      children: [
                                          (0, l.jsx)("div", {
                                              className: w.maxWidthWrapper,
                                              children: (0, l.jsx)(m.Z, {
                                                  guild: a,
                                                  titleClassName: z ? w.emptyHeaderTitle : void 0,
                                              }),
                                          }),
                                          (0, l.jsxs)("div", {
                                              className: i()(w.homeContent, w.maxWidthWrapper),
                                              children: [
                                                  (0, l.jsxs)("div", {
                                                      className: w.mainContent,
                                                      children: [
                                                          G &&
                                                              (0, l.jsx)(N.Z, {
                                                                  guildId: a.id,
                                                                  welcomeMessage: U,
                                                              }),
                                                          G && (0, l.jsx)(Z.Z, { guildId: a.id }),
                                                          !G || q
                                                              ? (0, l.jsx)(I.ZP, {
                                                                    guild: a,
                                                                    isNewMember: G,
                                                                })
                                                              : null,
                                                      ],
                                                  }),
                                                  q
                                                      ? null
                                                      : (0, l.jsx)(_.Z, {
                                                            guild: a,
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
                      ? (0, l.jsx)(v.Z, {
                            pageWidth: h,
                            onSidebarResize: (e, n) => {
                                H(n), D(e);
                            },
                        })
                      : null,
              ],
          });
}
