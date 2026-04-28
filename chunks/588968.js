n.d(t, { A: () => tV });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    a = n(376728),
    r = n(820284),
    o = n(688810),
    d = n(107123),
    c = n(698441),
    u = n(427080),
    m = n(21599),
    h = n(346542),
    g = n(665066),
    A = n(95701),
    p = n(495544),
    x = n(734057),
    f = n(71393),
    C = n(299091),
    E = n(576705),
    v = n(860689);
let I = (0, n(600975).C)({
    kind: "guild",
    id: "2026-04_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function _(e) {
    let { guildId: t, location: n } = e;
    return I.getCurrentConfig({ guildId: t, location: n });
}
n(321073);
var j = n(503698),
    N = n.n(j),
    T = n(284009),
    y = n.n(T),
    S = n(3026),
    b = n(834730),
    k = n(933958),
    L = n(793574),
    R = n(572211),
    P = n(178910),
    M = n(354287),
    D = n(112150),
    w = n(574660),
    O = n(429913),
    U = n(47167),
    G = n(713654),
    V = n(287809),
    B = n(954571),
    H = n(486020),
    F = n(529200),
    z = n(985018);
function Y() {
    return (0, i.jsxs)(F.A, {
        children: [
            (0, i.jsx)(F.A.Header, { text: z.intl.string(z.t["N/g9Z4"]) }),
            (0, i.jsx)(F.A.Body, { resolving: !0 }),
        ],
    });
}
var W = n(652215),
    K = n(768349),
    J = n(172799),
    q = n(718223);
function Z(e) {
    let { members: t, membersOnline: n, textColor: l } = e,
        s = [];
    return (
        null != n &&
            n > 0 &&
            s.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: q.MY,
                        children: [
                            (0, i.jsx)("i", { className: q.QD }),
                            (0, i.jsx)(b.E, {
                                variant: "text-xs/normal",
                                className: q.U9,
                                color: l,
                                children: z.intl.format(z.t["LC+S+m"], { membersOnline: n }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != t &&
            s.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: q.MY,
                        children: [
                            (0, i.jsx)("i", { className: q.o6 }),
                            (0, i.jsx)(b.E, {
                                variant: "text-xs/normal",
                                className: q.U9,
                                color: l,
                                children: z.intl.format(z.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, i.jsx)("div", { className: q.rc, children: s })
    );
}
function X(e) {
    let { channel: t, guild: n, hasEnded: l, textColor: s } = e,
        a = (0, U.Ay)(t);
    if (null != t && null != n) {
        let e = (0, G.gU)(t, n);
        return (0, i.jsxs)("div", {
            className: N()(q.Ix, { [q.v6]: l }),
            children: [
                null != e ? (0, i.jsx)(e, { className: q.p, size: "xs", color: "currentColor" }) : null,
                (0, i.jsx)(S.A, {
                    children: (0, i.jsx)(b.E, {
                        variant: "text-xs/normal",
                        color: s,
                        children: z.intl.format(z.t["dc+LW4"], { channelName: a ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, i.jsx)("div", {
              className: N()(q.Ix, { [q.v6]: l }),
              children: (0, i.jsx)(S.A, {
                  children: (0, i.jsx)(b.E, {
                      variant: "text-xs/normal",
                      color: s,
                      children: z.intl.format(z.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function $(e) {
    let t,
        n,
        { invite: r, message: d, getAcceptInviteContext: c } = e,
        { approximate_member_count: u, approximate_presence_count: h, target_type: g, target_application: A } = r;
    y()(g === J.yV.EMBEDDED_APPLICATION && null != A, "invalid application invite");
    let p = l.useCallback(() => {
            B.default.track(W.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: A.id,
                invite_inviter_id: r.inviter?.id,
            });
        }, [r.inviter?.id, A.id]),
        C = (0, s.bG)([f.A], () => (null != r.guild ? f.A.getGuild(r.guild.id) : null), [r]),
        I = (0, O.A)([A.id])[0],
        _ = (0, s.bG)(
            [k.Ay],
            () => r?.channel != null && k.Ay.getSelfEmbeddedActivityForChannel(r.channel.id)?.applicationId === A.id,
        ),
        j = (0, s.bG)([k.Ay], () =>
            (r.channel?.id != null ? k.Ay.getEmbeddedActivitiesForChannel(r.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return A.id === t;
            }),
        ),
        N = x.A.getChannel(r.channel?.id),
        T = (0, s.bG)([E.A], () => null != N && E.A.can(W.xBc.USE_EMBEDDED_ACTIVITIES, N), [N]),
        { analyticsLocations: S } = (0, o.Ay)(L.A.INVITE_EMBED),
        b = (0, s.yK)(
            [k.Ay],
            () =>
                null != N
                    ? k.Ay.getEmbeddedActivitiesForChannel(N.id)
                          .filter((e) => e.applicationId === A.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [N, A.id],
        ),
        R = (0, s.yK)([V.default], () => b.map((e) => V.default.getUser(e)).filter((e) => null != e), [b]),
        P = l.useCallback(() => {
            (0, a.he)(
                {
                    invite: r,
                    action: "accept",
                    inviter_id: d.author.id,
                    invite_message_id: d.id,
                    invite_instance_id: (0, m._U)(r.code, d.id),
                },
                S,
            ),
                a.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: r.code,
                    context: c("Invite Button Embed", r.code),
                    analyticsLocations: S,
                });
        }, [r, d, S, c]),
        M = r.state === W.elq.ACCEPTING,
        D = null != C;
    if (null == C) {
        if (null == r.guild) return (0, i.jsx)(Y, {});
        C = (0, v.DY)(r.guild);
    }
    t = D
        ? _
            ? z.intl.string(z.t.DPfdsq)
            : j
              ? z.intl.string(z.t.sqe0hj)
              : z.intl.string(z.t.RscU7I)
        : z.intl.string(z.t["2BP08E"]);
    let w = (D && !T) || (D && _);
    return (T || (n = z.intl.string(z.t.hHGrWz)), null == r.code || "" === r.code || null == I)
        ? null
        : (0, i.jsx)(o.f5, {
              value: S,
              children: (0, i.jsx)(Q, {
                  app: I,
                  activityUsers: R,
                  isMember: D,
                  channel: N,
                  guild: C,
                  message: d,
                  members: u,
                  membersOnline: h,
                  isActivityActive: j,
                  submitting: M,
                  buttonLabel: t,
                  disabled: w,
                  disabledReason: n,
                  handleAcceptInvite: P,
                  onView: p,
              }),
          });
}
function Q(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: s,
            channel: a,
            guild: r,
            message: o,
            members: d,
            membersOnline: c,
            isActivityActive: u,
            submitting: m,
            buttonLabel: h,
            disabled: g,
            disabledReason: A,
            handleAcceptInvite: p,
            onView: x,
        } = e,
        { bot: f, icon: C } = t,
        E = H.Ay.getApplicationIconURL({ id: t.id, icon: C, bot: f }),
        v = (0, w.F)(t),
        I = (0, D.f)(t),
        _ = n.length,
        j = l.useMemo(
            () => [
                {
                    label: h,
                    trackingArea: s ? M.kY.PLAY : M.kY.JOIN_SERVER,
                    submitting: m,
                    disabled: g,
                    disabledReason: g && null != A ? A : void 0,
                    onClick: p,
                },
            ],
            [h, s, m, g, A, p],
        );
    return (0, i.jsx)(R.h, {
        header: t.name,
        title: z.intl.string(z.t["7vb6nw"]),
        iconSrc: E,
        ...I,
        onClickBanner: v,
        info: (0, i.jsxs)("div", {
            className: q.QR,
            children: [
                (0, i.jsx)(X, { channel: a, guild: r, hasEnded: !u, textColor: "none" }),
                s
                    ? _ > 0 &&
                      (0, i.jsx)(P.$, {
                          activityUsers: n,
                          guildId: r.id,
                          activityText: z.intl.formatToPlainString(z.t.yJj035, { count: _ }),
                      })
                    : (0, i.jsx)(Z, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: v,
        trackingConfig: {
            id: t.id,
            linkType: K.J.ACTIVITY_INVITE,
            onView: x,
            guildId: r.id,
            channelId: a?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
var ee = n(4274);
function et(e) {
    let { author: t, inviteError: n } = e,
        l =
            (0, s.bG)([p.default], () => p.default.getId()) === t.id
                ? z.intl.string(z.t.C89OLE)
                : z.intl.string(z.t.YVub5y),
        a = (0, ee.g)(n?.code);
    return (0, i.jsxs)(F.A, {
        children: [
            (0, i.jsx)(F.A.Header, { text: l }),
            (0, i.jsxs)(F.A.Body, {
                children: [
                    (0, i.jsx)(F.A.Icon, { expired: !0 }),
                    (0, i.jsx)(F.A.Info, {
                        expired: !0,
                        title: a?.title ?? z.intl.string(z.t["Jhx/ud"]),
                        children: a?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var en = n(821609),
    ei = n(308528),
    el = n(889227),
    es = n(994500),
    ea = n(427262),
    er = n(344900);
function eo(e) {
    let { invite: t, message: n, getAcceptInviteContext: r } = e,
        d = (0, s.bG)([p.default], () => p.default.getId()),
        c = t.inviter?.id === d,
        u = t.state === W.elq.ACCEPTING,
        { analyticsLocations: h } = (0, o.Ay)(L.A.INVITE_EMBED),
        g = (0, s.bG)([es.A], () => null != t.inviter && es.A.isFriend(t.inviter?.id)),
        A = l.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != x.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), ei.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, a.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, m._U)(t.code, n.id),
                    },
                    h,
                );
        }, [t, n, h]),
        f = l.useCallback(() => {
            (0, a.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, m._U)(t.code, n.id),
                },
                h,
            );
            let e = r("Invite Button Embed", t.code);
            a.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, h, r]);
    if (null == t.inviter) return null;
    let C = g ? A : f,
        E = z.intl.string(z.t.ib7Ng1),
        v = "active";
    g
        ? ((E = z.intl.string(z.t.xhxnPn)), (v = "secondary"))
        : c && ((E = z.intl.string(z.t.ib7Ng1)), (v = "secondary"));
    let I = c ? z.intl.string(z.t.eQyu1F) : z.intl.string(z.t.PYJHW6),
        _ = null != t.inviter ? `${t.inviter.username}` : "",
        j = null != t.inviter ? ea.Ay.getUserTag(t.inviter) : "";
    return (0, i.jsxs)(F.A, {
        children: [
            (0, i.jsx)(F.A.Header, { text: I }),
            (0, i.jsxs)(F.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: er.iH,
                        children: [
                            (0, i.jsx)(F.A.Icon, { user: new el.A(t.inviter), onClick: g ? C : void 0 }),
                            (0, i.jsx)(F.A.Info, { title: _, onClick: g ? C : void 0, children: j }),
                        ],
                    }),
                    (0, i.jsx)(en.$, { onClick: C, text: E, loading: u, disabled: c, variant: v }),
                ],
            }),
        ],
    });
}
var ed = n(403362);
function ec(e) {
    let t,
        n,
        { invite: r, message: d, currentUserId: c, onTransitionToInviteChannel: u, onAcceptInstantInvite: h } = e,
        g = c === d.author.id,
        p = r.state === W.elq.ACCEPTING,
        f = (0, s.bG)([x.A], () => (null != r.channel ? x.A.getChannel(r.channel.id) : null), [r]);
    y()(null == f || f.isPrivate(), "must be a private channel");
    let { analyticsLocations: C } = (0, o.Ay)(L.A.INVITE_EMBED),
        E = null != f,
        v = l.useCallback(() => {
            let e = "noop";
            E ? (u(), (e = "transition")) : (h(), (e = "accept")),
                (0, a.he)(
                    {
                        invite: r,
                        action: e,
                        inviter_id: d.author.id,
                        invite_message_id: d.id,
                        invite_instance_id: (0, m._U)(r.code, d.id),
                    },
                    C,
                );
        }, [r, d, C, E, u, h]);
    if (null == f) {
        if (null == r.channel) return (0, i.jsx)(Y, {});
        (f = (0, A.OY)(r.channel)),
            (n = r.channel?.name),
            (t = null != r.channel && null != r.channel.recipients ? r.channel.recipients : []);
    } else {
        (t = f.recipients.reduce((e, t) => {
            let n = V.default.getUser(t);
            return null != n && e.push(n), e;
        }, [])),
            (n = (0, U.m1)(f, V.default, es.A));
        let e = V.default.getCurrentUser();
        E && null != e && t.push(e);
    }
    (null == n || "" === n) &&
        (n =
            t.length > 0
                ? t
                      .filter(ed.Vq)
                      .map((e) => e.username)
                      .join(", ")
                : z.intl.string(z.t.LJpTRF));
    let I = z.intl.string(z.t.XpeFYr),
        _ = "active";
    E && ((I = z.intl.string(z.t.cEnaWx)), (_ = "secondary"));
    let j = z.intl.string(z.t["3p3/BK"]);
    return (
        g && (j = z.intl.string(z.t.qmtuXE)),
        (0, i.jsxs)(F.A, {
            children: [
                (0, i.jsx)(F.A.Header, { text: j }),
                (0, i.jsxs)(F.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: er.iH,
                            children: [
                                (0, i.jsx)(F.A.Icon, { channel: f, onClick: E ? v : void 0 }),
                                (0, i.jsx)(F.A.Info, {
                                    title: n,
                                    onClick: E ? v : void 0,
                                    children: (0, i.jsx)(F.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(en.$, { onClick: v, loading: p, disabled: E, variant: _, text: I, fullWidth: !0 }),
                    ],
                }),
            ],
        })
    );
}
n(938796);
var eu = n(110259),
    em = n(821418),
    eh = n(665260),
    eg = n(990078),
    eA = n(885574),
    ep = n(192308),
    ex = n(139286),
    ef = n(340837);
let eC = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, eh.Lt)(n.getSelfMember(i.id)?.flags ?? 0, ef.D.IS_GUEST)) ||
        (0, eh.Lt)(t.flags ?? 0, em.Q.IS_GUEST_INVITE)
    );
};
var eE = n(517905),
    ev = n(986268),
    eI = n(696451);
function e_(e) {
    let t,
        r,
        d,
        {
            onTransitionToInviteChannel: c,
            onAcceptInstantInvite: u,
            guild: h,
            invite: g,
            message: p,
            currentUserId: x,
        } = e,
        f = x === p.author.id,
        { channel: C, approximate_member_count: E, approximate_presence_count: I } = g,
        _ = g.state === W.elq.ACCEPTING,
        j = null != C ? (0, A.OY)(C) : null,
        N = null != h,
        T = null != j,
        y = null != j && j.isGuildStageVoice(),
        S = (0, eh.Lt)(g.flags ?? 0, em.Q.IS_GUEST_INVITE),
        k = j?.isGuildVoiceOrThread() ?? !1,
        R = h?.features.has(W.GuildFeatures.HUB) ?? !1,
        P = h?.id,
        { analyticsLocations: M } = (0, o.Ay)(L.A.INVITE_EMBED);
    (0, ex.A)({
        name: eu.ImpressionNames.INVITE_EMBED,
        type: eu.ImpressionTypes.VIEW,
        properties: {
            invite_code: g.code,
            invite_guild_id: g.guild?.id,
            invite_channel_id: C?.id,
            invite_instance_id: (0, m._U)(g.code, p.id),
            invite_channel_type: C?.type,
            embed_type: "guild_invite",
            location_stack: M,
        },
    });
    let [D, w] = l.useState(!1),
        O = l.useCallback(() => w(!1), []),
        U = l.useRef(null),
        G = (0, s.bG)([eI.Ay], () => eC([eI.Ay], g)),
        V = l.useCallback(() => {
            w(!0), (0, a.Pq)(P, "show profile", M);
        }, [P, M]),
        B = l.useCallback(() => {
            let e = "noop";
            N ? (c(), (e = "transition")) : (u(), (e = "accept")),
                (0, a.he)(
                    {
                        invite: g,
                        action: e,
                        inviter_id: p.author.id,
                        invite_message_id: p.id,
                        invite_instance_id: (0, m._U)(g.code, p.id),
                    },
                    M,
                );
        }, [g, p, M, N, c, u]);
    if (null == h) {
        if (null == g.guild) return (0, i.jsx)(Y, {});
        (h = v.DY(g.guild)).premiumTier = g.guild.premium_tier ?? W.TVA.NONE;
    }
    let H = (function (e) {
        let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: s, isStream: a } = e;
        if (t)
            if (i)
                if (a) return z.intl.string(z.t.N85DCl);
                else if (s) return z.intl.string(z.t.TJQcNv);
                else if (l) return z.intl.string(z.t.mJyBir);
                else return z.intl.string(z.t.lxTgP9);
            else if (a) return z.intl.string(z.t.Mnvc3C);
            else if (s) return z.intl.string(z.t.FdPNr5);
            else if (l) return z.intl.string(z.t.f4gmrf);
            else return z.intl.string(z.t.H39rEY);
        return n
            ? i
                ? z.intl.string(z.t.UxmnHx)
                : z.intl.string(z.t.sigPEf)
            : i
              ? z.intl.string(z.t["oU/lsl"])
              : z.intl.string(z.t.BoQUFf);
    })({ isVoiceChannel: k, isOwnInvite: f, isGuest: S, isHubGuild: R, isStage: y, isStream: !1 });
    return (
        (r = (0, i.jsxs)("span", {
            className: er.FA,
            children: [
                (0, i.jsx)(eE.A, {
                    guildId: h.id,
                    name: h.name,
                    shouldShow: D,
                    onRequestClose: O,
                    targetElementRef: U,
                    children: () => (0, i.jsx)(F.A.GuildName, { guild: h, ref: U }),
                }),
                (0, i.jsx)("span", {
                    className: er.E3,
                    children: (0, i.jsx)(ev.A, { guild: h, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        S &&
            (d = (0, i.jsx)(eg.m, {
                asContainer: !0,
                text: z.intl.string(z.t["/FeTK6"]),
                children: (0, i.jsx)(eA.m, { size: "md", color: "currentColor", className: er.G }),
            })),
        k
            ? ((r = (0, i.jsx)(F.A.Channel, { channel: j })),
              (t = (0, i.jsxs)("span", {
                  className: er.FA,
                  children: [
                      z.intl.format(z.t["2wimj5"], { guildName: h.name }),
                      (0, i.jsx)("span", {
                          className: er.E3,
                          children: (0, i.jsx)(ev.A, { guild: h, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != E && E >= 5) || (null != I && I > 0)
              ? (t = (0, i.jsx)(F.A.Data, { members: E, membersOnline: I }))
              : T && (t = (0, i.jsx)(F.A.Channel, { channel: j, guild: h })),
        (0, i.jsxs)(F.A, {
            children: [
                (0, i.jsx)(F.A.GuildSplash, { guild: h }),
                (0, i.jsx)(F.A.Header, { text: H, extra: d }),
                (0, i.jsxs)(F.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: er.iH,
                            children: [
                                (0, i.jsx)(F.A.Icon, { guild: h }),
                                (0, i.jsx)(F.A.Info, { title: r, onClick: V, children: t }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: er.UD,
                            children: (0, i.jsx)(en.$, {
                                onClick: B,
                                loading: _,
                                variant: "active",
                                fullWidth: k,
                                disabled: !G,
                                text: k
                                    ? y
                                        ? z.intl.string(z.t["7vb2cc"])
                                        : z.intl.string(z.t.gpqgah)
                                    : N
                                      ? z.intl.string(z.t.cEnaWx)
                                      : z.intl.string(z.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                h.features.has(W.GuildFeatures.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: er.me }),
                            (0, i.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: z.intl.format(z.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, ep.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("77598"),
                                                n.e("97804"),
                                                n.e("7265"),
                                                n.e("97641"),
                                                n.e("90496"),
                                            ]).then(n.bind(n, 401155));
                                            return (t) => (0, i.jsx)(e, { ...t });
                                        }),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
var ej = n(890856),
    eN = n(123292),
    eT = n(775602),
    ey = n(9994),
    eS = n(461888),
    eb = n(179283),
    ek = n(123213),
    eL = n(86376),
    eR = n(42780),
    eP = n(897288),
    eM = n(14712);
function eD(e) {
    let { invite: t, isMemberOfGuild: n, message: a, onTransitionToInviteChannel: r, onAcceptInstantInvite: d } = e,
        c = l.useRef(null),
        [u, h] = l.useState(!0),
        [g, A] = l.useState(!1),
        p = t.state === W.elq.ACCEPTING,
        x = (0, s.bG)([eT.A], () => eT.A.useReducedMotion),
        { analyticsLocations: f } = (0, o.Ay)(L.A.INVITE_EMBED);
    (0, ex.A)({
        name: eu.ImpressionNames.INVITE_EMBED,
        type: eu.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, m._U)(t.code, a.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: f,
        },
    }),
        l.useLayoutEffect(() => {
            A((c.current?.clientHeight ?? 0) > 292);
        }, [A]);
    let C = (0, ey.oO)(t),
        E = l.useCallback(() => {
            !g || (u && h(!1));
        }, [u, g]),
        I = l.useCallback(() => {
            !g || u || h(!0);
        }, [u, g]),
        _ = l.useMemo(
            () =>
                g && c.current?.clientHeight != null
                    ? {
                          height: u ? 292 : c.current.clientHeight + 36 + 48,
                          transition: x ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [u, g, x],
        );
    return null == C
        ? (0, i.jsx)(Y, {})
        : (0, i.jsxs)(ej.s, {
              className: N()(eM.Gg, { [eM.vk]: g && u }),
              onClick: E,
              style: _,
              "aria-label": z.intl.string(z.t.dcl9MQ),
              children: [
                  (0, i.jsxs)("div", {
                      className: eM.uY,
                      ref: c,
                      children: [
                          (0, i.jsx)(eR.J$, { profile: C, className: eM.vK }),
                          (0, i.jsx)(eR.CG, { profile: C }),
                          (0, i.jsx)(eL.A, { profile: C }),
                          (0, i.jsx)(eb.P, { profile: C, className: eM.rb }),
                          (0, i.jsx)(eP.A, {
                              guild: null != t.guild ? (0, v.DY)(t.guild) : null,
                              roles: t.roles,
                              className: eM.Ei,
                          }),
                      ],
                  }),
                  g && !u
                      ? (0, i.jsx)("div", {
                            className: eM.Se,
                            children: (0, i.jsx)(eN.Q, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: I,
                                text: z.intl.string(z.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, i.jsxs)("div", {
                      className: N()(eM.qr, { [eM.iK]: g }),
                      children: [
                          g && u ? (0, i.jsx)("div", { className: eM.D7 }) : null,
                          (0, i.jsx)("div", {
                              className: N()(eM.z8, { [eM.it]: g && u }),
                              children: (0, i.jsx)("div", {
                                  className: eM.UD,
                                  children: (0, i.jsx)(ew, {
                                      invite: t,
                                      profile: C,
                                      isMemberOfGuild: n,
                                      message: a,
                                      submitting: p,
                                      onTransitionToInviteChannel: r,
                                      onAcceptInstantInvite: d,
                                  }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function ew(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: s,
            message: r,
            submitting: d,
            onTransitionToInviteChannel: c,
            onAcceptInstantInvite: u,
        } = e,
        { guildId: h, ctaType: g } = (0, eS.Ay)(n, eS.cn.INVITE, t.code),
        { analyticsLocations: A } = (0, o.Ay)(L.A.INVITE_EMBED),
        p = l.useCallback(() => {
            let e = s ? "transition" : "accept";
            (0, a.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: r.author.id,
                    invite_message_id: r.id,
                    invite_instance_id: (0, m._U)(t.code, r.id),
                },
                A,
            );
        }, [t, r, A, s]);
    return null == g
        ? null
        : (0, i.jsx)(ek.Y, {
              guildId: h,
              ctaType: g,
              submitting: d,
              onGoToGuild: c,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: p,
          });
}
var eO = n(414798),
    eU = n(406704),
    eG = n(625494);
function eV(e) {
    let t,
        n,
        l,
        { author: a, banned: r, channelId: o } = e,
        d = (0, s.bG)([p.default], () => p.default.getId()),
        c = ea.Ay.useName(a),
        u = d === a.id,
        m = (0, s.bG)([x.A, E.A], () => {
            let e = x.A.getChannel(o);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, eU.UJ)(e),
                    n = E.A.can(W.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return E.A.can(W.xBc.SEND_MESSAGES, e);
        });
    return (
        u
            ? ((t = z.intl.string(z.t["F/OLvL"])), (l = z.intl.string(z.t.C89OLE)))
            : ((l = z.intl.string(z.t.YVub5y)),
              r
                  ? (t = z.intl.string(z.t["57nBty"]))
                  : null != c && m
                    ? ((t = z.intl.formatToPlainString(z.t["9Akp1s"], { username: c })),
                      (n = (0, i.jsx)(en.$, {
                          onClick: function () {
                              let { id: e } = a,
                                  t = `@${ea.Ay.getUserTag(a, { decoration: "never" })}`,
                                  n = `<@${e}>`;
                              eG._.dispatchToLastSubscribed(W.jej.INSERT_TEXT, { plainText: t, rawText: n }),
                                  null != o && eO.A.startTyping(o);
                          },
                          text: z.intl.string(z.t.P8tvKG),
                      })))
                    : (t = z.intl.string(z.t["SMJr+a"]))),
        (0, i.jsxs)(F.A, {
            children: [
                (0, i.jsx)(F.A.Header, { text: l }),
                (0, i.jsxs)(F.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: er.iH,
                            children: [
                                (0, i.jsx)(F.A.Icon, { expired: !0 }),
                                (0, i.jsx)(F.A.Info, { expired: !0, title: z.intl.string(z.t["Jhx/ud"]), children: t }),
                            ],
                        }),
                        n,
                    ],
                }),
            ],
        })
    );
}
var eB = n(616356),
    eH = n(967198);
function eF(e) {
    let t,
        {
            invite: n,
            currentUserId: r,
            guild: d,
            message: c,
            onTransitionToInviteChannel: u,
            onAcceptInstantInvite: h,
        } = e,
        g = d?.id,
        p = (0, s.bG)([eH.A], () => eH.A.getGuildId()),
        x = (0, s.bG)(
            [eB.A],
            () => (null != n && null != n.target_user ? eB.A.getActiveStreamForUser(n.target_user.id, g) : null),
            [n, g],
        ),
        f = (0, s.bG)(
            [eB.A],
            () => (null != n && null != n.target_user ? eB.A.getStreamForUser(n.target_user.id, g) : null),
            [n, g],
        ),
        { analyticsLocations: C } = (0, o.Ay)(L.A.INVITE_EMBED);
    (0, ex.A)({
        name: eu.ImpressionNames.INVITE_EMBED,
        type: eu.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, m._U)(n.code, c.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: C,
        },
    });
    let E = null != n && n.target_type === J.yV.STREAM && null != n.target_user && null != x,
        I =
            null != n &&
            null != f &&
            null != n.channel &&
            null != n.guild &&
            f.channelId === n.channel.id &&
            f.guildId === n.guild.id;
    y()(null != n, "Invite cannot be null");
    let { target_type: _, target_user: j } = n;
    y()(_ === J.yV.STREAM && null != j, "invalid streaming invite");
    let N = r === j.id,
        T = n.state === W.elq.ACCEPTING,
        S = l.useCallback(() => {
            let e = "noop";
            E ? (u(), (e = "transition")) : (h(), (e = "accept")),
                (0, a.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: c.author.id,
                        invite_message_id: c.id,
                        invite_instance_id: (0, m._U)(n.code, c.id),
                    },
                    C,
                );
        }, [n, c, C, E, u, h]),
        b = null != d;
    if (null == d) {
        if (null == n.guild) return (0, i.jsx)(Y, {});
        d = (0, v.DY)(n.guild);
    }
    let k = null != n.channel ? (0, A.OY)(n.channel) : null,
        R = ea.Ay.getName(j),
        P = E || (!I && b),
        M = z.intl.string(z.t.I6JG46),
        D = "active";
    b && !I
        ? ((t = N ? z.intl.string(z.t.oBLoZJ) : z.intl.formatToPlainString(z.t["0QJmA+"], { name: R })),
          (M = z.intl.string(z.t.Wdi5E1)))
        : ((D = "active"),
          E && ((M = z.intl.string(z.t.Q1W99y)), (D = "secondary")),
          (t = N ? z.intl.string(z.t["4hyaHu"]) : z.intl.formatToPlainString(z.t.QmlLEq, { name: R })));
    let w =
        p === d.id && null != k
            ? (0, i.jsx)(F.A.Channel, { channel: k })
            : z.intl.formatToPlainString(z.t.u0vaDE, { guildName: d.name });
    return (0, i.jsxs)(F.A, {
        children: [
            (0, i.jsx)(F.A.Header, { text: z.intl.string(z.t["wS+5Wb"]) }),
            (0, i.jsxs)(F.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: er.iH,
                        children: [
                            (0, i.jsx)(F.A.Icon, { guild: d, onClick: b && I ? S : void 0 }),
                            (0, i.jsx)(F.A.Info, { title: t, onClick: b && I ? S : void 0, children: w }),
                        ],
                    }),
                    (0, i.jsx)(en.$, { onClick: S, loading: T, disabled: P, variant: D, text: M }),
                ],
            }),
        ],
    });
}
let ez = (0, n(945810).mj)({
    name: "2026-03-receiver-invite-embed-refresh",
    kind: "user",
    defaultConfig: { enabled: !1, activityPreviewEnabled: !1 },
    variations: { 1: { enabled: !0, activityPreviewEnabled: !1 }, 2: { enabled: !0, activityPreviewEnabled: !0 } },
});
function eY(e) {
    return ez.getConfig({ location: e });
}
function eW(e) {
    return ez.useConfig({ location: e });
}
var eK = n(735438),
    eJ = n.n(eK),
    eq = n(956793),
    eZ = n(401843),
    eX = n(450149),
    e$ = n(652896),
    eQ = n(834757),
    e0 = n(336787),
    e1 = n(378570),
    e2 = n(427358),
    e3 = n(607567),
    e9 = n(939249),
    e4 = n(320448),
    e5 = n(370714);
function e6(e) {
    let { className: t, channel: n, guild: l, onClick: s } = e,
        a = (0, G.gU)(n, l),
        r = (0, U.Ay)(n);
    return (0, i.jsxs)(e9.D, {
        onClick: s,
        className: N()(e5.UP, t),
        children: [
            null != a &&
                (0, i.jsx)(a, { className: e5.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, i.jsx)(b.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, i.jsxs)(S.A, { children: [l.name, " / ", r] }),
            }),
            (0, i.jsx)(e4._, { className: e5.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var e7 = n(52133),
    e8 = n(183623),
    te = n(402216),
    tt = n(279250),
    tn = n(877315),
    ti = n(607407),
    tl = n(692236);
function ts(e) {
    let { stream: t, currentUserId: n, className: l, onClick: a } = e,
        { activeStream: r, channel: o } = (0, s.bG)(
            [eB.A, x.A],
            () => ({ activeStream: eB.A.getActiveStreamForApplicationStream(t), channel: x.A.getChannel(t.channelId) }),
            [t],
            e7.A,
        ),
        { previewUrl: d, isLoading: c } = (0, eX.A)(t.guildId, t.channelId, t.ownerId),
        [u, m] = (0, tt.zP)(o);
    return (0, i.jsxs)(e9.D, {
        onClick: u ? a : void 0,
        className: N()(tl.Um, { [tl.qf]: null == d && !c, [tl.vk]: u }, l),
        children: [
            (0, i.jsx)("div", {
                className: tl.rB,
                children: (0, i.jsx)(ti.A, { className: tl.y6, stream: t, noText: !0 }),
            }),
            (0, i.jsx)(te.Ay, { className: tl.Ok, size: te.ed.SMALL }),
            u
                ? (0, i.jsxs)("div", {
                      className: tl.H_,
                      children: [
                          (0, i.jsx)("div", { className: tl.bF }),
                          (0, i.jsx)(en.$, {
                              variant: "overlay-secondary",
                              size: "sm",
                              icon: e8.F,
                              text: (0, tn.A)(t, r, n, m),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var ta = n(922016),
    tr = n(364522),
    to = n(713517),
    td = n(538451),
    tc = n(562153),
    tu = n(581448),
    tm = n(824078);
function th() {
    let e = l.useRef(null),
        { isHoveringOrFocusing: t } = (0, to.A)(e),
        [n, i] = l.useState(!1),
        s = t || n,
        [a, r] = l.useState(!1),
        o = l.useRef(null);
    return (
        l.useEffect(() => (s || (o.current = setTimeout(() => r(!1), 150)), () => clearTimeout(o.current)), [s]),
        s && !a && r(!0),
        { triggerRef: e, shouldShow: s || a, onPopoutHoverOrFocus: i }
    );
}
function tg(e) {
    let { guildId: t, channelId: n, users: s, onHoverOrFocus: a, ...r } = e,
        o = l.useCallback((e) => (0, i.jsx)(tA, { users: e, guildId: t, channelId: n, onHoverOrFocus: a }), [t, n, a]);
    return (0, i.jsx)(ta.Y, { renderPopout: () => o(s), ...r });
}
function tA(e) {
    let { users: t, guildId: n, channelId: s, onHoverOrFocus: a } = e,
        r = l.useRef(null),
        { isHoveringOrFocusing: o } = (0, to.A)(r);
    return (
        l.useEffect(() => {
            a?.(o);
        }, [a, o]),
        (0, i.jsx)(tr.Ip, {
            ref: r,
            className: N()(tm.popover, tu.o),
            style: { "--custom-popover-width": "200px" },
            children: (0, i.jsx)("div", {
                children: t.map((e) =>
                    (0, i.jsx)(
                        td.A,
                        { user: e, guildId: n ?? void 0, channelId: s, nick: tc.Ay.getNickname(n, s, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var tp = n(123924),
    tx = n(778712),
    tf = n(717421),
    tC = n(97808),
    tE = n(531657);
let tv = { mass: 1, tension: 170, friction: 26 };
function tI(e) {
    let { className: t, guildId: n, channelId: s, members: a, ref: r, motion: o } = e,
        d = a.length > 4,
        c = d ? a.slice(0, 3) : a,
        u = d ? a.length - 4 + 1 : 0,
        m = Math.min(d ? c.length + 1 : c.length, 4),
        h = (o?.percentX ?? 0) * 6,
        g = (o?.percentY ?? 0) * 6,
        A = 1 + ((o?.proximity ?? 0) / 2) * 0.08,
        [p, x] = (0, tf.z)(() => ({ x: 0, y: 0, scale: 1, config: tv }));
    return (
        l.useEffect(() => {
            x({ x: h, y: g, scale: A });
        }, [h, g, A, x]),
        (0, i.jsxs)(tp.animated.div, {
            ref: r,
            className: N()(tE.gg, t),
            "data-count": m,
            "aria-hidden": !0,
            style: {
                transform: (0, tp.to)([p.x, p.y, p.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                c.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: tE.my,
                            children: (0, i.jsx)(eg.m, {
                                text: tc.Ay.getName(n, s, e),
                                children: (0, i.jsx)(tC.eu, {
                                    src: (function (e, t, n) {
                                        let i = eI.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, H.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === m
                                            ? tx._3.SIZE_80
                                            : 2 === m && 0 === t
                                              ? tx._3.DEPRECATED_SIZE_60
                                              : 2 === m && 1 === t
                                                ? tx._3.SIZE_40
                                                : m > 2 && 0 === t
                                                  ? tx._3.DEPRECATED_SIZE_60
                                                  : m > 2 && 1 === t
                                                    ? tx._3.SIZE_48
                                                    : m > 2
                                                      ? tx._3.SIZE_40
                                                      : tx._3.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                d && (0, i.jsx)(t_, { guildId: n, channelId: s, members: a, count: u }, "overflow"),
            ],
        })
    );
}
function t_(e) {
    let { guildId: t, channelId: n, members: l, count: s } = e,
        { triggerRef: a, shouldShow: r, onPopoutHoverOrFocus: o } = th();
    return (0, i.jsx)(tg, {
        targetElementRef: a,
        guildId: t,
        channelId: n,
        users: l,
        shouldShow: r,
        onHoverOrFocus: o,
        children: (e) =>
            (0, i.jsx)("div", {
                className: N()(tE.my, tE.k2),
                ref: a,
                ...e,
                children: (0, i.jsx)(b.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: s > 99 ? ">99" : `+${s}`,
                }),
            }),
    });
}
function tj(e) {
    let {
            invite: t,
            currentUserId: n,
            message: r,
            guild: d,
            onTransitionToInviteChannel: c,
            onAcceptInstantInvite: u,
        } = e,
        g = eW("VoiceInviteEmbed"),
        p = l.useRef(null),
        C = d ?? null;
    null == C && null != t.guild && (C = v.DY(t.guild));
    let I = null != t.channel ? (0, A.OY)(t.channel) : null;
    y()(null != C, "Voice Invite Embed must be used in context of a guild."),
        y()(null != I, "Voice Invite Embed must be able to resolve an invite channel.");
    let _ = (0, s.bG)([E.A, x.A], () => {
            let e = x.A.getChannel(I.id);
            return null == e || E.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e);
        }, [I.id]),
        j = (0, s.bG)([e3.Ay], () => (_ ? e3.Ay.getVoiceStatesForChannelAlt(I.id, C.id) : []), [I.id, C.id, _]),
        { label: T, sublabel: k } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                s = i.length > 0,
                a = i.some((e) => e.user?.id === n.id),
                r = i.length - !!a;
            return s
                ? {
                      label: l
                          ? z.intl.format(z.t["2RWMFV"], { othersCount: r })
                          : z.intl.format(z.t.Da7tZx, { othersCount: r }),
                  }
                : {
                      label: l ? z.intl.string(z.t.DVDvCD) : z.intl.string(z.t.TY77rq),
                      sublabel: z.intl.string(z.t.wM2WTM),
                  };
        })({ currentUserId: n, author: r.author, voiceStates: j }),
        R = (0, s.bG)([f.A], () => null != f.A.getGuild(C.id), [C.id]),
        P = (0, s.bG)([eI.Ay], () => eC([eI.Ay], t), [t]),
        M = t.state === W.elq.ACCEPTING,
        { analyticsLocations: D } = (0, o.Ay)(L.A.INVITE_EMBED),
        w = (0, m._U)(t.code, r.id),
        O = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: a } = e;
            return (0, s.bG)([eB.A, e2.A], () => {
                if ((0, h.G4)(t) && null != t.target_user) {
                    let e = eB.A.getStreamForUser(t.target_user.id, l);
                    if (null != e && e.channelId === a) return e;
                }
                let e = n.author.id;
                if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                    let t = eB.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === a) return t;
                }
                let s = i
                    .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                    .map((e) => e.voiceState.userId);
                if (0 === s.length) return null;
                for (let e of [...s].sort((e, t) => {
                    let n = e2.A.getUserAffinity(e)?.vcProbability ?? 0;
                    return (e2.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                })) {
                    let t = eB.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === a) return t;
                }
                return null;
            }, [t, n, i, l, a]);
        })({ invite: t, message: r, voiceStates: j, guildId: C.id, channelId: I.id }),
        U = (0, eQ.AO)(O),
        G = g.activityPreviewEnabled && null != O,
        V = l.useCallback(() => {
            let e = R ? "transition" : "accept";
            R ? c() : u(),
                (0, a.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: r.author.id,
                        invite_message_id: r.id,
                        invite_instance_id: w,
                        application_id: U?.id ?? void 0,
                        stream_key: null != O ? (0, e$._z)(O) : void 0,
                        number_of_users_in_channel: j.length,
                    },
                    D,
                );
        }, [t, r, D, w, R, U, O, j.length, c, u]),
        H = l.useCallback(() => {
            R ? (0, e1.iN)(I.id) : u({ autoJoin: !1 }),
                B.default.track(W.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: C.id,
                    invite_channel_id: I.id,
                    invite_instance_id: w,
                    is_member: R,
                    application_id: U?.id ?? null,
                    stream_key: null != O ? (0, e$._z)(O) : null,
                    number_of_users_in_channel: j.length,
                    location_stack: D,
                });
        }, [I.id, C.id, t.code, w, R, U, O, j.length, D, u]);
    (0, ex.A)({
        name: eu.ImpressionNames.VOICE_INVITE_EMBED,
        type: eu.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: C.id,
            invite_channel_id: I.id,
            invite_instance_id: w,
            has_active_stream: G,
            location_stack: D,
        },
    });
    let F = l.useCallback(() => {
            null != O &&
                (R ? (eq.default.selectVoiceChannel(O.channelId), (0, eZ.Nl)(O)) : u(),
                (0, a.he)(
                    {
                        invite: t,
                        action: R ? "transition" : "accept",
                        inviter_id: r.author.id,
                        invite_message_id: r.id,
                        invite_instance_id: w,
                        application_id: U?.id ?? void 0,
                        stream_key: (0, e$._z)(O),
                        number_of_users_in_channel: j.length,
                    },
                    [...D, L.A.VOICE_INVITE_STREAM_PREVIEW],
                ));
        }, [O, R, t, r, D, w, U, j.length, u]),
        Y = (0, s.bG)([eT.A], () => eT.A.useReducedMotion),
        K = l.useRef(null),
        [J, q] = l.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        Z = (0, s.bG)([e2.A], () => {
            let e = j.map((e) => e.user),
                t = e.find((e) => e.id === r.author.id),
                n = e
                    .filter((e) => e.id !== r.author.id)
                    .sort((e, t) => {
                        let n = e2.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (e2.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...n] : n;
        }, [j, r.author.id]),
        X = l.useMemo(() => eJ().throttle(q, 20), [q]);
    l.useEffect(() => () => X.cancel(), [X]);
    let $ = l.useCallback(
            (e) => {
                if (Y) return;
                let t = K.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    l = 0,
                    s = p.current?.getBoundingClientRect();
                if (null != s) {
                    let n = s.left + s.width / 2,
                        i = s.top + s.height / 2,
                        a = e.clientX - n,
                        r = e.clientY - i;
                    l = 2 * Math.exp(-Math.sqrt(a * a + r * r) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                X({ percentX: n, percentY: i, proximity: l });
            },
            [Y, X],
        ),
        Q = l.useCallback(() => {
            X.cancel(), q({ percentX: 0, percentY: 0, proximity: 0 });
        }, [X]);
    return (0, i.jsxs)("div", {
        ref: K,
        className: N()(tl.kL, { [tl.VD]: G }),
        onMouseMove: $,
        onMouseLeave: Q,
        children: [
            (0, i.jsx)("div", { className: tl.ys }),
            (0, i.jsx)("div", { className: tl.r$, style: { "--custom-number-of-dots": 24 } }),
            G ? (0, i.jsx)(ty, { className: tl.tB, stream: O }) : null,
            (0, i.jsxs)("div", {
                className: tl.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: tl.Qs,
                        children: [
                            (0, i.jsx)(e6, { channel: I, guild: C, onClick: H }),
                            (0, i.jsxs)("div", {
                                className: tl.WD,
                                children: [
                                    G ? (0, i.jsx)(tN, { guildId: C.id, channelId: I.id, members: Z }) : null,
                                    (0, i.jsx)(b.E, {
                                        variant: "text-md/medium",
                                        children: (0, i.jsx)(S.A, { lineClamp: G ? 1 : 3, children: T }),
                                    }),
                                    null != k
                                        ? (0, i.jsx)(b.E, {
                                              variant: "text-sm/normal",
                                              className: tl.$B,
                                              children: (0, i.jsx)(S.A, { children: k }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    G
                        ? (0, i.jsx)(ts, { stream: O, currentUserId: n, onClick: F, className: tl.Rh })
                        : (0, i.jsx)("div", {
                              className: tl.RE,
                              children: (0, i.jsx)(tI, {
                                  ref: p,
                                  guildId: C.id,
                                  channelId: I.id,
                                  members: Z,
                                  motion: J,
                              }),
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: tl.xk,
                children: (0, i.jsx)(en.$, {
                    onClick: V,
                    loading: M,
                    variant: "active",
                    fullWidth: !0,
                    disabled: !P,
                    text: z.intl.string(z.t.gpqgah),
                }),
            }),
        ],
    });
}
function tN(e) {
    let { guildId: t, channelId: n, members: l } = e;
    return l.length > 4
        ? (0, i.jsx)(tT, { guildId: t, channelId: n, members: l })
        : (0, i.jsx)("div", {
              className: tl.WM,
              children: (0, i.jsx)(e0.A, {
                  guildId: t,
                  partySize: { knownSize: l.length, unknownSize: 0, totalSize: l.length },
                  maxAvatarsShown: 3,
                  members: l,
              }),
          });
}
function tT(e) {
    let { guildId: t, channelId: n, members: l } = e,
        { triggerRef: s, shouldShow: a, onPopoutHoverOrFocus: r } = th();
    return (0, i.jsx)(tg, {
        guildId: t,
        channelId: n,
        users: l,
        targetElementRef: s,
        shouldShow: a,
        onHoverOrFocus: r,
        children: (e) =>
            (0, i.jsx)("div", {
                className: tl.WM,
                ...e,
                children: (0, i.jsx)(e0.A, {
                    guildId: t,
                    partySize: { knownSize: l.length, unknownSize: 0, totalSize: l.length },
                    maxAvatarsShown: 3,
                    members: l,
                    overflowRef: s,
                }),
            }),
    });
}
function ty(e) {
    let { className: t, stream: n } = e,
        { previewUrl: l, isLoading: s } = (0, eX.A)(n.guildId, n.channelId, n.ownerId),
        a = null != l && !s;
    return (0, i.jsx)("div", {
        className: N()(t, tl.rr, { [tl.pc]: !a }),
        style: { "--custom-bg-url": a ? `url(${l})` : "unset" },
        children: (0, i.jsx)("div", { className: tl.bW }),
    });
}
function tS(e) {
    return eW("VoiceInvite").enabled ? (0, i.jsx)(tj, { ...e }) : null;
}
var tb = n(459192),
    tk = n(983851),
    tL = n(661531),
    tR = n(52074),
    tP = n(725613),
    tM = n(85451),
    tD = n(145497),
    tw = n(481947),
    tO = n(198183);
function tU(e) {
    let { invite: t, message: n, channel: r, onTransitionToInviteChannel: d } = e,
        c = (0, U.Ay)(r),
        u = (0, s.bG)([f.A], () => f.A.getGuild(r.guild_id), [r.guild_id]),
        { voiceStates: h } = (0, s.cf)(
            [e3.Ay],
            () => ({ voiceStates: null != r.guild_id ? e3.Ay.getVoiceStatesForChannelAlt(r.id, r.guild_id) : [] }),
            [r],
        ),
        g = l.useMemo(
            () => [...h.filter((e) => e.voiceState.selfStream), ...h.filter((e) => !e.voiceState.selfStream)],
            [h],
        ),
        A = (0, s.bG)([tP.A], () => tP.A.getStartTime(r), [r]);
    l.useEffect(() => {
        null != A || null == r.guild_id || tP.A.hasRequestedStartTimes(r.guild_id) || (0, tR.U)(r.guild_id);
    }, [r, A]);
    let p = l.useRef(null),
        x = l.useRef(null),
        C = l.useCallback(() => {
            let e = p.current,
                t = x.current;
            if (null == t) return;
            let n = null != e && e.scrollHeight - e.scrollTop > e.clientHeight + 1;
            t.style.display = n ? "block" : "none";
        }, []);
    l.useLayoutEffect(() => {
        C();
    }, [g, C]);
    let E = l.useCallback(
            (e) => {
                null != p.current && p.current.removeEventListener("scroll", C),
                    (p.current = e),
                    null != e && e.addEventListener("scroll", C);
            },
            [C],
        ),
        { analyticsLocations: v } = (0, o.Ay)(L.A.INVITE_EMBED),
        I = (0, m._U)(t.code, n.id),
        _ = h.some((e) => e.voiceState.selfStream);
    (0, ex.A)({
        name: eu.ImpressionNames.VOICE_INVITE_EMBED,
        type: eu.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: r.guild_id,
            invite_channel_id: r.id,
            invite_instance_id: I,
            has_active_stream: _,
            location_stack: v,
        },
    });
    let j = l.useCallback(() => {
            (0, e1.iN)(r.id);
        }, [r.id]),
        N = l.useCallback(() => {
            d(),
                (0, a.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: I,
                        number_of_users_in_channel: h.length,
                    },
                    v,
                );
        }, [t, n, v, I, h.length, d]);
    return (0, i.jsxs)("div", {
        className: tO.kL,
        children: [
            (0, i.jsxs)("div", {
                className: tO.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: tO.yW,
                        children: [
                            (0, i.jsx)(tk.H, {
                                className: tO.p,
                                color: h.length > 0 ? tL.A.colors.TEXT_FEEDBACK_POSITIVE : tL.A.colors.ICON_SUBTLE,
                                size: "custom",
                                width: 20,
                                height: 20,
                            }),
                            (0, i.jsx)(tb.u, {
                                title: `${u?.name} / ${c}`,
                                body: "",
                                assetSize: 24,
                                asset: null != u ? (0, i.jsx)(tD.Ay, { guild: u, iconSize: 24 }) : void 0,
                                position: "top",
                                children: (0, i.jsx)(e9.D, {
                                    className: tO.HA,
                                    onClick: j,
                                    children: (0, i.jsx)(b.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: c,
                                    }),
                                }),
                            }),
                        ],
                    }),
                    null != A ? (0, i.jsx)(tM.z, { entry: { start: A }, textColor: "text-feedback-positive" }) : null,
                ],
            }),
            g.length > 0
                ? (0, i.jsxs)("div", {
                      className: tO.Ao,
                      children: [
                          (0, i.jsx)(tr.Ip, {
                              ref: E,
                              className: tO.JD,
                              children: g.map((e) =>
                                  (0, i.jsx)(
                                      tw.Ay,
                                      {
                                          className: tO.Eq,
                                          user: e.user,
                                          guildId: r.guild_id ?? void 0,
                                          channelId: r.id,
                                          nick: e.nick,
                                          isStreaming: e.voiceState.selfStream,
                                      },
                                      e.user.id,
                                  ),
                              ),
                          }),
                          (0, i.jsx)("div", { ref: x, className: tO.wH, style: { display: "none" } }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: tO.p$,
                      children: (0, i.jsx)(b.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: z.intl.string(z.t.zSqdrS),
                      }),
                  }),
            (0, i.jsx)("div", {
                className: tO.TB,
                children: (0, i.jsx)(en.$, {
                    onClick: N,
                    icon: tk.H,
                    variant: "active",
                    fullWidth: !0,
                    text: z.intl.string(z.t.gpqgah),
                }),
            }),
        ],
    });
}
function tG(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        r = t.channel?.id,
        o = (0, s.bG)([x.A, E.A], () => {
            let e = x.A.getChannel(r);
            return null != e && E.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [r]),
        d = (0, s.bG)([f.A], () => null != f.A.getGuild(t.guild?.id), [t.guild]);
    return null == o
        ? (0, i.jsx)(eD, {
              invite: t,
              message: n,
              isMemberOfGuild: d,
              onTransitionToInviteChannel: l,
              onAcceptInstantInvite: a,
          })
        : (0, i.jsx)(tU, { invite: t, message: n, channel: o, onTransitionToInviteChannel: l });
}
function tV(e) {
    let { code: t, message: n, getAcceptInviteContext: I } = e,
        { invite: j, inviteError: N } = (0, s.cf)(
            [C.A],
            () => ({ invite: C.A.getInvite(t), inviteError: C.A.getInviteError(t) }),
            [t],
        ),
        T = null == j,
        y = (0, m._U)(t, n.id);
    l.useEffect(() => {
        T && a.Ay.resolveInvite(t, void 0, { inviteInstanceId: y });
    }, [t, T, y]);
    let S = j ?? { state: W.elq.RESOLVING, code: "" },
        { analyticsLocations: b } = (0, o.Ay)(),
        k = (0, s.bG)([f.A], () => (j?.guild != null ? f.A.getGuild(j.guild.id) : null), [j]),
        L = (0, s.bG)([x.A, E.A], () => {
            let e = j?.channel?.id;
            if (null == e) return !1;
            let t = x.A.getChannel(e);
            return null != t && E.A.canBasicChannel(W.hVb.VIEW_CHANNEL, t);
        }, [j]),
        R = (0, s.bG)([p.default], () => p.default.getId()),
        P = (0, s.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(S.guild_scheduled_event?.id), [S]),
        M = () => {
            null != S.channel && a.Ay.transitionToInviteSync(S);
        },
        D = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == k && j?.guild != null ? v.DY(j.guild) : k;
            (0, g.g)({ guild: n, isMember: null != k, analyticsLocations: b }) === g.W.PROCEED &&
                a.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: I("Invite Button Embed", t),
                    autoJoin: e,
                });
        },
        w = (0, i.jsx)(e_, {
            onTransitionToInviteChannel: M,
            onAcceptInstantInvite: D,
            currentUserId: R,
            guild: k,
            invite: S,
            message: n,
        });
    switch (S.state) {
        case W.elq.RESOLVING:
            w = (0, i.jsx)(Y, {});
            break;
        case W.elq.EXPIRED:
        case W.elq.BANNED:
            w = (0, i.jsx)(eV, { banned: S.state === W.elq.BANNED, author: n.author, channelId: n.channel_id });
            break;
        case W.elq.ERROR:
            w = (0, i.jsx)(et, { author: n.author, inviteError: N });
            break;
        default:
            switch ((0, h.On)(S)) {
                case h.Xd.GROUP_DM:
                    w = (0, i.jsx)(ec, {
                        onTransitionToInviteChannel: M,
                        onAcceptInstantInvite: D,
                        currentUserId: R,
                        invite: S,
                        message: n,
                    });
                    break;
                case h.Xd.FRIEND:
                    w = (0, i.jsx)(eo, { invite: S, message: n, getAcceptInviteContext: I });
                    break;
                default:
                    if ((0, h.G4)(S)) {
                        if (null != S.channel && (0, A.OY)(S.channel).isGuildVoice()) {
                            if (
                                null != S.guild &&
                                _({ location: "InviteEmbed.isStreamInvite", guildId: S.guild.id }).enabled &&
                                L
                            ) {
                                w = (0, i.jsx)(tG, {
                                    onTransitionToInviteChannel: M,
                                    onAcceptInstantInvite: D,
                                    invite: S,
                                    message: n,
                                });
                                break;
                            }
                            if (eY("InviteEmbed.isStreamInvite").enabled) {
                                w = (0, i.jsx)(tS, {
                                    onTransitionToInviteChannel: M,
                                    onAcceptInstantInvite: D,
                                    currentUserId: R,
                                    guild: k,
                                    invite: S,
                                    message: n,
                                });
                                break;
                            }
                        }
                        w = (0, i.jsx)(eF, {
                            onTransitionToInviteChannel: M,
                            onAcceptInstantInvite: D,
                            currentUserId: R,
                            message: n,
                            guild: k,
                            invite: S,
                        });
                        break;
                    }
                    if ((0, h.ly)(S)) {
                        w = (0, i.jsx)(u.Ay, {
                            guildScheduledEvent: P,
                            guild: S.guild,
                            channel: S.channel,
                            isMember: null != k,
                            onAcceptInstantInvite: D,
                            onTransitionToInviteChannel: M,
                        });
                        break;
                    }
                    if ((0, h.oK)(S)) {
                        w = (0, i.jsx)($, { invite: S, getAcceptInviteContext: I, message: n });
                        break;
                    }
                    if (null != S.channel && (0, A.OY)(S.channel).isGuildVoice()) {
                        if (
                            null != S.guild &&
                            _({ location: "InviteEmbed.isGuildVoice", guildId: S.guild.id }).enabled &&
                            L
                        ) {
                            w = (0, i.jsx)(tG, {
                                onTransitionToInviteChannel: M,
                                onAcceptInstantInvite: D,
                                invite: S,
                                message: n,
                            });
                            break;
                        }
                        if (eY("InviteEmbed.isGuildVoice").enabled) {
                            w = (0, i.jsx)(tS, {
                                onTransitionToInviteChannel: M,
                                onAcceptInstantInvite: D,
                                currentUserId: R,
                                guild: k,
                                invite: S,
                                message: n,
                            });
                            break;
                        }
                    }
                    (0, d.v)(S) &&
                        (w = (0, i.jsx)(eD, {
                            onTransitionToInviteChannel: M,
                            onAcceptInstantInvite: D,
                            isMemberOfGuild: null != k,
                            invite: S,
                            message: n,
                        }));
            }
    }
    return (0, i.jsx)(r.A, { section: W.JJy.INVITE_LINK, children: w });
}
