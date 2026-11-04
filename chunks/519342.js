var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(736819),
    o = n(821578),
    d = n(750459),
    c = n(855986),
    u = n(39623),
    h = n(646514),
    p = n(717421),
    m = n(778712),
    A = n(748562),
    f = n(26430),
    g = n(939249),
    x = n(367513),
    C = n(717558),
    y = n(793574),
    j = n(628983),
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
    P = n(541157),
    L = n(616356),
    M = n(734057),
    w = n(309010),
    U = n(287809),
    D = n(977997),
    V = n(531685),
    G = n(562153),
    k = n(303227),
    B = n(920639),
    F = n(538638),
    z = n(558076),
    H = n(360729),
    W = n(856660),
    $ = n(544299),
    Y = n(996752),
    K = n(610274),
    X = n(655413),
    q = n(360627),
    Z = n(884863),
    Q = n(538517),
    J = n(806931);
n(190460);
var ee = n(687782),
    et = n(792996),
    en = n(832770);
let ei = 16 / 9;
function el(e) {
    let { title: t, stream: n, shouldShow: a, children: s } = e,
        [r, o] = l.useState(ei),
        { previewUrl: d } = (0, E.A)(n.guildId, n.channelId, n.ownerId);
    return (
        l.useEffect(() => {
            if (null == d) return;
            let e = new Image();
            return (
                (e.onload = () => {
                    0 !== e.naturalWidth && 0 !== e.naturalHeight && o(e.naturalWidth / e.naturalHeight);
                }),
                (e.src = d),
                () => {
                    e.onload = null;
                }
            );
        }, [d]),
        (0, i.jsx)(q.A, {
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
            avatarSize: H,
            posturesEnabled: Y,
            seat: q,
        } = e,
        ei = (0, _.Us)(),
        ea = (0, c.bG)([U.default], () => U.default.getUser(t)),
        es = (0, c.bG)([U.default], () => U.default.getCurrentUser()?.id === t),
        { isMenuOpen: er, setMenuOpen: eo } = l.useContext(W.t),
        ed = !!es && er,
        ec = (0, c.bG)([M.A], () => M.A.getChannel(n)?.guild_id),
        eu = (0, P.Nd)(
            (0, c.bG)([D.A], () => D.A.getVoiceState(ec, t)),
            (0, P.oN)(),
        ),
        eh = (0, c.bG)([L.A], () => L.A.getStreamForUser(t, ec)),
        ep = (0, C.A)({ userId: t }),
        em = (0, c.bG)([T.A], () => T.A.isUserPlayingSounds(t)),
        eA = (0, c.bG)([V.A], () => V.A.isFocused()),
        ef = (0, G.tx)(ec, n, ea),
        eg = (0, c.bG)([z.A], () => z.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: ex } = Q.iX[eg],
        eC =
            null != q && q !== d.x.UNSET
                ? ex[q]
                : Object.values(ex).find((e) => e.position.x === a && e.position.y === u),
        [ey, ej] = l.useState(!1),
        eI = (0, p.z)({
            x: a,
            y: u,
            config: { ...r.config.default, duration: 250 },
            onRest: () => ej(!1),
            onStart: () => ej(!0),
        }),
        eN = (0, c.bG)([w.Ay], () => w.Ay.getVoiceChannelId() === n),
        ev = (0, c.bG)([j.A], () => {
            let e = j.A.getParticipant(n, t);
            return (0, J.Xw)(e) ? e : null;
        }),
        eE = (0, O.y9)(ev ?? void 0),
        eb = eN && eE && null != ev,
        eS = l.useCallback(() => {
            null != ec &&
                ((0, B.EB)({ guildId: ec, channelId: n, interactionType: "clicked" }),
                eb && (ed || !es || !Y) && (x.A.selectParticipant(n, null), (0, k.UV)(!0, n)));
        }, [ec, n, ed, eb, es, Y]),
        e_ = l.useCallback(
            (e) => {
                let t = M.A.getChannel(n);
                if (null != ec && null != ea && null != t)
                    return (0, R.r)(e, ea, t, { context: ei }, (e, t) =>
                        (0, v.s)(e, y.A.GUILD_ROOM, { tileType: J.qs.USER, targetUserId: ea.id })(t),
                    );
            },
            [ec, ea, n, ei],
        ),
        eT = l.useCallback(() => {
            null != ec && (0, B.EB)({ guildId: ec, channelId: n, interactionType: "hovered" });
        }, [ec, n]),
        eR = (es && Y) || eb,
        eO = Y ? K.x.find((e) => e.id === E) : null,
        eP =
            null != eC
                ? et.intl.formatToPlainString(eO?.userLabel ?? ee.default["4bL+KW"], {
                      username: ef,
                      seatLabel: eC.getLabel(),
                  })
                : ef,
        eL = eu?.isVoiceDeafened()
            ? et.intl.formatToPlainString(et.t["9hDjai"], { username: eP })
            : eu?.isVoiceMuted()
              ? et.intl.formatToPlainString(et.t.Hd1oVG, { username: eP })
              : eP,
        eM = (0, $.Sb)({ position: { x: a, y: u }, targetLabel: eL }),
        ew = null != eM;
    if (null == ea || null == ec) return null;
    let eU = (0, m.Kj)(H),
        eD = eU.status + 2 * eU.offset,
        eV = eO?.src,
        eG = (0, S.kr)(Math.ceil(1.2 * b) * (0, S.mZ)()),
        ek = null != eV ? `${eV}?width=${eG}&height=${eG}` : null,
        eB = (0, m.n$)(ep, em),
        eF = eb
            ? (0, i.jsx)(N.A, {
                  userId: ea.id,
                  participant: ev,
                  size: H,
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
                      className: s()(en.gP, { [en.Kf]: ed }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(f._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(I.Ay, {
                  userId: ea.id,
                  src: ea.getAvatarURL(ec, b, ep && eA),
                  size: H,
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
            zIndex: ed ? 1e6 : 1e3 * Math.round(u) + Math.round(a),
        };
    if (!Y) {
        let e = (0, i.jsx)(g.D, {
            "aria-label": eL,
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
        eW = (0, i.jsx)(g.D, {
            "aria-label": eL,
            className: en.KI,
            onMouseEnter: eT,
            onClick: eS,
            onContextMenu: e_,
            ...eM,
            children: eH,
        }),
        e$ = ey && es ? 500 : 100;
    return (0, i.jsx)(r.animated.div, {
        role: "listitem",
        className: s()(en.f1, { [en.hY]: eR }),
        style: ez,
        children: es
            ? (0, i.jsxs)(Z.O, {
                  isOpen: ed,
                  onOpenChange: eo,
                  placement: a > 50 ? "left" : "right",
                  children: [
                      (0, i.jsx)(Z.O.Trigger, {
                          children: (e) => {
                              let { ref: t, onClick: n, ...l } = e,
                                  a = (0, i.jsx)(g.D, {
                                      ...l,
                                      "aria-label": eL,
                                      className: s()(en.KI, en.hZ, { [en.qS]: ed }),
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
                                  ? (0, i.jsx)(el, { title: ef, stream: eh, shouldShow: !ed && !ew, children: a })
                                  : (0, i.jsx)(X.A, { name: ef, shouldShow: !ed && !ew, delay: e$, children: a });
                          },
                      }),
                      (0, i.jsx)(Z.O.Popup, {
                          "aria-label": et.intl.string(ee.default.LTAf2V),
                          children: K.x.map((e) => {
                              let t = e.icon;
                              return (0, i.jsx)(
                                  Z.O.Item,
                                  {
                                      text: et.intl.string(e.label),
                                      icon: t,
                                      selected: E === e.id,
                                      onClick: () => {
                                          let t = E === e.id;
                                          (0, k.AQ)(ec, n, {
                                              user_status_id: t ? 0 : e.id,
                                              user_status_text: t ? "" : et.intl.string(e.label),
                                          }).catch((e) => (0, F.b)());
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
              : (0, i.jsx)(X.A, { name: ef, shouldShow: !ew, delay: e$, children: eW }),
    });
}
function es(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = (0, H.mf)({ guildId: n, location: "GuildRoomUserList" }),
        u = (0, c.bG)([z.A], () => z.A.getRoom(t)?.background ?? o.I.DEFAULT),
        { seats: h } = Q.iX[u];
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
                    x: null != l.seat && l.seat !== d.x.UNSET ? h[l.seat].position.x : (l.position?.x ?? 0),
                    y: null != l.seat && l.seat !== d.x.UNSET ? h[l.seat].position.y : (l.position?.y ?? 0),
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
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, roomWidth: n } = e,
                l = (0, c.bG)([M.A], () => M.A.getChannel(t)?.guild_id),
                a = (0, c.bG)([z.A], () => z.A.getRoomUsers(t)),
                { numericAvatarSize: s, avatarSize: r } = (0, Y.F)(n);
            return 0 === a.size || null == l
                ? null
                : (0, i.jsx)(es, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
        },
    },
);
