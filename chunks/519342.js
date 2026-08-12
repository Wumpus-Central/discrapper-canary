n.d(t, { A: () => ec });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(682577),
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
        g = (0, c.bG)([D.A], () => D.A.theme),
        { isHovered: C, setIsHovered: y, onMouseEnter: j, onMouseLeave: I } = (0, w.A)(100, 100),
        [E, N] = l.useState(ea),
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
                    (0, i.jsxs)("div", {
                        ref: a,
                        onMouseEnter: j,
                        onMouseLeave: I,
                        className: s()(el.Ne, e),
                        children: [
                            (0, i.jsxs)(h.D, {
                                tag: "div",
                                "aria-label": ei.intl.string(ei.t["7Xq/nV"]),
                                className: el.J,
                                style: { aspectRatio: E },
                                onClick: () => {
                                    T(), l();
                                },
                                children: [
                                    (0, i.jsx)(L.A, { stream: n, className: el.y6, noText: !0 }),
                                    (0, i.jsx)("div", {
                                        className: el.ae,
                                        "aria-hidden": !0,
                                        children: (0, i.jsx)(p.b, { size: "sm", color: m.A.colors.WHITE }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(A.B, {
                                direction: "vertical",
                                gap: 4,
                                className: el._v,
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
                                            (0, i.jsx)(x.U, { size: "xs", color: m.A.colors.TEXT_FEEDBACK_POSITIVE }),
                                            (0, i.jsx)(f.E, {
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
            });
        },
        children: (e) =>
            (0, i.jsx)("div", { ref: o, onMouseEnter: j, onMouseLeave: I, onFocus: j, onBlur: I, ...e, children: r }),
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
            avatarSize: A,
            posturesEnabled: f,
        } = e,
        v = (0, O.Us)(),
        S = (0, c.bG)([B.default], () => B.default.getUser(t)),
        L = (0, c.bG)([B.default], () => B.default.getCurrentUser()?.id === t),
        [w, D] = l.useState(!1),
        K = (0, c.bG)([k.A], () => k.A.getChannel(n)?.guild_id),
        q = (0, c.bG)([F.A], () => F.A.getVoiceState(K, t)),
        ea = (0, c.bG)([V.A], () => V.A.getStreamForUser(t, K)),
        er = (0, E.A)({ userId: t }),
        eo = (0, c.bG)([z.A], () => z.A.isFocused()),
        ec = (0, H.tx)(K, n, S),
        ed = (0, c.bG)([Y.A], () => Y.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: eu } = J.iX[ed],
        eh = eu.find((e) => e.position.x === a && e.position.y === d),
        [ep, em] = l.useState(!1),
        eA = (0, g.z)({
            x: a,
            y: d,
            config: { ...r.config.default, duration: 250 },
            onRest: () => em(!1),
            onStart: () => em(!0),
        }),
        ef = (0, c.bG)([G.Ay], () => G.Ay.getVoiceChannelId() === n),
        ex = (0, c.bG)([b.A], () => {
            let e = b.A.getParticipant(n, t);
            return (0, ee.Xw)(e) ? e : null;
        }),
        eg = (0, U.y9)(ex ?? void 0),
        eC = ef && eg && null != ex,
        ey = l.useCallback(() => {
            null != K &&
                ((0, $.EB)({ guildId: K, channelId: n, interactionType: "clicked" }),
                eC && (w || !L || !f) && I.A.selectParticipant(n, ex.id));
        }, [K, n, w, eC, ex, L, f]),
        ej = l.useCallback(
            (e) => {
                let t = k.A.getChannel(n);
                if (null != K && null != S && null != t)
                    return (0, M.r)(e, S, t, { context: v }, (e, t) =>
                        (0, R.s)(e, N.A.GUILD_ROOM, { tileType: ee.qs.USER, targetUserId: S.id })(t),
                    );
            },
            [K, S, n, v],
        ),
        eI = l.useCallback(() => {
            null != K && (0, $.EB)({ guildId: K, channelId: n, interactionType: "hovered" });
        }, [K, n]);
    if (null == S || null == K) return null;
    let ev = f ? X.x.find((e) => e.id === u) : null,
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
        eb = (0, C.Kj)(A),
        eT = eb.status + 2 * eb.offset,
        e_ = ev?.src,
        eR = (0, P.kr)(Math.ceil(p * et.Xq) * (0, P.mZ)()),
        eS = null != e_ ? `${e_}?width=${eR}&height=${eR}` : null,
        eL = eC
            ? (0, i.jsx)(_.A, {
                  userId: S.id,
                  participant: ex,
                  size: A,
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
                                    style: { width: eT, height: eT },
                                    children: (0, i.jsx)(x.U, {
                                        color: m.A.colors.WHITE,
                                        style: { width: eb.status, height: eb.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(el.gP, { [el.Kf]: w }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(y._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(T.Ay, {
                  userId: S.id,
                  src: S.getAvatarURL(K, p, er && eo),
                  size: A,
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
                                    style: { width: eT, height: eT },
                                    children: (0, i.jsx)(x.U, {
                                        color: m.A.colors.WHITE,
                                        style: { width: eb.status, height: eb.status },
                                    }),
                                })
                          : void 0,
              }),
        eP = {
            left: eA.x.to((e) => `calc(${e}% - ${p / 2}px)`),
            top: eA.y.to((e) => `calc(${e}% - ${p / 2}px)`),
            zIndex: w ? 1e6 : 1e3 * Math.round(d) + Math.round(a),
        };
    if (!f) {
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
            style: eP,
            children: null != ea ? (0, i.jsx)(es, { title: ec, stream: ea, children: e }) : e,
        });
    }
    let eO = (0, i.jsx)("div", { className: el.R3, children: eL }),
        ew = (0, i.jsx)(h.D, {
            "aria-label": eN,
            className: el.KI,
            onMouseEnter: eI,
            onClick: ey,
            onContextMenu: ej,
            children: eO,
        }),
        eM = ep && L ? 500 : 100;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                role: "listitem",
                className: el.f1,
                style: eP,
                children: L
                    ? (0, i.jsxs)(Q.T, {
                          isOpen: w,
                          onOpenChange: D,
                          children: [
                              (0, i.jsx)(Q.T.Trigger, {
                                  children: (e) => {
                                      let { ref: t, onClick: n, ...l } = e,
                                          a = (0, i.jsx)(h.D, {
                                              ...l,
                                              "aria-label": eN,
                                              className: s()(el.KI, el.hZ, { [el.Zu]: w }),
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
                                          ? (0, i.jsx)(es, { title: ec, stream: ea, shouldShow: !w, children: a })
                                          : (0, i.jsx)(Z.A, { name: ec, shouldShow: !w, delay: eM, children: a });
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
                                                  (0, W.AQ)(K, n, {
                                                      user_status_id: t ? 0 : e.id,
                                                      user_status_text: t ? "" : ei.intl.string(e.label),
                                                  });
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
            (L || null != ev) &&
                (0, i.jsx)(r.animated.div, {
                    className: s()(el.v7, { [el.Zu]: w }),
                    style: { ...eP, width: p, height: p },
                    "aria-hidden": !0,
                    children:
                        L &&
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
        l = (0, c.bG)([k.A], () => k.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([Y.A], () => Y.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, q.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(eo, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
