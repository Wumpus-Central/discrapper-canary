r.d(t, { Z: () => x });
var n = r(951288),
    i = r(647438),
    l = r(323946),
    a = r(481060),
    o = r(239091),
    c = r(314897),
    s = r(785717),
    u = r(86419),
    d = r(872269),
    f = r(228168),
    g = r(388032),
    p = r(778364);
function b(e) {
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
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let O = (e) => {
        let { children: t } = e,
            { isDragging: r } = (0, l.f)((e) => ({ isDragging: e.isDragging() }));
        return (0, n.jsx)(a.ua7, {
            "aria-label": g.intl.string(g.t.HWNJJC),
            text: (0, n.jsx)(j, {}),
            position: "top",
            shouldShow: !0 !== r,
            children: t,
        });
    },
    j = () =>
        (0, n.jsxs)("div", {
            className: p.dragClickTooltipText,
            children: [
                (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: g.intl.format(g.t["7cdwho"], {
                        emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }),
                    }),
                }),
                (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: g.intl.format(g.t["4e0rMz"], {
                        emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }),
                    }),
                }),
            ],
        }),
    y = (e) => {
        let { children: t, widget: i, buttonRef: l } = e,
            { trackUserProfileAction: p } = (0, s.KZ)(),
            O = (e) => {
                if (e.shiftKey) {
                    (0, u.y8)(i.type), (0, d.L$)(f.qb.WIDGET_REMOVED);
                    return;
                }
                (0, a.ZDy)(
                    async () => {
                        let { default: e } = await r.e("70887").then(r.bind(r, 37668));
                        return (t) =>
                            (0, n.jsx)(
                                e,
                                m(b({}, t), {
                                    userId: c.default.getId(),
                                    widget: i,
                                    trackUserProfileAction: p,
                                }),
                            );
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, n.jsx)(a.yRy, {
            targetElementRef: l,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)(a.v2r, {
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, o.Zy)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": g.intl.string(g.t.xpSHSk),
                    children: (0, n.jsx)(a.kSQ, {
                        children: (0, n.jsx)(a.sNh, {
                            id: "remove-widget",
                            label: g.intl.string(g.t.Mm07YW),
                            action: O,
                            color: "danger",
                            icon: a.XHJ,
                        }),
                    }),
                });
            },
            children: t,
        });
    },
    x = (e) => {
        let { widget: t } = e,
            r = (0, i.useRef)(null);
        return (0, n.jsx)(O, {
            children: (e) =>
                (0, n.jsx)(y, {
                    buttonRef: r,
                    widget: t,
                    children: (t) =>
                        (0, n.jsx)(a.P3F, m(b({ innerRef: r }, e, t), { children: (0, n.jsx)(a.Vni, { size: "sm" }) })),
                }),
        });
    };
