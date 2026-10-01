n.d(t, { A: () => ed });
var l,
    i = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    u = n(319060),
    d = n(866665),
    c = n(329177),
    m = n(939249),
    x = n(104510),
    h = n(661531),
    j = n(463930),
    g = n(97808),
    p = n(778712),
    f = n(922016),
    A = n(960076),
    N = n(397244),
    I = n(714114),
    v = n(394871),
    b = n(296948),
    S = n(709066),
    E = n(235986),
    C = n(141504),
    T = (((l = T || {}).SINGLE_AVATAR = "1"), (l.MULTIPLE_AVATAR = "2"), l);
let y = { [p._3.SIZE_32]: C.dT, [p._3.SIZE_40]: C.Jb };
class O extends s.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = T;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: l, doNotAnimate: s } = this.props;
        return "2" === e
            ? (0, i.jsxs)("div", {
                  className: r()(C.ce, C.jO, n),
                  children: [
                      (0, i.jsxs)(E.A, {
                          children: [
                              (0, i.jsx)("div", { className: r()(C.RH, y[t], C.hC) }),
                              (0, i.jsx)("div", { className: r()(C.RH, y[t], C.hC) }),
                              (0, i.jsx)("div", { className: r()(C.RH, y[t]) }),
                          ],
                      }),
                      (0, i.jsx)(E.A, { grow: 1, className: C.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, i.jsxs)(E.A, {
                  className: r()(C.qf, !s && C.lN, n),
                  children: [
                      (0, i.jsx)("div", { className: r()(C.RH, y[t], l) }),
                      (0, i.jsx)(E.A, {
                          grow: 1,
                          className: r()(C.gM, l),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
var _ = n(268218),
    R = n(193663),
    G = n(490427),
    k = n(609425),
    P = n(922301),
    M = n(660184),
    D = n(73392),
    L = n(218150),
    w = n(534400),
    U = n(531685),
    z = n(620141),
    B = n(19309),
    V = n(224964);
function F(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        l = (0, o.bG)([U.A], () => U.A.isFocused()),
        i = (0, V.A)();
    return (
        s.useEffect(() => {
            if (l && n) {
                let e = (0, B.A)(t);
                null != e && i.fire(e.x, e.y);
            }
        }, [i, t, l, n]),
        null
    );
}
function H(e) {
    return (0, i.jsx)(z.A, { confettiLocation: e.confettiLocation, children: (0, i.jsx)(F, { ...e }) });
}
var J = n(967144),
    W = n(859703),
    K = n(738822),
    Y = n(866157),
    $ = n(854627),
    q = n(240248),
    X = n(427262),
    Z = n(652215),
    Q = n(31408),
    ee = n(375708),
    et = n(590218);
let en = (0, _.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("102075"),
            n.e("828178"),
            n.e("505928"),
            n.e("752657"),
            n.e("324732"),
            n.e("521680"),
            n.e("747973"),
            n.e("953840"),
            n.e("723180"),
            n.e("60955"),
            n.e("264236"),
            n.e("811310"),
            n.e("913823"),
            n.e("187110"),
            n.e("292583"),
            n.e("344502"),
            n.e("132191"),
            n.e("466322"),
            n.e("682337"),
            n.e("538887"),
            n.e("454625"),
            n.e("8563"),
            n.e("35485"),
            n.e("324761"),
            n.e("653849"),
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
(0, q.xI)(u.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let el = s.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: l } = e;
        return null != t && t && null == n
            ? (0, i.jsx)(d.m, {
                  __unsupportedReactNodeAsText: l ?? ee.intl.string(ee.t.pclUFJ),
                  children: (0, i.jsx)(c.CrownIcon, {
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
            : (0, i.jsx)(d.m, {
                  text: ee.intl.formatToPlainString(ee.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, i.jsx)(m.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, i.jsx)(x._, { color: h.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: et.PC }),
                  }),
              });
    }),
    es = s.memo(function (e) {
        let { user: t } = e;
        if (null == t) return null;
        let n = (0, b.r)(t);
        return null == n ? null : (0, i.jsx)(S.A, { className: et.AO, type: n, verified: t.isVerifiedBot() });
    }),
    ea = s.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: l,
            ownerTooltipText: s,
            premiumSince: a,
            onClickPremiumGuildIcon: r,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(es, { user: t }),
                (0, i.jsx)(el, { isOwner: n, lostPermissionTooltipText: l, ownerTooltipText: s }),
                (0, i.jsx)(ei, { premiumSince: a, onClickPremiumGuildIcon: r }),
            ],
        });
    }),
    er = s.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: l,
                name: s,
                hideClanTag: a,
                user: r,
                guildId: o,
                isHovering: u,
            } = e,
            d = (0, k.A)({ userId: r?.id, guildId: o }),
            c = (0, D.a)({ displayNameStyles: d }),
            m = null == o && null != d;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                m
                    ? (0, i.jsx)(M.A, {
                          userName: s ?? "",
                          displayNameStyles: d,
                          effectDisplayType: u ? P.G.ANIMATED : P.G.STATIC,
                          loop: !0,
                      })
                    : (0, i.jsx)(j.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: l,
                          name: s,
                          className: et.UU,
                          displayNameStylesFont: c,
                          animateRoleGradient: u,
                      }),
                !a &&
                    (0, i.jsx)(w.Ay, {
                        primaryGuild: r?.primaryGuild,
                        userId: r?.id,
                        contextGuildId: o,
                        disableGuildProfile: !0,
                        className: et.fc,
                    }),
                null != o && r?.id != null && (0, i.jsx)(L.A, { guildId: o, userId: r.id }),
            ],
        });
    }),
    eo = s.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: l,
                status: s,
                eventHandlers: a,
                avatarSrc: r,
                isMobile: o,
                isVR: u,
                isTyping: d,
                avatarDecorationSrc: c,
                handleSetTypingRef: m,
                typingRef: x,
                currentUser: h,
            } = e,
            j = s === Z.clD.OFFLINE,
            f = n ? g.Js : g.eu,
            N = (0, A.A)(l) ? Z.clD.STREAMING : s;
        return (
            (N = j ? void 0 : N),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f, {
                        ...a,
                        size: p._3.SIZE_32,
                        src: r,
                        isMobile: o,
                        isVR: u,
                        isTyping: d,
                        status: N,
                        "aria-label": t.username,
                        statusTooltip: !0,
                        avatarDecoration: c,
                        typingIndicatorRef: m,
                    }),
                    (0, i.jsx)(H, {
                        confettiSpawnRef: x,
                        shouldFire: d && null != h && t.id !== h.id,
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
                status: a,
                applicationStream: r,
                voiceStatusChannel: o,
                user: u,
                channel: d,
                isHoveringOrFocusing: c,
                quest: m,
            } = e,
            x = s.useMemo(
                () => (0, N.A)({ activities: l, status: a, applicationStream: r, voiceChannel: o }),
                [l, a, r, o],
            ),
            h = s.useMemo(
                () =>
                    !(0, G.A)({
                        activity: l?.find((e) => {
                            let { type: t } = e;
                            return t === Z.$pd.CUSTOM_STATUS;
                        }),
                        user: u,
                        channel: d,
                    }),
                [l, u, d],
            );
        return t || !x
            ? null
            : (0, i.jsx)(v.A, {
                  user: u,
                  activities: l,
                  applicationStream: r,
                  voiceChannel: o,
                  animateEmoji: c,
                  hideEmoji: h,
                  hasQuest: null != m,
                  hideTooltip: n,
              });
    }),
    ed = s.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: l,
                colorRoleName: a,
                isOwner: u,
                ownerTooltipText: c,
                lostPermissionTooltipText: m,
                isTyping: x = !1,
                nick: h,
                user: j,
                currentUser: g,
                activities: A,
                applicationStream: N,
                status: v,
                shouldAnimateStatus: b = !1,
                isMobile: S,
                isVR: E,
                premiumSince: C,
                channel: T,
                guildId: y,
                className: _,
                nameplate: G,
                hideClanTag: k = !1,
                hideSubtext: P = !1,
                hideTooltip: M = !1,
                onMouseDown: D,
                onKeyDown: L,
                onClick: w,
                onContextMenu: U,
                onClickPremiumGuildIcon: z,
                "aria-controls": B,
                "aria-expanded": V,
                "aria-posinset": F,
                "aria-setsize": H,
                id: q,
                tabIndex: Q,
                itemProps: ee,
                ref: el,
            } = e,
            ei = j?.id,
            es = X.Ay.useName(j),
            ed = s.useRef(null),
            ec = el ?? ed,
            [em, ex] = s.useState(!1),
            [eh, ej] = s.useState(!1),
            [eg, ep] = s.useState(null),
            { voiceChannel: ef } = (0, I.Ay)({ userId: ei, guildId: y }),
            {
                avatarDecorationSrc: eA,
                avatarSrc: eN,
                eventHandlers: eI,
            } = (0, $.A)({ userId: ei, size: p._3.SIZE_32, animateOnHover: !(t || em), guildId: y }),
            { onFocus: ev, ...eb } = ee ?? {},
            eS = (0, J.gn)(y, ei, l ?? null),
            [eE, eC] = s.useState(!1);
        s.useEffect(() => {
            t && eC(!1);
        }, [t]);
        let eT = (0, Y.YW)(A),
            ey = (0, o.bG)([W.A], () => W.A.getQuestPreviewOverride(K.uF.MEMBERS_LIST), []),
            eO = null != ey,
            e_ = eO ? ey : eT,
            eR = (0, Y.Yl)(eT, N, ei),
            eG = (eO || eR) && t && !eE,
            ek = s.useCallback(() => {
                ex(!0);
            }, []),
            eP = s.useCallback(() => {
                ex(!1);
            }, []),
            eM = s.useCallback(() => {
                (ej(!0), ev?.());
            }, [ev]),
            eD = s.useCallback(() => {
                ej(!1);
            }, []),
            eL = s.useCallback((e) => {
                ep(e);
            }, []),
            ew = s.useCallback(
                (e) =>
                    null == e_
                        ? null
                        : (0, i.jsx)(en, {
                              name: h ?? es,
                              quest: e_,
                              memberListItemRef: ec,
                              applicationStream: N,
                              ...e,
                              closePopout: () => eC(!0),
                          }),
                [e_, ec, N, h, es],
            );
        return null == j
            ? (0, i.jsx)(O, { avatarSize: p._3.SIZE_32, className: et.qf })
            : (0, i.jsx)(f.Y, {
                  targetElementRef: ec,
                  renderPopout: ew,
                  position: "bottom",
                  shouldShow: eG,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: f.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, i.jsx)(R.A, {
                          ref: ec,
                          selected: t,
                          className: r()(et.Dc, _, { [et.WK]: v === Z.clD.OFFLINE && !t, [et.PJ]: eG }),
                          innerClassName: et.Hz,
                          onClick: w,
                          onKeyDown: L,
                          onMouseDown: D,
                          onContextMenu: U,
                          onMouseEnter: ek,
                          onMouseLeave: eP,
                          onBlur: eD,
                          hovered: em,
                          name:
                              null == m
                                  ? (0, i.jsx)("span", {
                                        className: et.Xh,
                                        children: (0, i.jsx)(er, {
                                            colorRoleName: a,
                                            colorString: n ?? null,
                                            name: h ?? es,
                                            colorStrings: eS,
                                            hideClanTag: k,
                                            user: j,
                                            guildId: y,
                                            isHovering: em,
                                        }),
                                    })
                                  : (0, i.jsx)(d.m, {
                                        text: m,
                                        children: (0, i.jsx)("span", {
                                            className: r()(et.Xh, et.oj),
                                            children: (0, i.jsx)(er, {
                                                colorRoleName: a,
                                                colorString: n ?? null,
                                                name: h ?? es,
                                                colorStrings: eS,
                                                hideClanTag: k,
                                                user: j,
                                                guildId: y,
                                                isHovering: em,
                                            }),
                                        }),
                                    }),
                          avatar: (0, i.jsx)(eo, {
                              user: j,
                              shouldAnimateStatus: b,
                              activities: A,
                              status: v,
                              eventHandlers: eI,
                              avatarSrc: eN,
                              isMobile: S,
                              isVR: E,
                              isTyping: x,
                              avatarDecorationSrc: eA,
                              handleSetTypingRef: eL,
                              typingRef: eg,
                              currentUser: g,
                          }),
                          nameplate: G,
                          subText: (0, i.jsx)(eu, {
                              hideSubtext: P,
                              activities: A,
                              status: v,
                              applicationStream: N,
                              voiceStatusChannel: ef,
                              user: j,
                              channel: T,
                              isHoveringOrFocusing: em || eh,
                              quest: eT,
                              hideTooltip: M,
                          }),
                          decorators: (0, i.jsx)(ea, {
                              user: j,
                              isOwner: u,
                              lostPermissionTooltipText: m,
                              ownerTooltipText: c,
                              premiumSince: C,
                              onClickPremiumGuildIcon: z,
                          }),
                          "aria-controls": B,
                          "aria-expanded": V,
                          "aria-setsize": H,
                          "aria-posinset": F,
                          id: q,
                          tabIndex: Q,
                          onFocus: eM,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eb,
                      }),
              });
    });
