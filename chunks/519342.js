n.d(t, { A: () => ec });
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
    f = n(331322),
    A = n(834730),
    x = n(748562),
    g = n(717421),
    C = n(778712),
    y = n(26430),
    j = n(22231),
    I = n(401843),
    v = n(717558),
    E = n(793574),
    N = n(198052),
    b = n(85448),
    _ = n(614881),
    T = n(480890),
    R = n(450149),
    S = n(607407),
    L = n(597098),
    O = n(267102),
    P = n(421773),
    w = n(326567),
    M = n(363195),
    D = n(51082),
    U = n(616356),
    V = n(734057),
    k = n(309010),
    G = n(287809),
    B = n(977997),
    F = n(531685),
    z = n(562153),
    H = n(446243),
    W = n(920639),
    $ = n(538638),
    Y = n(558076),
    K = n(360729),
    q = n(996752),
    X = n(610274),
    Z = n(655413),
    Q = n(884863),
    J = n(189998),
    ee = n(806931),
    et = n(190460),
    en = n(662731),
    ei = n(375708),
    el = n(820447);
let ea = 16 / 9;
function es(e) {
    let { title: t, stream: n, shouldShow: a = !0, children: r } = e,
        o = l.useRef(null),
        g = (0, c.bG)([M.A], () => M.A.theme),
        { isHovered: C, setIsHovered: y, onMouseEnter: j, onMouseLeave: v } = (0, P.A)(100, 100),
        [E, N] = l.useState(ea),
        { previewUrl: b } = (0, R.A)(n.guildId, n.channelId, n.ownerId);
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
    let _ = l.useCallback(() => {
        (0, I.A9)(n);
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
                        "aria-label": ei.intl.formatToPlainString(en.default.hZobvN, { username: t }),
                        className: el.sM,
                        onMouseEnter: j,
                        onMouseLeave: v,
                        onFocus: j,
                        onBlur: v,
                        onClick: () => {
                            _(), l();
                        },
                        children: (0, i.jsxs)("div", {
                            ref: a,
                            className: s()(el.Ne, e),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: el.J,
                                    style: { aspectRatio: E },
                                    children: [
                                        (0, i.jsx)(S.A, { stream: n, className: el.y6, noText: !0 }),
                                        (0, i.jsx)("div", {
                                            className: el.ae,
                                            "aria-hidden": !0,
                                            children: (0, i.jsx)(p.b, { size: "sm", color: m.A.colors.WHITE }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(f.B, {
                                    direction: "vertical",
                                    gap: 4,
                                    className: el._v,
                                    children: [
                                        (0, i.jsx)(A.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t,
                                        }),
                                        (0, i.jsxs)(f.B, {
                                            direction: "horizontal",
                                            align: "center",
                                            gap: 4,
                                            children: [
                                                (0, i.jsx)(x.U, {
                                                    size: "xs",
                                                    color: m.A.colors.TEXT_FEEDBACK_POSITIVE,
                                                }),
                                                (0, i.jsx)(A.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-feedback-positive",
                                                    children: ei.intl.string(en.default["2Ll0vk"]),
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
            (0, i.jsx)("div", { ref: o, onMouseEnter: j, onMouseLeave: v, onFocus: j, onBlur: v, ...e, children: r }),
    });
}
function er(e) {
    let {
            userId: t,
            channelId: n,
            x: a,
            y: d,
            statusId: u,
            numericAvatarSize: p,
            avatarSize: f,
            posturesEnabled: A,
        } = e,
        I = (0, O.Us)(),
        R = (0, c.bG)([G.default], () => G.default.getUser(t)),
        S = (0, c.bG)([G.default], () => G.default.getCurrentUser()?.id === t),
        [P, M] = l.useState(!1),
        K = (0, c.bG)([V.A], () => V.A.getChannel(n)?.guild_id),
        q = (0, c.bG)([B.A], () => B.A.getVoiceState(K, t)),
        ea = (0, c.bG)([U.A], () => U.A.getStreamForUser(t, K)),
        er = (0, v.A)({ userId: t }),
        eo = (0, c.bG)([F.A], () => F.A.isFocused()),
        ec = (0, z.tx)(K, n, R),
        ed = (0, c.bG)([Y.A], () => Y.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: eu } = J.iX[ed],
        eh = eu.find((e) => e.position.x === a && e.position.y === d),
        [ep, em] = l.useState(!1),
        ef = (0, g.z)({
            x: a,
            y: d,
            config: { ...r.config.default, duration: 250 },
            onRest: () => em(!1),
            onStart: () => em(!0),
        }),
        eA = (0, c.bG)([k.Ay], () => k.Ay.getVoiceChannelId() === n),
        ex = (0, c.bG)([N.A], () => {
            let e = N.A.getParticipant(n, t);
            return (0, ee.Xw)(e) ? e : null;
        }),
        eg = (0, D.y9)(ex ?? void 0),
        eC = eA && eg && null != ex,
        ey = l.useCallback(() => {
            null != K &&
                ((0, W.EB)({ guildId: K, channelId: n, interactionType: "clicked" }),
                eC && (P || !S || !A) && (0, H.UV)(!0, n));
        }, [K, n, P, eC, S, A]),
        ej = l.useCallback(
            (e) => {
                let t = V.A.getChannel(n);
                if (null != K && null != R && null != t)
                    return (0, w.r)(e, R, t, { context: I }, (e, t) =>
                        (0, T.s)(e, E.A.GUILD_ROOM, { tileType: ee.qs.USER, targetUserId: R.id })(t),
                    );
            },
            [K, R, n, I],
        ),
        eI = l.useCallback(() => {
            null != K && (0, W.EB)({ guildId: K, channelId: n, interactionType: "hovered" });
        }, [K, n]);
    if (null == R || null == K) return null;
    let ev = A ? X.x.find((e) => e.id === u) : null,
        eE =
            null != eh
                ? ei.intl.formatToPlainString(ev?.userLabel ?? en.default["4bL+KW"], {
                      username: ec,
                      seatLabel: eh.getLabel(),
                  })
                : ec,
        eN = q?.isVoiceDeafened()
            ? ei.intl.formatToPlainString(ei.t["9hDjai"], { username: eE })
            : q?.isVoiceMuted()
              ? ei.intl.formatToPlainString(ei.t.Hd1oVG, { username: eE })
              : eE,
        eb = (0, C.Kj)(f),
        e_ = eb.status + 2 * eb.offset,
        eT = ev?.src,
        eR = (0, L.kr)(Math.ceil(p * et.Xq) * (0, L.mZ)()),
        eS = null != eT ? `${eT}?width=${eR}&height=${eR}` : null,
        eL = eC
            ? (0, i.jsx)(_.A, {
                  userId: R.id,
                  participant: ex,
                  size: f,
                  muted: q?.isVoiceMuted() ?? !1,
                  deafen: q?.isVoiceDeafened() ?? !1,
                  speaking: er,
                  ringing: !1,
                  className: eh?.dim ? el.r3 : void 0,
                  avatarDecoration: eS,
                  avatarClassName: ev?.avatarClassName,
                  renderIcon:
                      null != ea
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: el.Sl,
                                    style: { width: e_, height: e_ },
                                    children: (0, i.jsx)(x.U, {
                                        color: m.A.colors.WHITE,
                                        style: { width: eb.status, height: eb.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(el.gP, { [el.Kf]: P }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(y._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(b.Ay, {
                  userId: R.id,
                  src: R.getAvatarURL(K, p, er && eo),
                  size: f,
                  muted: q?.isVoiceMuted() ?? !1,
                  deafen: q?.isVoiceDeafened() ?? !1,
                  speaking: er,
                  ringing: !1,
                  className: eh?.dim ? el.r3 : void 0,
                  avatarDecoration: eS,
                  avatarClassName: ev?.avatarClassName,
                  renderIcon:
                      null != ea
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: el.Sl,
                                    style: { width: e_, height: e_ },
                                    children: (0, i.jsx)(x.U, {
                                        color: m.A.colors.WHITE,
                                        style: { width: eb.status, height: eb.status },
                                    }),
                                })
                          : void 0,
              }),
        eO = {
            left: ef.x.to((e) => `calc(${e}% - ${p / 2}px)`),
            top: ef.y.to((e) => `calc(${e}% - ${p / 2}px)`),
            zIndex: P ? 1e6 : 1e3 * Math.round(d) + Math.round(a),
        };
    if (!A) {
        let e = (0, i.jsx)(h.D, {
            "aria-label": eN,
            className: el.KI,
            onMouseEnter: eI,
            onClick: ey,
            onContextMenu: ej,
            children: eL,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: el.f1,
            style: eO,
            children: null != ea ? (0, i.jsx)(es, { title: ec, stream: ea, children: e }) : e,
        });
    }
    let eP = (0, i.jsx)("div", { className: el.R3, children: eL }),
        ew = (0, i.jsx)(h.D, {
            "aria-label": eN,
            className: el.KI,
            onMouseEnter: eI,
            onClick: ey,
            onContextMenu: ej,
            children: eP,
        }),
        eM = ep && S ? 500 : 100;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                role: "listitem",
                className: el.f1,
                style: eO,
                children: S
                    ? (0, i.jsxs)(Q.T, {
                          isOpen: P,
                          onOpenChange: M,
                          children: [
                              (0, i.jsx)(Q.T.Trigger, {
                                  children: (e) => {
                                      let { ref: t, onClick: n, ...l } = e,
                                          a = (0, i.jsx)(h.D, {
                                              ...l,
                                              "aria-label": eN,
                                              className: s()(el.KI, el.hZ, { [el.Zu]: P }),
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
                                      return null != ea
                                          ? (0, i.jsx)(es, { title: ec, stream: ea, shouldShow: !P, children: a })
                                          : (0, i.jsx)(Z.A, { name: ec, shouldShow: !P, delay: eM, children: a });
                                  },
                              }),
                              (0, i.jsx)(Q.T.Popup, {
                                  "aria-label": ei.intl.string(en.default.LTAf2V),
                                  children: X.x.map((e) => {
                                      let t = e.icon;
                                      return (0, i.jsx)(
                                          Q.T.Item,
                                          {
                                              text: ei.intl.string(e.label),
                                              icon: t,
                                              selected: u === e.id,
                                              onClick: () => {
                                                  let t = u === e.id;
                                                  (0, H.AQ)(K, n, {
                                                      user_status_id: t ? 0 : e.id,
                                                      user_status_text: t ? "" : ei.intl.string(e.label),
                                                  }).catch((e) => (0, $.b)());
                                              },
                                              clearButtonAriaLabel: ei.intl.string(ei.t.VkKicb),
                                          },
                                          e.id,
                                      );
                                  }),
                              }),
                          ],
                      })
                    : null != ea
                      ? (0, i.jsx)(es, { title: ec, stream: ea, children: ew })
                      : (0, i.jsx)(Z.A, { name: ec, delay: eM, children: ew }),
            }),
            (S || null != ev) &&
                (0, i.jsx)(r.animated.div, {
                    className: s()(el.v7, { [el.Zu]: P }),
                    style: { ...eO, width: p, height: p },
                    "aria-hidden": !0,
                    children:
                        S &&
                        (0, i.jsx)("div", {
                            className: s()(el.qS, el.Gk),
                            children: (0, i.jsx)(j.R, { size: "xxs", color: "currentColor" }),
                        }),
                }),
        ],
    });
}
function eo(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = K.A.useExperiment({ guildId: n, location: "GuildRoomUserList" });
    return (0, i.jsx)("div", {
        className: el.Gh,
        role: "list",
        "aria-label": ei.intl.string(en.default.xn1EI9),
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                er,
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
function ec(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, c.bG)([V.A], () => V.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([Y.A], () => Y.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, q.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(eo, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
