a.d(e, { default: () => x }), a(896048);
var n = a(627968),
    l = a(64700),
    i = a(158954),
    r = a(311907),
    s = a(499979),
    o = a(397927),
    d = a(964486),
    u = a(77729),
    c = a(15285),
    m = a(760751),
    _ = a(954571),
    h = a(41984),
    v = a(833551),
    y = a(652215),
    g = a(985018),
    p = a(521797);
function x(t) {
    let { onClose: e, transitionState: a, clientSettingType: x, gameId: b } = t,
        [f, k] = l.useState("unreported"),
        [w, A] = l.useState(""),
        [C, S] = l.useState(!1),
        [j, M] = l.useState(!1),
        [N, P] = l.useState(!1),
        [R, z] = l.useState(!1),
        D = (0, r.bG)([m.A, c.Ay], () => {
            var t;
            let e = null != b ? b : null == (t = c.Ay.getCurrentGameForAnalytics()) ? void 0 : t.id;
            return null == e ? null : m.A.getDetectableGame(e);
        }),
        E = (0, r.bG)([v.default], () => {
            var t;
            let e =
                null !=
                (t = null === v.default || void 0 === v.default ? void 0 : v.default.getMostRecentOverlayRenderMethod())
                    ? t
                    : void 0;
            return null != e ? h.Ue[e] : void 0;
        }),
        F = l.useMemo(() => {
            let t = {
                not_working: g.t.CHXHFX,
                not_useful: g.t.a95skc,
                game_crashes_occurred: g.t.IFZ0Sa,
                poor_performance: g.t.exRczv,
                too_many_notifications: g.t.XuBFBM,
                multiple_monitors: g.t.p8Ekyz,
                in_the_way_of_game: g.t.YP7Pin,
                other: g.t["YP/Ttl"],
            };
            return Object.keys(t).map((e) => ({
                name: g.intl.string(t[e]),
                value: e,
            }));
        }, []),
        L = l.useCallback(async () => {
            var t, a, n;
            if ("unreported" === f && 0 === w.length) {
                P(!0), await (0, s.yy)(100), P(!1), z(!0);
                return;
            }
            S(!0),
                await _.default.track(y.HAw.OVERLAY_DISABLED_SURVEY, {
                    reason: f,
                    comment: w,
                    client_setting_type: x,
                    application_id: null == D ? void 0 : D.id,
                    application_name: null == D ? void 0 : D.name,
                    most_recent_overlay_render_method: E,
                    hardware_display_count:
                        null !=
                        (t = await (null === u.A ||
                        void 0 === u.A ||
                        null == (n = u.A.hardware) ||
                        null == (a = n.getDisplayCount)
                            ? void 0
                            : a.call(n)))
                            ? t
                            : null,
                }),
                await (0, s.yy)(1000),
                S(!1),
                M(!0),
                await (0, s.yy)(1500),
                e();
        }, [f, w, x, null == D ? void 0 : D.id, null == D ? void 0 : D.name, E, e]);
    (0, d.Ay)(() => {
        _.default.track(y.HAw.OPEN_MODAL, { type: "overlay_disabled_questionnaire_modal" });
    });
    let O = l.useMemo(
        () => [
            {
                variant: "secondary",
                text: g.intl.string(g.t["5Wxrcd"]),
                onClick: e,
                disabled: C,
            },
            {
                variant: N ? "secondary" : "primary",
                text: j ? g.intl.string(g.t.bxiZU6) : g.intl.string(g.t.geKm7t),
                onClick: L,
                disabled: C || j,
                loading: C,
                autoFocus: !1,
            },
        ],
        [e, C, j, L, N],
    );
    return (0, n.jsxs)(i.Modal, {
        onClose: e,
        transitionState: a,
        title: g.intl.string(g.t["9JKzxe"]),
        subtitle: g.intl.string(g.t["2yjnmb"]),
        actions: O,
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(o.bfh, {
                        isShaking: N,
                        intensity: 1,
                        className: p.lm,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-sm/semibold",
                            color: R ? "text-feedback-critical" : "text-muted",
                            children: g.intl.string(g.t.yhUvdd),
                        }),
                    }),
                    (0, n.jsx)(o.z6M, {
                        value: f,
                        options: F,
                        onChange: (t) => {
                            k(t), z(!1), P(!1);
                        },
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: p.xi,
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        className: p.NP,
                        children: g.intl.string(g.t.LYnrhc),
                    }),
                    (0, n.jsx)(o.fs1, {
                        autosize: !0,
                        value: w,
                        maxLength: 1000,
                        showRemainingCharacterCount: !1,
                        placeholder: g.intl.string(g.t["gU+bVJ"]),
                        onChange: A,
                    }),
                ],
            }),
        ],
    });
}
