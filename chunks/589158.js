n.d(t, { A: () => ec });
var l,
    s = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    u = n(319060),
    c = n(866665),
    d = n(329177),
    m = n(939249),
    x = n(104510),
    h = n(661531),
    j = n(463930),
    p = n(97808),
    g = n(778712),
    f = n(922016),
    N = n(960076),
    I = n(397244),
    A = n(714114),
    v = n(394871),
    b = n(296948),
    S = n(709066),
    E = n(235986),
    C = n(141504),
    T = (((l = T || {}).SINGLE_AVATAR = "1"), (l.MULTIPLE_AVATAR = "2"), l);
let y = { [g._3.SIZE_32]: C.dT, [g._3.SIZE_40]: C.Jb };
class O extends i.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = T;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: l, doNotAnimate: i } = this.props;
        return "2" === e
            ? (0, s.jsxs)("div", {
                  className: r()(C.ce, C.jO, n),
                  children: [
                      (0, s.jsxs)(E.A, {
                          children: [
                              (0, s.jsx)("div", { className: r()(C.RH, y[t], C.hC) }),
                              (0, s.jsx)("div", { className: r()(C.RH, y[t], C.hC) }),
                              (0, s.jsx)("div", { className: r()(C.RH, y[t]) }),
                          ],
                      }),
                      (0, s.jsx)(E.A, { grow: 1, className: C.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, s.jsxs)(E.A, {
                  className: r()(C.qf, !i && C.lN, n),
                  children: [
                      (0, s.jsx)("div", { className: r()(C.RH, y[t], l) }),
                      (0, s.jsx)(E.A, {
                          grow: 1,
                          className: r()(C.gM, l),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
var k = n(268218),
    G = n(193663),
    _ = n(490427),
    R = n(609425),
    P = n(922301),
    M = n(660184),
    L = n(73392),
    D = n(795593),
    U = n(534400),
    w = n(531685),
    z = n(620141),
    V = n(19309),
    B = n(224964);
function F(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        l = (0, o.bG)([w.A], () => w.A.isFocused()),
        s = (0, B.A)();
    return (
        i.useEffect(() => {
            if (l && n) {
                let e = (0, V.A)(t);
                null != e && s.fire(e.x, e.y);
            }
        }, [s, t, l, n]),
        null
    );
}
function J(e) {
    return (0, s.jsx)(z.A, { confettiLocation: e.confettiLocation, children: (0, s.jsx)(F, { ...e }) });
}
var H = n(967144),
    K = n(859703),
    W = n(738822),
    $ = n(77870),
    X = n(854627),
    Y = n(240248),
    q = n(427262),
    Z = n(652215),
    Q = n(31408),
    ee = n(660183),
    et = n(590218);
let en = (0, k.Fe)({
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
            n.e("264236"),
            n.e("811310"),
            n.e("913823"),
            n.e("187110"),
            n.e("292583"),
            n.e("466322"),
            n.e("132191"),
            n.e("344502"),
            n.e("682337"),
            n.e("538887"),
            n.e("454625"),
            n.e("8563"),
            n.e("35485"),
            n.e("653849"),
            n.e("324761"),
            n.e("209729"),
            n.e("603808"),
            n.e("932606"),
            n.e("285350"),
            n.e("424265"),
            n.e("669558"),
            n.e("806295"),
            n.e("655602"),
            n.e("867160"),
        ]).then(n.bind(n, 198525)),
    webpackId: 198525,
    name: "QuestMembersListPopout",
    renderLoader: () => null,
});
(0, Y.xI)(u.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let el = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: l } = e;
        return null != t && t && null == n
            ? (0, s.jsx)(c.m, {
                  __unsupportedReactNodeAsText: l ?? ee.intl.string(ee.t.pclUFJ),
                  children: (0, s.jsx)(d.CrownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: et.Dd,
                      "aria-label": l ?? ee.intl.string(ee.t.pclUFJ),
                  }),
              })
            : null;
    }),
    es = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, s.jsx)(c.m, {
                  text: ee.intl.formatToPlainString(ee.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, s.jsx)(m.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, s.jsx)(x._, { color: h.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: et.PC }),
                  }),
              });
    }),
    ei = i.memo(function (e) {
        let { user: t } = e;
        if (null == t) return null;
        let n = (0, b.r)(t);
        return null == n ? null : (0, s.jsx)(S.A, { className: et.AO, type: n, verified: t.isVerifiedBot() });
    }),
    ea = i.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: l,
            ownerTooltipText: i,
            premiumSince: a,
            onClickPremiumGuildIcon: r,
        } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(ei, { user: t }),
                (0, s.jsx)(el, { isOwner: n, lostPermissionTooltipText: l, ownerTooltipText: i }),
                (0, s.jsx)(es, { premiumSince: a, onClickPremiumGuildIcon: r }),
            ],
        });
    }),
    er = i.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: l,
                name: i,
                hideClanTag: a,
                user: r,
                guildId: o,
                isHovering: u,
            } = e,
            c = (0, R.A)({ userId: r?.id, guildId: o }),
            d = (0, L.a)({ displayNameStyles: c }),
            m = null == o && null != c;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                m
                    ? (0, s.jsx)(M.A, {
                          userName: i ?? "",
                          displayNameStyles: c,
                          effectDisplayType: u ? P.G.ANIMATED : P.G.STATIC,
                          loop: !0,
                      })
                    : (0, s.jsx)(j.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: l,
                          name: i,
                          className: et.UU,
                          displayNameStylesFont: d,
                          animateRoleGradient: u,
                      }),
                !a &&
                    (0, s.jsx)(U.Ay, {
                        primaryGuild: r?.primaryGuild,
                        userId: r?.id,
                        contextGuildId: o,
                        disableGuildProfile: !0,
                        className: et.fc,
                    }),
                null != o && r?.id != null && (0, s.jsx)(D.A, { guildId: o, userId: r.id }),
            ],
        });
    }),
    eo = i.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: l,
                status: i,
                eventHandlers: a,
                avatarSrc: r,
                isMobile: o,
                isVR: u,
                isTyping: c,
                avatarDecorationSrc: d,
                handleSetTypingRef: m,
                typingRef: x,
                currentUser: h,
            } = e,
            j = i === Z.clD.OFFLINE,
            f = n ? p.Js : p.eu,
            I = (0, N.A)(l) ? Z.clD.STREAMING : i;
        return (
            (I = j ? void 0 : I),
            (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(f, {
                        ...a,
                        size: g._3.SIZE_32,
                        src: r,
                        isMobile: o,
                        isVR: u,
                        isTyping: c,
                        status: I,
                        "aria-label": t.username,
                        statusTooltip: !0,
                        avatarDecoration: d,
                        typingIndicatorRef: m,
                    }),
                    (0, s.jsx)(J, {
                        confettiSpawnRef: x,
                        shouldFire: c && null != h && t.id !== h.id,
                        confettiLocation: Q.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    eu = i.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: l,
                status: a,
                applicationStream: r,
                voiceStatusChannel: o,
                user: u,
                channel: c,
                isHoveringOrFocusing: d,
                quest: m,
            } = e,
            x = i.useMemo(
                () => (0, I.A)({ activities: l, status: a, applicationStream: r, voiceChannel: o }),
                [l, a, r, o],
            ),
            h = i.useMemo(
                () =>
                    !(0, _.A)({
                        activity: l?.find((e) => {
                            let { type: t } = e;
                            return t === Z.$pd.CUSTOM_STATUS;
                        }),
                        user: u,
                        channel: c,
                    }),
                [l, u, c],
            );
        return t || !x
            ? null
            : (0, s.jsx)(v.A, {
                  user: u,
                  activities: l,
                  applicationStream: r,
                  voiceChannel: o,
                  animateEmoji: d,
                  hideEmoji: h,
                  hasQuest: null != m,
                  hideTooltip: n,
              });
    }),
    ec = i.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: l,
                colorRoleName: a,
                isOwner: u,
                ownerTooltipText: d,
                lostPermissionTooltipText: m,
                isTyping: x = !1,
                nick: h,
                user: j,
                currentUser: p,
                activities: N,
                applicationStream: I,
                status: v,
                shouldAnimateStatus: b = !1,
                isMobile: S,
                isVR: E,
                premiumSince: C,
                channel: T,
                guildId: y,
                className: k,
                nameplate: _,
                hideClanTag: R = !1,
                hideSubtext: P = !1,
                hideTooltip: M = !1,
                onMouseDown: L,
                onKeyDown: D,
                onClick: U,
                onContextMenu: w,
                onClickPremiumGuildIcon: z,
                "aria-controls": V,
                "aria-expanded": B,
                "aria-posinset": F,
                "aria-setsize": J,
                id: Y,
                tabIndex: Q,
                itemProps: ee,
                ref: el,
            } = e,
            es = j?.id,
            ei = q.Ay.useName(j),
            ec = i.useRef(null),
            ed = el ?? ec,
            [em, ex] = i.useState(!1),
            [eh, ej] = i.useState(!1),
            [ep, eg] = i.useState(null),
            { voiceChannel: ef } = (0, A.Ay)({ userId: es, guildId: y }),
            {
                avatarDecorationSrc: eN,
                avatarSrc: eI,
                eventHandlers: eA,
            } = (0, X.A)({ userId: es, size: g._3.SIZE_32, animateOnHover: !(t || em), guildId: y }),
            { onFocus: ev, ...eb } = ee ?? {},
            eS = (0, H.gn)(y, es, l ?? null),
            [eE, eC] = i.useState(!1);
        i.useEffect(() => {
            t && eC(!1);
        }, [t]);
        let eT = (0, $.YW)(N),
            ey = (0, o.bG)([K.A], () => K.A.getQuestPreviewOverride(W.uF.MEMBERS_LIST), []),
            eO = null != ey,
            ek = eO ? ey : eT,
            eG = (0, $.Yl)(eT, I, es),
            e_ = (eO || eG) && t && !eE,
            eR = i.useCallback(() => {
                ex(!0);
            }, []),
            eP = i.useCallback(() => {
                ex(!1);
            }, []),
            eM = i.useCallback(() => {
                (ej(!0), ev?.());
            }, [ev]),
            eL = i.useCallback(() => {
                ej(!1);
            }, []),
            eD = i.useCallback((e) => {
                eg(e);
            }, []),
            eU = i.useCallback(
                (e) =>
                    null == ek
                        ? null
                        : (0, s.jsx)(en, {
                              name: h ?? ei,
                              quest: ek,
                              memberListItemRef: ed,
                              applicationStream: I,
                              ...e,
                              closePopout: () => eC(!0),
                          }),
                [ek, ed, I, h, ei],
            );
        return null == j
            ? (0, s.jsx)(O, { avatarSize: g._3.SIZE_32, className: et.qf })
            : (0, s.jsx)(f.Y, {
                  targetElementRef: ed,
                  renderPopout: eU,
                  position: "bottom",
                  shouldShow: e_,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: f.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, s.jsx)(G.A, {
                          ref: ed,
                          selected: t,
                          className: r()(et.Dc, k, { [et.WK]: v === Z.clD.OFFLINE && !t, [et.PJ]: e_ }),
                          innerClassName: et.Hz,
                          onClick: U,
                          onKeyDown: D,
                          onMouseDown: L,
                          onContextMenu: w,
                          onMouseEnter: eR,
                          onMouseLeave: eP,
                          onBlur: eL,
                          hovered: em,
                          name:
                              null == m
                                  ? (0, s.jsx)("span", {
                                        className: et.Xh,
                                        children: (0, s.jsx)(er, {
                                            colorRoleName: a,
                                            colorString: n ?? null,
                                            name: h ?? ei,
                                            colorStrings: eS,
                                            hideClanTag: R,
                                            user: j,
                                            guildId: y,
                                            isHovering: em,
                                        }),
                                    })
                                  : (0, s.jsx)(c.m, {
                                        text: m,
                                        children: (0, s.jsx)("span", {
                                            className: r()(et.Xh, et.oj),
                                            children: (0, s.jsx)(er, {
                                                colorRoleName: a,
                                                colorString: n ?? null,
                                                name: h ?? ei,
                                                colorStrings: eS,
                                                hideClanTag: R,
                                                user: j,
                                                guildId: y,
                                                isHovering: em,
                                            }),
                                        }),
                                    }),
                          avatar: (0, s.jsx)(eo, {
                              user: j,
                              shouldAnimateStatus: b,
                              activities: N,
                              status: v,
                              eventHandlers: eA,
                              avatarSrc: eI,
                              isMobile: S,
                              isVR: E,
                              isTyping: x,
                              avatarDecorationSrc: eN,
                              handleSetTypingRef: eD,
                              typingRef: ep,
                              currentUser: p,
                          }),
                          nameplate: _,
                          subText: (0, s.jsx)(eu, {
                              hideSubtext: P,
                              activities: N,
                              status: v,
                              applicationStream: I,
                              voiceStatusChannel: ef,
                              user: j,
                              channel: T,
                              isHoveringOrFocusing: em || eh,
                              quest: eT,
                              hideTooltip: M,
                          }),
                          decorators: (0, s.jsx)(ea, {
                              user: j,
                              isOwner: u,
                              lostPermissionTooltipText: m,
                              ownerTooltipText: d,
                              premiumSince: C,
                              onClickPremiumGuildIcon: z,
                          }),
                          "aria-controls": V,
                          "aria-expanded": B,
                          "aria-setsize": J,
                          "aria-posinset": F,
                          id: Y,
                          tabIndex: Q,
                          onFocus: eM,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eb,
                      }),
              });
    });
