t.d(e, { A: () => k, V: () => _ });
var a = t(477900),
    s = t(582128),
    n = t(503698),
    l = t.n(n),
    r = t(17928),
    u = t(97808),
    o = t(935154),
    d = t(890856),
    c = t(960076),
    A = t(793574),
    p = t(688810),
    h = t(178418),
    m = t(290863),
    v = t(428262),
    f = t(19575),
    g = t(183555),
    I = t(146655),
    M = t(854627),
    R = t(939496),
    E = t(305385),
    w = t(518477),
    y = t(652215),
    N = t(202541),
    V = t(985253),
    T = t(375708),
    b = t(145762);
let S = f.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function _(i) {
    let {
            user: e,
            displayProfile: t,
            guildId: a,
            channelId: n,
            themeType: l,
            animateOnHover: u,
            previewStatus: d,
            specOverrides: A,
            avatarDecorationOverride: p,
            avatarOverride: f,
        } = i,
        { theme: g } = (0, R.E)(),
        E = v.Ay.isPremiumAtLeast(t?.premiumType, N.PremiumTypes.TIER_2),
        T = s.useMemo(() => e.isNonUserBot() || (0, h.c)(e, n), [e, n]),
        { live: b } = (0, I.A)(e.id),
        [S] = b,
        {
            status: _,
            isMobileOnline: k,
            isVROnline: C,
        } = (0, r.cf)([m.A], () => ({
            status: (0, c.A)(S) ? y.clD.STREAMING : m.A.getStatus(e.id),
            isMobileOnline: m.A.isMobileOnline(e.id),
            isVROnline: m.A.isVROnline(e.id),
        })),
        O = A?.avatarSize ?? V.T[l].avatarSize,
        {
            avatarDecorationSrc: P,
            avatarSrc: x,
            eventHandlers: z,
        } = (0, M.A)({
            userId: e.id,
            guildId: null != t ? t.guildId : a,
            size: O,
            animateOnHover: u,
            avatarDecorationOverride: p,
            avatarOverride: f,
        });
    return {
        avatarProps: {
            src: x,
            avatarDecoration: P,
            size: O,
            "aria-label": e.username,
            status: T ? y.clD.UNKNOWN : void 0 !== d ? d : _,
            statusBackdropColor: E && !T ? (0, o.C$)(g) : void 0,
            isMobile: k,
            isVR: C,
            statusTooltip: !0,
            statusTooltipDelay: w.In,
        },
        eventHandlers: z,
    };
}
function k(i) {
    let { onOpenProfile: e, onOpenAvatar: t, className: s, ...n } = i,
        { analyticsLocations: r } = (0, p.Ay)(A.A.AVATAR),
        { trackUserProfileAction: u } = (0, g.NJ)(),
        { avatarProps: o, eventHandlers: c } = _(n),
        h = l()(b.my, s),
        m = n.displayProfile?.guildId ?? n.guildId,
        v = null != n.user.avatar || n.user.hasAvatarForGuild(m) ? t : void 0;
    return null == e && null == v
        ? (0, a.jsx)("div", { ...c, className: h, children: (0, a.jsx)(S, { ...o }) })
        : (0, a.jsx)(d.s, {
              "aria-label": T.intl.string(null != v ? T.t.xB7MI3 : T.t["+Xp3hq"]),
              ...c,
              onMouseEnter: function () {
                  c.onMouseEnter(), null != v && (0, E.V)({ user: n.user, guildId: m });
              },
              className: l()(h, b.vk),
              focusProps: { ringClassName: b.Rg },
              onClick: () => {
                  if (null != v) {
                      u({ action: w.pt.VIEW_AVATAR, analyticsLocations: r }), v();
                      return;
                  }
                  u({ action: w.pt.PRESS_VIEW_PROFILE, analyticsLocations: r }), e?.();
              },
              children: (0, a.jsx)(S, { ...o, imageClassName: b.Lw }),
          });
}
