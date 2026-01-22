l.d(n, {
    A: () => L,
}),
    l(896048);
var t = l(627968),
    a = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(417597),
    c = l(397927),
    d = l(686956),
    o = l(241524),
    u = l(58149),
    f = l(293865),
    h = l(742589),
    b = l(138298),
    m = l(761640),
    x = l(954571),
    g = l(225142),
    j = l(701785),
    A = l(65995),
    p = l(978165),
    v = l(490171),
    y = l(119593),
    N = l(283012),
    O = l(12446),
    I = l(913423),
    C = l(652215),
    _ = l(746080),
    w = l(985018),
    E = l(159453),
    G = l(638990);

function M(e) {
    for (var n = 1; n < arguments.length; n++) {
        var l = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            t.forEach(function (n) {
                var t;
                (t = l[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = t);
            });
    }
    return e;
}

function S(e, n) {
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
let D = v.O + 300 + 64,
    P = a.memo(function (e) {
        let { guild: n } = e;
        return (0, t.jsxs)(h.A, {
            channelId: _.VV.GUILD_HOME,
            guildId: n.id,
            className: i()(E.DD, E.Tp),
            innerClassname: E.vi,
            children: [
                (0, t.jsx)(h.A.Icon, {
                    icon: c.Zf8,
                    "aria-hidden": !0,
                }),
                (0, t.jsxs)(h.A.Title, {
                    children: [
                        (0, t.jsx)(c.AC4, {
                            children: n.name,
                        }),
                        w.intl.string(w.t.VbpLyU),
                    ],
                }),
            ],
        });
    });

function L(e) {
    var n, l;
    let { guild: r, width: h } = e,
        w = (0, s.bG)([m.Ay], () => m.Ay.getSection(_.VV.GUILD_HOME)),
        [L, R] = a.useState(!1),
        [T, k] = a.useState(C.da6),
        H = w === C.YvQ.SIDEBAR_CHAT,
        U = (0, c.R7z)(),
        B = (0, s.bG)([j.h], () => j.h.getSettings(r.id)),
        V = null == B ? void 0 : B.welcomeMessage,
        K = (0, p.A)(r.id),
        z = !K && (null != (n = null == B || null == (l = B.resourceChannels) ? void 0 : l.length) ? n : 0) === 0,
        $ = (0, o.A)("(max-width: 1300px)"),
        F = h - C.MdR - T,
        Q = (H && F < D) || $ || z;
    return (a.useEffect(() => {
        if (B === j.A) (0, g.ag)(r.id);
        else if (null != B) {
            var e, n, l, t, a;
            x.default.track(
                C.HAw.SERVER_GUIDE_VIEWED,
                S(M({}, (0, u.H$)(r.id)), {
                    num_member_actions: null != (e = null == (t = B.newMemberActions) ? void 0 : t.length) ? e : 0,
                    num_member_actions_completed: Object.keys(null != (n = A.A.getCompletedActions(r.id)) ? n : {})
                        .length,
                    num_resource_channels: null != (l = null == (a = B.resourceChannels) ? void 0 : a.length) ? l : 0,
                }),
            );
        }
    }, [r.id, B]),
    a.useEffect(
        () => () => {
            b.A.closeChannelSidebar(_.VV.GUILD_HOME);
        },
        [],
    ),
    a.useEffect(() => {
        z && B !== j.A && d.A.escapeToDefaultChannel(r.id);
    }, [r.id, z, B]),
    z)
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsxs)("div", {
                      className: i()(G.TE, E.Tp, {
                          [G.js]: H,
                          [G.jl]: H && L,
                      }),
                      children: [
                          (0, t.jsx)(P, {
                              guild: r,
                          }),
                          (0, t.jsx)(
                              c.GtU,
                              S(M({}, U), {
                                  children: (0, t.jsxs)("div", {
                                      className: i()(E.$d, {
                                          [E.Mk]: Q,
                                      }),
                                      children: [
                                          (0, t.jsx)("div", {
                                              className: E.QI,
                                              children: (0, t.jsx)(f.A, {
                                                  guild: r,
                                                  titleClassName: $ ? E.H2 : void 0,
                                              }),
                                          }),
                                          (0, t.jsxs)("div", {
                                              className: i()(E.xr, E.QI),
                                              children: [
                                                  (0, t.jsxs)("div", {
                                                      className: E.rb,
                                                      children: [
                                                          K &&
                                                              (0, t.jsx)(I.A, {
                                                                  guildId: r.id,
                                                                  welcomeMessage: V,
                                                              }),
                                                          K &&
                                                              (0, t.jsx)(N.A, {
                                                                  guildId: r.id,
                                                              }),
                                                          !K || Q
                                                              ? (0, t.jsx)(O.Ay, {
                                                                    guild: r,
                                                                    isNewMember: K,
                                                                })
                                                              : null,
                                                      ],
                                                  }),
                                                  Q
                                                      ? null
                                                      : (0, t.jsx)(y.A, {
                                                            guild: r,
                                                            isNewMember: K,
                                                        }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                          ),
                      ],
                  }),
                  H
                      ? (0, t.jsx)(v.A, {
                            pageWidth: h,
                            onSidebarResize: (e, n) => {
                                R(n), k(e);
                            },
                        })
                      : null,
              ],
          });
}
