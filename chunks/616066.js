n.d(t, { R: () => h });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(979554),
    o = n(481060),
    s = n(1585),
    c = n(125988),
    u = n(998502),
    d = n(388032),
    p = n(407780);
let f = u.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK,
    h = (e) => {
        var t, n;
        let {
                item: i,
                user: u,
                isHighlighted: h = !1,
                isPurchased: g = !1,
                avatarSize: m = o.EFr.SIZE_152,
                avatarPlaceholderSrc: b,
            } = e,
            _ = (0, s.y9)(m),
            {
                avatarDecorationSrc: O,
                eventHandlers: E,
                avatarPlaceholderSrc: y,
            } = (0, c.Z)({
                user: u,
                avatarDecorationOverride: (null == i ? void 0 : i.type) === a.Z.AVATAR_DECORATION ? i : void 0,
                size: _,
                onlyAnimateOnHoverOrFocus: !h,
            }),
            v = d.intl.formatToPlainString(d.t.Do2lxM, { a11y_text: i.label });
        return (0, r.jsx)(
            f,
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
            })({}, E)),
            (n = n =
                {
                    avatarDecoration: O,
                    src: h ? (null == u ? void 0 : u.getAvatarURL(void 0, 152, !0)) : null != b ? b : y,
                    imageClassName: h ? p.fadeInAvatarImg : void 0,
                    className: l()(p.avatar, { [p.avatarPurchased]: g && !h }),
                    size: m,
                    "aria-label": v,
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
