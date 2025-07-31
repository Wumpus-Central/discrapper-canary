r.d(t, { R: () => g });
var n = r(255367);
r(73800);
var l = r(120356),
    i = r.n(l),
    a = r(979554),
    o = r(481060),
    s = r(1585),
    c = r(125988),
    u = r(998502),
    d = r(388032),
    p = r(614490);
let f = u.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK,
    g = (e) => {
        var t, r;
        let { item: l, user: u, isHighlighted: g = !1, isPurchased: h = !1, avatarSize: b = o.EFr.SIZE_152, avatarPlaceholderSrc: m } = e,
            _ = (0, s.y9)(b),
            {
                avatarDecorationSrc: O,
                eventHandlers: v,
                avatarPlaceholderSrc: C
            } = (0, c.Z)({
                user: u,
                avatarDecorationOverride: (null == l ? void 0 : l.type) === a.Z.AVATAR_DECORATION ? l : void 0,
                size: _,
                onlyAnimateOnHover: !g
            }),
            E = d.intl.formatToPlainString(d.t.Do2lxM, { a11y_text: l.label });
        return (0, n.jsx)(
            f,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            ((n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n));
                        }));
                }
                return e;
            })({}, v)),
            (r = r =
                {
                    avatarDecoration: O,
                    src: g ? (null == u ? void 0 : u.getAvatarURL(void 0, 152, !0)) : null != m ? m : C,
                    imageClassName: g ? p.fadeInAvatarImg : void 0,
                    className: i()(p.avatar, { [p.avatarPurchased]: h && !g }),
                    size: b,
                    'aria-label': E
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
            t)
        );
    };
