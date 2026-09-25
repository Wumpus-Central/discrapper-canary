n.d(t, { A: () => ec });
var l,
    i = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(17928),
    u = n(319060),
    c = n(866665),
    d = n(329177),
    h = n(939249),
    m = n(104510),
    f = n(661531),
    p = n(463930),
    g = n(97808),
    x = n(778712),
    A = n(922016),
    C = n(960076),
    E = n(397244),
    I = n(714114),
    y = n(394871),
    S = n(296948),
    v = n(709066),
    N = n(235986),
    _ = n(141504),
    j = (((l = j || {}).SINGLE_AVATAR = "1"), (l.MULTIPLE_AVATAR = "2"), l);
let b = { [x._3.SIZE_32]: _.dT, [x._3.SIZE_40]: _.Jb };
class T extends s.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = j;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: l, doNotAnimate: s } = this.props;
        return "2" === e
            ? (0, i.jsxs)("div", {
                  className: a()(_.ce, _.jO, n),
                  children: [
                      (0, i.jsxs)(N.A, {
                          children: [
                              (0, i.jsx)("div", { className: a()(_.RH, b[t], _.hC) }),
                              (0, i.jsx)("div", { className: a()(_.RH, b[t], _.hC) }),
                              (0, i.jsx)("div", { className: a()(_.RH, b[t]) }),
                          ],
                      }),
                      (0, i.jsx)(N.A, { grow: 1, className: _.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, i.jsxs)(N.A, {
                  className: a()(_.qf, !s && _.lN, n),
                  children: [
                      (0, i.jsx)("div", { className: a()(_.RH, b[t], l) }),
                      (0, i.jsx)(N.A, {
                          grow: 1,
                          className: a()(_.gM, l),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
var R = n(268218),
    O = n(193663),
    M = n(490427),
    L = n(609425),
    k = n(922301),
    w = n(660184),
    P = n(73392),
    D = n(218150),
    U = n(534400),
    V = n(531685),
    G = n(620141),
    F = n(19309),
    H = n(224964);
function B(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        l = (0, o.bG)([V.A], () => V.A.isFocused()),
        i = (0, H.A)();
    return (
        s.useEffect(() => {
            if (l && n) {
                let e = (0, F.A)(t);
                null != e && i.fire(e.x, e.y);
            }
        }, [i, t, l, n]),
        null
    );
}
function W(e) {
    return (0, i.jsx)(G.A, { confettiLocation: e.confettiLocation, children: (0, i.jsx)(B, { ...e }) });
}
var K = n(967144),
    z = n(859703),
    Z = n(738822),
    Y = n(866157),
    q = n(854627),
    J = n(240248),
    $ = n(427262),
    X = n(652215),
    Q = n(31408),
    ee = n(375708),
    et = n(590218);
let en = (0, R.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("102075"),
            n.e("828178"),
            n.e("505928"),
            n.e("752657"),
            n.e("324732"),
            n.e("634225"),
            n.e("747973"),
            n.e("953840"),
            n.e("723180"),
            n.e("60955"),
            n.e("811310"),
            n.e("913823"),
            n.e("187110"),
            n.e("292583"),
            n.e("132191"),
            n.e("344502"),
            n.e("682337"),
            n.e("454625"),
            n.e("538887"),
            n.e("35485"),
            n.e("209729"),
            n.e("324761"),
            n.e("932606"),
            n.e("285350"),
            n.e("424265"),
            n.e("39038"),
            n.e("806295"),
            n.e("655602"),
            n.e("867160"),
        ]).then(n.bind(n, 198525)),
    webpackId: 198525,
    name: "QuestMembersListPopout",
    renderLoader: () => null,
});
(0, J.xI)(u.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let el = s.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: l } = e;
        return null != t && t && null == n
            ? (0, i.jsx)(c.m, {
                  __unsupportedReactNodeAsText: l ?? ee.intl.string(ee.t.pclUFJ),
                  children: (0, i.jsx)(d.CrownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: et.Dd,
                      "aria-label": l ?? ee.intl.string(ee.t.pclUFJ),
                  }),
              })
            : null;
    }),
    ei = s.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, i.jsx)(c.m, {
                  text: ee.intl.formatToPlainString(ee.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, i.jsx)(h.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, i.jsx)(m._, { color: f.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: et.PC }),
                  }),
              });
    }),
    es = s.memo(function (e) {
        let { user: t } = e;
        if (null == t) return null;
        let n = (0, S.r)(t);
        return null == n ? null : (0, i.jsx)(v.A, { className: et.AO, type: n, verified: t.isVerifiedBot() });
    }),
    er = s.memo(function (e) {
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
                (0, i.jsx)(es, { user: t }),
                (0, i.jsx)(el, { isOwner: n, lostPermissionTooltipText: l, ownerTooltipText: s }),
                (0, i.jsx)(ei, { premiumSince: r, onClickPremiumGuildIcon: a }),
            ],
        });
    }),
    ea = s.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: l,
                name: s,
                hideClanTag: r,
                user: a,
                guildId: o,
                isHovering: u,
            } = e,
            c = (0, L.A)({ userId: a?.id, guildId: o }),
            d = (0, P.a)({ displayNameStyles: c }),
            h = null == o && null != c;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                h
                    ? (0, i.jsx)(w.A, {
                          userName: s ?? "",
                          displayNameStyles: c,
                          effectDisplayType: u ? k.G.ANIMATED : k.G.STATIC,
                          loop: !0,
                      })
                    : (0, i.jsx)(p.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: l,
                          name: s,
                          className: et.UU,
                          displayNameStylesFont: d,
                          animateRoleGradient: u,
                      }),
                !r &&
                    (0, i.jsx)(U.Ay, {
                        primaryGuild: a?.primaryGuild,
                        userId: a?.id,
                        contextGuildId: o,
                        disableGuildProfile: !0,
                        className: et.fc,
                    }),
                null != o && a?.id != null && (0, i.jsx)(D.A, { guildId: o, userId: a.id }),
            ],
        });
    }),
    eo = s.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: l,
                status: s,
                eventHandlers: r,
                avatarSrc: a,
                isMobile: o,
                isVR: u,
                isTyping: c,
                avatarDecorationSrc: d,
                handleSetTypingRef: h,
                typingRef: m,
                currentUser: f,
            } = e,
            p = s === X.clD.OFFLINE,
            A = n ? g.Js : g.eu,
            E = (0, C.A)(l) ? X.clD.STREAMING : s;
        return (
            (E = p ? void 0 : E),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A, {
                        ...r,
                        size: x._3.SIZE_32,
                        src: a,
                        isMobile: o,
                        isVR: u,
                        isTyping: c,
                        status: E,
                        "aria-label": t.username,
                        statusTooltip: !0,
                        avatarDecoration: d,
                        typingIndicatorRef: h,
                    }),
                    (0, i.jsx)(W, {
                        confettiSpawnRef: m,
                        shouldFire: c && null != f && t.id !== f.id,
                        confettiLocation: Q.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    eu = s.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: l,
                status: r,
                applicationStream: a,
                voiceStatusChannel: o,
                user: u,
                channel: c,
                isHoveringOrFocusing: d,
                quest: h,
            } = e,
            m = s.useMemo(
                () => (0, E.A)({ activities: l, status: r, applicationStream: a, voiceChannel: o }),
                [l, r, a, o],
            ),
            f = s.useMemo(
                () =>
                    !(0, M.A)({
                        activity: l?.find((e) => {
                            let { type: t } = e;
                            return t === X.$pd.CUSTOM_STATUS;
                        }),
                        user: u,
                        channel: c,
                    }),
                [l, u, c],
            );
        return t || !m
            ? null
            : (0, i.jsx)(y.A, {
                  user: u,
                  activities: l,
                  applicationStream: a,
                  voiceChannel: o,
                  animateEmoji: d,
                  hideEmoji: f,
                  hasQuest: null != h,
                  hideTooltip: n,
              });
    }),
    ec = s.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: l,
                colorRoleName: r,
                isOwner: u,
                ownerTooltipText: d,
                lostPermissionTooltipText: h,
                isTyping: m = !1,
                nick: f,
                user: p,
                currentUser: g,
                activities: C,
                applicationStream: E,
                status: y,
                shouldAnimateStatus: S = !1,
                isMobile: v,
                isVR: N,
                premiumSince: _,
                channel: j,
                guildId: b,
                className: R,
                nameplate: M,
                hideClanTag: L = !1,
                hideSubtext: k = !1,
                hideTooltip: w = !1,
                onMouseDown: P,
                onKeyDown: D,
                onClick: U,
                onContextMenu: V,
                onClickPremiumGuildIcon: G,
                "aria-controls": F,
                "aria-expanded": H,
                "aria-posinset": B,
                "aria-setsize": W,
                id: J,
                tabIndex: Q,
                itemProps: ee,
                ref: el,
            } = e,
            ei = p?.id,
            es = $.Ay.useName(p),
            ec = s.useRef(null),
            ed = el ?? ec,
            [eh, em] = s.useState(!1),
            [ef, ep] = s.useState(!1),
            [eg, ex] = s.useState(null),
            { voiceChannel: eA } = (0, I.Ay)({ userId: ei, guildId: b }),
            {
                avatarDecorationSrc: eC,
                avatarSrc: eE,
                eventHandlers: eI,
            } = (0, q.A)({ userId: ei, size: x._3.SIZE_32, animateOnHover: !(t || eh), guildId: b }),
            { onFocus: ey, ...eS } = ee ?? {},
            ev = (0, K.gn)(b, ei, l ?? null),
            [eN, e_] = s.useState(!1);
        s.useEffect(() => {
            t && e_(!1);
        }, [t]);
        let ej = (0, Y.YW)(C),
            eb = (0, o.bG)([z.A], () => z.A.getQuestPreviewOverride(Z.uF.MEMBERS_LIST), []),
            eT = null != eb,
            eR = eT ? eb : ej,
            eO = (0, Y.Yl)(ej, E, ei),
            eM = (eT || eO) && t && !eN,
            eL = s.useCallback(() => {
                em(!0);
            }, []),
            ek = s.useCallback(() => {
                em(!1);
            }, []),
            ew = s.useCallback(() => {
                (ep(!0), ey?.());
            }, [ey]),
            eP = s.useCallback(() => {
                ep(!1);
            }, []),
            eD = s.useCallback((e) => {
                ex(e);
            }, []),
            eU = s.useCallback(
                (e) =>
                    null == eR
                        ? null
                        : (0, i.jsx)(en, {
                              name: f ?? es,
                              quest: eR,
                              memberListItemRef: ed,
                              applicationStream: E,
                              ...e,
                              closePopout: () => e_(!0),
                          }),
                [eR, ed, E, f, es],
            );
        return null == p
            ? (0, i.jsx)(T, { avatarSize: x._3.SIZE_32, className: et.qf })
            : (0, i.jsx)(A.Y, {
                  targetElementRef: ed,
                  renderPopout: eU,
                  position: "bottom",
                  shouldShow: eM,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: A.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, i.jsx)(O.A, {
                          ref: ed,
                          selected: t,
                          className: a()(et.Dc, R, { [et.WK]: y === X.clD.OFFLINE && !t, [et.PJ]: eM }),
                          innerClassName: et.Hz,
                          onClick: U,
                          onKeyDown: D,
                          onMouseDown: P,
                          onContextMenu: V,
                          onMouseEnter: eL,
                          onMouseLeave: ek,
                          onBlur: eP,
                          hovered: eh,
                          name:
                              null == h
                                  ? (0, i.jsx)("span", {
                                        className: et.Xh,
                                        children: (0, i.jsx)(ea, {
                                            colorRoleName: r,
                                            colorString: n ?? null,
                                            name: f ?? es,
                                            colorStrings: ev,
                                            hideClanTag: L,
                                            user: p,
                                            guildId: b,
                                            isHovering: eh,
                                        }),
                                    })
                                  : (0, i.jsx)(c.m, {
                                        text: h,
                                        children: (0, i.jsx)("span", {
                                            className: a()(et.Xh, et.oj),
                                            children: (0, i.jsx)(ea, {
                                                colorRoleName: r,
                                                colorString: n ?? null,
                                                name: f ?? es,
                                                colorStrings: ev,
                                                hideClanTag: L,
                                                user: p,
                                                guildId: b,
                                                isHovering: eh,
                                            }),
                                        }),
                                    }),
                          avatar: (0, i.jsx)(eo, {
                              user: p,
                              shouldAnimateStatus: S,
                              activities: C,
                              status: y,
                              eventHandlers: eI,
                              avatarSrc: eE,
                              isMobile: v,
                              isVR: N,
                              isTyping: m,
                              avatarDecorationSrc: eC,
                              handleSetTypingRef: eD,
                              typingRef: eg,
                              currentUser: g,
                          }),
                          nameplate: M,
                          subText: (0, i.jsx)(eu, {
                              hideSubtext: k,
                              activities: C,
                              status: y,
                              applicationStream: E,
                              voiceStatusChannel: eA,
                              user: p,
                              channel: j,
                              isHoveringOrFocusing: eh || ef,
                              quest: ej,
                              hideTooltip: w,
                          }),
                          decorators: (0, i.jsx)(er, {
                              user: p,
                              isOwner: u,
                              lostPermissionTooltipText: h,
                              ownerTooltipText: d,
                              premiumSince: _,
                              onClickPremiumGuildIcon: G,
                          }),
                          "aria-controls": F,
                          "aria-expanded": H,
                          "aria-setsize": W,
                          "aria-posinset": B,
                          id: J,
                          tabIndex: Q,
                          onFocus: ew,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eS,
                      }),
              });
    });
