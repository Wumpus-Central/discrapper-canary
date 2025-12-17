n.d(t, { Z: () => Z });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(726542),
    g = n(100527),
    f = n(933557),
    m = n(670188),
    b = n(210887),
    p = n(598077),
    h = n(699516),
    x = n(594174),
    j = n(259580),
    v = n(411198),
    O = n(51144),
    C = n(426563),
    y = n(909746),
    N = n(501801),
    E = n(981631),
    I = n(388032),
    S = n(876334);
function _(e) {
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
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class P extends i.PureComponent {
    render() {
        let { user: e, onContextMenu: t } = this.props;
        return (0, r.jsxs)("span", {
            onContextMenu: t,
            className: S.userHook,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/normal",
                    children: O.ZP.getUserTag(e, { mode: "username" }),
                }),
                "0" !== e.discriminator &&
                    (0, r.jsxs)(d.Text, {
                        variant: "text-xs/normal",
                        className: S.discrim,
                        children: ["#", e.discriminator],
                    }),
            ],
        });
    }
}
let w = i.forwardRef((e, t) => {
    let n,
        {
            log: l,
            className: o,
            expanded: b,
            guildId: O,
            guild: w,
            onChannelContextMenu: Z,
            onContentClick: R,
            onHeaderClick: D,
            onTargetContextMenu: A,
            onUserContextMenu: L,
            theme: k,
        } = e,
        G = i.useRef(null),
        M = (function () {
            let { changes: e } = l;
            return (
                (l.actionType !== E.vB8.DELETE ||
                    l.action === E.rsA.MEMBER_BAN_ADD ||
                    l.action === E.rsA.MEMBER_KICK ||
                    l.action === E.rsA.MEMBER_PRUNE) &&
                null != e &&
                e.some((e) => !(0, N.xO)(l, e))
            );
        })(),
        U = S.headerDefault;
    b ? (U = S.headerExpanded) : M && (U = S.headerClickable);
    let B = l.timestampStart.calendar(),
        F = l.timestampEnd.calendar();
    n =
        B === F
            ? (0, r.jsx)(d.Text, {
                  className: S.timestamp,
                  variant: "text-sm/normal",
                  children: B,
              })
            : (0, r.jsxs)(d.Text, {
                  className: S.timestamp,
                  variant: "text-sm/normal",
                  children: [B, "\u2014", F],
              });
    let H = M ? D : E.dG4;
    return (0, r.jsx)(s.mh, {
        id: l.id,
        children: (e) =>
            (0, r.jsxs)("div", {
                ref: t,
                className: a()(S.auditLog, o),
                children: [
                    (0, r.jsxs)(
                        d.P3F,
                        T(
                            _(
                                {
                                    className: U,
                                    "aria-expanded": b,
                                    onClick: H,
                                },
                                e,
                            ),
                            {
                                children: [
                                    (0, r.jsx)(N.mp, {
                                        action: l.action,
                                        actionType: l.actionType,
                                        targetType: l.targetType,
                                    }),
                                    (function () {
                                        let {
                                            user: e,
                                            userId: t,
                                            options: { integration_type: n },
                                        } = l;
                                        if (null != e && null != t)
                                            return (0, r.jsx)(m.Z, {
                                                targetElementRef: G,
                                                user: e,
                                                guildId: O,
                                                newAnalyticsLocations: [g.Z.AVATAR],
                                                children: (e) => {
                                                    var t;
                                                    return (0, r.jsx)(
                                                        d.qEK,
                                                        T(_({}, e), {
                                                            ref: G,
                                                            onClick: (t) => {
                                                                t.stopPropagation(), e.onClick(t);
                                                            },
                                                            className: S.avatar,
                                                            src:
                                                                l.action === E.rsA.AUTO_MODERATION_BLOCK_MESSAGE ||
                                                                l.action === E.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL ||
                                                                l.action ===
                                                                    E.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED ||
                                                                l.action === E.rsA.AUTO_MODERATION_QUARANTINE_USER
                                                                    ? (0, C.j)()
                                                                    : null == (t = l.user)
                                                                      ? void 0
                                                                      : t.getAvatarURL(O, 40),
                                                            "aria-hidden": !0,
                                                            size: d.EFr.SIZE_40,
                                                        }),
                                                    );
                                                },
                                            });
                                        if (null != n) {
                                            let e = u.Z.get(n);
                                            if (null != e) {
                                                let t = (0, c.wj)(k) ? e.icon.darkSVG : e.icon.lightSVG;
                                                return (0, r.jsx)(d.qEK, {
                                                    className: S.avatar,
                                                    src: t,
                                                    "aria-hidden": !0,
                                                    size: d.EFr.SIZE_40,
                                                });
                                            }
                                        }
                                        return null;
                                    })(),
                                    (0, r.jsxs)("div", {
                                        className: S.timeWrap,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: S.title,
                                                children: (function () {
                                                    var e;
                                                    let t,
                                                        { user: n, target: i, options: a } = l;
                                                    t = (0, v.lM)(i) ? i.name : i.toString();
                                                    let s = y.N5(l);
                                                    return null != s
                                                        ? (0, r.jsx)("div", {
                                                              className: S.overflowEllipsis,
                                                              children: I.intl.format(s, {
                                                                  user: n,
                                                                  target: t,
                                                                  userHook: (e, t) => {
                                                                      if (null != l.user)
                                                                          return (0, r.jsx)(
                                                                              P,
                                                                              {
                                                                                  user: l.user,
                                                                                  onContextMenu: L,
                                                                              },
                                                                              t,
                                                                          );
                                                                      if (null != l.options.integration_type) {
                                                                          var n;
                                                                          let e = u.Z.get(l.options.integration_type);
                                                                          return null !=
                                                                              (n = null == e ? void 0 : e.name)
                                                                              ? n
                                                                              : I.intl.string(I.t["n+olu7"]);
                                                                      }
                                                                      return I.intl.string(I.t["30mdIx"]);
                                                                  },
                                                                  targetHook: (e, t) =>
                                                                      l.targetType === E.KFR.USER &&
                                                                      l.target instanceof p.Z
                                                                          ? (0, r.jsx)(
                                                                                P,
                                                                                {
                                                                                    user: l.target,
                                                                                    onContextMenu: A,
                                                                                },
                                                                                t,
                                                                            )
                                                                          : (0, r.jsx)(
                                                                                "span",
                                                                                {
                                                                                    onContextMenu: A,
                                                                                    children: e,
                                                                                },
                                                                                t,
                                                                            ),
                                                                  count: null != (e = a.count) ? e : "",
                                                                  channel:
                                                                      null == a.channel || "string" == typeof a.channel
                                                                          ? a.channel
                                                                          : (0, f.F6)(a.channel, x.default, h.Z, !0),
                                                                  channelHook: (e, t) =>
                                                                      (0, r.jsx)(
                                                                          "span",
                                                                          {
                                                                              onContextMenu: Z,
                                                                              children: e,
                                                                          },
                                                                          t,
                                                                      ),
                                                                  subtarget: a.subtarget,
                                                              }),
                                                          })
                                                        : null;
                                                })(),
                                            }),
                                            n,
                                        ],
                                    }),
                                    M
                                        ? (0, r.jsx)(j.Z, {
                                              className: S.expand,
                                              foreground: S.expandForeground,
                                              expanded: b,
                                              "aria-hidden": !0,
                                          })
                                        : null,
                                ],
                            },
                        ),
                    ),
                    b ? (0, r.jsx)("div", { className: S.divider }) : null,
                    b && null != w
                        ? (0, r.jsx)(N.tP, {
                              log: l,
                              guild: w,
                              onContentClick: R,
                          })
                        : null,
                ],
            }),
    });
});
w.displayName = "GuildSettingsAuditLogEntry";
let Z = o.ZP.connectStores([b.Z], () => ({ theme: b.Z.theme }), { forwardRef: !0 })(w);
