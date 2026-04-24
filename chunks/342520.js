a.d(t, { A: () => eK });
var i = a(627968),
    n = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(17928),
    o = a(990078),
    c = a(778712),
    d = a(834730),
    _ = a(939249),
    u = a(22231),
    m = a(192308),
    p = a(254138),
    h = a(661531),
    f = a(730134),
    g = a(440594),
    x = a(429913),
    v = a(47167),
    A = a(882840),
    y = a(713654),
    b = a(137177),
    I = a(508654),
    C = a(974930),
    j = a(58736),
    N = a(722260),
    E = a(563312),
    S = a(103355),
    T = a(985018),
    w = a(861267);
function R(e) {
    let { guildEvent: t, recurrenceId: a } = e,
        n = (0, E.Ay)(t, a),
        s = (0, N.A)(a, t.id);
    if (null == t) return null;
    let l = t?.scheduled_start_time != null ? (0, C.j)(s, n.startTime, new Date(t?.scheduled_start_time)) : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(j.Ay.Divider, { className: w.yF }),
            (0, i.jsx)(S.L, {
                startTime: n.startTime.toISOString(),
                status: l ?? t.status,
                liveText: T.intl.string(T.t.kM6e4G),
                className: w.aF,
                textVariant: "text-md/semibold",
                eventType: t.entity_type,
                guildEventId: t?.id,
                recurrenceId: a,
            }),
            (0, i.jsx)(d.E, { color: "text-default", variant: "text-md/normal", className: w.eq, children: t.name }),
        ],
    });
}
var k = a(742589),
    P = a(554146),
    V = a(687966),
    L = a(34188),
    M = a(597770),
    D = a(43990),
    B = a(922016),
    U = a(508770),
    O = a(46225),
    G = a(294323),
    F = a(853735),
    H = a(932001),
    W = a(834757),
    z = a(548118),
    K = a(832163),
    X = a(830647),
    Y = a(495544),
    Z = a(49999),
    q = a(818348),
    Q = a(474143);
