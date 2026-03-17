n.d(t, { A: () => U });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(284009),
    o = n.n(s),
    d = n(735438),
    c = n.n(d),
    u = n(311907),
    _ = n(397927),
    m = n(846293),
    h = n(956793),
    p = n(401843),
    g = n(775602),
    A = n(104171),
    x = n(793574),
    f = n(688810),
    C = n(450149),
    I = n(290331),
    E = n(21119),
    v = n(95701),
    b = n(734057),
    T = n(696451),
    S = n(71393),
    y = n(576705),
    N = n(607567),
    j = n(860689),
    L = n(422844),
    R = n(72951),
    P = n(453178),
    M = n(182912),
    D = n(341678),
    w = n(652215),
    O = n(985018),
    k = n(519934);
function U(e) {
    let {
            invite: t,
            currentUserId: n,
            message: r,
            guild: s,
            onTransitionToInviteChannel: d,
            onAcceptInstantInvite: C,
        } = e,
        U = (0, L.xR)("VoiceInviteEmbed"),
        G = s ?? null;
    null == G && null != t.guild && (G = j.DY(t.guild));
    let F = null != t.channel ? (0, v.OY)(t.channel) : null;
    o()(null != G, "Voice Invite Embed must be used in context of a guild."),
        o()(null != F, "Voice Invite Embed must be able to resolve an invite channel.");
    let H = (0, u.bG)([y.A, b.A], () => {
            let e = b.A.getChannel(F.id);
            return null == e || y.A.canBasicChannel(w.hVb.VIEW_CHANNEL, e);
        }, [F.id]),
        V = (0, u.bG)([N.Ay], () => (H ? N.Ay.getVoiceStatesForChannelAlt(F.id, G.id) : []), [F.id, G.id, H]),
        { label: W, sublabel: q } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                r = i.length > 0,
                a = i.some((e) => e.user?.id === n.id),
                s = i.length - !!a;
            return r
                ? l
                    ? {
                          label: a
                              ? O.intl.format(O.t["2RWMFV"], { othersCount: s })
                              : O.intl.format(O.t.IWXzHV, { othersCount: s }),
                      }
                    : {
                          label: a
                              ? O.intl.format(O.t.Da7tZx, { othersCount: s })
                              : O.intl.format(O.t["3VbQvv"], { othersCount: s }),
                      }
                : {
                      label: l ? O.intl.string(O.t.DVDvCD) : O.intl.string(O.t.TY77rq),
                      sublabel: O.intl.string(O.t.wM2WTM),
                  };
        })({ currentUserId: n, author: r.author, voiceStates: V }),
        Y = (0, u.bG)([S.A], () => null != S.A.getGuild(G.id), [G.id]),
        z = (0, u.bG)([T.Ay], () => I.A.canAcceptInvite([T.Ay], t), [t]),
        Q = t.state === w.elq.ACCEPTING,
        { analyticsLocations: K } = (0, f.Ay)(x.A.INVITE_EMBED),
        J = l.useCallback(() => {
            let e = Y ? "transition" : "accept";
            Y ? d() : C(), (0, m.he)({ invite: t, action: e, inviter_id: r.author.id, invite_message_id: r.id }, K);
        }, [t, r, K, Y, d, C]),
        X = (0, D.A)({ invite: t, message: r, voiceStates: V, guildId: G.id, channelId: F.id }),
        Z = U.activityPreviewEnabled && null != X,
        $ = l.useCallback(() => {
            null != X &&
                (Y ? (h.default.selectVoiceChannel(X.channelId), (0, p.Nl)(X)) : C(),
                (0, m.he)(
                    { invite: t, action: Y ? "watch" : "accept", inviter_id: r.author.id, invite_message_id: r.id },
                    K,
                ));
        }, [X, Y, t, r, K, C]),
        ee = (0, u.bG)([g.A], () => g.A.useReducedMotion),
        et = l.useRef(null),
        en = l.useRef(null),
        [ei, el] = l.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        er = l.useMemo(() => c().throttle(el, 20), [el]);
    l.useEffect(() => () => er.cancel(), [er]);
    let ea = l.useCallback(
            (e) => {
                if (ee) return;
                let t = et.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    l = 0,
                    r = en.current?.getBoundingClientRect();
                if (null != r) {
                    let n = r.left + r.width / 2,
                        i = r.top + r.height / 2,
                        a = e.clientX - n,
                        s = e.clientY - i;
                    l = 2 * Math.exp(-Math.sqrt(a * a + s * s) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                er({ percentX: n, percentY: i, proximity: l });
            },
            [ee, er],
        ),
        es = l.useCallback(() => {
            er.cancel(), el({ percentX: 0, percentY: 0, proximity: 0 });
        }, [er]),
        eo = (0, u.bG)([E.A], () => {
            let e = r.author.id,
                t = V.map((e) => e.user),
                n = t.find((t) => t.id === e),
                i = t
                    .filter((t) => t.id !== e)
                    .sort((e, t) => {
                        let n = E.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (E.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != n ? [n, ...i] : i;
        }, [V, r.author.id]);
    return (0, i.jsxs)("div", {
        ref: et,
        className: a()(k.kL, { [k.VD]: Z }),
        onMouseMove: ea,
        onMouseLeave: es,
        children: [
            (0, i.jsx)("div", { className: k.ys }),
            (0, i.jsx)("div", { className: k.r$, style: { "--custom-number-of-dots": 24 } }),
            Z ? (0, i.jsx)(B, { className: k.tB, stream: X }) : null,
            (0, i.jsxs)("div", {
                className: k.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: k.Qs,
                        children: [
                            (0, i.jsx)(R.A, { channel: F, guild: G, onClick: d }),
                            (0, i.jsxs)("div", {
                                className: k.WD,
                                children: [
                                    Z
                                        ? (0, i.jsx)(A.Ay, {
                                              className: k.WM,
                                              showDefaultAvatarsForNullUsers: !0,
                                              guildId: F.guild_id,
                                              users: eo,
                                              count: V.length,
                                              max: 3,
                                          })
                                        : null,
                                    (0, i.jsx)(_.Text, { variant: "text-md/medium", children: W }),
                                    null != q
                                        ? (0, i.jsx)(_.Text, {
                                              variant: "text-sm/normal",
                                              className: k.$B,
                                              children: q,
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    Z
                        ? (0, i.jsx)(P.A, { stream: X, currentUserId: n, onClick: $, className: k.Rh })
                        : (0, i.jsx)(M.A, { voiceStates: V, guildId: G.id, ref: en, motion: ei }),
                ],
            }),
            (0, i.jsx)("div", {
                className: k.xk,
                children: (0, i.jsx)(_.Button, {
                    onClick: J,
                    loading: Q,
                    variant: "active",
                    fullWidth: !0,
                    disabled: !z,
                    text: O.intl.string(O.t.gpqgah),
                }),
            }),
        ],
    });
}
function B(e) {
    let { className: t, stream: n } = e,
        { previewUrl: l, isLoading: r } = (0, C.A)(n.guildId, n.channelId, n.ownerId),
        s = null != l && !r;
    return (0, i.jsx)("div", {
        className: a()(t, k.rr, { [k.pc]: !s }),
        style: { "--custom-bg-url": s ? `url(${l})` : "unset" },
        children: (0, i.jsx)("div", { className: k.bW }),
    });
}
