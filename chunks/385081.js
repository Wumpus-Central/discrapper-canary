n.d(e, { Hy: () => d, hV: () => s, w2: () => p, xf: () => a, yJ: () => R });
var i = n(587895),
    r = n(174459),
    l = n(42766),
    _ = n(246338),
    u = n(652215);
let a = {
    BUILD_FAILED: "BUILD_FAILED",
    HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
    AGENT_ERROR: "AGENT_ERROR",
    PUBLISH_FAILED: "PUBLISH_FAILED",
    WS_OPEN_FAILED: "WS_OPEN_FAILED",
    SEND_FAILED: "SEND_FAILED",
    RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
    RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
};
function o(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function c(t) {
    let e = l.Ay.getProject(t);
    return {
        project_id: t,
        project_name: o(e?.name),
        application_id: e?.application_id ?? null,
        preview_application_id: e?.preview_application_id ?? null,
    };
}
function E(t, e) {
    let n = l.Ay.getProject(t),
        i = (e ? n?.preview_guild_id : n?.guild_id) ?? null,
        r = (e ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != r ? (0, _.i8)(i, r) : null };
}
function s(t, e) {
    var n;
    r.default.track(u.HAw.VIBEGRATION_TURN_RESULTED, {
        ...c(t),
        turn_result: e.result ?? null,
        turn_summary: o(e.detail ?? e.summary),
        turn_cost: e.cost_usd ?? null,
        ...(null == (n = e.tokens)
            ? {
                  turn_input_tokens: null,
                  turn_output_tokens: null,
                  turn_cache_write_tokens: null,
                  turn_cache_read_tokens: null,
                  turn_total_tokens: null,
              }
            : {
                  turn_input_tokens: n.input_tokens,
                  turn_output_tokens: n.output_tokens,
                  turn_cache_write_tokens: n.cache_creation_input_tokens,
                  turn_cache_read_tokens: n.cache_read_input_tokens,
                  turn_total_tokens:
                      n.input_tokens + n.output_tokens + n.cache_creation_input_tokens + n.cache_read_input_tokens,
              }),
    });
}
function p(t, e) {
    let { isPreview: n } = e,
        l = c(t),
        _ = n ? l.preview_application_id : l.application_id,
        a = null != _ ? i.A.getApplication(_) : null;
    r.default.track(u.HAw.VIBEGRATION_DEPLOYED, {
        ...l,
        project_summary: o(a?.description),
        is_preview: n,
        ...E(t, n),
    });
}
function d(t, e) {
    let { location: n, code: i, message: l, details: _, isPreview: a = !0 } = e;
    r.default.track(u.HAw.VIBEGRATION_ERRORED, {
        ...c(t),
        is_preview: a,
        ...E(t, a),
        error_location: n,
        error_code: i,
        error_message: o(l),
        error_details: o(_),
    });
}
function R(t, e) {
    let { entryPoint: n, publishState: i, surface: _, installScope: a, action: o } = e,
        c = l.Ay.getProject(t);
    r.default.track(u.HAw.VIBEGRATION_PUBLISH_ACTION_CLICKED, {
        project_id: t,
        application_id: c?.application_id ?? null,
        guild_id: "user" === a ? null : (c?.guild_id ?? null),
        entry_point: n,
        publish_state: i,
        surface: _,
        install_scope: a,
        action: o,
    });
}
