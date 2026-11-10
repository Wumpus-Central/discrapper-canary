l.d(i, { A: () => en });
var a = l(477900),
    n = l(582128),
    r = l(503698),
    s = l.n(r),
    t = l(855986),
    d = l(778712),
    o = l(346055),
    u = l(971217),
    c = l(287727),
    m = l(744808),
    g = l(527212),
    p = l(101928),
    h = l(854627),
    v = l(946356),
    y = l(680581),
    A = l(696451),
    f = l(919395),
    x = l(97808),
    P = l(935154),
    j = l(939249),
    I = l(403581),
    b = l(265872),
    N = l(22231),
    C = l(688810),
    w = l(562819),
    D = l(290863),
    T = l(253400),
    k = l(165862),
    O = l(477782),
    S = l(792996);
let B = function (e) {
    let { onChangeAvatar: i, onChangeAvatarDecoration: l, onClose: n } = e;
    return (0, a.jsxs)(k.W, {
        "data-menu-migrated": !0,
        onClose: n,
        onSelect: void 0,
        navId: "user-settings-change-avatar",
        "aria-label": S.intl.string(S.t.ldIeAd),
        children: [
            (0, a.jsx)(O.Dr, { id: "change-avatar", action: i, label: S.intl.string(S.t["4OynCD"]) }),
            (0, a.jsx)(O.Dr, { id: "change-avatar-decoration", action: l, label: S.intl.string(S.t.BVcYCx) }),
        ],
    });
};
var U = l(468450),
    V = l(339984),
    _ = l(531835);
let z = T.Ay.getEnableHardwareAcceleration() ? x.Js : x.eu;
function E(e) {
    let {
            user: i,
            guild: l,
            displayProfile: r,
            canUsePremiumCustomization: o,
            previewAvatar: u,
            previewAvatarDecorationSrc: c,
            previewTheme: m,
            previewPrimaryColor: g,
            className: p,
            disabledInputs: h,
            isTryItOut: v,
            onUpsellClick: y,
        } = e,
        A = n.useRef(null),
        { analyticsLocations: f, newestAnalyticsLocation: x } = (0, C.Ay)(),
        T = (0, t.bG)([D.A], () => D.A.getStatus(i.id)),
        k = null == l || r?.canUsePremiumProfileCustomization || o,
        O = (0, a.jsx)(z, {
            src: u,
            avatarDecoration: c,
            imageClassName: s()(p, { [_.Lw]: !h }),
            size: d._3.SIZE_80,
            "aria-label": i.username,
            status: T,
            statusTooltip: !1,
            statusBackdropColor: null != g ? (0, P.C$)(m) : void 0,
        });
    return h
        ? (0, a.jsx)("div", { className: _.my, children: O })
        : k
          ? (0, a.jsx)(b.Y, {
                targetElementRef: A,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, a.jsx)(B, {
                        onClose: i,
                        onChangeAvatar: () =>
                            (0, U.XD)({ uploadType: V.HL.AVATAR, guildId: l?.id, analyticsSource: x, isTryItOut: v }),
                        onChangeAvatarDecoration: () => {
                            (0, w.L)({ guild: null == l ? void 0 : l, analyticsLocations: f });
                        },
                    });
                },
                children: (e) =>
                    (0, a.jsxs)(j.D, {
                        ...e,
                        innerRef: A,
                        className: s()(_.my, _.vk),
                        children: [
                            O,
                            (0, a.jsx)(N.PencilIcon, {
                                size: "custom",
                                className: _.QY,
                                width: 20,
                                height: 20,
                                color: "white",
                            }),
                        ],
                    }),
            })
          : (0, a.jsxs)(j.D, {
                onClick: y,
                className: s()(_.my, _.vk),
                children: [
                    O,
                    (0, a.jsx)(I.NitroWheelIcon, {
                        size: "custom",
                        className: _.QY,
                        width: 20,
                        height: 20,
                        color: "white",
                    }),
                ],
            });
}
var L = l(534514),
    R = l(702211),
    F = l(915614),
    G = l(996988),
    M = l(687468);
