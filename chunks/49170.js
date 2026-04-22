n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    a = n(110259),
    s = n(311907),
    r = n(459192),
    o = n(983851),
    d = n(827734),
    c = n(939249),
    u = n(834730),
    m = n(573613),
    _ = n(821609),
    h = n(846293),
    p = n(793574),
    g = n(688810),
    A = n(139286),
    f = n(52074),
    x = n(725613),
    C = n(47167),
    E = n(693879),
    I = n(145497),
    v = n(21599),
    b = n(378570),
    T = n(481947),
    S = n(734057),
    y = n(71393),
    N = n(576705),
    j = n(607567),
    L = n(877695),
    R = n(652215),
    P = n(985018),
    w = n(198183);
function D(e) {
    let { invite: t, message: n, channel: S, onTransitionToInviteChannel: N } = e,
        L = (0, C.Ay)(S),
        R = (0, s.bG)([y.A], () => y.A.getGuild(S.guild_id), [S.guild_id]),
        { voiceStates: D } = (0, s.cf)(
            [j.Ay],
            () => ({ voiceStates: null != S.guild_id ? j.Ay.getVoiceStatesForChannelAlt(S.id, S.guild_id) : [] }),
            [S],
        ),
        k = l.useMemo(
            () => [...D.filter((e) => e.voiceState.selfStream), ...D.filter((e) => !e.voiceState.selfStream)],
            [D],
        ),
        O = (0, s.bG)([x.A], () => x.A.getStartTime(S), [S]);
    l.useEffect(() => {
        null != O || null == S.guild_id || x.A.hasRequestedStartTimes(S.guild_id) || (0, f.U)(S.guild_id);
    }, [S, O]);
    let M = l.useRef(null),
        U = l.useRef(null),
        G = l.useCallback(() => {
            let e = M.current,
                t = U.current;
            if (null == t) return;
            let n = null != e && e.scrollHeight - e.scrollTop > e.clientHeight + 1;
            t.style.display = n ? "block" : "none";
        }, []);
    l.useLayoutEffect(() => {
        G();
    }, [k, G]);
    let B = l.useCallback(
            (e) => {
                null != M.current && M.current.removeEventListener("scroll", G),
                    (M.current = e),
                    null != e && e.addEventListener("scroll", G);
            },
            [G],
        ),
        { analyticsLocations: F } = (0, g.Ay)(p.A.INVITE_EMBED),
        H = (0, v._U)(t.code, n.id),
        V = D.some((e) => e.voiceState.selfStream);
    (0, A.A)({
        name: a.ImpressionNames.VOICE_INVITE_EMBED,
        type: a.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: S.guild_id,
            invite_channel_id: S.id,
            invite_instance_id: H,
            has_active_stream: V,
            location_stack: F,
        },
    });
    let q = l.useCallback(() => {
            (0, b.iN)(S.id);
        }, [S.id]),
        W = l.useCallback(() => {
            N(),
                (0, h.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: H,
                        number_of_users_in_channel: D.length,
                    },
                    F,
                );
        }, [t, n, F, H, D.length, N]);
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [
            (0, i.jsxs)("div", {
                className: w.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: w.yW,
                        children: [
                            (0, i.jsx)(o.H, {
                                className: w.p,
                                color: D.length > 0 ? d.A.colors.TEXT_FEEDBACK_POSITIVE : d.A.colors.ICON_SUBTLE,
                                size: "custom",
                                width: 20,
                                height: 20,
                            }),
                            (0, i.jsx)(r.u, {
                                title: `${R?.name} / ${L}`,
                                body: "",
                                assetSize: 24,
                                asset: null != R ? (0, i.jsx)(I.Ay, { guild: R, iconSize: 24 }) : void 0,
                                position: "top",
                                children: (0, i.jsx)(c.D, {
                                    className: w.HA,
                                    onClick: q,
                                    children: (0, i.jsx)(u.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: L,
                                    }),
                                }),
                            }),
                        ],
                    }),
                    null != O ? (0, i.jsx)(E.z, { entry: { start: O }, textColor: "text-feedback-positive" }) : null,
                ],
            }),
            k.length > 0
                ? (0, i.jsxs)("div", {
                      className: w.Ao,
                      children: [
                          (0, i.jsx)(m.Ip, {
                              ref: B,
                              className: w.JD,
                              children: k.map((e) =>
                                  (0, i.jsx)(
                                      T.Ay,
                                      {
                                          className: w.Eq,
                                          user: e.user,
                                          guildId: S.guild_id ?? void 0,
                                          channelId: S.id,
                                          nick: e.nick,
                                          isStreaming: e.voiceState.selfStream,
                                      },
                                      e.user.id,
                                  ),
                              ),
                          }),
                          (0, i.jsx)("div", { ref: U, className: w.wH, style: { display: "none" } }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: w.p$,
                      children: (0, i.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: P.intl.string(P.t.zSqdrS),
                      }),
                  }),
            (0, i.jsx)("div", {
                className: w.TB,
                children: (0, i.jsx)(_.$, {
                    onClick: W,
                    icon: o.H,
                    variant: "active",
                    fullWidth: !0,
                    text: P.intl.string(P.t.gpqgah),
                }),
            }),
        ],
    });
}
function k(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        r = t.channel?.id,
        o = (0, s.bG)([S.A, N.A], () => {
            let e = S.A.getChannel(r);
            return null != e && N.A.canBasicChannel(R.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [r]),
        d = (0, s.bG)([y.A], () => null != y.A.getGuild(t.guild?.id), [t.guild]);
    return null == o
        ? (0, i.jsx)(L.A, {
              invite: t,
              message: n,
              isMemberOfGuild: d,
              onTransitionToInviteChannel: l,
              onAcceptInstantInvite: a,
          })
        : (0, i.jsx)(D, { invite: t, message: n, channel: o, onTransitionToInviteChannel: l });
}
