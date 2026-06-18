"use strict";
n.d(t, { A: () => q });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(342952),
    u = n(289873),
    c = n(939249),
    d = n(834730),
    _ = n(111159),
    h = n(778712),
    f = n(140735),
    p = n(707554),
    E = n(730852),
    m = n(401843),
    g = n(475743),
    A = n(672979),
    I = n(717306),
    T = n(323073),
    S = n(793574),
    y = n(688810),
    C = n(47167),
    N = n(402216),
    v = n(450149),
    R = n(279250),
    O = n(734057),
    b = n(71393),
    D = n(576705),
    L = n(290863),
    w = n(607567),
    M = n(92240),
    P = n(257367),
    x = n(939496),
    k = n(584904),
    U = n(351638),
    G = n(316770),
    F = n(910607),
    V = n(70963),
    B = n(269587),
    j = n(652215),
    H = n(996988),
    Y = n(375708),
    W = n(726342),
    K = n(802558),
    $ = n(399162),
    z = n(181147);
function q(e) {
    let t,
        { user: n, currentUser: s, stream: q, className: Z, onClose: X } = e,
        { themeType: Q, theme: J } = (0, x.E)(),
        ee = (0, o.bG)([b.A], () => b.A.getGuild(q?.guildId)),
        et = (0, o.bG)([O.A], () => O.A.getChannel(q?.channelId)),
        en = (0, C.Ay)(et),
        ei = (0, o.yK)([w.Ay], () =>
            null != et
                ? w.Ay.getVoiceStatesForChannel(et).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : [],
        ),
        er = (0, o.bG)([L.A], () => L.A.findActivity(n.id, (e) => (0, A.A)(e) && !(0, I.A)(e))),
        { analyticsLocations: es } = (0, y.Ay)(S.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ea = (0, M.A)({ display: "live", voiceChannelId: et?.id, user: n, stream: q, analyticsLocations: es }),
        eo = (0, P.A)({ userId: n.id, onAction: ea }),
        { previewUrl: el, isLoading: eu } = (0, v.A)(q?.guildId, q?.channelId, q?.ownerId),
        [ec, ed] = (0, R.zP)(et),
        e_ = (0, T.a9)() && (0, T.UK)(et?.id),
        eh = (0, o.bG)([D.A], () => null != et && !e_ && D.A.canBasicChannel(j.hVb.CONNECT, et)),
        ef = (0, g.A)(eu ? null : el),
        ep = eu || null == el ? ef : el,
        eE = r.useId();
    if (null == ee || null == et || !1 === q.discoverable) return null;
    let em = () =>
            n.id === s.id
                ? null
                : (0, i.jsx)("div", {
                      className: W.o1,
                      children: (0, i.jsx)(V.Ay, { channel: et, onAction: ea, onClose: X }),
                  }),
        eg = null != er ? Y.intl.formatToPlainString(Y.t["4CQq9Q"], { name: er.name }) : Y.intl.string(Y.t["Jpkr/q"]);
    return (0, i.jsx)(y.f5, {
        value: es,
        children: (0, i.jsxs)(k.A, {
            ref: eo,
            className: Z,
            onAction: ea,
            onClose: X,
            "aria-labelledby": eE,
            children: [
                (0, i.jsx)(U.A, {
                    text: eg,
                    tags: (0, i.jsx)(N.Ay, { size: N.ed.SMALL }),
                    contextMenu: (0, i.jsx)(B.A, { display: "live", user: n, onClose: X }),
                }),
                (0, i.jsx)(f.A, { children: (0, i.jsx)(p.H, { id: eE, children: `${eg}, ${en}` }) }),
                (0, i.jsxs)("div", {
                    className: W.rf,
                    children: [
                        (0, i.jsxs)("div", {
                            className: W.Qs,
                            children: [
                                ((t = (e) => {
                                    e.stopPropagation(),
                                        ec &&
                                            (ea({ action: "PRESS_IMAGE" }),
                                            E.default.selectVoiceChannel(q.channelId),
                                            (0, m.Nl)(q),
                                            X?.());
                                }),
                                null == ep && eu
                                    ? (0, i.jsx)("div", { className: K.VH, children: (0, i.jsx)(u.y, {}) })
                                    : null == ep || e_
                                      ? (0, i.jsxs)(c.D, {
                                            className: a()(K.VH, K.Lw, ec ? K.vk : K.r9),
                                            onClick: t,
                                            "aria-label": (0, R.CQ)(ed),
                                            "aria-disabled": !ec,
                                            children: [
                                                (0, i.jsx)("img", { alt: "", src: J === j.NJ8.LIGHT ? z : $ }),
                                                Q !== H.d.MODAL &&
                                                    Q !== H.d.MODAL_V2 &&
                                                    (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            (0, i.jsx)(d.E, {
                                                                className: K.um,
                                                                variant: "text-sm/medium",
                                                                color: "always-white",
                                                                children: (0, R.CT)(ed),
                                                            }),
                                                            (0, i.jsx)(d.E, {
                                                                variant: "text-sm/medium",
                                                                children: eh
                                                                    ? Y.intl.string(Y.t.uQZTBV)
                                                                    : Y.intl.string(Y.t.pgUTZC),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        })
                                      : (0, i.jsxs)(c.D, {
                                            className: a()(K.VH, K.Lw, ec ? K.vk : K.r9),
                                            onClick: t,
                                            "aria-label": (0, R.CQ)(ed),
                                            "aria-disabled": !ec,
                                            children: [
                                                (0, i.jsx)("img", { alt: "", src: ep, className: K.Sl }),
                                                Q !== H.d.MODAL &&
                                                    Q !== H.d.MODAL_V2 &&
                                                    (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            (0, i.jsx)(d.E, {
                                                                className: K.um,
                                                                variant: "text-sm/medium",
                                                                color: "always-white",
                                                                children: (0, R.CT)(ed),
                                                            }),
                                                            (0, i.jsx)(_.p, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: K.wI,
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        })),
                                Q !== H.d.MODAL && Q !== H.d.MODAL_V2
                                    ? null
                                    : (0, i.jsxs)("div", {
                                          className: W.zH,
                                          children: [
                                              (0, i.jsx)(G.A, { channel: et, guild: ee, onAction: ea, onClose: X }),
                                              (0, i.jsx)(l.A, {
                                                  users: ei,
                                                  guildId: ee.id,
                                                  channelId: et.id,
                                                  maxUsers: F.k,
                                                  size: h._3.SIZE_16,
                                                  onClickOverflow: (e) => {
                                                      e?.stopPropagation(),
                                                          ea?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                                                  },
                                                  onUserClick: (e) => e.stopPropagation(),
                                                  disableUserPopout: (e) => e === n.id,
                                                  overflowCountColor: "text-muted",
                                                  "aria-label": Y.intl.string(Y.t["jNqDh/"]),
                                              }),
                                              Q === H.d.MODAL_V2 && em(),
                                          ],
                                      }),
                                Q === H.d.MODAL && em(),
                            ],
                        }),
                        Q === H.d.MODAL || Q === H.d.MODAL_V2
                            ? null
                            : (0, i.jsx)(F.A, { user: n, guild: ee, channel: et, onAction: ea, onClose: X }),
                    ],
                }),
                Q !== H.d.MODAL && Q !== H.d.MODAL_V2 && em(),
            ],
        }),
    });
}
