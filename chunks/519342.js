n.d(t, { A: () => ea });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(221877),
    o = n(821578),
    c = n(17928),
    d = n(39623),
    u = n(661531),
    h = n(717421),
    p = n(778712),
    m = n(748562),
    A = n(26430),
    f = n(939249),
    x = n(367513),
    g = n(717558),
    C = n(793574),
    y = n(198052),
    j = n(85448),
    I = n(614881),
    N = n(480890),
    v = n(450149),
    E = n(607407),
    b = n(776231),
    T = n(267102),
    _ = n(326567),
    R = n(51082),
    S = n(616356),
    L = n(734057),
    O = n(309010),
    P = n(287809),
    M = n(977997),
    w = n(531685),
    U = n(562153),
    D = n(446243),
    V = n(920639),
    k = n(538638),
    G = n(558076),
    B = n(360729),
    F = n(856660),
    H = n(544299),
    z = n(996752),
    W = n(610274),
    $ = n(655413),
    Y = n(360627),
    K = n(884863),
    q = n(189998),
    X = n(806931),
    Z = n(190460),
    Q = n(1195),
    J = n(375708),
    ee = n(832770);
let et = 16 / 9;
function en(e) {
    let { title: t, stream: n, shouldShow: a, children: s } = e,
        [r, o] = l.useState(et),
        { previewUrl: c } = (0, v.A)(n.guildId, n.channelId, n.ownerId);
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
        (0, i.jsx)(Y.A, {
            clickable: !0,
            title: t,
            stream: n,
            shouldShow: a,
            spacing: 0,
            className: ee.sM,
            image: (0, i.jsxs)("div", {
                className: ee.J,
                style: { aspectRatio: r },
                children: [
                    (0, i.jsx)(E.A, { stream: n, className: ee.y6, noText: !0 }),
                    (0, i.jsx)("div", {
                        className: ee.ae,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(d.EyeIcon, { size: "sm", color: u.A.colors.WHITE }),
                    }),
                ],
            }),
            children: s,
        })
    );
}
function ei(e) {
    let {
            userId: t,
            channelId: n,
            x: a,
            y: d,
            statusId: v,
            numericAvatarSize: E,
            avatarSize: B,
            posturesEnabled: z,
        } = e,
        Y = (0, T.Us)(),
        et = (0, c.bG)([P.default], () => P.default.getUser(t)),
        ei = (0, c.bG)([P.default], () => P.default.getCurrentUser()?.id === t),
        { isMenuOpen: el, setMenuOpen: ea } = l.useContext(F.t),
        es = !!ei && el,
        er = (0, c.bG)([L.A], () => L.A.getChannel(n)?.guild_id),
        eo = (0, c.bG)([M.A], () => M.A.getVoiceState(er, t)),
        ec = (0, c.bG)([S.A], () => S.A.getStreamForUser(t, er)),
        ed = (0, g.A)({ userId: t }),
        eu = (0, c.bG)([w.A], () => w.A.isFocused()),
        eh = (0, U.tx)(er, n, et),
        ep = (0, c.bG)([G.A], () => G.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: em } = q.iX[ep],
        eA = em.find((e) => e.position.x === a && e.position.y === d),
        [ef, ex] = l.useState(!1),
        eg = (0, h.z)({
            x: a,
            y: d,
            config: { ...r.config.default, duration: 250 },
            onRest: () => ex(!1),
            onStart: () => ex(!0),
        }),
        eC = (0, c.bG)([O.Ay], () => O.Ay.getVoiceChannelId() === n),
        ey = (0, c.bG)([y.A], () => {
            let e = y.A.getParticipant(n, t);
            return (0, X.Xw)(e) ? e : null;
        }),
        ej = (0, R.y9)(ey ?? void 0),
        eI = eC && ej && null != ey,
        eN = l.useCallback(() => {
            null != er &&
                ((0, V.EB)({ guildId: er, channelId: n, interactionType: "clicked" }),
                eI && (es || !ei || !z) && (x.A.selectParticipant(n, null), (0, D.UV)(!0, n)));
        }, [er, n, es, eI, ei, z]),
        ev = l.useCallback(
            (e) => {
                let t = L.A.getChannel(n);
                if (null != er && null != et && null != t)
                    return (0, _.r)(e, et, t, { context: Y }, (e, t) =>
                        (0, N.s)(e, C.A.GUILD_ROOM, { tileType: X.qs.USER, targetUserId: et.id })(t),
                    );
            },
            [er, et, n, Y],
        ),
        eE = l.useCallback(() => {
            null != er && (0, V.EB)({ guildId: er, channelId: n, interactionType: "hovered" });
        }, [er, n]),
        eb = (ei && z) || eI,
        eT = z ? W.x.find((e) => e.id === v) : null,
        e_ =
            null != eA
                ? J.intl.formatToPlainString(eT?.userLabel ?? Q.default["4bL+KW"], {
                      username: eh,
                      seatLabel: eA.getLabel(),
                  })
                : eh,
        eR = eo?.isVoiceDeafened()
            ? J.intl.formatToPlainString(J.t["9hDjai"], { username: e_ })
            : eo?.isVoiceMuted()
              ? J.intl.formatToPlainString(J.t.Hd1oVG, { username: e_ })
              : e_,
        eS = (0, H.Sb)({ position: { x: a, y: d }, targetLabel: eR }),
        eL = null != eS;
    if (null == et || null == er) return null;
    let eO = (0, p.Kj)(B),
        eP = eO.status + 2 * eO.offset,
        eM = eT?.src,
        ew = (0, b.kr)(Math.ceil(E * Z.Xq) * (0, b.mZ)()),
        eU = null != eM ? `${eM}?width=${ew}&height=${ew}` : null,
        eD = eI
            ? (0, i.jsx)(I.A, {
                  userId: et.id,
                  participant: ey,
                  size: B,
                  muted: eo?.isVoiceMuted() ?? !1,
                  deafen: eo?.isVoiceDeafened() ?? !1,
                  speaking: ed,
                  ringing: !1,
                  className: eA?.dim ? ee.r3 : void 0,
                  avatarDecoration: eU,
                  avatarClassName: s()(ee.Cy, eT?.avatarClassName),
                  renderIcon:
                      null != ec
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: ee.Sl,
                                    style: { width: eP, height: eP },
                                    children: (0, i.jsx)(m.U, {
                                        color: u.A.colors.WHITE,
                                        style: { width: eO.status, height: eO.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(ee.gP, { [ee.Kf]: es }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(A._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(j.Ay, {
                  userId: et.id,
                  src: et.getAvatarURL(er, E, ed && eu),
                  size: B,
                  muted: eo?.isVoiceMuted() ?? !1,
                  deafen: eo?.isVoiceDeafened() ?? !1,
                  speaking: ed,
                  ringing: !1,
                  className: eA?.dim ? ee.r3 : void 0,
                  avatarDecoration: eU,
                  avatarClassName: eT?.avatarClassName,
                  renderIcon:
                      null != ec
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: ee.Sl,
                                    style: { width: eP, height: eP },
                                    children: (0, i.jsx)(m.U, {
                                        color: u.A.colors.WHITE,
                                        style: { width: eO.status, height: eO.status },
                                    }),
                                })
                          : void 0,
              }),
        eV = {
            left: eg.x.to((e) => `calc(${e}% - ${E / 2}px)`),
            top: eg.y.to((e) => `calc(${e}% - ${E / 2}px)`),
            zIndex: es ? 1e6 : 1e3 * Math.round(d) + Math.round(a),
        };
    if (!z) {
        let e = (0, i.jsx)(f.D, {
            "aria-label": eR,
            className: ee.KI,
            onMouseEnter: eE,
            onClick: eN,
            onContextMenu: ev,
            ...eS,
            children: eD,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: s()(ee.f1, { [ee.hY]: eb }),
            style: eV,
            children: null != ec ? (0, i.jsx)(en, { title: eh, stream: ec, shouldShow: !eL, children: e }) : e,
        });
    }
    let ek = (0, i.jsx)("div", { className: ee.R3, children: eD }),
        eG = (0, i.jsx)(f.D, {
            "aria-label": eR,
            className: ee.KI,
            onMouseEnter: eE,
            onClick: eN,
            onContextMenu: ev,
            ...eS,
            children: ek,
        }),
        eB = ef && ei ? 500 : 100;
    return (0, i.jsx)(r.animated.div, {
        role: "listitem",
        className: s()(ee.f1, { [ee.hY]: eb }),
        style: eV,
        children: ei
            ? (0, i.jsxs)(K.O, {
                  isOpen: es,
                  onOpenChange: ea,
                  placement: a > 50 ? "left" : "right",
                  children: [
                      (0, i.jsx)(K.O.Trigger, {
                          children: (e) => {
                              let { ref: t, onClick: n, ...l } = e,
                                  a = (0, i.jsx)(f.D, {
                                      ...l,
                                      "aria-label": eR,
                                      className: s()(ee.KI, ee.hZ, { [ee.qS]: es }),
                                      innerRef: t,
                                      onMouseEnter: eE,
                                      onClick: () => {
                                          n(), eN();
                                      },
                                      onContextMenu: ev,
                                      ...eS,
                                      children: eD,
                                  });
                              return null != ec
                                  ? (0, i.jsx)(en, { title: eh, stream: ec, shouldShow: !es && !eL, children: a })
                                  : (0, i.jsx)($.A, { name: eh, shouldShow: !es && !eL, delay: eB, children: a });
                          },
                      }),
                      (0, i.jsx)(K.O.Popup, {
                          "aria-label": J.intl.string(Q.default.LTAf2V),
                          children: W.x.map((e) => {
                              let t = e.icon;
                              return (0, i.jsx)(
                                  K.O.Item,
                                  {
                                      text: J.intl.string(e.label),
                                      icon: t,
                                      selected: v === e.id,
                                      onClick: () => {
                                          let t = v === e.id;
                                          (0, D.AQ)(er, n, {
                                              user_status_id: t ? 0 : e.id,
                                              user_status_text: t ? "" : J.intl.string(e.label),
                                          }).catch((e) => (0, k.b)());
                                      },
                                      clearButtonAriaLabel: J.intl.string(J.t.VkKicb),
                                  },
                                  e.id,
                              );
                          }),
                      }),
                  ],
              })
            : null != ec
              ? (0, i.jsx)(en, { title: eh, stream: ec, shouldShow: !eL, children: eG })
              : (0, i.jsx)($.A, { name: eh, shouldShow: !eL, delay: eB, children: eG }),
    });
}
function el(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = (0, B.mf)({ guildId: n, location: "GuildRoomUserList" });
    return (0, i.jsx)("div", {
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
        l = (0, c.bG)([L.A], () => L.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([G.A], () => G.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, z.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(el, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
