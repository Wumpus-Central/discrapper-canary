n.d(t, { A: () => V });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(284009),
    o = n.n(s),
    d = n(735438),
    c = n.n(d),
    u = n(311907),
    _ = n(3026),
    m = n(397927),
    h = n(846293),
    p = n(956793),
    g = n(401843),
    A = n(775602),
    x = n(793574),
    f = n(688810),
    C = n(713517),
    I = n(450149),
    E = n(290331),
    b = n(21599),
    v = n(281489),
    T = n(378570),
    y = n(21119),
    S = n(95701),
    N = n(734057),
    j = n(696451),
    L = n(71393),
    R = n(576705),
    P = n(607567),
    w = n(860689),
    M = n(422844),
    D = n(72951),
    k = n(453178),
    O = n(836629),
    U = n(182912),
    B = n(341678),
    G = n(652215),
    F = n(985018),
    H = n(682524);
function V(e) {
    let {
            invite: t,
            currentUserId: n,
            message: r,
            guild: s,
            onTransitionToInviteChannel: d,
            onAcceptInstantInvite: C,
        } = e,
        I = (0, M.xR)("VoiceInviteEmbed"),
        v = a.useRef(null),
        O = s ?? null;
    null == O && null != t.guild && (O = w.DY(t.guild));
    let V = null != t.channel ? (0, S.OY)(t.channel) : null;
    o()(null != O, "Voice Invite Embed must be used in context of a guild."),
        o()(null != V, "Voice Invite Embed must be able to resolve an invite channel.");
    let W = (0, u.bG)([R.A, N.A], () => {
            let e = N.A.getChannel(V.id);
            return null == e || R.A.canBasicChannel(G.hVb.VIEW_CHANNEL, e);
        }, [V.id]),
        Y = (0, u.bG)([P.Ay], () => (W ? P.Ay.getVoiceStatesForChannelAlt(V.id, O.id) : []), [V.id, O.id, W]),
        { label: Q, sublabel: K } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                a = n.id === t,
                r = i.length > 0,
                l = i.length;
            return r
                ? {
                      label: a
                          ? F.intl.format(F.t["2RWMFV"], { othersCount: l })
                          : F.intl.format(F.t.Da7tZx, { othersCount: l }),
                  }
                : {
                      label: a ? F.intl.string(F.t.DVDvCD) : F.intl.string(F.t.TY77rq),
                      sublabel: F.intl.string(F.t.wM2WTM),
                  };
        })({ currentUserId: n, author: r.author, voiceStates: Y }),
        J = (0, u.bG)([L.A], () => null != L.A.getGuild(O.id), [O.id]),
        X = (0, u.bG)([j.Ay], () => E.A.canAcceptInvite([j.Ay], t), [t]),
        Z = t.state === G.elq.ACCEPTING,
        { analyticsLocations: $ } = (0, f.Ay)(x.A.INVITE_EMBED),
        ee = a.useCallback(() => {
            let e = J ? "transition" : "accept";
            J ? d() : C(),
                (0, h.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: r.author.id,
                        invite_message_id: r.id,
                        invite_instance_id: (0, b._U)(t.code, r.id),
                    },
                    $,
                );
        }, [t, r, $, J, d, C]),
        et = a.useCallback(() => {
            J ? (0, T.iN)(V.id) : C({ autoJoin: !1 });
        }, [V.id, J, C]),
        en = (0, B.A)({ invite: t, message: r, voiceStates: Y, guildId: O.id, channelId: V.id }),
        ei = I.activityPreviewEnabled && null != en,
        ea = a.useCallback(() => {
            null != en &&
                (J ? (p.default.selectVoiceChannel(en.channelId), (0, g.Nl)(en)) : C(),
                (0, h.he)(
                    {
                        invite: t,
                        action: J ? "watch" : "accept",
                        inviter_id: r.author.id,
                        invite_message_id: r.id,
                        invite_instance_id: (0, b._U)(t.code, r.id),
                    },
                    $,
                ));
        }, [en, J, t, r, $, C]),
        er = (0, u.bG)([A.A], () => A.A.useReducedMotion),
        el = a.useRef(null),
        [es, eo] = a.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        ed = (0, u.bG)([y.A], () => {
            let e = Y.map((e) => e.user),
                t = e.find((e) => e.id === r.author.id),
                n = e
                    .filter((e) => e.id !== r.author.id)
                    .sort((e, t) => {
                        let n = y.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (y.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != t ? [t, ...n] : n;
        }, [Y, r.author.id]),
        ec = a.useMemo(() => c().throttle(eo, 20), [eo]);
    a.useEffect(() => () => ec.cancel(), [ec]);
    let eu = a.useCallback(
            (e) => {
                if (er) return;
                let t = el.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    a = 0,
                    r = v.current?.getBoundingClientRect();
                if (null != r) {
                    let n = r.left + r.width / 2,
                        i = r.top + r.height / 2,
                        l = e.clientX - n,
                        s = e.clientY - i;
                    a = 2 * Math.exp(-Math.sqrt(l * l + s * s) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                ec({ percentX: n, percentY: i, proximity: a });
            },
            [er, ec],
        ),
        e_ = a.useCallback(() => {
            ec.cancel(), eo({ percentX: 0, percentY: 0, proximity: 0 });
        }, [ec]);
    return (0, i.jsxs)("div", {
        ref: el,
        className: l()(H.kL, { [H.VD]: ei }),
        onMouseMove: eu,
        onMouseLeave: e_,
        children: [
            (0, i.jsx)("div", { className: H.ys }),
            (0, i.jsx)("div", { className: H.r$, style: { "--custom-number-of-dots": 24 } }),
            ei ? (0, i.jsx)(z, { className: H.tB, stream: en }) : null,
            (0, i.jsxs)("div", {
                className: H.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: H.Qs,
                        children: [
                            (0, i.jsx)(D.A, { channel: V, guild: O, onClick: et }),
                            (0, i.jsxs)("div", {
                                className: H.WD,
                                children: [
                                    ei ? (0, i.jsx)(q, { guildId: O.id, channelId: V.id, members: ed }) : null,
                                    (0, i.jsx)(m.Text, {
                                        variant: "text-md/medium",
                                        children: (0, i.jsx)(_.A, { lineClamp: ei ? 1 : 3, children: Q }),
                                    }),
                                    null != K
                                        ? (0, i.jsx)(m.Text, {
                                              variant: "text-sm/normal",
                                              className: H.$B,
                                              children: (0, i.jsx)(_.A, { children: K }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    ei
                        ? (0, i.jsx)(k.A, { stream: en, currentUserId: n, onClick: ea, className: H.Rh })
                        : (0, i.jsx)("div", {
                              className: H.RE,
                              children: (0, i.jsx)(U.A, {
                                  ref: v,
                                  guildId: O.id,
                                  channelId: V.id,
                                  members: ed,
                                  motion: es,
                              }),
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: H.xk,
                children: (0, i.jsx)(m.Button, {
                    onClick: ee,
                    loading: Z,
                    variant: "active",
                    fullWidth: !0,
                    disabled: !X,
                    text: F.intl.string(F.t.gpqgah),
                }),
            }),
        ],
    });
}
function q(e) {
    let { guildId: t, channelId: n, members: a } = e;
    return a.length > 4
        ? (0, i.jsx)(W, { guildId: t, channelId: n, members: a })
        : (0, i.jsx)("div", {
              className: H.WM,
              children: (0, i.jsx)(v.A, {
                  guildId: t,
                  partySize: { knownSize: a.length, unknownSize: 0, totalSize: a.length },
                  maxAvatarsShown: 3,
                  members: a,
              }),
          });
}
function W(e) {
    let { guildId: t, channelId: n, members: r } = e,
        l = a.useRef(null),
        { isHoveringOrFocusing: s } = (0, C.A)(l);
    return (0, i.jsx)(O.$, {
        guildId: t,
        channelId: n,
        users: r,
        targetElementRef: l,
        shouldShow: s,
        children: (e) =>
            (0, i.jsx)("div", {
                className: H.WM,
                ...e,
                children: (0, i.jsx)(v.A, {
                    guildId: t,
                    partySize: { knownSize: r.length, unknownSize: 0, totalSize: r.length },
                    maxAvatarsShown: 3,
                    members: r,
                    overflowRef: l,
                }),
            }),
    });
}
function z(e) {
    let { className: t, stream: n } = e,
        { previewUrl: a, isLoading: r } = (0, I.A)(n.guildId, n.channelId, n.ownerId),
        s = null != a && !r;
    return (0, i.jsx)("div", {
        className: l()(t, H.rr, { [H.pc]: !s }),
        style: { "--custom-bg-url": s ? `url(${a})` : "unset" },
        children: (0, i.jsx)("div", { className: H.bW }),
    });
}
