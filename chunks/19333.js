n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(688807),
    s = n(311907),
    o = n(435371),
    d = n(397927),
    c = n(442433),
    u = n(775602),
    g = n(915089),
    m = n(961350),
    x = n(183555),
    f = n(735321),
    h = n(384377),
    p = n(518477),
    _ = n(985018),
    A = n(831947);
function I(e) {
    let { widget: t, className: n, buttonRef: l, additionalMenuItems: r } = e,
        s = (0, f.L)(t),
        o = (0, g.GV)();
    return (0, i.jsx)(j, {
        targetRef: l,
        widget: t,
        additionalMenuItems: r,
        children: (e) =>
            (0, i.jsx)(v, {
                children: (0, i.jsxs)(d.DUT, {
                    innerRef: l,
                    className: a()(A.x6, n),
                    "data-dnd-name": s,
                    "aria-label": _.intl.formatToPlainString(_.t.HWNJJN, { widgetTitle: s }),
                    "aria-describedby": o,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(d.WP0, { size: "sm" }),
                        (0, i.jsx)(d.AC4, { id: o, children: _.intl.string(_.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
let v = (e) => {
        let { children: t } = e,
            n = (0, s.bG)([u.A], () => u.A.keyboardModeEnabled),
            { isDragging: l } = (0, r.V)((e) => ({ isDragging: e.isDragging() }));
        return (0, i.jsx)(o.m_, {
            __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                className: A.HE,
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: _.intl.format(n ? _.t["zvln/l"] : _.t["7cdwhg"], {
                            emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                        }),
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: _.intl.format(_.t["4e0rM4"], {
                            emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
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
    j = (e) => {
        let { children: t, widget: l, targetRef: a, additionalMenuItems: r } = e,
            { trackUserProfileEditAction: s } = (0, x.NJ)(),
            o = (e) => {
                if (e.shiftKey) {
                    (0, f.qA)(l),
                        s({ action: "WIDGET_REMOVED", ...l.getProfileEditAnalyticsOptions() }),
                        (0, h.XA)(p.jM.WIDGET_REMOVED);
                    return;
                }
                (0, d.mMO)(
                    async () => {
                        let { default: e } = await n.e("53600").then(n.bind(n, 380035));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                userId: m.default.getId(),
                                widget: l,
                                trackUserProfileEditAction: s,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, i.jsx)(d.YNO, {
            targetElementRef: a,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(d.W1t, {
                    "data-menu-migrated": !0,
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, c.Z_)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": _.intl.string(_.t.xpSHSk),
                    className: A.MK,
                    children: (0, i.jsxs)(d.rXV, {
                        children: [
                            r,
                            (0, i.jsx)(d.Drp, {
                                id: "remove-widget",
                                label: _.intl.string(_.t.Mm07Yc),
                                action: o,
                                color: "danger",
                                icon: d.ucK,
                                leadingAccessory: { type: "icon", icon: d.ucK },
                            }),
                        ],
                    }),
                });
            },
            children: t,
        });
    };
