n.d(t, { Hy: () => d, hV: () => p, w2: () => E, xf: () => r, yJ: () => R });
var i = n(587895),
    l = n(174459),
    _ = n(260498),
    u = n(246338),
    a = n(652215);
let r = {
    BUILD_FAILED: "BUILD_FAILED",
    HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
    AGENT_ERROR: "AGENT_ERROR",
    PUBLISH_FAILED: "PUBLISH_FAILED",
    WS_OPEN_FAILED: "WS_OPEN_FAILED",
    SEND_FAILED: "SEND_FAILED",
    RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
    RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
};
function s(e) {
    return null == e || "" === e ? null : e.slice(0, 256);
}
function o(e) {
    let t = _.Ay.getProject(e);
    return {
        project_id: e,
        project_name: s(t?.name),
        application_id: t?.application_id ?? null,
        preview_application_id: t?.preview_application_id ?? null,
    };
}
function c(e, t) {
    let n = _.Ay.getProject(e),
        i = (t ? n?.preview_guild_id : n?.guild_id) ?? null,
        l = (t ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != l ? (0, u.i8)(i, l) : null };
}
function p(e, t) {
    var n;
    l.default.track(a.HAw.VIBEGRATION_TURN_RESULTED, {
        ...o(e),
        turn_result: t.result ?? null,
        turn_summary: s(t.detail ?? t.summary),
        turn_cost: t.cost_usd ?? null,
        ...(null == (n = t.tokens)
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
function E(e, t) {
    let { isPreview: n } = t,
        _ = o(e),
        u = n ? _.preview_application_id : _.application_id,
        r = null != u ? i.A.getApplication(u) : null;
    l.default.track(a.HAw.VIBEGRATION_DEPLOYED, {
        ..._,
        project_summary: s(r?.description),
        is_preview: n,
        ...c(e, n),
    });
}
function d(e, t) {
    let { location: n, code: i, message: _, details: u, isPreview: r = !0 } = t;
    l.default.track(a.HAw.VIBEGRATION_ERRORED, {
        ...o(e),
        is_preview: r,
        ...c(e, r),
        error_location: n,
        error_code: i,
        error_message: s(_),
        error_details: s(u),
    });
}
function R(e, t) {
    let { entryPoint: n, publishState: i, surface: u, installScope: r, action: s } = t,
        o = _.Ay.getProject(e);
    l.default.track(a.HAw.VIBEGRATION_PUBLISH_ACTION_CLICKED, {
        project_id: e,
        application_id: o?.application_id ?? null,
        guild_id: "user" === r ? null : (o?.guild_id ?? null),
        entry_point: n,
        publish_state: i,
        surface: u,
        install_scope: r,
        action: s,
    });
}
