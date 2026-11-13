n.d(t, { yo: () => ec, Zt: () => ea });
var l = n(477900),
    r = n(582128),
    i = n(365199),
    o = n(265872),
    s = n(165862),
    a = n(477782),
    u = n(793574),
    c = n(688810),
    d = n(886913),
    f = n(738676),
    p = n(674954),
    E = n(708645),
    R = n(554146),
    _ = n(263775),
    g = n(855986),
    A = n(43105),
    m = n(844222),
    I = n(403581),
    h = n(626584),
    x = n(531685),
    O = n(49999),
    b = n(842671),
    N = n(792996),
    v = n(78294);
let C = new h.A("TryDisplayNameStyleMarketingPopover");
function S(e) {
    let { markAsDismissed: t, targetElementRef: n, onDismissibleContentClick: i } = e,
        o = r.useRef(null),
        s = (0, g.bG)([x.A], () => x.A.isFocused()),
        { reducedMotion: a } = r.useContext(m.C);
    return (
        r.useEffect(() => {
            null != o.current && (!a.enabled && s ? o.current.play().catch(C.error) : o.current.pause());
        }, [s, a.enabled]),
        (0, l.jsx)(A.A, {
            graphic: { type: "video", ref: o, src: v.A, aspectRatio: "21/9", loop: !0 },
            gradientColor: "nitro-pink",
            title: N.intl.string(b.default.t8z5gn),
            size: "lg",
            body: N.intl.string(b.default.ajHWbZ),
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            targetElementRef: n,
            onRequestClose: () => t(O.i.USER_DISMISS),
            actions: [
                { text: N.intl.string(b.default["D7+kY/"]), variant: "primary", icon: I.NitroWheelIcon, onClick: i },
            ],
        })
    );
}
var j = n(414636),
    P = n(503898),
    k = n(192308),
    M = n(129230);
