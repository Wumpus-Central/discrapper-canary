n.d(t, {
    A: () => E,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    o = n(80682),
    u = n(267102),
    c = n(206835),
    s = n(576622),
    d = n(961350),
    A = n(696451),
    b = n(71393),
    f = n(576705),
    O = n(287809),
    g = n(652215),
    y = n(985018),
    p = n(284700);

function E(e) {
    let { guildId: t, userId: E, analyticsLocation: j, analyticsLocations: m, context: v, icon: _ } = e,
        h = b.A.getGuild(t),
        S = d.default.getId(),
        M = (0, i.bG)([O.default], () => O.default.getUser(E)),
        P = (0, i.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, E), [t, E]);
    (0, i.bG)([f.A], () => f.A.getGuildVersion(t), [t]);
    let C = l.useMemo(
        () => ({
            [t]: [E],
        }),
        [t, E],
    );
    (0, o.E)(C, "useChangeIdentityItem");
    let I = v === g.BRT.POPOUT,
        D = (0, c.A)({
            guild: h,
            analyticsLocations: m,
        }),
        x = (0, u.aL)();
    if (null == h || I) return null;
    let T = S === E && (f.A.can(g.xBc.CHANGE_NICKNAME, h) || f.A.can(g.xBc.MANAGE_NICKNAMES, h)),
        N = S === E,
        w = f.A.canManageUser(g.xBc.MANAGE_NICKNAMES, E, h);
    if (!(T || w || N) || null == M || P) return null;
    let G = h.features.has(g.GuildFeatures.HUB) ? y.intl.string(y.t["+MWrWt"]) : y.intl.string(y.t["PKQB/H"]),
        R = N ? G : y.intl.string(y.t.dilOF6);
    return (0, r.jsx)(a.Drp, {
        id: "change-nickname",
        label: (0, r.jsx)("div", {
            className: p.ei,
            children: (0, r.jsx)("span", {
                className: p.Pf,
                children: R,
            }),
        }),
        icon: _,
        action: () => {
            N
                ? ((0, s.A)(M.id, M.getAvatarURL(t, 80), {
                      guildId: t,
                  }),
                  D(),
                  x.dispatch(g.jej.POPOUT_CLOSE),
                  (0, a.s7G)())
                : (0, a.mMO)(async () => {
                      let { default: e } = await n.e("48635").then(n.bind(n, 752118));
                      return (n) => {
                          var l, i;
                          return (0, r.jsx)(
                              e,
                              ((l = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, n)),
                              (i = i =
                                  {
                                      guildId: t,
                                      user: M,
                                      analyticsSource: j,
                                      analyticsLocations: m,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              l),
                          );
                      };
                  });
        },
    });
}
