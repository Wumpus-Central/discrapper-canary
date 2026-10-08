n.d(e, { Hy: () => d, hV: () => s, w2: () => p, xf: () => o, yJ: () => R });
var i = n(587895),
    r = n(174459),
    _ = n(260498),
    l = n(246338),
    u = n(652215);
let o = {
    BUILD_FAILED: "BUILD_FAILED",
    HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
    AGENT_ERROR: "AGENT_ERROR",
    PUBLISH_FAILED: "PUBLISH_FAILED",
    WS_OPEN_FAILED: "WS_OPEN_FAILED",
    SEND_FAILED: "SEND_FAILED",
    RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
    RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
};
function a(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function c(t) {
    let e = _.Ay.getProject(t);
    return {
        project_id: t,
        project_name: a(e?.name),
        application_id: e?.application_id ?? null,
        preview_application_id: e?.preview_application_id ?? null,
    };
}
function E(t, e) {
    let n = _.Ay.getProject(t),
        i = (e ? n?.preview_guild_id : n?.guild_id) ?? null,
        r = (e ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != r ? (0, l.i8)(i, r) : null };
}
function s(t, e) {
    var n;
    r.default.track(u.HAw.VIBEGRATION_TURN_RESULTED, {
        ...c(t),
        turn_result: e.result ?? null,
        turn_summary: a(e.detail ?? e.summary),
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
        _ = c(t),
        l = n ? _.preview_application_id : _.application_id,
        o = null != l ? i.A.getApplication(l) : null;
    r.default.track(u.HAw.VIBEGRATION_DEPLOYED, {
        ..._,
        project_summary: a(o?.description),
        is_preview: n,
        ...E(t, n),
    });
}
function d(t, e) {
    let { location: n, code: i, message: _, details: l, isPreview: o = !0 } = e;
    r.default.track(u.HAw.VIBEGRATION_ERRORED, {
        ...c(t),
        is_preview: o,
        ...E(t, o),
        error_location: n,
        error_code: i,
        error_message: a(_),
        error_details: a(l),
    });
}
function R(t, e) {
    let { entryPoint: n, publishState: i, surface: l, installScope: o, action: a } = e,
        c = _.Ay.getProject(t);
    r.default.track(u.HAw.VIBEGRATION_PUBLISH_ACTION_CLICKED, {
        project_id: t,
        application_id: c?.application_id ?? null,
        guild_id: "user" === o ? null : (c?.guild_id ?? null),
        entry_point: n,
        publish_state: i,
        surface: l,
        install_scope: o,
        action: a,
    });
}
