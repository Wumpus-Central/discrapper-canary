"use strict";
n.d(t, { A: () => Y, b: () => x });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(319060),
    u = n(397927),
    c = n(960076),
    d = n(397244),
    _ = n(714114),
    f = n(729551),
    p = n(709066),
    h = n(295160),
    m = n(193663),
    E = n(490427),
    g = n(609425),
    A = n(922301),
    I = n(750112),
    T = n(73392),
    S = n(534400),
    y = n(835759),
    v = n(967144),
    N = n(890687),
    C = n(198525),
    R = n(854627),
    O = n(240248),
    b = n(427262),
    D = n(652215),
    L = n(705751),
    w = n(31408),
    M = n(985018),
    P = n(28371);
let x = (0, O.xI)(l.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    k = 3,
    U = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(o.m, {
                  __unsupportedReactNodeAsText: i ?? M.intl.string(M.t.pclUFJ),
                  children: (0, r.jsx)(u.pw5, { size: "md", color: "currentColor", className: P.Dd }),
              })
            : null;
    }),
    G = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(o.m, {
                  text: M.intl.formatToPlainString(M.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, r.jsx)(u.DUT, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, r.jsx)(u._Jp, {
                          color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                          className: P.PC,
                      }),
                  }),
              });
    }),
    F = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = L.nu.BOT;
        return (0, r.jsx)(p.A, { className: P.AO, type: n, verified: t.isVerifiedBot() });
    }),
    V = i.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: i,
            ownerTooltipText: s,
            premiumSince: a,
            onClickPremiumGuildIcon: o,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(F, { user: t }),
                (0, r.jsx)(U, { isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: s }),
                (0, r.jsx)(G, { premiumSince: a, onClickPremiumGuildIcon: o }),
            ],
        });
    }),
    B = i.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: i,
                name: s,
                hideClanTag: a,
                user: o,
                guildId: l,
                isHovering: c,
            } = e,
            d = (0, g.A)({ userId: o?.id, guildId: l }),
            _ = (0, T.a)({ displayNameStyles: d }),
            f = null == l && null != d;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                f
                    ? (0, r.jsx)(I.A, {
                          userName: s ?? "",
                          displayNameStyles: d,
                          effectDisplayType: c ? A.G.ANIMATED : A.G.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(u.gyj, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: s,
                          className: P.UU,
                          displayNameStylesFont: _,
                          animateRoleGradient: c,
                      }),
                !a &&
                    (0, r.jsx)(S.Ay, {
                        primaryGuild: o?.primaryGuild,
                        userId: o?.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: P.fc,
                    }),
            ],
        });
    }),
    H = i.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: i,
                status: s,
                eventHandlers: a,
                avatarSrc: o,
                isMobile: l,
                isVR: d,
                isTyping: _,
                avatarDecorationSrc: f,
                handleSetTypingRef: p,
                typingRef: h,
                currentUser: m,
            } = e,
            E = s === D.clD.OFFLINE,
            g = n ? u.JsQ : u.euF,
            A = (0, c.A)(i) ? D.clD.STREAMING : s;
        return (
            (A = E ? void 0 : A),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(g, {
                        ...a,
                        size: u._3J.SIZE_32,
                        src: o,
                        isMobile: l,
                        isVR: d,
                        isTyping: _,
                        status: A,
                        "aria-label": t.username,
                        statusTooltip: !0,
                        avatarDecoration: f,
                        typingIndicatorRef: p,
                    }),
                    (0, r.jsx)(y.A, {
                        confettiSpawnRef: h,
                        shouldFire: _ && null != m && t.id !== m.id,
                        confettiLocation: w.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    j = i.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: s,
                status: a,
                applicationStream: o,
                voiceStatusChannel: l,
                user: u,
                channel: c,
                isHoveringOrFocusing: _,
                quest: p,
            } = e,
            h = i.useMemo(
                () => (0, d.A)({ activities: s, status: a, applicationStream: o, voiceChannel: l }),
                [s, a, o, l],
            ),
            m = i.useMemo(
                () =>
                    !(0, E.A)({
                        activity: s?.find((e) => {
                            let { type: t } = e;
                            return t === D.$pd.CUSTOM_STATUS;
                        }),
                        user: u,
                        channel: c,
                    }),
                [s, u, c],
            );
        return t || !h
            ? null
            : (0, r.jsx)(f.A, {
                  user: u,
                  activities: s,
                  applicationStream: o,
                  voiceChannel: l,
                  animateEmoji: _,
                  hideEmoji: m,
                  hasQuest: null != p,
                  hideTooltip: n,
              });
    }),
    Y = i.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: s,
                colorRoleName: l,
                isOwner: c,
                ownerTooltipText: d,
                lostPermissionTooltipText: f,
                isTyping: p = !1,
                nick: E,
                user: g,
                currentUser: A,
                activities: I,
                applicationStream: T,
                status: S,
                shouldAnimateStatus: y = !1,
                isMobile: O,
                isVR: L,
                premiumSince: w,
                channel: M,
                guildId: x,
                className: U,
                nameplate: G,
                hideClanTag: F = !1,
                hideSubtext: Y = !1,
                hideTooltip: W = !1,
                onMouseDown: K,
                onKeyDown: $,
                onClick: z,
                onContextMenu: q,
                onClickPremiumGuildIcon: Z,
                "aria-controls": X,
                "aria-expanded": Q,
                "aria-posinset": J,
                "aria-setsize": ee,
                id: et,
                tabIndex: en,
                itemProps: er,
                ref: ei,
            } = e,
            es = g?.id,
            ea = b.Ay.useName(g),
            eo = i.useRef(null),
            el = ei ?? eo,
            [eu, ec] = i.useState(!1),
            [ed, e_] = i.useState(!1),
            [ef, ep] = i.useState(null),
            { voiceChannel: eh } = (0, _.A)({ userId: es, guildId: x }),
            {
                avatarDecorationSrc: em,
                avatarSrc: eE,
                eventHandlers: eg,
            } = (0, R.A)({ userId: es, size: u._3J.SIZE_32, animateOnHover: !(t || eu), guildId: x }),
            { onFocus: eA, ...eI } = er ?? {},
            eT = (0, v.gn)(x, es, s ?? null),
            [eS, ey] = i.useState(!1);
        i.useEffect(() => {
            t && ey(!1);
        }, [t]);
        let ev = (0, N.YW)(I),
            eN = (0, N.Yl)(ev, T, es) && t && !eS,
            eC = i.useCallback(() => {
                ec(!0);
            }, []),
            eR = i.useCallback(() => {
                ec(!1);
            }, []),
            eO = i.useCallback(() => {
                e_(!0), eA?.();
            }, [eA]),
            eb = i.useCallback(() => {
                e_(!1);
            }, []),
            eD = i.useCallback((e) => {
                ep(e);
            }, []),
            eL = i.useCallback(
                (e) =>
                    null == ev
                        ? null
                        : (0, r.jsx)(C.A, {
                              name: E ?? ea,
                              quest: ev,
                              memberListItemRef: el,
                              applicationStream: T,
                              ...e,
                              closePopout: () => ey(!0),
                          }),
                [ev, el, T, E, ea],
            );
        return null == g
            ? (0, r.jsx)(h.A, { avatarSize: u._3J.SIZE_32, className: P.qf })
            : (0, r.jsx)(u.YNO, {
                  targetElementRef: el,
                  renderPopout: eL,
                  position: "bottom",
                  shouldShow: eN,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: u.YNO.Animation.NONE,
                  spacing: -k,
                  children: () =>
                      (0, r.jsx)(m.A, {
                          ref: el,
                          selected: t,
                          className: a()(P.Dc, U, { [P.WK]: S === D.clD.OFFLINE && !t, [P.PJ]: eN }),
                          innerClassName: P.Hz,
                          onClick: z,
                          onKeyDown: $,
                          onMouseDown: K,
                          onContextMenu: q,
                          onMouseEnter: eC,
                          onMouseLeave: eR,
                          onBlur: eb,
                          hovered: eu,
                          name:
                              null == f
                                  ? (0, r.jsx)("span", {
                                        className: P.Xh,
                                        children: (0, r.jsx)(B, {
                                            colorRoleName: l,
                                            colorString: n ?? null,
                                            name: E ?? ea,
                                            colorStrings: eT,
                                            hideClanTag: F,
                                            user: g,
                                            guildId: x,
                                            isHovering: eu,
                                        }),
                                    })
                                  : (0, r.jsx)(o.m, {
                                        text: f,
                                        children: (0, r.jsx)("span", {
                                            className: a()(P.Xh, P.oj),
                                            children: (0, r.jsx)(B, {
                                                colorRoleName: l,
                                                colorString: n ?? null,
                                                name: E ?? ea,
                                                colorStrings: eT,
                                                hideClanTag: F,
                                                user: g,
                                                guildId: x,
                                                isHovering: eu,
                                            }),
                                        }),
                                    }),
                          avatar: (0, r.jsx)(H, {
                              user: g,
                              shouldAnimateStatus: y,
                              activities: I,
                              status: S,
                              eventHandlers: eg,
                              avatarSrc: eE,
                              isMobile: O,
                              isVR: L,
                              isTyping: p,
                              avatarDecorationSrc: em,
                              handleSetTypingRef: eD,
                              typingRef: ef,
                              currentUser: A,
                          }),
                          nameplate: G,
                          subText: (0, r.jsx)(j, {
                              hideSubtext: Y,
                              activities: I,
                              status: S,
                              applicationStream: T,
                              voiceStatusChannel: eh,
                              user: g,
                              channel: M,
                              isHoveringOrFocusing: eu || ed,
                              quest: ev,
                              hideTooltip: W,
                          }),
                          decorators: (0, r.jsx)(V, {
                              user: g,
                              isOwner: c,
                              lostPermissionTooltipText: f,
                              ownerTooltipText: d,
                              premiumSince: w,
                              onClickPremiumGuildIcon: Z,
                          }),
                          "aria-controls": X,
                          "aria-expanded": Q,
                          "aria-setsize": ee,
                          "aria-posinset": J,
                          id: et,
                          tabIndex: en,
                          onFocus: eO,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eI,
                      }),
              });
    });
