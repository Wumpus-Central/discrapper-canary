var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(350835),
    o = n(855986),
    u = n(319060),
    c = n(866665),
    d = n(329177),
    m = n(939249),
    A = n(104510),
    p = n(646514),
    h = n(463930),
    f = n(97808),
    g = n(778712),
    x = n(265872),
    I = n(960076),
    v = n(397244),
    T = n(714114),
    S = n(755388),
    y = n(296948),
    N = n(709066),
    E = n(295160),
    C = n(268218),
    j = n(193663),
    _ = n(490427),
    b = n(609425),
    P = n(922301),
    R = n(16371),
    O = n(73392),
    D = n(100335),
    U = n(534400),
    L = n(835759),
    M = n(967144),
    G = n(122760),
    w = n(506988),
    Y = n(61387),
    k = n(854627),
    V = n(240248),
    $ = n(427262),
    F = n(652215),
    H = n(31408),
    B = n(792996),
    J = n(590218);
let W = (0, C.Fe)({
    createPromise: () =>
        Promise.all([
            n.e(546547),
            n.e(102075),
            n.e(828178),
            n.e(505928),
            n.e(752657),
            n.e(237427),
            n.e(713398),
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
            n.e(538887),
            n.e(8563),
            n.e(454625),
            n.e(294067),
            n.e(159127),
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
(0, V.xI)(u.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let z = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, l.jsx)(c.m, {
                  __unsupportedReactNodeAsText: i ?? B.intl.string(B.t.pclUFJ),
                  children: (0, l.jsx)(d.CrownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: J.Dd,
                      "aria-label": i ?? B.intl.string(B.t.pclUFJ),
                  }),
              })
            : null;
    }),
    Z = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, l.jsx)(c.m, {
                  text: B.intl.formatToPlainString(B.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, l.jsx)(m.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, l.jsx)(A.BoostGemIcon, {
                          color: p.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                          className: J.PC,
                      }),
                  }),
              });
    }),
    X = i.memo(function (e) {
        let { user: t } = e;
        if (null == t) return null;
        let n = (0, y.r)(t);
        return null == n ? null : (0, l.jsx)(N.A, { className: J.AO, type: n, verified: t.isVerifiedBot() });
    }),
    Q = i.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: i,
            ownerTooltipText: a,
            premiumSince: r,
            onClickPremiumGuildIcon: s,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(X, { user: t }),
                (0, l.jsx)(z, { isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: a }),
                (0, l.jsx)(Z, { premiumSince: r, onClickPremiumGuildIcon: s }),
            ],
        });
    }),
    q = i.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: i,
                name: a,
                hideClanTag: r,
                user: s,
                guildId: o,
                isHovering: u,
            } = e,
            c = (0, b.A)({ userId: s?.id, guildId: o }),
            d = (0, O.a)({ displayNameStyles: c }),
            m = null == o && null != c;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                m
                    ? (0, l.jsx)(R.A, {
                          userName: a ?? "",
                          displayNameStyles: c,
                          effectDisplayType: u ? P.G.ANIMATED : P.G.STATIC,
                          loop: !0,
                      })
                    : (0, l.jsx)(h.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: a,
                          className: J.UU,
                          displayNameStylesFont: d,
                          animateRoleGradient: u,
                      }),
                !r &&
                    (0, l.jsx)(U.Ay, {
                        primaryGuild: s?.primaryGuild,
                        userId: s?.id,
                        contextGuildId: o,
                        disableGuildProfile: !0,
                        className: J.fc,
                    }),
                null != o && s?.id != null && (0, l.jsx)(D.A, { guildId: o, userId: s.id }),
            ],
        });
    }),
    K = i.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: i,
                status: a,
                eventHandlers: r,
                avatarSrc: s,
                isMobile: o,
                isVR: u,
                isTyping: c,
                avatarDecorationSrc: d,
                handleSetTypingRef: m,
                typingRef: A,
                currentUser: p,
            } = e,
            h = a === F.clD.OFFLINE,
            x = n ? f.Js : f.eu,
            v = (0, I.A)(i) ? F.clD.STREAMING : a;
        return (
            (v = h ? void 0 : v),
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(x, {
                        ...r,
                        size: g._3.SIZE_32,
                        src: s,
                        isMobile: o,
                        isVR: u,
                        isTyping: c,
                        status: v,
                        "aria-label": t.username,
                        statusTooltip: !0,
                        avatarDecoration: d,
                        typingIndicatorRef: m,
                    }),
                    (0, l.jsx)(L.A, {
                        confettiSpawnRef: A,
                        shouldFire: c && null != p && t.id !== p.id,
                        confettiLocation: H.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    ee = i.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: a,
                status: r,
                applicationStream: o,
                voiceStatusChannel: u,
                user: c,
                channel: d,
                isHoveringOrFocusing: m,
                quest: A,
            } = e,
            p = i.useMemo(
                () => (0, v.A)({ activities: a, status: r, applicationStream: o, voiceChannel: u }),
                [a, r, o, u],
            ),
            h = i.useMemo(
                () =>
                    !(0, _.A)({
                        activity: a?.find((e) => {
                            let { type: t } = e;
                            return t === s.$.CUSTOM_STATUS;
                        }),
                        user: c,
                        channel: d,
                    }),
                [a, c, d],
            );
        return t || !p
            ? null
            : (0, l.jsx)(S.A, {
                  user: c,
                  activities: a,
                  applicationStream: o,
                  voiceChannel: u,
                  animateEmoji: m,
                  hideEmoji: h,
                  hasQuest: null != A,
                  hideTooltip: n,
              });
    }),
    et = i.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: a,
                colorRoleName: s,
                isOwner: u,
                ownerTooltipText: d,
                lostPermissionTooltipText: m,
                isTyping: A = !1,
                nick: p,
                user: h,
                currentUser: f,
                activities: I,
                applicationStream: v,
                status: S,
                shouldAnimateStatus: y = !1,
                isMobile: N,
                isVR: C,
                premiumSince: _,
                channel: b,
                guildId: P,
                className: R,
                nameplate: O,
                hideClanTag: D = !1,
                hideSubtext: U = !1,
                hideTooltip: L = !1,
                onMouseDown: V,
                onKeyDown: H,
                onClick: B,
                onContextMenu: z,
                onClickPremiumGuildIcon: Z,
                "aria-controls": X,
                "aria-expanded": et,
                "aria-posinset": en,
                "aria-setsize": el,
                id: ei,
                tabIndex: ea,
                itemProps: er,
                ref: es,
            } = e,
            eo = h?.id,
            eu = $.Ay.useName(h),
            ec = i.useRef(null),
            ed = es ?? ec,
            [em, eA] = i.useState(!1),
            [ep, eh] = i.useState(!1),
            [ef, eg] = i.useState(null),
            { voiceChannel: ex } = (0, T.Ay)({ userId: eo, guildId: P }),
            {
                avatarDecorationSrc: eI,
                avatarSrc: ev,
                eventHandlers: eT,
            } = (0, k.A)({ userId: eo, size: g._3.SIZE_32, animateOnHover: !(t || em), guildId: P }),
            { onFocus: eS, ...ey } = er ?? {},
            eN = (0, M.gn)(P, eo, a ?? null),
            [eE, eC] = i.useState(!1);
        i.useEffect(() => {
            t && eC(!1);
        }, [t]);
        let ej = (0, Y.YW)(I),
            e_ = (0, o.bG)([G.A], () => G.A.getQuestPreviewOverride(w.uF.MEMBERS_LIST), []),
            eb = null != e_,
            eP = eb ? e_ : ej,
            eR = (0, Y.Yl)(ej, v, eo),
            eO = (eb || eR) && t && !eE,
            eD = i.useCallback(() => {
                eA(!0);
            }, []),
            eU = i.useCallback(() => {
                eA(!1);
            }, []),
            eL = i.useCallback(() => {
                (eh(!0), eS?.());
            }, [eS]),
            eM = i.useCallback(() => {
                eh(!1);
            }, []),
            eG = i.useCallback((e) => {
                eg(e);
            }, []),
            ew = i.useCallback(
                (e) =>
                    null == eP
                        ? null
                        : (0, l.jsx)(W, {
                              name: p ?? eu,
                              quest: eP,
                              memberListItemRef: ed,
                              applicationStream: v,
                              ...e,
                              closePopout: () => eC(!0),
                          }),
                [eP, ed, v, p, eu],
            );
        return null == h
            ? (0, l.jsx)(E.A, { avatarSize: g._3.SIZE_32, className: J.qf })
            : (0, l.jsx)(x.Y, {
                  targetElementRef: ed,
                  renderPopout: ew,
                  position: "bottom",
                  shouldShow: eO,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: x.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, l.jsx)(j.A, {
                          ref: ed,
                          selected: t,
                          className: r()(J.Dc, R, { [J.WK]: S === F.clD.OFFLINE && !t, [J.PJ]: eO }),
                          innerClassName: J.Hz,
                          onClick: B,
                          onKeyDown: H,
                          onMouseDown: V,
                          onContextMenu: z,
                          onMouseEnter: eD,
                          onMouseLeave: eU,
                          onBlur: eM,
                          hovered: em,
                          name:
                              null == m
                                  ? (0, l.jsx)("span", {
                                        className: J.Xh,
                                        children: (0, l.jsx)(q, {
                                            colorRoleName: s,
                                            colorString: n ?? null,
                                            name: p ?? eu,
                                            colorStrings: eN,
                                            hideClanTag: D,
                                            user: h,
                                            guildId: P,
                                            isHovering: em,
                                        }),
                                    })
                                  : (0, l.jsx)(c.m, {
                                        text: m,
                                        children: (0, l.jsx)("span", {
                                            className: r()(J.Xh, J.oj),
                                            children: (0, l.jsx)(q, {
                                                colorRoleName: s,
                                                colorString: n ?? null,
                                                name: p ?? eu,
                                                colorStrings: eN,
                                                hideClanTag: D,
                                                user: h,
                                                guildId: P,
                                                isHovering: em,
                                            }),
                                        }),
                                    }),
                          avatar: (0, l.jsx)(K, {
                              user: h,
                              shouldAnimateStatus: y,
                              activities: I,
                              status: S,
                              eventHandlers: eT,
                              avatarSrc: ev,
                              isMobile: N,
                              isVR: C,
                              isTyping: A,
                              avatarDecorationSrc: eI,
                              handleSetTypingRef: eG,
                              typingRef: ef,
                              currentUser: f,
                          }),
                          nameplate: O,
                          subText: (0, l.jsx)(ee, {
                              hideSubtext: U,
                              activities: I,
                              status: S,
                              applicationStream: v,
                              voiceStatusChannel: ex,
                              user: h,
                              channel: b,
                              isHoveringOrFocusing: em || ep,
                              quest: ej,
                              hideTooltip: L,
                          }),
                          decorators: (0, l.jsx)(Q, {
                              user: h,
                              isOwner: u,
                              lostPermissionTooltipText: m,
                              ownerTooltipText: d,
                              premiumSince: _,
                              onClickPremiumGuildIcon: Z,
                          }),
                          "aria-controls": X,
                          "aria-expanded": et,
                          "aria-setsize": el,
                          "aria-posinset": en,
                          id: ei,
                          tabIndex: ea,
                          onFocus: eL,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...ey,
                      }),
              });
    });
n.d(t, {}, { A: et });
