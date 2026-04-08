n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(80682),
    c = n(845056),
    u = n(685399),
    h = n(323073),
    A = n(643501),
    _ = n(279250),
    m = n(834757),
    p = n(727353),
    g = n(140547),
    f = n(636920),
    x = n(958140),
    E = n(832163),
    I = n(565688),
    C = n(533562),
    N = n(760716),
    T = n(93879),
    S = n(616356),
    b = n(961350),
    v = n(71393),
    y = n(576705),
    j = n(290863),
    R = n(977997),
    O = n(954571),
    L = n(329554),
    M = n(652215),
    D = n(699976),
    U = n(985018),
    G = n(71228),
    P = n(467935);
function k(e) {
    let {
            channel: t,
            user: n,
            onAction: s,
            excludeActivity: k,
            onWatchStream: w,
            hangStatusActivity: B,
            setIsHangStatusInputFocused: V,
            setIsHangStatusEmojiPickerOpen: H,
        } = e,
        F = l.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, d.Eq)(F, "VoiceUserActivities");
    let W = (0, u.Ay)(t),
        K = l.useMemo(() => W.filter((e) => e.embeddedActivity.userIds.has(n.id)), [W, n.id]),
        Y = Array.from((0, u.Rz)(K).values()),
        z = (0, C.W)(),
        q = (0, N.i)((e) => e.showSelfActivity),
        [X, $] = (0, r.yK)(
            [S.A],
            () => [S.A.getStreamForUser(n.id, t.getGuildId()), S.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [J, Q] = (0, r.yK)([R.A, v.A, y.A, A.default], () => (0, _.eo)(t, R.A, v.A, y.A, A.default)),
        Z = (0, r.bG)([b.default], () => b.default.getId()),
        ee = (0, r.bG)([j.A], () => (0, m.nr)(X, j.A), [X]),
        et = (0, c.m)(n, k ?? ee),
        { enableHangStatus: en } = (0, g.$j)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        ei = (0, I.m)({ location: "voice_channel_activities" }),
        el = (0, r.bG)([E.A], () => E.A.getDetectableIdsToApplicationIds()),
        es = (0, r.bG)([b.default], () => b.default.getId() === n.id && !q),
        ea = (0, h.r9)() && (0, h.UK)(t.id),
        er = null != X && !ea,
        eo = et.length + Y.length > 0,
        ed = null != B,
        ec = er || eo || (ed && en);
    return (l.useEffect(() => {
        (es && en) ||
            (ec &&
                O.default.track(M.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: t.id,
                    other_user_id: n.id,
                }));
    }, [es, en, ec, t.id, n.id]),
    es && en)
        ? (0, i.jsx)(x.h, { channel: t, setIsHangStatusInputFocused: V, setIsEmojiPickerOpen: H })
        : ec
          ? (0, i.jsxs)(o.HOs, {
                className: a()(P.popover, G.kL),
                children: [
                    ed && en && null != B
                        ? (0, i.jsxs)("div", {
                              className: G.Sz,
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
                                      isSelf: es,
                                      analyticsSource: "VoiceUserActivities",
                                      onAction: s,
                                  }),
                              ],
                          })
                        : null,
                    null == X || null == w || ea
                        ? null
                        : (0, i.jsx)(p.P, {
                              stream: X,
                              activeStream: $,
                              streamActivity: ee,
                              user: n,
                              currentUserId: Z,
                              canWatch: J,
                              unavailableReason: Q,
                              onWatchStream: w,
                              onAction: s,
                              showHeader: !0,
                          }),
                    Y.map((e) =>
                        (0, i.jsx)(
                            L.A,
                            {
                                userId: n.id,
                                embeddedApp: e,
                                presenceActivity: e.presenceActivity ?? void 0,
                                channel: t,
                                onAction: s,
                            },
                            e.application.id,
                        ),
                    ),
                    et.map((e) => {
                        let a = e.application_id;
                        return (null != z && (a = z), ei && null != a && null != el[a])
                            ? (0, i.jsxs)(
                                  l.Fragment,
                                  {
                                      children: [
                                          (0, i.jsx)(L.A, {
                                              presenceActivity: e,
                                              channel: t,
                                              userId: n.id,
                                              onAction: s,
                                          }),
                                          (0, i.jsx)(T.A, {
                                              className: G.L,
                                              applicationId: a,
                                              rewardOfferNoticeClassName: G.Nh,
                                              userIds: [n.id],
                                              location: "voice_channel",
                                              guildId: t.guild_id,
                                              channelId: t.id,
                                              numWishlistItems: 2,
                                              cardSpec: D.Z.SIZE_110,
                                          }),
                                      ],
                                  },
                                  `${e.application_id}-with-gifting-breadcrumb`,
                              )
                            : (0, i.jsx)(
                                  L.A,
                                  { presenceActivity: e, channel: t, userId: n.id, onAction: s },
                                  `${e.application_id}`,
                              );
                    }),
                ],
            })
          : null;
}
