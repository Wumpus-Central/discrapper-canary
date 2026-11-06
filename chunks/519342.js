var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(120692),
    o = n(821578),
    c = n(750459),
    d = n(855986),
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
    I = n(628983),
    j = n(85448),
    v = n(614881),
    N = n(480890),
    E = n(450149),
    b = n(607407),
    S = n(776231),
    T = n(267102),
    _ = n(209932),
    R = n(326567),
    O = n(51082),
    L = n(541157),
    P = n(616356),
    w = n(734057),
    M = n(309010),
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
        ei = (0, T.Us)(),
        ea = (0, d.bG)([U.default], () => U.default.getUser(t)),
        es = (0, d.bG)([U.default], () => U.default.getCurrentUser()?.id === t),
        { isMenuOpen: er, setMenuOpen: eo } = l.useContext(W.t),
        ec = !!es && er,
        ed = (0, d.bG)([w.A], () => w.A.getChannel(n)?.guild_id),
        eu = (0, L.Nd)(
            (0, d.bG)([D.A], () => D.A.getVoiceState(ed, t)),
            (0, L.oN)(),
        ),
        eh = (0, d.bG)([P.A], () => P.A.getStreamForUser(t, ed)),
        ep = (0, C.A)({ userId: t }),
        em = (0, d.bG)([_.A], () => _.A.isUserPlayingSounds(t)),
        eA = (0, d.bG)([V.A], () => V.A.isFocused()),
        ef = (0, G.tx)(ed, n, ea),
        eg = (0, d.bG)([z.A], () => z.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: ex } = Q.iX[eg],
        eC =
            null != q && q !== c.x.UNSET
                ? ex[q]
                : Object.values(ex).find((e) => e.position.x === a && e.position.y === u),
        [ey, eI] = l.useState(!1),
        ej = (0, p.z)({
            x: a,
            y: u,
            config: { ...r.config.default, duration: 250 },
            onRest: () => eI(!1),
            onStart: () => eI(!0),
        }),
        ev = (0, d.bG)([M.Ay], () => M.Ay.getVoiceChannelId() === n),
        eN = (0, d.bG)([I.A], () => {
            let e = I.A.getParticipant(n, t);
            return (0, J.Xw)(e) ? e : null;
        }),
        eE = (0, O.y9)(eN ?? void 0),
        eb = ev && eE && null != eN,
        eS = l.useCallback(() => {
            null != ed &&
                ((0, B.EB)({ guildId: ed, channelId: n, interactionType: "clicked" }),
                eb && (ec || !es || !Y) && (x.A.selectParticipant(n, null), (0, k.UV)(!0, n)));
        }, [ed, n, ec, eb, es, Y]),
        eT = l.useCallback(
            (e) => {
                let t = w.A.getChannel(n);
                if (null != ed && null != ea && null != t)
                    return (0, R.r)(e, ea, t, { context: ei }, (e, t) =>
                        (0, N.s)(e, y.A.GUILD_ROOM, { tileType: J.qs.USER, targetUserId: ea.id })(t),
                    );
            },
            [ed, ea, n, ei],
        ),
        e_ = l.useCallback(() => {
            null != ed && (0, B.EB)({ guildId: ed, channelId: n, interactionType: "hovered" });
        }, [ed, n]),
        eR = (es && Y) || eb,
        eO = Y ? K.x.find((e) => e.id === E) : null,
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
        ew = (0, $.Sb)({ position: { x: a, y: u }, targetLabel: eP }),
        eM = null != ew;
    if (null == ea || null == ed) return null;
    let eU = (0, m.Kj)(H),
        eD = eU.status + 2 * eU.offset,
        eV = eO?.src,
        eG = (0, S.kr)(Math.ceil(1.2 * b) * (0, S.mZ)()),
        ek = null != eV ? `${eV}?width=${eG}&height=${eG}` : null,
        eB = (0, m.n$)(ep, em),
        eF = eb
            ? (0, i.jsx)(v.A, {
                  userId: ea.id,
                  participant: eN,
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
                                    children: (0, i.jsx)(A.TvIcon, {
                                        color: h.A.colors.WHITE,
                                        style: { width: eU.status, height: eU.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(en.gP, { [en.Kf]: ec }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(f.MaximizeIcon, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(j.Ay, {
                  userId: ea.id,
                  src: ea.getAvatarURL(ed, b, ep && eA),
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
                                    children: (0, i.jsx)(A.TvIcon, {
                                        color: h.A.colors.WHITE,
                                        style: { width: eU.status, height: eU.status },
                                    }),
                                })
                          : void 0,
              }),
        ez = {
            left: ej.x.to((e) => `calc(${e}% - ${b / 2}px)`),
            top: ej.y.to((e) => `calc(${e}% - ${b / 2}px)`),
            zIndex: ec ? 1e6 : 1e3 * Math.round(u) + Math.round(a),
        };
    if (!Y) {
        let e = (0, i.jsx)(g.D, {
            "aria-label": eP,
            className: en.KI,
            onMouseEnter: e_,
            onClick: eS,
            onContextMenu: eT,
            ...ew,
            children: eF,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: s()(en.f1, { [en.hY]: eR }),
            style: ez,
            children: null != eh ? (0, i.jsx)(el, { title: ef, stream: eh, shouldShow: !eM, children: e }) : e,
        });
    }
    let eH = (0, i.jsx)("div", { className: en.R3, children: eF }),
        eW = (0, i.jsx)(g.D, {
            "aria-label": eP,
            className: en.KI,
            onMouseEnter: e_,
            onClick: eS,
            onContextMenu: eT,
            ...ew,
            children: eH,
        }),
        e$ = ey && es ? 500 : 100;
    return (0, i.jsx)(r.animated.div, {
        role: "listitem",
        className: s()(en.f1, { [en.hY]: eR }),
        style: ez,
        children: es
            ? (0, i.jsxs)(Z.O, {
                  isOpen: ec,
                  onOpenChange: eo,
                  placement: a > 50 ? "left" : "right",
                  children: [
                      (0, i.jsx)(Z.O.Trigger, {
                          children: (e) => {
                              let { ref: t, onClick: n, ...l } = e,
                                  a = (0, i.jsx)(g.D, {
                                      ...l,
                                      "aria-label": eP,
                                      className: s()(en.KI, en.hZ, { [en.qS]: ec }),
                                      innerRef: t,
                                      onMouseEnter: e_,
                                      onClick: () => {
                                          (n(), eS());
                                      },
                                      onContextMenu: eT,
                                      ...ew,
                                      children: eF,
                                  });
                              return null != eh
                                  ? (0, i.jsx)(el, { title: ef, stream: eh, shouldShow: !ec && !eM, children: a })
                                  : (0, i.jsx)(X.A, { name: ef, shouldShow: !ec && !eM, delay: e$, children: a });
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
                                          (0, k.AQ)(ed, n, {
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
              ? (0, i.jsx)(el, { title: ef, stream: eh, shouldShow: !eM, children: eW })
              : (0, i.jsx)(X.A, { name: ef, shouldShow: !eM, delay: e$, children: eW }),
    });
}
function es(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = (0, H.mf)({ guildId: n, location: "GuildRoomUserList" }),
        u = (0, d.bG)([z.A], () => z.A.getRoom(t)?.background ?? o.I.DEFAULT),
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
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, roomWidth: n } = e,
                l = (0, d.bG)([w.A], () => w.A.getChannel(t)?.guild_id),
                a = (0, d.bG)([z.A], () => z.A.getRoomUsers(t)),
                { numericAvatarSize: s, avatarSize: r } = (0, Y.F)(n);
            return 0 === a.size || null == l
                ? null
                : (0, i.jsx)(es, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
        },
    },
);
