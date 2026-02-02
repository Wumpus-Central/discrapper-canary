n.d(t, {
    A: () => P,
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
    I = n(985018),
    S = n(735027);

function T(e, t, n) {
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

function C(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}

function N(e, t) {
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

function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = h.Ay.getEnableHardwareAcceleration() ? l.JsQ : l.euF;

function P(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: a,
            channelId: h,
            themeType: T,
            animateOnHover: N,
            onOpenProfile: P,
            className: D,
            previewStatus: L,
        } = e,
        { theme: x } = (0, y.E)(),
        { analyticsLocations: M } = (0, d.Ay)(u.A.AVATAR),
        { trackUserProfileAction: j } = (0, m.NJ)(),
        k = _.Ay.isPremiumAtLeast(null == n ? void 0 : n.premiumType, v.PremiumTypes.TIER_2),
        U = i.useMemo(() => t.isNonUserBot() || (0, f.c)(t, h), [t, h]),
        { live: G } = (0, g.A)(t.id),
        [V] = G,
        {
            status: F,
            isMobileOnline: B,
            isVROnline: H,
        } = (0, s.cf)([p.A], () => ({
            status: (0, c.A)(V) ? O.clD.STREAMING : p.A.getStatus(t.id),
            isMobileOnline: p.A.isMobileOnline(t.id),
            isVROnline: p.A.isVROnline(t.id),
        })),
        Y = void 0 !== L ? L : F,
        W = [A.d.MODAL, A.d.MODAL_V2].includes(T) ? l._3J.SIZE_120 : l._3J.SIZE_80,
        K = o()(S.my, D),
        {
            avatarDecorationSrc: z,
            avatarSrc: q,
            eventHandlers: Z,
        } = (0, E.A)({
            userId: t.id,
            guildId: null != n ? n.guildId : a,
            size: W,
            animateOnHover: N,
        }),
        Q = (0, r.jsx)(R, {
            src: q,
            avatarDecoration: z,
            size: W,
            "aria-label": t.username,
            imageClassName: null != P ? S.Lw : void 0,
            status: U ? O.clD.UNKNOWN : Y,
            statusBackdropColor: k && !U ? (0, l.C$5)(x) : void 0,
            isMobile: B,
            isVR: H,
            statusTooltip: !0,
            statusTooltipDelay: b.In,
        });
    return null == P
        ? (0, r.jsx)(
              "div",
              w(C({}, Z), {
                  className: K,
                  children: Q,
              }),
          )
        : (0, r.jsx)(
              l.sqX,
              w(
                  C(
                      {
                          "aria-label": I.intl.string(I.t["+Xp3hq"]),
                      },
                      Z,
                  ),
                  {
                      className: o()(K, S.vk),
                      focusProps: {
                          ringClassName: S.Rg,
                      },
                      onClick: () => {
                          j({
                              action: "PRESS_VIEW_PROFILE",
                              analyticsLocations: M,
                          }),
                              null == P || P();
                      },
                      children: Q,
                  },
              ),
          );
}
