a.d(e, { default: () => b });
var n = a(627968),
    i = a(64700),
    r = a(158954),
    s = a(311907),
    l = a(499979),
    o = a(397927),
    d = a(964486),
    c = a(77729),
    u = a(15285),
    m = a(760751),
    _ = a(954571),
    h = a(41984),
    y = a(833551),
    g = a(652215),
    p = a(985018),
    x = a(521797);
function b(t) {
    let { onClose: e, transitionState: a, clientSettingType: b, gameId: v } = t,
        [k, f] = i.useState("unreported"),
        [w, C] = i.useState(""),
        [A, S] = i.useState(!1),
        [j, M] = i.useState(!1),
        [H, N] = i.useState(!1),
        [P, R] = i.useState(!1),
        z = (0, s.bG)([m.A, u.Ay], () => {
            let t = v ?? u.Ay.getCurrentGameForAnalytics()?.id;
            return null == t ? null : m.A.getDetectableGame(t);
        }),
        D = (0, s.bG)([y.default], () => {
            let t = y.default?.getMostRecentOverlayRenderMethod() ?? void 0;
            return null != t ? h.Ue[t] : void 0;
        }),
        E = i.useMemo(() => {
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
            return Object.keys(t).map((e) => ({ name: p.intl.string(t[e]), value: e }));
        }, []),
        F = i.useCallback(async () => {
            if ("unreported" === k && 0 === w.length) {
                N(!0), await (0, l.yy)(100), N(!1), R(!0);
                return;
            }
            S(!0),
                await _.default.track(g.HAw.OVERLAY_DISABLED_SURVEY, {
                    reason: k,
                    comment: w,
                    client_setting_type: b,
                    application_id: z?.id,
                    application_name: z?.name,
                    most_recent_overlay_render_method: D,
                    hardware_display_count: (await c.A?.hardware?.getDisplayCount?.()) ?? null,
                }),
                await (0, l.yy)(1e3),
                S(!1),
                M(!0),
                await (0, l.yy)(1500),
                e();
        }, [k, w, b, z?.id, z?.name, D, e]);
    (0, d.Ay)(() => {
        _.default.track(g.HAw.OPEN_MODAL, { type: "overlay_disabled_questionnaire_modal" });
    });
    let L = i.useMemo(
        () => [
            { variant: "secondary", text: p.intl.string(p.t["5Wxrcd"]), onClick: e, disabled: A },
            {
                variant: H ? "secondary" : "primary",
                text: j ? p.intl.string(p.t.bxiZU6) : p.intl.string(p.t.geKm7t),
                onClick: F,
                disabled: A || j,
                loading: A,
                autoFocus: !1,
            },
        ],
        [e, A, j, F, H],
    );
    return (0, n.jsxs)(r.Modal, {
        onClose: e,
        transitionState: a,
        title: p.intl.string(p.t["9JKzxe"]),
        subtitle: p.intl.string(p.t["2yjnmb"]),
        actions: L,
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(o.bfh, {
                        isShaking: H,
                        intensity: 1,
                        className: x.lm,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-sm/semibold",
                            color: P ? "text-feedback-critical" : "text-muted",
                            children: p.intl.string(p.t.yhUvdd),
                        }),
                    }),
                    (0, n.jsx)(o.z6M, {
                        value: k,
                        options: E,
                        onChange: (t) => {
                            f(t), R(!1), N(!1);
                        },
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: x.xi,
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        className: x.NP,
                        children: p.intl.string(p.t.LYnrhc),
                    }),
                    (0, n.jsx)(o.fs1, {
                        autosize: !0,
                        value: w,
                        maxLength: 1e3,
                        showRemainingCharacterCount: !1,
                        placeholder: p.intl.string(p.t["gU+bVJ"]),
                        onChange: C,
                    }),
                ],
            }),
        ],
    });
}
