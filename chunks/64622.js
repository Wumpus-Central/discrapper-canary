l.d(i, { A: () => Z });
var t = l(627968),
    n = l(64700),
    s = l(503698),
    a = l.n(s),
    d = l(17928),
    o = l(342952),
    r = l(289873),
    c = l(939249),
    A = l(834730),
    h = l(111159),
    u = l(778712),
    x = l(140735),
    g = l(707554),
    m = l(730852),
    j = l(401843),
    p = l(475743),
    C = l(672979),
    _ = l(717306),
    N = l(323073),
    v = l(793574),
    f = l(688810),
    O = l(47167),
    I = l(402216),
    E = l(450149),
    y = l(279250),
    L = l(734057),
    S = l(71393),
    b = l(576705),
    T = l(290863),
    V = l(607567),
    D = l(92240),
    w = l(257367),
    M = l(939496),
    P = l(584904),
    G = l(351638),
    U = l(316770),
    k = l(910607),
    F = l(70963),
    R = l(269587),
    z = l(652215),
    H = l(996988),
    Q = l(375708),
    B = l(514566),
    Y = l(478846),
    $ = l(399162),
    q = l(181147);
function Z(e) {
    let i,
        { user: l, currentUser: s, stream: Z, className: J, onClose: K } = e,
        { themeType: X, theme: W } = (0, M.E)(),
        ee = (0, d.bG)([S.A], () => S.A.getGuild(Z?.guildId)),
        ei = (0, d.bG)([L.A], () => L.A.getChannel(Z?.channelId)),
        el = (0, O.Ay)(ei),
        et = (0, d.yK)([V.Ay], () =>
            null != ei
                ? V.Ay.getVoiceStatesForChannel(ei).map((e) => {
                      let { user: i } = e;
                      return i;
                  })
                : [],
        ),
        en = (0, d.bG)([T.A], () => T.A.findActivity(l.id, (e) => (0, C.A)(e) && !(0, _.A)(e))),
        { analyticsLocations: es } = (0, f.Ay)(v.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ea = (0, D.A)({ display: "live", voiceChannelId: ei?.id, user: l, stream: Z, analyticsLocations: es }),
        ed = (0, w.A)({ userId: l.id, onAction: ea }),
        { previewUrl: eo, isLoading: er } = (0, E.A)(Z?.guildId, Z?.channelId, Z?.ownerId),
        [ec, eA] = (0, y.zP)(ei),
        eh = (0, N.a9)() && (0, N.UK)(ei?.id),
        eu = (0, d.bG)([b.A], () => null != ei && !eh && b.A.canBasicChannel(z.hVb.CONNECT, ei)),
        ex = (0, p.A)(er ? null : eo),
        eg = er || null == eo ? ex : eo,
        em = n.useId();
    if (null == ee || null == ei || !1 === Z.discoverable) return null;
    let ej = () =>
            l.id === s.id
                ? null
                : (0, t.jsx)("div", {
                      className: B.o1,
                      children: (0, t.jsx)(F.Ay, { channel: ei, onAction: ea, onClose: K }),
                  }),
        ep = null != en ? Q.intl.formatToPlainString(Q.t["4CQq9Q"], { name: en.name }) : Q.intl.string(Q.t["Jpkr/q"]);
    return (0, t.jsx)(f.f5, {
        value: es,
        children: (0, t.jsxs)(P.A, {
            ref: ed,
            className: J,
            onAction: ea,
            onClose: K,
            "aria-labelledby": em,
            children: [
                (0, t.jsx)(G.A, {
                    text: ep,
                    tags: (0, t.jsx)(I.Ay, { size: I.ed.SMALL }),
                    contextMenu: (0, t.jsx)(R.A, { display: "live", user: l, onClose: K }),
                }),
                (0, t.jsx)(x.A, { children: (0, t.jsx)(g.H, { id: em, children: `${ep}, ${el}` }) }),
                (0, t.jsxs)("div", {
                    className: B.rf,
                    children: [
                        (0, t.jsxs)("div", {
                            className: B.Qs,
                            children: [
                                ((i = (e) => {
                                    e.stopPropagation(),
                                        ec &&
                                            (ea({ action: "PRESS_IMAGE" }),
                                            m.default.selectVoiceChannel(Z.channelId),
                                            (0, j.Nl)(Z),
                                            K?.());
                                }),
                                null == eg && er
                                    ? (0, t.jsx)("div", { className: Y.VH, children: (0, t.jsx)(r.y, {}) })
                                    : null == eg || eh
                                      ? (0, t.jsxs)(c.D, {
                                            className: a()(Y.VH, Y.Lw, ec ? Y.vk : Y.r9),
                                            onClick: i,
                                            "aria-label": (0, y.CQ)(eA),
                                            "aria-disabled": !ec,
                                            children: [
                                                (0, t.jsx)("img", { alt: "", src: W === z.NJ8.LIGHT ? q : $ }),
                                                X !== H.d.MODAL &&
                                                    X !== H.d.MODAL_V2 &&
                                                    (0, t.jsxs)(t.Fragment, {
                                                        children: [
                                                            (0, t.jsx)(A.E, {
                                                                className: Y.um,
                                                                variant: "text-sm/medium",
                                                                color: "always-white",
                                                                children: (0, y.CT)(eA),
                                                            }),
                                                            (0, t.jsx)(A.E, {
                                                                variant: "text-sm/medium",
                                                                children: eu
                                                                    ? Q.intl.string(Q.t.uQZTBV)
                                                                    : Q.intl.string(Q.t.pgUTZC),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        })
                                      : (0, t.jsxs)(c.D, {
                                            className: a()(Y.VH, Y.Lw, ec ? Y.vk : Y.r9),
                                            onClick: i,
                                            "aria-label": (0, y.CQ)(eA),
                                            "aria-disabled": !ec,
                                            children: [
                                                (0, t.jsx)("img", { alt: "", src: eg, className: Y.Sl }),
                                                X !== H.d.MODAL &&
                                                    X !== H.d.MODAL_V2 &&
                                                    (0, t.jsxs)(t.Fragment, {
                                                        children: [
                                                            (0, t.jsx)(A.E, {
                                                                className: Y.um,
                                                                variant: "text-sm/medium",
                                                                color: "always-white",
                                                                children: (0, y.CT)(eA),
                                                            }),
                                                            (0, t.jsx)(h.p, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: Y.wI,
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        })),
                                X !== H.d.MODAL && X !== H.d.MODAL_V2
                                    ? null
                                    : (0, t.jsxs)("div", {
                                          className: B.zH,
                                          children: [
                                              (0, t.jsx)(U.A, { channel: ei, guild: ee, onAction: ea, onClose: K }),
                                              (0, t.jsx)(o.A, {
                                                  users: et,
                                                  guildId: ee.id,
                                                  channelId: ei.id,
                                                  maxUsers: k.k,
                                                  size: u._3.SIZE_16,
                                                  onClickOverflow: (e) => {
                                                      e?.stopPropagation(),
                                                          ea?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                                                  },
                                                  onUserClick: (e) => e.stopPropagation(),
                                                  disableUserPopout: (e) => e === l.id,
                                                  overflowCountColor: "text-muted",
                                                  "aria-label": Q.intl.string(Q.t["jNqDh/"]),
                                              }),
                                              X === H.d.MODAL_V2 && ej(),
                                          ],
                                      }),
                                X === H.d.MODAL && ej(),
                            ],
                        }),
                        X === H.d.MODAL || X === H.d.MODAL_V2
                            ? null
                            : (0, t.jsx)(k.A, { user: l, guild: ee, channel: ei, onAction: ea, onClose: K }),
                    ],
                }),
                X !== H.d.MODAL && X !== H.d.MODAL_V2 && ej(),
            ],
        }),
    });
}
