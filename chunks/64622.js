l.d(t, { A: () => J });
var e = l(627968),
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
    p = l(401843),
    j = l(475743),
    C = l(672979),
    _ = l(717306),
    N = l(323073),
    v = l(793574),
    f = l(688810),
    O = l(47167),
    E = l(402216),
    I = l(450149),
    L = l(279250),
    S = l(734057),
    y = l(71393),
    D = l(576705),
    V = l(290863),
    b = l(607567),
    T = l(92240),
    M = l(257367),
    P = l(939496),
    w = l(584904),
    G = l(351638),
    U = l(316770),
    k = l(910607),
    F = l(70963),
    R = l(269587),
    z = l(652215),
    H = l(996988),
    B = l(375708),
    Q = l(726342),
    Y = l(802558),
    $ = l(399162),
    q = l(181147);
function J(i) {
    let t,
        { user: l, currentUser: s, stream: J, className: X, onClose: Z } = i,
        { themeType: K, theme: W } = (0, P.E)(),
        ii = (0, d.bG)([y.A], () => y.A.getGuild(J?.guildId)),
        it = (0, d.bG)([S.A], () => S.A.getChannel(J?.channelId)),
        il = (0, O.Ay)(it),
        ie = (0, d.yK)([b.Ay], () =>
            null != it
                ? b.Ay.getVoiceStatesForChannel(it).map((i) => {
                      let { user: t } = i;
                      return t;
                  })
                : [],
        ),
        is = (0, d.bG)([V.A], () => V.A.findActivity(l.id, (i) => (0, C.A)(i) && !(0, _.A)(i))),
        { analyticsLocations: ia } = (0, f.Ay)(v.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        id = (0, T.A)({ display: "live", voiceChannelId: it?.id, user: l, stream: J, analyticsLocations: ia }),
        io = (0, M.A)({ userId: l.id, onAction: id }),
        { previewUrl: ir, isLoading: ic } = (0, I.A)(J?.guildId, J?.channelId, J?.ownerId),
        [iA, ih] = (0, L.zP)(it),
        iu = (0, N.a9)() && (0, N.UK)(it?.id),
        ix = (0, d.bG)([D.A], () => null != it && !iu && D.A.canBasicChannel(z.hVb.CONNECT, it)),
        ig = (0, j.A)(ic ? null : ir),
        im = ic || null == ir ? ig : ir,
        ip = n.useId();
    if (null == ii || null == it || !1 === J.discoverable) return null;
    let ij = () =>
            l.id === s.id
                ? null
                : (0, e.jsx)("div", {
                      className: Q.o1,
                      children: (0, e.jsx)(F.Ay, { channel: it, onAction: id, onClose: Z }),
                  }),
        iC = null != is ? B.intl.formatToPlainString(B.t["4CQq9Q"], { name: is.name }) : B.intl.string(B.t["Jpkr/q"]);
    return (0, e.jsx)(f.f5, {
        value: ia,
        children: (0, e.jsxs)(w.A, {
            ref: io,
            className: X,
            onAction: id,
            onClose: Z,
            "aria-labelledby": ip,
            children: [
                (0, e.jsx)(G.A, {
                    text: iC,
                    tags: (0, e.jsx)(E.Ay, { size: E.ed.SMALL }),
                    contextMenu: (0, e.jsx)(R.A, { display: "live", user: l, onClose: Z }),
                }),
                (0, e.jsx)(x.A, { children: (0, e.jsx)(g.H, { id: ip, children: `${iC}, ${il}` }) }),
                (0, e.jsxs)("div", {
                    className: Q.rf,
                    children: [
                        (0, e.jsxs)("div", {
                            className: Q.Qs,
                            children: [
                                ((t = (i) => {
                                    i.stopPropagation(),
                                        iA &&
                                            (id({ action: "PRESS_IMAGE" }),
                                            m.default.selectVoiceChannel(J.channelId),
                                            (0, p.Nl)(J),
                                            Z?.());
                                }),
                                null == im && ic
                                    ? (0, e.jsx)("div", { className: Y.VH, children: (0, e.jsx)(r.y, {}) })
                                    : null == im || iu
                                      ? (0, e.jsxs)(c.D, {
                                            className: a()(Y.VH, Y.Lw, iA ? Y.vk : Y.r9),
                                            onClick: t,
                                            "aria-label": (0, L.CQ)(ih),
                                            "aria-disabled": !iA,
                                            children: [
                                                (0, e.jsx)("img", { alt: "", src: W === z.NJ8.LIGHT ? q : $ }),
                                                K !== H.d.MODAL &&
                                                    K !== H.d.MODAL_V2 &&
                                                    (0, e.jsxs)(e.Fragment, {
                                                        children: [
                                                            (0, e.jsx)(A.E, {
                                                                className: Y.um,
                                                                variant: "text-sm/medium",
                                                                color: "always-white",
                                                                children: (0, L.CT)(ih),
                                                            }),
                                                            (0, e.jsx)(A.E, {
                                                                variant: "text-sm/medium",
                                                                children: ix
                                                                    ? B.intl.string(B.t.uQZTBV)
                                                                    : B.intl.string(B.t.pgUTZC),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        })
                                      : (0, e.jsxs)(c.D, {
                                            className: a()(Y.VH, Y.Lw, iA ? Y.vk : Y.r9),
                                            onClick: t,
                                            "aria-label": (0, L.CQ)(ih),
                                            "aria-disabled": !iA,
                                            children: [
                                                (0, e.jsx)("img", { alt: "", src: im, className: Y.Sl }),
                                                K !== H.d.MODAL &&
                                                    K !== H.d.MODAL_V2 &&
                                                    (0, e.jsxs)(e.Fragment, {
                                                        children: [
                                                            (0, e.jsx)(A.E, {
                                                                className: Y.um,
                                                                variant: "text-sm/medium",
                                                                color: "always-white",
                                                                children: (0, L.CT)(ih),
                                                            }),
                                                            (0, e.jsx)(h.p, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: Y.wI,
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        })),
                                K !== H.d.MODAL && K !== H.d.MODAL_V2
                                    ? null
                                    : (0, e.jsxs)("div", {
                                          className: Q.zH,
                                          children: [
                                              (0, e.jsx)(U.A, { channel: it, guild: ii, onAction: id, onClose: Z }),
                                              (0, e.jsx)(o.A, {
                                                  users: ie,
                                                  guildId: ii.id,
                                                  channelId: it.id,
                                                  maxUsers: k.k,
                                                  size: u._3.SIZE_16,
                                                  onClickOverflow: (i) => {
                                                      i?.stopPropagation(),
                                                          id?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                                                  },
                                                  onUserClick: (i) => i.stopPropagation(),
                                                  disableUserPopout: (i) => i === l.id,
                                                  overflowCountColor: "text-muted",
                                                  "aria-label": B.intl.string(B.t["jNqDh/"]),
                                              }),
                                              K === H.d.MODAL_V2 && ij(),
                                          ],
                                      }),
                                K === H.d.MODAL && ij(),
                            ],
                        }),
                        K === H.d.MODAL || K === H.d.MODAL_V2
                            ? null
                            : (0, e.jsx)(k.A, { user: l, guild: ii, channel: it, onAction: id, onClose: Z }),
                    ],
                }),
                K !== H.d.MODAL && K !== H.d.MODAL_V2 && ij(),
            ],
        }),
    });
}
