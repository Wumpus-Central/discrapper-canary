n.d(t, { A: () => ed });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(159265),
    o = n(821578),
    c = n(17928),
    d = n(922016),
    u = n(43990),
    h = n(939249),
    p = n(39623),
    m = n(661531),
    A = n(331322),
    f = n(834730),
    x = n(748562),
    g = n(717421),
    C = n(778712),
    y = n(26430),
    j = n(22231),
    I = n(367513),
    v = n(401843),
    E = n(717558),
    N = n(793574),
    b = n(198052),
    T = n(85448),
    _ = n(614881),
    R = n(480890),
    S = n(450149),
    L = n(607407),
    P = n(597098),
    O = n(267102),
    w = n(421773),
    M = n(326567),
    D = n(363195),
    U = n(51082),
    V = n(616356),
    k = n(734057),
    G = n(309010),
    B = n(287809),
    F = n(977997),
    z = n(531685),
    H = n(562153),
    W = n(446243),
    $ = n(920639),
    Y = n(538638),
    K = n(558076),
    q = n(360729),
    X = n(996752),
    Z = n(610274),
    Q = n(655413),
    J = n(884863),
    ee = n(189998),
    et = n(806931),
    en = n(190460),
    ei = n(662731),
    el = n(375708),
    ea = n(820447);
