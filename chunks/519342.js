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
    x = n(717558),
    g = n(793574),
    C = n(198052),
    y = n(85448),
    j = n(614881),
    I = n(480890),
    v = n(450149),
    N = n(607407),
    E = n(776231),
    b = n(267102),
    _ = n(326567),
    T = n(51082),
    R = n(616356),
    S = n(734057),
    L = n(309010),
    O = n(287809),
    P = n(977997),
    M = n(531685),
    w = n(562153),
    D = n(446243),
    U = n(920639),
    V = n(538638),
    k = n(558076),
    G = n(360729),
    B = n(856660),
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
                    (0, i.jsx)(N.A, { stream: n, className: Q.y6, noText: !0 }),
                    (0, i.jsx)("div", {
                        className: Q.ae,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(d.EyeIcon, { size: "sm", color: u.A.colors.WHITE }),
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
            statusId: v,
            numericAvatarSize: N,
            avatarSize: G,
            posturesEnabled: F,
        } = e,
        W = (0, b.Us)(),
        J = (0, c.bG)([O.default], () => O.default.getUser(t)),
        et = (0, c.bG)([O.default], () => O.default.getCurrentUser()?.id === t),
        { isMenuOpen: en, setMenuOpen: ei } = l.useContext(B.t),
        el = !!et && en,
        ea = (0, c.bG)([S.A], () => S.A.getChannel(n)?.guild_id),
        es = (0, c.bG)([P.A], () => P.A.getVoiceState(ea, t)),
        er = (0, c.bG)([R.A], () => R.A.getStreamForUser(t, ea)),
        eo = (0, x.A)({ userId: t }),
        ec = (0, c.bG)([M.A], () => M.A.isFocused()),
        ed = (0, w.tx)(ea, n, J),
        eu = (0, c.bG)([k.A], () => k.A.getRoom(n)?.background ?? o.I.DEFAULT),
        { seats: eh } = Y.iX[eu],
        ep = eh.find((e) => e.position.x === a && e.position.y === d),
        [em, ef] = l.useState(!1),
        eA = (0, h.z)({
            x: a,
            y: d,
            config: { ...r.config.default, duration: 250 },
            onRest: () => ef(!1),
            onStart: () => ef(!0),
        }),
        ex = (0, c.bG)([L.Ay], () => L.Ay.getVoiceChannelId() === n),
        eg = (0, c.bG)([C.A], () => {
            let e = C.A.getParticipant(n, t);
            return (0, K.Xw)(e) ? e : null;
        }),
        eC = (0, T.y9)(eg ?? void 0),
        ey = ex && eC && null != eg,
        ej = l.useCallback(() => {
            null != ea &&
                ((0, U.EB)({ guildId: ea, channelId: n, interactionType: "clicked" }),
                ey && (el || !et || !F) && (0, D.UV)(!0, n));
        }, [ea, n, el, ey, et, F]),
        eI = l.useCallback(
            (e) => {
                let t = S.A.getChannel(n);
                if (null != ea && null != J && null != t)
                    return (0, _.r)(e, J, t, { context: W }, (e, t) =>
                        (0, I.s)(e, g.A.GUILD_ROOM, { tileType: K.qs.USER, targetUserId: J.id })(t),
                    );
            },
            [ea, J, n, W],
        ),
        ev = l.useCallback(() => {
            null != ea && (0, U.EB)({ guildId: ea, channelId: n, interactionType: "hovered" });
        }, [ea, n]);
    if (null == J || null == ea) return null;
    let eN = (et && F) || ey,
        eE = F ? z.x.find((e) => e.id === v) : null,
        eb =
            null != ep
                ? Z.intl.formatToPlainString(eE?.userLabel ?? X.default["4bL+KW"], {
                      username: ed,
                      seatLabel: ep.getLabel(),
                  })
                : ed,
        e_ = es?.isVoiceDeafened()
            ? Z.intl.formatToPlainString(Z.t["9hDjai"], { username: eb })
            : es?.isVoiceMuted()
              ? Z.intl.formatToPlainString(Z.t.Hd1oVG, { username: eb })
              : eb,
        eT = (0, p.Kj)(G),
        eR = eT.status + 2 * eT.offset,
        eS = eE?.src,
        eL = (0, E.kr)(Math.ceil(N * q.Xq) * (0, E.mZ)()),
        eO = null != eS ? `${eS}?width=${eL}&height=${eL}` : null,
        eP = ey
            ? (0, i.jsx)(j.A, {
                  userId: J.id,
                  participant: eg,
                  size: G,
                  muted: es?.isVoiceMuted() ?? !1,
                  deafen: es?.isVoiceDeafened() ?? !1,
                  speaking: eo,
                  ringing: !1,
                  className: ep?.dim ? Q.r3 : void 0,
                  avatarDecoration: eO,
                  avatarClassName: s()(Q.Cy, eE?.avatarClassName),
                  renderIcon:
                      null != er
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: Q.Sl,
                                    style: { width: eR, height: eR },
                                    children: (0, i.jsx)(m.U, {
                                        color: u.A.colors.WHITE,
                                        style: { width: eT.status, height: eT.status },
                                    }),
                                })
                          : void 0,
                  children: (0, i.jsx)("div", {
                      className: s()(Q.gP, { [Q.Kf]: el }),
                      "aria-hidden": !0,
                      children: (0, i.jsx)(f._, { size: "md", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(y.Ay, {
                  userId: J.id,
                  src: J.getAvatarURL(ea, N, eo && ec),
                  size: G,
                  muted: es?.isVoiceMuted() ?? !1,
                  deafen: es?.isVoiceDeafened() ?? !1,
                  speaking: eo,
                  ringing: !1,
                  className: ep?.dim ? Q.r3 : void 0,
                  avatarDecoration: eO,
                  avatarClassName: eE?.avatarClassName,
                  renderIcon:
                      null != er
                          ? () =>
                                (0, i.jsx)("div", {
                                    className: Q.Sl,
                                    style: { width: eR, height: eR },
                                    children: (0, i.jsx)(m.U, {
                                        color: u.A.colors.WHITE,
                                        style: { width: eT.status, height: eT.status },
                                    }),
                                })
                          : void 0,
              }),
        eM = {
            left: eA.x.to((e) => `calc(${e}% - ${N / 2}px)`),
            top: eA.y.to((e) => `calc(${e}% - ${N / 2}px)`),
            zIndex: el ? 1e6 : 1e3 * Math.round(d) + Math.round(a),
        };
    if (!F) {
        let e = (0, i.jsx)(A.D, {
            "aria-label": e_,
            className: Q.KI,
            onMouseEnter: ev,
            onClick: ej,
            onContextMenu: eI,
            children: eP,
        });
        return (0, i.jsx)(r.animated.div, {
            role: "listitem",
            className: s()(Q.f1, { [Q.hY]: eN }),
            style: eM,
            children: null != er ? (0, i.jsx)(ee, { title: ed, stream: er, children: e }) : e,
        });
    }
    let ew = (0, i.jsx)("div", { className: Q.R3, children: eP }),
        eD = (0, i.jsx)(A.D, {
            "aria-label": e_,
            className: Q.KI,
            onMouseEnter: ev,
            onClick: ej,
            onContextMenu: eI,
            children: ew,
        }),
        eU = em && et ? 500 : 100;
    return (0, i.jsx)(r.animated.div, {
        role: "listitem",
        className: s()(Q.f1, { [Q.hY]: eN }),
        style: eM,
        children: et
            ? (0, i.jsxs)($.T, {
                  isOpen: el,
                  onOpenChange: ei,
                  children: [
                      (0, i.jsx)($.T.Trigger, {
                          children: (e) => {
                              let { ref: t, onClick: n, ...l } = e,
                                  a = (0, i.jsx)(A.D, {
                                      ...l,
                                      "aria-label": e_,
                                      className: s()(Q.KI, Q.hZ, { [Q.qS]: el }),
                                      innerRef: (e) => {
                                          t.current = e;
                                      },
                                      onMouseEnter: ev,
                                      onClick: () => {
                                          n(), ej();
                                      },
                                      onContextMenu: eI,
                                      children: eP,
                                  });
                              return null != er
                                  ? (0, i.jsx)(ee, { title: ed, stream: er, shouldShow: !el, children: a })
                                  : (0, i.jsx)(H.A, { name: ed, shouldShow: !el, delay: eU, children: a });
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
                                      selected: v === e.id,
                                      onClick: () => {
                                          let t = v === e.id;
                                          (0, D.AQ)(ea, n, {
                                              user_status_id: t ? 0 : e.id,
                                              user_status_text: t ? "" : Z.intl.string(e.label),
                                          }).catch((e) => (0, V.b)());
                                      },
                                      clearButtonAriaLabel: Z.intl.string(Z.t.VkKicb),
                                  },
                                  e.id,
                              );
                          }),
                      }),
                  ],
              })
            : null != er
              ? (0, i.jsx)(ee, { title: ed, stream: er, children: eD })
              : (0, i.jsx)(H.A, { name: ed, delay: eU, children: eD }),
    });
}
function en(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { posturesEnabled: r } = G.A.useExperiment({ guildId: n, location: "GuildRoomUserList" });
    return (0, i.jsx)("div", {
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
        l = (0, c.bG)([S.A], () => S.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([k.A], () => k.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, F.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(en, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
