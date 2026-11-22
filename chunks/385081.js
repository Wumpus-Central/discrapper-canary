var l = e(149468),
    i = e(129230),
    _ = e(723702),
    u = e(260498),
    o = e(246338),
    r = e(652215);
function a(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function s(t) {
    let n = u.Ay.getProject(t);
    return {
        project_id: t,
        project_name: a(n?.name),
        application_id: n?.application_id ?? null,
        preview_application_id: n?.preview_application_id ?? null,
        install_scope: n?.install_scope ?? null,
    };
}
function c(t, n) {
    let e = u.Ay.getProject(t),
        l = (n ? e?.preview_guild_id : e?.guild_id) ?? null,
        i = (n ? e?.preview_application_id : e?.application_id) ?? null;
    return { guild_id: l, channel_id: null != l && null != i ? (0, o.i8)(l, i) : null };
}
e.d(
    n,
    {},
    {
        Hy: function (t, n) {
            let { location: e, code: i, message: _, details: u, isPreview: o = !0, turnId: p } = n;
            (0, l.zV)(r.HAw.CONJURE_ERRORED, {
                ...s(t),
                is_preview: o,
                ...c(t, o),
                turn_id: p ?? null,
                error_location: e,
                error_code: i,
                error_message: a(_),
                error_details: a(u),
            });
        },
        hV: function (t, n) {
            var e;
            (0, l.zV)(r.HAw.CONJURE_TURN_RESULTED, {
                ...s(t),
                ...c(t, !0),
                turn_id: n.turn_id ?? null,
                turn_result: n.result ?? null,
                turn_summary: a(n.detail ?? n.summary),
                turn_cost: n.cost_usd ?? null,
                turn_duration_ms: n.duration_ms ?? null,
                model_tier: n.model_tier ?? null,
                ...(null == (e = n.tokens)
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
        wQ: function (t, n) {
            let e = u.Ay.getProject(t);
            i.default.track(r.HAw.CONJURE_BUILDER_OPENED, {
                project_id: t,
                entry_point: n,
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
        yJ: function (t, n) {
            let { entryPoint: e, publishState: i, surface: _, installScope: o, action: a } = n,
                s = u.Ay.getProject(t);
            (0, l.zV)(r.HAw.CONJURE_PUBLISH_ACTION_CLICKED, {
                project_id: t,
                application_id: s?.application_id ?? null,
                ...("user" === o ? { guild_id: null, channel_id: null } : c(t, !1)),
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
                install_scope: o,
                action: a,
            });
        },
    },
);
