n.d(t, { A: () => z, b: () => k });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(319060),
    u = n(329177),
    d = n(939249),
    c = n(104510),
    h = n(661531),
    p = n(463930),
    m = n(97808),
    f = n(778712),
    E = n(922016),
    g = n(960076),
    A = n(397244),
    _ = n(714114),
    S = n(729551),
    I = n(709066),
    y = n(295160),
    C = n(193663),
    T = n(490427),
    v = n(609425),
    R = n(922301),
    N = n(368919),
    M = n(73392),
    b = n(534400),
    w = n(835759),
    x = n(967144),
    D = n(890687),
    L = n(198525),
    U = n(854627),
    O = n(240248),
    j = n(427262),
    G = n(652215),
    F = n(705751),
    H = n(31408),
    P = n(985018),
    V = n(28371);
let k = (0, O.xI)(o.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    B = l.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: l } = e;
        return null != t && t && null == n
            ? (0, i.jsx)(a.m, {
                  __unsupportedReactNodeAsText: l ?? P.intl.string(P.t.pclUFJ),
                  children: (0, i.jsx)(u.p, { size: "md", color: "currentColor", className: V.Dd }),
              })
            : null;
    }),
    Y = l.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, i.jsx)(a.m, {
                  text: P.intl.formatToPlainString(P.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, i.jsx)(d.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, i.jsx)(c._, { color: h.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: V.PC }),
                  }),
              });
    }),
    W = l.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = F.nu.BOT;
        return (0, i.jsx)(I.A, { className: V.AO, type: n, verified: t.isVerifiedBot() });
    }),
    $ = l.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: l,
            ownerTooltipText: r,
            premiumSince: s,
            onClickPremiumGuildIcon: a,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(W, { user: t }),
                (0, i.jsx)(B, { isOwner: n, lostPermissionTooltipText: l, ownerTooltipText: r }),
                (0, i.jsx)(Y, { premiumSince: s, onClickPremiumGuildIcon: a }),
            ],
        });
    }),
    q = l.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: l,
                name: r,
                hideClanTag: s,
                user: a,
                guildId: o,
                isHovering: u,
            } = e,
            d = (0, v.A)({ userId: a?.id, guildId: o }),
            c = (0, M.a)({ displayNameStyles: d }),
            h = null == o && null != d;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                h
                    ? (0, i.jsx)(N.A, {
                          userName: r ?? "",
                          displayNameStyles: d,
                          effectDisplayType: u ? R.G.ANIMATED : R.G.STATIC,
                          loop: !0,
                      })
                    : (0, i.jsx)(p.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: l,
                          name: r,
                          className: V.UU,
                          displayNameStylesFont: c,
                          animateRoleGradient: u,
                      }),
                !s &&
                    (0, i.jsx)(b.Ay, {
                        primaryGuild: a?.primaryGuild,
                        userId: a?.id,
                        contextGuildId: o,
                        disableGuildProfile: !0,
                        className: V.fc,
                    }),
            ],
        });
    }),
    X = l.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: l,
                status: r,
                eventHandlers: s,
                avatarSrc: a,
                isMobile: o,
                isVR: u,
                isTyping: d,
                avatarDecorationSrc: c,
                handleSetTypingRef: h,
                typingRef: p,
                currentUser: E,
            } = e,
            A = r === G.clD.OFFLINE,
            _ = n ? m.Js : m.eu,
            S = (0, g.A)(l) ? G.clD.STREAMING : r;
        return (
            (S = A ? void 0 : S),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(_, {
                        ...s,
                        size: f._3.SIZE_32,
                        src: a,
                        isMobile: o,
                        isVR: u,
                        isTyping: d,
                        status: S,
                        "aria-label": t.username,
                        statusTooltip: !0,
                        avatarDecoration: c,
                        typingIndicatorRef: h,
                    }),
                    (0, i.jsx)(w.A, {
                        confettiSpawnRef: p,
                        shouldFire: d && null != E && t.id !== E.id,
                        confettiLocation: H.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    K = l.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: r,
                status: s,
                applicationStream: a,
                voiceStatusChannel: o,
                user: u,
                channel: d,
                isHoveringOrFocusing: c,
                quest: h,
            } = e,
            p = l.useMemo(
                () => (0, A.A)({ activities: r, status: s, applicationStream: a, voiceChannel: o }),
                [r, s, a, o],
            ),
            m = l.useMemo(
                () =>
                    !(0, T.A)({
                        activity: r?.find((e) => {
                            let { type: t } = e;
                            return t === G.$pd.CUSTOM_STATUS;
                        }),
                        user: u,
                        channel: d,
                    }),
                [r, u, d],
            );
        return t || !p
            ? null
            : (0, i.jsx)(S.A, {
                  user: u,
                  activities: r,
                  applicationStream: a,
                  voiceChannel: o,
                  animateEmoji: c,
                  hideEmoji: m,
                  hasQuest: null != h,
                  hideTooltip: n,
              });
    }),
    z = l.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: r,
                colorRoleName: o,
                isOwner: u,
                ownerTooltipText: d,
                lostPermissionTooltipText: c,
                isTyping: h = !1,
                nick: p,
                user: m,
                currentUser: g,
                activities: A,
                applicationStream: S,
                status: I,
                shouldAnimateStatus: T = !1,
                isMobile: v,
                isVR: R,
                premiumSince: N,
                channel: M,
                guildId: b,
                className: w,
                nameplate: O,
                hideClanTag: F = !1,
                hideSubtext: H = !1,
                hideTooltip: P = !1,
                onMouseDown: k,
                onKeyDown: B,
                onClick: Y,
                onContextMenu: W,
                onClickPremiumGuildIcon: z,
                "aria-controls": J,
                "aria-expanded": Q,
                "aria-posinset": Z,
                "aria-setsize": ee,
                id: et,
                tabIndex: en,
                itemProps: ei,
                ref: el,
            } = e,
            er = m?.id,
            es = j.Ay.useName(m),
            ea = l.useRef(null),
            eo = el ?? ea,
            [eu, ed] = l.useState(!1),
            [ec, eh] = l.useState(!1),
            [ep, em] = l.useState(null),
            { voiceChannel: ef } = (0, _.A)({ userId: er, guildId: b }),
            {
                avatarDecorationSrc: eE,
                avatarSrc: eg,
                eventHandlers: eA,
            } = (0, U.A)({ userId: er, size: f._3.SIZE_32, animateOnHover: !(t || eu), guildId: b }),
            { onFocus: e_, ...eS } = ei ?? {},
            eI = (0, x.gn)(b, er, r ?? null),
            [ey, eC] = l.useState(!1);
        l.useEffect(() => {
            t && eC(!1);
        }, [t]);
        let eT = (0, D.YW)(A),
            ev = (0, D.Yl)(eT, S, er) && t && !ey,
            eR = l.useCallback(() => {
                ed(!0);
            }, []),
            eN = l.useCallback(() => {
                ed(!1);
            }, []),
            eM = l.useCallback(() => {
                eh(!0), e_?.();
            }, [e_]),
            eb = l.useCallback(() => {
                eh(!1);
            }, []),
            ew = l.useCallback((e) => {
                em(e);
            }, []),
            ex = l.useCallback(
                (e) =>
                    null == eT
                        ? null
                        : (0, i.jsx)(L.A, {
                              name: p ?? es,
                              quest: eT,
                              memberListItemRef: eo,
                              applicationStream: S,
                              ...e,
                              closePopout: () => eC(!0),
                          }),
                [eT, eo, S, p, es],
            );
        return null == m
            ? (0, i.jsx)(y.A, { avatarSize: f._3.SIZE_32, className: V.qf })
            : (0, i.jsx)(E.Y, {
                  targetElementRef: eo,
                  renderPopout: ex,
                  position: "bottom",
                  shouldShow: ev,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: E.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, i.jsx)(C.A, {
                          ref: eo,
                          selected: t,
                          className: s()(V.Dc, w, { [V.WK]: I === G.clD.OFFLINE && !t, [V.PJ]: ev }),
                          innerClassName: V.Hz,
                          onClick: Y,
                          onKeyDown: B,
                          onMouseDown: k,
                          onContextMenu: W,
                          onMouseEnter: eR,
                          onMouseLeave: eN,
                          onBlur: eb,
                          hovered: eu,
                          name:
                              null == c
                                  ? (0, i.jsx)("span", {
                                        className: V.Xh,
                                        children: (0, i.jsx)(q, {
                                            colorRoleName: o,
                                            colorString: n ?? null,
                                            name: p ?? es,
                                            colorStrings: eI,
                                            hideClanTag: F,
                                            user: m,
                                            guildId: b,
                                            isHovering: eu,
                                        }),
                                    })
                                  : (0, i.jsx)(a.m, {
                                        text: c,
                                        children: (0, i.jsx)("span", {
                                            className: s()(V.Xh, V.oj),
                                            children: (0, i.jsx)(q, {
                                                colorRoleName: o,
                                                colorString: n ?? null,
                                                name: p ?? es,
                                                colorStrings: eI,
                                                hideClanTag: F,
                                                user: m,
                                                guildId: b,
                                                isHovering: eu,
                                            }),
                                        }),
                                    }),
                          avatar: (0, i.jsx)(X, {
                              user: m,
                              shouldAnimateStatus: T,
                              activities: A,
                              status: I,
                              eventHandlers: eA,
                              avatarSrc: eg,
                              isMobile: v,
                              isVR: R,
                              isTyping: h,
                              avatarDecorationSrc: eE,
                              handleSetTypingRef: ew,
                              typingRef: ep,
                              currentUser: g,
                          }),
                          nameplate: O,
                          subText: (0, i.jsx)(K, {
                              hideSubtext: H,
                              activities: A,
                              status: I,
                              applicationStream: S,
                              voiceStatusChannel: ef,
                              user: m,
                              channel: M,
                              isHoveringOrFocusing: eu || ec,
                              quest: eT,
                              hideTooltip: P,
                          }),
                          decorators: (0, i.jsx)($, {
                              user: m,
                              isOwner: u,
                              lostPermissionTooltipText: c,
                              ownerTooltipText: d,
                              premiumSince: N,
                              onClickPremiumGuildIcon: z,
                          }),
                          "aria-controls": J,
                          "aria-expanded": Q,
                          "aria-setsize": ee,
                          "aria-posinset": Z,
                          id: et,
                          tabIndex: en,
                          onFocus: eM,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eS,
                      }),
              });
    });
