n.d(t, { A: () => X });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(707554),
    o = n(915089),
    d = n(183555),
    c = n(735321),
    u = n(94343),
    g = n(172218),
    x = n(704824);
n(456647);
var h = n(633075),
    m = n(451395),
    f = n(716804),
    j = n(688807),
    p = n(17928),
    I = n(990078),
    E = n(939249),
    N = n(772838),
    v = n(140735),
    C = n(834730),
    b = n(192308),
    D = n(922016),
    A = n(980707),
    P = n(477782),
    _ = n(241326),
    T = n(442433),
    w = n(775602),
    R = n(280450),
    S = n(384377),
    y = n(518477),
    W = n(375708),
    k = n(100294);
function G(e) {
    let { widget: t, className: n, buttonRef: l, additionalMenuItems: s } = e,
        r = (0, c.L)(t),
        d = (0, o.GV)();
    return (0, i.jsx)(L, {
        targetRef: l,
        widget: t,
        additionalMenuItems: s,
        children: (e) =>
            (0, i.jsx)(O, {
                children: (0, i.jsxs)(E.D, {
                    innerRef: l,
                    className: a()(k.x6, n),
                    "data-dnd-name": r,
                    "aria-label": W.intl.formatToPlainString(W.t.HWNJJN, { widgetTitle: r }),
                    "aria-describedby": d,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(N.W, { size: "sm" }),
                        (0, i.jsx)(v.A, { id: d, children: W.intl.string(W.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
function O(e) {
    let { children: t } = e,
        n = (0, p.bG)([w.Ay], () => w.Ay.keyboardModeEnabled),
        { isDragging: l } = (0, j.V)((e) => ({ isDragging: e.isDragging() }));
    return (0, i.jsx)(I.m, {
        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
            className: k.HE,
            children: [
                (0, i.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: W.intl.format(n ? W.t["zvln/l"] : W.t["7cdwhg"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
                (0, i.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: W.intl.format(W.t["4e0rM4"], {
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
}
function L(e) {
    let { children: t, widget: l, targetRef: s, additionalMenuItems: a } = e,
        { trackUserProfileEditAction: r } = (0, d.NJ)();
    function o(e) {
        if (e.shiftKey) {
            (0, c.qA)(l),
                r({ action: "WIDGET_REMOVED", ...l.getProfileEditAnalyticsOptions() }),
                (0, S.XA)(y.jM.WIDGET_REMOVED);
            return;
        }
        (0, b.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("71925"),
                    n.e("56726"),
                    n.e("87549"),
                    n.e("5118"),
                    n.e("26610"),
                    n.e("32911"),
                    n.e("64779"),
                    n.e("1216"),
                    n.e("57865"),
                    n.e("22749"),
                    n.e("41443"),
                    n.e("76055"),
                    n.e("60975"),
                    n.e("51522"),
                    n.e("41725"),
                    n.e("90907"),
                    n.e("40821"),
                    n.e("163"),
                    n.e("33071"),
                    n.e("82611"),
                    n.e("84345"),
                    n.e("27903"),
                    n.e("73361"),
                    n.e("36877"),
                    n.e("72963"),
                    n.e("7575"),
                    n.e("24303"),
                    n.e("54241"),
                    n.e("21930"),
                    n.e("41786"),
                    n.e("22067"),
                    n.e("55266"),
                    n.e("94138"),
                    n.e("96574"),
                    n.e("86262"),
                    n.e("30878"),
                    n.e("58262"),
                    n.e("55895"),
                    n.e("48407"),
                    n.e("20491"),
                    n.e("19119"),
                    n.e("87791"),
                    n.e("78377"),
                    n.e("53683"),
                    n.e("47339"),
                    n.e("9598"),
                    n.e("74857"),
                    n.e("92992"),
                    n.e("36637"),
                    n.e("84050"),
                    n.e("78"),
                    n.e("90590"),
                    n.e("89543"),
                    n.e("53600"),
                ]).then(n.bind(n, 380035));
                return (t) =>
                    (0, i.jsx)(e, { ...t, userId: R.default.getId(), widget: l, trackUserProfileEditAction: r });
            },
            { stackingBehavior: "stack" },
        );
    }
    return (0, i.jsx)(D.Y, {
        targetElementRef: s,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(A.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, T.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": W.intl.string(W.t.xpSHSk),
                className: k.MK,
                children: (0, i.jsxs)(P.rX, {
                    children: [
                        a,
                        (0, i.jsx)(P.Dr, {
                            id: "remove-widget",
                            label: W.intl.string(W.t.Mm07Yc),
                            action: o,
                            color: "danger",
                            icon: _.u,
                            leadingAccessory: { type: "icon", icon: _.u },
                        }),
                    ],
                }),
            });
        },
        children: t,
    });
}
var M = n(534514),
    U = n(138134),
    z = n(365199),
    H = n(928658),
    K = n(270442);
function Y(e) {
    let { widget: t, userId: n, className: s, menuItems: r } = e,
        o = l.useRef(null);
    function d() {
        (0, H.GJ)(n, t);
    }
    return (0, i.jsx)(D.Y, {
        targetElementRef: o,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(A.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, T.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": W.intl.string(W.t.xpSHSk),
                children: (0, i.jsxs)(P.rX, {
                    children: [
                        r,
                        (0, i.jsx)(
                            P.Dr,
                            {
                                id: "flag-widget",
                                label: W.intl.string(W.t.D4GvHE),
                                action: d,
                                color: "danger",
                                icon: U.i,
                                leadingAccessory: { type: "icon", icon: U.i },
                            },
                            "flag-widget",
                        ),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(E.D, {
                ...e,
                innerRef: o,
                "aria-label": W.intl.string(W.t.xpSHSk),
                className: a()(K.x, s),
                children: (0, i.jsx)(z.j, { size: "sm", color: "currentColor" }),
            }),
    });
}
var B = n(649928);
function F(e) {
    let {
        userId: t,
        headingId: n,
        widget: l,
        disableInteraction: s = !1,
        title: r,
        subtitle: o,
        actionButtons: d = [],
        className: c,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(B.U1, c),
        children: [
            (0, i.jsxs)("div", {
                className: B.DD,
                children: [
                    (0, i.jsx)(M.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: r }),
                    null != o && (0, i.jsx)(C.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
            (0, i.jsx)(q, { widget: l, actionButtons: d, disabledInteraction: s, userId: t }),
        ],
    });
}
function q(e) {
    let { widget: t, actionButtons: n, disabledInteraction: l, userId: s } = e,
        a = (0, p.bG)([R.default], () => R.default.getId());
    return l
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: B.o1, children: n })
          : a !== s
            ? (0, i.jsx)("div", { className: B.o1, children: (0, i.jsx)(Y, { widget: t, userId: s, className: B.AQ }) })
            : null;
}
var J = n(192),
    V = n(381610);
function Z(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: s, children: r, getWidth: d } = e,
        u = l.useRef(null),
        g = l.useRef(null),
        { registerManageWidgetButtonRef: x, manageFocusOnReorder: h } = (0, J.r)();
    l.useLayoutEffect(() => {
        let e = x(n.type);
        return e(u.current), () => e(null);
    }, [x, n.type]);
    let f = l.useMemo(() => n.id ?? (0, o.Ld)(), [n.id]),
        { isDragging: j, dragSourcePosition: p } = (0, m.gY)({
            dragRef: u,
            dropRef: g,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: f,
            itemPreviewProps: { widget: n, getWidth: d },
            onReorder: c.R_,
            onEnd: () => h(n.type),
        }),
        I = null != p,
        E = I && t < p,
        N = I && t > p;
    return (0, i.jsxs)("div", {
        ref: g,
        className: a()(V.wX, { [V.A]: E, [V.Ze]: N, [V.Id]: j }),
        "aria-label": W.intl.formatToPlainString(W.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(G, { buttonRef: u, widget: n, className: V.vn, additionalMenuItems: s }), r],
    });
}
function X(e) {
    let {
            userId: t,
            widget: n,
            children: s,
            allowEditing: c,
            disableInteraction: m,
            className: j,
            index: p,
            trailingContent: I,
            headerTitle: E,
            headerSubtitle: N,
            headerActionButtons: v,
            headerClassName: C,
            additionalManageWidgetMenuItems: b,
        } = e,
        D = (0, o.GV)(),
        A = l.useRef(null),
        P = (0, f.g)(),
        { trackUserProfileAction: _ } = (0, d.NJ)(),
        T = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, s] = (0, l.useState)(!1),
                a = t instanceof h.R ? t.applicationId : null,
                { fetched: r } = (0, x.U)(a),
                o = (0, l.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), s(!0));
                    },
                    [n, t],
                );
            return (0, g.K)(o, void 0, !i && (null == a || r));
        })({ widget: n, onAction: _ }),
        w = P === n.type;
    (0, u.A)(T, w);
    let R = c && null != p && !m;
    function S() {
        return (0, i.jsxs)("div", {
            ref: A,
            className: a()(V.kL, j),
            children: [
                (0, i.jsx)(F, {
                    userId: t,
                    headingId: D,
                    title: E,
                    subtitle: N,
                    actionButtons: v,
                    widget: n,
                    disableInteraction: m,
                    className: C,
                }),
                (0, i.jsxs)(r.F, { children: [s, I] }),
            ],
        });
    }
    return (0, i.jsx)("section", {
        ref: T,
        "aria-labelledby": D,
        children: R
            ? (0, i.jsx)(Z, {
                  index: p ?? 0,
                  widget: n,
                  getWidth: () => A.current?.offsetWidth,
                  additionalManageWidgetMenuItems: b,
                  children: S(),
              })
            : S(),
    });
}
