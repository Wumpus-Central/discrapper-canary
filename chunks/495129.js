n.d(t, { H: () => O }), n(301563);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(442837),
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
function O(e) {
    var t, n, i, O, N, j, C, I, S, T;
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
            null == (N = j.fields) ||
            null ==
                (O = N.find((e) => {
                    let { rawName: t } = e;
                    return 'channel_id' === t;
                }))
                ? void 0
                : O.rawValue,
        k = (0, l.e7)([g.Z], () => g.Z.getGuild(w)),
        R = (0, l.e7)([h.Z], () => h.Z.getChannel(Z)),
        D = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
        L = (0, l.e7)([], () => P.author.id === (null == D ? void 0 : D.id)),
        M = null == (C = A.recipients) ? void 0 : C.find((e) => e !== P.author.id),
        W = (0, l.e7)([_.default], () => (null != M ? _.default.getUser(M) : null)),
        U = (0, d.ZP)(P),
        F = (0, x._T)(A.getGuildId(), A.id, W),
        B = (0, l.Wu)([b.ZP], () => (null != R ? b.ZP.getVoiceStatesForChannel(R) : []), [R]),
        G = B.some((e) => e.user.id === (null == D ? void 0 : D.id)),
        H =
            null == (T = P.embeds[0]) ||
            null == (S = T.fields) ||
            null ==
                (I = S.find((e) => {
                    let { rawName: t } = e;
                    return 'voice_user_ids' === t;
                }))
                ? void 0
                : I.rawValue,
        V = null != H ? H.split(',') : [],
        z = (0, l.Wu)([_.default], () => V.map((e) => _.default.getUser(e)).filter(Boolean)),
        K = L && null != W ? E.NW.formatToPlainString(E.t['er/cHx'], { username: F }) : E.NW.formatToPlainString(E.t.noNjkZ, { username: U.nick }),
        Y = null != k && null != R,
        X = null;
    (X = Y ? (L || G ? E.NW.format(E.t.CaLQqK, { channelHook: (e, t) => (0, r.jsx)(p.Z, { channel: null != R ? R : void 0 }, t) }) : E.NW.format(E.t.VugXpK, { channelHook: (e, t) => (0, r.jsx)(p.Z, { channel: null != R ? R : void 0 }, t) })) : E.NW.string(E.t['tHT/Vl'])), 0 === B.length && (X = L ? E.NW.string(E.t.IE2uZW) : E.NW.string(E.t.QVhmGx));
    let q = L ? E.NW.string(E.t['00XIbm']) : E.NW.string(E.t['7CrE9/']);
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
                        children: X
                    }),
                    B.length > 0
                        ? (0, r.jsx)('div', {
                              className: v.participants,
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
                              className: a()(v.participants, v.disabled),
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
                className: v.actions,
                children: [
                    (0, r.jsxs)(o.zxk, {
                        color: o.zxk.Colors.BRAND,
                        onClick: () => {
                            null != Z && null != w && ((0, f.uL)(y.Z5c.CHANNEL(w, Z)), c.default.selectVoiceChannel(Z));
                        },
                        className: v.button,
                        innerClassName: v.buttonInner,
                        disabled: G || !Y,
                        children: [
                            (0, r.jsx)(o.gj8, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            E.NW.string(E.t.zIeJq6)
                        ]
                    }),
                    (0, r.jsx)(o.zxk, {
                        color: o.zxk.Colors.PRIMARY,
                        onClick: () => {
                            s.Z.sendMessage(A.id, u.ZP.parse(A, '\uD83D\uDC4B'));
                        },
                        className: v.button,
                        children: q
                    })
                ]
            })
        ]
    });
}
