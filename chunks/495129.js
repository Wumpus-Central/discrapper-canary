n.d(t, { H: () => O }), n(35282);
var r = n(200651);
n(192379);
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
    v = n(388032),
    E = n(653072);
function O(e) {
    var t, n, i, O, j, C, S, I, N, T;
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
            null == (C = P.embeds[0]) ||
            null == (j = C.fields) ||
            null ==
                (O = j.find((e) => {
                    let { rawName: t } = e;
                    return 'channel_id' === t;
                }))
                ? void 0
                : O.rawValue,
        R = (0, a.e7)([g.Z], () => g.Z.getGuild(w)),
        k = (0, a.e7)([h.Z], () => h.Z.getChannel(Z)),
        D = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        L = (0, a.e7)([], () => P.author.id === (null == D ? void 0 : D.id)),
        M = null == (S = A.recipients) ? void 0 : S.find((e) => e !== P.author.id),
        U = (0, a.e7)([_.default], () => (null != M ? _.default.getUser(M) : null)),
        F = (0, d.ZP)(P),
        B = (0, x._T)(A.getGuildId(), A.id, U),
        G = (0, a.Wu)([b.ZP], () => (null != k ? b.ZP.getVoiceStatesForChannel(k) : []), [k]),
        H = G.some((e) => e.user.id === (null == D ? void 0 : D.id)),
        V =
            null == (T = P.embeds[0]) ||
            null == (N = T.fields) ||
            null ==
                (I = N.find((e) => {
                    let { rawName: t } = e;
                    return 'voice_user_ids' === t;
                }))
                ? void 0
                : I.rawValue,
        z = null != V ? V.split(',') : [],
        W = (0, a.Wu)([_.default], () => z.map((e) => _.default.getUser(e)).filter(Boolean)),
        K = L && null != U ? v.intl.formatToPlainString(v.t['er/cHx'], { username: B }) : v.intl.formatToPlainString(v.t.noNjkZ, { username: F.nick }),
        Y = null != R && null != k,
        X = null;
    (X = Y ? (L || H ? v.intl.format(v.t.CaLQqK, { channelHook: (e, t) => (0, r.jsx)(p.Z, { channel: null != k ? k : void 0 }, t) }) : v.intl.format(v.t.VugXpK, { channelHook: (e, t) => (0, r.jsx)(p.Z, { channel: null != k ? k : void 0 }, t) })) : v.intl.string(v.t['tHT/Vl'])), 0 === G.length && (X = L ? v.intl.string(v.t.IE2uZW) : v.intl.string(v.t.QVhmGx));
    let q = L ? v.intl.string(v.t['00XIbm']) : v.intl.string(v.t['7CrE9/']);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: E.card,
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
                              className: E.participants,
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
                              className: l()(E.participants, E.disabled),
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
                className: E.actions,
                children: [
                    (0, r.jsxs)(o.zxk, {
                        color: o.zxk.Colors.BRAND,
                        onClick: () => {
                            null != Z && null != w && ((0, f.uL)(y.Z5c.CHANNEL(w, Z)), c.default.selectVoiceChannel(Z));
                        },
                        className: E.button,
                        innerClassName: E.buttonInner,
                        disabled: H || !Y,
                        children: [
                            (0, r.jsx)(o.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            v.intl.string(v.t.zIeJq6)
                        ]
                    }),
                    (0, r.jsx)(o.zxk, {
                        color: o.zxk.Colors.PRIMARY,
                        onClick: () => {
                            s.Z.sendMessage(A.id, u.ZP.parse(A, '\uD83D\uDC4B'));
                        },
                        className: E.button,
                        children: q
                    })
                ]
            })
        ]
    });
}
