"use strict";
n.d(t, { A: () => J, b: () => B });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(990078),
    o = n(319060),
    c = n(329177),
    u = n(939249),
    d = n(104510),
    h = n(827734),
    m = n(463930),
    p = n(97808),
    f = n(778712),
    g = n(265872),
    _ = n(960076),
    x = n(397244),
    A = n(714114),
    C = n(729551),
    E = n(709066),
    I = n(295160),
    v = n(193663),
    y = n(490427),
    S = n(609425),
    b = n(922301),
    N = n(750112),
    j = n(73392),
    T = n(534400),
    R = n(835759),
    w = n(967144),
    L = n(890687),
    M = n(198525),
    O = n(854627),
    k = n(240248),
    P = n(427262),
    D = n(652215),
    U = n(705751),
    V = n(31408),
    G = n(985018),
    F = n(28371);
let B = (0, k.xI)(o.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    H = l.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: l } = e;
        return null != t && t && null == n
            ? (0, i.jsx)(a.m, {
                  __unsupportedReactNodeAsText: l ?? G.intl.string(G.t.pclUFJ),
                  children: (0, i.jsx)(c.p, { size: "md", color: "currentColor", className: F.Dd }),
              })
            : null;
    }),
    W = l.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, i.jsx)(a.m, {
                  text: G.intl.formatToPlainString(G.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, i.jsx)(u.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, i.jsx)(d._, { color: h.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: F.PC }),
                  }),
              });
    }),
    K = l.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = U.nu.BOT;
        return (0, i.jsx)(E.A, { className: F.AO, type: n, verified: t.isVerifiedBot() });
    }),
    z = l.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: l,
            ownerTooltipText: s,
            premiumSince: r,
            onClickPremiumGuildIcon: a,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(K, { user: t }),
                (0, i.jsx)(H, { isOwner: n, lostPermissionTooltipText: l, ownerTooltipText: s }),
                (0, i.jsx)(W, { premiumSince: r, onClickPremiumGuildIcon: a }),
            ],
        });
    }),
    Z = l.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: l,
                name: s,
                hideClanTag: r,
                user: a,
                guildId: o,
                isHovering: c,
            } = e,
            u = (0, S.A)({ userId: a?.id, guildId: o }),
            d = (0, j.a)({ displayNameStyles: u }),
            h = null == o && null != u;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                h
                    ? (0, i.jsx)(N.A, {
                          userName: s ?? "",
                          displayNameStyles: u,
                          effectDisplayType: c ? b.G.ANIMATED : b.G.STATIC,
                          loop: !0,
                      })
                    : (0, i.jsx)(m.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: l,
                          name: s,
                          className: F.UU,
                          displayNameStylesFont: d,
                          animateRoleGradient: c,
                      }),
                !r &&
                    (0, i.jsx)(T.Ay, {
                        primaryGuild: a?.primaryGuild,
                        userId: a?.id,
                        contextGuildId: o,
                        disableGuildProfile: !0,
                        className: F.fc,
                    }),
            ],
        });
    }),
    q = l.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: l,
                status: s,
                eventHandlers: r,
                avatarSrc: a,
                isMobile: o,
                isVR: c,
                isTyping: u,
                avatarDecorationSrc: d,
                handleSetTypingRef: h,
                typingRef: m,
                currentUser: g,
            } = e,
            x = s === D.clD.OFFLINE,
            A = n ? p.Js : p.eu,
            C = (0, _.A)(l) ? D.clD.STREAMING : s;
        return (
            (C = x ? void 0 : C),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A, {
                        ...r,
                        size: f._3.SIZE_32,
                        src: a,
                        isMobile: o,
                        isVR: c,
                        isTyping: u,
                        status: C,
                        "aria-label": t.username,
                        statusTooltip: !0,
                        avatarDecoration: d,
                        typingIndicatorRef: h,
                    }),
                    (0, i.jsx)(R.A, {
                        confettiSpawnRef: m,
                        shouldFire: u && null != g && t.id !== g.id,
                        confettiLocation: V.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    Y = l.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: s,
                status: r,
                applicationStream: a,
                voiceStatusChannel: o,
                user: c,
                channel: u,
                isHoveringOrFocusing: d,
                quest: h,
            } = e,
            m = l.useMemo(
                () => (0, x.A)({ activities: s, status: r, applicationStream: a, voiceChannel: o }),
                [s, r, a, o],
            ),
            p = l.useMemo(
                () =>
                    !(0, y.A)({
                        activity: s?.find((e) => {
                            let { type: t } = e;
                            return t === D.$pd.CUSTOM_STATUS;
                        }),
                        user: c,
                        channel: u,
                    }),
                [s, c, u],
            );
        return t || !m
            ? null
            : (0, i.jsx)(C.A, {
                  user: c,
                  activities: s,
                  applicationStream: a,
                  voiceChannel: o,
                  animateEmoji: d,
                  hideEmoji: p,
                  hasQuest: null != h,
                  hideTooltip: n,
              });
    }),
    J = l.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: s,
                colorRoleName: o,
                isOwner: c,
                ownerTooltipText: u,
                lostPermissionTooltipText: d,
                isTyping: h = !1,
                nick: m,
                user: p,
                currentUser: _,
                activities: x,
                applicationStream: C,
                status: E,
                shouldAnimateStatus: y = !1,
                isMobile: S,
                isVR: b,
                premiumSince: N,
                channel: j,
                guildId: T,
                className: R,
                nameplate: k,
                hideClanTag: U = !1,
                hideSubtext: V = !1,
                hideTooltip: G = !1,
                onMouseDown: B,
                onKeyDown: H,
                onClick: W,
                onContextMenu: K,
                onClickPremiumGuildIcon: J,
                "aria-controls": $,
                "aria-expanded": X,
                "aria-posinset": Q,
                "aria-setsize": ee,
                id: et,
                tabIndex: en,
                itemProps: ei,
                ref: el,
            } = e,
            es = p?.id,
            er = P.Ay.useName(p),
            ea = l.useRef(null),
            eo = el ?? ea,
            [ec, eu] = l.useState(!1),
            [ed, eh] = l.useState(!1),
            [em, ep] = l.useState(null),
            { voiceChannel: ef } = (0, A.A)({ userId: es, guildId: T }),
            {
                avatarDecorationSrc: eg,
                avatarSrc: e_,
                eventHandlers: ex,
            } = (0, O.A)({ userId: es, size: f._3.SIZE_32, animateOnHover: !(t || ec), guildId: T }),
            { onFocus: eA, ...eC } = ei ?? {},
            eE = (0, w.gn)(T, es, s ?? null),
            [eI, ev] = l.useState(!1);
        l.useEffect(() => {
            t && ev(!1);
        }, [t]);
        let ey = (0, L.YW)(x),
            eS = (0, L.Yl)(ey, C, es) && t && !eI,
            eb = l.useCallback(() => {
                eu(!0);
            }, []),
            eN = l.useCallback(() => {
                eu(!1);
            }, []),
            ej = l.useCallback(() => {
                eh(!0), eA?.();
            }, [eA]),
            eT = l.useCallback(() => {
                eh(!1);
            }, []),
            eR = l.useCallback((e) => {
                ep(e);
            }, []),
            ew = l.useCallback(
                (e) =>
                    null == ey
                        ? null
                        : (0, i.jsx)(M.A, {
                              name: m ?? er,
                              quest: ey,
                              memberListItemRef: eo,
                              applicationStream: C,
                              ...e,
                              closePopout: () => ev(!0),
                          }),
                [ey, eo, C, m, er],
            );
        return null == p
            ? (0, i.jsx)(I.A, { avatarSize: f._3.SIZE_32, className: F.qf })
            : (0, i.jsx)(g.Y, {
                  targetElementRef: eo,
                  renderPopout: ew,
                  position: "bottom",
                  shouldShow: eS,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: g.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, i.jsx)(v.A, {
                          ref: eo,
                          selected: t,
                          className: r()(F.Dc, R, { [F.WK]: E === D.clD.OFFLINE && !t, [F.PJ]: eS }),
                          innerClassName: F.Hz,
                          onClick: W,
                          onKeyDown: H,
                          onMouseDown: B,
                          onContextMenu: K,
                          onMouseEnter: eb,
                          onMouseLeave: eN,
                          onBlur: eT,
                          hovered: ec,
                          name:
                              null == d
                                  ? (0, i.jsx)("span", {
                                        className: F.Xh,
                                        children: (0, i.jsx)(Z, {
                                            colorRoleName: o,
                                            colorString: n ?? null,
                                            name: m ?? er,
                                            colorStrings: eE,
                                            hideClanTag: U,
                                            user: p,
                                            guildId: T,
                                            isHovering: ec,
                                        }),
                                    })
                                  : (0, i.jsx)(a.m, {
                                        text: d,
                                        children: (0, i.jsx)("span", {
                                            className: r()(F.Xh, F.oj),
                                            children: (0, i.jsx)(Z, {
                                                colorRoleName: o,
                                                colorString: n ?? null,
                                                name: m ?? er,
                                                colorStrings: eE,
                                                hideClanTag: U,
                                                user: p,
                                                guildId: T,
                                                isHovering: ec,
                                            }),
                                        }),
                                    }),
                          avatar: (0, i.jsx)(q, {
                              user: p,
                              shouldAnimateStatus: y,
                              activities: x,
                              status: E,
                              eventHandlers: ex,
                              avatarSrc: e_,
                              isMobile: S,
                              isVR: b,
                              isTyping: h,
                              avatarDecorationSrc: eg,
                              handleSetTypingRef: eR,
                              typingRef: em,
                              currentUser: _,
                          }),
                          nameplate: k,
                          subText: (0, i.jsx)(Y, {
                              hideSubtext: V,
                              activities: x,
                              status: E,
                              applicationStream: C,
                              voiceStatusChannel: ef,
                              user: p,
                              channel: j,
                              isHoveringOrFocusing: ec || ed,
                              quest: ey,
                              hideTooltip: G,
                          }),
                          decorators: (0, i.jsx)(z, {
                              user: p,
                              isOwner: c,
                              lostPermissionTooltipText: d,
                              ownerTooltipText: u,
                              premiumSince: N,
                              onClickPremiumGuildIcon: J,
                          }),
                          "aria-controls": $,
                          "aria-expanded": X,
                          "aria-setsize": ee,
                          "aria-posinset": Q,
                          id: et,
                          tabIndex: en,
                          onFocus: ej,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eC,
                      }),
              });
    });
