l.d(e, { default: () => p });
var n,
    i = l(477900),
    r = l(582128),
    a = l(189213),
    s = l(772707),
    u = l(855986),
    o = l(345942),
    c = l(71393),
    E = l(674725),
    d = l(673383),
    f = l(752222),
    g = l(792996),
    N = (((n = {}).SUCCESS = "SUCCESS"), (n.PENDING = "PENDING"), (n.ERROR = "ERROR"), n);
function S(t, e) {
    if (t !== d.Ti.JOINED) return !1;
    switch (e) {
        case d.gc.NEW_MEMBER:
        case d.gc.ALREADY_MEMBER:
        case d.gc.PENDING_VERIFICATION:
            return !0;
        default:
            return !1;
    }
}
function I(t, e) {
    return null == t ? e : { type: "GO_TO_SERVER", text: g.intl.string(f.default.H1wMHV), action: t };
}
var C = l(646514),
    m = l(628284),
    R = l(406810),
    T = l(695366),
    h = l(331322),
    A = l(834730),
    D = l(404778),
    O = l(409700);
function _(t) {
    let { status: e } = t;
    switch (e) {
        case N.SUCCESS:
            return (0, i.jsx)(m.CircleCheckIcon, {
                size: "refresh_sm",
                color: C.A.colors.ICON_FEEDBACK_POSITIVE,
                "aria-hidden": !0,
            });
        case N.PENDING:
            return (0, i.jsx)(R.ClockIcon, {
                size: "refresh_sm",
                color: C.A.colors.ICON_FEEDBACK_WARNING,
                "aria-hidden": !0,
            });
        case N.ERROR:
            return (0, i.jsx)(T.CircleErrorIcon, {
                size: "refresh_sm",
                color: C.A.colors.ICON_FEEDBACK_CRITICAL,
                "aria-hidden": !0,
            });
    }
}
function P(t) {
    let { rows: e } = t;
    return (0, i.jsx)("ul", {
        className: O.N,
        children: e.map((t, l) => {
            let { key: n, status: r, title: a, subtitle: s } = t;
            return (0, i.jsxs)(
                h.B,
                {
                    as: "li",
                    direction: "horizontal",
                    align: "start",
                    gap: 16,
                    children: [
                        (0, i.jsx)(_, { status: r }),
                        (0, i.jsxs)(h.B, {
                            gap: 16,
                            className: O.Q,
                            children: [
                                (0, i.jsxs)(h.B, {
                                    gap: 4,
                                    children: [
                                        (0, i.jsx)(A.E, {
                                            tag: "div",
                                            variant: "heading-sm/semibold",
                                            color: "text-strong",
                                            children: a,
                                        }),
                                        null != s
                                            ? (0, i.jsx)(A.E, {
                                                  variant: "body-md/normal",
                                                  color: "text-default",
                                                  children: s,
                                              })
                                            : null,
                                    ],
                                }),
                                l < e.length - 1 ? (0, i.jsx)(D.c, {}) : null,
                            ],
                        }),
                    ],
                },
                n,
            );
        }),
    });
}
var x = l(380832);
function p(t) {
    let { code: e, result: l, transitionState: n, onClose: N } = t,
        C = (0, E.A)(e),
        {
            title: m,
            subtitle: R,
            rows: T,
            cta: h,
            isWaitingForGuild: A,
        } = (function (t, e, l) {
            let n = (0, E.A)(t),
                i = n?.guildId,
                a = (0, u.bG)([c.A], () => null != i && null != c.A.getGuild(i)),
                [s, N] = r.useState(!1),
                C = e?.guildJoinStatus ?? null,
                m = a && (null == C || C === d.gc.FAILED) ? d.gc.ALREADY_MEMBER : C,
                R = null != e && !a && !s && S(e.joinStatus, m);
            return (r.useEffect(() => {
                if (!R) return;
                let t = setTimeout(() => N(!0), 5e3);
                return () => clearTimeout(t);
            }, [R]),
            null == e)
                ? null
                : {
                      ...(function (t, e, l) {
                          let { joinStatus: n, failureReason: i, guildJoinStatus: r } = t,
                              { onClose: a, onGoToServer: s } = l;
                          if (n === d.Ti.JOINED) {
                              let t = { type: "CLOSE", text: g.intl.string(g.t.i4jeWR), action: a };
                              return (function (t, e, l) {
                                  let { goToServerCta: n, doneCta: i } = l,
                                      { displayNoun: r, orgName: a, characterName: s } = e,
                                      u = {
                                          key: "organization",
                                          status: "SUCCESS",
                                          title: g.intl.formatToPlainString(f.default.qJafqt, {
                                              orgName: a,
                                              displayNoun: r,
                                          }),
                                          subtitle:
                                              null != s
                                                  ? g.intl.formatToPlainString(f.default.mvLVyz, { characterName: s })
                                                  : null,
                                      };
                                  return {
                                      title: g.intl.string(f.default.i3axsB),
                                      rows: [
                                          u,
                                          (function (t, e) {
                                              let { displayNoun: l, guildName: n } = e,
                                                  i = g.intl.formatToPlainString(f.default.YoJwLe, { guildName: n });
                                              switch (t) {
                                                  case d.gc.NEW_MEMBER:
                                                  case d.gc.ALREADY_MEMBER:
                                                      return {
                                                          key: "server",
                                                          status: "SUCCESS",
                                                          title: g.intl.formatToPlainString(f.default["Y2DU/l"], {
                                                              guildName: n,
                                                          }),
                                                          subtitle: g.intl.formatToPlainString(f.default["316Vsz"], {
                                                              displayNoun: l,
                                                          }),
                                                      };
                                                  case d.gc.PENDING_VERIFICATION:
                                                      return {
                                                          key: "server",
                                                          status: "PENDING",
                                                          title: i,
                                                          subtitle: g.intl.string(f.default.MgcCQT),
                                                      };
                                                  case d.gc.APPLICATION:
                                                      return {
                                                          key: "server",
                                                          status: "PENDING",
                                                          title: i,
                                                          subtitle: g.intl.string(f.default["mZ/VKS"]),
                                                      };
                                                  case d.gc.FAILED:
                                                  default:
                                                      return {
                                                          key: "server",
                                                          status: "ERROR",
                                                          title: g.intl.formatToPlainString(f.default["4XMetY"], {
                                                              guildName: n,
                                                          }),
                                                          subtitle: g.intl.formatToPlainString(f.default.FQoZBu, {
                                                              guildName: n,
                                                          }),
                                                      };
                                              }
                                          })(t, e),
                                      ],
                                      cta: S(d.Ti.JOINED, t) ? n : i,
                                  };
                              })(r, e, { goToServerCta: I(s, t), doneCta: t });
                          }
                          let { displayNoun: u } = e,
                              o = { type: "CLOSE", text: g.intl.string(g.t.cpT0Cq), action: a },
                              c = I(s, o);
                          switch (i) {
                              case d.z1.ALREADY_JOINED:
                                  return {
                                      title: g.intl.formatToPlainString(f.default["1PMPYk"], { displayNoun: u }),
                                      cta: c,
                                  };
                              case d.z1.IN_ANOTHER_ORGANIZATION:
                                  return {
                                      title: g.intl.formatToPlainString(f.default.vSlR1j, { displayNoun: u }),
                                      subtitle: g.intl.formatToPlainString(f.default.kvDHqp, { displayNoun: u }),
                                      cta: o,
                                  };
                              case d.z1.GUILD_FULL:
                                  return {
                                      title: g.intl.formatToPlainString(f.default["/7Gy4g"], { displayNoun: u }),
                                      subtitle: g.intl.string(f.default["8TGo9L"]),
                                      cta: o,
                                  };
                              case d.z1.OTHER:
                              default:
                                  return { title: g.intl.string(f.default.sXbaMb), cta: o };
                          }
                      })(
                          { ...e, guildJoinStatus: m },
                          {
                              displayNoun: n?.displayNoun ?? "other",
                              orgName: n?.organization.name ?? "",
                              guildName: n?.linkedGuild.name ?? "",
                              characterName: e.character?.name ?? null,
                          },
                          {
                              onClose: l,
                              onGoToServer:
                                  a || R
                                      ? function () {
                                            null != i && a && (l(), (0, o.u)(i));
                                        }
                                      : null,
                          },
                      ),
                      isWaitingForGuild: R,
                  };
        })(e, l, N);
    if (null == C) return null;
    let D = [{ text: h.text, variant: "primary", loading: A, onClick: h.action }];
    return l.joinStatus === d.Ti.JOINED
        ? (0, i.jsx)(s.k, {
              transitionState: n,
              onClose: N,
              title: m,
              graphic: { type: "image", src: x.A },
              actions: D,
              children: null != T ? (0, i.jsx)(P, { rows: T }) : null,
          })
        : (0, i.jsx)(a.a, { transitionState: n, onClose: N, title: m, subtitle: R, actions: D });
}
