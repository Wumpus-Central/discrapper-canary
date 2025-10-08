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
    v = n(981631),
    g = n(388032),
    p = n(361902);
function j(e) {
    let { onClose: t, transitionState: n, clientSettingType: j, gameId: C } = e,
        [y, k] = r.useState("unreported"),
        [b, f] = r.useState(""),
        [S, w] = r.useState(!1),
        [N, R] = r.useState(!1),
        [z, Z] = r.useState(!1),
        [P, A] = r.useState(!1),
        B = (0, i.e7)([m.Z, u.ZP], () => {
            var e;
            let t = null != C ? C : null == (e = u.ZP.getCurrentGameForAnalytics()) ? void 0 : e.id;
            return null == t ? null : m.Z.getDetectableGame(t);
        }),
        H = (0, i.e7)([x.default], () => {
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
                not_working: g.t.CHXHFR,
                not_useful: g.t.a95skZ,
                game_crashes_occurred: g.t.IFZ0SU,
                poor_performance: g.t.exRczs,
                too_many_notifications: g.t.XuBFBA,
                multiple_monitors: g.t.p8Eky8,
                in_the_way_of_game: g.t.YP7Pio,
                other: g.t["YP/Ttr"],
            };
            return Object.keys(e).map((t) => ({
                name: g.intl.string(e[t]),
                value: t,
            }));
        }, []),
        Y = async () => {
            var e, n, a;
            if ("unreported" === y && 0 === b.length) {
                Z(!0), await (0, s._v)(100), Z(!1), A(!0);
                return;
            }
            w(!0),
                await _.default.track(v.rMx.OVERLAY_DISABLED_SURVEY, {
                    reason: y,
                    comment: b,
                    client_setting_type: j,
                    application_id: null == B ? void 0 : B.id,
                    application_name: null == B ? void 0 : B.name,
                    most_recent_overlay_render_method: H,
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
            _.default.track(v.rMx.OPEN_MODAL, { type: "overlay_disabled_questionnaire_modal" });
        }),
        (0, a.jsxs)(o.Y0X, {
            transitionState: n,
            "aria-label": g.intl.string(g.t.bomhnZ),
            size: o.CgR.DYNAMIC,
            className: p.root,
            parentComponent: "OverlayDisabledSurveyModal",
            children: [
                (0, a.jsxs)(o.xBx, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: p.header,
                            children: [
                                (0, a.jsx)(o.X6q, {
                                    variant: "heading-lg/semibold",
                                    color: "header-primary",
                                    children: g.intl.string(g.t["9JKzxc"]),
                                }),
                                (0, a.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    className: p.description,
                                    children: g.intl.string(g.t["2yjnmZ"]),
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
                                        isShaking: z,
                                        intensity: 1,
                                        className: p.radioHeader,
                                        children: (0, a.jsx)(o.Text, {
                                            variant: "text-sm/semibold",
                                            color: P ? "text-danger" : "text-muted",
                                            children: g.intl.string(g.t.yhUvdX),
                                        }),
                                    }),
                                    (0, a.jsx)(o.FXm, {
                                        value: y,
                                        options: M,
                                        onChange: (e) => {
                                            k(e), A(!1), Z(!1);
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
                                        children: g.intl.string(g.t.LYnrhY),
                                    }),
                                    (0, a.jsx)(o.Kx8, {
                                        autosize: !0,
                                        value: b,
                                        maxLength: 1000,
                                        showRemainingCharacterCount: !1,
                                        placeholder: g.intl.string(g.t["gU+bVF"]),
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
                        (0, a.jsx)(o.zxk, {
                            variant: "secondary",
                            text: g.intl.string(g.t["5WxrcX"]),
                            disabled: S,
                            onClick: () => {
                                t();
                            },
                        }),
                        (0, a.jsx)(o.UkV, {
                            isShaking: z,
                            intensity: 1,
                            children: (0, a.jsx)(l.zx, {
                                disabled: S,
                                submitting: S,
                                onClick: Y,
                                color: (() => {
                                    switch (!0) {
                                        case N:
                                            return l.zx.Colors.GREEN;
                                        case z:
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
                                            return g.intl.string(g.t.geKm7u);
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
