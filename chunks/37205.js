n.d(t, { A: () => G });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
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
    C = n(450149),
    E = n(290331),
    I = n(281489),
    v = n(378570),
    b = n(21119),
    T = n(95701),
    y = n(734057),
    S = n(696451),
    N = n(71393),
    j = n(576705),
    L = n(607567),
    R = n(860689),
    P = n(422844),
    M = n(72951),
    w = n(453178),
    D = n(182912),
    k = n(341678),
    O = n(652215),
    U = n(985018),
    B = n(982827);
function G(e) {
    let {
            invite: t,
            currentUserId: n,
            message: a,
            guild: s,
            onTransitionToInviteChannel: d,
            onAcceptInstantInvite: C,
        } = e,
        G = (0, P.xR)("VoiceInviteEmbed"),
        H = s ?? null;
    null == H && null != t.guild && (H = R.DY(t.guild));
    let V = null != t.channel ? (0, T.OY)(t.channel) : null;
    o()(null != H, "Voice Invite Embed must be used in context of a guild."),
        o()(null != V, "Voice Invite Embed must be able to resolve an invite channel.");
    let q = (0, u.bG)([j.A, y.A], () => {
            let e = y.A.getChannel(V.id);
            return null == e || j.A.canBasicChannel(O.hVb.VIEW_CHANNEL, e);
        }, [V.id]),
        W = (0, u.bG)([L.Ay], () => (q ? L.Ay.getVoiceStatesForChannelAlt(V.id, H.id) : []), [V.id, H.id, q]),
        { label: Y, sublabel: z } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                r = n.id === t,
                a = i.length > 0,
                l = i.length;
            return a
                ? {
                      label: r
                          ? U.intl.format(U.t["2RWMFV"], { othersCount: l })
                          : U.intl.format(U.t.Da7tZx, { othersCount: l }),
                  }
                : {
                      label: r ? U.intl.string(U.t.DVDvCD) : U.intl.string(U.t.TY77rq),
                      sublabel: U.intl.string(U.t.wM2WTM),
                  };
        })({ currentUserId: n, author: a.author, voiceStates: W }),
        Q = (0, u.bG)([N.A], () => null != N.A.getGuild(H.id), [H.id]),
        K = (0, u.bG)([S.Ay], () => E.A.canAcceptInvite([S.Ay], t), [t]),
        J = t.state === O.elq.ACCEPTING,
        { analyticsLocations: X } = (0, f.Ay)(x.A.INVITE_EMBED),
        Z = r.useCallback(() => {
            let e = Q ? "transition" : "accept";
            Q ? d() : C(), (0, h.he)({ invite: t, action: e, inviter_id: a.author.id, invite_message_id: a.id }, X);
        }, [t, a, X, Q, d, C]),
        $ = r.useCallback(() => {
            Q ? (0, v.iN)(V.id) : C({ autoJoin: !1 });
        }, [V.id, Q, C]),
        ee = (0, k.A)({ invite: t, message: a, voiceStates: W, guildId: H.id, channelId: V.id }),
        et = G.activityPreviewEnabled && null != ee,
        en = r.useCallback(() => {
            null != ee &&
                (Q ? (p.default.selectVoiceChannel(ee.channelId), (0, g.Nl)(ee)) : C(),
                (0, h.he)(
                    { invite: t, action: Q ? "watch" : "accept", inviter_id: a.author.id, invite_message_id: a.id },
                    X,
                ));
        }, [ee, Q, t, a, X, C]),
        ei = (0, u.bG)([A.A], () => A.A.useReducedMotion),
        er = r.useRef(null),
        ea = r.useRef(null),
        [el, es] = r.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        eo = r.useMemo(() => c().throttle(es, 20), [es]);
    r.useEffect(() => () => eo.cancel(), [eo]);
    let ed = r.useCallback(
            (e) => {
                if (ei) return;
                let t = er.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    r = 0,
                    a = ea.current?.getBoundingClientRect();
                if (null != a) {
                    let n = a.left + a.width / 2,
                        i = a.top + a.height / 2,
                        l = e.clientX - n,
                        s = e.clientY - i;
                    r = 2 * Math.exp(-Math.sqrt(l * l + s * s) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                eo({ percentX: n, percentY: i, proximity: r });
            },
            [ei, eo],
        ),
        ec = r.useCallback(() => {
            eo.cancel(), es({ percentX: 0, percentY: 0, proximity: 0 });
        }, [eo]),
        eu = (0, u.bG)([b.A], () => {
            let e = a.author.id,
                t = W.map((e) => e.user),
                n = t.find((t) => t.id === e),
                i = t
                    .filter((t) => t.id !== e)
                    .sort((e, t) => {
                        let n = b.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (b.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != n ? [n, ...i] : i;
        }, [W, a.author.id]);
    return (0, i.jsxs)("div", {
        ref: er,
        className: l()(B.kL, { [B.VD]: et }),
        onMouseMove: ed,
        onMouseLeave: ec,
        children: [
            (0, i.jsx)("div", { className: B.ys }),
            (0, i.jsx)("div", { className: B.r$, style: { "--custom-number-of-dots": 24 } }),
            et ? (0, i.jsx)(F, { className: B.tB, stream: ee }) : null,
            (0, i.jsxs)("div", {
                className: B.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: B.Qs,
                        children: [
                            (0, i.jsx)(M.A, { channel: V, guild: H, onClick: $ }),
                            (0, i.jsxs)("div", {
                                className: B.WD,
                                children: [
                                    et
                                        ? (0, i.jsx)("div", {
                                              className: B.WM,
                                              children: (0, i.jsx)(I.A, {
                                                  guildId: H.id,
                                                  partySize: {
                                                      knownSize: eu.length,
                                                      unknownSize: 0,
                                                      totalSize: eu.length,
                                                  },
                                                  maxAvatarsShown: 3,
                                                  members: eu,
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(m.Text, {
                                        variant: "text-md/medium",
                                        children: (0, i.jsx)(_.A, { lineClamp: et ? 1 : 3, children: Y }),
                                    }),
                                    null != z
                                        ? (0, i.jsx)(m.Text, {
                                              variant: "text-sm/normal",
                                              className: B.$B,
                                              children: (0, i.jsx)(_.A, { children: z }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    et
                        ? (0, i.jsx)(w.A, { stream: ee, currentUserId: n, onClick: en, className: B.Rh })
                        : (0, i.jsx)("div", {
                              className: B.RE,
                              children: (0, i.jsx)(D.A, { voiceStates: W, guildId: H.id, ref: ea, motion: el }),
                          }),
                ],
            }),
            (0, i.jsx)("div", {
                className: B.xk,
                children: (0, i.jsx)(m.Button, {
                    onClick: Z,
                    loading: J,
                    variant: "active",
                    fullWidth: !0,
                    disabled: !K,
                    text: U.intl.string(U.t.gpqgah),
                }),
            }),
        ],
    });
}
function F(e) {
    let { className: t, stream: n } = e,
        { previewUrl: r, isLoading: a } = (0, C.A)(n.guildId, n.channelId, n.ownerId),
        s = null != r && !a;
    return (0, i.jsx)("div", {
        className: l()(t, B.rr, { [B.pc]: !s }),
        style: { "--custom-bg-url": s ? `url(${r})` : "unset" },
        children: (0, i.jsx)("div", { className: B.bW }),
    });
}
