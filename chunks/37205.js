n.d(t, { A: () => Q });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(284009),
    o = n.n(r),
    d = n(735438),
    c = n.n(d),
    u = n(110259),
    m = n(311907),
    _ = n(3026),
    h = n(834730),
    p = n(821609),
    g = n(846293),
    A = n(956793),
    f = n(401843),
    x = n(775602),
    C = n(793574),
    E = n(688810),
    I = n(139286),
    v = n(450149),
    b = n(652896),
    T = n(834757),
    S = n(290331),
    y = n(21599),
    N = n(281489),
    j = n(378570),
    L = n(21119),
    R = n(95701),
    P = n(734057),
    w = n(696451),
    D = n(71393),
    k = n(576705),
    O = n(607567),
    M = n(954571),
    U = n(860689),
    G = n(422844),
    B = n(72951),
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
            message: a,
            guild: r,
            onTransitionToInviteChannel: d,
            onAcceptInstantInvite: v,
        } = e,
        N = (0, G.xR)("VoiceInviteEmbed"),
        H = l.useRef(null),
        Q = r ?? null;
    null == Q && null != t.guild && (Q = U.DY(t.guild));
    let Z = null != t.channel ? (0, R.OY)(t.channel) : null;
    o()(null != Q, "Voice Invite Embed must be used in context of a guild."),
        o()(null != Z, "Voice Invite Embed must be able to resolve an invite channel.");
    let X = (0, m.bG)([k.A, P.A], () => {
            let e = P.A.getChannel(Z.id);
            return null == e || k.A.canBasicChannel(W.hVb.VIEW_CHANNEL, e);
        }, [Z.id]),
        $ = (0, m.bG)([O.Ay], () => (X ? O.Ay.getVoiceStatesForChannelAlt(Z.id, Q.id) : []), [Z.id, Q.id, X]),
        { label: ee, sublabel: et } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                a = i.length > 0,
                s = i.some((e) => e.user?.id === n.id),
                r = i.length - !!s;
            return a
                ? {
                      label: l
                          ? z.intl.format(z.t["2RWMFV"], { othersCount: r })
                          : z.intl.format(z.t.Da7tZx, { othersCount: r }),
                  }
                : {
                      label: l ? z.intl.string(z.t.DVDvCD) : z.intl.string(z.t.TY77rq),
                      sublabel: z.intl.string(z.t.wM2WTM),
                  };
        })({ currentUserId: n, author: a.author, voiceStates: $ }),
        en = (0, m.bG)([D.A], () => null != D.A.getGuild(Q.id), [Q.id]),
        ei = (0, m.bG)([w.Ay], () => S.A.canAcceptInvite([w.Ay], t), [t]),
        el = t.state === W.elq.ACCEPTING,
        { analyticsLocations: ea } = (0, E.Ay)(C.A.INVITE_EMBED),
        es = (0, y._U)(t.code, a.id),
        er = (0, q.A)({ invite: t, message: a, voiceStates: $, guildId: Q.id, channelId: Z.id }),
        eo = (0, T.AO)(er),
        ed = N.activityPreviewEnabled && null != er,
        ec = l.useCallback(() => {
            let e = en ? "transition" : "accept";
            en ? d() : v(),
                (0, g.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: es,
                        application_id: eo?.id ?? void 0,
                        stream_key: null != er ? (0, b._z)(er) : void 0,
                        number_of_users_in_channel: $.length,
                    },
                    ea,
                );
        }, [t, a, ea, es, en, eo, er, $.length, d, v]),
        eu = l.useCallback(() => {
            en ? (0, j.iN)(Z.id) : v({ autoJoin: !1 }),
                M.default.track(W.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: Q.id,
                    invite_channel_id: Z.id,
                    invite_instance_id: es,
                    is_member: en,
                    application_id: eo?.id ?? null,
                    stream_key: null != er ? (0, b._z)(er) : null,
                    number_of_users_in_channel: $.length,
                    location_stack: ea,
                });
        }, [Z.id, Q.id, t.code, es, en, eo, er, $.length, ea, v]);
    (0, I.A)({
        name: u.ImpressionNames.VOICE_INVITE_EMBED,
        type: u.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: Q.id,
            invite_channel_id: Z.id,
            invite_instance_id: es,
            has_active_stream: ed,
            location_stack: ea,
        },
    });
    let em = l.useCallback(() => {
            null != er &&
                (en ? (A.default.selectVoiceChannel(er.channelId), (0, f.Nl)(er)) : v(),
                (0, g.he)(
                    {
                        invite: t,
                        action: en ? "transition" : "accept",
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: es,
                        application_id: eo?.id ?? void 0,
                        stream_key: (0, b._z)(er),
                        number_of_users_in_channel: $.length,
                    },
                    [...ea, C.A.VOICE_INVITE_STREAM_PREVIEW],
                ));
        }, [er, en, t, a, ea, es, eo, $.length, v]),
        e_ = (0, m.bG)([x.A], () => x.A.useReducedMotion),
        eh = l.useRef(null),
        [ep, eg] = l.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        eA = (0, m.bG)([L.A], () => {
            let e = $.map((e) => e.user),
                t = e.find((e) => e.id === a.author.id),
                n = e
                    .filter((e) => e.id !== a.author.id)
                    .sort((e, t) => {
                        let n = L.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (L.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...n] : n;
        }, [$, a.author.id]),
        ef = l.useMemo(() => c().throttle(eg, 20), [eg]);
    l.useEffect(() => () => ef.cancel(), [ef]);
    let ex = l.useCallback(
            (e) => {
                if (e_) return;
                let t = eh.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    l = 0,
                    a = H.current?.getBoundingClientRect();
                if (null != a) {
                    let n = a.left + a.width / 2,
                        i = a.top + a.height / 2,
                        s = e.clientX - n,
                        r = e.clientY - i;
                    l = 2 * Math.exp(-Math.sqrt(s * s + r * r) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                ef({ percentX: n, percentY: i, proximity: l });
            },
            [e_, ef],
        ),
        eC = l.useCallback(() => {
            ef.cancel(), eg({ percentX: 0, percentY: 0, proximity: 0 });
        }, [ef]);
    return (0, i.jsxs)("div", {
        ref: eh,
        className: s()(Y.kL, { [Y.VD]: ed }),
        onMouseMove: ex,
        onMouseLeave: eC,
        children: [
            (0, i.jsx)("div", { className: Y.ys }),
            (0, i.jsx)("div", { className: Y.r$, style: { "--custom-number-of-dots": 24 } }),
            ed ? (0, i.jsx)(J, { className: Y.tB, stream: er }) : null,
            (0, i.jsxs)("div", {
                className: Y.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: Y.Qs,
                        children: [
                            (0, i.jsx)(B.A, { channel: Z, guild: Q, onClick: eu }),
                            (0, i.jsxs)("div", {
                                className: Y.WD,
                                children: [
                                    ed ? (0, i.jsx)(K, { guildId: Q.id, channelId: Z.id, members: eA }) : null,
                                    (0, i.jsx)(h.E, {
                                        variant: "text-md/medium",
                                        children: (0, i.jsx)(_.A, { lineClamp: ed ? 1 : 3, children: ee }),
                                    }),
                                    null != et
                                        ? (0, i.jsx)(h.E, {
                                              variant: "text-sm/normal",
                                              className: Y.$B,
                                              children: (0, i.jsx)(_.A, { children: et }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    ed
                        ? (0, i.jsx)(F.A, { stream: er, currentUserId: n, onClick: em, className: Y.Rh })
                        : (0, i.jsx)("div", {
                              className: Y.RE,
                              children: (0, i.jsx)(V.A, {
                                  ref: H,
                                  guildId: Q.id,
                                  channelId: Z.id,
                                  members: eA,
                                  motion: ep,
                              }),
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: Y.xk,
                children: (0, i.jsx)(p.$, {
                    onClick: ec,
                    loading: el,
                    variant: "active",
                    fullWidth: !0,
                    disabled: !ei,
                    text: z.intl.string(z.t.gpqgah),
                }),
            }),
        ],
    });
}
function K(e) {
    let { guildId: t, channelId: n, members: l } = e;
    return l.length > 4
        ? (0, i.jsx)(Z, { guildId: t, channelId: n, members: l })
        : (0, i.jsx)("div", {
              className: Y.WM,
              children: (0, i.jsx)(N.A, {
                  guildId: t,
                  partySize: { knownSize: l.length, unknownSize: 0, totalSize: l.length },
                  maxAvatarsShown: 3,
                  members: l,
              }),
          });
}
function Z(e) {
    let { guildId: t, channelId: n, members: l } = e,
        { triggerRef: a, shouldShow: s, onPopoutHoverOrFocus: r } = (0, H.o)();
    return (0, i.jsx)(H.$, {
        guildId: t,
        channelId: n,
        users: l,
        targetElementRef: a,
        shouldShow: s,
        onHoverOrFocus: r,
        children: (e) =>
            (0, i.jsx)("div", {
                className: Y.WM,
                ...e,
                children: (0, i.jsx)(N.A, {
                    guildId: t,
                    partySize: { knownSize: l.length, unknownSize: 0, totalSize: l.length },
                    maxAvatarsShown: 3,
                    members: l,
                    overflowRef: a,
                }),
            }),
    });
}
function J(e) {
    let { className: t, stream: n } = e,
        { previewUrl: l, isLoading: a } = (0, v.A)(n.guildId, n.channelId, n.ownerId),
        r = null != l && !a;
    return (0, i.jsx)("div", {
        className: s()(t, Y.rr, { [Y.pc]: !r }),
        style: { "--custom-bg-url": r ? `url(${l})` : "unset" },
        children: (0, i.jsx)("div", { className: Y.bW }),
    });
}
