(n.d(t, { H: () => v }), n(35282));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(904245),
    c = n(287734),
    u = n(957730),
    d = n(739566),
    p = n(779125),
    m = n(599706),
    f = n(703656),
    g = n(592125),
    _ = n(430824),
    h = n(594174),
    b = n(938475),
    E = n(5192),
    y = n(981631),
    x = n(388032),
    C = n(653072);
function v(e) {
    var t, n, i, v, O, j, I, S, T, N;
    let { message: P, channel: A } = e,
        w =
            null == (i = P.embeds[0]) ||
            null == (n = i.fields) ||
            null ==
                (t = n.find((e) => {
                    let { rawName: t } = e;
                    return 'guild_id' === t;
                }))
                ? void 0
                : t.rawValue,
        Z =
            null == (j = P.embeds[0]) ||
            null == (O = j.fields) ||
            null ==
                (v = O.find((e) => {
                    let { rawName: t } = e;
                    return 'channel_id' === t;
                }))
                ? void 0
                : v.rawValue,
        R = (0, a.e7)([_.Z], () => _.Z.getGuild(w)),
        k = (0, a.e7)([g.Z], () => g.Z.getChannel(Z)),
        L = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        D = (0, a.e7)([], () => P.author.id === (null == L ? void 0 : L.id)),
        M = null == (I = A.recipients) ? void 0 : I.find((e) => e !== P.author.id),
        U = (0, a.e7)([h.default], () => (null != M ? h.default.getUser(M) : null)),
        F = (0, d.ZP)(P),
        B = (0, E._T)(A.getGuildId(), A.id, U),
        G = (0, a.Wu)([b.ZP], () => (null != k ? b.ZP.getVoiceStatesForChannel(k) : []), [k]),
        H = G.some((e) => e.user.id === (null == L ? void 0 : L.id)),
        V =
            null == (N = P.embeds[0]) ||
            null == (T = N.fields) ||
            null ==
                (S = T.find((e) => {
                    let { rawName: t } = e;
                    return 'voice_user_ids' === t;
                }))
                ? void 0
                : S.rawValue,
        z = null != V ? V.split(',') : [],
        W = (0, a.Wu)([h.default], () => z.map((e) => h.default.getUser(e)).filter(Boolean)),
        K = D && null != U ? x.intl.formatToPlainString(x.t['er/cHx'], { username: B }) : x.intl.formatToPlainString(x.t.noNjkZ, { username: F.nick }),
        Y = null != R && null != k,
        X = null;
    ((X = Y ? (D || H ? x.intl.format(x.t.CaLQqK, { channelHook: (e, t) => (0, r.jsx)(p.Z, { channel: null != k ? k : void 0 }, t) }) : x.intl.format(x.t.VugXpK, { channelHook: (e, t) => (0, r.jsx)(p.Z, { channel: null != k ? k : void 0 }, t) })) : x.intl.string(x.t['tHT/Vl'])), 0 === G.length && (X = D ? x.intl.string(x.t.IE2uZW) : x.intl.string(x.t.QVhmGx)));
    let q = D ? x.intl.string(x.t['00XIbm']) : x.intl.string(x.t['7CrE9/']);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: C.card,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: K
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: X
                    }),
                    G.length > 0
                        ? (0, r.jsx)('div', {
                              className: C.participants,
                              children: (0, r.jsx)(m.Z, {
                                  guildId: w,
                                  partySize: {
                                      knownSize: G.length,
                                      unknownSize: 0,
                                      totalSize: G.length
                                  },
                                  members: G.map((e) => e.user),
                                  maxAvatarsShown: 5
                              })
                          })
                        : (0, r.jsx)('div', {
                              className: l()(C.participants, C.disabled),
                              children: (0, r.jsx)(m.Z, {
                                  guildId: w,
                                  partySize: {
                                      knownSize: W.length,
                                      unknownSize: z.length - W.length,
                                      totalSize: z.length
                                  },
                                  members: W,
                                  maxAvatarsShown: 5
                              })
                          })
                ]
            }),
            (0, r.jsxs)('div', {
                className: C.actions,
                children: [
                    (0, r.jsxs)(o.zxk, {
                        color: o.zxk.Colors.BRAND,
                        onClick: () => {
                            null != Z && null != w && ((0, f.uL)(y.Z5c.CHANNEL(w, Z)), c.default.selectVoiceChannel(Z));
                        },
                        className: C.button,
                        innerClassName: C.buttonInner,
                        disabled: H || !Y,
                        children: [
                            (0, r.jsx)(o.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            x.intl.string(x.t.zIeJq6)
                        ]
                    }),
                    (0, r.jsx)(o.zxk, {
                        color: o.zxk.Colors.PRIMARY,
                        onClick: () => {
                            s.Z.sendMessage(A.id, u.ZP.parse(A, '\uD83D\uDC4B'));
                        },
                        className: C.button,
                        children: q
                    })
                ]
            })
        ]
    });
}
