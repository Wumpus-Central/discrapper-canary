var l = e(149468),
    i = e(129230),
    _ = e(723702),
    u = e(260498),
    a = e(246338),
    o = e(652215);
function r(n) {
    return null == n || "" === n ? null : n.slice(0, 256);
}
function s(n) {
    let t = u.Ay.getProject(n);
    return {
        project_id: n,
        project_name: r(t?.name),
        application_id: t?.application_id ?? null,
        preview_application_id: t?.preview_application_id ?? null,
        install_scope: t?.install_scope ?? null,
    };
}
function c(n, t) {
    let e = u.Ay.getProject(n),
        l = (t ? e?.preview_guild_id : e?.guild_id) ?? null,
        i = (t ? e?.preview_application_id : e?.application_id) ?? null;
    return { guild_id: l, channel_id: null != l && null != i ? (0, a.i8)(l, i) : null };
}
e.d(
    t,
    {},
    {
        Hy: function (n, t) {
            let { location: e, code: i, message: _, details: u, isPreview: a = !0, turnId: p } = t;
            (0, l.zV)(o.HAw.CONJURE_ERRORED, {
                ...s(n),
                is_preview: a,
                ...c(n, a),
                turn_id: p ?? null,
                error_location: e,
                error_code: i,
                error_message: r(_),
                error_details: r(u),
            });
        },
        hV: function (n, t) {
            var e;
            (0, l.zV)(o.HAw.CONJURE_TURN_RESULTED, {
                ...s(n),
                ...c(n, !0),
                turn_id: t.turn_id ?? null,
                turn_result: t.result ?? null,
                turn_summary: r(t.detail ?? t.summary),
                turn_cost: t.cost_usd ?? null,
                turn_duration_ms: t.duration_ms ?? null,
                model_tier: t.model_tier ?? null,
                ...(null == (e = t.tokens)
                    ? {
                          turn_input_tokens: null,
                          turn_output_tokens: null,
                          turn_cache_write_tokens: null,
                          turn_cache_read_tokens: null,
                          turn_total_tokens: null,
                      }
                    : {
                          turn_input_tokens: e.input_tokens,
                          turn_output_tokens: e.output_tokens,
                          turn_cache_write_tokens: e.cache_creation_input_tokens,
                          turn_cache_read_tokens: e.cache_read_input_tokens,
                          turn_total_tokens:
                              e.input_tokens +
                              e.output_tokens +
                              e.cache_creation_input_tokens +
                              e.cache_read_input_tokens,
                      }),
            });
        },
        wQ: function (n, t) {
            let e = u.Ay.getProject(n);
            i.default.track(o.HAw.CONJURE_BUILDER_OPENED, {
                project_id: n,
                entry_point: t,
                is_owner: null != e ? (0, u.PV)(e) : null,
                install_scope: e?.install_scope ?? null,
                client_platform: (0, _.m0)() ? "android" : (0, _.un)() ? "ios" : (0, _.xl)() ? "desktop" : "web",
            });
        },
        xf: {
            BUILD_FAILED: "BUILD_FAILED",
            HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
            AGENT_ERROR: "AGENT_ERROR",
            PUBLISH_FAILED: "PUBLISH_FAILED",
            WS_OPEN_FAILED: "WS_OPEN_FAILED",
            SEND_FAILED: "SEND_FAILED",
            RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
            RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
        },
        yJ: function (n, t) {
            let { entryPoint: e, publishState: i, surface: _, installScope: a } = t,
                r = u.Ay.getProject(n);
            (0, l.zV)(o.HAw.CONJURE_PUBLISH_ACTION_CLICKED, {
                project_id: n,
                application_id: r?.application_id ?? null,
                ...("user" === a ? { guild_id: null, channel_id: null } : c(n, !1)),
                entry_point: e,
                publish_state:
                    null == i
                        ? null
                        : "nothing_built" === i || "not_live" === i
                          ? "unpublished"
                          : "live_outdated" === i
                            ? "changes"
                            : "up_to_date",
                surface: _,
                install_scope: a,
                action: "publish",
            });
        },
    },
);
