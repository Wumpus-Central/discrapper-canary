n.d(t, {
    A: () => R,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
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
    y = n(939496),
    b = n(518477),
    O = n(652215),
    v = n(788868),
    A = n(996988),
    I = n(735027);

function S(e, t, n) {
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
                S(e, t, n[t]);
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
let w = h.Ay.getEnableHardwareAcceleration() ? l.JsQ : l.euF;

function R(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: a,
            channelId: h,
            themeType: S,
            animateOnHover: C,
            onOpenProfile: R,
            className: P,
            previewStatus: D,
        } = e,
        { theme: L } = (0, y.E)(),
        { analyticsLocations: x } = (0, d.Ay)(u.A.AVATAR),
        { trackUserProfileAction: M } = (0, m.NJ)(),
        j = _.Ay.isPremiumAtLeast(null == n ? void 0 : n.premiumType, v.PremiumTypes.TIER_2),
        k = i.useMemo(() => t.isNonUserBot() || (0, f.c)(t, h), [t, h]),
        { live: U } = (0, g.A)(t.id),
        [G] = U,
        {
            status: V,
            isMobileOnline: F,
            isVROnline: B,
        } = (0, s.cf)([p.A], () => ({
            status: (0, c.A)(G) ? O.clD.STREAMING : p.A.getStatus(t.id),
            isMobileOnline: p.A.isMobileOnline(t.id),
            isVROnline: p.A.isVROnline(t.id),
        })),
        H = void 0 !== D ? D : V,
        Y = [A.d.MODAL, A.d.MODAL_V2].includes(S) ? l._3J.SIZE_120 : l._3J.SIZE_80,
        W = o()(I.my, P),
        {
            avatarDecorationSrc: K,
            avatarSrc: z,
            eventHandlers: q,
        } = (0, E.A)({
            userId: t.id,
            guildId: null != n ? n.guildId : a,
            size: Y,
            animateOnHover: C,
        }),
        Z = (0, r.jsx)(w, {
            src: z,
            avatarDecoration: K,
            size: Y,
            "aria-label": t.username,
            imageClassName: null != R ? I.Lw : void 0,
            status: k ? O.clD.UNKNOWN : H,
            statusBackdropColor: j && !k ? (0, l.C$5)(L) : void 0,
            isMobile: F,
            isVR: B,
            statusTooltip: !0,
            statusTooltipDelay: b.In,
        });
    return null == R
        ? (0, r.jsx)(
              "div",
              N(T({}, q), {
                  className: W,
                  children: Z,
              }),
          )
        : (0, r.jsx)(
              l.DUT,
              N(T({}, q), {
                  className: o()(W, I.vk),
                  focusProps: {
                      ringClassName: I.Rg,
                  },
                  onClick: () => {
                      M({
                          action: "PRESS_VIEW_PROFILE",
                          analyticsLocations: x,
                      }),
                          null == R || R();
                  },
                  children: Z,
              }),
          );
}
