"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(80682),
    d = n(845056),
    u = n(685399),
    h = n(323073),
    A = n(643501),
    m = n(279250),
    _ = n(834757),
    p = n(727353),
    g = n(140547),
    f = n(636920),
    x = n(958140),
    E = n(832163),
    C = n(565688),
    I = n(533562),
    N = n(760716),
    b = n(93879),
    S = n(616356),
    T = n(961350),
    v = n(71393),
    y = n(576705),
    j = n(290863),
    R = n(977997),
    O = n(607567),
    L = n(954571),
    M = n(667936),
    D = n(652215),
    G = n(699976),
    U = n(985018),
    P = n(510495),
    w = n(442078);
function k(e) {
    let {
            channel: t,
            user: n,
            onAction: l,
            excludeActivity: k,
            onWatchStream: V,
            hangStatusActivity: B,
            setIsHangStatusInputFocused: H,
            setIsHangStatusEmojiPickerOpen: F,
        } = e,
        K = s.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, c.Eq)(K, "VoiceUserActivities");
    let W = (0, u.Ay)(t),
        Y = s.useMemo(() => W.filter((e) => e.embeddedActivity.userIds.has(n.id)), [W, n.id]),
        z = Array.from((0, u.Rz)(Y).values()),
        q = (0, I.W)(),
        X = (0, N.i)((e) => e.showSelfActivity),
        [Q, J] = (0, r.yK)(
            [S.A],
            () => [S.A.getStreamForUser(n.id, t.getGuildId()), S.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [$, Z] = (0, r.yK)([R.A, v.A, y.A, A.default], () => (0, m.eo)(t, R.A, v.A, y.A, A.default)),
        ee = (0, r.bG)([T.default], () => T.default.getId()),
        et = (0, r.bG)([j.A], () => (0, _.nr)(Q, j.A), [Q]),
        en = (0, d.m)(n, k ?? et),
        ei = (0, r.bG)([O.Ay], () => O.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        es = s.useMemo(() => (null != ei ? [ei] : []), [ei]),
        { enableHangStatus: el } = (0, g.$j)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        ea = (0, C.m)({ location: "voice_channel_activities" }),
        er = (0, r.bG)([E.A], () => E.A.getDetectableIdsToApplicationIds()),
        eo = (0, r.bG)([T.default], () => T.default.getId() === n.id && !X),
        ec = (0, h.r9)() && (0, h.UK)(t.id),
        ed = null != Q && !ec,
        eu = en.length + z.length > 0,
        eh = null != B,
        eA = ed || eu || (eh && el);
    return (s.useEffect(() => {
        (eo && el) ||
            (eA &&
                L.default.track(D.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: t.id,
                    other_user_id: n.id,
                }));
    }, [eo, el, eA, t.id, n.id]),
    eo && el)
        ? (0, i.jsx)(x.h, { channel: t, setIsHangStatusInputFocused: H, setIsEmojiPickerOpen: F })
        : eA
          ? (0, i.jsxs)(o.HOs, {
                className: a()(w.popover, P.kL),
                children: [
                    eh && el && null != B
                        ? (0, i.jsxs)("div", {
                              className: P.Sz,
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      children: U.intl.string(U.t.Fq5lwN),
                                  }),
                                  (0, i.jsx)(f.Z, {
                                      hangStatusActivity: B,
                                      channel: t,
                                      userId: n.id,
                                      isSelf: eo,
                                      analyticsSource: "VoiceUserActivities",
                                      onAction: l,
                                  }),
                              ],
                          })
                        : null,
                    null == Q || null == V || ec
                        ? null
                        : (0, i.jsx)(p.P, {
                              stream: Q,
                              activeStream: J,
                              streamActivity: et,
                              user: n,
                              currentUserId: ee,
                              canWatch: $,
                              unavailableReason: Z,
                              onWatchStream: V,
                              onAction: l,
                              showHeader: !0,
                          }),
                    z.map((e) =>
                        (0, i.jsx)(
                            M.A,
                            {
                                embeddedApp: e,
                                presenceActivity: e.presenceActivity ?? void 0,
                                channel: t,
                                onAction: l,
                                enableUserHoverActivities: !0,
                            },
                            e.application.id,
                        ),
                    ),
                    en.map((e) => {
                        let a = e.application_id;
                        return (null != q && (a = q), ea && null != a && null != er[a])
                            ? (0, i.jsxs)(
                                  s.Fragment,
                                  {
                                      children: [
                                          (0, i.jsx)(M.A, {
                                              presenceActivity: e,
                                              channel: t,
                                              members: es,
                                              onAction: l,
                                              enableUserHoverActivities: !0,
                                          }),
                                          (0, i.jsx)(b.A, {
                                              className: P.L,
                                              applicationId: a,
                                              rewardOfferNoticeClassName: P.Nh,
                                              userIds: [n.id],
                                              location: "voice_channel",
                                              guildId: t.guild_id,
                                              channelId: t.id,
                                              numWishlistItems: 2,
                                              cardSpec: G.Z.SIZE_110,
                                          }),
                                      ],
                                  },
                                  `${e.application_id}-with-gifting-breadcrumb`,
                              )
                            : (0, i.jsx)(
                                  M.A,
                                  {
                                      presenceActivity: e,
                                      channel: t,
                                      members: es,
                                      onAction: l,
                                      enableUserHoverActivities: !0,
                                  },
                                  `${e.application_id}`,
                              );
                    }),
                ],
            })
          : null;
}
