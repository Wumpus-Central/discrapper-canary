n.d(t, { A: () => eW });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    c = n(990078),
    o = n(778712),
    d = n(834730),
    u = n(939249),
    h = n(22231),
    p = n(192308),
    m = n(254138),
    x = n(661531),
    g = n(730134),
    A = n(440594),
    f = n(429913),
    j = n(47167),
    v = n(882840),
    y = n(713654),
    N = n(137177),
    E = n(508654),
    C = n(974930),
    I = n(58736),
    T = n(722260),
    _ = n(563312),
    S = n(103355),
    b = n(985018),
    R = n(861267);
function w(e) {
    let { guildEvent: t, recurrenceId: n } = e,
        l = (0, _.Ay)(t, n),
        a = (0, T.A)(n, t.id);
    if (null == t) return null;
    let s = t?.scheduled_start_time != null ? (0, C.j)(a, l.startTime, new Date(t?.scheduled_start_time)) : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(I.Ay.Divider, { className: R.yF }),
            (0, i.jsx)(S.L, {
                startTime: l.startTime.toISOString(),
                status: s ?? t.status,
                liveText: b.intl.string(b.t.kM6e4G),
                className: R.aF,
                textVariant: "text-md/semibold",
                eventType: t.entity_type,
                guildEventId: t?.id,
                recurrenceId: n,
            }),
            (0, i.jsx)(d.E, { color: "text-default", variant: "text-md/normal", className: R.eq, children: t.name }),
        ],
    });
}
var P = n(742589),
    M = n(554146),
    k = n(687966),
    V = n(34188),
    D = n(597770),
    O = n(43990),
    L = n(922016),
    U = n(508770),
    G = n(46225),
    B = n(294323),
    F = n(853735),
    z = n(932001),
    H = n(834757),
    Y = n(548118),
    W = n(832163),
    K = n(830647),
    Z = n(495544),
    X = n(49999),
    q = n(818348),
    Q = n(474143);
