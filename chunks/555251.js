r.d(t, {
    default: () => p,
}),
    r(896048);
var n = r(627968),
    o = r(64700),
    i = r(732955),
    a = r(397927),
    c = r(656925),
    l = r(985018),
    s = r(856367);

function p(e) {
    var t, r;
    let { avatarId: p, storageHash: b, avatarDescription: f, onConfirmDelete: u, onClose: y } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, ["avatarId", "storageHash", "avatarDescription", "onConfirmDelete", "onClose"]),
        [j, d] = o.useState(!1),
        { avatarSrc: g, eventHandlers: m } = (0, c.A)({
            avatarId: p,
            storageHash: b,
            size: a._3J.SIZE_120,
        }),
        { onMouseEnter: h, onMouseLeave: v } = m,
        x = o.useCallback(async () => {
            d(!0);
            try {
                await u();
            } catch (e) {
            } finally {
                d(!1);
            }
            y();
        }, [u, y]);
    return (0, n.jsx)(
        i.aFV,
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
        })(
            {
                size: "sm",
                title: l.intl.string(l.t.rfaLTH),
                subtitle: l.intl.string(l.t.EKmxKc),
                actions: [
                    {
                        text: l.intl.string(l.t["ETE/oC"]),
                        variant: "secondary",
                        onClick: y,
                        disabled: j,
                    },
                    {
                        text: l.intl.string(l.t.Lh0uyy),
                        variant: "critical-primary",
                        onClick: x,
                        loading: j,
                    },
                ],
                onClose: y,
            },
            O,
        )),
        (r = r =
            {
                children: (0, n.jsxs)("div", {
                    className: s.jE,
                    children: [
                        (0, n.jsx)("div", {
                            onMouseEnter: h,
                            onMouseLeave: v,
                            className: s.H,
                            children: (0, n.jsx)("img", {
                                src: g,
                                alt: f,
                                className: s.my,
                            }),
                        }),
                        (0, n.jsx)(a.Text, {
                            variant: "eyebrow",
                            color: "text-feedback-positive",
                            children: l.intl.string(l.t["2Ld8DM"]),
                        }),
                        (0, n.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: l.intl.string(l.t.Oe0xqt),
                        }),
                    ],
                }),
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
}
