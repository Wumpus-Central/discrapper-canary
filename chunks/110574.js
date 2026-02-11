"use strict";
n.d(t, { A: () => K, b: () => U });
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
    h = n(729551),
    p = n(709066),
    g = n(295160),
    E = n(193663),
    A = n(490427),
    I = n(609425),
    T = n(922301),
    y = n(750112),
    S = n(73392),
    v = n(534400),
    C = n(835759),
    b = n(967144),
    N = n(890687),
    R = n(198525),
    O = n(854627),
    D = n(240248),
    L = n(427262),
    w = n(652215),
    x = n(705751),
    P = n(31408),
    M = n(985018),
    k = n(645576);
let U = (0, D.xI)(l.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    G = 3,
    F = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(o.m, {
                  __unsupportedReactNodeAsText: i ?? M.intl.string(M.t.pclUFJ),
                  children: (0, r.jsx)(u.pw5, { size: "md", color: "currentColor", className: k.Dd }),
              })
            : null;
    }),
    V = i.memo(function (e) {
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
                          className: k.PC,
                      }),
                  }),
              });
    }),
    B = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = x.nu.BOT;
        return (0, r.jsx)(p.A, { className: k.AO, type: n, verified: t.isVerifiedBot() });
    }),
    j = i.memo(function (e) {
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
                (0, r.jsx)(B, { user: t }),
                (0, r.jsx)(F, { isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: a }),
                (0, r.jsx)(V, { premiumSince: s, onClickPremiumGuildIcon: o }),
            ],
        });
    }),
    H = i.memo(function (e) {
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
            d = (0, I.A)({ userId: o?.id, guildId: l }),
            _ = (0, S.a)({ displayNameStyles: d }),
            f = null == l && null != d;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                f
                    ? (0, r.jsx)(y.A, {
                          userName: a ?? "",
                          displayNameStyles: d,
                          effectDisplayType: c ? T.G.ANIMATED : T.G.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(u.gyj, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: a,
                          className: k.UU,
                          displayNameStylesFont: _,
                          animateRoleGradient: c,
                      }),
                !s &&
                    (0, r.jsx)(v.Ay, {
                        primaryGuild: o?.primaryGuild,
                        userId: o?.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: k.fc,
                    }),
            ],
        });
    }),
    Y = i.memo(function (e) {
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
                handleSetTypingRef: h,
                typingRef: p,
                currentUser: g,
            } = e,
            E = a === w.clD.OFFLINE,
            A = n ? u.JsQ : u.euF,
            I = (0, c.A)(i) ? w.clD.STREAMING : a;
        return (
            (I = E ? void 0 : I),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(A, {
                        ...s,
                        size: u._3J.SIZE_32,
                        src: o,
                        isMobile: l,
                        isVR: d,
                        isTyping: _,
                        status: I,
                        "aria-label": t.username,
                        statusTooltip: !0,
                        avatarDecoration: f,
                        typingIndicatorRef: h,
                    }),
                    (0, r.jsx)(C.A, {
                        confettiSpawnRef: p,
                        shouldFire: _ && null != g && t.id !== g.id,
                        confettiLocation: P.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    W = i.memo(function (e) {
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
            p = i.useMemo(
                () => (0, _.A)({ activities: a, status: s, applicationStream: o, voiceChannel: l }),
                [a, s, o, l],
            ),
            g = i.useMemo(
                () =>
                    !(0, A.A)({
                        activity: a?.find((e) => {
                            let { type: t } = e;
                            return t === w.$pd.CUSTOM_STATUS;
                        }),
                        user: u,
                        channel: c,
                    }),
                [a, u, c],
            );
        return t || !p
            ? null
            : (0, r.jsx)(h.A, {
                  user: u,
                  activities: a,
                  applicationStream: o,
                  voiceChannel: l,
                  animateEmoji: d,
                  hideEmoji: g,
                  hasQuest: null != f,
                  hideTooltip: n,
              });
    }),
    K = i.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: a,
                colorRoleName: l,
                isOwner: c,
                ownerTooltipText: _,
                lostPermissionTooltipText: h,
                isTyping: p = !1,
                nick: A,
                user: I,
                currentUser: T,
                activities: y,
                applicationStream: S,
                status: v,
                shouldAnimateStatus: C = !1,
                isMobile: D,
                isVR: x,
                premiumSince: P,
                channel: M,
                guildId: U,
                className: F,
                nameplate: V,
                hideClanTag: B = !1,
                hideSubtext: K = !1,
                hideTooltip: $ = !1,
                onMouseDown: z,
                onKeyDown: q,
                onClick: X,
                onContextMenu: Z,
                onClickPremiumGuildIcon: Q,
                "aria-controls": J,
                "aria-expanded": ee,
                "aria-posinset": et,
                "aria-setsize": en,
                id: er,
                tabIndex: ei,
                itemProps: ea,
                ref: es,
            } = e,
            eo = I?.id,
            el = L.Ay.useName(I),
            eu = i.useRef(null),
            ec = es ?? eu,
            [ed, e_] = i.useState(!1),
            [ef, eh] = i.useState(!1),
            [ep, em] = i.useState(null),
            { voiceChannel: eg } = (0, f.A)({ userId: eo, guildId: U }),
            { voiceActivityStatusEnabled: eE } = (0, d.G)({ location: "MemberListItem" }),
            eA = eE ? eg : void 0,
            {
                avatarDecorationSrc: eI,
                avatarSrc: eT,
                eventHandlers: ey,
            } = (0, O.A)({ userId: eo, size: u._3J.SIZE_32, animateOnHover: !(t || ed), guildId: U }),
            { onFocus: eS, ...ev } = ea ?? {},
            eC = (0, b.gn)(U, eo, a ?? null),
            [eb, eN] = i.useState(!1);
        i.useEffect(() => {
            t && eN(!1);
        }, [t]);
        let eR = (0, N.YW)(y),
            eO = (0, N.Yl)(eR, S, eo) && t && !eb,
            eD = i.useCallback(() => {
                e_(!0);
            }, []),
            eL = i.useCallback(() => {
                e_(!1);
            }, []),
            ew = i.useCallback(() => {
                eh(!0), eS?.();
            }, [eS]),
            ex = i.useCallback(() => {
                eh(!1);
            }, []),
            eP = i.useCallback((e) => {
                em(e);
            }, []),
            eM = i.useCallback(
                (e) =>
                    null == eR
                        ? null
                        : (0, r.jsx)(R.A, {
                              name: A ?? el,
                              quest: eR,
                              memberListItemRef: ec,
                              applicationStream: S,
                              ...e,
                              closePopout: () => eN(!0),
                          }),
                [eR, ec, S, A, el],
            );
        return null == I
            ? (0, r.jsx)(g.A, { avatarSize: u._3J.SIZE_32, className: k.qf })
            : (0, r.jsx)(u.YNO, {
                  targetElementRef: ec,
                  renderPopout: eM,
                  position: "bottom",
                  shouldShow: eO,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: u.YNO.Animation.NONE,
                  spacing: -G,
                  children: () =>
                      (0, r.jsx)(E.A, {
                          ref: ec,
                          selected: t,
                          className: s()(k.Dc, F, { [k.WK]: v === w.clD.OFFLINE && !t, [k.PJ]: eO }),
                          innerClassName: k.Hz,
                          onClick: X,
                          onKeyDown: q,
                          onMouseDown: z,
                          onContextMenu: Z,
                          onMouseEnter: eD,
                          onMouseLeave: eL,
                          onBlur: ex,
                          hovered: ed,
                          name:
                              null == h
                                  ? (0, r.jsx)("span", {
                                        className: k.Xh,
                                        children: (0, r.jsx)(H, {
                                            colorRoleName: l,
                                            colorString: n ?? null,
                                            name: A ?? el,
                                            colorStrings: eC,
                                            hideClanTag: B,
                                            user: I,
                                            guildId: U,
                                            isHovering: ed,
                                        }),
                                    })
                                  : (0, r.jsx)(o.m, {
                                        text: h,
                                        children: (0, r.jsx)("span", {
                                            className: s()(k.Xh, k.oj),
                                            children: (0, r.jsx)(H, {
                                                colorRoleName: l,
                                                colorString: n ?? null,
                                                name: A ?? el,
                                                colorStrings: eC,
                                                hideClanTag: B,
                                                user: I,
                                                guildId: U,
                                                isHovering: ed,
                                            }),
                                        }),
                                    }),
                          avatar: (0, r.jsx)(Y, {
                              user: I,
                              shouldAnimateStatus: C,
                              activities: y,
                              status: v,
                              eventHandlers: ey,
                              avatarSrc: eT,
                              isMobile: D,
                              isVR: x,
                              isTyping: p,
                              avatarDecorationSrc: eI,
                              handleSetTypingRef: eP,
                              typingRef: ep,
                              currentUser: T,
                          }),
                          nameplate: V,
                          subText: (0, r.jsx)(W, {
                              hideSubtext: K,
                              activities: y,
                              status: v,
                              applicationStream: S,
                              voiceStatusChannel: eA,
                              user: I,
                              channel: M,
                              isHoveringOrFocusing: ed || ef,
                              quest: eR,
                              hideTooltip: $,
                          }),
                          decorators: (0, r.jsx)(j, {
                              user: I,
                              isOwner: c,
                              lostPermissionTooltipText: h,
                              ownerTooltipText: _,
                              premiumSince: P,
                              onClickPremiumGuildIcon: Q,
                          }),
                          "aria-controls": J,
                          "aria-expanded": ee,
                          "aria-setsize": en,
                          "aria-posinset": et,
                          id: er,
                          tabIndex: ei,
                          onFocus: ew,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...ev,
                      }),
              });
    });
