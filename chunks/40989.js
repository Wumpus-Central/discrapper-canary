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
    f = n(704824);
n(456647);
var h = n(633075),
    m = n(451395),
    x = n(716804),
    p = n(675816),
    j = n(855986),
    I = n(939249),
    E = n(772838),
    b = n(140735),
    A = n(834730),
    v = n(866665),
    C = n(192308),
    y = n(265872),
    N = n(165862),
    k = n(477782),
    D = n(241326),
    T = n(442433),
    P = n(775602),
    R = n(46653),
    _ = n(384377),
    w = n(518477),
    W = n(792996),
    S = n(347727);
function O(e) {
    let { widget: t, className: n, buttonRef: l, additionalMenuItems: r } = e,
        s = (0, d.L)(t),
        c = (0, o.GV)();
    return (0, i.jsx)(G, {
        targetRef: l,
        widget: t,
        additionalMenuItems: r,
        children: (e) =>
            (0, i.jsx)(M, {
                children: (0, i.jsxs)(I.D, {
                    innerRef: l,
                    className: a()(S.x6, n),
                    "data-dnd-name": s,
                    "aria-label": W.intl.formatToPlainString(W.t.HWNJJN, { widgetTitle: s }),
                    "aria-describedby": c,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(E.DragIcon, { size: "sm" }),
                        (0, i.jsx)(b.A, { id: c, children: W.intl.string(W.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
function M(e) {
    let { children: t } = e,
        n = (0, j.bG)([P.Ay], () => P.Ay.keyboardModeEnabled),
        { isDragging: l } = (0, p.V)((e) => ({ isDragging: e.isDragging() }));
    return (0, i.jsx)(v.m, {
        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
            className: S.HE,
            children: [
                (0, i.jsx)(A.E, {
                    variant: "body-sm/normal",
                    color: "none",
                    children: W.intl.format(n ? W.t["zvln/l"] : W.t["7cdwhg"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
                (0, i.jsx)(A.E, {
                    variant: "body-sm/normal",
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
        (0, C.mM)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e(487458),
                    n.e(938177),
                    n.e(813057),
                    n.e(991625),
                    n.e(230029),
                    n.e(891089),
                    n.e(728925),
                    n.e(569603),
                    n.e(174554),
                    n.e(196063),
                    n.e(392028),
                    n.e(124054),
                    n.e(441674),
                    n.e(152862),
                    n.e(357900),
                    n.e(148729),
                    n.e(650195),
                    n.e(401317),
                    n.e(778082),
                    n.e(311580),
                    n.e(67702),
                    n.e(662387),
                    n.e(31544),
                    n.e(334168),
                    n.e(93012),
                    n.e(715867),
                    n.e(249938),
                    n.e(213922),
                    n.e(501095),
                    n.e(957251),
                    n.e(306637),
                    n.e(678749),
                    n.e(327545),
                    n.e(163466),
                    n.e(234017),
                    n.e(933373),
                    n.e(599618),
                    n.e(201074),
                    n.e(879641),
                    n.e(390430),
                    n.e(110425),
                    n.e(990185),
                    n.e(266201),
                    n.e(752704),
                    n.e(56606),
                    n.e(520218),
                    n.e(738015),
                    n.e(40791),
                    n.e(358404),
                    n.e(996907),
                    n.e(428197),
                    n.e(99965),
                    n.e(706073),
                    n.e(227512),
                    n.e(806152),
                    n.e(331249),
                    n.e(679502),
                    n.e(734818),
                    n.e(245652),
                    n.e(878504),
                    n.e(104864),
                    n.e(420446),
                    n.e(614476),
                    n.e(483754),
                    n.e(372883),
                    n.e(362420),
                    n.e(887789),
                    n.e(589154),
                    n.e(425292),
                    n.e(412408),
                    n.e(888499),
                    n.e(193457),
                    n.e(839182),
                    n.e(546547),
                    n.e(102075),
                    n.e(892937),
                    n.e(570385),
                    n.e(490449),
                    n.e(934487),
                    n.e(467506),
                    n.e(342551),
                    n.e(343194),
                    n.e(84663),
                    n.e(3952),
                    n.e(454048),
                    n.e(300699),
                    n.e(264236),
                    n.e(976759),
                    n.e(398125),
                    n.e(221825),
                    n.e(143613),
                    n.e(901555),
                    n.e(930758),
                    n.e(593600),
                    n.e(234236),
                    n.e(707826),
                    n.e(890027),
                    n.e(913823),
                    n.e(638221),
                    n.e(851130),
                    n.e(417286),
                    n.e(190889),
                    n.e(27773),
                    n.e(588940),
                    n.e(401827),
                    n.e(82367),
                    n.e(717907),
                    n.e(757598),
                    n.e(361626),
                    n.e(646506),
                    n.e(61129),
                    n.e(445421),
                    n.e(721690),
                    n.e(599141),
                    n.e(776750),
                    n.e(302008),
                    n.e(761935),
                    n.e(87306),
                    n.e(502018),
                    n.e(276863),
                    n.e(128796),
                    n.e(441432),
                    n.e(728633),
                    n.e(173547),
                    n.e(35403),
                    n.e(964320),
                    n.e(108634),
                    n.e(35757),
                    n.e(570506),
                    n.e(951811),
                    n.e(151016),
                    n.e(787672),
                    n.e(555586),
                    n.e(832817),
                    n.e(416143),
                    n.e(401590),
                    n.e(844695),
                    n.e(213653),
                    n.e(92124),
                    n.e(991991),
                    n.e(123353),
                    n.e(50015),
                    n.e(988077),
                    n.e(232551),
                    n.e(631644),
                    n.e(561216),
                    n.e(692835),
                    n.e(21219),
                    n.e(829177),
                    n.e(106943),
                    n.e(348674),
                    n.e(494768),
                    n.e(526595),
                    n.e(482861),
                    n.e(786751),
                    n.e(489949),
                    n.e(422891),
                    n.e(695881),
                    n.e(790244),
                    n.e(344265),
                    n.e(637721),
                    n.e(592731),
                    n.e(332470),
                    n.e(723794),
                    n.e(177104),
                    n.e(894747),
                    n.e(170653),
                    n.e(466944),
                    n.e(288004),
                    n.e(240511),
                    n.e(718573),
                    n.e(784103),
                    n.e(958428),
                    n.e(346102),
                    n.e(377766),
                    n.e(545587),
                    n.e(482815),
                    n.e(376883),
                    n.e(647211),
                    n.e(799657),
                    n.e(810034),
                    n.e(817852),
                    n.e(996218),
                    n.e(231578),
                    n.e(614784),
                    n.e(8563),
                    n.e(499941),
                    n.e(509793),
                    n.e(831145),
                    n.e(187856),
                    n.e(288705),
                    n.e(960286),
                    n.e(610449),
                    n.e(32781),
                    n.e(488990),
                    n.e(746489),
                    n.e(912773),
                    n.e(662355),
                    n.e(872648),
                    n.e(888050),
                    n.e(464242),
                    n.e(220518),
                    n.e(88160),
                    n.e(209518),
                    n.e(446693),
                    n.e(338516),
                    n.e(736926),
                    n.e(450048),
                    n.e(587244),
                    n.e(708692),
                    n.e(896137),
                    n.e(957506),
                    n.e(387933),
                    n.e(362422),
                    n.e(3131),
                    n.e(789573),
                    n.e(28852),
                    n.e(732272),
                    n.e(220287),
                    n.e(536973),
                    n.e(914248),
                    n.e(43358),
                    n.e(852983),
                    n.e(776793),
                    n.e(390180),
                    n.e(24914),
                    n.e(332335),
                    n.e(134504),
                    n.e(248985),
                    n.e(553683),
                    n.e(181162),
                    n.e(720161),
                    n.e(247290),
                    n.e(787320),
                    n.e(124981),
                    n.e(608476),
                    n.e(353600),
                ]).then(n.bind(n, 380035));
                return (t) =>
                    (0, i.jsx)(e, { ...t, userId: R.default.getId(), widget: l, trackUserProfileEditAction: s });
            },
            { stackingBehavior: "stack" },
        );
    }
    return (0, i.jsx)(y.Y, {
        targetElementRef: r,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(N.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    ((0, T.Z_)(), t());
                },
                onSelect: () => {},
                "aria-label": W.intl.string(W.t.xpSHSk),
                className: S.MK,
                children: (0, i.jsxs)(k.rX, {
                    children: [
                        a,
                        (0, i.jsx)(k.Dr, {
                            id: "remove-widget",
                            label: W.intl.string(W.t.Mm07Yc),
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
var L = n(534514),
    U = n(138134),
    F = n(365199),
    z = n(627363),
    B = n(587895),
    H = n(928658);
function K(e, t, n) {
    n?.conjureProjectId != null ? (0, H.r3)({ application: n, entrypoint: "user_profile_widget" }) : (0, H.GJ)(e, t);
}
var q = n(216473);
function Y(e) {
    let { widget: t, userId: n, className: r, menuItems: s } = e,
        o = l.useRef(null);
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
                    ((0, T.Z_)(), t());
                },
                onSelect: () => {},
                "aria-label": W.intl.string(W.t.xpSHSk),
                children: (0, i.jsxs)(k.rX, {
                    children: [
                        s,
                        (0, i.jsx)(
                            k.Dr,
                            {
                                id: "flag-widget",
                                label: W.intl.string(W.t.D4GvHE),
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
            (0, i.jsx)(I.D, {
                ...e,
                innerRef: o,
                "aria-label": W.intl.string(W.t.xpSHSk),
                className: a()(q.x, r),
                children: (0, i.jsx)(F.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
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
                    (0, i.jsx)(L.D, { variant: "heading-xs/medium", color: "text-default", id: n, children: s }),
                    null != o && (0, i.jsx)(A.E, { variant: "body-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
            (0, i.jsx)(X, { widget: l, actionButtons: c, disabledInteraction: r, userId: t, additionalMenuItems: u }),
        ],
    });
}
function X(e) {
    let { widget: t, actionButtons: n, disabledInteraction: l, userId: r, additionalMenuItems: a } = e,
        s = (0, j.bG)([R.default], () => R.default.getId());
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
    $ = n(223503);
function Q(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: r, children: s, getWidth: c } = e,
        u = l.useRef(null),
        g = l.useRef(null),
        { registerManageWidgetButtonRef: f, manageFocusOnReorder: h } = (0, Z.r)(),
        x = n.getUniqueKey();
    l.useLayoutEffect(() => {
        let e = f(n.type, x);
        return (e(u.current), () => e(null));
    }, [f, n.type, x]);
    let p = l.useMemo(() => n.id ?? (0, o.Ld)(), [n.id]),
        { isDragging: j, dragSourcePosition: I } = (0, m.gY)({
            dragRef: u,
            dropRef: g,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: p,
            itemPreviewProps: { widget: n, getWidth: c },
            onReorder: d.R_,
            onEnd: () => h(n.type),
        }),
        E = null != I,
        b = E && t < I,
        A = E && t > I;
    return (0, i.jsxs)("div", {
        ref: g,
        className: a()($.wX, { [$.A]: b, [$.Ze]: A, [$.Id]: j }),
        "aria-label": W.intl.formatToPlainString(W.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(O, { buttonRef: u, widget: n, className: $.vn, additionalMenuItems: r }), s],
    });
}
function ee(e) {
    let {
            userId: t,
            widget: n,
            children: r,
            allowEditing: d,
            disableInteraction: m,
            className: p,
            index: j,
            trailingContent: I,
            headerTitle: E,
            headerSubtitle: b,
            headerActionButtons: A,
            headerClassName: v,
            additionalManageWidgetMenuItems: C,
        } = e,
        y = (0, o.GV)(),
        N = l.useRef(null),
        k = (0, x.g)(),
        { trackUserProfileAction: D } = (0, c.NJ)(),
        T = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, r] = (0, l.useState)(!1),
                a = t instanceof h.R ? t.applicationId : null,
                { fetched: s } = (0, f.U)(a),
                o = (0, l.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), r(!0));
                    },
                    [n, t],
                );
            return (0, g.K)(o, void 0, !i && (null == a || s));
        })({ widget: n, onAction: D }),
        P = k === n.type;
    (0, u.A)(T, P);
    let R = d && null != j && !m;
    function _() {
        return (0, i.jsxs)("div", {
            ref: N,
            className: a()($.kL, p),
            children: [
                (0, i.jsx)(V, {
                    userId: t,
                    headingId: y,
                    title: E,
                    subtitle: b,
                    actionButtons: A,
                    widget: n,
                    disableInteraction: m,
                    className: v,
                    additionalMenuItems: C,
                }),
                (0, i.jsxs)(s.F, { children: [r, I] }),
            ],
        });
    }
    return (0, i.jsx)("section", {
        ref: T,
        "aria-labelledby": y,
        children: R
            ? (0, i.jsx)(Q, {
                  index: j ?? 0,
                  widget: n,
                  getWidth: () => N.current?.offsetWidth,
                  additionalManageWidgetMenuItems: C,
                  children: _(),
              })
            : _(),
    });
}
