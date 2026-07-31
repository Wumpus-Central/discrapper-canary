n.d(t, { A: () => M });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(560952),
    o = n(821578),
    c = n(17928),
    d = n(717421),
    u = n(939249),
    h = n(22231),
    p = n(442433),
    m = n(717558),
    A = n(85448),
    f = n(734057),
    x = n(287809),
    g = n(977997),
    C = n(531685),
    y = n(562153),
    j = n(446243),
    v = n(920639),
    E = n(558076),
    N = n(360729),
    I = n(996752),
    b = n(610274),
    T = n(655413),
    R = n(884863),
    _ = n(4264),
    S = n(662731),
    P = n(375708),
    L = n(820447);
function w(e) {
    let {
            userId: t,
            channelId: a,
            x: N,
            y: I,
            statusId: w,
            numericAvatarSize: O,
            avatarSize: M,
            posturesEnabled: D,
        } = e,
        U = (0, c.bG)([x.default], () => x.default.getUser(t)),
        k = (0, c.bG)([x.default], () => x.default.getCurrentUser()?.id === t),
        [V, G] = l.useState(!1),
        B = (0, c.bG)([f.A], () => f.A.getChannel(a)?.guild_id),
        H = (0, c.bG)([g.A], () => g.A.getVoiceState(B, t)),
        F = (0, m.A)({ userId: t }),
        z = (0, c.bG)([C.A], () => C.A.isFocused()),
        W = (0, y.tx)(B, a, U),
        Y = (0, c.bG)([E.A], () => E.A.getRoom(a)?.background ?? o.I.DEFAULT),
        { seats: K } = _.iX[Y],
        X = K.find((e) => e.position.x === N && e.position.y === I),
        $ = (0, d.z)({ x: N, y: I, config: { ...r.config.default, duration: 250 } }),
        Z = l.useCallback(() => {
            null != B && (0, v.EB)({ guildId: B, channelId: a, interactionType: "clicked" });
        }, [B, a]),
        q = l.useCallback(
            (e) => {
                let t = f.A.getChannel(a);
                if (null != B && null != U && null != t)
                    return (0, p.L3)(e, async () => {
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
                                user: U,
                                channel: t,
                                guildId: B,
                                showModalItems: !0,
                            });
                    });
            },
            [B, U, a],
        ),
        Q = l.useCallback(() => {
            null != B && (0, v.EB)({ guildId: B, channelId: a, interactionType: "hovered" });
        }, [B, a]);
    if (null == U || null == B) return null;
    let J = H?.isVoiceDeafened()
            ? P.intl.formatToPlainString(P.t["9hDjai"], { username: W })
            : H?.isVoiceMuted()
              ? P.intl.formatToPlainString(P.t.Hd1oVG, { username: W })
              : W,
        ee = (0, i.jsx)(A.A, {
            userId: U.id,
            src: U.getAvatarURL(B, O, F && z),
            size: M,
            muted: H?.isVoiceMuted() ?? !1,
            deafen: H?.isVoiceDeafened() ?? !1,
            speaking: F,
            ringing: !1,
            className: X?.dim ? L.r3 : void 0,
        }),
        et = {
            left: $.x.to((e) => `calc(${e}% - ${O / 2}px)`),
            top: $.y.to((e) => `calc(${e}% - ${O / 2}px)`),
            zIndex: V ? 1e6 : 1e3 * Math.round(I) + Math.round(N),
        };
    if (!D)
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: L.f1,
            style: et,
            children: (0, i.jsx)(u.D, {
                "aria-label": J,
                className: L.KI,
                onMouseEnter: Q,
                onClick: Z,
                onContextMenu: q,
                children: ee,
            }),
        });
    let en = b.x.find((e) => e.id === w),
        ei = en?.icon,
        el = (0, i.jsx)("div", { className: L.R3, children: ee });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                role: "listitem",
                className: L.f1,
                style: et,
                children: k
                    ? (0, i.jsxs)(R.T, {
                          isOpen: V,
                          onOpenChange: G,
                          children: [
                              (0, i.jsx)(R.T.Trigger, {
                                  children: (e) => {
                                      let { ref: t, onClick: n, ...l } = e;
                                      return (0, i.jsx)(T.A, {
                                          name: W,
                                          status: en,
                                          shouldShow: !V,
                                          children: (0, i.jsx)(u.D, {
                                              ...l,
                                              "aria-label": J,
                                              className: s()(L.KI, L.hZ, { [L.Zu]: V }),
                                              innerRef: (e) => {
                                                  t.current = e;
                                              },
                                              onMouseEnter: Q,
                                              onClick: () => {
                                                  n(), Z();
                                              },
                                              onContextMenu: q,
                                              children: el,
                                          }),
                                      });
                                  },
                              }),
                              (0, i.jsx)(R.T.Popup, {
                                  "aria-label": P.intl.string(S.default.LTAf2V),
                                  children: b.x.map((e) => {
                                      let t = e.icon;
                                      return (0, i.jsx)(
                                          R.T.Item,
                                          {
                                              text: P.intl.string(e.label),
                                              icon: t,
                                              selected: w === e.id,
                                              onClick: () => {
                                                  let t = w === e.id;
                                                  (0, j.AQ)(B, a, {
                                                      user_status_id: t ? 0 : e.id,
                                                      user_status_text: t ? "" : P.intl.string(e.label),
                                                  });
                                              },
                                          },
                                          e.id,
                                      );
                                  }),
                              }),
                          ],
                      })
                    : (0, i.jsx)(T.A, {
                          name: W,
                          status: en,
                          children: (0, i.jsx)(u.D, {
                              "aria-label": J,
                              className: L.KI,
                              onMouseEnter: Q,
                              onClick: Z,
                              onContextMenu: q,
                              children: el,
                          }),
                      }),
            }),
            (k || (null != en && null != ei)) &&
                (0, i.jsxs)(r.animated.div, {
                    className: s()(L.v7, { [L.Zu]: V }),
                    style: { ...et, width: O, height: O },
                    "aria-hidden": !0,
                    children: [
                        null != en &&
                            null != ei &&
                            (0, i.jsx)("div", {
                                className: s()(L.qS, L.Od),
                                children: (0, i.jsx)(ei, { size: "xxs", color: "currentColor" }),
                            }),
                        k &&
                            (0, i.jsx)("div", {
                                className: s()(L.qS, L.Gk),
                                children: (0, i.jsx)(h.R, { size: "xxs", color: "currentColor" }),
                            }),
                    ],
                }),
        ],
    });
}
function O(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = N.A.useExperiment({ guildId: n, location: "GuildRoomUserList" });
    return (0, i.jsx)("div", {
        className: L.Gh,
        role: "list",
        "aria-label": P.intl.string(S.default.xn1EI9),
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                w,
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
function M(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, c.bG)([f.A], () => f.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([E.A], () => E.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, I.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(O, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
