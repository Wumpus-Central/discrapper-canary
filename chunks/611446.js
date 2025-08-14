n.d(e, {
    O: () => _,
    default: () => O,
}),
    n(388685);
var i,
    r = n(255367),
    s = n(73800),
    l = n(481060),
    a = n(600164),
    o = n(367408),
    c = n(473092),
    u = n(419672),
    d = n(858597),
    T = n(486213),
    S = n(388032),
    x = n(767770),
    _ =
        (((i = {}).ACTIONS = "ACTIONS"),
        (i.SAFETY_TIPS = "SAFETY_TIPS"),
        (i.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS"),
        i);
let O = (t) => {
    let { onClose: e, channelId: n, warningId: i, warningType: _, otherUserId: O, transitionState: b } = t,
        E = null != (0, o.M)(n),
        [g, h] = s.useState("ACTIONS"),
        p = s.useCallback(
            (t) => {
                (0, c.qc)({
                    channelId: n,
                    warningId: i,
                    warningType: _,
                    senderId: O,
                    cta: t,
                    isNudgeWarning: E,
                });
            },
            [n, i, _, O, E],
        ),
        A = s.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, r.jsx)(l.Avr, {
                onClick: n,
                text: e,
                variant: "secondary",
                textVariant: "text-sm/normal",
            });
        }, []),
        m = s.useCallback(() => {
            switch (g) {
                case "SAFETY_TIPS":
                case "ABOUT_SAFETY_ALERTS":
                    return (0, r.jsx)(A, {
                        text: S.intl.string(S.t["13/7kZ"]),
                        onClick: () => h("ACTIONS"),
                    });
                default:
                    return null;
            }
        }, [g, A]),
        j = s.useCallback(() => {
            switch (g) {
                case "SAFETY_TIPS":
                    return S.intl.string(S.t.EtNxi4);
                case "ABOUT_SAFETY_ALERTS":
                    return S.intl.string(S.t.qI14KC);
                default:
                    return S.intl.string(S.t.MAhAp6);
            }
        }, [g]),
        N = s.useCallback(
            (t) => {
                h(t);
            },
            [h],
        );
    return (0, r.jsxs)(l.Y0X, {
        "data-migration-pending": !0,
        transitionState: b,
        "aria-label": S.intl.string(S.t.eXlt09),
        size: l.CgR.SMALL,
        parentComponent: "SafetyToolsModal",
        children: [
            (0, r.jsx)(l.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: x.modalHeader,
                justify: a.Z.Justify.CENTER,
                children: (0, r.jsx)(l.X6q, {
                    variant: "heading-xl/semibold",
                    children: j(),
                }),
            }),
            (0, r.jsx)(l.Ttm, {
                children: (0, r.jsxs)(l.MyZ, {
                    activeSlide: g,
                    width: 440,
                    children: [
                        (0, r.jsx)(l.Mi4, {
                            id: "ACTIONS",
                            children: (0, r.jsx)(d.Z, {
                                otherUserId: O,
                                channelId: n,
                                warningId: i,
                                warningType: _,
                                transitionToSlide: N,
                            }),
                        }),
                        (0, r.jsx)(l.Mi4, {
                            id: "ABOUT_SAFETY_ALERTS",
                            children: (0, r.jsx)(u.Z, {
                                channelId: n,
                                onClose: () => {
                                    e(), p(c.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                },
                            }),
                        }),
                        (0, r.jsx)(l.Mi4, {
                            id: "SAFETY_TIPS",
                            children: (0, r.jsx)(T.Z, {}),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)(l.mzw, {
                "data-migration-pending": !0,
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(A, {
                        text: S.intl.string(S.t.cpT0Cg),
                        onClick: () => {
                            e(), p(c.NM.USER_SAFETY_TOOLS_DISMISS);
                        },
                    }),
                    m(),
                ],
            }),
        ],
    });
};
