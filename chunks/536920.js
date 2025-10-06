a.d(t, { default: () => C }), a(388685), a(953529);
var n = a(951288),
    r = a(647438),
    i = a(442837),
    o = a(379649),
    s = a(755721),
    l = a(481060),
    d = a(493773),
    c = a(579806),
    u = a(594190),
    m = a(77498),
    _ = a(626135),
    h = a(837268),
    x = a(371651),
    p = a(981631),
    g = a(388032),
    v = a(94092);
function C(e) {
    let { onClose: t, transitionState: a, clientSettingType: C, gameId: j } = e,
        [y, k] = r.useState("unreported"),
        [b, f] = r.useState(""),
        [N, S] = r.useState(!1),
        [w, R] = r.useState(!1),
        [z, Z] = r.useState(!1),
        [I, P] = r.useState(!1),
        A = (0, i.e7)([m.Z, u.ZP], () => {
            var e;
            let t = null != j ? j : null == (e = u.ZP.getCurrentGameForAnalytics()) ? void 0 : e.id;
            return null == t ? null : m.Z.getDetectableGame(t);
        }),
        B = (0, i.e7)([x.default], () => {
            var e;
            let t =
                null !=
                (e = null === x.default || void 0 === x.default ? void 0 : x.default.getMostRecentOverlayRenderMethod())
                    ? e
                    : void 0;
            return null != t ? h.gl[t] : void 0;
        }),
        H = r.useMemo(() => {
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
        M = async () => {
            var e, a, n;
            if ("unreported" === y && 0 === b.length) {
                Z(!0), await (0, o._v)(100), Z(!1), P(!0);
                return;
            }
            S(!0),
                await _.default.track(p.rMx.OVERLAY_DISABLED_SURVEY, {
                    reason: y,
                    comment: b,
                    client_setting_type: C,
                    application_id: null == A ? void 0 : A.id,
                    application_name: null == A ? void 0 : A.name,
                    most_recent_overlay_render_method: B,
                    hardware_display_count:
                        null !=
                        (n = await (null === c.Z ||
                        void 0 === c.Z ||
                        null == (a = c.Z.hardware) ||
                        null == (e = a.getDisplayCount)
                            ? void 0
                            : e.call(a)))
                            ? n
                            : null,
                }),
                await (0, o._v)(1000),
                S(!1),
                R(!0),
                await (0, o._v)(1500),
                t();
        };
    return (
        (0, d.ZP)(() => {
            _.default.track(p.rMx.OPEN_MODAL, { type: "overlay_disabled_questionnaire_modal" });
        }),
        (0, n.jsxs)(l.Y0X, {
            transitionState: a,
            "aria-label": g.intl.string(g.t.bomhnZ),
            size: l.CgR.DYNAMIC,
            className: v.root,
            parentComponent: "OverlayDisabledSurveyModal",
            children: [
                (0, n.jsxs)(l.xBx, {
                    children: [
                        (0, n.jsxs)("div", {
                            className: v.header,
                            children: [
                                (0, n.jsx)(l.X6q, {
                                    variant: "heading-lg/semibold",
                                    color: "header-primary",
                                    children: g.intl.string(g.t["9JKzxc"]),
                                }),
                                (0, n.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    className: v.description,
                                    children: g.intl.string(g.t["2yjnmZ"]),
                                }),
                            ],
                        }),
                        (0, n.jsx)(l.olH, {
                            onClick: t,
                            className: v.closeButton,
                        }),
                    ],
                }),
                (0, n.jsx)(l.hzk, {
                    className: v.reasonContainer,
                    children: (0, n.jsxs)(l.Ttm, {
                        children: [
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsx)(l.UkV, {
                                        isShaking: z,
                                        intensity: 1,
                                        className: v.radioHeader,
                                        children: (0, n.jsx)(l.Text, {
                                            variant: "text-sm/semibold",
                                            color: I ? "text-danger" : "text-muted",
                                            children: g.intl.string(g.t.yhUvdX),
                                        }),
                                    }),
                                    (0, n.jsx)(s.Gu, {
                                        value: y,
                                        radioItemClassName: v.radioItem,
                                        className: v.radioGroup,
                                        radioPosition: "right",
                                        options: H,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            k(t), P(!1), Z(!1);
                                        },
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: v.commentContainer,
                                children: [
                                    (0, n.jsx)(l.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-muted",
                                        className: v.commentHeader,
                                        children: g.intl.string(g.t.LYnrhY),
                                    }),
                                    (0, n.jsx)(l.Kx8, {
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
                (0, n.jsxs)(l.mzw, {
                    className: v.buttons,
                    children: [
                        (0, n.jsx)(l.zxk, {
                            variant: "secondary",
                            text: g.intl.string(g.t["5WxrcX"]),
                            disabled: N,
                            onClick: () => {
                                t();
                            },
                        }),
                        (0, n.jsx)(l.UkV, {
                            isShaking: z,
                            intensity: 1,
                            children: (0, n.jsx)(s.zx, {
                                disabled: N,
                                submitting: N,
                                onClick: M,
                                color: (() => {
                                    switch (!0) {
                                        case w:
                                            return s.zx.Colors.GREEN;
                                        case z:
                                            return s.zx.Colors.PRIMARY;
                                        default:
                                            return s.zx.Colors.BRAND;
                                    }
                                })(),
                                children: (() => {
                                    switch (!0) {
                                        case w:
                                            return (0, n.jsx)(l.kmB, {});
                                        case N:
                                            return (0, n.jsx)(l.$jN, { type: l.RAz.PULSING_ELLIPSIS });
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
