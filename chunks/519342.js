n.d(t, { A: () => el });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(296704),
    o = n(821578),
    c = n(17928),
    d = n(39623),
    u = n(661531),
    h = n(717421),
    p = n(778712),
    m = n(748562),
    f = n(26430),
    A = n(939249),
    x = n(717558),
    g = n(793574),
    C = n(198052),
    y = n(85448),
    j = n(614881),
    I = n(480890),
    N = n(450149),
    v = n(607407),
    E = n(776231),
    b = n(267102),
    T = n(326567),
    _ = n(51082),
    R = n(616356),
    S = n(734057),
    L = n(309010),
    O = n(287809),
    P = n(977997),
    M = n(531685),
    w = n(562153),
    U = n(446243),
    D = n(920639),
    V = n(538638),
    k = n(558076),
    G = n(360729),
    B = n(856660),
    F = n(544299),
    H = n(996752),
    z = n(610274),
    W = n(655413),
    $ = n(360627),
    Y = n(884863),
    K = n(189998),
    q = n(806931),
    X = n(190460),
    Z = n(1195),
    Q = n(375708),
    J = n(832770);
let ee = 16 / 9;
function et(e) {
    let { title: t, stream: n, shouldShow: a, children: s } = e,
        [r, o] = l.useState(ee),
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
        (0, i.jsx)($.A, {
            clickable: !0,
            title: t,
            stream: n,
            shouldShow: a,
            className: J.sM,
            image: (0, i.jsxs)("div", {
                className: J.J,
                style: { aspectRatio: r },
                children: [
                    (0, i.jsx)(v.A, { stream: n, className: J.y6, noText: !0 }),
                    (0, i.jsx)("div", {
                        className: J.ae,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(d.EyeIcon, { size: "sm", color: u.A.colors.WHITE }),
                    }),
                ],
            }),
            children: s,
        })
    );
}
function en(e) {
    let {
            userId: t,
            channelId: n,
            x: a,
            y: d,
            statusId: N,
            numericAvatarSize: v,
            avatarSize: G,
            posturesEnabled: H,
        } = e,
        $ = (0, b.Us)(),
        ee = (0, c.bG)([O.default], () => O.default.getUser(t)),
        en = (0, c.bG)([O.default], () => O.default.getCurrentUser()?.id === t),
        { isMenuOpen: ei, setMenuOpen: el } = l.useContext(B.t),
        ea = !!en && ei,
        es = (0, c.bG)([S.A], () => S.A.getChannel(n)?.guild_id),
        er = (0, c.bG)([P.A], () => P.A.getVoiceState(es, t)),
        eo = (0, c.bG)([R.A], () => R.A.getStreamForUser(t, es)),
        ec = (0, x.A)({ userId: t }),
        ed = (0, c.bG)([M.A], () => M.A.isFocused()),
        eu = (0, w.tx)(es, n, ee),
        eh = (0, c.bG)([k.A], () => k.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: ep } = K.iX[eh],
        em = ep.find((e) => e.position.x === a && e.position.y === d),
        [ef, eA] = l.useState(!1),
        ex = (0, h.z)({
            x: a,
            y: d,
            config: { ...r.config.default, duration: 250 },
            onRest: () => eA(!1),
            onStart: () => eA(!0),
        }),
        eg = (0, c.bG)([L.Ay], () => L.Ay.getVoiceChannelId() === n),
        eC = (0, c.bG)([C.A], () => {
            let e = C.A.getParticipant(n, t);
            return (0, q.Xw)(e) ? e : null;
        }),
        ey = (0, _.y9)(eC ?? void 0),
        ej = eg && ey && null != eC,
        eI = l.useCallback(() => {
            null != es &&
                ((0, D.EB)({ guildId: es, channelId: n, interactionType: "clicked" }),
                ej && (ea || !en || !H) && (0, U.UV)(!0, n));
        }, [es, n, ea, ej, en, H]),
        eN = l.useCallback(
            (e) => {
                let t = S.A.getChannel(n);
                if (null != es && null != ee && null != t)
                    return (0, T.r)(e, ee, t, { context: $ }, (e, t) =>
                        (0, I.s)(e, g.A.GUILD_ROOM, { tileType: q.qs.USER, targetUserId: ee.id })(t),
                    );
            },
            [es, ee, n, $],
        ),
        ev = l.useCallback(() => {
            null != es && (0, D.EB)({ guildId: es, channelId: n, interactionType: "hovered" });
        }, [es, n]),
        eE = (en && H) || ej,
        eb = H ? z.x.find((e) => e.id === N) : null,
        eT =
            null != em
                ? Q.intl.formatToPlainString(eb?.userLabel ?? Z.default["4bL+KW"], {
                      username: eu,
                      seatLabel: em.getLabel(),
                  })
                : eu,
        e_ = er?.isVoiceDeafened()
            ? Q.intl.formatToPlainString(Q.t["9hDjai"], { username: eT })
            : er?.isVoiceMuted()
              ? Q.intl.formatToPlainString(Q.t.Hd1oVG, { username: eT })
              : eT,
        eR = (0, F.Sb)({ position: { x: a, y: d }, targetLabel: e_ }),
        eS = null != eR;
    if (null == ee || null == es) return null;
    let eL = (0, p.Kj)(G),
        eO = eL.status + 2 * eL.offset,
        eP = eb?.src,
        eM = (0, E.kr)(Math.ceil(v * X.Xq) * (0, E.mZ)()),
        ew = null != eP ? `${eP}?width=${eM}&height=${eM}` : null,
        eU = ej
            ? (0, i.jsx)(j.A, {
                  userId: ee.id,
                  participant: eC,
                  size: G,
                  muted: er?.isVoiceMuted() ?? !1,
                  deafen: er?.isVoiceDeafened() ?? !1,
                  speaking: ec,
                  ringing: !1,
                  className: em?.dim ? J.r3 : void 0,
                  avatarDecoration: ew,
                  avatarClassName: s()(J.Cy, eb?.avatarClassName),
                  renderIcon:
                      null != eo
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: J.Sl,
                                    style: { width: eO, height: eO },
                                    children: (0, i.jsx)(m.U, {
                                        color: u.A.colors.WHITE,
                                        style: { width: eL.status, height: eL.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(J.gP, { [J.Kf]: ea }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(f._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(y.Ay, {
                  userId: ee.id,
                  src: ee.getAvatarURL(es, v, ec && ed),
                  size: G,
                  muted: er?.isVoiceMuted() ?? !1,
                  deafen: er?.isVoiceDeafened() ?? !1,
                  speaking: ec,
                  ringing: !1,
                  className: em?.dim ? J.r3 : void 0,
                  avatarDecoration: ew,
                  avatarClassName: eb?.avatarClassName,
                  renderIcon:
                      null != eo
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: J.Sl,
                                    style: { width: eO, height: eO },
                                    children: (0, i.jsx)(m.U, {
                                        color: u.A.colors.WHITE,
                                        style: { width: eL.status, height: eL.status },
                                    }),
                                })
                          : void 0,
              }),
        eD = {
            left: ex.x.to((e) => `calc(${e}% - ${v / 2}px)`),
            top: ex.y.to((e) => `calc(${e}% - ${v / 2}px)`),
            zIndex: ea ? 1e6 : 1e3 * Math.round(d) + Math.round(a),
        };
    if (!H) {
        let e = (0, i.jsx)(A.D, {
            "aria-label": e_,
            className: J.KI,
            onMouseEnter: ev,
            onClick: eI,
            onContextMenu: eN,
            ...eR,
            children: eU,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: s()(J.f1, { [J.hY]: eE }),
            style: eD,
            children: null != eo ? (0, i.jsx)(et, { title: eu, stream: eo, shouldShow: !eS, children: e }) : e,
        });
    }
    let eV = (0, i.jsx)("div", { className: J.R3, children: eU }),
        ek = (0, i.jsx)(A.D, {
            "aria-label": e_,
            className: J.KI,
            onMouseEnter: ev,
            onClick: eI,
            onContextMenu: eN,
            ...eR,
            children: eV,
        }),
        eG = ef && en ? 500 : 100;
    return (0, i.jsx)(r.animated.div, {
        role: "listitem",
        className: s()(J.f1, { [J.hY]: eE }),
        style: eD,
        children: en
            ? (0, i.jsxs)(Y.T, {
                  isOpen: ea,
                  onOpenChange: el,
                  children: [
                      (0, i.jsx)(Y.T.Trigger, {
                          children: (e) => {
                              let { ref: t, onClick: n, ...l } = e,
                                  a = (0, i.jsx)(A.D, {
                                      ...l,
                                      "aria-label": e_,
                                      className: s()(J.KI, J.hZ, { [J.qS]: ea }),
                                      innerRef: (e) => {
                                          t.current = e;
                                      },
                                      onMouseEnter: ev,
                                      onClick: () => {
                                          n(), eI();
                                      },
                                      onContextMenu: eN,
                                      ...eR,
                                      children: eU,
                                  });
                              return null != eo
                                  ? (0, i.jsx)(et, { title: eu, stream: eo, shouldShow: !ea && !eS, children: a })
                                  : (0, i.jsx)(W.A, { name: eu, shouldShow: !ea && !eS, delay: eG, children: a });
                          },
                      }),
                      (0, i.jsx)(Y.T.Popup, {
                          "aria-label": Q.intl.string(Z.default.LTAf2V),
                          children: z.x.map((e) => {
                              let t = e.icon;
                              return (0, i.jsx)(
                                  Y.T.Item,
                                  {
                                      text: Q.intl.string(e.label),
                                      icon: t,
                                      selected: N === e.id,
                                      onClick: () => {
                                          let t = N === e.id;
                                          (0, U.AQ)(es, n, {
                                              user_status_id: t ? 0 : e.id,
                                              user_status_text: t ? "" : Q.intl.string(e.label),
                                          }).catch((e) => (0, V.b)());
                                      },
                                      clearButtonAriaLabel: Q.intl.string(Q.t.VkKicb),
                                  },
                                  e.id,
                              );
                          }),
                      }),
                  ],
              })
            : null != eo
              ? (0, i.jsx)(et, { title: eu, stream: eo, shouldShow: !eS, children: ek })
              : (0, i.jsx)(W.A, { name: eu, shouldShow: !eS, delay: eG, children: ek }),
    });
}
function ei(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = G.A.useExperiment({ guildId: n, location: "GuildRoomUserList" });
    return (0, i.jsx)("div", {
        role: "list",
        "aria-label": Q.intl.string(Z.default.xn1EI9),
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                en,
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
function el(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, c.bG)([S.A], () => S.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([k.A], () => k.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, H.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(ei, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
