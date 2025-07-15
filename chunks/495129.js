(n.d(t, { H: () => O }), n(35282));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    c = n(904245),
    u = n(287734),
    d = n(957730),
    p = n(739566),
    m = n(779125),
    f = n(599706),
    _ = n(703656),
    h = n(592125),
    g = n(430824),
    b = n(594174),
    E = n(938475),
    y = n(5192),
    x = n(981631),
    C = n(388032),
    v = n(653072);
function O(e) {
    var t, n, i, O, j, I, S, T, N, P;
    let { message: A, channel: w } = e,
        Z =
            null == (i = A.embeds[0]) ||
            null == (n = i.fields) ||
            null ==
                (t = n.find((e) => {
                    let { rawName: t } = e;
                    return 'guild_id' === t;
                }))
                ? void 0
                : t.rawValue,
        R =
            null == (I = A.embeds[0]) ||
            null == (j = I.fields) ||
            null ==
                (O = j.find((e) => {
                    let { rawName: t } = e;
                    return 'channel_id' === t;
                }))
                ? void 0
                : O.rawValue,
        k = (0, a.e7)([g.Z], () => g.Z.getGuild(Z)),
        L = (0, a.e7)([h.Z], () => h.Z.getChannel(R)),
        D = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        M = (0, a.e7)([], () => A.author.id === (null == D ? void 0 : D.id)),
        U = null == (S = w.recipients) ? void 0 : S.find((e) => e !== A.author.id),
        F = (0, a.e7)([b.default], () => (null != U ? b.default.getUser(U) : null)),
        B = (0, p.ZP)(A),
        G = (0, y._T)(w.getGuildId(), w.id, F),
        H = (0, a.Wu)([E.ZP], () => (null != L ? E.ZP.getVoiceStatesForChannel(L) : []), [L]),
        V = H.some((e) => e.user.id === (null == D ? void 0 : D.id)),
        z =
            null == (P = A.embeds[0]) ||
            null == (N = P.fields) ||
            null ==
                (T = N.find((e) => {
                    let { rawName: t } = e;
                    return 'voice_user_ids' === t;
                }))
                ? void 0
                : T.rawValue,
        W = null != z ? z.split(',') : [],
        K = (0, a.Wu)([b.default], () => W.map((e) => b.default.getUser(e)).filter(Boolean)),
        Y = M && null != F ? C.intl.formatToPlainString(C.t['er/cHx'], { username: G }) : C.intl.formatToPlainString(C.t.noNjkZ, { username: B.nick }),
        X = null != k && null != L,
        q = null;
    ((q = X ? (M || V ? C.intl.format(C.t.CaLQqK, { channelHook: (e, t) => (0, r.jsx)(m.Z, { channel: null != L ? L : void 0 }, t) }) : C.intl.format(C.t.VugXpK, { channelHook: (e, t) => (0, r.jsx)(m.Z, { channel: null != L ? L : void 0 }, t) })) : C.intl.string(C.t['tHT/Vl'])), 0 === H.length && (q = M ? C.intl.string(C.t.IE2uZW) : C.intl.string(C.t.QVhmGx)));
    let Q = M ? C.intl.string(C.t['00XIbm']) : C.intl.string(C.t['7CrE9/']);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: v.card,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: Y
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: q
                    }),
                    H.length > 0
                        ? (0, r.jsx)('div', {
                              className: v.participants,
                              children: (0, r.jsx)(f.Z, {
                                  guildId: Z,
                                  partySize: {
                                      knownSize: H.length,
                                      unknownSize: 0,
                                      totalSize: H.length
                                  },
                                  members: H.map((e) => e.user),
                                  maxAvatarsShown: 5
                              })
                          })
                        : (0, r.jsx)('div', {
                              className: l()(v.participants, v.disabled),
                              children: (0, r.jsx)(f.Z, {
                                  guildId: Z,
                                  partySize: {
                                      knownSize: K.length,
                                      unknownSize: W.length - K.length,
                                      totalSize: W.length
                                  },
                                  members: K,
                                  maxAvatarsShown: 5
                              })
                          })
                ]
            }),
            (0, r.jsxs)('div', {
                className: v.actions,
                children: [
                    (0, r.jsxs)(o.zx, {
                        color: o.zx.Colors.BRAND,
                        onClick: () => {
                            null != R && null != Z && ((0, _.uL)(x.Z5c.CHANNEL(Z, R)), u.default.selectVoiceChannel(R));
                        },
                        className: v.button,
                        innerClassName: v.buttonInner,
                        disabled: V || !X,
                        children: [
                            (0, r.jsx)(s.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            C.intl.string(C.t.zIeJq6)
                        ]
                    }),
                    (0, r.jsx)(o.zx, {
                        color: o.zx.Colors.PRIMARY,
                        onClick: () => {
                            c.Z.sendMessage(w.id, d.ZP.parse(w, '\uD83D\uDC4B'));
                        },
                        className: v.button,
                        children: Q
                    })
                ]
            })
        ]
    });
}
