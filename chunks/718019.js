n.d(t, {
    A: () => w,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(960076),
    u = n(793574),
    d = n(688810),
    f = n(178418),
    p = n(290863),
    _ = n(927578),
    h = n(837921),
    m = n(183555),
    g = n(146655),
    E = n(854627),
    b = n(939496),
    y = n(518477),
    O = n(652215),
    A = n(788868),
    v = n(996988),
    S = n(735027);

function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}

function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = h.Ay.getEnableHardwareAcceleration() ? l.JsQ : l.euF;

function w(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: a,
            channelId: h,
            themeType: I,
            animateOnHover: C,
            onOpenProfile: w,
            className: P,
            previewStatus: D,
        } = e,
        { theme: x } = (0, b.E)(),
        { analyticsLocations: L } = (0, d.Ay)(u.A.AVATAR),
        { trackUserProfileAction: j } = (0, m.NJ)(),
        M = _.Ay.isPremiumAtLeast(null == n ? void 0 : n.premiumType, A.PremiumTypes.TIER_2),
        k = i.useMemo(() => t.isNonUserBot() || (0, f.c)(t, h), [t, h]),
        { live: U } = (0, g.A)(t.id),
        [G] = U,
        { status: V, isMobileOnline: F } = (0, o.cf)([p.A], () => ({
            status: (0, c.A)(G) ? O.clD.STREAMING : p.A.getStatus(t.id),
            isMobileOnline: p.A.isMobileOnline(t.id),
        })),
        B = void 0 !== D ? D : V,
        H = [v.d.MODAL, v.d.MODAL_V2].includes(I) ? l._3J.SIZE_120 : l._3J.SIZE_80,
        Y = s()(S.my, P),
        {
            avatarDecorationSrc: W,
            avatarSrc: K,
            eventHandlers: z,
        } = (0, E.A)({
            userId: t.id,
            guildId: null != n ? n.guildId : a,
            size: H,
            animateOnHover: C,
        }),
        q = (0, r.jsx)(R, {
            src: K,
            avatarDecoration: W,
            size: H,
            "aria-label": t.username,
            imageClassName: null != w ? S.Lw : void 0,
            status: k ? O.clD.UNKNOWN : B,
            statusBackdropColor: M && !k ? (0, l.C$5)(x) : void 0,
            isMobile: F,
            statusTooltip: !0,
            statusTooltipDelay: y.In,
        });
    return null == w
        ? (0, r.jsx)(
              "div",
              N(T({}, z), {
                  className: Y,
                  children: q,
              }),
          )
        : (0, r.jsx)(
              l.DUT,
              N(T({}, z), {
                  className: s()(Y, S.vk),
                  focusProps: {
                      ringClassName: S.Rg,
                  },
                  onClick: () => {
                      j({
                          action: "PRESS_VIEW_PROFILE",
                          analyticsLocations: L,
                      }),
                          null == w || w();
                  },
                  children: q,
              }),
          );
}
