n.d(t, { default: () => v }), n(388685), n(953529);
var a = n(951288),
    r = n(647438),
    i = n(442837),
    s = n(379649),
    o = n(755721),
    l = n(481060),
    d = n(493773),
    c = n(594190),
    u = n(77498),
    m = n(626135),
    _ = n(837268),
    x = n(371651),
    h = n(981631),
    p = n(388032),
    g = n(361902);
function v(e) {
    let { onClose: t, transitionState: n, clientSettingType: v, gameId: j } = e,
        [C, y] = r.useState("unreported"),
        [k, b] = r.useState(""),
        [f, N] = r.useState(!1),
        [S, R] = r.useState(!1),
        [w, z] = r.useState(!1),
        [I, P] = r.useState(!1),
        A = (0, i.e7)([u.Z, c.ZP], () => {
            var e;
            let t = null != j ? j : null == (e = c.ZP.getCurrentGameForAnalytics()) ? void 0 : e.id;
            return null == t ? null : u.Z.getDetectableGame(t);
        }),
        B = (0, i.e7)([x.default], () => {
            var e;
            let t =
                null !=
                (e = null === x.default || void 0 === x.default ? void 0 : x.default.getMostRecentOverlayRenderMethod())
                    ? e
                    : void 0;
            return null != t ? _.gl[t] : void 0;
        }),
        H = r.useMemo(() => {
            let e = {
                not_working: p.t.CHXHFR,
                not_useful: p.t.a95skZ,
                game_crashes_occurred: p.t.IFZ0SU,
                poor_performance: p.t.exRczs,
                too_many_notifications: p.t.XuBFBA,
                multiple_monitors: p.t.p8Eky8,
                in_the_way_of_game: p.t.YP7Pio,
                other: p.t["YP/Ttr"],
            };
            return Object.keys(e).map((t) => ({
                name: p.intl.string(e[t]),
                value: t,
            }));
        }, []),
        M = async () => {
            if ("unreported" === C && 0 === k.length) {
                z(!0), await (0, s._v)(100), z(!1), P(!0);
                return;
            }
            N(!0),
                await m.default.track(h.rMx.OVERLAY_DISABLED_SURVEY, {
                    reason: C,
                    comment: k,
                    client_setting_type: v,
                    application_id: null == A ? void 0 : A.id,
                    application_name: null == A ? void 0 : A.name,
                    most_recent_overlay_render_method: B,
                }),
                await (0, s._v)(1000),
                N(!1),
                R(!0),
                await (0, s._v)(1500),
                t();
        };
    return (
        (0, d.ZP)(() => {
            m.default.track(h.rMx.OPEN_MODAL, { type: "overlay_disabled_questionnaire_modal" });
        }),
        (0, a.jsxs)(l.Y0X, {
            transitionState: n,
            "aria-label": p.intl.string(p.t.bomhnZ),
            size: l.CgR.DYNAMIC,
            className: g.root,
            parentComponent: "OverlayDisabledSurveyModal",
            children: [
                (0, a.jsxs)(l.xBx, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: g.header,
                            children: [
                                (0, a.jsx)(l.X6q, {
                                    variant: "heading-lg/semibold",
                                    color: "header-primary",
                                    children: p.intl.string(p.t["9JKzxc"]),
                                }),
                                (0, a.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    className: g.description,
                                    children: p.intl.string(p.t["2yjnmZ"]),
                                }),
                            ],
                        }),
                        (0, a.jsx)(l.olH, {
                            onClick: t,
                            className: g.closeButton,
                        }),
                    ],
                }),
                (0, a.jsx)(l.hzk, {
                    className: g.reasonContainer,
                    children: (0, a.jsxs)(l.Ttm, {
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(l.UkV, {
                                        isShaking: w,
                                        intensity: 1,
                                        className: g.radioHeader,
                                        children: (0, a.jsx)(l.Text, {
                                            variant: "text-sm/semibold",
                                            color: I ? "text-danger" : "text-muted",
                                            children: p.intl.string(p.t.yhUvdX),
                                        }),
                                    }),
                                    (0, a.jsx)(l.FXm, {
                                        value: C,
                                        radioItemClassName: g.radioItem,
                                        className: g.radioGroup,
                                        radioPosition: "right",
                                        options: H,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            y(t), P(!1), z(!1);
                                        },
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: g.commentContainer,
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-muted",
                                        className: g.commentHeader,
                                        children: p.intl.string(p.t.LYnrhY),
                                    }),
                                    (0, a.jsx)(l.Kx8, {
                                        autosize: !0,
                                        value: k,
                                        maxLength: 1000,
                                        showRemainingCharacterCount: !1,
                                        placeholder: p.intl.string(p.t["gU+bVF"]),
                                        onChange: b,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)(l.mzw, {
                    className: g.buttons,
                    children: [
                        (0, a.jsx)(l.zxk, {
                            variant: "secondary",
                            text: p.intl.string(p.t["5WxrcX"]),
                            disabled: f,
                            onClick: () => {
                                t();
                            },
                        }),
                        (0, a.jsx)(l.UkV, {
                            isShaking: w,
                            intensity: 1,
                            children: (0, a.jsx)(o.zx, {
                                disabled: f,
                                submitting: f,
                                onClick: M,
                                color: (() => {
                                    switch (!0) {
                                        case S:
                                            return o.zx.Colors.GREEN;
                                        case w:
                                            return o.zx.Colors.PRIMARY;
                                        default:
                                            return o.zx.Colors.BRAND;
                                    }
                                })(),
                                children: (() => {
                                    switch (!0) {
                                        case S:
                                            return (0, a.jsx)(l.kmB, {});
                                        case f:
                                            return (0, a.jsx)(l.$jN, { type: l.RAz.PULSING_ELLIPSIS });
                                        default:
                                            return p.intl.string(p.t.geKm7u);
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
