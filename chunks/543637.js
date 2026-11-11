i.d(n, { default: () => I });
var a,
    e = i(477900),
    l = i(582128),
    r = i(189213),
    u = i(141628),
    o = i(772707),
    c = i(116833),
    s = i(855986),
    f = i(345942),
    E = i(71393),
    d = i(124077),
    g = i(674725),
    T = i(673383),
    S = i(752222),
    O = i(792996),
    p = (((a = {}).GO_TO_SERVER = "GO_TO_SERVER"), (a.CLOSE = "CLOSE"), a);
function I(t) {
    let { code: n, result: i, transitionState: a, onClose: I } = t,
        m = (0, g.A)(n),
        {
            title: N,
            subtitle: A,
            cta: _,
            isWaitingForGuild: R,
        } = (function (t, n, i) {
            let a = (0, g.A)(t),
                e = a?.guildId,
                r = (0, s.bG)([E.A], () => null != e && null != E.A.getGuild(e)),
                [u, o] = l.useState(!1),
                c =
                    null != n &&
                    !r &&
                    !u &&
                    (function (t, n) {
                        if (t !== T.Ti.JOINED) return !1;
                        switch (n) {
                            case T.gc.NEW_MEMBER:
                            case T.gc.ALREADY_MEMBER:
                            case T.gc.PENDING_VERIFICATION:
                                return !0;
                            default:
                                return !1;
                        }
                    })(n.joinStatus, n.guildJoinStatus);
            return (l.useEffect(() => {
                if (!c) return;
                let t = setTimeout(() => o(!0), 5e3);
                return () => clearTimeout(t);
            }, [c]),
            null == n)
                ? null
                : {
                      ...(function (t, n, i) {
                          let { joinStatus: a, failureReason: e, guildJoinStatus: l } = t,
                              { onClose: r, onGoToServer: u } = i,
                              { noun: o } = n,
                              c = { type: "CLOSE", text: O.intl.string(O.t.cpT0Cq), action: r },
                              s =
                                  null != u
                                      ? { type: "GO_TO_SERVER", text: O.intl.string(S.default.H1wMHV), action: u }
                                      : c;
                          if (a === T.Ti.JOINED)
                              return (function (t, n, i) {
                                  let { noun: a, orgName: e, characterName: l } = n,
                                      { goToServerCta: r, closeCta: u } = i,
                                      o = O.intl.formatToPlainString(S.default["w/spGp"], { noun: a });
                                  switch (t) {
                                      case T.gc.NEW_MEMBER:
                                      case T.gc.ALREADY_MEMBER:
                                          return {
                                              title: o,
                                              subtitle:
                                                  null != l
                                                      ? O.intl.formatToPlainString(S.default.PLA9Om, {
                                                            noun: a,
                                                            orgName: e,
                                                            characterName: l,
                                                        })
                                                      : O.intl.formatToPlainString(S.default.WF9Qgb, {
                                                            noun: a,
                                                            orgName: e,
                                                        }),
                                              cta: r,
                                          };
                                      case T.gc.PENDING_VERIFICATION:
                                          return {
                                              title: o,
                                              subtitle: O.intl.formatToPlainString(S.default["9K7Jdt"], {
                                                  noun: a,
                                                  orgName: e,
                                              }),
                                              cta: r,
                                          };
                                      case T.gc.APPLICATION:
                                          return {
                                              title: o,
                                              subtitle: O.intl.formatToPlainString(S.default.ODHuua, {
                                                  noun: a,
                                                  orgName: e,
                                              }),
                                              cta: u,
                                          };
                                      case T.gc.FAILED:
                                      default:
                                          return {
                                              title: o,
                                              subtitle: O.intl.formatToPlainString(S.default.Qo94hd, {
                                                  noun: a,
                                                  orgName: e,
                                              }),
                                              cta: u,
                                          };
                                  }
                              })(l, n, { goToServerCta: s, closeCta: c });
                          switch (e) {
                              case T.z1.ALREADY_JOINED:
                                  return {
                                      title: O.intl.formatToPlainString(S.default["1PMPYk"], { noun: o }),
                                      cta: s,
                                  };
                              case T.z1.IN_ANOTHER_ORGANIZATION:
                                  return {
                                      title: O.intl.formatToPlainString(S.default.vSlR1j, { noun: o }),
                                      subtitle: O.intl.formatToPlainString(S.default.kvDHqp, { noun: o }),
                                      cta: c,
                                  };
                              case T.z1.GUILD_FULL:
                                  return {
                                      title: O.intl.formatToPlainString(S.default["/7Gy4g"], { noun: o }),
                                      subtitle: O.intl.string(S.default["8TGo9L"]),
                                      cta: c,
                                  };
                              case T.z1.OTHER:
                              default:
                                  return { title: O.intl.string(S.default.sXbaMb), cta: c };
                          }
                      })(
                          n,
                          {
                              noun: (0, d.A)({ displayNoun: a?.displayNoun ?? null, lowercase: !0 }),
                              orgName: a?.organization.name ?? "",
                              characterName: n.character?.name ?? null,
                          },
                          {
                              onClose: i,
                              onGoToServer:
                                  r || c
                                      ? function () {
                                            null != e && r && (i(), (0, f.u)(e));
                                        }
                                      : null,
                          },
                      ),
                      isWaitingForGuild: c,
                  };
        })(n, i, I);
    if (null == m) return null;
    let G = _.type === p.GO_TO_SERVER,
        P = [
            {
                text: _.text,
                variant: "primary",
                icon: G ? u.ExperimentalGameControllerLinkIcon : void 0,
                loading: R,
                onClick: _.action,
            },
        ];
    return i.joinStatus === T.Ti.JOINED
        ? (0, e.jsx)(o.k, {
              transitionState: a,
              onClose: I,
              title: N,
              subtitle: A,
              graphic: {
                  type: "dynamic",
                  component: c.DynamicGraphicComponent.GAME_ORGANIZATION_JOIN_SUCCESS,
                  props: { character: i.character, organizationIconUrl: m.organization.iconUrl },
              },
              actions: P,
          })
        : (0, e.jsx)(r.a, { transitionState: a, onClose: I, title: N, subtitle: A, actions: P });
}
