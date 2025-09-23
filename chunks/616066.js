r.d(t, { R: () => b });
var n = r(951288);
r(647438);
var l = r(120356),
    i = r.n(l),
    a = r(979554),
    o = r(481060),
    s = r(1585),
    c = r(125988),
    u = r(998502),
    d = r(388032),
    p = r(203200);
let f = u.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK,
    b = (e) => {
        var t, r;
        let {
                item: l,
                user: u,
                isHighlighted: b = !1,
                isPurchased: h = !1,
                avatarSize: g = o.EFr.SIZE_152,
                avatarPlaceholderSrc: O,
            } = e,
            v = (0, s.y9)(g),
            {
                avatarDecorationSrc: y,
                eventHandlers: m,
                avatarPlaceholderSrc: j,
            } = (0, c.Z)({
                user: u,
                avatarDecorationOverride: (null == l ? void 0 : l.type) === a.Z.AVATAR_DECORATION ? l : void 0,
                size: v,
                onlyAnimateOnHover: !b,
            }),
            P = d.intl.formatToPlainString(d.t.Do2lxM, { a11y_text: l.label });
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
            })({}, m)),
            (r = r =
                {
                    avatarDecoration: y,
                    src: b ? (null == u ? void 0 : u.getAvatarURL(void 0, 152, !0)) : null != O ? O : j,
                    imageClassName: b ? p.fadeInAvatarImg : void 0,
                    className: i()(p.avatar, { [p.avatarPurchased]: h && !b }),
                    size: g,
                    "aria-label": P,
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
