r.d(t, { R: () => h });
var n = r(255367);
r(73800);
var a = r(120356),
    l = r.n(a),
    i = r(979554),
    o = r(481060),
    s = r(1585),
    c = r(125988),
    u = r(998502),
    d = r(388032),
    p = r(614490);
let b = u.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK,
    h = (e) => {
        var t, r;
        let { item: a, user: u, isHighlighted: h = !1, isPurchased: f = !1, avatarSize: v = o.EFr.SIZE_152, avatarPlaceholderSrc: m } = e,
            _ = (0, s.y9)(v),
            {
                avatarDecorationSrc: O,
                eventHandlers: y,
                avatarPlaceholderSrc: g
            } = (0, c.Z)({
                user: u,
                avatarDecorationOverride: (null == a ? void 0 : a.type) === i.Z.AVATAR_DECORATION ? a : void 0,
                size: _,
                onlyAnimateOnHover: !h
            }),
            C = d.intl.formatToPlainString(d.t.Do2lxM, { a11y_text: a.label });
        return (0, n.jsx)(
            b,
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
            })({}, y)),
            (r = r =
                {
                    avatarDecoration: O,
                    src: h ? (null == u ? void 0 : u.getAvatarURL(void 0, 152, !0)) : null != m ? m : g,
                    imageClassName: h ? p.fadeInAvatarImg : void 0,
                    className: l()(p.avatar, { [p.avatarPurchased]: f && !h }),
                    size: v,
                    'aria-label': C
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
