n.d(t, { A: () => G }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    d = n(311907),
    c = n(3026),
    u = n(397927),
    m = n(846293),
    _ = n(933958),
    h = n(793574),
    p = n(688810),
    g = n(572211),
    A = n(178910),
    x = n(354287),
    f = n(112150),
    C = n(574660),
    E = n(429913),
    I = n(47167),
    v = n(713654),
    b = n(21599),
    T = n(734057),
    y = n(71393),
    N = n(576705),
    S = n(287809),
    j = n(954571),
    L = n(486020),
    R = n(860689),
    P = n(168428),
    D = n(652215),
    M = n(768349),
    w = n(172799),
    O = n(985018),
    k = n(228622);
function U(e) {
    let { members: t, membersOnline: n, textColor: l } = e,
        s = [];
    return (
        null != n &&
            n > 0 &&
            s.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: k.MY,
                        children: [
                            (0, i.jsx)("i", { className: k.QD }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: k.U9,
                                color: l,
                                children: O.intl.format(O.t["LC+S+m"], { membersOnline: n }),
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
                        className: k.MY,
                        children: [
                            (0, i.jsx)("i", { className: k.o6 }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: k.U9,
                                color: l,
                                children: O.intl.format(O.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, i.jsx)("div", { className: k.rc, children: s })
    );
}
function B(e) {
    let { channel: t, guild: n, hasEnded: l, textColor: s } = e,
        a = (0, I.Ay)(t);
    if (null != t && null != n) {
        let e = (0, v.gU)(t, n);
        return (0, i.jsxs)("div", {
            className: r()(k.Ix, { [k.v6]: l }),
            children: [
                null != e ? (0, i.jsx)(e, { className: k.p, size: "xs", color: "currentColor" }) : null,
                (0, i.jsx)(c.A, {
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: s,
                        children: O.intl.format(O.t["dc+LW4"], { channelName: a ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, i.jsx)("div", {
              className: r()(k.Ix, { [k.v6]: l }),
              children: (0, i.jsx)(c.A, {
                  children: (0, i.jsx)(u.Text, {
                      variant: "text-xs/normal",
                      color: s,
                      children: O.intl.format(O.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function G(e) {
    let t,
        n,
        { invite: s, message: r, getAcceptInviteContext: a } = e,
        { approximate_member_count: c, approximate_presence_count: u, target_type: g, target_application: A } = s;
    o()(g === w.yV.EMBEDDED_APPLICATION && null != A, "invalid application invite");
    let x = l.useCallback(() => {
            j.default.track(D.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: A.id,
                invite_inviter_id: s.inviter?.id,
            });
        }, [s.inviter?.id, A.id]),
        f = (0, d.bG)([y.A], () => (null != s.guild ? y.A.getGuild(s.guild.id) : null), [s]),
        C = (0, E.A)([A.id])[0],
        I = (0, d.bG)(
            [_.Ay],
            () => s?.channel != null && _.Ay.getSelfEmbeddedActivityForChannel(s.channel.id)?.applicationId === A.id,
        ),
        v = (0, d.bG)([_.Ay], () =>
            (s.channel?.id != null ? _.Ay.getEmbeddedActivitiesForChannel(s.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return A.id === t;
            }),
        ),
        L = T.A.getChannel(s.channel?.id),
        M = (0, d.bG)([N.A], () => null != L && N.A.can(D.xBc.USE_EMBEDDED_ACTIVITIES, L), [L]),
        { analyticsLocations: k } = (0, p.Ay)(h.A.INVITE_EMBED),
        U = (0, d.yK)(
            [_.Ay],
            () =>
                null != L
                    ? _.Ay.getEmbeddedActivitiesForChannel(L.id)
                          .filter((e) => e.applicationId === A.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [L, A.id],
        ),
        B = (0, d.yK)([S.default], () => U.map((e) => S.default.getUser(e)).filter((e) => null != e), [U]),
        G = l.useCallback(() => {
            (0, m.he)(
                {
                    invite: s,
                    action: "accept",
                    inviter_id: r.author.id,
                    invite_message_id: r.id,
                    invite_instance_id: (0, b._U)(s.code, r.id),
                },
                k,
            ),
                m.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: s.code,
                    context: a("Invite Button Embed", s.code),
                    analyticsLocations: k,
                });
        }, [s, r, k, a]),
        H = s.state === D.elq.ACCEPTING,
        V = null != f;
    if (null == f) {
        if (null == s.guild) return (0, i.jsx)(P.A, {});
        f = (0, R.DY)(s.guild);
    }
    t = V
        ? I
            ? O.intl.string(O.t.DPfdsq)
            : v
              ? O.intl.string(O.t.sqe0hj)
              : O.intl.string(O.t.RscU7I)
        : O.intl.string(O.t["2BP08E"]);
    let q = (V && !M) || (V && I);
    return (M || (n = O.intl.string(O.t.hHGrWz)), null == s.code || "" === s.code || null == C)
        ? null
        : (0, i.jsx)(p.f5, {
              value: k,
              children: (0, i.jsx)(F, {
                  app: C,
                  activityUsers: B,
                  isMember: V,
                  channel: L,
                  guild: f,
                  message: r,
                  members: c,
                  membersOnline: u,
                  isActivityActive: v,
                  submitting: H,
                  buttonLabel: t,
                  disabled: q,
                  disabledReason: n,
                  handleAcceptInvite: G,
                  onView: x,
              }),
          });
}
function F(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: s,
            channel: r,
            guild: a,
            message: o,
            members: d,
            membersOnline: c,
            isActivityActive: u,
            submitting: m,
            buttonLabel: _,
            disabled: h,
            disabledReason: p,
            handleAcceptInvite: E,
            onView: I,
        } = e,
        { bot: v, icon: b } = t,
        T = L.Ay.getApplicationIconURL({ id: t.id, icon: b, bot: v }),
        y = (0, C.F)(t),
        N = (0, f.f)(t),
        S = n.length,
        j = l.useMemo(
            () => [
                {
                    label: _,
                    trackingArea: s ? x.kY.PLAY : x.kY.JOIN_SERVER,
                    submitting: m,
                    disabled: h,
                    disabledReason: h && null != p ? p : void 0,
                    onClick: E,
                },
            ],
            [_, s, m, h, p, E],
        );
    return (0, i.jsx)(g.h, {
        header: t.name,
        title: O.intl.string(O.t["7vb6nw"]),
        iconSrc: T,
        ...N,
        onClickBanner: y,
        info: (0, i.jsxs)("div", {
            className: k.QR,
            children: [
                (0, i.jsx)(B, { channel: r, guild: a, hasEnded: !u, textColor: "none" }),
                s
                    ? S > 0 &&
                      (0, i.jsx)(A.$, {
                          activityUsers: n,
                          guildId: a.id,
                          activityText: O.intl.formatToPlainString(O.t.yJj035, { count: S }),
                      })
                    : (0, i.jsx)(U, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: y,
        trackingConfig: {
            id: t.id,
            linkType: M.J.ACTIVITY_INVITE,
            onView: I,
            guildId: a.id,
            channelId: r?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
