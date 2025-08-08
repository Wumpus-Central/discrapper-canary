n.d(t, { R: () => f });
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    i = n(979554),
    o = n(481060),
    s = n(1585),
    c = n(125988),
    u = n(998502),
    d = n(388032),
    p = n(614490);
let g = u.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK,
    f = (e) => {
        var t, n;
        let {
                item: l,
                user: u,
                isHighlighted: f = !1,
                isPurchased: b = !1,
                avatarSize: h = o.EFr.SIZE_152,
                avatarPlaceholderSrc: m,
            } = e,
            _ = (0, s.y9)(h),
            {
                avatarDecorationSrc: v,
                eventHandlers: O,
                avatarPlaceholderSrc: C,
            } = (0, c.Z)({
                user: u,
                avatarDecorationOverride: (null == l ? void 0 : l.type) === i.Z.AVATAR_DECORATION ? l : void 0,
                size: _,
                onlyAnimateOnHover: !f,
            }),
            E = d.intl.formatToPlainString(d.t.Do2lxM, { a11y_text: l.label });
        return (0, r.jsx)(
            g,
            ((t = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, O)),
            (n = n =
                {
                    avatarDecoration: v,
                    src: f ? (null == u ? void 0 : u.getAvatarURL(void 0, 152, !0)) : null != m ? m : C,
                    imageClassName: f ? p.fadeInAvatarImg : void 0,
                    className: a()(p.avatar, { [p.avatarPurchased]: b && !f }),
                    size: h,
                    "aria-label": E,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        );
    };
