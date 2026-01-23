n.d(t, {
    A: () => v,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(688807),
    o = n(311907),
    s = n(435371),
    c = n(397927),
    u = n(442433),
    d = n(775602),
    f = n(915089),
    p = n(961350),
    g = n(183555),
    m = n(735321),
    b = n(384377),
    y = n(518477),
    O = n(985018),
    j = n(10241);

function x(e) {
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
}

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function v(e) {
    let { widget: t, className: n, buttonRef: l, additionalMenuItems: a } = e,
        o = (0, m.L)(t),
        s = (0, f.GV)();
    return (0, r.jsx)(A, {
        targetRef: l,
        widget: t,
        additionalMenuItems: a,
        children: (e) =>
            (0, r.jsx)(_, {
                children: (0, r.jsxs)(
                    c.DUT,
                    h(
                        x(
                            {
                                innerRef: l,
                                className: i()(j.x6, n),
                                "data-dnd-name": o,
                                "aria-label": O.intl.formatToPlainString(O.t.HWNJJN, {
                                    widgetTitle: o,
                                }),
                                "aria-describedby": s,
                                "aria-keyshortcuts": "Control+D, Meta+D",
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, r.jsx)(c.WP0, {
                                    size: "sm",
                                }),
                                (0, r.jsx)(c.AC4, {
                                    id: s,
                                    children: O.intl.string(O.t.bsuqFn),
                                }),
                            ],
                        },
                    ),
                ),
            }),
    });
}
let _ = (e) => {
        let { children: t } = e,
            n = (0, o.bG)([d.A], () => d.A.keyboardModeEnabled),
            { isDragging: l } = (0, a.V)((e) => ({
                isDragging: e.isDragging(),
            }));
        return (0, r.jsx)(s.m_, {
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                className: j.HE,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: O.intl.format(n ? O.t["zvln/l"] : O.t["7cdwhg"], {
                            emphasizeHook: (e) =>
                                (0, r.jsx)("strong", {
                                    children: e,
                                }),
                        }),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: O.intl.format(O.t["4e0rM4"], {
                            emphasizeHook: (e) =>
                                (0, r.jsx)("strong", {
                                    children: e,
                                }),
                        }),
                    }),
                ],
            }),
            position: "top",
            shouldShow: !0 !== l,
            ariaHidden: !0,
            children: t,
        });
    },
    A = (e) => {
        let { children: t, widget: l, targetRef: i, additionalMenuItems: a } = e,
            { trackUserProfileEditAction: o } = (0, g.NJ)(),
            s = (e) => {
                if (e.shiftKey) {
                    (0, m.qA)(l),
                        o(
                            x(
                                {
                                    action: "WIDGET_REMOVED",
                                },
                                l.getProfileEditAnalyticsOptions(),
                            ),
                        ),
                        (0, b.XA)(y.jM.WIDGET_REMOVED);
                    return;
                }
                (0, c.mMO)(
                    async () => {
                        let { default: e } = await n.e("53600").then(n.bind(n, 380035));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                h(x({}, t), {
                                    userId: p.default.getId(),
                                    widget: l,
                                    trackUserProfileEditAction: o,
                                }),
                            );
                    },
                    {
                        stackingBehavior: "stack",
                    },
                );
            };
        return (0, r.jsx)(c.YNO, {
            targetElementRef: i,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(c.W1t, {
                    "data-menu-mixed": !0,
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, u.Z_)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": O.intl.string(O.t.xpSHSk),
                    className: j.MK,
                    children: (0, r.jsxs)(c.rXV, {
                        children: [
                            a,
                            (0, r.jsx)(c.Drp, {
                                id: "remove-widget",
                                label: O.intl.string(O.t.Mm07Yc),
                                action: s,
                                color: "danger",
                                icon: c.ucK,
                            }),
                        ],
                    }),
                });
            },
            children: t,
        });
    };
