n.d(t, { Z: () => F }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(36563),
    l = n(481060),
    c = n(287734),
    u = n(872810),
    d = n(110924),
    f = n(833664),
    p = n(579630),
    _ = n(622822),
    m = n(100527),
    h = n(906732),
    g = n(194082),
    E = n(449605),
    b = n(102172),
    y = n(592125),
    O = n(430824),
    v = n(496675),
    S = n(158776),
    I = n(938475),
    T = n(960870),
    C = n(139793),
    A = n(652853),
    N = n(336383),
    P = n(194811),
    R = n(265386),
    w = n(668700),
    D = n(384298),
    x = n(670451),
    L = n(981631),
    j = n(671955),
    M = n(388032),
    k = n(251806),
    U = n(272642),
    G = n(924482),
    Z = n(774797);
function F(e) {
    let { user: t, currentUser: n, stream: i, className: F, onClose: B } = e,
        { themeType: V, theme: H } = (0, A.z)(),
        Y = (0, o.e7)([O.Z], () => O.Z.getGuild(null == i ? void 0 : i.guildId)),
        W = (0, o.e7)([y.Z], () => y.Z.getChannel(null == i ? void 0 : i.channelId)),
        K = (0, o.Wu)([I.ZP], () =>
            null != W
                ? I.ZP.getVoiceStatesForChannel(W).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : [],
        ),
        z = (0, o.e7)([S.Z], () => S.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, p.Z)(e))),
        { analyticsLocations: q } = (0, h.ZP)(m.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Q = (0, T.Z)({
            display: "live",
            voiceChannelId: null == W ? void 0 : W.id,
            user: t,
            stream: i,
            analyticsLocations: q,
        }),
        X = (0, C.Z)({
            userId: t.id,
            onAction: Q,
        }),
        { previewUrl: J, isLoading: $ } = (0, E.Z)(
            null == i ? void 0 : i.guildId,
            null == i ? void 0 : i.channelId,
            null == i ? void 0 : i.ownerId,
        ),
        [ee, et] = (0, b.wq)(W),
        en = (0, _.Kt)() && (0, _.zd)(null == W ? void 0 : W.id),
        er = (0, o.e7)([v.Z], () => null != W && !en && v.Z.canBasicChannel(L.S7T.CONNECT, W)),
        ei = (0, d.Z)($ ? null : J),
        ea = $ || null == J ? ei : J;
    if (null == Y || null == W || !1 === i.discoverable) return null;
    let eo = () => {
            let e = (e) => {
                e.stopPropagation(),
                    ee &&
                        (Q({ action: "PRESS_IMAGE" }),
                        c.default.selectVoiceChannel(i.channelId),
                        (0, u.iV)(i),
                        null == B || B());
            };
            return null == ea && $
                ? (0, r.jsx)("div", {
                      className: U.preview,
                      children: (0, r.jsx)(l.$jN, {}),
                  })
                : null == ea || en
                  ? (0, r.jsxs)(l.P3F, {
                        className: a()(U.preview, U.overlay, ee ? U.clickable : U.disabled),
                        onClick: e,
                        "aria-label": (0, b.gR)(et),
                        "aria-disabled": !ee,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                src: H === L.BRd.LIGHT ? Z : G,
                            }),
                            V !== j.l.MODAL &&
                                V !== j.l.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: U.overlayText,
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children: (0, b.P9)(et),
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-sm/medium",
                                            children: er ? M.intl.string(M.t.uQZTBV) : M.intl.string(M.t.pgUTZC),
                                        }),
                                    ],
                                }),
                        ],
                    })
                  : (0, r.jsxs)(l.P3F, {
                        className: a()(U.preview, U.overlay, ee ? U.clickable : U.disabled),
                        onClick: e,
                        "aria-label": (0, b.gR)(et),
                        "aria-disabled": !ee,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                src: ea,
                                className: U.image,
                            }),
                            V !== j.l.MODAL &&
                                V !== j.l.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: U.overlayText,
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children: (0, b.P9)(et),
                                        }),
                                        (0, r.jsx)(l.gw7, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: U.clyde,
                                        }),
                                    ],
                                }),
                        ],
                    });
        },
        es = () =>
            V !== j.l.MODAL && V !== j.l.MODAL_V2
                ? null
                : (0, r.jsxs)("div", {
                      className: k.details,
                      children: [
                          (0, r.jsx)(R.Z, {
                              channel: W,
                              guild: Y,
                              onAction: Q,
                              onClose: B,
                          }),
                          (0, r.jsx)(s.Z, {
                              users: K,
                              guildId: Y.id,
                              channelId: W.id,
                              maxUsers: w.W,
                              size: l.EFr.SIZE_16,
                              onClickOverflow: (e) => {
                                  null == e || e.stopPropagation(),
                                      null == Q || Q({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                              },
                              onUserClick: (e) => e.stopPropagation(),
                              disableUserPopout: (e) => e === t.id,
                              overflowCountColor: "text-muted",
                              "aria-label": M.intl.string(M.t["jNqDh/"]),
                          }),
                          V === j.l.MODAL_V2 && ec(),
                      ],
                  }),
        el = () =>
            V === j.l.MODAL || V === j.l.MODAL_V2
                ? null
                : (0, r.jsx)(w.Z, {
                      user: t,
                      guild: Y,
                      channel: W,
                      onAction: Q,
                      onClose: B,
                  }),
        ec = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: k.actions,
                      children: (0, r.jsx)(D.Z, {
                          channel: W,
                          onAction: Q,
                          onClose: B,
                      }),
                  }),
        eu = null != z ? M.intl.formatToPlainString(M.t["4CQq9Q"], { name: z.name }) : M.intl.string(M.t["Jpkr/q"]);
    return (0, r.jsx)(h.Gt, {
        value: q,
        children: (0, r.jsxs)(N.Z, {
            ref: X,
            className: F,
            onAction: Q,
            onClose: B,
            "aria-label": eu,
            children: [
                (0, r.jsx)(P.Z, {
                    text: eu,
                    tags: (0, r.jsx)(g.ZP, { size: g.OH.SMALL }),
                    contextMenu: (0, r.jsx)(x.Z, {
                        display: "live",
                        user: t,
                        onClose: B,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: k.body,
                    children: [
                        (0, r.jsxs)("div", {
                            className: k.content,
                            children: [eo(), es(), V === j.l.MODAL && ec()],
                        }),
                        el(),
                    ],
                }),
                V !== j.l.MODAL && V !== j.l.MODAL_V2 && ec(),
            ],
        }),
    });
}
