n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    a = n(110259),
    s = n(311907),
    r = n(435371),
    o = n(397927),
    d = n(846293),
    c = n(793574),
    u = n(688810),
    _ = n(139286),
    m = n(52074),
    h = n(725613),
    p = n(47167),
    g = n(693879),
    A = n(145497),
    x = n(21599),
    f = n(378570),
    C = n(481947),
    E = n(734057),
    I = n(71393),
    v = n(576705),
    b = n(607567),
    T = n(877695),
    y = n(652215),
    S = n(985018),
    N = n(198183);
function j(e) {
    let { invite: t, message: n, channel: E, onTransitionToInviteChannel: v } = e,
        T = (0, p.Ay)(E),
        y = (0, s.bG)([I.A], () => I.A.getGuild(E.guild_id), [E.guild_id]),
        { voiceStates: j } = (0, s.cf)(
            [b.Ay],
            () => ({ voiceStates: null != E.guild_id ? b.Ay.getVoiceStatesForChannelAlt(E.id, E.guild_id) : [] }),
            [E],
        ),
        L = l.useMemo(
            () => [...j.filter((e) => e.voiceState.selfStream), ...j.filter((e) => !e.voiceState.selfStream)],
            [j],
        ),
        R = (0, s.bG)([h.A], () => h.A.getStartTime(E), [E]);
    l.useEffect(() => {
        null != R || null == E.guild_id || h.A.hasRequestedStartTimes(E.guild_id) || (0, m.U)(E.guild_id);
    }, [E, R]);
    let P = l.useRef(null),
        w = l.useRef(null),
        D = l.useCallback(() => {
            let e = P.current,
                t = w.current;
            if (null == t) return;
            let n = null != e && e.scrollHeight - e.scrollTop > e.clientHeight + 1;
            t.style.display = n ? "block" : "none";
        }, []);
    l.useLayoutEffect(() => {
        D();
    }, [L, D]);
    let M = l.useCallback(
            (e) => {
                null != P.current && P.current.removeEventListener("scroll", D),
                    (P.current = e),
                    null != e && e.addEventListener("scroll", D);
            },
            [D],
        ),
        { analyticsLocations: k } = (0, u.Ay)(c.A.INVITE_EMBED),
        O = (0, x._U)(t.code, n.id),
        U = j.some((e) => e.voiceState.selfStream);
    (0, _.A)({
        name: a.ImpressionNames.VOICE_INVITE_EMBED,
        type: a.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: E.guild_id,
            invite_channel_id: E.id,
            invite_instance_id: O,
            has_active_stream: U,
            location_stack: k,
        },
    });
    let B = l.useCallback(() => {
            (0, f.iN)(E.id);
        }, [E.id]),
        G = l.useCallback(() => {
            v(),
                (0, d.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: O,
                        number_of_users_in_channel: j.length,
                    },
                    k,
                );
        }, [t, n, k, O, j.length, v]);
    return (0, i.jsxs)("div", {
        className: N.kL,
        children: [
            (0, i.jsxs)("div", {
                className: N.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: N.yW,
                        children: [
                            (0, i.jsx)(o.HKD, {
                                className: N.p,
                                color: j.length > 0 ? o.LU0.colors.TEXT_FEEDBACK_POSITIVE : o.LU0.colors.ICON_SUBTLE,
                                size: "custom",
                                width: 20,
                                height: 20,
                            }),
                            (0, i.jsx)(r.un, {
                                title: `${y?.name} / ${T}`,
                                body: "",
                                assetSize: 24,
                                asset: null != y ? (0, i.jsx)(A.Ay, { guild: y, iconSize: 24 }) : void 0,
                                position: "top",
                                children: (0, i.jsx)(o.DUT, {
                                    className: N.HA,
                                    onClick: B,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: T,
                                    }),
                                }),
                            }),
                        ],
                    }),
                    null != R ? (0, i.jsx)(g.z, { entry: { start: R }, textColor: "text-feedback-positive" }) : null,
                ],
            }),
            L.length > 0
                ? (0, i.jsxs)("div", {
                      className: N.Ao,
                      children: [
                          (0, i.jsx)(o.HOs, {
                              ref: M,
                              className: N.JD,
                              children: L.map((e) =>
                                  (0, i.jsx)(
                                      C.Ay,
                                      {
                                          className: N.Eq,
                                          user: e.user,
                                          guildId: E.guild_id ?? void 0,
                                          channelId: E.id,
                                          nick: e.nick,
                                          isStreaming: e.voiceState.selfStream,
                                      },
                                      e.user.id,
                                  ),
                              ),
                          }),
                          (0, i.jsx)("div", { ref: w, className: N.wH, style: { display: "none" } }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: N.p$,
                      children: (0, i.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: S.intl.string(S.t.zSqdrS),
                      }),
                  }),
            (0, i.jsx)("div", {
                className: N.TB,
                children: (0, i.jsx)(o.Button, {
                    onClick: G,
                    icon: o.HKD,
                    variant: "active",
                    fullWidth: !0,
                    text: S.intl.string(S.t.gpqgah),
                }),
            }),
        ],
    });
}
function L(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        r = t.channel?.id,
        o = (0, s.bG)([E.A, v.A], () => {
            let e = E.A.getChannel(r);
            return null != e && v.A.canBasicChannel(y.hVb.VIEW_CHANNEL, e) ? e : null;
        }, [r]),
        d = (0, s.bG)([I.A], () => null != I.A.getGuild(t.guild?.id), [t.guild]);
    return null == o
        ? (0, i.jsx)(T.A, {
              invite: t,
              message: n,
              isMemberOfGuild: d,
              onTransitionToInviteChannel: l,
              onAcceptInstantInvite: a,
          })
        : (0, i.jsx)(j, { invite: t, message: n, channel: o, onTransitionToInviteChannel: l });
}
