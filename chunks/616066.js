r.d(t, { R: () => g });
var n = r(255367);
r(73800);
var l = r(120356),
    a = r.n(l),
    i = r(979554),
    o = r(481060),
    s = r(1585),
    c = r(125988),
    u = r(998502),
    d = r(388032),
    p = r(614490);
let f = u.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK,
    g = (e) => {
        var t, r;
        let {
                item: l,
                user: u,
                isHighlighted: g = !1,
                isPurchased: b = !1,
                avatarSize: h = o.EFr.SIZE_152,
                avatarPlaceholderSrc: m,
            } = e,
            _ = (0, s.y9)(h),
            {
                avatarDecorationSrc: v,
                eventHandlers: C,
                avatarPlaceholderSrc: O,
            } = (0, c.Z)({
                user: u,
                avatarDecorationOverride: (null == l ? void 0 : l.type) === i.Z.AVATAR_DECORATION ? l : void 0,
                size: _,
                onlyAnimateOnHover: !g,
            }),
            E = d.intl.formatToPlainString(d.t.Do2lxM, { a11y_text: l.label });
        return (0, n.jsx)(
            f,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, C)),
            (r = r =
                {
                    avatarDecoration: v,
                    src: g ? (null == u ? void 0 : u.getAvatarURL(void 0, 152, !0)) : null != m ? m : O,
                    imageClassName: g ? p.fadeInAvatarImg : void 0,
                    className: a()(p.avatar, { [p.avatarPurchased]: b && !g }),
                    size: h,
                    "aria-label": E,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t),
        );
    };
