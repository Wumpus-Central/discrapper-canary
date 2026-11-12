var t = n(477900),
    a = n(582128),
    s = n(503698),
    i = n.n(s),
    r = n(350835),
    u = n(855986),
    o = n(319060),
    d = n(866665),
    c = n(329177),
    m = n(939249),
    x = n(104510),
    h = n(646514),
    f = n(463930),
    A = n(97808),
    g = n(778712),
    p = n(265872),
    j = n(960076),
    N = n(397244),
    v = n(714114),
    I = n(342312),
    S = n(296948),
    b = n(709066),
    T = n(295160),
    C = n(268218),
    y = n(193663),
    E = n(490427),
    G = n(609425),
    M = n(922301),
    w = n(16371),
    R = n(73392),
    k = n(100335),
    U = n(534400),
    P = n(835759),
    _ = n(967144),
    D = n(122760),
    O = n(506988),
    F = n(61387),
    $ = n(854627),
    L = n(240248),
    V = n(427262),
    z = n(652215),
    B = n(31408),
    Y = n(792996),
    H = n(590218);
let Z = (0, C.Fe)({
    createPromise: () =>
        Promise.all([
            n.e(546547),
            n.e(102075),
            n.e(828178),
            n.e(505928),
            n.e(752657),
            n.e(237427),
            n.e(634225),
            n.e(747973),
            n.e(206988),
            n.e(723180),
            n.e(60955),
            n.e(264236),
            n.e(913823),
            n.e(811310),
            n.e(49782),
            n.e(857467),
            n.e(885434),
            n.e(132191),
            n.e(344502),
            n.e(530943),
            n.e(538887),
            n.e(466322),
            n.e(8563),
            n.e(454625),
            n.e(294067),
            n.e(75971),
            n.e(165362),
            n.e(209729),
            n.e(324761),
            n.e(603808),
            n.e(355949),
            n.e(932606),
            n.e(39038),
            n.e(557940),
            n.e(655602),
            n.e(867160),
        ]).then(n.bind(n, 198525)),
    webpackId: 198525,
    name: "QuestMembersListPopout",
    renderLoader: () => null,
});
(0, L.xI)(o.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let q = a.memo(function (e) {
        let { isOwner: l, lostPermissionTooltipText: n, ownerTooltipText: a } = e;
        return null != l && l && null == n
            ? (0, t.jsx)(d.m, {
                  __unsupportedReactNodeAsText: a ?? Y.intl.string(Y.t.pclUFJ),
                  children: (0, t.jsx)(c.CrownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: H.Dd,
                      "aria-label": a ?? Y.intl.string(Y.t.pclUFJ),
                  }),
              })
            : null;
    }),
    W = a.memo(function (e) {
        let { premiumSince: l, onClickPremiumGuildIcon: n } = e;
        return null == l
            ? null
            : (0, t.jsx)(d.m, {
                  text: Y.intl.formatToPlainString(Y.t.IWkAq7, { date: l }),
                  asContainer: !0,
                  children: (0, t.jsx)(m.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, t.jsx)(x.BoostGemIcon, {
                          color: h.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                          className: H.PC,
                      }),
                  }),
              });
    }),
    X = a.memo(function (e) {
        let { user: l } = e;
        if (null == l) return null;
        let n = (0, S.r)(l);
        return null == n ? null : (0, t.jsx)(b.A, { className: H.AO, type: n, verified: l.isVerifiedBot() });
    }),
    K = a.memo(function (e) {
        let {
            user: l,
            isOwner: n,
            lostPermissionTooltipText: a,
            ownerTooltipText: s,
            premiumSince: i,
            onClickPremiumGuildIcon: r,
        } = e;
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(X, { user: l }),
                (0, t.jsx)(q, { isOwner: n, lostPermissionTooltipText: a, ownerTooltipText: s }),
                (0, t.jsx)(W, { premiumSince: i, onClickPremiumGuildIcon: r }),
            ],
        });
    }),
    Q = a.memo(function (e) {
        let {
                colorRoleName: l,
                colorString: n,
                colorStrings: a,
                name: s,
                hideClanTag: i,
                user: r,
                guildId: u,
                isHovering: o,
            } = e,
            d = (0, G.A)({ userId: r?.id, guildId: u }),
            c = (0, R.a)({ displayNameStyles: d }),
            m = null == u && null != d;
        return (0, t.jsxs)(t.Fragment, {
            children: [
                m
                    ? (0, t.jsx)(w.A, {
                          userName: s ?? "",
                          displayNameStyles: d,
                          effectDisplayType: o ? M.G.ANIMATED : M.G.STATIC,
                          loop: !0,
                      })
                    : (0, t.jsx)(f.g, {
                          roleName: l,
                          colorString: n,
                          colorStrings: a,
                          name: s,
                          className: H.UU,
                          displayNameStylesFont: c,
                          animateRoleGradient: o,
                      }),
                !i &&
                    (0, t.jsx)(U.Ay, {
                        primaryGuild: r?.primaryGuild,
                        userId: r?.id,
                        contextGuildId: u,
                        disableGuildProfile: !0,
                        className: H.fc,
                    }),
                null != u && r?.id != null && (0, t.jsx)(k.A, { guildId: u, userId: r.id }),
            ],
        });
    }),
    J = a.memo(function (e) {
        let {
                user: l,
                shouldAnimateStatus: n,
                activities: a,
                status: s,
                eventHandlers: i,
                avatarSrc: r,
                isMobile: u,
                isVR: o,
                isTyping: d,
                avatarDecorationSrc: c,
                handleSetTypingRef: m,
                typingRef: x,
                currentUser: h,
            } = e,
            f = s === z.clD.OFFLINE,
            p = n ? A.Js : A.eu,
            N = (0, j.A)(a) ? z.clD.STREAMING : s;
        return (
            (N = f ? void 0 : N),
            (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(p, {
                        ...i,
                        size: g._3.SIZE_32,
                        src: r,
                        isMobile: u,
                        isVR: o,
                        isTyping: d,
                        status: N,
                        "aria-label": l.username,
                        statusTooltip: !0,
                        avatarDecoration: c,
                        typingIndicatorRef: m,
                    }),
                    (0, t.jsx)(P.A, {
                        confettiSpawnRef: x,
                        shouldFire: d && null != h && l.id !== h.id,
                        confettiLocation: B.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    ee = a.memo(function (e) {
        let {
                hideSubtext: l,
                hideTooltip: n = !1,
                activities: s,
                status: i,
                applicationStream: u,
                voiceStatusChannel: o,
                user: d,
                channel: c,
                isHoveringOrFocusing: m,
                quest: x,
            } = e,
            h = a.useMemo(
                () => (0, N.A)({ activities: s, status: i, applicationStream: u, voiceChannel: o }),
                [s, i, u, o],
            ),
            f = a.useMemo(
                () =>
                    !(0, E.A)({
                        activity: s?.find((e) => {
                            let { type: l } = e;
                            return l === r.$.CUSTOM_STATUS;
                        }),
                        user: d,
                        channel: c,
                    }),
                [s, d, c],
            );
        return l || !h
            ? null
            : (0, t.jsx)(I.A, {
                  user: d,
                  activities: s,
                  applicationStream: u,
                  voiceChannel: o,
                  animateEmoji: m,
                  hideEmoji: f,
                  hasQuest: null != x,
                  hideTooltip: n,
              });
    }),
    el = a.memo(function (e) {
        let {
                selected: l = !1,
                colorString: n,
                colorStrings: s,
                colorRoleName: r,
                isOwner: o,
                ownerTooltipText: c,
                lostPermissionTooltipText: m,
                isTyping: x = !1,
                nick: h,
                user: f,
                currentUser: A,
                activities: j,
                applicationStream: N,
                status: I,
                shouldAnimateStatus: S = !1,
                isMobile: b,
                isVR: C,
                premiumSince: E,
                channel: G,
                guildId: M,
                className: w,
                nameplate: R,
                hideClanTag: k = !1,
                hideSubtext: U = !1,
                hideTooltip: P = !1,
                onMouseDown: L,
                onKeyDown: B,
                onClick: Y,
                onContextMenu: q,
                onClickPremiumGuildIcon: W,
                "aria-controls": X,
                "aria-expanded": el,
                "aria-posinset": en,
                "aria-setsize": et,
                id: ea,
                tabIndex: es,
                itemProps: ei,
                ref: er,
            } = e,
            eu = f?.id,
            eo = V.Ay.useName(f),
            ed = a.useRef(null),
            ec = er ?? ed,
            [em, ex] = a.useState(!1),
            [eh, ef] = a.useState(!1),
            [eA, eg] = a.useState(null),
            { voiceChannel: ep } = (0, v.Ay)({ userId: eu, guildId: M }),
            {
                avatarDecorationSrc: ej,
                avatarSrc: eN,
                eventHandlers: ev,
            } = (0, $.A)({ userId: eu, size: g._3.SIZE_32, animateOnHover: !(l || em), guildId: M }),
            { onFocus: eI, ...eS } = ei ?? {},
            eb = (0, _.gn)(M, eu, s ?? null),
            [eT, eC] = a.useState(!1);
        a.useEffect(() => {
            l && eC(!1);
        }, [l]);
        let ey = (0, F.YW)(j),
            eE = (0, u.bG)([D.A], () => D.A.getQuestPreviewOverride(O.uF.MEMBERS_LIST), []),
            eG = null != eE,
            eM = eG ? eE : ey,
            ew = (0, F.Yl)(ey, N, eu),
            eR = (eG || ew) && l && !eT,
            ek = a.useCallback(() => {
                ex(!0);
            }, []),
            eU = a.useCallback(() => {
                ex(!1);
            }, []),
            eP = a.useCallback(() => {
                (ef(!0), eI?.());
            }, [eI]),
            e_ = a.useCallback(() => {
                ef(!1);
            }, []),
            eD = a.useCallback((e) => {
                eg(e);
            }, []),
            eO = a.useCallback(
                (e) =>
                    null == eM
                        ? null
                        : (0, t.jsx)(Z, {
                              name: h ?? eo,
                              quest: eM,
                              memberListItemRef: ec,
                              applicationStream: N,
                              ...e,
                              closePopout: () => eC(!0),
                          }),
                [eM, ec, N, h, eo],
            );
        return null == f
            ? (0, t.jsx)(T.A, { avatarSize: g._3.SIZE_32, className: H.qf })
            : (0, t.jsx)(p.Y, {
                  targetElementRef: ec,
                  renderPopout: eO,
                  position: "bottom",
                  shouldShow: eR,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: p.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, t.jsx)(y.A, {
                          ref: ec,
                          selected: l,
                          className: i()(H.Dc, w, { [H.WK]: I === z.clD.OFFLINE && !l, [H.PJ]: eR }),
                          innerClassName: H.Hz,
                          onClick: Y,
                          onKeyDown: B,
                          onMouseDown: L,
                          onContextMenu: q,
                          onMouseEnter: ek,
                          onMouseLeave: eU,
                          onBlur: e_,
                          hovered: em,
                          name:
                              null == m
                                  ? (0, t.jsx)("span", {
                                        className: H.Xh,
                                        children: (0, t.jsx)(Q, {
                                            colorRoleName: r,
                                            colorString: n ?? null,
                                            name: h ?? eo,
                                            colorStrings: eb,
                                            hideClanTag: k,
                                            user: f,
                                            guildId: M,
                                            isHovering: em,
                                        }),
                                    })
                                  : (0, t.jsx)(d.m, {
                                        text: m,
                                        children: (0, t.jsx)("span", {
                                            className: i()(H.Xh, H.oj),
                                            children: (0, t.jsx)(Q, {
                                                colorRoleName: r,
                                                colorString: n ?? null,
                                                name: h ?? eo,
                                                colorStrings: eb,
                                                hideClanTag: k,
                                                user: f,
                                                guildId: M,
                                                isHovering: em,
                                            }),
                                        }),
                                    }),
                          avatar: (0, t.jsx)(J, {
                              user: f,
                              shouldAnimateStatus: S,
                              activities: j,
                              status: I,
                              eventHandlers: ev,
                              avatarSrc: eN,
                              isMobile: b,
                              isVR: C,
                              isTyping: x,
                              avatarDecorationSrc: ej,
                              handleSetTypingRef: eD,
                              typingRef: eA,
                              currentUser: A,
                          }),
                          nameplate: R,
                          subText: (0, t.jsx)(ee, {
                              hideSubtext: U,
                              activities: j,
                              status: I,
                              applicationStream: N,
                              voiceStatusChannel: ep,
                              user: f,
                              channel: G,
                              isHoveringOrFocusing: em || eh,
                              quest: ey,
                              hideTooltip: P,
                          }),
                          decorators: (0, t.jsx)(K, {
                              user: f,
                              isOwner: o,
                              lostPermissionTooltipText: m,
                              ownerTooltipText: c,
                              premiumSince: E,
                              onClickPremiumGuildIcon: W,
                          }),
                          "aria-controls": X,
                          "aria-expanded": el,
                          "aria-setsize": et,
                          "aria-posinset": en,
                          id: ea,
                          tabIndex: es,
                          onFocus: eP,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eS,
                      }),
              });
    });
n.d(l, {}, { A: el });
