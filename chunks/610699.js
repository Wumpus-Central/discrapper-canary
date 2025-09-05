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
    j = n(552517);
function k(e, t, n) {
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
function M(e) {
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
                k(e, t, n[t]);
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
        { invite: o, message: s, getAcceptInviteContext: u } = e,
        { approximate_member_count: h, approximate_presence_count: m, target_type: g, target_application: E } = o;
    l()(g === x.Iq.EMBEDDED_APPLICATION && null != E, "invalid application invite");
    let b = i.useCallback(() => {
            var e;
            C.default.track(w.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: E.id,
                invite_inviter_id: null == (e = o.inviter) ? void 0 : e.id,
            });
        }, [null == (t = o.inviter) ? void 0 : t.id, E.id]),
        O = (0, c.e7)([T.Z], () => (null != o.guild ? T.Z.getGuild(o.guild.id) : null), [o]),
        v = (0, y.Z)([E.id])[0],
        N = (0, c.e7)([f.ZP], () => {
            var e;
            return (
                (null == o ? void 0 : o.channel) != null &&
                (null == (e = f.ZP.getSelfEmbeddedActivityForChannel(o.channel.id)) ? void 0 : e.applicationId) === E.id
            );
        }),
        D = (0, c.e7)([f.ZP], () => {
            var e;
            return (
                (null == (e = o.channel) ? void 0 : e.id) != null
                    ? f.ZP.getEmbeddedActivitiesForChannel(o.channel.id)
                    : []
            ).some((e) => {
                let { applicationId: t } = e;
                return E.id === t;
            });
        }),
        j = I.Z.getChannel(null == (n = o.channel) ? void 0 : n.id),
        k = (0, c.e7)([S.Z], () => null != j && S.Z.can(w.Plq.USE_EMBEDDED_ACTIVITIES, j), [j]),
        { analyticsLocations: M } = (0, p.ZP)(_.Z.INVITE_EMBED),
        U = (0, c.Wu)(
            [f.ZP],
            () =>
                null != j
                    ? f.ZP.getEmbeddedActivitiesForChannel(j.id)
                          .filter((e) => e.applicationId === E.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [j, E.id],
        ),
        G = (0, c.Wu)([A.default], () => U.map((e) => A.default.getUser(e)).filter((e) => null != e), [U]),
        B = i.useCallback(() => {
            (0, d.r$)(
                {
                    invite: o,
                    action: "accept",
                    inviter_id: s.author.id,
                    invite_message_id: s.id,
                },
                M,
            ),
                d.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: o.code,
                    context: u("Invite Button Embed"),
                    analyticsLocations: M,
                });
        }, [o, s, M, u]),
        Z = o.state === w.r2o.ACCEPTING,
        F = null != O;
    if (null == O) {
        if (null == o.guild) return (0, r.jsx)(P.Z, {});
        O = (0, R.Qs)(o.guild);
    }
    let H = (F && !k) || (F && N);
    return (F && N && (a = L.intl.string(L.t.wJNK8P)),
    k || (a = L.intl.string(L.t.hHGrW1)),
    null == o.code || "" === o.code || null == v)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: M,
              children: (0, r.jsx)(V, {
                  app: v,
                  activityUsers: G,
                  isMember: F,
                  channel: j,
                  guild: O,
                  message: s,
                  members: h,
                  membersOnline: m,
                  isActivityActive: D,
                  submitting: Z,
                  isDisabled: H,
                  tooltip: a,
                  handleAcceptInvite: B,
                  onView: b,
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
            isDisabled: _,
            tooltip: p,
            handleAcceptInvite: y,
            onView: O,
        } = e,
        { bot: v, icon: I } = t,
        T = N.ZP.getApplicationIconURL({
            id: t.id,
            icon: I,
            bot: v,
        }),
        S = (0, b.G)(t),
        A = (0, E.E)(t),
        C = n.length,
        R = i.useMemo(
            () => [
                {
                    label: a
                        ? d
                            ? L.intl.string(L.t.VJlc0d)
                            : L.intl.string(L.t.RscU7O)
                        : L.intl.string(L.t["2BP08P"]),
                    trackingArea: a ? g.j_.PLAY : g.j_.JOIN_SERVER,
                    submitting: f,
                    disabledReason: _ && null != p ? p : void 0,
                    onClick: y,
                },
            ],
            [y, d, _, a, f, p],
        );
    return (0, r.jsx)(
        h.W,
        G(
            M(
                {
                    header: t.name,
                    title: L.intl.string(L.t["7vb6n5"]),
                    iconSrc: T,
                },
                A,
            ),
            {
                onClickBanner: S,
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
                            ? C > 0 &&
                              (0, r.jsx)(m.K, {
                                  activityUsers: n,
                                  guildId: s.id,
                                  activityText: L.intl.string(L.t.BMTj29),
                              })
                            : (0, r.jsx)(B, {
                                  members: c,
                                  membersOnline: u,
                                  textColor: "none",
                              }),
                    ],
                }),
                actions: R,
                onClickContent: S,
                trackingConfig: {
                    id: t.id,
                    linkType: D.U.ACTIVITY_INVITE,
                    onView: O,
                    guildId: s.id,
                    channelId: null == o ? void 0 : o.id,
                    messageId: l.id,
                },
            },
        ),
    );
}