function $(e) {
    let [t, n] = (0, z.RF)(e, (0, F.c)(e), void 0, !0);
    return [t === e, n];
}
function J(e) {
    let t,
        { user: n, stream: a, channel: c } = e,
        [o, h] = l.useState(!1),
        p = (0, H.AO)(a),
        m = (0, r.bG)([W.A], () => W.A.getDetectableIdsToApplicationIds()),
        x = p?.id,
        g = null != x ? m[x] : null,
        A = (0, f.h)(g),
        {
            isLoading: j,
            applicationWidgetConfig: v,
            profileApplicationWidget: y,
            userApplicationIdentity: N,
        } = (0, B.A)(n.id, g, "social_layer_commerce_stream_header"),
        E = (0, r.bG)([Z.default], () => Z.default.getId()),
        C = l.useRef(null),
        [I, T] = $(M.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
        [_, S] = $(M.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA),
        { hasAlreadyLinked: R, canStartAuthorization: w, fetched: P } = (0, G.RD)(E === n.id ? A : null),
        F = E === n.id && w && !P,
        z = l.useCallback(() => {
            h(!1);
        }, []),
        J = l.useCallback(() => {
            S(X.i.USER_DISMISS);
        }, [S]),
        ee = null != y,
        et = _ && null != v && (R || w),
        { rankIconUrl: en, rankText: ei } =
            ((t = N?.profile),
            l.useMemo(() => {
                if (null == t || "1346069614634864772" !== g) return {};
                let e = t.data?.primary?.rank_name;
                return { rankIconUrl: t.data?.primary?.rank_image?.proxy_url, rankText: e };
            }, [g, t])),
        {
            isAppIcon: el,
            icon: ea,
            text: es,
            renderPopout: er,
            positionKey: ec,
        } = l.useMemo(() => {
            if (null == A || null == g) return { isAppIcon: !1 };
            if (ee || et) {
                let e = en ?? A.getIconURL(Y.iu.SMALL),
                    t = null != e && null == en,
                    l =
                        null != e
                            ? (0, i.jsx)("img", { className: Q.Kk, src: e, alt: "", "aria-hidden": !0 })
                            : (0, i.jsx)(k._, { className: Q.Kk });
                return {
                    isAppIcon: t,
                    icon: l,
                    text: ei ?? b.intl.string(b.t["9njbm2"]),
                    renderPopout: (e) =>
                        (0, i.jsx)(K.V, {
                            className: e,
                            userId: n.id,
                            channel: c,
                            applicationId: g,
                            onClose: z,
                            canShowCTA: _,
                            onDismissCTA: J,
                        }),
                    positionKey: "widget-version",
                };
            }
            let { icon: e, text: t } =
                E === n.id
                    ? { icon: (0, i.jsx)(V.U, { className: Q.Kk }), text: b.intl.string(b.t.e6S76Q) }
                    : { icon: (0, i.jsx)(D.o, { className: Q.Kk }), text: b.intl.string(b.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: t,
                renderPopout: (e) =>
                    (0, i.jsx)(K.Z, { className: e, userId: n.id, channel: c, applicationId: g, onClose: z }),
                positionKey: "feature-card-version",
            };
        }, [A, g, ee, et, E, n.id, c, z, _, J, en, ei]);
    return j || F || null == er
        ? null
        : (0, i.jsx)(O.N, {
              theme: q.NJ.DARKER,
              children: (e) =>
                  (0, i.jsx)(L.Y, {
                      targetElementRef: C,
                      shouldShow: o,
                      animation: L.Y.Animation.FADE,
                      position: "bottom",
                      positionKey: ec,
                      align: "center",
                      spacing: 8,
                      onRequestClose: z,
                      renderPopout: () => er(e),
                      children: () =>
                          (0, i.jsxs)("div", {
                              className: s()(e, Q.kL),
                              ref: C,
                              children: [
                                  (0, i.jsxs)(u.D, {
                                      className: Q.BQ,
                                      onClick: () => {
                                          T(X.i.TAKE_ACTION), h((e) => !e);
                                      },
                                      "aria-expanded": o,
                                      "aria-haspopup": "dialog",
                                      children: [
                                          null != ea &&
                                              (0, i.jsx)("div", { className: s()(Q.zc, { [Q.RT]: el }), children: ea }),
                                          (0, i.jsx)(d.E, {
                                              variant: "text-sm/normal",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: es,
                                          }),
                                      ],
                                  }),
                                  I && (0, i.jsx)(U.E, { type: "new", variant: "brand" }),
                              ],
                          }),
                  }),
          });
}
var ee = n(683442),
    et = n(46054),
    en = n(59350),
    ei = n(665691),
    el = n(724759),
    ea = n(562153),
    es = n(313961),
    er = n(532622),
    ec = n(267102),
    eo = n(447404),
    ed = n(525788),
    eu = n(652215);
function eh(e) {
    let { focusedParticipant: t, channel: n } = e,
        l = (0, ec.Us)(),
        a = (0, r.bG)([es.A], () => es.A.getLayout(n.id, l));
    return (0, i.jsx)(eo.A, {
        children: (0, i.jsx)(ed.A, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: l === eu.BRT.POPOUT || a === eu.DUB.FULL_SCREEN,
        }),
    });
}
n(321073);
var ep = n(735438),
    em = n.n(ep),
    ex = n(793574),
    eg = n(688810),
    eA = n(402216),
    ef = n(689874),
    ej = n(872363),
    ev = n(51082),
    ey = n(275731),
    eN = n(289552),
    eE = n(246356),
    eC = n(580034),
    eI = n(177953),
    eT = n(709562),
    e_ = n(943412);
function eS(e) {
    let { className: t, count: n } = e;
    return (0, i.jsxs)("div", {
        className: s()(e_.zr, e_.Yd, t),
        children: [
            (0, i.jsx)(eI.n, { size: "md", color: "currentColor", className: e_.Kk }),
            null != n && (0, i.jsx)(d.E, { color: "none", className: e_.U9, variant: "text-md/normal", children: n }),
        ],
    });
}
function eb(e) {
    let { count: t, ...n } = e;
    return (0, i.jsx)(eT.A, {
        label: b.intl.string(b.t["jNqDh/"]),
        iconComponent: (e) => {
            let { className: n } = e;
            return (0, i.jsx)(eS, { className: n, count: t });
        },
        tooltipPosition: "bottom",
        ...n,
    });
}
var eR = n(481947),
    ew = n(485296),
    eP = n(364522),
    eM = n(183300),
    ek = n(607567),
    eV = n(784914);
function eD(e) {
    let { channel: t } = e,
        n = (0, r.bG)([ek.Ay], () => ek.Ay.getVoiceStatesForChannel(t));
    return (0, i.jsxs)("div", {
        className: eV.zr,
        children: [
            (0, i.jsx)(d.E, {
                variant: "text-xs/bold",
                className: eV.wx,
                children: b.intl.format(b.t.e95u3C, { count: n.length }),
            }),
            (0, i.jsx)(eP.Ip, {
                className: eV.XG,
                children: (0, i.jsx)(eM.A, {
                    allowDragging: !1,
                    allowPreviews: !1,
                    className: eV.Xk,
                    channel: t,
                    voiceStates: n,
                    collapsed: !1,
                }),
            }),
        ],
    });
}
var eO = n(806931),
    eL = n(623921);
function eU(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, r.yK)([ew.A, es.A], () => {
            let e = Date.now();
            return em()(ew.A.getSpeakers())
                .map((e) => es.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === eO.lp.USER && e.speaking && !(0, ev.Ay)(e))
                .sortBy((t) => -ew.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: eL.$U,
              children: l.map((e) =>
                  (0, i.jsx)(
                      c.m,
                      {
                          position: "bottom",
                          text: b.intl.formatToPlainString(b.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(eR.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: n }),
                      },
                      e.id,
                  ),
              ),
          });
}
function eG(e) {
    let { channel: t, isChatOpen: n, focusedApplication: a, shouldShowHeaderParticipants: s } = e,
        c = l.useRef(null),
        { analyticsLocations: o } = (0, eg.Ay)(ex.A.VOICE_CHANNEL_HEADER),
        d = t.id,
        {
            voiceParticipantsHidden: u,
            selectedParticipant: h,
            userParticipantCount: p,
        } = (0, r.cf)(
            [es.A],
            () => ({
                selectedParticipant: es.A.getSelectedParticipant(d),
                voiceParticipantsHidden: es.A.getVoiceParticipantsHidden(d),
                userParticipantCount: es.A.getUserParticipantCount(d),
            }),
            [d],
        ),
        m = t.isGuildVoiceOrThread() && !n,
        x = [];
    return (
        s &&
            (h?.type === eO.lp.STREAM
                ? x.push((0, i.jsx)(eh, { channel: t, focusedParticipant: h }, "stream-participants"))
                : h?.type === eO.lp.ACTIVITY &&
                  null != a &&
                  x.push((0, i.jsx)(eh, { channel: t, focusedParticipant: h }, "activity-participants"))),
        u && x.push((0, i.jsx)(eU, { channelId: d, guildId: t.guild_id }, "current-speaker")),
        x.push((0, i.jsx)(ef.A, { className: eL.x6, channelId: d }, "clips-enabled-indicator")),
        h?.type === eO.lp.STREAM &&
            (x.push((0, i.jsx)(ey.A, { className: eL.x6, participant: h }, "warning")),
            x.push(
                (0, i.jsx)(
                    ej.A,
                    {
                        size: eA.Ay.Sizes.LARGE,
                        className: eL.x6,
                        participant: h,
                        showQuality: !0,
                        premiumIndicator: !1,
                    },
                    "live-indicator",
                ),
            )),
        h?.type === eO.lp.USER && x.push((0, i.jsx)(eN.A, { className: eL.x6, userId: h.id }, "video-warning")),
        u &&
            x.push(
                (0, i.jsx)(
                    L.Y,
                    {
                        targetElementRef: c,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(eE.A, { children: (0, i.jsx)(eD, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(eb, {
                                ...e,
                                buttonRef: c,
                                isActive: n,
                                count: p,
                                key: "call-members",
                                className: eL.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        m && x.push((0, i.jsx)(eC.V, { channelId: t.id, className: eL.x6, disabled: n }, "chat-spacer")),
        (0, i.jsx)(eg.f5, { value: o, children: x })
    );
}
var eB = n(136523),
    eF = n(82644),
    ez = n(992595);
function eH(e) {
    let t,
        n,
        { user: l, channel: a, stream: s, color: r } = e,
        c =
            ((t = (0, H.AO)(s)),
            (n = ea.Ay.getName(a.getGuildId(), a.id, l)),
            null == s
                ? n
                : t?.name != null
                  ? b.intl.formatToPlainString(b.t["9jpVOZ"], { applicationName: t?.name, username: n })
                  : b.intl.formatToPlainString(b.t["+h0Z59"], { username: n }));
    return null == l || null == s
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(g.A, { className: eF.my, size: o._3.SIZE_24, user: l, animate: !1 }),
                  (0, i.jsx)(d.E, { variant: "text-md/medium", color: r, lineClamp: 1, children: c }),
              ],
          });
}
function eY(e) {
    let t,
        {
            focusedApplication: n,
            focusedParticipant: l,
            channel: a,
            shouldShowHeaderParticipants: s = !0,
            shouldShowCommerceStreamHeader: r = !1,
        } = e,
        c = (0, E.Qs)(a.id),
        o = null != c ? (0, C.G3)(c) : null,
        u = null != c;
    if (l?.type === eO.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(I.Ay.Divider, { className: eF.yF }),
                    (0, i.jsx)(N.A, { game: n, className: eF.RI }),
                    (0, i.jsx)(d.E, {
                        className: eF.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, A.A)(n.name),
                    }),
                    s && (0, i.jsx)(eh, { channel: a, focusedParticipant: l }),
                ],
            }));
    else if (l?.type === eO.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I.Ay.Divider, { className: eF.yF }),
                (0, i.jsx)(eH, { user: e, channel: a, stream: n, color: "text-strong" }),
                s && (0, i.jsx)(eh, { channel: a, focusedParticipant: l }),
                r && (0, i.jsx)(J, { user: e, stream: n, channel: a }),
            ],
        });
    } else u && (t = (0, i.jsx)(w, { guildEvent: c, recurrenceId: o }));
    return (0, i.jsx)("div", { className: eF.kL, children: t });
}
function eW(e) {
    let { channel: t, guild: l, appContext: a, inCall: o, isChatOpen: g, exitFullScreen: A } = e,
        N = (0, el.B)({ location: "channel_call_header_toolbar" }),
        { focusedParticipant: E } = (0, r.cf)(
            [es.A],
            () => ({
                focusedParticipant: es.A.getSelectedParticipant(t.id),
                participantsOpen: es.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        C = (0, j.Ay)(t),
        T = (0, y.gU)(t),
        [_] = (0, f.A)(E?.type === eO.lp.ACTIVITY ? [E.applicationId] : []),
        S = b.intl.string(b.t.BVZqJl);
    t.isDM() ? (S = b.intl.string(b.t.jN2DfZ)) : t.isGroupDM() && (S = b.intl.string(b.t["e5y+gm"]));
    let R = (0, v.l)(t),
        w = t.isGuildVoice() && o && null != R && R.length > 0,
        M = (0, er.Ay)(t),
        k = w
            ? (0, i.jsx)(c.m, {
                  asContainer: !0,
                  text: b.intl.string(b.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: M,
                  children: (0, i.jsxs)(u.D, {
                      className: s()(eF.WH, { [eF.BI]: M }),
                      onClick: M
                          ? function () {
                                (0, p.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                        return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                    },
                                    { modalKey: eB.m },
                                );
                            }
                          : void 0,
                      children: [
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/normal",
                              className: s()(eF.Gh, ez.PT, { [eF.BI]: M }),
                              children: et.A.parseVoiceChannelStatus(R, !0, { channelId: t.id }),
                          }),
                          M &&
                              (0, i.jsx)(h.R, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: s()(eF.rD, eF.BI),
                                  width: 14,
                                  height: 14,
                              }),
                      ],
                  }),
              })
            : null,
        V = (0, ei.bG)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: eF.SC,
        children: [
            (0, i.jsxs)(I.Ay, {
                onDoubleClick: P.I,
                transparent: !0,
                className: eF.jr,
                innerClassName: eF.gi,
                toolbarClassName: eF.KE,
                childrenBottom: k,
                toolbar: (0, i.jsx)(eG, {
                    channel: t,
                    appContext: a,
                    inCall: o,
                    isChatOpen: g,
                    exitFullScreen: A,
                    focusedApplication: _,
                    shouldShowHeaderParticipants: N,
                }),
                children: [
                    (0, i.jsx)(I.Ay.Title, {
                        wrapperClassName: eF.DD,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != T ? (0, i.jsx)(I.Ay.ChannelIcon, { icon: T, "aria-label": S }) : null,
                                C,
                                V &&
                                    (0, i.jsx)(c.m, {
                                        text: b.intl.string(b.t.QyZ4Td),
                                        children: (0, i.jsx)(m.m, {
                                            size: "xs",
                                            "aria-label": b.intl.string(b.t.VHXh8a),
                                            color: x.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: eF.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(ee.i$, { channel: t, guild: l }),
                    (0, i.jsx)(eY, {
                        focusedApplication: _,
                        focusedParticipant: E,
                        channel: t,
                        shouldShowHeaderParticipants: !N,
                        shouldShowCommerceStreamHeader: N,
                    }),
                ],
            }),
            (0, i.jsx)(en.A, { channelId: t.id }),
        ],
    });
}
