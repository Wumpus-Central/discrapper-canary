n.d(t, {
    A: () => B,
}),
    n(321073),
    n(114821),
    n(339614);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(311907),
    u = n(3026),
    d = n(397927),
    f = n(846293),
    p = n(933958),
    _ = n(793574),
    h = n(688810),
    m = n(572211),
    g = n(178910),
    E = n(354287),
    b = n(112150),
    y = n(574660),
    O = n(429913),
    A = n(713654),
    v = n(734057),
    S = n(71393),
    I = n(576705),
    T = n(287809),
    C = n(954571),
    N = n(486020),
    R = n(860689),
    w = n(168428),
    P = n(652215),
    D = n(768349),
    x = n(172799),
    L = n(985018),
    j = n(320160);

function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}

function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function V(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        a = [];
    return (
        null != n &&
            n > 0 &&
            a.push(
                (0, r.jsxs)(
                    "div",
                    {
                        className: j.MY,
                        children: [
                            (0, r.jsx)("i", {
                                className: j.QD,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: j.U9,
                                color: i,
                                children: L.intl.format(L.t["LC+S+m"], {
                                    membersOnline: n,
                                }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != t &&
            a.push(
                (0, r.jsxs)(
                    "div",
                    {
                        className: j.MY,
                        children: [
                            (0, r.jsx)("i", {
                                className: j.o6,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: j.U9,
                                color: i,
                                children: L.intl.format(L.t.zRl6XR, {
                                    count: t,
                                }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, r.jsx)("div", {
            className: j.rc,
            children: a,
        })
    );
}

function F(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: a } = e;
    if (null != t && null != n) {
        let e = (0, A.gU)(t, n);
        return (0, r.jsxs)("div", {
            className: s()(j.Ix, {
                [j.v6]: i,
            }),
            children: [
                null != e
                    ? (0, r.jsx)(e, {
                          className: j.p,
                          size: "xs",
                          color: "currentColor",
                      })
                    : null,
                (0, r.jsx)(u.A, {
                    children: (0, r.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: a,
                        children: L.intl.format(L.t["dc+LW4"], {
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
              className: s()(j.Ix, {
                  [j.v6]: i,
              }),
              children: (0, r.jsx)(u.A, {
                  children: (0, r.jsx)(d.Text, {
                      variant: "text-xs/normal",
                      color: a,
                      children: L.intl.format(L.t.u0vaDE, {
                          guildName: n.name,
                      }),
                  }),
              }),
          })
        : null;
}

function B(e) {
    var t, n;
    let a,
        s,
        { invite: o, message: u, getAcceptInviteContext: d } = e,
        { approximate_member_count: m, approximate_presence_count: g, target_type: E, target_application: b } = o;
    l()(E === x.yV.EMBEDDED_APPLICATION && null != b, "invalid application invite");
    let y = i.useCallback(() => {
            var e;
            C.default.track(P.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: b.id,
                invite_inviter_id: null == (e = o.inviter) ? void 0 : e.id,
            });
        }, [null == (t = o.inviter) ? void 0 : t.id, b.id]),
        A = (0, c.bG)([S.A], () => (null != o.guild ? S.A.getGuild(o.guild.id) : null), [o]),
        N = (0, O.A)([b.id])[0],
        D = (0, c.bG)([p.Ay], () => {
            var e;
            return (
                (null == o ? void 0 : o.channel) != null &&
                (null == (e = p.Ay.getSelfEmbeddedActivityForChannel(o.channel.id)) ? void 0 : e.applicationId) === b.id
            );
        }),
        j = (0, c.bG)([p.Ay], () => {
            var e;
            return (
                (null == (e = o.channel) ? void 0 : e.id) != null
                    ? p.Ay.getEmbeddedActivitiesForChannel(o.channel.id)
                    : []
            ).some((e) => {
                let { applicationId: t } = e;
                return b.id === t;
            });
        }),
        M = v.A.getChannel(null == (n = o.channel) ? void 0 : n.id),
        k = (0, c.bG)([I.A], () => null != M && I.A.can(P.xBc.USE_EMBEDDED_ACTIVITIES, M), [M]),
        { analyticsLocations: U } = (0, h.Ay)(_.A.INVITE_EMBED),
        G = (0, c.yK)(
            [p.Ay],
            () =>
                null != M
                    ? p.Ay.getEmbeddedActivitiesForChannel(M.id)
                          .filter((e) => e.applicationId === b.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [M, b.id],
        ),
        V = (0, c.yK)([T.default], () => G.map((e) => T.default.getUser(e)).filter((e) => null != e), [G]),
        F = i.useCallback(() => {
            (0, f.he)(
                {
                    invite: o,
                    action: "accept",
                    inviter_id: u.author.id,
                    invite_message_id: u.id,
                },
                U,
            ),
                f.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: o.code,
                    context: d("Invite Button Embed"),
                    analyticsLocations: U,
                });
        }, [o, u, U, d]),
        B = o.state === P.elq.ACCEPTING,
        Y = null != A;
    if (null == A) {
        if (null == o.guild) return (0, r.jsx)(w.A, {});
        A = (0, R.DY)(o.guild);
    }
    a = Y
        ? D
            ? L.intl.string(L.t.DPfdsq)
            : j
              ? L.intl.string(L.t.sqe0hj)
              : L.intl.string(L.t.RscU7I)
        : L.intl.string(L.t["2BP08E"]);
    let W = (Y && !k) || (Y && D);
    return (k || (s = L.intl.string(L.t.hHGrWz)), null == o.code || "" === o.code || null == N)
        ? null
        : (0, r.jsx)(h.f5, {
              value: U,
              children: (0, r.jsx)(H, {
                  app: N,
                  activityUsers: V,
                  isMember: Y,
                  channel: M,
                  guild: A,
                  message: u,
                  members: m,
                  membersOnline: g,
                  isActivityActive: j,
                  submitting: B,
                  buttonLabel: a,
                  disabled: W,
                  disabledReason: s,
                  handleAcceptInvite: F,
                  onView: y,
              }),
          });
}

function H(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: a,
            channel: s,
            guild: o,
            message: l,
            members: c,
            membersOnline: u,
            isActivityActive: d,
            submitting: f,
            buttonLabel: p,
            disabled: _,
            disabledReason: h,
            handleAcceptInvite: O,
            onView: A,
        } = e,
        { bot: v, icon: S } = t,
        I = N.Ay.getApplicationIconURL({
            id: t.id,
            icon: S,
            bot: v,
        }),
        T = (0, y.F)(t),
        C = (0, b.f)(t),
        R = n.length,
        w = i.useMemo(
            () => [
                {
                    label: p,
                    trackingArea: a ? E.kY.PLAY : E.kY.JOIN_SERVER,
                    submitting: f,
                    disabled: _,
                    disabledReason: _ && null != h ? h : void 0,
                    onClick: O,
                },
            ],
            [p, a, f, _, h, O],
        );
    return (0, r.jsx)(
        m.h,
        G(
            k(
                {
                    header: t.name,
                    title: L.intl.string(L.t["7vb6nw"]),
                    iconSrc: I,
                },
                C,
            ),
            {
                onClickBanner: T,
                info: (0, r.jsxs)("div", {
                    className: j.QR,
                    children: [
                        (0, r.jsx)(F, {
                            channel: s,
                            guild: o,
                            hasEnded: !d,
                            textColor: "none",
                        }),
                        a
                            ? R > 0 &&
                              (0, r.jsx)(g.$, {
                                  activityUsers: n,
                                  guildId: o.id,
                                  activityText: L.intl.formatToPlainString(L.t.yJj035, {
                                      count: R,
                                  }),
                              })
                            : (0, r.jsx)(V, {
                                  members: c,
                                  membersOnline: u,
                                  textColor: "none",
                              }),
                    ],
                }),
                actions: w,
                onClickContent: T,
                trackingConfig: {
                    id: t.id,
                    linkType: D.J.ACTIVITY_INVITE,
                    onView: A,
                    guildId: o.id,
                    channelId: null == s ? void 0 : s.id,
                    messageId: l.id,
                    isDeadEnd: !d,
                },
            },
        ),
    );
}
