n.d(t, { H: () => C }), n(35282);
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
    h = n(592125),
    g = n(430824),
    _ = n(594174),
    b = n(938475),
    x = n(5192),
    y = n(981631),
    E = n(388032),
    v = n(653072);
function C(e) {
    var t, n, i, C, O, j, S, I, T, N;
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
                (C = O.find((e) => {
                    let { rawName: t } = e;
                    return 'channel_id' === t;
                }))
                ? void 0
                : C.rawValue,
        R = (0, a.e7)([g.Z], () => g.Z.getGuild(w)),
        k = (0, a.e7)([h.Z], () => h.Z.getChannel(Z)),
        L = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        D = (0, a.e7)([], () => P.author.id === (null == L ? void 0 : L.id)),
        M = null == (S = A.recipients) ? void 0 : S.find((e) => e !== P.author.id),
        U = (0, a.e7)([_.default], () => (null != M ? _.default.getUser(M) : null)),
        F = (0, d.ZP)(P),
        B = (0, x._T)(A.getGuildId(), A.id, U),
        G = (0, a.Wu)([b.ZP], () => (null != k ? b.ZP.getVoiceStatesForChannel(k) : []), [k]),
        H = G.some((e) => e.user.id === (null == L ? void 0 : L.id)),
        V =
            null == (N = P.embeds[0]) ||
            null == (T = N.fields) ||
            null ==
                (I = T.find((e) => {
                    let { rawName: t } = e;
                    return 'voice_user_ids' === t;
                }))
                ? void 0
                : I.rawValue,
        z = null != V ? V.split(',') : [],
        W = (0, a.Wu)([_.default], () => z.map((e) => _.default.getUser(e)).filter(Boolean)),
        K = D && null != U ? E.intl.formatToPlainString(E.t['er/cHx'], { username: B }) : E.intl.formatToPlainString(E.t.noNjkZ, { username: F.nick }),
        Y = null != R && null != k,
        q = null;
    (q = Y ? (D || H ? E.intl.format(E.t.CaLQqK, { channelHook: (e, t) => (0, r.jsx)(p.Z, { channel: null != k ? k : void 0 }, t) }) : E.intl.format(E.t.VugXpK, { channelHook: (e, t) => (0, r.jsx)(p.Z, { channel: null != k ? k : void 0 }, t) })) : E.intl.string(E.t['tHT/Vl'])), 0 === G.length && (q = D ? E.intl.string(E.t.IE2uZW) : E.intl.string(E.t.QVhmGx));
    let X = D ? E.intl.string(E.t['00XIbm']) : E.intl.string(E.t['7CrE9/']);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: v.card,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: K
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: q
                    }),
                    G.length > 0
                        ? (0, r.jsx)('div', {
                              className: v.participants,
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
                              className: l()(v.participants, v.disabled),
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
                className: v.actions,
                children: [
                    (0, r.jsxs)(o.zxk, {
                        color: o.zxk.Colors.BRAND,
                        onClick: () => {
                            null != Z && null != w && ((0, f.uL)(y.Z5c.CHANNEL(w, Z)), c.default.selectVoiceChannel(Z));
                        },
                        className: v.button,
                        innerClassName: v.buttonInner,
                        disabled: H || !Y,
                        children: [
                            (0, r.jsx)(o.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            E.intl.string(E.t.zIeJq6)
                        ]
                    }),
                    (0, r.jsx)(o.zxk, {
                        color: o.zxk.Colors.PRIMARY,
                        onClick: () => {
                            s.Z.sendMessage(A.id, u.ZP.parse(A, '\uD83D\uDC4B'));
                        },
                        className: v.button,
                        children: X
                    })
                ]
            })
        ]
    });
}
