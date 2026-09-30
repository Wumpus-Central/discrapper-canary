n.d(t, { A: () => ee });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    s = n(707554),
    o = n(915089),
    c = n(183555),
    d = n(735321),
    u = n(94343),
    g = n(172218),
    f = n(704824);
n(456647);
var h = n(633075),
    m = n(451395),
    x = n(716804),
    p = n(675816),
    I = n(17928),
    j = n(939249),
    E = n(772838),
    A = n(140735),
    C = n(834730),
    v = n(866665),
    b = n(192308),
    y = n(922016),
    N = n(980707),
    k = n(477782),
    D = n(241326),
    R = n(442433),
    T = n(775602),
    _ = n(280450),
    P = n(384377),
    w = n(518477),
    S = n(375708),
    W = n(347727);
function O(e) {
    let { widget: t, className: n, buttonRef: r, additionalMenuItems: l } = e,
        s = (0, d.L)(t),
        c = (0, o.GV)();
    return (0, i.jsx)(L, {
        targetRef: r,
        widget: t,
        additionalMenuItems: l,
        children: (e) =>
            (0, i.jsx)(G, {
                children: (0, i.jsxs)(j.D, {
                    innerRef: r,
                    className: a()(W.x6, n),
                    "data-dnd-name": s,
                    "aria-label": S.intl.formatToPlainString(S.t.HWNJJN, { widgetTitle: s }),
                    "aria-describedby": c,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(E.W, { size: "sm" }),
                        (0, i.jsx)(A.A, { id: c, children: S.intl.string(S.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
function G(e) {
    let { children: t } = e,
        n = (0, I.bG)([T.Ay], () => T.Ay.keyboardModeEnabled),
        { isDragging: r } = (0, p.V)((e) => ({ isDragging: e.isDragging() }));
    return (0, i.jsx)(v.m, {
        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
            className: W.HE,
            children: [
                (0, i.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: S.intl.format(n ? S.t["zvln/l"] : S.t["7cdwhg"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
                (0, i.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: S.intl.format(S.t["4e0rM4"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
            ],
        }),
        position: "top",
        shouldShow: !0 !== r,
        ariaHidden: !0,
        children: t,
    });
}
function L(e) {
    let { children: t, widget: r, targetRef: l, additionalMenuItems: a } = e,
        { trackUserProfileEditAction: s } = (0, c.NJ)();
    function o(e) {
        if (e.shiftKey) {
            ((0, d.qA)(r),
                s({ action: "WIDGET_REMOVED", ...r.getProfileEditAnalyticsOptions() }),
                (0, P.XA)(w.jM.WIDGET_REMOVED));
            return;
        }
        (0, b.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("148758"),
                    n.e("36026"),
                    n.e("249918"),
                    n.e("269614"),
                    n.e("479234"),
                    n.e("244941"),
                    n.e("598263"),
                    n.e("294387"),
                    n.e("788938"),
                    n.e("104864"),
                    n.e("119766"),
                    n.e("887789"),
                    n.e("589154"),
                    n.e("377109"),
                    n.e("74886"),
                    n.e("713273"),
                    n.e("376053"),
                    n.e("322497"),
                    n.e("433400"),
                    n.e("250440"),
                    n.e("753888"),
                    n.e("74853"),
                    n.e("546813"),
                    n.e("32776"),
                    n.e("890516"),
                    n.e("290608"),
                    n.e("814431"),
                    n.e("759086"),
                    n.e("763214"),
                    n.e("972006"),
                    n.e("491760"),
                    n.e("467506"),
                    n.e("572963"),
                    n.e("307575"),
                    n.e("554241"),
                    n.e("724303"),
                    n.e("521930"),
                    n.e("979483"),
                    n.e("93461"),
                    n.e("36877"),
                    n.e("627323"),
                    n.e("604172"),
                    n.e("134504"),
                    n.e("280098"),
                    n.e("908608"),
                    n.e("741786"),
                    n.e("553683"),
                    n.e("55266"),
                    n.e("694138"),
                    n.e("723934"),
                    n.e("571294"),
                    n.e("186262"),
                    n.e("227752"),
                    n.e("958262"),
                    n.e("967293"),
                    n.e("247339"),
                    n.e("347430"),
                    n.e("342090"),
                    n.e("736637"),
                    n.e("182816"),
                    n.e("819119"),
                    n.e("746623"),
                    n.e("622964"),
                    n.e("274857"),
                    n.e("415809"),
                    n.e("787320"),
                    n.e("631951"),
                    n.e("78"),
                    n.e("124981"),
                    n.e("392310"),
                    n.e("422420"),
                    n.e("644451"),
                    n.e("353600"),
                ]).then(n.bind(n, 380035));
                return (t) =>
                    (0, i.jsx)(e, { ...t, userId: _.default.getId(), widget: r, trackUserProfileEditAction: s });
            },
            { stackingBehavior: "stack" },
        );
    }
    return (0, i.jsx)(y.Y, {
        targetElementRef: l,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(N.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    ((0, R.Z_)(), t());
                },
                onSelect: () => {},
                "aria-label": S.intl.string(S.t.xpSHSk),
                className: W.MK,
                children: (0, i.jsxs)(k.rX, {
                    children: [
                        a,
                        (0, i.jsx)(k.Dr, {
                            id: "remove-widget",
                            label: S.intl.string(S.t.Mm07Yc),
                            action: o,
                            color: "danger",
                            icon: D.TrashIcon,
                            leadingAccessory: { type: "icon", icon: D.TrashIcon },
                        }),
                    ],
                }),
            });
        },
        children: t,
    });
}
var M = n(297264),
    U = n(138134),
    F = n(365199),
    z = n(627363),
    B = n(587895),
    H = n(928658);
function K(e, t, n) {
    n?.vibegrationsProjectId != null
        ? (0, H.r3)({ application: n, entrypoint: "user_profile_widget" })
        : (0, H.GJ)(e, t);
}
var Y = n(216473);
function q(e) {
    let { widget: t, userId: n, className: l, menuItems: s } = e,
        o = r.useRef(null);
    function c() {
        !(function (e, t) {
            if (!(t instanceof h.R)) return (0, H.GJ)(e, t);
            let { applicationId: n } = t;
            B.A.isHydrated(n)
                ? K(e, t, B.A.getApplication(n))
                : z.Ay.fetchApplication(n)
                      .then(() => K(e, t, B.A.getApplication(n)))
                      .catch(() => (0, H.GJ)(e, t));
        })(n, t);
    }
    return (0, i.jsx)(y.Y, {
        targetElementRef: o,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(N.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    ((0, R.Z_)(), t());
                },
                onSelect: () => {},
                "aria-label": S.intl.string(S.t.xpSHSk),
                children: (0, i.jsxs)(k.rX, {
                    children: [
                        s,
                        (0, i.jsx)(
                            k.Dr,
                            {
                                id: "flag-widget",
                                label: S.intl.string(S.t.D4GvHE),
                                action: c,
                                color: "danger",
                                icon: U.FlagIcon,
                                leadingAccessory: { type: "icon", icon: U.FlagIcon },
                            },
                            "flag-widget",
                        ),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(j.D, {
                ...e,
                innerRef: o,
                "aria-label": S.intl.string(S.t.xpSHSk),
                className: a()(Y.x, l),
                children: (0, i.jsx)(F.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
            }),
    });
}
var J = n(948939);
function V(e) {
    let {
        userId: t,
        headingId: n,
        widget: r,
        disableInteraction: l = !1,
        title: s,
        subtitle: o,
        actionButtons: c = [],
        className: d,
        additionalMenuItems: u,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(J.U1, d),
        children: [
            (0, i.jsxs)("div", {
                className: J.DD,
                children: [
                    (0, i.jsx)(M.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: s }),
                    null != o && (0, i.jsx)(C.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
            (0, i.jsx)(Z, { widget: r, actionButtons: c, disabledInteraction: l, userId: t, additionalMenuItems: u }),
        ],
    });
}
function Z(e) {
    let { widget: t, actionButtons: n, disabledInteraction: r, userId: l, additionalMenuItems: a } = e,
        s = (0, I.bG)([_.default], () => _.default.getId());
    return r
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: J.o1, children: n })
          : s !== l
            ? (0, i.jsx)("div", {
                  className: J.o1,
                  children: (0, i.jsx)(q, {
                      widget: t,
                      userId: l,
                      className: J.AQ,
                      menuItems: null != a ? [a] : void 0,
                  }),
              })
            : null;
}
var X = n(192),
    Q = n(223503);
function $(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: l, children: s, getWidth: c } = e,
        u = r.useRef(null),
        g = r.useRef(null),
        { registerManageWidgetButtonRef: f, manageFocusOnReorder: h } = (0, X.r)();
    r.useLayoutEffect(() => {
        let e = f(n.type);
        return (e(u.current), () => e(null));
    }, [f, n.type]);
    let x = r.useMemo(() => n.id ?? (0, o.Ld)(), [n.id]),
        { isDragging: p, dragSourcePosition: I } = (0, m.gY)({
            dragRef: u,
            dropRef: g,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: x,
            itemPreviewProps: { widget: n, getWidth: c },
            onReorder: d.R_,
            onEnd: () => h(n.type),
        }),
        j = null != I,
        E = j && t < I,
        A = j && t > I;
    return (0, i.jsxs)("div", {
        ref: g,
        className: a()(Q.wX, { [Q.A]: E, [Q.Ze]: A, [Q.Id]: p }),
        "aria-label": S.intl.formatToPlainString(S.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(O, { buttonRef: u, widget: n, className: Q.vn, additionalMenuItems: l }), s],
    });
}
function ee(e) {
    let {
            userId: t,
            widget: n,
            children: l,
            allowEditing: d,
            disableInteraction: m,
            className: p,
            index: I,
            trailingContent: j,
            headerTitle: E,
            headerSubtitle: A,
            headerActionButtons: C,
            headerClassName: v,
            additionalManageWidgetMenuItems: b,
        } = e,
        y = (0, o.GV)(),
        N = r.useRef(null),
        k = (0, x.g)(),
        { trackUserProfileAction: D } = (0, c.NJ)(),
        R = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, l] = (0, r.useState)(!1),
                a = t instanceof h.R ? t.applicationId : null,
                { fetched: s } = (0, f.U)(a),
                o = (0, r.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), l(!0));
                    },
                    [n, t],
                );
            return (0, g.K)(o, void 0, !i && (null == a || s));
        })({ widget: n, onAction: D }),
        T = k === n.type;
    (0, u.A)(R, T);
    let _ = d && null != I && !m;
    function P() {
        return (0, i.jsxs)("div", {
            ref: N,
            className: a()(Q.kL, p),
            children: [
                (0, i.jsx)(V, {
                    userId: t,
                    headingId: y,
                    title: E,
                    subtitle: A,
                    actionButtons: C,
                    widget: n,
                    disableInteraction: m,
                    className: v,
                    additionalMenuItems: b,
                }),
                (0, i.jsxs)(s.F, { children: [l, j] }),
            ],
        });
    }
    return (0, i.jsx)("section", {
        ref: R,
        "aria-labelledby": y,
        children: _
            ? (0, i.jsx)($, {
                  index: I ?? 0,
                  widget: n,
                  getWidth: () => N.current?.offsetWidth,
                  additionalManageWidgetMenuItems: b,
                  children: P(),
              })
            : P(),
    });
}
