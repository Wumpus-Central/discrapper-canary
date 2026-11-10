i.d(n, { default: () => I });
var e,
    a = i(477900),
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
    p = (((e = {}).GO_TO_SERVER = "GO_TO_SERVER"), (e.CLOSE = "CLOSE"), e);
function I(t) {
    let { code: n, result: i, character: e, transitionState: I, onClose: N } = t,
        m = (0, g.A)(n),
        {
            title: A,
            subtitle: _,
            cta: R,
            isWaitingForGuild: G,
        } = (function (t, n, i) {
            let e = (0, g.A)(t),
                a = e?.guildId,
                r = (0, s.bG)([E.A], () => null != a && null != E.A.getGuild(a)),
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
                          let { joinStatus: e, failureReason: a, guildJoinStatus: l } = t,
                              { onClose: r, onGoToServer: u } = i,
                              { noun: o } = n,
                              c = { type: "CLOSE", text: O.intl.string(O.t.cpT0Cq), action: r },
                              s =
                                  null != u
                                      ? { type: "GO_TO_SERVER", text: O.intl.string(S.default.H1wMHV), action: u }
                                      : c;
                          if (e === T.Ti.JOINED)
                              return (function (t, n, i) {
                                  let { noun: e, orgName: a, characterName: l } = n,
                                      { goToServerCta: r, closeCta: u } = i,
                                      o = O.intl.formatToPlainString(S.default["w/spGp"], { noun: e });
                                  switch (t) {
                                      case T.gc.NEW_MEMBER:
                                      case T.gc.ALREADY_MEMBER:
                                          return {
                                              title: o,
                                              subtitle:
                                                  null != l
                                                      ? O.intl.formatToPlainString(S.default.PLA9Om, {
                                                            noun: e,
                                                            orgName: a,
                                                            characterName: l,
                                                        })
                                                      : O.intl.formatToPlainString(S.default.WF9Qgb, {
                                                            noun: e,
                                                            orgName: a,
                                                        }),
                                              cta: r,
                                          };
                                      case T.gc.PENDING_VERIFICATION:
                                          return {
                                              title: o,
                                              subtitle: O.intl.formatToPlainString(S.default["9K7Jdt"], {
                                                  noun: e,
                                                  orgName: a,
                                              }),
                                              cta: r,
                                          };
                                      case T.gc.APPLICATION:
                                          return {
                                              title: o,
                                              subtitle: O.intl.formatToPlainString(S.default.ODHuua, {
                                                  noun: e,
                                                  orgName: a,
                                              }),
                                              cta: u,
                                          };
                                      case T.gc.FAILED:
                                      default:
                                          return {
                                              title: o,
                                              subtitle: O.intl.formatToPlainString(S.default.Qo94hd, {
                                                  noun: e,
                                                  orgName: a,
                                              }),
                                              cta: u,
                                          };
                                  }
                              })(l, n, { goToServerCta: s, closeCta: c });
                          switch (a) {
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
                              noun: (0, d.A)({ displayNoun: e?.displayNoun ?? null, lowercase: !0 }),
                              orgName: e?.organization.name ?? "",
                              characterName: n.characterName,
                          },
                          {
                              onClose: i,
                              onGoToServer:
                                  r || c
                                      ? function () {
                                            null != a && r && (i(), (0, f.u)(a));
                                        }
                                      : null,
                          },
                      ),
                      isWaitingForGuild: c,
                  };
        })(n, i, N);
    if (null == m) return null;
    let P = R.type === p.GO_TO_SERVER,
        C = [
            {
                text: R.text,
                variant: "primary",
                icon: P ? u.ExperimentalGameControllerLinkIcon : void 0,
                loading: G,
                onClick: R.action,
            },
        ];
    return i.joinStatus === T.Ti.JOINED
        ? (0, a.jsx)(o.k, {
              transitionState: I,
              onClose: N,
              title: A,
              subtitle: _,
              graphic: {
                  type: "dynamic",
                  component: c.DynamicGraphicComponent.GAME_ORGANIZATION_JOIN_SUCCESS,
                  props: { character: e, organizationIconUrl: m.organization.iconUrl },
              },
              actions: C,
          })
        : (0, a.jsx)(r.a, { transitionState: I, onClose: N, title: A, subtitle: _, actions: C });
}
