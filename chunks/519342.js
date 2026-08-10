n.d(t, { A: () => en });
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
    f = n(834730),
    A = n(748562),
    x = n(717421),
    g = n(778712),
    y = n(26430),
    C = n(22231),
    j = n(367513),
    v = n(442433),
    E = n(401843),
    N = n(717558),
    I = n(313961),
    b = n(85448),
    T = n(614881),
    _ = n(450149),
    R = n(607407),
    S = n(421773),
    L = n(51082),
    P = n(616356),
    w = n(734057),
    O = n(309010),
    M = n(287809),
    D = n(977997),
    U = n(531685),
    k = n(562153),
    V = n(446243),
    G = n(920639),
    B = n(558076),
    F = n(360729),
    H = n(996752),
    z = n(610274),
    W = n(655413),
    $ = n(884863),
    Y = n(189998),
    K = n(806931),
    X = n(662731),
    q = n(375708),
    Z = n(820447);
let Q = 16 / 9;
function J(e) {
    let { title: t, stream: n, shouldShow: a = !0, children: s } = e,
        r = l.useRef(null),
        { isHovered: o, setIsHovered: c, onMouseEnter: x, onMouseLeave: g } = (0, S.A)(100, 100),
        [y, C] = l.useState(Q),
        { previewUrl: j } = (0, _.A)(n.guildId, n.channelId, n.ownerId);
    l.useEffect(() => {
        if (null == j) return;
        let e = new Image();
        return (
            (e.onload = () => {
                0 !== e.naturalWidth && 0 !== e.naturalHeight && C(e.naturalWidth / e.naturalHeight);
            }),
            (e.src = j),
            () => {
                e.onload = null;
            }
        );
    }, [j]);
    let v = l.useCallback(() => {
        (0, E.A9)(n);
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
                className: Z.Ne,
                children: [
                    (0, i.jsxs)(u.D, {
                        tag: "div",
                        "aria-label": q.intl.string(q.t["7Xq/nV"]),
                        className: Z.J,
                        style: { aspectRatio: y },
                        onClick: () => {
                            v(), l();
                        },
                        children: [
                            (0, i.jsx)(R.A, { stream: n, className: Z.y6, noText: !0 }),
                            (0, i.jsx)("div", {
                                className: Z.ae,
                                "aria-hidden": !0,
                                children: (0, i.jsx)(h.b, { size: "sm", color: p.A.colors.WHITE }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 4,
                        className: Z._v,
                        children: [
                            (0, i.jsx)(f.E, {
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
                                    (0, i.jsx)(A.U, { size: "xs", color: p.A.colors.TEXT_FEEDBACK_POSITIVE }),
                                    (0, i.jsx)(f.E, {
                                        variant: "text-sm/normal",
                                        color: "text-feedback-positive",
                                        children: q.intl.string(X.default["2Ll0vk"]),
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
function ee(e) {
    let {
            userId: t,
            channelId: a,
            x: d,
            y: h,
            statusId: m,
            numericAvatarSize: f,
            avatarSize: E,
            posturesEnabled: _,
        } = e,
        R = (0, c.bG)([M.default], () => M.default.getUser(t)),
        S = (0, c.bG)([M.default], () => M.default.getCurrentUser()?.id === t),
        [F, H] = l.useState(!1),
        Q = (0, c.bG)([w.A], () => w.A.getChannel(a)?.guild_id),
        ee = (0, c.bG)([D.A], () => D.A.getVoiceState(Q, t)),
        et = (0, c.bG)([P.A], () => P.A.getStreamForUser(t, Q)),
        en = (0, N.A)({ userId: t }),
        ei = (0, c.bG)([U.A], () => U.A.isFocused()),
        el = (0, k.tx)(Q, a, R),
        ea = (0, c.bG)([B.A], () => B.A.getRoom(a)?.background ?? o.I.DEFAULT),
        { seats: es } = Y.iX[ea],
        er = es.find((e) => e.position.x === d && e.position.y === h),
        eo = (0, x.z)({ x: d, y: h, config: { ...r.config.default, duration: 250 } }),
        ec = (0, c.bG)([O.Ay], () => O.Ay.getVoiceChannelId() === a),
        ed = (0, c.bG)([I.A], () => {
            let e = I.A.getParticipant(a, t);
            return (0, K.Xw)(e) ? e : null;
        }),
        eu = (0, L.y9)(ed ?? void 0),
        eh = ec && eu && null != ed,
        ep = l.useCallback(() => {
            null != Q &&
                ((0, G.EB)({ guildId: Q, channelId: a, interactionType: "clicked" }),
                eh && (F || !S || !_) && j.A.selectParticipant(a, ed.id));
        }, [Q, a, F, eh, ed, S, _]),
        em = l.useCallback(
            (e) => {
                let t = w.A.getChannel(a);
                if (null != Q && null != R && null != t)
                    return (0, v.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("97705"),
                            n.e("26132"),
                            n.e("46652"),
                            n.e("93190"),
                            n.e("8757"),
                            n.e("85968"),
                            n.e("89673"),
                            n.e("29787"),
                            n.e("82073"),
                            n.e("97558"),
                            n.e("91994"),
                            n.e("76665"),
                            n.e("24198"),
                            n.e("45996"),
                            n.e("23427"),
                            n.e("49145"),
                            n.e("29422"),
                            n.e("7059"),
                            n.e("43116"),
                            n.e("70314"),
                            n.e("70515"),
                            n.e("4524"),
                            n.e("54148"),
                            n.e("66939"),
                            n.e("17334"),
                            n.e("84841"),
                        ]).then(n.bind(n, 107632));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                showMediaItems: !0,
                                showChannelCallItems: !0,
                                showChatItems: !1,
                                user: R,
                                channel: t,
                                guildId: Q,
                                showModalItems: !0,
                            });
                    });
            },
            [Q, R, a],
        ),
        ef = l.useCallback(() => {
            null != Q && (0, G.EB)({ guildId: Q, channelId: a, interactionType: "hovered" });
        }, [Q, a]);
    if (null == R || null == Q) return null;
    let eA = _ ? z.x.find((e) => e.id === m) : null,
        ex =
            null != er
                ? q.intl.formatToPlainString(eA?.userLabel ?? X.default["4bL+KW"], {
                      username: el,
                      seatLabel: er.getLabel(),
                  })
                : el,
        eg = ee?.isVoiceDeafened()
            ? q.intl.formatToPlainString(q.t["9hDjai"], { username: ex })
            : ee?.isVoiceMuted()
              ? q.intl.formatToPlainString(q.t.Hd1oVG, { username: ex })
              : ex,
        ey = (0, g.Kj)(E),
        eC = ey.status + 2 * ey.offset,
        ej = eh
            ? (0, i.jsx)(T.A, {
                  userId: R.id,
                  participant: ed,
                  size: E,
                  muted: ee?.isVoiceMuted() ?? !1,
                  deafen: ee?.isVoiceDeafened() ?? !1,
                  speaking: en,
                  ringing: !1,
                  className: er?.dim ? Z.r3 : void 0,
                  avatarDecoration: eA?.src,
                  avatarClassName: eA?.avatarClassName,
                  renderIcon:
                      null != et
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: Z.Sl,
                                    style: { width: eC, height: eC },
                                    children: (0, i.jsx)(A.U, {
                                        color: p.A.colors.WHITE,
                                        style: { width: ey.status, height: ey.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(Z.gP, { [Z.Kf]: F }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(y._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(b.Ay, {
                  userId: R.id,
                  src: R.getAvatarURL(Q, f, en && ei),
                  size: E,
                  muted: ee?.isVoiceMuted() ?? !1,
                  deafen: ee?.isVoiceDeafened() ?? !1,
                  speaking: en,
                  ringing: !1,
                  className: er?.dim ? Z.r3 : void 0,
                  avatarDecoration: eA?.src,
                  avatarClassName: eA?.avatarClassName,
                  renderIcon:
                      null != et
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: Z.Sl,
                                    style: { width: eC, height: eC },
                                    children: (0, i.jsx)(A.U, {
                                        color: p.A.colors.WHITE,
                                        style: { width: ey.status, height: ey.status },
                                    }),
                                })
                          : void 0,
              }),
        ev = {
            left: eo.x.to((e) => `calc(${e}% - ${f / 2}px)`),
            top: eo.y.to((e) => `calc(${e}% - ${f / 2}px)`),
            zIndex: F ? 1e6 : 1e3 * Math.round(h) + Math.round(d),
        };
    if (!_) {
        let e = (0, i.jsx)(u.D, {
            "aria-label": eg,
            className: Z.KI,
            onMouseEnter: ef,
            onClick: ep,
            onContextMenu: em,
            children: ej,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: Z.f1,
            style: ev,
            children: null != et ? (0, i.jsx)(J, { title: el, stream: et, children: e }) : e,
        });
    }
    let eE = (0, i.jsx)("div", { className: Z.R3, children: ej }),
        eN = (0, i.jsx)(u.D, {
            "aria-label": eg,
            className: Z.KI,
            onMouseEnter: ef,
            onClick: ep,
            onContextMenu: em,
            children: eE,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                role: "listitem",
                className: Z.f1,
                style: ev,
                children: S
                    ? (0, i.jsxs)($.T, {
                          isOpen: F,
                          onOpenChange: H,
                          children: [
                              (0, i.jsx)($.T.Trigger, {
                                  children: (e) => {
                                      let { ref: t, onClick: n, ...l } = e,
                                          a = (0, i.jsx)(u.D, {
                                              ...l,
                                              "aria-label": eg,
                                              className: s()(Z.KI, Z.hZ, { [Z.Zu]: F }),
                                              innerRef: (e) => {
                                                  t.current = e;
                                              },
                                              onMouseEnter: ef,
                                              onClick: () => {
                                                  n(), ep();
                                              },
                                              onContextMenu: em,
                                              children: ej,
                                          });
                                      return null != et
                                          ? (0, i.jsx)(J, { title: el, stream: et, shouldShow: !F, children: a })
                                          : (0, i.jsx)(W.A, { name: el, shouldShow: !F, children: a });
                                  },
                              }),
                              (0, i.jsx)($.T.Popup, {
                                  "aria-label": q.intl.string(X.default.LTAf2V),
                                  children: z.x.map((e) => {
                                      let t = e.icon;
                                      return (0, i.jsx)(
                                          $.T.Item,
                                          {
                                              text: q.intl.string(e.label),
                                              icon: t,
                                              selected: m === e.id,
                                              onClick: () => {
                                                  let t = m === e.id;
                                                  (0, V.AQ)(Q, a, {
                                                      user_status_id: t ? 0 : e.id,
                                                      user_status_text: t ? "" : q.intl.string(e.label),
                                                  });
                                              },
                                              clearButtonAriaLabel: q.intl.string(q.t.VkKicb),
                                          },
                                          e.id,
                                      );
                                  }),
                              }),
                          ],
                      })
                    : null != et
                      ? (0, i.jsx)(J, { title: el, stream: et, children: eN })
                      : (0, i.jsx)(W.A, { name: el, children: eN }),
            }),
            (S || null != eA) &&
                (0, i.jsx)(r.animated.div, {
                    className: s()(Z.v7, { [Z.Zu]: F }),
                    style: { ...ev, width: f, height: f },
                    "aria-hidden": !0,
                    children:
                        S &&
                        (0, i.jsx)("div", {
                            className: s()(Z.qS, Z.Gk),
                            children: (0, i.jsx)(C.R, { size: "xxs", color: "currentColor" }),
                        }),
                }),
        ],
    });
}
function et(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = F.A.useExperiment({ guildId: n, location: "GuildRoomUserList" });
    return (0, i.jsx)("div", {
        className: Z.Gh,
        role: "list",
        "aria-label": q.intl.string(X.default.xn1EI9),
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                ee,
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
function en(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, c.bG)([w.A], () => w.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([B.A], () => B.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, H.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(et, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
