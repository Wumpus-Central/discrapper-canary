n.d(t, { yo: () => e_, Zt: () => eE });
var l = n(477900),
    r = n(582128),
    i = n(365199),
    o = n(265872),
    a = n(165862),
    s = n(477782),
    u = n(793574),
    c = n(688810),
    d = n(886913),
    f = n(738676),
    A = n(674954),
    p = n(708645),
    E = n(554146),
    g = n(263775),
    _ = n(855986),
    I = n(43105),
    R = n(844222),
    m = n(403581),
    O = n(626584),
    h = n(531685),
    b = n(49999),
    x = n(842671),
    N = n(792996),
    v = n(78294);
let S = new O.A("TryDisplayNameStyleMarketingPopover");
function C(e) {
    let { markAsDismissed: t, targetElementRef: n, onDismissibleContentClick: i } = e,
        o = r.useRef(null),
        a = (0, _.bG)([h.A], () => h.A.isFocused()),
        { reducedMotion: s } = r.useContext(R.C);
    return (
        r.useEffect(() => {
            null != o.current && (!s.enabled && a ? o.current.play().catch(S.error) : o.current.pause());
        }, [a, s.enabled]),
        (0, l.jsx)(I.A, {
            graphic: { type: "video", ref: o, src: v.A, aspectRatio: "21/9", loop: !0 },
            gradientColor: "nitro-pink",
            title: N.intl.string(x.default.t8z5gn),
            size: "lg",
            body: N.intl.string(x.default.ajHWbZ),
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            targetElementRef: n,
            onRequestClose: () => t(b.i.USER_DISMISS),
            actions: [
                { text: N.intl.string(x.default["D7+kY/"]), variant: "primary", icon: m.NitroWheelIcon, onClick: i },
            ],
        })
    );
}
var j = n(414636),
    P = n(570287),
    T = n(994500),
    M = n(287809),
    k = n(899360),
    y = n(242225),
    L = n(931937),
    D = n(149164),
    U = n(192308),
    G = n(752222);
