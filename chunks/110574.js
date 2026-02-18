"use strict";
n.d(t, { A: () => W, b: () => k });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(193663),
    g = n(490427),
    A = n(609425),
    I = n(922301),
    T = n(750112),
    S = n(73392),
    y = n(534400),
    v = n(835759),
    N = n(967144),
    C = n(890687),
    b = n(198525),
    R = n(854627),
    O = n(240248),
    D = n(427262),
    L = n(652215),
    w = n(705751),
    x = n(31408),
    M = n(985018),
    P = n(645576);
let k = (0, O.xI)(l.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    U = 3,
    G = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(o.m, {
                  __unsupportedReactNodeAsText: i ?? M.intl.string(M.t.pclUFJ),
                  children: (0, r.jsx)(u.pw5, { size: "md", color: "currentColor", className: P.Dd }),
              })
            : null;
    }),
    F = i.memo(function (e) {
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
    V = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = w.nu.BOT;
        return (0, r.jsx)(h.A, { className: P.AO, type: n, verified: t.isVerifiedBot() });
    }),
    B = i.memo(function (e) {
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
                (0, r.jsx)(V, { user: t }),
                (0, r.jsx)(G, { isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: s }),
                (0, r.jsx)(F, { premiumSince: a, onClickPremiumGuildIcon: o }),
            ],
        });
    }),
    H = i.memo(function (e) {
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
            d = (0, A.A)({ userId: o?.id, guildId: l }),
            _ = (0, S.a)({ displayNameStyles: d }),
            f = null == l && null != d;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                f
                    ? (0, r.jsx)(T.A, {
                          userName: s ?? "",
                          displayNameStyles: d,
                          effectDisplayType: c ? I.G.ANIMATED : I.G.STATIC,
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
                    (0, r.jsx)(y.Ay, {
                        primaryGuild: o?.primaryGuild,
                        userId: o?.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: P.fc,
                    }),
            ],
        });
    }),
    j = i.memo(function (e) {
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
            E = s === L.clD.OFFLINE,
            g = n ? u.JsQ : u.euF,
            A = (0, c.A)(i) ? L.clD.STREAMING : s;
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
                activities: s,
                status: a,
                applicationStream: o,
                voiceStatusChannel: l,
                user: u,
                channel: c,
                isHoveringOrFocusing: d,
                quest: f,
            } = e,
            h = i.useMemo(
                () => (0, _.A)({ activities: s, status: a, applicationStream: o, voiceChannel: l }),
                [s, a, o, l],
            ),
            m = i.useMemo(
                () =>
                    !(0, g.A)({
                        activity: s?.find((e) => {
                            let { type: t } = e;
                            return t === L.$pd.CUSTOM_STATUS;
                        }),
                        user: u,
                        channel: c,
                    }),
                [s, u, c],
            );
        return t || !h
            ? null
            : (0, r.jsx)(p.A, {
                  user: u,
                  activities: s,
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
                colorStrings: s,
                colorRoleName: l,
                isOwner: c,
                ownerTooltipText: _,
                lostPermissionTooltipText: p,
                isTyping: h = !1,
                nick: g,
                user: A,
                currentUser: I,
                activities: T,
                applicationStream: S,
                status: y,
                shouldAnimateStatus: v = !1,
                isMobile: O,
                isVR: w,
                premiumSince: x,
                channel: M,
                guildId: k,
                className: G,
                nameplate: F,
                hideClanTag: V = !1,
                hideSubtext: W = !1,
                hideTooltip: K = !1,
                onMouseDown: z,
                onKeyDown: $,
                onClick: q,
                onContextMenu: Z,
                onClickPremiumGuildIcon: X,
                "aria-controls": Q,
                "aria-expanded": J,
                "aria-posinset": ee,
                "aria-setsize": et,
                id: en,
                tabIndex: er,
                itemProps: ei,
                ref: es,
            } = e,
            ea = A?.id,
            eo = D.Ay.useName(A),
            el = i.useRef(null),
            eu = es ?? el,
            [ec, ed] = i.useState(!1),
            [e_, ef] = i.useState(!1),
            [ep, eh] = i.useState(null),
            { voiceChannel: em } = (0, f.A)({ userId: ea, guildId: k }),
            { voiceActivityStatusEnabled: eE } = (0, d.G)({ location: "MemberListItem" }),
            eg = eE ? em : void 0,
            {
                avatarDecorationSrc: eA,
                avatarSrc: eI,
                eventHandlers: eT,
            } = (0, R.A)({ userId: ea, size: u._3J.SIZE_32, animateOnHover: !(t || ec), guildId: k }),
            { onFocus: eS, ...ey } = ei ?? {},
            ev = (0, N.gn)(k, ea, s ?? null),
            [eN, eC] = i.useState(!1);
        i.useEffect(() => {
            t && eC(!1);
        }, [t]);
        let eb = (0, C.YW)(T),
            eR = (0, C.Yl)(eb, S, ea) && t && !eN,
            eO = i.useCallback(() => {
                ed(!0);
            }, []),
            eD = i.useCallback(() => {
                ed(!1);
            }, []),
            eL = i.useCallback(() => {
                ef(!0), eS?.();
            }, [eS]),
            ew = i.useCallback(() => {
                ef(!1);
            }, []),
            ex = i.useCallback((e) => {
                eh(e);
            }, []),
            eM = i.useCallback(
                (e) =>
                    null == eb
                        ? null
                        : (0, r.jsx)(b.A, {
                              name: g ?? eo,
                              quest: eb,
                              memberListItemRef: eu,
                              applicationStream: S,
                              ...e,
                              closePopout: () => eC(!0),
                          }),
                [eb, eu, S, g, eo],
            );
        return null == A
            ? (0, r.jsx)(m.A, { avatarSize: u._3J.SIZE_32, className: P.qf })
            : (0, r.jsx)(u.YNO, {
                  targetElementRef: eu,
                  renderPopout: eM,
                  position: "bottom",
                  shouldShow: eR,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: u.YNO.Animation.NONE,
                  spacing: -U,
                  children: () =>
                      (0, r.jsx)(E.A, {
                          ref: eu,
                          selected: t,
                          className: a()(P.Dc, G, { [P.WK]: y === L.clD.OFFLINE && !t, [P.PJ]: eR }),
                          innerClassName: P.Hz,
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
                                        className: P.Xh,
                                        children: (0, r.jsx)(H, {
                                            colorRoleName: l,
                                            colorString: n ?? null,
                                            name: g ?? eo,
                                            colorStrings: ev,
                                            hideClanTag: V,
                                            user: A,
                                            guildId: k,
                                            isHovering: ec,
                                        }),
                                    })
                                  : (0, r.jsx)(o.m, {
                                        text: p,
                                        children: (0, r.jsx)("span", {
                                            className: a()(P.Xh, P.oj),
                                            children: (0, r.jsx)(H, {
                                                colorRoleName: l,
                                                colorString: n ?? null,
                                                name: g ?? eo,
                                                colorStrings: ev,
                                                hideClanTag: V,
                                                user: A,
                                                guildId: k,
                                                isHovering: ec,
                                            }),
                                        }),
                                    }),
                          avatar: (0, r.jsx)(j, {
                              user: A,
                              shouldAnimateStatus: v,
                              activities: T,
                              status: y,
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
                          nameplate: F,
                          subText: (0, r.jsx)(Y, {
                              hideSubtext: W,
                              activities: T,
                              status: y,
                              applicationStream: S,
                              voiceStatusChannel: eg,
                              user: A,
                              channel: M,
                              isHoveringOrFocusing: ec || e_,
                              quest: eb,
                              hideTooltip: K,
                          }),
                          decorators: (0, r.jsx)(B, {
                              user: A,
                              isOwner: c,
                              lostPermissionTooltipText: p,
                              ownerTooltipText: _,
                              premiumSince: x,
                              onClickPremiumGuildIcon: X,
                          }),
                          "aria-controls": Q,
                          "aria-expanded": J,
                          "aria-setsize": et,
                          "aria-posinset": ee,
                          id: en,
                          tabIndex: er,
                          onFocus: eL,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...ey,
                      }),
              });
    });
