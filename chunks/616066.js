r.d(t, { R: () => f });
var n = r(951288);
r(647438);
var l = r(120356),
    a = r.n(l),
    i = r(979554),
    o = r(481060),
    s = r(1585),
    c = r(125988),
    u = r(998502),
    d = r(388032),
    p = r(407780);
let g = u.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK,
    f = (e) => {
        var t, r;
        let {
                item: l,
                user: u,
                isHighlighted: f = !1,
                isPurchased: b = !1,
                avatarSize: m = o.EFr.SIZE_152,
                avatarPlaceholderSrc: h,
            } = e,
            _ = (0, s.y9)(m),
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
        return (0, n.jsx)(
            g,
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
            })({}, O)),
            (r = r =
                {
                    avatarDecoration: v,
                    src: f ? (null == u ? void 0 : u.getAvatarURL(void 0, 152, !0)) : null != h ? h : C,
                    imageClassName: f ? p.fadeInAvatarImg : void 0,
                    className: a()(p.avatar, { [p.avatarPurchased]: b && !f }),
                    size: m,
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
