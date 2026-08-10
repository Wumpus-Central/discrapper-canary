n.d(t, { A: () => X });
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
    y = n(22231),
    C = n(442433),
    j = n(401843),
    v = n(717558),
    E = n(85448),
    N = n(450149),
    I = n(607407),
    b = n(421773),
    T = n(616356),
    _ = n(734057),
    R = n(287809),
    S = n(977997),
    L = n(531685),
    P = n(562153),
    w = n(446243),
    O = n(920639),
    M = n(558076),
    D = n(360729),
    U = n(996752),
    k = n(610274),
    V = n(655413),
    G = n(884863),
    B = n(189998),
    H = n(662731),
    F = n(375708),
    z = n(820447);
let W = 16 / 9;
function $(e) {
    let { title: t, stream: n, shouldShow: a = !0, children: s } = e,
        r = l.useRef(null),
        { isHovered: o, setIsHovered: c, onMouseEnter: x, onMouseLeave: g } = (0, b.A)(100, 100),
        [y, C] = l.useState(W),
        { previewUrl: v } = (0, N.A)(n.guildId, n.channelId, n.ownerId);
    l.useEffect(() => {
        if (null == v) return;
        let e = new Image();
        return (
            (e.onload = () => {
                0 !== e.naturalWidth && 0 !== e.naturalHeight && C(e.naturalWidth / e.naturalHeight);
            }),
            (e.src = v),
            () => {
                e.onload = null;
            }
        );
    }, [v]);
    let E = l.useCallback(() => {
        (0, j.A9)(n);
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
                className: z.Ne,
                children: [
                    (0, i.jsxs)(u.D, {
                        tag: "div",
                        "aria-label": F.intl.string(F.t["7Xq/nV"]),
                        className: z.J,
                        style: { aspectRatio: y },
                        onClick: () => {
                            E(), l();
                        },
                        children: [
                            (0, i.jsx)(I.A, { stream: n, className: z.y6, noText: !0 }),
                            (0, i.jsx)("div", {
                                className: z.ae,
                                "aria-hidden": !0,
                                children: (0, i.jsx)(h.b, { size: "sm", color: p.A.colors.WHITE }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 4,
                        className: z._v,
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
                                        children: F.intl.string(H.default["2Ll0vk"]),
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
function K(e) {
    let {
            userId: t,
            channelId: a,
            x: d,
            y: h,
            statusId: m,
            numericAvatarSize: A,
            avatarSize: j,
            posturesEnabled: N,
        } = e,
        I = (0, c.bG)([R.default], () => R.default.getUser(t)),
        b = (0, c.bG)([R.default], () => R.default.getCurrentUser()?.id === t),
        [D, U] = l.useState(!1),
        W = (0, c.bG)([_.A], () => _.A.getChannel(a)?.guild_id),
        K = (0, c.bG)([S.A], () => S.A.getVoiceState(W, t)),
        Y = (0, c.bG)([T.A], () => T.A.getStreamForUser(t, W)),
        X = (0, v.A)({ userId: t }),
        q = (0, c.bG)([L.A], () => L.A.isFocused()),
        Z = (0, P.tx)(W, a, I),
        Q = (0, c.bG)([M.A], () => M.A.getRoom(a)?.background ?? o.I.DEFAULT),
        { seats: J } = B.iX[Q],
        ee = J.find((e) => e.position.x === d && e.position.y === h),
        et = (0, x.z)({ x: d, y: h, config: { ...r.config.default, duration: 250 } }),
        en = l.useCallback(() => {
            null != W && (0, O.EB)({ guildId: W, channelId: a, interactionType: "clicked" });
        }, [W, a]),
        ei = l.useCallback(
            (e) => {
                let t = _.A.getChannel(a);
                if (null != W && null != I && null != t)
                    return (0, C.L3)(e, async () => {
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
                                user: I,
                                channel: t,
                                guildId: W,
                                showModalItems: !0,
                            });
                    });
            },
            [W, I, a],
        ),
        el = l.useCallback(() => {
            null != W && (0, O.EB)({ guildId: W, channelId: a, interactionType: "hovered" });
        }, [W, a]);
    if (null == I || null == W) return null;
    let ea = N ? k.x.find((e) => e.id === m) : null,
        es =
            null != ee
                ? F.intl.formatToPlainString(ea?.userLabel ?? H.default["4bL+KW"], {
                      username: Z,
                      seatLabel: ee.getLabel(),
                  })
                : Z,
        er = K?.isVoiceDeafened()
            ? F.intl.formatToPlainString(F.t["9hDjai"], { username: es })
            : K?.isVoiceMuted()
              ? F.intl.formatToPlainString(F.t.Hd1oVG, { username: es })
              : es,
        eo = (0, g.Kj)(j),
        ec = eo.status + 2 * eo.offset,
        ed = (0, i.jsx)(E.A, {
            userId: I.id,
            src: I.getAvatarURL(W, A, X && q),
            size: j,
            muted: K?.isVoiceMuted() ?? !1,
            deafen: K?.isVoiceDeafened() ?? !1,
            speaking: X,
            ringing: !1,
            className: ee?.dim ? z.r3 : void 0,
            avatarDecoration: ea?.src,
            avatarClassName: ea?.avatarClassName,
            renderIcon:
                null != Y
                    ? () =>
                          (0, i.jsx)("div", {
                              className: z.Sl,
                              style: { width: ec, height: ec },
                              children: (0, i.jsx)(f.U, {
                                  color: p.A.colors.WHITE,
                                  style: { width: eo.status, height: eo.status },
                              }),
                          })
                    : void 0,
        }),
        eu = {
            left: et.x.to((e) => `calc(${e}% - ${A / 2}px)`),
            top: et.y.to((e) => `calc(${e}% - ${A / 2}px)`),
            zIndex: D ? 1e6 : 1e3 * Math.round(h) + Math.round(d),
        };
    if (!N) {
        let e = (0, i.jsx)(u.D, {
            "aria-label": er,
            className: z.KI,
            onMouseEnter: el,
            onClick: en,
            onContextMenu: ei,
            children: ed,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: z.f1,
            style: eu,
            children: null != Y ? (0, i.jsx)($, { title: Z, stream: Y, children: e }) : e,
        });
    }
    let eh = (0, i.jsx)("div", { className: z.R3, children: ed }),
        ep = (0, i.jsx)(u.D, {
            "aria-label": er,
            className: z.KI,
            onMouseEnter: el,
            onClick: en,
            onContextMenu: ei,
            children: eh,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                role: "listitem",
                className: z.f1,
                style: eu,
                children: b
                    ? (0, i.jsxs)(G.T, {
                          isOpen: D,
                          onOpenChange: U,
                          children: [
                              (0, i.jsx)(G.T.Trigger, {
                                  children: (e) => {
                                      let { ref: t, onClick: n, ...l } = e,
                                          a = (0, i.jsx)(u.D, {
                                              ...l,
                                              "aria-label": er,
                                              className: s()(z.KI, z.hZ, { [z.Zu]: D }),
                                              innerRef: (e) => {
                                                  t.current = e;
                                              },
                                              onMouseEnter: el,
                                              onClick: () => {
                                                  n(), en();
                                              },
                                              onContextMenu: ei,
                                              children: eh,
                                          });
                                      return null != Y
                                          ? (0, i.jsx)($, { title: Z, stream: Y, shouldShow: !D, children: a })
                                          : (0, i.jsx)(V.A, { name: Z, shouldShow: !D, children: a });
                                  },
                              }),
                              (0, i.jsx)(G.T.Popup, {
                                  "aria-label": F.intl.string(H.default.LTAf2V),
                                  children: k.x.map((e) => {
                                      let t = e.icon;
                                      return (0, i.jsx)(
                                          G.T.Item,
                                          {
                                              text: F.intl.string(e.label),
                                              icon: t,
                                              selected: m === e.id,
                                              onClick: () => {
                                                  let t = m === e.id;
                                                  (0, w.AQ)(W, a, {
                                                      user_status_id: t ? 0 : e.id,
                                                      user_status_text: t ? "" : F.intl.string(e.label),
                                                  });
                                              },
                                              clearButtonAriaLabel: F.intl.string(F.t.VkKicb),
                                          },
                                          e.id,
                                      );
                                  }),
                              }),
                          ],
                      })
                    : null != Y
                      ? (0, i.jsx)($, { title: Z, stream: Y, children: ep })
                      : (0, i.jsx)(V.A, { name: Z, children: ep }),
            }),
            (b || null != ea) &&
                (0, i.jsx)(r.animated.div, {
                    className: s()(z.v7, { [z.Zu]: D }),
                    style: { ...eu, width: A, height: A },
                    "aria-hidden": !0,
                    children:
                        b &&
                        (0, i.jsx)("div", {
                            className: s()(z.qS, z.Gk),
                            children: (0, i.jsx)(y.R, { size: "xxs", color: "currentColor" }),
                        }),
                }),
        ],
    });
}
function Y(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = D.A.useExperiment({ guildId: n, location: "GuildRoomUserList" });
    return (0, i.jsx)("div", {
        className: z.Gh,
        role: "list",
        "aria-label": F.intl.string(H.default.xn1EI9),
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                K,
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
function X(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, c.bG)([_.A], () => _.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([M.A], () => M.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, U.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(Y, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
