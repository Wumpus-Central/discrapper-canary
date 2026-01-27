n.d(t, {
    A: () => S,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    o = n(397927),
    a = n(263063),
    s = n(134413),
    c = n(221950),
    u = n(71393),
    E = n(309010),
    d = n(967198),
    _ = n(954571),
    T = n(585510),
    A = n(834409),
    I = n(903093),
    O = n(652215),
    N = n(746080),
    p = n(985018),
    R = n(858411);

function S(e) {
    var t, S;
    let { onDismiss: P } = e,
        y = (0, l.bG)([d.A], () => d.A.getGuildId()),
        f = (0, l.bG)([E.A], () => (null != y ? E.A.getChannelId(y) : null), [y]),
        C = null != y ? y : null,
        D = (0, l.bG)([u.A], () => (null != C ? u.A.getGuild(C) : null), [C]),
        { shouldShowIncidentActions: m, incidentData: g, isUnderLockdown: h } = (0, T.Li)(C),
        U = (0, s.fw)(null != (t = null == D ? void 0 : D.id) ? t : O.dJq),
        b = i.useCallback(() => null != D && (0, c.aZ)(D.id), [D]);
    if (null == D || null == g || !m) return null;
    let M = (e) => {
            e && U && f !== N.VV.MEMBER_SAFETY && b()
                ? _.default.track(O.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: O.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: D.id,
                  })
                : (0, o.mMO)(async () => {
                      let e = {
                              source: A.Eo.NAGBAR,
                              alertType: (0, I.$5)(g),
                          },
                          { default: t } = await n.e("43233").then(n.bind(n, 671576));
                      return (n) => {
                          var i, l;
                          return (0, r.jsx)(
                              t,
                              ((i = (function (e) {
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
                              (l = l =
                                  {
                                      guildId: D.id,
                                      analyticsData: e,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i),
                          );
                      };
                  });
        },
        j = (0, r.jsx)(a.A, {
            className: R.$f,
            guild: D,
            size: a.A.Sizes.MINI,
        }),
        k = (0, I.ql)(g, D.name);
    if (null != (null != (S = g.dmsDisabledUntil) ? S : g.invitesDisabledUntil) && h)
        return (0, r.jsxs)(o.$Td, {
            className: R.lm,
            color: o.Hv$.NEUTRAL,
            children: [
                (0, r.jsx)(o.PMB, {
                    onClick: P,
                    noticeType: O.kqX.GUILD_RAID_NOTIFICATION,
                }),
                j,
                k,
                (0, r.jsx)(o.zr9, {
                    className: R.hP,
                    onClick: () => M(!1),
                    children: (0, r.jsxs)("div", {
                        className: R.rx,
                        children: [
                            (0, r.jsx)(o.XAi, {
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, r.jsx)("span", {
                                children: p.intl.string(p.t["c+7oa7"]),
                            }),
                        ],
                    }),
                }),
            ],
        });
    let v = (0, I.P$)(g)
            ? p.intl.formatToPlainString(p.t.tZTx2E, {
                  guildName: D.name,
              })
            : (0, I.Qm)(g)
              ? p.intl.formatToPlainString(p.t["1bSmxr"], {
                    guildName: D.name,
                })
              : p.intl.formatToPlainString(p.t.W87xDE, {
                    guildName: D.name,
                }),
        L = U && f === N.VV.MEMBER_SAFETY;
    return (0, r.jsxs)(o.$Td, {
        className: R.lm,
        color: o.Hv$.WARNING,
        children: [
            (0, r.jsx)(o.PMB, {
                onClick: P,
                noticeType: O.kqX.GUILD_RAID_NOTIFICATION,
            }),
            j,
            v,
            !L &&
                (0, r.jsx)(o.zr9, {
                    className: R.hP,
                    onClick: () => M(!0),
                    children: (0, r.jsx)("div", {
                        className: R.rx,
                        children: (0, r.jsx)("span", {
                            children: p.intl.string(p.t.zDJDhr),
                        }),
                    }),
                }),
        ],
    });
}
