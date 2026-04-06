n.d(t, { A: () => Q });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    d = n(735438),
    c = n.n(d),
    u = n(110259),
    _ = n(311907),
    m = n(3026),
    h = n(397927),
    p = n(846293),
    g = n(956793),
    A = n(401843),
    x = n(775602),
    f = n(793574),
    C = n(688810),
    E = n(139286),
    I = n(713517),
    v = n(450149),
    b = n(652896),
    T = n(834757),
    N = n(290331),
    y = n(21599),
    S = n(281489),
    j = n(378570),
    L = n(21119),
    R = n(95701),
    P = n(734057),
    D = n(696451),
    M = n(71393),
    w = n(576705),
    k = n(607567),
    O = n(954571),
    U = n(860689),
    B = n(422844),
    G = n(72951),
    F = n(453178),
    H = n(836629),
    V = n(182912),
    q = n(341678),
    W = n(652215),
    Y = n(985018),
    z = n(682524);
function Q(e) {
    let {
            invite: t,
            currentUserId: n,
            message: s,
            guild: a,
            onTransitionToInviteChannel: d,
            onAcceptInstantInvite: I,
        } = e,
        v = (0, B.xR)("VoiceInviteEmbed"),
        S = l.useRef(null),
        H = a ?? null;
    null == H && null != t.guild && (H = U.DY(t.guild));
    let Q = null != t.channel ? (0, R.OY)(t.channel) : null;
    o()(null != H, "Voice Invite Embed must be used in context of a guild."),
        o()(null != Q, "Voice Invite Embed must be able to resolve an invite channel.");
    let J = (0, _.bG)([w.A, P.A], () => {
            let e = P.A.getChannel(Q.id);
            return null == e || w.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e);
        }, [Q.id]),
        Z = (0, _.bG)([k.Ay], () => (J ? k.Ay.getVoiceStatesForChannelAlt(Q.id, H.id) : []), [Q.id, H.id, J]),
        { label: $, sublabel: ee } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                s = i.length > 0,
                r = i.length;
            return s
                ? {
                      label: l
                          ? Y.intl.format(Y.t["2RWMFV"], { othersCount: r })
                          : Y.intl.format(Y.t.Da7tZx, { othersCount: r }),
                  }
                : {
                      label: l ? Y.intl.string(Y.t.DVDvCD) : Y.intl.string(Y.t.TY77rq),
                      sublabel: Y.intl.string(Y.t.wM2WTM),
                  };
        })({ currentUserId: n, author: s.author, voiceStates: Z }),
        et = (0, _.bG)([M.A], () => null != M.A.getGuild(H.id), [H.id]),
        en = (0, _.bG)([D.Ay], () => N.A.canAcceptInvite([D.Ay], t), [t]),
        ei = t.state === W.elq.ACCEPTING,
        { analyticsLocations: el } = (0, C.Ay)(f.A.INVITE_EMBED),
        es = (0, y._U)(t.code, s.id),
        er = (0, q.A)({ invite: t, message: s, voiceStates: Z, guildId: H.id, channelId: Q.id }),
        ea = (0, T.AO)(er),
        eo = v.activityPreviewEnabled && null != er,
        ed = l.useCallback(() => {
            let e = et ? "transition" : "accept";
            et ? d() : I(),
                (0, p.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: s.author.id,
                        invite_message_id: s.id,
                        invite_instance_id: es,
                        application_id: ea?.id ?? void 0,
                        stream_key: null != er ? (0, b._z)(er) : void 0,
                        number_of_users_in_channel: Z.length,
                    },
                    el,
                );
        }, [t, s, el, es, et, ea, er, Z.length, d, I]),
        ec = l.useCallback(() => {
            et ? (0, j.iN)(Q.id) : I({ autoJoin: !1 }),
                O.default.track(W.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: H.id,
                    invite_channel_id: Q.id,
                    invite_instance_id: es,
                    is_member: et,
                    application_id: ea?.id ?? null,
                    stream_key: null != er ? (0, b._z)(er) : null,
                    number_of_users_in_channel: Z.length,
                    location_stack: el,
                });
        }, [Q.id, H.id, t.code, es, et, ea, er, Z.length, el, I]);
    (0, E.A)({
        name: u.ImpressionNames.VOICE_INVITE_EMBED,
        type: u.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: H.id,
            invite_channel_id: Q.id,
            invite_instance_id: es,
            has_active_stream: eo,
            location_stack: el,
        },
    });
    let eu = l.useCallback(() => {
            null != er &&
                (et ? (g.default.selectVoiceChannel(er.channelId), (0, A.Nl)(er)) : I(),
                (0, p.he)(
                    {
                        invite: t,
                        action: et ? "transition" : "accept",
                        inviter_id: s.author.id,
                        invite_message_id: s.id,
                        invite_instance_id: es,
                        application_id: ea?.id ?? void 0,
                        stream_key: (0, b._z)(er),
                        number_of_users_in_channel: Z.length,
                    },
                    [...el, f.A.VOICE_INVITE_STREAM_PREVIEW],
                ));
        }, [er, et, t, s, el, es, ea, Z.length, I]),
        e_ = (0, _.bG)([x.A], () => x.A.useReducedMotion),
        em = l.useRef(null),
        [eh, ep] = l.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        eg = (0, _.bG)([L.A], () => {
            let e = Z.map((e) => e.user),
                t = e.find((e) => e.id === s.author.id),
                n = e
                    .filter((e) => e.id !== s.author.id)
                    .sort((e, t) => {
                        let n = L.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (L.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...n] : n;
        }, [Z, s.author.id]),
        eA = l.useMemo(() => c().throttle(ep, 20), [ep]);
    l.useEffect(() => () => eA.cancel(), [eA]);
    let ex = l.useCallback(
            (e) => {
                if (e_) return;
                let t = em.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    l = 0,
                    s = S.current?.getBoundingClientRect();
                if (null != s) {
                    let n = s.left + s.width / 2,
                        i = s.top + s.height / 2,
                        r = e.clientX - n,
                        a = e.clientY - i;
                    l = 2 * Math.exp(-Math.sqrt(r * r + a * a) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                eA({ percentX: n, percentY: i, proximity: l });
            },
            [e_, eA],
        ),
        ef = l.useCallback(() => {
            eA.cancel(), ep({ percentX: 0, percentY: 0, proximity: 0 });
        }, [eA]);
    return (0, i.jsxs)("div", {
        ref: em,
        className: r()(z.kL, { [z.VD]: eo }),
        onMouseMove: ex,
        onMouseLeave: ef,
        children: [
            (0, i.jsx)("div", { className: z.ys }),
            (0, i.jsx)("div", { className: z.r$, style: { "--custom-number-of-dots": 24 } }),
            eo ? (0, i.jsx)(X, { className: z.tB, stream: er }) : null,
            (0, i.jsxs)("div", {
                className: z.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: z.Qs,
                        children: [
                            (0, i.jsx)(G.A, { channel: Q, guild: H, onClick: ec }),
                            (0, i.jsxs)("div", {
                                className: z.WD,
                                children: [
                                    eo ? (0, i.jsx)(K, { guildId: H.id, channelId: Q.id, members: eg }) : null,
                                    (0, i.jsx)(h.Text, {
                                        variant: "text-md/medium",
                                        children: (0, i.jsx)(m.A, { lineClamp: eo ? 1 : 3, children: $ }),
                                    }),
                                    null != ee
                                        ? (0, i.jsx)(h.Text, {
                                              variant: "text-sm/normal",
                                              className: z.$B,
                                              children: (0, i.jsx)(m.A, { children: ee }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    eo
                        ? (0, i.jsx)(F.A, { stream: er, currentUserId: n, onClick: eu, className: z.Rh })
                        : (0, i.jsx)("div", {
                              className: z.RE,
                              children: (0, i.jsx)(V.A, {
                                  ref: S,
                                  guildId: H.id,
                                  channelId: Q.id,
                                  members: eg,
                                  motion: eh,
                              }),
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: z.xk,
                children: (0, i.jsx)(h.Button, {
                    onClick: ed,
                    loading: ei,
                    variant: "active",
                    fullWidth: !0,
                    disabled: !en,
                    text: Y.intl.string(Y.t.gpqgah),
                }),
            }),
        ],
    });
}
function K(e) {
    let { guildId: t, channelId: n, members: l } = e;
    return l.length > 4
        ? (0, i.jsx)(J, { guildId: t, channelId: n, members: l })
        : (0, i.jsx)("div", {
              className: z.WM,
              children: (0, i.jsx)(S.A, {
                  guildId: t,
                  partySize: { knownSize: l.length, unknownSize: 0, totalSize: l.length },
                  maxAvatarsShown: 3,
                  members: l,
              }),
          });
}
function J(e) {
    let { guildId: t, channelId: n, members: s } = e,
        r = l.useRef(null),
        { isHoveringOrFocusing: a } = (0, I.A)(r);
    return (0, i.jsx)(H.$, {
        guildId: t,
        channelId: n,
        users: s,
        targetElementRef: r,
        shouldShow: a,
        children: (e) =>
            (0, i.jsx)("div", {
                className: z.WM,
                ...e,
                children: (0, i.jsx)(S.A, {
                    guildId: t,
                    partySize: { knownSize: s.length, unknownSize: 0, totalSize: s.length },
                    maxAvatarsShown: 3,
                    members: s,
                    overflowRef: r,
                }),
            }),
    });
}
function X(e) {
    let { className: t, stream: n } = e,
        { previewUrl: l, isLoading: s } = (0, v.A)(n.guildId, n.channelId, n.ownerId),
        a = null != l && !s;
    return (0, i.jsx)("div", {
        className: r()(t, z.rr, { [z.pc]: !a }),
        style: { "--custom-bg-url": a ? `url(${l})` : "unset" },
        children: (0, i.jsx)("div", { className: z.bW }),
    });
}
