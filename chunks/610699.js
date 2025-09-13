n.d(t, { Z: () => F }), n(539854), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(447543),
    f = n(317381),
    _ = n(100527),
    p = n(906732),
    h = n(758199),
    m = n(943762),
    g = n(914498),
    E = n(880251),
    b = n(515344),
    y = n(835473),
    O = n(471445),
    v = n(111028),
    I = n(592125),
    T = n(430824),
    S = n(496675),
    A = n(594174),
    C = n(626135),
    N = n(768581),
    R = n(411198),
    P = n(358595),
    w = n(981631),
    D = n(967249),
    x = n(245335),
    L = n(388032),
    j = n(969016);
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
function B(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        a = [];
    return (
        null != n &&
            n > 0 &&
            a.push(
                (0, r.jsxs)(
                    "div",
                    {
                        className: j.statusWrapper,
                        children: [
                            (0, r.jsx)("i", { className: j.statusOnline }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: j.count,
                                color: i,
                                children: L.intl.format(L.t["LC+S+v"], { membersOnline: n }),
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
                        className: j.statusWrapper,
                        children: [
                            (0, r.jsx)("i", { className: j.statusOffline }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: j.count,
                                color: i,
                                children: L.intl.format(L.t.zRl6XV, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, r.jsx)("div", {
            className: j.statusCounts,
            children: a,
        })
    );
}
function Z(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: a } = e;
    if (null != t && null != n) {
        let e = (0, O.KS)(t, n);
        return (0, r.jsxs)("div", {
            className: o()(j.channel, { [j.ended]: i }),
            children: [
                null != e
                    ? (0, r.jsx)(e, {
                          className: j.channelIcon,
                          size: "xs",
                          color: "currentColor",
                      })
                    : null,
                (0, r.jsx)(v.Z, {
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: a,
                        children: L.intl.format(L.t["dc+LW1"], {
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
              className: o()(j.channel, { [j.ended]: i }),
              children: (0, r.jsx)(v.Z, {
                  children: (0, r.jsx)(u.Text, {
                      variant: "text-xs/normal",
                      color: a,
                      children: L.intl.format(L.t.u0vaDA, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function F(e) {
    var t, n;
    let a,
        o,
        { invite: s, message: u, getAcceptInviteContext: h } = e,
        { approximate_member_count: m, approximate_presence_count: g, target_type: E, target_application: b } = s;
    l()(E === x.Iq.EMBEDDED_APPLICATION && null != b, "invalid application invite");
    let O = i.useCallback(() => {
            var e;
            C.default.track(w.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: b.id,
                invite_inviter_id: null == (e = s.inviter) ? void 0 : e.id,
            });
        }, [null == (t = s.inviter) ? void 0 : t.id, b.id]),
        v = (0, c.e7)([T.Z], () => (null != s.guild ? T.Z.getGuild(s.guild.id) : null), [s]),
        N = (0, y.Z)([b.id])[0],
        D = (0, c.e7)([f.ZP], () => {
            var e;
            return (
                (null == s ? void 0 : s.channel) != null &&
                (null == (e = f.ZP.getSelfEmbeddedActivityForChannel(s.channel.id)) ? void 0 : e.applicationId) === b.id
            );
        }),
        j = (0, c.e7)([f.ZP], () => {
            var e;
            return (
                (null == (e = s.channel) ? void 0 : e.id) != null
                    ? f.ZP.getEmbeddedActivitiesForChannel(s.channel.id)
                    : []
            ).some((e) => {
                let { applicationId: t } = e;
                return b.id === t;
            });
        }),
        M = I.Z.getChannel(null == (n = s.channel) ? void 0 : n.id),
        k = (0, c.e7)([S.Z], () => null != M && S.Z.can(w.Plq.USE_EMBEDDED_ACTIVITIES, M), [M]),
        { analyticsLocations: U } = (0, p.ZP)(_.Z.INVITE_EMBED),
        G = (0, c.Wu)(
            [f.ZP],
            () =>
                null != M
                    ? f.ZP.getEmbeddedActivitiesForChannel(M.id)
                          .filter((e) => e.applicationId === b.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [M, b.id],
        ),
        B = (0, c.Wu)([A.default], () => G.map((e) => A.default.getUser(e)).filter((e) => null != e), [G]),
        Z = i.useCallback(() => {
            (0, d.r$)(
                {
                    invite: s,
                    action: "accept",
                    inviter_id: u.author.id,
                    invite_message_id: u.id,
                },
                U,
            ),
                d.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: s.code,
                    context: h("Invite Button Embed"),
                    analyticsLocations: U,
                });
        }, [s, u, U, h]),
        F = s.state === w.r2o.ACCEPTING,
        H = null != v;
    if (null == v) {
        if (null == s.guild) return (0, r.jsx)(P.Z, {});
        v = (0, R.Qs)(s.guild);
    }
    a = H
        ? D
            ? L.intl.string(L.t.DPfdsr)
            : j
              ? L.intl.string(L.t.sqe0ho)
              : L.intl.string(L.t.RscU7O)
        : L.intl.string(L.t["2BP08P"]);
    let Y = (H && !k) || (H && D);
    return (k || (o = L.intl.string(L.t.hHGrW1)), null == s.code || "" === s.code || null == N)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: U,
              children: (0, r.jsx)(V, {
                  app: N,
                  activityUsers: B,
                  isMember: H,
                  channel: M,
                  guild: v,
                  message: u,
                  members: m,
                  membersOnline: g,
                  isActivityActive: j,
                  submitting: F,
                  buttonLabel: a,
                  disabled: Y,
                  disabledReason: o,
                  handleAcceptInvite: Z,
                  onView: O,
              }),
          });
}
function V(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: a,
            channel: o,
            guild: s,
            message: l,
            members: c,
            membersOnline: u,
            isActivityActive: d,
            submitting: f,
            buttonLabel: _,
            disabled: p,
            disabledReason: y,
            handleAcceptInvite: O,
            onView: v,
        } = e,
        { bot: I, icon: T } = t,
        S = N.ZP.getApplicationIconURL({
            id: t.id,
            icon: T,
            bot: I,
        }),
        A = (0, b.G)(t),
        C = (0, E.E)(t),
        R = n.length,
        P = i.useMemo(
            () => [
                {
                    label: _,
                    trackingArea: a ? g.j_.PLAY : g.j_.JOIN_SERVER,
                    submitting: f,
                    disabled: p,
                    disabledReason: p && null != y ? y : void 0,
                    onClick: O,
                },
            ],
            [_, a, f, p, y, O],
        );
    return (0, r.jsx)(
        h.W,
        G(
            k(
                {
                    header: t.name,
                    title: L.intl.string(L.t["7vb6n5"]),
                    iconSrc: S,
                },
                C,
            ),
            {
                onClickBanner: A,
                info: (0, r.jsxs)("div", {
                    className: j.infoWrapper,
                    children: [
                        (0, r.jsx)(Z, {
                            channel: o,
                            guild: s,
                            hasEnded: !d,
                            textColor: "none",
                        }),
                        a
                            ? R > 0 &&
                              (0, r.jsx)(m.K, {
                                  activityUsers: n,
                                  guildId: s.id,
                                  activityText: L.intl.formatToPlainString(L.t.yJj039, { count: R }),
                              })
                            : (0, r.jsx)(B, {
                                  members: c,
                                  membersOnline: u,
                                  textColor: "none",
                              }),
                    ],
                }),
                actions: P,
                onClickContent: A,
                trackingConfig: {
                    id: t.id,
                    linkType: D.U.ACTIVITY_INVITE,
                    onView: v,
                    guildId: s.id,
                    channelId: null == o ? void 0 : o.id,
                    messageId: l.id,
                },
            },
        ),
    );
}
