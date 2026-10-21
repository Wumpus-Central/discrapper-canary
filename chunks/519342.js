n.d(t, { A: () => er });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(941143),
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
    j = n(793574),
    y = n(198052),
    I = n(85448),
    N = n(614881),
    v = n(480890),
    E = n(450149),
    b = n(607407),
    S = n(776231),
    _ = n(267102),
    T = n(209932),
    R = n(326567),
    O = n(51082),
    L = n(616356),
    P = n(734057),
    M = n(309010),
    w = n(287809),
    U = n(977997),
    D = n(531685),
    V = n(562153),
    G = n(446243),
    k = n(920639),
    B = n(538638),
    F = n(558076),
    z = n(360729),
    H = n(856660),
    W = n(544299),
    Y = n(996752),
    $ = n(610274),
    K = n(655413),
    X = n(360627),
    q = n(884863),
    Z = n(739820),
    Q = n(806931),
    J = n(190460),
    ee = n(270103),
    et = n(105292),
    en = n(832770);
let ei = 16 / 9;
function el(e) {
    let { title: t, stream: n, shouldShow: a, children: s } = e,
        [r, o] = l.useState(ei),
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
        (0, i.jsx)(X.A, {
            clickable: !0,
            title: t,
            stream: n,
            shouldShow: a,
            spacing: 0,
            className: en.sM,
            image: (0, i.jsxs)("div", {
                className: en.J,
                style: { aspectRatio: r },
                children: [
                    (0, i.jsx)(b.A, { stream: n, className: en.y6, noText: !0 }),
                    (0, i.jsx)("div", {
                        className: en.ae,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(u.EyeIcon, { size: "sm", color: h.A.colors.WHITE }),
                    }),
                ],
            }),
            children: s,
        })
    );
}
function ea(e) {
    let {
            userId: t,
            channelId: n,
            x: a,
            y: u,
            statusId: E,
            numericAvatarSize: b,
            avatarSize: z,
            posturesEnabled: Y,
            seat: X,
        } = e,
        ei = (0, _.Us)(),
        ea = (0, d.bG)([w.default], () => w.default.getUser(t)),
        es = (0, d.bG)([w.default], () => w.default.getCurrentUser()?.id === t),
        { isMenuOpen: er, setMenuOpen: eo } = l.useContext(H.t),
        ec = !!es && er,
        ed = (0, d.bG)([P.A], () => P.A.getChannel(n)?.guild_id),
        eu = (0, d.bG)([U.A], () => U.A.getVoiceState(ed, t)),
        eh = (0, d.bG)([L.A], () => L.A.getStreamForUser(t, ed)),
        ep = (0, C.A)({ userId: t }),
        em = (0, d.bG)([T.A], () => T.A.isUserPlayingSounds(t)),
        eA = (0, d.bG)([D.A], () => D.A.isFocused()),
        ef = (0, V.tx)(ed, n, ea),
        ex = (0, d.bG)([F.A], () => F.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: eg } = Z.iX[ex],
        eC =
            null != X && X !== c.x.UNSET
                ? eg[X]
                : Object.values(eg).find((e) => e.position.x === a && e.position.y === u),
        [ej, ey] = l.useState(!1),
        eI = (0, p.z)({
            x: a,
            y: u,
            config: { ...r.config.default, duration: 250 },
            onRest: () => ey(!1),
            onStart: () => ey(!0),
        }),
        eN = (0, d.bG)([M.Ay], () => M.Ay.getVoiceChannelId() === n),
        ev = (0, d.bG)([y.A], () => {
            let e = y.A.getParticipant(n, t);
            return (0, Q.Xw)(e) ? e : null;
        }),
        eE = (0, O.y9)(ev ?? void 0),
        eb = eN && eE && null != ev,
        eS = l.useCallback(() => {
            null != ed &&
                ((0, k.EB)({ guildId: ed, channelId: n, interactionType: "clicked" }),
                eb && (ec || !es || !Y) && (g.A.selectParticipant(n, null), (0, G.UV)(!0, n)));
        }, [ed, n, ec, eb, es, Y]),
        e_ = l.useCallback(
            (e) => {
                let t = P.A.getChannel(n);
                if (null != ed && null != ea && null != t)
                    return (0, R.r)(e, ea, t, { context: ei }, (e, t) =>
                        (0, v.s)(e, j.A.GUILD_ROOM, { tileType: Q.qs.USER, targetUserId: ea.id })(t),
                    );
            },
            [ed, ea, n, ei],
        ),
        eT = l.useCallback(() => {
            null != ed && (0, k.EB)({ guildId: ed, channelId: n, interactionType: "hovered" });
        }, [ed, n]),
        eR = (es && Y) || eb,
        eO = Y ? $.x.find((e) => e.id === E) : null,
        eL =
            null != eC
                ? et.intl.formatToPlainString(eO?.userLabel ?? ee.default["4bL+KW"], {
                      username: ef,
                      seatLabel: eC.getLabel(),
                  })
                : ef,
        eP = eu?.isVoiceDeafened()
            ? et.intl.formatToPlainString(et.t["9hDjai"], { username: eL })
            : eu?.isVoiceMuted()
              ? et.intl.formatToPlainString(et.t.Hd1oVG, { username: eL })
              : eL,
        eM = (0, W.Sb)({ position: { x: a, y: u }, targetLabel: eP }),
        ew = null != eM;
    if (null == ea || null == ed) return null;
    let eU = (0, m.Kj)(z),
        eD = eU.status + 2 * eU.offset,
        eV = eO?.src,
        eG = (0, S.kr)(Math.ceil(b * J.Xq) * (0, S.mZ)()),
        ek = null != eV ? `${eV}?width=${eG}&height=${eG}` : null,
        eB = (0, m.n$)(ep, em),
        eF = eb
            ? (0, i.jsx)(N.A, {
                  userId: ea.id,
                  participant: ev,
                  size: z,
                  muted: eu?.isVoiceMuted() ?? !1,
                  deafen: eu?.isVoiceDeafened() ?? !1,
                  voiceStatus: eB,
                  ringing: !1,
                  className: eC?.dim ? en.r3 : void 0,
                  avatarDecoration: ek,
                  avatarClassName: s()(en.Cy, eO?.avatarClassName),
                  renderIcon:
                      null != eh
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: en.Sl,
                                    style: { width: eD, height: eD },
                                    children: (0, i.jsx)(A.U, {
                                        color: h.A.colors.WHITE,
                                        style: { width: eU.status, height: eU.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(en.gP, { [en.Kf]: ec }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(f._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(I.Ay, {
                  userId: ea.id,
                  src: ea.getAvatarURL(ed, b, ep && eA),
                  size: z,
                  muted: eu?.isVoiceMuted() ?? !1,
                  deafen: eu?.isVoiceDeafened() ?? !1,
                  voiceStatus: eB,
                  ringing: !1,
                  className: eC?.dim ? en.r3 : void 0,
                  avatarDecoration: ek,
                  avatarClassName: eO?.avatarClassName,
                  renderIcon:
                      null != eh
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: en.Sl,
                                    style: { width: eD, height: eD },
                                    children: (0, i.jsx)(A.U, {
                                        color: h.A.colors.WHITE,
                                        style: { width: eU.status, height: eU.status },
                                    }),
                                })
                          : void 0,
              }),
        ez = {
            left: eI.x.to((e) => `calc(${e}% - ${b / 2}px)`),
            top: eI.y.to((e) => `calc(${e}% - ${b / 2}px)`),
            zIndex: ec ? 1e6 : 1e3 * Math.round(u) + Math.round(a),
        };
    if (!Y) {
        let e = (0, i.jsx)(x.D, {
            "aria-label": eP,
            className: en.KI,
            onMouseEnter: eT,
            onClick: eS,
            onContextMenu: e_,
            ...eM,
            children: eF,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: s()(en.f1, { [en.hY]: eR }),
            style: ez,
            children: null != eh ? (0, i.jsx)(el, { title: ef, stream: eh, shouldShow: !ew, children: e }) : e,
        });
    }
    let eH = (0, i.jsx)("div", { className: en.R3, children: eF }),
        eW = (0, i.jsx)(x.D, {
            "aria-label": eP,
            className: en.KI,
            onMouseEnter: eT,
            onClick: eS,
            onContextMenu: e_,
            ...eM,
            children: eH,
        }),
        eY = ej && es ? 500 : 100;
    return (0, i.jsx)(r.animated.div, {
        role: "listitem",
        className: s()(en.f1, { [en.hY]: eR }),
        style: ez,
        children: es
            ? (0, i.jsxs)(q.O, {
                  isOpen: ec,
                  onOpenChange: eo,
                  placement: a > 50 ? "left" : "right",
                  children: [
                      (0, i.jsx)(q.O.Trigger, {
                          children: (e) => {
                              let { ref: t, onClick: n, ...l } = e,
                                  a = (0, i.jsx)(x.D, {
                                      ...l,
                                      "aria-label": eP,
                                      className: s()(en.KI, en.hZ, { [en.qS]: ec }),
                                      innerRef: t,
                                      onMouseEnter: eT,
                                      onClick: () => {
                                          (n(), eS());
                                      },
                                      onContextMenu: e_,
                                      ...eM,
                                      children: eF,
                                  });
                              return null != eh
                                  ? (0, i.jsx)(el, { title: ef, stream: eh, shouldShow: !ec && !ew, children: a })
                                  : (0, i.jsx)(K.A, { name: ef, shouldShow: !ec && !ew, delay: eY, children: a });
                          },
                      }),
                      (0, i.jsx)(q.O.Popup, {
                          "aria-label": et.intl.string(ee.default.LTAf2V),
                          children: $.x.map((e) => {
                              let t = e.icon;
                              return (0, i.jsx)(
                                  q.O.Item,
                                  {
                                      text: et.intl.string(e.label),
                                      icon: t,
                                      selected: E === e.id,
                                      onClick: () => {
                                          let t = E === e.id;
                                          (0, G.AQ)(ed, n, {
                                              user_status_id: t ? 0 : e.id,
                                              user_status_text: t ? "" : et.intl.string(e.label),
                                          }).catch((e) => (0, B.b)());
                                      },
                                      clearButtonAriaLabel: et.intl.string(et.t.VkKicb),
                                  },
                                  e.id,
                              );
                          }),
                      }),
                  ],
              })
            : null != eh
              ? (0, i.jsx)(el, { title: ef, stream: eh, shouldShow: !ew, children: eW })
              : (0, i.jsx)(K.A, { name: ef, shouldShow: !ew, delay: eY, children: eW }),
    });
}
function es(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = (0, z.mf)({ guildId: n, location: "GuildRoomUserList" }),
        u = (0, d.bG)([F.A], () => F.A.getRoom(t)?.background ?? o.I.DEFAULT),
        { seats: h } = Z.iX[u];
    return (0, i.jsx)("div", {
        role: "list",
        "aria-label": et.intl.string(ee.default.xn1EI9),
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                ea,
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
function er(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, d.bG)([P.A], () => P.A.getChannel(t)?.guild_id),
        a = (0, d.bG)([F.A], () => F.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, Y.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(es, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
