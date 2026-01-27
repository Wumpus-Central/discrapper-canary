n.d(t, {
    A: () => U,
}),
    n(321073),
    n(114821),
    n(339614);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    c = n(311907),
    u = n(3026),
    d = n(397927),
    p = n(846293),
    m = n(933958),
    f = n(793574),
    g = n(688810),
    h = n(572211),
    _ = n(178910),
    b = n(354287),
    A = n(112150),
    y = n(574660),
    v = n(429913),
    x = n(713654),
    O = n(734057),
    E = n(71393),
    j = n(576705),
    C = n(287809),
    I = n(954571),
    S = n(486020),
    T = n(860689),
    N = n(168428),
    P = n(652215),
    w = n(768349),
    R = n(172799),
    D = n(985018),
    L = n(320160);

function M(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, r.jsxs)(
                    "div",
                    {
                        className: L.MY,
                        children: [
                            (0, r.jsx)("i", {
                                className: L.QD,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: L.U9,
                                color: i,
                                children: D.intl.format(D.t["LC+S+m"], {
                                    membersOnline: n,
                                }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != t &&
            l.push(
                (0, r.jsxs)(
                    "div",
                    {
                        className: L.MY,
                        children: [
                            (0, r.jsx)("i", {
                                className: L.o6,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: L.U9,
                                color: i,
                                children: D.intl.format(D.t.zRl6XR, {
                                    count: t,
                                }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, r.jsx)("div", {
            className: L.rc,
            children: l,
        })
    );
}

function k(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e;
    if (null != t && null != n) {
        let e = (0, x.gU)(t, n);
        return (0, r.jsxs)("div", {
            className: a()(L.Ix, {
                [L.v6]: i,
            }),
            children: [
                null != e
                    ? (0, r.jsx)(e, {
                          className: L.p,
                          size: "xs",
                          color: "currentColor",
                      })
                    : null,
                (0, r.jsx)(u.A, {
                    children: (0, r.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: l,
                        children: D.intl.format(D.t["dc+LW4"], {
                            channelName: t.name,
                            serverName: n.name,
                        }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, r.jsx)("div", {
              className: a()(L.Ix, {
                  [L.v6]: i,
              }),
              children: (0, r.jsx)(u.A, {
                  children: (0, r.jsx)(d.Text, {
                      variant: "text-xs/normal",
                      color: l,
                      children: D.intl.format(D.t.u0vaDE, {
                          guildName: n.name,
                      }),
                  }),
              }),
          })
        : null;
}

function U(e) {
    var t, n;
    let l,
        a,
        { invite: s, message: u, getAcceptInviteContext: d } = e,
        { approximate_member_count: h, approximate_presence_count: _, target_type: b, target_application: A } = s;
    o()(b === R.yV.EMBEDDED_APPLICATION && null != A, "invalid application invite");
    let y = i.useCallback(() => {
            var e;
            I.default.track(P.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: A.id,
                invite_inviter_id: null == (e = s.inviter) ? void 0 : e.id,
            });
        }, [null == (t = s.inviter) ? void 0 : t.id, A.id]),
        x = (0, c.bG)([E.A], () => (null != s.guild ? E.A.getGuild(s.guild.id) : null), [s]),
        S = (0, v.A)([A.id])[0],
        w = (0, c.bG)([m.Ay], () => {
            var e;
            return (
                (null == s ? void 0 : s.channel) != null &&
                (null == (e = m.Ay.getSelfEmbeddedActivityForChannel(s.channel.id)) ? void 0 : e.applicationId) === A.id
            );
        }),
        L = (0, c.bG)([m.Ay], () => {
            var e;
            return (
                (null == (e = s.channel) ? void 0 : e.id) != null
                    ? m.Ay.getEmbeddedActivitiesForChannel(s.channel.id)
                    : []
            ).some((e) => {
                let { applicationId: t } = e;
                return A.id === t;
            });
        }),
        M = O.A.getChannel(null == (n = s.channel) ? void 0 : n.id),
        k = (0, c.bG)([j.A], () => null != M && j.A.can(P.xBc.USE_EMBEDDED_ACTIVITIES, M), [M]),
        { analyticsLocations: U } = (0, g.Ay)(f.A.INVITE_EMBED),
        B = (0, c.yK)(
            [m.Ay],
            () =>
                null != M
                    ? m.Ay.getEmbeddedActivitiesForChannel(M.id)
                          .filter((e) => e.applicationId === A.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [M, A.id],
        ),
        F = (0, c.yK)([C.default], () => B.map((e) => C.default.getUser(e)).filter((e) => null != e), [B]),
        H = i.useCallback(() => {
            (0, p.he)(
                {
                    invite: s,
                    action: "accept",
                    inviter_id: u.author.id,
                    invite_message_id: u.id,
                },
                U,
            ),
                p.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: s.code,
                    context: d("Invite Button Embed"),
                    analyticsLocations: U,
                });
        }, [s, u, U, d]),
        V = s.state === P.elq.ACCEPTING,
        z = null != x;
    if (null == x) {
        if (null == s.guild) return (0, r.jsx)(N.A, {});
        x = (0, T.DY)(s.guild);
    }
    l = z
        ? w
            ? D.intl.string(D.t.DPfdsq)
            : L
              ? D.intl.string(D.t.sqe0hj)
              : D.intl.string(D.t.RscU7I)
        : D.intl.string(D.t["2BP08E"]);
    let W = (z && !k) || (z && w);
    return (k || (a = D.intl.string(D.t.hHGrWz)), null == s.code || "" === s.code || null == S)
        ? null
        : (0, r.jsx)(g.f5, {
              value: U,
              children: (0, r.jsx)(G, {
                  app: S,
                  activityUsers: F,
                  isMember: z,
                  channel: M,
                  guild: x,
                  message: u,
                  members: h,
                  membersOnline: _,
                  isActivityActive: L,
                  submitting: V,
                  buttonLabel: l,
                  disabled: W,
                  disabledReason: a,
                  handleAcceptInvite: H,
                  onView: y,
              }),
          });
}

function G(e) {
    var t, n;
    let {
            app: l,
            activityUsers: a,
            isMember: s,
            channel: o,
            guild: c,
            message: u,
            members: d,
            membersOnline: p,
            isActivityActive: m,
            submitting: f,
            buttonLabel: g,
            disabled: v,
            disabledReason: x,
            handleAcceptInvite: O,
            onView: E,
        } = e,
        { bot: j, icon: C } = l,
        I = S.Ay.getApplicationIconURL({
            id: l.id,
            icon: C,
            bot: j,
        }),
        T = (0, y.F)(l),
        N = (0, A.f)(l),
        P = a.length,
        R = i.useMemo(
            () => [
                {
                    label: g,
                    trackingArea: s ? b.kY.PLAY : b.kY.JOIN_SERVER,
                    submitting: f,
                    disabled: v,
                    disabledReason: v && null != x ? x : void 0,
                    onClick: O,
                },
            ],
            [g, s, f, v, x, O],
        );
    return (0, r.jsx)(
        h.h,
        ((t = (function (e) {
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
        })(
            {
                header: l.name,
                title: D.intl.string(D.t["7vb6nw"]),
                iconSrc: I,
            },
            N,
        )),
        (n = n =
            {
                onClickBanner: T,
                info: (0, r.jsxs)("div", {
                    className: L.QR,
                    children: [
                        (0, r.jsx)(k, {
                            channel: o,
                            guild: c,
                            hasEnded: !m,
                            textColor: "none",
                        }),
                        s
                            ? P > 0 &&
                              (0, r.jsx)(_.$, {
                                  activityUsers: a,
                                  guildId: c.id,
                                  activityText: D.intl.formatToPlainString(D.t.yJj035, {
                                      count: P,
                                  }),
                              })
                            : (0, r.jsx)(M, {
                                  members: d,
                                  membersOnline: p,
                                  textColor: "none",
                              }),
                    ],
                }),
                actions: R,
                onClickContent: T,
                trackingConfig: {
                    id: l.id,
                    linkType: w.J.ACTIVITY_INVITE,
                    onView: E,
                    guildId: c.id,
                    channelId: null == o ? void 0 : o.id,
                    messageId: u.id,
                    isDeadEnd: !m,
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
