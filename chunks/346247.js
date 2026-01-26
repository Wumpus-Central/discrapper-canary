n.d(t, {
    A: () => p,
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
    y = n(985018);

function p(e) {
    let { guildId: t, userId: p, analyticsLocation: E, analyticsLocations: j, context: m, icon: v } = e,
        _ = b.A.getGuild(t),
        h = d.default.getId(),
        S = (0, i.bG)([O.default], () => O.default.getUser(p)),
        M = (0, i.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, p), [t, p]);
    (0, i.bG)([f.A], () => f.A.getGuildVersion(t), [t]);
    let P = l.useMemo(
        () => ({
            [t]: [p],
        }),
        [t, p],
    );
    (0, o.E)(P, "useChangeIdentityItem");
    let C = m === g.BRT.POPOUT,
        I = (0, c.A)({
            guild: _,
            analyticsLocations: j,
        }),
        D = (0, u.aL)();
    if (null == _ || C) return null;
    let T = h === p && (f.A.can(g.xBc.CHANGE_NICKNAME, _) || f.A.can(g.xBc.MANAGE_NICKNAMES, _)),
        x = h === p,
        N = f.A.canManageUser(g.xBc.MANAGE_NICKNAMES, p, _);
    if (!(T || N || x) || null == S || M) return null;
    let w = _.features.has(g.GuildFeatures.HUB) ? y.intl.string(y.t["+MWrWt"]) : y.intl.string(y.t["PKQB/H"]),
        G = x ? w : y.intl.string(y.t.dilOF6);
    return (0, r.jsx)(a.Drp, {
        id: "change-nickname",
        label: G,
        icon: v,
        leadingAccessory:
            null != v
                ? {
                      type: "icon",
                      icon: v,
                  }
                : void 0,
        action: () => {
            x
                ? ((0, s.A)(S.id, S.getAvatarURL(t, 80), {
                      guildId: t,
                  }),
                  I(),
                  D.dispatch(g.jej.POPOUT_CLOSE),
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
                                      user: S,
                                      analyticsSource: E,
                                      analyticsLocations: j,
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
