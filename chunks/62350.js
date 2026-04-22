n.d(t, { A: () => B }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(284009),
    o = n.n(r),
    d = n(311907),
    c = n(3026),
    u = n(834730),
    m = n(846293),
    _ = n(933958),
    h = n(793574),
    p = n(688810),
    g = n(572211),
    A = n(178910),
    f = n(354287),
    x = n(112150),
    C = n(574660),
    E = n(429913),
    I = n(47167),
    v = n(713654),
    b = n(21599),
    T = n(734057),
    S = n(71393),
    y = n(576705),
    N = n(287809),
    j = n(954571),
    L = n(486020),
    R = n(860689),
    P = n(168428),
    w = n(652215),
    D = n(768349),
    k = n(172799),
    O = n(985018),
    M = n(718223);
function U(e) {
    let { members: t, membersOnline: n, textColor: l } = e,
        a = [];
    return (
        null != n &&
            n > 0 &&
            a.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: M.MY,
                        children: [
                            (0, i.jsx)("i", { className: M.QD }),
                            (0, i.jsx)(u.E, {
                                variant: "text-xs/normal",
                                className: M.U9,
                                color: l,
                                children: O.intl.format(O.t["LC+S+m"], { membersOnline: n }),
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
                        className: M.MY,
                        children: [
                            (0, i.jsx)("i", { className: M.o6 }),
                            (0, i.jsx)(u.E, {
                                variant: "text-xs/normal",
                                className: M.U9,
                                color: l,
                                children: O.intl.format(O.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, i.jsx)("div", { className: M.rc, children: a })
    );
}
function G(e) {
    let { channel: t, guild: n, hasEnded: l, textColor: a } = e,
        r = (0, I.Ay)(t);
    if (null != t && null != n) {
        let e = (0, v.gU)(t, n);
        return (0, i.jsxs)("div", {
            className: s()(M.Ix, { [M.v6]: l }),
            children: [
                null != e ? (0, i.jsx)(e, { className: M.p, size: "xs", color: "currentColor" }) : null,
                (0, i.jsx)(c.A, {
                    children: (0, i.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: a,
                        children: O.intl.format(O.t["dc+LW4"], { channelName: r ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, i.jsx)("div", {
              className: s()(M.Ix, { [M.v6]: l }),
              children: (0, i.jsx)(c.A, {
                  children: (0, i.jsx)(u.E, {
                      variant: "text-xs/normal",
                      color: a,
                      children: O.intl.format(O.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function B(e) {
    let t,
        n,
        { invite: a, message: s, getAcceptInviteContext: r } = e,
        { approximate_member_count: c, approximate_presence_count: u, target_type: g, target_application: A } = a;
    o()(g === k.yV.EMBEDDED_APPLICATION && null != A, "invalid application invite");
    let f = l.useCallback(() => {
            j.default.track(w.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: A.id,
                invite_inviter_id: a.inviter?.id,
            });
        }, [a.inviter?.id, A.id]),
        x = (0, d.bG)([S.A], () => (null != a.guild ? S.A.getGuild(a.guild.id) : null), [a]),
        C = (0, E.A)([A.id])[0],
        I = (0, d.bG)(
            [_.Ay],
            () => a?.channel != null && _.Ay.getSelfEmbeddedActivityForChannel(a.channel.id)?.applicationId === A.id,
        ),
        v = (0, d.bG)([_.Ay], () =>
            (a.channel?.id != null ? _.Ay.getEmbeddedActivitiesForChannel(a.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return A.id === t;
            }),
        ),
        L = T.A.getChannel(a.channel?.id),
        D = (0, d.bG)([y.A], () => null != L && y.A.can(w.xBc.USE_EMBEDDED_ACTIVITIES, L), [L]),
        { analyticsLocations: M } = (0, p.Ay)(h.A.INVITE_EMBED),
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
        G = (0, d.yK)([N.default], () => U.map((e) => N.default.getUser(e)).filter((e) => null != e), [U]),
        B = l.useCallback(() => {
            (0, m.he)(
                {
                    invite: a,
                    action: "accept",
                    inviter_id: s.author.id,
                    invite_message_id: s.id,
                    invite_instance_id: (0, b._U)(a.code, s.id),
                },
                M,
            ),
                m.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: a.code,
                    context: r("Invite Button Embed", a.code),
                    analyticsLocations: M,
                });
        }, [a, s, M, r]),
        H = a.state === w.elq.ACCEPTING,
        V = null != x;
    if (null == x) {
        if (null == a.guild) return (0, i.jsx)(P.A, {});
        x = (0, R.DY)(a.guild);
    }
    t = V
        ? I
            ? O.intl.string(O.t.DPfdsq)
            : v
              ? O.intl.string(O.t.sqe0hj)
              : O.intl.string(O.t.RscU7I)
        : O.intl.string(O.t["2BP08E"]);
    let q = (V && !D) || (V && I);
    return (D || (n = O.intl.string(O.t.hHGrWz)), null == a.code || "" === a.code || null == C)
        ? null
        : (0, i.jsx)(p.f5, {
              value: M,
              children: (0, i.jsx)(F, {
                  app: C,
                  activityUsers: G,
                  isMember: V,
                  channel: L,
                  guild: x,
                  message: s,
                  members: c,
                  membersOnline: u,
                  isActivityActive: v,
                  submitting: H,
                  buttonLabel: t,
                  disabled: q,
                  disabledReason: n,
                  handleAcceptInvite: B,
                  onView: f,
              }),
          });
}
function F(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: a,
            channel: s,
            guild: r,
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
        S = (0, C.F)(t),
        y = (0, x.f)(t),
        N = n.length,
        j = l.useMemo(
            () => [
                {
                    label: _,
                    trackingArea: a ? f.kY.PLAY : f.kY.JOIN_SERVER,
                    submitting: m,
                    disabled: h,
                    disabledReason: h && null != p ? p : void 0,
                    onClick: E,
                },
            ],
            [_, a, m, h, p, E],
        );
    return (0, i.jsx)(g.h, {
        header: t.name,
        title: O.intl.string(O.t["7vb6nw"]),
        iconSrc: T,
        ...y,
        onClickBanner: S,
        info: (0, i.jsxs)("div", {
            className: M.QR,
            children: [
                (0, i.jsx)(G, { channel: s, guild: r, hasEnded: !u, textColor: "none" }),
                a
                    ? N > 0 &&
                      (0, i.jsx)(A.$, {
                          activityUsers: n,
                          guildId: r.id,
                          activityText: O.intl.formatToPlainString(O.t.yJj035, { count: N }),
                      })
                    : (0, i.jsx)(U, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: S,
        trackingConfig: {
            id: t.id,
            linkType: D.J.ACTIVITY_INVITE,
            onView: I,
            guildId: r.id,
            channelId: s?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
