n.d(t, { A: () => X });
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
    p = n(686246),
    I = n(17928),
    j = n(939249),
    E = n(772838),
    A = n(140735),
    C = n(834730),
    v = n(866665),
    b = n(192308),
    y = n(922016),
    R = n(980707),
    N = n(477782),
    P = n(241326),
    D = n(442433),
    T = n(775602),
    k = n(280450),
    w = n(384377),
    _ = n(518477),
    S = n(375708),
    W = n(347727);
function L(e) {
    let { widget: t, className: n, buttonRef: r, additionalMenuItems: l } = e,
        s = (0, d.L)(t),
        c = (0, o.GV)();
    return (0, i.jsx)(O, {
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
function O(e) {
    let { children: t, widget: r, targetRef: l, additionalMenuItems: a } = e,
        { trackUserProfileEditAction: s } = (0, c.NJ)();
    function o(e) {
        if (e.shiftKey) {
            (0, d.qA)(r),
                s({ action: "WIDGET_REMOVED", ...r.getProfileEditAnalyticsOptions() }),
                (0, w.XA)(_.jM.WIDGET_REMOVED);
            return;
        }
        (0, b.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("148758"),
                    n.e("36026"),
                    n.e("648044"),
                    n.e("429249"),
                    n.e("244941"),
                    n.e("598263"),
                    n.e("294387"),
                    n.e("656123"),
                    n.e("10181"),
                    n.e("829011"),
                    n.e("19430"),
                    n.e("496404"),
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
                    n.e("102886"),
                    n.e("595990"),
                    n.e("476945"),
                    n.e("727551"),
                    n.e("491760"),
                    n.e("467506"),
                    n.e("307575"),
                    n.e("572963"),
                    n.e("554241"),
                    n.e("724303"),
                    n.e("521930"),
                    n.e("892471"),
                    n.e("36877"),
                    n.e("627323"),
                    n.e("946430"),
                    n.e("280098"),
                    n.e("741786"),
                    n.e("553683"),
                    n.e("55266"),
                    n.e("694138"),
                    n.e("723934"),
                    n.e("571294"),
                    n.e("996574"),
                    n.e("186262"),
                    n.e("227752"),
                    n.e("958262"),
                    n.e("347430"),
                    n.e("494879"),
                    n.e("182816"),
                    n.e("819119"),
                    n.e("247339"),
                    n.e("75567"),
                    n.e("274857"),
                    n.e("736637"),
                    n.e("746623"),
                    n.e("631951"),
                    n.e("78"),
                    n.e("124981"),
                    n.e("915389"),
                    n.e("787320"),
                    n.e("509856"),
                    n.e("655752"),
                    n.e("353600"),
                ]).then(n.bind(n, 380035));
                return (t) =>
                    (0, i.jsx)(e, { ...t, userId: k.default.getId(), widget: r, trackUserProfileEditAction: s });
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
            return (0, i.jsx)(R.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, D.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": S.intl.string(S.t.xpSHSk),
                className: W.MK,
                children: (0, i.jsxs)(N.rX, {
                    children: [
                        a,
                        (0, i.jsx)(N.Dr, {
                            id: "remove-widget",
                            label: S.intl.string(S.t.Mm07Yc),
                            action: o,
                            color: "danger",
                            icon: P.TrashIcon,
                            leadingAccessory: { type: "icon", icon: P.TrashIcon },
                        }),
                    ],
                }),
            });
        },
        children: t,
    });
}
var F = n(297264),
    M = n(138134),
    U = n(365199),
    z = n(928658),
    B = n(216473);
function H(e) {
    let { widget: t, userId: n, className: l, menuItems: s } = e,
        o = r.useRef(null);
    function c() {
        (0, z.GJ)(n, t);
    }
    return (0, i.jsx)(y.Y, {
        targetElementRef: o,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(R.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, D.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": S.intl.string(S.t.xpSHSk),
                children: (0, i.jsxs)(N.rX, {
                    children: [
                        s,
                        (0, i.jsx)(
                            N.Dr,
                            {
                                id: "flag-widget",
                                label: S.intl.string(S.t.D4GvHE),
                                action: c,
                                color: "danger",
                                icon: M.FlagIcon,
                                leadingAccessory: { type: "icon", icon: M.FlagIcon },
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
                className: a()(B.x, l),
                children: (0, i.jsx)(U.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
            }),
    });
}
var K = n(948939);
function Y(e) {
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
        className: a()(K.U1, d),
        children: [
            (0, i.jsxs)("div", {
                className: K.DD,
                children: [
                    (0, i.jsx)(F.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: s }),
                    null != o && (0, i.jsx)(C.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
            (0, i.jsx)(q, { widget: r, actionButtons: c, disabledInteraction: l, userId: t, additionalMenuItems: u }),
        ],
    });
}
function q(e) {
    let { widget: t, actionButtons: n, disabledInteraction: r, userId: l, additionalMenuItems: a } = e,
        s = (0, I.bG)([k.default], () => k.default.getId());
    return r
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: K.o1, children: n })
          : s !== l
            ? (0, i.jsx)("div", {
                  className: K.o1,
                  children: (0, i.jsx)(H, {
                      widget: t,
                      userId: l,
                      className: K.AQ,
                      menuItems: null != a ? [a] : void 0,
                  }),
              })
            : null;
}
var V = n(192),
    Z = n(223503);
function J(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: l, children: s, getWidth: c } = e,
        u = r.useRef(null),
        g = r.useRef(null),
        { registerManageWidgetButtonRef: f, manageFocusOnReorder: h } = (0, V.r)();
    r.useLayoutEffect(() => {
        let e = f(n.type);
        return e(u.current), () => e(null);
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
        className: a()(Z.wX, { [Z.A]: E, [Z.Ze]: A, [Z.Id]: p }),
        "aria-label": S.intl.formatToPlainString(S.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(L, { buttonRef: u, widget: n, className: Z.vn, additionalMenuItems: l }), s],
    });
}
function X(e) {
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
        R = r.useRef(null),
        N = (0, x.g)(),
        { trackUserProfileAction: P } = (0, c.NJ)(),
        D = (function (e) {
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
        })({ widget: n, onAction: P }),
        T = N === n.type;
    (0, u.A)(D, T);
    let k = d && null != I && !m;
    function w() {
        return (0, i.jsxs)("div", {
            ref: R,
            className: a()(Z.kL, p),
            children: [
                (0, i.jsx)(Y, {
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
        ref: D,
        "aria-labelledby": y,
        children: k
            ? (0, i.jsx)(J, {
                  index: I ?? 0,
                  widget: n,
                  getWidth: () => R.current?.offsetWidth,
                  additionalManageWidgetMenuItems: b,
                  children: w(),
              })
            : w(),
    });
}
