n.d(e, { default: () => G });
var l,
    i = n(477900),
    r = n(582128),
    a = n(189213),
    s = n(772707),
    u = n(116833),
    o = n(855986),
    c = n(345942),
    E = n(71393),
    d = n(124077),
    f = n(674725),
    g = n(673383),
    N = n(752222),
    S = n(792996),
    I = (((l = {}).SUCCESS = "SUCCESS"), (l.PENDING = "PENDING"), (l.ERROR = "ERROR"), l);
function C(t, e) {
    if (t !== g.Ti.JOINED) return !1;
    switch (e) {
        case g.gc.NEW_MEMBER:
        case g.gc.ALREADY_MEMBER:
        case g.gc.PENDING_VERIFICATION:
            return !0;
        default:
            return !1;
    }
}
function m(t, e) {
    return null == t ? e : { type: "GO_TO_SERVER", text: S.intl.string(N.default.H1wMHV), action: t };
}
var A = n(646514),
    R = n(628284),
    h = n(406810),
    T = n(695366),
    O = n(331322),
    _ = n(834730),
    p = n(404778),
    D = n(409700);
function P(t) {
    let { status: e } = t;
    switch (e) {
        case I.SUCCESS:
            return (0, i.jsx)(R.CircleCheckIcon, {
                size: "refresh_sm",
                color: A.A.colors.ICON_FEEDBACK_POSITIVE,
                "aria-hidden": !0,
            });
        case I.PENDING:
            return (0, i.jsx)(h.ClockIcon, {
                size: "refresh_sm",
                color: A.A.colors.ICON_FEEDBACK_WARNING,
                "aria-hidden": !0,
            });
        case I.ERROR:
            return (0, i.jsx)(T.CircleErrorIcon, {
                size: "refresh_sm",
                color: A.A.colors.ICON_FEEDBACK_CRITICAL,
                "aria-hidden": !0,
            });
    }
}
function x(t) {
    let { rows: e } = t;
    return (0, i.jsx)("ul", {
        className: D.N,
        children: e.map((t, n) => {
            let { key: l, status: r, title: a, subtitle: s } = t;
            return (0, i.jsxs)(
                O.B,
                {
                    as: "li",
                    direction: "horizontal",
                    align: "start",
                    gap: 16,
                    children: [
                        (0, i.jsx)(P, { status: r }),
                        (0, i.jsxs)(O.B, {
                            gap: 16,
                            className: D.Q,
                            children: [
                                (0, i.jsxs)(O.B, {
                                    gap: 4,
                                    children: [
                                        (0, i.jsx)(_.E, {
                                            tag: "div",
                                            variant: "heading-sm/semibold",
                                            color: "text-strong",
                                            children: a,
                                        }),
                                        null != s
                                            ? (0, i.jsx)(_.E, {
                                                  variant: "body-md/normal",
                                                  color: "text-default",
                                                  children: s,
                                              })
                                            : null,
                                    ],
                                }),
                                n < e.length - 1 ? (0, i.jsx)(p.c, {}) : null,
                            ],
                        }),
                    ],
                },
                l,
            );
        }),
    });
}
function G(t) {
    let { code: e, result: n, transitionState: l, onClose: I } = t,
        A = (0, f.A)(e),
        {
            title: R,
            subtitle: h,
            rows: T,
            cta: O,
            isWaitingForGuild: _,
        } = (function (t, e, n) {
            let l = (0, f.A)(t),
                i = l?.guildId,
                a = (0, o.bG)([E.A], () => null != i && null != E.A.getGuild(i)),
                [s, u] = r.useState(!1),
                I = e?.guildJoinStatus ?? null,
                A = a && (null == I || I === g.gc.FAILED) ? g.gc.ALREADY_MEMBER : I,
                R = null != e && !a && !s && C(e.joinStatus, A);
            return (r.useEffect(() => {
                if (!R) return;
                let t = setTimeout(() => u(!0), 5e3);
                return () => clearTimeout(t);
            }, [R]),
            null == e)
                ? null
                : {
                      ...(function (t, e, n) {
                          let { joinStatus: l, failureReason: i, guildJoinStatus: r } = t,
                              { onClose: a, onGoToServer: s } = n;
                          if (l === g.Ti.JOINED) {
                              let t = { type: "CLOSE", text: S.intl.string(S.t.i4jeWR), action: a };
                              return (function (t, e, n) {
                                  let { goToServerCta: l, doneCta: i } = n,
                                      { noun: r, orgName: a, characterName: s } = e,
                                      u = {
                                          key: "organization",
                                          status: "SUCCESS",
                                          title: S.intl.formatToPlainString(N.default.qJafqt, { orgName: a, noun: r }),
                                          subtitle:
                                              null != s
                                                  ? S.intl.formatToPlainString(N.default.mvLVyz, { characterName: s })
                                                  : null,
                                      };
                                  return {
                                      title: S.intl.string(N.default.i3axsB),
                                      rows: [
                                          u,
                                          (function (t, e) {
                                              let { noun: n, guildName: l } = e,
                                                  i = S.intl.formatToPlainString(N.default.YoJwLe, { guildName: l });
                                              switch (t) {
                                                  case g.gc.NEW_MEMBER:
                                                  case g.gc.ALREADY_MEMBER:
                                                      return {
                                                          key: "server",
                                                          status: "SUCCESS",
                                                          title: S.intl.formatToPlainString(N.default["Y2DU/l"], {
                                                              guildName: l,
                                                          }),
                                                          subtitle: S.intl.formatToPlainString(N.default["316Vsz"], {
                                                              noun: n,
                                                          }),
                                                      };
                                                  case g.gc.PENDING_VERIFICATION:
                                                      return {
                                                          key: "server",
                                                          status: "PENDING",
                                                          title: i,
                                                          subtitle: S.intl.string(N.default.MgcCQT),
                                                      };
                                                  case g.gc.APPLICATION:
                                                      return {
                                                          key: "server",
                                                          status: "PENDING",
                                                          title: i,
                                                          subtitle: S.intl.string(N.default["mZ/VKS"]),
                                                      };
                                                  case g.gc.FAILED:
                                                  default:
                                                      return {
                                                          key: "server",
                                                          status: "ERROR",
                                                          title: S.intl.formatToPlainString(N.default["4XMetY"], {
                                                              guildName: l,
                                                          }),
                                                          subtitle: S.intl.formatToPlainString(N.default.FQoZBu, {
                                                              guildName: l,
                                                          }),
                                                      };
                                              }
                                          })(t, e),
                                      ],
                                      cta: C(g.Ti.JOINED, t) ? l : i,
                                  };
                              })(r, e, { goToServerCta: m(s, t), doneCta: t });
                          }
                          let { noun: u } = e,
                              o = { type: "CLOSE", text: S.intl.string(S.t.cpT0Cq), action: a },
                              c = m(s, o);
                          switch (i) {
                              case g.z1.ALREADY_JOINED:
                                  return {
                                      title: S.intl.formatToPlainString(N.default["1PMPYk"], { noun: u }),
                                      cta: c,
                                  };
                              case g.z1.IN_ANOTHER_ORGANIZATION:
                                  return {
                                      title: S.intl.formatToPlainString(N.default.vSlR1j, { noun: u }),
                                      subtitle: S.intl.formatToPlainString(N.default.kvDHqp, { noun: u }),
                                      cta: o,
                                  };
                              case g.z1.GUILD_FULL:
                                  return {
                                      title: S.intl.formatToPlainString(N.default["/7Gy4g"], { noun: u }),
                                      subtitle: S.intl.string(N.default["8TGo9L"]),
                                      cta: o,
                                  };
                              case g.z1.OTHER:
                              default:
                                  return { title: S.intl.string(N.default.sXbaMb), cta: o };
                          }
                      })(
                          { ...e, guildJoinStatus: A },
                          {
                              noun: (0, d.A)({ displayNoun: l?.displayNoun ?? null, lowercase: !0 }),
                              orgName: l?.organization.name ?? "",
                              guildName: l?.linkedGuild.name ?? "",
                              characterName: e.character?.name ?? null,
                          },
                          {
                              onClose: n,
                              onGoToServer:
                                  a || R
                                      ? function () {
                                            null != i && a && (n(), (0, c.u)(i));
                                        }
                                      : null,
                          },
                      ),
                      isWaitingForGuild: R,
                  };
        })(e, n, I);
    if (null == A) return null;
    let p = [{ text: O.text, variant: "primary", loading: _, onClick: O.action }];
    return n.joinStatus === g.Ti.JOINED
        ? (0, i.jsx)(s.k, {
              transitionState: l,
              onClose: I,
              title: R,
              graphic: {
                  type: "dynamic",
                  component: u.DynamicGraphicComponent.GAME_ORGANIZATION_JOIN_SUCCESS,
                  props: { character: n.character, organizationIconUrl: A.organization.iconUrl },
              },
              actions: p,
              children: null != T ? (0, i.jsx)(x, { rows: T }) : null,
          })
        : (0, i.jsx)(a.a, { transitionState: l, onClose: I, title: R, subtitle: h, actions: p });
}
