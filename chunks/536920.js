n.d(t, { default: () => j }), n(388685), n(953529);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    s = n(379649),
    l = n(755721),
    o = n(481060),
    d = n(493773),
    c = n(579806),
    u = n(594190),
    m = n(77498),
    _ = n(626135),
    h = n(837268),
    x = n(371651),
    v = n(981631),
    g = n(388032),
    p = n(94092);
function j(e) {
    let { onClose: t, transitionState: n, clientSettingType: j, gameId: C } = e,
        [y, b] = r.useState("unreported"),
        [k, f] = r.useState(""),
        [S, w] = r.useState(!1),
        [N, z] = r.useState(!1),
        [R, B] = r.useState(!1),
        [H, M] = r.useState(!1),
        P = (0, i.e7)([m.Z, u.ZP], () => {
            var e;
            let t = null != C ? C : null == (e = u.ZP.getCurrentGameForAnalytics()) ? void 0 : e.id;
            return null == t ? null : m.Z.getDetectableGame(t);
        }),
        Z = (0, i.e7)([x.default], () => {
            var e;
            let t =
                null !=
                (e = null === x.default || void 0 === x.default ? void 0 : x.default.getMostRecentOverlayRenderMethod())
                    ? e
                    : void 0;
            return null != t ? h.gl[t] : void 0;
        }),
        A = r.useMemo(() => {
            let e = {
                not_working: g.t.CHXHFX,
                not_useful: g.t.a95skc,
                game_crashes_occurred: g.t.IFZ0Sa,
                poor_performance: g.t.exRczv,
                too_many_notifications: g.t.XuBFBM,
                multiple_monitors: g.t.p8Ekyz,
                in_the_way_of_game: g.t.YP7Pin,
                other: g.t["YP/Ttl"],
            };
            return Object.keys(e).map((t) => ({
                name: g.intl.string(e[t]),
                value: t,
            }));
        }, []),
        D = async () => {
            var e, n, a;
            if ("unreported" === y && 0 === k.length) {
                B(!0), await (0, s._v)(100), B(!1), M(!0);
                return;
            }
            w(!0),
                await _.default.track(v.rMx.OVERLAY_DISABLED_SURVEY, {
                    reason: y,
                    comment: k,
                    client_setting_type: j,
                    application_id: null == P ? void 0 : P.id,
                    application_name: null == P ? void 0 : P.name,
                    most_recent_overlay_render_method: Z,
                    hardware_display_count:
                        null !=
                        (a = await (null === c.Z ||
                        void 0 === c.Z ||
                        null == (n = c.Z.hardware) ||
                        null == (e = n.getDisplayCount)
                            ? void 0
                            : e.call(n)))
                            ? a
                            : null,
                }),
                await (0, s._v)(1000),
                w(!1),
                z(!0),
                await (0, s._v)(1500),
                t();
        };
    return (
        (0, d.ZP)(() => {
            _.default.track(v.rMx.OPEN_MODAL, { type: "overlay_disabled_questionnaire_modal" });
        }),
        (0, a.jsxs)(o.Y0X, {
            transitionState: n,
            "aria-label": g.intl.string(g.t.bomhnX),
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
                                    children: g.intl.string(g.t["9JKzxe"]),
                                }),
                                (0, a.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    className: p.description,
                                    children: g.intl.string(g.t["2yjnmb"]),
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
                                        isShaking: R,
                                        intensity: 1,
                                        className: p.radioHeader,
                                        children: (0, a.jsx)(o.Text, {
                                            variant: "text-sm/semibold",
                                            color: H ? "text-danger" : "text-muted",
                                            children: g.intl.string(g.t.yhUvdd),
                                        }),
                                    }),
                                    (0, a.jsx)(o.FXm, {
                                        value: y,
                                        options: A,
                                        onChange: (e) => {
                                            b(e), M(!1), B(!1);
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
                                        children: g.intl.string(g.t.LYnrhc),
                                    }),
                                    (0, a.jsx)(o.Kx8, {
                                        autosize: !0,
                                        value: k,
                                        maxLength: 1000,
                                        showRemainingCharacterCount: !1,
                                        placeholder: g.intl.string(g.t["gU+bVJ"]),
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
                            text: g.intl.string(g.t["5Wxrcd"]),
                            disabled: S,
                            onClick: () => {
                                t();
                            },
                        }),
                        (0, a.jsx)(o.UkV, {
                            isShaking: R,
                            intensity: 1,
                            children: (0, a.jsx)(l.zx, {
                                disabled: S,
                                submitting: S,
                                onClick: D,
                                color: (() => {
                                    switch (!0) {
                                        case N:
                                            return l.zx.Colors.GREEN;
                                        case R:
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
                                            return g.intl.string(g.t.geKm7t);
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
