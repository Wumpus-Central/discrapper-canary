n.d(t, { Z: () => Z }), n(539854), n(361932), n(187205);
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
    D = n(245335),
    x = n(388032),
    L = n(969016);
function j(e, t, n) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        a = [];
    return (
        null != n &&
            n > 0 &&
            a.push(
                (0, r.jsxs)(
                    "div",
                    {
                        className: L.statusWrapper,
                        children: [
                            (0, r.jsx)("i", { className: L.statusOnline }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: L.count,
                                color: i,
                                children: x.intl.format(x.t["LC+S+v"], { membersOnline: n }),
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
                        className: L.statusWrapper,
                        children: [
                            (0, r.jsx)("i", { className: L.statusOffline }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: L.count,
                                color: i,
                                children: x.intl.format(x.t.zRl6XV, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, r.jsx)("div", {
            className: L.statusCounts,
            children: a,
        })
    );
}
function B(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: a } = e;
    if (null != t && null != n) {
        let e = (0, O.KS)(t, n);
        return (0, r.jsxs)("div", {
            className: o()(L.channel, { [L.ended]: i }),
            children: [
                null != e
                    ? (0, r.jsx)(e, {
                          className: L.channelIcon,
                          size: "xs",
                          color: "currentColor",
                      })
                    : null,
                (0, r.jsx)(v.Z, {
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: a,
                        children: x.intl.format(x.t["dc+LW1"], {
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
              className: o()(L.channel, { [L.ended]: i }),
              children: (0, r.jsx)(v.Z, {
                  children: (0, r.jsx)(u.Text, {
                      variant: "text-xs/normal",
                      color: a,
                      children: x.intl.format(x.t.u0vaDA, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function Z(e) {
    var t, n;
    let a,
        { invite: o, message: s, getAcceptInviteContext: u } = e,
        { approximate_member_count: h, approximate_presence_count: m, target_type: g, target_application: E } = o;
    l()(g === D.Iq.EMBEDDED_APPLICATION && null != E, "invalid application invite");
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
        L = (0, c.e7)([f.ZP], () => {
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
        M = (0, c.e7)([S.Z], () => null != j && S.Z.can(w.Plq.USE_EMBEDDED_ACTIVITIES, j), [j]),
        { analyticsLocations: k } = (0, p.ZP)(_.Z.INVITE_EMBED),
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
                k,
            ),
                d.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: o.code,
                    context: u("Invite Button Embed"),
                    analyticsLocations: k,
                });
        }, [o, s, k, u]),
        Z = o.state === w.r2o.ACCEPTING,
        F = null != O;
    if (null == O) {
        if (null == o.guild) return (0, r.jsx)(P.Z, {});
        O = (0, R.Qs)(o.guild);
    }
    let H = (F && !M) || (F && N);
    return (F && N && (a = x.intl.string(x.t.wJNK8P)),
    M || (a = x.intl.string(x.t.hHGrW1)),
    null == o.code || "" === o.code || null == v)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: k,
              children: (0, r.jsx)(V, {
                  app: v,
                  activityUsers: G,
                  isMember: F,
                  channel: j,
                  guild: O,
                  members: h,
                  membersOnline: m,
                  isActivityActive: L,
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
            members: l,
            membersOnline: c,
            isActivityActive: u,
            submitting: d,
            isDisabled: f,
            tooltip: _,
            handleAcceptInvite: p,
            onView: y,
        } = e,
        { bot: O, icon: v } = t,
        I = N.ZP.getApplicationIconURL({
            id: t.id,
            icon: v,
            bot: O,
        }),
        T = (0, b.G)(t),
        S = (0, E.E)(t),
        A = n.length,
        C = i.useMemo(
            () => [
                {
                    label: a
                        ? u
                            ? x.intl.string(x.t.VJlc0d)
                            : x.intl.string(x.t.RscU7O)
                        : x.intl.string(x.t["2BP08P"]),
                    trackingArea: a ? g.j_.PLAY : g.j_.JOIN_SERVER,
                    submitting: d,
                    disabledReason: f && null != _ ? _ : void 0,
                    onClick: p,
                },
            ],
            [p, u, f, a, d, _],
        );
    return (0, r.jsx)(
        h.W,
        U(
            M(
                {
                    header: t.name,
                    title: x.intl.string(x.t["7vb6n5"]),
                    iconSrc: I,
                },
                S,
            ),
            {
                onClickBanner: T,
                info: (0, r.jsxs)("div", {
                    className: L.infoWrapper,
                    children: [
                        (0, r.jsx)(B, {
                            channel: o,
                            guild: s,
                            hasEnded: !u,
                            textColor: "none",
                        }),
                        a
                            ? A > 0 &&
                              (0, r.jsx)(m.K, {
                                  activityUsers: n,
                                  guildId: s.id,
                                  activityText: x.intl.string(x.t.BMTj29),
                              })
                            : (0, r.jsx)(G, {
                                  members: l,
                                  membersOnline: c,
                                  textColor: "none",
                              }),
                    ],
                }),
                actions: C,
                onClickContent: T,
                trackingConfig: {
                    id: t.id,
                    linkType: g.Un.ACTIVITY_INVITE,
                    onView: y,
                },
            },
        ),
    );
}
