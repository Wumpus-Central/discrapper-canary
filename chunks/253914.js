l.d(e, { default: () => p });
var n,
    i = l(477900),
    a = l(582128),
    r = l(189213),
    s = l(772707),
    u = l(855986),
    o = l(345942),
    c = l(71393),
    d = l(674725),
    f = l(673383),
    g = l(291848),
    E = l(792996),
    N = (((n = {}).SUCCESS = "SUCCESS"), (n.PENDING = "PENDING"), (n.ERROR = "ERROR"), n);
function S(t, e) {
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
function m(t, e) {
    return null == t ? e : { text: E.intl.string(g.default.H1wMHV), action: t };
}
var I = l(646514),
    C = l(628284),
    T = l(406810),
    h = l(695366),
    A = l(331322),
    R = l(834730),
    D = l(404778),
    P = l(409700);
function x(t) {
    let { status: e } = t;
    switch (e) {
        case N.SUCCESS:
            return (0, i.jsx)(C.CircleCheckIcon, {
                size: "refresh_sm",
                color: I.A.colors.ICON_FEEDBACK_POSITIVE,
                "aria-hidden": !0,
            });
        case N.PENDING:
            return (0, i.jsx)(T.ClockIcon, {
                size: "refresh_sm",
                color: I.A.colors.ICON_FEEDBACK_WARNING,
                "aria-hidden": !0,
            });
        case N.ERROR:
            return (0, i.jsx)(h.CircleErrorIcon, {
                size: "refresh_sm",
                color: I.A.colors.ICON_FEEDBACK_CRITICAL,
                "aria-hidden": !0,
            });
    }
}
function O(t) {
    let { rows: e } = t;
    return (0, i.jsx)("ul", {
        className: P.N,
        children: e.map((t, l) => {
            let { key: n, status: a, title: r, subtitle: s } = t;
            return (0, i.jsxs)(
                A.B,
                {
                    as: "li",
                    direction: "horizontal",
                    align: "start",
                    gap: 16,
                    children: [
                        (0, i.jsx)(x, { status: a }),
                        (0, i.jsxs)(A.B, {
                            gap: 16,
                            className: P.Q,
                            children: [
                                (0, i.jsxs)(A.B, {
                                    gap: 4,
                                    children: [
                                        (0, i.jsx)(R.E, {
                                            tag: "div",
                                            variant: "heading-sm/semibold",
                                            color: "text-strong",
                                            children: r,
                                        }),
                                        null != s
                                            ? (0, i.jsx)(R.E, {
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
var _ = l(380832);
function p(t) {
    let { code: e, result: l, transitionState: n, onClose: N } = t,
        I = (0, d.A)(e),
        {
            title: C,
            subtitle: T,
            rows: h,
            cta: A,
            isWaitingForGuild: R,
        } = (function (t, e, l) {
            let n = (0, d.A)(t),
                i = n?.guildId,
                r = (0, u.bG)([c.A], () => null != i && null != c.A.getGuild(i)),
                [s, N] = a.useState(!1),
                I = e?.guildJoinStatus ?? null,
                C = r && (null == I || I === f.gc.FAILED) ? f.gc.ALREADY_MEMBER : I,
                T = null != e && !r && !s && S(e.joinStatus, C);
            return (a.useEffect(() => {
                if (!T) return;
                let t = setTimeout(() => N(!0), 5e3);
                return () => clearTimeout(t);
            }, [T]),
            null == e)
                ? null
                : {
                      ...(function (t, e, l) {
                          let { joinStatus: n, failureReason: i, guildJoinStatus: a } = t,
                              { onClose: r, onGoToServer: s } = l;
                          if (n === f.Ti.JOINED) {
                              let t = { text: E.intl.string(E.t.i4jeWR), action: r };
                              return (function (t, e, l) {
                                  let { goToServerCta: n, doneCta: i } = l,
                                      { displayNoun: a, orgName: r, characterName: s } = e,
                                      u = {
                                          key: "organization",
                                          status: "SUCCESS",
                                          title: E.intl.formatToPlainString(g.default.qJafqt, {
                                              orgName: r,
                                              displayNoun: a,
                                          }),
                                          subtitle:
                                              null != s
                                                  ? E.intl.formatToPlainString(g.default.mvLVyz, { characterName: s })
                                                  : null,
                                      };
                                  return {
                                      title: E.intl.string(g.default.i3axsB),
                                      rows: [
                                          u,
                                          (function (t, e) {
                                              let { displayNoun: l, guildName: n } = e,
                                                  i = E.intl.formatToPlainString(g.default.YoJwLe, { guildName: n });
                                              switch (t) {
                                                  case f.gc.NEW_MEMBER:
                                                  case f.gc.ALREADY_MEMBER:
                                                      return {
                                                          key: "server",
                                                          status: "SUCCESS",
                                                          title: E.intl.formatToPlainString(g.default["Y2DU/l"], {
                                                              guildName: n,
                                                          }),
                                                          subtitle: E.intl.formatToPlainString(g.default["316Vsz"], {
                                                              displayNoun: l,
                                                          }),
                                                      };
                                                  case f.gc.PENDING_VERIFICATION:
                                                      return {
                                                          key: "server",
                                                          status: "PENDING",
                                                          title: i,
                                                          subtitle: E.intl.string(g.default.MgcCQT),
                                                      };
                                                  case f.gc.APPLICATION:
                                                      return {
                                                          key: "server",
                                                          status: "PENDING",
                                                          title: i,
                                                          subtitle: E.intl.string(g.default["mZ/VKS"]),
                                                      };
                                                  case f.gc.FAILED:
                                                  default:
                                                      return {
                                                          key: "server",
                                                          status: "ERROR",
                                                          title: E.intl.formatToPlainString(g.default["4XMetY"], {
                                                              guildName: n,
                                                          }),
                                                          subtitle: E.intl.formatToPlainString(g.default.FQoZBu, {
                                                              guildName: n,
                                                          }),
                                                      };
                                              }
                                          })(t, e),
                                      ],
                                      cta: S(f.Ti.JOINED, t) ? n : i,
                                  };
                              })(a, e, { goToServerCta: m(s, t), doneCta: t });
                          }
                          let { displayNoun: u, guildName: o, gameName: c } = e,
                              d = { text: E.intl.string(E.t.cpT0Cq), action: r },
                              N = m(s, d);
                          switch (i) {
                              case f.z1.ALREADY_JOINED:
                                  return {
                                      title: E.intl.formatToPlainString(g.default["1PMPYk"], { displayNoun: u }),
                                      subtitle: E.intl.formatToPlainString(
                                          null != s ? g.default.Y9O92D : g.default["6jk81f"],
                                          { displayNoun: u, guildName: o },
                                      ),
                                      cta: N,
                                  };
                              case f.z1.IN_ANOTHER_ORGANIZATION:
                                  return {
                                      title: E.intl.formatToPlainString(g.default.vSlR1j, { displayNoun: u }),
                                      subtitle: E.intl.formatToPlainString(g.default.kvDHqp, {
                                          displayNoun: u,
                                          gameName: c,
                                      }),
                                      cta: d,
                                  };
                              case f.z1.GUILD_FULL:
                                  return {
                                      title: E.intl.formatToPlainString(g.default["/7Gy4g"], { displayNoun: u }),
                                      subtitle: E.intl.string(g.default["8TGo9L"]),
                                      cta: d,
                                  };
                              case f.z1.OTHER:
                              default:
                                  return {
                                      title: E.intl.string(g.default.sXbaMb),
                                      subtitle: E.intl.formatToPlainString(g.default.OGYgMi, { displayNoun: u }),
                                      cta: d,
                                  };
                          }
                      })(
                          { ...e, guildJoinStatus: C },
                          {
                              displayNoun: n?.displayNoun ?? "other",
                              orgName: n?.organization.name ?? "",
                              guildName: n?.linkedGuild.name ?? "",
                              gameName: n?.application.name ?? "",
                              characterName: e.character?.name ?? null,
                          },
                          {
                              onClose: l,
                              onGoToServer:
                                  r || T
                                      ? function () {
                                            null != i && r && (l(), (0, o.u)(i));
                                        }
                                      : null,
                          },
                      ),
                      isWaitingForGuild: T,
                  };
        })(e, l, N);
    if (null == I) return null;
    let D = [{ text: A.text, variant: "primary", loading: R, onClick: A.action }];
    return l.joinStatus === f.Ti.JOINED
        ? (0, i.jsx)(s.k, {
              transitionState: n,
              onClose: N,
              title: C,
              graphic: { type: "image", src: _.A },
              actions: D,
              children: null != h ? (0, i.jsx)(O, { rows: h }) : null,
          })
        : (0, i.jsx)(r.a, { transitionState: n, onClose: N, title: C, subtitle: T, actions: D });
}
