n.d(t, { H: () => E }), n(301563);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    l = n(481060),
    s = n(904245),
    c = n(287734),
    d = n(957730),
    u = n(739566),
    p = n(779125),
    m = n(599706),
    f = n(703656),
    h = n(592125),
    g = n(430824),
    _ = n(594174),
    b = n(938475),
    v = n(5192),
    y = n(981631),
    x = n(388032),
    O = n(66811);
function E(e) {
    var t, n, i, E, j, N, C, I, S, P;
    let { message: T, channel: A } = e,
        w =
            null === (i = T.embeds[0]) || void 0 === i
                ? void 0
                : null === (n = i.fields) || void 0 === n
                  ? void 0
                  : null ===
                          (t = n.find((e) => {
                              let { rawName: t } = e;
                              return 'guild_id' === t;
                          })) || void 0 === t
                    ? void 0
                    : t.rawValue,
        Z =
            null === (N = T.embeds[0]) || void 0 === N
                ? void 0
                : null === (j = N.fields) || void 0 === j
                  ? void 0
                  : null ===
                          (E = j.find((e) => {
                              let { rawName: t } = e;
                              return 'channel_id' === t;
                          })) || void 0 === E
                    ? void 0
                    : E.rawValue,
        k = (0, o.e7)([g.Z], () => g.Z.getGuild(w)),
        R = (0, o.e7)([h.Z], () => h.Z.getChannel(Z)),
        L = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        D = (0, o.e7)([], () => T.author.id === (null == L ? void 0 : L.id)),
        M = null === (C = A.recipients) || void 0 === C ? void 0 : C.find((e) => e !== T.author.id),
        W = (0, o.e7)([_.default], () => (null != M ? _.default.getUser(M) : null)),
        F = (0, u.ZP)(T),
        U = (0, v._T)(A.getGuildId(), A.id, W),
        B = (0, o.Wu)([b.ZP], () => (null != R ? b.ZP.getVoiceStatesForChannel(R) : []), [R]),
        G = B.some((e) => e.user.id === (null == L ? void 0 : L.id)),
        H =
            null === (P = T.embeds[0]) || void 0 === P
                ? void 0
                : null === (S = P.fields) || void 0 === S
                  ? void 0
                  : null ===
                          (I = S.find((e) => {
                              let { rawName: t } = e;
                              return 'voice_user_ids' === t;
                          })) || void 0 === I
                    ? void 0
                    : I.rawValue,
        V = null != H ? H.split(',') : [],
        z = (0, o.Wu)([_.default], () => V.map((e) => _.default.getUser(e)).filter(Boolean)),
        K = D && null != W ? x.NW.formatToPlainString(x.t['er/cHx'], { username: U }) : x.NW.formatToPlainString(x.t.noNjkZ, { username: F.nick }),
        Y = null != k && null != R,
        X = null;
    (X = Y ? (D || G ? x.NW.format(x.t.CaLQqK, { channelHook: (e, t) => (0, r.jsx)(p.Z, { channel: null != R ? R : void 0 }, t) }) : x.NW.format(x.t.VugXpK, { channelHook: (e, t) => (0, r.jsx)(p.Z, { channel: null != R ? R : void 0 }, t) })) : x.NW.string(x.t['tHT/Vl'])), 0 === B.length && (X = D ? x.NW.string(x.t.IE2uZW) : x.NW.string(x.t.QVhmGx));
    let q = D ? x.NW.string(x.t['00XIbm']) : x.NW.string(x.t['7CrE9/']);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: O.card,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: K
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: X
                    }),
                    B.length > 0
                        ? (0, r.jsx)('div', {
                              className: O.participants,
                              children: (0, r.jsx)(m.Z, {
                                  guildId: w,
                                  partySize: {
                                      knownSize: B.length,
                                      unknownSize: 0,
                                      totalSize: B.length
                                  },
                                  members: B.map((e) => e.user),
                                  maxAvatarsShown: 5
                              })
                          })
                        : (0, r.jsx)('div', {
                              className: a()(O.participants, O.disabled),
                              children: (0, r.jsx)(m.Z, {
                                  guildId: w,
                                  partySize: {
                                      knownSize: z.length,
                                      unknownSize: V.length - z.length,
                                      totalSize: V.length
                                  },
                                  members: z,
                                  maxAvatarsShown: 5
                              })
                          })
                ]
            }),
            (0, r.jsxs)('div', {
                className: O.actions,
                children: [
                    (0, r.jsxs)(l.zxk, {
                        color: l.zxk.Colors.BRAND,
                        onClick: () => {
                            null != Z && null != w && ((0, f.uL)(y.Z5c.CHANNEL(w, Z)), c.default.selectVoiceChannel(Z));
                        },
                        className: O.button,
                        innerClassName: O.buttonInner,
                        disabled: G || !Y,
                        children: [
                            (0, r.jsx)(l.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            x.NW.string(x.t.zIeJq6)
                        ]
                    }),
                    (0, r.jsx)(l.zxk, {
                        color: l.zxk.Colors.PRIMARY,
                        onClick: () => {
                            s.Z.sendMessage(A.id, d.ZP.parse(A, '\uD83D\uDC4B'));
                        },
                        className: O.button,
                        children: q
                    })
                ]
            })
        ]
    });
}
