n.d(t, { A: () => es });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(74445),
    o = n(821578),
    c = n(750459),
    d = n(17928),
    u = n(39623),
    h = n(661531),
    p = n(717421),
    m = n(778712),
    A = n(748562),
    f = n(26430),
    x = n(939249),
    g = n(367513),
    C = n(717558),
    y = n(793574),
    j = n(198052),
    I = n(85448),
    N = n(614881),
    v = n(480890),
    E = n(450149),
    b = n(607407),
    _ = n(776231),
    T = n(267102),
    S = n(326567),
    R = n(51082),
    L = n(616356),
    O = n(734057),
    P = n(309010),
    M = n(287809),
    w = n(977997),
    U = n(531685),
    D = n(562153),
    V = n(446243),
    k = n(920639),
    G = n(538638),
    B = n(558076),
    F = n(360729),
    z = n(856660),
    H = n(544299),
    W = n(996752),
    $ = n(610274),
    Y = n(655413),
    K = n(360627),
    q = n(884863),
    X = n(739820),
    Z = n(806931),
    Q = n(190460),
    J = n(270103),
    ee = n(375708),
    et = n(832770);
let en = 16 / 9;
function ei(e) {
    let { title: t, stream: n, shouldShow: a, children: s } = e,
        [r, o] = l.useState(en),
        { previewUrl: c } = (0, E.A)(n.guildId, n.channelId, n.ownerId);
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
        (0, i.jsx)(K.A, {
            clickable: !0,
            title: t,
            stream: n,
            shouldShow: a,
            spacing: 0,
            className: et.sM,
            image: (0, i.jsxs)("div", {
                className: et.J,
                style: { aspectRatio: r },
                children: [
                    (0, i.jsx)(b.A, { stream: n, className: et.y6, noText: !0 }),
                    (0, i.jsx)("div", {
                        className: et.ae,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(u.EyeIcon, { size: "sm", color: h.A.colors.WHITE }),
                    }),
                ],
            }),
            children: s,
        })
    );
}
function el(e) {
    let {
            userId: t,
            channelId: n,
            x: a,
            y: u,
            statusId: E,
            numericAvatarSize: b,
            avatarSize: F,
            posturesEnabled: W,
            seat: K,
        } = e,
        en = (0, T.Us)(),
        el = (0, d.bG)([M.default], () => M.default.getUser(t)),
        ea = (0, d.bG)([M.default], () => M.default.getCurrentUser()?.id === t),
        { isMenuOpen: es, setMenuOpen: er } = l.useContext(z.t),
        eo = !!ea && es,
        ec = (0, d.bG)([O.A], () => O.A.getChannel(n)?.guild_id),
        ed = (0, d.bG)([w.A], () => w.A.getVoiceState(ec, t)),
        eu = (0, d.bG)([L.A], () => L.A.getStreamForUser(t, ec)),
        eh = (0, C.A)({ userId: t }),
        ep = (0, d.bG)([U.A], () => U.A.isFocused()),
        em = (0, D.tx)(ec, n, el),
        eA = (0, d.bG)([B.A], () => B.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: ef } = X.iX[eA],
        ex =
            null != K && K !== c.x.UNSET
                ? ef[K]
                : Object.values(ef).find((e) => e.position.x === a && e.position.y === u),
        [eg, eC] = l.useState(!1),
        ey = (0, p.z)({
            x: a,
            y: u,
            config: { ...r.config.default, duration: 250 },
            onRest: () => eC(!1),
            onStart: () => eC(!0),
        }),
        ej = (0, d.bG)([P.Ay], () => P.Ay.getVoiceChannelId() === n),
        eI = (0, d.bG)([j.A], () => {
            let e = j.A.getParticipant(n, t);
            return (0, Z.Xw)(e) ? e : null;
        }),
        eN = (0, R.y9)(eI ?? void 0),
        ev = ej && eN && null != eI,
        eE = l.useCallback(() => {
            null != ec &&
                ((0, k.EB)({ guildId: ec, channelId: n, interactionType: "clicked" }),
                ev && (eo || !ea || !W) && (g.A.selectParticipant(n, null), (0, V.UV)(!0, n)));
        }, [ec, n, eo, ev, ea, W]),
        eb = l.useCallback(
            (e) => {
                let t = O.A.getChannel(n);
                if (null != ec && null != el && null != t)
                    return (0, S.r)(e, el, t, { context: en }, (e, t) =>
                        (0, v.s)(e, y.A.GUILD_ROOM, { tileType: Z.qs.USER, targetUserId: el.id })(t),
                    );
            },
            [ec, el, n, en],
        ),
        e_ = l.useCallback(() => {
            null != ec && (0, k.EB)({ guildId: ec, channelId: n, interactionType: "hovered" });
        }, [ec, n]),
        eT = (ea && W) || ev,
        eS = W ? $.x.find((e) => e.id === E) : null,
        eR =
            null != ex
                ? ee.intl.formatToPlainString(eS?.userLabel ?? J.default["4bL+KW"], {
                      username: em,
                      seatLabel: ex.getLabel(),
                  })
                : em,
        eL = ed?.isVoiceDeafened()
            ? ee.intl.formatToPlainString(ee.t["9hDjai"], { username: eR })
            : ed?.isVoiceMuted()
              ? ee.intl.formatToPlainString(ee.t.Hd1oVG, { username: eR })
              : eR,
        eO = (0, H.Sb)({ position: { x: a, y: u }, targetLabel: eL }),
        eP = null != eO;
    if (null == el || null == ec) return null;
    let eM = (0, m.Kj)(F),
        ew = eM.status + 2 * eM.offset,
        eU = eS?.src,
        eD = (0, _.kr)(Math.ceil(b * Q.Xq) * (0, _.mZ)()),
        eV = null != eU ? `${eU}?width=${eD}&height=${eD}` : null,
        ek = ev
            ? (0, i.jsx)(N.A, {
                  userId: el.id,
                  participant: eI,
                  size: F,
                  muted: ed?.isVoiceMuted() ?? !1,
                  deafen: ed?.isVoiceDeafened() ?? !1,
                  speaking: eh,
                  ringing: !1,
                  className: ex?.dim ? et.r3 : void 0,
                  avatarDecoration: eV,
                  avatarClassName: s()(et.Cy, eS?.avatarClassName),
                  renderIcon:
                      null != eu
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: et.Sl,
                                    style: { width: ew, height: ew },
                                    children: (0, i.jsx)(A.U, {
                                        color: h.A.colors.WHITE,
                                        style: { width: eM.status, height: eM.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(et.gP, { [et.Kf]: eo }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(f._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(I.Ay, {
                  userId: el.id,
                  src: el.getAvatarURL(ec, b, eh && ep),
                  size: F,
                  muted: ed?.isVoiceMuted() ?? !1,
                  deafen: ed?.isVoiceDeafened() ?? !1,
                  speaking: eh,
                  ringing: !1,
                  className: ex?.dim ? et.r3 : void 0,
                  avatarDecoration: eV,
                  avatarClassName: eS?.avatarClassName,
                  renderIcon:
                      null != eu
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: et.Sl,
                                    style: { width: ew, height: ew },
                                    children: (0, i.jsx)(A.U, {
                                        color: h.A.colors.WHITE,
                                        style: { width: eM.status, height: eM.status },
                                    }),
                                })
                          : void 0,
              }),
        eG = {
            left: ey.x.to((e) => `calc(${e}% - ${b / 2}px)`),
            top: ey.y.to((e) => `calc(${e}% - ${b / 2}px)`),
            zIndex: eo ? 1e6 : 1e3 * Math.round(u) + Math.round(a),
        };
    if (!W) {
        let e = (0, i.jsx)(x.D, {
            "aria-label": eL,
            className: et.KI,
            onMouseEnter: e_,
            onClick: eE,
            onContextMenu: eb,
            ...eO,
            children: ek,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: s()(et.f1, { [et.hY]: eT }),
            style: eG,
            children: null != eu ? (0, i.jsx)(ei, { title: em, stream: eu, shouldShow: !eP, children: e }) : e,
        });
    }
    let eB = (0, i.jsx)("div", { className: et.R3, children: ek }),
        eF = (0, i.jsx)(x.D, {
            "aria-label": eL,
            className: et.KI,
            onMouseEnter: e_,
            onClick: eE,
            onContextMenu: eb,
            ...eO,
            children: eB,
        }),
        ez = eg && ea ? 500 : 100;
    return (0, i.jsx)(r.animated.div, {
        role: "listitem",
        className: s()(et.f1, { [et.hY]: eT }),
        style: eG,
        children: ea
            ? (0, i.jsxs)(q.O, {
                  isOpen: eo,
                  onOpenChange: er,
                  placement: a > 50 ? "left" : "right",
                  children: [
                      (0, i.jsx)(q.O.Trigger, {
                          children: (e) => {
                              let { ref: t, onClick: n, ...l } = e,
                                  a = (0, i.jsx)(x.D, {
                                      ...l,
                                      "aria-label": eL,
                                      className: s()(et.KI, et.hZ, { [et.qS]: eo }),
                                      innerRef: t,
                                      onMouseEnter: e_,
                                      onClick: () => {
                                          n(), eE();
                                      },
                                      onContextMenu: eb,
                                      ...eO,
                                      children: ek,
                                  });
                              return null != eu
                                  ? (0, i.jsx)(ei, { title: em, stream: eu, shouldShow: !eo && !eP, children: a })
                                  : (0, i.jsx)(Y.A, { name: em, shouldShow: !eo && !eP, delay: ez, children: a });
                          },
                      }),
                      (0, i.jsx)(q.O.Popup, {
                          "aria-label": ee.intl.string(J.default.LTAf2V),
                          children: $.x.map((e) => {
                              let t = e.icon;
                              return (0, i.jsx)(
                                  q.O.Item,
                                  {
                                      text: ee.intl.string(e.label),
                                      icon: t,
                                      selected: E === e.id,
                                      onClick: () => {
                                          let t = E === e.id;
                                          (0, V.AQ)(ec, n, {
                                              user_status_id: t ? 0 : e.id,
                                              user_status_text: t ? "" : ee.intl.string(e.label),
                                          }).catch((e) => (0, G.b)());
                                      },
                                      clearButtonAriaLabel: ee.intl.string(ee.t.VkKicb),
                                  },
                                  e.id,
                              );
                          }),
                      }),
                  ],
              })
            : null != eu
              ? (0, i.jsx)(ei, { title: em, stream: eu, shouldShow: !eP, children: eF })
              : (0, i.jsx)(Y.A, { name: em, shouldShow: !eP, delay: ez, children: eF }),
    });
}
function ea(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = (0, F.mf)({ guildId: n, location: "GuildRoomUserList" }),
        u = (0, d.bG)([B.A], () => B.A.getRoom(t)?.background ?? o.I.DEFAULT),
        { seats: h } = X.iX[u];
    return (0, i.jsx)("div", {
        role: "list",
        "aria-label": ee.intl.string(J.default.xn1EI9),
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                el,
                {
                    userId: n,
                    channelId: t,
                    x: null != l.seat && l.seat !== c.x.UNSET ? h[l.seat].position.x : (l.position?.x ?? 0),
                    y: null != l.seat && l.seat !== c.x.UNSET ? h[l.seat].position.y : (l.position?.y ?? 0),
                    statusId: l.statusId,
                    numericAvatarSize: a,
                    avatarSize: s,
                    posturesEnabled: r,
                    seat: l.seat,
                },
                `${n}`,
            );
        }),
    });
}
function es(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, d.bG)([O.A], () => O.A.getChannel(t)?.guild_id),
        a = (0, d.bG)([B.A], () => B.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, W.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(ea, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
