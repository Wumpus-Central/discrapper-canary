n.d(t, { Z: () => Z }), n(539854), n(361932), n(187205);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    N = n(626135),
    C = n(768581),
    R = n(411198),
    P = n(358595),
    w = n(981631),
    D = n(245335),
    L = n(388032),
    x = n(969016);
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
function j(e) {
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
        o = [];
    return (
        null != n &&
            n > 0 &&
            o.push(
                (0, r.jsxs)(
                    "div",
                    {
                        className: x.statusWrapper,
                        children: [
                            (0, r.jsx)("i", { className: x.statusOnline }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: x.count,
                                color: i,
                                children: L.intl.format(L.t["LC+S+v"], { membersOnline: n }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != t &&
            o.push(
                (0, r.jsxs)(
                    "div",
                    {
                        className: x.statusWrapper,
                        children: [
                            (0, r.jsx)("i", { className: x.statusOffline }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: x.count,
                                color: i,
                                children: L.intl.format(L.t.zRl6XV, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, r.jsx)("div", {
            className: x.statusCounts,
            children: o,
        })
    );
}
function B(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: o } = e;
    if (null != t && null != n) {
        let e = (0, O.KS)(t, n);
        return (0, r.jsxs)("div", {
            className: a()(x.channel, { [x.ended]: i }),
            children: [
                null != e
                    ? (0, r.jsx)(e, {
                          className: x.channelIcon,
                          size: "xs",
                          color: "currentColor",
                      })
                    : null,
                (0, r.jsx)(v.Z, {
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: o,
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
              className: a()(x.channel, { [x.ended]: i }),
              children: (0, r.jsx)(v.Z, {
                  children: (0, r.jsx)(u.Text, {
                      variant: "text-xs/normal",
                      color: o,
                      children: L.intl.format(L.t.u0vaDA, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function Z(e) {
    var t, n;
    let o,
        { invite: a, message: s, getAcceptInviteContext: u } = e,
        { approximate_member_count: h, approximate_presence_count: m, target_type: g, target_application: E } = a;
    l()(g === D.Iq.EMBEDDED_APPLICATION && null != E, "invalid application invite");
    let b = i.useCallback(() => {
            var e;
            N.default.track(w.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: E.id,
                invite_inviter_id: null == (e = a.inviter) ? void 0 : e.id,
            });
        }, [null == (t = a.inviter) ? void 0 : t.id, E.id]),
        O = (0, c.e7)([T.Z], () => (null != a.guild ? T.Z.getGuild(a.guild.id) : null), [a]),
        v = (0, y.Z)([E.id])[0],
        C = (0, c.e7)([f.ZP], () => {
            var e;
            return (
                (null == a ? void 0 : a.channel) != null &&
                (null == (e = f.ZP.getSelfEmbeddedActivityForChannel(a.channel.id)) ? void 0 : e.applicationId) === E.id
            );
        }),
        x = (0, c.e7)([f.ZP], () => {
            var e;
            return (
                (null == (e = a.channel) ? void 0 : e.id) != null
                    ? f.ZP.getEmbeddedActivitiesForChannel(a.channel.id)
                    : []
            ).some((e) => {
                let { applicationId: t } = e;
                return E.id === t;
            });
        }),
        M = I.Z.getChannel(null == (n = a.channel) ? void 0 : n.id),
        j = (0, c.e7)([S.Z], () => null != M && S.Z.can(w.Plq.USE_EMBEDDED_ACTIVITIES, M), [M]),
        { analyticsLocations: k } = (0, p.ZP)(_.Z.INVITE_EMBED),
        U = (0, c.Wu)(
            [f.ZP],
            () =>
                null != M
                    ? f.ZP.getEmbeddedActivitiesForChannel(M.id)
                          .filter((e) => e.applicationId === E.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [M, E.id],
        ),
        G = (0, c.Wu)([A.default], () => U.map((e) => A.default.getUser(e)).filter((e) => null != e), [U]),
        B = i.useCallback(() => {
            (0, d.r$)(
                {
                    invite: a,
                    action: "accept",
                    inviter_id: s.author.id,
                    invite_message_id: s.id,
                },
                k,
            ),
                d.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: a.code,
                    context: u("Invite Button Embed"),
                    analyticsLocations: k,
                });
        }, [a, s, k, u]),
        Z = a.state === w.r2o.ACCEPTING,
        V = null != O;
    if (null == O) {
        if (null == a.guild) return (0, r.jsx)(P.Z, {});
        O = (0, R.Qs)(a.guild);
    }
    let H = (V && !j) || (V && C);
    return (V && C && (o = L.intl.string(L.t.wJNK8P)),
    j || (o = L.intl.string(L.t.hHGrW1)),
    null == a.code || "" === a.code || null == v)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: k,
              children: (0, r.jsx)(F, {
                  app: v,
                  activityUsers: G,
                  isMember: V,
                  channel: M,
                  guild: O,
                  members: h,
                  membersOnline: m,
                  isActivityActive: x,
                  submitting: Z,
                  isDisabled: H,
                  tooltip: o,
                  handleAcceptInvite: B,
                  onView: b,
              }),
          });
}
function F(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: o,
            channel: a,
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
        I = C.ZP.getApplicationIconURL({
            id: t.id,
            icon: v,
            bot: O,
        }),
        T = (0, b.G)(t),
        S = (0, E.E)(t),
        A = n.length,
        N = i.useMemo(
            () => [
                {
                    label: o
                        ? u
                            ? L.intl.string(L.t.VJlc0d)
                            : L.intl.string(L.t.RscU7O)
                        : L.intl.string(L.t["2BP08P"]),
                    trackingArea: o ? g.j_.PLAY : g.j_.JOIN_SERVER,
                    submitting: d,
                    disabledReason: f && null != _ ? _ : void 0,
                    onClick: p,
                },
            ],
            [p, u, f, o, d, _],
        );
    return (0, r.jsx)(
        h.W,
        U(
            j(
                {
                    header: t.name,
                    title: L.intl.string(L.t["7vb6n5"]),
                    iconSrc: I,
                },
                S,
            ),
            {
                onClickBanner: T,
                info: (0, r.jsxs)("div", {
                    className: x.infoWrapper,
                    children: [
                        (0, r.jsx)(B, {
                            channel: a,
                            guild: s,
                            hasEnded: !u,
                            textColor: "none",
                        }),
                        o
                            ? A > 0 &&
                              (0, r.jsx)(m.K, {
                                  activityUsers: n,
                                  guildId: s.id,
                                  activityText: L.intl.string(L.t.BMTj29),
                              })
                            : (0, r.jsx)(G, {
                                  members: l,
                                  membersOnline: c,
                                  textColor: "none",
                              }),
                    ],
                }),
                actions: N,
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
