n.d(t, { Z: () => Z }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(36563),
    l = n(481060),
    c = n(287734),
    u = n(872810),
    d = n(110924),
    f = n(833664),
    _ = n(579630),
    p = n(622822),
    h = n(100527),
    m = n(906732),
    g = n(194082),
    E = n(449605),
    b = n(102172),
    y = n(592125),
    O = n(430824),
    v = n(496675),
    I = n(158776),
    T = n(938475),
    S = n(960870),
    A = n(139793),
    C = n(652853),
    N = n(336383),
    R = n(194811),
    P = n(265386),
    w = n(668700),
    D = n(384298),
    x = n(670451),
    L = n(981631),
    M = n(671955),
    j = n(388032),
    k = n(704543),
    U = n(936524),
    G = n(924482),
    B = n(774797);
function Z(e) {
    let { user: t, currentUser: n, stream: i, className: Z, onClose: F } = e,
        { themeType: V, theme: H } = (0, C.z)(),
        Y = (0, o.e7)([O.Z], () => O.Z.getGuild(null == i ? void 0 : i.guildId)),
        W = (0, o.e7)([y.Z], () => y.Z.getChannel(null == i ? void 0 : i.channelId)),
        K = (0, o.Wu)([T.ZP], () =>
            null != W
                ? T.ZP.getVoiceStatesForChannel(W).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : [],
        ),
        z = (0, o.e7)([I.Z], () => I.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        { analyticsLocations: q } = (0, m.ZP)(h.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        X = (0, S.Z)({
            display: "live",
            voiceChannelId: null == W ? void 0 : W.id,
            user: t,
            stream: i,
            analyticsLocations: q,
        }),
        Q = (0, A.Z)({
            userId: t.id,
            onAction: X,
        }),
        { previewUrl: J, isLoading: $ } = (0, E.Z)(
            null == i ? void 0 : i.guildId,
            null == i ? void 0 : i.channelId,
            null == i ? void 0 : i.ownerId,
        ),
        [ee, et] = (0, b.wq)(W),
        en = (0, p.Kt)() && (0, p.zd)(null == W ? void 0 : W.id),
        er = (0, o.e7)([v.Z], () => null != W && !en && v.Z.canBasicChannel(L.S7T.CONNECT, W)),
        ei = (0, d.Z)($ ? null : J),
        ea = $ || null == J ? ei : J;
    if (null == Y || null == W || !1 === i.discoverable) return null;
    let eo = () => {
            let e = (e) => {
                e.stopPropagation(),
                    ee &&
                        (X({ action: "PRESS_IMAGE" }),
                        c.default.selectVoiceChannel(i.channelId),
                        (0, u.iV)(i),
                        null == F || F());
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
                                src: H === L.BRd.LIGHT ? B : G,
                            }),
                            V !== M.l.MODAL &&
                                V !== M.l.MODAL_V2 &&
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
                                            children: er ? j.intl.string(j.t.uQZTBV) : j.intl.string(j.t.pgUTZC),
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
                            V !== M.l.MODAL &&
                                V !== M.l.MODAL_V2 &&
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
            V !== M.l.MODAL && V !== M.l.MODAL_V2
                ? null
                : (0, r.jsxs)("div", {
                      className: k.details,
                      children: [
                          (0, r.jsx)(P.Z, {
                              channel: W,
                              guild: Y,
                              onAction: X,
                              onClose: F,
                          }),
                          (0, r.jsx)(s.Z, {
                              users: K,
                              guildId: Y.id,
                              channelId: W.id,
                              maxUsers: w.W,
                              size: l.EFr.SIZE_16,
                              onClickOverflow: (e) => {
                                  null == e || e.stopPropagation(),
                                      null == X || X({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                              },
                              onUserClick: (e) => e.stopPropagation(),
                              disableUserPopout: (e) => e === t.id,
                              overflowCountColor: "text-muted",
                              "aria-label": j.intl.string(j.t["jNqDh/"]),
                          }),
                          V === M.l.MODAL_V2 && ec(),
                      ],
                  }),
        el = () =>
            V === M.l.MODAL || V === M.l.MODAL_V2
                ? null
                : (0, r.jsx)(w.Z, {
                      user: t,
                      guild: Y,
                      channel: W,
                      onAction: X,
                      onClose: F,
                  }),
        ec = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: k.actions,
                      children: (0, r.jsx)(D.Z, {
                          channel: W,
                          onAction: X,
                          onClose: F,
                      }),
                  }),
        eu = null != z ? j.intl.formatToPlainString(j.t["4CQq9Q"], { name: z.name }) : j.intl.string(j.t["Jpkr/q"]);
    return (0, r.jsx)(m.Gt, {
        value: q,
        children: (0, r.jsxs)(N.Z, {
            ref: Q,
            className: Z,
            onAction: X,
            onClose: F,
            "aria-label": eu,
            children: [
                (0, r.jsx)(R.Z, {
                    text: eu,
                    tags: (0, r.jsx)(g.ZP, { size: g.OH.SMALL }),
                    contextMenu: (0, r.jsx)(x.Z, {
                        display: "live",
                        user: t,
                        onClose: F,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: k.body,
                    children: [
                        (0, r.jsxs)("div", {
                            className: k.content,
                            children: [eo(), es(), V === M.l.MODAL && ec()],
                        }),
                        el(),
                    ],
                }),
                V !== M.l.MODAL && V !== M.l.MODAL_V2 && ec(),
            ],
        }),
    });
}
