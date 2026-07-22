"use strict";
n.d(t, { A: () => ed });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(17928),
    d = n(319060),
    c = n(866665),
    u = n(329177),
    _ = n(939249),
    E = n(104510),
    A = n(661531),
    h = n(463930),
    I = n(97808),
    f = n(778712),
    p = n(922016),
    T = n(960076),
    m = n(397244),
    g = n(714114),
    S = n(394871),
    N = n(296948),
    C = n(709066),
    O = n(235986),
    R = n(386639),
    L = (((i = L || {}).SINGLE_AVATAR = "1"), (i.MULTIPLE_AVATAR = "2"), i);
let y = { [f._3.SIZE_32]: R.dT, [f._3.SIZE_40]: R.Jb };
class D extends a.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = L;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: i, doNotAnimate: a } = this.props;
        return "2" === e
            ? (0, r.jsxs)("div", {
                  className: l()(R.ce, R.jO, n),
                  children: [
                      (0, r.jsxs)(O.A, {
                          children: [
                              (0, r.jsx)("div", { className: l()(R.RH, y[t], R.hC) }),
                              (0, r.jsx)("div", { className: l()(R.RH, y[t], R.hC) }),
                              (0, r.jsx)("div", { className: l()(R.RH, y[t]) }),
                          ],
                      }),
                      (0, r.jsx)(O.A, { grow: 1, className: R.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, r.jsxs)(O.A, {
                  className: l()(R.qf, !a && R.lN, n),
                  children: [
                      (0, r.jsx)("div", { className: l()(R.RH, y[t], i) }),
                      (0, r.jsx)(O.A, {
                          grow: 1,
                          className: l()(R.gM, i),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
var v = n(268218),
    b = n(193663),
    M = n(490427),
    P = n(609425),
    U = n(922301),
    w = n(660184),
    G = n(73392),
    x = n(534400),
    k = n(531685),
    F = n(620141),
    V = n(966598),
    B = n(224964);
function H(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        i = (0, o.bG)([k.A], () => k.A.isFocused()),
        r = (0, B.A)(),
        s = (0, V.A)(t);
    return (
        a.useEffect(() => {
            i && n && null != s && r.fire(s.x, s.y);
        }, [r, i, s, n]),
        null
    );
}
function j(e) {
    return (0, r.jsx)(F.A, { confettiLocation: e.confettiLocation, children: (0, r.jsx)(H, { ...e }) });
}
var W = n(967144),
    Y = n(859703),
    K = n(24001),
    $ = n(573526),
    z = n(854627),
    q = n(240248),
    Z = n(427262),
    X = n(652215),
    Q = n(31408),
    J = n(375708),
    ee = n(178299);
let et = (0, v.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("10887"),
            n.e("3567"),
            n.e("35062"),
            n.e("77004"),
            n.e("32886"),
            n.e("99432"),
            n.e("497"),
            n.e("60955"),
            n.e("11310"),
            n.e("53930"),
            n.e("13823"),
            n.e("32191"),
            n.e("92583"),
            n.e("44502"),
            n.e("54625"),
            n.e("35485"),
            n.e("9729"),
            n.e("24761"),
            n.e("32606"),
            n.e("85350"),
            n.e("8563"),
            n.e("73"),
            n.e("24265"),
            n.e("62875"),
            n.e("55602"),
            n.e("67160"),
        ]).then(n.bind(n, 198525)),
    webpackId: 198525,
    name: "QuestMembersListPopout",
    renderLoader: () => null,
});
(0, q.xI)(d.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let en = a.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(c.m, {
                  __unsupportedReactNodeAsText: i ?? J.intl.string(J.t.pclUFJ),
                  children: (0, r.jsx)(u.p, {
                      size: "md",
                      color: "currentColor",
                      className: ee.Dd,
                      "aria-label": i ?? J.intl.string(J.t.pclUFJ),
                  }),
              })
            : null;
    }),
    ei = a.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(c.m, {
                  text: J.intl.formatToPlainString(J.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, r.jsx)(_.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, r.jsx)(E._, { color: A.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: ee.PC }),
                  }),
              });
    }),
    er = a.memo(function (e) {
        let { user: t } = e;
        if (null == t) return null;
        let n = (0, N.r)(t);
        return null == n ? null : (0, r.jsx)(C.A, { className: ee.AO, type: n, verified: t.isVerifiedBot() });
    }),
    ea = a.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: i,
            ownerTooltipText: a,
            premiumSince: s,
            onClickPremiumGuildIcon: l,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(er, { user: t }),
                (0, r.jsx)(en, { isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: a }),
                (0, r.jsx)(ei, { premiumSince: s, onClickPremiumGuildIcon: l }),
            ],
        });
    }),
    es = a.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: i,
                name: a,
                hideClanTag: s,
                user: l,
                guildId: o,
                isHovering: d,
            } = e,
            c = (0, P.A)({ userId: l?.id, guildId: o }),
            u = (0, G.a)({ displayNameStyles: c }),
            _ = null == o && null != c;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                _
                    ? (0, r.jsx)(w.A, {
                          userName: a ?? "",
                          displayNameStyles: c,
                          effectDisplayType: d ? U.G.ANIMATED : U.G.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(h.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: a,
                          className: ee.UU,
                          displayNameStylesFont: u,
                          animateRoleGradient: d,
                      }),
                !s &&
                    (0, r.jsx)(x.Ay, {
                        primaryGuild: l?.primaryGuild,
                        userId: l?.id,
                        contextGuildId: o,
                        disableGuildProfile: !0,
                        className: ee.fc,
                    }),
            ],
        });
    }),
    el = a.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: i,
                status: a,
                eventHandlers: s,
                avatarSrc: l,
                isMobile: o,
                isVR: d,
                isTyping: c,
                avatarDecorationSrc: u,
                handleSetTypingRef: _,
                typingRef: E,
                currentUser: A,
            } = e,
            h = a === X.clD.OFFLINE,
            p = n ? I.Js : I.eu,
            m = (0, T.A)(i) ? X.clD.STREAMING : a;
        return (
            (m = h ? void 0 : m),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(p, {
                        ...s,
                        size: f._3.SIZE_32,
                        src: l,
                        isMobile: o,
                        isVR: d,
                        isTyping: c,
                        status: m,
                        "aria-label": t.username,
                        statusTooltip: !0,
                        avatarDecoration: u,
                        typingIndicatorRef: _,
                    }),
                    (0, r.jsx)(j, {
                        confettiSpawnRef: E,
                        shouldFire: c && null != A && t.id !== A.id,
                        confettiLocation: Q.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    eo = a.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: i,
                status: s,
                applicationStream: l,
                voiceStatusChannel: o,
                user: d,
                channel: c,
                isHoveringOrFocusing: u,
                quest: _,
            } = e,
            E = a.useMemo(
                () => (0, m.A)({ activities: i, status: s, applicationStream: l, voiceChannel: o }),
                [i, s, l, o],
            ),
            A = a.useMemo(
                () =>
                    !(0, M.A)({
                        activity: i?.find((e) => {
                            let { type: t } = e;
                            return t === X.$pd.CUSTOM_STATUS;
                        }),
                        user: d,
                        channel: c,
                    }),
                [i, d, c],
            );
        return t || !E
            ? null
            : (0, r.jsx)(S.A, {
                  user: d,
                  activities: i,
                  applicationStream: l,
                  voiceChannel: o,
                  animateEmoji: u,
                  hideEmoji: A,
                  hasQuest: null != _,
                  hideTooltip: n,
              });
    }),
    ed = a.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: i,
                colorRoleName: s,
                isOwner: d,
                ownerTooltipText: u,
                lostPermissionTooltipText: _,
                isTyping: E = !1,
                nick: A,
                user: h,
                currentUser: I,
                activities: T,
                applicationStream: m,
                status: S,
                shouldAnimateStatus: N = !1,
                isMobile: C,
                isVR: O,
                premiumSince: R,
                channel: L,
                guildId: y,
                className: v,
                nameplate: M,
                hideClanTag: P = !1,
                hideSubtext: U = !1,
                hideTooltip: w = !1,
                onMouseDown: G,
                onKeyDown: x,
                onClick: k,
                onContextMenu: F,
                onClickPremiumGuildIcon: V,
                "aria-controls": B,
                "aria-expanded": H,
                "aria-posinset": j,
                "aria-setsize": q,
                id: Q,
                tabIndex: J,
                itemProps: en,
                ref: ei,
            } = e,
            er = h?.id,
            ed = Z.Ay.useName(h),
            ec = a.useRef(null),
            eu = ei ?? ec,
            [e_, eE] = a.useState(!1),
            [eA, eh] = a.useState(!1),
            [eI, ef] = a.useState(null),
            { voiceChannel: ep } = (0, g.Ay)({ userId: er, guildId: y }),
            {
                avatarDecorationSrc: eT,
                avatarSrc: em,
                eventHandlers: eg,
            } = (0, z.A)({ userId: er, size: f._3.SIZE_32, animateOnHover: !(t || e_), guildId: y }),
            { onFocus: eS, ...eN } = en ?? {},
            eC = (0, W.gn)(y, er, i ?? null),
            [eO, eR] = a.useState(!1);
        a.useEffect(() => {
            t && eR(!1);
        }, [t]);
        let eL = (0, $.YW)(T),
            ey = (0, o.bG)([Y.A], () => Y.A.getQuestPreviewOverride(K.uF.MEMBERS_LIST), []),
            eD = null != ey,
            ev = eD ? ey : eL,
            eb = (0, $.Yl)(eL, m, er),
            eM = (eD || eb) && t && !eO,
            eP = a.useCallback(() => {
                eE(!0);
            }, []),
            eU = a.useCallback(() => {
                eE(!1);
            }, []),
            ew = a.useCallback(() => {
                eh(!0), eS?.();
            }, [eS]),
            eG = a.useCallback(() => {
                eh(!1);
            }, []),
            ex = a.useCallback((e) => {
                ef(e);
            }, []),
            ek = a.useCallback(
                (e) =>
                    null == ev
                        ? null
                        : (0, r.jsx)(et, {
                              name: A ?? ed,
                              quest: ev,
                              memberListItemRef: eu,
                              applicationStream: m,
                              ...e,
                              closePopout: () => eR(!0),
                          }),
                [ev, eu, m, A, ed],
            );
        return null == h
            ? (0, r.jsx)(D, { avatarSize: f._3.SIZE_32, className: ee.qf })
            : (0, r.jsx)(p.Y, {
                  targetElementRef: eu,
                  renderPopout: ek,
                  position: "bottom",
                  shouldShow: eM,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: p.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, r.jsx)(b.A, {
                          ref: eu,
                          selected: t,
                          className: l()(ee.Dc, v, { [ee.WK]: S === X.clD.OFFLINE && !t, [ee.PJ]: eM }),
                          innerClassName: ee.Hz,
                          onClick: k,
                          onKeyDown: x,
                          onMouseDown: G,
                          onContextMenu: F,
                          onMouseEnter: eP,
                          onMouseLeave: eU,
                          onBlur: eG,
                          hovered: e_,
                          name:
                              null == _
                                  ? (0, r.jsx)("span", {
                                        className: ee.Xh,
                                        children: (0, r.jsx)(es, {
                                            colorRoleName: s,
                                            colorString: n ?? null,
                                            name: A ?? ed,
                                            colorStrings: eC,
                                            hideClanTag: P,
                                            user: h,
                                            guildId: y,
                                            isHovering: e_,
                                        }),
                                    })
                                  : (0, r.jsx)(c.m, {
                                        text: _,
                                        children: (0, r.jsx)("span", {
                                            className: l()(ee.Xh, ee.oj),
                                            children: (0, r.jsx)(es, {
                                                colorRoleName: s,
                                                colorString: n ?? null,
                                                name: A ?? ed,
                                                colorStrings: eC,
                                                hideClanTag: P,
                                                user: h,
                                                guildId: y,
                                                isHovering: e_,
                                            }),
                                        }),
                                    }),
                          avatar: (0, r.jsx)(el, {
                              user: h,
                              shouldAnimateStatus: N,
                              activities: T,
                              status: S,
                              eventHandlers: eg,
                              avatarSrc: em,
                              isMobile: C,
                              isVR: O,
                              isTyping: E,
                              avatarDecorationSrc: eT,
                              handleSetTypingRef: ex,
                              typingRef: eI,
                              currentUser: I,
                          }),
                          nameplate: M,
                          subText: (0, r.jsx)(eo, {
                              hideSubtext: U,
                              activities: T,
                              status: S,
                              applicationStream: m,
                              voiceStatusChannel: ep,
                              user: h,
                              channel: L,
                              isHoveringOrFocusing: e_ || eA,
                              quest: eL,
                              hideTooltip: w,
                          }),
                          decorators: (0, r.jsx)(ea, {
                              user: h,
                              isOwner: d,
                              lostPermissionTooltipText: _,
                              ownerTooltipText: u,
                              premiumSince: R,
                              onClickPremiumGuildIcon: V,
                          }),
                          "aria-controls": B,
                          "aria-expanded": H,
                          "aria-setsize": q,
                          "aria-posinset": j,
                          id: Q,
                          tabIndex: J,
                          onFocus: ew,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eN,
                      }),
              });
    });
