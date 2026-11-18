l.d(e, { default: () => j });
var n,
    i = l(477900),
    r = l(582128),
    a = l(189213),
    s = l(772707),
    u = l(855986),
    o = l(345942),
    c = l(71393),
    E = l(124077),
    d = l(674725),
    f = l(673383),
    g = l(752222),
    N = l(792996),
    S = (((n = {}).SUCCESS = "SUCCESS"), (n.PENDING = "PENDING"), (n.ERROR = "ERROR"), n);
function I(t, e) {
    if (t !== f.Ti.JOINED) return !1;
    switch (e) {
        case f.gc.NEW_MEMBER:
        case f.gc.ALREADY_MEMBER:
        case f.gc.PENDING_VERIFICATION:
            return !0;
        default:
            return !1;
    }
}
function C(t, e) {
    return null == t ? e : { type: "GO_TO_SERVER", text: N.intl.string(g.default.H1wMHV), action: t };
}
var m = l(646514),
    R = l(628284),
    A = l(406810),
    T = l(695366),
    h = l(331322),
    D = l(834730),
    O = l(404778),
    _ = l(409700);
function P(t) {
    let { status: e } = t;
    switch (e) {
        case S.SUCCESS:
            return (0, i.jsx)(R.CircleCheckIcon, {
                size: "refresh_sm",
                color: m.A.colors.ICON_FEEDBACK_POSITIVE,
                "aria-hidden": !0,
            });
        case S.PENDING:
            return (0, i.jsx)(A.ClockIcon, {
                size: "refresh_sm",
                color: m.A.colors.ICON_FEEDBACK_WARNING,
                "aria-hidden": !0,
            });
        case S.ERROR:
            return (0, i.jsx)(T.CircleErrorIcon, {
                size: "refresh_sm",
                color: m.A.colors.ICON_FEEDBACK_CRITICAL,
                "aria-hidden": !0,
            });
    }
}
function x(t) {
    let { rows: e } = t;
    return (0, i.jsx)("ul", {
        className: _.N,
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
                        (0, i.jsx)(P, { status: r }),
                        (0, i.jsxs)(h.B, {
                            gap: 16,
                            className: _.Q,
                            children: [
                                (0, i.jsxs)(h.B, {
                                    gap: 4,
                                    children: [
                                        (0, i.jsx)(D.E, {
                                            tag: "div",
                                            variant: "heading-sm/semibold",
                                            color: "text-strong",
                                            children: a,
                                        }),
                                        null != s
                                            ? (0, i.jsx)(D.E, {
                                                  variant: "body-md/normal",
                                                  color: "text-default",
                                                  children: s,
                                              })
                                            : null,
                                    ],
                                }),
                                l < e.length - 1 ? (0, i.jsx)(O.c, {}) : null,
                            ],
                        }),
                    ],
                },
                n,
            );
        }),
    });
}
var p = l(380832);
function j(t) {
    let { code: e, result: l, transitionState: n, onClose: S } = t,
        m = (0, d.A)(e),
        {
            title: R,
            subtitle: A,
            rows: T,
            cta: h,
            isWaitingForGuild: D,
        } = (function (t, e, l) {
            let n = (0, d.A)(t),
                i = n?.guildId,
                a = (0, u.bG)([c.A], () => null != i && null != c.A.getGuild(i)),
                [s, S] = r.useState(!1),
                m = e?.guildJoinStatus ?? null,
                R = a && (null == m || m === f.gc.FAILED) ? f.gc.ALREADY_MEMBER : m,
                A = null != e && !a && !s && I(e.joinStatus, R);
            return (r.useEffect(() => {
                if (!A) return;
                let t = setTimeout(() => S(!0), 5e3);
                return () => clearTimeout(t);
            }, [A]),
            null == e)
                ? null
                : {
                      ...(function (t, e, l) {
                          let { joinStatus: n, failureReason: i, guildJoinStatus: r } = t,
                              { onClose: a, onGoToServer: s } = l;
                          if (n === f.Ti.JOINED) {
                              let t = { type: "CLOSE", text: N.intl.string(N.t.i4jeWR), action: a };
                              return (function (t, e, l) {
                                  let { goToServerCta: n, doneCta: i } = l,
                                      { noun: r, orgName: a, characterName: s } = e,
                                      u = {
                                          key: "organization",
                                          status: "SUCCESS",
                                          title: N.intl.formatToPlainString(g.default.qJafqt, { orgName: a, noun: r }),
                                          subtitle:
                                              null != s
                                                  ? N.intl.formatToPlainString(g.default.mvLVyz, { characterName: s })
                                                  : null,
                                      };
                                  return {
                                      title: N.intl.string(g.default.i3axsB),
                                      rows: [
                                          u,
                                          (function (t, e) {
                                              let { noun: l, guildName: n } = e,
                                                  i = N.intl.formatToPlainString(g.default.YoJwLe, { guildName: n });
                                              switch (t) {
                                                  case f.gc.NEW_MEMBER:
                                                  case f.gc.ALREADY_MEMBER:
                                                      return {
                                                          key: "server",
                                                          status: "SUCCESS",
                                                          title: N.intl.formatToPlainString(g.default["Y2DU/l"], {
                                                              guildName: n,
                                                          }),
                                                          subtitle: N.intl.formatToPlainString(g.default["316Vsz"], {
                                                              noun: l,
                                                          }),
                                                      };
                                                  case f.gc.PENDING_VERIFICATION:
                                                      return {
                                                          key: "server",
                                                          status: "PENDING",
                                                          title: i,
                                                          subtitle: N.intl.string(g.default.MgcCQT),
                                                      };
                                                  case f.gc.APPLICATION:
                                                      return {
                                                          key: "server",
                                                          status: "PENDING",
                                                          title: i,
                                                          subtitle: N.intl.string(g.default["mZ/VKS"]),
                                                      };
                                                  case f.gc.FAILED:
                                                  default:
                                                      return {
                                                          key: "server",
                                                          status: "ERROR",
                                                          title: N.intl.formatToPlainString(g.default["4XMetY"], {
                                                              guildName: n,
                                                          }),
                                                          subtitle: N.intl.formatToPlainString(g.default.FQoZBu, {
                                                              guildName: n,
                                                          }),
                                                      };
                                              }
                                          })(t, e),
                                      ],
                                      cta: I(f.Ti.JOINED, t) ? n : i,
                                  };
                              })(r, e, { goToServerCta: C(s, t), doneCta: t });
                          }
                          let { noun: u } = e,
                              o = { type: "CLOSE", text: N.intl.string(N.t.cpT0Cq), action: a },
                              c = C(s, o);
                          switch (i) {
                              case f.z1.ALREADY_JOINED:
                                  return {
                                      title: N.intl.formatToPlainString(g.default["1PMPYk"], { noun: u }),
                                      cta: c,
                                  };
                              case f.z1.IN_ANOTHER_ORGANIZATION:
                                  return {
                                      title: N.intl.formatToPlainString(g.default.vSlR1j, { noun: u }),
                                      subtitle: N.intl.formatToPlainString(g.default.kvDHqp, { noun: u }),
                                      cta: o,
                                  };
                              case f.z1.GUILD_FULL:
                                  return {
                                      title: N.intl.formatToPlainString(g.default["/7Gy4g"], { noun: u }),
                                      subtitle: N.intl.string(g.default["8TGo9L"]),
                                      cta: o,
                                  };
                              case f.z1.OTHER:
                              default:
                                  return { title: N.intl.string(g.default.sXbaMb), cta: o };
                          }
                      })(
                          { ...e, guildJoinStatus: R },
                          {
                              noun: (0, E.A)({ displayNoun: n?.displayNoun ?? null, lowercase: !0 }),
                              orgName: n?.organization.name ?? "",
                              guildName: n?.linkedGuild.name ?? "",
                              characterName: e.character?.name ?? null,
                          },
                          {
                              onClose: l,
                              onGoToServer:
                                  a || A
                                      ? function () {
                                            null != i && a && (l(), (0, o.u)(i));
                                        }
                                      : null,
                          },
                      ),
                      isWaitingForGuild: A,
                  };
        })(e, l, S);
    if (null == m) return null;
    let O = [{ text: h.text, variant: "primary", loading: D, onClick: h.action }];
    return l.joinStatus === f.Ti.JOINED
        ? (0, i.jsx)(s.k, {
              transitionState: n,
              onClose: S,
              title: R,
              graphic: { type: "image", src: p.A },
              actions: O,
              children: null != T ? (0, i.jsx)(x, { rows: T }) : null,
          })
        : (0, i.jsx)(a.a, { transitionState: n, onClose: S, title: R, subtitle: A, actions: O });
}
