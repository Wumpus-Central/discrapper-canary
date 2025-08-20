n.d(t, { Z: () => K }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
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
    E = n(318374),
    b = n(449605),
    y = n(102172),
    O = n(592125),
    v = n(430824),
    I = n(496675),
    T = n(158776),
    S = n(938475),
    A = n(960870),
    C = n(139793),
    N = n(510659),
    R = n(287954),
    P = n(660579),
    w = n(652853),
    D = n(64621),
    x = n(336383),
    L = n(194811),
    j = n(265386),
    M = n(668700),
    k = n(384298),
    U = n(386019),
    G = n(228168),
    B = n(981631),
    Z = n(671955),
    V = n(388032),
    F = n(704543),
    H = n(936524),
    Y = n(924482),
    W = n(774797);
function K(e) {
    let { user: t, currentUser: n, stream: a, className: K, onClose: z, profileGuildId: q } = e,
        X = i.useRef(null),
        { themeType: Q, theme: J } = (0, w.z)(),
        { interactionSource: $, interactionSourceId: ee } = (0, N.Xo)(),
        et = (0, s.e7)([v.Z], () => v.Z.getGuild(null == a ? void 0 : a.guildId)),
        en = (0, s.e7)([O.Z], () => O.Z.getChannel(null == a ? void 0 : a.channelId)),
        er = (0, s.Wu)([S.ZP], () =>
            null != en
                ? S.ZP.getVoiceStatesForChannel(en).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : [],
        ),
        ei = (0, s.e7)([T.Z], () => T.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        { analyticsLocations: ea } = (0, m.ZP)(h.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        eo = (0, A.Z)({
            display: "live",
            voiceChannelId: null == en ? void 0 : en.id,
            user: t,
            stream: a,
            analyticsLocations: ea,
        }),
        es = (0, C.Z)({
            userId: t.id,
            onAction: eo,
        }),
        [el, ec] = (0, y.wq)(en),
        eu = (0, p.Kt)() && (0, p.zd)(null == en ? void 0 : en.id),
        { previewUrl: ed, isLoading: ef } = (0, b.Z)(a.guildId, a.channelId, a.ownerId),
        e_ = (0, s.e7)([I.Z], () => null != en && !eu && I.Z.canBasicChannel(B.S7T.CONNECT, en)),
        ep = (0, d.Z)(ef ? null : ed),
        eh = ef || null == ed ? ep : ed;
    if (null == et || null == en || !1 === a.discoverable || null === Q) return null;
    let em = () => {
            let e = (e) => {
                e.stopPropagation(),
                    el &&
                        (eo({ action: "PRESS_IMAGE" }),
                        c.default.selectVoiceChannel(a.channelId),
                        (0, u.iV)(a),
                        null == z || z());
            };
            return null == eh && ef
                ? (0, r.jsx)("div", {
                      className: H.preview,
                      children: (0, r.jsx)(l.$jN, {}),
                  })
                : null == eh || eu
                  ? (0, r.jsxs)(l.P3F, {
                        className: o()(H.preview, H.overlay, el ? H.clickable : H.disabled),
                        onClick: e,
                        "aria-label": (0, y.gR)(ec),
                        "aria-disabled": !el,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                src: J === B.BRd.LIGHT ? W : Y,
                            }),
                            Q !== Z.l.MODAL &&
                                Q !== Z.l.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: H.overlayText,
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children: (0, y.P9)(ec),
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-sm/medium",
                                            children: e_ ? V.intl.string(V.t.uQZTBQ) : V.intl.string(V.t.pgUTZG),
                                        }),
                                    ],
                                }),
                        ],
                    })
                  : (0, r.jsxs)(l.P3F, {
                        className: o()(H.preview, H.overlay, el ? H.clickable : H.disabled),
                        onClick: e,
                        "aria-label": (0, y.gR)(ec),
                        "aria-disabled": !el,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                src: eh,
                                className: H.image,
                            }),
                            Q !== Z.l.MODAL &&
                                Q !== Z.l.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: H.overlayText,
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children: (0, y.P9)(ec),
                                        }),
                                        (0, r.jsx)(l.gw7, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: H.clyde,
                                        }),
                                    ],
                                }),
                        ],
                    });
        },
        eg = () =>
            Q !== Z.l.MODAL && Q !== Z.l.MODAL_V2
                ? null
                : (0, r.jsxs)("div", {
                      className: F.details,
                      children: [
                          (0, r.jsx)(j.Z, {
                              channel: en,
                              guild: et,
                              onAction: eo,
                              onClose: z,
                          }),
                          (0, r.jsx)(E.Z, {
                              users: er,
                              guildId: et.id,
                              channelId: en.id,
                              maxUsers: M.W,
                              size: l.EFr.SIZE_16,
                              onClickOverflow: (e) => {
                                  null == e || e.stopPropagation(),
                                      null == eo || eo({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                              },
                              onUserClick: (e) => e.stopPropagation(),
                              disableUserPopout: (e) => e === t.id,
                              overflowCountColor: "text-muted",
                              "aria-label": V.intl.string(V.t.jNqDh4),
                          }),
                          Q === Z.l.MODAL_V2 && eb(),
                      ],
                  }),
        eE = () =>
            Q === Z.l.MODAL || Q === Z.l.MODAL_V2
                ? null
                : (0, r.jsx)(M.Z, {
                      user: t,
                      guild: et,
                      channel: en,
                      onAction: eo,
                      onClose: z,
                  }),
        eb = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: F.actions,
                      children: (0, r.jsx)(k.Z, {
                          channel: en,
                          onAction: eo,
                          onClose: z,
                      }),
                  }),
        ey = ed,
        eO = $ === G.n_.ACTIVITY && ee === ey,
        ev = null != ei ? V.intl.formatToPlainString(V.t["4CQq9f"], { name: ei.name }) : V.intl.string(V.t["Jpkr/v"]);
    return (0, r.jsx)(m.Gt, {
        value: ea,
        children: (0, r.jsx)(D.Z, {
            targetElementRef: X,
            sourceType: G.n_.ACTIVITY,
            user: t,
            children: (0, r.jsx)(R.Z, {
                user: t,
                guildId: q,
                themeType: Q,
                sourceId: ey,
                sourceDetails: ev,
                sourceType: G.n_.ACTIVITY,
                onAction: eo,
                children: () =>
                    (0, r.jsx)(P.Z, {
                        ref: X,
                        user: t,
                        className: F.toolbarContainer,
                        interactionSourceId: ey,
                        sourceType: G.n_.ACTIVITY,
                        onAction: eo,
                        onShowToolbar: () => eo({ action: "HOVER_ACTIVITY_CARD" }),
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(U.Z, {
                                display: "live",
                                user: t,
                                onClose: z,
                                children: e,
                            }),
                        children: (0, r.jsxs)(x.Z, {
                            ref: es,
                            className: o()(K, { [F.hoisted]: eO }),
                            onAction: eo,
                            onClose: z,
                            "aria-label": ev,
                            children: [
                                (0, r.jsx)(L.Z, {
                                    text: ev,
                                    tags: (0, r.jsx)(g.ZP, { size: g.OH.SMALL }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: F.body,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: F.content,
                                            children: [em(), eg(), Q === Z.l.MODAL && eb()],
                                        }),
                                        eE(),
                                    ],
                                }),
                                Q !== Z.l.MODAL && Q !== Z.l.MODAL_V2 && eb(),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