function Y(e) {
    let {
            user: i,
            displayProfile: l,
            guildId: n,
            canUsePremiumCustomization: r,
            pendingBanner: s,
            pendingAccentColor: t,
            isTryItOut: d,
            disabledInputs: o,
            onUpsellClick: u,
        } = e,
        { newestAnalyticsLocation: c } = (0, C.Ay)(),
        m = r || l?.canUsePremiumProfileCustomization || !1,
        g = m ? N.PencilIcon : I.NitroWheelIcon,
        p = (0, R.b)(m);
    return (0, a.jsx)(F.A, {
        user: i,
        displayProfile: l,
        guildId: n,
        themeType: G.d.POPOUT,
        pendingBanner: s,
        pendingAccentColor: t,
        canUsePremiumProfileCustomization: r,
        overlay:
            !o &&
            (0, a.jsxs)(j.D, {
                onClick: function () {
                    m || p
                        ? (0, U.XD)({ uploadType: V.HL.BANNER, analyticsSource: c, guildId: n, isTryItOut: d })
                        : u?.();
                },
                className: M.v,
                children: [
                    (0, a.jsx)(g, { size: "xs", color: "white" }),
                    (0, a.jsx)(L.D, {
                        variant: "body-sm/medium",
                        color: "text-overlay-light",
                        children: m || p ? S.intl.string(S.t.N0bC3P) : S.intl.string(S.t.O1sT5v),
                    }),
                ],
            }),
    });
}
var Z = l(685073),
    H = l(338787),
    W = l(465829),
    q = l(442228),
    Q = l(192867),
    X = l(351906),
    J = l(47453);
function K(e) {
    let {
            user: i,
            displayProfile: l,
            guild: n,
            pendingAvatar: r,
            pendingNickname: s,
            pendingGlobalName: d,
            pendingBio: o,
            pendingPronouns: u,
            pendingLegacyUsernameDisabled: c,
            pendingBadges: m,
            pendingDisplayNameStyles: g,
            pendingPrimaryGuildId: p,
            hideBioSection: h,
            shouldOpenBadgeTooltip: v,
        } = e,
        y = (0, t.bG)([A.Ay], () => (null == n ? null : A.Ay.getMember(n.id, i.id))),
        f = (0, t.bG)([X.A], () => X.A.hidePersonalInformation),
        x = l?.getPreviewBio(o),
        P = u ?? l?.pronouns,
        j = (0, U.eh)({ pendingNickname: s, pendingGlobalName: d, user: i, guildMember: y }),
        I = (0, Z.gS)(p);
    return (0, a.jsxs)("div", {
        className: J.rf,
        inert: !0,
        children: [
            (0, a.jsx)(W.Ay, {
                user: i,
                guildId: n?.id,
                displayName: j,
                pendingDisplayNameStyles: g,
                usernameIcon: (function () {
                    if (null != y) {
                        if (null !== r && (null != y.avatar || null != r))
                            return (0, a.jsx)(Q.A, { user: i, nickname: j });
                    }
                })(),
                pronouns: P,
                primaryGuild: I,
                trailing: (0, a.jsx)(H.A, {
                    displayProfile: l,
                    themeType: G.d.POPOUT,
                    pendingLegacyUsernameDisabled: c,
                    pendingBadges: m,
                    shouldOpenBadgeTooltip: v,
                }),
            }),
            !h &&
                null != x &&
                "" !== x &&
                (0, a.jsx)(q.A, { userId: i.id, userBio: x, hidePersonalInformation: f, viewFullBioDisabled: !0 }),
        ],
    });
}
var $ = l(993401),
    ee = l(784886);
function ei(e) {
    let { user: i, hideMessageInput: l, hideExampleButton: n } = e;
    return l
        ? n
            ? null
            : (0, a.jsx)("div", {
                  className: J.qr,
                  children: (0, a.jsx)($.FD, {
                      variant: "primary",
                      text: S.intl.string(S.t.hZkfwY),
                      onClick: () => {},
                      fullWidth: !0,
                  }),
              })
        : (0, a.jsx)("div", { className: J.qr, inert: !0, children: (0, a.jsx)(ee.A, { user: i }) });
}
var el = l(652215),
    ea = l(394898);
