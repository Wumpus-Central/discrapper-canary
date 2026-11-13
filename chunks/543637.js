a.d(n, { default: () => I });
var i = a(477900),
    e = a(582128),
    l = a(189213),
    r = a(772707),
    u = a(116833),
    o = a(855986),
    c = a(345942),
    s = a(71393),
    f = a(124077),
    g = a(674725),
    d = a(673383),
    E = a(752222),
    T = a(792996);
function I(t) {
    let { code: n, result: a, transitionState: I, onClose: N } = t,
        p = (0, g.A)(n),
        {
            title: A,
            subtitle: S,
            cta: m,
            isWaitingForGuild: O,
        } = (function (t, n, a) {
            let i = (0, g.A)(t),
                l = i?.guildId,
                r = (0, o.bG)([s.A], () => null != l && null != s.A.getGuild(l)),
                [u, I] = e.useState(!1),
                N =
                    null != n &&
                    !r &&
                    !u &&
                    (function (t, n) {
                        if (t !== d.Ti.JOINED) return !1;
                        switch (n) {
                            case d.gc.NEW_MEMBER:
                            case d.gc.ALREADY_MEMBER:
                            case d.gc.PENDING_VERIFICATION:
                                return !0;
                            default:
                                return !1;
                        }
                    })(n.joinStatus, n.guildJoinStatus);
            return (e.useEffect(() => {
                if (!N) return;
                let t = setTimeout(() => I(!0), 5e3);
                return () => clearTimeout(t);
            }, [N]),
            null == n)
                ? null
                : {
                      ...(function (t, n, a) {
                          let { joinStatus: i, failureReason: e, guildJoinStatus: l } = t,
                              { onClose: r, onGoToServer: u } = a,
                              { noun: o } = n,
                              c = { type: "CLOSE", text: T.intl.string(T.t.cpT0Cq), action: r },
                              s =
                                  null != u
                                      ? { type: "GO_TO_SERVER", text: T.intl.string(E.default.H1wMHV), action: u }
                                      : c;
                          if (i === d.Ti.JOINED)
                              return (function (t, n, a) {
                                  let { noun: i, orgName: e, characterName: l } = n,
                                      { goToServerCta: r, closeCta: u } = a,
                                      o = T.intl.formatToPlainString(E.default["w/spGp"], { noun: i });
                                  switch (t) {
                                      case d.gc.NEW_MEMBER:
                                      case d.gc.ALREADY_MEMBER:
                                          return {
                                              title: o,
                                              subtitle:
                                                  null != l
                                                      ? T.intl.formatToPlainString(E.default.PLA9Om, {
                                                            noun: i,
                                                            orgName: e,
                                                            characterName: l,
                                                        })
                                                      : T.intl.formatToPlainString(E.default.WF9Qgb, {
                                                            noun: i,
                                                            orgName: e,
                                                        }),
                                              cta: r,
                                          };
                                      case d.gc.PENDING_VERIFICATION:
                                          return {
                                              title: o,
                                              subtitle: T.intl.formatToPlainString(E.default["9K7Jdt"], {
                                                  noun: i,
                                                  orgName: e,
                                              }),
                                              cta: r,
                                          };
                                      case d.gc.APPLICATION:
                                          return {
                                              title: o,
                                              subtitle: T.intl.formatToPlainString(E.default.ODHuua, {
                                                  noun: i,
                                                  orgName: e,
                                              }),
                                              cta: u,
                                          };
                                      case d.gc.FAILED:
                                      default:
                                          return {
                                              title: o,
                                              subtitle: T.intl.formatToPlainString(E.default.Qo94hd, {
                                                  noun: i,
                                                  orgName: e,
                                              }),
                                              cta: u,
                                          };
                                  }
                              })(l, n, { goToServerCta: s, closeCta: c });
                          switch (e) {
                              case d.z1.ALREADY_JOINED:
                                  return {
                                      title: T.intl.formatToPlainString(E.default["1PMPYk"], { noun: o }),
                                      cta: s,
                                  };
                              case d.z1.IN_ANOTHER_ORGANIZATION:
                                  return {
                                      title: T.intl.formatToPlainString(E.default.vSlR1j, { noun: o }),
                                      subtitle: T.intl.formatToPlainString(E.default.kvDHqp, { noun: o }),
                                      cta: c,
                                  };
                              case d.z1.GUILD_FULL:
                                  return {
                                      title: T.intl.formatToPlainString(E.default["/7Gy4g"], { noun: o }),
                                      subtitle: T.intl.string(E.default["8TGo9L"]),
                                      cta: c,
                                  };
                              case d.z1.OTHER:
                              default:
                                  return { title: T.intl.string(E.default.sXbaMb), cta: c };
                          }
                      })(
                          n,
                          {
                              noun: (0, f.A)({ displayNoun: i?.displayNoun ?? null, lowercase: !0 }),
                              orgName: i?.organization.name ?? "",
                              characterName: n.character?.name ?? null,
                          },
                          {
                              onClose: a,
                              onGoToServer:
                                  r || N
                                      ? function () {
                                            null != l && r && (a(), (0, c.u)(l));
                                        }
                                      : null,
                          },
                      ),
                      isWaitingForGuild: N,
                  };
        })(n, a, N);
    if (null == p) return null;
    let P = [{ text: m.text, variant: "primary", loading: O, onClick: m.action }];
    return a.joinStatus === d.Ti.JOINED
        ? (0, i.jsx)(r.k, {
              transitionState: I,
              onClose: N,
              title: A,
              subtitle: S,
              graphic: {
                  type: "dynamic",
                  component: u.DynamicGraphicComponent.GAME_ORGANIZATION_JOIN_SUCCESS,
                  props: { character: a.character, organizationIconUrl: p.organization.iconUrl },
              },
              actions: P,
          })
        : (0, i.jsx)(l.a, { transitionState: I, onClose: N, title: A, subtitle: S, actions: P });
}