function $(e) {
    let [t, a] = (0, H.RF)(e, (0, F.c)(e), void 0, !0);
    return [t === e, a];
}
function J(e) {
    let t,
        { user: a, stream: s, channel: o } = e,
        [c, u] = n.useState(!1),
        m = (0, W.AO)(s),
        p = (0, r.bG)([K.A], () => K.A.getDetectableIdsToApplicationIds()),
        h = m?.id,
        f = null != h ? p[h] : null,
        g = (0, x.h)(f),
        {
            isLoading: v,
            applicationWidgetConfig: A,
            profileApplicationWidget: y,
            userApplicationIdentity: b,
        } = (0, G.A)(a.id, f, "social_layer_commerce_stream_header"),
        I = (0, r.bG)([Y.default], () => Y.default.getId()),
        C = n.useRef(null),
        [j, N] = $(P.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
        [E, S] = $(P.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA),
        { hasAlreadyLinked: w, canStartAuthorization: R, fetched: k } = (0, O.RD)(I === a.id ? g : null),
        F = I === a.id && R && !k,
        H = n.useCallback(() => {
            u(!1);
        }, []),
        J = n.useCallback(() => {
            S(Z.i.USER_DISMISS);
        }, [S]),
        ee = null != y,
        et = E && null != A && (w || R),
        { rankIconUrl: ea, rankText: ei } =
            ((t = b?.profile),
            n.useMemo(() => {
                if (null == t || "1346069614634864772" !== f) return {};
                let e = t.data?.primary?.rank_name;
                return { rankIconUrl: t.data?.primary?.rank_image?.proxy_url, rankText: e };
            }, [f, t])),
        {
            isAppIcon: en,
            icon: es,
            text: el,
            renderPopout: er,
            positionKey: eo,
        } = n.useMemo(() => {
            if (null == g || null == f) return { isAppIcon: !1 };
            if (ee || et) {
                let e = ea ?? g.getIconURL(z.iu.SMALL),
                    t = null != e && null == ea,
                    n =
                        null != e
                            ? (0, i.jsx)("img", { className: Q.Kk, src: e, alt: "", "aria-hidden": !0 })
                            : (0, i.jsx)(V._, { className: Q.Kk });
                return {
                    isAppIcon: t,
                    icon: n,
                    text: ei ?? T.intl.string(T.t["9njbm2"]),
                    renderPopout: (e) =>
                        (0, i.jsx)(X.V, {
                            className: e,
                            userId: a.id,
                            channel: o,
                            applicationId: f,
                            onClose: H,
                            canShowCTA: E,
                            onDismissCTA: J,
                        }),
                    positionKey: "widget-version",
                };
            }
            let { icon: e, text: t } =
                I === a.id
                    ? { icon: (0, i.jsx)(L.U, { className: Q.Kk }), text: T.intl.string(T.t.e6S76Q) }
                    : { icon: (0, i.jsx)(M.o, { className: Q.Kk }), text: T.intl.string(T.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: t,
                renderPopout: (e) =>
                    (0, i.jsx)(X.Z, { className: e, userId: a.id, channel: o, applicationId: f, onClose: H }),
                positionKey: "feature-card-version",
            };
        }, [g, f, ee, et, I, a.id, o, H, E, J, ea, ei]);
    return v || F || null == er
        ? null
        : (0, i.jsx)(D.N, {
              theme: q.NJ.DARKER,
              children: (e) =>
                  (0, i.jsx)(B.Y, {
                      targetElementRef: C,
                      shouldShow: c,
                      animation: B.Y.Animation.FADE,
                      position: "bottom",
                      positionKey: eo,
                      align: "center",
                      spacing: 8,
                      onRequestClose: H,
                      renderPopout: () => er(e),
                      children: () =>
                          (0, i.jsxs)("div", {
                              className: l()(e, Q.kL),
                              ref: C,
                              children: [
                                  (0, i.jsxs)(_.D, {
                                      className: Q.BQ,
                                      onClick: () => {
                                          N(Z.i.TAKE_ACTION), u((e) => !e);
                                      },
                                      "aria-expanded": c,
                                      "aria-haspopup": "dialog",
                                      children: [
                                          null != es &&
                                              (0, i.jsx)("div", { className: l()(Q.zc, { [Q.RT]: en }), children: es }),
                                          (0, i.jsx)(d.E, {
                                              variant: "text-sm/normal",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: el,
                                          }),
                                      ],
                                  }),
                                  j && (0, i.jsx)(U.E, { type: "new", variant: "brand" }),
                              ],
                          }),
                  }),
          });
}
var ee = a(683442),
    et = a(46054),
    ea = a(59350),
    ei = a(665691),
    en = a(724759),
    es = a(562153),
    el = a(313961),
    er = a(532622),
    eo = a(267102),
    ec = a(447404),
    ed = a(525788),
    e_ = a(652215);
function eu(e) {
    let { focusedParticipant: t, channel: a } = e,
        n = (0, eo.Us)(),
        s = (0, r.bG)([el.A], () => el.A.getLayout(a.id, n));
    return (0, i.jsx)(ec.A, {
        children: (0, i.jsx)(ed.A, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: a.getGuildId(),
            channelId: a.id,
            disableInteraction: n === e_.BRT.POPOUT || s === e_.DUB.FULL_SCREEN,
        }),
    });
}
a(321073);
var em = a(735438),
    ep = a.n(em),
    eh = a(793574),
    ef = a(688810),
    eg = a(402216),
    ex = a(689874),
    ev = a(872363),
    eA = a(51082),
    ey = a(275731),
    eb = a(289552),
    eI = a(246356),
    eC = a(580034),
    ej = a(177953),
    eN = a(709562),
    eE = a(943412);
function eS(e) {
    let { className: t, count: a } = e;
    return (0, i.jsxs)("div", {
        className: l()(eE.zr, eE.Yd, t),
        children: [
            (0, i.jsx)(ej.n, { size: "md", color: "currentColor", className: eE.Kk }),
            null != a && (0, i.jsx)(d.E, { color: "none", className: eE.U9, variant: "text-md/normal", children: a }),
        ],
    });
}
function eT(e) {
    let { count: t, ...a } = e;
    return (0, i.jsx)(eN.A, {
        label: T.intl.string(T.t["jNqDh/"]),
        iconComponent: (e) => {
            let { className: a } = e;
            return (0, i.jsx)(eS, { className: a, count: t });
        },
        tooltipPosition: "bottom",
        ...a,
    });
}
var ew = a(481947),
    eR = a(485296),
    ek = a(364522),
    eP = a(183300),
    eV = a(607567),
    eL = a(784914);
function eM(e) {
    let { channel: t } = e,
        a = (0, r.bG)([eV.Ay], () => eV.Ay.getVoiceStatesForChannel(t));
    return (0, i.jsxs)("div", {
        className: eL.zr,
        children: [
            (0, i.jsx)(d.E, {
                variant: "text-xs/bold",
                className: eL.wx,
                children: T.intl.format(T.t.e95u3C, { count: a.length }),
            }),
            (0, i.jsx)(ek.Ip, {
                className: eL.XG,
                children: (0, i.jsx)(eP.A, {
                    allowDragging: !1,
                    allowPreviews: !1,
                    className: eL.Xk,
                    channel: t,
                    voiceStates: a,
                    collapsed: !1,
                }),
            }),
        ],
    });
}
var eD = a(806931),
    eB = a(623921);
function eU(e) {
    let { channelId: t, guildId: a } = e,
        n = (0, r.yK)([eR.A, el.A], () => {
            let e = Date.now();
            return ep()(eR.A.getSpeakers())
                .map((e) => el.A.getParticipant(t, e))
                .filter((e) => null != e && e.type === eD.lp.USER && e.speaking && !(0, eA.Ay)(e))
                .sortBy((t) => -eR.A.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: eB.$U,
              children: n.map((e) =>
                  (0, i.jsx)(
                      o.m,
                      {
                          position: "bottom",
                          text: T.intl.formatToPlainString(T.t.JjdizN, { username: e.user.username }),
                          children: (0, i.jsx)(ew.Ay, { user: e.user, speaking: !0, collapsed: !0, guildId: a }),
                      },
                      e.id,
                  ),
              ),
          });
}
function eO(e) {
    let { channel: t, isChatOpen: a, focusedApplication: s, shouldShowHeaderParticipants: l } = e,
        o = n.useRef(null),
        { analyticsLocations: c } = (0, ef.Ay)(eh.A.VOICE_CHANNEL_HEADER),
        d = t.id,
        {
            voiceParticipantsHidden: _,
            selectedParticipant: u,
            userParticipantCount: m,
        } = (0, r.cf)(
            [el.A],
            () => ({
                selectedParticipant: el.A.getSelectedParticipant(d),
                voiceParticipantsHidden: el.A.getVoiceParticipantsHidden(d),
                userParticipantCount: el.A.getUserParticipantCount(d),
            }),
            [d],
        ),
        p = t.isGuildVoiceOrThread() && !a,
        h = [];
    return (
        l &&
            (u?.type === eD.lp.STREAM
                ? h.push((0, i.jsx)(eu, { channel: t, focusedParticipant: u }, "stream-participants"))
                : u?.type === eD.lp.ACTIVITY &&
                  null != s &&
                  h.push((0, i.jsx)(eu, { channel: t, focusedParticipant: u }, "activity-participants"))),
        _ && h.push((0, i.jsx)(eU, { channelId: d, guildId: t.guild_id }, "current-speaker")),
        h.push((0, i.jsx)(ex.A, { className: eB.x6, channelId: d }, "clips-enabled-indicator")),
        u?.type === eD.lp.STREAM &&
            (h.push((0, i.jsx)(ey.A, { className: eB.x6, participant: u }, "warning")),
            h.push(
                (0, i.jsx)(
                    ev.A,
                    {
                        size: eg.Ay.Sizes.LARGE,
                        className: eB.x6,
                        participant: u,
                        showQuality: !0,
                        premiumIndicator: !1,
                    },
                    "live-indicator",
                ),
            )),
        u?.type === eD.lp.USER && h.push((0, i.jsx)(eb.A, { className: eB.x6, userId: u.id }, "video-warning")),
        _ &&
            h.push(
                (0, i.jsx)(
                    B.Y,
                    {
                        targetElementRef: o,
                        position: "bottom",
                        renderPopout: () => (0, i.jsx)(eI.A, { children: (0, i.jsx)(eM, { channel: t }) }),
                        children: (e, t) => {
                            let { isShown: a } = t;
                            return (0, n.createElement)(eT, {
                                ...e,
                                buttonRef: o,
                                isActive: a,
                                count: m,
                                key: "call-members",
                                className: eB.x6,
                            });
                        },
                    },
                    "call-members-popout",
                ),
            ),
        p && h.push((0, i.jsx)(eC.V, { channelId: t.id, className: eB.x6, disabled: a }, "chat-spacer")),
        (0, i.jsx)(ef.f5, { value: c, children: h })
    );
}
var eG = a(136523),
    eF = a(82644),
    eH = a(992595);
function eW(e) {
    let t,
        a,
        { user: n, channel: s, stream: l, color: r } = e,
        o =
            ((t = (0, W.AO)(l)),
            (a = es.Ay.getName(s.getGuildId(), s.id, n)),
            null == l
                ? a
                : t?.name != null
                  ? T.intl.formatToPlainString(T.t["9jpVOZ"], { applicationName: t?.name, username: a })
                  : T.intl.formatToPlainString(T.t["+h0Z59"], { username: a }));
    return null == n || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(f.A, { className: eF.my, size: c._3.SIZE_24, user: n, animate: !1 }),
                  (0, i.jsx)(d.E, { variant: "text-md/medium", color: r, lineClamp: 1, children: o }),
              ],
          });
}
function ez(e) {
    let t,
        {
            focusedApplication: a,
            focusedParticipant: n,
            channel: s,
            shouldShowHeaderParticipants: l = !0,
            shouldShowCommerceStreamHeader: r = !1,
        } = e,
        o = (0, I.Qs)(s.id),
        c = null != o ? (0, C.G3)(o) : null,
        _ = null != o;
    if (n?.type === eD.lp.ACTIVITY)
        null != a &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(j.Ay.Divider, { className: eF.yF }),
                    (0, i.jsx)(b.A, { game: a, className: eF.RI }),
                    (0, i.jsx)(d.E, {
                        className: eF.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, g.A)(a.name),
                    }),
                    l && (0, i.jsx)(eu, { channel: s, focusedParticipant: n }),
                ],
            }));
    else if (n?.type === eD.lp.STREAM) {
        let e = n.user,
            a = n.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(j.Ay.Divider, { className: eF.yF }),
                (0, i.jsx)(eW, { user: e, channel: s, stream: a, color: "text-strong" }),
                l && (0, i.jsx)(eu, { channel: s, focusedParticipant: n }),
                r && (0, i.jsx)(J, { user: e, stream: a, channel: s }),
            ],
        });
    } else _ && (t = (0, i.jsx)(R, { guildEvent: o, recurrenceId: c }));
    return (0, i.jsx)("div", { className: eF.kL, children: t });
}
function eK(e) {
    let { channel: t, guild: n, appContext: s, inCall: c, isChatOpen: f, exitFullScreen: g } = e,
        b = (0, en.B)({ location: "channel_call_header_toolbar" }),
        { focusedParticipant: I } = (0, r.cf)(
            [el.A],
            () => ({
                focusedParticipant: el.A.getSelectedParticipant(t.id),
                participantsOpen: el.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        C = (0, v.Ay)(t),
        N = (0, y.gU)(t),
        [E] = (0, x.A)(I?.type === eD.lp.ACTIVITY ? [I.applicationId] : []),
        S = T.intl.string(T.t.BVZqJl);
    t.isDM() ? (S = T.intl.string(T.t.jN2DfZ)) : t.isGroupDM() && (S = T.intl.string(T.t["e5y+gm"]));
    let w = (0, A.l)(t),
        R = t.isGuildVoice() && c && null != w && w.length > 0,
        P = (0, er.Ay)(t),
        V = R
            ? (0, i.jsx)(o.m, {
                  asContainer: !0,
                  text: T.intl.string(T.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: P,
                  children: (0, i.jsxs)(_.D, {
                      className: l()(eF.WH, { [eF.BI]: P }),
                      onClick: P
                          ? function () {
                                (0, m.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(a.bind(a, 136523));
                                        return (a) => (0, i.jsx)(e, { channel: t, ...a });
                                    },
                                    { modalKey: eG.m },
                                );
                            }
                          : void 0,
                      children: [
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/normal",
                              className: l()(eF.Gh, eH.PT, { [eF.BI]: P }),
                              children: et.A.parseVoiceChannelStatus(w, !0, { channelId: t.id }),
                          }),
                          P &&
                              (0, i.jsx)(u.R, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: l()(eF.rD, eF.BI),
                                  width: 14,
                                  height: 14,
                              }),
                      ],
                  }),
              })
            : null,
        L = (0, ei.bG)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: eF.SC,
        children: [
            (0, i.jsxs)(j.Ay, {
                onDoubleClick: k.I,
                transparent: !0,
                className: eF.jr,
                innerClassName: eF.gi,
                toolbarClassName: eF.KE,
                childrenBottom: V,
                toolbar: (0, i.jsx)(eO, {
                    channel: t,
                    appContext: s,
                    inCall: c,
                    isChatOpen: f,
                    exitFullScreen: g,
                    focusedApplication: E,
                    shouldShowHeaderParticipants: b,
                }),
                children: [
                    (0, i.jsx)(j.Ay.Title, {
                        wrapperClassName: eF.DD,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != N ? (0, i.jsx)(j.Ay.ChannelIcon, { icon: N, "aria-label": S }) : null,
                                C,
                                L &&
                                    (0, i.jsx)(o.m, {
                                        text: T.intl.string(T.t.QyZ4Td),
                                        children: (0, i.jsx)(p.m, {
                                            size: "xs",
                                            "aria-label": T.intl.string(T.t.VHXh8a),
                                            color: h.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: eF.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(ee.i$, { channel: t, guild: n }),
                    (0, i.jsx)(ez, {
                        focusedApplication: E,
                        focusedParticipant: I,
                        channel: t,
                        shouldShowHeaderParticipants: !b,
                        shouldShowCommerceStreamHeader: b,
                    }),
                ],
            }),
            (0, i.jsx)(ea.A, { channelId: t.id }),
        ],
    });
}