function en(e) {
    let {
            user: i,
            guild: l,
            canUsePremiumCustomization: n,
            onUpsellClick: r,
            pendingBanner: x,
            pendingAccentColor: P,
            pendingBio: j,
            pendingPronouns: I,
            pendingAvatar: b,
            pendingAvatarDecoration: N,
            pendingNickname: C,
            pendingGlobalName: w,
            pendingThemeColors: D,
            pendingProfileEffect: T,
            profileEffectRestartKey: k,
            pendingProfileFrame: O,
            pendingLegacyUsernameDisabled: B,
            pendingDisplayNameStyles: U,
            pendingPrimaryGuildId: V,
            className: _,
            avatarClassName: z,
            containerClassName: L,
            isTryItOut: R = !1,
            disabledInputs: F = !1,
            hideCustomStatus: M = !1,
            hideBioSection: Z = !1,
            hideMessageInput: H = !0,
            hideProfileFrame: W = !1,
            pendingBadges: q,
            shouldOpenBadgeTooltip: Q,
            hideExampleButton: X = !1,
            interactive: J = !0,
        } = e,
        $ = (0, g.Ay)(i.id, l?.id),
        ee = (0, t.bG)([A.Ay], () => (null != l ? A.Ay.getMember(l.id, i.id) : null)),
        en = (0, f.lw)({
            pendingValue: N,
            userValue: i?.avatarDecoration,
            guildValue: ee?.avatarDecoration,
            guildId: l?.id,
        }),
        { avatarSrc: er, avatarDecorationSrc: es } = (0, h.A)({
            userId: i?.id,
            guildId: l?.id,
            avatarDecorationOverride: en,
            avatarOverride: b,
            size: d._3.SIZE_80,
            showPending: !0,
        }),
        et = (0, f.lw)({
            pendingValue: T,
            userValue: $?._userProfile?.profileEffect,
            guildValue: $?._guildMemberProfile?.profileEffect,
            guildId: l?.id,
        }),
        ed = W
            ? void 0
            : (0, f.lw)({
                  pendingValue: O,
                  userValue: $?._userProfile?.profileFrame,
                  guildValue: $?._guildMemberProfile?.profileFrame,
                  guildId: l?.id,
              }),
        eo = (0, c.A)(ed?.skuId),
        { theme: eu, primaryColor: ec } = (0, p.A)({ user: i, displayProfile: $, pendingThemeColors: D, isPreview: n }),
        em = (0, a.jsxs)(v.A, {
            user: i,
            displayProfile: $,
            themeType: G.d.POPOUT,
            pendingThemeColors: D,
            profileFrameSkuIdOverride: ed?.skuId ?? null,
            className: s()(ea.kL, _),
            forceShowPremium: n,
            children: [
                (0, a.jsxs)("div", {
                    className: ea.wx,
                    children: [
                        (0, a.jsx)(Y, {
                            user: i,
                            displayProfile: $,
                            guildId: l?.id,
                            canUsePremiumCustomization: n,
                            pendingBanner: x,
                            pendingAccentColor: P,
                            isTryItOut: R,
                            disabledInputs: F,
                            onUpsellClick: () => r?.({ object: el.ZSU.EDIT_PROFILE_BANNER }),
                        }),
                        (0, a.jsx)(E, {
                            user: i,
                            guild: l,
                            displayProfile: $,
                            canUsePremiumCustomization: n,
                            previewAvatar: er,
                            previewAvatarDecorationSrc: es,
                            previewTheme: eu,
                            previewPrimaryColor: ec,
                            className: z,
                            disabledInputs: F,
                            isTryItOut: R,
                            onUpsellClick: () => r?.({ object: el.ZSU.AVATAR }),
                        }),
                        !M && (0, a.jsx)(y.A, { user: i, themeType: G.d.POPOUT, disableToolbar: F }),
                    ],
                }),
                (0, a.jsx)(K, {
                    user: i,
                    displayProfile: $,
                    guild: l,
                    pendingAvatar: b,
                    pendingNickname: C,
                    pendingGlobalName: w,
                    pendingBio: j,
                    pendingPronouns: I,
                    pendingLegacyUsernameDisabled: B,
                    pendingDisplayNameStyles: U,
                    pendingPrimaryGuildId: V,
                    hideBioSection: Z,
                    pendingBadges: q,
                    shouldOpenBadgeTooltip: Q,
                }),
                (0, a.jsx)(ei, { user: i, hideMessageInput: H, hideExampleButton: X }),
                null != et && (0, a.jsx)(u.A, { skuId: et.skuId, restartKey: k }),
                null != eo && (0, a.jsx)(m.A, { frame: eo, className: ea.hH }),
            ],
        });
    return J
        ? (0, a.jsx)("div", { className: s()(ea.i1, L), children: em })
        : (0, a.jsx)("div", {
              role: "img",
              className: s()(ea.i1, L),
              "aria-label": S.intl.string(S.t.ayozFl),
              children: (0, a.jsx)(o.M, { children: em }),
          });
}
