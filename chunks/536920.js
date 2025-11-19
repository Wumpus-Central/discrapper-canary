n.d(e, { default: () => y }), n(388685);
var a = n(54381),
    i = n(473749),
    l = n(793030),
    r = n(442837),
    o = n(379649),
    s = n(481060),
    d = n(493773),
    u = n(579806),
    c = n(594190),
    m = n(77498),
    _ = n(626135),
    v = n(837268),
    g = n(371651),
    h = n(981631),
    p = n(388032),
    x = n(361902);
function y(t) {
    let { onClose: e, transitionState: n, clientSettingType: y, gameId: C } = t,
        [f, k] = i.useState("unreported"),
        [b, w] = i.useState(""),
        [S, j] = i.useState(!1),
        [Z, M] = i.useState(!1),
        [H, P] = i.useState(!1),
        [F, R] = i.useState(!1),
        D = (0, r.e7)([m.Z, c.ZP], () => {
            var t;
            let e = null != C ? C : null == (t = c.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id;
            return null == e ? null : m.Z.getDetectableGame(e);
        }),
        E = (0, r.e7)([g.default], () => {
            var t;
            let e =
                null !=
                (t = null === g.default || void 0 === g.default ? void 0 : g.default.getMostRecentOverlayRenderMethod())
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
            var t, n, a;
            if ("unreported" === f && 0 === b.length) {
                P(!0), await (0, o._v)(100), P(!1), R(!0);
                return;
            }
            j(!0),
                await _.default.track(h.rMx.OVERLAY_DISABLED_SURVEY, {
                    reason: f,
                    comment: b,
                    client_setting_type: y,
                    application_id: null == D ? void 0 : D.id,
                    application_name: null == D ? void 0 : D.name,
                    most_recent_overlay_render_method: E,
                    hardware_display_count:
                        null !=
                        (a = await (null === u.Z ||
                        void 0 === u.Z ||
                        null == (n = u.Z.hardware) ||
                        null == (t = n.getDisplayCount)
                            ? void 0
                            : t.call(n)))
                            ? a
                            : null,
                }),
                await (0, o._v)(1000),
                j(!1),
                M(!0),
                await (0, o._v)(1500),
                e();
        }, [f, b, y, null == D ? void 0 : D.id, null == D ? void 0 : D.name, E, e]);
    (0, d.ZP)(() => {
        _.default.track(h.rMx.OPEN_MODAL, { type: "overlay_disabled_questionnaire_modal" });
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
    return (0, a.jsxs)(l.Modal, {
        onClose: e,
        transitionState: n,
        title: p.intl.string(p.t["9JKzxe"]),
        subtitle: p.intl.string(p.t["2yjnmb"]),
        actions: U,
        children: [
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(s.UkV, {
                        isShaking: H,
                        intensity: 1,
                        className: x.radioHeader,
                        children: (0, a.jsx)(s.Text, {
                            variant: "text-sm/semibold",
                            color: F ? "text-danger" : "text-muted",
                            children: p.intl.string(p.t.yhUvdd),
                        }),
                    }),
                    (0, a.jsx)(s.FXm, {
                        value: f,
                        options: L,
                        onChange: (t) => {
                            k(t), R(!1), P(!1);
                        },
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: x.commentContainer,
                children: [
                    (0, a.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        className: x.commentHeader,
                        children: p.intl.string(p.t.LYnrhc),
                    }),
                    (0, a.jsx)(s.Kx8, {
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
