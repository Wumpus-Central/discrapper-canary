a.d(e, { default: () => f }), a(388685);
var n = a(54381),
    i = a(473749),
    l = a(793030),
    r = a(442837),
    o = a(379649),
    s = a(481060),
    d = a(493773),
    u = a(579806),
    c = a(594190),
    m = a(404577),
    _ = a(626135),
    v = a(837268),
    h = a(371651),
    g = a(981631),
    p = a(388032),
    x = a(23898);
function f(t) {
    let { onClose: e, transitionState: a, clientSettingType: f, gameId: y } = t,
        [k, C] = i.useState("unreported"),
        [b, w] = i.useState(""),
        [S, j] = i.useState(!1),
        [Z, M] = i.useState(!1),
        [H, P] = i.useState(!1),
        [F, R] = i.useState(!1),
        D = (0, r.e7)([m.Z, c.ZP], () => {
            var t;
            let e = null != y ? y : null == (t = c.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id;
            return null == e ? null : m.Z.getDetectableGame(e);
        }),
        E = (0, r.e7)([h.default], () => {
            var t;
            let e =
                null !=
                (t = null === h.default || void 0 === h.default ? void 0 : h.default.getMostRecentOverlayRenderMethod())
                    ? t
                    : void 0;
            return null != e ? v.gl[e] : void 0;
        }),
        L = i.useMemo(() => {
            let t = {
                not_working: p.t.CHXHFX,
                not_useful: p.t.a95skc,
                game_crashes_occurred: p.t.IFZ0Sa,
                poor_performance: p.t.exRczv,
                too_many_notifications: p.t.XuBFBM,
                multiple_monitors: p.t.p8Ekyz,
                in_the_way_of_game: p.t.YP7Pin,
                other: p.t["YP/Ttl"],
            };
            return Object.keys(t).map((e) => ({
                name: p.intl.string(t[e]),
                value: e,
            }));
        }, []),
        O = i.useCallback(async () => {
            var t, a, n;
            if ("unreported" === k && 0 === b.length) {
                P(!0), await (0, o._v)(100), P(!1), R(!0);
                return;
            }
            j(!0),
                await _.default.track(g.rMx.OVERLAY_DISABLED_SURVEY, {
                    reason: k,
                    comment: b,
                    client_setting_type: f,
                    application_id: null == D ? void 0 : D.id,
                    application_name: null == D ? void 0 : D.name,
                    most_recent_overlay_render_method: E,
                    hardware_display_count:
                        null !=
                        (n = await (null === u.Z ||
                        void 0 === u.Z ||
                        null == (a = u.Z.hardware) ||
                        null == (t = a.getDisplayCount)
                            ? void 0
                            : t.call(a)))
                            ? n
                            : null,
                }),
                await (0, o._v)(1000),
                j(!1),
                M(!0),
                await (0, o._v)(1500),
                e();
        }, [k, b, f, null == D ? void 0 : D.id, null == D ? void 0 : D.name, E, e]);
    (0, d.ZP)(() => {
        _.default.track(g.rMx.OPEN_MODAL, { type: "overlay_disabled_questionnaire_modal" });
    });
    let U = i.useMemo(
        () => [
            {
                variant: "secondary",
                text: p.intl.string(p.t["5Wxrcd"]),
                onClick: e,
                disabled: S,
            },
            {
                variant: H ? "secondary" : "primary",
                text: Z ? p.intl.string(p.t.bxiZU6) : p.intl.string(p.t.geKm7t),
                onClick: O,
                disabled: S || Z,
                loading: S,
                autoFocus: !1,
            },
        ],
        [e, S, Z, O, H],
    );
    return (0, n.jsxs)(l.Modal, {
        onClose: e,
        transitionState: a,
        title: p.intl.string(p.t["9JKzxe"]),
        subtitle: p.intl.string(p.t["2yjnmb"]),
        actions: U,
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(s.UkV, {
                        isShaking: H,
                        intensity: 1,
                        className: x.radioHeader,
                        children: (0, n.jsx)(s.Text, {
                            variant: "text-sm/semibold",
                            color: F ? "text-feedback-critical" : "text-muted",
                            children: p.intl.string(p.t.yhUvdd),
                        }),
                    }),
                    (0, n.jsx)(s.FXm, {
                        value: k,
                        options: L,
                        onChange: (t) => {
                            C(t), R(!1), P(!1);
                        },
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: x.commentContainer,
                children: [
                    (0, n.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        className: x.commentHeader,
                        children: p.intl.string(p.t.LYnrhc),
                    }),
                    (0, n.jsx)(s.Kx8, {
                        autosize: !0,
                        value: b,
                        maxLength: 1000,
                        showRemainingCharacterCount: !1,
                        placeholder: p.intl.string(p.t["gU+bVJ"]),
                        onChange: w,
                    }),
                ],
            }),
        ],
    });
}
