n.d(t, { A: () => B });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
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
    A = n(793574),
    x = n(688810),
    f = n(450149),
    C = n(290331),
    I = n(281489),
    E = n(378570),
    v = n(21119),
    b = n(95701),
    T = n(734057),
    y = n(696451),
    S = n(71393),
    N = n(576705),
    j = n(607567),
    L = n(860689),
    R = n(422844),
    P = n(72951),
    M = n(453178),
    w = n(182912),
    D = n(341678),
    k = n(652215),
    O = n(985018),
    U = n(982827);
function B(e) {
    let {
            invite: t,
            currentUserId: n,
            message: a,
            guild: s,
            onTransitionToInviteChannel: d,
            onAcceptInstantInvite: f,
        } = e,
        B = (0, R.xR)("VoiceInviteEmbed"),
        F = s ?? null;
    null == F && null != t.guild && (F = L.DY(t.guild));
    let H = null != t.channel ? (0, b.OY)(t.channel) : null;
    o()(null != F, "Voice Invite Embed must be used in context of a guild."),
        o()(null != H, "Voice Invite Embed must be able to resolve an invite channel.");
    let V = (0, u.bG)([N.A, T.A], () => {
            let e = T.A.getChannel(H.id);
            return null == e || N.A.canBasicChannel(k.hVb.VIEW_CHANNEL, e);
        }, [H.id]),
        q = (0, u.bG)([j.Ay], () => (V ? j.Ay.getVoiceStatesForChannelAlt(H.id, F.id) : []), [H.id, F.id, V]),
        { label: W, sublabel: z } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                r = n.id === t,
                a = i.length > 0,
                l = i.length;
            return a
                ? {
                      label: r
                          ? O.intl.format(O.t["2RWMFV"], { othersCount: l })
                          : O.intl.format(O.t.Da7tZx, { othersCount: l }),
                  }
                : {
                      label: r ? O.intl.string(O.t.DVDvCD) : O.intl.string(O.t.TY77rq),
                      sublabel: O.intl.string(O.t.wM2WTM),
                  };
        })({ currentUserId: n, author: a.author, voiceStates: q }),
        Y = (0, u.bG)([S.A], () => null != S.A.getGuild(F.id), [F.id]),
        Q = (0, u.bG)([y.Ay], () => C.A.canAcceptInvite([y.Ay], t), [t]),
        K = t.state === k.elq.ACCEPTING,
        { analyticsLocations: J } = (0, x.Ay)(A.A.INVITE_EMBED),
        X = r.useCallback(() => {
            let e = Y ? "transition" : "accept";
            Y ? d() : f(), (0, m.he)({ invite: t, action: e, inviter_id: a.author.id, invite_message_id: a.id }, J);
        }, [t, a, J, Y, d, f]),
        Z = r.useCallback(() => {
            Y ? (0, E.iN)(H.id) : f({ autoJoin: !1 });
        }, [H.id, Y, f]),
        $ = (0, D.A)({ invite: t, message: a, voiceStates: q, guildId: F.id, channelId: H.id }),
        ee = B.activityPreviewEnabled && null != $,
        et = r.useCallback(() => {
            null != $ &&
                (Y ? (h.default.selectVoiceChannel($.channelId), (0, p.Nl)($)) : f(),
                (0, m.he)(
                    { invite: t, action: Y ? "watch" : "accept", inviter_id: a.author.id, invite_message_id: a.id },
                    J,
                ));
        }, [$, Y, t, a, J, f]),
        en = (0, u.bG)([g.A], () => g.A.useReducedMotion),
        ei = r.useRef(null),
        er = r.useRef(null),
        [ea, el] = r.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        es = r.useMemo(() => c().throttle(el, 20), [el]);
    r.useEffect(() => () => es.cancel(), [es]);
    let eo = r.useCallback(
            (e) => {
                if (en) return;
                let t = ei.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    r = 0,
                    a = er.current?.getBoundingClientRect();
                if (null != a) {
                    let n = a.left + a.width / 2,
                        i = a.top + a.height / 2,
                        l = e.clientX - n,
                        s = e.clientY - i;
                    r = 2 * Math.exp(-Math.sqrt(l * l + s * s) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                es({ percentX: n, percentY: i, proximity: r });
            },
            [en, es],
        ),
        ed = r.useCallback(() => {
            es.cancel(), el({ percentX: 0, percentY: 0, proximity: 0 });
        }, [es]),
        ec = (0, u.bG)([v.A], () => {
            let e = a.author.id,
                t = q.map((e) => e.user),
                n = t.find((t) => t.id === e),
                i = t
                    .filter((t) => t.id !== e)
                    .sort((e, t) => {
                        let n = v.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                        return (v.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                    });
            return null != n ? [n, ...i] : i;
        }, [q, a.author.id]);
    return (0, i.jsxs)("div", {
        ref: ei,
        className: l()(U.kL, { [U.VD]: ee }),
        onMouseMove: eo,
        onMouseLeave: ed,
        children: [
            (0, i.jsx)("div", { className: U.ys }),
            (0, i.jsx)("div", { className: U.r$, style: { "--custom-number-of-dots": 24 } }),
            ee ? (0, i.jsx)(G, { className: U.tB, stream: $ }) : null,
            (0, i.jsxs)("div", {
                className: U.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: U.Qs,
                        children: [
                            (0, i.jsx)(P.A, { channel: H, guild: F, onClick: Z }),
                            (0, i.jsxs)("div", {
                                className: U.WD,
                                children: [
                                    ee
                                        ? (0, i.jsx)("div", {
                                              className: U.WM,
                                              children: (0, i.jsx)(I.A, {
                                                  guildId: F.id,
                                                  partySize: {
                                                      knownSize: ec.length,
                                                      unknownSize: 0,
                                                      totalSize: ec.length,
                                                  },
                                                  maxAvatarsShown: 3,
                                                  members: ec,
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(_.Text, { variant: "text-md/medium", children: W }),
                                    null != z
                                        ? (0, i.jsx)(_.Text, {
                                              variant: "text-sm/normal",
                                              className: U.$B,
                                              children: z,
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    ee
                        ? (0, i.jsx)(M.A, { stream: $, currentUserId: n, onClick: et, className: U.Rh })
                        : (0, i.jsx)(w.A, { voiceStates: q, guildId: F.id, ref: er, motion: ea }),
                ],
            }),
            (0, i.jsx)("div", {
                className: U.xk,
                children: (0, i.jsx)(_.Button, {
                    onClick: X,
                    loading: K,
                    variant: "active",
                    fullWidth: !0,
                    disabled: !Q,
                    text: O.intl.string(O.t.gpqgah),
                }),
            }),
        ],
    });
}
function G(e) {
    let { className: t, stream: n } = e,
        { previewUrl: r, isLoading: a } = (0, f.A)(n.guildId, n.channelId, n.ownerId),
        s = null != r && !a;
    return (0, i.jsx)("div", {
        className: l()(t, U.rr, { [U.pc]: !s }),
        style: { "--custom-bg-url": s ? `url(${r})` : "unset" },
        children: (0, i.jsx)("div", { className: U.bW }),
    });
}
