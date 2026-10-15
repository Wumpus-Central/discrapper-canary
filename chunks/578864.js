n.d(e, { default: () => H });
var i,
    s = n(477900),
    a = n(582128),
    r = n(935462),
    l = n(430690),
    c = n(123292),
    d = n(544231),
    o = n(665909),
    m = n(62617),
    u = n(117816);
function x(t) {
    let { alt: e, ariaLabel: n, ariaHidden: i, role: r, width: l, height: c, className: d, style: o } = t,
        x = a.useMemo(
            () => (0, m.H)({ width: l, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: o }),
            [l, c, o],
        );
    return (0, s.jsx)("img", {
        style: x,
        src: u.A,
        className: (0, m.Z)(d),
        alt: e,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var A = n(821609),
    h = n(17928),
    E = n(287809),
    T = n(427262),
    g = n(297264),
    _ = n(834730),
    O = n(512967);
function S(t) {
    let { heroImage: e, children: n, header: i, description: a } = t;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            void 0 !== e && (0, s.jsx)("div", { className: O.c8, children: e }),
            (0, s.jsxs)(r.$m, {
                "data-migration-pending": !0,
                className: O.rf,
                children: [
                    (0, s.jsxs)("div", {
                        className: O.FS,
                        children: [
                            (0, s.jsx)(g.D, { variant: "heading-xl/semibold", color: "text-strong", children: i }),
                            null != a &&
                                (0, s.jsx)(_.E, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    className: O.h_,
                                    children: a,
                                }),
                        ],
                    }),
                    n,
                ],
            }),
        ],
    });
}
var j =
        (((i = {})[(i.INTRO = 0)] = "INTRO"),
        (i[(i.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (i[(i.TAKE_ACTION = 2)] = "TAKE_ACTION"),
        i),
    R = n(105292);
function v(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: i } = t,
        a = (0, h.bG)([E.default], () => {
            let t = E.default.getUser(e);
            return T.Ay.getName(t);
        });
    return (0, s.jsx)(S, {
        header: R.intl.string(R.t.sSMgC6),
        description: R.intl.formatToPlainString(R.t.q2QrTY, { username: a }),
        heroImage: (0, s.jsx)(x, { alt: R.intl.string(R.t["3QhxXJ"]) }),
        children: (0, s.jsxs)("div", {
            className: O.UD,
            children: [
                (0, s.jsx)(A.$, {
                    text: R.intl.string(R.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        (i(j.TAKE_ACTION), n(o.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION));
                    },
                }),
                (0, s.jsx)(A.$, {
                    text: R.intl.string(R.t.xLkGzP),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => {
                        (i(j.SAFETY_TIPS), n(o.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS));
                    },
                }),
            ],
        }),
    });
}
var I = n(546);
function N(t) {
    let { alt: e, ariaLabel: n, ariaHidden: i, role: r, width: l, height: c, className: d, style: o } = t,
        u = a.useMemo(
            () => (0, m.H)({ width: l, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: o }),
            [l, c, o],
        );
    return (0, s.jsx)("img", {
        style: u,
        src: I.A,
        className: (0, m.Z)(d),
        alt: e,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var f = n(889229),
    p = n(327337);
function C(t) {
    let {} = t,
        e = (0, p.RU)();
    return (0, s.jsx)(S, {
        heroImage: (0, s.jsx)(N, { alt: R.intl.string(R.t["2mJo21"]) }),
        header: R.intl.string(R.t.eAbVfS),
        children: (0, s.jsx)("div", {
            className: O.lG,
            children: (0, s.jsx)(f.A, { tips: e, headerText: R.intl.string(R.t["0QSL1C"]) }),
        }),
    });
}
var k = n(285796),
    y = n(138134),
    K = n(534890),
    L = n(49229),
    W = n(975807),
    M = n(928658),
    U = n(426190),
    w = n(662502),
    D = n(994500),
    b = n(192311);
function F(t) {
    let { senderId: e, channelId: n, hasReported: i, onReport: r, trackAnalyticsEvent: l } = t,
        c = (0, h.bG)([D.A], () => D.A.isBlocked(e)),
        [d, m] = a.useState(c),
        u = (0, U.N)(),
        x = (0, U.z)(),
        [E, T] = a.useState(!1),
        g = (0, b.W)(n),
        _ = a.useMemo(() => (u ? 0 : x ? 2 : 1), [u, x]);
    async function j() {
        null != g &&
            (T(!0),
            await (0, M.LF)(
                g,
                () => {
                    (w.A.showReportSuccessToast(e, n), r());
                },
                () => {
                    w.A.showFailedToast();
                },
            ),
            T(!1),
            l(o.Wm.USER_TAKEOVER_MODAL_REPORT));
    }
    let v = a.useMemo(() => {
        switch (_) {
            case 0:
                return R.intl.string(R.t.sZf6cz);
            case 2:
                return R.intl.string(R.t.HQ2nKl);
            default:
                return R.intl.string(R.t["65XQar"]);
        }
    }, [_]);
    return (0, s.jsx)(S, {
        header: R.intl.string(R.t["mWO+ys"]),
        description: R.intl.string(R.t.S0XtKF),
        children: (0, s.jsxs)("div", {
            className: O.UD,
            children: [
                (0, s.jsx)(A.$, {
                    text: d ? R.intl.string(R.t.XyHpKH) : R.intl.string(R.t.l4Emac),
                    variant: "primary",
                    fullWidth: !0,
                    icon: k.a,
                    onClick: () => {
                        d
                            ? (m(!1),
                              L.A.unblockUser(e, { location: p.Ht }, n),
                              l(o.Wm.USER_TAKEOVER_MODAL_UNBLOCK),
                              w.A.showUnblockSuccessToast(e, n))
                            : (m(!0),
                              l(o.Wm.USER_TAKEOVER_MODAL_BLOCK),
                              L.A.blockUser(e, { location: p.Ht }, n).then(() => {
                                  w.A.showBlockSuccessToast(e, n);
                              }));
                    },
                }),
                (0, s.jsx)(A.$, {
                    text: i ? R.intl.string(R.t.QvwOJ6) : R.intl.string(R.t["7fHyE6"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: y.FlagIcon,
                    onClick: j,
                    loading: E,
                    disabled: i,
                }),
                (0, s.jsx)(A.$, {
                    text: v,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: K.ChatIcon,
                    onClick: () => {
                        0 === _
                            ? ((0, W.A)(p.x7), l(o.Wm.USER_TAKEOVER_MODAL_CTL))
                            : 2 === _
                              ? ((0, W.A)(p.CL), l(o.Wm.USER_TAKEOVER_MODAL_THROUGHLINE))
                              : ((0, W.A)(p.jR), l(o.Wm.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                }),
            ],
        }),
    });
}
var V = n(715918);
let H = (t) => {
    let { warningId: e, warningType: n, senderId: i, modalProps: m, channelId: u } = t,
        [x, A] = a.useState(j.INTRO),
        h = a.useMemo(
            () => ({ channelId: u, senderId: i, warningId: e, warningType: n, isNudgeWarning: !1 }),
            [u, i, e, n],
        );
    a.useEffect(() => {
        (0, o.QF)({ ...h, viewName: o.gN.SAFETY_TAKEOVER_MODAL });
    }, [h]);
    let E = a.useCallback(
            (t) => {
                (0, o._$)({ ...h, cta: t });
            },
            [h],
        ),
        [T, g] = a.useState(!1);
    function _(t) {
        A(t);
    }
    return (0, s.jsxs)(r.EO, {
        "data-migration-pending": !0,
        transitionState: m.transitionState,
        parentComponent: "InappropriateConversationModal",
        children: [
            (0, s.jsx)("div", {
                className: V.kL,
                children: (0, s.jsxs)(l.t, {
                    width: 440,
                    activeSlide: x,
                    centered: !1,
                    overflow: "visible",
                    contentDisplay: "flex",
                    children: [
                        (0, s.jsx)(l.q, {
                            id: j.INTRO,
                            children: (0, s.jsx)(v, {
                                warningId: e,
                                senderId: i,
                                trackAnalyticsEvent: E,
                                onNavigate: _,
                            }),
                        }),
                        (0, s.jsx)(l.q, {
                            id: j.SAFETY_TIPS,
                            children: (0, s.jsx)(C, { warningId: e, senderId: i, trackAnalyticsEvent: E }),
                        }),
                        (0, s.jsx)(l.q, {
                            id: j.TAKE_ACTION,
                            children: (0, s.jsx)(F, {
                                warningId: e,
                                senderId: i,
                                trackAnalyticsEvent: E,
                                channelId: u,
                                hasReported: T,
                                onReport: function () {
                                    g(!0);
                                },
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsxs)(r.jl, {
                "data-migration-pending": !0,
                className: V.qr,
                children: [
                    (0, s.jsx)(c.Q, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(R.t.cpT0Cq),
                        onClick: function () {
                            (m.onClose(), (0, d.xi)(u, [e]), E(o.Wm.USER_TAKEOVER_MODAL_DISMISS));
                        },
                        textVariant: "text-sm/normal",
                    }),
                    x !== j.INTRO &&
                        (0, s.jsx)(c.Q, {
                            variant: "secondary",
                            size: "sm",
                            text: R.intl.string(R.t["13/7kX"]),
                            textVariant: "text-sm/normal",
                            onClick: () => _(j.INTRO),
                        }),
                ],
            }),
        ],
    });
};
