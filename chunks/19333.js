n.d(t, { A: () => j });
var l = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    r = n(688807),
    s = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(442433),
    u = n(775602),
    m = n(915089),
    h = n(961350),
    p = n(183555),
    g = n(735321),
    x = n(606758),
    f = n(518477),
    y = n(985018),
    v = n(183035);
function j(e) {
    let { widget: t, className: n, buttonRef: i, additionalMenuItems: r } = e,
        s = (0, g.L)(t),
        o = (0, m.GV)();
    return (0, l.jsx)(E, {
        targetRef: i,
        widget: t,
        additionalMenuItems: r,
        children: (e) =>
            (0, l.jsx)(T, {
                children: (0, l.jsxs)(c.DUT, {
                    innerRef: i,
                    className: a()(v.x6, n),
                    "data-dnd-name": s,
                    "aria-label": y.intl.formatToPlainString(y.t.HWNJJN, { widgetTitle: s }),
                    "aria-describedby": o,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, l.jsx)(c.WP0, { size: "sm" }),
                        (0, l.jsx)(c.AC4, { id: o, children: y.intl.string(y.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
let T = (e) => {
        let { children: t } = e,
            n = (0, s.bG)([u.A], () => u.A.keyboardModeEnabled),
            { isDragging: i } = (0, r.V)((e) => ({ isDragging: e.isDragging() }));
        return (0, l.jsx)(o.m_, {
            __unsupportedReactNodeAsText: (0, l.jsxs)("div", {
                className: v.HE,
                children: [
                    (0, l.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: y.intl.format(n ? y.t["zvln/l"] : y.t["7cdwhg"], {
                            emphasizeHook: (e) => (0, l.jsx)("strong", { children: e }),
                        }),
                    }),
                    (0, l.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: y.intl.format(y.t["4e0rM4"], {
                            emphasizeHook: (e) => (0, l.jsx)("strong", { children: e }),
                        }),
                    }),
                ],
            }),
            position: "top",
            shouldShow: !0 !== i,
            ariaHidden: !0,
            children: t,
        });
    },
    E = (e) => {
        let { children: t, widget: i, targetRef: a, additionalMenuItems: r } = e,
            { trackUserProfileEditAction: s } = (0, p.NJ)(),
            o = (e) => {
                if (e.shiftKey) {
                    (0, g.qA)(i),
                        s({ action: "WIDGET_REMOVED", ...i.getProfileEditAnalyticsOptions() }),
                        (0, x.XA)(f.jM.WIDGET_REMOVED);
                    return;
                }
                (0, c.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("95320"),
                            n.e("10117"),
                            n.e("62371"),
                            n.e("96759"),
                            n.e("35526"),
                        ]).then(n.bind(n, 380035));
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                userId: h.default.getId(),
                                widget: i,
                                trackUserProfileEditAction: s,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, l.jsx)(c.YNO, {
            targetElementRef: a,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(c.W1t, {
                    "data-menu-migrated": !0,
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, d.Z_)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": y.intl.string(y.t.xpSHSk),
                    className: v.MK,
                    children: (0, l.jsxs)(c.rXV, {
                        children: [
                            r,
                            (0, l.jsx)(c.Drp, {
                                id: "remove-widget",
                                label: y.intl.string(y.t.Mm07Yc),
                                action: o,
                                color: "danger",
                                icon: c.ucK,
                                leadingAccessory: { type: "icon", icon: c.ucK },
                            }),
                        ],
                    }),
                });
            },
            children: t,
        });
    };
