a.d(e, { default: () => w });
var n = a(627968),
    i = a(64700),
    r = a(189213),
    s = a(17928),
    l = a(499979),
    o = a(568602),
    d = a(834730),
    c = a(144228),
    u = a(260598),
    m = a(964486),
    _ = a(77729),
    h = a(328153),
    y = a(760751),
    g = a(954571),
    p = a(41984),
    x = a(833551),
    b = a(652215),
    v = a(985018),
    k = a(85987);
function w(t) {
    let { onClose: e, transitionState: a, clientSettingType: w, gameId: f } = t,
        [C, A] = i.useState("unreported"),
        [S, j] = i.useState(""),
        [E, M] = i.useState(!1),
        [R, z] = i.useState(!1),
        [D, F] = i.useState(!1),
        [L, N] = i.useState(!1),
        O = (0, s.bG)([y.A, h.Ay], () => {
            let t = f ?? h.Ay.getCurrentGameForAnalytics()?.id;
            return null == t ? null : y.A.getDetectableGame(t);
        }),
        P = (0, s.bG)([x.default], () => {
            let t = x.default?.getMostRecentOverlayRenderMethod() ?? void 0;
            return null != t ? p.Ue[t] : void 0;
        }),
        U = i.useMemo(() => {
            let t = {
                not_working: v.t.CHXHFX,
                not_useful: v.t.a95skc,
                game_crashes_occurred: v.t.IFZ0Sa,
                poor_performance: v.t.exRczv,
                too_many_notifications: v.t.XuBFBM,
                multiple_monitors: v.t.p8Ekyz,
                in_the_way_of_game: v.t.YP7Pin,
                other: v.t["YP/Ttl"],
            };
            return Object.keys(t).map((e) => ({ name: v.intl.string(t[e]), value: e }));
        }, []),
        Y = i.useCallback(async () => {
            if ("unreported" === C && 0 === S.length) {
                F(!0), await (0, l.yy)(100), F(!1), N(!0);
                return;
            }
            M(!0),
                await g.default.track(b.HAw.OVERLAY_DISABLED_SURVEY, {
                    reason: C,
                    comment: S,
                    client_setting_type: w,
                    application_id: O?.id,
                    application_name: O?.name,
                    most_recent_overlay_render_method: P,
                    hardware_display_count: (await _.A?.hardware?.getDisplayCount?.()) ?? null,
                }),
                await (0, l.yy)(1e3),
                M(!1),
                z(!0),
                await (0, l.yy)(1500),
                e();
        }, [C, S, w, O?.id, O?.name, P, e]);
    (0, m.Ay)(() => {
        g.default.track(b.HAw.OPEN_MODAL, { type: "overlay_disabled_questionnaire_modal" });
    });
    let G = i.useMemo(
        () => [
            { variant: "secondary", text: v.intl.string(v.t["5Wxrcd"]), onClick: e, disabled: E },
            {
                variant: D ? "secondary" : "primary",
                text: R ? v.intl.string(v.t.bxiZU6) : v.intl.string(v.t.geKm7t),
                onClick: Y,
                disabled: E || R,
                loading: E,
                autoFocus: !1,
            },
        ],
        [e, E, R, Y, D],
    );
    return (0, n.jsxs)(r.Modal, {
        onClose: e,
        transitionState: a,
        title: v.intl.string(v.t["9JKzxe"]),
        subtitle: v.intl.string(v.t["2yjnmb"]),
        actions: G,
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(o.b, {
                        isShaking: D,
                        intensity: 1,
                        className: k.lm,
                        children: (0, n.jsx)(d.E, {
                            variant: "text-sm/semibold",
                            color: L ? "text-feedback-critical" : "text-muted",
                            children: v.intl.string(v.t.yhUvdd),
                        }),
                    }),
                    (0, n.jsx)(c.z, {
                        value: "unreported" === C ? void 0 : C,
                        options: U,
                        onChange: (t) => {
                            A(t), N(!1), F(!1);
                        },
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: k.xi,
                children: [
                    (0, n.jsx)(d.E, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        className: k.NP,
                        children: v.intl.string(v.t.LYnrhc),
                    }),
                    (0, n.jsx)(u.f, {
                        autosize: !0,
                        value: S,
                        maxLength: 1e3,
                        showRemainingCharacterCount: !1,
                        placeholder: v.intl.string(v.t["gU+bVJ"]),
                        onChange: j,
                    }),
                ],
            }),
        ],
    });
}
