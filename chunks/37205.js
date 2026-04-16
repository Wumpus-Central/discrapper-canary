n.d(t, { A: () => Y });
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
    I = n(450149),
    v = n(652896),
    b = n(834757),
    T = n(290331),
    y = n(21599),
    S = n(281489),
    N = n(378570),
    j = n(21119),
    L = n(95701),
    R = n(734057),
    P = n(696451),
    w = n(71393),
    M = n(576705),
    D = n(607567),
    O = n(954571),
    k = n(860689),
    U = n(422844),
    B = n(72951),
    G = n(453178),
    F = n(836629),
    H = n(182912),
    V = n(341678),
    q = n(652215),
    W = n(985018),
    z = n(692236);
function Y(e) {
    let {
            invite: t,
            currentUserId: n,
            message: l,
            guild: r,
            onTransitionToInviteChannel: d,
            onAcceptInstantInvite: I,
        } = e,
        S = (0, U.xR)("VoiceInviteEmbed"),
        F = a.useRef(null),
        Y = r ?? null;
    null == Y && null != t.guild && (Y = k.DY(t.guild));
    let K = null != t.channel ? (0, L.OY)(t.channel) : null;
    o()(null != Y, "Voice Invite Embed must be used in context of a guild."),
        o()(null != K, "Voice Invite Embed must be able to resolve an invite channel.");
    let J = (0, _.bG)([M.A, R.A], () => {
            let e = R.A.getChannel(K.id);
            return null == e || M.A.canBasicChannel(q.hVb.VIEW_CHANNEL, e);
        }, [K.id]),
        Z = (0, _.bG)([D.Ay], () => (J ? D.Ay.getVoiceStatesForChannelAlt(K.id, Y.id) : []), [K.id, Y.id, J]),
        { label: $, sublabel: ee } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                a = n.id === t,
                l = i.length > 0,
                s = i.some((e) => e.user?.id === n.id),
                r = i.length - !!s;
            return l
                ? {
                      label: a
                          ? W.intl.format(W.t["2RWMFV"], { othersCount: r })
                          : W.intl.format(W.t.Da7tZx, { othersCount: r }),
                  }
                : {
                      label: a ? W.intl.string(W.t.DVDvCD) : W.intl.string(W.t.TY77rq),
                      sublabel: W.intl.string(W.t.wM2WTM),
                  };
        })({ currentUserId: n, author: l.author, voiceStates: Z }),
        et = (0, _.bG)([w.A], () => null != w.A.getGuild(Y.id), [Y.id]),
        en = (0, _.bG)([P.Ay], () => T.A.canAcceptInvite([P.Ay], t), [t]),
        ei = t.state === q.elq.ACCEPTING,
        { analyticsLocations: ea } = (0, C.Ay)(f.A.INVITE_EMBED),
        el = (0, y._U)(t.code, l.id),
        es = (0, V.A)({ invite: t, message: l, voiceStates: Z, guildId: Y.id, channelId: K.id }),
        er = (0, b.AO)(es),
        eo = S.activityPreviewEnabled && null != es,
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
                        stream_key: null != es ? (0, v._z)(es) : void 0,
                        number_of_users_in_channel: Z.length,
                    },
                    ea,
                );
        }, [t, l, ea, el, et, er, es, Z.length, d, I]),
        ec = a.useCallback(() => {
            et ? (0, N.iN)(K.id) : I({ autoJoin: !1 }),
                O.default.track(q.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: Y.id,
                    invite_channel_id: K.id,
                    invite_instance_id: el,
                    is_member: et,
                    application_id: er?.id ?? null,
                    stream_key: null != es ? (0, v._z)(es) : null,
                    number_of_users_in_channel: Z.length,
                    location_stack: ea,
                });
        }, [K.id, Y.id, t.code, el, et, er, es, Z.length, ea, I]);
    (0, E.A)({
        name: u.ImpressionNames.VOICE_INVITE_EMBED,
        type: u.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: Y.id,
            invite_channel_id: K.id,
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
                        stream_key: (0, v._z)(es),
                        number_of_users_in_channel: Z.length,
                    },
                    [...ea, f.A.VOICE_INVITE_STREAM_PREVIEW],
                ));
        }, [es, et, t, l, ea, el, er, Z.length, I]),
        e_ = (0, _.bG)([x.A], () => x.A.useReducedMotion),
        em = a.useRef(null),
        [eh, ep] = a.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        eg = (0, _.bG)([j.A], () => {
            let e = Z.map((e) => e.user),
                t = e.find((e) => e.id === l.author.id),
                n = e
                    .filter((e) => e.id !== l.author.id)
                    .sort((e, t) => {
                        let n = j.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (j.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
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
                    l = F.current?.getBoundingClientRect();
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
        className: s()(z.kL, { [z.VD]: eo }),
        onMouseMove: ex,
        onMouseLeave: ef,
        children: [
            (0, i.jsx)("div", { className: z.ys }),
            (0, i.jsx)("div", { className: z.r$, style: { "--custom-number-of-dots": 24 } }),
            eo ? (0, i.jsx)(X, { className: z.tB, stream: es }) : null,
            (0, i.jsxs)("div", {
                className: z.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: z.Qs,
                        children: [
                            (0, i.jsx)(B.A, { channel: K, guild: Y, onClick: ec }),
                            (0, i.jsxs)("div", {
                                className: z.WD,
                                children: [
                                    eo ? (0, i.jsx)(Q, { guildId: Y.id, channelId: K.id, members: eg }) : null,
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
                        ? (0, i.jsx)(G.A, { stream: es, currentUserId: n, onClick: eu, className: z.Rh })
                        : (0, i.jsx)("div", {
                              className: z.RE,
                              children: (0, i.jsx)(H.A, {
                                  ref: F,
                                  guildId: Y.id,
                                  channelId: K.id,
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
                    text: W.intl.string(W.t.gpqgah),
                }),
            }),
        ],
    });
}
function Q(e) {
    let { guildId: t, channelId: n, members: a } = e;
    return a.length > 4
        ? (0, i.jsx)(K, { guildId: t, channelId: n, members: a })
        : (0, i.jsx)("div", {
              className: z.WM,
              children: (0, i.jsx)(S.A, {
                  guildId: t,
                  partySize: { knownSize: a.length, unknownSize: 0, totalSize: a.length },
                  maxAvatarsShown: 3,
                  members: a,
              }),
          });
}
function K(e) {
    let { guildId: t, channelId: n, members: a } = e,
        { triggerRef: l, shouldShow: s, onPopoutHoverOrFocus: r } = (0, F.o)();
    return (0, i.jsx)(F.$, {
        guildId: t,
        channelId: n,
        users: a,
        targetElementRef: l,
        shouldShow: s,
        onHoverOrFocus: r,
        children: (e) =>
            (0, i.jsx)("div", {
                className: z.WM,
                ...e,
                children: (0, i.jsx)(S.A, {
                    guildId: t,
                    partySize: { knownSize: a.length, unknownSize: 0, totalSize: a.length },
                    maxAvatarsShown: 3,
                    members: a,
                    overflowRef: l,
                }),
            }),
    });
}
function X(e) {
    let { className: t, stream: n } = e,
        { previewUrl: a, isLoading: l } = (0, I.A)(n.guildId, n.channelId, n.ownerId),
        r = null != a && !l;
    return (0, i.jsx)("div", {
        className: s()(t, z.rr, { [z.pc]: !r }),
        style: { "--custom-bg-url": r ? `url(${a})` : "unset" },
        children: (0, i.jsx)("div", { className: z.bW }),
    });
}
