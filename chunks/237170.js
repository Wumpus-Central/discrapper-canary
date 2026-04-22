n.d(e, { G: () => x, default: () => m });
var a,
    r = n(627968),
    s = n(64700),
    i = n(935462),
    l = n(430690),
    o = n(123292),
    c = n(544231),
    d = n(665909),
    u = n(464838),
    E = n(120340),
    h = n(196645),
    _ = n(985018),
    A = n(717963),
    x =
        (((a = {})[(a.INTRO = 0)] = "INTRO"),
        (a[(a.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (a[(a.TAKE_ACTION = 2)] = "TAKE_ACTION"),
        a);
let m = (t) => {
    let { warningId: e, warningType: n, senderId: a, modalProps: x, channelId: m } = t,
        [g, p] = s.useState(0),
        T = s.useMemo(
            () => ({ channelId: m, senderId: a, warningId: e, warningType: n, isNudgeWarning: !1 }),
            [m, a, e, n],
        );
    s.useEffect(() => {
        (0, d.QF)({ ...T, viewName: d.gN.SAFETY_TAKEOVER_MODAL });
    }, [T]);
    let v = s.useCallback(
            (t) => {
                (0, d._$)({ ...T, cta: t });
            },
            [T],
        ),
        [b, f] = s.useState(!1);
    function N(t) {
        p(t);
    }
    return (0, r.jsxs)(i.EO, {
        "data-migration-pending": !0,
        transitionState: x.transitionState,
        parentComponent: "InappropriateConversationModal",
        children: [
            (0, r.jsx)("div", {
                className: A.kL,
                children: (0, r.jsxs)(l.t, {
                    width: 440,
                    activeSlide: g,
                    centered: !1,
                    overflow: "visible",
                    contentDisplay: "flex",
                    children: [
                        (0, r.jsx)(l.q, {
                            id: 0,
                            children: (0, r.jsx)(u.A, {
                                warningId: e,
                                senderId: a,
                                trackAnalyticsEvent: v,
                                onNavigate: N,
                            }),
                        }),
                        (0, r.jsx)(l.q, {
                            id: 1,
                            children: (0, r.jsx)(E.A, { warningId: e, senderId: a, trackAnalyticsEvent: v }),
                        }),
                        (0, r.jsx)(l.q, {
                            id: 2,
                            children: (0, r.jsx)(h.A, {
                                warningId: e,
                                senderId: a,
                                trackAnalyticsEvent: v,
                                channelId: m,
                                hasReported: b,
                                onReport: function () {
                                    f(!0);
                                },
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)(i.jl, {
                "data-migration-pending": !0,
                className: A.qr,
                children: [
                    (0, r.jsx)(o.Q, {
                        variant: "secondary",
                        size: "sm",
                        text: _.intl.string(_.t.cpT0Cq),
                        onClick: function () {
                            x.onClose(), (0, c.xi)(m, [e]), v(d.Wm.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        textVariant: "text-sm/normal",
                    }),
                    0 !== g &&
                        (0, r.jsx)(o.Q, {
                            variant: "secondary",
                            size: "sm",
                            text: _.intl.string(_.t["13/7kX"]),
                            textVariant: "text-sm/normal",
                            onClick: () => N(0),
                        }),
                ],
            }),
        ],
    });
};
