n.d(t, { A: () => B }), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(284009),
    o = n.n(s),
    d = n(311907),
    c = n(3026),
    u = n(397927),
    _ = n(846293),
    m = n(933958),
    h = n(793574),
    p = n(688810),
    g = n(572211),
    A = n(178910),
    x = n(354287),
    f = n(112150),
    C = n(574660),
    I = n(429913),
    E = n(713654),
    b = n(21599),
    v = n(734057),
    T = n(71393),
    y = n(576705),
    S = n(287809),
    N = n(954571),
    j = n(486020),
    L = n(860689),
    R = n(168428),
    P = n(652215),
    w = n(768349),
    M = n(172799),
    D = n(985018),
    k = n(478879);
function O(e) {
    let { members: t, membersOnline: n, textColor: a } = e,
        r = [];
    return (
        null != n &&
            n > 0 &&
            r.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: k.MY,
                        children: [
                            (0, i.jsx)("i", { className: k.QD }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: k.U9,
                                color: a,
                                children: D.intl.format(D.t["LC+S+m"], { membersOnline: n }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != t &&
            r.push(
                (0, i.jsxs)(
                    "div",
                    {
                        className: k.MY,
                        children: [
                            (0, i.jsx)("i", { className: k.o6 }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: k.U9,
                                color: a,
                                children: D.intl.format(D.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, i.jsx)("div", { className: k.rc, children: r })
    );
}
function U(e) {
    let { channel: t, guild: n, hasEnded: a, textColor: r } = e;
    if (null != t && null != n) {
        let e = (0, E.gU)(t, n);
        return (0, i.jsxs)("div", {
            className: l()(k.Ix, { [k.v6]: a }),
            children: [
                null != e ? (0, i.jsx)(e, { className: k.p, size: "xs", color: "currentColor" }) : null,
                (0, i.jsx)(c.A, {
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: r,
                        children: D.intl.format(D.t["dc+LW4"], { channelName: t.name, serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, i.jsx)("div", {
              className: l()(k.Ix, { [k.v6]: a }),
              children: (0, i.jsx)(c.A, {
                  children: (0, i.jsx)(u.Text, {
                      variant: "text-xs/normal",
                      color: r,
                      children: D.intl.format(D.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function B(e) {
    let t,
        n,
        { invite: r, message: l, getAcceptInviteContext: s } = e,
        { approximate_member_count: c, approximate_presence_count: u, target_type: g, target_application: A } = r;
    o()(g === M.yV.EMBEDDED_APPLICATION && null != A, "invalid application invite");
    let x = a.useCallback(() => {
            N.default.track(P.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: A.id,
                invite_inviter_id: r.inviter?.id,
            });
        }, [r.inviter?.id, A.id]),
        f = (0, d.bG)([T.A], () => (null != r.guild ? T.A.getGuild(r.guild.id) : null), [r]),
        C = (0, I.A)([A.id])[0],
        E = (0, d.bG)(
            [m.Ay],
            () => r?.channel != null && m.Ay.getSelfEmbeddedActivityForChannel(r.channel.id)?.applicationId === A.id,
        ),
        j = (0, d.bG)([m.Ay], () =>
            (r.channel?.id != null ? m.Ay.getEmbeddedActivitiesForChannel(r.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return A.id === t;
            }),
        ),
        w = v.A.getChannel(r.channel?.id),
        k = (0, d.bG)([y.A], () => null != w && y.A.can(P.xBc.USE_EMBEDDED_ACTIVITIES, w), [w]),
        { analyticsLocations: O } = (0, p.Ay)(h.A.INVITE_EMBED),
        U = (0, d.yK)(
            [m.Ay],
            () =>
                null != w
                    ? m.Ay.getEmbeddedActivitiesForChannel(w.id)
                          .filter((e) => e.applicationId === A.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [w, A.id],
        ),
        B = (0, d.yK)([S.default], () => U.map((e) => S.default.getUser(e)).filter((e) => null != e), [U]),
        F = a.useCallback(() => {
            (0, _.he)(
                {
                    invite: r,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, b._U)(r.code, l.id),
                },
                O,
            ),
                _.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: r.code,
                    context: s("Invite Button Embed", r.code),
                    analyticsLocations: O,
                });
        }, [r, l, O, s]),
        H = r.state === P.elq.ACCEPTING,
        V = null != f;
    if (null == f) {
        if (null == r.guild) return (0, i.jsx)(R.A, {});
        f = (0, L.DY)(r.guild);
    }
    t = V
        ? E
            ? D.intl.string(D.t.DPfdsq)
            : j
              ? D.intl.string(D.t.sqe0hj)
              : D.intl.string(D.t.RscU7I)
        : D.intl.string(D.t["2BP08E"]);
    let q = (V && !k) || (V && E);
    return (k || (n = D.intl.string(D.t.hHGrWz)), null == r.code || "" === r.code || null == C)
        ? null
        : (0, i.jsx)(p.f5, {
              value: O,
              children: (0, i.jsx)(G, {
                  app: C,
                  activityUsers: B,
                  isMember: V,
                  channel: w,
                  guild: f,
                  message: l,
                  members: c,
                  membersOnline: u,
                  isActivityActive: j,
                  submitting: H,
                  buttonLabel: t,
                  disabled: q,
                  disabledReason: n,
                  handleAcceptInvite: F,
                  onView: x,
              }),
          });
}
function G(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: r,
            channel: l,
            guild: s,
            message: o,
            members: d,
            membersOnline: c,
            isActivityActive: u,
            submitting: _,
            buttonLabel: m,
            disabled: h,
            disabledReason: p,
            handleAcceptInvite: I,
            onView: E,
        } = e,
        { bot: b, icon: v } = t,
        T = j.Ay.getApplicationIconURL({ id: t.id, icon: v, bot: b }),
        y = (0, C.F)(t),
        S = (0, f.f)(t),
        N = n.length,
        L = a.useMemo(
            () => [
                {
                    label: m,
                    trackingArea: r ? x.kY.PLAY : x.kY.JOIN_SERVER,
                    submitting: _,
                    disabled: h,
                    disabledReason: h && null != p ? p : void 0,
                    onClick: I,
                },
            ],
            [m, r, _, h, p, I],
        );
    return (0, i.jsx)(g.h, {
        header: t.name,
        title: D.intl.string(D.t["7vb6nw"]),
        iconSrc: T,
        ...S,
        onClickBanner: y,
        info: (0, i.jsxs)("div", {
            className: k.QR,
            children: [
                (0, i.jsx)(U, { channel: l, guild: s, hasEnded: !u, textColor: "none" }),
                r
                    ? N > 0 &&
                      (0, i.jsx)(A.$, {
                          activityUsers: n,
                          guildId: s.id,
                          activityText: D.intl.formatToPlainString(D.t.yJj035, { count: N }),
                      })
                    : (0, i.jsx)(O, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: L,
        onClickContent: y,
        trackingConfig: {
            id: t.id,
            linkType: w.J.ACTIVITY_INVITE,
            onView: E,
            guildId: s.id,
            channelId: l?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
