n.d(t, { A: () => ee });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(707554),
    o = n(915089),
    c = n(183555),
    d = n(735321),
    u = n(94343),
    g = n(172218),
    m = n(704824);
n(456647);
var x = n(633075),
    h = n(451395),
    f = n(716804),
    p = n(675816),
    j = n(17928),
    I = n(939249),
    E = n(772838),
    A = n(140735),
    C = n(834730),
    v = n(866665),
    b = n(192308),
    N = n(265872),
    y = n(980707),
    D = n(477782),
    T = n(241326),
    P = n(442433),
    R = n(775602),
    k = n(280450),
    _ = n(384377),
    w = n(518477),
    W = n(105292),
    S = n(347727);
function M(e) {
    let { widget: t, className: n, buttonRef: l, additionalMenuItems: r } = e,
        s = (0, d.L)(t),
        c = (0, o.GV)();
    return (0, i.jsx)(G, {
        targetRef: l,
        widget: t,
        additionalMenuItems: r,
        children: (e) =>
            (0, i.jsx)(O, {
                children: (0, i.jsxs)(I.D, {
                    innerRef: l,
                    className: a()(S.x6, n),
                    "data-dnd-name": s,
                    "aria-label": W.intl.formatToPlainString(W.t.HWNJJN, { widgetTitle: s }),
                    "aria-describedby": c,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(E.W, { size: "sm" }),
                        (0, i.jsx)(A.A, { id: c, children: W.intl.string(W.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
function O(e) {
    let { children: t } = e,
        n = (0, j.bG)([R.Ay], () => R.Ay.keyboardModeEnabled),
        { isDragging: l } = (0, p.V)((e) => ({ isDragging: e.isDragging() }));
    return (0, i.jsx)(v.m, {
        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
            className: S.HE,
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
function G(e) {
    let { children: t, widget: l, targetRef: r, additionalMenuItems: a } = e,
        { trackUserProfileEditAction: s } = (0, c.NJ)();
    function o(e) {
        if (e.shiftKey) {
            ((0, d.qA)(l),
                s({ action: "WIDGET_REMOVED", ...l.getProfileEditAnalyticsOptions() }),
                (0, _.XA)(w.jM.WIDGET_REMOVED));
            return;
        }
        (0, b.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("148758"),
                    n.e("319714"),
                    n.e("82171"),
                    n.e("36026"),
                    n.e("249918"),
                    n.e("269614"),
                    n.e("372883"),
                    n.e("244941"),
                    n.e("598263"),
                    n.e("291043"),
                    n.e("487458"),
                    n.e("938177"),
                    n.e("813057"),
                    n.e("991625"),
                    n.e("230029"),
                    n.e("891089"),
                    n.e("938512"),
                    n.e("174554"),
                    n.e("196063"),
                    n.e("392028"),
                    n.e("124054"),
                    n.e("441674"),
                    n.e("152862"),
                    n.e("148326"),
                    n.e("148729"),
                    n.e("650195"),
                    n.e("401317"),
                    n.e("311580"),
                    n.e("67702"),
                    n.e("662387"),
                    n.e("31544"),
                    n.e("334168"),
                    n.e("93012"),
                    n.e("315771"),
                    n.e("691398"),
                    n.e("266201"),
                    n.e("752704"),
                    n.e("56606"),
                    n.e("206516"),
                    n.e("327545"),
                    n.e("163466"),
                    n.e("940298"),
                    n.e("738015"),
                    n.e("234017"),
                    n.e("40791"),
                    n.e("358404"),
                    n.e("996907"),
                    n.e("831130"),
                    n.e("599618"),
                    n.e("377989"),
                    n.e("806152"),
                    n.e("331249"),
                    n.e("679502"),
                    n.e("245420"),
                    n.e("245652"),
                    n.e("788938"),
                    n.e("104864"),
                    n.e("420446"),
                    n.e("119766"),
                    n.e("887789"),
                    n.e("589154"),
                    n.e("425292"),
                    n.e("412408"),
                    n.e("888499"),
                    n.e("193457"),
                    n.e("839182"),
                    n.e("975366"),
                    n.e("892937"),
                    n.e("570385"),
                    n.e("490449"),
                    n.e("52727"),
                    n.e("467506"),
                    n.e("342551"),
                    n.e("454048"),
                    n.e("300699"),
                    n.e("349619"),
                    n.e("264236"),
                    n.e("599666"),
                    n.e("398125"),
                    n.e("221825"),
                    n.e("930758"),
                    n.e("901555"),
                    n.e("593600"),
                    n.e("707826"),
                    n.e("890027"),
                    n.e("305692"),
                    n.e("851130"),
                    n.e("417286"),
                    n.e("534822"),
                    n.e("361626"),
                    n.e("646506"),
                    n.e("27773"),
                    n.e("445421"),
                    n.e("721690"),
                    n.e("761935"),
                    n.e("87306"),
                    n.e("502018"),
                    n.e("276863"),
                    n.e("249366"),
                    n.e("728633"),
                    n.e("833977"),
                    n.e("570506"),
                    n.e("935715"),
                    n.e("248329"),
                    n.e("398829"),
                    n.e("234236"),
                    n.e("832817"),
                    n.e("416143"),
                    n.e("401590"),
                    n.e("844695"),
                    n.e("664977"),
                    n.e("92124"),
                    n.e("123353"),
                    n.e("50015"),
                    n.e("231588"),
                    n.e("988077"),
                    n.e("776750"),
                    n.e("232551"),
                    n.e("631644"),
                    n.e("561216"),
                    n.e("313681"),
                    n.e("588940"),
                    n.e("266703"),
                    n.e("829177"),
                    n.e("401827"),
                    n.e("106943"),
                    n.e("569918"),
                    n.e("836545"),
                    n.e("14962"),
                    n.e("482861"),
                    n.e("786751"),
                    n.e("489949"),
                    n.e("770697"),
                    n.e("790244"),
                    n.e("344265"),
                    n.e("637721"),
                    n.e("592731"),
                    n.e("273232"),
                    n.e("894747"),
                    n.e("784103"),
                    n.e("958428"),
                    n.e("482815"),
                    n.e("240511"),
                    n.e("718573"),
                    n.e("346102"),
                    n.e("377766"),
                    n.e("545587"),
                    n.e("170653"),
                    n.e("256255"),
                    n.e("128534"),
                    n.e("799657"),
                    n.e("810034"),
                    n.e("817852"),
                    n.e("614784"),
                    n.e("8563"),
                    n.e("499941"),
                    n.e("509793"),
                    n.e("831145"),
                    n.e("187856"),
                    n.e("400954"),
                    n.e("610449"),
                    n.e("32781"),
                    n.e("354121"),
                    n.e("231578"),
                    n.e("488990"),
                    n.e("332470"),
                    n.e("776545"),
                    n.e("288705"),
                    n.e("912773"),
                    n.e("35403"),
                    n.e("192214"),
                    n.e("662355"),
                    n.e("872648"),
                    n.e("976148"),
                    n.e("492022"),
                    n.e("220518"),
                    n.e("88160"),
                    n.e("209518"),
                    n.e("748015"),
                    n.e("338516"),
                    n.e("450048"),
                    n.e("462276"),
                    n.e("896137"),
                    n.e("979630"),
                    n.e("631573"),
                    n.e("3131"),
                    n.e("220287"),
                    n.e("647177"),
                    n.e("913823"),
                    n.e("43358"),
                    n.e("876990"),
                    n.e("975945"),
                    n.e("776793"),
                    n.e("480436"),
                    n.e("24914"),
                    n.e("861770"),
                    n.e("134504"),
                    n.e("741786"),
                    n.e("553683"),
                    n.e("181162"),
                    n.e("736926"),
                    n.e("908608"),
                    n.e("536973"),
                    n.e("720161"),
                    n.e("746623"),
                    n.e("171398"),
                    n.e("787320"),
                    n.e("914248"),
                    n.e("124981"),
                    n.e("392310"),
                    n.e("353600"),
                ]).then(n.bind(n, 380035));
                return (t) =>
                    (0, i.jsx)(e, { ...t, userId: k.default.getId(), widget: l, trackUserProfileEditAction: s });
            },
            { stackingBehavior: "stack" },
        );
    }
    return (0, i.jsx)(N.Y, {
        targetElementRef: r,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(y.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    ((0, P.Z_)(), t());
                },
                onSelect: () => {},
                "aria-label": W.intl.string(W.t.xpSHSk),
                className: S.MK,
                children: (0, i.jsxs)(D.rX, {
                    children: [
                        a,
                        (0, i.jsx)(D.Dr, {
                            id: "remove-widget",
                            label: W.intl.string(W.t.Mm07Yc),
                            action: o,
                            color: "danger",
                            icon: T.TrashIcon,
                            leadingAccessory: { type: "icon", icon: T.TrashIcon },
                        }),
                    ],
                }),
            });
        },
        children: t,
    });
}
var L = n(297264),
    F = n(138134),
    U = n(365199),
    z = n(627363),
    H = n(587895),
    q = n(928658);
function B(e, t, n) {
    n?.conjureProjectId != null ? (0, q.r3)({ application: n, entrypoint: "user_profile_widget" }) : (0, q.GJ)(e, t);
}
var K = n(216473);
function Y(e) {
    let { widget: t, userId: n, className: r, menuItems: s } = e,
        o = l.useRef(null);
    function c() {
        !(function (e, t) {
            if (!(t instanceof x.R)) return (0, q.GJ)(e, t);
            let { applicationId: n } = t;
            H.A.isHydrated(n)
                ? B(e, t, H.A.getApplication(n))
                : z.Ay.fetchApplication(n)
                      .then(() => B(e, t, H.A.getApplication(n)))
                      .catch(() => (0, q.GJ)(e, t));
        })(n, t);
    }
    return (0, i.jsx)(N.Y, {
        targetElementRef: o,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(y.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    ((0, P.Z_)(), t());
                },
                onSelect: () => {},
                "aria-label": W.intl.string(W.t.xpSHSk),
                children: (0, i.jsxs)(D.rX, {
                    children: [
                        s,
                        (0, i.jsx)(
                            D.Dr,
                            {
                                id: "flag-widget",
                                label: W.intl.string(W.t.D4GvHE),
                                action: c,
                                color: "danger",
                                icon: F.FlagIcon,
                                leadingAccessory: { type: "icon", icon: F.FlagIcon },
                            },
                            "flag-widget",
                        ),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(I.D, {
                ...e,
                innerRef: o,
                "aria-label": W.intl.string(W.t.xpSHSk),
                className: a()(K.x, r),
                children: (0, i.jsx)(U.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
            }),
    });
}
var J = n(948939);
function V(e) {
    let {
        userId: t,
        headingId: n,
        widget: l,
        disableInteraction: r = !1,
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
                    (0, i.jsx)(L.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: s }),
                    null != o && (0, i.jsx)(C.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
            (0, i.jsx)(X, { widget: l, actionButtons: c, disabledInteraction: r, userId: t, additionalMenuItems: u }),
        ],
    });
}
function X(e) {
    let { widget: t, actionButtons: n, disabledInteraction: l, userId: r, additionalMenuItems: a } = e,
        s = (0, j.bG)([k.default], () => k.default.getId());
    return l
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: J.o1, children: n })
          : s !== r
            ? (0, i.jsx)("div", {
                  className: J.o1,
                  children: (0, i.jsx)(Y, {
                      widget: t,
                      userId: r,
                      className: J.AQ,
                      menuItems: null != a ? [a] : void 0,
                  }),
              })
            : null;
}
var Z = n(192),
    Q = n(223503);
function $(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: r, children: s, getWidth: c } = e,
        u = l.useRef(null),
        g = l.useRef(null),
        { registerManageWidgetButtonRef: m, manageFocusOnReorder: x } = (0, Z.r)(),
        f = n.getUniqueKey();
    l.useLayoutEffect(() => {
        let e = m(n.type, f);
        return (e(u.current), () => e(null));
    }, [m, n.type, f]);
    let p = l.useMemo(() => n.id ?? (0, o.Ld)(), [n.id]),
        { isDragging: j, dragSourcePosition: I } = (0, h.gY)({
            dragRef: u,
            dropRef: g,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: p,
            itemPreviewProps: { widget: n, getWidth: c },
            onReorder: d.R_,
            onEnd: () => x(n.type),
        }),
        E = null != I,
        A = E && t < I,
        C = E && t > I;
    return (0, i.jsxs)("div", {
        ref: g,
        className: a()(Q.wX, { [Q.A]: A, [Q.Ze]: C, [Q.Id]: j }),
        "aria-label": W.intl.formatToPlainString(W.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(M, { buttonRef: u, widget: n, className: Q.vn, additionalMenuItems: r }), s],
    });
}
function ee(e) {
    let {
            userId: t,
            widget: n,
            children: r,
            allowEditing: d,
            disableInteraction: h,
            className: p,
            index: j,
            trailingContent: I,
            headerTitle: E,
            headerSubtitle: A,
            headerActionButtons: C,
            headerClassName: v,
            additionalManageWidgetMenuItems: b,
        } = e,
        N = (0, o.GV)(),
        y = l.useRef(null),
        D = (0, f.g)(),
        { trackUserProfileAction: T } = (0, c.NJ)(),
        P = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, r] = (0, l.useState)(!1),
                a = t instanceof x.R ? t.applicationId : null,
                { fetched: s } = (0, m.U)(a),
                o = (0, l.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), r(!0));
                    },
                    [n, t],
                );
            return (0, g.K)(o, void 0, !i && (null == a || s));
        })({ widget: n, onAction: T }),
        R = D === n.type;
    (0, u.A)(P, R);
    let k = d && null != j && !h;
    function _() {
        return (0, i.jsxs)("div", {
            ref: y,
            className: a()(Q.kL, p),
            children: [
                (0, i.jsx)(V, {
                    userId: t,
                    headingId: N,
                    title: E,
                    subtitle: A,
                    actionButtons: C,
                    widget: n,
                    disableInteraction: h,
                    className: v,
                    additionalMenuItems: b,
                }),
                (0, i.jsxs)(s.F, { children: [r, I] }),
            ],
        });
    }
    return (0, i.jsx)("section", {
        ref: P,
        "aria-labelledby": N,
        children: k
            ? (0, i.jsx)($, {
                  index: j ?? 0,
                  widget: n,
                  getWidth: () => y.current?.offsetWidth,
                  additionalManageWidgetMenuItems: b,
                  children: _(),
              })
            : _(),
    });
}
