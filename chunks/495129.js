n.d(t, {
    H: function () {
        return v;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(904245),
    c = n(287734),
    d = n(957730),
    u = n(739566),
    m = n(779125),
    h = n(599706),
    f = n(703656),
    p = n(592125),
    _ = n(430824),
    g = n(594174),
    E = n(938475),
    C = n(5192),
    I = n(981631),
    x = n(388032),
    N = n(695436);
function v(e) {
    var t, n, r, v, T, S, A, b, j, R;
    let { message: Z, channel: P } = e,
        L =
            null === (r = Z.embeds[0]) || void 0 === r
                ? void 0
                : null === (n = r.fields) || void 0 === n
                  ? void 0
                  : null ===
                          (t = n.find((e) => {
                              let { rawName: t } = e;
                              return 'guild_id' === t;
                          })) || void 0 === t
                    ? void 0
                    : t.rawValue,
        y =
            null === (S = Z.embeds[0]) || void 0 === S
                ? void 0
                : null === (T = S.fields) || void 0 === T
                  ? void 0
                  : null ===
                          (v = T.find((e) => {
                              let { rawName: t } = e;
                              return 'channel_id' === t;
                          })) || void 0 === v
                    ? void 0
                    : v.rawValue,
        O = (0, a.e7)([_.Z], () => _.Z.getGuild(L)),
        M = (0, a.e7)([p.Z], () => p.Z.getChannel(y)),
        k = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        D = (0, a.e7)([], () => Z.author.id === (null == k ? void 0 : k.id)),
        B = null === (A = P.recipients) || void 0 === A ? void 0 : A.find((e) => e !== Z.author.id),
        U = (0, a.e7)([g.default], () => (null != B ? g.default.getUser(B) : null)),
        w = (0, u.ZP)(Z),
        F = (0, C._T)(P.getGuildId(), P.id, U),
        G = (0, a.Wu)([E.ZP], () => (null != M ? E.ZP.getVoiceStatesForChannel(M) : []), [M]),
        V = G.some((e) => e.user.id === (null == k ? void 0 : k.id)),
        H =
            null === (R = Z.embeds[0]) || void 0 === R
                ? void 0
                : null === (j = R.fields) || void 0 === j
                  ? void 0
                  : null ===
                          (b = j.find((e) => {
                              let { rawName: t } = e;
                              return 'voice_user_ids' === t;
                          })) || void 0 === b
                    ? void 0
                    : b.rawValue,
        z = null != H ? H.split(',') : [],
        W = (0, a.Wu)([g.default], () => z.map((e) => g.default.getUser(e)).filter(Boolean)),
        K = D && null != U ? x.intl.formatToPlainString(x.t['er/cHx'], { username: F }) : x.intl.formatToPlainString(x.t.noNjkZ, { username: w.nick }),
        Y = null != O && null != M,
        X = null;
    (X = Y ? (D || V ? x.intl.format(x.t.CaLQqK, { channelHook: (e, t) => (0, i.jsx)(m.Z, { channel: null != M ? M : void 0 }, t) }) : x.intl.format(x.t.VugXpK, { channelHook: (e, t) => (0, i.jsx)(m.Z, { channel: null != M ? M : void 0 }, t) })) : x.intl.string(x.t['tHT/Vl'])), 0 === G.length && (X = D ? x.intl.string(x.t.IE2uZW) : x.intl.string(x.t.QVhmGx));
    let Q = D ? x.intl.string(x.t['00XIbm']) : x.intl.string(x.t['7CrE9/']);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: N.card,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: K
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: X
                    }),
                    G.length > 0
                        ? (0, i.jsx)('div', {
                              className: N.participants,
                              children: (0, i.jsx)(h.Z, {
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
                              className: l()(N.participants, N.disabled),
                              children: (0, i.jsx)(h.Z, {
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
                className: N.actions,
                children: [
                    (0, i.jsxs)(o.Button, {
                        color: o.Button.Colors.BRAND,
                        onClick: () => {
                            null != y && null != L && ((0, f.uL)(I.Z5c.CHANNEL(L, y)), c.default.selectVoiceChannel(y));
                        },
                        className: N.button,
                        innerClassName: N.buttonInner,
                        disabled: V || !Y,
                        children: [
                            (0, i.jsx)(o.VoiceNormalIcon, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            x.intl.string(x.t.zIeJq6)
                        ]
                    }),
                    (0, i.jsx)(o.Button, {
                        color: o.Button.Colors.PRIMARY,
                        onClick: () => {
                            s.Z.sendMessage(P.id, d.ZP.parse(P, '\uD83D\uDC4B'));
                        },
                        className: N.button,
                        children: Q
                    })
                ]
            })
        ]
    });
}