let es = 16 / 9;
function er(e) {
    let { title: t, stream: n, shouldShow: a = !0, children: r } = e,
        o = l.useRef(null),
        g = (0, c.bG)([D.A], () => D.A.theme),
        { isHovered: C, setIsHovered: y, onMouseEnter: j, onMouseLeave: I } = (0, w.A)(100, 100),
        [E, N] = l.useState(es),
        { previewUrl: b } = (0, S.A)(n.guildId, n.channelId, n.ownerId);
    l.useEffect(() => {
        if (null == b) return;
        let e = new Image();
        return (
            (e.onload = () => {
                0 !== e.naturalWidth && 0 !== e.naturalHeight && N(e.naturalWidth / e.naturalHeight);
            }),
            (e.src = b),
            () => {
                e.onload = null;
            }
        );
    }, [b]);
    let T = l.useCallback(() => {
        (0, v.A9)(n);
    }, [n]);
    return (0, i.jsx)(d.Y, {
        targetElementRef: o,
        shouldShow: a && C,
        position: "top",
        align: "center",
        animation: d.Y.Animation.FADE,
        onRequestClose: () => y(!1),
        renderPopout: (e) => {
            let { closePopout: l, setPopoutRef: a } = e;
            return (0, i.jsx)(u.N, {
                theme: g,
                children: (e) =>
                    (0, i.jsx)(h.D, {
                        tag: "div",
                        "aria-label": el.intl.formatToPlainString(ei.default.hZobvN, { username: t }),
                        className: ea.sM,
                        onMouseEnter: j,
                        onMouseLeave: I,
                        onFocus: j,
                        onBlur: I,
                        onClick: () => {
                            T(), l();
                        },
                        children: (0, i.jsxs)("div", {
                            ref: a,
                            className: s()(ea.Ne, e),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: ea.J,
                                    style: { aspectRatio: E },
                                    children: [
                                        (0, i.jsx)(L.A, { stream: n, className: ea.y6, noText: !0 }),
                                        (0, i.jsx)("div", {
                                            className: ea.ae,
                                            "aria-hidden": !0,
                                            children: (0, i.jsx)(p.b, { size: "sm", color: m.A.colors.WHITE }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(A.B, {
                                    direction: "vertical",
                                    gap: 4,
                                    className: ea._v,
                                    children: [
                                        (0, i.jsx)(f.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t,
                                        }),
                                        (0, i.jsxs)(A.B, {
                                            direction: "horizontal",
                                            align: "center",
                                            gap: 4,
                                            children: [
                                                (0, i.jsx)(x.U, {
                                                    size: "xs",
                                                    color: m.A.colors.TEXT_FEEDBACK_POSITIVE,
                                                }),
                                                (0, i.jsx)(f.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-feedback-positive",
                                                    children: el.intl.string(ei.default["2Ll0vk"]),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            });
        },
        children: (e) =>
            (0, i.jsx)("div", { ref: o, onMouseEnter: j, onMouseLeave: I, onFocus: j, onBlur: I, ...e, children: r }),
    });
}
function eo(e) {
    let {
            userId: t,
            channelId: n,
            x: a,
            y: d,
            statusId: u,
            numericAvatarSize: p,
            avatarSize: A,
            posturesEnabled: f,
        } = e,
        v = (0, O.Us)(),
        S = (0, c.bG)([B.default], () => B.default.getUser(t)),
        L = (0, c.bG)([B.default], () => B.default.getCurrentUser()?.id === t),
        [w, D] = l.useState(!1),
        q = (0, c.bG)([k.A], () => k.A.getChannel(n)?.guild_id),
        X = (0, c.bG)([F.A], () => F.A.getVoiceState(q, t)),
        es = (0, c.bG)([V.A], () => V.A.getStreamForUser(t, q)),
        eo = (0, E.A)({ userId: t }),
        ec = (0, c.bG)([z.A], () => z.A.isFocused()),
        ed = (0, H.tx)(q, n, S),
        eu = (0, c.bG)([K.A], () => K.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: eh } = ee.iX[eu],
        ep = eh.find((e) => e.position.x === a && e.position.y === d),
        [em, eA] = l.useState(!1),
        ef = (0, g.z)({
            x: a,
            y: d,
            config: { ...r.config.default, duration: 250 },
            onRest: () => eA(!1),
            onStart: () => eA(!0),
        }),
        ex = (0, c.bG)([G.Ay], () => G.Ay.getVoiceChannelId() === n),
        eg = (0, c.bG)([b.A], () => {
            let e = b.A.getParticipant(n, t);
            return (0, et.Xw)(e) ? e : null;
        }),
        eC = (0, U.y9)(eg ?? void 0),
        ey = ex && eC && null != eg,
        ej = l.useCallback(() => {
            null != q &&
                ((0, $.EB)({ guildId: q, channelId: n, interactionType: "clicked" }),
                ey && (w || !L || !f) && I.A.selectParticipant(n, eg.id));
        }, [q, n, w, ey, eg, L, f]),
        eI = l.useCallback(
            (e) => {
                let t = k.A.getChannel(n);
                if (null != q && null != S && null != t)
                    return (0, M.r)(e, S, t, { context: v }, (e, t) =>
                        (0, R.s)(e, N.A.GUILD_ROOM, { tileType: et.qs.USER, targetUserId: S.id })(t),
                    );
            },
            [q, S, n, v],
        ),
        ev = l.useCallback(() => {
            null != q && (0, $.EB)({ guildId: q, channelId: n, interactionType: "hovered" });
        }, [q, n]);
    if (null == S || null == q) return null;
    let eE = f ? Z.x.find((e) => e.id === u) : null,
        eN =
            null != ep
                ? el.intl.formatToPlainString(eE?.userLabel ?? ei.default["4bL+KW"], {
                      username: ed,
                      seatLabel: ep.getLabel(),
                  })
                : ed,
        eb = X?.isVoiceDeafened()
            ? el.intl.formatToPlainString(el.t["9hDjai"], { username: eN })
            : X?.isVoiceMuted()
              ? el.intl.formatToPlainString(el.t.Hd1oVG, { username: eN })
              : eN,
        eT = (0, C.Kj)(A),
        e_ = eT.status + 2 * eT.offset,
        eR = eE?.src,
        eS = (0, P.kr)(Math.ceil(p * en.Xq) * (0, P.mZ)()),
        eL = null != eR ? `${eR}?width=${eS}&height=${eS}` : null,
        eP = ey
            ? (0, i.jsx)(_.A, {
                  userId: S.id,
                  participant: eg,
                  size: A,
                  muted: X?.isVoiceMuted() ?? !1,
                  deafen: X?.isVoiceDeafened() ?? !1,
                  speaking: eo,
                  ringing: !1,
                  className: ep?.dim ? ea.r3 : void 0,
                  avatarDecoration: eL,
                  avatarClassName: eE?.avatarClassName,
                  renderIcon:
                      null != es
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: ea.Sl,
                                    style: { width: e_, height: e_ },
                                    children: (0, i.jsx)(x.U, {
                                        color: m.A.colors.WHITE,
                                        style: { width: eT.status, height: eT.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(ea.gP, { [ea.Kf]: w }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(y._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(T.Ay, {
                  userId: S.id,
                  src: S.getAvatarURL(q, p, eo && ec),
                  size: A,
                  muted: X?.isVoiceMuted() ?? !1,
                  deafen: X?.isVoiceDeafened() ?? !1,
                  speaking: eo,
                  ringing: !1,
                  className: ep?.dim ? ea.r3 : void 0,
                  avatarDecoration: eL,
                  avatarClassName: eE?.avatarClassName,
                  renderIcon:
                      null != es
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: ea.Sl,
                                    style: { width: e_, height: e_ },
                                    children: (0, i.jsx)(x.U, {
                                        color: m.A.colors.WHITE,
                                        style: { width: eT.status, height: eT.status },
                                    }),
                                })
                          : void 0,
              }),
        eO = {
            left: ef.x.to((e) => `calc(${e}% - ${p / 2}px)`),
            top: ef.y.to((e) => `calc(${e}% - ${p / 2}px)`),
            zIndex: w ? 1e6 : 1e3 * Math.round(d) + Math.round(a),
        };
    if (!f) {
        let e = (0, i.jsx)(h.D, {
            "aria-label": eb,
            className: ea.KI,
            onMouseEnter: ev,
            onClick: ej,
            onContextMenu: eI,
            children: eP,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: ea.f1,
            style: eO,
            children: null != es ? (0, i.jsx)(er, { title: ed, stream: es, children: e }) : e,
        });
    }
    let ew = (0, i.jsx)("div", { className: ea.R3, children: eP }),
        eM = (0, i.jsx)(h.D, {
            "aria-label": eb,
            className: ea.KI,
            onMouseEnter: ev,
            onClick: ej,
            onContextMenu: eI,
            children: ew,
        }),
        eD = em && L ? 500 : 100;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                role: "listitem",
                className: ea.f1,
                style: eO,
                children: L
                    ? (0, i.jsxs)(J.T, {
                          isOpen: w,
                          onOpenChange: D,
                          children: [
                              (0, i.jsx)(J.T.Trigger, {
                                  children: (e) => {
                                      let { ref: t, onClick: n, ...l } = e,
                                          a = (0, i.jsx)(h.D, {
                                              ...l,
                                              "aria-label": eb,
                                              className: s()(ea.KI, ea.hZ, { [ea.Zu]: w }),
                                              innerRef: (e) => {
                                                  t.current = e;
                                              },
                                              onMouseEnter: ev,
                                              onClick: () => {
                                                  n(), ej();
                                              },
                                              onContextMenu: eI,
                                              children: eP,
                                          });
                                      return null != es
                                          ? (0, i.jsx)(er, { title: ed, stream: es, shouldShow: !w, children: a })
                                          : (0, i.jsx)(Q.A, { name: ed, shouldShow: !w, delay: eD, children: a });
                                  },
                              }),
                              (0, i.jsx)(J.T.Popup, {
                                  "aria-label": el.intl.string(ei.default.LTAf2V),
                                  children: Z.x.map((e) => {
                                      let t = e.icon;
                                      return (0, i.jsx)(
                                          J.T.Item,
                                          {
                                              text: el.intl.string(e.label),
                                              icon: t,
                                              selected: u === e.id,
                                              onClick: () => {
                                                  let t = u === e.id;
                                                  (0, W.AQ)(q, n, {
                                                      user_status_id: t ? 0 : e.id,
                                                      user_status_text: t ? "" : el.intl.string(e.label),
                                                  }).catch((e) => (0, Y.b)());
                                              },
                                              clearButtonAriaLabel: el.intl.string(el.t.VkKicb),
                                          },
                                          e.id,
                                      );
                                  }),
                              }),
                          ],
                      })
                    : null != es
                      ? (0, i.jsx)(er, { title: ed, stream: es, children: eM })
                      : (0, i.jsx)(Q.A, { name: ed, delay: eD, children: eM }),
            }),
            (L || null != eE) &&
                (0, i.jsx)(r.animated.div, {
                    className: s()(ea.v7, { [ea.Zu]: w }),
                    style: { ...eO, width: p, height: p },
                    "aria-hidden": !0,
                    children:
                        L &&
                        (0, i.jsx)("div", {
                            className: s()(ea.qS, ea.Gk),
                            children: (0, i.jsx)(j.R, { size: "xxs", color: "currentColor" }),
                        }),
                }),
        ],
    });
}
function ec(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = q.A.useExperiment({ guildId: n, location: "GuildRoomUserList" });
    return (0, i.jsx)("div", {
        className: ea.Gh,
        role: "list",
        "aria-label": el.intl.string(ei.default.xn1EI9),
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                eo,
                {
                    userId: n,
                    channelId: t,
                    x: l.position?.x ?? 0,
                    y: l.position?.y ?? 0,
                    statusId: l.statusId,
                    numericAvatarSize: a,
                    avatarSize: s,
                    posturesEnabled: r,
                },
                `${n}`,
            );
        }),
    });
}
function ed(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, c.bG)([k.A], () => k.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([K.A], () => K.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, X.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(ec, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
