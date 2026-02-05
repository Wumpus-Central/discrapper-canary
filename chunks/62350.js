n.d(t, { A: () => w }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(284009),
    o = n.n(s),
    d = n(311907),
    c = n(3026),
    u = n(397927),
    m = n(846293),
    _ = n(933958),
    h = n(793574),
    p = n(688810),
    g = n(572211),
    A = n(178910),
    f = n(354287),
    x = n(112150),
    E = n(574660),
    C = n(429913),
    I = n(713654),
    T = n(734057),
    v = n(71393),
    N = n(576705),
    S = n(287809),
    b = n(954571),
    y = n(486020),
    j = n(860689),
    R = n(168428),
    L = n(652215),
    M = n(768349),
    O = n(172799),
    P = n(985018),
    D = n(320160);
function k(e) {
    let { members: t, membersOnline: n, textColor: l } = e,
        a = [];
    return (
        null != n &&
            n > 0 &&
            a.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: D.MY,
                        children: [
                            (0, i.jsx)("i", { className: D.QD }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: D.U9,
                                color: l,
                                children: P.intl.format(P.t["LC+S+m"], { membersOnline: n }),
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
                        className: D.MY,
                        children: [
                            (0, i.jsx)("i", { className: D.o6 }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: D.U9,
                                color: l,
                                children: P.intl.format(P.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, i.jsx)("div", { className: D.rc, children: a })
    );
}
function U(e) {
    let { channel: t, guild: n, hasEnded: l, textColor: a } = e;
    if (null != t && null != n) {
        let e = (0, I.gU)(t, n);
        return (0, i.jsxs)("div", {
            className: r()(D.Ix, { [D.v6]: l }),
            children: [
                null != e ? (0, i.jsx)(e, { className: D.p, size: "xs", color: "currentColor" }) : null,
                (0, i.jsx)(c.A, {
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: a,
                        children: P.intl.format(P.t["dc+LW4"], { channelName: t.name, serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, i.jsx)("div", {
              className: r()(D.Ix, { [D.v6]: l }),
              children: (0, i.jsx)(c.A, {
                  children: (0, i.jsx)(u.Text, {
                      variant: "text-xs/normal",
                      color: a,
                      children: P.intl.format(P.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function w(e) {
    let t,
        n,
        { invite: a, message: r, getAcceptInviteContext: s } = e,
        { approximate_member_count: c, approximate_presence_count: u, target_type: g, target_application: A } = a;
    o()(g === O.yV.EMBEDDED_APPLICATION && null != A, "invalid application invite");
    let f = l.useCallback(() => {
            b.default.track(L.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: A.id,
                invite_inviter_id: a.inviter?.id,
            });
        }, [a.inviter?.id, A.id]),
        x = (0, d.bG)([v.A], () => (null != a.guild ? v.A.getGuild(a.guild.id) : null), [a]),
        E = (0, C.A)([A.id])[0],
        I = (0, d.bG)(
            [_.Ay],
            () => a?.channel != null && _.Ay.getSelfEmbeddedActivityForChannel(a.channel.id)?.applicationId === A.id,
        ),
        y = (0, d.bG)([_.Ay], () =>
            (a.channel?.id != null ? _.Ay.getEmbeddedActivitiesForChannel(a.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return A.id === t;
            }),
        ),
        M = T.A.getChannel(a.channel?.id),
        D = (0, d.bG)([N.A], () => null != M && N.A.can(L.xBc.USE_EMBEDDED_ACTIVITIES, M), [M]),
        { analyticsLocations: k } = (0, p.Ay)(h.A.INVITE_EMBED),
        U = (0, d.yK)(
            [_.Ay],
            () =>
                null != M
                    ? _.Ay.getEmbeddedActivitiesForChannel(M.id)
                          .filter((e) => e.applicationId === A.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [M, A.id],
        ),
        w = (0, d.yK)([S.default], () => U.map((e) => S.default.getUser(e)).filter((e) => null != e), [U]),
        B = l.useCallback(() => {
            (0, m.he)({ invite: a, action: "accept", inviter_id: r.author.id, invite_message_id: r.id }, k),
                m.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: a.code,
                    context: s("Invite Button Embed"),
                    analyticsLocations: k,
                });
        }, [a, r, k, s]),
        F = a.state === L.elq.ACCEPTING,
        H = null != x;
    if (null == x) {
        if (null == a.guild) return (0, i.jsx)(R.A, {});
        x = (0, j.DY)(a.guild);
    }
    t = H
        ? I
            ? P.intl.string(P.t.DPfdsq)
            : y
              ? P.intl.string(P.t.sqe0hj)
              : P.intl.string(P.t.RscU7I)
        : P.intl.string(P.t["2BP08E"]);
    let V = (H && !D) || (H && I);
    return (D || (n = P.intl.string(P.t.hHGrWz)), null == a.code || "" === a.code || null == E)
        ? null
        : (0, i.jsx)(p.f5, {
              value: k,
              children: (0, i.jsx)(G, {
                  app: E,
                  activityUsers: w,
                  isMember: H,
                  channel: M,
                  guild: x,
                  message: r,
                  members: c,
                  membersOnline: u,
                  isActivityActive: y,
                  submitting: F,
                  buttonLabel: t,
                  disabled: V,
                  disabledReason: n,
                  handleAcceptInvite: B,
                  onView: f,
              }),
          });
}
function G(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: a,
            channel: r,
            guild: s,
            message: o,
            members: d,
            membersOnline: c,
            isActivityActive: u,
            submitting: m,
            buttonLabel: _,
            disabled: h,
            disabledReason: p,
            handleAcceptInvite: C,
            onView: I,
        } = e,
        { bot: T, icon: v } = t,
        N = y.Ay.getApplicationIconURL({ id: t.id, icon: v, bot: T }),
        S = (0, E.F)(t),
        b = (0, x.f)(t),
        j = n.length,
        R = l.useMemo(
            () => [
                {
                    label: _,
                    trackingArea: a ? f.kY.PLAY : f.kY.JOIN_SERVER,
                    submitting: m,
                    disabled: h,
                    disabledReason: h && null != p ? p : void 0,
                    onClick: C,
                },
            ],
            [_, a, m, h, p, C],
        );
    return (0, i.jsx)(g.h, {
        header: t.name,
        title: P.intl.string(P.t["7vb6nw"]),
        iconSrc: N,
        ...b,
        onClickBanner: S,
        info: (0, i.jsxs)("div", {
            className: D.QR,
            children: [
                (0, i.jsx)(U, { channel: r, guild: s, hasEnded: !u, textColor: "none" }),
                a
                    ? j > 0 &&
                      (0, i.jsx)(A.$, {
                          activityUsers: n,
                          guildId: s.id,
                          activityText: P.intl.formatToPlainString(P.t.yJj035, { count: j }),
                      })
                    : (0, i.jsx)(k, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: R,
        onClickContent: S,
        trackingConfig: {
            id: t.id,
            linkType: M.J.ACTIVITY_INVITE,
            onView: I,
            guildId: s.id,
            channelId: r?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
