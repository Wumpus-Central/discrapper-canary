n.d(t, { A: () => tB });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    r = n(376728),
    s = n(820284),
    o = n(688810),
    c = n(107123),
    d = n(698441),
    u = n(427080),
    _ = n(21599),
    m = n(346542),
    h = n(665066),
    p = n(95701),
    g = n(495544),
    f = n(734057),
    x = n(71393),
    A = n(299091),
    C = n(576705),
    v = n(860689);
let I = (0, n(600975).C)({
    kind: "guild",
    id: "2026-04_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function E(e) {
    let { guildId: t, location: n } = e;
    return I.getCurrentConfig({ guildId: t, location: n });
}
n(321073);
var b = n(503698),
    y = n.n(b),
    T = n(284009),
    j = n.n(T),
    N = n(3026),
    S = n(834730),
    k = n(933958),
    L = n(793574),
    R = n(572211),
    w = n(178910),
    P = n(354287),
    D = n(112150),
    M = n(574660),
    O = n(429913),
    U = n(47167),
    G = n(713654),
    B = n(287809),
    V = n(954571),
    F = n(486020),
    H = n(529200),
    z = n(985018);
function W() {
    return (0, i.jsxs)(H.A, {
        children: [
            (0, i.jsx)(H.A.Header, { text: z.intl.string(z.t["N/g9Z4"]) }),
            (0, i.jsx)(H.A.Body, { resolving: !0 }),
        ],
    });
}
var Y = n(652215),
    K = n(768349),
    q = n(172799),
    Z = n(718223);
function J(e) {
    let { members: t, membersOnline: n, textColor: l } = e,
        a = [];
    return (
        null != n &&
            n > 0 &&
            a.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: Z.MY,
                        children: [
                            (0, i.jsx)("i", { className: Z.QD }),
                            (0, i.jsx)(S.E, {
                                variant: "text-xs/normal",
                                className: Z.U9,
                                color: l,
                                children: z.intl.format(z.t["LC+S+m"], { membersOnline: n }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != t &&
            a.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: Z.MY,
                        children: [
                            (0, i.jsx)("i", { className: Z.o6 }),
                            (0, i.jsx)(S.E, {
                                variant: "text-xs/normal",
                                className: Z.U9,
                                color: l,
                                children: z.intl.format(z.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, i.jsx)("div", { className: Z.rc, children: a })
    );
}
function Q(e) {
    let { channel: t, guild: n, hasEnded: l, textColor: a } = e,
        r = (0, U.Ay)(t);
    if (null != t && null != n) {
        let e = (0, G.gU)(t, n);
        return (0, i.jsxs)("div", {
            className: y()(Z.Ix, { [Z.v6]: l }),
            children: [
                null != e ? (0, i.jsx)(e, { className: Z.p, size: "xs", color: "currentColor" }) : null,
                (0, i.jsx)(N.A, {
                    children: (0, i.jsx)(S.E, {
                        variant: "text-xs/normal",
                        color: a,
                        children: z.intl.format(z.t["dc+LW4"], { channelName: r ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, i.jsx)("div", {
              className: y()(Z.Ix, { [Z.v6]: l }),
              children: (0, i.jsx)(N.A, {
                  children: (0, i.jsx)(S.E, {
                      variant: "text-xs/normal",
                      color: a,
                      children: z.intl.format(z.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function X(e) {
    let t,
        n,
        { invite: s, message: c, getAcceptInviteContext: d } = e,
        { approximate_member_count: u, approximate_presence_count: m, target_type: h, target_application: p } = s;
    j()(h === q.yV.EMBEDDED_APPLICATION && null != p, "invalid application invite");
    let g = l.useCallback(() => {
            V.default.track(Y.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: p.id,
                invite_inviter_id: s.inviter?.id,
            });
        }, [s.inviter?.id, p.id]),
        A = (0, a.bG)([x.A], () => (null != s.guild ? x.A.getGuild(s.guild.id) : null), [s]),
        I = (0, O.A)([p.id])[0],
        E = (0, a.bG)(
            [k.Ay],
            () => s?.channel != null && k.Ay.getSelfEmbeddedActivityForChannel(s.channel.id)?.applicationId === p.id,
        ),
        b = (0, a.bG)([k.Ay], () =>
            (s.channel?.id != null ? k.Ay.getEmbeddedActivitiesForChannel(s.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return p.id === t;
            }),
        ),
        y = f.A.getChannel(s.channel?.id),
        T = (0, a.bG)([C.A], () => null != y && C.A.can(Y.xBc.USE_EMBEDDED_ACTIVITIES, y), [y]),
        { analyticsLocations: N } = (0, o.Ay)(L.A.INVITE_EMBED),
        S = (0, a.yK)(
            [k.Ay],
            () =>
                null != y
                    ? k.Ay.getEmbeddedActivitiesForChannel(y.id)
                          .filter((e) => e.applicationId === p.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [y, p.id],
        ),
        R = (0, a.yK)([B.default], () => S.map((e) => B.default.getUser(e)).filter((e) => null != e), [S]),
        w = l.useCallback(() => {
            (0, r.he)(
                {
                    invite: s,
                    action: "accept",
                    inviter_id: c.author.id,
                    invite_message_id: c.id,
                    invite_instance_id: (0, _._U)(s.code, c.id),
                },
                N,
            ),
                r.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: s.code,
                    context: d("Invite Button Embed", s.code),
                    analyticsLocations: N,
                });
        }, [s, c, N, d]),
        P = s.state === Y.elq.ACCEPTING,
        D = null != A;
    if (null == A) {
        if (null == s.guild) return (0, i.jsx)(W, {});
        A = (0, v.DY)(s.guild);
    }
    t = D
        ? E
            ? z.intl.string(z.t.DPfdsq)
            : b
              ? z.intl.string(z.t.sqe0hj)
              : z.intl.string(z.t.RscU7I)
        : z.intl.string(z.t["2BP08E"]);
    let M = (D && !T) || (D && E);
    return (T || (n = z.intl.string(z.t.hHGrWz)), null == s.code || "" === s.code || null == I)
        ? null
        : (0, i.jsx)(o.f5, {
              value: N,
              children: (0, i.jsx)($, {
                  app: I,
                  activityUsers: R,
                  isMember: D,
                  channel: y,
                  guild: A,
                  message: c,
                  members: u,
                  membersOnline: m,
                  isActivityActive: b,
                  submitting: P,
                  buttonLabel: t,
                  disabled: M,
                  disabledReason: n,
                  handleAcceptInvite: w,
                  onView: g,
              }),
          });
}
function $(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: a,
            channel: r,
            guild: s,
            message: o,
            members: c,
            membersOnline: d,
            isActivityActive: u,
            submitting: _,
            buttonLabel: m,
            disabled: h,
            disabledReason: p,
            handleAcceptInvite: g,
            onView: f,
        } = e,
        { bot: x, icon: A } = t,
        C = F.Ay.getApplicationIconURL({ id: t.id, icon: A, bot: x }),
        v = (0, M.F)(t),
        I = (0, D.f)(t),
        E = n.length,
        b = l.useMemo(
            () => [
                {
                    label: m,
                    trackingArea: a ? P.kY.PLAY : P.kY.JOIN_SERVER,
                    submitting: _,
                    disabled: h,
                    disabledReason: h && null != p ? p : void 0,
                    onClick: g,
                },
            ],
            [m, a, _, h, p, g],
        );
    return (0, i.jsx)(R.h, {
        header: t.name,
        title: z.intl.string(z.t["7vb6nw"]),
        iconSrc: C,
        ...I,
        onClickBanner: v,
        info: (0, i.jsxs)("div", {
            className: Z.QR,
            children: [
                (0, i.jsx)(Q, { channel: r, guild: s, hasEnded: !u, textColor: "none" }),
                a
                    ? E > 0 &&
                      (0, i.jsx)(w.$, {
                          activityUsers: n,
                          guildId: s.id,
                          activityText: z.intl.formatToPlainString(z.t.yJj035, { count: E }),
                      })
                    : (0, i.jsx)(J, { members: c, membersOnline: d, textColor: "none" }),
            ],
        }),
        actions: b,
        onClickContent: v,
        trackingConfig: {
            id: t.id,
            linkType: K.J.ACTIVITY_INVITE,
            onView: f,
            guildId: s.id,
            channelId: r?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
var ee = n(4274);
function et(e) {
    let { author: t, inviteError: n } = e,
        l =
            (0, a.bG)([g.default], () => g.default.getId()) === t.id
                ? z.intl.string(z.t.C89OLE)
                : z.intl.string(z.t.YVub5y),
        r = (0, ee.g)(n?.code);
    return (0, i.jsxs)(H.A, {
        children: [
            (0, i.jsx)(H.A.Header, { text: l }),
            (0, i.jsxs)(H.A.Body, {
                children: [
                    (0, i.jsx)(H.A.Icon, { expired: !0 }),
                    (0, i.jsx)(H.A.Info, {
                        expired: !0,
                        title: r?.title ?? z.intl.string(z.t["Jhx/ud"]),
                        children: r?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var en = n(821609),
    ei = n(308528),
    el = n(889227),
    ea = n(994500),
    er = n(427262),
    es = n(344900);
function eo(e) {
    let { invite: t, message: n, getAcceptInviteContext: s } = e,
        c = (0, a.bG)([g.default], () => g.default.getId()),
        d = t.inviter?.id === c,
        u = t.state === Y.elq.ACCEPTING,
        { analyticsLocations: m } = (0, o.Ay)(L.A.INVITE_EMBED),
        h = (0, a.bG)([ea.A], () => null != t.inviter && ea.A.isFriend(t.inviter?.id)),
        p = l.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != f.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), ei.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, r.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, _._U)(t.code, n.id),
                    },
                    m,
                );
        }, [t, n, m]),
        x = l.useCallback(() => {
            (0, r.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, _._U)(t.code, n.id),
                },
                m,
            );
            let e = s("Invite Button Embed", t.code);
            r.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, m, s]);
    if (null == t.inviter) return null;
    let A = h ? p : x,
        C = z.intl.string(z.t.ib7Ng1),
        v = "active";
    h
        ? ((C = z.intl.string(z.t.xhxnPn)), (v = "secondary"))
        : d && ((C = z.intl.string(z.t.ib7Ng1)), (v = "secondary"));
    let I = d ? z.intl.string(z.t.eQyu1F) : z.intl.string(z.t.PYJHW6),
        E = null != t.inviter ? `${t.inviter.username}` : "",
        b = null != t.inviter ? er.Ay.getUserTag(t.inviter) : "";
    return (0, i.jsxs)(H.A, {
        children: [
            (0, i.jsx)(H.A.Header, { text: I }),
            (0, i.jsxs)(H.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: es.iH,
                        children: [
                            (0, i.jsx)(H.A.Icon, { user: new el.A(t.inviter), onClick: h ? A : void 0 }),
                            (0, i.jsx)(H.A.Info, { title: E, onClick: h ? A : void 0, children: b }),
                        ],
                    }),
                    (0, i.jsx)(en.$, { onClick: A, text: C, loading: u, disabled: d, variant: v }),
                ],
            }),
        ],
    });
}
var ec = n(403362);
function ed(e) {
    let t,
        n,
        { invite: s, message: c, currentUserId: d, onTransitionToInviteChannel: u, onAcceptInstantInvite: m } = e,
        h = d === c.author.id,
        g = s.state === Y.elq.ACCEPTING,
        x = (0, a.bG)([f.A], () => (null != s.channel ? f.A.getChannel(s.channel.id) : null), [s]);
    j()(null == x || x.isPrivate(), "must be a private channel");
    let { analyticsLocations: A } = (0, o.Ay)(L.A.INVITE_EMBED),
        C = null != x,
        v = l.useCallback(() => {
            let e = "noop";
            C ? (u(), (e = "transition")) : (m(), (e = "accept")),
                (0, r.he)(
                    {
                        invite: s,
                        action: e,
                        inviter_id: c.author.id,
                        invite_message_id: c.id,
                        invite_instance_id: (0, _._U)(s.code, c.id),
                    },
                    A,
                );
        }, [s, c, A, C, u, m]);
    if (null == x) {
        if (null == s.channel) return (0, i.jsx)(W, {});
        (x = (0, p.OY)(s.channel)),
            (n = s.channel?.name),
            (t = null != s.channel && null != s.channel.recipients ? s.channel.recipients : []);
    } else {
        (t = x.recipients.reduce((e, t) => {
            let n = B.default.getUser(t);
            return null != n && e.push(n), e;
        }, [])),
            (n = (0, U.m1)(x, B.default, ea.A));
        let e = B.default.getCurrentUser();
        C && null != e && t.push(e);
    }
    (null == n || "" === n) &&
        (n =
            t.length > 0
                ? t
                      .filter(ec.Vq)
                      .map((e) => e.username)
                      .join(", ")
                : z.intl.string(z.t.LJpTRF));
    let I = z.intl.string(z.t.XpeFYr),
        E = "active";
    C && ((I = z.intl.string(z.t.cEnaWx)), (E = "secondary"));
    let b = z.intl.string(z.t["3p3/BK"]);
    return (
        h && (b = z.intl.string(z.t.qmtuXE)),
        (0, i.jsxs)(H.A, {
            children: [
                (0, i.jsx)(H.A.Header, { text: b }),
                (0, i.jsxs)(H.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: es.iH,
                            children: [
                                (0, i.jsx)(H.A.Icon, { channel: x, onClick: C ? v : void 0 }),
                                (0, i.jsx)(H.A.Info, {
                                    title: n,
                                    onClick: C ? v : void 0,
                                    children: (0, i.jsx)(H.A.Data, { members: t.length }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(en.$, { onClick: v, loading: g, disabled: C, variant: E, text: I, fullWidth: !0 }),
                    ],
                }),
            ],
        })
    );
}
n(938796);
var eu = n(110259),
    e_ = n(821418),
    em = n(665260),
    eh = n(990078),
    ep = n(885574),
    eg = n(192308),
    ef = n(139286),
    ex = n(340837);
let eA = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, em.Lt)(n.getSelfMember(i.id)?.flags ?? 0, ex.D.IS_GUEST)) ||
        (0, em.Lt)(t.flags ?? 0, e_.Q.IS_GUEST_INVITE)
    );
};
var eC = n(517905),
    ev = n(537547),
    eI = n(696451);
function eE(e) {
    let t,
        s,
        c,
        {
            onTransitionToInviteChannel: d,
            onAcceptInstantInvite: u,
            guild: m,
            invite: h,
            message: g,
            currentUserId: f,
        } = e,
        x = f === g.author.id,
        { channel: A, approximate_member_count: C, approximate_presence_count: I } = h,
        E = h.state === Y.elq.ACCEPTING,
        b = null != A ? (0, p.OY)(A) : null,
        y = null != m,
        T = null != b,
        j = null != b && b.isGuildStageVoice(),
        N = (0, em.Lt)(h.flags ?? 0, e_.Q.IS_GUEST_INVITE),
        k = b?.isGuildVoiceOrThread() ?? !1,
        R = m?.features.has(Y.GuildFeatures.HUB) ?? !1,
        w = m?.id,
        { analyticsLocations: P } = (0, o.Ay)(L.A.INVITE_EMBED);
    (0, ef.A)({
        name: eu.ImpressionNames.INVITE_EMBED,
        type: eu.ImpressionTypes.VIEW,
        properties: {
            invite_code: h.code,
            invite_guild_id: h.guild?.id,
            invite_channel_id: A?.id,
            invite_instance_id: (0, _._U)(h.code, g.id),
            invite_channel_type: A?.type,
            embed_type: "guild_invite",
            location_stack: P,
        },
    });
    let [D, M] = l.useState(!1),
        O = l.useCallback(() => M(!1), []),
        U = l.useRef(null),
        G = (0, a.bG)([eI.Ay], () => eA([eI.Ay], h)),
        B = l.useCallback(() => {
            M(!0), (0, r.Pq)(w, "show profile", P);
        }, [w, P]),
        V = l.useCallback(() => {
            let e = "noop";
            y ? (d(), (e = "transition")) : (u(), (e = "accept")),
                (0, r.he)(
                    {
                        invite: h,
                        action: e,
                        inviter_id: g.author.id,
                        invite_message_id: g.id,
                        invite_instance_id: (0, _._U)(h.code, g.id),
                    },
                    P,
                );
        }, [h, g, P, y, d, u]);
    if (null == m) {
        if (null == h.guild) return (0, i.jsx)(W, {});
        (m = v.DY(h.guild)).premiumTier = h.guild.premium_tier ?? Y.TVA.NONE;
    }
    let F = (function (e) {
        let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: a, isStream: r } = e;
        if (t)
            if (i)
                if (r) return z.intl.string(z.t.N85DCl);
                else if (a) return z.intl.string(z.t.TJQcNv);
                else if (l) return z.intl.string(z.t.mJyBir);
                else return z.intl.string(z.t.lxTgP9);
            else if (r) return z.intl.string(z.t.Mnvc3C);
            else if (a) return z.intl.string(z.t.FdPNr5);
            else if (l) return z.intl.string(z.t.f4gmrf);
            else return z.intl.string(z.t.H39rEY);
        return n
            ? i
                ? z.intl.string(z.t.UxmnHx)
                : z.intl.string(z.t.sigPEf)
            : i
              ? z.intl.string(z.t["oU/lsl"])
              : z.intl.string(z.t.BoQUFf);
    })({ isVoiceChannel: k, isOwnInvite: x, isGuest: N, isHubGuild: R, isStage: j, isStream: !1 });
    return (
        (s = (0, i.jsxs)("span", {
            className: es.FA,
            children: [
                (0, i.jsx)(eC.A, {
                    guildId: m.id,
                    name: m.name,
                    shouldShow: D,
                    onRequestClose: O,
                    targetElementRef: U,
                    children: () => (0, i.jsx)(H.A.GuildName, { guild: m, ref: U }),
                }),
                (0, i.jsx)("span", {
                    className: es.E3,
                    children: (0, i.jsx)(ev.A, { guild: m, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        N &&
            (c = (0, i.jsx)(eh.m, {
                asContainer: !0,
                text: z.intl.string(z.t["/FeTK6"]),
                children: (0, i.jsx)(ep.m, { size: "md", color: "currentColor", className: es.G }),
            })),
        k
            ? ((s = (0, i.jsx)(H.A.Channel, { channel: b })),
              (t = (0, i.jsxs)("span", {
                  className: es.FA,
                  children: [
                      z.intl.format(z.t["2wimj5"], { guildName: m.name }),
                      (0, i.jsx)("span", {
                          className: es.E3,
                          children: (0, i.jsx)(ev.A, { guild: m, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != C && C >= 5) || (null != I && I > 0)
              ? (t = (0, i.jsx)(H.A.Data, { members: C, membersOnline: I }))
              : T && (t = (0, i.jsx)(H.A.Channel, { channel: b, guild: m })),
        (0, i.jsxs)(H.A, {
            children: [
                (0, i.jsx)(H.A.GuildSplash, { guild: m }),
                (0, i.jsx)(H.A.Header, { text: F, extra: c }),
                (0, i.jsxs)(H.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: es.iH,
                            children: [
                                (0, i.jsx)(H.A.Icon, { guild: m }),
                                (0, i.jsx)(H.A.Info, { title: s, onClick: B, children: t }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: es.UD,
                            children: (0, i.jsx)(en.$, {
                                onClick: V,
                                loading: E,
                                variant: "active",
                                fullWidth: k,
                                disabled: !G,
                                text: k
                                    ? j
                                        ? z.intl.string(z.t["7vb2cc"])
                                        : z.intl.string(z.t.gpqgah)
                                    : y
                                      ? z.intl.string(z.t.cEnaWx)
                                      : z.intl.string(z.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                m.features.has(Y.GuildFeatures.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: es.me }),
                            (0, i.jsx)(S.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: z.intl.format(z.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, eg.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([n.e("90496"), n.e("7206")]).then(
                                                n.bind(n, 401155),
                                            );
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
var eb = n(890856),
    ey = n(123292),
    eT = n(775602),
    ej = n(9994),
    eN = n(461888),
    eS = n(179283),
    ek = n(123213),
    eL = n(86376),
    eR = n(42780),
    ew = n(897288),
    eP = n(14712);
function eD(e) {
    let { invite: t, isMemberOfGuild: n, message: r, onTransitionToInviteChannel: s, onAcceptInstantInvite: c } = e,
        d = l.useRef(null),
        [u, m] = l.useState(!0),
        [h, p] = l.useState(!1),
        g = t.state === Y.elq.ACCEPTING,
        f = (0, a.bG)([eT.A], () => eT.A.useReducedMotion),
        { analyticsLocations: x } = (0, o.Ay)(L.A.INVITE_EMBED);
    (0, ef.A)({
        name: eu.ImpressionNames.INVITE_EMBED,
        type: eu.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, _._U)(t.code, r.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: x,
        },
    }),
        l.useLayoutEffect(() => {
            p((d.current?.clientHeight ?? 0) > 292);
        }, [p]);
    let A = (0, ej.oO)(t),
        C = l.useCallback(() => {
            !h || (u && m(!1));
        }, [u, h]),
        I = l.useCallback(() => {
            !h || u || m(!0);
        }, [u, h]),
        E = l.useMemo(
            () =>
                h && d.current?.clientHeight != null
                    ? {
                          height: u ? 292 : d.current.clientHeight + 36 + 48,
                          transition: f ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [u, h, f],
        );
    return null == A
        ? (0, i.jsx)(W, {})
        : (0, i.jsxs)(eb.s, {
              className: y()(eP.Gg, { [eP.vk]: h && u }),
              onClick: C,
              style: E,
              "aria-label": z.intl.string(z.t.dcl9MQ),
              children: [
                  (0, i.jsxs)("div", {
                      className: eP.uY,
                      ref: d,
                      children: [
                          (0, i.jsx)(eR.J$, { profile: A, className: eP.vK }),
                          (0, i.jsx)(eR.CG, { profile: A }),
                          (0, i.jsx)(eL.A, { profile: A }),
                          (0, i.jsx)(eS.P, { profile: A, className: eP.rb }),
                          (0, i.jsx)(ew.A, {
                              guild: null != t.guild ? (0, v.DY)(t.guild) : null,
                              roles: t.roles,
                              className: eP.Ei,
                          }),
                      ],
                  }),
                  h && !u
                      ? (0, i.jsx)("div", {
                            className: eP.Se,
                            children: (0, i.jsx)(ey.Q, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: I,
                                text: z.intl.string(z.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, i.jsxs)("div", {
                      className: y()(eP.qr, { [eP.iK]: h }),
                      children: [
                          h && u ? (0, i.jsx)("div", { className: eP.D7 }) : null,
                          (0, i.jsx)("div", {
                              className: y()(eP.z8, { [eP.it]: h && u }),
                              children: (0, i.jsx)("div", {
                                  className: eP.UD,
                                  children: (0, i.jsx)(eM, {
                                      invite: t,
                                      profile: A,
                                      isMemberOfGuild: n,
                                      message: r,
                                      submitting: g,
                                      onTransitionToInviteChannel: s,
                                      onAcceptInstantInvite: c,
                                  }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function eM(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: a,
            message: s,
            submitting: c,
            onTransitionToInviteChannel: d,
            onAcceptInstantInvite: u,
        } = e,
        { guildId: m, ctaType: h } = (0, eN.Ay)(n, eN.cn.INVITE, t.code),
        { analyticsLocations: p } = (0, o.Ay)(L.A.INVITE_EMBED),
        g = l.useCallback(() => {
            let e = a ? "transition" : "accept";
            (0, r.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: s.author.id,
                    invite_message_id: s.id,
                    invite_instance_id: (0, _._U)(t.code, s.id),
                },
                p,
            );
        }, [t, s, p, a]);
    return null == h
        ? null
        : (0, i.jsx)(ek.Y, {
              guildId: m,
              ctaType: h,
              submitting: c,
              onGoToGuild: d,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: g,
          });
}
var eO = n(414798),
    eU = n(406704),
    eG = n(625494);
function eB(e) {
    let t,
        n,
        l,
        { author: r, banned: s, channelId: o } = e,
        c = (0, a.bG)([g.default], () => g.default.getId()),
        d = er.Ay.useName(r),
        u = c === r.id,
        _ = (0, a.bG)([f.A, C.A], () => {
            let e = f.A.getChannel(o);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, eU.UJ)(e),
                    n = C.A.can(Y.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return C.A.can(Y.xBc.SEND_MESSAGES, e);
        });
    return (
        u
            ? ((t = z.intl.string(z.t["F/OLvL"])), (l = z.intl.string(z.t.C89OLE)))
            : ((l = z.intl.string(z.t.YVub5y)),
              s
                  ? (t = z.intl.string(z.t["57nBty"]))
                  : null != d && _
                    ? ((t = z.intl.formatToPlainString(z.t["9Akp1s"], { username: d })),
                      (n = (0, i.jsx)(en.$, {
                          onClick: function () {
                              let { id: e } = r,
                                  t = `@${er.Ay.getUserTag(r, { decoration: "never" })}`,
                                  n = `<@${e}>`;
                              eG._.dispatchToLastSubscribed(Y.jej.INSERT_TEXT, { plainText: t, rawText: n }),
                                  null != o && eO.A.startTyping(o);
                          },
                          text: z.intl.string(z.t.P8tvKG),
                      })))
                    : (t = z.intl.string(z.t["SMJr+a"]))),
        (0, i.jsxs)(H.A, {
            children: [
                (0, i.jsx)(H.A.Header, { text: l }),
                (0, i.jsxs)(H.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: es.iH,
                            children: [
                                (0, i.jsx)(H.A.Icon, { expired: !0 }),
                                (0, i.jsx)(H.A.Info, { expired: !0, title: z.intl.string(z.t["Jhx/ud"]), children: t }),
                            ],
                        }),
                        n,
                    ],
                }),
            ],
        })
    );
}
var eV = n(616356),
    eF = n(967198);
function eH(e) {
    let t,
        {
            invite: n,
            currentUserId: s,
            guild: c,
            message: d,
            onTransitionToInviteChannel: u,
            onAcceptInstantInvite: m,
        } = e,
        h = c?.id,
        g = (0, a.bG)([eF.A], () => eF.A.getGuildId()),
        f = (0, a.bG)(
            [eV.A],
            () => (null != n && null != n.target_user ? eV.A.getActiveStreamForUser(n.target_user.id, h) : null),
            [n, h],
        ),
        x = (0, a.bG)(
            [eV.A],
            () => (null != n && null != n.target_user ? eV.A.getStreamForUser(n.target_user.id, h) : null),
            [n, h],
        ),
        { analyticsLocations: A } = (0, o.Ay)(L.A.INVITE_EMBED);
    (0, ef.A)({
        name: eu.ImpressionNames.INVITE_EMBED,
        type: eu.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, _._U)(n.code, d.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: A,
        },
    });
    let C = null != n && n.target_type === q.yV.STREAM && null != n.target_user && null != f,
        I =
            null != n &&
            null != x &&
            null != n.channel &&
            null != n.guild &&
            x.channelId === n.channel.id &&
            x.guildId === n.guild.id;
    j()(null != n, "Invite cannot be null");
    let { target_type: E, target_user: b } = n;
    j()(E === q.yV.STREAM && null != b, "invalid streaming invite");
    let y = s === b.id,
        T = n.state === Y.elq.ACCEPTING,
        N = l.useCallback(() => {
            let e = "noop";
            C ? (u(), (e = "transition")) : (m(), (e = "accept")),
                (0, r.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: d.author.id,
                        invite_message_id: d.id,
                        invite_instance_id: (0, _._U)(n.code, d.id),
                    },
                    A,
                );
        }, [n, d, A, C, u, m]),
        S = null != c;
    if (null == c) {
        if (null == n.guild) return (0, i.jsx)(W, {});
        c = (0, v.DY)(n.guild);
    }
    let k = null != n.channel ? (0, p.OY)(n.channel) : null,
        R = er.Ay.getName(b),
        w = C || (!I && S),
        P = z.intl.string(z.t.I6JG46),
        D = "active";
    S && !I
        ? ((t = y ? z.intl.string(z.t.oBLoZJ) : z.intl.formatToPlainString(z.t["0QJmA+"], { name: R })),
          (P = z.intl.string(z.t.Wdi5E1)))
        : ((D = "active"),
          C && ((P = z.intl.string(z.t.Q1W99y)), (D = "secondary")),
          (t = y ? z.intl.string(z.t["4hyaHu"]) : z.intl.formatToPlainString(z.t.QmlLEq, { name: R })));
    let M =
        g === c.id && null != k
            ? (0, i.jsx)(H.A.Channel, { channel: k })
            : z.intl.formatToPlainString(z.t.u0vaDE, { guildName: c.name });
    return (0, i.jsxs)(H.A, {
        children: [
            (0, i.jsx)(H.A.Header, { text: z.intl.string(z.t["wS+5Wb"]) }),
            (0, i.jsxs)(H.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: es.iH,
                        children: [
                            (0, i.jsx)(H.A.Icon, { guild: c, onClick: S && I ? N : void 0 }),
                            (0, i.jsx)(H.A.Info, { title: t, onClick: S && I ? N : void 0, children: M }),
                        ],
                    }),
                    (0, i.jsx)(en.$, { onClick: N, loading: T, disabled: w, variant: D, text: P }),
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
function eW(e) {
    return ez.getConfig({ location: e });
}
function eY(e) {
    return ez.useConfig({ location: e });
}
var eK = n(735438),
    eq = n.n(eK),
    eZ = n(956793),
    eJ = n(401843),
    eQ = n(450149),
    eX = n(652896),
    e$ = n(834757),
    e0 = n(336787),
    e1 = n(378570),
    e2 = n(427358),
    e3 = n(607567),
    e7 = n(939249),
    e5 = n(320448),
    e8 = n(370714);
function e9(e) {
    let { className: t, channel: n, guild: l, onClick: a } = e,
        r = (0, G.gU)(n, l),
        s = (0, U.Ay)(n);
    return (0, i.jsxs)(e7.D, {
        onClick: a,
        className: y()(e8.UP, t),
        children: [
            null != r &&
                (0, i.jsx)(r, { className: e8.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, i.jsx)(S.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, i.jsxs)(N.A, { children: [l.name, " / ", s] }),
            }),
            (0, i.jsx)(e5._, { className: e8.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var e4 = n(52133),
    e6 = n(183623),
    te = n(402216),
    tt = n(279250),
    tn = n(877315),
    ti = n(607407),
    tl = n(692236);
function ta(e) {
    let { stream: t, currentUserId: n, className: l, onClick: r } = e,
        { activeStream: s, channel: o } = (0, a.bG)(
            [eV.A, f.A],
            () => ({ activeStream: eV.A.getActiveStreamForApplicationStream(t), channel: f.A.getChannel(t.channelId) }),
            [t],
            e4.A,
        ),
        { previewUrl: c, isLoading: d } = (0, eQ.A)(t.guildId, t.channelId, t.ownerId),
        [u, _] = (0, tt.zP)(o);
    return (0, i.jsxs)(e7.D, {
        onClick: u ? r : void 0,
        className: y()(tl.Um, { [tl.qf]: null == c && !d, [tl.vk]: u }, l),
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
                              icon: e6.F,
                              text: (0, tn.A)(t, s, n, _),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var tr = n(922016),
    ts = n(364522),
    to = n(713517),
    tc = n(538451),
    td = n(562153),
    tu = n(581448),
    t_ = n(824078);
function tm() {
    let e = l.useRef(null),
        { isHoveringOrFocusing: t } = (0, to.A)(e),
        [n, i] = l.useState(!1),
        a = t || n,
        [r, s] = l.useState(!1),
        o = l.useRef(null);
    return (
        l.useEffect(() => (a || (o.current = setTimeout(() => s(!1), 150)), () => clearTimeout(o.current)), [a]),
        a && !r && s(!0),
        { triggerRef: e, shouldShow: a || r, onPopoutHoverOrFocus: i }
    );
}
function th(e) {
    let { guildId: t, channelId: n, users: a, onHoverOrFocus: r, ...s } = e,
        o = l.useCallback((e) => (0, i.jsx)(tp, { users: e, guildId: t, channelId: n, onHoverOrFocus: r }), [t, n, r]);
    return (0, i.jsx)(tr.Y, { renderPopout: () => o(a), ...s });
}
function tp(e) {
    let { users: t, guildId: n, channelId: a, onHoverOrFocus: r } = e,
        s = l.useRef(null),
        { isHoveringOrFocusing: o } = (0, to.A)(s);
    return (
        l.useEffect(() => {
            r?.(o);
        }, [r, o]),
        (0, i.jsx)(ts.Ip, {
            ref: s,
            className: y()(t_.popover, tu.o),
            style: { "--custom-popover-width": "200px" },
            children: (0, i.jsx)("div", {
                children: t.map((e) =>
                    (0, i.jsx)(
                        tc.A,
                        { user: e, guildId: n ?? void 0, channelId: a, nick: td.Ay.getNickname(n, a, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var tg = n(419354),
    tf = n(778712),
    tx = n(717421),
    tA = n(97808),
    tC = n(531657);
let tv = { mass: 1, tension: 170, friction: 26 };
function tI(e) {
    let { className: t, guildId: n, channelId: a, members: r, ref: s, motion: o } = e,
        c = r.length > 4,
        d = c ? r.slice(0, 3) : r,
        u = c ? r.length - 4 + 1 : 0,
        _ = Math.min(c ? d.length + 1 : d.length, 4),
        m = (o?.percentX ?? 0) * 6,
        h = (o?.percentY ?? 0) * 6,
        p = 1 + ((o?.proximity ?? 0) / 2) * 0.08,
        [g, f] = (0, tx.z)(() => ({ x: 0, y: 0, scale: 1, config: tv }));
    return (
        l.useEffect(() => {
            f({ x: m, y: h, scale: p });
        }, [m, h, p, f]),
        (0, i.jsxs)(tg.animated.div, {
            ref: s,
            className: y()(tC.gg, t),
            "data-count": _,
            "aria-hidden": !0,
            style: {
                transform: (0, tg.to)([g.x, g.y, g.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                d.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: tC.my,
                            children: (0, i.jsx)(eh.m, {
                                text: td.Ay.getName(n, a, e),
                                children: (0, i.jsx)(tA.eu, {
                                    src: (function (e, t, n) {
                                        let i = eI.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, F.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === _
                                            ? tf._3.SIZE_80
                                            : 2 === _ && 0 === t
                                              ? tf._3.DEPRECATED_SIZE_60
                                              : 2 === _ && 1 === t
                                                ? tf._3.SIZE_40
                                                : _ > 2 && 0 === t
                                                  ? tf._3.DEPRECATED_SIZE_60
                                                  : _ > 2 && 1 === t
                                                    ? tf._3.SIZE_48
                                                    : _ > 2
                                                      ? tf._3.SIZE_40
                                                      : tf._3.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                c && (0, i.jsx)(tE, { guildId: n, channelId: a, members: r, count: u }, "overflow"),
            ],
        })
    );
}
function tE(e) {
    let { guildId: t, channelId: n, members: l, count: a } = e,
        { triggerRef: r, shouldShow: s, onPopoutHoverOrFocus: o } = tm();
    return (0, i.jsx)(th, {
        targetElementRef: r,
        guildId: t,
        channelId: n,
        users: l,
        shouldShow: s,
        onHoverOrFocus: o,
        children: (e) =>
            (0, i.jsx)("div", {
                className: y()(tC.my, tC.k2),
                ref: r,
                ...e,
                children: (0, i.jsx)(S.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: a > 99 ? ">99" : `+${a}`,
                }),
            }),
    });
}
function tb(e) {
    let {
            invite: t,
            currentUserId: n,
            message: s,
            guild: c,
            onTransitionToInviteChannel: d,
            onAcceptInstantInvite: u,
        } = e,
        h = eY("VoiceInviteEmbed"),
        g = l.useRef(null),
        A = c ?? null;
    null == A && null != t.guild && (A = v.DY(t.guild));
    let I = null != t.channel ? (0, p.OY)(t.channel) : null;
    j()(null != A, "Voice Invite Embed must be used in context of a guild."),
        j()(null != I, "Voice Invite Embed must be able to resolve an invite channel.");
    let E = (0, a.bG)([C.A, f.A], () => {
            let e = f.A.getChannel(I.id);
            return null == e || C.A.canBasicChannel(Y.hVb.VIEW_CHANNEL, e);
        }, [I.id]),
        b = (0, a.bG)([e3.Ay], () => (E ? e3.Ay.getVoiceStatesForChannelAlt(I.id, A.id) : []), [I.id, A.id, E]),
        { label: T, sublabel: k } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                a = i.length > 0,
                r = i.some((e) => e.user?.id === n.id),
                s = i.length - !!r;
            return a
                ? {
                      label: l
                          ? z.intl.format(z.t["2RWMFV"], { othersCount: s })
                          : z.intl.format(z.t.Da7tZx, { othersCount: s }),
                  }
                : {
                      label: l ? z.intl.string(z.t.DVDvCD) : z.intl.string(z.t.TY77rq),
                      sublabel: z.intl.string(z.t.wM2WTM),
                  };
        })({ currentUserId: n, author: s.author, voiceStates: b }),
        R = (0, a.bG)([x.A], () => null != x.A.getGuild(A.id), [A.id]),
        w = (0, a.bG)([eI.Ay], () => eA([eI.Ay], t), [t]),
        P = t.state === Y.elq.ACCEPTING,
        { analyticsLocations: D } = (0, o.Ay)(L.A.INVITE_EMBED),
        M = (0, _._U)(t.code, s.id),
        O = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: r } = e;
            return (0, a.bG)([eV.A, e2.A], () => {
                if ((0, m.G4)(t) && null != t.target_user) {
                    let e = eV.A.getStreamForUser(t.target_user.id, l);
                    if (null != e && e.channelId === r) return e;
                }
                let e = n.author.id;
                if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                    let t = eV.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === r) return t;
                }
                let a = i
                    .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                    .map((e) => e.voiceState.userId);
                if (0 === a.length) return null;
                for (let e of [...a].sort((e, t) => {
                    let n = e2.A.getUserAffinity(e)?.vcProbability ?? 0;
                    return (e2.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                })) {
                    let t = eV.A.getStreamForUser(e, l);
                    if (null != t && t.channelId === r) return t;
                }
                return null;
            }, [t, n, i, l, r]);
        })({ invite: t, message: s, voiceStates: b, guildId: A.id, channelId: I.id }),
        U = (0, e$.AO)(O),
        G = h.activityPreviewEnabled && null != O,
        B = l.useCallback(() => {
            let e = R ? "transition" : "accept";
            R ? d() : u(),
                (0, r.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: s.author.id,
                        invite_message_id: s.id,
                        invite_instance_id: M,
                        application_id: U?.id ?? void 0,
                        stream_key: null != O ? (0, eX._z)(O) : void 0,
                        number_of_users_in_channel: b.length,
                    },
                    D,
                );
        }, [t, s, D, M, R, U, O, b.length, d, u]),
        F = l.useCallback(() => {
            R ? (0, e1.iN)(I.id) : u({ autoJoin: !1 }),
                V.default.track(Y.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: A.id,
                    invite_channel_id: I.id,
                    invite_instance_id: M,
                    is_member: R,
                    application_id: U?.id ?? null,
                    stream_key: null != O ? (0, eX._z)(O) : null,
                    number_of_users_in_channel: b.length,
                    location_stack: D,
                });
        }, [I.id, A.id, t.code, M, R, U, O, b.length, D, u]);
    (0, ef.A)({
        name: eu.ImpressionNames.VOICE_INVITE_EMBED,
        type: eu.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: A.id,
            invite_channel_id: I.id,
            invite_instance_id: M,
            has_active_stream: G,
            location_stack: D,
        },
    });
    let H = l.useCallback(() => {
            null != O &&
                (R ? (eZ.default.selectVoiceChannel(O.channelId), (0, eJ.Nl)(O)) : u(),
                (0, r.he)(
                    {
                        invite: t,
                        action: R ? "transition" : "accept",
                        inviter_id: s.author.id,
                        invite_message_id: s.id,
                        invite_instance_id: M,
                        application_id: U?.id ?? void 0,
                        stream_key: (0, eX._z)(O),
                        number_of_users_in_channel: b.length,
                    },
                    [...D, L.A.VOICE_INVITE_STREAM_PREVIEW],
                ));
        }, [O, R, t, s, D, M, U, b.length, u]),
        W = (0, a.bG)([eT.A], () => eT.A.useReducedMotion),
        K = l.useRef(null),
        [q, Z] = l.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        J = (0, a.bG)([e2.A], () => {
            let e = b.map((e) => e.user),
                t = e.find((e) => e.id === s.author.id),
                n = e
                    .filter((e) => e.id !== s.author.id)
                    .sort((e, t) => {
                        let n = e2.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (e2.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...n] : n;
        }, [b, s.author.id]),
        Q = l.useMemo(() => eq().throttle(Z, 20), [Z]);
    l.useEffect(() => () => Q.cancel(), [Q]);
    let X = l.useCallback(
            (e) => {
                if (W) return;
                let t = K.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    l = 0,
                    a = g.current?.getBoundingClientRect();
                if (null != a) {
                    let n = a.left + a.width / 2,
                        i = a.top + a.height / 2,
                        r = e.clientX - n,
                        s = e.clientY - i;
                    l = 2 * Math.exp(-Math.sqrt(r * r + s * s) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                Q({ percentX: n, percentY: i, proximity: l });
            },
            [W, Q],
        ),
        $ = l.useCallback(() => {
            Q.cancel(), Z({ percentX: 0, percentY: 0, proximity: 0 });
        }, [Q]);
    return (0, i.jsxs)("div", {
        ref: K,
        className: y()(tl.kL, { [tl.VD]: G }),
        onMouseMove: X,
        onMouseLeave: $,
        children: [
            (0, i.jsx)("div", { className: tl.ys }),
            (0, i.jsx)("div", { className: tl.r$, style: { "--custom-number-of-dots": 24 } }),
            G ? (0, i.jsx)(tj, { className: tl.tB, stream: O }) : null,
            (0, i.jsxs)("div", {
                className: tl.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: tl.Qs,
                        children: [
                            (0, i.jsx)(e9, { channel: I, guild: A, onClick: F }),
                            (0, i.jsxs)("div", {
                                className: tl.WD,
                                children: [
                                    G ? (0, i.jsx)(ty, { guildId: A.id, channelId: I.id, members: J }) : null,
                                    (0, i.jsx)(S.E, {
                                        variant: "text-md/medium",
                                        children: (0, i.jsx)(N.A, { lineClamp: G ? 1 : 3, children: T }),
                                    }),
                                    null != k
                                        ? (0, i.jsx)(S.E, {
                                              variant: "text-sm/normal",
                                              className: tl.$B,
                                              children: (0, i.jsx)(N.A, { children: k }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    G
                        ? (0, i.jsx)(ta, { stream: O, currentUserId: n, onClick: H, className: tl.Rh })
                        : (0, i.jsx)("div", {
                              className: tl.RE,
                              children: (0, i.jsx)(tI, {
                                  ref: g,
                                  guildId: A.id,
                                  channelId: I.id,
                                  members: J,
                                  motion: q,
                              }),
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: tl.xk,
                children: (0, i.jsx)(en.$, {
                    onClick: B,
                    loading: P,
                    variant: "active",
                    fullWidth: !0,
                    disabled: !w,
                    text: z.intl.string(z.t.gpqgah),
                }),
            }),
        ],
    });
}
function ty(e) {
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
        { triggerRef: a, shouldShow: r, onPopoutHoverOrFocus: s } = tm();
    return (0, i.jsx)(th, {
        guildId: t,
        channelId: n,
        users: l,
        targetElementRef: a,
        shouldShow: r,
        onHoverOrFocus: s,
        children: (e) =>
            (0, i.jsx)("div", {
                className: tl.WM,
                ...e,
                children: (0, i.jsx)(e0.A, {
                    guildId: t,
                    partySize: { knownSize: l.length, unknownSize: 0, totalSize: l.length },
                    maxAvatarsShown: 3,
                    members: l,
                    overflowRef: a,
                }),
            }),
    });
}
function tj(e) {
    let { className: t, stream: n } = e,
        { previewUrl: l, isLoading: a } = (0, eQ.A)(n.guildId, n.channelId, n.ownerId),
        r = null != l && !a;
    return (0, i.jsx)("div", {
        className: y()(t, tl.rr, { [tl.pc]: !r }),
        style: { "--custom-bg-url": r ? `url(${l})` : "unset" },
        children: (0, i.jsx)("div", { className: tl.bW }),
    });
}
function tN(e) {
    return eY("VoiceInvite").enabled ? (0, i.jsx)(tb, { ...e }) : null;
}
var tS = n(459192),
    tk = n(983851),
    tL = n(661531),
    tR = n(52074),
    tw = n(725613),
    tP = n(85451),
    tD = n(145497),
    tM = n(481947),
    tO = n(198183);
function tU(e) {
    let { invite: t, message: n, channel: s, onTransitionToInviteChannel: c } = e,
        d = (0, U.Ay)(s),
        u = (0, a.bG)([x.A], () => x.A.getGuild(s.guild_id), [s.guild_id]),
        { voiceStates: m } = (0, a.cf)(
            [e3.Ay],
            () => ({ voiceStates: null != s.guild_id ? e3.Ay.getVoiceStatesForChannelAlt(s.id, s.guild_id) : [] }),
            [s],
        ),
        h = l.useMemo(
            () => [...m.filter((e) => e.voiceState.selfStream), ...m.filter((e) => !e.voiceState.selfStream)],
            [m],
        ),
        p = (0, a.bG)([tw.A], () => tw.A.getStartTime(s), [s]);
    l.useEffect(() => {
        null != p || null == s.guild_id || tw.A.hasRequestedStartTimes(s.guild_id) || (0, tR.U)(s.guild_id);
    }, [s, p]);
    let g = l.useRef(null),
        f = l.useRef(null),
        A = l.useCallback(() => {
            let e = g.current,
                t = f.current;
            if (null == t) return;
            let n = null != e && e.scrollHeight - e.scrollTop > e.clientHeight + 1;
            t.style.display = n ? "block" : "none";
        }, []);
    l.useLayoutEffect(() => {
        A();
    }, [h, A]);
    let C = l.useCallback(
            (e) => {
                null != g.current && g.current.removeEventListener("scroll", A),
                    (g.current = e),
                    null != e && e.addEventListener("scroll", A);
            },
            [A],
        ),
        { analyticsLocations: v } = (0, o.Ay)(L.A.INVITE_EMBED),
        I = (0, _._U)(t.code, n.id),
        E = m.some((e) => e.voiceState.selfStream);
    (0, ef.A)({
        name: eu.ImpressionNames.VOICE_INVITE_EMBED,
        type: eu.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: s.guild_id,
            invite_channel_id: s.id,
            invite_instance_id: I,
            has_active_stream: E,
            location_stack: v,
        },
    });
    let b = l.useCallback(() => {
            (0, e1.iN)(s.id);
        }, [s.id]),
        y = l.useCallback(() => {
            c(),
                (0, r.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: I,
                        number_of_users_in_channel: m.length,
                    },
                    v,
                );
        }, [t, n, v, I, m.length, c]);
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
                                color: m.length > 0 ? tL.A.colors.TEXT_FEEDBACK_POSITIVE : tL.A.colors.ICON_SUBTLE,
                                size: "custom",
                                width: 20,
                                height: 20,
                            }),
                            (0, i.jsx)(tS.u, {
                                title: `${u?.name} / ${d}`,
                                body: "",
                                assetSize: 24,
                                asset: null != u ? (0, i.jsx)(tD.Ay, { guild: u, iconSize: 24 }) : void 0,
                                position: "top",
                                children: (0, i.jsx)(e7.D, {
                                    className: tO.HA,
                                    onClick: b,
                                    children: (0, i.jsx)(S.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: d,
                                    }),
                                }),
                            }),
                        ],
                    }),
                    null != p ? (0, i.jsx)(tP.z, { entry: { start: p }, textColor: "text-feedback-positive" }) : null,
                ],
            }),
            h.length > 0
                ? (0, i.jsxs)("div", {
                      className: tO.Ao,
                      children: [
                          (0, i.jsx)(ts.Ip, {
                              ref: C,
                              className: tO.JD,
                              children: h.map((e) =>
                                  (0, i.jsx)(
                                      tM.Ay,
                                      {
                                          className: tO.Eq,
                                          user: e.user,
                                          guildId: s.guild_id ?? void 0,
                                          channelId: s.id,
                                          nick: e.nick,
                                          isStreaming: e.voiceState.selfStream,
                                      },
                                      e.user.id,
                                  ),
                              ),
                          }),
                          (0, i.jsx)("div", { ref: f, className: tO.wH, style: { display: "none" } }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: tO.p$,
                      children: (0, i.jsx)(S.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: z.intl.string(z.t.zSqdrS),
                      }),
                  }),
            (0, i.jsx)("div", {
                className: tO.TB,
                children: (0, i.jsx)(en.$, {
                    onClick: y,
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
    let { invite: t, message: n, onTransitionToInviteChannel: l, onAcceptInstantInvite: r } = e,
        s = t.channel?.id,
        o = (0, a.bG)([f.A, C.A], () => {
            let e = f.A.getChannel(s);
            return null != e && C.A.canBasicChannel(Y.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [s]),
        c = (0, a.bG)([x.A], () => null != x.A.getGuild(t.guild?.id), [t.guild]);
    return null == o
        ? (0, i.jsx)(eD, {
              invite: t,
              message: n,
              isMemberOfGuild: c,
              onTransitionToInviteChannel: l,
              onAcceptInstantInvite: r,
          })
        : (0, i.jsx)(tU, { invite: t, message: n, channel: o, onTransitionToInviteChannel: l });
}
function tB(e) {
    let { code: t, message: n, getAcceptInviteContext: I } = e,
        { invite: b, inviteError: y } = (0, a.cf)(
            [A.A],
            () => ({ invite: A.A.getInvite(t), inviteError: A.A.getInviteError(t) }),
            [t],
        ),
        T = null == b,
        j = (0, _._U)(t, n.id);
    l.useEffect(() => {
        T && r.Ay.resolveInvite(t, void 0, { inviteInstanceId: j });
    }, [t, T, j]);
    let N = b ?? { state: Y.elq.RESOLVING, code: "" },
        { analyticsLocations: S } = (0, o.Ay)(),
        k = (0, a.bG)([x.A], () => (b?.guild != null ? x.A.getGuild(b.guild.id) : null), [b]),
        L = (0, a.bG)([f.A, C.A], () => {
            let e = b?.channel?.id;
            if (null == e) return !1;
            let t = f.A.getChannel(e);
            return null != t && C.A.canBasicChannel(Y.hVb.VIEW_CHANNEL, t);
        }, [b]),
        R = (0, a.bG)([g.default], () => g.default.getId()),
        w = (0, a.bG)([d.Ay], () => d.Ay.getGuildScheduledEvent(N.guild_scheduled_event?.id), [N]),
        P = () => {
            null != N.channel && r.Ay.transitionToInviteSync(N);
        },
        D = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == k && b?.guild != null ? v.DY(b.guild) : k;
            (0, h.g)({ guild: n, isMember: null != k, analyticsLocations: S }) === h.W.PROCEED &&
                r.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: I("Invite Button Embed", t),
                    autoJoin: e,
                });
        },
        M = (0, i.jsx)(eE, {
            onTransitionToInviteChannel: P,
            onAcceptInstantInvite: D,
            currentUserId: R,
            guild: k,
            invite: N,
            message: n,
        });
    switch (N.state) {
        case Y.elq.RESOLVING:
            M = (0, i.jsx)(W, {});
            break;
        case Y.elq.EXPIRED:
        case Y.elq.BANNED:
            M = (0, i.jsx)(eB, { banned: N.state === Y.elq.BANNED, author: n.author, channelId: n.channel_id });
            break;
        case Y.elq.ERROR:
            M = (0, i.jsx)(et, { author: n.author, inviteError: y });
            break;
        default:
            switch ((0, m.On)(N)) {
                case m.Xd.GROUP_DM:
                    M = (0, i.jsx)(ed, {
                        onTransitionToInviteChannel: P,
                        onAcceptInstantInvite: D,
                        currentUserId: R,
                        invite: N,
                        message: n,
                    });
                    break;
                case m.Xd.FRIEND:
                    M = (0, i.jsx)(eo, { invite: N, message: n, getAcceptInviteContext: I });
                    break;
                default:
                    if ((0, m.G4)(N)) {
                        if (null != N.channel && (0, p.OY)(N.channel).isGuildVoice()) {
                            if (
                                null != N.guild &&
                                E({ location: "InviteEmbed.isStreamInvite", guildId: N.guild.id }).enabled &&
                                L
                            ) {
                                M = (0, i.jsx)(tG, {
                                    onTransitionToInviteChannel: P,
                                    onAcceptInstantInvite: D,
                                    invite: N,
                                    message: n,
                                });
                                break;
                            }
                            if (eW("InviteEmbed.isStreamInvite").enabled) {
                                M = (0, i.jsx)(tN, {
                                    onTransitionToInviteChannel: P,
                                    onAcceptInstantInvite: D,
                                    currentUserId: R,
                                    guild: k,
                                    invite: N,
                                    message: n,
                                });
                                break;
                            }
                        }
                        M = (0, i.jsx)(eH, {
                            onTransitionToInviteChannel: P,
                            onAcceptInstantInvite: D,
                            currentUserId: R,
                            message: n,
                            guild: k,
                            invite: N,
                        });
                        break;
                    }
                    if ((0, m.ly)(N)) {
                        M = (0, i.jsx)(u.Ay, {
                            guildScheduledEvent: w,
                            guild: N.guild,
                            channel: N.channel,
                            isMember: null != k,
                            onAcceptInstantInvite: D,
                            onTransitionToInviteChannel: P,
                        });
                        break;
                    }
                    if ((0, m.oK)(N)) {
                        M = (0, i.jsx)(X, { invite: N, getAcceptInviteContext: I, message: n });
                        break;
                    }
                    if (null != N.channel && (0, p.OY)(N.channel).isGuildVoice()) {
                        if (
                            null != N.guild &&
                            E({ location: "InviteEmbed.isGuildVoice", guildId: N.guild.id }).enabled &&
                            L
                        ) {
                            M = (0, i.jsx)(tG, {
                                onTransitionToInviteChannel: P,
                                onAcceptInstantInvite: D,
                                invite: N,
                                message: n,
                            });
                            break;
                        }
                        if (eW("InviteEmbed.isGuildVoice").enabled) {
                            M = (0, i.jsx)(tN, {
                                onTransitionToInviteChannel: P,
                                onAcceptInstantInvite: D,
                                currentUserId: R,
                                guild: k,
                                invite: N,
                                message: n,
                            });
                            break;
                        }
                    }
                    (0, c.v)(N) &&
                        (M = (0, i.jsx)(eD, {
                            onTransitionToInviteChannel: P,
                            onAcceptInstantInvite: D,
                            isMemberOfGuild: null != k,
                            invite: N,
                            message: n,
                        }));
            }
    }
    return (0, i.jsx)(s.A, { section: Y.JJy.INVITE_LINK, children: M });
}
