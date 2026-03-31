n.d(t, { A: () => w });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(80682),
    d = n(845056),
    u = n(685399),
    h = n(323073),
    A = n(643501),
    _ = n(279250),
    m = n(834757),
    g = n(727353),
    p = n(140547),
    f = n(636920),
    x = n(958140),
    E = n(832163),
    I = n(565688),
    C = n(533562),
    N = n(760716),
    T = n(93879),
    S = n(616356),
    b = n(961350),
    y = n(71393),
    v = n(576705),
    j = n(290863),
    R = n(977997),
    O = n(607567),
    L = n(954571),
    M = n(667936),
    D = n(652215),
    U = n(699976),
    G = n(985018),
    P = n(510495),
    k = n(442078);
function w(e) {
    let {
            channel: t,
            user: n,
            onAction: s,
            excludeActivity: w,
            onWatchStream: B,
            hangStatusActivity: V,
            setIsHangStatusInputFocused: H,
            setIsHangStatusEmojiPickerOpen: F,
        } = e,
        K = l.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, c.Eq)(K, "VoiceUserActivities");
    let W = (0, u.Ay)(t),
        Y = l.useMemo(() => W.filter((e) => e.embeddedActivity.userIds.has(n.id)), [W, n.id]),
        z = Array.from((0, u.Rz)(Y).values()),
        q = (0, C.W)(),
        X = (0, N.i)((e) => e.showSelfActivity),
        [J, Q] = (0, r.yK)(
            [S.A],
            () => [S.A.getStreamForUser(n.id, t.getGuildId()), S.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [$, Z] = (0, r.yK)([R.A, y.A, v.A, A.default], () => (0, _.eo)(t, R.A, y.A, v.A, A.default)),
        ee = (0, r.bG)([b.default], () => b.default.getId()),
        et = (0, r.bG)([j.A], () => (0, m.nr)(J, j.A), [J]),
        en = (0, d.m)(n, w ?? et),
        ei = (0, r.bG)([O.Ay], () => O.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        el = l.useMemo(() => (null != ei ? [ei] : []), [ei]),
        { enableHangStatus: es } = (0, p.$j)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        ea = (0, I.m)({ location: "voice_channel_activities" }),
        er = (0, r.bG)([E.A], () => E.A.getDetectableIdsToApplicationIds()),
        eo = (0, r.bG)([b.default], () => b.default.getId() === n.id && !X),
        ec = (0, h.r9)() && (0, h.UK)(t.id),
        ed = null != J && !ec,
        eu = en.length + z.length > 0,
        eh = null != V,
        eA = ed || eu || (eh && es);
    return (l.useEffect(() => {
        (eo && es) ||
            (eA &&
                L.default.track(D.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: t.id,
                    other_user_id: n.id,
                }));
    }, [eo, es, eA, t.id, n.id]),
    eo && es)
        ? (0, i.jsx)(x.h, { channel: t, setIsHangStatusInputFocused: H, setIsEmojiPickerOpen: F })
        : eA
          ? (0, i.jsxs)(o.HOs, {
                className: a()(k.popover, P.kL),
                children: [
                    eh && es && null != V
                        ? (0, i.jsxs)("div", {
                              className: P.Sz,
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      children: G.intl.string(G.t.Fq5lwN),
                                  }),
                                  (0, i.jsx)(f.Z, {
                                      hangStatusActivity: V,
                                      channel: t,
                                      userId: n.id,
                                      isSelf: eo,
                                      analyticsSource: "VoiceUserActivities",
                                      onAction: s,
                                  }),
                              ],
                          })
                        : null,
                    null == J || null == B || ec
                        ? null
                        : (0, i.jsx)(g.P, {
                              stream: J,
                              activeStream: Q,
                              streamActivity: et,
                              user: n,
                              currentUserId: ee,
                              canWatch: $,
                              unavailableReason: Z,
                              onWatchStream: B,
                              onAction: s,
                              showHeader: !0,
                          }),
                    z.map((e) =>
                        (0, i.jsx)(
                            M.A,
                            {
                                embeddedApp: e,
                                presenceActivity: e.presenceActivity ?? void 0,
                                channel: t,
                                onAction: s,
                                enableUserHoverActivities: !0,
                            },
                            e.application.id,
                        ),
                    ),
                    en.map((e) => {
                        let a = e.application_id;
                        return (null != q && (a = q), ea && null != a && null != er[a])
                            ? (0, i.jsxs)(
                                  l.Fragment,
                                  {
                                      children: [
                                          (0, i.jsx)(M.A, {
                                              presenceActivity: e,
                                              channel: t,
                                              members: el,
                                              onAction: s,
                                              enableUserHoverActivities: !0,
                                          }),
                                          (0, i.jsx)(T.A, {
                                              className: P.L,
                                              applicationId: a,
                                              rewardOfferNoticeClassName: P.Nh,
                                              userIds: [n.id],
                                              location: "voice_channel",
                                              guildId: t.guild_id,
                                              channelId: t.id,
                                              numWishlistItems: 2,
                                              cardSpec: U.Z.SIZE_110,
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
                                      members: el,
                                      onAction: s,
                                      enableUserHoverActivities: !0,
                                  },
                                  `${e.application_id}`,
                              );
                    }),
                ],
            })
          : null;
}
