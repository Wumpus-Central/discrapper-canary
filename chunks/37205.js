n.d(t, { A: () => Q });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(284009),
    o = n.n(r),
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
    y = n(290331),
    S = n(21599),
    N = n(281489),
    j = n(378570),
    L = n(21119),
    R = n(95701),
    P = n(734057),
    w = n(696451),
    M = n(71393),
    D = n(576705),
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
    z = n(985018),
    Y = n(692236);
function Q(e) {
    let {
            invite: t,
            currentUserId: n,
            message: l,
            guild: r,
            onTransitionToInviteChannel: d,
            onAcceptInstantInvite: I,
        } = e,
        v = (0, B.xR)("VoiceInviteEmbed"),
        N = a.useRef(null),
        H = r ?? null;
    null == H && null != t.guild && (H = U.DY(t.guild));
    let Q = null != t.channel ? (0, R.OY)(t.channel) : null;
    o()(null != H, "Voice Invite Embed must be used in context of a guild."),
        o()(null != Q, "Voice Invite Embed must be able to resolve an invite channel.");
    let X = (0, _.bG)([D.A, P.A], () => {
            let e = P.A.getChannel(Q.id);
            return null == e || D.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e);
        }, [Q.id]),
        Z = (0, _.bG)([k.Ay], () => (X ? k.Ay.getVoiceStatesForChannelAlt(Q.id, H.id) : []), [Q.id, H.id, X]),
        { label: $, sublabel: ee } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                a = n.id === t,
                l = i.length > 0,
                s = i.some((e) => e.user?.id === n.id),
                r = i.length - !!s;
            return l
                ? {
                      label: a
                          ? z.intl.format(z.t["2RWMFV"], { othersCount: r })
                          : z.intl.format(z.t.Da7tZx, { othersCount: r }),
                  }
                : {
                      label: a ? z.intl.string(z.t.DVDvCD) : z.intl.string(z.t.TY77rq),
                      sublabel: z.intl.string(z.t.wM2WTM),
                  };
        })({ currentUserId: n, author: l.author, voiceStates: Z }),
        et = (0, _.bG)([M.A], () => null != M.A.getGuild(H.id), [H.id]),
        en = (0, _.bG)([w.Ay], () => y.A.canAcceptInvite([w.Ay], t), [t]),
        ei = t.state === W.elq.ACCEPTING,
        { analyticsLocations: ea } = (0, C.Ay)(f.A.INVITE_EMBED),
        el = (0, S._U)(t.code, l.id),
        es = (0, q.A)({ invite: t, message: l, voiceStates: Z, guildId: H.id, channelId: Q.id }),
        er = (0, T.AO)(es),
        eo = v.activityPreviewEnabled && null != es,
        ed = a.useCallback(() => {
            let e = et ? "transition" : "accept";
            et ? d() : I(),
                (0, p.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: l.author.id,
                        invite_message_id: l.id,
                        invite_instance_id: el,
                        application_id: er?.id ?? void 0,
                        stream_key: null != es ? (0, b._z)(es) : void 0,
                        number_of_users_in_channel: Z.length,
                    },
                    ea,
                );
        }, [t, l, ea, el, et, er, es, Z.length, d, I]),
        ec = a.useCallback(() => {
            et ? (0, j.iN)(Q.id) : I({ autoJoin: !1 }),
                O.default.track(W.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: H.id,
                    invite_channel_id: Q.id,
                    invite_instance_id: el,
                    is_member: et,
                    application_id: er?.id ?? null,
                    stream_key: null != es ? (0, b._z)(es) : null,
                    number_of_users_in_channel: Z.length,
                    location_stack: ea,
                });
        }, [Q.id, H.id, t.code, el, et, er, es, Z.length, ea, I]);
    (0, E.A)({
        name: u.ImpressionNames.VOICE_INVITE_EMBED,
        type: u.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: H.id,
            invite_channel_id: Q.id,
            invite_instance_id: el,
            has_active_stream: eo,
            location_stack: ea,
        },
    });
    let eu = a.useCallback(() => {
            null != es &&
                (et ? (g.default.selectVoiceChannel(es.channelId), (0, A.Nl)(es)) : I(),
                (0, p.he)(
                    {
                        invite: t,
                        action: et ? "transition" : "accept",
                        inviter_id: l.author.id,
                        invite_message_id: l.id,
                        invite_instance_id: el,
                        application_id: er?.id ?? void 0,
                        stream_key: (0, b._z)(es),
                        number_of_users_in_channel: Z.length,
                    },
                    [...ea, f.A.VOICE_INVITE_STREAM_PREVIEW],
                ));
        }, [es, et, t, l, ea, el, er, Z.length, I]),
        e_ = (0, _.bG)([x.A], () => x.A.useReducedMotion),
        em = a.useRef(null),
        [eh, ep] = a.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        eg = (0, _.bG)([L.A], () => {
            let e = Z.map((e) => e.user),
                t = e.find((e) => e.id === l.author.id),
                n = e
                    .filter((e) => e.id !== l.author.id)
                    .sort((e, t) => {
                        let n = L.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (L.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...n] : n;
        }, [Z, l.author.id]),
        eA = a.useMemo(() => c().throttle(ep, 20), [ep]);
    a.useEffect(() => () => eA.cancel(), [eA]);
    let ex = a.useCallback(
            (e) => {
                if (e_) return;
                let t = em.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    a = 0,
                    l = N.current?.getBoundingClientRect();
                if (null != l) {
                    let n = l.left + l.width / 2,
                        i = l.top + l.height / 2,
                        s = e.clientX - n,
                        r = e.clientY - i;
                    a = 2 * Math.exp(-Math.sqrt(s * s + r * r) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                eA({ percentX: n, percentY: i, proximity: a });
            },
            [e_, eA],
        ),
        ef = a.useCallback(() => {
            eA.cancel(), ep({ percentX: 0, percentY: 0, proximity: 0 });
        }, [eA]);
    return (0, i.jsxs)("div", {
        ref: em,
        className: s()(Y.kL, { [Y.VD]: eo }),
        onMouseMove: ex,
        onMouseLeave: ef,
        children: [
            (0, i.jsx)("div", { className: Y.ys }),
            (0, i.jsx)("div", { className: Y.r$, style: { "--custom-number-of-dots": 24 } }),
            eo ? (0, i.jsx)(J, { className: Y.tB, stream: es }) : null,
            (0, i.jsxs)("div", {
                className: Y.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: Y.Qs,
                        children: [
                            (0, i.jsx)(G.A, { channel: Q, guild: H, onClick: ec }),
                            (0, i.jsxs)("div", {
                                className: Y.WD,
                                children: [
                                    eo ? (0, i.jsx)(K, { guildId: H.id, channelId: Q.id, members: eg }) : null,
                                    (0, i.jsx)(h.Text, {
                                        variant: "text-md/medium",
                                        children: (0, i.jsx)(m.A, { lineClamp: eo ? 1 : 3, children: $ }),
                                    }),
                                    null != ee
                                        ? (0, i.jsx)(h.Text, {
                                              variant: "text-sm/normal",
                                              className: Y.$B,
                                              children: (0, i.jsx)(m.A, { children: ee }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    eo
                        ? (0, i.jsx)(F.A, { stream: es, currentUserId: n, onClick: eu, className: Y.Rh })
                        : (0, i.jsx)("div", {
                              className: Y.RE,
                              children: (0, i.jsx)(V.A, {
                                  ref: N,
                                  guildId: H.id,
                                  channelId: Q.id,
                                  members: eg,
                                  motion: eh,
                              }),
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: Y.xk,
                children: (0, i.jsx)(h.Button, {
                    onClick: ed,
                    loading: ei,
                    variant: "active",
                    fullWidth: !0,
                    disabled: !en,
                    text: z.intl.string(z.t.gpqgah),
                }),
            }),
        ],
    });
}
function K(e) {
    let { guildId: t, channelId: n, members: a } = e;
    return a.length > 4
        ? (0, i.jsx)(X, { guildId: t, channelId: n, members: a })
        : (0, i.jsx)("div", {
              className: Y.WM,
              children: (0, i.jsx)(N.A, {
                  guildId: t,
                  partySize: { knownSize: a.length, unknownSize: 0, totalSize: a.length },
                  maxAvatarsShown: 3,
                  members: a,
              }),
          });
}
function X(e) {
    let { guildId: t, channelId: n, members: l } = e,
        s = a.useRef(null),
        { isHoveringOrFocusing: r } = (0, I.A)(s);
    return (0, i.jsx)(H.$, {
        guildId: t,
        channelId: n,
        users: l,
        targetElementRef: s,
        shouldShow: r,
        children: (e) =>
            (0, i.jsx)("div", {
                className: Y.WM,
                ...e,
                children: (0, i.jsx)(N.A, {
                    guildId: t,
                    partySize: { knownSize: l.length, unknownSize: 0, totalSize: l.length },
                    maxAvatarsShown: 3,
                    members: l,
                    overflowRef: s,
                }),
            }),
    });
}
function J(e) {
    let { className: t, stream: n } = e,
        { previewUrl: a, isLoading: l } = (0, v.A)(n.guildId, n.channelId, n.ownerId),
        r = null != a && !l;
    return (0, i.jsx)("div", {
        className: s()(t, Y.rr, { [Y.pc]: !r }),
        style: { "--custom-bg-url": r ? `url(${a})` : "unset" },
        children: (0, i.jsx)("div", { className: Y.bW }),
    });
}