let T = (0, n(945810).mj)({
    name: "2026-09-referral-profile-contextual-menu-upsell",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var y = n(834708),
    D = n(154486),
    L = n(652215),
    U = n(239211),
    F = n(284009),
    G = n.n(F),
    w = n(50268),
    K = n(207560),
    V = n(342053),
    W = n(527212),
    H = n(640794),
    B = n(253932),
    Q = n(957565),
    q = n(518477),
    Y = n(399476),
    z = n(889460),
    X = n(865116),
    $ = n(928658);
let Z = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var J = n(46653),
    ee = n(287809),
    et = n(183555),
    en = n(256847),
    el = n(939496),
    er = n(993401),
    ei = n(996988),
    eo = n(207566);
function es(e) {
    let {
            user: t,
            guildId: E,
            viewProfileItem: R,
            appContext: _,
            popoutTargetRef: A,
            shouldShow: m,
            onRequestOpen: h,
            onRequestClose: x,
            children: O,
        } = e,
        { themeType: b } = (0, el.E)(),
        { trackUserProfileAction: v } = (0, et.NJ)(),
        { analyticsLocations: C, newestAnalyticsLocation: S } = (0, c.Ay)(u.A.USER_PROFILE_OVERFLOW_MENU);
    (0, d.A)(t.id, E, !0);
    let F = {
            action: q.pt.PRESS_OPTIONS,
            icon: i.MoreHorizontalIcon,
            tooltipText: N.intl.string(N.t["UKOtz+"]),
            "aria-label": N.intl.string(N.t["UKOtz+"]),
        },
        er = (0, z.A)({
            user: t,
            guildId: E,
            onAction: () => v({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: C }),
        }),
        ei = (0, P.A)({ user: t, location: "user_profile_overflow_menu" }),
        eo = (0, U.A)({
            user: t,
            guildId: E,
            location: S,
            appContext: _,
            onBlock: () => v({ action: "BLOCK", analyticsLocations: C }),
            onIgnore: () => v({ action: "IGNORE", analyticsLocations: C }),
            onUnblock: () => v({ action: "UNBLOCK", analyticsLocations: C }),
        }),
        es = (0, Y.A)({
            user: t,
            guildId: E,
            location: S,
            appContext: _,
            onBlock: () => v({ action: "BLOCK", analyticsLocations: C }),
            onIgnore: () => v({ action: "IGNORE", analyticsLocations: C }),
            onUnignore: () => v({ action: "UNIGNORE", analyticsLocations: C }),
        }),
        ea = (function (e) {
            let { user: t, guildId: n, color: r, onAction: i, location: o = u.A.CONTEXT_MENU, appContext: s } = e,
                c = Z.useExperiment({ location: o }, { autoTrackExposure: !0 }).enabled,
                d = (0, g.bG)([J.default], () => J.default.getId() === t.id);
            return !c || d || t.isNonUserBot()
                ? null
                : (0, l.jsx)(a.Dr, {
                      id: "report-user",
                      color: r,
                      label: N.intl.string(N.t.A1MM3D),
                      action: () => (0, $.NW)(t, n === L.ME ? void 0 : n, i, s),
                  });
        })({
            user: t,
            guildId: E,
            location: S,
            appContext: _,
            color: "danger",
            onAction: () => v({ action: "REPORT", analyticsLocations: C }),
        }),
        eu = (function (e) {
            let { user: t, guildId: n, color: r, onAction: i, appContext: o } = e,
                s = (0, g.bG)([X.Ay], () => X.Ay.get("iar_testing")),
                u = (0, g.bG)([ee.default], () => ee.default.getCurrentUser());
            return null != u && (t.id === u.id || t.isNonUserBot() || !u.isStaff() || !s)
                ? null
                : (0, l.jsx)(a.Dr, {
                      id: "staff-test-report-user",
                      color: r,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, $.RR)(t, n === L.ME ? void 0 : n, i, o),
                  });
        })({
            user: t,
            guildId: E,
            location: S,
            appContext: _,
            color: "danger",
            onAction: () => v({ action: "REPORT", analyticsLocations: C }),
        }),
        ec = (function (e) {
            let { user: t, guildId: n, onSuccess: i } = e,
                o = (0, W.Ay)(t.id, n ?? void 0),
                s = B.Q_.useSetting(),
                u = (0, K.lF)(),
                c = (0, V.g)("useCopyUserInfoItem"),
                d = (0, w.A)({
                    id: t.id,
                    label: N.intl.string(N.t["/AXYnE"]),
                    onSuccess: () => i?.(q.pt.COPY_USER_ID),
                }),
                f = r.useMemo(() => (null == o ? null : o.getBannerURL({ canAnimate: !0, size: 1024 })), [o]),
                p = r.useCallback(() => {
                    ((0, Q.C)(t.id), i?.(q.pt.COPY_USER_ID));
                }, [t.id, i]),
                E = r.useCallback(() => {
                    ((0, Q.C)((0, H.A)(t.id)), i?.(q.pt.COPY_PROFILE_LINK));
                }, [t.id, i]),
                R = r.useCallback(() => {
                    let e = t.getAvatarURL(n, 1024, !0);
                    (G()(null != e, "cannot copy null avatar URL"), (0, Q.C)(e), i?.(q.pt.COPY_AVATAR_IMAGE_LINK));
                }, [t, n, i]),
                _ = r.useCallback(() => {
                    (G()(null != f, "cannot copy null banner URL"), (0, Q.C)(f), i?.(q.pt.COPY_BANNER_IMAGE_LINK));
                }, [f, i]);
            return !__OVERLAY__ && s && Q.p5 && null != t.id
                ? u
                    ? (0, l.jsxs)(a.Dr, {
                          id: "copy-user-info",
                          label: N.intl.string(N.t.QvQeLv),
                          children: [
                              (0, l.jsx)(a.Dr, { id: "copy-user-id", label: N.intl.string(N.t["/AXYnE"]), action: p }),
                              c &&
                                  (0, l.jsx)(a.Dr, {
                                      id: "copy-user-profile-link",
                                      label: N.intl.string(N.t["E+rSVy"]),
                                      action: E,
                                  }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, l.jsx)(a.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: N.intl.string(N.t.gERDvM),
                                      action: R,
                                  }),
                              null != f &&
                                  (0, l.jsx)(a.Dr, {
                                      id: "copy-user-banner-link",
                                      label: N.intl.string(N.t.hsNv0R),
                                      action: _,
                                  }),
                          ],
                      })
                    : d
                : null;
        })({ user: t, guildId: E, onSuccess: (e) => v({ action: e, analyticsLocations: C }) }),
        ed = (0, f.iX)(),
        ef = (0, p.Ay)(t, E, b),
        ep = (0, j.p7)(t, E),
        eE = [
            [
                R,
                (0, en.A)({ user: t, location: "UserProfileOverflowMenuButton" }),
                ep,
                ed ? null : ef,
                er,
                ei,
                (function (e) {
                    let { user: t } = e,
                        i = T.useConfig({ location: "user_profile_overflow_menu" }),
                        o = (0, y.d)(t),
                        s = (0, D.p)(i && o ? t.id : null),
                        { analyticsLocations: d } = (0, c.Ay)(u.A.USER_PROFILE_OVERFLOW_MENU),
                        f = r.useCallback(() => {
                            (M.default.track(L.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: d }),
                                (0, k.mM)(async () => {
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
                    return i && o && s
                        ? (0, l.jsx)(a.Dr, {
                              id: "referral-profile-share-nitro",
                              label: N.intl.string(N.t.JSSBzo),
                              iconLeft: I.NitroWheelIcon,
                              leadingAccessory: { type: "icon", icon: I.NitroWheelIcon, size: "sm" },
                              action: f,
                          })
                        : null;
                })({ user: t }),
            ],
            [es, eo, ea, eu],
            [ec],
        ];
    return eE.every((e) => e.every((e) => null == e))
        ? null
        : (0, l.jsx)(c.f5, {
              value: C,
              children: (0, l.jsx)(o.Y, {
                  targetElementRef: A,
                  shouldShow: m,
                  onRequestOpen: h,
                  onRequestClose: x,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, l.jsx)(s.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": N.intl.string(N.t.AXIHpV),
                          children: eE.map((e, t) => (0, l.jsx)(a.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => O({ ...e, ...F }),
              }),
          });
}
function ea(e) {
    let t = r.useRef(null);
    return (0, l.jsx)(E.ZQ, {
        user: e.user,
        guildId: e.guildId,
        location: "UserProfileOverflowMenuIconButton",
        children: (0, l.jsx)(es, {
            ...e,
            popoutTargetRef: t,
            children: (e) => (0, l.jsx)(er.q3, { buttonRef: t, ...e }),
        }),
    });
}
function eu(e) {
    let t = r.useRef(null),
        { themeType: n } = (0, el.E)(),
        i = n === ei.d.POPOUT,
        { isVisible: o, markAsDismissed: s } = (function (e) {
            let [t, n] = (0, _.kn)(e ? [R.M.DISPLAY_NAME_STYLES_TRY_COACHMARK] : []);
            return { isVisible: null != t, markAsDismissed: n };
        })((0, E.sn)() && i),
        [a, u] = r.useState(!1),
        c = r.useCallback(() => {
            (u(!0), s(O.i.TAKE_ACTION));
        }, [s]);
    return (0, l.jsxs)("div", {
        className: eo.g2,
        children: [
            (0, l.jsx)("div", {
                className: o ? eo.t8 : void 0,
                children: (0, l.jsx)(es, {
                    ...e,
                    popoutTargetRef: t,
                    shouldShow: i ? a : void 0,
                    onRequestOpen: c,
                    onRequestClose: () => u(!1),
                    children: (e) => (0, l.jsx)(er.br, { buttonRef: t, ...e }),
                }),
            }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("div", { className: eo.Vx, "aria-hidden": !0 }),
                        (0, l.jsx)(S, { markAsDismissed: s, targetElementRef: t, onDismissibleContentClick: c }),
                    ],
                }),
        ],
    });
}
function ec(e) {
    return (0, l.jsx)(E.ZQ, {
        user: e.user,
        guildId: e.guildId,
        location: "UserProfileOverflowMenuBannerButton",
        children: (0, l.jsx)(eu, { ...e }),
    });
}
