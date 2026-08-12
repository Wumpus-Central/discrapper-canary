n.d(t, { A: () => ea });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(682577),
    o = n(821578),
    c = n(17928),
    d = n(922016),
    u = n(939249),
    h = n(39623),
    p = n(661531),
    m = n(331322),
    A = n(834730),
    f = n(748562),
    x = n(717421),
    g = n(778712),
    C = n(26430),
    y = n(22231),
    j = n(367513),
    I = n(401843),
    v = n(717558),
    E = n(793574),
    N = n(198052),
    b = n(85448),
    T = n(614881),
    _ = n(480890),
    R = n(450149),
    S = n(607407),
    L = n(267102),
    P = n(421773),
    O = n(326567),
    w = n(51082),
    M = n(616356),
    D = n(734057),
    U = n(309010),
    V = n(287809),
    k = n(977997),
    G = n(531685),
    B = n(562153),
    F = n(446243),
    z = n(920639),
    H = n(558076),
    W = n(360729),
    $ = n(996752),
    Y = n(610274),
    K = n(655413),
    q = n(884863),
    X = n(189998),
    Z = n(806931),
    Q = n(662731),
    J = n(375708),
    ee = n(820447);
let et = 16 / 9;
function en(e) {
    let { title: t, stream: n, shouldShow: a = !0, children: s } = e,
        r = l.useRef(null),
        { isHovered: o, setIsHovered: c, onMouseEnter: x, onMouseLeave: g } = (0, P.A)(100, 100),
        [C, y] = l.useState(et),
        { previewUrl: j } = (0, R.A)(n.guildId, n.channelId, n.ownerId);
    l.useEffect(() => {
        if (null == j) return;
        let e = new Image();
        return (
            (e.onload = () => {
                0 !== e.naturalWidth && 0 !== e.naturalHeight && y(e.naturalWidth / e.naturalHeight);
            }),
            (e.src = j),
            () => {
                e.onload = null;
            }
        );
    }, [j]);
    let v = l.useCallback(() => {
        (0, I.A9)(n);
    }, [n]);
    return (0, i.jsx)(d.Y, {
        targetElementRef: r,
        shouldShow: a && o,
        position: "top",
        align: "center",
        animation: d.Y.Animation.FADE,
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: l, setPopoutRef: a } = e;
            return (0, i.jsxs)("div", {
                ref: a,
                onMouseEnter: x,
                onMouseLeave: g,
                className: ee.Ne,
                children: [
                    (0, i.jsxs)(u.D, {
                        tag: "div",
                        "aria-label": J.intl.string(J.t["7Xq/nV"]),
                        className: ee.J,
                        style: { aspectRatio: C },
                        onClick: () => {
                            v(), l();
                        },
                        children: [
                            (0, i.jsx)(S.A, { stream: n, className: ee.y6, noText: !0 }),
                            (0, i.jsx)("div", {
                                className: ee.ae,
                                "aria-hidden": !0,
                                children: (0, i.jsx)(h.b, { size: "sm", color: p.A.colors.WHITE }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 4,
                        className: ee._v,
                        children: [
                            (0, i.jsx)(A.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t,
                            }),
                            (0, i.jsxs)(m.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, i.jsx)(f.U, { size: "xs", color: p.A.colors.TEXT_FEEDBACK_POSITIVE }),
                                    (0, i.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-feedback-positive",
                                        children: J.intl.string(Q.default["2Ll0vk"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
        },
        children: (e) =>
            (0, i.jsx)("div", { ref: r, onMouseEnter: x, onMouseLeave: g, onFocus: x, onBlur: g, ...e, children: s }),
    });
}
function ei(e) {
    let {
            userId: t,
            channelId: n,
            x: a,
            y: d,
            statusId: h,
            numericAvatarSize: m,
            avatarSize: A,
            posturesEnabled: I,
        } = e,
        R = (0, L.Us)(),
        S = (0, c.bG)([V.default], () => V.default.getUser(t)),
        P = (0, c.bG)([V.default], () => V.default.getCurrentUser()?.id === t),
        [W, $] = l.useState(!1),
        et = (0, c.bG)([D.A], () => D.A.getChannel(n)?.guild_id),
        ei = (0, c.bG)([k.A], () => k.A.getVoiceState(et, t)),
        el = (0, c.bG)([M.A], () => M.A.getStreamForUser(t, et)),
        ea = (0, v.A)({ userId: t }),
        es = (0, c.bG)([G.A], () => G.A.isFocused()),
        er = (0, B.tx)(et, n, S),
        eo = (0, c.bG)([H.A], () => H.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: ec } = X.iX[eo],
        ed = ec.find((e) => e.position.x === a && e.position.y === d),
        [eu, eh] = l.useState(!1),
        ep = (0, x.z)({
            x: a,
            y: d,
            config: { ...r.config.default, duration: 250 },
            onRest: () => eh(!1),
            onStart: () => eh(!0),
        }),
        em = (0, c.bG)([U.Ay], () => U.Ay.getVoiceChannelId() === n),
        eA = (0, c.bG)([N.A], () => {
            let e = N.A.getParticipant(n, t);
            return (0, Z.Xw)(e) ? e : null;
        }),
        ef = (0, w.y9)(eA ?? void 0),
        ex = em && ef && null != eA,
        eg = l.useCallback(() => {
            null != et &&
                ((0, z.EB)({ guildId: et, channelId: n, interactionType: "clicked" }),
                ex && (W || !P || !I) && j.A.selectParticipant(n, eA.id));
        }, [et, n, W, ex, eA, P, I]),
        eC = l.useCallback(
            (e) => {
                let t = D.A.getChannel(n);
                if (null != et && null != S && null != t)
                    return (0, O.r)(e, S, t, { context: R }, (e, t) =>
                        (0, _.s)(e, E.A.GUILD_ROOM, { tileType: Z.qs.USER, targetUserId: S.id })(t),
                    );
            },
            [et, S, n, R],
        ),
        ey = l.useCallback(() => {
            null != et && (0, z.EB)({ guildId: et, channelId: n, interactionType: "hovered" });
        }, [et, n]);
    if (null == S || null == et) return null;
    let ej = I ? Y.x.find((e) => e.id === h) : null,
        eI =
            null != ed
                ? J.intl.formatToPlainString(ej?.userLabel ?? Q.default["4bL+KW"], {
                      username: er,
                      seatLabel: ed.getLabel(),
                  })
                : er,
        ev = ei?.isVoiceDeafened()
            ? J.intl.formatToPlainString(J.t["9hDjai"], { username: eI })
            : ei?.isVoiceMuted()
              ? J.intl.formatToPlainString(J.t.Hd1oVG, { username: eI })
              : eI,
        eE = (0, g.Kj)(A),
        eN = eE.status + 2 * eE.offset,
        eb = ex
            ? (0, i.jsx)(T.A, {
                  userId: S.id,
                  participant: eA,
                  size: A,
                  muted: ei?.isVoiceMuted() ?? !1,
                  deafen: ei?.isVoiceDeafened() ?? !1,
                  speaking: ea,
                  ringing: !1,
                  className: ed?.dim ? ee.r3 : void 0,
                  avatarDecoration: ej?.src,
                  avatarClassName: ej?.avatarClassName,
                  renderIcon:
                      null != el
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: ee.Sl,
                                    style: { width: eN, height: eN },
                                    children: (0, i.jsx)(f.U, {
                                        color: p.A.colors.WHITE,
                                        style: { width: eE.status, height: eE.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(ee.gP, { [ee.Kf]: W }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(C._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(b.Ay, {
                  userId: S.id,
                  src: S.getAvatarURL(et, m, ea && es),
                  size: A,
                  muted: ei?.isVoiceMuted() ?? !1,
                  deafen: ei?.isVoiceDeafened() ?? !1,
                  speaking: ea,
                  ringing: !1,
                  className: ed?.dim ? ee.r3 : void 0,
                  avatarDecoration: ej?.src,
                  avatarClassName: ej?.avatarClassName,
                  renderIcon:
                      null != el
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: ee.Sl,
                                    style: { width: eN, height: eN },
                                    children: (0, i.jsx)(f.U, {
                                        color: p.A.colors.WHITE,
                                        style: { width: eE.status, height: eE.status },
                                    }),
                                })
                          : void 0,
              }),
        eT = {
            left: ep.x.to((e) => `calc(${e}% - ${m / 2}px)`),
            top: ep.y.to((e) => `calc(${e}% - ${m / 2}px)`),
            zIndex: W ? 1e6 : 1e3 * Math.round(d) + Math.round(a),
        };
    if (!I) {
        let e = (0, i.jsx)(u.D, {
            "aria-label": ev,
            className: ee.KI,
            onMouseEnter: ey,
            onClick: eg,
            onContextMenu: eC,
            children: eb,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: ee.f1,
            style: eT,
            children: null != el ? (0, i.jsx)(en, { title: er, stream: el, children: e }) : e,
        });
    }
    let e_ = (0, i.jsx)("div", { className: ee.R3, children: eb }),
        eR = (0, i.jsx)(u.D, {
            "aria-label": ev,
            className: ee.KI,
            onMouseEnter: ey,
            onClick: eg,
            onContextMenu: eC,
            children: e_,
        }),
        eS = eu && P ? 500 : 100;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                role: "listitem",
                className: ee.f1,
                style: eT,
                children: P
                    ? (0, i.jsxs)(q.T, {
                          isOpen: W,
                          onOpenChange: $,
                          children: [
                              (0, i.jsx)(q.T.Trigger, {
                                  children: (e) => {
                                      let { ref: t, onClick: n, ...l } = e,
                                          a = (0, i.jsx)(u.D, {
                                              ...l,
                                              "aria-label": ev,
                                              className: s()(ee.KI, ee.hZ, { [ee.Zu]: W }),
                                              innerRef: (e) => {
                                                  t.current = e;
                                              },
                                              onMouseEnter: ey,
                                              onClick: () => {
                                                  n(), eg();
                                              },
                                              onContextMenu: eC,
                                              children: eb,
                                          });
                                      return null != el
                                          ? (0, i.jsx)(en, { title: er, stream: el, shouldShow: !W, children: a })
                                          : (0, i.jsx)(K.A, { name: er, shouldShow: !W, delay: eS, children: a });
                                  },
                              }),
                              (0, i.jsx)(q.T.Popup, {
                                  "aria-label": J.intl.string(Q.default.LTAf2V),
                                  children: Y.x.map((e) => {
                                      let t = e.icon;
                                      return (0, i.jsx)(
                                          q.T.Item,
                                          {
                                              text: J.intl.string(e.label),
                                              icon: t,
                                              selected: h === e.id,
                                              onClick: () => {
                                                  let t = h === e.id;
                                                  (0, F.AQ)(et, n, {
                                                      user_status_id: t ? 0 : e.id,
                                                      user_status_text: t ? "" : J.intl.string(e.label),
                                                  });
                                              },
                                              clearButtonAriaLabel: J.intl.string(J.t.VkKicb),
                                          },
                                          e.id,
                                      );
                                  }),
                              }),
                          ],
                      })
                    : null != el
                      ? (0, i.jsx)(en, { title: er, stream: el, children: eR })
                      : (0, i.jsx)(K.A, { name: er, delay: eS, children: eR }),
            }),
            (P || null != ej) &&
                (0, i.jsx)(r.animated.div, {
                    className: s()(ee.v7, { [ee.Zu]: W }),
                    style: { ...eT, width: m, height: m },
                    "aria-hidden": !0,
                    children:
                        P &&
                        (0, i.jsx)("div", {
                            className: s()(ee.qS, ee.Gk),
                            children: (0, i.jsx)(y.R, { size: "xxs", color: "currentColor" }),
                        }),
                }),
        ],
    });
}
function el(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = W.A.useExperiment({ guildId: n, location: "GuildRoomUserList" });
    return (0, i.jsx)("div", {
        className: ee.Gh,
        role: "list",
        "aria-label": J.intl.string(Q.default.xn1EI9),
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                ei,
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
function ea(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, c.bG)([D.A], () => D.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([H.A], () => H.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, $.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(el, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
