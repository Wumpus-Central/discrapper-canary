"use strict";
n.d(t, { A: () => ed });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(17928),
    d = n(990078),
    c = n(319060),
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
    N = n(709066),
    C = n(235986),
    R = n(310887),
    O = (((i = O || {}).SINGLE_AVATAR = "1"), (i.MULTIPLE_AVATAR = "2"), i);
let L = { [f._3.SIZE_32]: R.dT, [f._3.SIZE_40]: R.Jb };
class D extends a.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = O;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: i, doNotAnimate: a } = this.props;
        return "2" === e
            ? (0, r.jsxs)("div", {
                  className: l()(R.ce, R.jO, n),
                  children: [
                      (0, r.jsxs)(C.A, {
                          children: [
                              (0, r.jsx)("div", { className: l()(R.RH, L[t], R.hC) }),
                              (0, r.jsx)("div", { className: l()(R.RH, L[t], R.hC) }),
                              (0, r.jsx)("div", { className: l()(R.RH, L[t]) }),
                          ],
                      }),
                      (0, r.jsx)(C.A, { grow: 1, className: R.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, r.jsxs)(C.A, {
                  className: l()(R.qf, !a && R.lN, n),
                  children: [
                      (0, r.jsx)("div", { className: l()(R.RH, L[t], i) }),
                      (0, r.jsx)(C.A, {
                          grow: 1,
                          className: l()(R.gM, i),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
var y = n(268218),
    v = n(193663),
    b = n(490427),
    M = n(609425),
    P = n(922301),
    U = n(660184),
    w = n(73392),
    G = n(534400),
    x = n(531685),
    k = n(620141),
    F = n(966598),
    V = n(224964);
function B(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        i = (0, o.bG)([x.A], () => x.A.isFocused()),
        r = (0, V.A)(),
        s = (0, F.A)(t);
    return (
        a.useEffect(() => {
            i && n && null != s && r.fire(s.x, s.y);
        }, [r, i, s, n]),
        null
    );
}
function H(e) {
    return (0, r.jsx)(k.A, { confettiLocation: e.confettiLocation, children: (0, r.jsx)(B, { ...e }) });
}
var j = n(967144),
    W = n(859703),
    Y = n(24001),
    K = n(574677),
    $ = n(854627),
    z = n(240248),
    q = n(427262),
    Z = n(652215),
    X = n(705751),
    Q = n(31408),
    J = n(375708),
    ee = n(28371);
let et = (0, y.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("31591"),
            n.e("69487"),
            n.e("58846"),
            n.e("41060"),
            n.e("87550"),
            n.e("79664"),
            n.e("85497"),
            n.e("60955"),
            n.e("11310"),
            n.e("53930"),
            n.e("13823"),
            n.e("92583"),
            n.e("32191"),
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
(0, z.xI)(c.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let en = a.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(d.m, {
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
            : (0, r.jsx)(d.m, {
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
        if (null == t || !t.bot) return null;
        let n = X.nu.BOT;
        return (0, r.jsx)(N.A, { className: ee.AO, type: n, verified: t.isVerifiedBot() });
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
            c = (0, M.A)({ userId: l?.id, guildId: o }),
            u = (0, w.a)({ displayNameStyles: c }),
            _ = null == o && null != c;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                _
                    ? (0, r.jsx)(U.A, {
                          userName: a ?? "",
                          displayNameStyles: c,
                          effectDisplayType: d ? P.G.ANIMATED : P.G.STATIC,
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
                    (0, r.jsx)(G.Ay, {
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
            h = a === Z.clD.OFFLINE,
            p = n ? I.Js : I.eu,
            m = (0, T.A)(i) ? Z.clD.STREAMING : a;
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
                    (0, r.jsx)(H, {
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
                    !(0, b.A)({
                        activity: i?.find((e) => {
                            let { type: t } = e;
                            return t === Z.$pd.CUSTOM_STATUS;
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
                isOwner: c,
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
                isVR: R,
                premiumSince: O,
                channel: L,
                guildId: y,
                className: b,
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
                "aria-posinset": z,
                "aria-setsize": X,
                id: Q,
                tabIndex: J,
                itemProps: en,
                ref: ei,
            } = e,
            er = h?.id,
            ed = q.Ay.useName(h),
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
            } = (0, $.A)({ userId: er, size: f._3.SIZE_32, animateOnHover: !(t || e_), guildId: y }),
            { onFocus: eS, ...eN } = en ?? {},
            eC = (0, j.gn)(y, er, i ?? null),
            [eR, eO] = a.useState(!1);
        a.useEffect(() => {
            t && eO(!1);
        }, [t]);
        let eL = (0, K.YW)(T),
            eD = (0, o.bG)([W.A], () => W.A.getQuestPreviewOverride(Y.uF.MEMBERS_LIST), []),
            ey = null != eD,
            ev = ey ? eD : eL,
            eb = (0, K.Yl)(eL, m, er),
            eM = (ey || eb) && t && !eR,
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
                              closePopout: () => eO(!0),
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
                      (0, r.jsx)(v.A, {
                          ref: eu,
                          selected: t,
                          className: l()(ee.Dc, b, { [ee.WK]: S === Z.clD.OFFLINE && !t, [ee.PJ]: eM }),
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
                                  : (0, r.jsx)(d.m, {
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
                              isVR: R,
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
                              isOwner: c,
                              lostPermissionTooltipText: _,
                              ownerTooltipText: u,
                              premiumSince: O,
                              onClickPremiumGuildIcon: V,
                          }),
                          "aria-controls": B,
                          "aria-expanded": H,
                          "aria-setsize": X,
                          "aria-posinset": z,
                          id: Q,
                          tabIndex: J,
                          onFocus: ew,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eN,
                      }),
              });
    });
