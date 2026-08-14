n.d(t, { A: () => ei });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(53466),
    o = n(821578),
    c = n(17928),
    d = n(39623),
    u = n(661531),
    h = n(717421),
    p = n(778712),
    m = n(748562),
    f = n(26430),
    A = n(939249),
    x = n(22231),
    g = n(717558),
    C = n(793574),
    y = n(198052),
    j = n(85448),
    I = n(614881),
    v = n(480890),
    N = n(450149),
    E = n(607407),
    b = n(597098),
    _ = n(267102),
    T = n(326567),
    R = n(51082),
    S = n(616356),
    L = n(734057),
    O = n(309010),
    P = n(287809),
    w = n(977997),
    M = n(531685),
    D = n(562153),
    U = n(446243),
    V = n(920639),
    k = n(538638),
    G = n(558076),
    B = n(360729),
    F = n(996752),
    z = n(610274),
    H = n(655413),
    W = n(360627),
    $ = n(884863),
    Y = n(189998),
    K = n(806931),
    q = n(190460),
    X = n(662731),
    Z = n(375708),
    Q = n(820447);
let J = 16 / 9;
function ee(e) {
    let { title: t, stream: n, shouldShow: a, children: s } = e,
        [r, o] = l.useState(J),
        { previewUrl: c } = (0, N.A)(n.guildId, n.channelId, n.ownerId);
    return (
        l.useEffect(() => {
            if (null == c) return;
            let e = new Image();
            return (
                (e.onload = () => {
                    0 !== e.naturalWidth && 0 !== e.naturalHeight && o(e.naturalWidth / e.naturalHeight);
                }),
                (e.src = c),
                () => {
                    e.onload = null;
                }
            );
        }, [c]),
        (0, i.jsx)(W.A, {
            clickable: !0,
            title: t,
            stream: n,
            shouldShow: a,
            className: Q.sM,
            image: (0, i.jsxs)("div", {
                className: Q.J,
                style: { aspectRatio: r },
                children: [
                    (0, i.jsx)(E.A, { stream: n, className: Q.y6, noText: !0 }),
                    (0, i.jsx)("div", {
                        className: Q.ae,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(d.b, { size: "sm", color: u.A.colors.WHITE }),
                    }),
                ],
            }),
            children: s,
        })
    );
}
function et(e) {
    let {
            userId: t,
            channelId: n,
            x: a,
            y: d,
            statusId: N,
            numericAvatarSize: E,
            avatarSize: B,
            posturesEnabled: F,
        } = e,
        W = (0, _.Us)(),
        J = (0, c.bG)([P.default], () => P.default.getUser(t)),
        et = (0, c.bG)([P.default], () => P.default.getCurrentUser()?.id === t),
        [en, ei] = l.useState(!1),
        el = (0, c.bG)([L.A], () => L.A.getChannel(n)?.guild_id),
        ea = (0, c.bG)([w.A], () => w.A.getVoiceState(el, t)),
        es = (0, c.bG)([S.A], () => S.A.getStreamForUser(t, el)),
        er = (0, g.A)({ userId: t }),
        eo = (0, c.bG)([M.A], () => M.A.isFocused()),
        ec = (0, D.tx)(el, n, J),
        ed = (0, c.bG)([G.A], () => G.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: eu } = Y.iX[ed],
        eh = eu.find((e) => e.position.x === a && e.position.y === d),
        [ep, em] = l.useState(!1),
        ef = (0, h.z)({
            x: a,
            y: d,
            config: { ...r.config.default, duration: 250 },
            onRest: () => em(!1),
            onStart: () => em(!0),
        }),
        eA = (0, c.bG)([O.Ay], () => O.Ay.getVoiceChannelId() === n),
        ex = (0, c.bG)([y.A], () => {
            let e = y.A.getParticipant(n, t);
            return (0, K.Xw)(e) ? e : null;
        }),
        eg = (0, R.y9)(ex ?? void 0),
        eC = eA && eg && null != ex,
        ey = l.useCallback(() => {
            null != el &&
                ((0, V.EB)({ guildId: el, channelId: n, interactionType: "clicked" }),
                eC && (en || !et || !F) && (0, U.UV)(!0, n));
        }, [el, n, en, eC, et, F]),
        ej = l.useCallback(
            (e) => {
                let t = L.A.getChannel(n);
                if (null != el && null != J && null != t)
                    return (0, T.r)(e, J, t, { context: W }, (e, t) =>
                        (0, v.s)(e, C.A.GUILD_ROOM, { tileType: K.qs.USER, targetUserId: J.id })(t),
                    );
            },
            [el, J, n, W],
        ),
        eI = l.useCallback(() => {
            null != el && (0, V.EB)({ guildId: el, channelId: n, interactionType: "hovered" });
        }, [el, n]);
    if (null == J || null == el) return null;
    let ev = F ? z.x.find((e) => e.id === N) : null,
        eN =
            null != eh
                ? Z.intl.formatToPlainString(ev?.userLabel ?? X.default["4bL+KW"], {
                      username: ec,
                      seatLabel: eh.getLabel(),
                  })
                : ec,
        eE = ea?.isVoiceDeafened()
            ? Z.intl.formatToPlainString(Z.t["9hDjai"], { username: eN })
            : ea?.isVoiceMuted()
              ? Z.intl.formatToPlainString(Z.t.Hd1oVG, { username: eN })
              : eN,
        eb = (0, p.Kj)(B),
        e_ = eb.status + 2 * eb.offset,
        eT = ev?.src,
        eR = (0, b.kr)(Math.ceil(E * q.Xq) * (0, b.mZ)()),
        eS = null != eT ? `${eT}?width=${eR}&height=${eR}` : null,
        eL = eC
            ? (0, i.jsx)(I.A, {
                  userId: J.id,
                  participant: ex,
                  size: B,
                  muted: ea?.isVoiceMuted() ?? !1,
                  deafen: ea?.isVoiceDeafened() ?? !1,
                  speaking: er,
                  ringing: !1,
                  className: eh?.dim ? Q.r3 : void 0,
                  avatarDecoration: eS,
                  avatarClassName: ev?.avatarClassName,
                  renderIcon:
                      null != es
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: Q.Sl,
                                    style: { width: e_, height: e_ },
                                    children: (0, i.jsx)(m.U, {
                                        color: u.A.colors.WHITE,
                                        style: { width: eb.status, height: eb.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(Q.gP, { [Q.Kf]: en }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(f._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(j.Ay, {
                  userId: J.id,
                  src: J.getAvatarURL(el, E, er && eo),
                  size: B,
                  muted: ea?.isVoiceMuted() ?? !1,
                  deafen: ea?.isVoiceDeafened() ?? !1,
                  speaking: er,
                  ringing: !1,
                  className: eh?.dim ? Q.r3 : void 0,
                  avatarDecoration: eS,
                  avatarClassName: ev?.avatarClassName,
                  renderIcon:
                      null != es
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: Q.Sl,
                                    style: { width: e_, height: e_ },
                                    children: (0, i.jsx)(m.U, {
                                        color: u.A.colors.WHITE,
                                        style: { width: eb.status, height: eb.status },
                                    }),
                                })
                          : void 0,
              }),
        eO = {
            left: ef.x.to((e) => `calc(${e}% - ${E / 2}px)`),
            top: ef.y.to((e) => `calc(${e}% - ${E / 2}px)`),
            zIndex: en ? 1e6 : 1e3 * Math.round(d) + Math.round(a),
        };
    if (!F) {
        let e = (0, i.jsx)(A.D, {
            "aria-label": eE,
            className: Q.KI,
            onMouseEnter: eI,
            onClick: ey,
            onContextMenu: ej,
            children: eL,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: Q.f1,
            style: eO,
            children: null != es ? (0, i.jsx)(ee, { title: ec, stream: es, children: e }) : e,
        });
    }
    let eP = (0, i.jsx)("div", { className: Q.R3, children: eL }),
        ew = (0, i.jsx)(A.D, {
            "aria-label": eE,
            className: Q.KI,
            onMouseEnter: eI,
            onClick: ey,
            onContextMenu: ej,
            children: eP,
        }),
        eM = ep && et ? 500 : 100;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                role: "listitem",
                className: Q.f1,
                style: eO,
                children: et
                    ? (0, i.jsxs)($.T, {
                          isOpen: en,
                          onOpenChange: ei,
                          children: [
                              (0, i.jsx)($.T.Trigger, {
                                  children: (e) => {
                                      let { ref: t, onClick: n, ...l } = e,
                                          a = (0, i.jsx)(A.D, {
                                              ...l,
                                              "aria-label": eE,
                                              className: s()(Q.KI, Q.hZ, { [Q.Zu]: en }),
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
                                          ? (0, i.jsx)(ee, { title: ec, stream: es, shouldShow: !en, children: a })
                                          : (0, i.jsx)(H.A, { name: ec, shouldShow: !en, delay: eM, children: a });
                                  },
                              }),
                              (0, i.jsx)($.T.Popup, {
                                  "aria-label": Z.intl.string(X.default.LTAf2V),
                                  children: z.x.map((e) => {
                                      let t = e.icon;
                                      return (0, i.jsx)(
                                          $.T.Item,
                                          {
                                              text: Z.intl.string(e.label),
                                              icon: t,
                                              selected: N === e.id,
                                              onClick: () => {
                                                  let t = N === e.id;
                                                  (0, U.AQ)(el, n, {
                                                      user_status_id: t ? 0 : e.id,
                                                      user_status_text: t ? "" : Z.intl.string(e.label),
                                                  }).catch((e) => (0, k.b)());
                                              },
                                              clearButtonAriaLabel: Z.intl.string(Z.t.VkKicb),
                                          },
                                          e.id,
                                      );
                                  }),
                              }),
                          ],
                      })
                    : null != es
                      ? (0, i.jsx)(ee, { title: ec, stream: es, children: ew })
                      : (0, i.jsx)(H.A, { name: ec, delay: eM, children: ew }),
            }),
            (et || null != ev) &&
                (0, i.jsx)(r.animated.div, {
                    className: s()(Q.v7, { [Q.Zu]: en }),
                    style: { ...eO, width: E, height: E },
                    "aria-hidden": !0,
                    children:
                        et &&
                        (0, i.jsx)("div", {
                            className: s()(Q.qS, Q.Gk),
                            children: (0, i.jsx)(x.R, { size: "xxs", color: "currentColor" }),
                        }),
                }),
        ],
    });
}
function en(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = B.A.useExperiment({ guildId: n, location: "GuildRoomUserList" });
    return (0, i.jsx)("div", {
        className: Q.Gh,
        role: "list",
        "aria-label": Z.intl.string(X.default.xn1EI9),
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                et,
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
function ei(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, c.bG)([L.A], () => L.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([G.A], () => G.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, F.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(en, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
