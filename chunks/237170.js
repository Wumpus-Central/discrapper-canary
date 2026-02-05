n.d(e, { G: () => A, default: () => h });
var i,
    s = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(544231),
    o = n(665909),
    c = n(464838),
    d = n(120340),
    E = n(196645),
    _ = n(985018),
    u = n(705656),
    A =
        (((i = {})[(i.INTRO = 0)] = "INTRO"),
        (i[(i.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (i[(i.TAKE_ACTION = 2)] = "TAKE_ACTION"),
        i);
let h = (t) => {
    let { warningId: e, warningType: n, senderId: i, modalProps: A, channelId: h } = t,
        [x, T] = r.useState(0),
        m = r.useMemo(
            () => ({ channelId: h, senderId: i, warningId: e, warningType: n, isNudgeWarning: !1 }),
            [h, i, e, n],
        );
    r.useEffect(() => {
        (0, o.QF)({ ...m, viewName: o.gN.SAFETY_TAKEOVER_MODAL });
    }, [m]);
    let g = r.useCallback(
            (t) => {
                (0, o._$)({ ...m, cta: t });
            },
            [m],
        ),
        [N, S] = r.useState(!1);
    function C(t) {
        T(t);
    }
    return (0, s.jsxs)(a.EOs, {
        "data-migration-pending": !0,
        transitionState: A.transitionState,
        parentComponent: "InappropriateConversationModal",
        children: [
            (0, s.jsx)("div", {
                className: u.kL,
                children: (0, s.jsxs)(a.tN_, {
                    width: 440,
                    activeSlide: x,
                    centered: !1,
                    overflow: "visible",
                    contentDisplay: "flex",
                    children: [
                        (0, s.jsx)(a.q7S, {
                            id: 0,
                            children: (0, s.jsx)(c.A, {
                                warningId: e,
                                senderId: i,
                                trackAnalyticsEvent: g,
                                onNavigate: C,
                            }),
                        }),
                        (0, s.jsx)(a.q7S, {
                            id: 1,
                            children: (0, s.jsx)(d.A, { warningId: e, senderId: i, trackAnalyticsEvent: g }),
                        }),
                        (0, s.jsx)(a.q7S, {
                            id: 2,
                            children: (0, s.jsx)(E.A, {
                                warningId: e,
                                senderId: i,
                                trackAnalyticsEvent: g,
                                channelId: h,
                                hasReported: N,
                                onReport: function () {
                                    S(!0);
                                },
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsxs)(a.jlY, {
                "data-migration-pending": !0,
                className: u.qr,
                children: [
                    (0, s.jsx)(a.QWc, {
                        variant: "secondary",
                        size: "sm",
                        text: _.intl.string(_.t.cpT0Cq),
                        onClick: function () {
                            A.onClose(), (0, l.xi)(h, [e]), g(o.Wm.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        textVariant: "text-sm/normal",
                    }),
                    0 !== x &&
                        (0, s.jsx)(a.QWc, {
                            variant: "secondary",
                            size: "sm",
                            text: _.intl.string(_.t["13/7kX"]),
                            textVariant: "text-sm/normal",
                            onClick: () => C(0),
                        }),
                ],
            }),
        ],
    });
};
