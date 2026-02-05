"use strict";
n.d(t, { A: () => W, b: () => k });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(319060),
    u = n(397927),
    c = n(960076),
    d = n(901517),
    _ = n(397244),
    f = n(714114),
    p = n(729551),
    h = n(709066),
    m = n(295160),
    g = n(193663),
    E = n(490427),
    A = n(609425),
    I = n(922301),
    T = n(750112),
    y = n(73392),
    S = n(534400),
    v = n(835759),
    C = n(967144),
    b = n(890687),
    N = n(198525),
    R = n(854627),
    O = n(240248),
    D = n(427262),
    L = n(652215),
    w = n(705751),
    x = n(31408),
    P = n(985018),
    M = n(645576);
let k = (0, O.xI)(l.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    U = 3,
    G = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(o.m, {
                  __unsupportedReactNodeAsText: i ?? P.intl.string(P.t.pclUFJ),
                  children: (0, r.jsx)(u.pw5, { size: "md", color: "currentColor", className: M.Dd }),
              })
            : null;
    }),
    V = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(o.m, {
                  text: P.intl.formatToPlainString(P.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, r.jsx)(u.DUT, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, r.jsx)(u._Jp, {
                          color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                          className: M.PC,
                      }),
                  }),
              });
    }),
    F = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = w.nu.BOT;
        return (0, r.jsx)(h.A, { className: M.AO, type: n, verified: t.isVerifiedBot() });
    }),
    B = i.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: i,
            ownerTooltipText: a,
            premiumSince: s,
            onClickPremiumGuildIcon: o,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(F, { user: t }),
                (0, r.jsx)(G, { isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: a }),
                (0, r.jsx)(V, { premiumSince: s, onClickPremiumGuildIcon: o }),
            ],
        });
    }),
    j = i.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: i,
                name: a,
                hideClanTag: s,
                user: o,
                guildId: l,
                isHovering: c,
            } = e,
            d = (0, A.A)({ userId: o?.id, guildId: l }),
            _ = (0, y.a)({ displayNameStyles: d }),
            f = null == l && null != d;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                f
                    ? (0, r.jsx)(T.A, {
                          userName: a ?? "",
                          displayNameStyles: d,
                          effectDisplayType: c ? I.G.ANIMATED : I.G.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(u.gyj, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: a,
                          className: M.UU,
                          displayNameStylesFont: _,
                          animateRoleGradient: c,
                      }),
                !s &&
                    (0, r.jsx)(S.Ay, {
                        primaryGuild: o?.primaryGuild,
                        userId: o?.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: M.fc,
                    }),
            ],
        });
    }),
    H = i.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: i,
                status: a,
                eventHandlers: s,
                avatarSrc: o,
                isMobile: l,
                isVR: d,
                isTyping: _,
                avatarDecorationSrc: f,
                handleSetTypingRef: p,
                typingRef: h,
                currentUser: m,
            } = e,
            g = a === L.clD.OFFLINE,
            E = n ? u.JsQ : u.euF,
            A = (0, c.A)(i) ? L.clD.STREAMING : a;
        return (
            (A = g ? void 0 : A),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(E, {
                        ...s,
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
                    (0, r.jsx)(v.A, {
                        confettiSpawnRef: h,
                        shouldFire: _ && null != m && t.id !== m.id,
                        confettiLocation: x.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    Y = i.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: a,
                status: s,
                applicationStream: o,
                voiceStatusChannel: l,
                user: u,
                channel: c,
                isHoveringOrFocusing: d,
                quest: f,
            } = e,
            h = i.useMemo(
                () => (0, _.A)({ activities: a, status: s, applicationStream: o, voiceChannel: l }),
                [a, s, o, l],
            ),
            m = i.useMemo(
                () =>
                    !(0, E.A)({
                        activity: a?.find((e) => {
                            let { type: t } = e;
                            return t === L.$pd.CUSTOM_STATUS;
                        }),
                        user: u,
                        channel: c,
                    }),
                [a, u, c],
            );
        return t || !h
            ? null
            : (0, r.jsx)(p.A, {
                  user: u,
                  activities: a,
                  applicationStream: o,
                  voiceChannel: l,
                  animateEmoji: d,
                  hideEmoji: m,
                  hasQuest: null != f,
                  hideTooltip: n,
              });
    }),
    W = i.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: a,
                colorRoleName: l,
                isOwner: c,
                ownerTooltipText: _,
                lostPermissionTooltipText: p,
                isTyping: h = !1,
                nick: E,
                user: A,
                currentUser: I,
                activities: T,
                applicationStream: y,
                status: S,
                shouldAnimateStatus: v = !1,
                isMobile: O,
                isVR: w,
                premiumSince: x,
                channel: P,
                guildId: k,
                className: G,
                nameplate: V,
                hideClanTag: F = !1,
                hideSubtext: W = !1,
                hideTooltip: K = !1,
                onMouseDown: z,
                onKeyDown: $,
                onClick: q,
                onContextMenu: Z,
                onClickPremiumGuildIcon: Q,
                "aria-controls": X,
                "aria-expanded": J,
                "aria-posinset": ee,
                "aria-setsize": et,
                id: en,
                tabIndex: er,
                itemProps: ei,
                ref: ea,
            } = e,
            es = A?.id,
            eo = D.Ay.useName(A),
            el = i.useRef(null),
            eu = ea ?? el,
            [ec, ed] = i.useState(!1),
            [e_, ef] = i.useState(!1),
            [ep, eh] = i.useState(null),
            { voiceChannel: em } = (0, f.A)({ userId: es, guildId: k }),
            { voiceActivityStatusEnabled: eg } = (0, d.G)({ location: "MemberListItem" }),
            eE = eg ? em : void 0,
            {
                avatarDecorationSrc: eA,
                avatarSrc: eI,
                eventHandlers: eT,
            } = (0, R.A)({ userId: es, size: u._3J.SIZE_32, animateOnHover: !(t || ec), guildId: k }),
            { onFocus: ey, ...eS } = ei ?? {},
            ev = (0, C.gn)(k, es, a ?? null),
            [eC, eb] = i.useState(!1);
        i.useEffect(() => {
            t && eb(!1);
        }, [t]);
        let eN = (0, b.YW)(T),
            eR = (0, b.Yl)(eN, y, es) && t && !eC,
            eO = i.useCallback(() => {
                ed(!0);
            }, []),
            eD = i.useCallback(() => {
                ed(!1);
            }, []),
            eL = i.useCallback(() => {
                ef(!0), ey?.();
            }, [ey]),
            ew = i.useCallback(() => {
                ef(!1);
            }, []),
            ex = i.useCallback((e) => {
                eh(e);
            }, []),
            eP = i.useCallback(
                (e) =>
                    null == eN
                        ? null
                        : (0, r.jsx)(N.A, {
                              name: E ?? eo,
                              quest: eN,
                              memberListItemRef: eu,
                              applicationStream: y,
                              ...e,
                              closePopout: () => eb(!0),
                          }),
                [eN, eu, y, E, eo],
            );
        return null == A
            ? (0, r.jsx)(m.A, { avatarSize: u._3J.SIZE_32, className: M.qf })
            : (0, r.jsx)(u.YNO, {
                  targetElementRef: eu,
                  renderPopout: eP,
                  position: "bottom",
                  shouldShow: eR,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: u.YNO.Animation.NONE,
                  spacing: -U,
                  children: () =>
                      (0, r.jsx)(g.A, {
                          ref: eu,
                          selected: t,
                          className: s()(M.Dc, G, { [M.WK]: S === L.clD.OFFLINE && !t, [M.PJ]: eR }),
                          innerClassName: M.Hz,
                          onClick: q,
                          onKeyDown: $,
                          onMouseDown: z,
                          onContextMenu: Z,
                          onMouseEnter: eO,
                          onMouseLeave: eD,
                          onBlur: ew,
                          hovered: ec,
                          name:
                              null == p
                                  ? (0, r.jsx)("span", {
                                        className: M.Xh,
                                        children: (0, r.jsx)(j, {
                                            colorRoleName: l,
                                            colorString: n ?? null,
                                            name: E ?? eo,
                                            colorStrings: ev,
                                            hideClanTag: F,
                                            user: A,
                                            guildId: k,
                                            isHovering: ec,
                                        }),
                                    })
                                  : (0, r.jsx)(o.m, {
                                        text: p,
                                        children: (0, r.jsx)("span", {
                                            className: s()(M.Xh, M.oj),
                                            children: (0, r.jsx)(j, {
                                                colorRoleName: l,
                                                colorString: n ?? null,
                                                name: E ?? eo,
                                                colorStrings: ev,
                                                hideClanTag: F,
                                                user: A,
                                                guildId: k,
                                                isHovering: ec,
                                            }),
                                        }),
                                    }),
                          avatar: (0, r.jsx)(H, {
                              user: A,
                              shouldAnimateStatus: v,
                              activities: T,
                              status: S,
                              eventHandlers: eT,
                              avatarSrc: eI,
                              isMobile: O,
                              isVR: w,
                              isTyping: h,
                              avatarDecorationSrc: eA,
                              handleSetTypingRef: ex,
                              typingRef: ep,
                              currentUser: I,
                          }),
                          nameplate: V,
                          subText: (0, r.jsx)(Y, {
                              hideSubtext: W,
                              activities: T,
                              status: S,
                              applicationStream: y,
                              voiceStatusChannel: eE,
                              user: A,
                              channel: P,
                              isHoveringOrFocusing: ec || e_,
                              quest: eN,
                              hideTooltip: K,
                          }),
                          decorators: (0, r.jsx)(B, {
                              user: A,
                              isOwner: c,
                              lostPermissionTooltipText: p,
                              ownerTooltipText: _,
                              premiumSince: x,
                              onClickPremiumGuildIcon: Q,
                          }),
                          "aria-controls": X,
                          "aria-expanded": J,
                          "aria-setsize": et,
                          "aria-posinset": ee,
                          id: en,
                          tabIndex: er,
                          onFocus: eL,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eS,
                      }),
              });
    });