let F = [];
var w = n(129230);
let V = (0, n(945810).mj)({
    name: "2026-09-referral-profile-contextual-menu-upsell",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var K = n(834708),
    W = n(154486),
    H = n(652215),
    B = n(239211),
    z = n(284009),
    Q = n.n(z),
    q = n(50268),
    Y = n(207560),
    X = n(342053),
    Z = n(527212),
    $ = n(640794),
    J = n(253932),
    ee = n(957565),
    et = n(518477),
    en = n(399476),
    el = n(889460),
    er = n(865116),
    ei = n(928658);
let eo = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var ea = n(46653),
    es = n(183555),
    eu = n(256847),
    ec = n(939496),
    ed = n(993401),
    ef = n(996988),
    eA = n(207566);
function ep(e) {
    let {
            user: t,
            guildId: p,
            viewProfileItem: E,
            appContext: g,
            popoutTargetRef: I,
            shouldShow: R,
            onRequestOpen: O,
            onRequestClose: h,
            children: b,
        } = e,
        { themeType: x } = (0, ec.E)(),
        { trackUserProfileAction: v } = (0, es.NJ)(),
        { analyticsLocations: S, newestAnalyticsLocation: C } = (0, c.Ay)(u.A.USER_PROFILE_OVERFLOW_MENU);
    (0, d.A)(t.id, p, !0);
    let z = {
            action: et.pt.PRESS_OPTIONS,
            icon: i.MoreHorizontalIcon,
            tooltipText: N.intl.string(N.t["UKOtz+"]),
            "aria-label": N.intl.string(N.t["UKOtz+"]),
        },
        ed = (0, el.A)({
            user: t,
            guildId: p,
            onAction: () => v({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: S }),
        }),
        ef = (function (e) {
            let { user: t } = e,
                r = (0, L.A)("user_profile_overflow_menu"),
                i = (0, _.bG)([M.default, T.A], () => (0, y.A)(t, M.default.getCurrentUser()?.id, T.A), [t]),
                o = (0, P.A)(t.id),
                a = r.length > 0 && i && o,
                { data: u } = (0, D.s)(a ? r : F);
            if (!a) return null;
            let c = (0, k.m$)((0, k.Ay)(u));
            return (0, l.jsx)(s.Dr, {
                id: "invite-to-linked-game-organization",
                label: N.intl.string(G.default["wkSug+"]),
                subtext: c,
                disabled: null != c,
                action: () => {
                    var e;
                    return (
                        (e = t.id),
                        void (0, U.mM)(async () => {
                            let { default: t } = await Promise.all([
                                n.e(740775),
                                n.e(787139),
                                n.e(635864),
                                n.e(248988),
                                n.e(611281),
                            ]).then(n.bind(n, 53416));
                            return (n) => (0, l.jsx)(t, { userId: e, ...n });
                        })
                    );
                },
            });
        })({ user: t }),
        eA = (0, B.A)({
            user: t,
            guildId: p,
            location: C,
            appContext: g,
            onBlock: () => v({ action: "BLOCK", analyticsLocations: S }),
            onIgnore: () => v({ action: "IGNORE", analyticsLocations: S }),
            onUnblock: () => v({ action: "UNBLOCK", analyticsLocations: S }),
        }),
        ep = (0, en.A)({
            user: t,
            guildId: p,
            location: C,
            appContext: g,
            onBlock: () => v({ action: "BLOCK", analyticsLocations: S }),
            onIgnore: () => v({ action: "IGNORE", analyticsLocations: S }),
            onUnignore: () => v({ action: "UNIGNORE", analyticsLocations: S }),
        }),
        eE = (function (e) {
            let { user: t, guildId: n, color: r, onAction: i, location: o = u.A.CONTEXT_MENU, appContext: a } = e,
                c = eo.useExperiment({ location: o }, { autoTrackExposure: !0 }).enabled,
                d = (0, _.bG)([ea.default], () => ea.default.getId() === t.id);
            return !c || d || t.isNonUserBot()
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "report-user",
                      color: r,
                      label: N.intl.string(N.t.A1MM3D),
                      action: () => (0, ei.NW)(t, n === H.ME ? void 0 : n, i, a),
                  });
        })({
            user: t,
            guildId: p,
            location: C,
            appContext: g,
            color: "danger",
            onAction: () => v({ action: "REPORT", analyticsLocations: S }),
        }),
        eg = (function (e) {
            let { user: t, guildId: n, color: r, onAction: i, appContext: o } = e,
                a = (0, _.bG)([er.Ay], () => er.Ay.get("iar_testing")),
                u = (0, _.bG)([M.default], () => M.default.getCurrentUser());
            return null != u && (t.id === u.id || t.isNonUserBot() || !u.isStaff() || !a)
                ? null
                : (0, l.jsx)(s.Dr, {
                      id: "staff-test-report-user",
                      color: r,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, ei.RR)(t, n === H.ME ? void 0 : n, i, o),
                  });
        })({
            user: t,
            guildId: p,
            location: C,
            appContext: g,
            color: "danger",
            onAction: () => v({ action: "REPORT", analyticsLocations: S }),
        }),
        e_ = (function (e) {
            let { user: t, guildId: n, onSuccess: i } = e,
                o = (0, Z.Ay)(t.id, n ?? void 0),
                a = J.Q_.useSetting(),
                u = (0, Y.lF)(),
                c = (0, X.g)("useCopyUserInfoItem"),
                d = (0, q.A)({
                    id: t.id,
                    label: N.intl.string(N.t["/AXYnE"]),
                    onSuccess: () => i?.(et.pt.COPY_USER_ID),
                }),
                f = r.useMemo(() => (null == o ? null : o.getBannerURL({ canAnimate: !0, size: 1024 })), [o]),
                A = r.useCallback(() => {
                    ((0, ee.C)(t.id), i?.(et.pt.COPY_USER_ID));
                }, [t.id, i]),
                p = r.useCallback(() => {
                    ((0, ee.C)((0, $.A)(t.id)), i?.(et.pt.COPY_PROFILE_LINK));
                }, [t.id, i]),
                E = r.useCallback(() => {
                    let e = t.getAvatarURL(n, 1024, !0);
                    (Q()(null != e, "cannot copy null avatar URL"), (0, ee.C)(e), i?.(et.pt.COPY_AVATAR_IMAGE_LINK));
                }, [t, n, i]),
                g = r.useCallback(() => {
                    (Q()(null != f, "cannot copy null banner URL"), (0, ee.C)(f), i?.(et.pt.COPY_BANNER_IMAGE_LINK));
                }, [f, i]);
            return !__OVERLAY__ && a && ee.p5 && null != t.id
                ? u
                    ? (0, l.jsxs)(s.Dr, {
                          id: "copy-user-info",
                          label: N.intl.string(N.t.QvQeLv),
                          children: [
                              (0, l.jsx)(s.Dr, { id: "copy-user-id", label: N.intl.string(N.t["/AXYnE"]), action: A }),
                              c &&
                                  (0, l.jsx)(s.Dr, {
                                      id: "copy-user-profile-link",
                                      label: N.intl.string(N.t["E+rSVy"]),
                                      action: p,
                                  }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, l.jsx)(s.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: N.intl.string(N.t.gERDvM),
                                      action: E,
                                  }),
                              null != f &&
                                  (0, l.jsx)(s.Dr, {
                                      id: "copy-user-banner-link",
                                      label: N.intl.string(N.t.hsNv0R),
                                      action: g,
                                  }),
                          ],
                      })
                    : d
                : null;
        })({ user: t, guildId: p, onSuccess: (e) => v({ action: e, analyticsLocations: S }) }),
        eI = (0, f.iX)(),
        eR = (0, A.Ay)(t, p, x),
        em = (0, j.p7)(t, p),
        eO = [
            [
                E,
                (0, eu.A)({ user: t, location: "UserProfileOverflowMenuButton" }),
                em,
                eI ? null : eR,
                ed,
                ef,
                (function (e) {
                    let { user: t } = e,
                        i = V.useConfig({ location: "user_profile_overflow_menu" }),
                        o = (0, K.d)(t),
                        a = (0, W.p)(i && o ? t.id : null),
                        { analyticsLocations: d } = (0, c.Ay)(u.A.USER_PROFILE_OVERFLOW_MENU),
                        f = r.useCallback(() => {
                            (w.default.track(H.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: d }),
                                (0, U.mM)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e(768071),
                                        n.e(492599),
                                        n.e(531741),
                                        n.e(465157),
                                        n.e(733314),
                                        n.e(819305),
                                        n.e(143883),
                                        n.e(313699),
                                    ]).then(n.bind(n, 536110));
                                    return (n) =>
                                        (0, l.jsx)(e, {
                                            ...n,
                                            recipient: t,
                                            sourceAnalyticsLocation: u.A.USER_PROFILE_OVERFLOW_MENU,
                                        });
                                }));
                        }, [d, t]);
                    return i && o && a
                        ? (0, l.jsx)(s.Dr, {
                              id: "referral-profile-share-nitro",
                              label: N.intl.string(N.t.JSSBzo),
                              iconLeft: m.NitroWheelIcon,
                              leadingAccessory: { type: "icon", icon: m.NitroWheelIcon, size: "sm" },
                              action: f,
                          })
                        : null;
                })({ user: t }),
            ],
            [ep, eA, eE, eg],
            [e_],
        ];
    return eO.every((e) => e.every((e) => null == e))
        ? null
        : (0, l.jsx)(c.f5, {
              value: S,
              children: (0, l.jsx)(o.Y, {
                  targetElementRef: I,
                  shouldShow: R,
                  onRequestOpen: O,
                  onRequestClose: h,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, l.jsx)(a.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": N.intl.string(N.t.AXIHpV),
                          children: eO.map((e, t) => (0, l.jsx)(s.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => b({ ...e, ...z }),
              }),
          });
}
function eE(e) {
    let t = r.useRef(null);
    return (0, l.jsx)(p.ZQ, {
        user: e.user,
        guildId: e.guildId,
        location: "UserProfileOverflowMenuIconButton",
        children: (0, l.jsx)(ep, {
            ...e,
            popoutTargetRef: t,
            children: (e) => (0, l.jsx)(ed.q3, { buttonRef: t, ...e }),
        }),
    });
}
function eg(e) {
    let t = r.useRef(null),
        { themeType: n } = (0, ec.E)(),
        i = n === ef.d.POPOUT,
        { isVisible: o, markAsDismissed: a } = (function (e) {
            let [t, n] = (0, g.kn)(e ? [E.M.DISPLAY_NAME_STYLES_TRY_COACHMARK] : []);
            return { isVisible: null != t, markAsDismissed: n };
        })((0, p.sn)() && i),
        [s, u] = r.useState(!1),
        c = r.useCallback(() => {
            (u(!0), a(b.i.TAKE_ACTION));
        }, [a]);
    return (0, l.jsxs)("div", {
        className: eA.g2,
        children: [
            (0, l.jsx)("div", {
                className: o ? eA.t8 : void 0,
                children: (0, l.jsx)(ep, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: i ? s : void 0,
                    onRequestOpen: c,
                    onRequestClose: () => u(!1),
                    children: (e) => (0, l.jsx)(ed.br, { buttonRef: t, ...e }),
                }),
            }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("div", { className: eA.Vx, "aria-hidden": !0 }),
                        (0, l.jsx)(C, { markAsDismissed: a, targetElementRef: t, onDismissibleContentClick: c }),
                    ],
                }),
        ],
    });
}
function e_(e) {
    return (0, l.jsx)(p.ZQ, {
        user: e.user,
        guildId: e.guildId,
        location: "UserProfileOverflowMenuBannerButton",
        children: (0, l.jsx)(eg, { ...e }),
    });
}
