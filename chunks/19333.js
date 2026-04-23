n.d(t, { A: () => N });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(688807),
    s = n(311907),
    o = n(990078),
    c = n(939249),
    d = n(772838),
    u = n(140735),
    m = n(834730),
    p = n(192308),
    h = n(265872),
    g = n(861672),
    x = n(477782),
    f = n(241326),
    E = n(442433),
    y = n(775602),
    T = n(915089),
    v = n(961350),
    A = n(183555),
    j = n(735321),
    I = n(606758),
    _ = n(518477),
    R = n(985018),
    b = n(184390);
function N(e) {
    let { widget: t, className: n, buttonRef: l, additionalMenuItems: r } = e,
        s = (0, j.L)(t),
        o = (0, T.GV)();
    return (0, i.jsx)(C, {
        targetRef: l,
        widget: t,
        additionalMenuItems: r,
        children: (e) =>
            (0, i.jsx)(D, {
                children: (0, i.jsxs)(c.D, {
                    innerRef: l,
                    className: a()(b.x6, n),
                    "data-dnd-name": s,
                    "aria-label": R.intl.formatToPlainString(R.t.HWNJJN, { widgetTitle: s }),
                    "aria-describedby": o,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(d.W, { size: "sm" }),
                        (0, i.jsx)(u.A, { id: o, children: R.intl.string(R.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
let D = (e) => {
        let { children: t } = e,
            n = (0, s.bG)([y.A], () => y.A.keyboardModeEnabled),
            { isDragging: l } = (0, r.V)((e) => ({ isDragging: e.isDragging() }));
        return (0, i.jsx)(o.m, {
            __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                className: b.HE,
                children: [
                    (0, i.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: R.intl.format(n ? R.t["zvln/l"] : R.t["7cdwhg"], {
                            emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                        }),
                    }),
                    (0, i.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: R.intl.format(R.t["4e0rM4"], {
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
    C = (e) => {
        let { children: t, widget: l, targetRef: a, additionalMenuItems: r } = e,
            { trackUserProfileEditAction: s } = (0, A.NJ)(),
            o = (e) => {
                if (e.shiftKey) {
                    (0, j.qA)(l),
                        s({ action: "WIDGET_REMOVED", ...l.getProfileEditAnalyticsOptions() }),
                        (0, I.XA)(_.jM.WIDGET_REMOVED);
                    return;
                }
                (0, p.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("87306"),
                            n.e("38114"),
                            n.e("10117"),
                            n.e("35843"),
                            n.e("39558"),
                            n.e("93815"),
                            n.e("45071"),
                            n.e("19783"),
                        ]).then(n.bind(n, 380035));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                userId: v.default.getId(),
                                widget: l,
                                trackUserProfileEditAction: s,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, i.jsx)(h.Y, {
            targetElementRef: a,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(g.W, {
                    "data-menu-migrated": !0,
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, E.Z_)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": R.intl.string(R.t.xpSHSk),
                    className: b.MK,
                    children: (0, i.jsxs)(x.rX, {
                        children: [
                            r,
                            (0, i.jsx)(x.Dr, {
                                id: "remove-widget",
                                label: R.intl.string(R.t.Mm07Yc),
                                action: o,
                                color: "danger",
                                icon: f.u,
                                leadingAccessory: { type: "icon", icon: f.u },
                            }),
                        ],
                    }),
                });
            },
            children: t,
        });
    };
