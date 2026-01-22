r.d(t, {
    A: () => v,
});
var n = r(627968);
r(64700);
var i = r(575593),
    l = r(311907),
    s = r(397927),
    a = r(954921),
    o = r(278539),
    c = r(550111),
    u = r(242874),
    d = r(75825),
    p = r(331402),
    f = r(287809),
    h = r(674658),
    y = r(245068),
    b = r(704751);
let g = s._3J.SIZE_152,
    m = (0, a.Te)(g),
    O = (e) => {
        var t, r;
        let { item: i } = e,
            a = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
            {
                avatarDecorationSrc: c,
                avatarPlaceholderSrc: u,
                eventHandlers: d,
            } = (0, o.A)({
                user: a,
                avatarDecorationOverride: i,
                size: m,
            });
        return (0, n.jsx)("div", {
            className: b._P,
            children: (0, n.jsx)(
                s.euF,
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
                })({}, d)),
                (r = r =
                    {
                        "aria-label": i.label,
                        src: u,
                        avatarDecoration: c,
                        size: g,
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
            ),
        });
    },
    j = (e) => {
        let { item: t } = e;
        return (0, n.jsx)("div", {
            className: b.xC,
            children: (0, n.jsx)(p.A, {
                isHighlighted: !0,
                skuId: null == t ? void 0 : t.skuId,
            }),
        });
    },
    A = (e) => {
        let { item: t } = e;
        return (0, n.jsx)("div", {
            className: b.M4,
            children: (0, n.jsx)(c.A, {
                nameplate: t,
                className: b.qF,
                nameplatePreviewSize: "xlarge",
                isHighlighted: !0,
                showPlaceholderUser: !0,
            }),
        });
    },
    x = (e) => {
        let { product: t } = e;
        return (0, n.jsx)("div", {
            className: b.hT,
            children: (0, n.jsx)(y.X, {
                product: t,
                isHighlighted: !1,
            }),
        });
    },
    v = (e) => {
        let { giftCode: t } = e,
            { product: r, isFetching: l } = (0, h.q)(t.skuId, !0);
        if (l || null == r)
            return (0, n.jsx)("div", {
                className: b.dc,
                children: (0, n.jsx)(s.y$y, {}),
            });
        if (r.type === i.R.BUNDLE)
            return 0 === r.items.length
                ? null
                : (0, n.jsx)(x, {
                      product: r,
                  });
        let a = null == r ? void 0 : r.items[0];
        switch (null == a ? void 0 : a.type) {
            case i.R.AVATAR_DECORATION:
                return (0, n.jsx)(O, {
                    item: a,
                });
            case i.R.PROFILE_EFFECT:
                return (0, n.jsx)(j, {
                    item: a,
                });
            case i.R.NAMEPLATE:
                return (0, n.jsx)(A, {
                    item: a,
                });
            default:
                return null != t.giftStyle
                    ? (0, n.jsx)(d.A, {
                          defaultAnimationState: u.oA.ACTION,
                          idleAnimationState: u.oA.LOOP,
                          className: b.l$,
                          giftStyle: t.giftStyle,
                      })
                    : null;
        }
    };
