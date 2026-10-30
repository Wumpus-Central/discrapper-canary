n.d(t, { A: () => eo });
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
    T = n(267102),
    _ = n(209932),
    R = n(326567),
    O = n(51082),
    L = n(541157),
    P = n(616356),
    M = n(734057),
    w = n(309010),
    U = n(287809),
    D = n(977997),
    V = n(531685),
    G = n(562153),
    k = n(446243),
    B = n(920639),
    F = n(538638),
    z = n(558076),
    H = n(360729),
    W = n(856660),
    Y = n(544299),
    $ = n(996752),
    K = n(610274),
    X = n(655413),
    q = n(360627),
    Z = n(884863),
    Q = n(739820),
    J = n(806931),
    ee = n(190460),
    et = n(618922),
    en = n(105292),
    ei = n(832770);
let el = 16 / 9;
function ea(e) {
    let { title: t, stream: n, shouldShow: a, children: s } = e,
        [r, o] = l.useState(el),
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
            className: ei.sM,
            image: (0, i.jsxs)("div", {
                className: ei.J,
                style: { aspectRatio: r },
                children: [
                    (0, i.jsx)(b.A, { stream: n, className: ei.y6, noText: !0 }),
                    (0, i.jsx)("div", {
                        className: ei.ae,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(u.EyeIcon, { size: "sm", color: h.A.colors.WHITE }),
                    }),
                ],
            }),
            children: s,
        })
    );
}
function es(e) {
    let {
            userId: t,
            channelId: n,
            x: a,
            y: u,
            statusId: E,
            numericAvatarSize: b,
            avatarSize: H,
            posturesEnabled: $,
            seat: q,
        } = e,
        el = (0, T.Us)(),
        es = (0, d.bG)([U.default], () => U.default.getUser(t)),
        er = (0, d.bG)([U.default], () => U.default.getCurrentUser()?.id === t),
        { isMenuOpen: eo, setMenuOpen: ec } = l.useContext(W.t),
        ed = !!er && eo,
        eu = (0, d.bG)([M.A], () => M.A.getChannel(n)?.guild_id),
        eh = (0, L.Nd)(
            (0, d.bG)([D.A], () => D.A.getVoiceState(eu, t)),
            (0, L.oN)(),
        ),
        ep = (0, d.bG)([P.A], () => P.A.getStreamForUser(t, eu)),
        em = (0, C.A)({ userId: t }),
        eA = (0, d.bG)([_.A], () => _.A.isUserPlayingSounds(t)),
        ef = (0, d.bG)([V.A], () => V.A.isFocused()),
        ex = (0, G.tx)(eu, n, es),
        eg = (0, d.bG)([z.A], () => z.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: eC } = Q.iX[eg],
        ej =
            null != q && q !== c.x.UNSET
                ? eC[q]
                : Object.values(eC).find((e) => e.position.x === a && e.position.y === u),
        [ey, eI] = l.useState(!1),
        eN = (0, p.z)({
            x: a,
            y: u,
            config: { ...r.config.default, duration: 250 },
            onRest: () => eI(!1),
            onStart: () => eI(!0),
        }),
        ev = (0, d.bG)([w.Ay], () => w.Ay.getVoiceChannelId() === n),
        eE = (0, d.bG)([y.A], () => {
            let e = y.A.getParticipant(n, t);
            return (0, J.Xw)(e) ? e : null;
        }),
        eb = (0, O.y9)(eE ?? void 0),
        eS = ev && eb && null != eE,
        eT = l.useCallback(() => {
            null != eu &&
                ((0, B.EB)({ guildId: eu, channelId: n, interactionType: "clicked" }),
                eS && (ed || !er || !$) && (g.A.selectParticipant(n, null), (0, k.UV)(!0, n)));
        }, [eu, n, ed, eS, er, $]),
        e_ = l.useCallback(
            (e) => {
                let t = M.A.getChannel(n);
                if (null != eu && null != es && null != t)
                    return (0, R.r)(e, es, t, { context: el }, (e, t) =>
                        (0, v.s)(e, j.A.GUILD_ROOM, { tileType: J.qs.USER, targetUserId: es.id })(t),
                    );
            },
            [eu, es, n, el],
        ),
        eR = l.useCallback(() => {
            null != eu && (0, B.EB)({ guildId: eu, channelId: n, interactionType: "hovered" });
        }, [eu, n]),
        eO = (er && $) || eS,
        eL = $ ? K.x.find((e) => e.id === E) : null,
        eP =
            null != ej
                ? en.intl.formatToPlainString(eL?.userLabel ?? et.default["4bL+KW"], {
                      username: ex,
                      seatLabel: ej.getLabel(),
                  })
                : ex,
        eM = eh?.isVoiceDeafened()
            ? en.intl.formatToPlainString(en.t["9hDjai"], { username: eP })
            : eh?.isVoiceMuted()
              ? en.intl.formatToPlainString(en.t.Hd1oVG, { username: eP })
              : eP,
        ew = (0, Y.Sb)({ position: { x: a, y: u }, targetLabel: eM }),
        eU = null != ew;
    if (null == es || null == eu) return null;
    let eD = (0, m.Kj)(H),
        eV = eD.status + 2 * eD.offset,
        eG = eL?.src,
        ek = (0, S.kr)(Math.ceil(b * ee.Xq) * (0, S.mZ)()),
        eB = null != eG ? `${eG}?width=${ek}&height=${ek}` : null,
        eF = (0, m.n$)(em, eA),
        ez = eS
            ? (0, i.jsx)(N.A, {
                  userId: es.id,
                  participant: eE,
                  size: H,
                  muted: eh?.isVoiceMuted() ?? !1,
                  deafen: eh?.isVoiceDeafened() ?? !1,
                  voiceStatus: eF,
                  ringing: !1,
                  className: ej?.dim ? ei.r3 : void 0,
                  avatarDecoration: eB,
                  avatarClassName: s()(ei.Cy, eL?.avatarClassName),
                  renderIcon:
                      null != ep
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: ei.Sl,
                                    style: { width: eV, height: eV },
                                    children: (0, i.jsx)(A.U, {
                                        color: h.A.colors.WHITE,
                                        style: { width: eD.status, height: eD.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(ei.gP, { [ei.Kf]: ed }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(f._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(I.Ay, {
                  userId: es.id,
                  src: es.getAvatarURL(eu, b, em && ef),
                  size: H,
                  muted: eh?.isVoiceMuted() ?? !1,
                  deafen: eh?.isVoiceDeafened() ?? !1,
                  voiceStatus: eF,
                  ringing: !1,
                  className: ej?.dim ? ei.r3 : void 0,
                  avatarDecoration: eB,
                  avatarClassName: eL?.avatarClassName,
                  renderIcon:
                      null != ep
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: ei.Sl,
                                    style: { width: eV, height: eV },
                                    children: (0, i.jsx)(A.U, {
                                        color: h.A.colors.WHITE,
                                        style: { width: eD.status, height: eD.status },
                                    }),
                                })
                          : void 0,
              }),
        eH = {
            left: eN.x.to((e) => `calc(${e}% - ${b / 2}px)`),
            top: eN.y.to((e) => `calc(${e}% - ${b / 2}px)`),
            zIndex: ed ? 1e6 : 1e3 * Math.round(u) + Math.round(a),
        };
    if (!$) {
        let e = (0, i.jsx)(x.D, {
            "aria-label": eM,
            className: ei.KI,
            onMouseEnter: eR,
            onClick: eT,
            onContextMenu: e_,
            ...ew,
            children: ez,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: s()(ei.f1, { [ei.hY]: eO }),
            style: eH,
            children: null != ep ? (0, i.jsx)(ea, { title: ex, stream: ep, shouldShow: !eU, children: e }) : e,
        });
    }
    let eW = (0, i.jsx)("div", { className: ei.R3, children: ez }),
        eY = (0, i.jsx)(x.D, {
            "aria-label": eM,
            className: ei.KI,
            onMouseEnter: eR,
            onClick: eT,
            onContextMenu: e_,
            ...ew,
            children: eW,
        }),
        e$ = ey && er ? 500 : 100;
    return (0, i.jsx)(r.animated.div, {
        role: "listitem",
        className: s()(ei.f1, { [ei.hY]: eO }),
        style: eH,
        children: er
            ? (0, i.jsxs)(Z.O, {
                  isOpen: ed,
                  onOpenChange: ec,
                  placement: a > 50 ? "left" : "right",
                  children: [
                      (0, i.jsx)(Z.O.Trigger, {
                          children: (e) => {
                              let { ref: t, onClick: n, ...l } = e,
                                  a = (0, i.jsx)(x.D, {
                                      ...l,
                                      "aria-label": eM,
                                      className: s()(ei.KI, ei.hZ, { [ei.qS]: ed }),
                                      innerRef: t,
                                      onMouseEnter: eR,
                                      onClick: () => {
                                          (n(), eT());
                                      },
                                      onContextMenu: e_,
                                      ...ew,
                                      children: ez,
                                  });
                              return null != ep
                                  ? (0, i.jsx)(ea, { title: ex, stream: ep, shouldShow: !ed && !eU, children: a })
                                  : (0, i.jsx)(X.A, { name: ex, shouldShow: !ed && !eU, delay: e$, children: a });
                          },
                      }),
                      (0, i.jsx)(Z.O.Popup, {
                          "aria-label": en.intl.string(et.default.LTAf2V),
                          children: K.x.map((e) => {
                              let t = e.icon;
                              return (0, i.jsx)(
                                  Z.O.Item,
                                  {
                                      text: en.intl.string(e.label),
                                      icon: t,
                                      selected: E === e.id,
                                      onClick: () => {
                                          let t = E === e.id;
                                          (0, k.AQ)(eu, n, {
                                              user_status_id: t ? 0 : e.id,
                                              user_status_text: t ? "" : en.intl.string(e.label),
                                          }).catch((e) => (0, F.b)());
                                      },
                                      clearButtonAriaLabel: en.intl.string(en.t.VkKicb),
                                  },
                                  e.id,
                              );
                          }),
                      }),
                  ],
              })
            : null != ep
              ? (0, i.jsx)(ea, { title: ex, stream: ep, shouldShow: !eU, children: eY })
              : (0, i.jsx)(X.A, { name: ex, shouldShow: !eU, delay: e$, children: eY }),
    });
}
function er(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = (0, H.mf)({ guildId: n, location: "GuildRoomUserList" }),
        u = (0, d.bG)([z.A], () => z.A.getRoom(t)?.background ?? o.I.DEFAULT),
        { seats: h } = Q.iX[u];
    return (0, i.jsx)("div", {
        role: "list",
        "aria-label": en.intl.string(et.default.xn1EI9),
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                es,
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
function eo(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, d.bG)([M.A], () => M.A.getChannel(t)?.guild_id),
        a = (0, d.bG)([z.A], () => z.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, $.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(er, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
