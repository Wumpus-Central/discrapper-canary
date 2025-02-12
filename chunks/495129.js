n.d(t, { H: () => N });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(904245),
    c = n(287734),
    d = n(957730),
    u = n(739566),
    m = n(779125),
    _ = n(599706),
    h = n(703656),
    p = n(592125),
    g = n(430824),
    f = n(594174),
    x = n(938475),
    C = n(5192),
    v = n(981631),
    E = n(388032),
    I = n(620727);
function N(e) {
    var t, n, l, N, S, T, b, A, j, y;
    let { message: Z, channel: R } = e,
        L =
            null === (l = Z.embeds[0]) || void 0 === l
                ? void 0
                : null === (n = l.fields) || void 0 === n
                  ? void 0
                  : null ===
                          (t = n.find((e) => {
                              let { rawName: t } = e;
                              return 'guild_id' === t;
                          })) || void 0 === t
                    ? void 0
                    : t.rawValue,
        P =
            null === (T = Z.embeds[0]) || void 0 === T
                ? void 0
                : null === (S = T.fields) || void 0 === S
                  ? void 0
                  : null ===
                          (N = S.find((e) => {
                              let { rawName: t } = e;
                              return 'channel_id' === t;
                          })) || void 0 === N
                    ? void 0
                    : N.rawValue,
        k = (0, r.e7)([g.Z], () => g.Z.getGuild(L)),
        M = (0, r.e7)([p.Z], () => p.Z.getChannel(P)),
        O = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
        D = (0, r.e7)([], () => Z.author.id === (null == O ? void 0 : O.id)),
        w = null === (b = R.recipients) || void 0 === b ? void 0 : b.find((e) => e !== Z.author.id),
        F = (0, r.e7)([f.default], () => (null != w ? f.default.getUser(w) : null)),
        U = (0, u.ZP)(Z),
        B = (0, C._T)(R.getGuildId(), R.id, F),
        G = (0, r.Wu)([x.ZP], () => (null != M ? x.ZP.getVoiceStatesForChannel(M) : []), [M]),
        H = G.some((e) => e.user.id === (null == O ? void 0 : O.id)),
        V =
            null === (y = Z.embeds[0]) || void 0 === y
                ? void 0
                : null === (j = y.fields) || void 0 === j
                  ? void 0
                  : null ===
                          (A = j.find((e) => {
                              let { rawName: t } = e;
                              return 'voice_user_ids' === t;
                          })) || void 0 === A
                    ? void 0
                    : A.rawValue,
        z = null != V ? V.split(',') : [],
        W = (0, r.Wu)([f.default], () => z.map((e) => f.default.getUser(e)).filter(Boolean)),
        K = D && null != F ? E.intl.formatToPlainString(E.t['er/cHx'], { username: B }) : E.intl.formatToPlainString(E.t.noNjkZ, { username: U.nick }),
        Y = null != k && null != M,
        X = null;
    (X = Y ? (D || H ? E.intl.format(E.t.CaLQqK, { channelHook: (e, t) => (0, i.jsx)(m.Z, { channel: null != M ? M : void 0 }, t) }) : E.intl.format(E.t.VugXpK, { channelHook: (e, t) => (0, i.jsx)(m.Z, { channel: null != M ? M : void 0 }, t) })) : E.intl.string(E.t['tHT/Vl'])), 0 === G.length && (X = D ? E.intl.string(E.t.IE2uZW) : E.intl.string(E.t.QVhmGx));
    let q = D ? E.intl.string(E.t['00XIbm']) : E.intl.string(E.t['7CrE9/']);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: I.card,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: K
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: X
                    }),
                    G.length > 0
                        ? (0, i.jsx)('div', {
                              className: I.participants,
                              children: (0, i.jsx)(_.Z, {
                                  guildId: L,
                                  partySize: {
                                      knownSize: G.length,
                                      unknownSize: 0,
                                      totalSize: G.length
                                  },
                                  members: G.map((e) => e.user),
                                  maxAvatarsShown: 5
                              })
                          })
                        : (0, i.jsx)('div', {
                              className: a()(I.participants, I.disabled),
                              children: (0, i.jsx)(_.Z, {
                                  guildId: L,
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
            (0, i.jsxs)('div', {
                className: I.actions,
                children: [
                    (0, i.jsxs)(s.zxk, {
                        color: s.zxk.Colors.BRAND,
                        onClick: () => {
                            null != P && null != L && ((0, h.uL)(v.Z5c.CHANNEL(L, P)), c.default.selectVoiceChannel(P));
                        },
                        className: I.button,
                        innerClassName: I.buttonInner,
                        disabled: H || !Y,
                        children: [
                            (0, i.jsx)(s.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            E.intl.string(E.t.zIeJq6)
                        ]
                    }),
                    (0, i.jsx)(s.zxk, {
                        color: s.zxk.Colors.PRIMARY,
                        onClick: () => {
                            o.Z.sendMessage(R.id, d.ZP.parse(R, '\uD83D\uDC4B'));
                        },
                        className: I.button,
                        children: q
                    })
                ]
            })
        ]
    });
}
