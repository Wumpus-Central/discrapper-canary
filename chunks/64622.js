l.d(t, { A: () => q });
var e = l(477900),
    n = l(582128),
    s = l(503698),
    a = l.n(s),
    d = l(17928),
    o = l(342952),
    r = l(289873),
    c = l(939249),
    u = l(834730),
    A = l(111159),
    h = l(778712),
    x = l(140735),
    g = l(707554),
    m = l(730852),
    p = l(401843),
    j = l(475743),
    N = l(672979),
    _ = l(717306),
    v = l(323073),
    C = l(793574),
    f = l(688810),
    O = l(47167),
    E = l(402216),
    I = l(450149),
    L = l(711589),
    y = l(71393),
    S = l(576705),
    D = l(290863),
    V = l(607567),
    b = l(92240),
    M = l(257367),
    T = l(939496),
    P = l(584904),
    w = l(351638),
    G = l(316770),
    U = l(910607),
    k = l(70963),
    F = l(269587),
    R = l(652215),
    z = l(996988),
    H = l(375708),
    B = l(260155),
    Q = l(202611),
    Y = l(399162),
    $ = l(181147);
function q(i) {
    let t,
        { user: l, currentUser: s, stream: q, className: J, onClose: K } = i,
        { themeType: X, theme: Z } = (0, T.E)(),
        W = (0, d.bG)([y.A], () => y.A.getGuild(q?.guildId)),
        { actionString: ii, actionAriaLabel: it, canWatch: il, channel: ie } = (0, L.K)(q),
        is = (0, O.Ay)(ie),
        ia = (0, d.yK)([V.Ay], () =>
            null != ie
                ? V.Ay.getVoiceStatesForChannel(ie).map((i) => {
                      let { user: t } = i;
                      return t;
                  })
                : [],
        ),
        id = (0, d.bG)([D.A], () => D.A.findActivity(l.id, (i) => (0, N.A)(i) && !(0, _.A)(i))),
        { analyticsLocations: io } = (0, f.Ay)(C.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ir = (0, b.A)({ display: "live", voiceChannelId: ie?.id, user: l, stream: q, analyticsLocations: io }),
        ic = (0, M.A)({ userId: l.id, onAction: ir }),
        { previewUrl: iu, isLoading: iA } = (0, I.A)(q?.guildId, q?.channelId, q?.ownerId),
        ih = (0, v.a9)() && (0, v.UK)(ie?.id),
        ix = (0, d.bG)([S.A], () => null != ie && !ih && S.A.canBasicChannel(R.hVb.CONNECT, ie)),
        ig = (0, j.Ay)(iA ? null : iu),
        im = iA || null == iu ? ig : iu,
        ip = n.useId();
    if (null == W || null == ie || !1 === q.discoverable) return null;
    function ij() {
        return null == ie || l.id === s.id
            ? null
            : (0, e.jsx)("div", {
                  className: B.o1,
                  children: (0, e.jsx)(k.Ay, { channel: ie, onAction: ir, onClose: K }),
              });
    }
    let iN = null != id ? H.intl.formatToPlainString(H.t["4CQq9Q"], { name: id.name }) : H.intl.string(H.t["Jpkr/q"]);
    return (0, e.jsx)(f.f5, {
        value: io,
        children: (0, e.jsxs)(P.A, {
            ref: ic,
            className: J,
            onAction: ir,
            onClose: K,
            "aria-labelledby": ip,
            children: [
                (0, e.jsx)(w.A, {
                    text: iN,
                    tags: (0, e.jsx)(E.Ay, { size: E.ed.SMALL }),
                    contextMenu: (0, e.jsx)(F.A, { display: "live", user: l, onClose: K }),
                }),
                (0, e.jsx)(x.A, { children: (0, e.jsx)(g.H, { id: ip, children: `${iN}, ${is}` }) }),
                (0, e.jsxs)("div", {
                    className: B.rf,
                    children: [
                        (0, e.jsxs)("div", {
                            className: B.Qs,
                            children: [
                                ((t = (i) => {
                                    i.stopPropagation(),
                                        il &&
                                            (ir({ action: "PRESS_IMAGE" }),
                                            m.default.selectVoiceChannel(q.channelId),
                                            (0, p.Nl)(q),
                                            K?.());
                                }),
                                null == im && iA
                                    ? (0, e.jsx)("div", { className: Q.VH, children: (0, e.jsx)(r.y, {}) })
                                    : null == im || ih
                                      ? (0, e.jsxs)(c.D, {
                                            className: a()(Q.VH, Q.Lw, il ? Q.vk : Q.r9),
                                            onClick: t,
                                            "aria-label": it,
                                            "aria-disabled": !il,
                                            children: [
                                                (0, e.jsx)("img", { alt: "", src: Z === R.NJ8.LIGHT ? $ : Y }),
                                                X !== z.d.MODAL &&
                                                    X !== z.d.MODAL_V2 &&
                                                    (0, e.jsxs)(e.Fragment, {
                                                        children: [
                                                            (0, e.jsx)(u.E, {
                                                                className: Q.um,
                                                                variant: "text-sm/medium",
                                                                color: "text-overlay-light",
                                                                children: ii,
                                                            }),
                                                            (0, e.jsx)(u.E, {
                                                                variant: "text-sm/medium",
                                                                children: ix
                                                                    ? H.intl.string(H.t.uQZTBV)
                                                                    : H.intl.string(H.t.pgUTZC),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        })
                                      : (0, e.jsxs)(c.D, {
                                            className: a()(Q.VH, Q.Lw, il ? Q.vk : Q.r9),
                                            onClick: t,
                                            "aria-label": it,
                                            "aria-disabled": !il,
                                            children: [
                                                (0, e.jsx)("img", { alt: "", src: im, className: Q.Sl }),
                                                X !== z.d.MODAL &&
                                                    X !== z.d.MODAL_V2 &&
                                                    (0, e.jsxs)(e.Fragment, {
                                                        children: [
                                                            (0, e.jsx)(u.E, {
                                                                className: Q.um,
                                                                variant: "text-sm/medium",
                                                                color: "text-overlay-light",
                                                                children: ii,
                                                            }),
                                                            (0, e.jsx)(A.p, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: Q.wI,
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        })),
                                null == W || null == ie || (X !== z.d.MODAL && X !== z.d.MODAL_V2)
                                    ? null
                                    : (0, e.jsxs)("div", {
                                          className: B.zH,
                                          children: [
                                              (0, e.jsx)(G.A, { channel: ie, guild: W, onAction: ir, onClose: K }),
                                              (0, e.jsx)(o.A, {
                                                  users: ia,
                                                  guildId: W.id,
                                                  channelId: ie.id,
                                                  maxUsers: U.k,
                                                  size: h._3.SIZE_16,
                                                  onClickOverflow: (i) => {
                                                      i?.stopPropagation(),
                                                          ir?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                                                  },
                                                  onUserClick: (i) => i.stopPropagation(),
                                                  disableUserPopout: (i) => i === l.id,
                                                  overflowCountColor: "text-muted",
                                                  "aria-label": H.intl.string(H.t["jNqDh/"]),
                                              }),
                                              X === z.d.MODAL_V2 && ij(),
                                          ],
                                      }),
                                X === z.d.MODAL && ij(),
                            ],
                        }),
                        null == W || null == ie || X === z.d.MODAL || X === z.d.MODAL_V2
                            ? null
                            : (0, e.jsx)(U.A, { user: l, guild: W, channel: ie, onAction: ir, onClose: K }),
                    ],
                }),
                X !== z.d.MODAL && X !== z.d.MODAL_V2 && ij(),
            ],
        }),
    });
}
