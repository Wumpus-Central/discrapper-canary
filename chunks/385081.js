n.d(_, { Hy: () => d, hV: () => E, w2: () => s, xf: () => o, yJ: () => R });
var i = n(587895),
    e = n(174459),
    l = n(260498),
    u = n(246338),
    a = n(652215);
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
function r(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function c(t) {
    let _ = l.Ay.getProject(t);
    return {
        project_id: t,
        project_name: r(_?.name),
        application_id: _?.application_id ?? null,
        preview_application_id: _?.preview_application_id ?? null,
    };
}
function p(t, _) {
    let n = l.Ay.getProject(t),
        i = (_ ? n?.preview_guild_id : n?.guild_id) ?? null,
        e = (_ ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != e ? (0, u.i8)(i, e) : null };
}
function E(t, _) {
    var n;
    e.default.track(a.HAw.VIBEGRATION_TURN_RESULTED, {
        ...c(t),
        turn_result: _.result ?? null,
        turn_summary: r(_.detail ?? _.summary),
        turn_cost: _.cost_usd ?? null,
        ...(null == (n = _.tokens)
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
function s(t, _) {
    let { isPreview: n } = _,
        l = c(t),
        u = n ? l.preview_application_id : l.application_id,
        o = null != u ? i.A.getApplication(u) : null;
    e.default.track(a.HAw.VIBEGRATION_DEPLOYED, {
        ...l,
        project_summary: r(o?.description),
        is_preview: n,
        ...p(t, n),
    });
}
function d(t, _) {
    let { location: n, code: i, message: l, details: u, isPreview: o = !0 } = _;
    e.default.track(a.HAw.VIBEGRATION_ERRORED, {
        ...c(t),
        is_preview: o,
        ...p(t, o),
        error_location: n,
        error_code: i,
        error_message: r(l),
        error_details: r(u),
    });
}
function R(t, _) {
    let { entryPoint: n, publishState: i, surface: u, installScope: o, action: r } = _,
        c = l.Ay.getProject(t);
    e.default.track(a.HAw.VIBEGRATION_PUBLISH_ACTION_CLICKED, {
        project_id: t,
        application_id: c?.application_id ?? null,
        guild_id: "user" === o ? null : (c?.guild_id ?? null),
        entry_point: n,
        publish_state: i,
        surface: u,
        install_scope: o,
        action: r,
    });
}
