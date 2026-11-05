var t = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(350835),
    u = n(855986),
    o = n(319060),
    c = n(866665),
    d = n(329177),
    m = n(939249),
    x = n(104510),
    h = n(646514),
    f = n(463930),
    p = n(97808),
    j = n(778712),
    A = n(265872),
    g = n(960076),
    N = n(397244),
    v = n(714114),
    I = n(342312),
    S = n(296948),
    T = n(709066),
    b = n(295160),
    y = n(268218),
    C = n(193663),
    E = n(490427),
    G = n(609425),
    M = n(922301),
    R = n(16371),
    k = n(73392),
    w = n(100335),
    U = n(534400),
    _ = n(835759),
    D = n(967144),
    P = n(859703),
    O = n(506988),
    F = n(61387),
    $ = n(854627),
    V = n(240248),
    L = n(427262),
    z = n(652215),
    B = n(31408),
    Y = n(792996),
    H = n(590218);
let Z = (0, y.Fe)({
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
            n.e(492762),
            n.e(811310),
            n.e(49782),
            n.e(323624),
            n.e(132191),
            n.e(885434),
            n.e(344502),
            n.e(538887),
            n.e(821198),
            n.e(466322),
            n.e(8563),
            n.e(454625),
            n.e(180657),
            n.e(75971),
            n.e(165362),
            n.e(209729),
            n.e(324761),
            n.e(603808),
            n.e(355949),
            n.e(932606),
            n.e(39038),
            n.e(913823),
            n.e(557940),
            n.e(881821),
            n.e(655602),
            n.e(867160),
        ]).then(n.bind(n, 198525)),
    webpackId: 198525,
    name: "QuestMembersListPopout",
    renderLoader: () => null,
});
(0, V.xI)(o.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let q = s.memo(function (e) {
        let { isOwner: l, lostPermissionTooltipText: n, ownerTooltipText: s } = e;
        return null != l && l && null == n
            ? (0, t.jsx)(c.m, {
                  __unsupportedReactNodeAsText: s ?? Y.intl.string(Y.t.pclUFJ),
                  children: (0, t.jsx)(d.CrownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: H.Dd,
                      "aria-label": s ?? Y.intl.string(Y.t.pclUFJ),
                  }),
              })
            : null;
    }),
    W = s.memo(function (e) {
        let { premiumSince: l, onClickPremiumGuildIcon: n } = e;
        return null == l
            ? null
            : (0, t.jsx)(c.m, {
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
    X = s.memo(function (e) {
        let { user: l } = e;
        if (null == l) return null;
        let n = (0, S.r)(l);
        return null == n ? null : (0, t.jsx)(T.A, { className: H.AO, type: n, verified: l.isVerifiedBot() });
    }),
    K = s.memo(function (e) {
        let {
            user: l,
            isOwner: n,
            lostPermissionTooltipText: s,
            ownerTooltipText: a,
            premiumSince: i,
            onClickPremiumGuildIcon: r,
        } = e;
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(X, { user: l }),
                (0, t.jsx)(q, { isOwner: n, lostPermissionTooltipText: s, ownerTooltipText: a }),
                (0, t.jsx)(W, { premiumSince: i, onClickPremiumGuildIcon: r }),
            ],
        });
    }),
    Q = s.memo(function (e) {
        let {
                colorRoleName: l,
                colorString: n,
                colorStrings: s,
                name: a,
                hideClanTag: i,
                user: r,
                guildId: u,
                isHovering: o,
            } = e,
            c = (0, G.A)({ userId: r?.id, guildId: u }),
            d = (0, k.a)({ displayNameStyles: c }),
            m = null == u && null != c;
        return (0, t.jsxs)(t.Fragment, {
            children: [
                m
                    ? (0, t.jsx)(R.A, {
                          userName: a ?? "",
                          displayNameStyles: c,
                          effectDisplayType: o ? M.G.ANIMATED : M.G.STATIC,
                          loop: !0,
                      })
                    : (0, t.jsx)(f.g, {
                          roleName: l,
                          colorString: n,
                          colorStrings: s,
                          name: a,
                          className: H.UU,
                          displayNameStylesFont: d,
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
                null != u && r?.id != null && (0, t.jsx)(w.A, { guildId: u, userId: r.id }),
            ],
        });
    }),
    J = s.memo(function (e) {
        let {
                user: l,
                shouldAnimateStatus: n,
                activities: s,
                status: a,
                eventHandlers: i,
                avatarSrc: r,
                isMobile: u,
                isVR: o,
                isTyping: c,
                avatarDecorationSrc: d,
                handleSetTypingRef: m,
                typingRef: x,
                currentUser: h,
            } = e,
            f = a === z.clD.OFFLINE,
            A = n ? p.Js : p.eu,
            N = (0, g.A)(s) ? z.clD.STREAMING : a;
        return (
            (N = f ? void 0 : N),
            (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(A, {
                        ...i,
                        size: j._3.SIZE_32,
                        src: r,
                        isMobile: u,
                        isVR: o,
                        isTyping: c,
                        status: N,
                        "aria-label": l.username,
                        statusTooltip: !0,
                        avatarDecoration: d,
                        typingIndicatorRef: m,
                    }),
                    (0, t.jsx)(_.A, {
                        confettiSpawnRef: x,
                        shouldFire: c && null != h && l.id !== h.id,
                        confettiLocation: B.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    ee = s.memo(function (e) {
        let {
                hideSubtext: l,
                hideTooltip: n = !1,
                activities: a,
                status: i,
                applicationStream: u,
                voiceStatusChannel: o,
                user: c,
                channel: d,
                isHoveringOrFocusing: m,
                quest: x,
            } = e,
            h = s.useMemo(
                () => (0, N.A)({ activities: a, status: i, applicationStream: u, voiceChannel: o }),
                [a, i, u, o],
            ),
            f = s.useMemo(
                () =>
                    !(0, E.A)({
                        activity: a?.find((e) => {
                            let { type: l } = e;
                            return l === r.$.CUSTOM_STATUS;
                        }),
                        user: c,
                        channel: d,
                    }),
                [a, c, d],
            );
        return l || !h
            ? null
            : (0, t.jsx)(I.A, {
                  user: c,
                  activities: a,
                  applicationStream: u,
                  voiceChannel: o,
                  animateEmoji: m,
                  hideEmoji: f,
                  hasQuest: null != x,
                  hideTooltip: n,
              });
    }),
    el = s.memo(function (e) {
        let {
                selected: l = !1,
                colorString: n,
                colorStrings: a,
                colorRoleName: r,
                isOwner: o,
                ownerTooltipText: d,
                lostPermissionTooltipText: m,
                isTyping: x = !1,
                nick: h,
                user: f,
                currentUser: p,
                activities: g,
                applicationStream: N,
                status: I,
                shouldAnimateStatus: S = !1,
                isMobile: T,
                isVR: y,
                premiumSince: E,
                channel: G,
                guildId: M,
                className: R,
                nameplate: k,
                hideClanTag: w = !1,
                hideSubtext: U = !1,
                hideTooltip: _ = !1,
                onMouseDown: V,
                onKeyDown: B,
                onClick: Y,
                onContextMenu: q,
                onClickPremiumGuildIcon: W,
                "aria-controls": X,
                "aria-expanded": el,
                "aria-posinset": en,
                "aria-setsize": et,
                id: es,
                tabIndex: ea,
                itemProps: ei,
                ref: er,
            } = e,
            eu = f?.id,
            eo = L.Ay.useName(f),
            ec = s.useRef(null),
            ed = er ?? ec,
            [em, ex] = s.useState(!1),
            [eh, ef] = s.useState(!1),
            [ep, ej] = s.useState(null),
            { voiceChannel: eA } = (0, v.Ay)({ userId: eu, guildId: M }),
            {
                avatarDecorationSrc: eg,
                avatarSrc: eN,
                eventHandlers: ev,
            } = (0, $.A)({ userId: eu, size: j._3.SIZE_32, animateOnHover: !(l || em), guildId: M }),
            { onFocus: eI, ...eS } = ei ?? {},
            eT = (0, D.gn)(M, eu, a ?? null),
            [eb, ey] = s.useState(!1);
        s.useEffect(() => {
            l && ey(!1);
        }, [l]);
        let eC = (0, F.YW)(g),
            eE = (0, u.bG)([P.A], () => P.A.getQuestPreviewOverride(O.uF.MEMBERS_LIST), []),
            eG = null != eE,
            eM = eG ? eE : eC,
            eR = (0, F.Yl)(eC, N, eu),
            ek = (eG || eR) && l && !eb,
            ew = s.useCallback(() => {
                ex(!0);
            }, []),
            eU = s.useCallback(() => {
                ex(!1);
            }, []),
            e_ = s.useCallback(() => {
                (ef(!0), eI?.());
            }, [eI]),
            eD = s.useCallback(() => {
                ef(!1);
            }, []),
            eP = s.useCallback((e) => {
                ej(e);
            }, []),
            eO = s.useCallback(
                (e) =>
                    null == eM
                        ? null
                        : (0, t.jsx)(Z, {
                              name: h ?? eo,
                              quest: eM,
                              memberListItemRef: ed,
                              applicationStream: N,
                              ...e,
                              closePopout: () => ey(!0),
                          }),
                [eM, ed, N, h, eo],
            );
        return null == f
            ? (0, t.jsx)(b.A, { avatarSize: j._3.SIZE_32, className: H.qf })
            : (0, t.jsx)(A.Y, {
                  targetElementRef: ed,
                  renderPopout: eO,
                  position: "bottom",
                  shouldShow: ek,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: A.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, t.jsx)(C.A, {
                          ref: ed,
                          selected: l,
                          className: i()(H.Dc, R, { [H.WK]: I === z.clD.OFFLINE && !l, [H.PJ]: ek }),
                          innerClassName: H.Hz,
                          onClick: Y,
                          onKeyDown: B,
                          onMouseDown: V,
                          onContextMenu: q,
                          onMouseEnter: ew,
                          onMouseLeave: eU,
                          onBlur: eD,
                          hovered: em,
                          name:
                              null == m
                                  ? (0, t.jsx)("span", {
                                        className: H.Xh,
                                        children: (0, t.jsx)(Q, {
                                            colorRoleName: r,
                                            colorString: n ?? null,
                                            name: h ?? eo,
                                            colorStrings: eT,
                                            hideClanTag: w,
                                            user: f,
                                            guildId: M,
                                            isHovering: em,
                                        }),
                                    })
                                  : (0, t.jsx)(c.m, {
                                        text: m,
                                        children: (0, t.jsx)("span", {
                                            className: i()(H.Xh, H.oj),
                                            children: (0, t.jsx)(Q, {
                                                colorRoleName: r,
                                                colorString: n ?? null,
                                                name: h ?? eo,
                                                colorStrings: eT,
                                                hideClanTag: w,
                                                user: f,
                                                guildId: M,
                                                isHovering: em,
                                            }),
                                        }),
                                    }),
                          avatar: (0, t.jsx)(J, {
                              user: f,
                              shouldAnimateStatus: S,
                              activities: g,
                              status: I,
                              eventHandlers: ev,
                              avatarSrc: eN,
                              isMobile: T,
                              isVR: y,
                              isTyping: x,
                              avatarDecorationSrc: eg,
                              handleSetTypingRef: eP,
                              typingRef: ep,
                              currentUser: p,
                          }),
                          nameplate: k,
                          subText: (0, t.jsx)(ee, {
                              hideSubtext: U,
                              activities: g,
                              status: I,
                              applicationStream: N,
                              voiceStatusChannel: eA,
                              user: f,
                              channel: G,
                              isHoveringOrFocusing: em || eh,
                              quest: eC,
                              hideTooltip: _,
                          }),
                          decorators: (0, t.jsx)(K, {
                              user: f,
                              isOwner: o,
                              lostPermissionTooltipText: m,
                              ownerTooltipText: d,
                              premiumSince: E,
                              onClickPremiumGuildIcon: W,
                          }),
                          "aria-controls": X,
                          "aria-expanded": el,
                          "aria-setsize": et,
                          "aria-posinset": en,
                          id: es,
                          tabIndex: ea,
                          onFocus: e_,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eS,
                      }),
              });
    });
n.d(l, {}, { A: el });
