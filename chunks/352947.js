e.d(n, { default: () => H });
var i,
    s = e(477900),
    a = e(582128),
    r = e(935462),
    l = e(430690),
    c = e(123292),
    o = e(544231),
    d = e(665909),
    m = e(62617),
    u = e(117816);
function A(t) {
    let { alt: n, ariaLabel: e, ariaHidden: i, role: r, width: l, height: c, className: o, style: d } = t,
        A = a.useMemo(
            () => (0, m.H)({ width: l, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [l, c, d],
        );
    return (0, s.jsx)("img", {
        style: A,
        src: u.A,
        className: (0, m.Z)(o),
        alt: n,
        "aria-label": e,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var h = e(821609),
    x = e(855986),
    E = e(287809),
    T = e(427262),
    g = e(534514),
    _ = e(834730),
    O = e(512967);
function S(t) {
    let { heroImage: n, children: e, header: i, description: a } = t;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            void 0 !== n && (0, s.jsx)("div", { className: O.c8, children: n }),
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
                                    variant: "body-md/medium",
                                    color: "text-default",
                                    className: O.h_,
                                    children: a,
                                }),
                        ],
                    }),
                    e,
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
    R = e(792996);
function v(t) {
    let { senderId: n, trackAnalyticsEvent: e, onNavigate: i } = t,
        a = (0, x.bG)([E.default], () => {
            let t = E.default.getUser(n);
            return T.Ay.getName(t);
        });
    return (0, s.jsx)(S, {
        header: R.intl.string(R.t.sSMgC6),
        description: R.intl.formatToPlainString(R.t.q2QrTY, { username: a }),
        heroImage: (0, s.jsx)(A, { alt: R.intl.string(R.t["3QhxXJ"]) }),
        children: (0, s.jsxs)("div", {
            className: O.UD,
            children: [
                (0, s.jsx)(h.$, {
                    text: R.intl.string(R.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        (i(j.TAKE_ACTION), e(d.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION));
                    },
                }),
                (0, s.jsx)(h.$, {
                    text: R.intl.string(R.t.xLkGzP),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => {
                        (i(j.SAFETY_TIPS), e(d.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS));
                    },
                }),
            ],
        }),
    });
}
var I = e(546);
function N(t) {
    let { alt: n, ariaLabel: e, ariaHidden: i, role: r, width: l, height: c, className: o, style: d } = t,
        u = a.useMemo(
            () => (0, m.H)({ width: l, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [l, c, d],
        );
    return (0, s.jsx)("img", {
        style: u,
        src: I.A,
        className: (0, m.Z)(o),
        alt: n,
        "aria-label": e,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var f = e(889229),
    C = e(327337);
function p(t) {
    let {} = t,
        n = (0, C.RU)();
    return (0, s.jsx)(S, {
        heroImage: (0, s.jsx)(N, { alt: R.intl.string(R.t["2mJo21"]) }),
        header: R.intl.string(R.t.eAbVfS),
        children: (0, s.jsx)("div", {
            className: O.lG,
            children: (0, s.jsx)(f.A, { tips: n, headerText: R.intl.string(R.t["0QSL1C"]) }),
        }),
    });
}
var y = e(285796),
    k = e(138134),
    K = e(534890),
    L = e(49229),
    W = e(975807),
    M = e(928658),
    U = e(426190),
    b = e(662502),
    w = e(994500),
    D = e(192311);
function F(t) {
    let { senderId: n, channelId: e, hasReported: i, onReport: r, trackAnalyticsEvent: l } = t,
        c = (0, x.bG)([w.A], () => w.A.isBlocked(n)),
        [o, m] = a.useState(c),
        u = (0, U.N)(),
        A = (0, U.z)(),
        [E, T] = a.useState(!1),
        g = (0, D.W)(e),
        _ = a.useMemo(() => (u ? 0 : A ? 2 : 1), [u, A]),
        j = a.useMemo(() => {
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
                (0, s.jsx)(h.$, {
                    text: o ? R.intl.string(R.t.XyHpKH) : R.intl.string(R.t.l4Emac),
                    variant: "primary",
                    fullWidth: !0,
                    icon: y.CircleXIcon,
                    onClick: () => {
                        o
                            ? (m(!1),
                              L.A.unblockUser(n, { location: C.Ht }, e),
                              l(d.Wm.USER_TAKEOVER_MODAL_UNBLOCK),
                              b.A.showUnblockSuccessToast(n, e))
                            : (m(!0),
                              l(d.Wm.USER_TAKEOVER_MODAL_BLOCK),
                              L.A.blockUser(n, { location: C.Ht }, e).then(() => {
                                  b.A.showBlockSuccessToast(n, e);
                              }));
                    },
                }),
                (0, s.jsx)(h.$, {
                    text: i ? R.intl.string(R.t.QvwOJ6) : R.intl.string(R.t["7fHyE6"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: k.FlagIcon,
                    onClick: async function () {
                        null != g &&
                            (T(!0),
                            await (0, M.LF)(
                                g,
                                () => {
                                    (b.A.showReportSuccessToast(n, e), r());
                                },
                                () => {
                                    b.A.showFailedToast();
                                },
                            ),
                            T(!1),
                            l(d.Wm.USER_TAKEOVER_MODAL_REPORT));
                    },
                    loading: E,
                    disabled: i,
                }),
                (0, s.jsx)(h.$, {
                    text: j,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: K.ChatIcon,
                    onClick: () => {
                        0 === _
                            ? ((0, W.A)(C.x7), l(d.Wm.USER_TAKEOVER_MODAL_CTL))
                            : 2 === _
                              ? ((0, W.A)(C.CL), l(d.Wm.USER_TAKEOVER_MODAL_THROUGHLINE))
                              : ((0, W.A)(C.jR), l(d.Wm.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                }),
            ],
        }),
    });
}
var V = e(715918);
let H = (t) => {
    let { warningId: n, warningType: e, senderId: i, modalProps: m, channelId: u } = t,
        [A, h] = a.useState(j.INTRO),
        x = a.useMemo(
            () => ({ channelId: u, senderId: i, warningId: n, warningType: e, isNudgeWarning: !1 }),
            [u, i, n, e],
        );
    a.useEffect(() => {
        (0, d.QF)({ ...x, viewName: d.gN.SAFETY_TAKEOVER_MODAL });
    }, [x]);
    let E = a.useCallback(
            (t) => {
                (0, d._$)({ ...x, cta: t });
            },
            [x],
        ),
        [T, g] = a.useState(!1);
    function _(t) {
        h(t);
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
                    activeSlide: A,
                    centered: !1,
                    overflow: "visible",
                    contentDisplay: "flex",
                    children: [
                        (0, s.jsx)(l.q, {
                            id: j.INTRO,
                            children: (0, s.jsx)(v, {
                                warningId: n,
                                senderId: i,
                                trackAnalyticsEvent: E,
                                onNavigate: _,
                            }),
                        }),
                        (0, s.jsx)(l.q, {
                            id: j.SAFETY_TIPS,
                            children: (0, s.jsx)(p, { warningId: n, senderId: i, trackAnalyticsEvent: E }),
                        }),
                        (0, s.jsx)(l.q, {
                            id: j.TAKE_ACTION,
                            children: (0, s.jsx)(F, {
                                warningId: n,
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
                            (m.onClose(), (0, o.xi)(u, [n]), E(d.Wm.USER_TAKEOVER_MODAL_DISMISS));
                        },
                        textVariant: "body-sm/normal",
                    }),
                    A !== j.INTRO &&
                        (0, s.jsx)(c.Q, {
                            variant: "secondary",
                            size: "sm",
                            text: R.intl.string(R.t["13/7kX"]),
                            textVariant: "body-sm/normal",
                            onClick: () => _(j.INTRO),
                        }),
                ],
            }),
        ],
    });
};
