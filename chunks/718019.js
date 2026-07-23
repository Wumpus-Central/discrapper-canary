t.d(e, { A: () => k, V: () => _ });
var n = t(627968),
    a = t(64700),
    s = t(503698),
    l = t.n(s),
    r = t(17928),
    u = t(97808),
    o = t(133171),
    d = t(890856),
    c = t(960076),
    A = t(793574),
    p = t(688810),
    h = t(178418),
    m = t(290863),
    f = t(428262),
    g = t(19575),
    v = t(183555),
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
let S = g.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function _(i) {
    let {
            user: e,
            displayProfile: t,
            guildId: n,
            channelId: s,
            themeType: l,
            animateOnHover: u,
            previewStatus: d,
            specOverrides: A,
            avatarDecorationOverride: p,
            avatarOverride: g,
        } = i,
        { theme: v } = (0, R.E)(),
        E = f.Ay.isPremiumAtLeast(t?.premiumType, N.PremiumTypes.TIER_2),
        T = a.useMemo(() => e.isNonUserBot() || (0, h.c)(e, s), [e, s]),
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
            guildId: null != t ? t.guildId : n,
            size: O,
            animateOnHover: u,
            avatarDecorationOverride: p,
            avatarOverride: g,
        });
    return {
        avatarProps: {
            src: x,
            avatarDecoration: P,
            size: O,
            "aria-label": e.username,
            status: T ? y.clD.UNKNOWN : void 0 !== d ? d : _,
            statusBackdropColor: E && !T ? (0, o.C$)(v) : void 0,
            isMobile: k,
            isVR: C,
            statusTooltip: !0,
            statusTooltipDelay: w.In,
        },
        eventHandlers: z,
    };
}
function k(i) {
    let { onOpenProfile: e, onOpenAvatar: t, className: a, ...s } = i,
        { analyticsLocations: r } = (0, p.Ay)(A.A.AVATAR),
        { trackUserProfileAction: u } = (0, v.NJ)(),
        { avatarProps: o, eventHandlers: c } = _(s),
        h = l()(b.my, a),
        m = s.displayProfile?.guildId ?? s.guildId;
    return null == e && null == t
        ? (0, n.jsx)("div", { ...c, className: h, children: (0, n.jsx)(S, { ...o }) })
        : (0, n.jsx)(d.s, {
              "aria-label": T.intl.string(null != t ? T.t.xB7MI3 : T.t["+Xp3hq"]),
              ...c,
              onMouseEnter: function () {
                  c.onMouseEnter(), null != t && (0, E.V)({ user: s.user, guildId: m });
              },
              className: l()(h, b.vk),
              focusProps: { ringClassName: b.Rg },
              onClick: () => {
                  if (null != t) {
                      u({ action: w.pt.VIEW_AVATAR, analyticsLocations: r }), t();
                      return;
                  }
                  u({ action: w.pt.PRESS_VIEW_PROFILE, analyticsLocations: r }), e?.();
              },
              children: (0, n.jsx)(S, { ...o, imageClassName: b.Lw }),
          });
}
