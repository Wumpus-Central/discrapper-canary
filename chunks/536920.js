n.d(t, { default: () => j }), n(388685), n(953529);
var a = n(951288),
    r = n(647438),
    i = n(442837),
    s = n(379649),
    l = n(755721),
    o = n(481060),
    c = n(493773),
    d = n(579806),
    u = n(594190),
    m = n(77498),
    _ = n(626135),
    h = n(837268),
    x = n(371651),
    g = n(981631),
    v = n(388032),
    p = n(361902);
function j(e) {
    let { onClose: t, transitionState: n, clientSettingType: j, gameId: C } = e,
        [y, k] = r.useState("unreported"),
        [b, f] = r.useState(""),
        [S, w] = r.useState(!1),
        [N, R] = r.useState(!1),
        [Z, z] = r.useState(!1),
        [B, H] = r.useState(!1),
        P = (0, i.e7)([m.Z, u.ZP], () => {
            var e;
            let t = null != C ? C : null == (e = u.ZP.getCurrentGameForAnalytics()) ? void 0 : e.id;
            return null == t ? null : m.Z.getDetectableGame(t);
        }),
        A = (0, i.e7)([x.default], () => {
            var e;
            let t =
                null !=
                (e = null === x.default || void 0 === x.default ? void 0 : x.default.getMostRecentOverlayRenderMethod())
                    ? e
                    : void 0;
            return null != t ? h.gl[t] : void 0;
        }),
        M = r.useMemo(() => {
            let e = {
                not_working: v.t.CHXHFR,
                not_useful: v.t.a95skZ,
                game_crashes_occurred: v.t.IFZ0SU,
                poor_performance: v.t.exRczs,
                too_many_notifications: v.t.XuBFBA,
                multiple_monitors: v.t.p8Eky8,
                in_the_way_of_game: v.t.YP7Pio,
                other: v.t["YP/Ttr"],
            };
            return Object.keys(e).map((t) => ({
                name: v.intl.string(e[t]),
                value: t,
            }));
        }, []),
        Y = async () => {
            var e, n, a;
            if ("unreported" === y && 0 === b.length) {
                z(!0), await (0, s._v)(100), z(!1), H(!0);
                return;
            }
            w(!0),
                await _.default.track(g.rMx.OVERLAY_DISABLED_SURVEY, {
                    reason: y,
                    comment: b,
                    client_setting_type: j,
                    application_id: null == P ? void 0 : P.id,
                    application_name: null == P ? void 0 : P.name,
                    most_recent_overlay_render_method: A,
                    hardware_display_count:
                        null !=
                        (a = await (null === d.Z ||
                        void 0 === d.Z ||
                        null == (n = d.Z.hardware) ||
                        null == (e = n.getDisplayCount)
                            ? void 0
                            : e.call(n)))
                            ? a
                            : null,
                }),
                await (0, s._v)(1000),
                w(!1),
                R(!0),
                await (0, s._v)(1500),
                t();
        };
    return (
        (0, c.ZP)(() => {
            _.default.track(g.rMx.OPEN_MODAL, { type: "overlay_disabled_questionnaire_modal" });
        }),
        (0, a.jsxs)(o.Y0X, {
            transitionState: n,
            "aria-label": v.intl.string(v.t.bomhnZ),
            size: o.CgR.DYNAMIC,
            className: p.root,
            parentComponent: "OverlayDisabledSurveyModal",
            children: [
                (0, a.jsxs)(o.xBx, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: p.header,
                            children: [
                                (0, a.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    color: "header-primary",
                                    children: v.intl.string(v.t["9JKzxc"]),
                                }),
                                (0, a.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    className: p.description,
                                    children: v.intl.string(v.t["2yjnmZ"]),
                                }),
                            ],
                        }),
                        (0, a.jsx)(o.olH, {
                            onClick: t,
                            className: p.closeButton,
                        }),
                    ],
                }),
                (0, a.jsx)(o.hzk, {
                    className: p.reasonContainer,
                    children: (0, a.jsxs)(o.Ttm, {
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(o.UkV, {
                                        isShaking: Z,
                                        intensity: 1,
                                        className: p.radioHeader,
                                        children: (0, a.jsx)(o.Text, {
                                            variant: "text-sm/semibold",
                                            color: B ? "text-danger" : "text-muted",
                                            children: v.intl.string(v.t.yhUvdX),
                                        }),
                                    }),
                                    (0, a.jsx)(o.FXm, {
                                        value: y,
                                        options: M,
                                        onChange: (e) => {
                                            k(e), H(!1), z(!1);
                                        },
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: p.commentContainer,
                                children: [
                                    (0, a.jsx)(o.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-muted",
                                        className: p.commentHeader,
                                        children: v.intl.string(v.t.LYnrhY),
                                    }),
                                    (0, a.jsx)(o.Kx8, {
                                        autosize: !0,
                                        value: b,
                                        maxLength: 1000,
                                        showRemainingCharacterCount: !1,
                                        placeholder: v.intl.string(v.t["gU+bVF"]),
                                        onChange: f,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)(o.mzw, {
                    className: p.buttons,
                    children: [
                        (0, a.jsx)(o.Button, {
                            variant: "secondary",
                            text: v.intl.string(v.t["5WxrcX"]),
                            disabled: S,
                            onClick: () => {
                                t();
                            },
                        }),
                        (0, a.jsx)(o.UkV, {
                            isShaking: Z,
                            intensity: 1,
                            children: (0, a.jsx)(l.zx, {
                                disabled: S,
                                submitting: S,
                                onClick: Y,
                                color: (() => {
                                    switch (!0) {
                                        case N:
                                            return l.zx.Colors.GREEN;
                                        case Z:
                                            return l.zx.Colors.PRIMARY;
                                        default:
                                            return l.zx.Colors.BRAND;
                                    }
                                })(),
                                children: (() => {
                                    switch (!0) {
                                        case N:
                                            return (0, a.jsx)(o.kmB, {});
                                        case S:
                                            return (0, a.jsx)(o.$jN, { type: o.RAz.PULSING_ELLIPSIS });
                                        default:
                                            return v.intl.string(v.t.geKm7u);
                                    }
                                })(),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
