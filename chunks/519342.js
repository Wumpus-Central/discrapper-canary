n.d(t, { A: () => er });
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
    L = n(597098),
    P = n(267102),
    O = n(421773),
    w = n(326567),
    M = n(51082),
    D = n(616356),
    U = n(734057),
    V = n(309010),
    k = n(287809),
    G = n(977997),
    B = n(531685),
    F = n(562153),
    z = n(446243),
    H = n(920639),
    W = n(558076),
    $ = n(360729),
    Y = n(996752),
    K = n(610274),
    q = n(655413),
    X = n(884863),
    Z = n(189998),
    Q = n(806931),
    J = n(190460),
    ee = n(662731),
    et = n(375708),
    en = n(820447);
let ei = 16 / 9;
function el(e) {
    let { title: t, stream: n, shouldShow: a = !0, children: s } = e,
        r = l.useRef(null),
        { isHovered: o, setIsHovered: c, onMouseEnter: x, onMouseLeave: g } = (0, O.A)(100, 100),
        [C, y] = l.useState(ei),
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
                className: en.Ne,
                children: [
                    (0, i.jsxs)(u.D, {
                        tag: "div",
                        "aria-label": et.intl.string(et.t["7Xq/nV"]),
                        className: en.J,
                        style: { aspectRatio: C },
                        onClick: () => {
                            v(), l();
                        },
                        children: [
                            (0, i.jsx)(S.A, { stream: n, className: en.y6, noText: !0 }),
                            (0, i.jsx)("div", {
                                className: en.ae,
                                "aria-hidden": !0,
                                children: (0, i.jsx)(h.b, { size: "sm", color: p.A.colors.WHITE }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 4,
                        className: en._v,
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
                                        children: et.intl.string(ee.default["2Ll0vk"]),
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
function ea(e) {
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
        R = (0, P.Us)(),
        S = (0, c.bG)([k.default], () => k.default.getUser(t)),
        O = (0, c.bG)([k.default], () => k.default.getCurrentUser()?.id === t),
        [$, Y] = l.useState(!1),
        ei = (0, c.bG)([U.A], () => U.A.getChannel(n)?.guild_id),
        ea = (0, c.bG)([G.A], () => G.A.getVoiceState(ei, t)),
        es = (0, c.bG)([D.A], () => D.A.getStreamForUser(t, ei)),
        er = (0, v.A)({ userId: t }),
        eo = (0, c.bG)([B.A], () => B.A.isFocused()),
        ec = (0, F.tx)(ei, n, S),
        ed = (0, c.bG)([W.A], () => W.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: eu } = Z.iX[ed],
        eh = eu.find((e) => e.position.x === a && e.position.y === d),
        [ep, em] = l.useState(!1),
        eA = (0, x.z)({
            x: a,
            y: d,
            config: { ...r.config.default, duration: 250 },
            onRest: () => em(!1),
            onStart: () => em(!0),
        }),
        ef = (0, c.bG)([V.Ay], () => V.Ay.getVoiceChannelId() === n),
        ex = (0, c.bG)([N.A], () => {
            let e = N.A.getParticipant(n, t);
            return (0, Q.Xw)(e) ? e : null;
        }),
        eg = (0, M.y9)(ex ?? void 0),
        eC = ef && eg && null != ex,
        ey = l.useCallback(() => {
            null != ei &&
                ((0, H.EB)({ guildId: ei, channelId: n, interactionType: "clicked" }),
                eC && ($ || !O || !I) && j.A.selectParticipant(n, ex.id));
        }, [ei, n, $, eC, ex, O, I]),
        ej = l.useCallback(
            (e) => {
                let t = U.A.getChannel(n);
                if (null != ei && null != S && null != t)
                    return (0, w.r)(e, S, t, { context: R }, (e, t) =>
                        (0, _.s)(e, E.A.GUILD_ROOM, { tileType: Q.qs.USER, targetUserId: S.id })(t),
                    );
            },
            [ei, S, n, R],
        ),
        eI = l.useCallback(() => {
            null != ei && (0, H.EB)({ guildId: ei, channelId: n, interactionType: "hovered" });
        }, [ei, n]);
    if (null == S || null == ei) return null;
    let ev = I ? K.x.find((e) => e.id === h) : null,
        eE =
            null != eh
                ? et.intl.formatToPlainString(ev?.userLabel ?? ee.default["4bL+KW"], {
                      username: ec,
                      seatLabel: eh.getLabel(),
                  })
                : ec,
        eN = ea?.isVoiceDeafened()
            ? et.intl.formatToPlainString(et.t["9hDjai"], { username: eE })
            : ea?.isVoiceMuted()
              ? et.intl.formatToPlainString(et.t.Hd1oVG, { username: eE })
              : eE,
        eb = (0, g.Kj)(A),
        eT = eb.status + 2 * eb.offset,
        e_ = ev?.src,
        eR = (0, L.kr)(Math.ceil(m * J.Xq) * (0, L.mZ)()),
        eS = null != e_ ? `${e_}?width=${eR}&height=${eR}` : null,
        eL = eC
            ? (0, i.jsx)(T.A, {
                  userId: S.id,
                  participant: ex,
                  size: A,
                  muted: ea?.isVoiceMuted() ?? !1,
                  deafen: ea?.isVoiceDeafened() ?? !1,
                  speaking: er,
                  ringing: !1,
                  className: eh?.dim ? en.r3 : void 0,
                  avatarDecoration: eS,
                  avatarClassName: ev?.avatarClassName,
                  renderIcon:
                      null != es
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: en.Sl,
                                    style: { width: eT, height: eT },
                                    children: (0, i.jsx)(f.U, {
                                        color: p.A.colors.WHITE,
                                        style: { width: eb.status, height: eb.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(en.gP, { [en.Kf]: $ }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(C._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(b.Ay, {
                  userId: S.id,
                  src: S.getAvatarURL(ei, m, er && eo),
                  size: A,
                  muted: ea?.isVoiceMuted() ?? !1,
                  deafen: ea?.isVoiceDeafened() ?? !1,
                  speaking: er,
                  ringing: !1,
                  className: eh?.dim ? en.r3 : void 0,
                  avatarDecoration: eS,
                  avatarClassName: ev?.avatarClassName,
                  renderIcon:
                      null != es
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: en.Sl,
                                    style: { width: eT, height: eT },
                                    children: (0, i.jsx)(f.U, {
                                        color: p.A.colors.WHITE,
                                        style: { width: eb.status, height: eb.status },
                                    }),
                                })
                          : void 0,
              }),
        eP = {
            left: eA.x.to((e) => `calc(${e}% - ${m / 2}px)`),
            top: eA.y.to((e) => `calc(${e}% - ${m / 2}px)`),
            zIndex: $ ? 1e6 : 1e3 * Math.round(d) + Math.round(a),
        };
    if (!I) {
        let e = (0, i.jsx)(u.D, {
            "aria-label": eN,
            className: en.KI,
            onMouseEnter: eI,
            onClick: ey,
            onContextMenu: ej,
            children: eL,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: en.f1,
            style: eP,
            children: null != es ? (0, i.jsx)(el, { title: ec, stream: es, children: e }) : e,
        });
    }
    let eO = (0, i.jsx)("div", { className: en.R3, children: eL }),
        ew = (0, i.jsx)(u.D, {
            "aria-label": eN,
            className: en.KI,
            onMouseEnter: eI,
            onClick: ey,
            onContextMenu: ej,
            children: eO,
        }),
        eM = ep && O ? 500 : 100;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                role: "listitem",
                className: en.f1,
                style: eP,
                children: O
                    ? (0, i.jsxs)(X.T, {
                          isOpen: $,
                          onOpenChange: Y,
                          children: [
                              (0, i.jsx)(X.T.Trigger, {
                                  children: (e) => {
                                      let { ref: t, onClick: n, ...l } = e,
                                          a = (0, i.jsx)(u.D, {
                                              ...l,
                                              "aria-label": eN,
                                              className: s()(en.KI, en.hZ, { [en.Zu]: $ }),
                                              innerRef: (e) => {
                                                  t.current = e;
                                              },
                                              onMouseEnter: eI,
                                              onClick: () => {
                                                  n(), ey();
                                              },
                                              onContextMenu: ej,
                                              children: eL,
                                          });
                                      return null != es
                                          ? (0, i.jsx)(el, { title: ec, stream: es, shouldShow: !$, children: a })
                                          : (0, i.jsx)(q.A, { name: ec, shouldShow: !$, delay: eM, children: a });
                                  },
                              }),
                              (0, i.jsx)(X.T.Popup, {
                                  "aria-label": et.intl.string(ee.default.LTAf2V),
                                  children: K.x.map((e) => {
                                      let t = e.icon;
                                      return (0, i.jsx)(
                                          X.T.Item,
                                          {
                                              text: et.intl.string(e.label),
                                              icon: t,
                                              selected: h === e.id,
                                              onClick: () => {
                                                  let t = h === e.id;
                                                  (0, z.AQ)(ei, n, {
                                                      user_status_id: t ? 0 : e.id,
                                                      user_status_text: t ? "" : et.intl.string(e.label),
                                                  });
                                              },
                                              clearButtonAriaLabel: et.intl.string(et.t.VkKicb),
                                          },
                                          e.id,
                                      );
                                  }),
                              }),
                          ],
                      })
                    : null != es
                      ? (0, i.jsx)(el, { title: ec, stream: es, children: ew })
                      : (0, i.jsx)(q.A, { name: ec, delay: eM, children: ew }),
            }),
            (O || null != ev) &&
                (0, i.jsx)(r.animated.div, {
                    className: s()(en.v7, { [en.Zu]: $ }),
                    style: { ...eP, width: m, height: m },
                    "aria-hidden": !0,
                    children:
                        O &&
                        (0, i.jsx)("div", {
                            className: s()(en.qS, en.Gk),
                            children: (0, i.jsx)(y.R, { size: "xxs", color: "currentColor" }),
                        }),
                }),
        ],
    });
}
function es(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = $.A.useExperiment({ guildId: n, location: "GuildRoomUserList" });
    return (0, i.jsx)("div", {
        className: en.Gh,
        role: "list",
        "aria-label": et.intl.string(ee.default.xn1EI9),
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                ea,
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
function er(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, c.bG)([U.A], () => U.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([W.A], () => W.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, Y.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(es, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
