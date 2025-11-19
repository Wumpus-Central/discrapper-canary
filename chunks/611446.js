n.d(e, {
    O: () => _,
    default: () => E,
}),
    n(388685);
var i,
    s = n(54381),
    r = n(473749),
    l = n(481060),
    a = n(600164),
    o = n(367408),
    c = n(473092),
    d = n(419672),
    T = n(858597),
    u = n(486213),
    S = n(388032),
    x = n(523547),
    _ =
        (((i = {}).ACTIONS = "ACTIONS"),
        (i.SAFETY_TIPS = "SAFETY_TIPS"),
        (i.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS"),
        i);
let E = (t) => {
    let { onClose: e, channelId: n, warningId: i, warningType: _, otherUserId: E, transitionState: g } = t,
        A = null != (0, o.M)(n),
        [O, h] = r.useState("ACTIONS"),
        m = r.useCallback(
            (t) => {
                (0, c.qc)({
                    channelId: n,
                    warningId: i,
                    warningType: _,
                    senderId: E,
                    cta: t,
                    isNudgeWarning: A,
                });
            },
            [n, i, _, E, A],
        ),
        p = r.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, s.jsx)(l.Avr, {
                onClick: n,
                text: e,
                variant: "secondary",
                textVariant: "text-sm/normal",
            });
        }, []),
        b = r.useCallback(() => {
            switch (O) {
                case "SAFETY_TIPS":
                case "ABOUT_SAFETY_ALERTS":
                    return (0, s.jsx)(p, {
                        text: S.intl.string(S.t["13/7kX"]),
                        onClick: () => h("ACTIONS"),
                    });
                default:
                    return null;
            }
        }, [O, p]),
        N = r.useCallback(() => {
            switch (O) {
                case "SAFETY_TIPS":
                    return S.intl.string(S.t.EtNxi6);
                case "ABOUT_SAFETY_ALERTS":
                    return S.intl.string(S.t.qI14KM);
                default:
                    return S.intl.string(S.t.MAhAp6);
            }
        }, [O]),
        j = r.useCallback(
            (t) => {
                h(t);
            },
            [h],
        );
    return (0, s.jsxs)(l.Y0X, {
        "data-migration-pending": !0,
        transitionState: g,
        "aria-label": S.intl.string(S.t.eXlt01),
        size: l.CgR.SMALL,
        parentComponent: "SafetyToolsModal",
        children: [
            (0, s.jsx)(l.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: x.modalHeader,
                justify: a.Z.Justify.CENTER,
                children: (0, s.jsx)(l.Heading, {
                    variant: "heading-xl/semibold",
                    children: N(),
                }),
            }),
            (0, s.jsx)(l.Ttm, {
                children: (0, s.jsxs)(l.MyZ, {
                    activeSlide: O,
                    width: 440,
                    children: [
                        (0, s.jsx)(l.Mi4, {
                            id: "ACTIONS",
                            children: (0, s.jsx)(T.Z, {
                                otherUserId: E,
                                channelId: n,
                                warningId: i,
                                warningType: _,
                                transitionToSlide: j,
                            }),
                        }),
                        (0, s.jsx)(l.Mi4, {
                            id: "ABOUT_SAFETY_ALERTS",
                            children: (0, s.jsx)(d.Z, {
                                channelId: n,
                                onClose: () => {
                                    e(), m(c.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                },
                            }),
                        }),
                        (0, s.jsx)(l.Mi4, {
                            id: "SAFETY_TIPS",
                            children: (0, s.jsx)(u.Z, {}),
                        }),
                    ],
                }),
            }),
            (0, s.jsxs)(l.mzw, {
                "data-migration-pending": !0,
                justify: a.Z.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(p, {
                        text: S.intl.string(S.t.cpT0Cq),
                        onClick: () => {
                            e(), m(c.NM.USER_SAFETY_TOOLS_DISMISS);
                        },
                    }),
                    b(),
                ],
            }),
        ],
    });
};
