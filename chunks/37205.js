n.d(t, { A: () => z });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(284009),
    o = n.n(s),
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
    I = n(139286),
    E = n(713517),
    v = n(450149),
    b = n(290331),
    T = n(21599),
    y = n(281489),
    S = n(378570),
    N = n(21119),
    j = n(95701),
    L = n(734057),
    R = n(696451),
    P = n(71393),
    w = n(576705),
    M = n(607567),
    D = n(954571),
    k = n(860689),
    O = n(422844),
    U = n(72951),
    B = n(453178),
    G = n(836629),
    F = n(182912),
    H = n(341678),
    V = n(652215),
    q = n(985018),
    W = n(682524);
function z(e) {
    let {
            invite: t,
            currentUserId: n,
            message: r,
            guild: s,
            onTransitionToInviteChannel: d,
            onAcceptInstantInvite: E,
        } = e,
        v = (0, O.xR)("VoiceInviteEmbed"),
        y = a.useRef(null),
        G = s ?? null;
    null == G && null != t.guild && (G = k.DY(t.guild));
    let z = null != t.channel ? (0, j.OY)(t.channel) : null;
    o()(null != G, "Voice Invite Embed must be used in context of a guild."),
        o()(null != z, "Voice Invite Embed must be able to resolve an invite channel.");
    let Q = (0, _.bG)([w.A, L.A], () => {
            let e = L.A.getChannel(z.id);
            return null == e || w.A.canBasicChannel(V.hVb.VIEW_CHANNEL, e);
        }, [z.id]),
        J = (0, _.bG)([M.Ay], () => (Q ? M.Ay.getVoiceStatesForChannelAlt(z.id, G.id) : []), [z.id, G.id, Q]),
        { label: X, sublabel: Z } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                a = n.id === t,
                r = i.length > 0,
                l = i.length;
            return r
                ? {
                      label: a
                          ? q.intl.format(q.t["2RWMFV"], { othersCount: l })
                          : q.intl.format(q.t.Da7tZx, { othersCount: l }),
                  }
                : {
                      label: a ? q.intl.string(q.t.DVDvCD) : q.intl.string(q.t.TY77rq),
                      sublabel: q.intl.string(q.t.wM2WTM),
                  };
        })({ currentUserId: n, author: r.author, voiceStates: J }),
        $ = (0, _.bG)([P.A], () => null != P.A.getGuild(G.id), [G.id]),
        ee = (0, _.bG)([R.Ay], () => b.A.canAcceptInvite([R.Ay], t), [t]),
        et = t.state === V.elq.ACCEPTING,
        { analyticsLocations: en } = (0, C.Ay)(f.A.INVITE_EMBED),
        ei = (0, T._U)(t.code, r.id),
        ea = a.useCallback(() => {
            let e = $ ? "transition" : "accept";
            $ ? d() : E(),
                (0, p.he)(
                    { invite: t, action: e, inviter_id: r.author.id, invite_message_id: r.id, invite_instance_id: ei },
                    en,
                );
        }, [t, r, en, ei, $, d, E]),
        er = a.useCallback(() => {
            $ ? (0, S.iN)(z.id) : E({ autoJoin: !1 }),
                D.default.track(V.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: G.id,
                    invite_channel_id: z.id,
                    invite_instance_id: ei,
                    is_member: $,
                    location_stack: en,
                });
        }, [z.id, G.id, t.code, ei, $, en, E]),
        el = (0, H.A)({ invite: t, message: r, voiceStates: J, guildId: G.id, channelId: z.id }),
        es = v.activityPreviewEnabled && null != el;
    (0, I.A)({
        name: u.ImpressionNames.VOICE_INVITE_EMBED,
        type: u.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: G.id,
            invite_channel_id: z.id,
            invite_instance_id: ei,
            has_active_stream: es,
            location_stack: en,
        },
    });
    let eo = a.useCallback(() => {
            null != el &&
                ($ ? (g.default.selectVoiceChannel(el.channelId), (0, A.Nl)(el)) : E(),
                (0, p.he)(
                    {
                        invite: t,
                        action: $ ? "transition" : "accept",
                        inviter_id: r.author.id,
                        invite_message_id: r.id,
                        invite_instance_id: ei,
                    },
                    [...en, f.A.VOICE_INVITE_STREAM_PREVIEW],
                ));
        }, [el, $, t, r, en, ei, E]),
        ed = (0, _.bG)([x.A], () => x.A.useReducedMotion),
        ec = a.useRef(null),
        [eu, e_] = a.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        em = (0, _.bG)([N.A], () => {
            let e = J.map((e) => e.user),
                t = e.find((e) => e.id === r.author.id),
                n = e
                    .filter((e) => e.id !== r.author.id)
                    .sort((e, t) => {
                        let n = N.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (N.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...n] : n;
        }, [J, r.author.id]),
        eh = a.useMemo(() => c().throttle(e_, 20), [e_]);
    a.useEffect(() => () => eh.cancel(), [eh]);
    let ep = a.useCallback(
            (e) => {
                if (ed) return;
                let t = ec.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    a = 0,
                    r = y.current?.getBoundingClientRect();
                if (null != r) {
                    let n = r.left + r.width / 2,
                        i = r.top + r.height / 2,
                        l = e.clientX - n,
                        s = e.clientY - i;
                    a = 2 * Math.exp(-Math.sqrt(l * l + s * s) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                eh({ percentX: n, percentY: i, proximity: a });
            },
            [ed, eh],
        ),
        eg = a.useCallback(() => {
            eh.cancel(), e_({ percentX: 0, percentY: 0, proximity: 0 });
        }, [eh]);
    return (0, i.jsxs)("div", {
        ref: ec,
        className: l()(W.kL, { [W.VD]: es }),
        onMouseMove: ep,
        onMouseLeave: eg,
        children: [
            (0, i.jsx)("div", { className: W.ys }),
            (0, i.jsx)("div", { className: W.r$, style: { "--custom-number-of-dots": 24 } }),
            es ? (0, i.jsx)(K, { className: W.tB, stream: el }) : null,
            (0, i.jsxs)("div", {
                className: W.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: W.Qs,
                        children: [
                            (0, i.jsx)(U.A, { channel: z, guild: G, onClick: er }),
                            (0, i.jsxs)("div", {
                                className: W.WD,
                                children: [
                                    es ? (0, i.jsx)(Y, { guildId: G.id, channelId: z.id, members: em }) : null,
                                    (0, i.jsx)(h.Text, {
                                        variant: "text-md/medium",
                                        children: (0, i.jsx)(m.A, { lineClamp: es ? 1 : 3, children: X }),
                                    }),
                                    null != Z
                                        ? (0, i.jsx)(h.Text, {
                                              variant: "text-sm/normal",
                                              className: W.$B,
                                              children: (0, i.jsx)(m.A, { children: Z }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    es
                        ? (0, i.jsx)(B.A, { stream: el, currentUserId: n, onClick: eo, className: W.Rh })
                        : (0, i.jsx)("div", {
                              className: W.RE,
                              children: (0, i.jsx)(F.A, {
                                  ref: y,
                                  guildId: G.id,
                                  channelId: z.id,
                                  members: em,
                                  motion: eu,
                              }),
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: W.xk,
                children: (0, i.jsx)(h.Button, {
                    onClick: ea,
                    loading: et,
                    variant: "active",
                    fullWidth: !0,
                    disabled: !ee,
                    text: q.intl.string(q.t.gpqgah),
                }),
            }),
        ],
    });
}
function Y(e) {
    let { guildId: t, channelId: n, members: a } = e;
    return a.length > 4
        ? (0, i.jsx)(Q, { guildId: t, channelId: n, members: a })
        : (0, i.jsx)("div", {
              className: W.WM,
              children: (0, i.jsx)(y.A, {
                  guildId: t,
                  partySize: { knownSize: a.length, unknownSize: 0, totalSize: a.length },
                  maxAvatarsShown: 3,
                  members: a,
              }),
          });
}
function Q(e) {
    let { guildId: t, channelId: n, members: r } = e,
        l = a.useRef(null),
        { isHoveringOrFocusing: s } = (0, E.A)(l);
    return (0, i.jsx)(G.$, {
        guildId: t,
        channelId: n,
        users: r,
        targetElementRef: l,
        shouldShow: s,
        children: (e) =>
            (0, i.jsx)("div", {
                className: W.WM,
                ...e,
                children: (0, i.jsx)(y.A, {
                    guildId: t,
                    partySize: { knownSize: r.length, unknownSize: 0, totalSize: r.length },
                    maxAvatarsShown: 3,
                    members: r,
                    overflowRef: l,
                }),
            }),
    });
}
function K(e) {
    let { className: t, stream: n } = e,
        { previewUrl: a, isLoading: r } = (0, v.A)(n.guildId, n.channelId, n.ownerId),
        s = null != a && !r;
    return (0, i.jsx)("div", {
        className: l()(t, W.rr, { [W.pc]: !s }),
        style: { "--custom-bg-url": s ? `url(${a})` : "unset" },
        children: (0, i.jsx)("div", { className: W.bW }),
    });
}
